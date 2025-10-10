import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { 
  Lote, 
  CreateLoteDTO, 
  UpdateLoteDTO, 
  UpdateCantidadDTO,
  LotesResponse, 
  LoteResponse,
  LotesStats 
} from '../interfaces/lote.interface';

@Injectable({
  providedIn: 'root'
})
export class LotesService {
  public apiUrl = `${environment.apiUrl}/v1/lotes`;

  constructor(private http: HttpClient) {}

  getLotes(params?: {
    page?: number;
    limit?: number;
    estado?: string;
    tipo?: string;
    search?: string;
  }): Observable<any> {
    let httpParams = new HttpParams();
    
    if (params) {
      if (params.page) httpParams = httpParams.set('page', params.page.toString());
      if (params.limit) httpParams = httpParams.set('limit', params.limit.toString());
      if (params.estado) httpParams = httpParams.set('estado', params.estado);
      if (params.tipo) httpParams = httpParams.set('tipo', params.tipo);
      if (params.search) httpParams = httpParams.set('search', params.search);
    }


    return this.http.get<any>(this.apiUrl, { params: httpParams });
  }

  getLoteById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createLote(lote: CreateLoteDTO): Observable<LoteResponse> {
    return this.http.post<LoteResponse>(this.apiUrl, lote);
  }

  updateLote(id: number, lote: UpdateLoteDTO): Observable<LoteResponse> {
    return this.http.put<LoteResponse>(`${this.apiUrl}/${id}`, lote);
  }

  updateCantidad(id: number, data: UpdateCantidadDTO): Observable<LoteResponse> {
    return this.http.patch<LoteResponse>(`${this.apiUrl}/${id}/cantidad`, data);
  }

  deleteLote(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.apiUrl}/${id}`);
  }

  getStats(params?: {
    fechaInicio?: string;
    fechaFin?: string;
  }): Observable<LotesStats> {
    let httpParams = new HttpParams();
    
    if (params) {
      if (params.fechaInicio) httpParams = httpParams.set('fechaInicio', params.fechaInicio);
      if (params.fechaFin) httpParams = httpParams.set('fechaFin', params.fechaFin);
    }

    return this.http.get<LotesStats>(`${this.apiUrl}/stats`, { params: httpParams });
  }
}