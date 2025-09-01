import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface Company {
  id: number;
  img: string;
  name: string;
  email: string;
  package: string;
  packageBadge: string;
  registeredBy: string;
  statusText: string;
  status: string;
  telefono?: string;
  direccion?: string;
  nit?: string;
  activo?: boolean;
}

interface TenantResponse {
  id_tenant: number;
  nombre: string;
  correo: string;
  telefono: string;
  fecha_registro: string;
  direccion: string;
  nit: string;
  activo: boolean;
}

interface ApiResponse {
  success: boolean;
  data: {
    data: TenantResponse[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {
  private apiUrl = `${environment.apiUrl}/v1`;

  constructor(private http: HttpClient) {}

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
}