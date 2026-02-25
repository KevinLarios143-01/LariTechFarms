import {
  VentaService
} from "./chunk-EAZAKIYV.js";
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

// src/app/componets/dashbord/bussiness-dashboard/ventas/venta-list/venta-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["../view", a0];
function VentaListComponent_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34)(2, "div", 35)(3, "span", 36);
    \u0275\u0275text(4, "Cargando...");
    \u0275\u0275elementEnd()()()();
  }
}
function VentaListComponent_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
    \u0275\u0275text(2, "No hay ventas registradas");
    \u0275\u0275elementEnd()();
  }
}
function VentaListComponent_Conditional_99_For_1_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const venta_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(venta_r1.cliente.telefono);
  }
}
function VentaListComponent_Conditional_99_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, VentaListComponent_Conditional_99_For_1_Conditional_5_Conditional_2_Template, 2, 1, "small", 37);
  }
  if (rf & 2) {
    const venta_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(venta_r1.cliente.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(venta_r1.cliente.telefono ? 2 : -1);
  }
}
function VentaListComponent_Conditional_99_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "Cliente general");
    \u0275\u0275elementEnd();
  }
}
function VentaListComponent_Conditional_99_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const venta_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(venta_r1.metodoPago);
  }
}
function VentaListComponent_Conditional_99_For_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function VentaListComponent_Conditional_99_For_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function VentaListComponent_Conditional_99_For_1_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const venta_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.anularVenta(venta_r1));
    });
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275elementEnd();
  }
}
function VentaListComponent_Conditional_99_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275template(5, VentaListComponent_Conditional_99_For_1_Conditional_5_Template, 3, 2)(6, VentaListComponent_Conditional_99_For_1_Conditional_6_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 38);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275template(12, VentaListComponent_Conditional_99_For_1_Conditional_12_Template, 2, 1, "span", 39)(13, VentaListComponent_Conditional_99_For_1_Conditional_13_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "div", 40)(19, "button", 41);
    \u0275\u0275element(20, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, VentaListComponent_Conditional_99_For_1_Conditional_21_Template, 2, 0, "button", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const venta_r1 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 9, venta_r1.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(venta_r1.cliente ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(10, 12, venta_r1.total, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(venta_r1.metodoPago ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("badge " + ctx_r2.getEstadoBadgeClass(venta_r1.estado));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", venta_r1.estado, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, venta_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(venta_r1.estado !== "Cancelada" ? 21 : -1);
  }
}
function VentaListComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, VentaListComponent_Conditional_99_For_1_Template, 22, 17, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.ventas);
  }
}
function VentaListComponent_Conditional_100_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 48)(1, "a", 49);
    \u0275\u0275listener("click", function VentaListComponent_Conditional_100_For_9_Template_a_click_1_listener() {
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
function VentaListComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "nav")(4, "ul", 47)(5, "li", 48)(6, "a", 49);
    \u0275\u0275listener("click", function VentaListComponent_Conditional_100_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange(ctx_r2.currentPage - 1));
    });
    \u0275\u0275text(7, "Anterior");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(8, VentaListComponent_Conditional_100_For_9_Template, 3, 3, "li", 50, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(10, "li", 48)(11, "a", 49);
    \u0275\u0275listener("click", function VentaListComponent_Conditional_100_Template_a_click_11_listener() {
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
    \u0275\u0275textInterpolate3(" Mostrando ", (ctx_r2.currentPage - 1) * ctx_r2.itemsPerPage + 1, " a ", ctx_r2.Math.min(ctx_r2.currentPage * ctx_r2.itemsPerPage, ctx_r2.totalItems), " de ", ctx_r2.totalItems, " ventas ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.pages);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
  }
}
var _VentaListComponent = class _VentaListComponent {
  constructor(ventaService, cdr, toastr) {
    this.ventaService = ventaService;
    this.cdr = cdr;
    this.toastr = toastr;
    this.ventas = [];
    this.isLoading = false;
    this.estadoFilter = "";
    this.fechaDesde = "";
    this.fechaHasta = "";
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalItems = 0;
    this.totalPages = 0;
    this.estados = ["Completada", "Pendiente", "Cancelada"];
    this.Math = Math;
    this.stats = {
      totalVentas: 0,
      ventasCompletadas: 0,
      ventasPendientes: 0,
      montoTotal: 0
    };
  }
  ngOnInit() {
    this.loadVentas();
    this.loadStats();
  }
  loadVentas() {
    this.isLoading = true;
    const params = {
      page: this.currentPage,
      limit: this.itemsPerPage,
      estado: this.estadoFilter || void 0,
      fechaDesde: this.fechaDesde || void 0,
      fechaHasta: this.fechaHasta || void 0
    };
    this.ventaService.getVentas(params).subscribe({
      next: (response) => {
        if (response?.data?.data) {
          this.ventas = response.data.data;
          this.totalItems = response.data.pagination.total;
          this.totalPages = response.data.pagination.totalPages;
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error("Error al cargar ventas", "Error");
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  loadStats() {
    const params = {
      fechaDesde: this.fechaDesde || void 0,
      fechaHasta: this.fechaHasta || void 0
    };
    this.ventaService.getVentasEstadisticas(params).subscribe({
      next: (response) => {
        console.log("Respuesta de estad\xEDsticas:", response);
        if (response?.data) {
          console.log("response.data:", response.data);
          this.stats = {
            totalVentas: response.data.totalVentas || 0,
            ventasCompletadas: response.data.ventasCompletadas || 0,
            ventasPendientes: response.data.ventasPendientes || 0,
            montoTotal: response.data.montoTotal || 0
          };
          console.log("Stats asignados:", this.stats);
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
    this.loadVentas();
    this.loadStats();
  }
  clearFilters() {
    this.estadoFilter = "";
    this.fechaDesde = "";
    this.fechaHasta = "";
    this.currentPage = 1;
    this.loadVentas();
    this.loadStats();
  }
  anularVenta(venta) {
    if (venta.estado === "Cancelada") {
      this.toastr.warning("Esta venta ya est\xE1 cancelada", "Advertencia");
      return;
    }
    const motivo = prompt("Ingrese el motivo de anulaci\xF3n de la venta (opcional):");
    if (motivo === null) {
      return;
    }
    if (confirm("\xBFEst\xE1 seguro de anular esta venta? Esta acci\xF3n restaurar\xE1 el stock de los productos.")) {
      const payload = motivo && motivo.trim() ? { motivoAnulacion: motivo.trim() } : {};
      this.ventaService.anularVenta(venta.id, payload).subscribe({
        next: () => {
          this.toastr.success("Venta anulada exitosamente", "\xC9xito");
          this.loadVentas();
          this.loadStats();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || "Error al anular venta";
          this.toastr.error(errorMsg, "Error");
        }
      });
    }
  }
  getEstadoBadgeClass(estado) {
    const classes = {
      "Completada": "bg-success",
      "Pendiente": "bg-warning",
      "Cancelada": "bg-danger"
    };
    return classes[estado] || "bg-secondary";
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadVentas();
  }
  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
};
_VentaListComponent.\u0275fac = function VentaListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VentaListComponent)(\u0275\u0275directiveInject(VentaService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_VentaListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VentaListComponent, selectors: [["app-venta-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 101, vars: 14, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "d-flex", "gap-2"], ["routerLink", "../add", 1, "btn", "btn-primary", "btn-sm"], [1, "ri-add-line"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-sm-12"], [1, "card-body"], [1, "d-flex", "align-items-top"], [1, "me-3"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-primary-transparent"], [1, "ri-shopping-cart-line", "fs-18"], [1, "flex-fill"], [1, "fw-semibold", "mb-0", "lh-1"], [1, "mb-0", "fs-12", "text-muted"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-success-transparent"], [1, "ri-check-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-warning-transparent"], [1, "ri-time-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-info-transparent"], [1, "ri-money-dollar-circle-line", "fs-18"], [1, "row", "g-3"], [1, "col-xl-3", "col-lg-4", "col-md-6"], ["placeholder", "Estado", 3, "ngModelChange", "change", "items", "ngModel", "clearable"], ["type", "date", "placeholder", "Fecha Desde", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", "placeholder", "Fecha Hasta", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "ri-refresh-line"], [1, "table-responsive"], [1, "table", "text-nowrap", "table-hover"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], ["colspan", "6", 1, "text-center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "text-muted"], [1, "fw-semibold", "text-success"], [1, "badge", "bg-light", "text-dark"], ["role", "group", 1, "btn-group"], ["title", "Ver detalles", 1, "btn", "btn-sm", "btn-info", 3, "routerLink"], [1, "ri-eye-line"], ["title", "Anular", 1, "btn", "btn-sm", "btn-danger"], [1, "fw-semibold"], ["title", "Anular", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "ri-close-circle-line"], [1, "pagination", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "page-item", 3, "active"]], template: function VentaListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Gesti\xF3n de Ventas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, " Nueva Venta ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(11, "div", 1)(12, "div", 9)(13, "div", 3)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "span", 13);
    \u0275\u0275element(18, "i", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 15)(20, "h5", 16);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 17);
    \u0275\u0275text(23, "Total Ventas");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(24, "div", 9)(25, "div", 3)(26, "div", 10)(27, "div", 11)(28, "div", 12)(29, "span", 18);
    \u0275\u0275element(30, "i", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 15)(32, "h5", 16);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 17);
    \u0275\u0275text(35, "Completadas");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(36, "div", 9)(37, "div", 3)(38, "div", 10)(39, "div", 11)(40, "div", 12)(41, "span", 20);
    \u0275\u0275element(42, "i", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 15)(44, "h5", 16);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p", 17);
    \u0275\u0275text(47, "Pendientes");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(48, "div", 9)(49, "div", 3)(50, "div", 10)(51, "div", 11)(52, "div", 12)(53, "span", 22);
    \u0275\u0275element(54, "i", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 15)(56, "h5", 16);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p", 17);
    \u0275\u0275text(60, "Monto Total");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(61, "div", 1)(62, "div", 2)(63, "div", 3)(64, "div", 10)(65, "div", 24)(66, "div", 25)(67, "ng-select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function VentaListComponent_Template_ng_select_ngModelChange_67_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.estadoFilter, $event) || (ctx.estadoFilter = $event);
      return $event;
    });
    \u0275\u0275listener("change", function VentaListComponent_Template_ng_select_change_67_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 25)(69, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function VentaListComponent_Template_input_ngModelChange_69_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.fechaDesde, $event) || (ctx.fechaDesde = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function VentaListComponent_Template_input_ngModelChange_69_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 25)(71, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function VentaListComponent_Template_input_ngModelChange_71_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.fechaHasta, $event) || (ctx.fechaHasta = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function VentaListComponent_Template_input_ngModelChange_71_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 25)(73, "button", 29);
    \u0275\u0275listener("click", function VentaListComponent_Template_button_click_73_listener() {
      return ctx.clearFilters();
    });
    \u0275\u0275element(74, "i", 30);
    \u0275\u0275text(75, " Limpiar ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(76, "div", 1)(77, "div", 2)(78, "div", 3)(79, "div", 10)(80, "div", 31)(81, "table", 32)(82, "thead")(83, "tr")(84, "th");
    \u0275\u0275text(85, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "th");
    \u0275\u0275text(87, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "th");
    \u0275\u0275text(89, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "th");
    \u0275\u0275text(91, "M\xE9todo Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "th");
    \u0275\u0275text(93, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "th");
    \u0275\u0275text(95, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "tbody");
    \u0275\u0275template(97, VentaListComponent_Conditional_97_Template, 5, 0, "tr")(98, VentaListComponent_Conditional_98_Template, 3, 0, "tr")(99, VentaListComponent_Conditional_99_Template, 2, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(100, VentaListComponent_Conditional_100_Template, 13, 7, "div", 33);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx.stats.totalVentas);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx.stats.ventasCompletadas);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx.stats.ventasPendientes);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(58, 11, ctx.stats.montoTotal, "1.2-2"), "");
    \u0275\u0275advance(10);
    \u0275\u0275property("items", ctx.estados);
    \u0275\u0275twoWayProperty("ngModel", ctx.estadoFilter);
    \u0275\u0275property("clearable", true);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaDesde);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaHasta);
    \u0275\u0275advance(26);
    \u0275\u0275conditional(ctx.isLoading ? 97 : ctx.ventas.length === 0 ? 98 : 99);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.totalPages > 1 ? 100 : -1);
  }
}, dependencies: [CommonModule, DecimalPipe, DatePipe, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgSelectModule, NgSelectComponent, SharedModule], styles: ["\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.35em 0.65em;\n}\n.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.btn-group[_ngcontent-%COMP%] {\n  gap: 0.25rem;\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=venta-list.component.css.map */"] });
var VentaListComponent = _VentaListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VentaListComponent, { className: "VentaListComponent" });
})();
export {
  VentaListComponent
};
//# sourceMappingURL=venta-list.component-MLDJ5HRX.js.map
