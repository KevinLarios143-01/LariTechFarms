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
  SharedModule,
  TaskDashboardPageHeaderComponent
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
import "./chunk-47LBZ5ZO.js";
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

// src/app/componets/dashbord/project-dashboard/overview-calendar/overview-calendar.component.ts
var import_moment = __toESM(require_moment());
var _c0 = ["external"];
var _OverviewCalendarComponent = class _OverviewCalendarComponent {
  constructor() {
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
};
_OverviewCalendarComponent.\u0275fac = function OverviewCalendarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OverviewCalendarComponent)();
};
_OverviewCalendarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OverviewCalendarComponent, selectors: [["app-overview-calendar"]], viewQuery: function OverviewCalendarComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.external = _t.first);
  }
}, standalone: true, features: [\u0275\u0275ProvidersFeature([FlatpickrDefaults]), \u0275\u0275StandaloneFeature], decls: 222, vars: 4, consts: [["external", ""], [3, "title", "title3"], [1, "row"], [1, "col-md-12"], [1, "card", "custom-card"], [1, "card-header", "border-0"], [1, "card-title"], [1, "card-body"], [1, "col-md-12", "col-lg-5"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], ["data-trigger", "", "placeholder", "Select Employee", 1, "form-control", "custom-select", "p-0"], ["value", ""], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["type", "text", "mwlFlatpickr", "", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], ["data-trigger", "", "placeholder", "Select Month", 1, "form-control", "custom-select", "p-0"], ["data-trigger", "", "placeholder", "Select Year", 1, "form-control", "custom-select", "p-0"], ["value", "1"], ["value", "4", "selected", ""], ["value", "16"], [1, "col-md-12", "col-lg-2"], [1, "form-group", "mt-2"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-grid"], [1, "col-xl-3"], [1, "card-header", "d-grid"], [1, "btn", "btn-primary-light", "btn-wave"], [1, "ri-add-line", "align-middle", "me-1", "fw-medium", "d-inline-block"], [1, "card-body", "p-0"], ["id", "external-events", 1, "border-bottom", "p-3"], [1, "fc-event", "fc-h-event", "fc-daygrid-event", "fc-daygrid-block-event", "bg-primary", "border", "border-primary"], [1, "fc-event-main"], ["data-class", "bg-secondary", 1, "fc-event", "fc-h-event", "fc-daygrid-event", "fc-daygrid-block-event", "bg-secondary", "border", "border-secondary"], ["data-class", "bg-success", 1, "fc-event", "fc-h-event", "fc-daygrid-event", "fc-daygrid-block-event", "bg-success", "border", "border-success"], ["data-class", "bg-info", 1, "fc-event", "fc-h-event", "fc-daygrid-event", "fc-daygrid-block-event", "bg-info", "border", "border-info"], ["data-class", "bg-warning", 1, "fc-event", "fc-h-event", "fc-daygrid-event", "fc-daygrid-block-event", "bg-warning", "border", "border-warning"], ["data-class", "bg-danger", 1, "fc-event", "fc-h-event", "fc-daygrid-event", "fc-daygrid-block-event", "bg-danger", "border", "border-danger"], ["data-class", "bg-danger", 1, "fc-event", "fc-h-event", "fc-daygrid-event", "fc-daygrid-block-event", "bg-teal", "border", "border-teal"], [1, "p-3", "border-bottom"], [1, "d-flex", "align-items-center", "mb-4", "justify-content-between"], [1, "fw-medium"], [1, "btn", "btn-primary-light", "btn-sm"], ["id", "full-calendar-activity", 1, "list-unstyled", "mb-0", "fullcalendar-events-activity"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap"], [1, "mb-1", "fw-medium"], [1, "badge", "bg-light", "text-default", "mb-1"], [1, "mb-0", "text-muted", "fs-12"], [1, "badge", "bg-success", "mb-1"], [1, "badge", "bg-warning-transparent", "mb-1"], [1, "badge", "bg-danger-transparent", "mb-1"], [1, "p-3", "text-center"], ["src", "./assets/images/media/png/1.png", "alt", "", 1, "w-65"], [1, "col-xl-9"], [1, "card-header"], ["id", "calendar2"], [3, "options", "events"]], template: function OverviewCalendarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-task-dashboard-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h4", 6);
    \u0275\u0275text(6, "Project Overview This Month");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "div", 2)(9, "div", 8)(10, "div", 2)(11, "div", 9)(12, "div", 10)(13, "label", 11);
    \u0275\u0275text(14, "Employee Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ng-select", 12)(16, "ng-option", 13);
    \u0275\u0275text(17, "Select Employee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ng-option", 14);
    \u0275\u0275text(19, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ng-option", 15);
    \u0275\u0275text(21, "Austin Bell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ng-option", 16);
    \u0275\u0275text(23, "Maria Bower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ng-option", 17);
    \u0275\u0275text(25, "Peter Hill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ng-option", 18);
    \u0275\u0275text(27, "Victoria Lyman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ng-option", 19);
    \u0275\u0275text(29, "Adam Quinn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ng-option", 20);
    \u0275\u0275text(31, "Melanie Coleman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ng-option", 21);
    \u0275\u0275text(33, "Max Wilson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ng-option", 22);
    \u0275\u0275text(35, "Amelia Russell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ng-option", 23);
    \u0275\u0275text(37, "Justin Metcalfe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-option", 24);
    \u0275\u0275text(39, "Ryan Young");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ng-option", 25);
    \u0275\u0275text(41, "Jennifer Hardacre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ng-option", 26);
    \u0275\u0275text(43, "Justin Parr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "ng-option", 27);
    \u0275\u0275text(45, "Julia Hodges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "ng-option", 28);
    \u0275\u0275text(47, "Michael Sutherland");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 9)(49, "div", 10)(50, "label", 11);
    \u0275\u0275text(51, "Select Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 10)(53, "div", 29)(54, "div", 30);
    \u0275\u0275element(55, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "input", 32);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(57, "div", 8)(58, "div", 2)(59, "div", 9)(60, "div", 10)(61, "label", 11);
    \u0275\u0275text(62, "Month:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ng-select", 33)(64, "ng-option", 13);
    \u0275\u0275text(65, "Select Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "ng-option", 14);
    \u0275\u0275text(67, "January");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "ng-option", 15);
    \u0275\u0275text(69, "February");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "ng-option", 16);
    \u0275\u0275text(71, "March");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "ng-option", 17);
    \u0275\u0275text(73, "April");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "ng-option", 18);
    \u0275\u0275text(75, "May");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "ng-option", 19);
    \u0275\u0275text(77, "June");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "ng-option", 20);
    \u0275\u0275text(79, "July");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "ng-option", 21);
    \u0275\u0275text(81, "August");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "ng-option", 22);
    \u0275\u0275text(83, "September");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "ng-option", 23);
    \u0275\u0275text(85, "October");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "ng-option", 24);
    \u0275\u0275text(87, "November");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "ng-option", 25);
    \u0275\u0275text(89, "December");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(90, "div", 9)(91, "div", 10)(92, "label", 11);
    \u0275\u0275text(93, "Year:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "ng-select", 34)(95, "ng-option", 13);
    \u0275\u0275text(96, "Select Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "ng-option", 35);
    \u0275\u0275text(98, "2024");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "ng-option", 15);
    \u0275\u0275text(100, "2023");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "ng-option", 16);
    \u0275\u0275text(102, "2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "ng-option", 36);
    \u0275\u0275text(104, "2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "ng-option", 18);
    \u0275\u0275text(106, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "ng-option", 19);
    \u0275\u0275text(108, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "ng-option", 20);
    \u0275\u0275text(110, "2018");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "ng-option", 21);
    \u0275\u0275text(112, "2017");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "ng-option", 22);
    \u0275\u0275text(114, "2016");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "ng-option", 23);
    \u0275\u0275text(116, "2015");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "ng-option", 24);
    \u0275\u0275text(118, "2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "ng-option", 25);
    \u0275\u0275text(120, "2013");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "ng-option", 26);
    \u0275\u0275text(122, "2012");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "ng-option", 27);
    \u0275\u0275text(124, "2011");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "ng-option", 28);
    \u0275\u0275text(126, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "ng-option", 37);
    \u0275\u0275text(128, "2010");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(129, "div", 38)(130, "div", 39);
    \u0275\u0275element(131, "label", 11);
    \u0275\u0275elementStart(132, "a", 40);
    \u0275\u0275text(133, "Search");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(134, "div", 2)(135, "div", 41)(136, "div", 4)(137, "div", 42)(138, "button", 43);
    \u0275\u0275element(139, "i", 44);
    \u0275\u0275text(140, "Create New Event");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "div", 45)(142, "div", 46, 0)(144, "div", 47)(145, "div", 48);
    \u0275\u0275text(146, "Calendar Events");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "div", 49)(148, "div", 48);
    \u0275\u0275text(149, "Birthday EVents");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(150, "div", 50)(151, "div", 48);
    \u0275\u0275text(152, "Holiday Calendar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(153, "div", 51)(154, "div", 48);
    \u0275\u0275text(155, "Office Events");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "div", 52)(157, "div", 48);
    \u0275\u0275text(158, "Other Events");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(159, "div", 53)(160, "div", 48);
    \u0275\u0275text(161, "Festival Events");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(162, "div", 54)(163, "div", 48);
    \u0275\u0275text(164, "Timeline Events");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(165, "div", 55)(166, "div", 56)(167, "h6", 57);
    \u0275\u0275text(168, " Activity : ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "button", 58);
    \u0275\u0275text(170, "View All");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(171, "ul", 59)(172, "li")(173, "div", 60)(174, "p", 61);
    \u0275\u0275text(175, " Monday, Jan 1,2023 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "span", 62);
    \u0275\u0275text(177, "12:00PM - 1:00PM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(178, "p", 63);
    \u0275\u0275text(179, " Meeting with a client about new project requirement. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(180, "li")(181, "div", 60)(182, "p", 61);
    \u0275\u0275text(183, " Thursday, Dec 29,2022 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "span", 64);
    \u0275\u0275text(185, "Completed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(186, "p", 63);
    \u0275\u0275text(187, " Birthday party of niha suka ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(188, "li")(189, "div", 60)(190, "p", 61);
    \u0275\u0275text(191, " Wednesday, Jan 3,2023 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(192, "span", 65);
    \u0275\u0275text(193, "Reminder");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(194, "p", 63);
    \u0275\u0275text(195, " Work target for new project is completing ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(196, "li")(197, "div", 60)(198, "p", 61);
    \u0275\u0275text(199, " Friday, Jan 20,2023 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "span", 62);
    \u0275\u0275text(201, "06:00PM - 09:00PM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(202, "p", 63);
    \u0275\u0275text(203, " Watch new movie with family ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(204, "li")(205, "div", 60)(206, "p", 61);
    \u0275\u0275text(207, " Saturday, Jan 07,2023 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(208, "span", 66);
    \u0275\u0275text(209, "Due Date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(210, "p", 63);
    \u0275\u0275text(211, " Last day to pay the electricity bill and water bill.need to check the bank details. ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(212, "div", 67);
    \u0275\u0275element(213, "img", 68);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(214, "div", 69)(215, "div", 4)(216, "div", 70)(217, "div", 6);
    \u0275\u0275text(218, "Full Calendar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(219, "div", 7)(220, "div", 71);
    \u0275\u0275element(221, "full-calendar", 72);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", "Project Overview Calendar")("title3", "Project");
    \u0275\u0275advance(221);
    \u0275\u0275property("options", ctx.calendarOptions)("events", ctx.calendarEvents);
  }
}, dependencies: [SharedModule, TaskDashboardPageHeaderComponent, FlatpickrModule, FlatpickrDirective, FullCalendarModule, FullCalendarComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, RouterModule] });
var OverviewCalendarComponent = _OverviewCalendarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OverviewCalendarComponent, { className: "OverviewCalendarComponent" });
})();
export {
  OverviewCalendarComponent
};
//# sourceMappingURL=overview-calendar.component-6GM36GDD.js.map
