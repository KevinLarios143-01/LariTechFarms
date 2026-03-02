import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap, map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {
  IngresoInventario,
  IngresoInventarioResponse,
  CreateIngresoRequest,
  ClasificacionMultipleRequest,
  StockLote,
  InventarioStats
} from '../interfaces/inventario';

interface SearchResult {
  ingresoData: IngresoInventario[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class IngresoInventarioService {
  private readonly apiUrl = `${environment.apiUrl}/v1`;
  private readonly _loading$ = new BehaviorSubject<boolean>(true);
  private readonly _search$ = new Subject<void>();
  private readonly _ingresoData$ = new BehaviorSubject<IngresoInventario[]>([]);
  private readonly _total$ = new BehaviorSubject<number>(0);

  constructor(private readonly http: HttpClient) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._ingresoData$.next(result.ingresoData);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get ingresoData$() { return this._ingresoData$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }

  // Método público para refrescar los datos
  refresh() {
    console.log('🔄 Refrescando datos...');
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    console.log('🔍 Buscando ingresos de inventario...');
    console.log('📡 URL:', `${this.apiUrl}/ingreso-inventario`);
    
    return this.http.get<any>(`${this.apiUrl}/ingreso-inventario`).pipe(
      map(response => {
        console.log('✅ Respuesta del servidor:', response);
        const data = response?.data?.data || response?.data || response || [];
        const total = response?.data?.pagination?.total || response?.pagination?.total || 0;
        console.log('📦 Datos extraídos:', data);
        console.log('📊 Total:', total);
        return {
          ingresoData: Array.isArray(data) ? data : [],
          total
        };
      }),
      catchError((error) => {
        console.error('❌ Error al buscar ingresos:', error);
        return of({ ingresoData: [], total: 0 });
      })
    );
  }

  getIngresos(params?: {
    page?: number;
    limit?: number;
    idLote?: number;
    idProducto?: number;
    fechaInicio?: string;
    fechaFin?: string;
  }): Observable<IngresoInventarioResponse> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key as keyof typeof params];
        if (value !== undefined && value !== null) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get<IngresoInventarioResponse>(`${this.apiUrl}/ingreso-inventario`, { params: httpParams });
  }

  getIngresoById(id: number): Observable<{ data: IngresoInventario }> {
    return this.http.get<{ data: IngresoInventario }>(`${this.apiUrl}/ingreso-inventario/${id}`);
  }

  createIngreso(ingreso: CreateIngresoRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/ingreso-inventario`, ingreso);
  }

  deleteIngreso(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/ingreso-inventario/${id}`);
  }

  getStockPorLote(idLote?: number): Observable<{ data: StockLote[] }> {
    let httpParams = new HttpParams();
    if (idLote) {
      httpParams = httpParams.set('idLote', idLote.toString());
    }
    return this.http.get<{ data: StockLote[] }>(`${this.apiUrl}/ingreso-inventario/stock-lote`, { params: httpParams });
  }

  getEstadisticas(params?: {
    fechaInicio?: string;
    fechaFin?: string;
  }): Observable<{ data: InventarioStats }> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key as keyof typeof params];
        if (value !== undefined && value !== null) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get<{ data: InventarioStats }>(`${this.apiUrl}/ingreso-inventario/estadisticas`, { params: httpParams });
  }

  registrarClasificacionMultiple(data: ClasificacionMultipleRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/ingreso-inventario/clasificacion-multiple`, data);
  }

  eliminarIngreso(id: number): Observable<any> {
    return this.deleteIngreso(id);
  }

  crearIngreso(ingreso: CreateIngresoRequest): Observable<any> {
    return this.createIngreso(ingreso);
  }

  getIngresoStats(): Observable<InventarioStats> {
    return this.getEstadisticas().pipe(
      map(response => response.data),
      catchError(() => of({
        totalIngresos: 0,
        totalCartones: 0,
        totalHuevos: 0,
        ingresosPorProducto: [],
        ingresosPorLote: [],
        promedioCartones: 0
      }))
    );
  }
}
