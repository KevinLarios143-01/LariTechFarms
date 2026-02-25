import {
  environment
} from "./chunk-7WSVHSJD.js";
import {
  HttpClient,
  HttpParams,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-S4VETAKW.js";

// src/app/shared/services/gasto-operacion.service.ts
var _GastoOperacionService = class _GastoOperacionService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/v1/gastos-operacion`;
  }
  getGastos(params) {
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
  getGastoById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createGasto(gasto) {
    return this.http.post(this.apiUrl, gasto);
  }
  updateGasto(id, gasto) {
    return this.http.put(`${this.apiUrl}/${id}`, gasto);
  }
  deleteGasto(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getStats(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get(`${this.apiUrl}/stats`, { params: httpParams });
  }
};
_GastoOperacionService.\u0275fac = function GastoOperacionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GastoOperacionService)(\u0275\u0275inject(HttpClient));
};
_GastoOperacionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GastoOperacionService, factory: _GastoOperacionService.\u0275fac, providedIn: "root" });
var GastoOperacionService = _GastoOperacionService;

export {
  GastoOperacionService
};
//# sourceMappingURL=chunk-PUFVTQBG.js.map
