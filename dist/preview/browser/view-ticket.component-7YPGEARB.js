import {
  TicketService
} from "./chunk-YLRYQWLL.js";
import "./chunk-7WSVHSJD.js";
import {
  SharedModule
} from "./chunk-UEAXMXBR.js";
import "./chunk-26H6NGLN.js";
import "./chunk-ZVXZDCDW.js";
import {
  ToastrService
} from "./chunk-KTQLQ7YR.js";
import "./chunk-ZSUERINM.js";
import "./chunk-47LBZ5ZO.js";
import {
  ActivatedRoute,
  ChangeDetectorRef,
  DatePipe,
  DecimalPipe,
  Router,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
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
  ɵɵpipeBind3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/bussiness-dashboard/view-ticket/view-ticket.component.ts
function ViewTicketComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ViewTicketComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editTicket());
    });
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2, "Editar ");
    \u0275\u0275elementEnd();
  }
}
function ViewTicketComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 12)(2, "span", 13);
    \u0275\u0275text(3, "Cargando...");
    \u0275\u0275elementEnd()()();
  }
}
function ViewTicketComponent_Conditional_11_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 20)(2, "label", 21);
    \u0275\u0275text(3, "C\xF3digo de Autorizaci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.ticket.codigoAutorizacion);
  }
}
function ViewTicketComponent_Conditional_11_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275element(2, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h6", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 20)(9, "label", 21);
    \u0275\u0275text(10, "Total de la Venta:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 22);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 20)(15, "label", 21);
    \u0275\u0275text(16, "Estado de la Venta:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 22)(18, "span", 30);
    \u0275\u0275text(19, "Activa");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Venta #VT-", ctx_r1.ticket.venta.id.toString().padStart(3, "0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.ticket.venta.cliente.nombre || "Cliente N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(13, 3, ctx_r1.ticket.venta.total, "1.2-2"), "");
  }
}
function ViewTicketComponent_Conditional_11_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, "Informaci\xF3n de la venta no disponible");
    \u0275\u0275elementEnd();
  }
}
function ViewTicketComponent_Conditional_11_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 31)(2, "div", 15)(3, "div", 16)(4, "h4", 17);
    \u0275\u0275text(5, "Detalle de Despacho por Lotes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 18)(7, "div", 32)(8, "table", 33)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "Lote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Galera");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Cantidad Despachada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Fecha de Producci\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody")(22, "tr")(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "tfoot")(35, "tr", 34)(36, "td", 35)(37, "strong");
    \u0275\u0275text(38, "Total Despachado:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "td")(40, "strong");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(42, "td");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(24);
    \u0275\u0275textInterpolate1("Lote #", ctx_r1.ticket.lote.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.ticket.lote.galera || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (ctx_r1.ticket.producto == null ? null : ctx_r1.ticket.producto.nombre) || "N/A", " - ", (ctx_r1.ticket.producto == null ? null : ctx_r1.ticket.producto.tamanio) || "N/A", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.ticket.cantidad, " unidades");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(33, 7, ctx_r1.ticket.fecha, "dd/MM/yyyy", "UTC"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r1.ticket.cantidad, " unidades");
  }
}
function ViewTicketComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 14)(2, "div", 15)(3, "div", 16)(4, "h4", 17);
    \u0275\u0275text(5, "Informaci\xF3n del Ticket");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 18)(7, "div", 9)(8, "div", 19)(9, "div", 20)(10, "label", 21);
    \u0275\u0275text(11, "ID de Ticket:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 22);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 19)(15, "div", 20)(16, "label", 21);
    \u0275\u0275text(17, "Estado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 22)(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 19)(22, "div", 20)(23, "label", 21);
    \u0275\u0275text(24, "Fecha de Creaci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 22);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 19)(29, "div", 20)(30, "label", 21);
    \u0275\u0275text(31, "Fecha de Despacho:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 22);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 19)(36, "div", 20)(37, "label", 21);
    \u0275\u0275text(38, "Cantidad Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 22);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 19)(42, "div", 20)(43, "label", 21);
    \u0275\u0275text(44, "Usuario:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 22);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(47, ViewTicketComponent_Conditional_11_Conditional_47_Template, 6, 1, "div", 23);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 24)(49, "div", 15)(50, "div", 16)(51, "h4", 17);
    \u0275\u0275text(52, "Informaci\xF3n de la Venta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 18);
    \u0275\u0275template(54, ViewTicketComponent_Conditional_11_Conditional_54_Template, 20, 6)(55, ViewTicketComponent_Conditional_11_Conditional_55_Template, 2, 0, "p", 25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(56, ViewTicketComponent_Conditional_11_Conditional_56_Template, 43, 11, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("#TK-", ctx_r1.ticket.id.toString().padStart(3, "0"), "");
    \u0275\u0275advance(6);
    \u0275\u0275classMapInterpolate1("badge bg-", ctx_r1.getStatusClass(ctx_r1.ticket.estado), "-transparent");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.ticket.estado);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(27, 12, ctx_r1.ticket.fecha, "dd/MM/yyyy HH:mm", "UTC"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(34, 16, ctx_r1.ticket.fecha, "dd/MM/yyyy", "UTC"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.ticket.cantidad, " unidades");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r1.ticket.usuario == null ? null : ctx_r1.ticket.usuario.nombre) || "N/A");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.ticket.codigoAutorizacion ? 47 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.ticket.venta ? 54 : 55);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.ticket.lote ? 56 : -1);
  }
}
function ViewTicketComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 36)(2, "div", 15)(3, "div", 37);
    \u0275\u0275element(4, "i", 38);
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Ticket no encontrado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 25);
    \u0275\u0275text(8, "El ticket solicitado no existe o no se pudo cargar.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function ViewTicketComponent_Conditional_12_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(10, "Volver a la lista");
    \u0275\u0275elementEnd()()()()();
  }
}
var _ViewTicketComponent = class _ViewTicketComponent {
  constructor(route, router, ticketService, toastr, cdr) {
    this.route = route;
    this.router = router;
    this.ticketService = ticketService;
    this.toastr = toastr;
    this.cdr = cdr;
    this.ticket = null;
    this.loading = false;
    this.ticketId = 0;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.ticketId = +params["id"];
      if (this.ticketId) {
        this.loadTicket();
      }
    });
  }
  loadTicket() {
    this.loading = true;
    this.ticketService.getTicketById(this.ticketId).subscribe({
      next: (response) => {
        this.ticket = response?.data || null;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading ticket:", error);
        this.toastr.error("Error al cargar el ticket", "Error", {
          timeOut: 3e3,
          positionClass: "toast-top-right",
          progressBar: true,
          closeButton: true
        });
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  goBack() {
    this.router.navigate(["/dashboard/business-dashboard/ticket-list"]);
  }
  editTicket() {
    this.router.navigate(["/dashboard/business-dashboard/new-ticket"], {
      queryParams: { id: this.ticketId, mode: "edit" }
    });
  }
  getStatusClass(estado) {
    switch (estado?.toLowerCase()) {
      case "completado":
        return "success";
      case "pendiente":
        return "warning";
      case "cancelado":
        return "danger";
      default:
        return "secondary";
    }
  }
};
_ViewTicketComponent.\u0275fac = function ViewTicketComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewTicketComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TicketService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_ViewTicketComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewTicketComponent, selectors: [["app-view-ticket"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 2, consts: [[1, "page-header", "d-lg-flex", "d-block"], [1, "page-leftheader"], [1, "page-title"], [1, "page-rightheader"], [1, "btn-list", "d-flex", "gap-1"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "fe", "fe-arrow-left", "fs-12", "my-auto", "me-2"], [1, "btn", "btn-primary"], [1, "text-center", "py-4"], [1, "row"], [1, "btn", "btn-primary", 3, "click"], [1, "fe", "fe-edit-2", "fs-12", "my-auto", "me-2"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "col-xl-8", "col-md-12", "col-lg-8"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], [1, "form-control-static"], [1, "col-md-12"], [1, "col-xl-4", "col-md-12", "col-lg-4"], [1, "text-muted"], [1, "d-flex", "align-items-center", "mb-3"], [1, "avatar", "avatar-lg", "me-3", "avatar-rounded", "bg-success-transparent"], [1, "fe", "fe-shopping-cart", "fs-18"], [1, "mb-1"], [1, "badge", "bg-success-transparent"], [1, "col-xl-12"], [1, "table-responsive"], [1, "table", "table-vcenter", "text-nowrap", "table-bordered"], [1, "table-active"], ["colspan", "3", 1, "text-end"], [1, "col-12"], [1, "card-body", "text-center", "py-5"], [1, "fe", "fe-alert-circle", "fs-48", "text-muted", "mb-3"]], template: function ViewTicketComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Detalle de Ticket");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "button", 5);
    \u0275\u0275listener("click", function ViewTicketComponent_Template_button_click_6_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(7, "i", 6);
    \u0275\u0275text(8, "Volver ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ViewTicketComponent_Conditional_9_Template, 3, 0, "button", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, ViewTicketComponent_Conditional_10_Template, 4, 0, "div", 8)(11, ViewTicketComponent_Conditional_11_Template, 57, 20)(12, ViewTicketComponent_Conditional_12_Template, 11, 0, "div", 9);
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx.ticket ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loading ? 10 : ctx.ticket ? 11 : 12);
  }
}, dependencies: [SharedModule, DatePipe, DecimalPipe] });
var ViewTicketComponent = _ViewTicketComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewTicketComponent, { className: "ViewTicketComponent" });
})();
export {
  ViewTicketComponent
};
//# sourceMappingURL=view-ticket.component-7YPGEARB.js.map
