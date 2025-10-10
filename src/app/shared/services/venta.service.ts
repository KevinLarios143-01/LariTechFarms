import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Venta, VentaResponse, CreateVentaRequest, UpdateVentaRequest, UpdateEstadoDTO, AnularVentaDTO, VentasStats } from '../interfaces/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private readonly apiUrl = `${environment.apiUrl}/v1`;

  constructor(private readonly http: HttpClient) {}

  getVentas(params?: {
    page?: number;
    limit?: number;
    estado?: string;
    fechaDesde?: string;
    fechaHasta?: string;
  }): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key as keyof typeof params];
        if (value !== undefined && value !== null) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/ventas`, { params: httpParams });
  }

  getVentaById(id: number): Observable<{data: Venta}> {
    return this.http.get<{data: Venta}>(`${this.apiUrl}/ventas/${id}`);
  }

  createVenta(venta: CreateVentaRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/ventas`, venta);
  }

  updateVenta(id: number, venta: UpdateVentaRequest): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/ventas/${id}`, venta);
  }

  updateVentaEstado(id: number, data: UpdateEstadoDTO): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/ventas/${id}/estado`, data);
  }

  anularVenta(id: number, data: AnularVentaDTO): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/ventas/${id}/anular`, data);
  }

  deleteVenta(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/ventas/${id}`);
  }

  getVentasByCliente(clienteId: number, params?: {
    page?: number;
    limit?: number;
    estado?: string;
    fechaDesde?: string;
    fechaHasta?: string;
  }): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key as keyof typeof params];
        if (value !== undefined && value !== null) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/ventas/cliente/${clienteId}`, { params: httpParams });
  }

  getVentasEstadisticas(params?: {
    fechaDesde?: string;
    fechaHasta?: string;
  }): Observable<{ data: VentasStats }> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key as keyof typeof params];
        if (value !== undefined && value !== null) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get<{ data: VentasStats }>(`${this.apiUrl}/ventas/estadisticas`, { params: httpParams });
  }
}