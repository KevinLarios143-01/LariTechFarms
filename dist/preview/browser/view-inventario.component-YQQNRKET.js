import {
  InventarioService
} from "./chunk-ZVS7OPM7.js";
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/production-dashboard/inventario/view-inventario/view-inventario.component.ts
var _c0 = (a0) => ["../../edit", a0];
function ViewInventarioComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "span", 4);
    \u0275\u0275text(4, "Cargando...");
    \u0275\u0275elementEnd()()()();
  }
}
function ViewInventarioComponent_Conditional_2_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.item.categoria);
  }
}
function ViewInventarioComponent_Conditional_2_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "No especificada");
    \u0275\u0275elementEnd();
  }
}
function ViewInventarioComponent_Conditional_2_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "label", 24);
    \u0275\u0275text(2, "Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.item.observaciones);
  }
}
function ViewInventarioComponent_Conditional_2_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 40)(2, "div", 41);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "small", 42);
    \u0275\u0275text(6, " Nivel de stock respecto al m\xEDnimo ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 43)(8, "div", 44)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("bg-" + ctx_r1.getStockStatus().class);
    \u0275\u0275styleProp("width", ctx_r1.getStockPercentage(), "%");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 7, ctx_r1.getStockPercentage(), "1.0-0"), "% ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("M\xEDnimo: ", ctx_r1.item.minimoStock, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Actual: ", ctx_r1.item.cantidad, "");
  }
}
function ViewInventarioComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8);
    \u0275\u0275text(5, "Detalles del Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "button", 10);
    \u0275\u0275element(8, "i", 11);
    \u0275\u0275text(9, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 12);
    \u0275\u0275listener("click", function ViewInventarioComponent_Conditional_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteItem());
    });
    \u0275\u0275element(11, "i", 13);
    \u0275\u0275text(12, " Eliminar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 14);
    \u0275\u0275element(14, "i", 15);
    \u0275\u0275text(15, " Volver ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 16)(17, "div", 17)(18, "div", 18)(19, "div", 19)(20, "div", 20)(21, "h6", 21);
    \u0275\u0275text(22, "Informaci\xF3n General");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 16)(24, "div", 22)(25, "div", 23)(26, "label", 24);
    \u0275\u0275text(27, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 25);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 26)(31, "label", 24);
    \u0275\u0275text(32, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 27);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 26)(36, "label", 24);
    \u0275\u0275text(37, "Unidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 25);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 23)(41, "label", 24);
    \u0275\u0275text(42, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div");
    \u0275\u0275template(44, ViewInventarioComponent_Conditional_2_Conditional_44_Template, 2, 1, "span", 28)(45, ViewInventarioComponent_Conditional_2_Conditional_45_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 23)(47, "label", 24);
    \u0275\u0275text(48, "Stock M\xEDnimo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 25);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 30)(52, "label", 24);
    \u0275\u0275text(53, "Proveedor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 25);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(56, ViewInventarioComponent_Conditional_2_Conditional_56_Template, 5, 1, "div", 30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "div", 31)(58, "div", 19)(59, "div", 20)(60, "h6", 21);
    \u0275\u0275text(61, "Estado del Stock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 32)(63, "div", 33)(64, "span");
    \u0275\u0275element(65, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "h4");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd();
    \u0275\u0275template(68, ViewInventarioComponent_Conditional_2_Conditional_68_Template, 13, 10);
    \u0275\u0275elementStart(69, "div", 34)(70, "button", 35);
    \u0275\u0275element(71, "i", 36);
    \u0275\u0275text(72, " Actualizar Stock ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(73, "div", 37)(74, "div", 20)(75, "h6", 21);
    \u0275\u0275text(76, "Informaci\xF3n del Sistema");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 16)(78, "div", 38)(79, "small", 29);
    \u0275\u0275text(80, "ID del Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 25);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div")(84, "small", 29);
    \u0275\u0275text(85, "Tenant ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 25);
    \u0275\u0275text(87);
    \u0275\u0275elementEnd()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c0, ctx_r1.item.id));
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate(ctx_r1.item.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275classMap("text-" + ctx_r1.getStockStatus().class);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.item.cantidad, " ", ctx_r1.item.unidad, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.item.unidad);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.item.categoria ? 44 : 45);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.item.minimoStock ? ctx_r1.item.minimoStock + " " + ctx_r1.item.unidad : "No definido", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.item.proveedor || "No especificado");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.item.observaciones ? 56 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275classMap("avatar avatar-xl avatar-rounded bg-" + ctx_r1.getStockStatus().class + "-transparent");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStockStatus().icon + " fs-1");
    \u0275\u0275advance();
    \u0275\u0275classMap("text-" + ctx_r1.getStockStatus().class);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStockStatus().text);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.item.minimoStock ? 68 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c0, ctx_r1.item.id));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("#", ctx_r1.item.id, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("#", ctx_r1.item.idTenant, "");
  }
}
var _ViewInventarioComponent = class _ViewInventarioComponent {
  constructor(inventarioService, route, router, cdr, toastr) {
    this.inventarioService = inventarioService;
    this.route = route;
    this.router = router;
    this.cdr = cdr;
    this.toastr = toastr;
    this.item = null;
    this.isLoading = false;
    this.inventarioId = null;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.inventarioId = parseInt(id);
      this.loadInventario();
    } else {
      this.router.navigate(["../list"], { relativeTo: this.route });
    }
  }
  loadInventario() {
    if (this.inventarioId) {
      this.isLoading = true;
      this.inventarioService.getInventarioById(this.inventarioId).subscribe({
        next: (response) => {
          this.item = response.data;
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          this.toastr.error("Error al cargar item", "Error");
          this.isLoading = false;
          this.router.navigate(["../list"], { relativeTo: this.route });
        }
      });
    }
  }
  getStockStatus() {
    if (!this.item)
      return { text: "-", class: "secondary", icon: "ri-question-line" };
    if (this.item.minimoStock && this.item.cantidad <= this.item.minimoStock) {
      return { text: "Cr\xEDtico", class: "danger", icon: "ri-alert-line" };
    }
    if (this.item.minimoStock && this.item.cantidad <= this.item.minimoStock * 1.5) {
      return { text: "Bajo", class: "warning", icon: "ri-error-warning-line" };
    }
    return { text: "Normal", class: "success", icon: "ri-checkbox-circle-line" };
  }
  getStockPercentage() {
    if (!this.item || !this.item.minimoStock)
      return 100;
    return Math.min(this.item.cantidad / (this.item.minimoStock * 2) * 100, 100);
  }
  deleteItem() {
    if (this.inventarioId && confirm("\xBFEst\xE1 seguro de eliminar este item del inventario?")) {
      this.inventarioService.deleteInventario(this.inventarioId).subscribe({
        next: () => {
          this.toastr.success("Item eliminado exitosamente", "\xC9xito");
          this.router.navigate(["../../list"], { relativeTo: this.route });
        },
        error: (error) => {
          const errorMsg = error?.error?.message || "Error al eliminar item";
          this.toastr.error(errorMsg, "Error");
        }
      });
    }
  }
};
_ViewInventarioComponent.\u0275fac = function ViewInventarioComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewInventarioComponent)(\u0275\u0275directiveInject(InventarioService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_ViewInventarioComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewInventarioComponent, selectors: [["app-view-inventario"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title"], [1, "d-flex", "gap-2"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "ri-edit-line"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "ri-delete-bin-line"], ["routerLink", "../../list", 1, "btn", "btn-light", "btn-sm"], [1, "ri-arrow-left-line"], [1, "card-body"], [1, "row", "gy-4"], [1, "col-xl-8"], [1, "card", "border"], [1, "card-header", "bg-light"], [1, "mb-0"], [1, "row", "gy-3"], [1, "col-md-6"], [1, "text-muted", "mb-1"], [1, "fw-semibold"], [1, "col-md-3"], [1, "fw-semibold", "fs-5"], [1, "badge", "bg-primary"], [1, "text-muted"], [1, "col-md-12"], [1, "col-xl-4"], [1, "card-body", "text-center"], [1, "mb-3"], [1, "mt-4"], [1, "btn", "btn-warning", "w-100", 3, "routerLink"], [1, "ri-refresh-line"], [1, "card", "border", "mt-3"], [1, "mb-2"], [1, "alert", "alert-light", "mb-0"], [1, "progress", 2, "height", "20px"], ["role", "progressbar", 1, "progress-bar"], [1, "text-muted", "mt-2", "d-block"], [1, "mt-3"], [1, "d-flex", "justify-content-between", "text-muted", "small"]], template: function ViewInventarioComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, ViewInventarioComponent_Conditional_1_Template, 5, 0, "div", 1)(2, ViewInventarioComponent_Conditional_2_Template, 88, 26, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 1 : ctx.item ? 2 : -1);
  }
}, dependencies: [CommonModule, DecimalPipe, RouterModule, RouterLink, SharedModule], styles: ["\n\n.card.border[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef !important;\n}\n.card-header.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n  border-bottom: 1px solid #e9ecef;\n}\n.progress[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.alert-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-color: #e9ecef;\n  color: #495057;\n}\n/*# sourceMappingURL=view-inventario.component.css.map */"] });
var ViewInventarioComponent = _ViewInventarioComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewInventarioComponent, { className: "ViewInventarioComponent" });
})();
export {
  ViewInventarioComponent
};
//# sourceMappingURL=view-inventario.component-YQQNRKET.js.map
