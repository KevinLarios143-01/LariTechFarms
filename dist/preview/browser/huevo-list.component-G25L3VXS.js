import {
  HuevosService
} from "./chunk-C3QQGMXI.js";
import {
  LotesService
} from "./chunk-43K7FTAL.js";
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
  DatePipe,
  NgForOf,
  NgIf,
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/production-dashboard/huevos/huevo-list/huevo-list.component.ts
var _c0 = (a0) => ["../view", a0];
var _c1 = (a0) => ["../edit", a0];
function HuevoListComponent_ng_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lote_r1 = ctx.$implicit;
    \u0275\u0275property("value", lote_r1.id.toString());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lote_r1.galera);
  }
}
function HuevoListComponent_ng_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const calidad_r2 = ctx.$implicit;
    \u0275\u0275property("value", calidad_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(calidad_r2);
  }
}
function HuevoListComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "span", 37);
    \u0275\u0275text(3, "Cargando...");
    \u0275\u0275elementEnd()()();
  }
}
function HuevoListComponent_div_63_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42)(2, "div", 43);
    \u0275\u0275element(3, "i", 44);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No hay controles disponibles");
    \u0275\u0275elementEnd()()()();
  }
}
function HuevoListComponent_div_63_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "div", 25)(8, "span", 45);
    \u0275\u0275element(9, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "h6", 47);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 48);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "td", 49);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 50);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "div", 51)(24, "a", 52);
    \u0275\u0275element(25, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 54);
    \u0275\u0275element(27, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 56);
    \u0275\u0275listener("click", function HuevoListComponent_div_63_tr_20_Template_a_click_28_listener() {
      const control_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.deleteControl(control_r4.id));
    });
    \u0275\u0275element(29, "i", 57);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const control_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#CH-", control_r4.id.toString().padStart(3, "0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(5, 12, control_r4.fecha, "dd/MM/yyyy", "UTC"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(control_r4.lote == null ? null : control_r4.lote.galera);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(control_r4.lote == null ? null : control_r4.lote.tipo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(control_r4.cantidadHuevos);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("bg-" + ctx_r4.getCalidadBadgeColor(control_r4.calidad) + "-transparent");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", control_r4.calidad || "Sin especificar", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", control_r4.usuario == null ? null : control_r4.usuario.nombre, " ", control_r4.usuario == null ? null : control_r4.usuario.apellido, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, control_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c1, control_r4.id));
  }
}
function HuevoListComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "table", 39)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "#ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Lote/Galera");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Cantidad Huevos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Calidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, HuevoListComponent_div_63_tr_19_Template, 6, 0, "tr", 40)(20, HuevoListComponent_div_63_tr_20_Template, 30, 20, "tr", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275property("ngIf", ctx_r4.filteredControles.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.filteredControles)("ngForTrackBy", ctx_r4.trackByControlId);
  }
}
var _HuevoListComponent = class _HuevoListComponent {
  constructor(huevosService, lotesService, cdr, toastr) {
    this.huevosService = huevosService;
    this.lotesService = lotesService;
    this.cdr = cdr;
    this.toastr = toastr;
    this.controles = [];
    this.filteredControles = [];
    this.lotes = [];
    this.isLoading = false;
    this.searchTerm = "";
    this.selectedLote = "";
    this.selectedCalidad = "";
    this.selectedFecha = "";
    this.calidades = ["Excelente", "Buena", "Regular", "Mala"];
  }
  ngOnInit() {
    this.loadControles();
    this.loadLotes();
  }
  loadControles() {
    this.isLoading = true;
    this.huevosService.getControles().subscribe({
      next: (response) => {
        if (response?.data?.data && Array.isArray(response.data.data)) {
          this.controles = response.data.data;
        } else if (response?.data?.items && Array.isArray(response.data.items)) {
          this.controles = response.data.items;
        } else if (response?.data && Array.isArray(response.data)) {
          this.controles = response.data;
        } else if (Array.isArray(response)) {
          this.controles = response;
        } else {
          this.controles = [];
        }
        this.filteredControles = [...this.controles];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.controles = [];
        this.filteredControles = [];
        this.toastr.error("Error al cargar controles de huevos", "Error", {
          progressBar: true,
          closeButton: true
        });
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  loadLotes() {
    this.lotesService.getLotes().subscribe({
      next: (response) => {
        let allLotes = [];
        if (response?.data?.data && Array.isArray(response.data.data)) {
          allLotes = response.data.data;
        } else if (response?.data?.items && Array.isArray(response.data.items)) {
          allLotes = response.data.items;
        } else if (response?.data && Array.isArray(response.data)) {
          allLotes = response.data;
        } else if (Array.isArray(response)) {
          allLotes = response;
        }
        this.lotes = allLotes.filter((lote) => lote.tipo === "Ponedoras" && lote.estado === "Activo");
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.lotes = [];
        console.error("Error al cargar lotes:", error);
      }
    });
  }
  applyFilters() {
    this.filteredControles = this.controles.filter((control) => {
      const matchesSearch = !this.searchTerm || control.lote?.galera.toLowerCase().includes(this.searchTerm.toLowerCase()) || control.usuario?.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) || control.usuario?.apellido.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesLote = !this.selectedLote || control.idLote.toString() === this.selectedLote;
      const matchesCalidad = !this.selectedCalidad || control.calidad === this.selectedCalidad;
      const matchesFecha = !this.selectedFecha || new Date(control.fecha).toDateString() === new Date(this.selectedFecha).toDateString();
      return matchesSearch && matchesLote && matchesCalidad && matchesFecha;
    });
    this.cdr.detectChanges();
  }
  deleteControl(id) {
    if (confirm("\xBFEst\xE1 seguro de eliminar este control?")) {
      this.huevosService.deleteControl(id).subscribe({
        next: () => {
          this.toastr.success("Control eliminado exitosamente", "\xC9xito", {
            progressBar: true,
            closeButton: true
          });
          this.loadControles();
        },
        error: () => {
          this.toastr.error("Error al eliminar control", "Error", {
            progressBar: true,
            closeButton: true
          });
        }
      });
    }
  }
  formatDateForInput(dateString) {
    if (!dateString)
      return "";
    const date = /* @__PURE__ */ new Date(dateString + "T00:00:00.000Z");
    return date.toISOString().split("T")[0];
  }
  getCalidadClass(calidad) {
    switch (calidad) {
      case "Excelente":
        return "text-success";
      case "Buena":
        return "text-info";
      case "Regular":
        return "text-warning";
      case "Mala":
        return "text-danger";
      default:
        return "text-muted";
    }
  }
  getCalidadBadgeColor(calidad) {
    switch (calidad) {
      case "Excelente":
        return "success";
      case "Buena":
        return "info";
      case "Regular":
        return "warning";
      case "Mala":
        return "danger";
      default:
        return "secondary";
    }
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedLote = "";
    this.selectedCalidad = "";
    this.selectedFecha = "";
    this.filteredControles = [...this.controles];
    this.cdr.detectChanges();
  }
  trackByControlId(index, control) {
    return control.id;
  }
  trackByLoteId(index, lote) {
    return lote.id;
  }
};
_HuevoListComponent.\u0275fac = function HuevoListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HuevoListComponent)(\u0275\u0275directiveInject(HuevosService), \u0275\u0275directiveInject(LotesService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_HuevoListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HuevoListComponent, selectors: [["app-huevo-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 64, vars: 18, consts: [[3, "title", "title2", "class1", "path"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "d-flex", "justify-content-between", "border-bottom-0"], [1, "card-title"], [1, "float-end"], ["type", "text", "placeholder", "buscar", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "card-body"], [1, "col-md-12", "col-lg-7"], [1, "col-md-4"], [1, "form-group"], [1, "form-label"], ["placeholder", "Filtrar por lote", 1, "form-control", "p-0", 3, "ngModelChange", "change", "ngModel", "clearable"], [3, "value", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["placeholder", "Filtrar por calidad", 1, "form-control", "p-0", 3, "ngModelChange", "change", "ngModel", "clearable"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", "placeholder", "Filtrar por fecha", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], [1, "col-md-2"], [1, "form-group", "mt-2"], [1, "btn", "btn-primary", "d-grid", 3, "click"], [1, "col-md-3"], [1, "btn", "btn-outline-secondary", "d-grid", 3, "click"], [1, "card-body", "border-top"], [1, "col-sm-6", "mb-1"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], ["name", "quantity", "placeholder", "10", 1, "form-control", "wd-150", "p-0"], ["value", "10"], ["value", "25"], ["value", "50"], ["value", "100"], ["class", "text-center py-4", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [3, "value"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "table-responsive"], [1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom"], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["colspan", "7", 1, "text-center", "py-4"], [1, "text-muted"], [1, "fe", "fe-inbox", "fs-24", "mb-2"], [1, "avatar", "avatar-md", "me-2", "avatar-rounded", "bg-primary-transparent"], [1, "fe", "fe-layers"], [1, "mb-1", "fs-14"], [1, "fs-12", "text-muted"], [1, "fw-bold", "text-primary"], [1, "badge"], [1, "d-flex"], ["placement", "top", "ngbTooltip", "Ver Control", 1, "action-btns1", 3, "routerLink"], [1, "fe", "fe-eye", "text-primary"], ["placement", "top", "ngbTooltip", "Editar", 1, "action-btns1", 3, "routerLink"], [1, "fe", "fe-edit-2", "text-success"], ["placement", "top", "ngbTooltip", "Eliminar", 1, "action-btns1", 3, "click"], [1, "fe", "fe-trash", "text-danger"]], template: function HuevoListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
    \u0275\u0275text(6, "Resumen de Control de Huevos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function HuevoListComponent_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275listener("input", function HuevoListComponent_Template_input_input_8_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 1)(11, "div", 9)(12, "div", 1)(13, "div", 10)(14, "div", 11)(15, "label", 12);
    \u0275\u0275text(16, "Lote:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ng-select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function HuevoListComponent_Template_ng_select_ngModelChange_17_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedLote, $event) || (ctx.selectedLote = $event);
      return $event;
    });
    \u0275\u0275listener("change", function HuevoListComponent_Template_ng_select_change_17_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275template(18, HuevoListComponent_ng_option_18_Template, 2, 2, "ng-option", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 10)(20, "div", 11)(21, "label", 12);
    \u0275\u0275text(22, "Calidad:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ng-select", 15);
    \u0275\u0275twoWayListener("ngModelChange", function HuevoListComponent_Template_ng_select_ngModelChange_23_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedCalidad, $event) || (ctx.selectedCalidad = $event);
      return $event;
    });
    \u0275\u0275listener("change", function HuevoListComponent_Template_ng_select_change_23_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275template(24, HuevoListComponent_ng_option_24_Template, 2, 2, "ng-option", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 10)(26, "div", 11)(27, "label", 12);
    \u0275\u0275text(28, "Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function HuevoListComponent_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedFecha, $event) || (ctx.selectedFecha = $event);
      return $event;
    });
    \u0275\u0275listener("change", function HuevoListComponent_Template_input_change_29_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(30, "div", 18)(31, "div", 19);
    \u0275\u0275element(32, "label", 12);
    \u0275\u0275elementStart(33, "button", 20);
    \u0275\u0275listener("click", function HuevoListComponent_Template_button_click_33_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275text(34, "Buscar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 21)(36, "div", 19);
    \u0275\u0275element(37, "label", 12);
    \u0275\u0275elementStart(38, "button", 22);
    \u0275\u0275listener("click", function HuevoListComponent_Template_button_click_38_listener() {
      return ctx.clearFilters();
    });
    \u0275\u0275text(39, "Limpiar");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(40, "div", 23)(41, "div", 1)(42, "div", 24)(43, "div", 25)(44, "span");
    \u0275\u0275text(45, "Mostrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 26)(47, "div", 11)(48, "ng-select", 27)(49, "ng-option", 28);
    \u0275\u0275text(50, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ng-option", 29);
    \u0275\u0275text(52, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ng-option", 30);
    \u0275\u0275text(54, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ng-option", 31);
    \u0275\u0275text(56, "100");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58, "entradas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 24)(60, "div", 6)(61, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function HuevoListComponent_Template_input_ngModelChange_61_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275listener("input", function HuevoListComponent_Template_input_input_61_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(62, HuevoListComponent_div_62_Template, 4, 0, "div", 32)(63, HuevoListComponent_div_63_Template, 21, 3, "div", 33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275classMap("btn btn-primary");
    \u0275\u0275property("title", "Control de Huevos")("title2", "Nuevo Control")("class1", "")("path", "../new");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedLote);
    \u0275\u0275property("clearable", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.lotes)("ngForTrackBy", ctx.trackByLoteId);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedCalidad);
    \u0275\u0275property("clearable", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.calidades);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedFecha);
    \u0275\u0275advance(32);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
  }
}, dependencies: [SharedModule, HrDashboardPageHeaderComponent, CommonModule, NgForOf, NgIf, DatePipe, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgSelectModule, NgSelectComponent, NgOptionComponent] });
var HuevoListComponent = _HuevoListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HuevoListComponent, { className: "HuevoListComponent" });
})();
export {
  HuevoListComponent
};
//# sourceMappingURL=huevo-list.component-G25L3VXS.js.map
