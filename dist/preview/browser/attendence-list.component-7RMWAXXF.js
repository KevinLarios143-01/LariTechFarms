import {
  DataAttendanceByUserService
} from "./chunk-YFWE3JHA.js";
import {
  NgCircleProgressModule
} from "./chunk-QVWAQ3ZB.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-BFCIYJJG.js";
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
import "./chunk-KTQLQ7YR.js";
import "./chunk-ZSUERINM.js";
import {
  NgbModal,
  NgbModule
} from "./chunk-47LBZ5ZO.js";
import {
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/hrmdashboards/attendance/attendence-list/attendence-list.component.ts
function AttendenceListComponent_ng_template_1347_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "h5", 90);
    \u0275\u0275text(2, "Attendance Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 91);
    \u0275\u0275listener("click", function AttendenceListComponent_ng_template_1347_Template_button_click_3_listener() {
      const modal_r5 = \u0275\u0275restoreView(_r4).$implicit;
      return \u0275\u0275resetView(modal_r5.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 92)(5, "div", 93)(6, "div", 94)(7, "div", 95)(8, "h6", 96);
    \u0275\u0275text(9, "09:30 AM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small", 97);
    \u0275\u0275text(11, "Clock In");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 94)(13, "div", 98);
    \u0275\u0275element(14, "apx-chart", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 94)(16, "div", 95)(17, "h6", 96);
    \u0275\u0275text(18, " 06:30 PM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "small", 97);
    \u0275\u0275text(20, "Clock Out");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 100)(22, "label", 12);
    \u0275\u0275text(23, "IP Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 11)(26, "label", 12);
    \u0275\u0275text(27, "Working Form");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 102)(29, "option", 103);
    \u0275\u0275text(30, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 52);
    \u0275\u0275text(32, "Office");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 15);
    \u0275\u0275text(34, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 16);
    \u0275\u0275text(36, "Others");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 104)(38, "a", 105);
    \u0275\u0275listener("click", function AttendenceListComponent_ng_template_1347_Template_a_click_38_listener() {
      const modal_r5 = \u0275\u0275restoreView(_r4).$implicit;
      return \u0275\u0275resetView(modal_r5.close("cross click"));
    });
    \u0275\u0275text(39, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 106);
    \u0275\u0275text(41, "Edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("series", ctx_r5.chartOptions.series)("chart", ctx_r5.chartOptions.chart)("colors", ctx_r5.chartOptions.colors)("plotOptions", ctx_r5.chartOptions.plotOptions)("labels", ctx_r5.chartOptions.labels);
  }
}
function AttendenceListComponent_ng_template_1349_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107)(1, "div", 89)(2, "h5", 90);
    \u0275\u0275text(3, "Attendance Details ");
    \u0275\u0275elementStart(4, "span", 108);
    \u0275\u0275text(5, "Half Day");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 109);
    \u0275\u0275listener("click", function AttendenceListComponent_ng_template_1349_Template_button_click_6_listener() {
      const modal_r8 = \u0275\u0275restoreView(_r7).$implicit;
      return \u0275\u0275resetView(modal_r8.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 92)(8, "div", 93)(9, "div", 94)(10, "div", 95)(11, "h6", 96);
    \u0275\u0275text(12, "09:30 AM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small", 97);
    \u0275\u0275text(14, "Clock In");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 94)(16, "div", 110);
    \u0275\u0275element(17, "apx-chart", 111);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 94)(19, "div", 95)(20, "h6", 96);
    \u0275\u0275text(21, " 01:30 PM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "small", 97);
    \u0275\u0275text(23, "Clock Out");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 100)(25, "label", 12);
    \u0275\u0275text(26, "IP Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 11)(29, "label", 12);
    \u0275\u0275text(30, "Working Form");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 102)(32, "option", 103);
    \u0275\u0275text(33, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 52);
    \u0275\u0275text(35, "Office");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 15);
    \u0275\u0275text(37, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 16);
    \u0275\u0275text(39, "Others");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 104)(41, "a", 105);
    \u0275\u0275listener("click", function AttendenceListComponent_ng_template_1349_Template_a_click_41_listener() {
      const modal_r8 = \u0275\u0275restoreView(_r7).$implicit;
      return \u0275\u0275resetView(modal_r8.close("cross click"));
    });
    \u0275\u0275text(42, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "a", 112);
    \u0275\u0275text(44, "Edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("series", ctx_r5.chartOptions1.series)("chart", ctx_r5.chartOptions1.chart)("colors", ctx_r5.chartOptions1.colors)("plotOptions", ctx_r5.chartOptions1.plotOptions)("labels", ctx_r5.chartOptions1.labels)("grid", ctx_r5.chartOptions1.grid)("stroke", ctx_r5.chartOptions1.stroke);
  }
}
var _AttendenceListComponent = class _AttendenceListComponent {
  constructor(modalService, dataService) {
    this.modalService = modalService;
    this.dataService = dataService;
    this.chartOptions = {
      chart: {
        height: 140,
        type: "radialBar"
      },
      series: [100],
      colors: ["rgba(13,205,148,1)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "65%"
          },
          dataLabels: {
            name: {
              offsetY: 3,
              color: "#4b9bfa",
              fontSize: ".825rem",
              fontFamily: "Roboto",
              fontWeight: 400
            },
            value: {
              offsetY: 5,
              color: "#4b9bfa",
              fontSize: ".875rem",
              show: false,
              fontWeight: 500
            }
          }
        }
      },
      labels: ["100%"]
    };
    this.chartOptions1 = {
      chart: {
        height: 170,
        type: "radialBar"
      },
      series: [50],
      colors: ["rgba(13,205,148,1)"],
      states: {
        normal: {
          filter: {
            type: "none"
          }
        },
        hover: {
          filter: {
            type: "none"
          }
        },
        active: {
          filter: {
            type: "none"
          }
        }
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "65%",
            background: "#fff"
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#4b9bfa",
              fontSize: ".625rem",
              show: false
            },
            value: {
              offsetY: 5,
              color: "#4b9bfa",
              fontSize: ".875rem",
              show: true,
              fontWeight: 500
            }
          }
        }
      },
      grid: {
        padding: {
          bottom: -8,
          top: -15
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Status"]
    };
    this.selectedMonthId = "January";
    this.selectedYearId = "2021";
    this.selectedEmpName = "10";
  }
  ngOnInit() {
    this.month$ = this.dataService.getMonth();
    this.year$ = this.dataService.getYear();
    this.empName$ = this.dataService.getEmpName();
  }
  fullDay(modal) {
    this.modalService.open(modal, {});
  }
  halfDay(content1) {
    this.modalService.open(content1, {});
  }
};
_AttendenceListComponent.\u0275fac = function AttendenceListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AttendenceListComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(DataAttendanceByUserService));
};
_AttendenceListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendenceListComponent, selectors: [["app-attendence-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1351, vars: 5, consts: [["content", ""], ["content1", ""], [3, "title", "title2", "path"], [1, "hrattview-buttons"], ["href", "javascript:void(0);", 1, "active", "ms-sm-4"], ["href", "dashboard/hrmdashboards/attendance/attendencebyuser", 1, ""], [1, "row"], [1, "col-xl-12", "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "col-md-6", "col-lg-3"], [1, "form-group"], [1, "form-label"], ["data-trigger", "", "placeholder", "Select Employee", 1, "form-control", "custom-select", "p-0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["data-trigger", "", "placeholder", "Select Month", 1, "form-control", "custom-select", "p-0"], ["data-trigger", "", "placeholder", "Select Year", 1, "form-control", "custom-select", "p-0"], ["value", "16"], [1, "form-group", "mt-2"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-grid"], [1, "card-body", "border-top"], [1, "d-flex", "my-4", "align-items-start"], [1, "me-3"], [1, "d-flex", "flex-wrap", "gap-2"], [1, "badge", "bg-success-transparent", "me-2"], [1, "fe", "fe-check-circle", "text-success", "fs-12", "align-middle"], [1, "badge", "bg-danger-transparent", "me-2"], [1, "fe", "fe-x-circle", "text-danger", "fs-12", "align-middle"], [1, "badge", "bg-warning-transparent", "me-2"], [1, "ri-star-fill", "text-warning", "fs-12", "align-middle"], [1, "badge", "bg-orange-transparent", "me-2"], [1, "ri-contrast-fill", "text-orange", "fs-12", "align-middle"], [1, "row", "mb-2", "gap-2", "gap-lg-0"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mb-0"], ["name", "quantity", "placeholder", "1", "id", "select-countries17", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], [1, "float-end"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "table-responsive", "hr-attlist"], ["id", "hr-attendance", 1, "table", "mb-0", "text-nowrap", "text-md-nowrap", "table-bordered", "border", "custom-table"], [1, "border-bottom-0"], [1, "border-bottom-0", "w-5"], [1, "avatar", "avatar-sm", "me-2", "avatar-rounded"], ["src", "./assets/images/users/1.jpg", "alt", "img"], [1, "mb-0"], [1, "hr-listd"], ["data-bs-toggle", "modal", "data-bs-target", "#presentmodal", 1, "hr-listmodal", 3, "click"], [1, "fe", "fe-check-circle", "text-success"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Sunday", 1, "ri-star-fill", "text-warning"], ["data-bs-toggle", "modal", "data-bs-target", "#halfpresentmodal", 1, "hr-listmodal", 3, "click"], [1, "ri-contrast-fill", "text-orange"], [1, "fe", "fe-x-circle", "text-danger"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#presentmodal", 1, "hr-listmodal"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Republic Day", 1, "ri-star-fill", "text-warning"], [1, "text-primary"], [1, "my-auto", "font-weight-normal", "text-muted"], [1, ""], ["src", "./assets/images/users/9.jpg", "alt", "img"], ["src", "./assets/images/users/2.jpg", "alt", "img"], ["src", "./assets/images/users/10.jpg", "alt", "img"], ["src", "./assets/images/users/3.jpg", "alt", "img"], ["src", "./assets/images/users/11.jpg", "alt", "img"], ["src", "./assets/images/users/4.jpg", "alt", "img"], ["src", "./assets/images/users/12.jpg", "alt", "img"], ["src", "./assets/images/users/5.jpg", "alt", "img"], [1, "mt-4"], [1, "pagination", "justify-content-end", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item", "active"], [1, "page-item"], ["id", "halfpresentmodal"], [1, "modal-header"], [1, "modal-title"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "row", "my-4"], [1, "col-md-4"], [1, "pt-5", "text-center"], [1, "mb-1", "fs-16", "fw-medium"], [1, "text-muted", "fs-14"], ["id", "attendance-details2"], [3, "series", "chart", "colors", "plotOptions", "labels"], [1, "form-group", "mb-3"], ["type", "text", "placeholder", "225.192.145.1", "disabled", "", 1, "form-control"], ["name", "projects", "data-trigger", "", "disabled", "", "data-placeholder", "Select", 1, "form-control", "custom-select"], ["value", ""], [1, "modal-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#editmodal", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "modal-content"], [1, "badge", "bg-orange"], ["data-bs-dismiss", "modal", 1, "btn-close", 3, "click"], ["id", "attendance-details"], [3, "series", "chart", "colors", "plotOptions", "labels", "grid", "stroke"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#halfdayeditmodal", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"]], template: function AttendenceListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 2);
    \u0275\u0275elementStart(1, "div", 3)(2, "a", 4);
    \u0275\u0275text(3, "Attendance Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 5);
    \u0275\u0275text(5, "Attendance By User");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 6)(11, "div", 10)(12, "div", 11)(13, "label", 12);
    \u0275\u0275text(14, "Employee Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ng-select", 13)(16, "ng-option", 14);
    \u0275\u0275text(17, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ng-option", 15);
    \u0275\u0275text(19, "Austin Bell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ng-option", 16);
    \u0275\u0275text(21, "Maria Bower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ng-option", 17);
    \u0275\u0275text(23, "Peter Hill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ng-option", 18);
    \u0275\u0275text(25, "Victoria Lyman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ng-option", 19);
    \u0275\u0275text(27, "Adam Quinn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ng-option", 20);
    \u0275\u0275text(29, "Melanie Coleman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ng-option", 21);
    \u0275\u0275text(31, "Max Wilson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ng-option", 22);
    \u0275\u0275text(33, "Amelia Russell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ng-option", 23);
    \u0275\u0275text(35, "Justin Metcalfe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ng-option", 24);
    \u0275\u0275text(37, "Ryan Young");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-option", 25);
    \u0275\u0275text(39, "Jennifer Hardacre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ng-option", 26);
    \u0275\u0275text(41, "Justin Parr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ng-option", 27);
    \u0275\u0275text(43, "Julia Hodges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "ng-option", 28);
    \u0275\u0275text(45, "Michael Sutherland");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 10)(47, "div", 11)(48, "label", 12);
    \u0275\u0275text(49, "Month:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "ng-select", 29)(51, "ng-option", 14);
    \u0275\u0275text(52, "January");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ng-option", 15);
    \u0275\u0275text(54, "February");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ng-option", 16);
    \u0275\u0275text(56, "March");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ng-option", 17);
    \u0275\u0275text(58, "April");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "ng-option", 18);
    \u0275\u0275text(60, "May");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "ng-option", 19);
    \u0275\u0275text(62, "June");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ng-option", 20);
    \u0275\u0275text(64, "July");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "ng-option", 21);
    \u0275\u0275text(66, "August");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "ng-option", 22);
    \u0275\u0275text(68, "September");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ng-option", 23);
    \u0275\u0275text(70, "October");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ng-option", 24);
    \u0275\u0275text(72, "November");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "ng-option", 25);
    \u0275\u0275text(74, "December");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(75, "div", 10)(76, "div", 11)(77, "label", 12);
    \u0275\u0275text(78, "Year:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "ng-select", 30)(80, "ng-option", 14);
    \u0275\u0275text(81, "2024");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "ng-option", 15);
    \u0275\u0275text(83, "2023");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "ng-option", 16);
    \u0275\u0275text(85, "2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "ng-option", 17);
    \u0275\u0275text(87, "2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "ng-option", 18);
    \u0275\u0275text(89, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "ng-option", 19);
    \u0275\u0275text(91, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "ng-option", 20);
    \u0275\u0275text(93, "2018");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "ng-option", 21);
    \u0275\u0275text(95, "2017");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "ng-option", 22);
    \u0275\u0275text(97, "2016");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "ng-option", 23);
    \u0275\u0275text(99, "2015");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "ng-option", 24);
    \u0275\u0275text(101, "2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "ng-option", 25);
    \u0275\u0275text(103, "2013");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "ng-option", 26);
    \u0275\u0275text(105, "2012");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "ng-option", 27);
    \u0275\u0275text(107, "2011");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "ng-option", 28);
    \u0275\u0275text(109, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "ng-option", 31);
    \u0275\u0275text(111, "2010");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(112, "div", 10)(113, "div", 32);
    \u0275\u0275element(114, "label", 12);
    \u0275\u0275elementStart(115, "a", 33);
    \u0275\u0275text(116, "Search");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(117, "div", 34)(118, "div", 35)(119, "div", 36)(120, "label", 12);
    \u0275\u0275text(121, "Note:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "div", 37)(123, "span", 38);
    \u0275\u0275element(124, "i", 39);
    \u0275\u0275text(125, " ---> Present");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "span", 40);
    \u0275\u0275element(127, "i", 41);
    \u0275\u0275text(128, " ---> Absent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "span", 42);
    \u0275\u0275element(130, "i", 43);
    \u0275\u0275text(131, " ---> Holiday");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "span", 44);
    \u0275\u0275element(133, "i", 45);
    \u0275\u0275text(134, " ---> Half Day");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(135, "div", 46)(136, "div", 47)(137, "div", 48)(138, "span");
    \u0275\u0275text(139, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "div", 49)(141, "div", 50)(142, "ng-select", 51)(143, "ng-option", 52);
    \u0275\u0275text(144, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "ng-option", 15);
    \u0275\u0275text(146, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "ng-option", 16);
    \u0275\u0275text(148, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "ng-option", 17);
    \u0275\u0275text(150, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(151, "span");
    \u0275\u0275text(152, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(153, "div", 47)(154, "div", 53);
    \u0275\u0275element(155, "input", 54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(156, "div", 55)(157, "table", 56)(158, "thead")(159, "tr")(160, "th", 57);
    \u0275\u0275text(161, "Employee Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "th", 58);
    \u0275\u0275text(163, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "th", 58);
    \u0275\u0275text(165, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "th", 58);
    \u0275\u0275text(167, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "th", 58);
    \u0275\u0275text(169, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "th", 58);
    \u0275\u0275text(171, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "th", 58);
    \u0275\u0275text(173, "6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "th", 58);
    \u0275\u0275text(175, "7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "th", 58);
    \u0275\u0275text(177, "8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "th", 58);
    \u0275\u0275text(179, "9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "th", 58);
    \u0275\u0275text(181, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "th", 58);
    \u0275\u0275text(183, "11");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "th", 58);
    \u0275\u0275text(185, "12");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "th", 58);
    \u0275\u0275text(187, "13");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(188, "th", 58);
    \u0275\u0275text(189, "14");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(190, "th", 58);
    \u0275\u0275text(191, "15");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(192, "th", 58);
    \u0275\u0275text(193, "16");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(194, "th", 58);
    \u0275\u0275text(195, "17");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(196, "th", 58);
    \u0275\u0275text(197, "18");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(198, "th", 58);
    \u0275\u0275text(199, "19");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "th", 58);
    \u0275\u0275text(201, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(202, "th", 58);
    \u0275\u0275text(203, "21");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(204, "th", 58);
    \u0275\u0275text(205, "22");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(206, "th", 58);
    \u0275\u0275text(207, "23");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(208, "th", 58);
    \u0275\u0275text(209, "24");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(210, "th", 58);
    \u0275\u0275text(211, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(212, "th", 58);
    \u0275\u0275text(213, "26");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(214, "th", 58);
    \u0275\u0275text(215, "27");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(216, "th", 58);
    \u0275\u0275text(217, "28");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(218, "th", 58);
    \u0275\u0275text(219, "29");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(220, "th", 58);
    \u0275\u0275text(221, "30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(222, "th", 58);
    \u0275\u0275text(223, "31");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "th", 57);
    \u0275\u0275text(225, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(226, "tbody")(227, "tr")(228, "td")(229, "div", 48)(230, "span", 59);
    \u0275\u0275element(231, "img", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(232, "h6", 61);
    \u0275\u0275text(233, "Sukuro Kim ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(234, "td")(235, "div", 62)(236, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_236_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(237, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(238, "td")(239, "div", 62)(240, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_240_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(241, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(242, "td");
    \u0275\u0275element(243, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(244, "td")(245, "div", 62)(246, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_246_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(247, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(248, "td")(249, "div", 62)(250, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_250_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(251, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(252, "td")(253, "div", 62)(254, "a", 66);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_254_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r3 = \u0275\u0275reference(1350);
      return \u0275\u0275resetView(ctx.halfDay(content1_r3));
    });
    \u0275\u0275element(255, "span", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(256, "td")(257, "div", 62)(258, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_258_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(259, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(260, "td")(261, "div", 62)(262, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_262_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(263, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(264, "td")(265, "div", 62)(266, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_266_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(267, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(268, "td");
    \u0275\u0275element(269, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(270, "td")(271, "div", 62)(272, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_272_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(273, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(274, "td")(275, "div", 62)(276, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_276_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(277, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(278, "td");
    \u0275\u0275element(279, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(280, "td");
    \u0275\u0275element(281, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(282, "td");
    \u0275\u0275element(283, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(284, "td");
    \u0275\u0275element(285, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(286, "td");
    \u0275\u0275element(287, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(288, "td")(289, "div", 62)(290, "a", 69);
    \u0275\u0275element(291, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(292, "td")(293, "div", 62)(294, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_294_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(295, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(296, "td")(297, "div", 62)(298, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_298_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(299, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(300, "td")(301, "div", 62)(302, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_302_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(303, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(304, "td")(305, "div", 62)(306, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_306_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(307, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(308, "td")(309, "div", 62)(310, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_310_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(311, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(312, "td");
    \u0275\u0275element(313, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(314, "td")(315, "div", 62)(316, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_316_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(317, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(318, "td");
    \u0275\u0275element(319, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(320, "td")(321, "div", 62)(322, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_322_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(323, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(324, "td")(325, "div", 62)(326, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_326_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(327, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(328, "td")(329, "div", 62)(330, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_330_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(331, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(332, "td")(333, "div", 62)(334, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_334_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(335, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(336, "td")(337, "div", 62)(338, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_338_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(339, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(340, "td")(341, "h6", 61)(342, "span", 71);
    \u0275\u0275text(343, "21");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(344, "span", 72);
    \u0275\u0275text(345, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(346, "span", 73);
    \u0275\u0275text(347, "31");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(348, "tr")(349, "td")(350, "div", 48)(351, "span", 59);
    \u0275\u0275element(352, "img", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(353, "h6", 61);
    \u0275\u0275text(354, "Amelia Russell");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(355, "td")(356, "div", 62)(357, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_357_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(358, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(359, "td")(360, "div", 62)(361, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_361_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(362, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(363, "td");
    \u0275\u0275element(364, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(365, "td")(366, "div", 62)(367, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_367_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(368, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(369, "td")(370, "div", 62)(371, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_371_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(372, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(373, "td")(374, "div", 62)(375, "a", 66);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_375_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r3 = \u0275\u0275reference(1350);
      return \u0275\u0275resetView(ctx.halfDay(content1_r3));
    });
    \u0275\u0275element(376, "span", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(377, "td")(378, "div", 62)(379, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_379_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(380, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(381, "td")(382, "div", 62)(383, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_383_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(384, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(385, "td")(386, "div", 62)(387, "a", 66);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_387_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r3 = \u0275\u0275reference(1350);
      return \u0275\u0275resetView(ctx.halfDay(content1_r3));
    });
    \u0275\u0275element(388, "span", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(389, "td");
    \u0275\u0275element(390, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(391, "td")(392, "div", 62)(393, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_393_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(394, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(395, "td")(396, "div", 62)(397, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_397_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(398, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(399, "td")(400, "div", 62)(401, "a", 66);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_401_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r3 = \u0275\u0275reference(1350);
      return \u0275\u0275resetView(ctx.halfDay(content1_r3));
    });
    \u0275\u0275element(402, "span", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(403, "td")(404, "div", 62)(405, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_405_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(406, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(407, "td")(408, "div", 62)(409, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_409_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(410, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(411, "td")(412, "div", 62)(413, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_413_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(414, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(415, "td");
    \u0275\u0275element(416, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(417, "td")(418, "div", 62)(419, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_419_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(420, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(421, "td")(422, "div", 62)(423, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_423_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(424, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(425, "td")(426, "div", 62)(427, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_427_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(428, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(429, "td")(430, "div", 62)(431, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_431_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(432, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(433, "td")(434, "div", 62)(435, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_435_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(436, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(437, "td")(438, "div", 62)(439, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_439_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(440, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(441, "td");
    \u0275\u0275element(442, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(443, "td")(444, "div", 62)(445, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_445_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(446, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(447, "td");
    \u0275\u0275element(448, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(449, "td")(450, "div", 62)(451, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_451_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(452, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(453, "td")(454, "div", 62)(455, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_455_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(456, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(457, "td")(458, "div", 62)(459, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_459_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(460, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(461, "td")(462, "div", 62)(463, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_463_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(464, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(465, "td")(466, "div", 62)(467, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_467_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(468, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(469, "td")(470, "h6", 61)(471, "span", 71);
    \u0275\u0275text(472, "24");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(473, "span", 72);
    \u0275\u0275text(474, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(475, "span", 73);
    \u0275\u0275text(476, "31");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(477, "tr")(478, "td")(479, "div", 48)(480, "span", 59);
    \u0275\u0275element(481, "img", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(482, "h6", 61);
    \u0275\u0275text(483, "Maria Bower");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(484, "td")(485, "div", 62)(486, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_486_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(487, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(488, "td")(489, "div", 62)(490, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_490_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(491, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(492, "td");
    \u0275\u0275element(493, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(494, "td");
    \u0275\u0275element(495, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(496, "td")(497, "div", 62)(498, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_498_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(499, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(500, "td")(501, "div", 62)(502, "a", 66);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_502_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r3 = \u0275\u0275reference(1350);
      return \u0275\u0275resetView(ctx.halfDay(content1_r3));
    });
    \u0275\u0275element(503, "span", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(504, "td")(505, "div", 62)(506, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_506_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(507, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(508, "td")(509, "div", 62)(510, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_510_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(511, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(512, "td")(513, "div", 62)(514, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_514_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(515, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(516, "td");
    \u0275\u0275element(517, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(518, "td")(519, "div", 62)(520, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_520_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(521, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(522, "td")(523, "div", 62)(524, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_524_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(525, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(526, "td");
    \u0275\u0275element(527, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(528, "td");
    \u0275\u0275element(529, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(530, "td");
    \u0275\u0275element(531, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(532, "td");
    \u0275\u0275element(533, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(534, "td");
    \u0275\u0275element(535, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(536, "td")(537, "div", 62)(538, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_538_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(539, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(540, "td");
    \u0275\u0275element(541, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(542, "td");
    \u0275\u0275element(543, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(544, "td");
    \u0275\u0275element(545, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(546, "td")(547, "div", 62)(548, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_548_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(549, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(550, "td")(551, "div", 62)(552, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_552_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(553, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(554, "td");
    \u0275\u0275element(555, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(556, "td")(557, "div", 62)(558, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_558_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(559, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(560, "td");
    \u0275\u0275element(561, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(562, "td")(563, "div", 62)(564, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_564_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(565, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(566, "td")(567, "div", 62)(568, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_568_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(569, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(570, "td")(571, "div", 62)(572, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_572_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(573, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(574, "td")(575, "div", 62)(576, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_576_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(577, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(578, "td")(579, "div", 62)(580, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_580_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(581, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(582, "td")(583, "h6", 61)(584, "span", 71);
    \u0275\u0275text(585, "17");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(586, "span", 72);
    \u0275\u0275text(587, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(588, "span", 73);
    \u0275\u0275text(589, "31");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(590, "tr")(591, "td")(592, "div", 48)(593, "span", 59);
    \u0275\u0275element(594, "img", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(595, "h6", 61);
    \u0275\u0275text(596, "Peter Hill");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(597, "td")(598, "div", 62)(599, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_599_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(600, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(601, "td")(602, "div", 62)(603, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_603_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(604, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(605, "td");
    \u0275\u0275element(606, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(607, "td")(608, "div", 62)(609, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_609_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(610, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(611, "td")(612, "div", 62)(613, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_613_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(614, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(615, "td")(616, "div", 62)(617, "a", 66);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_617_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r3 = \u0275\u0275reference(1350);
      return \u0275\u0275resetView(ctx.halfDay(content1_r3));
    });
    \u0275\u0275element(618, "span", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(619, "td")(620, "div", 62)(621, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_621_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(622, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(623, "td")(624, "div", 62)(625, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_625_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(626, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(627, "td")(628, "div", 62)(629, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_629_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(630, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(631, "td");
    \u0275\u0275element(632, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(633, "td")(634, "div", 62)(635, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_635_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(636, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(637, "td")(638, "div", 62)(639, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_639_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(640, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(641, "td")(642, "div", 62)(643, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_643_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(644, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(645, "td")(646, "div", 62)(647, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_647_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(648, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(649, "td")(650, "div", 62)(651, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_651_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(652, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(653, "td")(654, "div", 62)(655, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_655_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(656, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(657, "td");
    \u0275\u0275element(658, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(659, "td")(660, "div", 62)(661, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_661_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(662, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(663, "td")(664, "div", 62)(665, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_665_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(666, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(667, "td")(668, "div", 62)(669, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_669_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(670, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(671, "td")(672, "div", 62)(673, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_673_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(674, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(675, "td")(676, "div", 62)(677, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_677_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(678, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(679, "td")(680, "div", 62)(681, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_681_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(682, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(683, "td");
    \u0275\u0275element(684, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(685, "td")(686, "div", 62)(687, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_687_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(688, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(689, "td");
    \u0275\u0275element(690, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(691, "td")(692, "div", 62)(693, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_693_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(694, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(695, "td")(696, "div", 62)(697, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_697_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(698, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(699, "td")(700, "div", 62)(701, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_701_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(702, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(703, "td")(704, "div", 62)(705, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_705_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(706, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(707, "td")(708, "div", 62)(709, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_709_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(710, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(711, "td")(712, "h6", 61)(713, "span", 71);
    \u0275\u0275text(714, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(715, "span", 72);
    \u0275\u0275text(716, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(717, "span", 73);
    \u0275\u0275text(718, "31");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(719, "tr")(720, "td")(721, "div", 48)(722, "span", 59);
    \u0275\u0275element(723, "img", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(724, "h6", 61);
    \u0275\u0275text(725, "Victoria Layman");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(726, "td")(727, "div", 62)(728, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_728_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(729, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(730, "td")(731, "div", 62)(732, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_732_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(733, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(734, "td");
    \u0275\u0275element(735, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(736, "td")(737, "div", 62)(738, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_738_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(739, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(740, "td")(741, "div", 62)(742, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_742_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(743, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(744, "td")(745, "div", 62)(746, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_746_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(747, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(748, "td")(749, "div", 62)(750, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_750_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(751, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(752, "td")(753, "div", 62)(754, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_754_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(755, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(756, "td")(757, "div", 62)(758, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_758_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(759, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(760, "td");
    \u0275\u0275element(761, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(762, "td")(763, "div", 62)(764, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_764_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(765, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(766, "td")(767, "div", 62)(768, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_768_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(769, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(770, "td")(771, "div", 62)(772, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_772_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(773, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(774, "td")(775, "div", 62)(776, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_776_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(777, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(778, "td")(779, "div", 62)(780, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_780_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(781, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(782, "td")(783, "div", 62)(784, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_784_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(785, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(786, "td");
    \u0275\u0275element(787, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(788, "td")(789, "div", 62)(790, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_790_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(791, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(792, "td")(793, "div", 62)(794, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_794_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(795, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(796, "td")(797, "div", 62)(798, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_798_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(799, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(800, "td")(801, "div", 62)(802, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_802_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(803, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(804, "td")(805, "div", 62)(806, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_806_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(807, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(808, "td")(809, "div", 62)(810, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_810_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(811, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(812, "td");
    \u0275\u0275element(813, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(814, "td")(815, "div", 62)(816, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_816_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(817, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(818, "td");
    \u0275\u0275element(819, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(820, "td")(821, "div", 62)(822, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_822_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(823, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(824, "td")(825, "div", 62)(826, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_826_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(827, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(828, "td")(829, "div", 62)(830, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_830_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(831, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(832, "td")(833, "div", 62)(834, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_834_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(835, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(836, "td")(837, "div", 62)(838, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_838_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(839, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(840, "td")(841, "h6", 61)(842, "span", 71);
    \u0275\u0275text(843, "26");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(844, "span", 72);
    \u0275\u0275text(845, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(846, "span", 73);
    \u0275\u0275text(847, "31");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(848, "tr")(849, "td")(850, "div", 48)(851, "span", 59);
    \u0275\u0275element(852, "img", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(853, "h6", 61);
    \u0275\u0275text(854, "Adam Quinn");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(855, "td")(856, "div", 62)(857, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_857_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(858, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(859, "td")(860, "div", 62)(861, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_861_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(862, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(863, "td");
    \u0275\u0275element(864, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(865, "td")(866, "div", 62)(867, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_867_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(868, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(869, "td")(870, "div", 62)(871, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_871_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(872, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(873, "td");
    \u0275\u0275element(874, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(875, "td")(876, "div", 62)(877, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_877_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(878, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(879, "td")(880, "div", 62)(881, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_881_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(882, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(883, "td")(884, "div", 62)(885, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_885_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(886, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(887, "td");
    \u0275\u0275element(888, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(889, "td")(890, "div", 62)(891, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_891_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(892, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(893, "td")(894, "div", 62)(895, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_895_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(896, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(897, "td");
    \u0275\u0275element(898, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(899, "td");
    \u0275\u0275element(900, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(901, "td");
    \u0275\u0275element(902, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(903, "td");
    \u0275\u0275element(904, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(905, "td");
    \u0275\u0275element(906, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(907, "td")(908, "div", 62)(909, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_909_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(910, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(911, "td")(912, "div", 62)(913, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_913_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(914, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(915, "td");
    \u0275\u0275element(916, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(917, "td");
    \u0275\u0275element(918, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(919, "td");
    \u0275\u0275element(920, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(921, "td")(922, "div", 62)(923, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_923_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(924, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(925, "td");
    \u0275\u0275element(926, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(927, "td")(928, "div", 62)(929, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_929_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(930, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(931, "td");
    \u0275\u0275element(932, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(933, "td");
    \u0275\u0275element(934, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(935, "td");
    \u0275\u0275element(936, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(937, "td")(938, "div", 62)(939, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_939_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(940, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(941, "td")(942, "div", 62)(943, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_943_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(944, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(945, "td")(946, "div", 62)(947, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_947_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(948, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(949, "td")(950, "h6", 61)(951, "span", 71);
    \u0275\u0275text(952, "16");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(953, "span", 72);
    \u0275\u0275text(954, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(955, "span", 73);
    \u0275\u0275text(956, "31");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(957, "tr")(958, "td")(959, "div", 48)(960, "span", 59);
    \u0275\u0275element(961, "img", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(962, "h6", 61);
    \u0275\u0275text(963, "Malane Coleman");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(964, "td")(965, "div", 62)(966, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_966_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(967, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(968, "td")(969, "div", 62)(970, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_970_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(971, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(972, "td");
    \u0275\u0275element(973, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(974, "td")(975, "div", 62)(976, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_976_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(977, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(978, "td")(979, "div", 62)(980, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_980_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(981, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(982, "td")(983, "div", 62)(984, "a", 66);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_984_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r3 = \u0275\u0275reference(1350);
      return \u0275\u0275resetView(ctx.halfDay(content1_r3));
    });
    \u0275\u0275element(985, "span", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(986, "td")(987, "div", 62)(988, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_988_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(989, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(990, "td")(991, "div", 62)(992, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_992_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(993, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(994, "td")(995, "div", 62)(996, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_996_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(997, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(998, "td");
    \u0275\u0275element(999, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1e3, "td")(1001, "div", 62)(1002, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1002_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1003, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1004, "td")(1005, "div", 62)(1006, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1006_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1007, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1008, "td");
    \u0275\u0275element(1009, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1010, "td");
    \u0275\u0275element(1011, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1012, "td")(1013, "div", 62)(1014, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1014_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1015, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1016, "td")(1017, "div", 62)(1018, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1018_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1019, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1020, "td");
    \u0275\u0275element(1021, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1022, "td")(1023, "div", 62)(1024, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1024_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1025, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1026, "td")(1027, "div", 62)(1028, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1028_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1029, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1030, "td")(1031, "div", 62)(1032, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1032_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1033, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1034, "td")(1035, "div", 62)(1036, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1036_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1037, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1038, "td")(1039, "div", 62)(1040, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1040_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1041, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1042, "td")(1043, "div", 62)(1044, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1044_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1045, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1046, "td");
    \u0275\u0275element(1047, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1048, "td")(1049, "div", 62)(1050, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1050_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1051, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1052, "td");
    \u0275\u0275element(1053, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1054, "td")(1055, "div", 62)(1056, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1056_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1057, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1058, "td")(1059, "div", 62)(1060, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1060_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1061, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1062, "td")(1063, "div", 62)(1064, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1064_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1065, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1066, "td")(1067, "div", 62)(1068, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1068_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1069, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1070, "td")(1071, "div", 62)(1072, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1072_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1073, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1074, "td")(1075, "h6", 61)(1076, "span", 71);
    \u0275\u0275text(1077, "23");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1078, "span", 72);
    \u0275\u0275text(1079, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1080, "span", 73);
    \u0275\u0275text(1081, "31");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(1082, "tr")(1083, "td")(1084, "div", 48)(1085, "span", 59);
    \u0275\u0275element(1086, "img", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1087, "h6", 61);
    \u0275\u0275text(1088, "Max Wilson");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1089, "td")(1090, "div", 62)(1091, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1091_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1092, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1093, "td")(1094, "div", 62)(1095, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1095_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1096, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1097, "td");
    \u0275\u0275element(1098, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1099, "td")(1100, "div", 62)(1101, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1101_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1102, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1103, "td")(1104, "div", 62)(1105, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1105_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1106, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1107, "td")(1108, "div", 62)(1109, "a", 66);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1109_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r3 = \u0275\u0275reference(1350);
      return \u0275\u0275resetView(ctx.halfDay(content1_r3));
    });
    \u0275\u0275element(1110, "span", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1111, "td")(1112, "div", 62)(1113, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1113_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1114, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1115, "td")(1116, "div", 62)(1117, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1117_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1118, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1119, "td")(1120, "div", 62)(1121, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1121_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1122, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1123, "td");
    \u0275\u0275element(1124, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1125, "td")(1126, "div", 62)(1127, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1127_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1128, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1129, "td")(1130, "div", 62)(1131, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1131_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1132, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1133, "td");
    \u0275\u0275element(1134, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1135, "td");
    \u0275\u0275element(1136, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1137, "td");
    \u0275\u0275element(1138, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1139, "td");
    \u0275\u0275element(1140, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1141, "td");
    \u0275\u0275element(1142, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1143, "td")(1144, "div", 62)(1145, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1145_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1146, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1147, "td")(1148, "div", 62)(1149, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1149_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1150, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1151, "td")(1152, "div", 62)(1153, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1153_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1154, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1155, "td")(1156, "div", 62)(1157, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1157_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1158, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1159, "td")(1160, "div", 62)(1161, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1161_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1162, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1163, "td")(1164, "div", 62)(1165, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1165_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1166, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1167, "td");
    \u0275\u0275element(1168, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1169, "td")(1170, "div", 62)(1171, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1171_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1172, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1173, "td");
    \u0275\u0275element(1174, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1175, "td")(1176, "div", 62)(1177, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1177_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1178, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1179, "td")(1180, "div", 62)(1181, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1181_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1182, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1183, "td")(1184, "div", 62)(1185, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1185_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1186, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1187, "td")(1188, "div", 62)(1189, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1189_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1190, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1191, "td")(1192, "div", 62)(1193, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1193_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1194, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1195, "td")(1196, "h6", 61)(1197, "span", 71);
    \u0275\u0275text(1198, "21");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1199, "span", 72);
    \u0275\u0275text(1200, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1201, "span", 73);
    \u0275\u0275text(1202, "31");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(1203, "tr")(1204, "td")(1205, "div", 48)(1206, "span", 59);
    \u0275\u0275element(1207, "img", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1208, "h6", 61);
    \u0275\u0275text(1209, "Amelia Russell");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1210, "td")(1211, "div", 62)(1212, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1212_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1213, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1214, "td")(1215, "div", 62)(1216, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1216_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1217, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1218, "td");
    \u0275\u0275element(1219, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1220, "td")(1221, "div", 62)(1222, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1222_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1223, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1224, "td")(1225, "div", 62)(1226, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1226_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1227, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1228, "td")(1229, "div", 62)(1230, "a", 66);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1230_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r3 = \u0275\u0275reference(1350);
      return \u0275\u0275resetView(ctx.halfDay(content1_r3));
    });
    \u0275\u0275element(1231, "span", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1232, "td")(1233, "div", 62)(1234, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1234_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1235, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1236, "td")(1237, "div", 62)(1238, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1238_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1239, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1240, "td")(1241, "div", 62)(1242, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1242_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1243, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1244, "td");
    \u0275\u0275element(1245, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1246, "td")(1247, "div", 62)(1248, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1248_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1249, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1250, "td")(1251, "div", 62)(1252, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1252_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1253, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1254, "td");
    \u0275\u0275element(1255, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1256, "td")(1257, "div", 62)(1258, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1258_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1259, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1260, "td")(1261, "div", 62)(1262, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1262_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1263, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1264, "td")(1265, "div", 62)(1266, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1266_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1267, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1268, "td");
    \u0275\u0275element(1269, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1270, "td")(1271, "div", 62)(1272, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1272_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1273, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1274, "td")(1275, "div", 62)(1276, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1276_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1277, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1278, "td")(1279, "div", 62)(1280, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1280_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1281, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1282, "td")(1283, "div", 62)(1284, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1284_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1285, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1286, "td")(1287, "div", 62)(1288, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1288_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1289, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1290, "td")(1291, "div", 62)(1292, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1292_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1293, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1294, "td");
    \u0275\u0275element(1295, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1296, "td")(1297, "div", 62)(1298, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1298_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1299, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1300, "td");
    \u0275\u0275element(1301, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1302, "td")(1303, "div", 62)(1304, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1304_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1305, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1306, "td")(1307, "div", 62)(1308, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1308_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1309, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1310, "td")(1311, "div", 62)(1312, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1312_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1313, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1314, "td")(1315, "div", 62)(1316, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1316_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1317, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1318, "td")(1319, "div", 62)(1320, "a", 63);
    \u0275\u0275listener("click", function AttendenceListComponent_Template_a_click_1320_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(1348);
      return \u0275\u0275resetView(ctx.fullDay(content_r2));
    });
    \u0275\u0275element(1321, "span", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1322, "td")(1323, "h6", 61)(1324, "span", 71);
    \u0275\u0275text(1325, "24");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1326, "span", 72);
    \u0275\u0275text(1327, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1328, "span", 73);
    \u0275\u0275text(1329, "31");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(1330, "nav", 82)(1331, "ul", 83)(1332, "li", 84)(1333, "a", 85);
    \u0275\u0275text(1334, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1335, "li", 86)(1336, "a", 85);
    \u0275\u0275text(1337, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1338, "li", 87)(1339, "a", 85);
    \u0275\u0275text(1340, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1341, "li", 87)(1342, "a", 85);
    \u0275\u0275text(1343, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1344, "li", 87)(1345, "a", 85);
    \u0275\u0275text(1346, "Next");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(1347, AttendenceListComponent_ng_template_1347_Template, 42, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(1349, AttendenceListComponent_ng_template_1349_Template, 45, 7, "ng-template", 88, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275classMap("btn btn-primary");
    \u0275\u0275property("title", "Attendance List")("title2", "Mark Attendance")("path", "/dashboard/hrmdashboards/attendance/attendence-mark");
  }
}, dependencies: [NgbModule, NgSelectModule, NgSelectComponent, NgOptionComponent, NgCircleProgressModule, RouterModule, NgApexchartsModule, ChartComponent, SharedModule, HrDashboardPageHeaderComponent], styles: ["\n\n  .timepicker-backdrop-overlay, \n  .timepicker-overlay {\n  z-index: 999999 !important;\n}\n/*# sourceMappingURL=attendence-list.component.css.map */"], changeDetection: 0 });
var AttendenceListComponent = _AttendenceListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendenceListComponent, { className: "AttendenceListComponent" });
})();
var NgbdModal1Content = class {
  constructor(modalService, activeModal) {
    this.modalService = modalService;
    this.activeModal = activeModal;
  }
  second() {
    this.modalService.open(NgbdModal2Content, {
      size: "lg"
    });
  }
};
var NgbdModal2Content = class {
  constructor(activeModal) {
    this.activeModal = activeModal;
  }
};
var NgbdModalHalfDayContent = class {
  constructor(modalService, activeModal) {
    this.modalService = modalService;
    this.activeModal = activeModal;
  }
  second() {
    this.modalService.open(NgbdModalHalfDaySecondContent, {
      size: "lg"
    });
  }
};
var NgbdModalHalfDaySecondContent = class {
  constructor(activeModal) {
    this.activeModal = activeModal;
  }
};
export {
  AttendenceListComponent,
  NgbdModal1Content,
  NgbdModal2Content,
  NgbdModalHalfDayContent,
  NgbdModalHalfDaySecondContent
};
//# sourceMappingURL=attendence-list.component-7RMWAXXF.js.map
