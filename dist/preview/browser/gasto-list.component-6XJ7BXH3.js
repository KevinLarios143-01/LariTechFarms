import {
  GastoOperacionService
} from "./chunk-PUFVTQBG.js";
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
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-47LBZ5ZO.js";
import {
  ChangeDetectorRef,
  CommonModule,
  DatePipe,
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

// src/app/componets/dashbord/production-dashboard/gastos-operacion/gasto-list/gasto-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["../view", a0];
var _c1 = (a0) => ["../edit", a0];
function GastoListComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35)(2, "div", 36)(3, "span", 37);
    \u0275\u0275text(4, "Cargando...");
    \u0275\u0275elementEnd()()()();
  }
}
function GastoListComponent_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2, "No hay gastos registrados");
    \u0275\u0275elementEnd()();
  }
}
function GastoListComponent_Conditional_93_For_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const gasto_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(gasto_r2.metodoPago);
  }
}
function GastoListComponent_Conditional_93_For_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function GastoListComponent_Conditional_93_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "div", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 39);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, GastoListComponent_Conditional_93_For_1_Conditional_15_Template, 2, 1, "span", 40)(16, GastoListComponent_Conditional_93_For_1_Conditional_16_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "div", 42)(19, "button", 43);
    \u0275\u0275element(20, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 45);
    \u0275\u0275element(22, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 47);
    \u0275\u0275listener("click", function GastoListComponent_Conditional_93_For_1_Template_button_click_23_listener() {
      const gasto_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteGasto(gasto_r2.id));
    });
    \u0275\u0275element(24, "i", 48);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const gasto_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 9, gasto_r2.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(gasto_r2.descripcion);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge " + ctx_r2.getCategoriaBadgeClass(gasto_r2.categoria));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", gasto_r2.categoria, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(13, 12, gasto_r2.monto, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(gasto_r2.metodoPago ? 15 : 16);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, gasto_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c1, gasto_r2.id));
  }
}
function GastoListComponent_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, GastoListComponent_Conditional_93_For_1_Template, 25, 19, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.gastos);
  }
}
function GastoListComponent_Conditional_94_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 50)(1, "a", 51);
    \u0275\u0275listener("click", function GastoListComponent_Conditional_94_For_9_Template_a_click_1_listener() {
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
function GastoListComponent_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "nav")(4, "ul", 49)(5, "li", 50)(6, "a", 51);
    \u0275\u0275listener("click", function GastoListComponent_Conditional_94_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange(ctx_r2.currentPage - 1));
    });
    \u0275\u0275text(7, "Anterior");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(8, GastoListComponent_Conditional_94_For_9_Template, 3, 3, "li", 52, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(10, "li", 50)(11, "a", 51);
    \u0275\u0275listener("click", function GastoListComponent_Conditional_94_Template_a_click_11_listener() {
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
    \u0275\u0275textInterpolate3(" Mostrando ", (ctx_r2.currentPage - 1) * ctx_r2.itemsPerPage + 1, " a ", ctx_r2.Math.min(ctx_r2.currentPage * ctx_r2.itemsPerPage, ctx_r2.totalItems), " de ", ctx_r2.totalItems, " gastos ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.pages);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
  }
}
var _GastoListComponent = class _GastoListComponent {
  constructor(gastoService, cdr, toastr) {
    this.gastoService = gastoService;
    this.cdr = cdr;
    this.toastr = toastr;
    this.gastos = [];
    this.isLoading = false;
    this.searchTerm = "";
    this.selectedCategoria = "";
    this.selectedMetodoPago = "";
    this.fechaInicio = "";
    this.fechaFin = "";
    this.categorias = ["Mantenimiento", "Servicios", "Insumos", "Personal", "Transporte", "Limpieza", "Combustible", "Medicamentos"];
    this.metodosPago = ["Efectivo", "Transferencia", "Tarjeta", "Cheque"];
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalItems = 0;
    this.totalPages = 0;
    this.Math = Math;
    this.stats = {
      totalGastos: 0,
      totalRegistros: 0,
      promedioGasto: 0
    };
  }
  ngOnInit() {
    this.loadGastos();
    this.loadStats();
  }
  loadGastos() {
    this.isLoading = true;
    const params = {
      page: this.currentPage,
      limit: this.itemsPerPage,
      categoria: this.selectedCategoria || void 0,
      metodoPago: this.selectedMetodoPago || void 0,
      fechaInicio: this.fechaInicio || void 0,
      fechaFin: this.fechaFin || void 0
    };
    this.gastoService.getGastos(params).subscribe({
      next: (response) => {
        if (response?.data?.items) {
          this.gastos = response.data.items;
          this.totalItems = response.data.pagination.total;
          this.totalPages = response.data.pagination.totalPages;
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error("Error al cargar gastos", "Error");
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  loadStats() {
    const params = {
      fechaInicio: this.fechaInicio || void 0,
      fechaFin: this.fechaFin || void 0
    };
    this.gastoService.getStats(params).subscribe({
      next: (response) => {
        if (response?.data) {
          this.stats = {
            totalGastos: response.data.totalGastos,
            totalRegistros: response.data.totalRegistros,
            promedioGasto: response.data.promedioGasto
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
    this.loadGastos();
    this.loadStats();
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedCategoria = "";
    this.selectedMetodoPago = "";
    this.fechaInicio = "";
    this.fechaFin = "";
    this.currentPage = 1;
    this.loadGastos();
    this.loadStats();
  }
  deleteGasto(id) {
    if (confirm("\xBFEst\xE1 seguro de eliminar este gasto?")) {
      this.gastoService.deleteGasto(id).subscribe({
        next: () => {
          this.toastr.success("Gasto eliminado exitosamente", "\xC9xito");
          this.loadGastos();
          this.loadStats();
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
  onPageChange(page) {
    this.currentPage = page;
    this.loadGastos();
  }
  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
};
_GastoListComponent.\u0275fac = function GastoListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GastoListComponent)(\u0275\u0275directiveInject(GastoOperacionService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_GastoListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GastoListComponent, selectors: [["app-gasto-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 95, vars: 19, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "d-flex", "gap-2"], ["routerLink", "../add", 1, "btn", "btn-primary", "btn-sm"], [1, "ri-add-line"], [1, "col-xl-4", "col-lg-6", "col-md-6", "col-sm-12"], [1, "card-body"], [1, "d-flex", "align-items-top"], [1, "me-3"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-danger-transparent"], [1, "ri-money-dollar-circle-line", "fs-18"], [1, "flex-fill"], [1, "d-flex", "mb-1", "align-items-top", "justify-content-between"], [1, "fw-semibold", "mb-0", "lh-1"], [1, "mb-0", "fs-12", "text-muted"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-primary-transparent"], [1, "ri-file-list-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-info-transparent"], [1, "ri-bar-chart-line", "fs-18"], [1, "row", "g-3"], [1, "col-xl-3", "col-lg-4", "col-md-6"], ["placeholder", "Categor\xEDa", 3, "ngModelChange", "change", "items", "ngModel", "clearable"], ["placeholder", "M\xE9todo de Pago", 3, "ngModelChange", "change", "items", "ngModel", "clearable"], [1, "col-xl-2", "col-lg-4", "col-md-6"], ["type", "date", "placeholder", "Fecha Inicio", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", "placeholder", "Fecha Fin", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "ri-refresh-line"], [1, "table-responsive"], [1, "table", "text-nowrap", "table-hover"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], ["colspan", "6", 1, "text-center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "fw-semibold"], [1, "fw-semibold", "text-danger"], [1, "badge", "bg-light", "text-dark"], [1, "text-muted"], ["role", "group", 1, "btn-group"], ["title", "Ver detalles", 1, "btn", "btn-sm", "btn-info", 3, "routerLink"], [1, "ri-eye-line"], ["title", "Editar", 1, "btn", "btn-sm", "btn-primary", 3, "routerLink"], [1, "ri-edit-line"], ["title", "Eliminar", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "ri-delete-bin-line"], [1, "pagination", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "page-item", 3, "active"]], template: function GastoListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Gastos de Operaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, " Registrar Gasto ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(11, "div", 1)(12, "div", 9)(13, "div", 3)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "span", 13);
    \u0275\u0275element(18, "i", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 15)(20, "div", 16)(21, "h5", 17);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "p", 18);
    \u0275\u0275text(25, "Total Gastos");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(26, "div", 9)(27, "div", 3)(28, "div", 10)(29, "div", 11)(30, "div", 12)(31, "span", 19);
    \u0275\u0275element(32, "i", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 15)(34, "div", 16)(35, "h5", 17);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "p", 18);
    \u0275\u0275text(38, "Total Registros");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(39, "div", 9)(40, "div", 3)(41, "div", 10)(42, "div", 11)(43, "div", 12)(44, "span", 21);
    \u0275\u0275element(45, "i", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 15)(47, "div", 16)(48, "h5", 17);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "p", 18);
    \u0275\u0275text(52, "Promedio por Gasto");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(53, "div", 1)(54, "div", 2)(55, "div", 3)(56, "div", 10)(57, "div", 23)(58, "div", 24)(59, "ng-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function GastoListComponent_Template_ng_select_ngModelChange_59_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedCategoria, $event) || (ctx.selectedCategoria = $event);
      return $event;
    });
    \u0275\u0275listener("change", function GastoListComponent_Template_ng_select_change_59_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 24)(61, "ng-select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function GastoListComponent_Template_ng_select_ngModelChange_61_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedMetodoPago, $event) || (ctx.selectedMetodoPago = $event);
      return $event;
    });
    \u0275\u0275listener("change", function GastoListComponent_Template_ng_select_change_61_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 27)(63, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function GastoListComponent_Template_input_ngModelChange_63_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.fechaInicio, $event) || (ctx.fechaInicio = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function GastoListComponent_Template_input_ngModelChange_63_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 27)(65, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function GastoListComponent_Template_input_ngModelChange_65_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.fechaFin, $event) || (ctx.fechaFin = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function GastoListComponent_Template_input_ngModelChange_65_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 27)(67, "button", 30);
    \u0275\u0275listener("click", function GastoListComponent_Template_button_click_67_listener() {
      return ctx.clearFilters();
    });
    \u0275\u0275element(68, "i", 31);
    \u0275\u0275text(69, " Limpiar ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(70, "div", 1)(71, "div", 2)(72, "div", 3)(73, "div", 10)(74, "div", 32)(75, "table", 33)(76, "thead")(77, "tr")(78, "th");
    \u0275\u0275text(79, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "th");
    \u0275\u0275text(81, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "th");
    \u0275\u0275text(83, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "th");
    \u0275\u0275text(85, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "th");
    \u0275\u0275text(87, "M\xE9todo de Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "th");
    \u0275\u0275text(89, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(90, "tbody");
    \u0275\u0275template(91, GastoListComponent_Conditional_91_Template, 5, 0, "tr")(92, GastoListComponent_Conditional_92_Template, 3, 0, "tr")(93, GastoListComponent_Conditional_93_Template, 2, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(94, GastoListComponent_Conditional_94_Template, 13, 7, "div", 34);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(23, 13, ctx.stats.totalGastos, "1.2-2"), "");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx.stats.totalRegistros);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(50, 16, ctx.stats.promedioGasto, "1.2-2"), "");
    \u0275\u0275advance(10);
    \u0275\u0275property("items", ctx.categorias);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategoria);
    \u0275\u0275property("clearable", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx.metodosPago);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedMetodoPago);
    \u0275\u0275property("clearable", true);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaInicio);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaFin);
    \u0275\u0275advance(26);
    \u0275\u0275conditional(ctx.isLoading ? 91 : ctx.gastos.length === 0 ? 92 : 93);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.totalPages > 1 ? 94 : -1);
  }
}, dependencies: [CommonModule, DecimalPipe, DatePipe, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgSelectModule, NgSelectComponent, SharedModule], styles: ["\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.35em 0.65em;\n}\n.bg-purple[_ngcontent-%COMP%] {\n  background-color: #6f42c1 !important;\n  color: white;\n}\n.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.btn-group[_ngcontent-%COMP%] {\n  gap: 0.25rem;\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=gasto-list.component.css.map */"] });
var GastoListComponent = _GastoListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GastoListComponent, { className: "GastoListComponent" });
})();
export {
  GastoListComponent
};
//# sourceMappingURL=gasto-list.component-6XJ7BXH3.js.map
