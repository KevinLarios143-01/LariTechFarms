import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  GastoOperacion,
  CreateGastoOperacionDTO,
  UpdateGastoOperacionDTO,
  GastoOperacionResponse,
  GastoOperacionStats
} from '../interfaces/gasto-operacion';

@Injectable({
  providedIn: 'root'
})
export class GastoOperacionService {
  private apiUrl = `${environment.apiUrl}/v1/gastos-operacion`;

  constructor(private http: HttpClient) {}

  getGastos(params?: any): Observable<GastoOperacionResponse> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get<GastoOperacionResponse>(this.apiUrl, { params: httpParams });
  }

  getGastoById(id: number): Observable<{ success: boolean; data: GastoOperacion }> {
    return this.http.get<{ success: boolean; data: GastoOperacion }>(`${this.apiUrl}/${id}`);
  }

  createGasto(gasto: CreateGastoOperacionDTO): Observable<{ success: boolean; message: string; data: GastoOperacion }> {
    return this.http.post<{ success: boolean; message: string; data: GastoOperacion }>(this.apiUrl, gasto);
  }

  updateGasto(id: number, gasto: UpdateGastoOperacionDTO): Observable<{ success: boolean; message: string; data: GastoOperacion }> {
    return this.http.put<{ success: boolean; message: string; data: GastoOperacion }>(`${this.apiUrl}/${id}`, gasto);
  }

  deleteGasto(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.apiUrl}/${id}`);
  }

  getStats(params?: any): Observable<{ success: boolean; data: GastoOperacionStats }> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get<{ success: boolean; data: GastoOperacionStats }>(`${this.apiUrl}/stats`, { params: httpParams });
  }
}
