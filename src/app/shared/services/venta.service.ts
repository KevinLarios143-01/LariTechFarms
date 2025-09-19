import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Venta, VentaResponse, CreateVentaRequest, UpdateVentaRequest } from '../interfaces/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private readonly apiUrl = `${environment.apiUrl}/v1`;

  constructor(private readonly http: HttpClient) {}

  getVentas(): Observable<Venta[]> {
    return this.http.get<VentaResponse>(`${this.apiUrl}/ventas`).pipe(
      map(response => response.data.data)
    );
  }

  getVentaById(id: number): Observable<{data: Venta}> {
    return this.http.get<{data: Venta}>(`${this.apiUrl}/ventas/${id}`);
  }

  createVenta(venta: CreateVentaRequest): Observable<Venta> {
    return this.http.post<Venta>(`${this.apiUrl}/ventas`, venta);
  }

  updateVenta(id: number, venta: UpdateVentaRequest): Observable<Venta> {
    return this.http.put<Venta>(`${this.apiUrl}/ventas/${id}`, venta);
  }

  deleteVenta(id: number): Observable<boolean> {
    return this.http.delete<any>(`${this.apiUrl}/ventas/${id}`).pipe(
      map(() => true)
    );
  }
}