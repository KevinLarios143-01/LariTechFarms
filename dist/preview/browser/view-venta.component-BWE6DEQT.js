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
  CommonModule,
  DatePipe,
  DecimalPipe,
  Router,
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/bussiness-dashboard/ventas/view-venta/view-venta.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["../../edit", a0];
function ViewVentaComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 15);
    \u0275\u0275listener("click", function ViewVentaComponent_Conditional_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.anularVenta());
    });
    \u0275\u0275element(4, "i", 16);
    \u0275\u0275text(5, " Anular ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, ctx_r1.ventaId));
  }
}
function ViewVentaComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 17)(2, "span", 18);
    \u0275\u0275text(3, "Cargando...");
    \u0275\u0275elementEnd()()();
  }
}
function ViewVentaComponent_Conditional_14_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "br");
    \u0275\u0275elementStart(1, "small", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.venta.cliente.telefono);
  }
}
function ViewVentaComponent_Conditional_14_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275template(1, ViewVentaComponent_Conditional_14_Conditional_17_Conditional_1_Template, 3, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.venta.cliente.nombre, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.venta.cliente.telefono ? 1 : -1);
  }
}
function ViewVentaComponent_Conditional_14_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "Cliente general");
    \u0275\u0275elementEnd();
  }
}
function ViewVentaComponent_Conditional_14_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.venta.metodoPago);
  }
}
function ViewVentaComponent_Conditional_14_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "No especificado");
    \u0275\u0275elementEnd();
  }
}
function ViewVentaComponent_Conditional_14_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 24);
    \u0275\u0275text(2, "Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.venta.observaciones);
  }
}
function ViewVentaComponent_Conditional_14_For_65_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const detalle_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(detalle_r3.producto.tamanio);
  }
}
function ViewVentaComponent_Conditional_14_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ViewVentaComponent_Conditional_14_For_65_Conditional_4_Template, 2, 1, "small", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 34);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 38);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const detalle_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(detalle_r3.producto.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(detalle_r3.producto.tamanio ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(detalle_r3.cantidad);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(9, 5, detalle_r3.precioUnitario, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(12, 8, detalle_r3.subtotal, "1.2-2"), "");
  }
}
function ViewVentaComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "h6", 22);
    \u0275\u0275text(5, "Informaci\xF3n General");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 9)(7, "div", 23)(8, "div", 24);
    \u0275\u0275text(9, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 25);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 23)(14, "div", 24);
    \u0275\u0275text(15, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 25);
    \u0275\u0275template(17, ViewVentaComponent_Conditional_14_Conditional_17_Template, 2, 2)(18, ViewVentaComponent_Conditional_14_Conditional_18_Template, 2, 0, "span", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 23)(20, "div", 24);
    \u0275\u0275text(21, "M\xE9todo de Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 25);
    \u0275\u0275template(23, ViewVentaComponent_Conditional_14_Conditional_23_Template, 2, 1, "span", 27)(24, ViewVentaComponent_Conditional_14_Conditional_24_Template, 2, 0, "span", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 22)(26, "div", 24);
    \u0275\u0275text(27, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div")(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(31, "div", 19)(32, "div", 20)(33, "div", 21)(34, "h6", 22);
    \u0275\u0275text(35, "Resumen");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 9)(37, "div", 23)(38, "div", 24);
    \u0275\u0275text(39, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 25)(41, "h4", 28);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(44, ViewVentaComponent_Conditional_14_Conditional_44_Template, 5, 1, "div", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 29)(46, "div", 20)(47, "div", 21)(48, "h6", 22);
    \u0275\u0275text(49, "Productos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 9)(51, "div", 30)(52, "table", 31)(53, "thead", 32)(54, "tr")(55, "th");
    \u0275\u0275text(56, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th", 33);
    \u0275\u0275text(58, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th", 34);
    \u0275\u0275text(60, "Precio Unit.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "th", 34);
    \u0275\u0275text(62, "Subtotal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "tbody");
    \u0275\u0275repeaterCreate(64, ViewVentaComponent_Conditional_14_For_65_Template, 13, 11, "tr", null, _forTrack0);
    \u0275\u0275elementStart(66, "tr", 32)(67, "td", 35);
    \u0275\u0275text(68, "TOTAL:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "td", 36);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "number");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 9, ctx_r1.venta.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.venta.cliente ? 17 : 18);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.venta.metodoPago ? 23 : 24);
    \u0275\u0275advance(6);
    \u0275\u0275classMap("badge " + ctx_r1.getEstadoBadgeClass(ctx_r1.venta.estado));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.venta.estado, " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(43, 12, ctx_r1.venta.total, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.venta.observaciones ? 44 : -1);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r1.venta.detalleVentas);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(71, 15, ctx_r1.venta.total, "1.2-2"), "");
  }
}
function ViewVentaComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, " No se encontr\xF3 la venta solicitada. ");
    \u0275\u0275elementEnd();
  }
}
var _ViewVentaComponent = class _ViewVentaComponent {
  constructor(ventaService, router, route, cdr, toastr) {
    this.ventaService = ventaService;
    this.router = router;
    this.route = route;
    this.cdr = cdr;
    this.toastr = toastr;
    this.venta = null;
    this.isLoading = false;
  }
  ngOnInit() {
    this.ventaId = Number(this.route.snapshot.paramMap.get("id"));
    this.loadVenta();
  }
  loadVenta() {
    this.isLoading = true;
    this.ventaService.getVentaById(this.ventaId).subscribe({
      next: (response) => {
        if (response?.data) {
          this.venta = response.data;
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error("Error al cargar la venta", "Error");
        this.router.navigate(["../list"], { relativeTo: this.route });
      }
    });
  }
  anularVenta() {
    if (!this.venta || this.venta.estado === "Cancelada")
      return;
    const motivo = prompt("Ingrese el motivo de anulaci\xF3n de la venta (opcional):");
    if (motivo === null) {
      return;
    }
    if (confirm("\xBFEst\xE1 seguro de anular esta venta? Esta acci\xF3n restaurar\xE1 el stock de los productos.")) {
      const payload = motivo && motivo.trim() ? { motivoAnulacion: motivo.trim() } : {};
      this.ventaService.anularVenta(this.ventaId, payload).subscribe({
        next: () => {
          this.toastr.success("Venta anulada exitosamente", "\xC9xito");
          this.loadVenta();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || "Error al anular venta";
          this.toastr.error(errorMsg, "Error");
        }
      });
    }
  }
  getEstadoBadgeClass(estado) {
    const classes = {
      "Completada": "bg-success",
      "Pendiente": "bg-warning",
      "Cancelada": "bg-danger"
    };
    return classes[estado] || "bg-secondary";
  }
};
_ViewVentaComponent.\u0275fac = function ViewVentaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewVentaComponent)(\u0275\u0275directiveInject(VentaService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_ViewVentaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewVentaComponent, selectors: [["app-view-venta"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 3, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title"], [1, "d-flex", "gap-2"], ["routerLink", "../../list", 1, "btn", "btn-secondary", "btn-sm"], [1, "ri-arrow-left-line"], [1, "card-body"], [1, "text-center", "py-5"], [1, "row", "g-4"], [1, "alert", "alert-warning"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "ri-edit-line"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "ri-close-circle-line"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "col-md-6"], [1, "card", "border"], [1, "card-header", "bg-light"], [1, "mb-0"], [1, "mb-3"], [1, "info-label"], [1, "info-value"], [1, "text-muted"], [1, "badge", "bg-light", "text-dark"], [1, "text-success", "mb-0"], [1, "col-md-12"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "table-light"], [1, "text-center"], [1, "text-end"], ["colspan", "3", 1, "text-end", "fw-bold"], [1, "text-end", "fw-bold", "text-success"], [1, "fw-semibold"], [1, "text-end", "fw-semibold"]], template: function ViewVentaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275template(8, ViewVentaComponent_Conditional_8_Template, 6, 3);
    \u0275\u0275elementStart(9, "button", 7);
    \u0275\u0275element(10, "i", 8);
    \u0275\u0275text(11, " Volver ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275template(13, ViewVentaComponent_Conditional_13_Template, 4, 0, "div", 10)(14, ViewVentaComponent_Conditional_14_Template, 72, 18, "div", 11)(15, ViewVentaComponent_Conditional_15_Template, 2, 0, "div", 12);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Detalle de Venta #", ctx.ventaId, "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.venta && ctx.venta.estado !== "Cancelada" ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.isLoading ? 13 : ctx.venta ? 14 : 15);
  }
}, dependencies: [CommonModule, DecimalPipe, DatePipe, RouterModule, RouterLink, SharedModule], styles: ["\n\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #6c757d;\n  margin-bottom: 0.25rem;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #212529;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  padding: 0.5em 0.75em;\n}\n/*# sourceMappingURL=view-venta.component.css.map */"] });
var ViewVentaComponent = _ViewVentaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewVentaComponent, { className: "ViewVentaComponent" });
})();
export {
  ViewVentaComponent
};
//# sourceMappingURL=view-venta.component-BWE6DEQT.js.map
