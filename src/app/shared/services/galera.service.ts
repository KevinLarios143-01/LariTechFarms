import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Galera {
  id: number;
  idTenant: number;
  nombre: string;
  capacidad?: number;
  tipo?: string;
  estado?: string;
  ubicacion?: string;
  observaciones?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateGaleraDTO {
  nombre: string;
  capacidad?: number;
  tipo?: string;
  estado?: string;
  ubicacion?: string;
  observaciones?: string;
}

export interface UpdateGaleraDTO {
  nombre?: string;
  capacidad?: number;
  tipo?: string;
  estado?: string;
  ubicacion?: string;
  observaciones?: string;
}

export interface GaleraStats {
  totalGaleras: number;
  galerasActivas: number;
  galerasInactivas: number;
  capacidadTotal: number;
  capacidadUtilizada: number;
  lotesActivos: number;
}

export interface GaleraResponse {
  success: boolean;
  data: {
    data: Galera[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class GaleraService {
  private readonly apiUrl = `${environment.apiUrl}/v1/galeras`;

  constructor(private readonly http: HttpClient) {}

  getGaleras(params?: any): Observable<GaleraResponse> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get<GaleraResponse>(this.apiUrl, { params: httpParams });
  }

  getGaleraById(id: number): Observable<{ success: boolean; data: Galera }> {
    return this.http.get<{ success: boolean; data: Galera }>(`${this.apiUrl}/${id}`);
  }

  createGalera(galera: CreateGaleraDTO): Observable<{ success: boolean; message: string; data: Galera }> {
    return this.http.post<{ success: boolean; message: string; data: Galera }>(this.apiUrl, galera);
  }

  updateGalera(id: number, galera: UpdateGaleraDTO): Observable<{ success: boolean; message: string; data: Galera }> {
    return this.http.put<{ success: boolean; message: string; data: Galera }>(`${this.apiUrl}/${id}`, galera);
  }

  deleteGalera(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.apiUrl}/${id}`);
  }

  getStats(id: number): Observable<{ success: boolean; data: GaleraStats }> {
    return this.http.get<{ success: boolean; data: GaleraStats }>(`${this.apiUrl}/${id}/stats`);
  }
}
