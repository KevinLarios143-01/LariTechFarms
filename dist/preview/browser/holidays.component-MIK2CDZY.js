import {
  addDays,
  addHours,
  endOfDay,
  endOfMonth,
  isSameDay,
  isSameMonth,
  startOfDay,
  subDays
} from "./chunk-GWPR4U4C.js";
import {
  CalendarDatePipe,
  CalendarDayViewComponent,
  CalendarModule,
  CalendarMonthViewComponent,
  CalendarNextViewDirective,
  CalendarPreviousViewDirective,
  CalendarTodayDirective,
  CalendarView,
  CalendarWeekViewComponent
} from "./chunk-S25NIHUP.js";
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
  NgbModal,
  NgbModule
} from "./chunk-47LBZ5ZO.js";
import {
  RouterModule,
  Subject,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/hrmdashboards/holidays/holidays.component.ts
var _c0 = ["modalContent"];
function HolidaysComponent_For_130_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 74);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "a", 75);
    \u0275\u0275listener("click", function HolidaysComponent_For_130_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      const content_r4 = \u0275\u0275reference(179);
      return \u0275\u0275resetView(ctx_r2.open(content_r4));
    });
    \u0275\u0275element(11, "i", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 77);
    \u0275\u0275listener("click", function HolidaysComponent_For_130_Template_a_click_12_listener() {
      const holiday_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove(holiday_r5.number));
    });
    \u0275\u0275element(13, "i", 78);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const holiday_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(holiday_r5.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(holiday_r5.day);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(holiday_r5.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(holiday_r5.holidaytype);
  }
}
function HolidaysComponent_Case_175_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mwl-calendar-month-view", 79);
    \u0275\u0275listener("dayClicked", function HolidaysComponent_Case_175_Template_mwl_calendar_month_view_dayClicked_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dayClicked($event.day));
    })("eventClicked", function HolidaysComponent_Case_175_Template_mwl_calendar_month_view_eventClicked_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleEvent("Clicked", $event.event));
    })("eventTimesChanged", function HolidaysComponent_Case_175_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eventTimesChanged($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("viewDate", ctx_r2.viewDate)("events", ctx_r2.events)("activeDayIsOpen", ctx_r2.activeDayIsOpen)("refresh", ctx_r2.refresh);
  }
}
function HolidaysComponent_Case_176_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mwl-calendar-week-view", 80);
    \u0275\u0275listener("eventClicked", function HolidaysComponent_Case_176_Template_mwl_calendar_week_view_eventClicked_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleEvent("Clicked", $event.event));
    })("eventTimesChanged", function HolidaysComponent_Case_176_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eventDropped($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("viewDate", ctx_r2.viewDate)("events", ctx_r2.events)("refresh", ctx_r2.refresh)("snapDraggedEvents", false);
  }
}
function HolidaysComponent_Case_177_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mwl-calendar-day-view", 80);
    \u0275\u0275listener("eventClicked", function HolidaysComponent_Case_177_Template_mwl_calendar_day_view_eventClicked_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleEvent("Clicked", $event.event));
    })("eventTimesChanged", function HolidaysComponent_Case_177_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eventDropped($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("viewDate", ctx_r2.viewDate)("events", ctx_r2.events)("refresh", ctx_r2.refresh)("snapDraggedEvents", false);
  }
}
function HolidaysComponent_ng_template_178_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "h5", 83);
    \u0275\u0275text(3, "Add Holidays");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 84);
    \u0275\u0275listener("click", function HolidaysComponent_ng_template_178_Template_button_click_4_listener() {
      const modal_r10 = \u0275\u0275restoreView(_r9).$implicit;
      return \u0275\u0275resetView(modal_r10.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 85)(6, "div", 86)(7, "label", 8);
    \u0275\u0275text(8, "Select Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 9)(11, "div", 10);
    \u0275\u0275element(12, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 7)(15, "label", 8);
    \u0275\u0275text(16, "Enter Occasion");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 88)(19, "button", 89);
    \u0275\u0275listener("click", function HolidaysComponent_ng_template_178_Template_button_click_19_listener() {
      const modal_r10 = \u0275\u0275restoreView(_r9).$implicit;
      return \u0275\u0275resetView(modal_r10.close("cross click"));
    });
    \u0275\u0275text(20, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 90);
    \u0275\u0275text(22, "Add");
    \u0275\u0275elementEnd()()();
  }
}
var colors = {
  red: {
    primary: "#705ec8",
    secondary: "#6958be"
  },
  blue: {
    primary: "#fb1c52",
    secondary: "#f83e6b"
  },
  yellow: {
    primary: "#ffab00",
    secondary: "#f3a403"
  }
};
var _HolidaysComponent = class _HolidaysComponent {
  remove(number) {
    const data = this.holidays.filter((x) => x.number !== number);
    this.holidays = data;
  }
  constructor(modalService) {
    this.modalService = modalService;
    this.holidays = [
      {
        number: "01",
        day: "Thursday",
        date: "14-01-2021",
        holidaytype: "Pongal Holiday"
      },
      {
        number: "02",
        day: "Tuesday",
        date: "26-01-2021",
        holidaytype: "Republic Holiday"
      },
      {
        number: "03",
        day: "Thursday",
        date: "11-03-2021",
        holidaytype: "Mahashivratri Holiday"
      },
      {
        number: "04",
        day: "Monday",
        date: "29-03-2021",
        holidaytype: "Holi Holiday"
      },
      {
        number: "05",
        day: "Tuesday",
        date: "13-04-2021",
        holidaytype: "Ugadi Holiday"
      },
      {
        number: "06",
        day: "Wednesday",
        date: "14-04-2021",
        holidaytype: "Ambedkar Jayanti Holiday"
      },
      {
        number: "07",
        day: "Sunday",
        date: "15-08-2021",
        holidaytype: "Independence Day Holiday"
      },
      {
        number: "08",
        day: "Friday",
        date: "10-09-2021",
        holidaytype: "Ganesh Chaturthi Holiday"
      },
      {
        number: "09",
        day: "Friday",
        date: "02-10-2021",
        holidaytype: "Gandhi Jayanti Holiday"
      },
      {
        number: "10",
        day: "Friday",
        date: "14-10-2021",
        holidaytype: "Dussehra Holiday"
      },
      {
        number: "11",
        day: "Friday",
        date: "04-11-2021",
        holidaytype: "Diwali Holiday"
      },
      {
        number: "12",
        day: "Saturday",
        date: "25-12-2021",
        holidaytype: "Merry Christmas Holiday"
      }
    ];
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
    this.CalendarView = CalendarView;
    this.view = CalendarView.Month;
    this.viewDate = /* @__PURE__ */ new Date();
    this.actions = [
      {
        label: '<i class="fas fa-fw fa-pencil-alt"></i>',
        a11yLabel: "Edit",
        onClick: ({ event }) => {
          this.handleEvent("Edited", event);
        }
      },
      {
        label: '<i class="fas fa-fw fa-trash-alt"></i>',
        a11yLabel: "Delete",
        onClick: ({ event }) => {
          this.events = this.events.filter((iEvent) => iEvent !== event);
          this.handleEvent("Deleted", event);
        }
      }
    ];
    this.refresh = new Subject();
    this.events = [
      {
        start: subDays(startOfDay(/* @__PURE__ */ new Date()), 1),
        end: addDays(/* @__PURE__ */ new Date(), 1),
        title: "Calender Event",
        color: colors.red,
        actions: this.actions,
        allDay: false,
        draggable: true,
        cssClass: "primary"
      },
      {
        start: startOfDay(/* @__PURE__ */ new Date()),
        end: /* @__PURE__ */ new Date(),
        title: "Birthday EVents",
        color: colors.yellow,
        actions: this.actions,
        draggable: true,
        cssClass: "secondary "
      },
      {
        start: subDays(endOfMonth(/* @__PURE__ */ new Date()), 3),
        end: addDays(endOfMonth(/* @__PURE__ */ new Date()), 3),
        title: "Holiday Calendar",
        color: colors.blue,
        allDay: true,
        draggable: true,
        cssClass: "success  "
      },
      {
        start: addHours(startOfDay(/* @__PURE__ */ new Date()), 2),
        end: addHours(/* @__PURE__ */ new Date(), 2),
        title: "Office Events",
        color: colors.blue,
        actions: this.actions,
        draggable: true,
        cssClass: "info  "
      },
      {
        start: addHours(startOfDay(/* @__PURE__ */ new Date()), 2),
        end: addHours(/* @__PURE__ */ new Date(), 2),
        title: "Other Events",
        color: colors.blue,
        actions: this.actions,
        draggable: true,
        cssClass: "warning  "
      },
      {
        start: addHours(startOfDay(/* @__PURE__ */ new Date()), 2),
        end: addHours(/* @__PURE__ */ new Date(), 2),
        title: "Festival Events",
        color: colors.blue,
        actions: this.actions,
        draggable: true,
        cssClass: "danger  "
      },
      {
        start: addHours(startOfDay(/* @__PURE__ */ new Date()), 2),
        end: addHours(/* @__PURE__ */ new Date(), 2),
        title: "TimeLine Events",
        color: colors.blue,
        actions: this.actions,
        draggable: true,
        cssClass: "teal  "
      }
    ];
    this.activeDayIsOpen = false;
  }
  open(content) {
    this.modalService.open(content, { windowClass: "modalCusSty" });
  }
  // flatpickrOptions: FlatpickrOptions;
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
  dayClicked({ date, events }) {
    if (isSameMonth(date, this.viewDate)) {
      if (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }
  eventTimesChanged({ event, newStart, newEnd }) {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return __spreadProps(__spreadValues({}, event), {
          start: newStart,
          end: newEnd
        });
      }
      return iEvent;
    });
    this.handleEvent("Dropped or resized", event);
  }
  handleEvent(action, event) {
    this.modalData = { event, action };
  }
  addEvent() {
    this.newEvent = {
      title: "New event",
      start: startOfDay(/* @__PURE__ */ new Date()),
      end: endOfDay(/* @__PURE__ */ new Date()),
      color: colors.red,
      draggable: true,
      actions: this.actions,
      cssClass: "primary"
    };
    this.events.push(this.newEvent);
    this.handleEvent("Add new event", this.newEvent);
    this.refresh.next(true);
  }
  eventDropped({ event, newStart, newEnd, allDay }) {
    const externalIndex = this.events.indexOf(event);
    if (typeof allDay !== "undefined") {
      event.allDay = allDay;
    }
    if (externalIndex > -1) {
      this.events.splice(externalIndex, 1);
      this.events.push(event);
    }
    event.start = newStart;
    if (newEnd) {
      event.end = newEnd;
    }
    if (this.view === "month") {
      this.viewDate = newStart;
      this.activeDayIsOpen = true;
    }
    this.events = [...this.events];
  }
  externalDrop(event) {
    if (this.events.indexOf(event) === -1) {
      this.events = this.events.filter((iEvent) => iEvent !== event);
      this.events.push(event);
    }
  }
  deleteEvent(eventToDelete) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }
  setView(view) {
    this.view = view;
  }
  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
};
_HolidaysComponent.\u0275fac = function HolidaysComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HolidaysComponent)(\u0275\u0275directiveInject(NgbModal));
};
_HolidaysComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HolidaysComponent, selectors: [["app-holidays"]], viewQuery: function HolidaysComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.modalContent = _t.first);
  }
}, standalone: true, features: [\u0275\u0275ProvidersFeature([
  FlatpickrDefaults
]), \u0275\u0275StandaloneFeature], decls: 180, vars: 23, consts: [["content", ""], [3, "title", "title3", "class1", "path"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-body", "holiday-firstcards"], [1, "col-md-12", "col-lg-3"], [1, "form-group"], [1, "form-label"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["type", "text", "mwlFlatpickr", "", "placeholder", "22-09-2023", 1, "form-control", "choose-date"], ["name", "attendance", "data-trigger", "", "placeholder", "January", 1, "form-control", "custom-select", "p-0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["name", "attendance", "data-trigger", "", "placeholder", "2021", 1, "form-control", "custom-select", "p-0"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], [1, "form-group", "mt-2"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-grid"], [1, "col-md-12", "col-lg-12", "col-xxl-8"], [1, "card-header", "border-0"], [1, "card-title"], [1, "card-body"], [1, "row", "mb-3", "gap-1", "gap-lg-0"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mb-0"], ["name", "quantity", "id", "select-countries17", "data-trigger", "", 1, "form-control", "wd-150"], ["value", "1", "selected", ""], [1, "float-end"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "table-responsive"], ["id", "hr-holiday", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom"], [1, "border-bottom-0", "w-5"], [1, "border-bottom-0"], [1, "mt-4"], [1, "pagination", "justify-content-end", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item", "active"], [1, "page-item"], [1, "col-md-12", "col-lg-12", "col-xxl-4"], [1, "card"], ["id", "calendar1", 1, "calendar-holiday"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-1"], [1, "text-start", "mb-2"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "viewDateChange", "view", "viewDate"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "viewDateChange", "view", "viewDate"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right"], ["mwlCalendarToday", "", 1, "btn", "btn-primary", "ms-2", "disabled", 3, "viewDateChange", "viewDate"], [1, "mb-2"], [1, "text-end", "mb-2"], [1, "btn", "btn-primary", "mb-1", 3, "click"], [1, "btn", "btn-raised", "btn-primary", "float-end", "mb-1", 3, "click"], [3, "viewDate", "events", "activeDayIsOpen", "refresh"], [3, "viewDate", "events", "refresh", "snapDraggedEvents"], ["id", "holidaymodal"], [1, "fw-medium"], ["data-bs-toggle", "modal", "data-bs-target", "#holidaymodal", 1, "btn", "btn-primary", "btn-icon", 3, "click"], ["data-bs-toggle", "tooltip", "data-original-title", "View/Edit", 1, "fe", "fe-edit"], ["data-bs-toggle", "tooltip", "data-original-title", "Delete", 1, "btn", "btn-danger", "btn-icon", 3, "click"], [1, "fe", "fe-trash-2"], [3, "dayClicked", "eventClicked", "eventTimesChanged", "viewDate", "events", "activeDayIsOpen", "refresh"], [3, "eventClicked", "eventTimesChanged", "viewDate", "events", "refresh", "snapDraggedEvents"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "form-group", "mb-3"], ["placeholder", "occasion title", 1, "form-control"], [1, "modal-footer"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-primary"]], template: function HolidaysComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 2)(6, "div", 6)(7, "div", 7)(8, "label", 8);
    \u0275\u0275text(9, "Select Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 9)(12, "div", 10);
    \u0275\u0275element(13, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 6)(16, "div", 7)(17, "label", 8);
    \u0275\u0275text(18, "Month:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ng-select", 13)(20, "ng-option", 14);
    \u0275\u0275text(21, "January");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ng-option", 15);
    \u0275\u0275text(23, "February");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ng-option", 16);
    \u0275\u0275text(25, "March");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ng-option", 17);
    \u0275\u0275text(27, "April");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ng-option", 18);
    \u0275\u0275text(29, "May");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ng-option", 19);
    \u0275\u0275text(31, "June");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ng-option", 20);
    \u0275\u0275text(33, "July");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ng-option", 21);
    \u0275\u0275text(35, "August");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ng-option", 22);
    \u0275\u0275text(37, "September");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-option", 23);
    \u0275\u0275text(39, "October");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ng-option", 24);
    \u0275\u0275text(41, "November");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ng-option", 25);
    \u0275\u0275text(43, "December");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 6)(45, "div", 7)(46, "label", 8);
    \u0275\u0275text(47, "Year:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "ng-select", 26)(49, "ng-option", 14);
    \u0275\u0275text(50, "2024");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ng-option", 15);
    \u0275\u0275text(52, "2023");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ng-option", 16);
    \u0275\u0275text(54, "2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ng-option", 17);
    \u0275\u0275text(56, "2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ng-option", 18);
    \u0275\u0275text(58, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "ng-option", 19);
    \u0275\u0275text(60, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "ng-option", 20);
    \u0275\u0275text(62, "2018");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ng-option", 21);
    \u0275\u0275text(64, "2017");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "ng-option", 22);
    \u0275\u0275text(66, "2016");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "ng-option", 23);
    \u0275\u0275text(68, "2015");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ng-option", 24);
    \u0275\u0275text(70, "2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ng-option", 25);
    \u0275\u0275text(72, "2013");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "ng-option", 27);
    \u0275\u0275text(74, "2012");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "ng-option", 28);
    \u0275\u0275text(76, "2011");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "ng-option", 29);
    \u0275\u0275text(78, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "ng-option", 30);
    \u0275\u0275text(80, "2010");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(81, "div", 6)(82, "div", 31);
    \u0275\u0275element(83, "label", 8);
    \u0275\u0275elementStart(84, "a", 32);
    \u0275\u0275text(85, "Search");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(86, "div", 2)(87, "div", 33)(88, "div", 4)(89, "div", 34)(90, "h4", 35);
    \u0275\u0275text(91, "Holidays Lists");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 36)(93, "div", 37)(94, "div", 38)(95, "div", 39)(96, "span");
    \u0275\u0275text(97, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "div", 40)(99, "div", 41)(100, "select", 42)(101, "option", 43);
    \u0275\u0275text(102, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "option", 15);
    \u0275\u0275text(104, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "option", 16);
    \u0275\u0275text(106, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "option", 17);
    \u0275\u0275text(108, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(109, "span");
    \u0275\u0275text(110, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(111, "div", 38)(112, "div", 44);
    \u0275\u0275element(113, "input", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(114, "div", 46)(115, "table", 47)(116, "thead")(117, "tr")(118, "th", 48);
    \u0275\u0275text(119, "No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "th", 48);
    \u0275\u0275text(121, "Day");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "th", 49);
    \u0275\u0275text(123, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "th", 49);
    \u0275\u0275text(125, "Holidays");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "th", 49);
    \u0275\u0275text(127, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(128, "tbody");
    \u0275\u0275repeaterCreate(129, HolidaysComponent_For_130_Template, 14, 4, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(131, "nav", 50)(132, "ul", 51)(133, "li", 52)(134, "a", 53);
    \u0275\u0275text(135, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(136, "li", 54)(137, "a", 53);
    \u0275\u0275text(138, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(139, "li", 55)(140, "a", 53);
    \u0275\u0275text(141, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "li", 55)(143, "a", 53);
    \u0275\u0275text(144, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "li", 55)(146, "a", 53);
    \u0275\u0275text(147, "Next");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(148, "div", 56)(149, "div", 57)(150, "div", 36)(151, "div", 58)(152, "div", 59)(153, "div", 60)(154, "div", 61)(155, "div", 62);
    \u0275\u0275twoWayListener("viewDateChange", function HolidaysComponent_Template_div_viewDateChange_155_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.viewDate, $event) || (ctx.viewDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("viewDateChange", function HolidaysComponent_Template_div_viewDateChange_155_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOpenMonthViewDay());
    });
    \u0275\u0275element(156, "i", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "div", 64);
    \u0275\u0275twoWayListener("viewDateChange", function HolidaysComponent_Template_div_viewDateChange_157_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.viewDate, $event) || (ctx.viewDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("viewDateChange", function HolidaysComponent_Template_div_viewDateChange_157_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOpenMonthViewDay());
    });
    \u0275\u0275element(158, "i", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(159, "div", 66);
    \u0275\u0275twoWayListener("viewDateChange", function HolidaysComponent_Template_div_viewDateChange_159_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.viewDate, $event) || (ctx.viewDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(160, " Today ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(161, "div", 67)(162, "h3");
    \u0275\u0275text(163);
    \u0275\u0275pipe(164, "calendarDate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(165, "div", 68)(166, "div", 61)(167, "div", 69);
    \u0275\u0275listener("click", function HolidaysComponent_Template_div_click_167_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setView(ctx.CalendarView.Month));
    });
    \u0275\u0275text(168, " Month ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "div", 69);
    \u0275\u0275listener("click", function HolidaysComponent_Template_div_click_169_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setView(ctx.CalendarView.Week));
    });
    \u0275\u0275text(170, " Week ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(171, "div", 69);
    \u0275\u0275listener("click", function HolidaysComponent_Template_div_click_171_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setView(ctx.CalendarView.Day));
    });
    \u0275\u0275text(172, " Day ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(173, "button", 70);
    \u0275\u0275listener("click", function HolidaysComponent_Template_button_click_173_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addEvent());
    });
    \u0275\u0275text(174, " List ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(175, HolidaysComponent_Case_175_Template, 1, 4, "mwl-calendar-month-view", 71)(176, HolidaysComponent_Case_176_Template, 1, 4, "mwl-calendar-week-view", 72)(177, HolidaysComponent_Case_177_Template, 1, 4, "mwl-calendar-day-view", 72);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(178, HolidaysComponent_ng_template_178_Template, 23, 0, "ng-template", 73, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_16_0;
    \u0275\u0275classMap("");
    \u0275\u0275property("title", "Holidays")("title3", "Add Holidays")("class1", "btn btn-primary")("path", "");
    \u0275\u0275advance(129);
    \u0275\u0275repeater(ctx.holidays);
    \u0275\u0275advance(26);
    \u0275\u0275property("view", ctx.view);
    \u0275\u0275twoWayProperty("viewDate", ctx.viewDate);
    \u0275\u0275advance(2);
    \u0275\u0275property("view", ctx.view);
    \u0275\u0275twoWayProperty("viewDate", ctx.viewDate);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("viewDate", ctx.viewDate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(164, 19, ctx.viewDate, ctx.view + "ViewTitle", "en"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx.view === ctx.CalendarView.Month);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.view === ctx.CalendarView.Week);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.view === ctx.CalendarView.Day);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_16_0 = ctx.view) === "month" ? 175 : tmp_16_0 === "week" ? 176 : tmp_16_0 === "day" ? 177 : -1);
  }
}, dependencies: [NgSelectModule, NgSelectComponent, NgOptionComponent, NgbModule, SharedModule, HrDashboardPageHeaderComponent, FlatpickrModule, FlatpickrDirective, CalendarModule, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarMonthViewComponent, CalendarWeekViewComponent, CalendarDayViewComponent, RouterModule] });
var HolidaysComponent = _HolidaysComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HolidaysComponent, { className: "HolidaysComponent" });
})();
export {
  HolidaysComponent
};
//# sourceMappingURL=holidays.component-MIK2CDZY.js.map
