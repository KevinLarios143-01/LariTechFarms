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
import {
  NgbModule,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavOutlet
} from "./chunk-47LBZ5ZO.js";
import {
  ActivatedRoute,
  ChangeDetectorRef,
  CommonModule,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/production-dashboard/productos/view-producto/view-producto.component.ts
var _c0 = (a0) => ["/dashboard/production-dashboard/productos/edit", a0];
var _c1 = () => ["/dashboard/production-dashboard/productos/list"];
function ViewProductoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 5)(2, "span", 6);
    \u0275\u0275text(3, "Cargando...");
    \u0275\u0275elementEnd()()();
  }
}
function ViewProductoComponent_Conditional_2_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2, " Stock bajo - Considere reabastecer ");
    \u0275\u0275elementEnd();
  }
}
function ViewProductoComponent_Conditional_2_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 27)(2, "h4", 53);
    \u0275\u0275text(3, "Datos del Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 54)(5, "div", 3)(6, "div", 55)(7, "label", 56);
    \u0275\u0275text(8, "Nombre del Producto");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 57);
    \u0275\u0275element(10, "input", 58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 54)(12, "div", 3)(13, "div", 55)(14, "label", 56);
    \u0275\u0275text(15, "Tama\xF1o");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 57);
    \u0275\u0275element(17, "input", 58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 54)(19, "div", 3)(20, "div", 55)(21, "label", 56);
    \u0275\u0275text(22, "Categor\xEDa");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 57);
    \u0275\u0275element(24, "input", 58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "h4", 59);
    \u0275\u0275text(26, "Precio e Inventario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 54)(28, "div", 3)(29, "div", 55)(30, "label", 56);
    \u0275\u0275text(31, "Precio Unitario");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 57)(33, "div", 60)(34, "span", 61);
    \u0275\u0275text(35, "Q");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 58);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 54)(38, "div", 3)(39, "div", 55)(40, "label", 56);
    \u0275\u0275text(41, "Stock Disponible");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 57);
    \u0275\u0275element(43, "input", 58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 54)(45, "div", 3)(46, "div", 55)(47, "label", 56);
    \u0275\u0275text(48, "Valor Total en Stock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 57)(50, "div", 60)(51, "span", 61);
    \u0275\u0275text(52, "Q");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 58);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(54, "div", 62)(55, "div", 3)(56, "div", 55)(57, "label", 63);
    \u0275\u0275text(58, "Estado del Producto:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 57)(60, "div", 64);
    \u0275\u0275element(61, "input", 65);
    \u0275\u0275elementStart(62, "label", 66);
    \u0275\u0275text(63, "Activo/Inactivo");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("value", ctx_r1.producto.nombre);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r1.producto.tamanio || "No especificado");
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r1.producto.categoria || "Sin categor\xEDa");
    \u0275\u0275advance(12);
    \u0275\u0275property("value", (+ctx_r1.producto.precio).toFixed(2));
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r1.producto.stock + " unidades");
    \u0275\u0275advance(10);
    \u0275\u0275property("value", (+ctx_r1.producto.precio * ctx_r1.producto.stock).toFixed(2));
    \u0275\u0275advance(8);
    \u0275\u0275property("checked", ctx_r1.producto.activo);
  }
}
function ViewProductoComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "div", 10);
    \u0275\u0275element(5, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12)(7, "h5", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h6", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 15)(12, "div", 3)(13, "div", 16)(14, "h5", 17);
    \u0275\u0275text(15, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h5", 18)(17, "span", 19);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "h5", 20);
    \u0275\u0275text(20, "Unitario");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 21)(22, "h5", 17);
    \u0275\u0275text(23, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "h5", 18)(25, "span", 22);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "h5", 20);
    \u0275\u0275text(28, "Unidades");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 23)(30, "h5", 17);
    \u0275\u0275text(31, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "h5", 18)(33, "span", 22);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "h5", 20);
    \u0275\u0275text(36, "Producto");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(37, "div", 24)(38, "div", 25)(39, "div", 26);
    \u0275\u0275text(40, "Estad\xEDsticas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 27)(42, "div", 28)(43, "h6");
    \u0275\u0275text(44, "Valor Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "h6", 29);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 30);
    \u0275\u0275element(48, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 32)(50, "h6");
    \u0275\u0275text(51, "Stock Disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "h6", 29);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 30);
    \u0275\u0275element(55, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(56, ViewProductoComponent_Conditional_2_Conditional_56_Template, 3, 0, "div", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 35)(58, "div", 36)(59, "div", 37)(60, "ul", 38, 0);
    \u0275\u0275twoWayListener("activeIdChange", function ViewProductoComponent_Conditional_2_Template_ul_activeIdChange_60_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.active, $event) || (ctx_r1.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(62, "li", 39)(63, "a", 40);
    \u0275\u0275text(64, "Informaci\xF3n del Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275template(65, ViewProductoComponent_Conditional_2_ng_template_65_Template, 64, 7, "ng-template", 41);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(66, "div", 42);
    \u0275\u0275element(67, "div", 43);
    \u0275\u0275elementStart(68, "div", 44)(69, "button", 45);
    \u0275\u0275element(70, "i", 46);
    \u0275\u0275text(71, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "button", 47);
    \u0275\u0275element(73, "i", 48);
    \u0275\u0275text(74, " Volver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "button", 49);
    \u0275\u0275listener("click", function ViewProductoComponent_Conditional_2_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteProducto());
    });
    \u0275\u0275element(76, "i", 50);
    \u0275\u0275text(77, " Eliminar ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const nav_r3 = \u0275\u0275reference(61);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.producto.categoria || "Sin categor\xEDa");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Q", (+ctx_r1.producto.precio).toFixed(2), "");
    \u0275\u0275advance(7);
    \u0275\u0275classMap(ctx_r1.getStockClass(ctx_r1.producto.stock));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.producto.stock);
    \u0275\u0275advance(7);
    \u0275\u0275classMap(ctx_r1.producto.activo ? "text-success" : "text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.producto.activo ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("Q", (+ctx_r1.producto.precio * ctx_r1.producto.stock).toFixed(2), "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", 100, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.producto.stock, " unidades");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStockClass(ctx_r1.producto.stock).replace("text-", "bg-"));
    \u0275\u0275styleProp("width", ctx_r1.getStockPercentage(ctx_r1.producto.stock), "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.producto.stock <= 50 ? 56 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("activeId", ctx_r1.active);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", 1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngbNavOutlet", nav_r3);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(23, _c0, ctx_r1.producto.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(25, _c1));
  }
}
function ViewProductoComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2, " No se encontr\xF3 informaci\xF3n del producto. ");
    \u0275\u0275elementEnd();
  }
}
var _ViewProductoComponent = class _ViewProductoComponent {
  constructor(productosService, route, router, cdr, toastr) {
    this.productosService = productosService;
    this.route = route;
    this.router = router;
    this.cdr = cdr;
    this.toastr = toastr;
    this.producto = null;
    this.isLoading = false;
    this.active = 1;
    this.productoId = parseInt(this.route.snapshot.paramMap.get("id") || "0");
  }
  ngOnInit() {
    this.loadProducto();
  }
  loadProducto() {
    this.isLoading = true;
    this.productosService.getProductoById(this.productoId).subscribe({
      next: (response) => {
        this.producto = response.data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error("Error al cargar producto", "Error", {
          progressBar: true,
          closeButton: true
        });
        this.isLoading = false;
        this.router.navigate(["../list"], { relativeTo: this.route });
      }
    });
  }
  deleteProducto() {
    if (confirm("\xBFEst\xE1 seguro de eliminar este producto?")) {
      this.productosService.deleteProducto(this.productoId).subscribe({
        next: () => {
          this.toastr.success("Producto eliminado exitosamente", "\xC9xito", {
            progressBar: true,
            closeButton: true
          });
          this.router.navigate(["../list"], { relativeTo: this.route });
        },
        error: () => {
          this.toastr.error("Error al eliminar producto", "Error", {
            progressBar: true,
            closeButton: true
          });
        }
      });
    }
  }
  getStockClass(stock) {
    if (stock <= 50)
      return "text-danger";
    if (stock <= 100)
      return "text-warning";
    return "text-success";
  }
  getStockBadgeClass(stock) {
    if (stock <= 50)
      return "badge bg-danger";
    if (stock <= 100)
      return "badge bg-warning";
    return "badge bg-success";
  }
  getActivoBadgeClass(activo) {
    return activo ? "badge bg-success" : "badge bg-danger";
  }
  getStockPercentage(stock) {
    return Math.min(stock / 200 * 100, 100);
  }
};
_ViewProductoComponent.\u0275fac = function ViewProductoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewProductoComponent)(\u0275\u0275directiveInject(ProductosService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_ViewProductoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewProductoComponent, selectors: [["app-view-producto"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [["nav", "ngbNav"], [3, "title"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "height", "400px"], [1, "row"], ["role", "alert", 1, "alert", "alert-warning"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "col-xxl-3", "col-xl-4", "col-md-12", "col-lg-12"], [1, "card", "box-widget", "widget-user", "custom-card"], [1, "card-body", "text-center"], [1, "widget-user-image", "mx-auto", "text-center"], [1, "fas", "fa-box", "fa-5x", "text-primary"], [1, "pro-user", "mt-3"], [1, "pro-user-username", "text-dark", "mb-1", "fs-16"], [1, "pro-user-desc", "text-muted", "fs-12"], [1, "card-footer", "p-0"], [1, "col-4", "text-center", "py-3", "border-end"], [1, "fs-12", "fw-semibold", "mb-3"], [1, "mb-2"], [1, "fs-18", "text-success"], [1, "fs-12", "mb-0"], [1, "col-4", "py-3", "text-center", "border-end"], [1, "fs-18"], [1, "col-4", "text-center", "py-3"], [1, "card", "custom-card"], [1, "card-header", "border-0"], [1, "card-title"], [1, "card-body"], [1, "d-flex", "align-items-end", "justify-content-between"], [1, "font-weight-bold", "mb-1"], [1, "progress", "progress-sm", "mb-5"], [1, "progress-bar", "bg-success"], [1, "d-flex", "align-items-end", "justify-content-between", "mg-b-5"], [1, "progress-bar"], [1, "alert", "alert-warning"], [1, "col-xxl-9", "col-xl-8", "col-md-12", "col-lg-12"], [1, "tab-menu-heading", "hremp-tabs", "p-0", "border-0"], [1, "tabs-menu1"], ["ngbNav", "", 1, "panel-tabs", 3, "activeIdChange", "activeId"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "panel-body", "tabs-menu-body", "hremp-tabs1", "p-0"], [1, "tab-content", 3, "ngbNavOutlet"], [1, "panel-footer", "text-end"], ["type", "button", 1, "me-2", "btn", "btn-warning", 3, "routerLink"], [1, "fas", "fa-edit"], ["type", "button", 1, "btn", "btn-outline-secondary", "me-2", 3, "routerLink"], [1, "fas", "fa-arrow-left"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-trash"], [1, "fas", "fa-exclamation-triangle", "me-2"], ["id", "tab1"], [1, "mb-4", "font-weight-bold"], [1, "form-group"], [1, "col-md-3"], [1, "form-label", "mb-0", "mt-2"], [1, "col-md-9"], ["type", "text", "readonly", "", 1, "form-control", 3, "value"], [1, "mb-4", "mt-7", "font-weight-bold"], [1, "input-group"], [1, "input-group-text"], [1, "form-group", "mt-7"], [1, "form-label"], [1, "form-check", "form-check-md", "form-switch"], ["type", "checkbox", "role", "switch", "id", "switch-activo", "disabled", "", 1, "form-check-input", 3, "checked"], ["for", "switch-activo", 1, "form-check-label", "mt-0", "custom-switch-description"]], template: function ViewProductoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 1);
    \u0275\u0275template(1, ViewProductoComponent_Conditional_1_Template, 4, 0, "div", 2)(2, ViewProductoComponent_Conditional_2_Template, 78, 26, "div", 3)(3, ViewProductoComponent_Conditional_3_Template, 3, 0, "div", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("title", "Ver Producto");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 1 : ctx.producto ? 2 : 3);
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, NgbModule, NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavOutlet, SharedModule, HrDashboardPageHeaderComponent] });
var ViewProductoComponent = _ViewProductoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewProductoComponent, { className: "ViewProductoComponent" });
})();
export {
  ViewProductoComponent
};
//# sourceMappingURL=view-producto.component-NIOOT4PT.js.map
