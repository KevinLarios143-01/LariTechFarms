import {
  GastoOperacionService
} from "./chunk-PUFVTQBG.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/production-dashboard/gastos-operacion/view-gasto/view-gasto.component.ts
var _c0 = (a0) => ["../../edit", a0];
function ViewGastoComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 17)(2, "span", 18);
    \u0275\u0275text(3, "Cargando...");
    \u0275\u0275elementEnd()()();
  }
}
function ViewGastoComponent_Conditional_19_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.gasto.metodoPago);
  }
}
function ViewGastoComponent_Conditional_19_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "No especificado");
    \u0275\u0275elementEnd();
  }
}
function ViewGastoComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "h6", 22);
    \u0275\u0275text(5, "Informaci\xF3n Principal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13)(7, "div", 23)(8, "div", 24);
    \u0275\u0275text(9, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 25);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 23)(14, "div", 24);
    \u0275\u0275text(15, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 23)(20, "div", 24);
    \u0275\u0275text(21, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 26);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 22)(26, "div", 24);
    \u0275\u0275text(27, "M\xE9todo de Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 25);
    \u0275\u0275template(29, ViewGastoComponent_Conditional_19_Conditional_29_Template, 2, 1, "span", 27)(30, ViewGastoComponent_Conditional_19_Conditional_30_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(31, "div", 19)(32, "div", 20)(33, "div", 21)(34, "h6", 22);
    \u0275\u0275text(35, "Descripci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 13)(37, "p", 22);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 29)(40, "div", 20)(41, "div", 21)(42, "h6", 22);
    \u0275\u0275text(43, "Informaci\xF3n de Auditor\xEDa");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 13)(45, "div", 1)(46, "div", 19)(47, "div", 24);
    \u0275\u0275text(48, "Fecha de Creaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 25);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 19)(53, "div", 24);
    \u0275\u0275text(54, "\xDAltima Actualizaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 25);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "date");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 9, ctx_r0.gasto.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275classMap("badge " + ctx_r0.getCategoriaBadgeClass(ctx_r0.gasto.categoria));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.gasto.categoria, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Q", \u0275\u0275pipeBind2(24, 12, ctx_r0.gasto.monto, "1.2-2"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.gasto.metodoPago ? 29 : 30);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.gasto.descripcion);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 15, ctx_r0.gasto.createdAt, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 18, ctx_r0.gasto.updatedAt, "dd/MM/yyyy HH:mm"));
  }
}
function ViewGastoComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, " No se encontr\xF3 el gasto solicitado. ");
    \u0275\u0275elementEnd();
  }
}
var _ViewGastoComponent = class _ViewGastoComponent {
  constructor(gastoService, router, route, cdr, toastr) {
    this.gastoService = gastoService;
    this.router = router;
    this.route = route;
    this.cdr = cdr;
    this.toastr = toastr;
    this.gasto = null;
    this.isLoading = false;
  }
  ngOnInit() {
    this.gastoId = Number(this.route.snapshot.paramMap.get("id"));
    this.loadGasto();
  }
  loadGasto() {
    this.isLoading = true;
    this.gastoService.getGastoById(this.gastoId).subscribe({
      next: (response) => {
        if (response?.data) {
          this.gasto = response.data;
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error("Error al cargar el gasto", "Error");
        this.router.navigate(["../list"], { relativeTo: this.route });
      }
    });
  }
  deleteGasto() {
    if (confirm("\xBFEst\xE1 seguro de eliminar este gasto?")) {
      this.gastoService.deleteGasto(this.gastoId).subscribe({
        next: () => {
          this.toastr.success("Gasto eliminado exitosamente", "\xC9xito");
          this.router.navigate(["../list"], { relativeTo: this.route });
        },
        error: (error) => {
          const errorMsg = error?.error?.message || "Error al eliminar gasto";
          this.toastr.error(errorMsg, "Error");
        }
      });
    }
  }
  getCategoriaBadgeClass(categoria) {
    const classes = {
      "Mantenimiento": "bg-warning",
      "Servicios": "bg-info",
      "Insumos": "bg-primary",
      "Personal": "bg-success",
      "Transporte": "bg-secondary",
      "Limpieza": "bg-light text-dark",
      "Combustible": "bg-danger",
      "Medicamentos": "bg-purple"
    };
    return classes[categoria] || "bg-secondary";
  }
};
_ViewGastoComponent.\u0275fac = function ViewGastoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewGastoComponent)(\u0275\u0275directiveInject(GastoOperacionService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_ViewGastoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewGastoComponent, selectors: [["app-view-gasto"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 4, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title"], [1, "d-flex", "gap-2"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "ri-edit-line"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "ri-delete-bin-line"], ["routerLink", "../../list", 1, "btn", "btn-secondary", "btn-sm"], [1, "ri-arrow-left-line"], [1, "card-body"], [1, "text-center", "py-5"], [1, "row", "g-4"], [1, "alert", "alert-warning"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "col-md-6"], [1, "card", "border"], [1, "card-header", "bg-light"], [1, "mb-0"], [1, "mb-3"], [1, "info-label"], [1, "info-value"], [1, "info-value", "text-danger", "fw-bold"], [1, "badge", "bg-light", "text-dark"], [1, "text-muted"], [1, "col-md-12"]], template: function ViewGastoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Detalle del Gasto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 9);
    \u0275\u0275listener("click", function ViewGastoComponent_Template_button_click_11_listener() {
      return ctx.deleteGasto();
    });
    \u0275\u0275element(12, "i", 10);
    \u0275\u0275text(13, " Eliminar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 11);
    \u0275\u0275element(15, "i", 12);
    \u0275\u0275text(16, " Volver ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 13);
    \u0275\u0275template(18, ViewGastoComponent_Conditional_18_Template, 4, 0, "div", 14)(19, ViewGastoComponent_Conditional_19_Template, 58, 21, "div", 15)(20, ViewGastoComponent_Conditional_20_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, ctx.gastoId));
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx.isLoading ? 18 : ctx.gasto ? 19 : 20);
  }
}, dependencies: [CommonModule, DecimalPipe, DatePipe, RouterModule, RouterLink, SharedModule], styles: ["\n\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #6c757d;\n  margin-bottom: 0.25rem;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #212529;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  padding: 0.5em 0.75em;\n}\n.bg-purple[_ngcontent-%COMP%] {\n  background-color: #6f42c1 !important;\n  color: white;\n}\n/*# sourceMappingURL=view-gasto.component.css.map */"] });
var ViewGastoComponent = _ViewGastoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewGastoComponent, { className: "ViewGastoComponent" });
})();
export {
  ViewGastoComponent
};
//# sourceMappingURL=view-gasto.component-JVBRGPQ2.js.map
