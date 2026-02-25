import {
  environment
} from "./chunk-7WSVHSJD.js";
import {
  HttpClient,
  HttpParams,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-S4VETAKW.js";

// src/app/componets/dashbord/hrmdashboards/puestos/puesto-list/puesto.service.ts
var _PuestoService = class _PuestoService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/v1/puestos`;
  }
  getPuestos(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get(this.apiUrl, { params: httpParams });
  }
  getPuestoById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createPuesto(puesto) {
    return this.http.post(this.apiUrl, puesto);
  }
  updatePuesto(id, puesto) {
    return this.http.put(`${this.apiUrl}/${id}`, puesto);
  }
  deletePuesto(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getEstadisticas() {
    return this.http.get(`${this.apiUrl}/estadisticas`);
  }
};
_PuestoService.\u0275fac = function PuestoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PuestoService)(\u0275\u0275inject(HttpClient));
};
_PuestoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PuestoService, factory: _PuestoService.\u0275fac, providedIn: "root" });
var PuestoService = _PuestoService;

export {
  PuestoService
};
//# sourceMappingURL=chunk-I67CRWUW.js.map
