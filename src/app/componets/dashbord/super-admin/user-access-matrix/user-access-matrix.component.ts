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
  modules: any[] = [];
  matrix: Record<number, MatrixCell> = {};
  loading = false;
  loadingUsuarios = false;
  superAdminModuleId: number | null = null;

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
    this.modules = [];
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
    if (!usuarioId) { this.selectedUsuario = null; return; }
    this.selectedUsuarioId = usuarioId;
    this.selectedUsuario = this.usuarios.find(u => u.id === usuarioId) || null;
    this.loadMatrix(usuarioId);
  }

  loadMatrix(idUsuario: number): void {
    this.loading = true;
    this.superAdminService.getModuleCatalog().subscribe({
      next: (catalogRes) => {
        this.modules = (catalogRes.data || []).filter((m: any) => m.is_active);
        const saModule = this.modules.find((m: any) => m.name === 'Super Admin');
        this.superAdminModuleId = saModule ? saModule.id_module : null;

        this.superAdminService.getUserModules(idUsuario).subscribe({
          next: (res) => {
            this.buildMatrix(res.data?.modules || []);
            this.loading = false;
          },
          error: () => {
            this.buildMatrix([]);
            this.loading = false;
            this.toastr.error('Error al cargar módulos del usuario', 'Error');
          }
        });
      },
      error: () => {
        this.toastr.error('Error al cargar catálogo de módulos', 'Error');
        this.loading = false;
      }
    });
  }

  private buildMatrix(userModules: { id_user_module: number; id_module: number; module_name: string }[]): void {
    this.matrix = {};
    for (const mod of this.modules) {
      this.matrix[mod.id_module] = { assigned: false, id_user_module: null };
    }
    for (const um of userModules) {
      if (this.matrix[um.id_module]) {
        this.matrix[um.id_module] = { assigned: true, id_user_module: um.id_user_module };
      }
    }
  }

  toggleAccess(moduleId: number): void {
    if (!this.selectedUsuarioId) return;
    const cell = this.matrix[moduleId];
    if (!cell) return;

    if (cell.assigned) {
      if (cell.id_user_module === null) return;
      const prev = { ...cell };
      cell.assigned = false;
      const revokeId = cell.id_user_module;
      cell.id_user_module = null;

      this.superAdminService.revokeUserModule(revokeId).subscribe({
        next: () => { this.toastr.success('Módulo revocado', 'Éxito', { timeOut: 3000, positionClass: 'toast-top-right' }); },
        error: () => {
          cell.assigned = prev.assigned;
          cell.id_user_module = prev.id_user_module;
          this.toastr.error('Error al revocar módulo', 'Error');
        }
      });
    } else {
      const prev = { ...cell };
      cell.assigned = true;

      this.superAdminService.assignUserModule({
        id_usuario: this.selectedUsuarioId,
        id_module: moduleId
      }).subscribe({
        next: (res) => {
          cell.id_user_module = res.data?.id_user_module || null;
          this.toastr.success('Módulo asignado', 'Éxito', { timeOut: 3000, positionClass: 'toast-top-right' });
        },
        error: () => {
          cell.assigned = prev.assigned;
          cell.id_user_module = prev.id_user_module;
          this.toastr.error('Error al asignar módulo', 'Error');
        }
      });
    }
  }

  isCheckboxDisabled(moduleId: number): boolean {
    if (!this.selectedUsuario) return true;
    return moduleId === this.superAdminModuleId && this.selectedUsuario.rol !== 'superadmin';
  }

  getRolBadgeClass(rol: string): string {
    const map: Record<string, string> = {
      superadmin: 'bg-danger', admin: 'bg-primary', gerente: 'bg-info',
      supervisor: 'bg-warning', vendedor: 'bg-success', operador: 'bg-secondary'
    };
    return map[rol] || 'bg-secondary';
  }
}
