import {
  environment
} from "./chunk-7WSVHSJD.js";
import {
  HttpClient,
  HttpParams,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-S4VETAKW.js";

// src/app/componets/dashbord/bussiness-dashboard/lotes/services/lotes.service.ts
var _LotesService = class _LotesService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/v1/lotes`;
  }
  getLotes(params) {
    let httpParams = new HttpParams();
    if (params) {
      if (params.page)
        httpParams = httpParams.set("page", params.page.toString());
      if (params.limit)
        httpParams = httpParams.set("limit", params.limit.toString());
      if (params.estado)
        httpParams = httpParams.set("estado", params.estado);
      if (params.tipo)
        httpParams = httpParams.set("tipo", params.tipo);
      if (params.search)
        httpParams = httpParams.set("search", params.search);
    }
    return this.http.get(this.apiUrl, { params: httpParams });
  }
  getLoteById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createLote(lote) {
    return this.http.post(this.apiUrl, lote);
  }
  updateLote(id, lote) {
    return this.http.put(`${this.apiUrl}/${id}`, lote);
  }
  updateCantidad(id, data) {
    return this.http.patch(`${this.apiUrl}/${id}/cantidad`, data);
  }
  deleteLote(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getStats(params) {
    let httpParams = new HttpParams();
    if (params) {
      if (params.fechaInicio)
        httpParams = httpParams.set("fechaInicio", params.fechaInicio);
      if (params.fechaFin)
        httpParams = httpParams.set("fechaFin", params.fechaFin);
    }
    return this.http.get(`${this.apiUrl}/stats`, { params: httpParams });
  }
};
_LotesService.\u0275fac = function LotesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LotesService)(\u0275\u0275inject(HttpClient));
};
_LotesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LotesService, factory: _LotesService.\u0275fac, providedIn: "root" });
var LotesService = _LotesService;

export {
  LotesService
};
//# sourceMappingURL=chunk-43K7FTAL.js.map
