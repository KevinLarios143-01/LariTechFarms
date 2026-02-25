import {
  environment
} from "./chunk-7WSVHSJD.js";
import {
  HttpClient,
  HttpParams,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-S4VETAKW.js";

// src/app/shared/services/venta.service.ts
var _VentaService = class _VentaService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/v1`;
  }
  getVentas(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value !== void 0 && value !== null) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/ventas`, { params: httpParams });
  }
  getVentaById(id) {
    return this.http.get(`${this.apiUrl}/ventas/${id}`);
  }
  createVenta(venta) {
    return this.http.post(`${this.apiUrl}/ventas`, venta);
  }
  updateVenta(id, venta) {
    return this.http.put(`${this.apiUrl}/ventas/${id}`, venta);
  }
  updateVentaEstado(id, data) {
    return this.http.patch(`${this.apiUrl}/ventas/${id}/estado`, data);
  }
  anularVenta(id, data) {
    return this.http.patch(`${this.apiUrl}/ventas/${id}/anular`, data);
  }
  deleteVenta(id) {
    return this.http.delete(`${this.apiUrl}/ventas/${id}`);
  }
  getVentasByCliente(clienteId, params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value !== void 0 && value !== null) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/ventas/cliente/${clienteId}`, { params: httpParams });
  }
  getVentasEstadisticas(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value !== void 0 && value !== null) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/ventas/estadisticas`, { params: httpParams });
  }
};
_VentaService.\u0275fac = function VentaService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VentaService)(\u0275\u0275inject(HttpClient));
};
_VentaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VentaService, factory: _VentaService.\u0275fac, providedIn: "root" });
var VentaService = _VentaService;

export {
  VentaService
};
//# sourceMappingURL=chunk-EAZAKIYV.js.map
