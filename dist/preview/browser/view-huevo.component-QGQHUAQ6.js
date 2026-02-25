import {
  HuevosService
} from "./chunk-C3QQGMXI.js";
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
  ɵɵpipeBind2,
  ɵɵproperty,
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

// src/app/componets/dashbord/production-dashboard/huevos/view-huevo/view-huevo.component.ts
function ViewHuevoComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "span", 5);
    \u0275\u0275text(4, "Cargando...");
    \u0275\u0275elementEnd()()()();
  }
}
function ViewHuevoComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "h4", 9);
    \u0275\u0275text(5, "Informaci\xF3n del Control");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 10)(7, "div", 2)(8, "div", 11)(9, "div", 12)(10, "label", 13);
    \u0275\u0275text(11, "ID del Control:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 14);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "label", 13);
    \u0275\u0275text(17, "Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 14);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 11)(22, "div", 12)(23, "label", 13);
    \u0275\u0275text(24, "Lote/Galera:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 14);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 11)(28, "div", 12)(29, "label", 13);
    \u0275\u0275text(30, "Cantidad de Huevos:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 15);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 11)(35, "div", 12)(36, "label", 13);
    \u0275\u0275text(37, "Calidad:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 14)(39, "span", 16);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 11)(42, "div", 12)(43, "label", 13);
    \u0275\u0275text(44, "Usuario:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 14);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(47, "div", 17)(48, "div", 7)(49, "div", 8)(50, "h4", 9);
    \u0275\u0275text(51, "Resumen");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 10)(53, "div", 18)(54, "div", 19);
    \u0275\u0275element(55, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "h5", 21);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p", 22);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 2)(61, "div", 23)(62, "div", 18)(63, "h3", 24);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "p", 25);
    \u0275\u0275text(67, "Huevos Recolectados");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(68, "div", 7)(69, "div", 8)(70, "h4", 9);
    \u0275\u0275text(71, "Acciones");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 10)(73, "div", 26)(74, "button", 27);
    \u0275\u0275listener("click", function ViewHuevoComponent_div_2_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(75, "i", 28);
    \u0275\u0275text(76, "Volver a Lista ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "button", 29);
    \u0275\u0275listener("click", function ViewHuevoComponent_div_2_Template_button_click_77_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editControl());
    });
    \u0275\u0275element(78, "i", 30);
    \u0275\u0275text(79, "Editar Control ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("#CH-", ctx_r1.control.id.toString().padStart(3, "0"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 13, ctx_r1.control.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r1.control.lote == null ? null : ctx_r1.control.lote.galera, " (", ctx_r1.control.lote == null ? null : ctx_r1.control.lote.tipo, ")");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(33, 16, ctx_r1.control.cantidadHuevos), " huevos");
    \u0275\u0275advance(7);
    \u0275\u0275classMap(ctx_r1.getCalidadBadgeClass(ctx_r1.control.calidad));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.control.calidad || "Sin especificar");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.control.usuario == null ? null : ctx_r1.control.usuario.nombre, " ", ctx_r1.control.usuario == null ? null : ctx_r1.control.usuario.apellido, "");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.control.lote == null ? null : ctx_r1.control.lote.galera);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.control.lote == null ? null : ctx_r1.control.lote.tipo);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 18, ctx_r1.control.cantidadHuevos));
  }
}
function ViewHuevoComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 23)(2, "div", 7)(3, "div", 31);
    \u0275\u0275element(4, "i", 32);
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Control no encontrado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 33);
    \u0275\u0275text(8, "El control que buscas no existe o no tienes permisos para verlo.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 27);
    \u0275\u0275listener("click", function ViewHuevoComponent_div_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(10, "Volver a Lista");
    \u0275\u0275elementEnd()()()()();
  }
}
var _ViewHuevoComponent = class _ViewHuevoComponent {
  constructor(route, router, huevosService, cdr) {
    this.route = route;
    this.router = router;
    this.huevosService = huevosService;
    this.cdr = cdr;
    this.control = null;
    this.loading = false;
    this.controlId = 0;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.controlId = +params["id"];
      if (this.controlId) {
        this.loadControl();
      }
    });
  }
  loadControl() {
    this.loading = true;
    this.huevosService.getControlById(this.controlId).subscribe({
      next: (response) => {
        this.control = response.data || response;
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
    this.router.navigate(["/dashboard/production-dashboard/huevos"]);
  }
  editControl() {
    this.router.navigate(["/dashboard/production-dashboard/huevos/edit", this.controlId]);
  }
  getCalidadBadgeClass(calidad) {
    switch (calidad) {
      case "Excelente":
        return "bg-success";
      case "Buena":
        return "bg-info";
      case "Regular":
        return "bg-warning";
      case "Mala":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  }
};
_ViewHuevoComponent.\u0275fac = function ViewHuevoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewHuevoComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HuevosService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_ViewHuevoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewHuevoComponent, selectors: [["app-view-huevo"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 9, consts: [[3, "title", "title2", "class1", "path"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-12", "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "col-xl-8"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label", "fw-semibold"], [1, "mb-0"], [1, "mb-0", "fw-bold", "text-primary"], [1, "badge"], [1, "col-xl-4"], [1, "text-center"], [1, "avatar", "avatar-xl", "bg-primary-transparent", "mx-auto", "mb-3"], [1, "fe", "fe-layers", "fs-24"], [1, "mb-1"], [1, "text-muted", "mb-3"], [1, "col-12"], [1, "mb-1", "text-primary"], [1, "text-muted", "mb-0"], [1, "d-grid", "gap-2"], [1, "btn", "btn-primary", 3, "click"], [1, "fe", "fe-list", "me-2"], [1, "btn", "btn-success", 3, "click"], [1, "fe", "fe-edit-2", "me-2"], [1, "card-body", "text-center", "py-5"], [1, "fe", "fe-alert-circle", "fs-48", "text-muted", "mb-3"], [1, "text-muted"]], template: function ViewHuevoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 0);
    \u0275\u0275template(1, ViewHuevoComponent_div_1_Template, 5, 0, "div", 1)(2, ViewHuevoComponent_div_2_Template, 80, 20, "div", 1)(3, ViewHuevoComponent_div_3_Template, 11, 0, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275classMap("btn btn-secondary");
    \u0275\u0275property("title", "Detalle del Control")("title2", "Volver a Lista")("class1", "")("path", "/dashboard/production-dashboard/huevos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && ctx.control);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && !ctx.control);
  }
}, dependencies: [CommonModule, NgIf, DecimalPipe, DatePipe, SharedModule, HrDashboardPageHeaderComponent, RouterModule], styles: ["\n\n.avatar-xl[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n}\n.fs-24[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.fs-48[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n/*# sourceMappingURL=view-huevo.component.css.map */"] });
var ViewHuevoComponent = _ViewHuevoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewHuevoComponent, { className: "ViewHuevoComponent" });
})();
export {
  ViewHuevoComponent
};
//# sourceMappingURL=view-huevo.component-QGQHUAQ6.js.map
