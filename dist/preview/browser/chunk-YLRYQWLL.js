import {
  environment
} from "./chunk-7WSVHSJD.js";
import {
  HttpClient,
  HttpParams,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-S4VETAKW.js";

// src/app/shared/services/ticket.service.ts
var _TicketService = class _TicketService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/v1`;
  }
  getTickets(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value !== void 0 && value !== null) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/tickets`, { params: httpParams });
  }
  getTicketById(id) {
    return this.http.get(`${this.apiUrl}/tickets/${id}`);
  }
  createTicket(ticket) {
    return this.http.post(`${this.apiUrl}/tickets`, ticket);
  }
  updateTicket(id, ticket) {
    return this.http.put(`${this.apiUrl}/tickets/${id}`, ticket);
  }
  updateTicketEstado(id, data) {
    return this.http.patch(`${this.apiUrl}/tickets/${id}/estado`, data);
  }
  deleteTicket(id) {
    return this.http.delete(`${this.apiUrl}/tickets/${id}`);
  }
  getTicketsStats(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value !== void 0 && value !== null) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/tickets/stats`, { params: httpParams });
  }
};
_TicketService.\u0275fac = function TicketService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TicketService)(\u0275\u0275inject(HttpClient));
};
_TicketService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TicketService, factory: _TicketService.\u0275fac, providedIn: "root" });
var TicketService = _TicketService;

export {
  TicketService
};
//# sourceMappingURL=chunk-YLRYQWLL.js.map
