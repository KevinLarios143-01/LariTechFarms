import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Cliente, ClienteResponse, CreateClienteRequest, UpdateClienteRequest, ClienteStats, ClienteVenta } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private readonly apiUrl = `${environment.apiUrl}/v1`;

  constructor(private readonly http: HttpClient) {}

  getClientes(search?: string, page?: number, limit?: number): Observable<Cliente[]> {
    let params = new HttpParams();
    if (search) params = params.set('search', search);
    if (page) params = params.set('page', page.toString());
    if (limit) params = params.set('limit', limit.toString());
    
    return this.http.get<any>(`${this.apiUrl}/clientes`, { params }).pipe(
      map(response => {
        console.log('API Response:', response);
        // Manejar diferentes estructuras de respuesta
        if (response?.data?.data) {
          return response.data.data;
        } else if (response?.data && Array.isArray(response.data)) {
          return response.data;
        } else if (Array.isArray(response)) {
          return response;
        } else {
          console.warn('Unexpected response structure:', response);
          return [];
        }
      })
    );
  }

  createCliente(cliente: CreateClienteRequest): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}/clientes`, cliente);
  }

  updateCliente(id: number, cliente: UpdateClienteRequest): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiUrl}/clientes/${id}`, cliente);
  }

  deleteCliente(id: number): Observable<boolean> {
    return this.http.delete<any>(`${this.apiUrl}/clientes/${id}`).pipe(
      map(() => true)
    );
  }

  deactivateCliente(id: number): Observable<Cliente> {
    return this.http.patch<Cliente>(`${this.apiUrl}/clientes/${id}/deactivate`, {});
  }

  activateCliente(id: number): Observable<Cliente> {
    return this.http.patch<Cliente>(`${this.apiUrl}/clientes/${id}/activate`, {});
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/clientes/${id}`);
  }

  getClienteVentas(id: number): Observable<ClienteVenta[]> {
    return this.http.get<ClienteVenta[]>(`${this.apiUrl}/clientes/${id}/ventas`);
  }

  getClienteStats(fechaInicio?: string, fechaFin?: string): Observable<ClienteStats> {
    let params = new HttpParams();
    if (fechaInicio) params = params.set('fecha_inicio', fechaInicio);
    if (fechaFin) params = params.set('fecha_fin', fechaFin);
    
    return this.http.get<ClienteStats>(`${this.apiUrl}/clientes/estadisticas`, { params });
  }
}
