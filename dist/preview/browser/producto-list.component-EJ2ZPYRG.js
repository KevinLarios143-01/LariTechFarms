import {
  ProductosService
} from "./chunk-UK4IXMZI.js";
import "./chunk-7WSVHSJD.js";
import {
  HrDashboardPageHeaderComponent,
  SharedModule
} from "./chunk-UEAXMXBR.js";
import {
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import "./chunk-ZVXZDCDW.js";
import {
  ToastrService
} from "./chunk-KTQLQ7YR.js";
import "./chunk-ZSUERINM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-47LBZ5ZO.js";
import {
  ChangeDetectorRef,
  CommonModule,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
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

// src/app/componets/dashbord/production-dashboard/productos/producto-list/producto-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/dashboard/production-dashboard/productos/view", a0];
var _c1 = (a0) => ["/dashboard/production-dashboard/productos/edit", a0];
function ProductoListComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46)(2, "div", 47)(3, "span", 48);
    \u0275\u0275text(4, "Cargando...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 49);
    \u0275\u0275text(6, "Cargando productos...");
    \u0275\u0275elementEnd()()();
  }
}
function ProductoListComponent_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 50);
    \u0275\u0275text(2, " No se encontraron productos ");
    \u0275\u0275elementEnd()();
  }
}
function ProductoListComponent_Conditional_103_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 38)(1, "th", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 26)(5, "div", 52);
    \u0275\u0275element(6, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "div", 54)(9, "h6", 55);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 54)(12, "span", 56);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(14, "td", 57);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 58);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "span", 58);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "div", 59)(26, "a", 60);
    \u0275\u0275element(27, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 62);
    \u0275\u0275element(29, "i", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "a", 64);
    \u0275\u0275listener("click", function ProductoListComponent_Conditional_103_For_1_Template_a_click_30_listener() {
      const producto_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteProducto(producto_r2.id));
    });
    \u0275\u0275element(31, "i", 65);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const producto_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(producto_r2.id);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(producto_r2.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(producto_r2.tamanio || "Tama\xF1o est\xE1ndar");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Q", (+producto_r2.precio).toFixed(2), "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getStockBadgeClass(producto_r2.stock));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", producto_r2.stock, " unidades ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(producto_r2.categoria || "Sin categor\xEDa");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(producto_r2.activo ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(producto_r2.activo ? "Activo" : "Inactivo");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, producto_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c1, producto_r2.id));
  }
}
function ProductoListComponent_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProductoListComponent_Conditional_103_For_1_Template, 32, 17, "tr", 38, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.filteredProductos);
  }
}
var _ProductoListComponent = class _ProductoListComponent {
  constructor(productosService, cdr, toastr) {
    this.productosService = productosService;
    this.cdr = cdr;
    this.toastr = toastr;
    this.productos = [];
    this.filteredProductos = [];
    this.categorias = [];
    this.isLoading = false;
    this.searchTerm = "";
    this.selectedCategoria = "";
    this.selectedActivo = "";
    this.estados = [
      { value: "true", label: "Activo" },
      { value: "false", label: "Inactivo" }
    ];
  }
  ngOnInit() {
    this.loadProductos();
    this.loadCategorias();
  }
  loadProductos() {
    this.isLoading = true;
    this.productosService.getProductos().subscribe({
      next: (response) => {
        if (response?.data?.data && Array.isArray(response.data.data)) {
          this.productos = response.data.data;
        } else if (response?.data?.items && Array.isArray(response.data.items)) {
          this.productos = response.data.items;
        } else if (response?.data && Array.isArray(response.data)) {
          this.productos = response.data;
        } else if (Array.isArray(response)) {
          this.productos = response;
        } else {
          this.productos = [];
        }
        this.filteredProductos = [...this.productos];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.productos = [];
        this.filteredProductos = [];
        this.toastr.error("Error al cargar productos", "Error", {
          progressBar: true,
          closeButton: true
        });
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  loadCategorias() {
    this.productosService.getCategorias().subscribe({
      next: (response) => {
        this.categorias = Array.isArray(response.data) ? response.data.map((item) => item.categoria) : [];
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.categorias = [];
        console.error("Error al cargar categor\xEDas:", error);
      }
    });
  }
  applyFilters() {
    this.filteredProductos = this.productos.filter((producto) => {
      const matchesSearch = !this.searchTerm || producto.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) || producto.categoria?.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategoria = !this.selectedCategoria || producto.categoria === this.selectedCategoria;
      const matchesActivo = !this.selectedActivo || producto.activo.toString() === this.selectedActivo;
      return matchesSearch && matchesCategoria && matchesActivo;
    });
    this.cdr.detectChanges();
  }
  deleteProducto(id) {
    if (confirm("\xBFEst\xE1 seguro de eliminar este producto?")) {
      this.productosService.deleteProducto(id).subscribe({
        next: () => {
          this.toastr.success("Producto eliminado exitosamente", "\xC9xito", {
            progressBar: true,
            closeButton: true
          });
          setTimeout(() => {
            this.loadProductos();
          }, 1e3);
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
  getActivoClass(activo) {
    return activo ? "text-success" : "text-danger";
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedCategoria = "";
    this.selectedActivo = "";
    this.filteredProductos = [...this.productos];
    this.cdr.detectChanges();
  }
  getProductosActivos() {
    return this.productos.filter((p) => p.activo).length;
  }
  getStockBajo() {
    return this.productos.filter((p) => p.stock <= 50).length;
  }
  getValorTotal() {
    const total = this.productos.reduce((sum, p) => sum + +p.precio * p.stock, 0);
    return total.toFixed(2);
  }
  getStockBadgeClass(stock) {
    if (stock <= 50)
      return "bg-danger";
    if (stock <= 100)
      return "bg-warning";
    return "bg-success";
  }
  getStockBadgeColor(stock) {
    if (stock <= 50)
      return "danger";
    if (stock <= 100)
      return "warning";
    return "success";
  }
};
_ProductoListComponent.\u0275fac = function ProductoListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProductoListComponent)(\u0275\u0275directiveInject(ProductosService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_ProductoListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductoListComponent, selectors: [["app-producto-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 121, vars: 12, consts: [[3, "title", "title2", "class1", "path"], [1, "row"], [1, "col-xl-3", "col-lg-6", "col-md-6"], [1, "card", "custom-card"], [1, "card-body"], [1, "col-7"], [1, "mt-0", "text-start"], [1, "fw-medium"], [1, "mb-0", "mt-1", "text-success"], [1, "col-5"], [1, "icon1", "bg-success-transparent", "my-auto", "float-end"], [1, "las", "la-box"], [1, "mb-0", "mt-1", "text-primary"], [1, "icon1", "bg-primary-transparent", "my-auto", "float-end"], [1, "las", "la-check-circle"], [1, "mb-0", "mt-1", "text-warning"], [1, "icon1", "bg-warning-transparent", "my-auto", "float-end"], [1, "las", "la-exclamation-triangle"], [1, "mb-0", "mt-1", "text-info"], [1, "icon1", "bg-info-transparent", "my-auto", "float-end"], [1, "las", "la-coins"], [1, "col-md-12"], [1, "card-header"], [1, "card-title"], [1, "row", "mb-2", "gap-2", "gap-lg-0"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mb-0"], ["name", "quantity", "id", "select-countries17", "placeholder", "10", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], [1, "float-end"], ["type", "text", "placeholder", "Buscar", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "table-responsive"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap", "table-bordered", "border"], [1, "border-bottom"], ["scope", "col"], [1, "mt-4"], [1, "pagination", "justify-content-end", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item", "active"], [1, "page-item"], ["colspan", "7", 1, "text-center", "py-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], ["colspan", "7", 1, "text-center", "py-4", "text-muted"], ["scope", "row"], [1, "avatar", "me-2", "avatar-rounded", "bg-primary-transparent"], [1, "fe", "fe-box", "fs-16"], [1, "lh-1"], [1, "mb-1"], [1, "fs-12", "text-muted"], [1, "fw-bold", "text-primary"], [1, "badge"], [1, "d-flex", "gap-2"], ["data-bs-toggle", "tooltip", "title", "Ver Producto", 1, "btn", "btn-primary", "btn-icon", 3, "routerLink"], [1, "fe", "fe-eye"], ["data-bs-toggle", "tooltip", "title", "Editar", 1, "btn", "btn-warning", "btn-icon", 3, "routerLink"], [1, "fe", "fe-edit-2"], ["data-bs-toggle", "tooltip", "title", "Eliminar", 1, "btn", "btn-danger", "btn-icon", 3, "click"], [1, "fe", "fe-trash"]], template: function ProductoListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 1)(6, "div", 5)(7, "div", 6)(8, "span", 7);
    \u0275\u0275text(9, "Total Productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 9)(13, "div", 10);
    \u0275\u0275element(14, "i", 11);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(15, "div", 2)(16, "div", 3)(17, "div", 4)(18, "div", 1)(19, "div", 5)(20, "div", 6)(21, "span", 7);
    \u0275\u0275text(22, "Productos Activos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h3", 12);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 9)(26, "div", 13);
    \u0275\u0275element(27, "i", 14);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(28, "div", 2)(29, "div", 3)(30, "div", 4)(31, "div", 1)(32, "div", 5)(33, "div", 6)(34, "span", 7);
    \u0275\u0275text(35, "Stock Bajo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "h3", 15);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 9)(39, "div", 16);
    \u0275\u0275element(40, "i", 17);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(41, "div", 2)(42, "div", 3)(43, "div", 4)(44, "div", 1)(45, "div", 5)(46, "div", 6)(47, "span", 7);
    \u0275\u0275text(48, "Valor Inventario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "h3", 18);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 9)(52, "div", 19);
    \u0275\u0275element(53, "i", 20);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(54, "div", 1)(55, "div", 21)(56, "div", 3)(57, "div", 22)(58, "h3", 23);
    \u0275\u0275text(59, "Lista de productos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 4)(61, "div", 24)(62, "div", 25)(63, "div", 26)(64, "span");
    \u0275\u0275text(65, "Mostrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 27)(67, "div", 28)(68, "ng-select", 29)(69, "ng-option", 30);
    \u0275\u0275text(70, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ng-option", 31);
    \u0275\u0275text(72, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "ng-option", 32);
    \u0275\u0275text(74, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "ng-option", 33);
    \u0275\u0275text(76, "100");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(77, "span");
    \u0275\u0275text(78, "registros");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 25)(80, "div", 34)(81, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ProductoListComponent_Template_input_ngModelChange_81_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275listener("input", function ProductoListComponent_Template_input_input_81_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(82, "div", 36)(83, "table", 37)(84, "thead")(85, "tr", 38)(86, "th", 39);
    \u0275\u0275text(87, "No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "th", 39);
    \u0275\u0275text(89, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "th", 39);
    \u0275\u0275text(91, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "th", 39);
    \u0275\u0275text(93, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "th", 39);
    \u0275\u0275text(95, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "th", 39);
    \u0275\u0275text(97, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "th", 39);
    \u0275\u0275text(99, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(100, "tbody");
    \u0275\u0275template(101, ProductoListComponent_Conditional_101_Template, 7, 0, "tr")(102, ProductoListComponent_Conditional_102_Template, 3, 0, "tr")(103, ProductoListComponent_Conditional_103_Template, 2, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(104, "nav", 40)(105, "ul", 41)(106, "li", 42)(107, "a", 43);
    \u0275\u0275text(108, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "li", 44)(110, "a", 43);
    \u0275\u0275text(111, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "li", 45)(113, "a", 43);
    \u0275\u0275text(114, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "li", 45)(116, "a", 43);
    \u0275\u0275text(117, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "li", 45)(119, "a", 43);
    \u0275\u0275text(120, "Next");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275classMap("btn btn-primary");
    \u0275\u0275property("title", "Productos")("title2", "Agregar Nuevo Producto")("class1", "")("path", "/dashboard/production-dashboard/productos/new");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx.productos.length);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.getProductosActivos());
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.getStockBajo());
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("Q", ctx.getValorTotal(), "");
    \u0275\u0275advance(31);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance(20);
    \u0275\u0275conditional(ctx.isLoading ? 101 : ctx.filteredProductos.length === 0 ? 102 : 103);
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgSelectModule, NgSelectComponent, NgOptionComponent, SharedModule, HrDashboardPageHeaderComponent] });
var ProductoListComponent = _ProductoListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductoListComponent, { className: "ProductoListComponent" });
})();
export {
  ProductoListComponent
};
//# sourceMappingURL=producto-list.component-EJ2ZPYRG.js.map
