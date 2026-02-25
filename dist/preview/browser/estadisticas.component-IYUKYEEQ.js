import {
  LotesService
} from "./chunk-43K7FTAL.js";
import "./chunk-7WSVHSJD.js";
import {
  HrDashboardPageHeaderComponent,
  SharedModule
} from "./chunk-UEAXMXBR.js";
import "./chunk-26H6NGLN.js";
import "./chunk-ZVXZDCDW.js";
import "./chunk-KTQLQ7YR.js";
import "./chunk-ZSUERINM.js";
import "./chunk-47LBZ5ZO.js";
import {
  ChangeDetectorRef,
  CommonModule,
  DecimalPipe,
  NgIf,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/bussiness-dashboard/lotes/estadisticas/estadisticas.component.ts
function EstadisticasComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 2)(5, "div", 6)(6, "div", 7)(7, "span", 8);
    \u0275\u0275text(8, "Total Lotes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h3", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 10)(12, "div", 11);
    \u0275\u0275element(13, "i", 12);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(14, "div", 3)(15, "div", 4)(16, "div", 5)(17, "div", 2)(18, "div", 6)(19, "div", 7)(20, "span", 8);
    \u0275\u0275text(21, "Cantidad Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "h3", 13);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 10)(26, "div", 14);
    \u0275\u0275element(27, "i", 15);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(28, "div", 3)(29, "div", 4)(30, "div", 5)(31, "div", 2)(32, "div", 6)(33, "div", 7)(34, "span", 8);
    \u0275\u0275text(35, "Promedio por Lote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "h3", 16);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 10)(40, "div", 17);
    \u0275\u0275element(41, "i", 18);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(42, "div", 3)(43, "div", 4)(44, "div", 5)(45, "div", 2)(46, "div", 6)(47, "div", 7)(48, "span", 8);
    \u0275\u0275text(49, "Lotes Activos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "h3", 9);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 10)(53, "div", 11);
    \u0275\u0275element(54, "i", 19);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((ctx_r0.stats == null ? null : ctx_r0.stats.totalLotes) || 0);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 4, ctx_r0.stats == null ? null : ctx_r0.stats.cantidadTotal) || 0);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 6, ctx_r0.stats == null ? null : ctx_r0.stats.promedioCantidad, "1.0-0") || 0);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r0.getEstadoStats("Activo")._count.id);
  }
}
function EstadisticasComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 20)(2, "div", 4)(3, "div", 21)(4, "h4", 22);
    \u0275\u0275text(5, "Lotes por Tipo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "div", 2)(8, "div", 23)(9, "div", 24)(10, "div", 25)(11, "div", 26);
    \u0275\u0275element(12, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h4", 28);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 29);
    \u0275\u0275text(16, "Lotes Ponedoras");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 30);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 23)(21, "div", 31)(22, "div", 25)(23, "div", 26);
    \u0275\u0275element(24, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h4", 33);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 29);
    \u0275\u0275text(28, "Lotes Engorde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 30);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(32, "div", 20)(33, "div", 4)(34, "div", 21)(35, "h4", 22);
    \u0275\u0275text(36, "Lotes por Estado");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 5)(38, "div", 2)(39, "div", 34)(40, "div", 35)(41, "div", 25)(42, "div", 26);
    \u0275\u0275element(43, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "h5", 37);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p", 38);
    \u0275\u0275text(47, "Activos");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 34)(49, "div", 39)(50, "div", 25)(51, "div", 26);
    \u0275\u0275element(52, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "h5", 41);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p", 38);
    \u0275\u0275text(56, "Inactivos");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "div", 34)(58, "div", 42)(59, "div", 25)(60, "div", 26);
    \u0275\u0275element(61, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "h5", 44);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "p", 38);
    \u0275\u0275text(65, "Desalojados");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r0.getTipoStats("Ponedoras")._count.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(19, 7, ctx_r0.getTipoStats("Ponedoras")._sum.cantidad) || 0, " aves");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.getTipoStats("Engorde")._count.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(31, 9, ctx_r0.getTipoStats("Engorde")._sum.cantidad) || 0, " aves");
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r0.getEstadoStats("Activo")._count.id);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.getEstadoStats("Inactivo")._count.id);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.getEstadoStats("Desalojado")._count.id);
  }
}
function EstadisticasComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 45)(2, "div", 4)(3, "div", 46)(4, "div", 47)(5, "span", 48);
    \u0275\u0275text(6, "Cargando...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 49);
    \u0275\u0275text(8, "Cargando estad\xEDsticas...");
    \u0275\u0275elementEnd()()()()();
  }
}
var _EstadisticasComponent = class _EstadisticasComponent {
  constructor(lotesService, cdr) {
    this.lotesService = lotesService;
    this.cdr = cdr;
    this.loading = false;
    this.stats = null;
  }
  ngOnInit() {
    this.loadStats();
  }
  loadStats() {
    this.loading = true;
    this.lotesService.getStats().subscribe({
      next: (response) => {
        this.stats = response.data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error al cargar estad\xEDsticas:", error);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  getTipoStats(tipo) {
    return this.stats?.lotesPorTipo?.find((item) => item.tipo === tipo) || { _count: { id: 0 }, _sum: { cantidad: 0 } };
  }
  getEstadoStats(estado) {
    return this.stats?.lotesPorEstado?.find((item) => item.estado === estado) || { _count: { id: 0 } };
  }
};
_EstadisticasComponent.\u0275fac = function EstadisticasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EstadisticasComponent)(\u0275\u0275directiveInject(LotesService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_EstadisticasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EstadisticasComponent, selectors: [["app-estadisticas"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 9, consts: [[3, "title", "title2", "class1", "path"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-xl-3", "col-lg-6", "col-md-6"], [1, "card", "custom-card"], [1, "card-body"], [1, "col-7"], [1, "mt-0", "text-start"], [1, "fw-medium"], [1, "mb-0", "mt-1", "text-success"], [1, "col-5"], [1, "icon1", "bg-success-transparent", "my-auto", "float-end"], [1, "las", "la-layer-group"], [1, "mb-0", "mt-1", "text-primary"], [1, "icon1", "bg-primary-transparent", "my-auto", "float-end"], [1, "las", "la-calculator"], [1, "mb-0", "mt-1", "text-info"], [1, "icon1", "bg-info-transparent", "my-auto", "float-end"], [1, "las", "la-chart-bar"], [1, "las", "la-check-circle"], [1, "col-xl-6"], [1, "card-header"], [1, "card-title"], [1, "col-md-6"], [1, "card", "bg-info-transparent"], [1, "card-body", "text-center"], [1, "mb-2"], [1, "las", "la-egg", "fs-40", "text-info"], [1, "mb-1", "text-info"], [1, "mb-1", "fw-semibold"], [1, "mb-0", "text-muted"], [1, "card", "bg-primary-transparent"], [1, "las", "la-drumstick-bite", "fs-40", "text-primary"], [1, "mb-1", "text-primary"], [1, "col-md-4"], [1, "card", "bg-success-transparent"], [1, "las", "la-check-circle", "fs-30", "text-success"], [1, "mb-1", "text-success"], [1, "mb-0", "fw-semibold"], [1, "card", "bg-warning-transparent"], [1, "las", "la-pause-circle", "fs-30", "text-warning"], [1, "mb-1", "text-warning"], [1, "card", "bg-danger-transparent"], [1, "las", "la-times-circle", "fs-30", "text-danger"], [1, "mb-1", "text-danger"], [1, "col-12"], [1, "card-body", "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-muted"]], template: function EstadisticasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 0);
    \u0275\u0275template(1, EstadisticasComponent_div_1_Template, 55, 9, "div", 1)(2, EstadisticasComponent_div_2_Template, 66, 11, "div", 1)(3, EstadisticasComponent_div_3_Template, 9, 0, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275classMap("btn btn-secondary");
    \u0275\u0275property("title", "Estad\xEDsticas de Lotes")("title2", "Volver a Lista")("class1", "")("path", "/dashboard/business-dashboard/lotes");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
  }
}, dependencies: [CommonModule, NgIf, DecimalPipe, SharedModule, HrDashboardPageHeaderComponent, RouterModule] });
var EstadisticasComponent = _EstadisticasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EstadisticasComponent, { className: "EstadisticasComponent" });
})();
export {
  EstadisticasComponent
};
//# sourceMappingURL=estadisticas.component-IYUKYEEQ.js.map
