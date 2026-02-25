import {
  environment
} from "./chunk-7WSVHSJD.js";
import {
  BehaviorSubject,
  HttpClient,
  HttpParams,
  Subject,
  catchError,
  debounceTime,
  delay,
  map,
  of,
  switchMap,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-S4VETAKW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-AJH3MT3R.js";

// src/app/shared/services/usuario.service.ts
var _UsuarioService = class _UsuarioService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/v1/usuarios`;
    this._loading$ = new BehaviorSubject(true);
    this._search$ = new Subject();
    this._userData$ = new BehaviorSubject([]);
    this._total$ = new BehaviorSubject(0);
    this._state = {
      page: 1,
      pageSize: 10,
      searchTerm: "",
      sortColumn: "",
      sortDirection: ""
    };
    this._search$.pipe(tap(() => this._loading$.next(true)), debounceTime(200), switchMap(() => this._search()), delay(200), tap(() => this._loading$.next(false))).subscribe((result) => {
      this._userData$.next(result.userData);
      this._total$.next(result.total);
    });
    this._search$.next();
  }
  get userData$() {
    return this._userData$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }
  getUserStats() {
    return this.http.get(`${this.apiUrl}/stats`).pipe(map((response) => {
      console.log("Stats API response:", response);
      if (response.data?.data) {
        return response.data.data;
      } else if (response.data) {
        return response.data;
      } else {
        return response;
      }
    }), catchError((error) => {
      console.error("Error fetching user stats:", error);
      return of({
        totalUsuarios: 0,
        usuariosActivos: 0,
        usuariosInactivos: 0,
        usuariosPorRol: [],
        usuariosNuevos: 0
      });
    }));
  }
  set page(page) {
    this._set({ page });
  }
  set pageSize(pageSize) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm) {
    this._set({ searchTerm });
  }
  set sortColumn(sortColumn) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection) {
    this._set({ sortDirection });
  }
  _set(patch) {
    Object.assign(this._state, patch);
    this._search$.next();
  }
  _search() {
    const { pageSize, page, searchTerm } = this._state;
    let params = new HttpParams().set("page", page.toString()).set("limit", pageSize.toString());
    if (searchTerm) {
      params = params.set("search", searchTerm);
    }
    return this.http.get(this.apiUrl, { params }).pipe(map((response) => {
      const userData = this.mapUsuarios(response.data.data);
      return {
        userData,
        total: response.data.pagination.total
      };
    }), catchError(() => of({ userData: [], total: 0 })));
  }
  mapUsuarios(usuarios) {
    return usuarios.map((user) => __spreadProps(__spreadValues({}, user), {
      img: "./assets/images/laritechfarms/2.jpg"
    }));
  }
  // GET /usuarios - Listar usuarios del tenant
  listarUsuarios() {
    return this.http.get(`${this.apiUrl}`);
  }
  // POST /usuarios - Crear nuevo usuario
  crearUsuario(usuario) {
    return this.http.post(`${this.apiUrl}`, usuario);
  }
  // GET /usuarios/{id} - Obtener usuario por ID
  obtenerUsuario(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // PUT /usuarios/{id} - Actualizar usuario
  actualizarUsuario(id, usuario) {
    return this.http.put(`${this.apiUrl}/${id}`, usuario);
  }
  // DELETE /usuarios/{id} - Eliminar usuario
  eliminarUsuario(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // PATCH /usuarios/{id}/reset-password - Restablecer contraseña de usuario
  restablecerPassword(id) {
    return this.http.patch(`${this.apiUrl}/${id}/reset-password`, {});
  }
  activateUsuario(id) {
    return this.http.patch(`${this.apiUrl}/${id}/activate`, {});
  }
  deactivateUsuario(id) {
    return this.http.patch(`${this.apiUrl}/${id}/deactivate`, {});
  }
  // GET /usuarios/stats - Obtener estadísticas de usuarios
  obtenerEstadisticas() {
    return this.http.get(`${this.apiUrl}/stats`);
  }
};
_UsuarioService.\u0275fac = function UsuarioService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UsuarioService)(\u0275\u0275inject(HttpClient));
};
_UsuarioService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsuarioService, factory: _UsuarioService.\u0275fac, providedIn: "root" });
var UsuarioService = _UsuarioService;

export {
  UsuarioService
};
//# sourceMappingURL=chunk-EULUGLT3.js.map
