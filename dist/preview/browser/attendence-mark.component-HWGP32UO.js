import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-BFCIYJJG.js";
import {
  PageHeaderComponent,
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
  CheckboxControlValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NgbModal,
  NgbModule,
  ReactiveFormsModule,
  ɵNgSelectMultipleOption
} from "./chunk-47LBZ5ZO.js";
import {
  CommonModule,
  NgClass,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/hrmdashboards/attendance/attendence-mark/attendence-mark.component.ts
var _c0 = (a0) => ({ "selected": a0 });
function AttendenceMarkComponent_For_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 45)(5, "div", 46);
    \u0275\u0275element(6, "img", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "div", 48)(9, "h6", 49);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 48)(12, "span", 50);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(14, "td")(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td", 51)(29, "div", 52)(30, "div", 53)(31, "div", 54)(32, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function AttendenceMarkComponent_For_65_Template_input_ngModelChange_32_listener($event) {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(item_r3.checked, $event) || (item_r3.checked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "a", 56);
    \u0275\u0275listener("click", function AttendenceMarkComponent_For_65_Template_a_click_33_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      const content_r5 = \u0275\u0275reference(87);
      return \u0275\u0275resetView(ctx_r3.fullDay(content_r5));
    });
    \u0275\u0275element(34, "i", 57);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.id);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", item_r3.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r3.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.position);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge bg-", item_r3.statusBg, "-transparent");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.clockin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.clockout);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.from);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge bg-", item_r3.attendanceBg, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.attendance);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(19, _c0, ctx_r3.allTasksChecked));
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r3.allTasksChecked);
    \u0275\u0275twoWayProperty("ngModel", item_r3.checked);
  }
}
function AttendenceMarkComponent_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "h5", 59);
    \u0275\u0275text(2, "Attendance Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 60);
    \u0275\u0275listener("click", function AttendenceMarkComponent_ng_template_86_Template_button_click_3_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 61)(5, "div", 62)(6, "div", 63)(7, "div", 64)(8, "h6", 65);
    \u0275\u0275text(9, "09:30 AM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small", 66);
    \u0275\u0275text(11, "Clock In");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 63)(13, "div", 67);
    \u0275\u0275element(14, "apx-chart", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 63)(16, "div", 64)(17, "h6", 65);
    \u0275\u0275text(18, " 06:30 PM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "small", 66);
    \u0275\u0275text(20, "Clock Out");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 69)(22, "label", 9);
    \u0275\u0275text(23, "IP Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 8)(26, "label", 9);
    \u0275\u0275text(27, "Working Form");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 71)(29, "option", 72);
    \u0275\u0275text(30, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 21);
    \u0275\u0275text(32, "Office");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 22);
    \u0275\u0275text(34, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 23);
    \u0275\u0275text(36, "Others");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 73)(38, "a", 74);
    \u0275\u0275listener("click", function AttendenceMarkComponent_ng_template_86_Template_a_click_38_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.close("cross click"));
    });
    \u0275\u0275text(39, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 75);
    \u0275\u0275text(41, "Edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("series", ctx_r3.chartOptions.series)("chart", ctx_r3.chartOptions.chart)("colors", ctx_r3.chartOptions.colors)("plotOptions", ctx_r3.chartOptions.plotOptions)("labels", ctx_r3.chartOptions.labels);
  }
}
function AttendenceMarkComponent_ng_template_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 58)(2, "h5", 59);
    \u0275\u0275text(3, "Attendance Details ");
    \u0275\u0275elementStart(4, "span", 76);
    \u0275\u0275text(5, "Half Day");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 60);
    \u0275\u0275listener("click", function AttendenceMarkComponent_ng_template_88_Template_button_click_6_listener() {
      const modal_r9 = \u0275\u0275restoreView(_r8).$implicit;
      return \u0275\u0275resetView(modal_r9.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 61)(8, "div", 62)(9, "div", 63)(10, "div", 64)(11, "h6", 65);
    \u0275\u0275text(12, "09:30 AM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small", 66);
    \u0275\u0275text(14, "Clock In");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 63)(16, "div", 77);
    \u0275\u0275element(17, "apx-chart", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 63)(19, "div", 64)(20, "h6", 65);
    \u0275\u0275text(21, " 01:30 PM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "small", 66);
    \u0275\u0275text(23, "Clock Out");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 69)(25, "label", 9);
    \u0275\u0275text(26, "IP Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 8)(29, "label", 9);
    \u0275\u0275text(30, "Working Form");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ng-select", 79)(32, "ng-option", 72);
    \u0275\u0275text(33, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ng-option", 21);
    \u0275\u0275text(35, "Office");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ng-option", 22);
    \u0275\u0275text(37, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-option", 23);
    \u0275\u0275text(39, "Others");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 73)(41, "a", 74);
    \u0275\u0275listener("click", function AttendenceMarkComponent_ng_template_88_Template_a_click_41_listener() {
      const modal_r9 = \u0275\u0275restoreView(_r8).$implicit;
      return \u0275\u0275resetView(modal_r9.close("cross click"));
    });
    \u0275\u0275text(42, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "a", 80);
    \u0275\u0275text(44, "Edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("series", ctx_r3.chartOptions1.series)("chart", ctx_r3.chartOptions1.chart)("colors", ctx_r3.chartOptions1.colors)("plotOptions", ctx_r3.chartOptions1.plotOptions)("labels", ctx_r3.chartOptions1.labels)("grid", ctx_r3.chartOptions1.grid)("stroke", ctx_r3.chartOptions1.stroke);
  }
}
var _AttendenceMarkComponent = class _AttendenceMarkComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
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
      labels: ["9:00 hrs"]
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
    this.allTasksChecked = false;
    this.tasks = [
      /* your tasks here */
    ];
    this.tableData = [
      {
        id: "#2987",
        image: "./assets/images/users/1.jpg",
        name: "Faith Harris",
        position: "Web Designer",
        status: "Present",
        statusBg: "success",
        clockin: "09:30 AM",
        clockout: "06:30 PM",
        address: "225.192.45.1",
        from: "06:30 PM",
        attendance: "Marked",
        attendanceBg: "success",
        checked: true
      },
      {
        id: "#4987",
        image: "./assets/images/users/9.jpg",
        name: "Austin Bell",
        position: "Angular Developer",
        status: "Absent",
        statusBg: "danger",
        clockin: "09:30 AM",
        clockout: "06:30 PM",
        address: "225.192.45.1",
        from: "Office",
        attendance: "Not Marked",
        attendanceBg: "danger",
        checked: true
      },
      {
        id: "#6729",
        image: "./assets/images/users/2.jpg",
        name: "Maria Bower",
        position: "Marketing analyst",
        status: "Present",
        statusBg: "success",
        clockin: "09:30 AM",
        clockout: "06:30 PM",
        address: "225.192.45.1",
        from: "Office",
        attendance: "Marked",
        attendanceBg: "success"
      },
      {
        id: "#2098",
        image: "./assets/images/users/10.jpg",
        name: "Peter Hill",
        position: "Tester",
        status: "Half Day",
        statusBg: "warning",
        clockin: "09:30 AM",
        clockout: "06:30 PM",
        address: "225.192.45.1",
        from: "Office",
        attendance: "Not Marked",
        attendanceBg: "danger",
        checked: true
      },
      {
        id: "#1025",
        image: "./assets/images/users/3.jpg",
        name: "Victoria Lyman",
        position: "General Manager",
        status: "Present",
        statusBg: "success",
        clockin: "09:30 AM",
        clockout: "06:30 PM",
        address: "225.192.45.1",
        from: "Office",
        attendance: "Marked",
        attendanceBg: "success",
        checked: true
      },
      {
        id: "#3262",
        image: "./assets/images/users/4.jpg",
        name: "Adam Quinn",
        position: "Accountant",
        status: "Present",
        statusBg: "success",
        clockin: "09:30 AM",
        clockout: "06:30 PM",
        address: "225.192.45.1",
        from: "Office",
        attendance: "Marked",
        attendanceBg: "success"
      },
      {
        id: "#3698",
        image: "./assets/images/users/12.jpg",
        name: "Max Wilson",
        position: "PHP Developer",
        status: "Late",
        statusBg: "orange",
        clockin: "09:30 AM",
        clockout: "06:30 PM",
        address: "225.192.45.1",
        from: "Office",
        attendance: "Not Marked",
        attendanceBg: "danger"
      },
      {
        id: "#5612",
        image: "./assets/images/users/5.jpg",
        name: "Amelia Russell",
        position: "UX Designer",
        status: "Present",
        statusBg: "success",
        clockin: "09:30 AM",
        clockout: "06:30 PM",
        address: "225.192.45.1",
        from: "Office",
        attendance: "Marked",
        attendanceBg: "success",
        checked: true
      },
      {
        id: "#0245",
        image: "./assets/images/users/13.jpg",
        name: "Justin Metcalfe",
        position: "Web Designer",
        status: "Present",
        statusBg: "success",
        clockin: "09:30 AM",
        clockout: "06:30 PM",
        address: "225.192.45.1",
        from: "06:30 PM",
        attendance: "Marked",
        attendanceBg: "success",
        checked: true
      }
    ];
  }
  fullDay(content) {
    this.modalService.open(content, {});
  }
  halfDay(content1) {
    this.modalService.open(content1, {});
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
  toggleSelectAll(event) {
    this.allTasksChecked = event.target.checked;
  }
  getCheckedTasks() {
    return this.tasks.filter((task) => task.checked);
  }
};
_AttendenceMarkComponent.\u0275fac = function AttendenceMarkComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AttendenceMarkComponent)(\u0275\u0275directiveInject(NgbModal));
};
_AttendenceMarkComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendenceMarkComponent, selectors: [["app-attendence-mark"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  FlatpickrDefaults
]), \u0275\u0275StandaloneFeature], decls: 90, vars: 1, consts: [["content", ""], ["content1", ""], [3, "title"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "col-md-12", "col-lg-3"], [1, "form-group"], [1, "form-label"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["mwlFlatpickr", "", "type", "text", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], [1, "card-body", "border-top"], [1, "row", "mb-3", "gap-1", "gap-lg-0"], [1, "col-lg-6"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mb-0"], ["name", "quantity", "id", "select-countries17", "placeholder", "1", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], [1, "pe-3"], [1, "form-check", "form-check-xl", "d-flex", "align-items-center", "mb-2"], ["type", "checkbox", "id", "all-tasks", "value", "", "aria-label", "...", 1, "form-check-input", "success", "check-all", 3, "change"], [1, "form-check-label"], [1, "float-end"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "table-responsive"], ["id", "hr-table", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom"], [1, "border-bottom-0", "w-5"], [1, "border-bottom-0"], [1, "mt-4"], [1, "pagination", "justify-content-end", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item", "active"], [1, "page-item"], [1, "card-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "float-end"], [1, "modal-content"], ["id", "halfpresentmodal"], [1, "d-flex", "align-items-center"], [1, "avatar", "me-2", "avatar-rounded"], ["alt", "img", 3, "src"], [1, "lh-1"], [1, "mb-1"], [1, "fs-12", "text-muted"], [1, "task-list", 3, "ngClass"], [1, "d-flex", "align-items-center", "gap-2"], [1, "form-check", "form-check-xl", "d-flex", "align-items-center"], [1, "task-checkbox"], ["type", "checkbox", "value", "", "aria-label", "...", 1, "form-check-input", "success", 3, "ngModelChange", "checked", "ngModel"], ["data-bs-toggle", "modal", "data-bs-target", "#presentmodal", 1, "action-btns1", "bg-light", 3, "click"], ["data-bs-toggle", "tooltip", "data-original-title", "View", 1, "fe", "fe-eye", "primary", "text-primary"], [1, "modal-header"], [1, "modal-title"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "row", "my-4"], [1, "col-md-4"], [1, "pt-5", "text-center"], [1, "mb-1", "fs-16", "fw-medium"], [1, "text-muted", "fs-14"], ["id", "attendance-details2"], [3, "series", "chart", "colors", "plotOptions", "labels"], [1, "form-group", "mb-3"], ["type", "text", "placeholder", "225.192.145.1", "disabled", "", 1, "form-control"], ["name", "projects", "data-trigger", "", "disabled", "", "data-placeholder", "Select", 1, "form-control", "custom-select"], ["value", ""], [1, "modal-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#editmodal", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "badge", "bg-orange"], ["id", "attendance-details"], [3, "series", "chart", "colors", "plotOptions", "labels", "grid", "stroke"], ["name", "projects", "data-trigger", "", "data-placeholder", "Select", 1, "form-control", "custom-select"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#halfdayeditmodal", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"]], template: function AttendenceMarkComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-page-header", 2);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 3)(6, "div", 7)(7, "div", 8)(8, "label", 9);
    \u0275\u0275text(9, "Select Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 10)(12, "div", 11);
    \u0275\u0275element(13, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 13);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "div", 17)(19, "span");
    \u0275\u0275text(20, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "div", 19)(23, "ng-select", 20)(24, "ng-option", 21);
    \u0275\u0275text(25, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ng-option", 22);
    \u0275\u0275text(27, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ng-option", 23);
    \u0275\u0275text(29, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ng-option", 24);
    \u0275\u0275text(31, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "span", 25);
    \u0275\u0275text(33, "entries");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 26)(35, "input", 27);
    \u0275\u0275listener("change", function AttendenceMarkComponent_Template_input_change_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleSelectAll($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "label", 28);
    \u0275\u0275text(37, "Check All");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 16)(39, "div", 29);
    \u0275\u0275element(40, "input", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 31)(42, "table", 32)(43, "thead")(44, "tr")(45, "th", 33);
    \u0275\u0275text(46, "#Emp ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th", 34);
    \u0275\u0275text(48, "Emp Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th", 34);
    \u0275\u0275text(50, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th", 34);
    \u0275\u0275text(52, "Clock In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th", 34);
    \u0275\u0275text(54, "Clock Out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "th", 34);
    \u0275\u0275text(56, "IP Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th", 34);
    \u0275\u0275text(58, "Working From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th", 34);
    \u0275\u0275text(60, "Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "th", 34);
    \u0275\u0275text(62, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "tbody");
    \u0275\u0275repeaterCreate(64, AttendenceMarkComponent_For_65_Template, 35, 21, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "nav", 35)(67, "ul", 36)(68, "li", 37)(69, "a", 38);
    \u0275\u0275text(70, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "li", 39)(72, "a", 38);
    \u0275\u0275text(73, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "li", 40)(75, "a", 38);
    \u0275\u0275text(76, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "li", 40)(78, "a", 38);
    \u0275\u0275text(79, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "li", 40)(81, "a", 38);
    \u0275\u0275text(82, "Next");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(83, "div", 41)(84, "a", 42);
    \u0275\u0275text(85, "Save All");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(86, AttendenceMarkComponent_ng_template_86_Template, 42, 5, "ng-template", 43, 0, \u0275\u0275templateRefExtractor)(88, AttendenceMarkComponent_ng_template_88_Template, 45, 7, "ng-template", 44, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("title", "Attendance Mark");
    \u0275\u0275advance(64);
    \u0275\u0275repeater(ctx.tableData);
  }
}, dependencies: [NgbModule, SharedModule, PageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, FlatpickrModule, FlatpickrDirective, NgApexchartsModule, ChartComponent, RouterModule, CommonModule, NgClass, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, CheckboxControlValueAccessor, NgControlStatus, NgModel, ReactiveFormsModule] });
var AttendenceMarkComponent = _AttendenceMarkComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendenceMarkComponent, { className: "AttendenceMarkComponent" });
})();
export {
  AttendenceMarkComponent
};
//# sourceMappingURL=attendence-mark.component-HWGP32UO.js.map
