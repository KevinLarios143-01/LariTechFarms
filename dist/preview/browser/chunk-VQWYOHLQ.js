import {
  environment
} from "./chunk-7WSVHSJD.js";
import {
  HttpClient,
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-S4VETAKW.js";

// src/app/shared/services/empleado.service.ts
var _EmpleadoService = class _EmpleadoService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/v1`;
  }
  getEmpleados() {
    return this.http.get(`${this.apiUrl}/empleados`).pipe(map((response) => response.data.data));
  }
  createEmpleado(empleado) {
    return this.http.post(`${this.apiUrl}/empleados`, empleado);
  }
  updateEmpleado(empleado) {
    return this.http.put(`${this.apiUrl}/empleados/${empleado.id}`, empleado);
  }
  deleteEmpleado(id) {
    return this.http.delete(`${this.apiUrl}/empleados/${id}`).pipe(map(() => true));
  }
  getEmpleadoById(id) {
    return this.http.get(`${this.apiUrl}/empleados/${id}`);
  }
  deactivateEmpleado(id) {
    return this.http.patch(`${this.apiUrl}/empleados/${id}/deactivate`, {});
  }
  activateEmpleado(id) {
    return this.http.patch(`${this.apiUrl}/empleados/${id}/activate`, {});
  }
};
_EmpleadoService.\u0275fac = function EmpleadoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmpleadoService)(\u0275\u0275inject(HttpClient));
};
_EmpleadoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmpleadoService, factory: _EmpleadoService.\u0275fac, providedIn: "root" });
var EmpleadoService = _EmpleadoService;

export {
  EmpleadoService
};
//# sourceMappingURL=chunk-VQWYOHLQ.js.map
