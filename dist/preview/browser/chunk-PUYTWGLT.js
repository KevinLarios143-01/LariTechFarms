import {
  environment
} from "./chunk-7WSVHSJD.js";
import {
  HttpClient,
  HttpParams,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-S4VETAKW.js";

// src/app/shared/services/vehiculo.service.ts
var _VehiculoService = class _VehiculoService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/v1/vehiculos`;
  }
  getVehiculos(params) {
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
  getVehiculoById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createVehiculo(vehiculo) {
    return this.http.post(this.apiUrl, vehiculo);
  }
  updateVehiculo(id, vehiculo) {
    return this.http.put(`${this.apiUrl}/${id}`, vehiculo);
  }
  updateEstado(id, estadoData) {
    return this.http.patch(`${this.apiUrl}/${id}/estado`, estadoData);
  }
  deleteVehiculo(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getTipos() {
    return this.http.get(`${this.apiUrl}/tipos`);
  }
  getStats() {
    return this.http.get(`${this.apiUrl}/stats`);
  }
};
_VehiculoService.\u0275fac = function VehiculoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VehiculoService)(\u0275\u0275inject(HttpClient));
};
_VehiculoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VehiculoService, factory: _VehiculoService.\u0275fac, providedIn: "root" });
var VehiculoService = _VehiculoService;

export {
  VehiculoService
};
//# sourceMappingURL=chunk-PUYTWGLT.js.map
