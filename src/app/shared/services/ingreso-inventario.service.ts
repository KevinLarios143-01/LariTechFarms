import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  IngresoInventario,
  IngresoInventarioResponse,
  CreateIngresoRequest,
  ClasificacionMultipleRequest,
  StockLote,
  InventarioStats
} from '../interfaces/inventario';

@Injectable({
  providedIn: 'root'
})
export class IngresoInventarioService {
  private readonly apiUrl = `${environment.apiUrl}/v1`;

  constructor(private readonly http: HttpClient) {}

  getIngresos(params?: {
    page?: number;
    limit?: number;
    idLote?: number;
    idProducto?: number;
    fechaInicio?: string;
    fechaFin?: string;
  }): Observable<IngresoInventarioResponse> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key as keyof typeof params];
        if (value !== undefined && value !== null) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get<IngresoInventarioResponse>(`${this.apiUrl}/ingreso-inventario`, { params: httpParams });
  }

  getIngresoById(id: number): Observable<{ data: IngresoInventario }> {
    return this.http.get<{ data: IngresoInventario }>(`${this.apiUrl}/ingreso-inventario/${id}`);
  }

  createIngreso(ingreso: CreateIngresoRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/ingreso-inventario`, ingreso);
  }

  deleteIngreso(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/ingreso-inventario/${id}`);
  }

  getStockPorLote(idLote?: number): Observable<{ data: StockLote[] }> {
    let httpParams = new HttpParams();
    if (idLote) {
      httpParams = httpParams.set('idLote', idLote.toString());
    }
    return this.http.get<{ data: StockLote[] }>(`${this.apiUrl}/ingreso-inventario/stock-lote`, { params: httpParams });
  }

  getEstadisticas(params?: {
    fechaInicio?: string;
    fechaFin?: string;
  }): Observable<{ data: InventarioStats }> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key as keyof typeof params];
        if (value !== undefined && value !== null) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get<{ data: InventarioStats }>(`${this.apiUrl}/ingreso-inventario/estadisticas`, { params: httpParams });
  }

  registrarClasificacionMultiple(data: ClasificacionMultipleRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/ingreso-inventario/clasificacion-multiple`, data);
  }
}
