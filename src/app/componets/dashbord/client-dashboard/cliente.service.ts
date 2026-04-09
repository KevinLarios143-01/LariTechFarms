import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface Cliente {
  id: number;
  idTenant: number;
  nombre: string;
  telefono?: string;
  correo?: string;
  direccion?: string;
  nit?: string;
  estado: boolean;
  fechaRegistro: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = `${environment.apiUrl}/v1/clientes`;
  private readonly apiUrl = `${environment.apiUrl}/v1`;

  constructor(private readonly http: HttpClient) {}


  getClienteById(id: number): Observable<ApiResponse<Cliente>> {
    return this.http.get<ApiResponse<Cliente>>(`${this.baseUrl}/${id}`);
  }


  getClientes(page?: number, limit?: number): Observable<any> {
    let params = new HttpParams();
    if (page != null) {
      params = params.set('page', page.toString());
    }
    if (limit != null) {
      params = params.set('limit', limit.toString());
    }
    return this.http.get<any>(`${this.apiUrl}/clientes`, { params });
  }

  createCliente(cliente: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/clientes`, cliente);
  }

  updateCliente(id: number, cliente: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/clientes/${id}`, cliente);
  }

  activateCliente(id: number): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/clientes/${id}/activate`, {});
  }

  deactivateCliente(id: number): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/clientes/${id}/deactivate`, {});
  }
}