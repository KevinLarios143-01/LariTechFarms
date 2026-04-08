import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { SuperAdminService } from '../../../../shared/services/super-admin.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

interface MatrixCell {
  assigned: boolean;
  id_user_module: number | null;
}

@Component({
  selector: 'app-user-access-matrix',
  standalone: true,
  imports: [SharedModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './user-access-matrix.component.html',
  styleUrls: ['./user-access-matrix.component.scss']
})
export class UserAccessMatrixComponent implements OnInit {
  tenants: any[] = [];
  selectedTenantId: number | null = null;
  usuarios: any[] = [];
  selectedUsuarioId: number | null = null;
  selectedUsuario: any = null;
  roleModules: any[] = []; // Modules the user's role has access to
  matrix: Record<number, MatrixCell> = {};
  hasCustomConfig = false; // Whether user has custom user_modules
  loading = false;
  loadingUsuarios = false;
  saving = false;

  constructor(
    private superAdminService: SuperAdminService,
    private toastr: ToastrService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadTenants();
  }

  loadTenants(): void {
    this.superAdminService.getCompanies().subscribe({
      next: (companies) => { this.tenants = companies; },
      error: () => { this.toastr.error('Error al cargar empresas', 'Error'); }
    });
  }

  onTenantChange(tenantId: number): void {
    this.selectedUsuarioId = null;
    this.selectedUsuario = null;
    this.matrix = {};
    this.roleModules = [];
    if (!tenantId) { this.usuarios = []; return; }
    this.selectedTenantId = tenantId;
    this.loadUsuarios(tenantId);
  }

  loadUsuarios(tenantId: number): void {
    this.loadingUsuarios = true;
    this.http.get<any>(`${environment.apiUrl}/v1/usuarios`, {
      params: { idTenant: tenantId.toString(), limit: '200' }
    }).subscribe({
      next: (res) => {
        this.usuarios = res.data?.data || [];
        this.loadingUsuarios = false;
      },
      error: () => {
        this.toastr.error('Error al cargar usuarios', 'Error');
        this.loadingUsuarios = false;
      }
    });
  }

  onUsuarioChange(usuarioId: number): void {
    this.matrix = {};
    this.roleModules = [];
    if (!usuarioId) { this.selectedUsuario = null; return; }
    this.selectedUsuarioId = usuarioId;
    this.selectedUsuario = this.usuarios.find((u: any) => u.id === usuarioId) || null;
    this.loadMatrix();
  }

  loadMatrix(): void {
    if (!this.selectedUsuario || !this.selectedTenantId || !this.selectedUsuarioId) return;
    this.loading = true;

    const role = this.selectedUsuario.rol;
    const tenantId = this.selectedTenantId;
    const idUsuario = this.selectedUsuarioId;

    // 1. Get role modules for this user's role + tenant
    // 2. Get user_modules for this user
    // 3. Get module catalog for names/descriptions
    Promise.all([
      this.superAdminService.getRoleModulesByRole(role, tenantId).toPromise(),
      this.superAdminService.getUserModules(idUsuario).toPromise(),
      this.superAdminService.getModuleCatalog().toPromise()
    ]).then(([roleRes, userRes, catalogRes]) => {
      const allModules = (catalogRes?.data || []).filter((m: any) => m.is_active);
      const roleModuleNames: string[] = roleRes?.data?.modules || [];
      const userModules = userRes?.data?.modules || [];

      // Filter catalog to only modules this role has
      this.roleModules = allModules.filter((m: any) => roleModuleNames.includes(m.name));

      // Build matrix
      this.hasCustomConfig = userModules.length > 0;
      this.matrix = {};

      for (const mod of this.roleModules) {
        if (this.hasCustomConfig) {
          // User has custom config: only checked if in user_modules
          const um = userModules.find((u: any) => u.id_module === mod.id_module);
          this.matrix[mod.id_module] = {
            assigned: !!um,
            id_user_module: um?.id_user_module || null
          };
        } else {
          // No custom config: all role modules are enabled
          this.matrix[mod.id_module] = { assigned: true, id_user_module: null };
        }
      }

      this.loading = false;
    }).catch(() => {
      this.toastr.error('Error al cargar la matriz', 'Error');
      this.loading = false;
    });
  }

  toggleAccess(moduleId: number): void {
    if (!this.selectedUsuarioId || this.saving) return;
    const cell = this.matrix[moduleId];
    if (!cell) return;

    // If no custom config yet, we need to create one (bulk save all currently checked minus this one)
    if (!this.hasCustomConfig) {
      this.saving = true;
      cell.assigned = false;

      // Save all role modules EXCEPT the unchecked one
      const moduleIds = this.roleModules
        .filter((m: any) => this.matrix[m.id_module]?.assigned)
        .map((m: any) => m.id_module);

      this.superAdminService.bulkUpdateUserModules({
        id_usuario: this.selectedUsuarioId,
        module_ids: moduleIds
      }).subscribe({
        next: () => {
          this.hasCustomConfig = true;
          this.toastr.success('Configuración personalizada creada', 'Éxito', { timeOut: 3000, positionClass: 'toast-top-right' });
          this.saving = false;
          this.loadMatrix(); // Reload to get IDs
        },
        error: () => {
          cell.assigned = true;
          this.toastr.error('Error al guardar', 'Error');
          this.saving = false;
        }
      });
      return;
    }

    if (cell.assigned) {
      // Uncheck: DELETE
      if (cell.id_user_module === null) return;
      const prev = { ...cell };
      cell.assigned = false;
      const revokeId = cell.id_user_module;
      cell.id_user_module = null;

      this.superAdminService.revokeUserModule(revokeId).subscribe({
        next: () => {
          this.toastr.success('Módulo revocado', 'Éxito', { timeOut: 3000, positionClass: 'toast-top-right' });
          this.checkIfAllUnchecked();
        },
        error: () => {
          cell.assigned = prev.assigned;
          cell.id_user_module = prev.id_user_module;
          this.toastr.error('Error al revocar', 'Error');
        }
      });
    } else {
      // Check: POST
      const prev = { ...cell };
      cell.assigned = true;

      this.superAdminService.assignUserModule({
        id_usuario: this.selectedUsuarioId!,
        id_module: moduleId
      }).subscribe({
        next: (res) => {
          cell.id_user_module = res.data?.id_user_module || null;
          this.toastr.success('Módulo asignado', 'Éxito', { timeOut: 3000, positionClass: 'toast-top-right' });
        },
        error: () => {
          cell.assigned = prev.assigned;
          cell.id_user_module = prev.id_user_module;
          this.toastr.error('Error al asignar', 'Error');
        }
      });
    }
  }

  resetToRole(): void {
    if (!this.selectedUsuarioId || this.saving) return;
    this.saving = true;

    // Delete all user_modules → user inherits everything from role
    this.superAdminService.bulkUpdateUserModules({
      id_usuario: this.selectedUsuarioId,
      module_ids: []
    }).subscribe({
      next: () => {
        this.hasCustomConfig = false;
        this.toastr.success('Permisos restaurados al rol', 'Éxito', { timeOut: 3000, positionClass: 'toast-top-right' });
        this.saving = false;
        this.loadMatrix();
      },
      error: () => {
        this.toastr.error('Error al restaurar', 'Error');
        this.saving = false;
      }
    });
  }

  private checkIfAllUnchecked(): void {
    const anyChecked = this.roleModules.some((m: any) => this.matrix[m.id_module]?.assigned);
    if (!anyChecked && this.hasCustomConfig) {
      // All unchecked with custom config — warn
      this.toastr.warning('El usuario no tiene acceso a ningún módulo', 'Atención');
    }
  }

  getRolBadgeClass(rol: string): string {
    const map: Record<string, string> = {
      superadmin: 'bg-danger', admin: 'bg-primary', gerente: 'bg-info',
      supervisor: 'bg-warning', vendedor: 'bg-success', operador: 'bg-secondary'
    };
    return map[rol] || 'bg-secondary';
  }
}
