import {
  ClienteService
} from "./chunk-SLCQH36Y.js";
import "./chunk-7WSVHSJD.js";
import {
  SharedModule
} from "./chunk-UEAXMXBR.js";
import {
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
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
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

// src/app/componets/dashbord/bussiness-dashboard/clientes/cliente-list/cliente-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["../view", a0];
var _c1 = (a0) => ["../edit", a0];
function ClienteListComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37)(2, "div", 38)(3, "span", 39);
    \u0275\u0275text(4, "Cargando...");
    \u0275\u0275elementEnd()()()();
  }
}
function ClienteListComponent_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2, "No hay clientes registrados");
    \u0275\u0275elementEnd()();
  }
}
function ClienteListComponent_Conditional_93_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cliente_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cliente_r2.direccion);
  }
}
function ClienteListComponent_Conditional_93_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ClienteListComponent_Conditional_93_For_1_Conditional_4_Template, 2, 1, "small", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "div", 42)(16, "button", 43);
    \u0275\u0275element(17, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 45);
    \u0275\u0275element(19, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 47);
    \u0275\u0275listener("click", function ClienteListComponent_Conditional_93_For_1_Template_button_click_20_listener() {
      const cliente_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleEstado(cliente_r2));
    });
    \u0275\u0275element(21, "i");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cliente_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cliente_r2.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(cliente_r2.direccion ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cliente_r2.telefono || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cliente_r2.correo || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cliente_r2.nit || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge " + (cliente_r2.estado ? "bg-success" : "bg-danger"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cliente_r2.estado ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c0, cliente_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c1, cliente_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-success", !cliente_r2.estado)("btn-warning", cliente_r2.estado);
    \u0275\u0275property("title", cliente_r2.estado ? "Desactivar" : "Activar");
    \u0275\u0275advance();
    \u0275\u0275classMap(cliente_r2.estado ? "ri-close-circle-line" : "ri-check-line");
  }
}
function ClienteListComponent_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ClienteListComponent_Conditional_93_For_1_Template, 22, 21, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.clientes);
  }
}
function ClienteListComponent_Conditional_94_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 49)(1, "a", 50);
    \u0275\u0275listener("click", function ClienteListComponent_Conditional_94_For_9_Template_a_click_1_listener() {
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
function ClienteListComponent_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "nav")(4, "ul", 48)(5, "li", 49)(6, "a", 50);
    \u0275\u0275listener("click", function ClienteListComponent_Conditional_94_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange(ctx_r2.currentPage - 1));
    });
    \u0275\u0275text(7, "Anterior");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(8, ClienteListComponent_Conditional_94_For_9_Template, 3, 3, "li", 51, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(10, "li", 49)(11, "a", 50);
    \u0275\u0275listener("click", function ClienteListComponent_Conditional_94_Template_a_click_11_listener() {
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
    \u0275\u0275textInterpolate3(" Mostrando ", (ctx_r2.currentPage - 1) * ctx_r2.itemsPerPage + 1, " a ", ctx_r2.Math.min(ctx_r2.currentPage * ctx_r2.itemsPerPage, ctx_r2.totalItems), " de ", ctx_r2.totalItems, " clientes ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.pages);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
  }
}
var _ClienteListComponent = class _ClienteListComponent {
  constructor(clienteService, cdr, toastr) {
    this.clienteService = clienteService;
    this.cdr = cdr;
    this.toastr = toastr;
    this.clientes = [];
    this.isLoading = false;
    this.searchTerm = "";
    this.estadoFilter = "";
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalItems = 0;
    this.totalPages = 0;
    this.Math = Math;
    this.stats = {
      totalClientes: 0,
      clientesActivos: 0,
      clientesInactivos: 0
    };
  }
  ngOnInit() {
    this.loadClientes();
    this.loadStats();
  }
  loadClientes() {
    this.isLoading = true;
    this.clienteService.page = this.currentPage;
    this.clienteService.pageSize = this.itemsPerPage;
    this.clienteService.searchTerm = this.searchTerm;
    this.clienteService.clienteData$.subscribe({
      next: (clientes) => {
        this.clientes = clientes;
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
    this.clienteService.total$.subscribe({
      next: (total) => {
        this.totalItems = total;
        this.totalPages = Math.ceil(total / this.itemsPerPage);
        this.cdr.detectChanges();
      }
    });
  }
  loadStats() {
    this.clienteService.getClienteStats().subscribe({
      next: (stats) => {
        this.stats = {
          totalClientes: stats.totalClientes,
          clientesActivos: stats.clientesActivos,
          clientesInactivos: stats.clientesInactivos
        };
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error al cargar estad\xEDsticas:", error);
      }
    });
  }
  applyFilters() {
    this.currentPage = 1;
    this.loadClientes();
  }
  clearFilters() {
    this.searchTerm = "";
    this.estadoFilter = "";
    this.currentPage = 1;
    this.loadClientes();
  }
  toggleEstado(cliente) {
    const nuevoEstado = !cliente.estado;
    const mensaje = nuevoEstado ? "activar" : "desactivar";
    if (confirm(`\xBFEst\xE1 seguro de ${mensaje} este cliente?`)) {
      const action = nuevoEstado ? this.clienteService.activateCliente(cliente.id) : this.clienteService.deactivateCliente(cliente.id);
      action.subscribe({
        next: () => {
          this.toastr.success(`Cliente ${nuevoEstado ? "activado" : "desactivado"} exitosamente`, "\xC9xito");
          this.loadClientes();
          this.loadStats();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || `Error al ${mensaje} cliente`;
          this.toastr.error(errorMsg, "Error");
        }
      });
    }
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadClientes();
  }
  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
};
_ClienteListComponent.\u0275fac = function ClienteListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClienteListComponent)(\u0275\u0275directiveInject(ClienteService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_ClienteListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClienteListComponent, selectors: [["app-cliente-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 95, vars: 7, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "d-flex", "gap-2"], ["routerLink", "../add", 1, "btn", "btn-primary", "btn-sm"], [1, "ri-add-line"], [1, "col-xl-4", "col-lg-6", "col-md-6", "col-sm-12"], [1, "card-body"], [1, "d-flex", "align-items-top"], [1, "me-3"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-primary-transparent"], [1, "ri-user-line", "fs-18"], [1, "flex-fill"], [1, "d-flex", "mb-1", "align-items-top", "justify-content-between"], [1, "fw-semibold", "mb-0", "lh-1"], [1, "mb-0", "fs-12", "text-muted"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-success-transparent"], [1, "ri-user-check-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-danger-transparent"], [1, "ri-user-unfollow-line", "fs-18"], [1, "row", "g-3"], [1, "col-xl-4", "col-lg-4", "col-md-6"], ["type", "text", "placeholder", "Buscar por nombre, tel\xE9fono, correo...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "activo"], ["value", "inactivo"], [1, "col-xl-2", "col-lg-4", "col-md-6"], [1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "ri-refresh-line"], [1, "table-responsive"], [1, "table", "text-nowrap", "table-hover"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], ["colspan", "6", 1, "text-center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "fw-semibold"], [1, "text-muted"], ["role", "group", 1, "btn-group"], ["title", "Ver detalles", 1, "btn", "btn-sm", "btn-info", 3, "routerLink"], [1, "ri-eye-line"], ["title", "Editar", 1, "btn", "btn-sm", "btn-primary", 3, "routerLink"], [1, "ri-edit-line"], [1, "btn", "btn-sm", 3, "click", "title"], [1, "pagination", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "page-item", 3, "active"]], template: function ClienteListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Gesti\xF3n de Clientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, " Agregar Cliente ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(11, "div", 1)(12, "div", 9)(13, "div", 3)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "span", 13);
    \u0275\u0275element(18, "i", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 15)(20, "div", 16)(21, "h5", 17);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "p", 18);
    \u0275\u0275text(24, "Total Clientes");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(25, "div", 9)(26, "div", 3)(27, "div", 10)(28, "div", 11)(29, "div", 12)(30, "span", 19);
    \u0275\u0275element(31, "i", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 15)(33, "div", 16)(34, "h5", 17);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "p", 18);
    \u0275\u0275text(37, "Clientes Activos");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(38, "div", 9)(39, "div", 3)(40, "div", 10)(41, "div", 11)(42, "div", 12)(43, "span", 21);
    \u0275\u0275element(44, "i", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 15)(46, "div", 16)(47, "h5", 17);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "p", 18);
    \u0275\u0275text(50, "Clientes Inactivos");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(51, "div", 1)(52, "div", 2)(53, "div", 3)(54, "div", 10)(55, "div", 23)(56, "div", 24)(57, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ClienteListComponent_Template_input_ngModelChange_57_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function ClienteListComponent_Template_input_ngModelChange_57_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 26)(59, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function ClienteListComponent_Template_select_ngModelChange_59_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.estadoFilter, $event) || (ctx.estadoFilter = $event);
      return $event;
    });
    \u0275\u0275listener("change", function ClienteListComponent_Template_select_change_59_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementStart(60, "option", 28);
    \u0275\u0275text(61, "Todos los estados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "option", 29);
    \u0275\u0275text(63, "Activos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "option", 30);
    \u0275\u0275text(65, "Inactivos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 31)(67, "button", 32);
    \u0275\u0275listener("click", function ClienteListComponent_Template_button_click_67_listener() {
      return ctx.clearFilters();
    });
    \u0275\u0275element(68, "i", 33);
    \u0275\u0275text(69, " Limpiar ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(70, "div", 1)(71, "div", 2)(72, "div", 3)(73, "div", 10)(74, "div", 34)(75, "table", 35)(76, "thead")(77, "tr")(78, "th");
    \u0275\u0275text(79, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "th");
    \u0275\u0275text(81, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "th");
    \u0275\u0275text(83, "Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "th");
    \u0275\u0275text(85, "NIT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "th");
    \u0275\u0275text(87, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "th");
    \u0275\u0275text(89, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(90, "tbody");
    \u0275\u0275template(91, ClienteListComponent_Conditional_91_Template, 5, 0, "tr")(92, ClienteListComponent_Conditional_92_Template, 3, 0, "tr")(93, ClienteListComponent_Conditional_93_Template, 2, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(94, ClienteListComponent_Conditional_94_Template, 13, 7, "div", 36);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate(ctx.stats.totalClientes);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.stats.clientesActivos);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.stats.clientesInactivos);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.estadoFilter);
    \u0275\u0275advance(32);
    \u0275\u0275conditional(ctx.isLoading ? 91 : ctx.clientes.length === 0 ? 92 : 93);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.totalPages > 1 ? 94 : -1);
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, NgSelectModule, SharedModule], styles: ["\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.35em 0.65em;\n}\n.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.btn-group[_ngcontent-%COMP%] {\n  gap: 0.25rem;\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=cliente-list.component.css.map */"] });
var ClienteListComponent = _ClienteListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClienteListComponent, { className: "ClienteListComponent" });
})();
export {
  ClienteListComponent
};
//# sourceMappingURL=cliente-list.component-WMFYO3UJ.js.map
