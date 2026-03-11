import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  InventarioGranja,
  InventarioGranjaResponse,
  CreateInventarioGranjaDTO,
  UpdateInventarioGranjaDTO,
  UpdateStockDTO,
  InventarioGranjaStats
} from '../interfaces/inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioGranjaService {
  private readonly apiUrl = `${environment.apiUrl}/v1/inventario`;

  constructor(private readonly http: HttpClient) {}

  getInventario(params?: {
    page?: number;
    limit?: number;
    search?: string;
    categoria?: string;
  }): Observable<InventarioGranjaResponse> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key as keyof typeof params];
        if (value !== undefined && value !== null) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get<InventarioGranjaResponse>(this.apiUrl, { params: httpParams });
  }

  getInventarioById(id: number): Observable<{ data: InventarioGranja }> {
    return this.http.get<{ data: InventarioGranja }>(`${this.apiUrl}/${id}`);
  }

  createInventario(data: CreateInventarioGranjaDTO): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateInventario(id: number, data: UpdateInventarioGranjaDTO): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteInventario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateStock(id: number, data: UpdateStockDTO): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}/stock`, data);
  }

  getCategorias(): Observable<{ data: Array<{ categoria: string; _count: { categoria: number } }> }> {
    return this.http.get<any>(`${this.apiUrl}/categorias`);
  }

  getAlertas(): Observable<{ data: InventarioGranja[] }> {
    return this.http.get<any>(`${this.apiUrl}/alertas`);
  }

  getEstadisticas(): Observable<{ data: InventarioGranjaStats }> {
    return this.http.get<any>(`${this.apiUrl}/stats`);
  }
}
