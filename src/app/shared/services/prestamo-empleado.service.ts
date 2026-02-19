import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface PrestamoEmpleado {
  id: number;
  idEmpleado: number;
  fecha: string;
  monto: string;
  descripcion?: string;
  estado: string;
  cuotas?: number;
  idUsuario?: number;
  empleado?: {
    nombre: string;
    apellido: string;
    puesto: string;
  };
}

export interface PrestamoEmpleadoResponse {
  success: boolean;
  data: {
    data: PrestamoEmpleado[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
  timestamp: string;
}

export interface PrestamoStats {
  totalPrestamos: number;
  prestamosActivos: number;
  prestamosPagados: number;
  montoTotal: string;
  montoPendiente: string;
}

@Injectable({
  providedIn: 'root'
})
export class PrestamoEmpleadoService {
  private readonly apiUrl = `${environment.apiUrl}/v1/prestamos`;

  constructor(private readonly http: HttpClient) {}

  getPrestamos(params?: any): Observable<PrestamoEmpleadoResponse> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined) {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<PrestamoEmpleadoResponse>(this.apiUrl, { params: httpParams });
  }

  getPrestamoById(id: number): Observable<{ data: PrestamoEmpleado }> {
    return this.http.get<{ data: PrestamoEmpleado }>(`${this.apiUrl}/${id}`);
  }

  crearPrestamo(prestamo: Partial<PrestamoEmpleado>): Observable<PrestamoEmpleado> {
    return this.http.post<PrestamoEmpleado>(this.apiUrl, prestamo);
  }

  actualizarPrestamo(id: number, prestamo: Partial<PrestamoEmpleado>): Observable<PrestamoEmpleado> {
    return this.http.put<PrestamoEmpleado>(`${this.apiUrl}/${id}`, prestamo);
  }

  cambiarEstado(id: number, estado: string): Observable<PrestamoEmpleado> {
    return this.http.patch<PrestamoEmpleado>(`${this.apiUrl}/${id}/estado`, { estado });
  }

  getPrestamosPorEmpleado(idEmpleado: number): Observable<PrestamoEmpleadoResponse> {
    return this.http.get<PrestamoEmpleadoResponse>(`${this.apiUrl}/empleado/${idEmpleado}`);
  }

  getPrestamoStats(): Observable<PrestamoStats> {
    return this.http.get<any>(`${this.apiUrl}/stats`).pipe(
      map(response => response.data?.data || response.data || response)
    );
  }
}
