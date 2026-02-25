import {
  E,
  autoTable,
  utils,
  writeFileSync
} from "./chunk-P6JRSYMS.js";
import {
  VentaService
} from "./chunk-EAZAKIYV.js";
import "./chunk-7WSVHSJD.js";
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
  ɵɵpipe,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/reports-dashboard/ventas-report/ventas-report.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.idCliente;
var _forTrack2 = ($index, $item) => $item.idProducto;
var _forTrack3 = ($index, $item) => $item.id;
function VentasReportComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 15);
    \u0275\u0275text(2, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function VentasReportComponent_Conditional_32_Template_input_ngModelChange_3_listener($event) {
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
function VentasReportComponent_Conditional_33_For_5_Template(rf, ctx) {
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
function VentasReportComponent_Conditional_33_For_11_Template(rf, ctx) {
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
function VentasReportComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 15);
    \u0275\u0275text(2, "Mes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function VentasReportComponent_Conditional_33_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mesSeleccionado, $event) || (ctx_r1.mesSeleccionado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(4, VentasReportComponent_Conditional_33_For_5_Template, 2, 2, "option", 26, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14)(7, "label", 15);
    \u0275\u0275text(8, "A\xF1o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function VentasReportComponent_Conditional_33_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.anioSeleccionado, $event) || (ctx_r1.anioSeleccionado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(10, VentasReportComponent_Conditional_33_For_11_Template, 2, 2, "option", 26, \u0275\u0275repeaterTrackByIdentity);
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
function VentasReportComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 15);
    \u0275\u0275text(2, "Fecha Desde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function VentasReportComponent_Conditional_34_Template_input_ngModelChange_3_listener($event) {
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
    \u0275\u0275twoWayListener("ngModelChange", function VentasReportComponent_Conditional_34_Template_input_ngModelChange_7_listener($event) {
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
function VentasReportComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 22);
  }
}
function VentasReportComponent_Conditional_40_Conditional_76_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 47);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cliente_r7 = ctx.$implicit;
    const \u0275$index_288_r8 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_288_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cliente_r7.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cliente_r7.totalVentas);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(9, 4, cliente_r7.montoTotal, "1.2-2"), "");
  }
}
function VentasReportComponent_Conditional_40_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 11)(4, "div", 5);
    \u0275\u0275text(5, "Top 10 Clientes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12)(7, "div", 45)(8, "table", 46)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Ventas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, VentasReportComponent_Conditional_40_Conditional_76_For_21_Template, 10, 7, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r1.estadisticas.topClientes);
  }
}
function VentasReportComponent_Conditional_40_Conditional_77_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 47);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const producto_r9 = ctx.$implicit;
    const \u0275$index_340_r10 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_340_r10 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(producto_r9.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(producto_r9.cantidadVendida);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(9, 4, producto_r9.montoTotal, "1.2-2"), "");
  }
}
function VentasReportComponent_Conditional_40_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 11)(4, "div", 5);
    \u0275\u0275text(5, "Top 10 Productos M\xE1s Vendidos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12)(7, "div", 45)(8, "table", 46)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Total Vendido");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, VentasReportComponent_Conditional_40_Conditional_77_For_21_Template, 10, 7, "tr", null, _forTrack2);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r1.estadisticas.topProductos);
  }
}
function VentasReportComponent_Conditional_40_Conditional_78_For_27_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 53);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const venta_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, venta_r11.createdAt, "HH:mm:ss"));
  }
}
function VentasReportComponent_Conditional_40_Conditional_78_For_27_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const venta_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(venta_r11.cliente.telefono);
  }
}
function VentasReportComponent_Conditional_40_Conditional_78_For_27_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, VentasReportComponent_Conditional_40_Conditional_78_For_27_Conditional_9_Conditional_2_Template, 2, 1, "small", 53);
  }
  if (rf & 2) {
    const venta_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(venta_r11.cliente.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(venta_r11.cliente.telefono ? 2 : -1);
  }
}
function VentasReportComponent_Conditional_40_Conditional_78_For_27_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "Cliente general");
    \u0275\u0275elementEnd();
  }
}
function VentasReportComponent_Conditional_40_Conditional_78_For_27_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const detalle_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (detalle_r12.producto == null ? null : detalle_r12.producto.nombre) || "Producto", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("x", detalle_r12.cantidad, "");
  }
}
function VentasReportComponent_Conditional_40_Conditional_78_For_27_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275repeaterCreate(1, VentasReportComponent_Conditional_40_Conditional_78_For_27_Conditional_12_For_2_Template, 4, 2, "small", null, _forTrack3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const venta_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(venta_r11.detalleVentas);
  }
}
function VentasReportComponent_Conditional_40_Conditional_78_For_27_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function VentasReportComponent_Conditional_40_Conditional_78_For_27_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const venta_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(venta_r11.metodoPago);
  }
}
function VentasReportComponent_Conditional_40_Conditional_78_For_27_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function VentasReportComponent_Conditional_40_Conditional_78_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 52);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, VentasReportComponent_Conditional_40_Conditional_78_For_27_Conditional_7_Template, 3, 4, "small", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275template(9, VentasReportComponent_Conditional_40_Conditional_78_For_27_Conditional_9_Template, 3, 2)(10, VentasReportComponent_Conditional_40_Conditional_78_For_27_Conditional_10_Template, 2, 0, "span", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275template(12, VentasReportComponent_Conditional_40_Conditional_78_For_27_Conditional_12_Template, 3, 0, "div", 54)(13, VentasReportComponent_Conditional_40_Conditional_78_For_27_Conditional_13_Template, 2, 0, "span", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, VentasReportComponent_Conditional_40_Conditional_78_For_27_Conditional_15_Template, 2, 1, "span", 55)(16, VentasReportComponent_Conditional_40_Conditional_78_For_27_Conditional_16_Template, 2, 0, "span", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 47);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const venta_r11 = ctx.$implicit;
    const \u0275$index_401_r13 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_401_r13 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 10, venta_r11.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(venta_r11.createdAt ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(venta_r11.cliente ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(venta_r11.detalleVentas && venta_r11.detalleVentas.length > 0 ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(venta_r11.metodoPago ? 15 : 16);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("badge " + ctx_r1.getEstadoBadge(venta_r11.estado));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", venta_r11.estado, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(22, 13, venta_r11.total, "1.2-2"), "");
  }
}
function VentasReportComponent_Conditional_40_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 11)(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12)(7, "div", 45)(8, "table", 48)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Fecha y Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "M\xE9todo Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, VentasReportComponent_Conditional_40_Conditional_78_For_27_Template, 23, 16, "tr", null, _forTrack3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "tfoot")(29, "tr", 49)(30, "td", 50);
    \u0275\u0275text(31, "TOTAL:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 51);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "number");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Detalle de Ventas V\xE1lidas (", ctx_r1.ventasDetalladas.length, " ventas)");
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r1.ventasDetalladas);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" Q", \u0275\u0275pipeBind2(34, 2, ctx_r1.getTotalVentasValidas(), "1.2-2"), " ");
  }
}
function VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 53);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const venta_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, venta_r14.createdAt, "HH:mm:ss"));
  }
}
function VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const venta_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(venta_r14.cliente.telefono);
  }
}
function VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_9_Conditional_2_Template, 2, 1, "small", 53);
  }
  if (rf & 2) {
    const venta_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(venta_r14.cliente.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(venta_r14.cliente.telefono ? 2 : -1);
  }
}
function VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "Cliente general");
    \u0275\u0275elementEnd();
  }
}
function VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const detalle_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (detalle_r15.producto == null ? null : detalle_r15.producto.nombre) || "Producto", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("x", detalle_r15.cantidad, "");
  }
}
function VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275repeaterCreate(1, VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_12_For_2_Template, 4, 2, "small", null, _forTrack3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const venta_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(venta_r14.detalleVentas);
  }
}
function VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const venta_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(venta_r14.metodoPago);
  }
}
function VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const venta_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", venta_r14.motivoAnulacion, " ");
  }
}
function VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "Sin motivo registrado");
    \u0275\u0275elementEnd();
  }
}
function VentasReportComponent_Conditional_40_Conditional_79_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 52);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_7_Template, 3, 4, "small", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275template(9, VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_9_Template, 3, 2)(10, VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_10_Template, 2, 0, "span", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275template(12, VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_12_Template, 3, 0, "div", 54)(13, VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_13_Template, 2, 0, "span", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_15_Template, 2, 1, "span", 55)(16, VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_16_Template, 2, 0, "span", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 62);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275template(21, VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_21_Template, 3, 1, "div", 63)(22, VentasReportComponent_Conditional_40_Conditional_79_For_28_Conditional_22_Template, 2, 0, "span", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const venta_r14 = ctx.$implicit;
    const \u0275$index_525_r16 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_525_r16 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 8, venta_r14.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(venta_r14.createdAt ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(venta_r14.cliente ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(venta_r14.detalleVentas && venta_r14.detalleVentas.length > 0 ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(venta_r14.metodoPago ? 15 : 16);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(19, 11, venta_r14.total, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(venta_r14.motivoAnulacion ? 21 : 22);
  }
}
function VentasReportComponent_Conditional_40_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 41)(3, "div", 56)(4, "div", 57);
    \u0275\u0275element(5, "i", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 45)(9, "table", 48)(10, "thead")(11, "tr")(12, "th");
    \u0275\u0275text(13, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Fecha y Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "M\xE9todo Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Motivo de Anulaci\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "tbody");
    \u0275\u0275repeaterCreate(27, VentasReportComponent_Conditional_40_Conditional_79_For_28_Template, 23, 14, "tr", null, _forTrack3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "tfoot")(30, "tr", 59)(31, "td", 60);
    \u0275\u0275text(32, "TOTAL CANCELADO:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td", 61);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "number");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Ventas Anuladas (", ctx_r1.ventasAnuladas.length, " ventas) ");
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r1.ventasAnuladas);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" Q", \u0275\u0275pipeBind2(35, 2, ctx_r1.getTotalVentasAnuladas(), "1.2-2"), " ");
  }
}
function VentasReportComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 27)(2, "div", 3)(3, "div", 12)(4, "div", 28)(5, "div", 29)(6, "span", 30);
    \u0275\u0275element(7, "i", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 32)(9, "h5", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 34);
    \u0275\u0275text(12, "Total Ventas V\xE1lidas");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(13, "div", 27)(14, "div", 3)(15, "div", 12)(16, "div", 28)(17, "div", 29)(18, "span", 35);
    \u0275\u0275element(19, "i", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 32)(21, "h5", 33);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 34);
    \u0275\u0275text(24, "Completadas");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(25, "div", 27)(26, "div", 3)(27, "div", 12)(28, "div", 28)(29, "div", 29)(30, "span", 37);
    \u0275\u0275element(31, "i", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 32)(33, "h5", 33);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 34);
    \u0275\u0275text(36, "Pendientes");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(37, "div", 27)(38, "div", 3)(39, "div", 12)(40, "div", 28)(41, "div", 29)(42, "span", 39);
    \u0275\u0275element(43, "i", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 32)(45, "h5", 33);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 34);
    \u0275\u0275text(49, "Monto Total V\xE1lido");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(50, "div", 1)(51, "div", 27)(52, "div", 41)(53, "div", 12)(54, "div", 28)(55, "div", 29)(56, "span", 42);
    \u0275\u0275element(57, "i", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 32)(59, "h5", 33);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p", 34);
    \u0275\u0275text(62, "Ventas Anuladas");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(63, "div", 27)(64, "div", 41)(65, "div", 12)(66, "div", 28)(67, "div", 29)(68, "span", 42);
    \u0275\u0275element(69, "i", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 32)(71, "h5", 44);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "p", 34);
    \u0275\u0275text(75, "Monto Cancelado");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(76, VentasReportComponent_Conditional_40_Conditional_76_Template, 22, 0, "div", 1)(77, VentasReportComponent_Conditional_40_Conditional_77_Template, 22, 0, "div", 1)(78, VentasReportComponent_Conditional_40_Conditional_78_Template, 35, 5, "div", 1)(79, VentasReportComponent_Conditional_40_Conditional_79_Template, 36, 5, "div", 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.estadisticas.totalVentas || 0);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.estadisticas.ventasCompletadas || 0);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.estadisticas.ventasPendientes || 0);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(47, 10, ctx_r1.estadisticas.montoTotal, "1.2-2"), "");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.estadisticas.ventasAnuladas || 0);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(73, 13, ctx_r1.estadisticas.montoCancelado, "1.2-2"), "");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.estadisticas.topClientes && ctx_r1.estadisticas.topClientes.length > 0 ? 76 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.estadisticas.topProductos && ctx_r1.estadisticas.topProductos.length > 0 ? 77 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.ventasDetalladas && ctx_r1.ventasDetalladas.length > 0 ? 78 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.ventasAnuladas && ctx_r1.ventasAnuladas.length > 0 ? 79 : -1);
  }
}
function VentasReportComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 65)(4, "div", 66)(5, "span", 67);
    \u0275\u0275text(6, "Cargando...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 68);
    \u0275\u0275text(8, "Generando reporte...");
    \u0275\u0275elementEnd()()()()();
  }
}
var _VentasReportComponent = class _VentasReportComponent {
  constructor(ventaService, cdr) {
    this.ventaService = ventaService;
    this.cdr = cdr;
    this.isLoading = false;
    this.tipoFiltro = "mes";
    this.fechaSeleccionada = "";
    this.mesSeleccionado = "";
    this.anioSeleccionado = "";
    this.fechaDesde = "";
    this.fechaHasta = "";
    this.estadisticas = null;
    this.ventas = [];
    this.ventasDetalladas = [];
    this.ventasAnuladas = [];
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
      params.fechaDesde = this.fechaSeleccionada;
      params.fechaHasta = this.fechaSeleccionada;
    } else if (this.tipoFiltro === "mes" && this.mesSeleccionado && this.anioSeleccionado) {
      const primerDia = `${this.anioSeleccionado}-${this.mesSeleccionado}-01`;
      const ultimoDia = new Date(parseInt(this.anioSeleccionado), parseInt(this.mesSeleccionado), 0).getDate();
      params.fechaDesde = primerDia;
      params.fechaHasta = `${this.anioSeleccionado}-${this.mesSeleccionado}-${ultimoDia}`;
    } else if (this.tipoFiltro === "rango" && this.fechaDesde && this.fechaHasta) {
      params.fechaDesde = this.fechaDesde;
      params.fechaHasta = this.fechaHasta;
    }
    Promise.all([
      this.ventaService.getVentasEstadisticas(params).toPromise(),
      this.ventaService.getVentas(__spreadProps(__spreadValues({}, params), { limit: 1e3 })).toPromise()
    ]).then(([statsResponse, ventasResponse]) => {
      console.log("Estad\xEDsticas recibidas:", statsResponse?.data);
      this.estadisticas = statsResponse?.data;
      const todasLasVentas = ventasResponse?.data?.data || [];
      console.log("Total ventas recibidas:", todasLasVentas.length);
      this.ventasDetalladas = todasLasVentas.filter((v) => v.estado !== "Cancelada");
      this.ventasAnuladas = todasLasVentas.filter((v) => v.estado === "Cancelada");
      console.log("Ventas v\xE1lidas:", this.ventasDetalladas.length);
      console.log("Ventas anuladas:", this.ventasAnuladas.length);
      console.log("Ventas anuladas detalle:", this.ventasAnuladas);
      this.isLoading = false;
      this.cdr.detectChanges();
    }).catch((error) => {
      console.error("Error al cargar reporte:", error);
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }
  exportarPDF() {
    const doc = new E();
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.setFontSize(18);
    doc.text("Reporte de Ventas", pageWidth / 2, 15, { align: "center" });
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
      doc.text("Resumen Estad\xEDstico", 14, yPos);
      yPos += 7;
      const statsData = [
        ["Total Ventas", this.estadisticas.totalVentas || 0],
        ["Completadas", this.estadisticas.ventasCompletadas || 0],
        ["Pendientes", this.estadisticas.ventasPendientes || 0],
        ["Canceladas", this.estadisticas.ventasCanceladas || 0],
        ["Monto Total", `Q${Number(this.estadisticas.montoTotal || 0).toFixed(2)}`],
        ["Promedio Venta", `Q${Number(this.estadisticas.promedioVenta || 0).toFixed(2)}`]
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
    if (this.estadisticas?.topClientes && this.estadisticas.topClientes.length > 0) {
      doc.setFontSize(12);
      doc.text("Top 10 Clientes", 14, yPos);
      yPos += 7;
      const clientesData = this.estadisticas.topClientes.map((c) => [
        c.nombre,
        c.totalVentas,
        `Q${Number(c.montoTotal || 0).toFixed(2)}`
      ]);
      autoTable(doc, {
        startY: yPos,
        head: [["Cliente", "Ventas", "Monto Total"]],
        body: clientesData,
        theme: "striped",
        headStyles: { fillColor: [79, 70, 229] },
        margin: { left: 14, right: 14 }
      });
      yPos = doc.lastAutoTable.finalY + 10;
    }
    if (this.estadisticas?.topProductos && this.estadisticas.topProductos.length > 0) {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFontSize(12);
      doc.text("Top 10 Productos M\xE1s Vendidos", 14, yPos);
      yPos += 7;
      const productosData = this.estadisticas.topProductos.map((p) => [
        p.nombre,
        p.cantidadVendida,
        `Q${Number(p.montoTotal || 0).toFixed(2)}`
      ]);
      autoTable(doc, {
        startY: yPos,
        head: [["Producto", "Cantidad", "Monto Total"]],
        body: productosData,
        theme: "striped",
        headStyles: { fillColor: [79, 70, 229] },
        margin: { left: 14, right: 14 }
      });
      yPos = doc.lastAutoTable.finalY + 10;
    }
    if (this.ventasDetalladas.length > 0) {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFontSize(12);
      doc.text("Detalle de Ventas", 14, yPos);
      yPos += 7;
      const ventasData = this.ventasDetalladas.map((v) => {
        const fecha = new Date(v.fecha);
        const productos = v.detalleVentas?.map((d) => d.producto?.nombre).join(", ") || "N/A";
        return [
          fecha.toLocaleDateString(),
          fecha.toLocaleTimeString(),
          v.cliente?.nombre || "Sin cliente",
          productos.substring(0, 30) + (productos.length > 30 ? "..." : ""),
          v.metodoPago || "N/A",
          v.estado,
          `Q${Number(v.total || 0).toFixed(2)}`
        ];
      });
      autoTable(doc, {
        startY: yPos,
        head: [["Fecha", "Hora", "Cliente", "Productos", "M\xE9todo", "Estado", "Total"]],
        body: ventasData,
        theme: "striped",
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 8 },
        margin: { left: 14, right: 14 }
      });
    }
    const fileName = `reporte-ventas-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.pdf`;
    doc.save(fileName);
  }
  exportarExcel() {
    const workbook = utils.book_new();
    if (this.estadisticas) {
      const statsData = [
        ["M\xE9trica", "Valor"],
        ["Total Ventas", this.estadisticas.totalVentas || 0],
        ["Ventas Completadas", this.estadisticas.ventasCompletadas || 0],
        ["Ventas Pendientes", this.estadisticas.ventasPendientes || 0],
        ["Ventas Canceladas", this.estadisticas.ventasCanceladas || 0],
        ["Monto Total", this.estadisticas.montoTotal || 0],
        ["Promedio por Venta", this.estadisticas.promedioVenta || 0]
      ];
      const wsStats = utils.aoa_to_sheet(statsData);
      wsStats["!cols"] = [{ wch: 25 }, { wch: 15 }];
      utils.book_append_sheet(workbook, wsStats, "Resumen");
    }
    if (this.estadisticas?.topClientes && this.estadisticas.topClientes.length > 0) {
      const clientesData = [
        ["Cliente", "Total Ventas", "Monto Total"],
        ...this.estadisticas.topClientes.map((c) => [
          c.nombre,
          c.totalVentas,
          c.montoTotal
        ])
      ];
      const wsClientes = utils.aoa_to_sheet(clientesData);
      wsClientes["!cols"] = [{ wch: 30 }, { wch: 15 }, { wch: 15 }];
      utils.book_append_sheet(workbook, wsClientes, "Top Clientes");
    }
    if (this.estadisticas?.topProductos && this.estadisticas.topProductos.length > 0) {
      const productosData = [
        ["Producto", "Cantidad Vendida", "Monto Total"],
        ...this.estadisticas.topProductos.map((p) => [
          p.nombre,
          p.cantidadVendida,
          p.montoTotal
        ])
      ];
      const wsProductos = utils.aoa_to_sheet(productosData);
      wsProductos["!cols"] = [{ wch: 30 }, { wch: 18 }, { wch: 15 }];
      utils.book_append_sheet(workbook, wsProductos, "Top Productos");
    }
    if (this.ventasDetalladas.length > 0) {
      const ventasData = [
        ["Fecha", "Hora", "Cliente", "Productos", "M\xE9todo Pago", "Estado", "Total"],
        ...this.ventasDetalladas.map((v) => {
          const fecha = new Date(v.fecha);
          const productos = v.detalleVentas?.map((d) => d.producto?.nombre).join(", ") || "N/A";
          return [
            fecha.toLocaleDateString(),
            fecha.toLocaleTimeString(),
            v.cliente?.nombre || "Sin cliente",
            productos,
            v.metodoPago || "N/A",
            v.estado,
            v.total
          ];
        })
      ];
      const wsVentas = utils.aoa_to_sheet(ventasData);
      wsVentas["!cols"] = [
        { wch: 12 },
        { wch: 10 },
        { wch: 25 },
        { wch: 40 },
        { wch: 15 },
        { wch: 12 },
        { wch: 12 }
      ];
      utils.book_append_sheet(workbook, wsVentas, "Ventas Detalladas");
    }
    const fileName = `reporte-ventas-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.xlsx`;
    writeFileSync(workbook, fileName);
  }
  getEstadoBadge(estado) {
    const badges = {
      "Completada": "bg-success",
      "Pendiente": "bg-warning",
      "Cancelada": "bg-danger"
    };
    return badges[estado] || "bg-secondary";
  }
  getTotalVentasValidas() {
    if (!this.ventasDetalladas || this.ventasDetalladas.length === 0) {
      return 0;
    }
    return this.ventasDetalladas.reduce((sum, venta) => {
      return sum + Number(venta.total || 0);
    }, 0);
  }
  getTotalVentasAnuladas() {
    if (!this.ventasAnuladas || this.ventasAnuladas.length === 0) {
      return 0;
    }
    return this.ventasAnuladas.reduce((sum, venta) => {
      return sum + Number(venta.total || 0);
    }, 0);
  }
  exportarVentasAnuladasPDF() {
    if (!this.ventasAnuladas || this.ventasAnuladas.length === 0) {
      return;
    }
    const doc = new E();
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.setFontSize(18);
    doc.text("Reporte de Ventas Anuladas", pageWidth / 2, 15, { align: "center" });
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
    const ventasData = this.ventasAnuladas.map((v) => {
      const fecha = new Date(v.fecha);
      const productos = v.detalleVentas?.map((d) => d.producto?.nombre).join(", ") || "N/A";
      return [
        fecha.toLocaleDateString(),
        fecha.toLocaleTimeString(),
        v.cliente?.nombre || "Sin cliente",
        productos.substring(0, 25) + (productos.length > 25 ? "..." : ""),
        v.metodoPago || "N/A",
        `Q${Number(v.total || 0).toFixed(2)}`,
        v.motivoAnulacion || "Sin motivo"
      ];
    });
    autoTable(doc, {
      startY: yPos,
      head: [["Fecha", "Hora", "Cliente", "Productos", "M\xE9todo", "Total", "Motivo"]],
      body: ventasData,
      theme: "striped",
      headStyles: { fillColor: [220, 38, 38] },
      styles: { fontSize: 7 },
      margin: { left: 10, right: 10 }
    });
    const fileName = `ventas-anuladas-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.pdf`;
    doc.save(fileName);
  }
};
_VentasReportComponent.\u0275fac = function VentasReportComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VentasReportComponent)(\u0275\u0275directiveInject(VentaService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_VentasReportComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VentasReportComponent, selectors: [["app-ventas-report"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 8, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "d-flex", "gap-2"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "ri-file-pdf-line"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "ri-file-excel-line"], [1, "card-header"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-3"], [1, "form-label"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "dia"], ["value", "mes"], ["value", "rango"], [1, "col-md-3", "d-flex", "align-items-end"], [1, "btn", "btn-primary", "w-100", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "ri-bar-chart-line"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "col-xl-3", "col-lg-6"], [1, "d-flex", "align-items-top"], [1, "me-3"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-primary-transparent"], [1, "ri-shopping-cart-line", "fs-18"], [1, "flex-fill"], [1, "fw-semibold", "mb-0"], [1, "mb-0", "fs-12", "text-muted"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-success-transparent"], [1, "ri-check-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-warning-transparent"], [1, "ri-time-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-info-transparent"], [1, "ri-money-dollar-circle-line", "fs-18"], [1, "card", "custom-card", "border-danger"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-danger-transparent"], [1, "ri-close-circle-line", "fs-18"], [1, "fw-semibold", "mb-0", "text-danger"], [1, "table-responsive"], [1, "table", "text-nowrap"], [1, "fw-semibold", "text-success"], [1, "table", "text-nowrap", "table-hover"], [1, "table-active"], ["colspan", "6", 1, "text-end", "fw-bold"], [1, "fw-bold", "text-success", "fs-5"], [1, "fw-semibold"], [1, "text-muted"], [1, "d-flex", "flex-column", "gap-1"], [1, "badge", "bg-light", "text-dark"], [1, "card-header", "bg-danger-transparent"], [1, "card-title", "text-danger"], [1, "ri-close-circle-line", "me-2"], [1, "table-danger"], ["colspan", "5", 1, "text-end", "fw-bold"], ["colspan", "2", 1, "fw-bold", "text-danger", "fs-5"], [1, "fw-semibold", "text-danger"], [1, "text-danger"], [1, "ri-information-line", "me-1"], [1, "card-body", "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3"]], template: function VentasReportComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Reporte de Ventas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
    \u0275\u0275listener("click", function VentasReportComponent_Template_button_click_8_listener() {
      return ctx.exportarPDF();
    });
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, " Exportar PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 9);
    \u0275\u0275listener("click", function VentasReportComponent_Template_button_click_11_listener() {
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
    \u0275\u0275twoWayListener("ngModelChange", function VentasReportComponent_Template_select_ngModelChange_25_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.tipoFiltro, $event) || (ctx.tipoFiltro = $event);
      return $event;
    });
    \u0275\u0275listener("change", function VentasReportComponent_Template_select_change_25_listener() {
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
    \u0275\u0275template(32, VentasReportComponent_Conditional_32_Template, 4, 1, "div", 14)(33, VentasReportComponent_Conditional_33_Template, 12, 2)(34, VentasReportComponent_Conditional_34_Template, 8, 2);
    \u0275\u0275elementStart(35, "div", 20)(36, "button", 21);
    \u0275\u0275listener("click", function VentasReportComponent_Template_button_click_36_listener() {
      return ctx.loadReport();
    });
    \u0275\u0275template(37, VentasReportComponent_Conditional_37_Template, 1, 0, "span", 22);
    \u0275\u0275element(38, "i", 23);
    \u0275\u0275text(39, " Generar Reporte ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(40, VentasReportComponent_Conditional_40_Template, 80, 16)(41, VentasReportComponent_Conditional_41_Template, 9, 0, "div", 1);
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
}, dependencies: [CommonModule, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, NgSelectModule, SharedModule], styles: ["\n\n/*# sourceMappingURL=ventas-report.component.css.map */"] });
var VentasReportComponent = _VentasReportComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VentasReportComponent, { className: "VentasReportComponent" });
})();
export {
  VentasReportComponent
};
//# sourceMappingURL=ventas-report.component-WH26ZBKA.js.map
