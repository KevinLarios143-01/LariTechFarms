import {
  VehiculoService
} from "./chunk-PUYTWGLT.js";
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/production-dashboard/vehiculos/view-vehiculo/view-vehiculo.component.ts
var _c0 = (a0) => ["../../edit", a0];
function ViewVehiculoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "span", 4);
    \u0275\u0275text(4, "Cargando...");
    \u0275\u0275elementEnd()()()();
  }
}
function ViewVehiculoComponent_Conditional_2_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.calcularAntiguedad(), " a\xF1os)");
  }
}
function ViewVehiculoComponent_Conditional_2_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r1.vehiculo.capacidad, "1.0-0"), " kg ");
  }
}
function ViewVehiculoComponent_Conditional_2_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No especificada ");
  }
}
function ViewVehiculoComponent_Conditional_2_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2, " Veh\xEDculo disponible para operaciones ");
    \u0275\u0275elementEnd();
  }
}
function ViewVehiculoComponent_Conditional_2_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275text(2, " Veh\xEDculo en mantenimiento ");
    \u0275\u0275elementEnd();
  }
}
function ViewVehiculoComponent_Conditional_2_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275text(2, " Veh\xEDculo no disponible ");
    \u0275\u0275elementEnd();
  }
}
function ViewVehiculoComponent_Conditional_2_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2, " Veh\xEDculo vendido ");
    \u0275\u0275elementEnd();
  }
}
function ViewVehiculoComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8);
    \u0275\u0275text(5, "Detalles del Veh\xEDculo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "button", 10);
    \u0275\u0275element(8, "i", 11);
    \u0275\u0275text(9, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 12);
    \u0275\u0275listener("click", function ViewVehiculoComponent_Conditional_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteVehiculo());
    });
    \u0275\u0275element(11, "i", 13);
    \u0275\u0275text(12, " Eliminar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 14);
    \u0275\u0275element(14, "i", 15);
    \u0275\u0275text(15, " Volver ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 16)(17, "div", 17)(18, "div", 18)(19, "div", 19)(20, "div", 20)(21, "h6", 21);
    \u0275\u0275text(22, "Informaci\xF3n del Veh\xEDculo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 16)(24, "div", 22)(25, "div", 23)(26, "label", 24);
    \u0275\u0275text(27, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 25);
    \u0275\u0275element(29, "i", 26);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 23)(32, "label", 24);
    \u0275\u0275text(33, "Placa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 27);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 23)(37, "label", 24);
    \u0275\u0275text(38, "Marca");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 25);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 23)(42, "label", 24);
    \u0275\u0275text(43, "Modelo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 25);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 23)(47, "label", 24);
    \u0275\u0275text(48, "A\xF1o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 25);
    \u0275\u0275text(50);
    \u0275\u0275template(51, ViewVehiculoComponent_Conditional_2_Conditional_51_Template, 2, 1, "small", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 23)(53, "label", 24);
    \u0275\u0275text(54, "Capacidad de Carga");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 25);
    \u0275\u0275template(56, ViewVehiculoComponent_Conditional_2_Conditional_56_Template, 2, 4)(57, ViewVehiculoComponent_Conditional_2_Conditional_57_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 29)(59, "label", 24);
    \u0275\u0275text(60, "Fecha de Adquisici\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 25);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "date");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(64, "div", 30)(65, "div", 19)(66, "div", 20)(67, "h6", 21);
    \u0275\u0275text(68, "Estado del Veh\xEDculo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 31)(70, "div", 32)(71, "span");
    \u0275\u0275element(72, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "h4");
    \u0275\u0275text(74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 33);
    \u0275\u0275template(76, ViewVehiculoComponent_Conditional_2_Conditional_76_Template, 3, 0, "div", 34)(77, ViewVehiculoComponent_Conditional_2_Conditional_77_Template, 3, 0, "div", 35)(78, ViewVehiculoComponent_Conditional_2_Conditional_78_Template, 3, 0, "div", 36)(79, ViewVehiculoComponent_Conditional_2_Conditional_79_Template, 3, 0, "div", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(80, "div", 38)(81, "div", 20)(82, "h6", 21);
    \u0275\u0275text(83, "Informaci\xF3n del Sistema");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 16)(85, "div", 39)(86, "small", 28);
    \u0275\u0275text(87, "ID del Veh\xEDculo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 25);
    \u0275\u0275text(89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div")(91, "small", 28);
    \u0275\u0275text(92, "Tenant ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div", 25);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c0, ctx_r1.vehiculo.id));
    \u0275\u0275advance(23);
    \u0275\u0275textInterpolate1("", ctx_r1.vehiculo.tipo, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.vehiculo.placa);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.vehiculo.marca);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.vehiculo.modelo);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.vehiculo.anio || "No especificado", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.vehiculo.anio ? 51 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.vehiculo.capacidad ? 56 : 57);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.vehiculo.fechaAdquisicion ? \u0275\u0275pipeBind2(63, 19, ctx_r1.vehiculo.fechaAdquisicion, "dd/MM/yyyy") : "No especificada", " ");
    \u0275\u0275advance(9);
    \u0275\u0275classMap("avatar avatar-xl avatar-rounded bg-" + ctx_r1.getEstadoBadgeClass(ctx_r1.vehiculo.estado) + "-transparent");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getEstadoIcon(ctx_r1.vehiculo.estado) + " fs-1");
    \u0275\u0275advance();
    \u0275\u0275classMap("text-" + ctx_r1.getEstadoBadgeClass(ctx_r1.vehiculo.estado));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.vehiculo.estado);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.vehiculo.estado === "Activo" ? 76 : ctx_r1.vehiculo.estado === "Mantenimiento" ? 77 : ctx_r1.vehiculo.estado === "Inactivo" ? 78 : ctx_r1.vehiculo.estado === "Vendido" ? 79 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("#", ctx_r1.vehiculo.id, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("#", ctx_r1.vehiculo.idTenant, "");
  }
}
var _ViewVehiculoComponent = class _ViewVehiculoComponent {
  constructor(vehiculoService, route, router, cdr, toastr) {
    this.vehiculoService = vehiculoService;
    this.route = route;
    this.router = router;
    this.cdr = cdr;
    this.toastr = toastr;
    this.vehiculo = null;
    this.isLoading = false;
    this.vehiculoId = null;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.vehiculoId = parseInt(id);
      this.loadVehiculo();
    } else {
      this.router.navigate(["../list"], { relativeTo: this.route });
    }
  }
  loadVehiculo() {
    if (this.vehiculoId) {
      this.isLoading = true;
      this.vehiculoService.getVehiculoById(this.vehiculoId).subscribe({
        next: (response) => {
          this.vehiculo = response.data;
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          this.toastr.error("Error al cargar veh\xEDculo", "Error");
          this.isLoading = false;
          this.router.navigate(["../list"], { relativeTo: this.route });
        }
      });
    }
  }
  getEstadoBadgeClass(estado) {
    const classes = {
      "Activo": "success",
      "Inactivo": "secondary",
      "Mantenimiento": "warning",
      "Vendido": "danger"
    };
    return classes[estado] || "secondary";
  }
  getEstadoIcon(estado) {
    const icons = {
      "Activo": "ri-checkbox-circle-line",
      "Inactivo": "ri-close-circle-line",
      "Mantenimiento": "ri-tools-line",
      "Vendido": "ri-shopping-cart-line"
    };
    return icons[estado] || "ri-question-line";
  }
  deleteVehiculo() {
    if (this.vehiculoId && confirm("\xBFEst\xE1 seguro de eliminar este veh\xEDculo?")) {
      this.vehiculoService.deleteVehiculo(this.vehiculoId).subscribe({
        next: () => {
          this.toastr.success("Veh\xEDculo eliminado exitosamente", "\xC9xito");
          this.router.navigate(["../../list"], { relativeTo: this.route });
        },
        error: (error) => {
          const errorMsg = error?.error?.message || "Error al eliminar veh\xEDculo";
          this.toastr.error(errorMsg, "Error");
        }
      });
    }
  }
  calcularAntiguedad() {
    if (!this.vehiculo?.anio)
      return 0;
    return (/* @__PURE__ */ new Date()).getFullYear() - this.vehiculo.anio;
  }
};
_ViewVehiculoComponent.\u0275fac = function ViewVehiculoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewVehiculoComponent)(\u0275\u0275directiveInject(VehiculoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_ViewVehiculoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewVehiculoComponent, selectors: [["app-view-vehiculo"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title"], [1, "d-flex", "gap-2"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "ri-edit-line"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "ri-delete-bin-line"], ["routerLink", "../../list", 1, "btn", "btn-light", "btn-sm"], [1, "ri-arrow-left-line"], [1, "card-body"], [1, "row", "gy-4"], [1, "col-xl-8"], [1, "card", "border"], [1, "card-header", "bg-light"], [1, "mb-0"], [1, "row", "gy-3"], [1, "col-md-6"], [1, "text-muted", "mb-1"], [1, "fw-semibold"], [1, "ri-truck-line", "me-2"], [1, "fw-semibold", "fs-5"], [1, "text-muted"], [1, "col-md-12"], [1, "col-xl-4"], [1, "card-body", "text-center"], [1, "mb-3"], [1, "mt-4"], [1, "alert", "alert-success"], [1, "alert", "alert-warning"], [1, "alert", "alert-secondary"], [1, "alert", "alert-danger"], [1, "card", "border", "mt-3"], [1, "mb-2"], [1, "ri-checkbox-circle-line", "me-2"], [1, "ri-tools-line", "me-2"], [1, "ri-close-circle-line", "me-2"], [1, "ri-shopping-cart-line", "me-2"]], template: function ViewVehiculoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, ViewVehiculoComponent_Conditional_1_Template, 5, 0, "div", 1)(2, ViewVehiculoComponent_Conditional_2_Template, 95, 24, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 1 : ctx.vehiculo ? 2 : -1);
  }
}, dependencies: [CommonModule, DecimalPipe, DatePipe, RouterModule, RouterLink, SharedModule], styles: ["\n\n.card.border[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef !important;\n}\n.card-header.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n  border-bottom: 1px solid #e9ecef;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.alert[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=view-vehiculo.component.css.map */"] });
var ViewVehiculoComponent = _ViewVehiculoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewVehiculoComponent, { className: "ViewVehiculoComponent" });
})();
export {
  ViewVehiculoComponent
};
//# sourceMappingURL=view-vehiculo.component-I2IVPMXD.js.map
