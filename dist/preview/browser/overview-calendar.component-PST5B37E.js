import {
  ExternalDraggable,
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
  HrDashboardPageHeaderComponent,
  MaterialModuleModule,
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
  NgbModal,
  NgbModule,
  ReactiveFormsModule
} from "./chunk-47LBZ5ZO.js";
import {
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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

// src/app/componets/dashbord/hrmdashboards/attendance/overview-calendar/overview-calendar.component.ts
var import_moment = __toESM(require_moment());
var _c0 = ["external"];
var _OverviewCalendarComponent = class _OverviewCalendarComponent {
  constructor(modal) {
    this.modal = modal;
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
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,dayGridWeek,dayGridDay"
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
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
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
  ngAfterViewInit() {
    const containerEl = this.external.nativeElement;
    new ExternalDraggable(containerEl, {
      itemSelector: ".fc-event",
      eventData: (eventEl) => {
        return {
          title: eventEl.innerText.trim(),
          className: eventEl.className + " overflow-hidden"
        };
      }
    });
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
};
_OverviewCalendarComponent.\u0275fac = function OverviewCalendarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OverviewCalendarComponent)(\u0275\u0275directiveInject(NgbModal));
};
_OverviewCalendarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OverviewCalendarComponent, selectors: [["app-overview-calendar"]], viewQuery: function OverviewCalendarComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.external = _t.first);
  }
}, standalone: true, features: [\u0275\u0275ProvidersFeature([
  FlatpickrDefaults
]), \u0275\u0275StandaloneFeature], decls: 215, vars: 7, consts: [["external", ""], [3, "title", "title2", "path"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "border-0"], [1, "card-title"], [1, "card-body"], [1, "col-md-12", "col-lg-5"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], ["placeholder", "Select Employee", 1, "form-control", "custom-select", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["type", "text", "mwlFlatpickr", "", "placeholder", "DD-MM-YYYY", "readonly", "readonly", 1, "form-control", "choose-date", "flatpickr-input"], ["placeholder", "Select Month", 1, "form-control", "custom-select", "p-0"], ["placeholder", "Select Year", 1, "form-control", "custom-select", "p-0"], ["value", "1"], ["value", "4", "selected", ""], ["value", "16"], [1, "col-md-12", "col-lg-2"], [1, "form-group", "mt-2"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-grid"], [1, "col-xl-3"], [1, "card-header", "d-grid"], [1, "btn", "btn-primary-light", "btn-wave"], [1, "ri-add-line", "align-middle", "me-1", "fw-medium", "d-inline-block"], [1, "card-body", "p-0"], ["id", "external-events", 1, "border-bottom", "p-3", "overview-cal"], [1, "fc-event", "fc-h-event", "fc-daygrid-event", "fc-daygrid-block-event", "bg-primary", "border", "border-primary"], [1, "fc-event-main"], ["data-class", "bg-secondary", 1, "fc-event", "fc-h-event", "fc-daygrid-event", "fc-daygrid-block-event", "bg-secondary", "border", "border-secondary"], ["data-class", "bg-success", 1, "fc-event", "fc-h-event", "fc-daygrid-event", "fc-daygrid-block-event", "bg-success", "border", "border-success"], ["data-class", "bg-info", 1, "fc-event", "fc-h-event", "fc-daygrid-event", "fc-daygrid-block-event", "bg-info", "border", "border-info"], ["data-class", "bg-warning", 1, "fc-event", "fc-h-event", "fc-daygrid-event", "fc-daygrid-block-event", "bg-warning", "border", "border-warning"], ["data-class", "bg-danger", 1, "fc-event", "fc-h-event", "fc-daygrid-event", "fc-daygrid-block-event", "bg-danger", "border", "border-danger"], ["data-class", "bg-danger", 1, "fc-event", "fc-h-event", "fc-daygrid-event", "fc-daygrid-block-event", "bg-teal", "border", "border-teal"], [1, "p-3", "border-bottom"], [1, "d-flex", "align-items-center", "mb-4", "justify-content-between"], [1, "fw-medium"], [1, "btn", "btn-primary-light", "btn-sm"], ["id", "full-calendar-activity", 1, "list-unstyled", "mb-0", "fullcalendar-events-activity"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap"], [1, "mb-1", "fw-medium"], [1, "badge", "bg-light", "text-default", "mb-1"], [1, "mb-0", "text-muted", "fs-12"], [1, "badge", "bg-success", "mb-1"], [1, "badge", "bg-warning-transparent", "mb-1"], [1, "badge", "bg-danger-transparent", "mb-1"], [1, "p-3", "text-center"], ["src", "./assets/images/media/png/1.png", "alt", "", 1, "w-65"], [1, "col-xl-9"], [1, "card-header"], ["id", "calendar2"], [3, "options", "events"]], template: function OverviewCalendarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h4", 6);
    \u0275\u0275text(6, "Days Overview This Month");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "div", 2)(9, "div", 8)(10, "div", 2)(11, "div", 9)(12, "div", 10)(13, "label", 11);
    \u0275\u0275text(14, "Employee Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ng-select", 12)(16, "ng-option", 13);
    \u0275\u0275text(17, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ng-option", 14);
    \u0275\u0275text(19, "Austin Bell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ng-option", 15);
    \u0275\u0275text(21, "Maria Bower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ng-option", 16);
    \u0275\u0275text(23, "Peter Hill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ng-option", 17);
    \u0275\u0275text(25, "Victoria Lyman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ng-option", 18);
    \u0275\u0275text(27, "Adam Quinn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ng-option", 19);
    \u0275\u0275text(29, "Melanie Coleman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ng-option", 20);
    \u0275\u0275text(31, "Max Wilson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ng-option", 21);
    \u0275\u0275text(33, "Amelia Russell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ng-option", 22);
    \u0275\u0275text(35, "Justin Metcalfe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ng-option", 23);
    \u0275\u0275text(37, "Ryan Young");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-option", 24);
    \u0275\u0275text(39, "Jennifer Hardacre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ng-option", 25);
    \u0275\u0275text(41, "Justin Parr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ng-option", 26);
    \u0275\u0275text(43, "Julia Hodges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "ng-option", 27);
    \u0275\u0275text(45, "Michael Sutherland");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 9)(47, "div", 10)(48, "label", 11);
    \u0275\u0275text(49, "Select Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 28)(51, "div", 29);
    \u0275\u0275element(52, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 31);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(54, "div", 8)(55, "div", 2)(56, "div", 9)(57, "div", 10)(58, "label", 11);
    \u0275\u0275text(59, "Month:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "ng-select", 32)(61, "ng-option", 13);
    \u0275\u0275text(62, "January");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ng-option", 14);
    \u0275\u0275text(64, "February");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "ng-option", 15);
    \u0275\u0275text(66, "March");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "ng-option", 16);
    \u0275\u0275text(68, "April");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ng-option", 17);
    \u0275\u0275text(70, "May");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ng-option", 18);
    \u0275\u0275text(72, "June");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "ng-option", 19);
    \u0275\u0275text(74, "July");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "ng-option", 20);
    \u0275\u0275text(76, "August");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "ng-option", 21);
    \u0275\u0275text(78, "September");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "ng-option", 22);
    \u0275\u0275text(80, "October");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "ng-option", 23);
    \u0275\u0275text(82, "November");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "ng-option", 24);
    \u0275\u0275text(84, "December");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(85, "div", 9)(86, "div", 10)(87, "label", 11);
    \u0275\u0275text(88, "Year:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "ng-select", 33)(90, "ng-option", 34);
    \u0275\u0275text(91, "2024");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "ng-option", 14);
    \u0275\u0275text(93, "2023");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "ng-option", 15);
    \u0275\u0275text(95, "2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "ng-option", 35);
    \u0275\u0275text(97, "2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "ng-option", 17);
    \u0275\u0275text(99, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "ng-option", 18);
    \u0275\u0275text(101, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "ng-option", 19);
    \u0275\u0275text(103, "2018");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "ng-option", 20);
    \u0275\u0275text(105, "2017");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "ng-option", 21);
    \u0275\u0275text(107, "2016");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "ng-option", 22);
    \u0275\u0275text(109, "2015");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "ng-option", 23);
    \u0275\u0275text(111, "2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "ng-option", 24);
    \u0275\u0275text(113, "2013");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "ng-option", 25);
    \u0275\u0275text(115, "2012");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "ng-option", 26);
    \u0275\u0275text(117, "2011");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "ng-option", 27);
    \u0275\u0275text(119, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "ng-option", 36);
    \u0275\u0275text(121, "2010");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(122, "div", 37)(123, "div", 38);
    \u0275\u0275element(124, "label", 11);
    \u0275\u0275elementStart(125, "a", 39);
    \u0275\u0275text(126, "Search");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(127, "div", 2)(128, "div", 40)(129, "div", 4)(130, "div", 41)(131, "button", 42);
    \u0275\u0275element(132, "i", 43);
    \u0275\u0275text(133, "Create New Event");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "div", 44)(135, "div", 45, 0)(137, "div", 46)(138, "div", 47);
    \u0275\u0275text(139, "Calendar Events");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "div", 48)(141, "div", 47);
    \u0275\u0275text(142, "Birthday EVents");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "div", 49)(144, "div", 47);
    \u0275\u0275text(145, "Holiday Calendar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(146, "div", 50)(147, "div", 47);
    \u0275\u0275text(148, "Office Events");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(149, "div", 51)(150, "div", 47);
    \u0275\u0275text(151, "Other Events");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "div", 52)(153, "div", 47);
    \u0275\u0275text(154, "Festival Events");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(155, "div", 53)(156, "div", 47);
    \u0275\u0275text(157, "Timeline Events");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(158, "div", 54)(159, "div", 55)(160, "h6", 56);
    \u0275\u0275text(161, " Activity : ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "button", 57);
    \u0275\u0275text(163, "View All");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(164, "ul", 58)(165, "li")(166, "div", 59)(167, "p", 60);
    \u0275\u0275text(168, " Monday, Jan 1,2023 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "span", 61);
    \u0275\u0275text(170, "12:00PM - 1:00PM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(171, "p", 62);
    \u0275\u0275text(172, " Meeting with a client about new project requirement. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(173, "li")(174, "div", 59)(175, "p", 60);
    \u0275\u0275text(176, " Thursday, Dec 29,2022 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(177, "span", 63);
    \u0275\u0275text(178, "Completed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(179, "p", 62);
    \u0275\u0275text(180, " Birthday party of niha suka ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(181, "li")(182, "div", 59)(183, "p", 60);
    \u0275\u0275text(184, " Wednesday, Jan 3,2023 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(185, "span", 64);
    \u0275\u0275text(186, "Reminder");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(187, "p", 62);
    \u0275\u0275text(188, " Work target for new project is completing ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(189, "li")(190, "div", 59)(191, "p", 60);
    \u0275\u0275text(192, " Friday, Jan 20,2023 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "span", 61);
    \u0275\u0275text(194, "06:00PM - 09:00PM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(195, "p", 62);
    \u0275\u0275text(196, " Watch new movie with family ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(197, "li")(198, "div", 59)(199, "p", 60);
    \u0275\u0275text(200, " Saturday, Jan 07,2023 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(201, "span", 65);
    \u0275\u0275text(202, "Due Date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(203, "p", 62);
    \u0275\u0275text(204, " Last day to pay the electricity bill and water bill.need to check the bank details. ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(205, "div", 66);
    \u0275\u0275element(206, "img", 67);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(207, "div", 68)(208, "div", 4)(209, "div", 69)(210, "div", 6);
    \u0275\u0275text(211, "Full Calendar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(212, "div", 7)(213, "div", 70);
    \u0275\u0275element(214, "full-calendar", 71);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275classMap("btn btn-primary");
    \u0275\u0275property("title", "Overview Calendar")("title2", "Mark Attendance")("path", "/dashboard/hrmdashboards/attendance/attendence-mark");
    \u0275\u0275advance(214);
    \u0275\u0275property("options", ctx.calendarOptions)("events", ctx.calendarEvents);
  }
}, dependencies: [NgbModule, CalendarModule, MaterialModuleModule, FormsModule, ReactiveFormsModule, NgSelectModule, NgSelectComponent, NgOptionComponent, FlatpickrModule, FlatpickrDirective, FullCalendarModule, FullCalendarComponent, SharedModule, HrDashboardPageHeaderComponent, RouterModule], changeDetection: 0 });
var OverviewCalendarComponent = _OverviewCalendarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OverviewCalendarComponent, { className: "OverviewCalendarComponent" });
})();
export {
  OverviewCalendarComponent
};
//# sourceMappingURL=overview-calendar.component-PST5B37E.js.map
