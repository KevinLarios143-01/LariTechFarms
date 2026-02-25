import {
  HuevosService
} from "./chunk-C3QQGMXI.js";
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
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-47LBZ5ZO.js";
import {
  ChangeDetectorRef,
  CommonModule,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
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

// src/app/componets/dashbord/production-dashboard/huevos/estadisticas/estadisticas.component.ts
var _forTrack0 = ($index, $item) => $item.idLote;
var _forTrack1 = ($index, $item) => $item.calidad;
var _forTrack2 = ($index, $item) => $item.semana;
function EstadisticasComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 9)(2, "span", 10);
    \u0275\u0275text(3, "Cargando estad\xEDsticas...");
    \u0275\u0275elementEnd()()();
  }
}
function EstadisticasComponent_Conditional_17_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 29)(11, "div", 30);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const lote_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lote_r1.galera);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lote_r1.totalHuevos);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lote_r1.promedioHuevos.toFixed(1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lote_r1.registros);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", lote_r1.totalHuevos / ctx_r1.stats.totalHuevos * 100, "%");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (lote_r1.totalHuevos / ctx_r1.stats.totalHuevos * 100).toFixed(1), "% ");
  }
}
function EstadisticasComponent_Conditional_17_For_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 31)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 32);
    \u0275\u0275element(7, "div", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const calidad_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getCalidadBadgeClass(calidad_r3.calidad));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", calidad_r3.calidad, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", calidad_r3.totalHuevos, " (", ctx_r1.getCalidadPercentage(calidad_r3.totalHuevos).toFixed(1), "%)");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("bg-" + (calidad_r3.calidad === "Excelente" ? "success" : calidad_r3.calidad === "Buena" ? "info" : calidad_r3.calidad === "Regular" ? "warning" : "danger"));
    \u0275\u0275styleProp("width", ctx_r1.getCalidadPercentage(calidad_r3.totalHuevos), "%");
  }
}
function EstadisticasComponent_Conditional_17_Conditional_68_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 31)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "span", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 32);
    \u0275\u0275element(10, "div", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const semana_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(semana_r4.semana);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(semana_r4.totalHuevos);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getCalidadBadgeClass(semana_r4.promedioCalidad));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", semana_r4.promedioCalidad, " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", semana_r4.totalHuevos / ctx_r1.stats.totalHuevos * 100, "%");
  }
}
function EstadisticasComponent_Conditional_17_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EstadisticasComponent_Conditional_17_Conditional_68_For_1_Template, 11, 7, "div", 26, _forTrack2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.stats.tendenciaSemanal);
  }
}
function EstadisticasComponent_Conditional_17_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1, "No hay datos de tendencia semanal disponibles");
    \u0275\u0275elementEnd();
  }
}
function EstadisticasComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "h5", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 16);
    \u0275\u0275text(7, "Total Huevos");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "div", 12)(9, "div", 13)(10, "div", 14)(11, "h5", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 16);
    \u0275\u0275text(14, "Total Registros");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "h5", 18);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 16);
    \u0275\u0275text(21, "Promedio por D\xEDa");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 12)(23, "div", 13)(24, "div", 14)(25, "h5", 19);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 16);
    \u0275\u0275text(28, "Promedio por Registro");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(29, "div", 11)(30, "div", 20)(31, "div", 21)(32, "div", 22)(33, "h6", 23);
    \u0275\u0275text(34, "Producci\xF3n por Lote");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 14)(36, "div", 24)(37, "table", 25)(38, "thead")(39, "tr")(40, "th");
    \u0275\u0275text(41, "Galera");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43, "Total Huevos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th");
    \u0275\u0275text(45, "Promedio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th");
    \u0275\u0275text(47, "Registros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49, "Rendimiento");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "tbody");
    \u0275\u0275repeaterCreate(51, EstadisticasComponent_Conditional_17_For_52_Template, 13, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(53, "div", 11)(54, "div", 3)(55, "div", 21)(56, "div", 22)(57, "h6", 23);
    \u0275\u0275text(58, "Distribuci\xF3n por Calidad");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 14);
    \u0275\u0275repeaterCreate(60, EstadisticasComponent_Conditional_17_For_61_Template, 8, 9, "div", 26, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 3)(63, "div", 21)(64, "div", 22)(65, "h6", 23);
    \u0275\u0275text(66, "Tendencia Semanal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 14);
    \u0275\u0275template(68, EstadisticasComponent_Conditional_17_Conditional_68_Template, 2, 0)(69, EstadisticasComponent_Conditional_17_Conditional_69_Template, 2, 0, "p", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalHuevos);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalRegistros);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.stats.promedioHuevosPorDia.toFixed(1));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((ctx_r1.stats.totalHuevos / ctx_r1.stats.totalRegistros).toFixed(1));
    \u0275\u0275advance(25);
    \u0275\u0275repeater(ctx_r1.stats.produccionPorLote);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.stats.produccionPorCalidad);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.stats.tendenciaSemanal && ctx_r1.stats.tendenciaSemanal.length > 0 ? 68 : 69);
  }
}
function EstadisticasComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275text(2, " No hay datos disponibles para el per\xEDodo seleccionado. ");
    \u0275\u0275elementEnd();
  }
}
var _EstadisticasComponent = class _EstadisticasComponent {
  constructor(huevosService, cdr, toastr) {
    this.huevosService = huevosService;
    this.cdr = cdr;
    this.toastr = toastr;
    this.stats = null;
    this.isLoading = false;
    this.fechaInicio = "";
    this.fechaFin = "";
    const today = /* @__PURE__ */ new Date();
    const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1e3);
    this.fechaFin = today.toISOString().split("T")[0];
    this.fechaInicio = thirtyDaysAgo.toISOString().split("T")[0];
  }
  ngOnInit() {
    this.loadStats();
  }
  loadStats() {
    this.isLoading = true;
    const params = {
      fechaInicio: this.fechaInicio,
      fechaFin: this.fechaFin
    };
    this.huevosService.getStats(params).subscribe({
      next: (response) => {
        this.stats = response.data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error("Error al cargar estad\xEDsticas", "Error", {
          progressBar: true,
          closeButton: true
        });
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  onDateChange() {
    if (this.fechaInicio && this.fechaFin) {
      this.loadStats();
    }
  }
  getCalidadBadgeClass(calidad) {
    switch (calidad) {
      case "Excelente":
        return "badge bg-success";
      case "Buena":
        return "badge bg-info";
      case "Regular":
        return "badge bg-warning";
      case "Mala":
        return "badge bg-danger";
      default:
        return "badge bg-secondary";
    }
  }
  getCalidadPercentage(totalHuevos) {
    if (!this.stats || this.stats.totalHuevos === 0)
      return 0;
    return totalHuevos / this.stats.totalHuevos * 100;
  }
};
_EstadisticasComponent.\u0275fac = function EstadisticasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EstadisticasComponent)(\u0275\u0275directiveInject(HuevosService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_EstadisticasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EstadisticasComponent, selectors: [["app-estadisticas"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 9, consts: [[3, "title", "title2", "class1", "path"], [1, "container-fluid"], [1, "row", "mb-3"], [1, "col-md-6"], [1, "row"], [1, "form-label"], ["type", "date", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], [1, "text-center"], [1, "alert", "alert-info"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "row", "mb-4"], [1, "col-md-3"], [1, "card", "text-center"], [1, "card-body"], [1, "card-title", "text-primary"], [1, "card-text"], [1, "card-title", "text-info"], [1, "card-title", "text-success"], [1, "card-title", "text-warning"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "table-responsive"], [1, "table", "table-striped"], [1, "mb-3"], [1, "text-muted"], [1, "fw-bold"], [1, "progress", 2, "height", "20px"], [1, "progress-bar", "bg-success"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], [1, "progress"], [1, "progress-bar"], [1, "badge", "bg-primary", "me-2"], [1, "progress-bar", "bg-primary"], [1, "fas", "fa-info-circle"]], template: function EstadisticasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4");
    \u0275\u0275text(5, "Dashboard de Producci\xF3n de Huevos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "div", 3)(9, "label", 5);
    \u0275\u0275text(10, "Fecha Inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function EstadisticasComponent_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.fechaInicio, $event) || (ctx.fechaInicio = $event);
      return $event;
    });
    \u0275\u0275listener("change", function EstadisticasComponent_Template_input_change_11_listener() {
      return ctx.onDateChange();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 3)(13, "label", 5);
    \u0275\u0275text(14, "Fecha Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function EstadisticasComponent_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.fechaFin, $event) || (ctx.fechaFin = $event);
      return $event;
    });
    \u0275\u0275listener("change", function EstadisticasComponent_Template_input_change_15_listener() {
      return ctx.onDateChange();
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(16, EstadisticasComponent_Conditional_16_Template, 4, 0, "div", 7)(17, EstadisticasComponent_Conditional_17_Template, 70, 5)(18, EstadisticasComponent_Conditional_18_Template, 3, 0, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275classMap("btn btn-outline-primary");
    \u0275\u0275property("title", "Dashboard de Huevos")("title2", "Lista de Controles")("class1", "")("path", "../list");
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaInicio);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaFin);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 16 : ctx.stats ? 17 : 18);
  }
}, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, SharedModule, HrDashboardPageHeaderComponent] });
var EstadisticasComponent = _EstadisticasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EstadisticasComponent, { className: "EstadisticasComponent" });
})();
export {
  EstadisticasComponent
};
//# sourceMappingURL=estadisticas.component-XOBOAO5I.js.map
