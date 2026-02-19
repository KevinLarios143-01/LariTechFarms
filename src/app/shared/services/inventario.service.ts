import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  InventarioGranja,
  CreateInventarioDTO,
  UpdateInventarioDTO,
  UpdateStockDTO,
  InventarioResponse,
  InventarioStats,
  AlertaStock
} from '../interfaces/inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private apiUrl = `${environment.apiUrl}/v1/inventario`;

  constructor(private http: HttpClient) {}

  getInventario(params?: any): Observable<InventarioResponse> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get<InventarioResponse>(this.apiUrl, { params: httpParams });
  }

  getInventarioById(id: number): Observable<{ success: boolean; data: InventarioGranja }> {
    return this.http.get<{ success: boolean; data: InventarioGranja }>(`${this.apiUrl}/${id}`);
  }

  createInventario(inventario: CreateInventarioDTO): Observable<{ success: boolean; message: string; data: InventarioGranja }> {
    return this.http.post<{ success: boolean; message: string; data: InventarioGranja }>(this.apiUrl, inventario);
  }

  updateInventario(id: number, inventario: UpdateInventarioDTO): Observable<{ success: boolean; message: string; data: InventarioGranja }> {
    return this.http.put<{ success: boolean; message: string; data: InventarioGranja }>(`${this.apiUrl}/${id}`, inventario);
  }

  updateStock(id: number, stockData: UpdateStockDTO): Observable<{ success: boolean; message: string; data: InventarioGranja }> {
    return this.http.patch<{ success: boolean; message: string; data: InventarioGranja }>(`${this.apiUrl}/${id}/stock`, stockData);
  }

  deleteInventario(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.apiUrl}/${id}`);
  }

  getCategorias(): Observable<{ success: boolean; data: string[] }> {
    return this.http.get<{ success: boolean; data: string[] }>(`${this.apiUrl}/categorias`);
  }

  getAlertas(): Observable<{ success: boolean; data: AlertaStock[] }> {
    return this.http.get<{ success: boolean; data: AlertaStock[] }>(`${this.apiUrl}/alertas`);
  }

  getStats(): Observable<{ success: boolean; data: InventarioStats }> {
    return this.http.get<{ success: boolean; data: InventarioStats }>(`${this.apiUrl}/stats`);
  }
}
