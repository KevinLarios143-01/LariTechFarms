import {
  EmpleadoService
} from "./chunk-VQWYOHLQ.js";
import {
  environment
} from "./chunk-7WSVHSJD.js";
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
import "./chunk-47LBZ5ZO.js";
import {
  AsyncPipe,
  BehaviorSubject,
  DatePipe,
  DecimalPipe,
  HttpClient,
  HttpParams,
  RouterLink,
  RouterModule,
  Subject,
  catchError,
  debounceTime,
  delay,
  map,
  of,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/hrmdashboards/employess/employee-list/employee.service.ts
var _EmployeeService = class _EmployeeService {
  constructor(pipe, http) {
    this.pipe = pipe;
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/v1/empleados`;
    this._loading$ = new BehaviorSubject(true);
    this._search$ = new Subject();
    this._employeeData$ = new BehaviorSubject([]);
    this._total$ = new BehaviorSubject(0);
    this._state = {
      page: 1,
      pageSize: 10,
      searchTerm: "",
      sortColumn: "",
      sortDirection: ""
    };
    this._search$.pipe(tap(() => this._loading$.next(true)), debounceTime(200), switchMap(() => this._search()), delay(200), tap(() => this._loading$.next(false))).subscribe((result) => {
      this._employeeData$.next(result.employeeData);
      this._total$.next(result.total);
    });
    this._search$.next();
  }
  get employeeData$() {
    return this._employeeData$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }
  getEmployeeStats() {
    return this.http.get(`${environment.apiUrl}/v1/empleados/stats`);
  }
  set page(page) {
    this._set({ page });
  }
  set pageSize(pageSize) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm) {
    this._set({ searchTerm });
  }
  set sortColumn(sortColumn) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection) {
    this._set({ sortDirection });
  }
  _set(patch) {
    Object.assign(this._state, patch);
    this._search$.next();
  }
  _search() {
    const { pageSize, page, searchTerm } = this._state;
    let params = new HttpParams().set("page", page.toString()).set("limit", pageSize.toString());
    if (searchTerm) {
      params = params.set("search", searchTerm);
    }
    return this.http.get(this.apiUrl, { params }).pipe(map((response) => {
      const employeeData = this.mapEmpleadosToEmployeeList(response.data.data);
      return {
        employeeData,
        total: response.data.pagination.total
      };
    }), catchError(() => of({ employeeData: [], total: 0 })));
  }
  mapEmpleadosToEmployeeList(empleados) {
    return empleados.map((emp) => __spreadProps(__spreadValues({}, emp), {
      img: "./assets/images/laritechfarms/2.jpg",
      tiempoTrabajo: this.calculateWorkTime(emp.fechaContratacion)
    }));
  }
  calculateWorkTime(joinDate) {
    const start = new Date(joinDate);
    const now = /* @__PURE__ */ new Date();
    const diff = now.getTime() - start.getTime();
    const years = Math.floor(diff / (1e3 * 60 * 60 * 24 * 365));
    const months = Math.floor(diff % (1e3 * 60 * 60 * 24 * 365) / (1e3 * 60 * 60 * 24 * 30));
    const days = Math.floor(diff % (1e3 * 60 * 60 * 24 * 30) / (1e3 * 60 * 60 * 24));
    return `${years} yrs ${months} mons ${days} days`;
  }
};
_EmployeeService.\u0275fac = function EmployeeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmployeeService)(\u0275\u0275inject(DecimalPipe), \u0275\u0275inject(HttpClient));
};
_EmployeeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmployeeService, factory: _EmployeeService.\u0275fac, providedIn: "root" });
var EmployeeService = _EmployeeService;

// src/app/componets/dashbord/hrmdashboards/employess/employee-list/employee-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/dashboard/hrmdashboards/employees/ver-empleado", a0];
function EmployeeListComponent_For_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 38)(1, "th", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 26)(5, "div", 47);
    \u0275\u0275element(6, "img", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "div", 49)(9, "h6", 50);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 49)(12, "span", 51);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "span", 52);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td")(29, "div", 53)(30, "a", 54);
    \u0275\u0275element(31, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "a", 56);
    \u0275\u0275listener("click", function EmployeeListComponent_For_110_Template_a_click_32_listener() {
      const emplist_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleEmpleadoStatus(emplist_r2));
    });
    \u0275\u0275element(33, "i");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const emplist_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emplist_r2.id);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", emplist_r2.img || "./assets/images/laritechfarms/2.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", emplist_r2.nombre, " ", emplist_r2.apellido, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emplist_r2.correo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emplist_r2.departamento || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((emplist_r2.puestoRelacion == null ? null : emplist_r2.puestoRelacion.nombre) || emplist_r2.puesto || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emplist_r2.telefono);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 19, emplist_r2.fechaContratacion, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.calculateWorkTime(emplist_r2.fechaContratacion));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(emplist_r2.activo ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(emplist_r2.activo ? "Activo" : "Inactivo");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c0, emplist_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(emplist_r2.activo ? "btn-warning" : "btn-success");
    \u0275\u0275property("title", emplist_r2.activo ? "Desactivar" : "Activar");
    \u0275\u0275advance();
    \u0275\u0275classMap(emplist_r2.activo ? "fe fe-user-x" : "fe fe-user-check");
  }
}
var _EmployeeListComponent = class _EmployeeListComponent {
  constructor(empleadoService, empleadoApiService, toastr) {
    this.empleadoService = empleadoService;
    this.empleadoApiService = empleadoApiService;
    this.toastr = toastr;
    this.employeeList$ = empleadoService.employeeData$;
    this.total$ = empleadoService.total$;
    this.loading$ = empleadoService.loading$;
    this.stats$ = empleadoService.getEmployeeStats();
  }
  ngOnInit() {
  }
  toggleEmpleadoStatus(empleado) {
    const isActive = empleado.activo;
    const action = isActive ? "desactivar" : "activar";
    if (confirm(`\xBFEst\xE1 seguro de que desea ${action} este empleado?`)) {
      const serviceCall = isActive ? this.empleadoApiService.deactivateEmpleado(empleado.id) : this.empleadoApiService.activateEmpleado(empleado.id);
      serviceCall.subscribe({
        next: () => {
          this.toastr.success(`Empleado ${action}do exitosamente`, "\xC9xito", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.empleadoService["_search$"].next();
        },
        error: (error) => {
          console.error("Error response:", error);
          let errorMessage = "Error desconocido";
          if (error.error?.message) {
            errorMessage = error.error.message;
          } else if (error.error?.error) {
            errorMessage = error.error.error;
          } else if (error.message) {
            errorMessage = error.message;
          } else if (typeof error.error === "string") {
            errorMessage = error.error;
          }
          this.toastr.error(`Error al ${action} el empleado: ${errorMessage}`, "Error", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
        }
      });
    }
  }
  get lists() {
    return [];
  }
  calculateWorkTime(joinDate) {
    const start = new Date(joinDate);
    const now = /* @__PURE__ */ new Date();
    const diff = now.getTime() - start.getTime();
    const years = Math.floor(diff / (1e3 * 60 * 60 * 24 * 365));
    const months = Math.floor(diff % (1e3 * 60 * 60 * 24 * 365) / (1e3 * 60 * 60 * 24 * 30));
    const days = Math.floor(diff % (1e3 * 60 * 60 * 24 * 30) / (1e3 * 60 * 60 * 24));
    return `${years} yrs ${months} mons ${days} days`;
  }
};
_EmployeeListComponent.\u0275fac = function EmployeeListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmployeeListComponent)(\u0275\u0275directiveInject(EmployeeService), \u0275\u0275directiveInject(EmpleadoService), \u0275\u0275directiveInject(ToastrService));
};
_EmployeeListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeListComponent, selectors: [["app-employee-list"]], standalone: true, features: [\u0275\u0275ProvidersFeature([EmployeeService, DecimalPipe]), \u0275\u0275StandaloneFeature], decls: 129, vars: 20, consts: [[3, "title", "title2", "class1", "path"], [1, "row"], [1, "col-xl-3", "col-lg-6", "col-md-6"], [1, "card", "custom-card"], [1, "card-body"], [1, "col-7"], [1, "mt-0", "text-start"], [1, "fw-medium"], [1, "mb-0", "mt-1", "text-success"], [1, "col-5"], [1, "icon1", "bg-success-transparent", "my-auto", "float-end"], [1, "las", "la-users"], [1, "mb-0", "mt-1", "text-primary"], [1, "icon1", "bg-primary-transparent", "my-auto", "float-end"], [1, "las", "la-male"], [1, "mb-0", "mt-1", "text-secondary"], [1, "icon1", "bg-secondary-transparent", "my-auto", "float-end"], [1, "las", "la-female"], [1, "mb-0", "mt-1", "text-danger"], [1, "icon1", "bg-danger-transparent", "my-auto", "float-end"], [1, "las", "la-user-friends"], [1, "col-md-12"], [1, "card-header"], [1, "card-title"], [1, "row", "mb-2", "gap-2", "gap-lg-0"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mb-0"], ["name", "quantity", "id", "select-countries17", "placeholder", "10", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], [1, "float-end"], ["type", "text", "placeholder", "Buscar", 1, "form-control"], [1, "table-responsive"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap", "table-bordered", "border"], [1, "border-bottom"], ["scope", "col"], [1, "mt-4"], [1, "pagination", "justify-content-end", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item", "active"], [1, "page-item"], ["scope", "row"], [1, "avatar", "me-2", "avatar-rounded"], ["alt", "img", 3, "src"], [1, "lh-1"], [1, "mb-1"], [1, "fs-12", "text-muted"], [1, "badge"], [1, "d-flex", "gap-2"], ["data-bs-toggle", "tooltip", "title", "Ver Empleado", 1, "btn", "btn-primary", "btn-icon", 3, "routerLink"], [1, "fe", "fe-eye"], ["data-bs-toggle", "tooltip", 1, "btn", "btn-icon", 3, "click", "title"]], template: function EmployeeListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 1)(6, "div", 5)(7, "div", 6)(8, "span", 7);
    \u0275\u0275text(9, "Total Empleados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 8);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 9)(14, "div", 10);
    \u0275\u0275element(15, "i", 11);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(16, "div", 2)(17, "div", 3)(18, "div", 4)(19, "div", 1)(20, "div", 5)(21, "div", 6)(22, "span", 7);
    \u0275\u0275text(23, "Total Hombres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "h3", 12);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 9)(28, "div", 13);
    \u0275\u0275element(29, "i", 14);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(30, "div", 2)(31, "div", 3)(32, "div", 4)(33, "div", 1)(34, "div", 5)(35, "div", 6)(36, "span", 7);
    \u0275\u0275text(37, "Total Mujeres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "h3", 15);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 9)(42, "div", 16);
    \u0275\u0275element(43, "i", 17);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(44, "div", 2)(45, "div", 3)(46, "div", 4)(47, "div", 1)(48, "div", 5)(49, "div", 6)(50, "span", 7);
    \u0275\u0275text(51, "Nuevos Empleados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "h3", 18);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 9)(56, "div", 19);
    \u0275\u0275element(57, "i", 20);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(58, "div", 1)(59, "div", 21)(60, "div", 3)(61, "div", 22)(62, "h3", 23);
    \u0275\u0275text(63, "Lista de empleados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 4)(65, "div", 24)(66, "div", 25)(67, "div", 26)(68, "span");
    \u0275\u0275text(69, "Mostrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 27)(71, "div", 28)(72, "ng-select", 29)(73, "ng-option", 30);
    \u0275\u0275text(74, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "ng-option", 31);
    \u0275\u0275text(76, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "ng-option", 32);
    \u0275\u0275text(78, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "ng-option", 33);
    \u0275\u0275text(80, "100");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(81, "span");
    \u0275\u0275text(82, "registros");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(83, "div", 25)(84, "div", 34);
    \u0275\u0275element(85, "input", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 36)(87, "table", 37)(88, "thead")(89, "tr", 38)(90, "th", 39);
    \u0275\u0275text(91, "No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "th", 39);
    \u0275\u0275text(93, "Nombre Empleado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "th", 39);
    \u0275\u0275text(95, "Departamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "th", 39);
    \u0275\u0275text(97, "Puesto de Trabajo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "th", 39);
    \u0275\u0275text(99, "N\xFAmero de tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "th", 39);
    \u0275\u0275text(101, "Fecha Inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "th", 39);
    \u0275\u0275text(103, "Tiempo en el puesto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "th", 39);
    \u0275\u0275text(105, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "th", 39);
    \u0275\u0275text(107, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(108, "tbody");
    \u0275\u0275repeaterCreate(109, EmployeeListComponent_For_110_Template, 34, 24, "tr", 38, _forTrack0);
    \u0275\u0275pipe(111, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(112, "nav", 40)(113, "ul", 41)(114, "li", 42)(115, "a", 43);
    \u0275\u0275text(116, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "li", 44)(118, "a", 43);
    \u0275\u0275text(119, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "li", 45)(121, "a", 43);
    \u0275\u0275text(122, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "li", 45)(124, "a", 43);
    \u0275\u0275text(125, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "li", 45)(127, "a", 43);
    \u0275\u0275text(128, "Next");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    \u0275\u0275classMap("btn btn-primary");
    \u0275\u0275property("title", "Empleados")("title2", "Agregar Nuevo Empleado")("class1", "")("path", "/dashboard/hrmdashboards/employees/add-empleado");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((tmp_5_0 = \u0275\u0275pipeBind1(12, 10, ctx.stats$)) == null ? null : tmp_5_0.data == null ? null : tmp_5_0.data.totalEmpleados);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate((tmp_6_0 = \u0275\u0275pipeBind1(26, 12, ctx.stats$)) == null ? null : tmp_6_0.data == null ? null : tmp_6_0.data.empleadosHombres);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(((tmp_7_0 = \u0275\u0275pipeBind1(40, 14, ctx.stats$)) == null ? null : tmp_7_0.data == null ? null : tmp_7_0.data.empleadasMujeres) || 0);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate((tmp_8_0 = \u0275\u0275pipeBind1(54, 16, ctx.stats$)) == null ? null : tmp_8_0.data == null ? null : tmp_8_0.data.empleadosNuevos);
    \u0275\u0275advance(56);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(111, 18, ctx.employeeList$));
  }
}, dependencies: [SharedModule, HrDashboardPageHeaderComponent, RouterModule, RouterLink, NgSelectModule, NgSelectComponent, NgOptionComponent, AsyncPipe, DatePipe] });
var EmployeeListComponent = _EmployeeListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeListComponent, { className: "EmployeeListComponent" });
})();
export {
  EmployeeListComponent
};
//# sourceMappingURL=employee-list.component-XJKOHT42.js.map
