import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Cliente {
  id?: number;
  No?: string;
  name: string;
  img?: string;
  email: string;
  project?: number;
  statusText?: string;
  status?: string;
  phone?: string;
  address?: string;
  company?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ClienteResponse {
  success: boolean;
  data: Cliente[];
  message?: string;
  total?: number;
}

export interface ClienteFilter {
  status?: string;
  dateFrom?: string;
  dateTo?: string;
  search?: string;
  page?: number;
  limit?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = `${environment.apiUrl}/clientes`;

  constructor(private http: HttpClient) { }

  // Obtener todos los clientes
  getClientes(filters?: ClienteFilter): Observable<ClienteResponse> {
    let params = new HttpParams();
    
    if (filters) {
      if (filters.status) params = params.set('status', filters.status);
      if (filters.dateFrom) params = params.set('dateFrom', filters.dateFrom);
      if (filters.dateTo) params = params.set('dateTo', filters.dateTo);
      if (filters.search) params = params.set('search', filters.search);
      if (filters.page) params = params.set('page', filters.page.toString());
      if (filters.limit) params = params.set('limit', filters.limit.toString());
    }

    return this.http.get<ClienteResponse>(this.apiUrl, { params });
  }

  // Obtener cliente por ID
  getClienteById(id: number): Observable<{ success: boolean; data: Cliente; message?: string }> {
    return this.http.get<{ success: boolean; data: Cliente; message?: string }>(`${this.apiUrl}/${id}`);
  }

  // Crear nuevo cliente
  createCliente(cliente: Cliente): Observable<{ success: boolean; data: Cliente; message?: string }> {
    return this.http.post<{ success: boolean; data: Cliente; message?: string }>(this.apiUrl, cliente);
  }

  // Actualizar cliente
  updateCliente(id: number, cliente: Partial<Cliente>): Observable<{ success: boolean; data: Cliente; message?: string }> {
    return this.http.put<{ success: boolean; data: Cliente; message?: string }>(`${this.apiUrl}/${id}`, cliente);
  }

  // Eliminar cliente
  deleteCliente(id: number): Observable<{ success: boolean; message?: string }> {
    return this.http.delete<{ success: boolean; message?: string }>(`${this.apiUrl}/${id}`);
  }

  // Cambiar estado del cliente
  changeStatus(id: number, status: string): Observable<{ success: boolean; data: Cliente; message?: string }> {
    return this.http.patch<{ success: boolean; data: Cliente; message?: string }>(`${this.apiUrl}/${id}/status`, { status });
  }

  // Obtener estadísticas de clientes
  getClienteStats(): Observable<{ success: boolean; data: any; message?: string }> {
    return this.http.get<{ success: boolean; data: any; message?: string }>(`${this.apiUrl}/stats`);
  }

  // Buscar clientes
  searchClientes(query: string): Observable<ClienteResponse> {
    const params = new HttpParams().set('search', query);
    return this.http.get<ClienteResponse>(`${this.apiUrl}/search`, { params });
  }

  // Obtener clientes activos
  getActiveClientes(): Observable<ClienteResponse> {
    const params = new HttpParams().set('status', 'active');
    return this.http.get<ClienteResponse>(this.apiUrl, { params });
  }

  // Obtener clientes inactivos
  getInactiveClientes(): Observable<ClienteResponse> {
    const params = new HttpParams().set('status', 'inactive');
    return this.http.get<ClienteResponse>(this.apiUrl, { params });
  }
}
