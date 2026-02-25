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
  FormsModule
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/reports-dashboard/empleados-report/empleados-report.component.ts
var _forTrack0 = ($index, $item) => $item.puesto;
var _forTrack1 = ($index, $item) => $item.id;
function EmpleadosReportComponent_Conditional_14_Conditional_100_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 39);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 40);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const puesto_r1 = ctx.$implicit;
    const \u0275$index_248_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_248_r2 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(puesto_r1.puesto);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(puesto_r1._count.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(10, 5, puesto_r1._avg.salario, "1.2-2"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 8, puesto_r1._count.id / ctx_r2.estadisticas.totalEmpleados * 100, "1.1-1"), "% ");
  }
}
function EmpleadosReportComponent_Conditional_14_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 34)(4, "div", 5);
    \u0275\u0275text(5, "Empleados por Puesto");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12)(7, "div", 35)(8, "table", 36)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Puesto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Salario Promedio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Porcentaje");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, EmpleadosReportComponent_Conditional_14_Conditional_100_For_23_Template, 15, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r2.estadisticas.empleadosPorPuesto);
  }
}
function EmpleadosReportComponent_Conditional_14_Conditional_101_For_29_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "Masculino");
    \u0275\u0275elementEnd();
  }
}
function EmpleadosReportComponent_Conditional_14_Conditional_101_For_29_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "Femenino");
    \u0275\u0275elementEnd();
  }
}
function EmpleadosReportComponent_Conditional_14_Conditional_101_For_29_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function EmpleadosReportComponent_Conditional_14_Conditional_101_For_29_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Activo");
    \u0275\u0275elementEnd();
  }
}
function EmpleadosReportComponent_Conditional_14_Conditional_101_For_29_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "Inactivo");
    \u0275\u0275elementEnd();
  }
}
function EmpleadosReportComponent_Conditional_14_Conditional_101_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 39);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275template(17, EmpleadosReportComponent_Conditional_14_Conditional_101_For_29_Conditional_17_Template, 2, 0, "span", 41)(18, EmpleadosReportComponent_Conditional_14_Conditional_101_For_29_Conditional_18_Template, 2, 0, "span", 42)(19, EmpleadosReportComponent_Conditional_14_Conditional_101_For_29_Conditional_19_Template, 2, 0, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275template(21, EmpleadosReportComponent_Conditional_14_Conditional_101_For_29_Conditional_21_Template, 2, 0, "span", 44)(22, EmpleadosReportComponent_Conditional_14_Conditional_101_For_29_Conditional_22_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const empleado_r4 = ctx.$implicit;
    const \u0275$index_320_r5 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_320_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", empleado_r4.nombre, " ", empleado_r4.apellido, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(empleado_r4.puesto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(10, 9, empleado_r4.salario, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 12, empleado_r4.fechaContratacion, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(empleado_r4.telefono || "-");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(empleado_r4.genero === "M" ? 17 : empleado_r4.genero === "F" ? 18 : 19);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(empleado_r4.activo ? 21 : 22);
  }
}
function EmpleadosReportComponent_Conditional_14_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 34)(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12)(7, "div", 35)(8, "table", 36)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Puesto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Salario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Fecha Contrataci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "G\xE9nero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275repeaterCreate(28, EmpleadosReportComponent_Conditional_14_Conditional_101_For_29_Template, 23, 15, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Listado de Empleados (", ctx_r2.empleados.length, " empleados)");
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r2.empleados);
  }
}
function EmpleadosReportComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 11)(2, "div", 3)(3, "div", 12)(4, "div", 13)(5, "div", 14)(6, "span", 15);
    \u0275\u0275element(7, "i", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 17)(9, "h5", 18);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 19);
    \u0275\u0275text(12, "Total Empleados");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(13, "div", 11)(14, "div", 3)(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "span", 20);
    \u0275\u0275element(19, "i", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 17)(21, "h5", 18);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 19);
    \u0275\u0275text(24, "Empleados Activos");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(25, "div", 11)(26, "div", 3)(27, "div", 12)(28, "div", 13)(29, "div", 14)(30, "span", 22);
    \u0275\u0275element(31, "i", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 17)(33, "h5", 18);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 19);
    \u0275\u0275text(36, "Nuevos (3 meses)");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(37, "div", 11)(38, "div", 3)(39, "div", 12)(40, "div", 13)(41, "div", 14)(42, "span", 24);
    \u0275\u0275element(43, "i", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 17)(45, "h5", 18);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 19);
    \u0275\u0275text(49, "N\xF3mina Total");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(50, "div", 1)(51, "div", 11)(52, "div", 3)(53, "div", 12)(54, "div", 13)(55, "div", 14)(56, "span", 26);
    \u0275\u0275element(57, "i", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 17)(59, "h5", 18);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p", 19);
    \u0275\u0275text(62, "Hombres");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(63, "div", 11)(64, "div", 3)(65, "div", 12)(66, "div", 13)(67, "div", 14)(68, "span", 28);
    \u0275\u0275element(69, "i", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 17)(71, "h5", 18);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "p", 19);
    \u0275\u0275text(74, "Mujeres");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(75, "div", 11)(76, "div", 3)(77, "div", 12)(78, "div", 13)(79, "div", 14)(80, "span", 30);
    \u0275\u0275element(81, "i", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 17)(83, "h5", 18);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "p", 19);
    \u0275\u0275text(86, "Inactivos");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(87, "div", 11)(88, "div", 3)(89, "div", 12)(90, "div", 13)(91, "div", 14)(92, "span", 32);
    \u0275\u0275element(93, "i", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 17)(95, "h5", 18);
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "p", 19);
    \u0275\u0275text(99, "Salario Promedio");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(100, EmpleadosReportComponent_Conditional_14_Conditional_100_Template, 24, 0, "div", 1)(101, EmpleadosReportComponent_Conditional_14_Conditional_101_Template, 30, 1, "div", 1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.estadisticas.totalEmpleados);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.estadisticas.empleadosActivos);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.estadisticas.empleadosNuevos);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(47, 10, ctx_r2.estadisticas.nominaTotal, "1.2-2"), "");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r2.estadisticas.empleadosHombres);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.estadisticas.empleadasMujeres);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.estadisticas.empleadosInactivos);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(97, 13, ctx_r2.estadisticas.salarioPromedio, "1.2-2"), "");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.estadisticas.empleadosPorPuesto && ctx_r2.estadisticas.empleadosPorPuesto.length > 0 ? 100 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.empleados && ctx_r2.empleados.length > 0 ? 101 : -1);
  }
}
function EmpleadosReportComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 46)(4, "div", 47)(5, "span", 48);
    \u0275\u0275text(6, "Cargando...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 49);
    \u0275\u0275text(8, "Generando reporte...");
    \u0275\u0275elementEnd()()()()();
  }
}
var _EmpleadosReportComponent = class _EmpleadosReportComponent {
  constructor(http, cdr) {
    this.http = http;
    this.cdr = cdr;
    this.isLoading = false;
    this.estadisticas = null;
    this.empleados = [];
  }
  ngOnInit() {
    this.loadReport();
  }
  loadReport() {
    this.isLoading = true;
    Promise.all([
      this.getEstadisticas(),
      this.getEmpleados()
    ]).then(([statsResponse, empleadosResponse]) => {
      console.log("Estad\xEDsticas empleados:", statsResponse);
      console.log("Empleados:", empleadosResponse);
      this.estadisticas = statsResponse?.data;
      this.empleados = empleadosResponse?.data?.data || [];
      this.isLoading = false;
      this.cdr.detectChanges();
    }).catch((error) => {
      console.error("Error al cargar reporte:", error);
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }
  getEstadisticas() {
    return this.http.get(`${environment.apiUrl}/v1/empleados/estadisticas`).toPromise();
  }
  getEmpleados() {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("limit", "1000");
    return this.http.get(`${environment.apiUrl}/v1/empleados`, { params: httpParams }).toPromise();
  }
  exportarPDF() {
    const doc = new E();
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.setFontSize(18);
    doc.text("Reporte de Empleados", pageWidth / 2, 15, { align: "center" });
    let yPos = 25;
    if (this.estadisticas) {
      doc.setFontSize(12);
      doc.text("Resumen General", 14, yPos);
      yPos += 7;
      const statsData = [
        ["Total Empleados", this.estadisticas.totalEmpleados || 0],
        ["Empleados Activos", this.estadisticas.empleadosActivos || 0],
        ["Empleados Inactivos", this.estadisticas.empleadosInactivos || 0],
        ["Empleados Hombres", this.estadisticas.empleadosHombres || 0],
        ["Empleadas Mujeres", this.estadisticas.empleadasMujeres || 0],
        ["Empleados Nuevos (3 meses)", this.estadisticas.empleadosNuevos || 0],
        ["Salario Promedio", `Q${Number(this.estadisticas.salarioPromedio || 0).toFixed(2)}`],
        ["N\xF3mina Total", `Q${Number(this.estadisticas.nominaTotal || 0).toFixed(2)}`]
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
    if (this.estadisticas?.empleadosPorPuesto && this.estadisticas.empleadosPorPuesto.length > 0) {
      doc.setFontSize(12);
      doc.text("Empleados por Puesto", 14, yPos);
      yPos += 7;
      const puestosData = this.estadisticas.empleadosPorPuesto.map((p) => [
        p.puesto,
        p._count.id,
        `Q${Number(p._avg.salario || 0).toFixed(2)}`
      ]);
      autoTable(doc, {
        startY: yPos,
        head: [["Puesto", "Cantidad", "Salario Promedio"]],
        body: puestosData,
        theme: "striped",
        headStyles: { fillColor: [34, 197, 94] },
        margin: { left: 14, right: 14 }
      });
      yPos = doc.lastAutoTable.finalY + 10;
    }
    if (this.empleados.length > 0) {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFontSize(12);
      doc.text("Listado de Empleados", 14, yPos);
      yPos += 7;
      const empleadosData = this.empleados.map((e) => [
        `${e.nombre} ${e.apellido}`,
        e.puesto,
        `Q${Number(e.salario || 0).toFixed(2)}`,
        new Date(e.fechaContratacion).toLocaleDateString(),
        e.activo ? "Activo" : "Inactivo"
      ]);
      autoTable(doc, {
        startY: yPos,
        head: [["Nombre", "Puesto", "Salario", "Fecha Contrataci\xF3n", "Estado"]],
        body: empleadosData,
        theme: "striped",
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 8 },
        margin: { left: 14, right: 14 }
      });
    }
    const fileName = `reporte-empleados-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.pdf`;
    doc.save(fileName);
  }
  exportarExcel() {
    const workbook = utils.book_new();
    if (this.estadisticas) {
      const statsData = [
        ["M\xE9trica", "Valor"],
        ["Total Empleados", this.estadisticas.totalEmpleados || 0],
        ["Empleados Activos", this.estadisticas.empleadosActivos || 0],
        ["Empleados Inactivos", this.estadisticas.empleadosInactivos || 0],
        ["Empleados Hombres", this.estadisticas.empleadosHombres || 0],
        ["Empleadas Mujeres", this.estadisticas.empleadasMujeres || 0],
        ["Empleados Nuevos (3 meses)", this.estadisticas.empleadosNuevos || 0],
        ["Salario Promedio", this.estadisticas.salarioPromedio || 0],
        ["N\xF3mina Total", this.estadisticas.nominaTotal || 0]
      ];
      const wsStats = utils.aoa_to_sheet(statsData);
      wsStats["!cols"] = [{ wch: 30 }, { wch: 15 }];
      utils.book_append_sheet(workbook, wsStats, "Resumen");
    }
    if (this.estadisticas?.empleadosPorPuesto && this.estadisticas.empleadosPorPuesto.length > 0) {
      const puestosData = [
        ["Puesto", "Cantidad", "Salario Promedio"],
        ...this.estadisticas.empleadosPorPuesto.map((p) => [
          p.puesto,
          p._count.id,
          p._avg.salario || 0
        ])
      ];
      const wsPuestos = utils.aoa_to_sheet(puestosData);
      wsPuestos["!cols"] = [{ wch: 25 }, { wch: 12 }, { wch: 18 }];
      utils.book_append_sheet(workbook, wsPuestos, "Por Puesto");
    }
    if (this.empleados.length > 0) {
      const empleadosData = [
        ["Nombre", "Apellido", "Puesto", "Salario", "Fecha Contrataci\xF3n", "Tel\xE9fono", "Correo", "G\xE9nero", "Estado"],
        ...this.empleados.map((e) => [
          e.nombre,
          e.apellido,
          e.puesto,
          e.salario,
          new Date(e.fechaContratacion).toLocaleDateString(),
          e.telefono || "-",
          e.correo || "-",
          e.genero === "M" ? "Masculino" : e.genero === "F" ? "Femenino" : "-",
          e.activo ? "Activo" : "Inactivo"
        ])
      ];
      const wsEmpleados = utils.aoa_to_sheet(empleadosData);
      wsEmpleados["!cols"] = [
        { wch: 15 },
        { wch: 15 },
        { wch: 20 },
        { wch: 12 },
        { wch: 18 },
        { wch: 15 },
        { wch: 25 },
        { wch: 12 },
        { wch: 10 }
      ];
      utils.book_append_sheet(workbook, wsEmpleados, "Empleados");
    }
    const fileName = `reporte-empleados-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.xlsx`;
    writeFileSync(workbook, fileName);
  }
};
_EmpleadosReportComponent.\u0275fac = function EmpleadosReportComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmpleadosReportComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_EmpleadosReportComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmpleadosReportComponent, selectors: [["app-empleados-report"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 2, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "d-flex", "gap-2"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "ri-file-pdf-line"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "ri-file-excel-line"], [1, "col-xl-3", "col-lg-6"], [1, "card-body"], [1, "d-flex", "align-items-top"], [1, "me-3"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-primary-transparent"], [1, "ri-team-line", "fs-18"], [1, "flex-fill"], [1, "fw-semibold", "mb-0"], [1, "mb-0", "fs-12", "text-muted"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-success-transparent"], [1, "ri-user-follow-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-warning-transparent"], [1, "ri-user-add-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-info-transparent"], [1, "ri-money-dollar-circle-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-secondary-transparent"], [1, "ri-men-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-pink-transparent"], [1, "ri-women-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-danger-transparent"], [1, "ri-user-unfollow-line", "fs-18"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-teal-transparent"], [1, "ri-line-chart-line", "fs-18"], [1, "card-header"], [1, "table-responsive"], [1, "table", "text-nowrap", "table-hover"], [1, "fw-semibold"], [1, "badge", "bg-primary"], [1, "text-success"], [1, "badge", "bg-light", "text-dark"], [1, "badge", "bg-info"], [1, "badge", "bg-pink"], [1, "text-muted"], [1, "badge", "bg-success"], [1, "badge", "bg-secondary"], [1, "card-body", "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3"]], template: function EmpleadosReportComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Reporte de Empleados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
    \u0275\u0275listener("click", function EmpleadosReportComponent_Template_button_click_8_listener() {
      return ctx.exportarPDF();
    });
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, " Exportar PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 9);
    \u0275\u0275listener("click", function EmpleadosReportComponent_Template_button_click_11_listener() {
      return ctx.exportarExcel();
    });
    \u0275\u0275element(12, "i", 10);
    \u0275\u0275text(13, " Exportar Excel ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(14, EmpleadosReportComponent_Conditional_14_Template, 102, 16)(15, EmpleadosReportComponent_Conditional_15_Template, 9, 0, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx.estadisticas && !ctx.isLoading ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 15 : -1);
  }
}, dependencies: [CommonModule, DecimalPipe, DatePipe, FormsModule, NgSelectModule, SharedModule], styles: ["\n\n/*# sourceMappingURL=empleados-report.component.css.map */"] });
var EmpleadosReportComponent = _EmpleadosReportComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmpleadosReportComponent, { className: "EmpleadosReportComponent" });
})();
export {
  EmpleadosReportComponent
};
//# sourceMappingURL=empleados-report.component-KHRWTPKH.js.map
