import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface Asistencia {
  id: number;
  idEmpleado: number;
  fecha: string;
  horaEntrada: string;
  horaSalida?: string;
  estado?: string;
  observaciones?: string;
  idUsuarioRegistro?: number;
  empleado?: {
    nombre: string;
    apellido: string;
    puesto: string;
  };
}

export interface AsistenciaResponse {
  success: boolean;
  data: {
    data: Asistencia[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
  timestamp: string;
}

export interface AsistenciaStats {
  totalAsistencias: number;
  asistenciasHoy: number;
  empleadosPresentes: number;
  empleadosAusentes: number;
}

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  private readonly apiUrl = `${environment.apiUrl}/v1/asistencias`;

  constructor(private readonly http: HttpClient) {}

  getAsistencias(params?: any): Observable<AsistenciaResponse> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined) {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<AsistenciaResponse>(this.apiUrl, { params: httpParams });
  }

  getAsistenciaById(id: number): Observable<{ data: Asistencia }> {
    return this.http.get<{ data: Asistencia }>(`${this.apiUrl}/${id}`);
  }

  registrarAsistencia(asistencia: Partial<Asistencia>): Observable<Asistencia> {
    return this.http.post<Asistencia>(this.apiUrl, asistencia);
  }

  actualizarAsistencia(id: number, asistencia: Partial<Asistencia>): Observable<Asistencia> {
    return this.http.put<Asistencia>(`${this.apiUrl}/${id}`, asistencia);
  }

  registrarSalida(id: number, horaSalida: string): Observable<Asistencia> {
    return this.http.patch<Asistencia>(`${this.apiUrl}/${id}/salida`, { horaSalida });
  }

  getAsistenciasPorEmpleado(idEmpleado: number, params?: any): Observable<AsistenciaResponse> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined) {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<AsistenciaResponse>(`${this.apiUrl}/empleado/${idEmpleado}`, { params: httpParams });
  }

  getAsistenciaStats(): Observable<AsistenciaStats> {
    return this.http.get<any>(`${this.apiUrl}/stats`).pipe(
      map(response => response.data?.data || response.data || response)
    );
  }
}
