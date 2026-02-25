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
import "./chunk-26H6NGLN.js";
import "./chunk-ZVXZDCDW.js";
import "./chunk-KTQLQ7YR.js";
import "./chunk-ZSUERINM.js";
import {
  FormsModule,
  NgbModal,
  ReactiveFormsModule
} from "./chunk-47LBZ5ZO.js";
import {
  RouterModule,
  ɵsetClassDebugInfo,
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
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import {
  __toESM
} from "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/hrmdashboards/events/events.component.ts
var import_moment = __toESM(require_moment());
var _c0 = ["external"];
function EventsComponent_ng_template_168_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "h5", 41);
    \u0275\u0275text(2, "Add New Event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 42);
    \u0275\u0275listener("click", function EventsComponent_ng_template_168_Template_button_click_3_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 43)(5, "div", 44)(6, "label", 45);
    \u0275\u0275text(7, "Event Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 44)(10, "label", 45);
    \u0275\u0275text(11, "Event Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 47)(13, "div", 48)(14, "div", 49);
    \u0275\u0275element(15, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 44)(18, "label", 45);
    \u0275\u0275text(19, "Event Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "textarea", 52);
    \u0275\u0275text(21, "Some text here...");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 53)(23, "a", 54);
    \u0275\u0275listener("click", function EventsComponent_ng_template_168_Template_a_click_23_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.close("cross click"));
    });
    \u0275\u0275text(24, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a", 55);
    \u0275\u0275text(26, "Add");
    \u0275\u0275elementEnd()();
  }
}
var _EventsComponent = class _EventsComponent {
  constructor(modalService) {
    this.modalService = modalService;
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
_EventsComponent.\u0275fac = function EventsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventsComponent)(\u0275\u0275directiveInject(NgbModal));
};
_EventsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventsComponent, selectors: [["app-events"]], viewQuery: function EventsComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.external = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 170, vars: 1, consts: [["content", ""], [1, "page-header", "d-lg-flex", "d-block"], [1, "page-leftheader"], [1, "page-title"], [1, "page-rightheader"], [1, "btn-list"], ["data-bs-toggle", "modal", "data-bs-target", "#eventmodal", 1, "btn", "btn-primary", "m-1", 3, "click"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "E-mail", 1, "btn", "btn-light3", "m-1"], [1, "fe", "fe-mail"], ["placement", "top", "data-bs-toggle", "tooltip", "ngbTooltip", "Contact", 1, "btn", "btn-light3", "m-1"], [1, "fe", "fe-phone-call"], ["placement", "top", "data-bs-toggle", "tooltip", "ngbTooltip", "Info", 1, "btn", "btn-primary", "m-1"], [1, "fe", "fe-info"], [1, "row"], [1, "col-md-12", "col-xxl-4", "col-xl-5"], [1, "card", "custom-card"], [1, "card-header", "border-bottom-0"], [1, "card-title"], [1, "card-body"], [1, "mb-4"], [1, "d-sm-flex", "comming_holidays", "calendar-icon", "icons"], [1, "date_time", "bg-success-transparent", "rounded-3", "me-3"], [1, "date", "fs-20"], [1, "month", "fs-13"], [1, "me-3", "mt-0", "mt-sm-2", "d-block"], [1, "mb-1", "fw-medium"], [1, "clearfix"], [1, "date_time", "bg-purple-transparent", "rounded-3", "me-3"], [1, "float-end", "mb-0", "ms-auto", "my-auto"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-secondary"], [1, "ri-cake-2-fill", "me-2"], [1, "date_time", "bg-orange-transparent", "rounded-3", "me-3"], [1, "date_time", "bg-warning-transparent", "rounded-3", "me-3"], [1, "date_time", "bg-pink-transparent", "rounded-3", "me-3"], [1, "date_time", "bg-info-transparent", "rounded-3", "me-3"], [1, "mb-0"], [1, "col-md-12", "col-xxl-8", "col-xl-7"], [1, "card"], [1, "hrevent-calender"], [3, "options"], [1, "modal-header"], [1, "modal-title"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "form-group", "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "text", "value", "", 1, "form-control"], [1, "form-group"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["type", "text", "mwlFlatpickr", "", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], ["rows", "3", 1, "form-control"], [1, "modal-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"]], template: function EventsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3, "Events");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "a", 6);
    \u0275\u0275listener("click", function EventsComponent_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(169);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275text(7, "Add New Events");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 9);
    \u0275\u0275element(11, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 11);
    \u0275\u0275element(13, "i", 12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "h4", 17);
    \u0275\u0275text(19, "Upcoming Events");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 18)(21, "div", 19)(22, "div", 20)(23, "span", 21)(24, "span", 22);
    \u0275\u0275text(25, "22");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 23);
    \u0275\u0275text(27, "FEB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 24)(29, "h6", 25);
    \u0275\u0275text(30, "Anniversary");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "span", 26);
    \u0275\u0275elementStart(32, "small");
    \u0275\u0275text(33, "Office 3rd Anniversary on 22nd Feb");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 19)(35, "div", 20)(36, "span", 27)(37, "span", 22);
    \u0275\u0275text(38, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 23);
    \u0275\u0275text(40, "FEB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 24)(42, "h6", 25);
    \u0275\u0275text(43, "Vanessa James");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "span", 26);
    \u0275\u0275elementStart(45, "small");
    \u0275\u0275text(46, "Birthday on Feb 16");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "p", 28)(48, "a", 29);
    \u0275\u0275element(49, "i", 30);
    \u0275\u0275text(50, "Wish Now");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 19)(52, "div", 20)(53, "span", 31)(54, "span", 22);
    \u0275\u0275text(55, "18");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 23);
    \u0275\u0275text(57, "FEB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 24)(59, "h6", 25);
    \u0275\u0275text(60, "Trade Shows");
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "span", 26);
    \u0275\u0275elementStart(62, "small");
    \u0275\u0275text(63, "Smart Device Trade Show");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(64, "div", 19)(65, "div", 20)(66, "span", 32)(67, "span", 22);
    \u0275\u0275text(68, "06");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 23);
    \u0275\u0275text(70, "Mar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 24)(72, "h6", 25);
    \u0275\u0275text(73, "Holiday Party");
    \u0275\u0275elementEnd();
    \u0275\u0275element(74, "span", 26);
    \u0275\u0275elementStart(75, "small");
    \u0275\u0275text(76, "SCreate a Cost-Effective Holiday Party Menu");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(77, "div", 19)(78, "div", 20)(79, "span", 33)(80, "span", 22);
    \u0275\u0275text(81, "13");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span", 23);
    \u0275\u0275text(83, "MAR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 24)(85, "h6", 25);
    \u0275\u0275text(86, "Team-Building ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(87, "span", 26);
    \u0275\u0275elementStart(88, "small");
    \u0275\u0275text(89, "Team Communication & Creative Innovation team members");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(90, "div", 19)(91, "div", 20)(92, "span", 21)(93, "span", 22);
    \u0275\u0275text(94, "24");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "span", 23);
    \u0275\u0275text(96, "MAR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 24)(98, "h6", 25);
    \u0275\u0275text(99, "Anniversary");
    \u0275\u0275elementEnd();
    \u0275\u0275element(100, "span", 26);
    \u0275\u0275elementStart(101, "small");
    \u0275\u0275text(102, "Faith Harris 3rd work Anniversary");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(103, "div", 19)(104, "div", 20)(105, "span", 27)(106, "span", 22);
    \u0275\u0275text(107, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "span", 23);
    \u0275\u0275text(109, "APR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 24)(111, "h6", 25);
    \u0275\u0275text(112, "Austin Bell");
    \u0275\u0275elementEnd();
    \u0275\u0275element(113, "span", 26);
    \u0275\u0275elementStart(114, "small");
    \u0275\u0275text(115, "Birthday on Apr 16");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "p", 28)(117, "a", 29);
    \u0275\u0275element(118, "i", 30);
    \u0275\u0275text(119, "Wish Now");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(120, "div", 19)(121, "div", 20)(122, "span", 34)(123, "span", 22);
    \u0275\u0275text(124, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "span", 23);
    \u0275\u0275text(126, "APR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "div", 24)(128, "h6", 25);
    \u0275\u0275text(129, "Board Meeting");
    \u0275\u0275elementEnd();
    \u0275\u0275element(130, "span", 26);
    \u0275\u0275elementStart(131, "small");
    \u0275\u0275text(132, "It will be held in meeting room");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(133, "div", 19)(134, "div", 20)(135, "span", 27)(136, "span", 22);
    \u0275\u0275text(137, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "span", 23);
    \u0275\u0275text(139, "MAY");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "div", 24)(141, "h6", 25);
    \u0275\u0275text(142, "Maria Bower");
    \u0275\u0275elementEnd();
    \u0275\u0275element(143, "span", 26);
    \u0275\u0275elementStart(144, "small");
    \u0275\u0275text(145, "Birthday on May 01");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(146, "p", 28)(147, "a", 29);
    \u0275\u0275element(148, "i", 30);
    \u0275\u0275text(149, "Wish Now");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(150, "div", 35)(151, "div", 20)(152, "span", 21)(153, "span", 22);
    \u0275\u0275text(154, "21");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "span", 23);
    \u0275\u0275text(156, "MAY");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(157, "div", 24)(158, "h6", 25);
    \u0275\u0275text(159, "Max Wilson Anniversary");
    \u0275\u0275elementEnd();
    \u0275\u0275element(160, "span", 26);
    \u0275\u0275elementStart(161, "small");
    \u0275\u0275text(162, "Max Wilson 1st work Anniversary");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(163, "div", 36)(164, "div", 37)(165, "div", 18)(166, "div", 38);
    \u0275\u0275element(167, "full-calendar", 39);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(168, EventsComponent_ng_template_168_Template, 27, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275advance(167);
    \u0275\u0275property("options", ctx.calendarOptions);
  }
}, dependencies: [CalendarModule, FormsModule, ReactiveFormsModule, FullCalendarModule, FullCalendarComponent, SharedModule, RouterModule] });
var EventsComponent = _EventsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventsComponent, { className: "EventsComponent" });
})();
export {
  EventsComponent
};
//# sourceMappingURL=events.component-LCV2QU2J.js.map
