import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';

export interface Puesto {
  id: number;
  idTenant: number;
  nombre: string;
  descripcion?: string;
  salarioBase?: number;
  activo: boolean;
  createdAt: string;
  updatedAt: string;
  _count?: {
    empleados: number;
  };
}

export interface PuestoResponse {
  success: boolean;
  data: {
    data: Puesto[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

export interface CreatePuestoDTO {
  nombre: string;
  descripcion?: string;
  salarioBase?: number;
}

export interface UpdatePuestoDTO {
  nombre?: string;
  descripcion?: string;
  salarioBase?: number;
  activo?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PuestoService {
  private apiUrl = `${environment.apiUrl}/v1/puestos`;

  constructor(private http: HttpClient) {}

  getPuestos(params?: any): Observable<PuestoResponse> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get<PuestoResponse>(this.apiUrl, { params: httpParams });
  }

  getPuestoById(id: number): Observable<{ success: boolean; data: Puesto }> {
    return this.http.get<{ success: boolean; data: Puesto }>(`${this.apiUrl}/${id}`);
  }

  createPuesto(puesto: CreatePuestoDTO): Observable<{ success: boolean; message: string; data: Puesto }> {
    return this.http.post<{ success: boolean; message: string; data: Puesto }>(this.apiUrl, puesto);
  }

  updatePuesto(id: number, puesto: UpdatePuestoDTO): Observable<{ success: boolean; message: string; data: Puesto }> {
    return this.http.put<{ success: boolean; message: string; data: Puesto }>(`${this.apiUrl}/${id}`, puesto);
  }

  deletePuesto(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.apiUrl}/${id}`);
  }

  getEstadisticas(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/estadisticas`);
  }
}
