import {
  DonutChartData
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
  FormsModule,
  ReactiveFormsModule
} from "./chunk-47LBZ5ZO.js";
import {
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import {
  __toESM
} from "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/employee-dashboard/apply-leaves/apply-leaves.component.ts
var import_moment = __toESM(require_moment());
var _c0 = ["external"];
var _ApplyLeavesComponent = class _ApplyLeavesComponent {
  constructor() {
    this.donutData = DonutChartData;
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
_ApplyLeavesComponent.\u0275fac = function ApplyLeavesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApplyLeavesComponent)();
};
_ApplyLeavesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplyLeavesComponent, selectors: [["app-apply-leaves"]], viewQuery: function ApplyLeavesComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.external = _t.first);
  }
}, standalone: true, features: [\u0275\u0275ProvidersFeature([
  FlatpickrDefaults
]), \u0275\u0275StandaloneFeature], decls: 98, vars: 11, consts: [[3, "title"], [1, "row"], [1, "col-xl-4", "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "border-0"], [1, "card-title"], [1, "card-body"], [1, "leave-types"], [1, "form-group"], [1, "form-label"], ["name", "projects", "id", "daterange-categories", "placeholder", "Single Leaves", 1, "form-control", "custom-select", "p-0"], ["value", "single"], ["value", "multiple"], [1, "leave-content"], [1, "form-group", "mb-3"], [1, "input-group"], [1, "input-group-text"], [1, "fe", "fe-calendar"], ["type", "text", "mwlFlatpickr", "", "placeholder", "19 Feb 2020", 1, "form-control", "choose-date"], ["name", "projects", "placeholder", "Select", 1, "form-control", "custom-select", "p-0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "8"], ["rows", "2", 1, "form-control"], [1, "card-footer"], [1, "d-flex", "align-items-center", "flex-wrap"], [1, "mb-0", "fw-semibold", "text-dark"], [1, "badge", "bg-danger", "badge-pill", "ms-2"], [1, "ms-auto"], ["href", "javascript:;", 1, "me-2", "mb-1", "btn", "btn-outline-primary", "my-1"], ["href", "javascript:;", 1, "mb-1", "btn", "btn-primary", "my-1"], [1, "col-xl-4", "col-lg-12", "col-md-12"], [1, "p-0"], [1, "card-header"], [1, "leave-calendar"], [3, "options"], ["id", "leavesoverview", 1, "mx-auto", "pt-2", 3, "series", "dataLabels", "stroke", "labels", "colors", "chart", "responsive", "plotOptions", "legend"], [1, "row", "pt-4", "mx-auto", "text-center"], [1, "col-xxl-9", "col-md-12", "mx-auto", "d-block"], [1, "col-md-6"], [1, "d-flex", "fw-semibold"], [1, "dot-label", "bg-primary", "me-2", "my-auto"], [1, "col-md-6", "mt-3", "mt-md-0"], [1, "dot-label", "bg-danger", "me-2", "my-auto"], [1, "col-md-6", "mt-3"], [1, "dot-label", "bg-secondary", "me-2", "my-auto"], [1, "dot-label", "bg-success", "me-2", "my-auto"]], template: function ApplyLeavesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
    \u0275\u0275text(6, "Apply Leaves");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "label", 9);
    \u0275\u0275text(11, "Leaves Dates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ng-select", 10)(13, "ng-option", 11);
    \u0275\u0275text(14, "Single Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ng-option", 12);
    \u0275\u0275text(16, "Multiple Leaves");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "label", 9);
    \u0275\u0275text(20, "Date Range:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 8)(22, "div", 15)(23, "div", 16);
    \u0275\u0275element(24, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 8)(27, "label", 9);
    \u0275\u0275text(28, "Leaves Types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ng-select", 19)(30, "ng-option", 20);
    \u0275\u0275text(31, "Half Day Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ng-option", 21);
    \u0275\u0275text(33, "Casual Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ng-option", 22);
    \u0275\u0275text(35, "Sick Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ng-option", 23);
    \u0275\u0275text(37, "Maternity Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-option", 24);
    \u0275\u0275text(39, "Paternity Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ng-option", 25);
    \u0275\u0275text(41, "Annual Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ng-option", 25);
    \u0275\u0275text(43, "Unpaid Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "ng-option", 26);
    \u0275\u0275text(45, "Other Leaves");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 8)(47, "label", 9);
    \u0275\u0275text(48, "Reason:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "textarea", 27);
    \u0275\u0275text(50, "Some text here...");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 28)(52, "div", 29)(53, "div")(54, "label", 30);
    \u0275\u0275text(55, "Selected Days:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 31);
    \u0275\u0275text(57, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 32)(59, "a", 33);
    \u0275\u0275text(60, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "a", 34);
    \u0275\u0275text(62, "Submit");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(63, "div", 35)(64, "div", 3)(65, "div", 36)(66, "div", 37)(67, "h4", 5);
    \u0275\u0275text(68, "Calendar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 6)(70, "div", 38);
    \u0275\u0275element(71, "full-calendar", 39);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(72, "div", 2)(73, "div", 3)(74, "div", 4)(75, "h4", 5);
    \u0275\u0275text(76, "Leaves Overview");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 6);
    \u0275\u0275element(78, "apx-chart", 40);
    \u0275\u0275elementStart(79, "div", 41)(80, "div", 42)(81, "div", 1)(82, "div", 43)(83, "div", 44);
    \u0275\u0275element(84, "span", 45);
    \u0275\u0275text(85, "Casual Leaves ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 46)(87, "div", 44);
    \u0275\u0275element(88, "span", 47);
    \u0275\u0275text(89, "Sick Leaves ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 48)(91, "div", 44);
    \u0275\u0275element(92, "span", 49);
    \u0275\u0275text(93, "Gifted Leaves ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 48)(95, "div", 44);
    \u0275\u0275element(96, "span", 50);
    \u0275\u0275text(97, "Remaining Leaves ");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", "Apply Leaves");
    \u0275\u0275advance(71);
    \u0275\u0275property("options", ctx.calendarOptions);
    \u0275\u0275advance(7);
    \u0275\u0275property("series", ctx.donutData.series)("dataLabels", ctx.donutData.dataLabels)("stroke", ctx.donutData.stroke)("labels", ctx.donutData.labels)("colors", ctx.donutData.colors)("chart", ctx.donutData.chart)("responsive", ctx.donutData.responsive)("plotOptions", ctx.donutData.plotOptions)("legend", ctx.donutData.legend);
  }
}, dependencies: [NgApexchartsModule, ChartComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, SharedModule, PageHeaderComponent, FormsModule, ReactiveFormsModule, FlatpickrModule, FlatpickrDirective, FullCalendarModule, FullCalendarComponent, RouterModule] });
var ApplyLeavesComponent = _ApplyLeavesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplyLeavesComponent, { className: "ApplyLeavesComponent" });
})();
export {
  ApplyLeavesComponent
};
//# sourceMappingURL=apply-leaves.component-EX67OKA5.js.map
