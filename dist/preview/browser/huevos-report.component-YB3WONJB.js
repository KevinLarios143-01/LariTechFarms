import {
  E,
  autoTable,
  utils,
  writeFileSync
} from "./chunk-P6JRSYMS.js";
import {
  environment
} from "./chunk-7WSVHSJD.js";
import {
  SharedModule
} from "./chunk-UEAXMXBR.js";
import {
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import "./chunk-ZVXZDCDW.js";
import "./chunk-KTQLQ7YR.js";
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
  DatePipe,
  DecimalPipe,
  HttpClient,
  HttpParams,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/reports-dashboard/huevos-report/huevos-report.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.calidad;
var _forTrack2 = ($index, $item) => $item.idLote;
var _forTrack3 = ($index, $item) => $item.id;
function HuevosReportComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 15);
    \u0275\u0275text(2, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function HuevosReportComponent_Conditional_32_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.fechaSeleccionada, $event) || (ctx_r1.fechaSeleccionada = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fechaSeleccionada);
  }
}
function HuevosReportComponent_Conditional_33_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mes_r4 = ctx.$implicit;
    \u0275\u0275property("value", mes_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mes_r4.label);
  }
}
function HuevosReportComponent_Conditional_33_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const anio_r5 = ctx.$implicit;
    \u0275\u0275property("value", anio_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(anio_r5);
  }
}
function HuevosReportComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 15);
    \u0275\u0275text(2, "Mes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function HuevosReportComponent_Conditional_33_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mesSeleccionado, $event) || (ctx_r1.mesSeleccionado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(4, HuevosReportComponent_Conditional_33_For_5_Template, 2, 2, "option", 26, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14)(7, "label", 15);
    \u0275\u0275text(8, "A\xF1o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function HuevosReportComponent_Conditional_33_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.anioSeleccionado, $event) || (ctx_r1.anioSeleccionado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(10, HuevosReportComponent_Conditional_33_For_11_Template, 2, 2, "option", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.mesSeleccionado);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.meses);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.anioSeleccionado);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.anios);
  }
}
function HuevosReportComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 15);
    \u0275\u0275text(2, "Fecha Desde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function HuevosReportComponent_Conditional_34_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.fechaDesde, $event) || (ctx_r1.fechaDesde = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 14)(5, "label", 15);
    \u0275\u0275text(6, "Fecha Hasta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function HuevosReportComponent_Conditional_34_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.fechaHasta, $event) || (ctx_r1.fechaHasta = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fechaDesde);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fechaHasta);
  }
}
function HuevosReportComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 22);
  }
}
function HuevosReportComponent_Conditional_40_Conditional_51_For_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const calidad_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(calidad_r7.calidad);
  }
}
function HuevosReportComponent_Conditional_40_Conditional_51_For_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "Sin especificar");
    \u0275\u0275elementEnd();
  }
}
function HuevosReportComponent_Conditional_40_Conditional_51_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275template(2, HuevosReportComponent_Conditional_40_Conditional_51_For_19_Conditional_2_Template, 2, 1, "span", 44)(3, HuevosReportComponent_Conditional_40_Conditional_51_For_19_Conditional_3_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 46);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 47);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const calidad_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(calidad_r7.calidad ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, calidad_r7._sum.cantidadHuevos));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 5, calidad_r7._sum.cantidadHuevos / ctx_r1.estadisticas.totalHuevos * 100, "1.1-1"), "% ");
  }
}
function HuevosReportComponent_Conditional_40_Conditional_51_Conditional_20_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 46);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lote_r8 = ctx.$implicit;
    const \u0275$index_296_r9 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_296_r9 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Lote #", lote_r8.idLote, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, lote_r8._sum.cantidadHuevos));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 6, lote_r8._avg.cantidadHuevos, "1.2-2"));
  }
}
function HuevosReportComponent_Conditional_40_Conditional_51_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 3)(2, "div", 11)(3, "div", 5);
    \u0275\u0275text(4, "Top Lotes Productores");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 12)(6, "div", 42)(7, "table", 43)(8, "thead")(9, "tr")(10, "th");
    \u0275\u0275text(11, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Lote ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Total Huevos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Promedio");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, HuevosReportComponent_Conditional_40_Conditional_51_Conditional_20_For_20_Template, 12, 9, "tr", null, _forTrack2);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.estadisticas.huevosPorLote.slice(0, 10));
  }
}
function HuevosReportComponent_Conditional_40_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 41)(2, "div", 3)(3, "div", 11)(4, "div", 5);
    \u0275\u0275text(5, "Producci\xF3n por Calidad");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12)(7, "div", 42)(8, "table", 43)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "Calidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Porcentaje");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, HuevosReportComponent_Conditional_40_Conditional_51_For_19_Template, 11, 8, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(20, HuevosReportComponent_Conditional_40_Conditional_51_Conditional_20_Template, 21, 0, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.estadisticas.huevosPorCalidad);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.estadisticas.huevosPorLote && ctx_r1.estadisticas.huevosPorLote.length > 0 ? 20 : -1);
  }
}
function HuevosReportComponent_Conditional_40_Conditional_52_For_27_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const registro_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(registro_r10.lote.galera);
  }
}
function HuevosReportComponent_Conditional_40_Conditional_52_For_27_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function HuevosReportComponent_Conditional_40_Conditional_52_For_27_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const registro_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(registro_r10.calidad);
  }
}
function HuevosReportComponent_Conditional_40_Conditional_52_For_27_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function HuevosReportComponent_Conditional_40_Conditional_52_For_27_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const registro_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", registro_r10.usuario.nombre, " ", registro_r10.usuario.apellido || "", " ");
  }
}
function HuevosReportComponent_Conditional_40_Conditional_52_For_27_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function HuevosReportComponent_Conditional_40_Conditional_52_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275template(7, HuevosReportComponent_Conditional_40_Conditional_52_For_27_Conditional_7_Template, 2, 1, "span", 48)(8, HuevosReportComponent_Conditional_40_Conditional_52_For_27_Conditional_8_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 44);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, HuevosReportComponent_Conditional_40_Conditional_52_For_27_Conditional_15_Template, 2, 1, "span", 47)(16, HuevosReportComponent_Conditional_40_Conditional_52_For_27_Conditional_16_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275template(18, HuevosReportComponent_Conditional_40_Conditional_52_For_27_Conditional_18_Template, 1, 2)(19, HuevosReportComponent_Conditional_40_Conditional_52_For_27_Conditional_19_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const registro_r10 = ctx.$implicit;
    const \u0275$index_360_r11 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_360_r11 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 7, registro_r10.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((registro_r10.lote == null ? null : registro_r10.lote.galera) ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((registro_r10.lote == null ? null : registro_r10.lote.tipo) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(registro_r10.cantidadHuevos);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(registro_r10.calidad ? 15 : 16);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(registro_r10.usuario ? 18 : 19);
  }
}
function HuevosReportComponent_Conditional_40_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 11)(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12)(7, "div", 42)(8, "table", 43)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Galera");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Tipo Lote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Calidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Registrado Por");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, HuevosReportComponent_Conditional_40_Conditional_52_For_27_Template, 20, 10, "tr", null, _forTrack3);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Registros Detallados (", ctx_r1.registros.length, " registros)");
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r1.registros);
  }
}
function HuevosReportComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 27)(2, "div", 3)(3, "div", 12)(4, "div", 28)(5, "div", 29)(6, "span", 30);
    \u0275\u0275element(7, "i", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 32)(9, "h5", 33);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 34);
    \u0275\u0275text(13, "Total Huevos Producidos");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(14, "div", 27)(15, "div", 3)(16, "div", 12)(17, "div", 28)(18, "div", 29)(19, "span", 35);
    \u0275\u0275element(20, "i", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 32)(22, "h5", 33);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 34);
    \u0275\u0275text(25, "Total Registros");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(26, "div", 27)(27, "div", 3)(28, "div", 12)(29, "div", 28)(30, "div", 29)(31, "span", 37);
    \u0275\u0275element(32, "i", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 32)(34, "h5", 33);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p", 34);
    \u0275\u0275text(38, "Promedio Diario");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(39, "div", 27)(40, "div", 3)(41, "div", 12)(42, "div", 28)(43, "div", 29)(44, "span", 39);
    \u0275\u0275element(45, "i", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 32)(47, "h5", 33);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p", 34);
    \u0275\u0275text(50, "Lotes Activos");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(51, HuevosReportComponent_Conditional_40_Conditional_51_Template, 21, 1, "div", 1)(52, HuevosReportComponent_Conditional_40_Conditional_52_Template, 28, 1, "div", 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 6, ctx_r1.estadisticas.totalHuevos));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.estadisticas.totalRegistros);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 8, ctx_r1.estadisticas.promedioHuevos, "1.2-2"));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate((ctx_r1.estadisticas.huevosPorLote == null ? null : ctx_r1.estadisticas.huevosPorLote.length) || 0);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.estadisticas.huevosPorCalidad && ctx_r1.estadisticas.huevosPorCalidad.length > 0 ? 51 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.registros && ctx_r1.registros.length > 0 ? 52 : -1);
  }
}
function HuevosReportComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 49)(4, "div", 50)(5, "span", 51);
    \u0275\u0275text(6, "Cargando...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 52);
    \u0275\u0275text(8, "Generando reporte...");
    \u0275\u0275elementEnd()()()()();
  }
}
var _HuevosReportComponent = class _HuevosReportComponent {
  constructor(http, cdr) {
    this.http = http;
    this.cdr = cdr;
    this.isLoading = false;
    this.tipoFiltro = "mes";
    this.fechaSeleccionada = "";
    this.mesSeleccionado = "";
    this.anioSeleccionado = "";
    this.fechaDesde = "";
    this.fechaHasta = "";
    this.estadisticas = null;
    this.registros = [];
    this.meses = [
      { value: "01", label: "Enero" },
      { value: "02", label: "Febrero" },
      { value: "03", label: "Marzo" },
      { value: "04", label: "Abril" },
      { value: "05", label: "Mayo" },
      { value: "06", label: "Junio" },
      { value: "07", label: "Julio" },
      { value: "08", label: "Agosto" },
      { value: "09", label: "Septiembre" },
      { value: "10", label: "Octubre" },
      { value: "11", label: "Noviembre" },
      { value: "12", label: "Diciembre" }
    ];
    this.anios = [];
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    for (let i = 0; i < 5; i++) {
      this.anios.push(currentYear - i);
    }
  }
  ngOnInit() {
    const today = /* @__PURE__ */ new Date();
    this.mesSeleccionado = String(today.getMonth() + 1).padStart(2, "0");
    this.anioSeleccionado = String(today.getFullYear());
    this.loadReport();
  }
  onTipoFiltroChange() {
    this.fechaSeleccionada = "";
    this.mesSeleccionado = "";
    this.anioSeleccionado = "";
    this.fechaDesde = "";
    this.fechaHasta = "";
  }
  loadReport() {
    this.isLoading = true;
    let params = {};
    if (this.tipoFiltro === "dia" && this.fechaSeleccionada) {
      params.fechaInicio = this.fechaSeleccionada;
      params.fechaFin = this.fechaSeleccionada;
    } else if (this.tipoFiltro === "mes" && this.mesSeleccionado && this.anioSeleccionado) {
      const primerDia = `${this.anioSeleccionado}-${this.mesSeleccionado}-01`;
      const ultimoDia = new Date(parseInt(this.anioSeleccionado), parseInt(this.mesSeleccionado), 0).getDate();
      params.fechaInicio = primerDia;
      params.fechaFin = `${this.anioSeleccionado}-${this.mesSeleccionado}-${ultimoDia}`;
    } else if (this.tipoFiltro === "rango" && this.fechaDesde && this.fechaHasta) {
      params.fechaInicio = this.fechaDesde;
      params.fechaFin = this.fechaHasta;
    }
    Promise.all([
      this.getEstadisticas(params),
      this.getRegistros(params)
    ]).then(([statsResponse, registrosResponse]) => {
      console.log("Estad\xEDsticas huevos:", statsResponse);
      console.log("Registros huevos:", registrosResponse);
      this.estadisticas = statsResponse?.data;
      this.registros = registrosResponse?.data?.data || [];
      this.isLoading = false;
      this.cdr.detectChanges();
    }).catch((error) => {
      console.error("Error al cargar reporte:", error);
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }
  getEstadisticas(params) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      if (params[key]) {
        httpParams = httpParams.set(key, params[key]);
      }
    });
    return this.http.get(`${environment.apiUrl}/v1/control-huevos/estadisticas`, { params: httpParams }).toPromise();
  }
  getRegistros(params) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      if (params[key]) {
        httpParams = httpParams.set(key, params[key]);
      }
    });
    httpParams = httpParams.set("limit", "1000");
    return this.http.get(`${environment.apiUrl}/v1/control-huevos`, { params: httpParams }).toPromise();
  }
  exportarPDF() {
    const doc = new E();
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.setFontSize(18);
    doc.text("Reporte de Producci\xF3n de Huevos", pageWidth / 2, 15, { align: "center" });
    doc.setFontSize(10);
    let filtroTexto = "";
    if (this.tipoFiltro === "dia" && this.fechaSeleccionada) {
      filtroTexto = `Fecha: ${this.fechaSeleccionada}`;
    } else if (this.tipoFiltro === "mes" && this.mesSeleccionado && this.anioSeleccionado) {
      const mes = this.meses.find((m) => m.value === this.mesSeleccionado);
      filtroTexto = `Per\xEDodo: ${mes?.label} ${this.anioSeleccionado}`;
    } else if (this.tipoFiltro === "rango" && this.fechaDesde && this.fechaHasta) {
      filtroTexto = `Rango: ${this.fechaDesde} a ${this.fechaHasta}`;
    }
    doc.text(filtroTexto, pageWidth / 2, 22, { align: "center" });
    let yPos = 30;
    if (this.estadisticas) {
      doc.setFontSize(12);
      doc.text("Resumen General", 14, yPos);
      yPos += 7;
      const statsData = [
        ["Total Huevos Producidos", this.estadisticas.totalHuevos || 0],
        ["Total Registros", this.estadisticas.totalRegistros || 0],
        ["Promedio Diario", Number(this.estadisticas.promedioHuevos || 0).toFixed(2)]
      ];
      autoTable(doc, {
        startY: yPos,
        head: [["M\xE9trica", "Valor"]],
        body: statsData,
        theme: "grid",
        headStyles: { fillColor: [79, 70, 229] },
        margin: { left: 14, right: 14 }
      });
      yPos = doc.lastAutoTable.finalY + 10;
    }
    if (this.estadisticas?.huevosPorCalidad && this.estadisticas.huevosPorCalidad.length > 0) {
      doc.setFontSize(12);
      doc.text("Producci\xF3n por Calidad", 14, yPos);
      yPos += 7;
      const calidadData = this.estadisticas.huevosPorCalidad.map((c) => [
        c.calidad || "Sin especificar",
        c._sum.cantidadHuevos
      ]);
      autoTable(doc, {
        startY: yPos,
        head: [["Calidad", "Cantidad"]],
        body: calidadData,
        theme: "striped",
        headStyles: { fillColor: [34, 197, 94] },
        margin: { left: 14, right: 14 }
      });
      yPos = doc.lastAutoTable.finalY + 10;
    }
    if (this.registros.length > 0) {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFontSize(12);
      doc.text("Registros Detallados", 14, yPos);
      yPos += 7;
      const registrosData = this.registros.map((r) => [
        new Date(r.fecha).toLocaleDateString(),
        r.lote?.galera || "-",
        r.cantidadHuevos,
        r.calidad || "-"
      ]);
      autoTable(doc, {
        startY: yPos,
        head: [["Fecha", "Galera", "Cantidad", "Calidad"]],
        body: registrosData,
        theme: "striped",
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 8 },
        margin: { left: 14, right: 14 }
      });
    }
    const fileName = `reporte-huevos-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.pdf`;
    doc.save(fileName);
  }
  exportarExcel() {
    const workbook = utils.book_new();
    if (this.estadisticas) {
      const statsData = [
        ["M\xE9trica", "Valor"],
        ["Total Huevos Producidos", this.estadisticas.totalHuevos || 0],
        ["Total Registros", this.estadisticas.totalRegistros || 0],
        ["Promedio Diario", Number(this.estadisticas.promedioHuevos || 0).toFixed(2)]
      ];
      const wsStats = utils.aoa_to_sheet(statsData);
      wsStats["!cols"] = [{ wch: 30 }, { wch: 15 }];
      utils.book_append_sheet(workbook, wsStats, "Resumen");
    }
    if (this.estadisticas?.huevosPorCalidad && this.estadisticas.huevosPorCalidad.length > 0) {
      const calidadData = [
        ["Calidad", "Cantidad"],
        ...this.estadisticas.huevosPorCalidad.map((c) => [
          c.calidad || "Sin especificar",
          c._sum.cantidadHuevos
        ])
      ];
      const wsCalidad = utils.aoa_to_sheet(calidadData);
      wsCalidad["!cols"] = [{ wch: 20 }, { wch: 15 }];
      utils.book_append_sheet(workbook, wsCalidad, "Por Calidad");
    }
    if (this.registros.length > 0) {
      const registrosData = [
        ["Fecha", "Galera", "Tipo Lote", "Cantidad", "Calidad", "Registrado Por"],
        ...this.registros.map((r) => [
          new Date(r.fecha).toLocaleDateString(),
          r.lote?.galera || "-",
          r.lote?.tipo || "-",
          r.cantidadHuevos,
          r.calidad || "-",
          r.usuario ? `${r.usuario.nombre} ${r.usuario.apellido || ""}` : "-"
        ])
      ];
      const wsRegistros = utils.aoa_to_sheet(registrosData);
      wsRegistros["!cols"] = [
        { wch: 12 },
        { wch: 15 },
        { wch: 15 },
        { wch: 10 },
        { wch: 15 },
        { wch: 25 }
      ];
      utils.book_append_sheet(workbook, wsRegistros, "Registros");
    }
    const fileName = `reporte-huevos-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.xlsx`;
    writeFileSync(workbook, fileName);
  }
};
_HuevosReportComponent.\u0275fac = function HuevosReportComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HuevosReportComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_HuevosReportComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HuevosReportComponent, selectors: [["app-huevos-report"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 8, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "d-flex", "gap-2"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "ri-file-pdf-line"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "ri-file-excel-line"], [1, "card-header"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-3"], [1, "form-label"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "dia"], ["value", "mes"], ["value", "rango"], [1, "col-md-3", "d-flex", "align-items-end"], [1, "btn", "btn-primary", "w-100", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "ri-search-line"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "col-xl-3", "col-lg-6"], [1, "d-flex", "align-items-top"], [1, "me-3"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-primary-transparent"], [1, "ri-egg-line", "fs-18"], [1, "flex-fill"], [1, "fw-semibold", "mb-0"], [1, "mb-0", "fs-12", "text-muted"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-success-transparent"], [1, "ri-calendar-check-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-info-transparent"], [1, "ri-line-chart-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-warning-transparent"], [1, "ri-database-2-line", "fs-18"], [1, "col-xl-6"], [1, "table-responsive"], [1, "table", "text-nowrap", "table-hover"], [1, "badge", "bg-primary"], [1, "text-muted"], [1, "fw-semibold"], [1, "badge", "bg-success"], [1, "badge", "bg-light", "text-dark"], [1, "card-body", "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3"]], template: function HuevosReportComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Reporte de Producci\xF3n de Huevos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
    \u0275\u0275listener("click", function HuevosReportComponent_Template_button_click_8_listener() {
      return ctx.exportarPDF();
    });
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, " Exportar PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 9);
    \u0275\u0275listener("click", function HuevosReportComponent_Template_button_click_11_listener() {
      return ctx.exportarExcel();
    });
    \u0275\u0275element(12, "i", 10);
    \u0275\u0275text(13, " Exportar Excel ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(14, "div", 1)(15, "div", 2)(16, "div", 3)(17, "div", 11)(18, "div", 5);
    \u0275\u0275text(19, "Filtros");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "label", 15);
    \u0275\u0275text(24, "Tipo de Filtro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 16);
    \u0275\u0275twoWayListener("ngModelChange", function HuevosReportComponent_Template_select_ngModelChange_25_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.tipoFiltro, $event) || (ctx.tipoFiltro = $event);
      return $event;
    });
    \u0275\u0275listener("change", function HuevosReportComponent_Template_select_change_25_listener() {
      return ctx.onTipoFiltroChange();
    });
    \u0275\u0275elementStart(26, "option", 17);
    \u0275\u0275text(27, "Por D\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 18);
    \u0275\u0275text(29, "Por Mes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 19);
    \u0275\u0275text(31, "Rango de Fechas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(32, HuevosReportComponent_Conditional_32_Template, 4, 1, "div", 14)(33, HuevosReportComponent_Conditional_33_Template, 12, 2)(34, HuevosReportComponent_Conditional_34_Template, 8, 2);
    \u0275\u0275elementStart(35, "div", 20)(36, "button", 21);
    \u0275\u0275listener("click", function HuevosReportComponent_Template_button_click_36_listener() {
      return ctx.loadReport();
    });
    \u0275\u0275template(37, HuevosReportComponent_Conditional_37_Template, 1, 0, "span", 22);
    \u0275\u0275element(38, "i", 23);
    \u0275\u0275text(39, " Generar Reporte ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(40, HuevosReportComponent_Conditional_40_Template, 53, 11)(41, HuevosReportComponent_Conditional_41_Template, 9, 0, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(25);
    \u0275\u0275twoWayProperty("ngModel", ctx.tipoFiltro);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx.tipoFiltro === "dia" ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tipoFiltro === "mes" ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tipoFiltro === "rango" ? 34 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 37 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.estadisticas && !ctx.isLoading ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 41 : -1);
  }
}, dependencies: [CommonModule, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, NgSelectModule, SharedModule], styles: ["\n\n/*# sourceMappingURL=huevos-report.component.css.map */"] });
var HuevosReportComponent = _HuevosReportComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HuevosReportComponent, { className: "HuevosReportComponent" });
})();
export {
  HuevosReportComponent
};
//# sourceMappingURL=huevos-report.component-YB3WONJB.js.map
