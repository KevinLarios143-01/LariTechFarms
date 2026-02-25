import {
  E,
  autoTable,
  utils,
  writeFileSync
} from "./chunk-P6JRSYMS.js";
import {
  ProductosService
} from "./chunk-UK4IXMZI.js";
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
  DecimalPipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/reports-dashboard/productos-report/productos-report.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.idProducto;
function ProductosReportComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275property("value", cat_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r1);
  }
}
function ProductosReportComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
}
function ProductosReportComponent_Conditional_35_Conditional_49_For_24_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const producto_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(producto_r2.categoria);
  }
}
function ProductosReportComponent_Conditional_35_Conditional_49_For_24_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "Sin categor\xEDa");
    \u0275\u0275elementEnd();
  }
}
function ProductosReportComponent_Conditional_35_Conditional_49_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, ProductosReportComponent_Conditional_35_Conditional_49_For_24_Conditional_6_Template, 2, 1, "span", 44)(7, ProductosReportComponent_Conditional_35_Conditional_49_For_24_Conditional_7_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 46);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 47);
    \u0275\u0275element(13, "i", 48);
    \u0275\u0275text(14, " Requiere reabastecimiento ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const producto_r2 = ctx.$implicit;
    const \u0275$index_197_r3 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_197_r3 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(producto_r2.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(producto_r2.categoria ? 6 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", producto_r2.stock, " unidades");
  }
}
function ProductosReportComponent_Conditional_35_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 37)(3, "div", 38)(4, "div", 39);
    \u0275\u0275element(5, "i", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 41)(9, "table", 42)(10, "thead")(11, "tr")(12, "th");
    \u0275\u0275text(13, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Stock Actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, ProductosReportComponent_Conditional_35_Conditional_49_For_24_Template, 15, 4, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Productos con Stock Bajo (", ctx_r3.productosStockBajo.length, " productos) ");
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r3.productosStockBajo);
  }
}
function ProductosReportComponent_Conditional_35_Conditional_50_For_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_266_r5 = \u0275\u0275nextContext().$index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_266_r5 + 1);
  }
}
function ProductosReportComponent_Conditional_35_Conditional_50_For_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const \u0275$index_266_r5 = \u0275\u0275nextContext().$index;
    \u0275\u0275textInterpolate1(" ", \u0275$index_266_r5 + 1, " ");
  }
}
function ProductosReportComponent_Conditional_35_Conditional_50_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275template(2, ProductosReportComponent_Conditional_35_Conditional_50_For_22_Conditional_2_Template, 2, 1, "span", 46)(3, ProductosReportComponent_Conditional_35_Conditional_50_For_22_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 53);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 54);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const producto_r6 = ctx.$implicit;
    const \u0275$index_266_r5 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275$index_266_r5 < 3 ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(producto_r6.nombreProducto || producto_r6.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", producto_r6.cantidadVendida, " unidades");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Q", \u0275\u0275pipeBind2(11, 4, producto_r6.montoTotal, "1.2-2"), " ");
  }
}
function ProductosReportComponent_Conditional_35_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 49)(3, "div", 50)(4, "div", 51);
    \u0275\u0275element(5, "i", 52);
    \u0275\u0275text(6, " Top 10 Productos M\xE1s Vendidos ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 41)(9, "table", 42)(10, "thead")(11, "tr")(12, "th");
    \u0275\u0275text(13, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Cantidad Vendida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Monto Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, ProductosReportComponent_Conditional_35_Conditional_50_For_22_Template, 12, 7, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r3.productosMasVendidos.slice(0, 10));
  }
}
function ProductosReportComponent_Conditional_35_Conditional_51_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.categoriaSeleccionada);
  }
}
function ProductosReportComponent_Conditional_35_Conditional_51_For_30_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const producto_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(producto_r7.categoria);
  }
}
function ProductosReportComponent_Conditional_35_Conditional_51_For_30_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ProductosReportComponent_Conditional_35_Conditional_51_For_30_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const producto_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(producto_r7.stock);
  }
}
function ProductosReportComponent_Conditional_35_Conditional_51_For_30_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const producto_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(producto_r7.stock);
  }
}
function ProductosReportComponent_Conditional_35_Conditional_51_For_30_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1, "Activo");
    \u0275\u0275elementEnd();
  }
}
function ProductosReportComponent_Conditional_35_Conditional_51_For_30_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "Inactivo");
    \u0275\u0275elementEnd();
  }
}
function ProductosReportComponent_Conditional_35_Conditional_51_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, ProductosReportComponent_Conditional_35_Conditional_51_For_30_Conditional_6_Template, 2, 1, "span", 44)(7, ProductosReportComponent_Conditional_35_Conditional_51_For_30_Conditional_7_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275template(11, ProductosReportComponent_Conditional_35_Conditional_51_For_30_Conditional_11_Template, 2, 1, "span", 46)(12, ProductosReportComponent_Conditional_35_Conditional_51_For_30_Conditional_12_Template, 2, 1, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 60);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275template(20, ProductosReportComponent_Conditional_35_Conditional_51_For_30_Conditional_20_Template, 2, 0, "span", 59)(21, ProductosReportComponent_Conditional_35_Conditional_51_For_30_Conditional_21_Template, 2, 0, "span", 61);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const producto_r7 = ctx.$implicit;
    const \u0275$index_341_r8 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_341_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(producto_r7.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(producto_r7.categoria ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(producto_r7.tamanio || "-");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(producto_r7.stock <= 10 ? 11 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(15, 8, producto_r7.precio, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Q", \u0275\u0275pipeBind2(18, 11, producto_r7.precio * producto_r7.stock, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(producto_r7.activo ? 20 : 21);
  }
}
function ProductosReportComponent_Conditional_35_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 11)(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275template(6, ProductosReportComponent_Conditional_35_Conditional_51_Conditional_6_Template, 2, 1, "span", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 41)(9, "table", 42)(10, "thead")(11, "tr")(12, "th");
    \u0275\u0275text(13, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Tama\xF1o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Precio Unitario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Valor Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "tbody");
    \u0275\u0275repeaterCreate(29, ProductosReportComponent_Conditional_35_Conditional_51_For_30_Template, 22, 14, "tr", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "tfoot")(32, "tr", 56)(33, "td", 57);
    \u0275\u0275text(34, "VALOR TOTAL INVENTARIO:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td", 58);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Inventario de Productos (", ctx_r3.productosFiltrados.length, " productos) ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.categoriaSeleccionada ? 6 : -1);
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r3.productosFiltrados);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" Q", \u0275\u0275pipeBind2(37, 3, ctx_r3.getTotalValorInventario(), "1.2-2"), " ");
  }
}
function ProductosReportComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 23)(2, "div", 3)(3, "div", 12)(4, "div", 24)(5, "div", 25)(6, "span", 26);
    \u0275\u0275element(7, "i", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 28)(9, "h5", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 30);
    \u0275\u0275text(12, "Total Productos");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(13, "div", 23)(14, "div", 3)(15, "div", 12)(16, "div", 24)(17, "div", 25)(18, "span", 31);
    \u0275\u0275element(19, "i", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 28)(21, "h5", 29);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 30);
    \u0275\u0275text(24, "Productos Activos");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(25, "div", 23)(26, "div", 3)(27, "div", 12)(28, "div", 24)(29, "div", 25)(30, "span", 33);
    \u0275\u0275element(31, "i", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 28)(33, "h5", 29);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 30);
    \u0275\u0275text(36, "Stock Bajo");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(37, "div", 23)(38, "div", 3)(39, "div", 12)(40, "div", 24)(41, "div", 25)(42, "span", 35);
    \u0275\u0275element(43, "i", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 28)(45, "h5", 29);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 30);
    \u0275\u0275text(48, "Unidades en Stock");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(49, ProductosReportComponent_Conditional_35_Conditional_49_Template, 25, 1, "div", 1)(50, ProductosReportComponent_Conditional_35_Conditional_50_Template, 23, 0, "div", 1)(51, ProductosReportComponent_Conditional_35_Conditional_51_Template, 38, 6, "div", 1);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r3.estadisticas.totalProductos || 0);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r3.estadisticas.productosActivos || 0);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r3.productosStockBajo.length);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r3.estadisticas.totalUnidadesStock || 0);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.productosStockBajo && ctx_r3.productosStockBajo.length > 0 ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.productosMasVendidos && ctx_r3.productosMasVendidos.length > 0 ? 50 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.productosFiltrados && ctx_r3.productosFiltrados.length > 0 ? 51 : -1);
  }
}
function ProductosReportComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 62)(4, "div", 63)(5, "span", 64);
    \u0275\u0275text(6, "Cargando...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 65);
    \u0275\u0275text(8, "Generando reporte...");
    \u0275\u0275elementEnd()()()()();
  }
}
var _ProductosReportComponent = class _ProductosReportComponent {
  constructor(productosService, ventaService, cdr) {
    this.productosService = productosService;
    this.ventaService = ventaService;
    this.cdr = cdr;
    this.isLoading = false;
    this.estadisticas = null;
    this.productos = [];
    this.productosStockBajo = [];
    this.productosMasVendidos = [];
    this.categoriaSeleccionada = "";
    this.categorias = [];
  }
  ngOnInit() {
    this.loadReport();
  }
  loadReport() {
    this.isLoading = true;
    Promise.all([
      this.productosService.getStats().toPromise(),
      this.productosService.getProductos().toPromise(),
      this.ventaService.getVentasEstadisticas({}).toPromise()
    ]).then(([statsResponse, productosResponse, ventasStatsResponse]) => {
      console.log("Estad\xEDsticas productos:", statsResponse);
      console.log("Productos:", productosResponse);
      console.log("Estad\xEDsticas ventas:", ventasStatsResponse);
      this.estadisticas = statsResponse?.data;
      this.productos = productosResponse?.data?.data || productosResponse?.data || [];
      this.productosStockBajo = this.estadisticas?.productosStockBajo || [];
      this.productosMasVendidos = ventasStatsResponse?.data?.topProductos || [];
      this.categorias = [...new Set(this.productos.map((p) => p.categoria).filter(Boolean))];
      this.isLoading = false;
      this.cdr.detectChanges();
    }).catch((error) => {
      console.error("Error al cargar reporte:", error);
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }
  get productosFiltrados() {
    if (!this.categoriaSeleccionada) {
      return this.productos;
    }
    return this.productos.filter((p) => p.categoria === this.categoriaSeleccionada);
  }
  exportarPDF() {
    const doc = new E();
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.setFontSize(18);
    doc.text("Reporte de Productos", pageWidth / 2, 15, { align: "center" });
    let yPos = 25;
    if (this.estadisticas) {
      doc.setFontSize(12);
      doc.text("Resumen General", 14, yPos);
      yPos += 7;
      const statsData = [
        ["Total Productos", this.estadisticas.totalProductos || 0],
        ["Productos Activos", this.estadisticas.productosActivos || 0],
        ["Productos Inactivos", this.estadisticas.productosInactivos || 0],
        ["Total Unidades en Stock", this.estadisticas.totalUnidadesStock || 0],
        ["Productos con Stock Bajo", this.productosStockBajo.length]
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
    if (this.productosStockBajo.length > 0) {
      doc.setFontSize(12);
      doc.text("Productos con Stock Bajo", 14, yPos);
      yPos += 7;
      const stockBajoData = this.productosStockBajo.map((p) => [
        p.nombre,
        p.categoria || "Sin categor\xEDa",
        p.stock
      ]);
      autoTable(doc, {
        startY: yPos,
        head: [["Producto", "Categor\xEDa", "Stock"]],
        body: stockBajoData,
        theme: "striped",
        headStyles: { fillColor: [220, 38, 38] },
        margin: { left: 14, right: 14 }
      });
      yPos = doc.lastAutoTable.finalY + 10;
    }
    if (this.productosMasVendidos.length > 0) {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFontSize(12);
      doc.text("Top 10 Productos M\xE1s Vendidos", 14, yPos);
      yPos += 7;
      const masVendidosData = this.productosMasVendidos.slice(0, 10).map((p) => [
        p.nombreProducto || p.nombre,
        p.cantidadVendida,
        `Q${Number(p.montoTotal || 0).toFixed(2)}`
      ]);
      autoTable(doc, {
        startY: yPos,
        head: [["Producto", "Cantidad Vendida", "Monto Total"]],
        body: masVendidosData,
        theme: "striped",
        headStyles: { fillColor: [34, 197, 94] },
        margin: { left: 14, right: 14 }
      });
      yPos = doc.lastAutoTable.finalY + 10;
    }
    if (this.productosFiltrados.length > 0) {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFontSize(12);
      doc.text("Inventario de Productos", 14, yPos);
      yPos += 7;
      const inventarioData = this.productosFiltrados.map((p) => [
        p.nombre,
        p.categoria || "Sin categor\xEDa",
        p.tamanio || "-",
        p.stock,
        `Q${Number(p.precio || 0).toFixed(2)}`,
        p.activo ? "Activo" : "Inactivo"
      ]);
      autoTable(doc, {
        startY: yPos,
        head: [["Producto", "Categor\xEDa", "Tama\xF1o", "Stock", "Precio", "Estado"]],
        body: inventarioData,
        theme: "striped",
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 8 },
        margin: { left: 14, right: 14 }
      });
    }
    const fileName = `reporte-productos-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.pdf`;
    doc.save(fileName);
  }
  exportarExcel() {
    const workbook = utils.book_new();
    if (this.estadisticas) {
      const statsData = [
        ["M\xE9trica", "Valor"],
        ["Total Productos", this.estadisticas.totalProductos || 0],
        ["Productos Activos", this.estadisticas.productosActivos || 0],
        ["Productos Inactivos", this.estadisticas.productosInactivos || 0],
        ["Total Unidades en Stock", this.estadisticas.totalUnidadesStock || 0],
        ["Productos con Stock Bajo", this.productosStockBajo.length]
      ];
      const wsStats = utils.aoa_to_sheet(statsData);
      wsStats["!cols"] = [{ wch: 30 }, { wch: 15 }];
      utils.book_append_sheet(workbook, wsStats, "Resumen");
    }
    if (this.productosStockBajo.length > 0) {
      const stockBajoData = [
        ["Producto", "Categor\xEDa", "Stock Actual"],
        ...this.productosStockBajo.map((p) => [
          p.nombre,
          p.categoria || "Sin categor\xEDa",
          p.stock
        ])
      ];
      const wsStockBajo = utils.aoa_to_sheet(stockBajoData);
      wsStockBajo["!cols"] = [{ wch: 30 }, { wch: 20 }, { wch: 15 }];
      utils.book_append_sheet(workbook, wsStockBajo, "Stock Bajo");
    }
    if (this.productosMasVendidos.length > 0) {
      const masVendidosData = [
        ["Producto", "Cantidad Vendida", "Monto Total"],
        ...this.productosMasVendidos.map((p) => [
          p.nombreProducto || p.nombre,
          p.cantidadVendida,
          p.montoTotal
        ])
      ];
      const wsMasVendidos = utils.aoa_to_sheet(masVendidosData);
      wsMasVendidos["!cols"] = [{ wch: 30 }, { wch: 18 }, { wch: 15 }];
      utils.book_append_sheet(workbook, wsMasVendidos, "M\xE1s Vendidos");
    }
    if (this.productosFiltrados.length > 0) {
      const inventarioData = [
        ["Producto", "Categor\xEDa", "Tama\xF1o", "Stock", "Precio", "Estado"],
        ...this.productosFiltrados.map((p) => [
          p.nombre,
          p.categoria || "Sin categor\xEDa",
          p.tamanio || "-",
          p.stock,
          p.precio,
          p.activo ? "Activo" : "Inactivo"
        ])
      ];
      const wsInventario = utils.aoa_to_sheet(inventarioData);
      wsInventario["!cols"] = [
        { wch: 30 },
        { wch: 20 },
        { wch: 15 },
        { wch: 10 },
        { wch: 12 },
        { wch: 12 }
      ];
      utils.book_append_sheet(workbook, wsInventario, "Inventario");
    }
    const fileName = `reporte-productos-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.xlsx`;
    writeFileSync(workbook, fileName);
  }
  getTotalValorInventario() {
    return this.productosFiltrados.reduce((sum, p) => {
      return sum + Number(p.precio || 0) * Number(p.stock || 0);
    }, 0);
  }
};
_ProductosReportComponent.\u0275fac = function ProductosReportComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProductosReportComponent)(\u0275\u0275directiveInject(ProductosService), \u0275\u0275directiveInject(VentaService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_ProductosReportComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductosReportComponent, selectors: [["app-productos-report"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 5, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "d-flex", "gap-2"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "ri-file-pdf-line"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "ri-file-excel-line"], [1, "card-header"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-4"], [1, "form-label"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "col-md-3", "d-flex", "align-items-end"], [1, "btn", "btn-primary", "w-100", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "ri-refresh-line"], [1, "col-xl-3", "col-lg-6"], [1, "d-flex", "align-items-top"], [1, "me-3"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-primary-transparent"], [1, "ri-box-3-line", "fs-18"], [1, "flex-fill"], [1, "fw-semibold", "mb-0"], [1, "mb-0", "fs-12", "text-muted"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-success-transparent"], [1, "ri-check-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-warning-transparent"], [1, "ri-alert-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-info-transparent"], [1, "ri-stack-line", "fs-18"], [1, "card", "custom-card", "border-warning"], [1, "card-header", "bg-warning-transparent"], [1, "card-title", "text-warning"], [1, "ri-alert-line", "me-2"], [1, "table-responsive"], [1, "table", "text-nowrap", "table-hover"], [1, "fw-semibold"], [1, "badge", "bg-light", "text-dark"], [1, "text-muted"], [1, "badge", "bg-warning"], [1, "badge", "bg-danger"], [1, "ri-alert-line"], [1, "card", "custom-card", "border-success"], [1, "card-header", "bg-success-transparent"], [1, "card-title", "text-success"], [1, "ri-trophy-line", "me-2"], [1, "badge", "bg-primary"], [1, "text-success", "fw-semibold"], [1, "badge", "bg-primary", "ms-2"], [1, "table-active"], ["colspan", "6", 1, "text-end", "fw-bold"], ["colspan", "2", 1, "fw-bold", "text-success", "fs-5"], [1, "badge", "bg-success"], [1, "fw-semibold", "text-success"], [1, "badge", "bg-secondary"], [1, "card-body", "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3"]], template: function ProductosReportComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Reporte de Productos e Inventario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
    \u0275\u0275listener("click", function ProductosReportComponent_Template_button_click_8_listener() {
      return ctx.exportarPDF();
    });
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, " Exportar PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 9);
    \u0275\u0275listener("click", function ProductosReportComponent_Template_button_click_11_listener() {
      return ctx.exportarExcel();
    });
    \u0275\u0275element(12, "i", 10);
    \u0275\u0275text(13, " Exportar Excel ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(14, "div", 1)(15, "div", 2)(16, "div", 3)(17, "div", 11)(18, "div", 5);
    \u0275\u0275text(19, "Filtros");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "label", 15);
    \u0275\u0275text(24, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 16);
    \u0275\u0275twoWayListener("ngModelChange", function ProductosReportComponent_Template_select_ngModelChange_25_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.categoriaSeleccionada, $event) || (ctx.categoriaSeleccionada = $event);
      return $event;
    });
    \u0275\u0275elementStart(26, "option", 17);
    \u0275\u0275text(27, "Todas las categor\xEDas");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(28, ProductosReportComponent_For_29_Template, 2, 2, "option", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 19)(31, "button", 20);
    \u0275\u0275listener("click", function ProductosReportComponent_Template_button_click_31_listener() {
      return ctx.loadReport();
    });
    \u0275\u0275template(32, ProductosReportComponent_Conditional_32_Template, 1, 0, "span", 21);
    \u0275\u0275element(33, "i", 22);
    \u0275\u0275text(34, " Actualizar ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(35, ProductosReportComponent_Conditional_35_Template, 52, 7)(36, ProductosReportComponent_Conditional_36_Template, 9, 0, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(25);
    \u0275\u0275twoWayProperty("ngModel", ctx.categoriaSeleccionada);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.categorias);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 32 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.estadisticas && !ctx.isLoading ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 36 : -1);
  }
}, dependencies: [CommonModule, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, NgSelectModule, SharedModule], styles: ["\n\n/*# sourceMappingURL=productos-report.component.css.map */"] });
var ProductosReportComponent = _ProductosReportComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductosReportComponent, { className: "ProductosReportComponent" });
})();
export {
  ProductosReportComponent
};
//# sourceMappingURL=productos-report.component-JGWGWSKN.js.map
