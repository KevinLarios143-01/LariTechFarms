import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { SuperAdminService } from '../../../../shared/services/super-admin.service';

interface MatrixCell {
  assigned: boolean;
  id_role_module: number | null;
}

@Component({
  selector: 'app-role-access-matrix',
  standalone: true,
  imports: [SharedModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './role-access-matrix.component.html',
  styleUrls: ['./role-access-matrix.component.scss']
})
export class RoleAccessMatrixComponent implements OnInit {
  tenants: any[] = [];
  selectedTenantId: number | null = null;
  modules: any[] = [];
  roles: string[] = ['superadmin', 'admin', 'gerente', 'supervisor', 'vendedor', 'operador'];
  matrix: Record<string, Record<number, MatrixCell>> = {};
  loading = false;
  isSuperadmin = false;
  userTenantId: number | null = null;
  superAdminModuleId: number | null = null;

  constructor(
    private superAdminService: SuperAdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.detectUserRole();
    if (this.isSuperadmin) {
      this.loadTenants();
    } else {
      if (this.userTenantId) {
        this.selectedTenantId = this.userTenantId;
        this.loadMatrix(this.userTenantId);
      }
    }
  }

  private detectUserRole(): void {
    const token = localStorage.getItem('auth_token');
    if (!token) return;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.isSuperadmin = payload.rol === 'superadmin';
      this.userTenantId = payload.idTenant || null;
    } catch {
      // ignore parse errors
    }
  }

  loadTenants(): void {
    this.superAdminService.getCompanies().subscribe({
      next: (companies) => {
        this.tenants = companies;
      },
      error: () => {
        this.toastr.error('Error al cargar las empresas', 'Error');
      }
    });
  }

  onTenantChange(tenantId: number): void {
    if (!tenantId) {
      this.modules = [];
      this.matrix = {};
      return;
    }
    this.selectedTenantId = tenantId;
    this.loadMatrix(tenantId);
  }

  loadMatrix(tenantId: number): void {
    this.loading = true;
    this.modules = [];
    this.matrix = {};

    // Load module catalog first, then role-modules
    this.superAdminService.getModuleCatalog().subscribe({
      next: (catalogResponse) => {
        const allModules = (catalogResponse.data || []).filter((m: any) => m.is_active);
        this.modules = allModules;

        // Identify the "Super Admin" module ID
        const superAdminModule = allModules.find((m: any) => m.name === 'Super Admin');
        this.superAdminModuleId = superAdminModule ? superAdminModule.id_module : null;

        // Now load role-modules for this tenant
        this.superAdminService.getRoleModules(tenantId).subscribe({
          next: (response) => {
            this.buildMatrix(response.data || {});
            this.loading = false;
          },
          error: () => {
            this.toastr.error('Error al cargar la matriz de acceso', 'Error');
            this.loading = false;
          }
        });
      },
      error: () => {
        this.toastr.error('Error al cargar el catálogo de módulos', 'Error');
        this.loading = false;
      }
    });
  }

  private buildMatrix(data: Record<string, { modules: { id_role_module: number; id_module: number; module_name: string }[] }>): void {
    this.matrix = {};
    for (const role of this.roles) {
      this.matrix[role] = {};
      for (const mod of this.modules) {
        this.matrix[role][mod.id_module] = { assigned: false, id_role_module: null };
      }
      // Fill in assigned modules from API response
      const roleData = data[role];
      if (roleData && roleData.modules) {
        for (const rm of roleData.modules) {
          if (this.matrix[role][rm.id_module]) {
            this.matrix[role][rm.id_module] = { assigned: true, id_role_module: rm.id_role_module };
          }
        }
      }
    }
  }

  toggleAccess(role: string, moduleId: number): void {
    if (!this.selectedTenantId) return;

    const cell = this.matrix[role][moduleId];
    if (!cell) return;

    if (cell.assigned) {
      // Deactivate: DELETE
      if (cell.id_role_module === null) return;
      const previousState = { ...cell };
      cell.assigned = false;
      const revokeId = cell.id_role_module;
      cell.id_role_module = null;

      this.superAdminService.revokeRoleModule(revokeId).subscribe({
        next: () => {
          this.toastr.success('Acceso revocado correctamente', 'Éxito');
        },
        error: () => {
          // Revert
          cell.assigned = previousState.assigned;
          cell.id_role_module = previousState.id_role_module;
          this.toastr.error('Error al revocar el acceso', 'Error');
        }
      });
    } else {
      // Activate: POST
      const previousState = { ...cell };
      cell.assigned = true;

      this.superAdminService.assignRoleModule({
        role,
        id_module: moduleId,
        id_tenant: this.selectedTenantId
      }).subscribe({
        next: (response) => {
          cell.id_role_module = response.data?.id_role_module || null;
          this.toastr.success('Acceso asignado correctamente', 'Éxito');
        },
        error: () => {
          // Revert
          cell.assigned = previousState.assigned;
          cell.id_role_module = previousState.id_role_module;
          this.toastr.error('Error al asignar el acceso', 'Error');
        }
      });
    }
  }

  isCheckboxDisabled(role: string, moduleId: number): boolean {
    return moduleId === this.superAdminModuleId && role !== 'superadmin';
  }
}
