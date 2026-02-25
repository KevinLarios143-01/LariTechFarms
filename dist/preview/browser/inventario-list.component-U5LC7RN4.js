import {
  InventarioService
} from "./chunk-ZVS7OPM7.js";
import "./chunk-7WSVHSJD.js";
import {
  SharedModule
} from "./chunk-UEAXMXBR.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import "./chunk-ZVXZDCDW.js";
import {
  ToastrService
} from "./chunk-KTQLQ7YR.js";
import "./chunk-ZSUERINM.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-47LBZ5ZO.js";
import {
  ChangeDetectorRef,
  CommonModule,
  DecimalPipe,
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/production-dashboard/inventario/inventario-list/inventario-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["../view", a0];
var _c1 = (a0) => ["../edit", a0];
function InventarioListComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35)(2, "div", 36)(3, "span", 37);
    \u0275\u0275text(4, "Cargando...");
    \u0275\u0275elementEnd()()()();
  }
}
function InventarioListComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2, "No hay items en el inventario");
    \u0275\u0275elementEnd()();
  }
}
function InventarioListComponent_Conditional_97_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.observaciones);
  }
}
function InventarioListComponent_Conditional_97_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.categoria);
  }
}
function InventarioListComponent_Conditional_97_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function InventarioListComponent_Conditional_97_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, InventarioListComponent_Conditional_97_For_1_Conditional_4_Template, 2, 1, "small", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275template(11, InventarioListComponent_Conditional_97_For_1_Conditional_11_Template, 2, 1, "span", 40)(12, InventarioListComponent_Conditional_97_For_1_Conditional_12_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "div", 41)(22, "button", 42);
    \u0275\u0275element(23, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 44);
    \u0275\u0275element(25, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 46);
    \u0275\u0275listener("click", function InventarioListComponent_Conditional_97_For_1_Template_button_click_26_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteItem(item_r2.id));
    });
    \u0275\u0275element(27, "i", 47);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.observaciones ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getStockClass(item_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.cantidad, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.unidad);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r2.categoria ? 11 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.minimoStock || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge " + ctx_r2.getStockBadgeClass(item_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStockStatus(item_r2), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.proveedor || "-");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, item_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c1, item_r2.id));
  }
}
function InventarioListComponent_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, InventarioListComponent_Conditional_97_For_1_Template, 28, 18, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.filteredInventario);
  }
}
function InventarioListComponent_Conditional_98_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 49)(1, "a", 50);
    \u0275\u0275listener("click", function InventarioListComponent_Conditional_98_For_9_Template_a_click_1_listener() {
      const page_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPageChange(page_r6));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r6 === ctx_r2.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r6);
  }
}
function InventarioListComponent_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "nav")(4, "ul", 48)(5, "li", 49)(6, "a", 50);
    \u0275\u0275listener("click", function InventarioListComponent_Conditional_98_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange(ctx_r2.currentPage - 1));
    });
    \u0275\u0275text(7, "Anterior");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(8, InventarioListComponent_Conditional_98_For_9_Template, 3, 3, "li", 51, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(10, "li", 49)(11, "a", 50);
    \u0275\u0275listener("click", function InventarioListComponent_Conditional_98_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange(ctx_r2.currentPage + 1));
    });
    \u0275\u0275text(12, "Siguiente");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Mostrando ", (ctx_r2.currentPage - 1) * ctx_r2.itemsPerPage + 1, " a ", ctx_r2.Math.min(ctx_r2.currentPage * ctx_r2.itemsPerPage, ctx_r2.totalItems), " de ", ctx_r2.totalItems, " items ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.pages);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
  }
}
var _InventarioListComponent = class _InventarioListComponent {
  constructor(inventarioService, cdr, toastr) {
    this.inventarioService = inventarioService;
    this.cdr = cdr;
    this.toastr = toastr;
    this.inventario = [];
    this.filteredInventario = [];
    this.categorias = [];
    this.isLoading = false;
    this.searchTerm = "";
    this.selectedCategoria = "";
    this.stockBajo = false;
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalItems = 0;
    this.totalPages = 0;
    this.Math = Math;
    this.stats = {
      totalItems: 0,
      itemsStockBajo: 0,
      valorTotal: 0
    };
  }
  ngOnInit() {
    this.loadInventario();
    this.loadCategorias();
    this.loadStats();
  }
  loadInventario() {
    this.isLoading = true;
    const params = {
      page: this.currentPage,
      limit: this.itemsPerPage,
      search: this.searchTerm || void 0,
      categoria: this.selectedCategoria || void 0,
      stockBajo: this.stockBajo || void 0
    };
    this.inventarioService.getInventario(params).subscribe({
      next: (response) => {
        if (response?.data?.items) {
          this.inventario = response.data.items;
          this.filteredInventario = [...this.inventario];
          this.totalItems = response.data.pagination.total;
          this.totalPages = response.data.pagination.totalPages;
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error("Error al cargar inventario", "Error");
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  loadCategorias() {
    this.inventarioService.getCategorias().subscribe({
      next: (response) => {
        this.categorias = response.data || [];
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error al cargar categor\xEDas:", error);
      }
    });
  }
  loadStats() {
    this.inventarioService.getStats().subscribe({
      next: (response) => {
        if (response?.data) {
          this.stats = {
            totalItems: response.data.totalItems,
            itemsStockBajo: response.data.itemsStockBajo,
            valorTotal: response.data.valorTotalInventario
          };
        }
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error al cargar estad\xEDsticas:", error);
      }
    });
  }
  applyFilters() {
    this.currentPage = 1;
    this.loadInventario();
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedCategoria = "";
    this.stockBajo = false;
    this.currentPage = 1;
    this.loadInventario();
  }
  deleteItem(id) {
    if (confirm("\xBFEst\xE1 seguro de eliminar este item del inventario?")) {
      this.inventarioService.deleteInventario(id).subscribe({
        next: () => {
          this.toastr.success("Item eliminado exitosamente", "\xC9xito");
          this.loadInventario();
          this.loadStats();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || "Error al eliminar item";
          this.toastr.error(errorMsg, "Error");
        }
      });
    }
  }
  getStockClass(item) {
    if (item.minimoStock && item.cantidad <= item.minimoStock) {
      return "text-danger";
    }
    if (item.minimoStock && item.cantidad <= item.minimoStock * 1.5) {
      return "text-warning";
    }
    return "text-success";
  }
  getStockBadgeClass(item) {
    if (item.minimoStock && item.cantidad <= item.minimoStock) {
      return "bg-danger";
    }
    if (item.minimoStock && item.cantidad <= item.minimoStock * 1.5) {
      return "bg-warning";
    }
    return "bg-success";
  }
  getStockStatus(item) {
    if (item.minimoStock && item.cantidad <= item.minimoStock) {
      return "Cr\xEDtico";
    }
    if (item.minimoStock && item.cantidad <= item.minimoStock * 1.5) {
      return "Bajo";
    }
    return "Normal";
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadInventario();
  }
  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
};
_InventarioListComponent.\u0275fac = function InventarioListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InventarioListComponent)(\u0275\u0275directiveInject(InventarioService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_InventarioListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventarioListComponent, selectors: [["app-inventario-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 99, vars: 13, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "d-flex", "gap-2"], ["routerLink", "../add", 1, "btn", "btn-primary", "btn-sm"], [1, "ri-add-line"], [1, "col-xl-4", "col-lg-6", "col-md-6", "col-sm-12"], [1, "card-body"], [1, "d-flex", "align-items-top"], [1, "me-3"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-primary-transparent"], [1, "ri-archive-line", "fs-18"], [1, "flex-fill"], [1, "d-flex", "mb-1", "align-items-top", "justify-content-between"], [1, "fw-semibold", "mb-0", "lh-1"], [1, "mb-0", "fs-12", "text-muted"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-warning-transparent"], [1, "ri-alert-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-success-transparent"], [1, "ri-money-dollar-circle-line", "fs-18"], [1, "row", "g-3"], [1, "col-xl-3", "col-lg-4", "col-md-6"], ["type", "text", "placeholder", "Buscar...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Categor\xEDa", 3, "ngModelChange", "change", "items", "ngModel", "clearable"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "stockBajo", 1, "form-check-input", 3, "ngModelChange", "change", "ngModel"], ["for", "stockBajo", 1, "form-check-label"], [1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "ri-refresh-line"], [1, "table-responsive"], [1, "table", "text-nowrap", "table-hover"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], ["colspan", "8", 1, "text-center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "fw-semibold"], [1, "text-muted"], [1, "badge", "bg-light", "text-dark"], ["role", "group", 1, "btn-group"], ["title", "Ver detalles", 1, "btn", "btn-sm", "btn-info", 3, "routerLink"], [1, "ri-eye-line"], ["title", "Editar", 1, "btn", "btn-sm", "btn-primary", 3, "routerLink"], [1, "ri-edit-line"], ["title", "Eliminar", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "ri-delete-bin-line"], [1, "pagination", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "page-item", 3, "active"]], template: function InventarioListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Inventario de Granja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, " Agregar Item ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(11, "div", 1)(12, "div", 9)(13, "div", 3)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "span", 13);
    \u0275\u0275element(18, "i", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 15)(20, "div", 16)(21, "h5", 17);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "p", 18);
    \u0275\u0275text(24, "Total Items");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(25, "div", 9)(26, "div", 3)(27, "div", 10)(28, "div", 11)(29, "div", 12)(30, "span", 19);
    \u0275\u0275element(31, "i", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 15)(33, "div", 16)(34, "h5", 17);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "p", 18);
    \u0275\u0275text(37, "Stock Bajo");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(38, "div", 9)(39, "div", 3)(40, "div", 10)(41, "div", 11)(42, "div", 12)(43, "span", 21);
    \u0275\u0275element(44, "i", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 15)(46, "div", 16)(47, "h5", 17);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "p", 18);
    \u0275\u0275text(51, "Valor Total");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(52, "div", 1)(53, "div", 2)(54, "div", 3)(55, "div", 10)(56, "div", 23)(57, "div", 24)(58, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function InventarioListComponent_Template_input_ngModelChange_58_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function InventarioListComponent_Template_input_ngModelChange_58_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 24)(60, "ng-select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function InventarioListComponent_Template_ng_select_ngModelChange_60_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedCategoria, $event) || (ctx.selectedCategoria = $event);
      return $event;
    });
    \u0275\u0275listener("change", function InventarioListComponent_Template_ng_select_change_60_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 24)(62, "div", 27)(63, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function InventarioListComponent_Template_input_ngModelChange_63_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.stockBajo, $event) || (ctx.stockBajo = $event);
      return $event;
    });
    \u0275\u0275listener("change", function InventarioListComponent_Template_input_change_63_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "label", 29);
    \u0275\u0275text(65, " Solo Stock Bajo ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 24)(67, "button", 30);
    \u0275\u0275listener("click", function InventarioListComponent_Template_button_click_67_listener() {
      return ctx.clearFilters();
    });
    \u0275\u0275element(68, "i", 31);
    \u0275\u0275text(69, " Limpiar Filtros ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(70, "div", 1)(71, "div", 2)(72, "div", 3)(73, "div", 10)(74, "div", 32)(75, "table", 33)(76, "thead")(77, "tr")(78, "th");
    \u0275\u0275text(79, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "th");
    \u0275\u0275text(81, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "th");
    \u0275\u0275text(83, "Unidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "th");
    \u0275\u0275text(85, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "th");
    \u0275\u0275text(87, "Stock M\xEDnimo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "th");
    \u0275\u0275text(89, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "th");
    \u0275\u0275text(91, "Proveedor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "th");
    \u0275\u0275text(93, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(94, "tbody");
    \u0275\u0275template(95, InventarioListComponent_Conditional_95_Template, 5, 0, "tr")(96, InventarioListComponent_Conditional_96_Template, 3, 0, "tr")(97, InventarioListComponent_Conditional_97_Template, 2, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(98, InventarioListComponent_Conditional_98_Template, 13, 7, "div", 34);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate(ctx.stats.totalItems);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.stats.itemsStockBajo);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(49, 10, ctx.stats.valorTotal, "1.2-2"), "");
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx.categorias);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategoria);
    \u0275\u0275property("clearable", true);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.stockBajo);
    \u0275\u0275advance(32);
    \u0275\u0275conditional(ctx.isLoading ? 95 : ctx.filteredInventario.length === 0 ? 96 : 97);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.totalPages > 1 ? 98 : -1);
  }
}, dependencies: [CommonModule, DecimalPipe, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, NgSelectModule, NgSelectComponent, SharedModule], styles: ["\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #495057;\n  background-color: #f8f9fa;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=inventario-list.component.css.map */"] });
var InventarioListComponent = _InventarioListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventarioListComponent, { className: "InventarioListComponent" });
})();
export {
  InventarioListComponent
};
//# sourceMappingURL=inventario-list.component-U5LC7RN4.js.map
