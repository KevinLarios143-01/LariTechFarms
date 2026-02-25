import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap, map, catchError } from 'rxjs/operators';
import { SortDirection } from '@angular/material/sort';
import { Cliente, ClienteResponse, ClienteStats, ClienteByIdResponse } from '../interfaces/cliente';
import { environment } from '../../../environments/environment';

interface SearchResult {
  clienteData: Cliente[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: keyof Cliente | '';
  sortDirection: SortDirection;
}

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private readonly apiUrl = `${environment.apiUrl}/v1/clientes`;
  private readonly _loading$ = new BehaviorSubject<boolean>(true);
  private readonly _search$ = new Subject<void>();
  private readonly _clienteData$ = new BehaviorSubject<Cliente[]>([]);
  private readonly _total$ = new BehaviorSubject<number>(0);

  private readonly _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private readonly http: HttpClient) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._clienteData$.next(result.clienteData);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get clienteData$() { return this._clienteData$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: keyof Cliente | '') { this._set({ sortColumn }); }
  set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { pageSize, page, searchTerm } = this._state;

    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', pageSize.toString());

    if (searchTerm) {
      params = params.set('search', searchTerm);
    }

    return this.http.get<ClienteResponse>(this.apiUrl, { params }).pipe(
      map(response => ({
        clienteData: response.data.data,
        total: response.data.pagination.total
      })),
      catchError(() => of({ clienteData: [], total: 0 }))
    );
  }

  getClientes(): Observable<ClienteResponse> {
    return this.http.get<ClienteResponse>(this.apiUrl);
  }

  getClientesWithParams(params: any): Observable<ClienteResponse> {
    let httpParams = new HttpParams();
    
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });

    return this.http.get<ClienteResponse>(this.apiUrl, { params: httpParams });
  }

  getClienteById(id: number): Observable<ClienteByIdResponse> {
    return this.http.get<ClienteByIdResponse>(`${this.apiUrl}/${id}`);
  }

  crearCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, cliente);
  }

  actualizarCliente(id: number, cliente: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, cliente);
  }

  activateCliente(id: number): Observable<Cliente> {
    return this.http.patch<Cliente>(`${this.apiUrl}/${id}/activate`, {});
  }

  deactivateCliente(id: number): Observable<Cliente> {
    return this.http.patch<Cliente>(`${this.apiUrl}/${id}/deactivate`, {});
  }

  getClienteStats(): Observable<ClienteStats> {
    return this.http.get<any>(`${this.apiUrl}/stats`).pipe(
      map(response => response.data?.data || response.data || response),
      catchError(() => of({
        totalClientes: 0,
        clientesActivos: 0,
        clientesInactivos: 0,
        clientesNuevos: 0
      } as ClienteStats))
    );
  }
}
