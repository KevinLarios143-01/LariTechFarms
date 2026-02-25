import {
  environment
} from "./chunk-7WSVHSJD.js";
import {
  HttpClient,
  HttpParams,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-S4VETAKW.js";

// src/app/shared/services/inventario.service.ts
var _InventarioService = class _InventarioService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/v1/inventario`;
  }
  getInventario(params) {
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
  getInventarioById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createInventario(inventario) {
    return this.http.post(this.apiUrl, inventario);
  }
  updateInventario(id, inventario) {
    return this.http.put(`${this.apiUrl}/${id}`, inventario);
  }
  updateStock(id, stockData) {
    return this.http.patch(`${this.apiUrl}/${id}/stock`, stockData);
  }
  deleteInventario(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getCategorias() {
    return this.http.get(`${this.apiUrl}/categorias`);
  }
  getAlertas() {
    return this.http.get(`${this.apiUrl}/alertas`);
  }
  getStats() {
    return this.http.get(`${this.apiUrl}/stats`);
  }
};
_InventarioService.\u0275fac = function InventarioService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InventarioService)(\u0275\u0275inject(HttpClient));
};
_InventarioService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InventarioService, factory: _InventarioService.\u0275fac, providedIn: "root" });
var InventarioService = _InventarioService;

export {
  InventarioService
};
//# sourceMappingURL=chunk-ZVS7OPM7.js.map
