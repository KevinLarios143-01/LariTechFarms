import {
  TicketService
} from "./chunk-YLRYQWLL.js";
import "./chunk-7WSVHSJD.js";
import {
  SharedModule
} from "./chunk-UEAXMXBR.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import "./chunk-ZVXZDCDW.js";
import {
  ToastrService
} from "./chunk-KTQLQ7YR.js";
import "./chunk-ZSUERINM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-47LBZ5ZO.js";
import {
  ChangeDetectorRef,
  CommonModule,
  DatePipe,
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/bussiness-dashboard/tickets/ticket-list/ticket-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["../view", a0];
var _c1 = (a0) => ["../edit", a0];
function TicketListComponent_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34)(2, "div", 35)(3, "span", 36);
    \u0275\u0275text(4, "Cargando...");
    \u0275\u0275elementEnd()()()();
  }
}
function TicketListComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
    \u0275\u0275text(2, "No hay tickets registrados");
    \u0275\u0275elementEnd()();
  }
}
function TicketListComponent_Conditional_100_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "small", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ticket_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", ticket_r1.idVenta, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ticket_r1.venta.cliente.nombre);
  }
}
function TicketListComponent_Conditional_100_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function TicketListComponent_Conditional_100_For_1_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ticket_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ticket_r1.producto.tamanio);
  }
}
function TicketListComponent_Conditional_100_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, TicketListComponent_Conditional_100_For_1_Conditional_8_Conditional_2_Template, 2, 1, "small", 37);
  }
  if (rf & 2) {
    const ticket_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ticket_r1.producto.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(ticket_r1.producto.tamanio ? 2 : -1);
  }
}
function TicketListComponent_Conditional_100_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function TicketListComponent_Conditional_100_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ticket_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ticket_r1.lote.galera);
  }
}
function TicketListComponent_Conditional_100_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function TicketListComponent_Conditional_100_For_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ticket_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, ticket_r1.id));
  }
}
function TicketListComponent_Conditional_100_For_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function TicketListComponent_Conditional_100_For_1_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ticket_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cambiarEstado(ticket_r1, "Autorizado"));
    });
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275elementEnd();
  }
}
function TicketListComponent_Conditional_100_For_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function TicketListComponent_Conditional_100_For_1_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ticket_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cambiarEstado(ticket_r1, "Despachado"));
    });
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275elementEnd();
  }
}
function TicketListComponent_Conditional_100_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275template(5, TicketListComponent_Conditional_100_For_1_Conditional_5_Template, 4, 2)(6, TicketListComponent_Conditional_100_For_1_Conditional_6_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275template(8, TicketListComponent_Conditional_100_For_1_Conditional_8_Template, 3, 2)(9, TicketListComponent_Conditional_100_For_1_Conditional_9_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275template(11, TicketListComponent_Conditional_100_For_1_Conditional_11_Template, 2, 1, "span", 38)(12, TicketListComponent_Conditional_100_For_1_Conditional_12_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 39)(20, "button", 40);
    \u0275\u0275element(21, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, TicketListComponent_Conditional_100_For_1_Conditional_22_Template, 2, 3, "button", 42)(23, TicketListComponent_Conditional_100_For_1_Conditional_23_Template, 2, 0, "button", 43)(24, TicketListComponent_Conditional_100_For_1_Conditional_24_Template, 2, 0, "button", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ticket_r1 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 12, ticket_r1.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ticket_r1.venta ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ticket_r1.producto ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ticket_r1.lote ? 11 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ticket_r1.cantidad);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge " + ctx_r2.getEstadoBadgeClass(ticket_r1.estado));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ticket_r1.estado, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, ticket_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ticket_r1.estado !== "Cancelado" && ticket_r1.estado !== "Despachado" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ticket_r1.estado === "Pendiente" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ticket_r1.estado === "Autorizado" ? 24 : -1);
  }
}
function TicketListComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, TicketListComponent_Conditional_100_For_1_Template, 25, 17, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.tickets);
  }
}
function TicketListComponent_Conditional_101_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 52)(1, "a", 53);
    \u0275\u0275listener("click", function TicketListComponent_Conditional_101_For_9_Template_a_click_1_listener() {
      const page_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPageChange(page_r7));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r7 === ctx_r2.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r7);
  }
}
function TicketListComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "nav")(4, "ul", 51)(5, "li", 52)(6, "a", 53);
    \u0275\u0275listener("click", function TicketListComponent_Conditional_101_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange(ctx_r2.currentPage - 1));
    });
    \u0275\u0275text(7, "Anterior");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(8, TicketListComponent_Conditional_101_For_9_Template, 3, 3, "li", 54, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(10, "li", 52)(11, "a", 53);
    \u0275\u0275listener("click", function TicketListComponent_Conditional_101_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange(ctx_r2.currentPage + 1));
    });
    \u0275\u0275text(12, "Siguiente");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Mostrando ", (ctx_r2.currentPage - 1) * ctx_r2.itemsPerPage + 1, " a ", ctx_r2.Math.min(ctx_r2.currentPage * ctx_r2.itemsPerPage, ctx_r2.totalItems), " de ", ctx_r2.totalItems, " tickets ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.pages);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
  }
}
var _TicketListComponent = class _TicketListComponent {
  constructor(ticketService, cdr, toastr) {
    this.ticketService = ticketService;
    this.cdr = cdr;
    this.toastr = toastr;
    this.tickets = [];
    this.isLoading = false;
    this.estadoFilter = "";
    this.fechaInicio = "";
    this.fechaFin = "";
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalItems = 0;
    this.totalPages = 0;
    this.estados = ["Pendiente", "Autorizado", "Despachado", "Cancelado"];
    this.Math = Math;
    this.stats = {
      totalTickets: 0,
      pendientes: 0,
      autorizados: 0,
      despachados: 0
    };
  }
  ngOnInit() {
    this.loadTickets();
    this.loadStats();
  }
  loadTickets() {
    this.isLoading = true;
    const params = {
      page: this.currentPage,
      limit: this.itemsPerPage,
      estado: this.estadoFilter || void 0,
      fechaInicio: this.fechaInicio || void 0,
      fechaFin: this.fechaFin || void 0
    };
    this.ticketService.getTickets(params).subscribe({
      next: (response) => {
        if (response?.data) {
          this.tickets = response.data;
          this.totalItems = response.pagination.total;
          this.totalPages = response.pagination.totalPages;
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error("Error al cargar tickets", "Error");
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  loadStats() {
    const params = {
      fechaInicio: this.fechaInicio || void 0,
      fechaFin: this.fechaFin || void 0
    };
    this.ticketService.getTicketsStats(params).subscribe({
      next: (response) => {
        if (response?.data) {
          this.stats.totalTickets = response.data.totalTickets;
          const porEstado = response.data.ticketsPorEstado || [];
          this.stats.pendientes = porEstado.find((e) => e.estado === "Pendiente")?._count.id || 0;
          this.stats.autorizados = porEstado.find((e) => e.estado === "Autorizado")?._count.id || 0;
          this.stats.despachados = porEstado.find((e) => e.estado === "Despachado")?._count.id || 0;
        }
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error al cargar estad\xEDsticas:", error);
      }
    });
  }
  applyFilters() {
    this.currentPage = 1;
    this.loadTickets();
    this.loadStats();
  }
  clearFilters() {
    this.estadoFilter = "";
    this.fechaInicio = "";
    this.fechaFin = "";
    this.currentPage = 1;
    this.loadTickets();
    this.loadStats();
  }
  cambiarEstado(ticket, nuevoEstado) {
    if (confirm(`\xBFEst\xE1 seguro de cambiar el estado a "${nuevoEstado}"?`)) {
      this.ticketService.updateTicketEstado(ticket.id, { estado: nuevoEstado }).subscribe({
        next: () => {
          this.toastr.success("Estado actualizado exitosamente", "\xC9xito");
          this.loadTickets();
          this.loadStats();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || "Error al actualizar estado";
          this.toastr.error(errorMsg, "Error");
        }
      });
    }
  }
  getEstadoBadgeClass(estado) {
    const classes = {
      "Pendiente": "bg-warning",
      "Autorizado": "bg-info",
      "Despachado": "bg-success",
      "Cancelado": "bg-danger"
    };
    return classes[estado] || "bg-secondary";
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadTickets();
  }
  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
};
_TicketListComponent.\u0275fac = function TicketListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TicketListComponent)(\u0275\u0275directiveInject(TicketService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_TicketListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketListComponent, selectors: [["app-ticket-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 102, vars: 11, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "d-flex", "gap-2"], ["routerLink", "../add", 1, "btn", "btn-primary", "btn-sm"], [1, "ri-add-line"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-sm-12"], [1, "card-body"], [1, "d-flex", "align-items-top"], [1, "me-3"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-primary-transparent"], [1, "ri-ticket-line", "fs-18"], [1, "flex-fill"], [1, "fw-semibold", "mb-0", "lh-1"], [1, "mb-0", "fs-12", "text-muted"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-warning-transparent"], [1, "ri-time-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-info-transparent"], [1, "ri-check-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-success-transparent"], [1, "ri-truck-line", "fs-18"], [1, "row", "g-3"], [1, "col-xl-3", "col-lg-4", "col-md-6"], ["placeholder", "Estado", 3, "ngModelChange", "change", "items", "ngModel", "clearable"], ["type", "date", "placeholder", "Fecha Inicio", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", "placeholder", "Fecha Fin", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "ri-refresh-line"], [1, "table-responsive"], [1, "table", "text-nowrap", "table-hover"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], ["colspan", "7", 1, "text-center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "text-muted"], [1, "badge", "bg-light", "text-dark"], ["role", "group", 1, "btn-group"], ["title", "Ver detalles", 1, "btn", "btn-sm", "btn-info", 3, "routerLink"], [1, "ri-eye-line"], ["title", "Editar", 1, "btn", "btn-sm", "btn-primary", 3, "routerLink"], ["title", "Autorizar", 1, "btn", "btn-sm", "btn-success"], ["title", "Despachar", 1, "btn", "btn-sm", "btn-success"], [1, "fw-semibold"], [1, "ri-edit-line"], ["title", "Autorizar", 1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "ri-check-line"], ["title", "Despachar", 1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "ri-truck-line"], [1, "pagination", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "page-item", 3, "active"]], template: function TicketListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Gesti\xF3n de Tickets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, " Nuevo Ticket ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(11, "div", 1)(12, "div", 9)(13, "div", 3)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "span", 13);
    \u0275\u0275element(18, "i", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 15)(20, "h5", 16);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 17);
    \u0275\u0275text(23, "Total Tickets");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(24, "div", 9)(25, "div", 3)(26, "div", 10)(27, "div", 11)(28, "div", 12)(29, "span", 18);
    \u0275\u0275element(30, "i", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 15)(32, "h5", 16);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 17);
    \u0275\u0275text(35, "Pendientes");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(36, "div", 9)(37, "div", 3)(38, "div", 10)(39, "div", 11)(40, "div", 12)(41, "span", 20);
    \u0275\u0275element(42, "i", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 15)(44, "h5", 16);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p", 17);
    \u0275\u0275text(47, "Autorizados");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(48, "div", 9)(49, "div", 3)(50, "div", 10)(51, "div", 11)(52, "div", 12)(53, "span", 22);
    \u0275\u0275element(54, "i", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 15)(56, "h5", 16);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p", 17);
    \u0275\u0275text(59, "Despachados");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(60, "div", 1)(61, "div", 2)(62, "div", 3)(63, "div", 10)(64, "div", 24)(65, "div", 25)(66, "ng-select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function TicketListComponent_Template_ng_select_ngModelChange_66_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.estadoFilter, $event) || (ctx.estadoFilter = $event);
      return $event;
    });
    \u0275\u0275listener("change", function TicketListComponent_Template_ng_select_change_66_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 25)(68, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function TicketListComponent_Template_input_ngModelChange_68_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.fechaInicio, $event) || (ctx.fechaInicio = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function TicketListComponent_Template_input_ngModelChange_68_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 25)(70, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function TicketListComponent_Template_input_ngModelChange_70_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.fechaFin, $event) || (ctx.fechaFin = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function TicketListComponent_Template_input_ngModelChange_70_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 25)(72, "button", 29);
    \u0275\u0275listener("click", function TicketListComponent_Template_button_click_72_listener() {
      return ctx.clearFilters();
    });
    \u0275\u0275element(73, "i", 30);
    \u0275\u0275text(74, " Limpiar ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(75, "div", 1)(76, "div", 2)(77, "div", 3)(78, "div", 10)(79, "div", 31)(80, "table", 32)(81, "thead")(82, "tr")(83, "th");
    \u0275\u0275text(84, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "th");
    \u0275\u0275text(86, "Venta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "th");
    \u0275\u0275text(88, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "th");
    \u0275\u0275text(90, "Lote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "th");
    \u0275\u0275text(92, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "th");
    \u0275\u0275text(94, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "th");
    \u0275\u0275text(96, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(97, "tbody");
    \u0275\u0275template(98, TicketListComponent_Conditional_98_Template, 5, 0, "tr")(99, TicketListComponent_Conditional_99_Template, 3, 0, "tr")(100, TicketListComponent_Conditional_100_Template, 2, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(101, TicketListComponent_Conditional_101_Template, 13, 7, "div", 33);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx.stats.totalTickets);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx.stats.pendientes);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx.stats.autorizados);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx.stats.despachados);
    \u0275\u0275advance(9);
    \u0275\u0275property("items", ctx.estados);
    \u0275\u0275twoWayProperty("ngModel", ctx.estadoFilter);
    \u0275\u0275property("clearable", true);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaInicio);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaFin);
    \u0275\u0275advance(28);
    \u0275\u0275conditional(ctx.isLoading ? 98 : ctx.tickets.length === 0 ? 99 : 100);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.totalPages > 1 ? 101 : -1);
  }
}, dependencies: [CommonModule, DatePipe, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgSelectModule, NgSelectComponent, SharedModule], styles: ["\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.35em 0.65em;\n}\n.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.btn-group[_ngcontent-%COMP%] {\n  gap: 0.25rem;\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=ticket-list.component.css.map */"] });
var TicketListComponent = _TicketListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketListComponent, { className: "TicketListComponent" });
})();
export {
  TicketListComponent
};
//# sourceMappingURL=ticket-list.component-YIM277OX.js.map
