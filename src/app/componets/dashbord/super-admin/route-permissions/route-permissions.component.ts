import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { SuperAdminService } from '../../../../shared/services/super-admin.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

interface RouteEntry {
  id_route: number;
  path: string;
  nombre: string;
  activo: boolean;
  editing?: boolean;
  editNombre?: string;
  editActivo?: boolean;
}

interface ModuleGroup {
  moduleName: string;
  id_module: number;
  routes: RouteEntry[];
}

@Component({
  selector: 'app-route-permissions',
  standalone: true,
  imports: [SharedModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './route-permissions.component.html',
  styleUrls: ['./route-permissions.component.scss']
})
export class RoutePermissionsComponent implements OnInit {
  // Tenant selector
  tenants: any[] = [];
  selectedTenantId: number | null = null;

  // View toggle
  viewMode: 'role' | 'user' = 'role';

  // Route catalog grouped by module
  moduleGroups: ModuleGroup[] = [];

  // Roles
  roles: string[] = ['superadmin', 'admin', 'gerente', 'supervisor', 'vendedor', 'operador'];

  // Role view: matrix[role][id_route] = checked
  roleMatrix: Record<string, Record<number, boolean>> = {};
  // Role-module access: roleModuleAccess[role] = Set of module names the role has access to
  roleModuleAccess: Record<string, Set<string>> = {};

  // User view
  usuarios: any[] = [];
  selectedUsuarioId: number | null = null;
  selectedUsuario: any = null;
  userRouteChecked: Record<number, boolean> = {};
  loadingUsuarios = false;

  // State
  loading = false;
  saving = false;

  // Add route form
  showAddRouteForm = false;
  newRoute = { path: '', nombre: '', id_module: 0 };
  modulesForSelect: { id_module: number; name: string }[] = [];

  constructor(
    private superAdminService: SuperAdminService,
    private toastr: ToastrService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadTenants();
  }

  // --- Tenant ---

  loadTenants(): void {
    this.superAdminService.getCompanies().subscribe({
      next: (companies) => { this.tenants = companies; },
      error: () => { this.toastr.error('Error al cargar empresas', 'Error'); }
    });
  }

  onTenantChange(tenantId: number): void {
    this.moduleGroups = [];
    this.roleMatrix = {};
    this.roleModuleAccess = {};
    this.selectedUsuarioId = null;
    this.selectedUsuario = null;
    this.userRouteChecked = {};
    this.usuarios = [];
    if (!tenantId) return;
    this.selectedTenantId = tenantId;
    this.loadData();
  }

  // --- View toggle ---

  setViewMode(mode: 'role' | 'user'): void {
    this.viewMode = mode;
    if (this.selectedTenantId) {
      this.loadData();
    }
  }

  // --- Load data ---

  loadData(): void {
    if (!this.selectedTenantId) return;
    this.loading = true;
    this.moduleGroups = [];

    this.superAdminService.getRouteCatalog().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.moduleGroups = [];
          this.modulesForSelect = [];
          for (const [moduleName, moduleData] of Object.entries(res.data) as [string, any][]) {
            this.moduleGroups.push({
              moduleName,
              id_module: moduleData.id_module,
              routes: (moduleData.routes || []).map((r: any) => ({ ...r, editing: false }))
            });
            this.modulesForSelect.push({ id_module: moduleData.id_module, name: moduleName });
          }
        }

        if (this.viewMode === 'role') {
          this.loadRoleView();
        } else {
          this.loadUsuarios(this.selectedTenantId!);
          this.loading = false;
        }
      },
      error: () => {
        this.toastr.error('Error al cargar catálogo de rutas', 'Error');
        this.loading = false;
      }
    });
  }

  // --- Role View ---

  private loadRoleView(): void {
    if (!this.selectedTenantId) return;

    // First load role-module access for all roles
    this.superAdminService.getRoleModules(this.selectedTenantId).subscribe({
      next: (rmRes) => {
        this.roleModuleAccess = {};
        const data = rmRes?.data || {};
        for (const role of this.roles) {
          this.roleModuleAccess[role] = new Set<string>();
          const roleData = data[role];
          if (roleData?.modules) {
            for (const m of roleData.modules) {
              this.roleModuleAccess[role].add(m.module_name);
            }
          }
        }

        // Now load route permissions for each role
        this.roleMatrix = {};
        let completed = 0;
        const total = this.roles.length;

        for (const role of this.roles) {
          this.roleMatrix[role] = {};
          this.superAdminService.getRoleRoutePermissions(role, this.selectedTenantId!).subscribe({
            next: (permRes) => {
              const routeIds: number[] = permRes?.data?.route_ids || [];
              for (const id of routeIds) {
                this.roleMatrix[role][id] = true;
              }
              completed++;
              if (completed === total) this.loading = false;
            },
            error: () => {
              completed++;
              if (completed === total) this.loading = false;
            }
          });
        }
      },
      error: () => {
        this.toastr.error('Error al cargar módulos de roles', 'Error');
        this.loading = false;
      }
    });
  }

  isRoleRouteChecked(role: string, routeId: number): boolean {
    return !!this.roleMatrix[role]?.[routeId];
  }

  isRoleModuleDisabled(role: string, moduleName: string): boolean {
    return !this.roleModuleAccess[role]?.has(moduleName);
  }

  toggleRoleRoute(role: string, routeId: number, moduleName: string): void {
    if (!this.selectedTenantId || this.saving) return;
    if (this.isRoleModuleDisabled(role, moduleName)) return;

    const wasChecked = this.isRoleRouteChecked(role, routeId);
    // Optimistic update
    if (wasChecked) {
      delete this.roleMatrix[role][routeId];
    } else {
      this.roleMatrix[role][routeId] = true;
    }

    // Collect all checked route_ids for this role
    const routeIds = Object.keys(this.roleMatrix[role])
      .filter(k => this.roleMatrix[role][+k])
      .map(k => +k);

    this.saving = true;
    this.superAdminService.updateRoleRoutePermissions({
      role,
      id_tenant: this.selectedTenantId,
      route_ids: routeIds
    }).subscribe({
      next: () => {
        this.toastr.success('Permisos actualizados', 'Éxito');
        this.saving = false;
      },
      error: () => {
        // Revert
        if (wasChecked) {
          this.roleMatrix[role][routeId] = true;
        } else {
          delete this.roleMatrix[role][routeId];
        }
        this.toastr.error('Error al actualizar permisos', 'Error');
        this.saving = false;
      }
    });
  }

  // --- User View ---

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
    this.userRouteChecked = {};
    if (!usuarioId) { this.selectedUsuario = null; return; }
    this.selectedUsuarioId = usuarioId;
    this.selectedUsuario = this.usuarios.find((u: any) => u.id === usuarioId) || null;
    this.loadUserRoutePermissions();
  }

  private loadUserRoutePermissions(): void {
    if (!this.selectedUsuarioId) return;
    this.loading = true;
    this.superAdminService.getUserRoutePermissions(this.selectedUsuarioId).subscribe({
      next: (res) => {
        this.userRouteChecked = {};
        const routeIds: number[] = res?.data?.route_ids || [];
        for (const id of routeIds) {
          this.userRouteChecked[id] = true;
        }
        this.loading = false;
      },
      error: () => {
        this.toastr.error('Error al cargar permisos del usuario', 'Error');
        this.loading = false;
      }
    });
  }

  isUserRouteChecked(routeId: number): boolean {
    return !!this.userRouteChecked[routeId];
  }

  toggleUserRoute(routeId: number): void {
    if (!this.selectedUsuarioId || this.saving) return;

    const wasChecked = this.isUserRouteChecked(routeId);
    if (wasChecked) {
      delete this.userRouteChecked[routeId];
    } else {
      this.userRouteChecked[routeId] = true;
    }

    const routeIds = Object.keys(this.userRouteChecked)
      .filter(k => this.userRouteChecked[+k])
      .map(k => +k);

    this.saving = true;
    this.superAdminService.updateUserRoutePermissions({
      id_usuario: this.selectedUsuarioId,
      route_ids: routeIds
    }).subscribe({
      next: () => {
        this.toastr.success('Permisos del usuario actualizados', 'Éxito');
        this.saving = false;
      },
      error: () => {
        if (wasChecked) {
          this.userRouteChecked[routeId] = true;
        } else {
          delete this.userRouteChecked[routeId];
        }
        this.toastr.error('Error al actualizar permisos', 'Error');
        this.saving = false;
      }
    });
  }

  getRolBadgeClass(rol: string): string {
    const map: Record<string, string> = {
      superadmin: 'bg-danger', admin: 'bg-primary', gerente: 'bg-info',
      supervisor: 'bg-warning', vendedor: 'bg-success', operador: 'bg-secondary'
    };
    return map[rol] || 'bg-secondary';
  }

  // --- Catalog Management ---

  toggleAddRouteForm(): void {
    this.showAddRouteForm = !this.showAddRouteForm;
    if (this.showAddRouteForm) {
      this.newRoute = { path: '', nombre: '', id_module: this.modulesForSelect[0]?.id_module || 0 };
    }
  }

  createRoute(): void {
    if (!this.newRoute.path || !this.newRoute.nombre || !this.newRoute.id_module) {
      this.toastr.warning('Complete todos los campos', 'Atención');
      return;
    }
    this.saving = true;
    this.superAdminService.createRouteCatalogEntry(this.newRoute).subscribe({
      next: () => {
        this.toastr.success('Ruta creada correctamente', 'Éxito');
        this.showAddRouteForm = false;
        this.saving = false;
        this.loadData();
      },
      error: (err) => {
        const msg = err?.error?.error || 'Error al crear la ruta';
        this.toastr.error(msg, 'Error');
        this.saving = false;
      }
    });
  }

  startEditRoute(route: RouteEntry): void {
    route.editing = true;
    route.editNombre = route.nombre;
    route.editActivo = route.activo;
  }

  cancelEditRoute(route: RouteEntry): void {
    route.editing = false;
  }

  saveEditRoute(route: RouteEntry): void {
    this.saving = true;
    this.superAdminService.updateRouteCatalogEntry(route.id_route, {
      nombre: route.editNombre,
      activo: route.editActivo
    }).subscribe({
      next: () => {
        route.nombre = route.editNombre!;
        route.activo = route.editActivo!;
        route.editing = false;
        this.toastr.success('Ruta actualizada', 'Éxito');
        this.saving = false;
      },
      error: () => {
        this.toastr.error('Error al actualizar la ruta', 'Error');
        this.saving = false;
      }
    });
  }
}
