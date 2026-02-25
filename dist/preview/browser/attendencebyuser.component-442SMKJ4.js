import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-BFCIYJJG.js";
import {
  SortableHeader
} from "./chunk-A5TGRXQK.js";
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
import {
  FlatpickrDefaults,
  FlatpickrDirective,
  FlatpickrModule,
  esm_default
} from "./chunk-ZSUERINM.js";
import {
  FormsModule,
  NgSelectOption,
  NgbModal,
  NgbModule,
  ɵNgSelectMultipleOption
} from "./chunk-47LBZ5ZO.js";
import {
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/hrmdashboards/attendance/attendencebyuser/attendencebyuser.component.ts
function AttendencebyuserComponent_For_203_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "div", 69);
    \u0275\u0275element(14, "div")(15, "div");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "a", 70);
    \u0275\u0275listener("click", function AttendencebyuserComponent_For_203_Template_a_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPresentModal());
    });
    \u0275\u0275element(18, "i", 71);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.Date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.Day);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge bg-", data_r3.StatusBg, "-transparent");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r3.Status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.ClockIn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.ClockOut);
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("progress-bar bg-", data_r3.ProgressBg, "");
    \u0275\u0275styleProp("width", data_r3.Progress, "%");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("progress-bar bg-", data_r3.Progress1Bg, "");
    \u0275\u0275styleProp("width", data_r3.Progress1, "%");
  }
}
function AttendencebyuserComponent_Conditional_221_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 67);
  }
}
function AttendencebyuserComponent_Conditional_222_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 72)(2, "div", 73)(3, "div", 74)(4, "h5", 75);
    \u0275\u0275text(5, "Attendance Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 76);
    \u0275\u0275listener("click", function AttendencebyuserComponent_Conditional_222_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePresentModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 77)(8, "div", 78)(9, "div", 79)(10, "div", 80)(11, "h6", 81);
    \u0275\u0275text(12, "09:30 AM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small", 82);
    \u0275\u0275text(14, "Clock In");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 79)(16, "div", 83);
    \u0275\u0275element(17, "apx-chart", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 79)(19, "div", 80)(20, "h6", 81);
    \u0275\u0275text(21, "06:30 PM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "small", 82);
    \u0275\u0275text(23, "Clock Out");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 85)(25, "label", 21);
    \u0275\u0275text(26, "IP Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20)(29, "label", 21);
    \u0275\u0275text(30, "Working Form");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ng-select", 87)(32, "ng-option", 88);
    \u0275\u0275text(33, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ng-option", 23);
    \u0275\u0275text(35, "Office");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ng-option", 24);
    \u0275\u0275text(37, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-option", 25);
    \u0275\u0275text(39, "Others");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 89)(41, "a", 90);
    \u0275\u0275listener("click", function AttendencebyuserComponent_Conditional_222_Template_a_click_41_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePresentModal());
    });
    \u0275\u0275text(42, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "a", 91);
    \u0275\u0275listener("click", function AttendencebyuserComponent_Conditional_222_Template_a_click_43_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal());
    });
    \u0275\u0275text(44, "Edit");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("series", ctx_r1.chartOptions.series)("chart", ctx_r1.chartOptions.chart)("colors", ctx_r1.chartOptions.colors)("plotOptions", ctx_r1.chartOptions.plotOptions)("labels", ctx_r1.chartOptions.labels);
  }
}
function AttendencebyuserComponent_Conditional_223_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 72)(2, "div", 73)(3, "div", 74)(4, "h5", 75);
    \u0275\u0275text(5, "Attendance Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 76);
    \u0275\u0275listener("click", function AttendencebyuserComponent_Conditional_223_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 77)(8, "div", 4)(9, "div", 92)(10, "div", 85)(11, "label", 21);
    \u0275\u0275text(12, "Clock In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 38)(14, "div", 39);
    \u0275\u0275element(15, "i", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 94);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 79)(18, "div", 95);
    \u0275\u0275element(19, "input", 96);
    \u0275\u0275elementStart(20, "label", 97);
    \u0275\u0275text(21, "Late");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 4)(23, "div", 92)(24, "div", 85)(25, "label", 21);
    \u0275\u0275text(26, "Clock Out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 38)(28, "div", 39);
    \u0275\u0275element(29, "i", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 98);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 79)(32, "div", 95);
    \u0275\u0275element(33, "input", 99);
    \u0275\u0275elementStart(34, "label", 100);
    \u0275\u0275text(35, "Half Day");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 85)(37, "label", 21);
    \u0275\u0275text(38, "IP Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 85)(41, "label", 21);
    \u0275\u0275text(42, "Working Form");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "select", 101)(44, "option", 88);
    \u0275\u0275text(45, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 23);
    \u0275\u0275text(47, "Office");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 24);
    \u0275\u0275text(49, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 25);
    \u0275\u0275text(51, "Others");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 102)(53, "div")(54, "a", 103);
    \u0275\u0275listener("click", function AttendencebyuserComponent_Conditional_223_Template_a_click_54_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToPresentModal());
    });
    \u0275\u0275element(55, "i", 104);
    \u0275\u0275text(56, "Back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 105)(58, "a", 90);
    \u0275\u0275listener("click", function AttendencebyuserComponent_Conditional_223_Template_a_click_58_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditModal());
    });
    \u0275\u0275text(59, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "a", 106);
    \u0275\u0275text(61, "Save");
    \u0275\u0275elementEnd()()()()()();
  }
}
var _AttendencebyuserComponent = class _AttendencebyuserComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.chartOptions = {
      chart: {
        height: 280,
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
      labels: ["09:00 hrs"]
    };
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
    this.selectedMonthId = "January";
    this.selectedYearId = "2021";
    this.selectedEmpName = "10";
    this.showPresentModal = false;
    this.showEditModal = false;
    this.tableData = [
      {
        Date: "28-01-2021",
        Day: "Thursday",
        Status: "Present",
        StatusBg: "success",
        ClockIn: "09:30 AM",
        ClockOut: "06:30 PM",
        Progress: "100",
        ProgressBg: "success",
        Progress1: ""
      },
      {
        Date: "27-01-2021",
        Day: "Wednesday",
        Status: "Present",
        StatusBg: "success",
        ClockIn: "09:30 AM",
        ClockOut: "06:30 PM",
        Progress: "100",
        ProgressBg: "success",
        Progress1: ""
      },
      {
        Date: "26-01-2021",
        Day: "Tuesday",
        Status: "Holiday (Republic Day)",
        StatusBg: "pink",
        ClockIn: "--",
        ClockOut: "--",
        Progress: "",
        Progress1: ""
      },
      {
        Date: "25-01-2021",
        Day: "Monday",
        Status: "Late",
        StatusBg: "danger",
        ClockIn: "09:50 AM",
        ClockOut: "06:30 PM",
        Progress: "80",
        Progress1: "20",
        ProgressBg: "success",
        Progress1Bg: "danger"
      },
      {
        Date: "24-01-2021",
        Day: "Sunday",
        Status: "Holiday (Sunday)",
        StatusBg: "pink",
        ClockIn: "--",
        ClockOut: "--",
        Progress: "100",
        ProgressBg: "light",
        Progress1: ""
      },
      {
        Date: "22-01-2021",
        Day: "Friday",
        Status: "Present",
        StatusBg: "success",
        ClockIn: "09:30 AM",
        ClockOut: "06:30 PM",
        Progress: "100",
        ProgressBg: "success",
        Progress1: ""
      },
      {
        Date: "21-01-2021",
        Day: "Thursday",
        Status: "Present",
        StatusBg: "success",
        ClockIn: "09:30 AM",
        ClockOut: "06:30 PM",
        Progress: "100",
        ProgressBg: "success",
        Progress1: ""
      },
      {
        Date: "20-01-2021",
        Day: "Wednesday",
        Status: "Present",
        StatusBg: "success",
        ClockIn: "09:30 AM",
        ClockOut: "06:30 PM",
        Progress: "100",
        ProgressBg: "success",
        Progress1: ""
      },
      {
        Date: "19-01-2021",
        Day: "Tuesday",
        Status: "Present",
        StatusBg: "success",
        ClockIn: "09:30 AM",
        ClockOut: "06:30 PM",
        Progress: "100",
        ProgressBg: "success",
        Progress1: ""
      }
    ];
  }
  open(content) {
    this.modalService.open(content, { windowClass: "modalCusSty" });
  }
  ngOnInit() {
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i"
    };
    esm_default("#inlinetime", this.flatpickrOptions);
    this.flatpickrOptions = {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      // Specify the format you want
      defaultDate: "2023-11-07 14:30"
      // Set the default/preloaded time (adjust this to your desired time)
    };
    esm_default("#pretime", this.flatpickrOptions);
  }
  onSort({ column, direction }) {
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });
  }
  deleteData(d) {
    this.attendanceByUser$.subscribe((result) => {
      const index = result.indexOf(d);
      result.splice(index, 1);
    });
  }
  openPresentModal() {
    this.showPresentModal = true;
  }
  closePresentModal() {
    this.showPresentModal = false;
  }
  openEditModal() {
    this.closePresentModal();
    this.showEditModal = true;
  }
  closeEditModal() {
    this.showEditModal = false;
  }
  backToPresentModal() {
    this.closeEditModal();
    this.openPresentModal();
  }
};
_AttendencebyuserComponent.\u0275fac = function AttendencebyuserComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AttendencebyuserComponent)(\u0275\u0275directiveInject(NgbModal));
};
_AttendencebyuserComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendencebyuserComponent, selectors: [["app-attendencebyuser"]], viewQuery: function AttendencebyuserComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(SortableHeader, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headers = _t);
  }
}, standalone: true, features: [\u0275\u0275ProvidersFeature([
  FlatpickrDefaults
]), \u0275\u0275StandaloneFeature], decls: 224, vars: 8, consts: [[3, "title", "title2", "path"], [1, "hrattview-buttons"], ["routerLink", "/dashboard/hrmdashboards/attendance/attendence-list", 1, "ms-sm-4"], ["href", "javascript:void(0);", 1, "active"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "row", "mb-0", "pb-0"], [1, "col-md-6", "col-lg-2", "col-sm-6", "text-center", "py-4"], [1, "avatar", "avatar-md", "rounded-3", "fs-20", "bg-primary-transparent"], [1, "mb-0", "mt-3"], [1, "avatar", "avatar-md", "rounded-3", "fs-20", "bg-success-transparent"], [1, "avatar", "avatar-md", "rounded-3", "fs-20", "bg-danger-transparent"], [1, "avatar", "avatar-md", "rounded-3", "fs-20", "bg-warning-transparent"], [1, "avatar", "avatar-md", "rounded-3", "fs-20", "bg-orange-transparent"], [1, "avatar", "avatar-md", "rounded-3", "fs-20", "bg-pink-transparent"], [1, "row", "mt-4"], [1, "col-md-12", "col-xl-5"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], ["data-trigger", "", "placeholder", "Faith Harris", 1, "form-control", "custom-select", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["type", "text", "mwlFlatpickr", "", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], ["data-trigger", "", "placeholder", "January", 1, "form-control", "custom-select", "p-0"], ["name", "attendance", "data-trigger", "", "placeholder", "2021", 1, "form-control", "custom-select", "p-0"], ["value", "1"], ["value", "16"], [1, "col-md-12", "col-xl-2"], [1, "form-group", "mt-2"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-grid"], [1, "card-body", "border-top"], [1, "row", "mb-2", "gap-1", "gap-lg-0"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mb-0"], ["name", "quantity", "id", "select-countries17", "placeholder", "1", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], [1, "float-end"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "table-responsive"], ["id", "emp-attendance", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom"], [1, "border-bottom-0"], [1, "mt-4"], [1, "pagination", "justify-content-end", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item", "active"], [1, "page-item"], [1, "modal-backdrop"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "d-block"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "progress-sm", "progress-animate"], ["data-bs-toggle", "modal", "data-bs-target", "#presentmodal", 1, "btn", "btn-light", "btn-icon", 3, "click"], ["data-bs-toggle", "tooltip", "data-original-title", "View", 1, "fe", "fe-eye"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "row", "mb-4", "mt-1"], [1, "col-md-4"], [1, "pt-5", "text-center"], [1, "mb-1", "fs-16", "fw-medium"], [1, "text-muted", "fs-14"], ["id", "attendance-details2"], [3, "series", "chart", "colors", "plotOptions", "labels"], [1, "form-group", "mb-3"], ["type", "text", "placeholder", "225.192.145.1", "disabled", "", 1, "form-control"], ["name", "projects", "data-trigger", "", "disabled", "", "placeholder", "Select", 1, "form-control", "custom-select", "p-0"], ["value", ""], [1, "modal-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-primary", 3, "click"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", 3, "click"], [1, "col-md-8"], [1, "ri-time-line"], ["type", "text", "value", "9:30 AM", 1, "form-control", "time-picker"], [1, "form-check", "form-check-lg", "form-switch", "mt-4"], ["type", "checkbox", "role", "switch", "id", "switch-md1", 1, "form-check-input"], ["for", "switch-md1", 1, "form-check-label"], ["type", "text", "value", "06:30 PM", 1, "form-control", "time-picker"], ["type", "checkbox", "role", "switch", "id", "switch-md", 1, "form-check-input"], ["for", "switch-md", 1, "form-check-label"], ["name", "projects", "data-trigger", "", "disabled", "", "data-placeholder", "Select", 1, "form-control", "custom-select"], [1, "modal-footer", "d-flex"], ["href", "javascript:void(0);", 1, "btn", "btn-light", 3, "click"], [1, "feather", "feather-arrow-left", "me-1"], [1, "ms-auto"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"]], template: function AttendencebyuserComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "a", 2);
    \u0275\u0275text(3, "Attendance Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 3);
    \u0275\u0275text(5, "Attendance By User");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "span", 10);
    \u0275\u0275text(13, "31");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h5", 11);
    \u0275\u0275text(15, "Total Working Days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 9)(17, "span", 12);
    \u0275\u0275text(18, "24");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "h5", 11);
    \u0275\u0275text(20, "Present Days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 9)(22, "span", 13);
    \u0275\u0275text(23, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "h5", 11);
    \u0275\u0275text(25, "Absent Days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 9)(27, "span", 14);
    \u0275\u0275text(28, "0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "h5", 11);
    \u0275\u0275text(30, "Half Days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 9)(32, "span", 15);
    \u0275\u0275text(33, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "h5", 11);
    \u0275\u0275text(35, "Late Days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 9)(37, "span", 16);
    \u0275\u0275text(38, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "h5", 11);
    \u0275\u0275text(40, "Holidays");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 17)(42, "div", 18)(43, "div", 4)(44, "div", 19)(45, "div", 20)(46, "label", 21);
    \u0275\u0275text(47, "Employee Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "ng-select", 22)(49, "ng-option", 23);
    \u0275\u0275text(50, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ng-option", 24);
    \u0275\u0275text(52, "Austin Bell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ng-option", 25);
    \u0275\u0275text(54, "Maria Bower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ng-option", 26);
    \u0275\u0275text(56, "Peter Hill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ng-option", 27);
    \u0275\u0275text(58, "Victoria Lyman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "ng-option", 28);
    \u0275\u0275text(60, "Adam Quinn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "ng-option", 29);
    \u0275\u0275text(62, "Melanie Coleman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ng-option", 30);
    \u0275\u0275text(64, "Max Wilson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "ng-option", 31);
    \u0275\u0275text(66, "Amelia Russell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "ng-option", 32);
    \u0275\u0275text(68, "Justin Metcalfe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ng-option", 33);
    \u0275\u0275text(70, "Ryan Young");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ng-option", 34);
    \u0275\u0275text(72, "Jennifer Hardacre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "ng-option", 35);
    \u0275\u0275text(74, "Justin Parr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "ng-option", 36);
    \u0275\u0275text(76, "Julia Hodges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "ng-option", 37);
    \u0275\u0275text(78, "Michael Sutherland");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(79, "div", 19)(80, "div", 20)(81, "label", 21);
    \u0275\u0275text(82, "Select Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 20)(84, "div", 38)(85, "div", 39);
    \u0275\u0275element(86, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275element(87, "input", 41);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(88, "div", 18)(89, "div", 4)(90, "div", 19)(91, "div", 20)(92, "label", 21);
    \u0275\u0275text(93, "Month:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "ng-select", 42)(95, "ng-option", 23);
    \u0275\u0275text(96, "January");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "ng-option", 24);
    \u0275\u0275text(98, "February");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "ng-option", 25);
    \u0275\u0275text(100, "March");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "ng-option", 26);
    \u0275\u0275text(102, "April");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "ng-option", 27);
    \u0275\u0275text(104, "May");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "ng-option", 28);
    \u0275\u0275text(106, "June");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "ng-option", 29);
    \u0275\u0275text(108, "July");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "ng-option", 30);
    \u0275\u0275text(110, "August");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "ng-option", 31);
    \u0275\u0275text(112, "September");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "ng-option", 32);
    \u0275\u0275text(114, "October");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "ng-option", 33);
    \u0275\u0275text(116, "November");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "ng-option", 34);
    \u0275\u0275text(118, "December");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(119, "div", 19)(120, "div", 20)(121, "label", 21);
    \u0275\u0275text(122, "Year:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "ng-select", 43)(124, "ng-option", 44);
    \u0275\u0275text(125, "2024");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "ng-option", 24);
    \u0275\u0275text(127, "2023");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "ng-option", 25);
    \u0275\u0275text(129, "2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "ng-option", 26);
    \u0275\u0275text(131, "2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "ng-option", 27);
    \u0275\u0275text(133, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "ng-option", 28);
    \u0275\u0275text(135, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "ng-option", 29);
    \u0275\u0275text(137, "2018");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "ng-option", 30);
    \u0275\u0275text(139, "2017");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "ng-option", 31);
    \u0275\u0275text(141, "2016");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "ng-option", 32);
    \u0275\u0275text(143, "2015");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "ng-option", 33);
    \u0275\u0275text(145, "2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "ng-option", 34);
    \u0275\u0275text(147, "2013");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "ng-option", 35);
    \u0275\u0275text(149, "2012");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "ng-option", 36);
    \u0275\u0275text(151, "2011");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "ng-option", 37);
    \u0275\u0275text(153, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "ng-option", 45);
    \u0275\u0275text(155, "2010");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(156, "div", 46)(157, "div", 47);
    \u0275\u0275element(158, "label", 21);
    \u0275\u0275elementStart(159, "a", 48);
    \u0275\u0275text(160, "Search");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(161, "div", 49)(162, "div", 50)(163, "div", 51)(164, "div", 52)(165, "span");
    \u0275\u0275text(166, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "div", 53)(168, "div", 54)(169, "ng-select", 55)(170, "ng-option", 23);
    \u0275\u0275text(171, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "ng-option", 24);
    \u0275\u0275text(173, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "ng-option", 25);
    \u0275\u0275text(175, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "ng-option", 26);
    \u0275\u0275text(177, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(178, "span");
    \u0275\u0275text(179, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(180, "div", 51)(181, "div", 56);
    \u0275\u0275element(182, "input", 57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(183, "div", 58)(184, "table", 59)(185, "thead")(186, "tr")(187, "th", 60);
    \u0275\u0275text(188, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "th", 60);
    \u0275\u0275text(190, "Day");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(191, "th", 60);
    \u0275\u0275text(192, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "th", 60);
    \u0275\u0275text(194, "Clock In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "th", 60);
    \u0275\u0275text(196, "Clock Out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(197, "th", 60);
    \u0275\u0275text(198, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(199, "th", 60);
    \u0275\u0275text(200, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(201, "tbody");
    \u0275\u0275repeaterCreate(202, AttendencebyuserComponent_For_203_Template, 19, 18, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(204, "nav", 61)(205, "ul", 62)(206, "li", 63)(207, "a", 64);
    \u0275\u0275text(208, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(209, "li", 65)(210, "a", 64);
    \u0275\u0275text(211, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(212, "li", 66)(213, "a", 64);
    \u0275\u0275text(214, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(215, "li", 66)(216, "a", 64);
    \u0275\u0275text(217, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(218, "li", 66)(219, "a", 64);
    \u0275\u0275text(220, "Next");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(221, AttendencebyuserComponent_Conditional_221_Template, 1, 0, "div", 67)(222, AttendencebyuserComponent_Conditional_222_Template, 45, 5, "div", 68)(223, AttendencebyuserComponent_Conditional_223_Template, 62, 0, "div", 68);
  }
  if (rf & 2) {
    \u0275\u0275classMap("btn btn-primary");
    \u0275\u0275property("title", "Attendance By User")("title2", "Mark Attendance")("path", "/dashboard/hrmdashboards/attendance/attendence-mark");
    \u0275\u0275advance(202);
    \u0275\u0275repeater(ctx.tableData);
    \u0275\u0275advance(19);
    \u0275\u0275conditional(ctx.showPresentModal || ctx.showEditModal ? 221 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showPresentModal ? 222 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showEditModal ? 223 : -1);
  }
}, dependencies: [NgbModule, NgSelectModule, NgSelectComponent, NgOptionComponent, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, FlatpickrModule, FlatpickrDirective, RouterModule, RouterLink, NgApexchartsModule, ChartComponent, SharedModule, HrDashboardPageHeaderComponent] });
var AttendencebyuserComponent = _AttendencebyuserComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendencebyuserComponent, { className: "AttendencebyuserComponent" });
})();
export {
  AttendencebyuserComponent
};
//# sourceMappingURL=attendencebyuser.component-442SMKJ4.js.map
