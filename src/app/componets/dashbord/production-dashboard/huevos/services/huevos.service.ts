import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { ControlHuevos, CreateControlHuevosDTO, UpdateControlHuevosDTO, ControlHuevosResponse, ControlHuevosStats } from '../interfaces/huevo.interface';

@Injectable({
  providedIn: 'root'
})
export class HuevosService {
  private apiUrl = `${environment.apiUrl}/control-huevos`;

  constructor(private http: HttpClient) {}

  getControles(params?: any): Observable<ControlHuevosResponse> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get<ControlHuevosResponse>(this.apiUrl, { params: httpParams });
  }

  getControlById(id: number): Observable<{ success: boolean; data: ControlHuevos }> {
    return this.http.get<{ success: boolean; data: ControlHuevos }>(`${this.apiUrl}/${id}`);
  }

  createControl(control: CreateControlHuevosDTO): Observable<{ success: boolean; message: string; data: ControlHuevos }> {
    return this.http.post<{ success: boolean; message: string; data: ControlHuevos }>(this.apiUrl, control);
  }

  updateControl(id: number, control: UpdateControlHuevosDTO): Observable<{ success: boolean; message: string; data: ControlHuevos }> {
    return this.http.put<{ success: boolean; message: string; data: ControlHuevos }>(`${this.apiUrl}/${id}`, control);
  }

  deleteControl(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.apiUrl}/${id}`);
  }

  getStats(params?: { fechaInicio?: string; fechaFin?: string }): Observable<{ success: boolean; data: ControlHuevosStats }> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key as keyof typeof params] !== null && params[key as keyof typeof params] !== undefined && params[key as keyof typeof params] !== '') {
          httpParams = httpParams.set(key, params[key as keyof typeof params]!);
        }
      });
    }
    return this.http.get<{ success: boolean; data: ControlHuevosStats }>(`${this.apiUrl}/stats`, { params: httpParams });
  }
}