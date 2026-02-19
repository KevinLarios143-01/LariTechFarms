import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  Vehiculo,
  CreateVehiculoDTO,
  UpdateVehiculoDTO,
  UpdateEstadoDTO,
  VehiculoResponse,
  VehiculoStats
} from '../interfaces/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private apiUrl = `${environment.apiUrl}/v1/vehiculos`;

  constructor(private http: HttpClient) {}

  getVehiculos(params?: any): Observable<VehiculoResponse> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get<VehiculoResponse>(this.apiUrl, { params: httpParams });
  }

  getVehiculoById(id: number): Observable<{ success: boolean; data: Vehiculo }> {
    return this.http.get<{ success: boolean; data: Vehiculo }>(`${this.apiUrl}/${id}`);
  }

  createVehiculo(vehiculo: CreateVehiculoDTO): Observable<{ success: boolean; message: string; data: Vehiculo }> {
    return this.http.post<{ success: boolean; message: string; data: Vehiculo }>(this.apiUrl, vehiculo);
  }

  updateVehiculo(id: number, vehiculo: UpdateVehiculoDTO): Observable<{ success: boolean; message: string; data: Vehiculo }> {
    return this.http.put<{ success: boolean; message: string; data: Vehiculo }>(`${this.apiUrl}/${id}`, vehiculo);
  }

  updateEstado(id: number, estadoData: UpdateEstadoDTO): Observable<{ success: boolean; message: string; data: Vehiculo }> {
    return this.http.patch<{ success: boolean; message: string; data: Vehiculo }>(`${this.apiUrl}/${id}/estado`, estadoData);
  }

  deleteVehiculo(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.apiUrl}/${id}`);
  }

  getTipos(): Observable<{ success: boolean; data: string[] }> {
    return this.http.get<{ success: boolean; data: string[] }>(`${this.apiUrl}/tipos`);
  }

  getStats(): Observable<{ success: boolean; data: VehiculoStats }> {
    return this.http.get<{ success: boolean; data: VehiculoStats }>(`${this.apiUrl}/stats`);
  }
}
