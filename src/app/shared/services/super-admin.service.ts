import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Company, ApiResponse, TenantResponse } from '../interfaces/tenant';
import { Plan, PlanResponse } from '../interfaces/plan';




@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {
  private readonly apiUrl = `${environment.apiUrl}/v1`;
  private readonly pythonApiUrl = environment.pythonApiUrl;

  constructor(private readonly http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/tenants`).pipe(
      map(response => response.data.data.map(tenant => this.mapTenantToCompany(tenant)))
    );
  }

  private mapTenantToCompany(tenant: TenantResponse): Company {
    return {
      id: tenant.id,
      img: `./assets/images/media/files/company/img${tenant.id}.png`,
      name: tenant.nombre,
      email: tenant.correo,
      package: 'Basic (Monthly)',
      packageBadge: 'Change',
      registeredBy: new Date(tenant.fechaRegistro).toLocaleDateString(),
      statusText: tenant.activo ? 'Active' : 'Inactive',
      status: tenant.activo ? 'success' : 'danger',
      telefono: tenant.telefono,
      direccion: tenant.direccion,
      nit: tenant.nit,
      activo: tenant.activo
    };
  }

  deleteCompany(id: number): Observable<boolean> {
    return this.http.delete<any>(`${this.apiUrl}/tenants/${id}`).pipe(
      map(() => true)
    );
  }

  updateCompany(company: Company): Observable<Company> {
    const tenantData = {
      nombre: company.name,
      correo: company.email,
      telefono: company.telefono,
      direccion: company.direccion,
      nit: company.nit,
      activo: company.activo
    };
    return this.http.put<TenantResponse>(`${this.apiUrl}/tenants/${company.id}`, tenantData).pipe(
      map(tenant => this.mapTenantToCompany(tenant))
    );
  }

  createCompany(company: Partial<Company>): Observable<Company> {
    const tenantData = {
      nombre: company.name,
      correo: company.email,
      telefono: company.telefono,
      direccion: company.direccion,
      nit: company.nit,
      activo: company.activo ?? true
    };
    return this.http.post<TenantResponse>(`${this.apiUrl}/tenants`, tenantData).pipe(
      map(tenant => this.mapTenantToCompany(tenant))
    );
  }

  getCompanyById(id: number): Observable<Company> {
    return this.http.get<TenantResponse>(`${this.apiUrl}/tenants/${id}`).pipe(
      map(tenant => this.mapTenantToCompany(tenant))
    );
  }

  getPlans(): Observable<Plan[]> {
    return this.http.get<PlanResponse>(`${this.apiUrl}/planes`).pipe(
      map(response => response.data.data)
    );
  }

  createPlan(plan: Partial<Plan>): Observable<Plan> {
    return this.http.post<Plan>(`${this.apiUrl}/planes`, plan);
  }

  updatePlan(plan: Plan): Observable<Plan> {
    return this.http.put<Plan>(`${this.apiUrl}/planes/${plan.id_plan}`, plan);
  }

  deletePlan(id: number): Observable<boolean> {
    return this.http.delete<any>(`${this.apiUrl}/planes/${id}`).pipe(
      map(() => true)
    );
  }

  getPlanById(id: number): Observable<Plan> {
    return this.http.get<Plan>(`${this.apiUrl}/planes/${id}`);
  }

  getEnabledModules(tenantId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/modules/enableddos?idTenant=${tenantId}`);
  }

  updateModuleStatus(tenantId: number, moduleId: number, isEnabled: boolean): Observable<any> {
    return this.http.post(`${this.apiUrl}/modules/updatedos`, {
      idTenant: tenantId,
      idModule: moduleId,
      isEnabled: isEnabled
    });
  }

  getModuleCatalog(): Observable<any> {
    return this.http.get(`${this.apiUrl}/module-catalog`);
  }

  createModuleCatalog(data: { name: string; description?: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/module-catalog`, data);
  }

  updateModuleCatalog(id: number, data: { name: string; description?: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/module-catalog/${id}`, data);
  }

  toggleModuleCatalogStatus(id: number, is_active: boolean): Observable<any> {
    return this.http.patch(`${this.apiUrl}/module-catalog/${id}/status`, { is_active });
  }

  deleteModuleCatalog(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/module-catalog/${id}`);
  }

  // --- Role Modules (Matriz de Acceso Rol-Módulo) ---

  getRoleModules(tenantId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/role-modules`, { params: { idTenant: tenantId.toString() } });
  }

  getRoleModulesByRole(role: string, tenantId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/role-modules/by-role`, {
      params: { role, idTenant: tenantId.toString() }
    });
  }

  assignRoleModule(data: { role: string; id_module: number; id_tenant: number }): Observable<any> {
    return this.http.post(`${this.apiUrl}/role-modules`, data);
  }

  revokeRoleModule(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/role-modules/${id}`);
  }

  bulkUpdateRoleModules(data: { role: string; id_tenant: number; module_ids: number[] }): Observable<any> {
    return this.http.put(`${this.apiUrl}/role-modules/bulk`, data);
  }

  // --- User Modules (Matriz de Acceso por Usuario) ---

  getUserModules(idUsuario: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user-modules`, { params: { idUsuario: idUsuario.toString() } });
  }

  assignUserModule(data: { id_usuario: number; id_module: number }): Observable<any> {
    return this.http.post(`${this.apiUrl}/user-modules`, data);
  }

  revokeUserModule(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user-modules/${id}`);
  }

  bulkUpdateUserModules(data: { id_usuario: number; module_ids: number[] }): Observable<any> {
    return this.http.put(`${this.apiUrl}/user-modules/bulk`, data);
  }

  // --- Route Catalog ---

  getRouteCatalog(): Observable<any> {
    return this.http.get(`${this.apiUrl}/route-catalog`);
  }

  createRouteCatalogEntry(data: { path: string; nombre: string; id_module: number }): Observable<any> {
    return this.http.post(`${this.apiUrl}/route-catalog`, data);
  }

  updateRouteCatalogEntry(id: number, data: { nombre?: string; activo?: boolean }): Observable<any> {
    return this.http.put(`${this.apiUrl}/route-catalog/${id}`, data);
  }

  // --- Route Permissions (por rol) ---

  getRoleRoutePermissions(role: string, tenantId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/route-permissions/by-role`, {
      params: { role, idTenant: tenantId.toString() }
    });
  }

  updateRoleRoutePermissions(data: { role: string; id_tenant: number; route_ids: number[] }): Observable<any> {
    return this.http.put(`${this.apiUrl}/route-permissions/by-role`, data);
  }

  // --- Route Permissions (por usuario) ---

  getUserRoutePermissions(idUsuario: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/route-permissions/by-user`, {
      params: { idUsuario: idUsuario.toString() }
    });
  }

  updateUserRoutePermissions(data: { id_usuario: number; route_ids: number[] }): Observable<any> {
    return this.http.put(`${this.apiUrl}/route-permissions/by-user`, data);
  }

  // --- Mis permisos de ruta ---

  getMyRoutePermissions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/route-permissions/me`);
  }
}
