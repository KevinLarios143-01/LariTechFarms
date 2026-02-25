import {
  environment
} from "./chunk-7WSVHSJD.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-S4VETAKW.js";

// src/app/componets/dashbord/client-dashboard/cliente.service.ts
var _ClienteService = class _ClienteService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${environment.apiUrl}/v1/clientes`;
    this.apiUrl = `${environment.apiUrl}/v1`;
  }
  getClienteById(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getClientes() {
    return this.http.get(`${this.apiUrl}/clientes`);
  }
  createCliente(cliente) {
    return this.http.post(`${this.apiUrl}/clientes`, cliente);
  }
  updateCliente(id, cliente) {
    return this.http.put(`${this.apiUrl}/clientes/${id}`, cliente);
  }
  activateCliente(id) {
    return this.http.patch(`${this.apiUrl}/clientes/${id}/activate`, {});
  }
  deactivateCliente(id) {
    return this.http.patch(`${this.apiUrl}/clientes/${id}/deactivate`, {});
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
//# sourceMappingURL=chunk-DTNROUGD.js.map
