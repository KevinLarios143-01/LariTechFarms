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

  constructor(private readonly http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/tenants`).pipe(
      map(response => response.data.data.map(tenant => this.mapTenantToCompany(tenant)))
    );
  }

  private mapTenantToCompany(tenant: TenantResponse): Company {
    return {
      id: tenant.id_tenant,
      img: `./assets/images/media/files/company/img${tenant.id_tenant}.png`,
      name: tenant.nombre,
      email: tenant.correo,
      package: 'Basic (Monthly)',
      packageBadge: 'Change',
      registeredBy: new Date(tenant.fecha_registro).toLocaleDateString(),
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
}
