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

// src/app/shared/services/cliente.service.ts
var _ClienteService = class _ClienteService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/v1/clientes`;
    this._loading$ = new BehaviorSubject(true);
    this._search$ = new Subject();
    this._clienteData$ = new BehaviorSubject([]);
    this._total$ = new BehaviorSubject(0);
    this._state = {
      page: 1,
      pageSize: 10,
      searchTerm: "",
      sortColumn: "",
      sortDirection: ""
    };
    this._search$.pipe(tap(() => this._loading$.next(true)), debounceTime(200), switchMap(() => this._search()), delay(200), tap(() => this._loading$.next(false))).subscribe((result) => {
      this._clienteData$.next(result.clienteData);
      this._total$.next(result.total);
    });
    this._search$.next();
  }
  get clienteData$() {
    return this._clienteData$.asObservable();
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
    return this.http.get(this.apiUrl, { params }).pipe(map((response) => ({
      clienteData: response.data.data,
      total: response.data.pagination.total
    })), catchError(() => of({ clienteData: [], total: 0 })));
  }
  getClientes() {
    return this.http.get(this.apiUrl);
  }
  getClienteById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  crearCliente(cliente) {
    return this.http.post(`${this.apiUrl}`, cliente);
  }
  actualizarCliente(id, cliente) {
    return this.http.put(`${this.apiUrl}/${id}`, cliente);
  }
  activateCliente(id) {
    return this.http.patch(`${this.apiUrl}/${id}/activate`, {});
  }
  deactivateCliente(id) {
    return this.http.patch(`${this.apiUrl}/${id}/deactivate`, {});
  }
  getClienteStats() {
    return this.http.get(`${this.apiUrl}/stats`).pipe(map((response) => response.data?.data || response.data || response), catchError(() => of({
      totalClientes: 0,
      clientesActivos: 0,
      clientesInactivos: 0,
      clientesNuevos: 0
    })));
  }
};
_ClienteService.\u0275fac = function ClienteService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClienteService)(\u0275\u0275inject(HttpClient));
};
_ClienteService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClienteService, factory: _ClienteService.\u0275fac, providedIn: "root" });
var ClienteService = _ClienteService;

export {
  ClienteService
};
//# sourceMappingURL=chunk-SLCQH36Y.js.map
