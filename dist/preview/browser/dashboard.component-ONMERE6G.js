import {
  barChartData,
  barChartOptions,
  barChartPlugins,
  barChartType
} from "./chunk-KXZ4YKBP.js";
import "./chunk-QMVZNF3C.js";
import "./chunk-AZV4IVWW.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-BFCIYJJG.js";
import {
  FullCalendarComponent,
  FullCalendarModule,
  index,
  index2,
  index3,
  require_moment
} from "./chunk-R5ZJU46B.js";
import {
  CalendarModule
} from "./chunk-S25NIHUP.js";
import {
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
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModal,
  NgbModule
} from "./chunk-47LBZ5ZO.js";
import {
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate3,
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import {
  __toESM
} from "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/employee-dashboard/dashboard/dashboard.component.ts
var import_moment = __toESM(require_moment());
var _c0 = ["external"];
function DashboardComponent_ng_template_681_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 206)(1, "h5", 207);
    \u0275\u0275text(2, "Apply Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 208);
    \u0275\u0275listener("click", function DashboardComponent_ng_template_681_Template_button_click_3_listener() {
      const modal_r5 = \u0275\u0275restoreView(_r4).$implicit;
      return \u0275\u0275resetView(modal_r5.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 209)(5, "div", 210)(6, "div", 211)(7, "label", 212);
    \u0275\u0275text(8, "Leaves Dates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ng-select", 213)(10, "ng-option", 214);
    \u0275\u0275text(11, "Single Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ng-option", 215);
    \u0275\u0275text(13, "Multiple Leaves");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 216)(15, "div", 211)(16, "label", 212);
    \u0275\u0275text(17, "Date Range:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 217)(19, "div", 12)(20, "div", 13);
    \u0275\u0275element(21, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 211)(24, "label", 212);
    \u0275\u0275text(25, "Leaves Types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ng-select", 218)(27, "ng-option");
    \u0275\u0275text(28, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ng-option", 219);
    \u0275\u0275text(30, "Half Day Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ng-option", 140);
    \u0275\u0275text(32, "Casual Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ng-option", 141);
    \u0275\u0275text(34, "Sick Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "ng-option", 142);
    \u0275\u0275text(36, "Maternity Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ng-option", 220);
    \u0275\u0275text(38, "Paternity Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "ng-option", 221);
    \u0275\u0275text(40, "Annual Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ng-option", 221);
    \u0275\u0275text(42, "Unpaid Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "ng-option", 222);
    \u0275\u0275text(44, "Other Leaves");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 217)(46, "label", 212);
    \u0275\u0275text(47, "Reason:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "textarea", 223);
    \u0275\u0275text(49, "Some text here...");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 224)(51, "div", 34)(52, "label", 225);
    \u0275\u0275text(53, "Selected Days:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 226);
    \u0275\u0275text(55, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 227)(57, "a", 228);
    \u0275\u0275listener("click", function DashboardComponent_ng_template_681_Template_a_click_57_listener() {
      const modal_r5 = \u0275\u0275restoreView(_r4).$implicit;
      return \u0275\u0275resetView(modal_r5.close("cross click"));
    });
    \u0275\u0275text(58, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "a", 229);
    \u0275\u0275text(60, "Submit");
    \u0275\u0275elementEnd()()();
  }
}
function DashboardComponent_ng_template_683_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 206)(1, "h5", 207);
    \u0275\u0275element(2, "span", 230);
    \u0275\u0275text(3, "Clock In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 208);
    \u0275\u0275listener("click", function DashboardComponent_ng_template_683_Template_button_click_4_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 209)(6, "div", 231)(7, "div", 232);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label", 212);
    \u0275\u0275text(10, "Current Time");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 211)(12, "label", 212);
    \u0275\u0275text(13, "IP Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 233);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 211)(16, "label", 212);
    \u0275\u0275text(17, "Working Form");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ng-select", 234)(19, "ng-option", 235);
    \u0275\u0275text(20, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ng-option", 219);
    \u0275\u0275text(22, "Office");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ng-option", 140);
    \u0275\u0275text(24, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ng-option", 141);
    \u0275\u0275text(26, "Others");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 217)(28, "label", 212);
    \u0275\u0275text(29, "Note:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "textarea", 236);
    \u0275\u0275text(31, "Some text here...");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 224)(33, "button", 237);
    \u0275\u0275listener("click", function DashboardComponent_ng_template_683_Template_button_click_33_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.close("cross click"));
    });
    \u0275\u0275text(34, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 238);
    \u0275\u0275text(36, "Clock In");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate3("", ctx_r7.hours, ":", ctx_r7.mins, ":", ctx_r7.secs, "");
  }
}
var _DashboardComponent = class _DashboardComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.futureDate = /* @__PURE__ */ new Date();
    this.barChartOptions = barChartOptions;
    this.barChartData = barChartData;
    this.barChartType = barChartType;
    this.barChartPlugins = barChartPlugins;
    this.chartOptions = {
      series: [{
        name: "Earnings",
        data: [80, 60, 50, 30, 65, 35, 64, 51, 59, 80, 70, 78]
      }, {
        name: "Students",
        data: [85, 65, 55, 37, 60, 32, 47, 31, 54, 70, 60, 62]
      }],
      chart: {
        height: 370,
        type: "bar",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [1, 1],
        show: true,
        curve: ["smooth", "smooth"]
      },
      grid: {
        borderColor: "#f3f3f3",
        strokeDashArray: 3
      },
      xaxis: {
        axisBorder: {
          color: "rgba(119, 119, 142, 0.05)"
        }
      },
      legend: {
        show: false
      },
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      markers: {
        size: 0
      },
      colors: ["rgba(51, 102, 255, 0.2)", "rgb(51, 102, 255)"],
      plotOptions: {
        bar: {
          columnWidth: "35%",
          borderRadius: 6,
          borderRadiusApplication: "end"
        }
      }
    };
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
    this.calendarPlugins = [index, index2, index3];
    this.curYear = (0, import_moment.default)().format("YYYY");
    this.curMonth = (0, import_moment.default)().format("MM");
    this.calendarEvents = [
      {
        id: "1",
        start: this.curYear + "-" + this.curMonth + "-02",
        end: this.curYear + "-" + this.curMonth + "-02",
        title: "Spruko Meetup",
        className: "bg-secondary-transparent"
      },
      {
        id: "2",
        start: this.curYear + "-" + this.curMonth + "-17",
        end: this.curYear + "-" + this.curMonth + "-17",
        title: "Design Review",
        className: "bg-info-transparent"
      },
      {
        id: "3",
        start: this.curYear + "-" + this.curMonth + "-13",
        end: this.curYear + "-" + this.curMonth + "-13",
        title: "Lifestyle Conference",
        className: "bg-primary-transparent"
      },
      {
        id: "4",
        start: this.curYear + "-" + this.curMonth + "-21",
        end: this.curYear + "-" + this.curMonth + "-21",
        title: "Team Weekly Brownbag",
        className: "bg-warning-transparent"
      },
      {
        id: "5",
        start: this.curYear + "-" + this.curMonth + "-04T10:00:00",
        end: this.curYear + "-" + this.curMonth + "-06T15:00:00",
        title: "Music Festival",
        className: "bg-success-transparent"
      },
      {
        id: "6",
        start: this.curYear + "-" + this.curMonth + "-08",
        end: this.curYear + "-" + this.curMonth + "-08",
        title: "Attend Lea's Wedding",
        className: "bg-success-transparent"
      },
      {
        id: "7",
        start: this.curYear + "-" + this.curMonth + "-06",
        end: this.curYear + "-" + this.curMonth + "-06",
        title: "Harcates Birthday",
        className: "bg-info-transparent"
      },
      {
        id: "8",
        start: this.curYear + "-" + this.curMonth + "-28",
        end: this.curYear + "-" + this.curMonth + "-28",
        title: "Bunnysin's Birthday",
        className: "bg-info-transparent"
      },
      {
        id: "9",
        start: this.curYear + "-" + this.curMonth + "-03",
        end: this.curYear + "-" + this.curMonth + "-03",
        title: "Lee shin's Birthday",
        className: "bg-info-transparent"
      },
      {
        id: "10",
        start: this.curYear + "-11-11",
        end: this.curYear + "-11-11",
        title: "Shinchan's Birthday",
        className: "bg-info-transparent"
      }
    ];
    this.calendarOptions = {
      plugins: [index, index3],
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "prev",
        center: "title",
        right: "next"
      },
      navLinks: true,
      // can click day/week names to navigate views
      businessHours: true,
      // display business hours
      editable: true,
      selectable: true,
      selectMirror: true,
      droppable: true,
      weekends: true,
      dayMaxEvents: true,
      // allow "more" link when too many events
      dateClick: (arg) => this.handleDateClick(arg),
      eventClick: (arg) => this.handleEventClick(arg)
    };
    this.futureDate.setDate(this.futureDate.getDate() + 2);
  }
  updateTimer() {
    const currentDate = /* @__PURE__ */ new Date();
    const timeDifference = this.futureDate.getTime() - currentDate.getTime();
    if (timeDifference > 0) {
      this.days = Math.floor(timeDifference / (1e3 * 60 * 60 * 24));
      this.hours = Math.floor(timeDifference % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
      this.mins = Math.floor(timeDifference % (1e3 * 60 * 60) / (1e3 * 60));
      this.secs = Math.floor(timeDifference % (1e3 * 60) / 1e3);
      this.futureDate.setSeconds(this.futureDate.getSeconds() - 1);
    } else {
      clearInterval(this.timerInterval);
    }
  }
  // flatpickrOptions: FlatpickrOptions;
  ngOnInit() {
    setInterval(() => {
      this.timerInterval = this.updateTimer();
    }, 1e3);
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
  open(content) {
    this.modalService.open(content, { windowClass: "modalCusSty" });
  }
  handleDateClick(arg) {
    const title = prompt("Event Title:");
    if (title) {
      this.calendarEvents = this.calendarEvents.concat({
        title,
        start: arg.date,
        allDay: arg.allDay
      });
    }
  }
  handleEventClick(arg) {
    if (confirm("Are you sure you want to delete this event?")) {
      arg.event.remove();
    }
  }
};
_DashboardComponent.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(NgbModal));
};
_DashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.external = _t.first);
  }
}, standalone: true, features: [\u0275\u0275ProvidersFeature([FlatpickrDefaults]), \u0275\u0275StandaloneFeature], decls: 685, vars: 15, consts: [["content", ""], ["content1", ""], [1, "page-header", "d-xxl-flex", "d-block"], [1, "page-leftheader"], [1, "page-title"], [1, "fw-normal", "text-muted", "ms-2"], [1, "page-rightheader", "mt-2", "mt-xxl-0"], [1, "d-flex", "align-items-center", "flex-wrap", "my-auto", "end-content", "breadcrumb-end", "gap-1"], ["data-bs-toggle", "modal", "data-bs-target", "#applyleaves", 1, "btn", "btn-primary", "me-2", "my-md-0", "my-1", 3, "click"], [1, "d-flex", "flex-wrap", "gap-2"], [1, "header-datepicker"], [1, "form-group", "mb-0"], [1, "input-group"], [1, "input-group-text"], [1, "fe", "fe-calendar"], ["type", "text", "mwlFlatpickr", "", "placeholder", "19 Feb 2020", 1, "form-control", "choose-date"], [1, "header-datepicker", "me-2"], [1, "form-group", "mb-sm-0"], [1, "fe", "fe-clock"], ["type", "text", "mwlFlatpickr", "", "dateFormat", "H:i", "placeholder", "09:30am", 1, "form-control", "input-small", "time-picker", 3, "noCalendar", "enableTime"], [1, "d-flex", "gap-2"], ["data-bs-toggle", "modal", "data-bs-target", "#clockinmodal", 1, "btn", "btn-primary", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "E-mail", 1, "btn", "btn-light3"], [1, "fe", "fe-mail"], ["data-bs-placement", "top", "data-bs-toggle", "tooltip", "title", "Contact", 1, "btn", "btn-light3"], [1, "fe", "fe-phone-call"], ["data-bs-placement", "top", "data-bs-toggle", "tooltip", "title", "Info", 1, "btn", "btn-primary", "me-0"], [1, "fe", "fe-info"], [1, "row"], [1, "col-xl-3", "col-lg-6", "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "col-7"], [1, "mt-0", "text-start"], [1, ""], [1, "mb-0", "mt-auto", "text-success"], [1, "col-5"], [1, "icon1", "bg-success", "my-auto", "float-end"], [1, "fe", "fe-file-text"], [1, "mb-0", "mt-auto", "text-primary"], [1, "icon1", "bg-primary", "my-auto", "float-end"], [1, "fe", "fe-box"], [1, "mb-0", "mt-auto", "text-secondary"], [1, "icon1", "bg-secondary", "my-auto", "float-end"], [1, "fe", "fe-briefcase"], [1, "mb-0", "mt-auto", "text-danger"], [1, "icon1", "bg-danger", "my-auto", "float-end"], [1, "fe", "fe-award"], [1, "col-xl-8", "col-md-12", "col-lg-12"], [1, "card-header", "justify-content-between", "border-0", "responsive-header"], [1, "card-title"], ["ngbDropdown", "", 1, "btn-list"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-light", "text-dark", "float-start", "d-flex"], [1, "dot-label", "bg-primary", "bg-opacity-20", "me-2", "my-auto"], [1, "dot-label", "bg-primary", "me-2", "my-auto"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "ngbDropdownToggle", "", "aria-expanded", "false", 1, "btn", "btn-outline-light", "no-caret"], [1, "fe", "fe-chevron-down"], ["ngbDropdownMenu", "", "role", "menu", 1, "dropdown-menu", "dropdown-menu-end"], ["ngbDropdownItem", "", "href", "javascript:void(0);", 1, "dropdown-item"], [3, "series", "chart", "legend", "xaxis", "colors", "markers", "stroke", "plotOptions", "dataLabels", "grid", "labels", "yaxis"], [1, "col-xl-4", "col-md-12", "col-lg-12"], [1, "card", "custom-card", "overflow-hidden"], [1, "card-header", "border-0"], [1, "pt-4"], [1, "table-responsive", "card-table-one"], [1, "table", "transaction-table", "mb-0", "text-nowrap"], [1, "d-flex", "ps-6"], [1, "bg-pink", "pink-border", "rounded-circle", "d-block", "me-3", "mt-1", "h-5", "w-5"], [1, "my-auto"], [1, "mb-1", "fw-semibold", "fs-17"], [1, "clearfix"], [1, "text-muted", "fs-14"], [1, "text-end", "pe-6"], ["href", "javascript:;", 1, "text-muted", "d-block", "fs-16"], [1, "bg-warning", "warning-border", "rounded-circle", "d-block", "me-3", "mt-1", "h-5", "w-5"], [1, "bg-primary", "primary-border", "rounded-circle", "d-block", "me-3", "mt-1", "h-5", "w-5"], [1, "bg-success", "success-border", "rounded-circle", "d-block", "me-3", "mt-1", "h-5", "w-5"], [1, "bg-orange", "orange-border", "rounded-circle", "d-block", "me-3", "mt-1", "h-5", "w-5"], [1, "col-xxl-3", "col-xl-12", "col-lg-12", "col-md-12"], ["id", "calendar3", 1, "employee-calendar"], [3, "options"], [1, "col-xxl-4", "col-xl-6", "col-lg-12", "col-md-12"], [1, "card-body", "mt-1"], [1, "mb-4"], [1, "d-flex", "comming_holidays", "calendar-icon", "icons"], [1, "date_time", "bg-success-transparent", "rounded-3", "me-3"], [1, "date", "fs-20"], [1, "month", "fs-13"], [1, "me-3", "mt-0", "mt-sm-1", "d-block"], [1, "mb-1", "fw-medium"], [1, "float-end", "text-muted", "mb-0", "fs-13", "ms-auto", "rounded-3", "my-auto"], [1, "date_time", "bg-purple-transparent", "rounded-3", "me-3"], [1, "date_time", "bg-orange-transparent", "rounded-3", "me-3"], [1, "date_time", "bg-warning-transparent", "rounded-3", "me-3"], [1, "mb-0"], [1, "date_time", "bg-pink-transparent", "rounded-3", "me-3"], [1, "col-xxl-5", "col-xl-6", "col-lg-12", "col-md-12"], [1, "card-header", "justify-content-between", "border-0"], ["href", "javascript:void(0);", 1, "btn", "d-grid", "btn-primary", "pe-3", "ps-3"], [1, "table-responsive", "leave_table", "fs-13", "mt-4"], [1, "table", "mb-0", "text-nowrap"], [1, "border-top"], [1, "text-start"], [1, "text-center"], [1, "fs-15"], [1, "text-center", "d-flex"], [1, "bg-primary", "rounded-circle", "d-block", "me-3", "mt-1", "h-3", "w-3"], [1, "fw-medium", "fs-15"], [1, "text-center", "text-muted", "fs-15"], [1, "text-center", "text-muted"], [1, "bg-orange", "rounded-circle", "d-block", "me-3", "mt-1", "h-3", "w-3"], [1, "fw-medium"], [1, "bg-warning", "rounded-circle", "d-block", "me-3", "mt-1", "h-3", "w-3"], [1, "bg-info", "rounded-circle", "d-block", "me-3", "mt-1", "h-3", "w-3"], [1, "row", "mb-0", "pb-0"], [1, "col-4", "text-center", "py-4", "border-end"], [1, "justify-content-center", "text-center", "d-flex", "my-auto"], [1, "text-primary", "fs-20", "fw-medium"], [1, "my-auto", "fs-14", "fw-normal", "text-muted", "op-5"], [1, "text-danger", "fs-20", "fw-medium"], [1, "col-4", "text-center", "py-4"], [1, "fs-20", "fw-medium"], [1, "col-xxl-8", "col-xl-7", "col-lg-12", "col-md-12"], [1, "card-header", "justify-content-between", "border-bottom-0"], ["ngbDropdown", ""], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "me-0", "text-default", "no-caret"], [1, "fe", "fe-more-vertical"], ["role", "menu", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [1, "fe", "fe-eye", "me-2"], [1, "fe", "fe-plus-circle", "me-2"], [1, "fe", "fe-trash-2", "me-2"], [1, "fe", "fe-download-cloud", "me-2"], [1, "fe", "fe-settings", "me-2"], [1, "row", "px-4", "mt-2", "align-items-center"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mt-2"], ["name", "quantity", "id", "select-countries17", "placeholder", "1", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], [1, "float-end", "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "me-2", "text-nowrap"], [1, "fe", "fe-plus"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "table-responsive", "card-table-one", "pt-1", "rounded-4"], [1, "table", "text-nowrap", "custom-table"], [1, "w-5p"], [1, "text-start", "fs-13"], [1, "ps-0"], [1, "d-flex"], [1, "table_img", "rounded-circle", "bg-orange-transparent", "me-3"], ["src", "./assets/images/media/png/12.png", "alt", "img", 1, "rounded-circle"], [1, "mb-0", "font-weight-medium"], [1, "avatar-list-stacked"], [1, "avatar", "aavatar-md", "avatar-rounded"], ["src", "./assets/images/users/12.jpg", "alt", "img"], ["src", "./assets/images/users/3.jpg", "alt", "img"], ["src", "./assets/images/users/2.jpg", "alt", "img"], ["src", "./assets/images/users/5.jpg", "alt", "img"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-success", "d-grid"], [1, "text-start", "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "action-btns1"], [1, "fe", "fe-mail", "primary", "text-primary"], [1, "form-check", "form-check-xl", "ms-2", "d-flex", "align-items-center"], ["type", "checkbox", "value", "", "checked", "", 1, "form-check-input", "success"], [1, "table_img", "rounded-circle", "bg-pink-transparent", "me-3"], ["src", "./assets/images/media/png/7.png", "alt", "img", 1, "rounded-circle"], ["src", "./assets/images/users/4.jpg", "alt", "img"], ["src", "./assets/images/users/15.jpg", "alt", "img"], ["href", "javascript:void(0);", 1, "btn", "d-grid", "btn-primary"], [1, "table_img", "rounded-circle", "bg-warning-transparent", "me-3"], ["src", "./assets/images/media/png/6.png", "alt", "img", 1, "rounded-circle"], ["src", "./assets/images/users/7.jpg", "alt", "img"], ["src", "./assets/images/users/8.jpg", "alt", "img"], ["src", "./assets/images/users/9.jpg", "alt", "img"], ["src", "./assets/images/users/10.jpg", "alt", "img"], ["type", "checkbox", "value", "", 1, "form-check-input", "success"], ["src", "./assets/images/media/png/5.png", "alt", "img", 1, "rounded-circle"], ["src", "./assets/images/users/6.jpg", "alt", "img"], ["src", "./assets/images/users/1.jpg", "alt", "img"], ["href", "javascript:void(0);", 1, "btn", "d-grid", "btn-outline-success"], [1, "table_img", "rounded-circle", "bg-danger-transparent", "me-3"], ["src", "./assets/images/media/png/4.png", "alt", "img", 1, "rounded-circle"], ["src", "./assets/images/users/11.jpg", "alt", "img"], ["src", "./assets/images/users/14.jpg", "alt", "img"], [1, "col-xxl-4", "col-xl-5", "col-lg-12", "col-md-12"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-light"], [1, "card-body", "px-0", "py-3"], [1, "table-responsive"], [1, "table", "text-nowrap", "custom-table", "table-borderless"], [1, "d-flex", "flex-wrap"], ["src", "./assets/images/users/4.jpg", "alt", "media1", 1, "w-8", "h-8", "rounded-4", "me-3"], ["href", "javascript:void(0);", 1, "mb-1", "fw-medium", "fs-16"], [1, "text-muted", "fs-13", "mb-0"], [1, "text-end"], ["href", "javascript:void(0);", 1, "text-success", "d-block", "fs-16"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-secondary", "mt-1"], [1, "ri-cake-2-fill", "me-2"], ["src", "./assets/images/users/6.jpg", "alt", "media1", 1, "w-8", "h-8", "rounded-4", "me-3"], ["href", "javascript:void(0);", 1, "text-muted", "d-block"], ["src", "./assets/images/users/2.jpg", "alt", "media1", 1, "w-8", "h-8", "rounded-4", "me-3"], ["src", "./assets/images/users/7.jpg", "alt", "media1", 1, "w-8", "h-8", "rounded-4", "me-3"], ["src", "./assets/images/users/12.jpg", "alt", "media1", 1, "w-8", "h-8", "rounded-4", "me-3"], [1, "modal-header"], [1, "modal-title"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "leave-types"], [1, "form-group", "mb-3"], [1, "form-label"], ["name", "projects", "placeholder", "Single Leaves", "data-trigger", "", "id", "daterange-categories", 1, "form-control", "custom-select", "p-0"], ["value", "single"], ["value", "multiple"], ["id", "single", 1, "leave-content", "active"], [1, "form-group"], ["name", "projects", "data-trigger", "", "placeholder", "Select", 1, "form-control", "custom-select", "p-0"], ["value", "1"], ["value", "5"], ["value", "6"], ["value", "8"], ["rows", "5", 1, "form-control"], [1, "modal-footer"], [1, "mb-0", "fw-medium"], [1, "badge", "bg-danger", "rounded-pill", "ms-2"], [1, "ms-auto"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], [1, "fe", "fe-clock", "me-1"], [1, "countdowntimer", "text-center"], [1, "mt-3", "d-flex", "justify-content-center", "fs-30", "digital-clock"], ["type", "text", "placeholder", "225.192.145.1", "disabled", "", 1, "form-control"], ["name", "projects", "placeholder", "Select", "data-trigger", "", 1, "form-control", "custom-select", "p-0"], ["value", "0"], ["rows", "3", 1, "form-control"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-primary"]], template: function DashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3, "Employee");
    \u0275\u0275elementStart(4, "span", 5);
    \u0275\u0275text(5, "Dashboard");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "a", 8);
    \u0275\u0275listener("click", function DashboardComponent_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(682);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275text(9, "Apply Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13);
    \u0275\u0275element(15, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 16)(18, "div", 17)(19, "div", 12)(20, "div", 13);
    \u0275\u0275element(21, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 20)(24, "a", 21);
    \u0275\u0275listener("click", function DashboardComponent_Template_a_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r3 = \u0275\u0275reference(684);
      return \u0275\u0275resetView(ctx.open(content1_r3));
    });
    \u0275\u0275text(25, "Clock In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 22);
    \u0275\u0275element(27, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 24);
    \u0275\u0275element(29, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 26);
    \u0275\u0275element(31, "i", 27);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(32, "div", 28)(33, "div", 29)(34, "div", 30)(35, "div", 31)(36, "div", 28)(37, "div", 32)(38, "div", 33)(39, "h5", 34);
    \u0275\u0275text(40, "Completed Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "h3", 35);
    \u0275\u0275text(42, "51");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 36)(44, "div", 37);
    \u0275\u0275element(45, "i", 38);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(46, "div", 29)(47, "div", 30)(48, "div", 31)(49, "div", 28)(50, "div", 32)(51, "div", 33)(52, "h5", 34);
    \u0275\u0275text(53, "Total Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "h3", 39);
    \u0275\u0275text(55, "162");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 36)(57, "div", 40);
    \u0275\u0275element(58, "i", 41);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(59, "div", 29)(60, "div", 30)(61, "div", 31)(62, "div", 28)(63, "div", 32)(64, "div", 33)(65, "h5", 34);
    \u0275\u0275text(66, "Absent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "h3", 42);
    \u0275\u0275text(68, "12");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 36)(70, "div", 43);
    \u0275\u0275element(71, "i", 44);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(72, "div", 29)(73, "div", 30)(74, "div", 31)(75, "div", 28)(76, "div", 32)(77, "div", 33)(78, "h5", 34);
    \u0275\u0275text(79, "Awards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "h3", 45);
    \u0275\u0275text(81, "0");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "div", 36)(83, "div", 46);
    \u0275\u0275element(84, "i", 47);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(85, "div", 28)(86, "div", 48)(87, "div", 30)(88, "div", 49)(89, "h4", 50);
    \u0275\u0275text(90, "Salary And Attendance chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div")(92, "div", 51)(93, "a", 52);
    \u0275\u0275element(94, "span", 53);
    \u0275\u0275text(95, "Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "a", 52);
    \u0275\u0275element(97, "span", 54);
    \u0275\u0275text(98, "Salary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "a", 55);
    \u0275\u0275text(100, " Year ");
    \u0275\u0275element(101, "i", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "ul", 57)(103, "li")(104, "a", 58);
    \u0275\u0275text(105, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "li")(107, "a", 58);
    \u0275\u0275text(108, "Yearly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "li")(110, "a", 58);
    \u0275\u0275text(111, "Weekly");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(112, "div", 31);
    \u0275\u0275element(113, "apx-chart", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(114, "div", 60)(115, "div", 61)(116, "div", 62)(117, "h4", 50);
    \u0275\u0275text(118, "Recent Activity");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "div", 63)(120, "div", 64)(121, "table", 65)(122, "tbody")(123, "tr", 34)(124, "td", 66);
    \u0275\u0275element(125, "span", 67);
    \u0275\u0275elementStart(126, "div", 68)(127, "span", 69);
    \u0275\u0275text(128, "You Late to day");
    \u0275\u0275elementEnd();
    \u0275\u0275element(129, "div", 70);
    \u0275\u0275elementStart(130, "small", 71);
    \u0275\u0275text(131, "Your office intime is 9:42");
    \u0275\u0275elementEnd();
    \u0275\u0275element(132, "div", 70);
    \u0275\u0275elementStart(133, "small", 71);
    \u0275\u0275text(134, "Late time 14min");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(135, "td", 72)(136, "a", 73);
    \u0275\u0275text(137, "Just Now");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(138, "tr", 34)(139, "td", 66);
    \u0275\u0275element(140, "span", 74);
    \u0275\u0275elementStart(141, "div", 68)(142, "span", 69);
    \u0275\u0275text(143, "Below for those interested");
    \u0275\u0275elementEnd();
    \u0275\u0275element(144, "div", 70);
    \u0275\u0275elementStart(145, "small", 71);
    \u0275\u0275text(146, "Undoubtable source");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(147, "td", 72)(148, "a", 73);
    \u0275\u0275text(149, "1 Hour ago");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(150, "tr", 34)(151, "td", 66);
    \u0275\u0275element(152, "span", 75);
    \u0275\u0275elementStart(153, "div", 68)(154, "span", 69);
    \u0275\u0275text(155, "Success! your Lunch Time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(156, "div", 70);
    \u0275\u0275elementStart(157, "small", 71);
    \u0275\u0275text(158, "Lunch time 1:30 To 2:30");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(159, "td", 72)(160, "a", 73);
    \u0275\u0275text(161, "4 hours ago");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(162, "tr", 34)(163, "td", 66);
    \u0275\u0275element(164, "span", 76);
    \u0275\u0275elementStart(165, "div", 68)(166, "span", 69);
    \u0275\u0275text(167, "Many desktops Publishing The");
    \u0275\u0275elementEnd();
    \u0275\u0275element(168, "div", 70);
    \u0275\u0275elementStart(169, "span", 69);
    \u0275\u0275text(170, " versions are evolved");
    \u0275\u0275elementEnd();
    \u0275\u0275element(171, "div", 70);
    \u0275\u0275elementStart(172, "small", 71);
    \u0275\u0275text(173, "Page editors now use...");
    \u0275\u0275elementEnd();
    \u0275\u0275element(174, "div", 70);
    \u0275\u0275elementStart(175, "small", 71);
    \u0275\u0275text(176, "Late time 14min");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(177, "td", 72)(178, "a", 73);
    \u0275\u0275text(179, "5 hours ago");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(180, "tr")(181, "td", 66);
    \u0275\u0275element(182, "span", 77);
    \u0275\u0275elementStart(183, "div", 68)(184, "span", 69);
    \u0275\u0275text(185, "Below for those interested");
    \u0275\u0275elementEnd();
    \u0275\u0275element(186, "div", 70);
    \u0275\u0275elementStart(187, "small", 71);
    \u0275\u0275text(188, "Birthday on Feb 16");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(189, "td", 72)(190, "a", 73);
    \u0275\u0275text(191, "11 Jan 2020");
    \u0275\u0275elementEnd()()()()()()()()()();
    \u0275\u0275elementStart(192, "div", 28)(193, "div", 78)(194, "div", 30)(195, "div", 62)(196, "h4", 50);
    \u0275\u0275text(197, "Calendar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(198, "div", 31)(199, "div", 79);
    \u0275\u0275element(200, "full-calendar", 80);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(201, "div", 81)(202, "div", 30)(203, "div", 62)(204, "h4", 50);
    \u0275\u0275text(205, "Up Coming Holidays");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(206, "div", 82)(207, "div", 83)(208, "div", 84)(209, "span", 85)(210, "span", 86);
    \u0275\u0275text(211, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(212, "span", 87);
    \u0275\u0275text(213, "FEB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(214, "div", 88)(215, "h6", 89);
    \u0275\u0275text(216, "Office Off");
    \u0275\u0275elementEnd();
    \u0275\u0275element(217, "span", 70);
    \u0275\u0275elementStart(218, "small");
    \u0275\u0275text(219, "Sunday");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(220, "p", 90);
    \u0275\u0275text(221, "3 days to left");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(222, "div", 83)(223, "div", 84)(224, "span", 91)(225, "span", 86);
    \u0275\u0275text(226, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(227, "span", 87);
    \u0275\u0275text(228, "FEB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(229, "div", 88)(230, "h6", 89);
    \u0275\u0275text(231, "Public Holiday");
    \u0275\u0275elementEnd();
    \u0275\u0275element(232, "span", 70);
    \u0275\u0275elementStart(233, "small");
    \u0275\u0275text(234, "Enjoy your day off");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(235, "p", 90);
    \u0275\u0275text(236, "13 days to left");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(237, "div", 83)(238, "div", 84)(239, "span", 92)(240, "span", 86);
    \u0275\u0275text(241, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(242, "span", 87);
    \u0275\u0275text(243, "MAR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(244, "div", 88)(245, "h6", 89);
    \u0275\u0275text(246, "Office Off");
    \u0275\u0275elementEnd();
    \u0275\u0275element(247, "span", 70);
    \u0275\u0275elementStart(248, "small");
    \u0275\u0275text(249, "Sunday");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(250, "p", 90);
    \u0275\u0275text(251, "23 days to left");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(252, "div", 83)(253, "div", 84)(254, "span", 93)(255, "span", 86);
    \u0275\u0275text(256, "17");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(257, "span", 87);
    \u0275\u0275text(258, "FEB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(259, "div", 88)(260, "h6", 89);
    \u0275\u0275text(261, "Optional Holiday");
    \u0275\u0275elementEnd();
    \u0275\u0275element(262, "span", 70);
    \u0275\u0275elementStart(263, "small");
    \u0275\u0275text(264, "Sunday");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(265, "p", 90);
    \u0275\u0275text(266, "20 days to left");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(267, "div", 94)(268, "div", 84)(269, "span", 95)(270, "span", 86);
    \u0275\u0275text(271, "13");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(272, "span", 87);
    \u0275\u0275text(273, "MAR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(274, "div", 88)(275, "h6", 89);
    \u0275\u0275text(276, "Conference");
    \u0275\u0275elementEnd();
    \u0275\u0275element(277, "span", 70);
    \u0275\u0275elementStart(278, "small");
    \u0275\u0275text(279, "Money Update");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(280, "p", 90);
    \u0275\u0275text(281, "35 days to left");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(282, "div", 96)(283, "div", 30)(284, "div", 97)(285, "h4", 50);
    \u0275\u0275text(286, "Leave Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(287, "div")(288, "a", 98);
    \u0275\u0275text(289, "Apply For Leave");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(290, "div", 99)(291, "table", 100)(292, "thead", 101)(293, "tr")(294, "th", 102);
    \u0275\u0275text(295, "Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(296, "th", 102);
    \u0275\u0275text(297, "Used");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(298, "th", 103);
    \u0275\u0275text(299, "Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(300, "th", 103);
    \u0275\u0275text(301, "Allowance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(302, "tbody")(303, "tr", 104)(304, "td", 105);
    \u0275\u0275element(305, "span", 106);
    \u0275\u0275elementStart(306, "span", 107);
    \u0275\u0275text(307, "Vacation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(308, "td", 107);
    \u0275\u0275text(309, "16.5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(310, "td", 108);
    \u0275\u0275text(311, "3.5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(312, "td", 109);
    \u0275\u0275text(313, "20");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(314, "tr", 104)(315, "td", 105);
    \u0275\u0275element(316, "span", 110);
    \u0275\u0275elementStart(317, "span", 107);
    \u0275\u0275text(318, "Sick Leave");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(319, "td", 111);
    \u0275\u0275text(320, "4.5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(321, "td", 109);
    \u0275\u0275text(322, "16");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(323, "td", 109);
    \u0275\u0275text(324, "20");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(325, "tr", 104)(326, "td", 105);
    \u0275\u0275element(327, "span", 112);
    \u0275\u0275elementStart(328, "span", 107);
    \u0275\u0275text(329, "Unpaid leave");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(330, "td", 111);
    \u0275\u0275text(331, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(332, "td", 109);
    \u0275\u0275text(333, "360");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(334, "td", 109);
    \u0275\u0275text(335, "365");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(336, "tr", 104)(337, "td", 105);
    \u0275\u0275element(338, "span", 113);
    \u0275\u0275elementStart(339, "span", 107);
    \u0275\u0275text(340, "Work from Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(341, "td", 111);
    \u0275\u0275text(342, "8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(343, "td", 109);
    \u0275\u0275text(344, "22");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(345, "td", 109);
    \u0275\u0275text(346, "30");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(347, "div", 114)(348, "div", 115)(349, "h5");
    \u0275\u0275text(350, "Vacation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(351, "div", 116)(352, "span", 117);
    \u0275\u0275text(353, "8 ");
    \u0275\u0275elementStart(354, "span", 118);
    \u0275\u0275text(355, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275text(356, " 16");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(357, "div", 115)(358, "h5");
    \u0275\u0275text(359, "Sick leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(360, "div", 116)(361, "span", 119);
    \u0275\u0275text(362, "4.5 ");
    \u0275\u0275elementStart(363, "span", 118);
    \u0275\u0275text(364, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275text(365, " 10");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(366, "div", 120)(367, "h5");
    \u0275\u0275text(368, "Unpaid leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(369, "div", 116)(370, "span", 121);
    \u0275\u0275text(371, "5 ");
    \u0275\u0275elementStart(372, "span", 118);
    \u0275\u0275text(373, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275text(374, " 365");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(375, "div", 28)(376, "div", 122)(377, "div", 30)(378, "div", 123)(379, "h4", 50);
    \u0275\u0275text(380, "Recent Job Application");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(381, "div", 124)(382, "a", 125);
    \u0275\u0275element(383, "span", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(384, "ul", 127)(385, "li")(386, "a", 58);
    \u0275\u0275element(387, "i", 128);
    \u0275\u0275text(388, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(389, "li")(390, "a", 58);
    \u0275\u0275element(391, "i", 129);
    \u0275\u0275text(392, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(393, "li")(394, "a", 58);
    \u0275\u0275element(395, "i", 130);
    \u0275\u0275text(396, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(397, "li")(398, "a", 58);
    \u0275\u0275element(399, "i", 131);
    \u0275\u0275text(400, "Download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(401, "li")(402, "a", 58);
    \u0275\u0275element(403, "i", 132);
    \u0275\u0275text(404, "More");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(405, "div", 133)(406, "div", 134)(407, "div", 135)(408, "span");
    \u0275\u0275text(409, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(410, "div", 136)(411, "div", 137)(412, "ng-select", 138)(413, "ng-option", 139);
    \u0275\u0275text(414, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(415, "ng-option", 140);
    \u0275\u0275text(416, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(417, "ng-option", 141);
    \u0275\u0275text(418, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(419, "ng-option", 142);
    \u0275\u0275text(420, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(421, "span");
    \u0275\u0275text(422, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(423, "div", 134)(424, "div", 143)(425, "a", 144);
    \u0275\u0275text(426, "New Task");
    \u0275\u0275element(427, "i", 145);
    \u0275\u0275elementEnd();
    \u0275\u0275element(428, "input", 146);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(429, "div", 147)(430, "table", 148)(431, "thead")(432, "tr")(433, "th", 34);
    \u0275\u0275text(434, "S.no");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(435, "th", 34);
    \u0275\u0275text(436, "Project Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(437, "th", 34);
    \u0275\u0275text(438, "Assigned to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(439, "th", 149);
    \u0275\u0275text(440, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(441, "th", 34);
    \u0275\u0275text(442, "Request Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(443, "th", 34);
    \u0275\u0275text(444, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(445, "tbody")(446, "tr")(447, "td", 150);
    \u0275\u0275text(448, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(449, "td", 151)(450, "div", 152)(451, "div", 153);
    \u0275\u0275element(452, "img", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(453, "div", 68)(454, "h5", 155);
    \u0275\u0275text(455, "Html Business Template");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(456, "td", 102)(457, "div", 156)(458, "span", 157);
    \u0275\u0275element(459, "img", 158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(460, "span", 157);
    \u0275\u0275element(461, "img", 159);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(462, "span", 157);
    \u0275\u0275element(463, "img", 160);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(464, "span", 157);
    \u0275\u0275element(465, "img", 161);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(466, "td", 102);
    \u0275\u0275text(467, "19 Feb 2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(468, "td", 102)(469, "a", 162);
    \u0275\u0275text(470, "Completed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(471, "td")(472, "div", 163)(473, "a", 164);
    \u0275\u0275element(474, "i", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(475, "div", 166);
    \u0275\u0275element(476, "input", 167);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(477, "tr")(478, "td", 102);
    \u0275\u0275text(479, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(480, "td", 151)(481, "div", 152)(482, "div", 168);
    \u0275\u0275element(483, "img", 169);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(484, "div", 68)(485, "h5", 155);
    \u0275\u0275text(486, "Adobe xd Education Template");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(487, "td", 102)(488, "div", 156)(489, "span", 157);
    \u0275\u0275element(490, "img", 170);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(491, "span", 157);
    \u0275\u0275element(492, "img", 160);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(493, "span", 157);
    \u0275\u0275element(494, "img", 158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(495, "span", 157);
    \u0275\u0275element(496, "img", 171);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(497, "td", 102);
    \u0275\u0275text(498, "24 Feb 2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(499, "td", 102)(500, "a", 172);
    \u0275\u0275text(501, "Accept");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(502, "td")(503, "div", 163)(504, "a", 164);
    \u0275\u0275element(505, "i", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(506, "div", 166);
    \u0275\u0275element(507, "input", 167);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(508, "tr")(509, "td", 102);
    \u0275\u0275text(510, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(511, "td", 151)(512, "div", 152)(513, "div", 173);
    \u0275\u0275element(514, "img", 174);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(515, "div", 68)(516, "h5", 155);
    \u0275\u0275text(517, "js recent Plugin Updated");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(518, "td", 102)(519, "div", 156)(520, "span", 157);
    \u0275\u0275element(521, "img", 175);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(522, "span", 157);
    \u0275\u0275element(523, "img", 176);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(524, "span", 157);
    \u0275\u0275element(525, "img", 177);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(526, "span", 157);
    \u0275\u0275element(527, "img", 178);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(528, "td", 102);
    \u0275\u0275text(529, "5 Mar 2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(530, "td", 102)(531, "a", 172);
    \u0275\u0275text(532, "Accept");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(533, "td")(534, "div", 163)(535, "a", 164);
    \u0275\u0275element(536, "i", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(537, "div", 166);
    \u0275\u0275element(538, "input", 179);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(539, "tr")(540, "td", 102);
    \u0275\u0275text(541, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(542, "td", 151)(543, "div", 152)(544, "div", 168);
    \u0275\u0275element(545, "img", 180);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(546, "div", 68)(547, "h5", 155);
    \u0275\u0275text(548, "Sass Development Program");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(549, "td", 102)(550, "div", 156)(551, "span", 157);
    \u0275\u0275element(552, "img", 161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(553, "span", 157);
    \u0275\u0275element(554, "img", 181);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(555, "span", 157);
    \u0275\u0275element(556, "img", 182);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(557, "span", 157);
    \u0275\u0275element(558, "img", 158);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(559, "td", 102);
    \u0275\u0275text(560, "14 Mar 2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(561, "td", 102)(562, "a", 183);
    \u0275\u0275text(563, "Completed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(564, "td")(565, "div", 163)(566, "a", 164);
    \u0275\u0275element(567, "i", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(568, "div", 166);
    \u0275\u0275element(569, "input", 167);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(570, "tr")(571, "td", 102);
    \u0275\u0275text(572, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(573, "td", 151)(574, "div", 152)(575, "div", 184);
    \u0275\u0275element(576, "img", 185);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(577, "div", 68)(578, "h5", 155);
    \u0275\u0275text(579, "Angular Development");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(580, "td", 102)(581, "div", 156)(582, "span", 157);
    \u0275\u0275element(583, "img", 181);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(584, "span", 157);
    \u0275\u0275element(585, "img", 186);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(586, "span", 157);
    \u0275\u0275element(587, "img", 187);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(588, "span", 157);
    \u0275\u0275element(589, "img", 182);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(590, "td", 102);
    \u0275\u0275text(591, "20 Mar 2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(592, "td", 102)(593, "a", 172);
    \u0275\u0275text(594, "Accept");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(595, "td")(596, "div", 163)(597, "a", 164);
    \u0275\u0275element(598, "i", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(599, "div", 166);
    \u0275\u0275element(600, "input", 179);
    \u0275\u0275elementEnd()()()()()()()()();
    \u0275\u0275elementStart(601, "div", 188)(602, "div", 61)(603, "div", 123)(604, "h4", 50);
    \u0275\u0275text(605, "Up Coming Birthdays");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(606, "div")(607, "a", 189);
    \u0275\u0275text(608, "View All");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(609, "div", 190)(610, "div", 191)(611, "table", 192)(612, "tbody")(613, "tr")(614, "td")(615, "div", 193);
    \u0275\u0275element(616, "img", 194);
    \u0275\u0275elementStart(617, "div", 68)(618, "a", 195);
    \u0275\u0275text(619, "Jennifer Kerr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(620, "p", 196);
    \u0275\u0275text(621, "19 Feb 2020 26 Years Old");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(622, "td")(623, "div", 197)(624, "a", 198);
    \u0275\u0275text(625, "Today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(626, "a", 199);
    \u0275\u0275element(627, "i", 200);
    \u0275\u0275text(628, "Wish Now");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(629, "tr")(630, "td")(631, "div", 193);
    \u0275\u0275element(632, "img", 201);
    \u0275\u0275elementStart(633, "div", 68)(634, "a", 195);
    \u0275\u0275text(635, "Rebecca Cameron");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(636, "p", 196);
    \u0275\u0275text(637, "19 Feb 2020 26 Years Old");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(638, "td")(639, "div", 197)(640, "a", 202);
    \u0275\u0275text(641, "22 Days To Left");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(642, "tr")(643, "td")(644, "div", 193);
    \u0275\u0275element(645, "img", 203);
    \u0275\u0275elementStart(646, "div", 68)(647, "a", 195);
    \u0275\u0275text(648, "Jessica Johnston");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(649, "p", 196);
    \u0275\u0275text(650, "19 Feb 2020 26 Years Old");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(651, "td")(652, "div", 197)(653, "a", 202);
    \u0275\u0275text(654, "22 Days To Left");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(655, "tr")(656, "td")(657, "div", 193);
    \u0275\u0275element(658, "img", 204);
    \u0275\u0275elementStart(659, "div", 68)(660, "a", 195);
    \u0275\u0275text(661, "Lily Ball");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(662, "p", 196);
    \u0275\u0275text(663, "19 Feb 2020 26 Years Old");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(664, "td")(665, "div", 197)(666, "a", 202);
    \u0275\u0275text(667, "22 Days To Left");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(668, "tr")(669, "td")(670, "div", 193);
    \u0275\u0275element(671, "img", 205);
    \u0275\u0275elementStart(672, "div", 68)(673, "a", 195);
    \u0275\u0275text(674, "Yadira Acklin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(675, "p", 196);
    \u0275\u0275text(676, "19 Feb 2020 26 Years Old");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(677, "td")(678, "div", 197)(679, "a", 202);
    \u0275\u0275text(680, "22 Days To Left");
    \u0275\u0275elementEnd()()()()()()()()()()();
    \u0275\u0275template(681, DashboardComponent_ng_template_681_Template, 61, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(683, DashboardComponent_ng_template_683_Template, 37, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275advance(22);
    \u0275\u0275property("noCalendar", true)("enableTime", true);
    \u0275\u0275advance(91);
    \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("legend", ctx.chartOptions.legend)("xaxis", ctx.chartOptions.xaxis)("colors", ctx.chartOptions.colors)("markers", ctx.chartOptions.markers)("stroke", ctx.chartOptions.stroke)("plotOptions", ctx.chartOptions.plotOptions)("dataLabels", ctx.chartOptions.dataLabels)("grid", ctx.chartOptions.grid)("labels", ctx.chartOptions.labels)("yaxis", ctx.chartOptions.yaxis);
    \u0275\u0275advance(87);
    \u0275\u0275property("options", ctx.calendarOptions);
  }
}, dependencies: [SharedModule, NgApexchartsModule, ChartComponent, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, CalendarModule, FullCalendarModule, FullCalendarComponent, RouterModule, FlatpickrModule, FlatpickrDirective, NgSelectModule, NgSelectComponent, NgOptionComponent] });
var DashboardComponent = _DashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent" });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-ONMERE6G.js.map
