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
  ActivatedRoute,
  ChangeDetectorRef,
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgIf,
  Router,
  RouterLink,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/bussiness-dashboard/lotes/view-lote/view-lote.component.ts
var _c0 = () => ["/dashboard/business-dashboard/lotes"];
function ViewLoteComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "span", 5);
    \u0275\u0275text(4, "Cargando...");
    \u0275\u0275elementEnd()()()();
  }
}
function ViewLoteComponent_div_2_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 12)(2, "label", 13);
    \u0275\u0275text(3, "Observaciones:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.lote.observaciones);
  }
}
function ViewLoteComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "h4", 9);
    \u0275\u0275text(5, "Informaci\xF3n del Lote");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 10)(7, "div", 2)(8, "div", 11)(9, "div", 12)(10, "label", 13);
    \u0275\u0275text(11, "ID del Lote:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 14);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "label", 13);
    \u0275\u0275text(17, "Estado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 14)(19, "span", 15);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 11)(22, "div", 12)(23, "label", 13);
    \u0275\u0275text(24, "Galera:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 14);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 11)(28, "div", 12)(29, "label", 13);
    \u0275\u0275text(30, "Tipo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 14)(32, "span", 15);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 11)(35, "div", 12)(36, "label", 13);
    \u0275\u0275text(37, "Cantidad:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 14);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 11)(42, "div", 12)(43, "label", 13);
    \u0275\u0275text(44, "Fecha de Inicio:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 14);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 11)(49, "div", 12)(50, "label", 13);
    \u0275\u0275text(51, "Fecha de Fin:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p", 14);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(55, ViewLoteComponent_div_2_div_55_Template, 6, 1, "div", 16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(56, "div", 17)(57, "div", 7)(58, "div", 8)(59, "h4", 9);
    \u0275\u0275text(60, "Estad\xEDsticas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 10)(62, "div", 2)(63, "div", 18)(64, "div", 19)(65, "div", 20);
    \u0275\u0275element(66, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "h5", 22);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "p", 23);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "div", 24)(72, "div", 25)(73, "h4", 26);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "p", 27);
    \u0275\u0275text(76, "Movimientos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 24)(78, "div", 25)(79, "h4", 28);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "p", 27);
    \u0275\u0275text(82, "Tickets");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(83, "div", 7)(84, "div", 8)(85, "h4", 9);
    \u0275\u0275text(86, "Acciones");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 10)(88, "div", 29)(89, "button", 30);
    \u0275\u0275element(90, "i", 31);
    \u0275\u0275text(91, "Volver a Lista ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "button", 32);
    \u0275\u0275listener("click", function ViewLoteComponent_div_2_Template_button_click_92_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editLote());
    });
    \u0275\u0275element(93, "i", 33);
    \u0275\u0275text(94, "Editar Lote ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.lote.id);
    \u0275\u0275advance(6);
    \u0275\u0275classMap(ctx_r1.getEstadoBadgeClass(ctx_r1.lote.estado));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.lote.estado);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.lote.galera);
    \u0275\u0275advance(6);
    \u0275\u0275classMap(ctx_r1.lote.tipo === "Ponedoras" ? "bg-info" : "bg-primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.lote.tipo);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(40, 17, ctx_r1.lote.cantidad), " aves");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(47, 19, ctx_r1.lote.fechaInicio, "dd/MM/yyyy", "UTC"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.lote.fechaFin ? \u0275\u0275pipeBind3(54, 23, ctx_r1.lote.fechaFin, "dd/MM/yyyy", "UTC") : "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.lote.observaciones);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.lote.galera);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lote.tipo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r1.lote._count == null ? null : ctx_r1.lote._count.movAvesLote) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r1.lote._count == null ? null : ctx_r1.lote._count.tickets) || 0);
    \u0275\u0275advance(9);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(27, _c0));
  }
}
function ViewLoteComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 18)(2, "div", 7)(3, "div", 34);
    \u0275\u0275element(4, "i", 35);
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Lote no encontrado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8, "El lote que buscas no existe o no tienes permisos para verlo.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 38);
    \u0275\u0275listener("click", function ViewLoteComponent_div_3_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(12, "Volver a Lista");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 39);
    \u0275\u0275listener("click", function ViewLoteComponent_div_3_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadLote());
    });
    \u0275\u0275text(14, "Reintentar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("ID buscado: ", ctx_r1.loteId, "");
  }
}
var _ViewLoteComponent = class _ViewLoteComponent {
  constructor(route, router, lotesService, cdr) {
    this.route = route;
    this.router = router;
    this.lotesService = lotesService;
    this.cdr = cdr;
    this.lote = null;
    this.loading = false;
    this.loteId = 0;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.loteId = +params["id"];
      if (this.loteId) {
        this.loadLote();
      }
    });
  }
  loadLote() {
    this.loading = true;
    this.lotesService.getLoteById(this.loteId).subscribe({
      next: (response) => {
        this.lote = response.data || response;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  goBack() {
    this.router.navigate(["/dashboard/business-dashboard/lotes"]);
  }
  editLote() {
    this.router.navigate(["/dashboard/business-dashboard/lotes/edit-lote", this.loteId]);
  }
  getEstadoBadgeClass(estado) {
    switch (estado) {
      case "Activo":
        return "bg-success";
      case "Inactivo":
        return "bg-warning";
      case "Desalojado":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  }
};
_ViewLoteComponent.\u0275fac = function ViewLoteComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewLoteComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LotesService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_ViewLoteComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewLoteComponent, selectors: [["app-view-lote"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 9, consts: [[3, "title", "title2", "class1", "path"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-12", "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "col-xl-8"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label", "fw-semibold"], [1, "mb-0"], [1, "badge"], ["class", "col-12", 4, "ngIf"], [1, "col-xl-4"], [1, "col-12"], [1, "mb-3", "text-center"], [1, "avatar", "avatar-xl", "bg-primary-transparent", "mx-auto", "mb-2"], [1, "fe", "fe-layers", "fs-24"], [1, "mb-1"], [1, "text-muted", "mb-0"], [1, "col-6"], [1, "text-center"], [1, "mb-1", "text-success"], [1, "text-muted", "mb-0", "fs-12"], [1, "mb-1", "text-primary"], [1, "d-grid", "gap-2"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fe", "fe-list", "me-2"], [1, "btn", "btn-success", 3, "click"], [1, "fe", "fe-edit-2", "me-2"], [1, "card-body", "text-center", "py-5"], [1, "fe", "fe-alert-circle", "fs-48", "text-muted", "mb-3"], [1, "text-muted"], [1, "text-muted", "small"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", "ms-2", 3, "click"]], template: function ViewLoteComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 0);
    \u0275\u0275template(1, ViewLoteComponent_div_1_Template, 5, 0, "div", 1)(2, ViewLoteComponent_div_2_Template, 95, 28, "div", 1)(3, ViewLoteComponent_div_3_Template, 15, 1, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275classMap("btn btn-secondary");
    \u0275\u0275property("title", "Detalle del Lote")("title2", "Volver a Lista")("class1", "")("path", "/dashboard/business-dashboard/lotes");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && ctx.lote);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && !ctx.lote);
  }
}, dependencies: [CommonModule, NgIf, DecimalPipe, DatePipe, SharedModule, HrDashboardPageHeaderComponent, RouterModule, RouterLink] });
var ViewLoteComponent = _ViewLoteComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewLoteComponent, { className: "ViewLoteComponent" });
})();
export {
  ViewLoteComponent
};
//# sourceMappingURL=view-lote.component-2KNVJWXP.js.map
