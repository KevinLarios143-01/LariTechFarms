import {
  VentaService
} from "./chunk-EAZAKIYV.js";
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/bussiness-dashboard/view-sell/view-sell.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ViewSellComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ViewSellComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateTicket());
    });
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2, "Generar Ticket ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function ViewSellComponent_Conditional_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editVenta());
    });
    \u0275\u0275element(4, "i", 12);
    \u0275\u0275text(5, "Editar ");
    \u0275\u0275elementEnd();
  }
}
function ViewSellComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 13)(2, "span", 14);
    \u0275\u0275text(3, "Cargando...");
    \u0275\u0275elementEnd()()();
  }
}
function ViewSellComponent_Conditional_11_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 21)(2, "label", 22);
    \u0275\u0275text(3, "Observaciones:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.venta.observaciones);
  }
}
function ViewSellComponent_Conditional_11_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275element(2, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h6", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 21)(9, "label", 22);
    \u0275\u0275text(10, "Tel\xE9fono:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 23);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.venta.cliente.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Cliente #", ctx_r1.venta.cliente.id, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.venta.cliente.telefono || "No disponible");
  }
}
function ViewSellComponent_Conditional_11_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, "Informaci\xF3n del cliente no disponible");
    \u0275\u0275elementEnd();
  }
}
function ViewSellComponent_Conditional_11_Conditional_56_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const detalle_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(detalle_r3.producto.nombre || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(detalle_r3.producto.tamanio || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(detalle_r3.cantidad);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(9, 5, detalle_r3.precioUnitario, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(12, 8, detalle_r3.subtotal, "1.2-2"), "");
  }
}
function ViewSellComponent_Conditional_11_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 31)(2, "div", 16)(3, "div", 17)(4, "h4", 18);
    \u0275\u0275text(5, "Detalle de Productos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 19)(7, "div", 32)(8, "table", 33)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Tama\xF1o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Precio Unitario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Subtotal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, ViewSellComponent_Conditional_11_Conditional_56_For_23_Template, 13, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "tfoot")(25, "tr", 34)(26, "td", 35)(27, "strong");
    \u0275\u0275text(28, "Total:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "strong");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r1.venta.detalleVentas);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(32, 1, ctx_r1.venta.total, "1.2-2"), "");
  }
}
function ViewSellComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 15)(2, "div", 16)(3, "div", 17)(4, "h4", 18);
    \u0275\u0275text(5, "Informaci\xF3n de la Venta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 19)(7, "div", 8)(8, "div", 20)(9, "div", 21)(10, "label", 22);
    \u0275\u0275text(11, "ID de Venta:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 23);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 20)(15, "div", 21)(16, "label", 22);
    \u0275\u0275text(17, "Estado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 23)(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 20)(22, "div", 21)(23, "label", 22);
    \u0275\u0275text(24, "Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 23);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 20)(29, "div", 21)(30, "label", 22);
    \u0275\u0275text(31, "Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 23);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 20)(36, "div", 21)(37, "label", 22);
    \u0275\u0275text(38, "M\xE9todo de Pago:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 23);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 20)(42, "div", 21)(43, "label", 22);
    \u0275\u0275text(44, "Usuario:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 23);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(47, ViewSellComponent_Conditional_11_Conditional_47_Template, 6, 1, "div", 24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 25)(49, "div", 16)(50, "div", 17)(51, "h4", 18);
    \u0275\u0275text(52, "Informaci\xF3n del Cliente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 19);
    \u0275\u0275template(54, ViewSellComponent_Conditional_11_Conditional_54_Template, 13, 3)(55, ViewSellComponent_Conditional_11_Conditional_55_Template, 2, 0, "p", 26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(56, ViewSellComponent_Conditional_11_Conditional_56_Template, 33, 4, "div", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("#VT-", ctx_r1.venta.id.toString().padStart(3, "0"), "");
    \u0275\u0275advance(6);
    \u0275\u0275classMapInterpolate1("badge bg-", ctx_r1.getStatusClass(ctx_r1.venta.estado), "-transparent");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.venta.estado);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(27, 12, ctx_r1.venta.fecha, "dd/MM/yyyy", "UTC"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(34, 16, ctx_r1.venta.total, "1.2-2"), "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.venta.metodoPago || "No especificado");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r1.venta.usuario == null ? null : ctx_r1.venta.usuario.nombre) || "N/A");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.venta.observaciones ? 47 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.venta.cliente ? 54 : 55);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.venta.detalleVentas && ctx_r1.venta.detalleVentas.length > 0 ? 56 : -1);
  }
}
function ViewSellComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 36)(2, "div", 16)(3, "div", 37);
    \u0275\u0275element(4, "i", 38);
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Venta no encontrada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 26);
    \u0275\u0275text(8, "La venta solicitada no existe o no se pudo cargar.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function ViewSellComponent_Conditional_12_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(10, "Volver a la lista");
    \u0275\u0275elementEnd()()()()();
  }
}
var _ViewSellComponent = class _ViewSellComponent {
  constructor(route, router, ventaService, toastr, cdr) {
    this.route = route;
    this.router = router;
    this.ventaService = ventaService;
    this.toastr = toastr;
    this.cdr = cdr;
    this.venta = null;
    this.loading = false;
    this.ventaId = 0;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.ventaId = +params["id"];
      if (this.ventaId) {
        this.loadVenta();
      }
    });
  }
  loadVenta() {
    this.loading = true;
    this.ventaService.getVentaById(this.ventaId).subscribe({
      next: (response) => {
        this.venta = response?.data || null;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading venta:", error);
        this.toastr.error("Error al cargar la venta", "Error", {
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
    this.router.navigate(["/dashboard/business-dashboard/sell-list"]);
  }
  editVenta() {
    this.router.navigate(["/dashboard/business-dashboard/new-sell"], {
      queryParams: { id: this.ventaId, mode: "edit" }
    });
  }
  generateTicket() {
    this.router.navigate(["/dashboard/business-dashboard/new-ticket"], {
      queryParams: { ventaId: this.ventaId }
    });
  }
  getStatusClass(estado) {
    switch (estado?.toLowerCase()) {
      case "completada":
        return "success";
      case "pendiente":
        return "warning";
      case "cancelada":
        return "danger";
      default:
        return "secondary";
    }
  }
};
_ViewSellComponent.\u0275fac = function ViewSellComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewSellComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(VentaService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_ViewSellComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewSellComponent, selectors: [["app-view-sell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 2, consts: [[1, "page-header", "d-lg-flex", "d-block"], [1, "page-leftheader"], [1, "page-title"], [1, "page-rightheader"], [1, "btn-list", "d-flex", "gap-1"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "fe", "fe-arrow-left", "fs-12", "my-auto", "me-2"], [1, "text-center", "py-4"], [1, "row"], [1, "btn", "btn-info", 3, "click"], [1, "fe", "fe-file-plus", "fs-12", "my-auto", "me-2"], [1, "btn", "btn-primary", 3, "click"], [1, "fe", "fe-edit-2", "fs-12", "my-auto", "me-2"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "col-xl-8", "col-md-12", "col-lg-8"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], [1, "form-control-static"], [1, "col-md-12"], [1, "col-xl-4", "col-md-12", "col-lg-4"], [1, "text-muted"], [1, "d-flex", "align-items-center", "mb-3"], [1, "avatar", "avatar-lg", "me-3", "avatar-rounded", "bg-primary-transparent"], [1, "fe", "fe-user", "fs-18"], [1, "mb-1"], [1, "col-xl-12"], [1, "table-responsive"], [1, "table", "table-vcenter", "text-nowrap", "table-bordered"], [1, "table-active"], ["colspan", "4", 1, "text-end"], [1, "col-12"], [1, "card-body", "text-center", "py-5"], [1, "fe", "fe-alert-circle", "fs-48", "text-muted", "mb-3"]], template: function ViewSellComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Detalle de Venta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "button", 5);
    \u0275\u0275listener("click", function ViewSellComponent_Template_button_click_6_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(7, "i", 6);
    \u0275\u0275text(8, "Volver ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ViewSellComponent_Conditional_9_Template, 6, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, ViewSellComponent_Conditional_10_Template, 4, 0, "div", 7)(11, ViewSellComponent_Conditional_11_Template, 57, 19)(12, ViewSellComponent_Conditional_12_Template, 11, 0, "div", 8);
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx.venta ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loading ? 10 : ctx.venta ? 11 : 12);
  }
}, dependencies: [SharedModule, DatePipe, DecimalPipe] });
var ViewSellComponent = _ViewSellComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewSellComponent, { className: "ViewSellComponent" });
})();
export {
  ViewSellComponent
};
//# sourceMappingURL=view-sell.component-4MZEJ36U.js.map
