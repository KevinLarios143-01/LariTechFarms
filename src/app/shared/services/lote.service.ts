import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Lote, LoteResponse } from '../interfaces/lote';

export interface CreateLoteDTO {
  tipo: string;
  fechaInicio: string;
  fechaFin?: string;
  cantidad: number;
  galera: string;
  observaciones?: string;
}

export interface UpdateLoteDTO {
  tipo?: string;
  fechaInicio?: string;
  fechaFin?: string;
  cantidad?: number;
  galera?: string;
  estado?: string;
  observaciones?: string;
}

export interface LoteStats {
  totalLotes: number;
  lotesActivos: number;
  lotesCerrados: number;
  totalAves: number;
}

@Injectable({
  providedIn: 'root'
})
export class LoteService {
  private readonly apiUrl = `${environment.apiUrl}/v1/lotes`;

  constructor(private readonly http: HttpClient) {}

  getLotes(params?: any): Observable<LoteResponse> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get<LoteResponse>(this.apiUrl, { params: httpParams });
  }

  getLoteById(id: number): Observable<{ success: boolean; data: Lote }> {
    return this.http.get<{ success: boolean; data: Lote }>(`${this.apiUrl}/${id}`);
  }

  createLote(lote: CreateLoteDTO): Observable<{ success: boolean; message: string; data: Lote }> {
    return this.http.post<{ success: boolean; message: string; data: Lote }>(this.apiUrl, lote);
  }

  updateLote(id: number, lote: UpdateLoteDTO): Observable<{ success: boolean; message: string; data: Lote }> {
    return this.http.put<{ success: boolean; message: string; data: Lote }>(`${this.apiUrl}/${id}`, lote);
  }

  deleteLote(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.apiUrl}/${id}`);
  }

  cerrarLote(id: number): Observable<{ success: boolean; message: string; data: Lote }> {
    return this.http.patch<{ success: boolean; message: string; data: Lote }>(`${this.apiUrl}/${id}/cerrar`, {});
  }

  actualizarCantidad(id: number, cantidad: number, tipo: string, observaciones?: string): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${this.apiUrl}/${id}/actualizar-cantidad`, {
      cantidad,
      tipo,
      observaciones
    });
  }

  getStats(): Observable<{ success: boolean; data: LoteStats }> {
    return this.http.get<{ success: boolean; data: LoteStats }>(`${this.apiUrl}/stats`);
  }
}