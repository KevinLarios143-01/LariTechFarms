import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap, map, catchError } from 'rxjs/operators';
import { SortDirection } from '@angular/material/sort';
import { Usuario, UsuarioByIdResponse, UsuarioResponse, UsuarioStats, UsuarioStatsResponse } from '../interfaces/usuario';
import { environment } from '../../../environments/environment';

interface SearchResult {
  userData: Usuario[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: keyof Usuario | '';
  sortDirection: SortDirection;
}

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private readonly apiUrl = `${environment.apiUrl}/v1/usuarios`;
  private readonly _loading$ = new BehaviorSubject<boolean>(true);
  private readonly _search$ = new Subject<void>();
  private readonly _userData$ = new BehaviorSubject<Usuario[]>([]);
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
      this._userData$.next(result.userData);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get userData$() { return this._userData$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  getUserStats(): Observable<UsuarioStats> {
    return this.http.get<UsuarioStatsResponse>(`${this.apiUrl}/stats`).pipe(
      map(response => {
        console.log('Stats API response:', response);
        // Intentar diferentes estructuras de respuesta
        if (response.data?.data) {
          return response.data.data;
        } else if (response.data) {
          return response.data;
        } else {
          return response as any;
        }
      }),
      catchError((error) => {
        console.error('Error fetching user stats:', error);
        return of({
          totalUsuarios: 0,
          usuariosActivos: 0,
          usuariosInactivos: 0,
          usuariosPorRol: [],
          usuariosNuevos: 0
        } as UsuarioStats);
      })
    );
  }

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: keyof Usuario | '') { this._set({ sortColumn }); }
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

    return this.http.get<UsuarioResponse>(this.apiUrl, { params }).pipe(
      map(response => {
        const userData = this.mapUsuarios(response.data.data);
        return {
          userData,
          total: response.data.pagination.total
        };
      }),
      catchError(() => of({ userData: [], total: 0 }))
    );
  }

  private mapUsuarios(usuarios: Usuario[]): Usuario[] {
    return usuarios.map(user => ({
      ...user,
      img: './assets/images/laritechfarms/2.jpg'
    }));
  }

  // GET /usuarios - Listar usuarios del tenant
  listarUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // POST /usuarios - Crear nuevo usuario
  crearUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, usuario);
  }

  // GET /usuarios/{id} - Obtener usuario por ID
  obtenerUsuario(id: string): Observable<UsuarioByIdResponse> {
    return this.http.get<UsuarioByIdResponse>(`${this.apiUrl}/${id}`);
  }

  // PUT /usuarios/{id} - Actualizar usuario
  actualizarUsuario(id: string, usuario: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, usuario);
  }

  // DELETE /usuarios/{id} - Eliminar usuario
  eliminarUsuario(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // PATCH /usuarios/{id}/reset-password - Restablecer contraseña de usuario
  restablecerPassword(id: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}/reset-password`, {});
  }

  activateUsuario(id: number): Observable<Usuario> {
    return this.http.patch<Usuario>(`${this.apiUrl}/${id}/activate`, {});
  }

  deactivateUsuario(id: number): Observable<Usuario> {
    return this.http.patch<Usuario>(`${this.apiUrl}/${id}/deactivate`, {});
  }

  // GET /usuarios/stats - Obtener estadísticas de usuarios
  obtenerEstadisticas(): Observable<UsuarioStatsResponse[]> {
    return this.http.get<UsuarioStatsResponse[]>(`${this.apiUrl}/stats`);
  }
}
