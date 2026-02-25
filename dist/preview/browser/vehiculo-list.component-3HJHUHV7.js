import {
  VehiculoService
} from "./chunk-PUYTWGLT.js";
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
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/production-dashboard/vehiculos/vehiculo-list/vehiculo-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["../view", a0];
var _c1 = (a0) => ["../edit", a0];
function VehiculoListComponent_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35)(2, "div", 36)(3, "span", 37);
    \u0275\u0275text(4, "Cargando...");
    \u0275\u0275elementEnd()()()();
  }
}
function VehiculoListComponent_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2, "No hay veh\xEDculos registrados");
    \u0275\u0275elementEnd()();
  }
}
function VehiculoListComponent_Conditional_105_For_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const vehiculo_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, vehiculo_r2.capacidad, "1.0-0"), " kg ");
  }
}
function VehiculoListComponent_Conditional_105_For_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function VehiculoListComponent_Conditional_105_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 38);
    \u0275\u0275element(3, "i", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "div", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275template(14, VehiculoListComponent_Conditional_105_For_1_Conditional_14_Template, 2, 4)(15, VehiculoListComponent_Conditional_105_For_1_Conditional_15_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span");
    \u0275\u0275element(18, "i");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td")(21, "div", 42)(22, "button", 43);
    \u0275\u0275element(23, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 45);
    \u0275\u0275element(25, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 47);
    \u0275\u0275listener("click", function VehiculoListComponent_Conditional_105_For_1_Template_button_click_26_listener() {
      const vehiculo_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteVehiculo(vehiculo_r2.id));
    });
    \u0275\u0275element(27, "i", 48);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const vehiculo_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", vehiculo_r2.tipo, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vehiculo_r2.placa);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", vehiculo_r2.marca, " ", vehiculo_r2.modelo, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vehiculo_r2.anio || "-");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(vehiculo_r2.capacidad ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("badge " + ctx_r2.getEstadoBadgeClass(vehiculo_r2.estado));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getEstadoIcon(vehiculo_r2.estado) + " me-1");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vehiculo_r2.estado, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, vehiculo_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c1, vehiculo_r2.id));
  }
}
function VehiculoListComponent_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, VehiculoListComponent_Conditional_105_For_1_Template, 28, 17, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.filteredVehiculos);
  }
}
function VehiculoListComponent_Conditional_106_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 50)(1, "a", 51);
    \u0275\u0275listener("click", function VehiculoListComponent_Conditional_106_For_9_Template_a_click_1_listener() {
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
function VehiculoListComponent_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "nav")(4, "ul", 49)(5, "li", 50)(6, "a", 51);
    \u0275\u0275listener("click", function VehiculoListComponent_Conditional_106_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange(ctx_r2.currentPage - 1));
    });
    \u0275\u0275text(7, "Anterior");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(8, VehiculoListComponent_Conditional_106_For_9_Template, 3, 3, "li", 52, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(10, "li", 50)(11, "a", 51);
    \u0275\u0275listener("click", function VehiculoListComponent_Conditional_106_Template_a_click_11_listener() {
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
    \u0275\u0275textInterpolate3(" Mostrando ", (ctx_r2.currentPage - 1) * ctx_r2.itemsPerPage + 1, " a ", ctx_r2.Math.min(ctx_r2.currentPage * ctx_r2.itemsPerPage, ctx_r2.totalItems), " de ", ctx_r2.totalItems, " veh\xEDculos ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.pages);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
  }
}
var _VehiculoListComponent = class _VehiculoListComponent {
  constructor(vehiculoService, cdr, toastr) {
    this.vehiculoService = vehiculoService;
    this.cdr = cdr;
    this.toastr = toastr;
    this.vehiculos = [];
    this.filteredVehiculos = [];
    this.tipos = [];
    this.isLoading = false;
    this.searchTerm = "";
    this.selectedTipo = "";
    this.selectedEstado = "";
    this.estados = [
      { value: "Activo", label: "Activo" },
      { value: "Inactivo", label: "Inactivo" },
      { value: "Mantenimiento", label: "Mantenimiento" },
      { value: "Vendido", label: "Vendido" }
    ];
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalItems = 0;
    this.totalPages = 0;
    this.Math = Math;
    this.stats = {
      totalVehiculos: 0,
      vehiculosPorEstado: [],
      capacidadTotal: 0
    };
  }
  ngOnInit() {
    this.loadVehiculos();
    this.loadTipos();
    this.loadStats();
  }
  loadVehiculos() {
    this.isLoading = true;
    const params = {
      page: this.currentPage,
      limit: this.itemsPerPage,
      search: this.searchTerm || void 0,
      tipo: this.selectedTipo || void 0,
      estado: this.selectedEstado || void 0
    };
    this.vehiculoService.getVehiculos(params).subscribe({
      next: (response) => {
        if (response?.data?.items) {
          this.vehiculos = response.data.items;
          this.filteredVehiculos = [...this.vehiculos];
          this.totalItems = response.data.pagination.total;
          this.totalPages = response.data.pagination.totalPages;
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error("Error al cargar veh\xEDculos", "Error");
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  loadTipos() {
    this.vehiculoService.getTipos().subscribe({
      next: (response) => {
        this.tipos = response.data || [];
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error al cargar tipos:", error);
      }
    });
  }
  loadStats() {
    this.vehiculoService.getStats().subscribe({
      next: (response) => {
        if (response?.data) {
          this.stats = {
            totalVehiculos: response.data.totalVehiculos,
            vehiculosPorEstado: response.data.vehiculosPorEstado || [],
            capacidadTotal: response.data.capacidadTotal
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
    this.loadVehiculos();
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedTipo = "";
    this.selectedEstado = "";
    this.currentPage = 1;
    this.loadVehiculos();
  }
  deleteVehiculo(id) {
    if (confirm("\xBFEst\xE1 seguro de eliminar este veh\xEDculo?")) {
      this.vehiculoService.deleteVehiculo(id).subscribe({
        next: () => {
          this.toastr.success("Veh\xEDculo eliminado exitosamente", "\xC9xito");
          this.loadVehiculos();
          this.loadStats();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || "Error al eliminar veh\xEDculo";
          this.toastr.error(errorMsg, "Error");
        }
      });
    }
  }
  getEstadoBadgeClass(estado) {
    const classes = {
      "Activo": "bg-success",
      "Inactivo": "bg-secondary",
      "Mantenimiento": "bg-warning",
      "Vendido": "bg-danger"
    };
    return classes[estado] || "bg-secondary";
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
  onPageChange(page) {
    this.currentPage = page;
    this.loadVehiculos();
  }
  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  getVehiculosPorEstado(estado) {
    const item = this.stats.vehiculosPorEstado.find((v) => v.estado === estado);
    return item?.cantidad || 0;
  }
};
_VehiculoListComponent.\u0275fac = function VehiculoListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VehiculoListComponent)(\u0275\u0275directiveInject(VehiculoService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_VehiculoListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VehiculoListComponent, selectors: [["app-vehiculo-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 107, vars: 16, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "d-flex", "gap-2"], ["routerLink", "../add", 1, "btn", "btn-primary", "btn-sm"], [1, "ri-add-line"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-sm-12"], [1, "card-body"], [1, "d-flex", "align-items-top"], [1, "me-3"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-primary-transparent"], [1, "ri-truck-line", "fs-18"], [1, "flex-fill"], [1, "d-flex", "mb-1", "align-items-top", "justify-content-between"], [1, "fw-semibold", "mb-0", "lh-1"], [1, "mb-0", "fs-12", "text-muted"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-success-transparent"], [1, "ri-checkbox-circle-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-warning-transparent"], [1, "ri-tools-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-info-transparent"], [1, "ri-weight-line", "fs-18"], [1, "row", "g-3"], [1, "col-xl-3", "col-lg-4", "col-md-6"], ["type", "text", "placeholder", "Buscar por placa, marca o modelo...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Tipo de Veh\xEDculo", 3, "ngModelChange", "change", "items", "ngModel", "clearable"], ["bindLabel", "label", "bindValue", "value", "placeholder", "Estado", 3, "ngModelChange", "change", "items", "ngModel", "clearable"], [1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "ri-refresh-line"], [1, "table-responsive"], [1, "table", "text-nowrap", "table-hover"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], ["colspan", "7", 1, "text-center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "badge", "bg-light", "text-dark"], [1, "ri-truck-line", "me-1"], [1, "fw-semibold"], [1, "text-muted"], ["role", "group", 1, "btn-group"], ["title", "Ver detalles", 1, "btn", "btn-sm", "btn-info", 3, "routerLink"], [1, "ri-eye-line"], ["title", "Editar", 1, "btn", "btn-sm", "btn-primary", 3, "routerLink"], [1, "ri-edit-line"], ["title", "Eliminar", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "ri-delete-bin-line"], [1, "pagination", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "page-item", 3, "active"]], template: function VehiculoListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Gesti\xF3n de Veh\xEDculos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, " Agregar Veh\xEDculo ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(11, "div", 1)(12, "div", 9)(13, "div", 3)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "span", 13);
    \u0275\u0275element(18, "i", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 15)(20, "div", 16)(21, "h5", 17);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "p", 18);
    \u0275\u0275text(24, "Total Veh\xEDculos");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(25, "div", 9)(26, "div", 3)(27, "div", 10)(28, "div", 11)(29, "div", 12)(30, "span", 19);
    \u0275\u0275element(31, "i", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 15)(33, "div", 16)(34, "h5", 17);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "p", 18);
    \u0275\u0275text(37, "Activos");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(38, "div", 9)(39, "div", 3)(40, "div", 10)(41, "div", 11)(42, "div", 12)(43, "span", 21);
    \u0275\u0275element(44, "i", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 15)(46, "div", 16)(47, "h5", 17);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "p", 18);
    \u0275\u0275text(50, "En Mantenimiento");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(51, "div", 9)(52, "div", 3)(53, "div", 10)(54, "div", 11)(55, "div", 12)(56, "span", 23);
    \u0275\u0275element(57, "i", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 15)(59, "div", 16)(60, "h5", 17);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "p", 18);
    \u0275\u0275text(64, "Capacidad Total (kg)");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(65, "div", 1)(66, "div", 2)(67, "div", 3)(68, "div", 10)(69, "div", 25)(70, "div", 26)(71, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function VehiculoListComponent_Template_input_ngModelChange_71_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function VehiculoListComponent_Template_input_ngModelChange_71_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 26)(73, "ng-select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function VehiculoListComponent_Template_ng_select_ngModelChange_73_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedTipo, $event) || (ctx.selectedTipo = $event);
      return $event;
    });
    \u0275\u0275listener("change", function VehiculoListComponent_Template_ng_select_change_73_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 26)(75, "ng-select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function VehiculoListComponent_Template_ng_select_ngModelChange_75_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedEstado, $event) || (ctx.selectedEstado = $event);
      return $event;
    });
    \u0275\u0275listener("change", function VehiculoListComponent_Template_ng_select_change_75_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 26)(77, "button", 30);
    \u0275\u0275listener("click", function VehiculoListComponent_Template_button_click_77_listener() {
      return ctx.clearFilters();
    });
    \u0275\u0275element(78, "i", 31);
    \u0275\u0275text(79, " Limpiar Filtros ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(80, "div", 1)(81, "div", 2)(82, "div", 3)(83, "div", 10)(84, "div", 32)(85, "table", 33)(86, "thead")(87, "tr")(88, "th");
    \u0275\u0275text(89, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "th");
    \u0275\u0275text(91, "Placa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "th");
    \u0275\u0275text(93, "Marca/Modelo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "th");
    \u0275\u0275text(95, "A\xF1o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "th");
    \u0275\u0275text(97, "Capacidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "th");
    \u0275\u0275text(99, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "th");
    \u0275\u0275text(101, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(102, "tbody");
    \u0275\u0275template(103, VehiculoListComponent_Conditional_103_Template, 5, 0, "tr")(104, VehiculoListComponent_Conditional_104_Template, 3, 0, "tr")(105, VehiculoListComponent_Conditional_105_Template, 2, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(106, VehiculoListComponent_Conditional_106_Template, 13, 7, "div", 34);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate(ctx.stats.totalVehiculos);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.getVehiculosPorEstado("Activo"));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.getVehiculosPorEstado("Mantenimiento"));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 13, ctx.stats.capacidadTotal, "1.0-0"));
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx.tipos);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedTipo);
    \u0275\u0275property("clearable", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx.estados);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedEstado);
    \u0275\u0275property("clearable", true);
    \u0275\u0275advance(28);
    \u0275\u0275conditional(ctx.isLoading ? 103 : ctx.filteredVehiculos.length === 0 ? 104 : 105);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.totalPages > 1 ? 106 : -1);
  }
}, dependencies: [CommonModule, DecimalPipe, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgSelectModule, NgSelectComponent, SharedModule], styles: ["\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #495057;\n  background-color: #f8f9fa;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.35em 0.65em;\n}\n/*# sourceMappingURL=vehiculo-list.component.css.map */"] });
var VehiculoListComponent = _VehiculoListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VehiculoListComponent, { className: "VehiculoListComponent" });
})();
export {
  VehiculoListComponent
};
//# sourceMappingURL=vehiculo-list.component-3HJHUHV7.js.map
