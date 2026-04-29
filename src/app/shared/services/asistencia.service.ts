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

export type EstadoMarcaje = 'sin_marcar' | 'entrada_registrada' | 'almuerzo_inicio' | 'almuerzo_fin' | 'salida_registrada';

export interface DashboardPersonalResponse {
  success: boolean;
  data: {
    empleado: {
      id: number;
      nombre: string;
      apellido: string;
      telefono: string | null;
      correo: string | null;
      genero: string | null;
      fechaContratacion: string;
      puesto: string;
      puestoDetalle: {
        nombre: string;
        descripcion: string | null;
        salarioBase: number | null;
      } | null;
    };
    asistenciaHoy: {
      id: number;
      horaEntrada: string;
      horaSalida: string | null;
      estado: string;
      observaciones: string | null;
      estadoMarcaje: EstadoMarcaje;
    } | null;
    usuario: {
      rol: string;
      nombre: string;
      apellido: string;
    };
  };
}

export interface MarcarResponse {
  success: boolean;
  data: {
    id: number;
    horaEntrada: string;
    horaSalida: string | null;
    estado: string;
    observaciones: string | null;
    estadoMarcaje: EstadoMarcaje;
    horasTrabajadas?: {
      horas: number;
      minutos: number;
    };
  };
  message: string;
}

export interface HistorialParams {
  page?: number;
  limit?: number;
  fechaInicio?: string;
  fechaFin?: string;
}

export interface HistorialRecord {
  id: number;
  fecha: string;
  horaEntrada: string;
  horaSalida: string | null;
  estado: string | null;
  observaciones: string | null;
  almuerzoInicio: string | null;
  almuerzoFin: string | null;
  horasTrabajadas: { horas: number; minutos: number } | null;
}

export interface HistorialResponse {
  success: boolean;
  data: {
    data: HistorialRecord[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

export interface ResumenDiarioResponse {
  success: boolean;
  data: {
    resumen: {
      totalEmpleados: number;
      presentes: number;
      enAlmuerzo: number;
      jornadaCompleta: number;
      sinMarcar: number;
    };
    empleados: Array<{
      id: number;
      nombre: string;
      apellido: string;
      puesto: string;
      estadoMarcaje: EstadoMarcaje;
      horaEntrada: string | null;
      horaSalida: string | null;
    }>;
  };
}

export interface ReporteParams {
  tipo: 'semanal' | 'mensual';
  fechaInicio: string;
  fechaFin: string;
}

export interface ReporteResponse {
  success: boolean;
  data: {
    tipo: string;
    fechaInicio: string;
    fechaFin: string;
    totalDiasRango: number;
    empleados: Array<{
      empleado: {
        id: number;
        nombre: string;
        apellido: string;
        puesto: string;
      };
      diasTrabajados: number;
      diasAusentes: number;
      totalHoras: number;
      promedioHorasDiarias: number;
      promedioEntrada?: string;
      promedioSalida?: string;
      porcentajeAsistencia?: number;
    }>;
  };
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  private readonly apiUrl = `${environment.apiUrl}/v1/asistencias`;
  private readonly dashboardUrl = `${environment.apiUrl}/v1/dashboard`;

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

  getDashboardPersonal(): Observable<DashboardPersonalResponse> {
    return this.http.get<DashboardPersonalResponse>(`${this.dashboardUrl}/personal`);
  }

  marcarEntrada(): Observable<MarcarResponse> {
    return this.http.post<MarcarResponse>(`${this.apiUrl}/marcar-entrada`, {});
  }

  marcarAlmuerzo(): Observable<MarcarResponse> {
    return this.http.post<MarcarResponse>(`${this.apiUrl}/marcar-almuerzo`, {});
  }

  marcarSalida(): Observable<MarcarResponse> {
    return this.http.post<MarcarResponse>(`${this.apiUrl}/marcar-salida`, {});
  }

  getMiHistorial(params: HistorialParams): Observable<HistorialResponse> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        const value = (params as Record<string, any>)[key];
        if (value !== null && value !== undefined) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get<HistorialResponse>(`${this.apiUrl}/mi-historial`, { params: httpParams });
  }

  getResumenDiario(): Observable<ResumenDiarioResponse> {
    return this.http.get<ResumenDiarioResponse>(`${this.apiUrl}/resumen-diario`);
  }

  getReporte(params: ReporteParams): Observable<ReporteResponse> {
    let httpParams = new HttpParams()
      .set('tipo', params.tipo)
      .set('fechaInicio', params.fechaInicio)
      .set('fechaFin', params.fechaFin);
    return this.http.get<ReporteResponse>(`${this.apiUrl}/reporte`, { params: httpParams });
  }
}
