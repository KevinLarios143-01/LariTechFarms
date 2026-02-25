import {
  ProductosService
} from "./chunk-UK4IXMZI.js";
import "./chunk-7WSVHSJD.js";
import {
  HrDashboardPageHeaderComponent,
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
  ChangeDetectorRef,
  CommonModule,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/production-dashboard/productos/estadisticas/estadisticas.component.ts
var _forTrack0 = ($index, $item) => $item.categoria;
var _forTrack1 = ($index, $item) => $item.id;
function EstadisticasComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 9)(2, "span", 10);
    \u0275\u0275text(3, "Cargando estad\xEDsticas...");
    \u0275\u0275elementEnd()()();
  }
}
function EstadisticasComponent_Conditional_11_Conditional_36_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 31)(7, "div", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const categoria_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(categoria_r1.categoria);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(categoria_r1._count.id);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.getPercentage(categoria_r1._count.id, ctx_r1.stats.totalProductos), "%");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPercentage(categoria_r1._count.id, ctx_r1.stats.totalProductos).toFixed(1), "% ");
  }
}
function EstadisticasComponent_Conditional_11_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EstadisticasComponent_Conditional_11_Conditional_36_For_1_Template, 9, 5, "div", 27, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.stats.productosPorCategoria);
  }
}
function EstadisticasComponent_Conditional_11_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, "No hay datos de categor\xEDas disponibles");
    \u0275\u0275elementEnd();
  }
}
function EstadisticasComponent_Conditional_11_Conditional_44_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "br");
    \u0275\u0275elementStart(6, "small", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 39);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const producto_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(producto_r3.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(producto_r3.categoria);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", producto_r3.stock, " unidades");
  }
}
function EstadisticasComponent_Conditional_11_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EstadisticasComponent_Conditional_11_Conditional_44_For_1_Template, 10, 3, "div", 37, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.stats.stockBajo);
  }
}
function EstadisticasComponent_Conditional_11_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2, " Todos los productos tienen stock adecuado ");
    \u0275\u0275elementEnd();
  }
}
function EstadisticasComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "h5", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 16);
    \u0275\u0275text(7, "Total Productos");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "div", 12)(9, "div", 13)(10, "div", 14)(11, "h5", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 16);
    \u0275\u0275text(14, "Productos Activos");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "h5", 18);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 16);
    \u0275\u0275text(21, "Productos Inactivos");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 12)(23, "div", 13)(24, "div", 14)(25, "h5", 19);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 16);
    \u0275\u0275text(28, "Valor Total Inventario");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(29, "div", 11)(30, "div", 3)(31, "div", 20)(32, "div", 21)(33, "h6", 22);
    \u0275\u0275text(34, "Productos por Categor\xEDa");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 14);
    \u0275\u0275template(36, EstadisticasComponent_Conditional_11_Conditional_36_Template, 2, 0)(37, EstadisticasComponent_Conditional_11_Conditional_37_Template, 2, 0, "p", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 3)(39, "div", 20)(40, "div", 21)(41, "h6", 22);
    \u0275\u0275text(42, "Productos con Stock Bajo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 14);
    \u0275\u0275template(44, EstadisticasComponent_Conditional_11_Conditional_44_Template, 2, 0)(45, EstadisticasComponent_Conditional_11_Conditional_45_Template, 3, 0, "div", 24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 11)(47, "div", 25)(48, "div", 20)(49, "div", 21)(50, "h6", 22);
    \u0275\u0275text(51, "Estado de Productos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 14)(53, "div", 26)(54, "div", 3)(55, "div", 27)(56, "div", 28)(57, "span", 29);
    \u0275\u0275text(58, "Productos Activos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 30);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 31);
    \u0275\u0275element(62, "div", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div", 3)(64, "div", 27)(65, "div", 28)(66, "span", 33);
    \u0275\u0275text(67, "Productos Inactivos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 30);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 31);
    \u0275\u0275element(71, "div", 34);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalProductos);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.stats.productosActivos);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.stats.productosInactivos);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("$", ctx_r1.stats.valorTotalInventario.toFixed(2), "");
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r1.stats.productosPorCategoria && ctx_r1.stats.productosPorCategoria.length > 0 ? 36 : 37);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.stats.stockBajo && ctx_r1.stats.stockBajo.length > 0 ? 44 : 45);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate2("", ctx_r1.stats.productosActivos, " (", ctx_r1.getPercentage(ctx_r1.stats.productosActivos, ctx_r1.stats.totalProductos).toFixed(1), "%)");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.getPercentage(ctx_r1.stats.productosActivos, ctx_r1.stats.totalProductos), "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r1.stats.productosInactivos, " (", ctx_r1.getPercentage(ctx_r1.stats.productosInactivos, ctx_r1.stats.totalProductos).toFixed(1), "%)");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.getPercentage(ctx_r1.stats.productosInactivos, ctx_r1.stats.totalProductos), "%");
  }
}
function EstadisticasComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275text(2, " No hay datos estad\xEDsticos disponibles. ");
    \u0275\u0275elementEnd();
  }
}
var _EstadisticasComponent = class _EstadisticasComponent {
  constructor(productosService, cdr, toastr) {
    this.productosService = productosService;
    this.cdr = cdr;
    this.toastr = toastr;
    this.stats = null;
    this.isLoading = false;
  }
  ngOnInit() {
    this.loadStats();
  }
  loadStats() {
    this.isLoading = true;
    this.productosService.getStats().subscribe({
      next: (response) => {
        this.stats = response.data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error("Error al cargar estad\xEDsticas", "Error", {
          progressBar: true,
          closeButton: true
        });
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  getPercentage(value, total) {
    if (total === 0)
      return 0;
    return value / total * 100;
  }
};
_EstadisticasComponent.\u0275fac = function EstadisticasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EstadisticasComponent)(\u0275\u0275directiveInject(ProductosService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_EstadisticasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EstadisticasComponent, selectors: [["app-estadisticas"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 7, consts: [[3, "title", "title2", "class1", "path"], [1, "container-fluid"], [1, "row", "mb-3"], [1, "col-md-6"], [1, "col-md-6", "text-end"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "fas", "fa-sync-alt"], [1, "text-center"], [1, "alert", "alert-info"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "row", "mb-4"], [1, "col-md-3"], [1, "card", "text-center"], [1, "card-body"], [1, "card-title", "text-primary"], [1, "card-text"], [1, "card-title", "text-success"], [1, "card-title", "text-danger"], [1, "card-title", "text-info"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "text-muted"], [1, "alert", "alert-success"], [1, "col-md-12"], [1, "row"], [1, "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], [1, "fw-bold", "text-success"], [1, "fw-bold"], [1, "progress"], [1, "progress-bar", "bg-success"], [1, "fw-bold", "text-danger"], [1, "progress-bar", "bg-danger"], [1, "badge", "bg-primary"], [1, "progress-bar", "bg-primary"], [1, "alert", "alert-warning", "mb-2"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "bg-danger"], [1, "fas", "fa-check-circle"], [1, "fas", "fa-info-circle"]], template: function EstadisticasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4");
    \u0275\u0275text(5, "Dashboard de Productos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
    \u0275\u0275listener("click", function EstadisticasComponent_Template_button_click_7_listener() {
      return ctx.loadStats();
    });
    \u0275\u0275element(8, "i", 6);
    \u0275\u0275text(9, " Actualizar ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, EstadisticasComponent_Conditional_10_Template, 4, 0, "div", 7)(11, EstadisticasComponent_Conditional_11_Template, 72, 14)(12, EstadisticasComponent_Conditional_12_Template, 3, 0, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275classMap("btn btn-outline-primary");
    \u0275\u0275property("title", "Dashboard de Productos")("title2", "Lista de Productos")("class1", "")("path", "../list");
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx.isLoading ? 10 : ctx.stats ? 11 : 12);
  }
}, dependencies: [CommonModule, SharedModule, HrDashboardPageHeaderComponent] });
var EstadisticasComponent = _EstadisticasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EstadisticasComponent, { className: "EstadisticasComponent" });
})();
export {
  EstadisticasComponent
};
//# sourceMappingURL=estadisticas.component-EW6SSXCO.js.map
