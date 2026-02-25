import {
  environment
} from "./chunk-7WSVHSJD.js";
import {
  HttpClient,
  HttpParams,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-S4VETAKW.js";

// src/app/componets/dashbord/production-dashboard/huevos/services/huevos.service.ts
var _HuevosService = class _HuevosService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/v1/control-huevos`;
  }
  getControles(params) {
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
  getControlById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createControl(control) {
    return this.http.post(this.apiUrl, control);
  }
  updateControl(id, control) {
    return this.http.put(`${this.apiUrl}/${id}`, control);
  }
  deleteControl(id) {
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
_HuevosService.\u0275fac = function HuevosService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HuevosService)(\u0275\u0275inject(HttpClient));
};
_HuevosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HuevosService, factory: _HuevosService.\u0275fac, providedIn: "root" });
var HuevosService = _HuevosService;

export {
  HuevosService
};
//# sourceMappingURL=chunk-C3QQGMXI.js.map
