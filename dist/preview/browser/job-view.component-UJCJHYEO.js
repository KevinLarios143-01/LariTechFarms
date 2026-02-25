import {
  JobDashboardPageHeaderComponent,
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
  NgbModal
} from "./chunk-47LBZ5ZO.js";
import {
  ElementRef,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
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

// src/app/componets/dashbord/job-dashboard/job-view/job-view.component.ts
function JobViewComponent_ng_template_171_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "h5", 54);
    \u0275\u0275text(3, "Add New Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 55);
    \u0275\u0275listener("click", function JobViewComponent_ng_template_171_Template_button_click_4_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 56)(6, "div", 57)(7, "div", 2)(8, "div", 58)(9, "label", 59);
    \u0275\u0275text(10, "Position");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 60);
    \u0275\u0275element(12, "input", 61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 62)(14, "div", 2)(15, "div", 58)(16, "label", 59);
    \u0275\u0275text(17, "Job Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 60)(19, "ng-select", 63)(20, "ng-option", 64);
    \u0275\u0275text(21, "Full Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ng-option", 65);
    \u0275\u0275text(23, "Part Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ng-option", 66);
    \u0275\u0275text(25, "Freelancer");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(26, "div", 62)(27, "div", 2)(28, "div", 58)(29, "label", 59);
    \u0275\u0275text(30, "Description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 60);
    \u0275\u0275element(32, "textarea", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 62)(34, "div", 2)(35, "div", 58)(36, "label", 59);
    \u0275\u0275text(37, "Posted Date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 60)(39, "div", 68)(40, "div", 69);
    \u0275\u0275element(41, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 71);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 62)(44, "div", 2)(45, "div", 58)(46, "label", 59);
    \u0275\u0275text(47, "Last Date To Apply");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 60)(49, "div", 68)(50, "div", 69);
    \u0275\u0275element(51, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "input", 71);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 62)(54, "div", 2)(55, "div", 58)(56, "label", 59);
    \u0275\u0275text(57, "Close Date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 60)(59, "div", 68)(60, "div", 69);
    \u0275\u0275element(61, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "input", 71);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div", 72)(64, "div", 58)(65, "label", 73);
    \u0275\u0275text(66, "Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 60)(68, "div", 74)(69, "label", 75);
    \u0275\u0275element(70, "input", 76);
    \u0275\u0275elementStart(71, "span", 77);
    \u0275\u0275text(72, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "label", 75);
    \u0275\u0275element(74, "input", 78);
    \u0275\u0275elementStart(75, "span", 77);
    \u0275\u0275text(76, "InActive");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(77, "div", 79)(78, "button", 80);
    \u0275\u0275listener("click", function JobViewComponent_ng_template_171_Template_button_click_78_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.close("cross click"));
    });
    \u0275\u0275text(79, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "button", 81);
    \u0275\u0275text(81, "Submit");
    \u0275\u0275elementEnd()()();
  }
}
var _JobViewComponent = class _JobViewComponent {
  constructor(modalService, elementRef) {
    this.modalService = modalService;
    this.elementRef = elementRef;
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
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
  open(content) {
    this.modalService.open(content, { size: "lg", windowClass: "modalCusSty" });
  }
};
_JobViewComponent.\u0275fac = function JobViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JobViewComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ElementRef));
};
_JobViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobViewComponent, selectors: [["app-job-view"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  FlatpickrDefaults
]), \u0275\u0275StandaloneFeature], decls: 173, vars: 2, consts: [["content", ""], [3, "title", "title1"], [1, "row"], [1, "col-xl-3", "col-md-12"], [1, "card", "custom-card"], [1, "card-header", "border-0"], [1, "card-title"], [1, "card-body", "pb-0", "pt-3"], [1, "form-label", "mb-0"], [1, "text-muted"], [1, "mt-3"], [1, "card-footer", "border-top-0"], [1, "btn-list"], ["routerLink", "/dashboard/job-dashboard/job-applications", 1, "btn", "btn-primary"], [1, "fe", "fe-check", "my-auto", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-primary"], [1, "fe", "fe-phone-call", "my-auto", "me-2"], [1, "col-xl-9", "col-md-12"], [1, "card-body"], [1, "mb-3"], ["href", "javascript:void(0);", 1, "text-dark"], [1, "mb-2"], [1, "d-flex"], [1, "mb-0", "d-md-flex", "ps-0"], [1, "me-5"], ["href", "javascript:void(0);", 1, "icons"], [1, "fe", "fe-briefcase", "text-muted", "me-1"], [1, "fe", "fe-map-pin", "text-muted", "me-1"], ["data-bs-placement", "top", "data-bs-toggle", "tooltip", "title", "Views", 1, "me-5"], [1, "fe", "fe-eye", "text-muted", "me-1"], [1, "mb-3", "fw-semibold"], [1, "list-style-disc", "mb-5"], [1, "mb-3", "mt-5", "fw-semibold"], [1, "table-responsive"], [1, "table", "row", "table-borderless", "w-100", "m-0", "text-nowrap"], [1, "col-lg-12", "col-xl-6", "p-0"], [1, "fw-semibold"], [1, "col-lg-12", "col-xl-6", "p-0", "border-top-0"], [1, "card-body", "border-top"], [1, "list-id"], [1, "col"], [1, "mb-0"], [1, "col", "col-auto"], [1, "mb-0", "fw-semibold"], [1, "icons"], ["data-bs-target", "#apply", "data-bs-toggle", "modal", 1, "btn", "btn-primary", "icons", "mt-2", "mb-2", "me-1", 3, "click"], [1, "fe", "fe-check", "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-warning", "icons", "mt-2", "mb-2", "me-1"], [1, "fe", "fe-share", "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-success", "icons", "mt-2", "mb-2", "me-1"], [1, "fe", "fe-printer", "me-1"], ["id", "remindermodal"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "form-group"], [1, "col-md-3"], [1, "form-label", "mb-0", "mt-2"], [1, "col-md-9"], ["type", "text", "placeholder", "Name", "value", "", 1, "form-control"], [1, "form-group", "mt-3"], ["data-trigger", "", "placeholder", "Select Priority", 1, "form-control", "custom-select", "p-0"], ["value", "1"], ["value", "2"], ["value", "3"], ["id", "text-area", "rows", "3", 1, "form-control"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["type", "text", "mwlFlatpickr", "", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], [1, "row", "mt-3"], [1, "form-label", "mb-0", "mt-1"], [1, "custom-controls-stacked", "d-md-flex"], [1, "custom-control", "custom-radio", "success", "me-4"], ["type", "radio", "name", "example-radios1", "value", "option1", 1, "custom-control-input", "me-1"], [1, "custom-control-label"], ["type", "radio", "name", "example-radios1", "value", "option2", 1, "custom-control-input", "me-1"], [1, "modal-footer"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-success", "successful-notify"]], template: function JobViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-job-dashboard-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h4", 6);
    \u0275\u0275text(6, "Overview");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "div")(9, "label", 8);
    \u0275\u0275text(10, "Job Title:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 9);
    \u0275\u0275text(12, "August 29, 2019");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10)(14, "label", 8);
    \u0275\u0275text(15, "Experiences:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 9);
    \u0275\u0275text(17, "2yrs Exp");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 10)(19, "label", 8);
    \u0275\u0275text(20, "vacancy:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 9);
    \u0275\u0275text(22, "05");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 10)(24, "label", 8);
    \u0275\u0275text(25, "Job Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 9);
    \u0275\u0275text(27, "Full-Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 10)(29, "label", 8);
    \u0275\u0275text(30, "Posted Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 9);
    \u0275\u0275text(32, "12-01-2021");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 10)(34, "label", 8);
    \u0275\u0275text(35, "Laste Date To Apply Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 9);
    \u0275\u0275text(37, "24-01-2021");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 10)(39, "label", 8);
    \u0275\u0275text(40, "Closed Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 9);
    \u0275\u0275text(42, "25-01-2021");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 11)(44, "div", 12)(45, "a", 13);
    \u0275\u0275element(46, "i", 14);
    \u0275\u0275text(47, "Apply Now");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "a", 15);
    \u0275\u0275element(49, "i", 16);
    \u0275\u0275text(50, "Contact Now");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(51, "div", 17)(52, "div", 4)(53, "div", 18)(54, "div", 19)(55, "a", 20)(56, "h3", 21);
    \u0275\u0275text(57, "Senior PHP Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 22)(59, "ul", 23)(60, "li", 24)(61, "a", 25);
    \u0275\u0275element(62, "i", 26);
    \u0275\u0275text(63, " Abcd comapny Pvt ltd");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "li", 24)(65, "a", 25);
    \u0275\u0275element(66, "i", 27);
    \u0275\u0275text(67, " USA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "li", 28)(69, "a", 25);
    \u0275\u0275element(70, "i", 29);
    \u0275\u0275text(71, " 765");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(72, "h5", 30);
    \u0275\u0275text(73, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "ul", 31)(75, "li");
    \u0275\u0275text(76, "We are looking for a PHP developer, who is must be familiar with the PHP fundamentals & PHP framework. Experience with Laravel & mixs , Livewire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "li");
    \u0275\u0275text(78, "Candidate should be having excellent commnucation skills.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "li");
    \u0275\u0275text(80, "Development Experience in HTML5, SCSS, gulp, Jquery, Javascript.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "li");
    \u0275\u0275text(82, "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "li");
    \u0275\u0275text(84, "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "li");
    \u0275\u0275text(86, "hese cases are perfectly simple and easy to distinguish.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "li");
    \u0275\u0275text(88, "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "li");
    \u0275\u0275text(90, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "li");
    \u0275\u0275text(92, "But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "h5", 32);
    \u0275\u0275text(94, "Job Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 33)(96, "table", 34)(97, "tbody", 35)(98, "tr")(99, "td")(100, "span", 36);
    \u0275\u0275text(101, "Job Role :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, " PHP Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "tr")(104, "td")(105, "span", 36);
    \u0275\u0275text(106, "Role :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(107, " Front-End Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "tr")(109, "td")(110, "span", 36);
    \u0275\u0275text(111, "Min Salary :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(112, " $25,000");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "tr")(114, "td")(115, "span", 36);
    \u0275\u0275text(116, "Max Salary :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(117, " $35,000");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "tr")(119, "td")(120, "span", 36);
    \u0275\u0275text(121, "Job Tags :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, " PHP, Laravel, HTML5, CSS, SCSS, Javascript");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(123, "tbody", 37)(124, "tr")(125, "td")(126, "span", 36);
    \u0275\u0275text(127, "Job Experience :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(128, " 2yrs+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "tr")(130, "td")(131, "span", 36);
    \u0275\u0275text(132, "Languages :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(133, " English , Hindi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "tr")(135, "td")(136, "span", 36);
    \u0275\u0275text(137, "Locality :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(138, " USA , UK , India");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(139, "tr")(140, "td")(141, "span", 36);
    \u0275\u0275text(142, "Eligibility :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(143, " B.tech, Any Graduate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "tr")(145, "td")(146, "span", 36);
    \u0275\u0275text(147, "Company :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(148, " Abcd Corporation pvt ltd");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(149, "div", 38)(150, "div", 39)(151, "div", 2)(152, "div", 40)(153, "a", 41);
    \u0275\u0275text(154, "Job ID : #8976542");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(155, "div", 42);
    \u0275\u0275text(156, " Posted By ");
    \u0275\u0275elementStart(157, "a", 43);
    \u0275\u0275text(158, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275text(159, " / 12-01-2021 ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(160, "div", 38)(161, "div", 44)(162, "a", 45);
    \u0275\u0275listener("click", function JobViewComponent_Template_a_click_162_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(172);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(163, "i", 46);
    \u0275\u0275text(164, "Apply");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "a", 47);
    \u0275\u0275element(166, "i", 48);
    \u0275\u0275text(167, " Share Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "a", 49);
    \u0275\u0275element(169, "i", 50);
    \u0275\u0275text(170, " Print");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(171, JobViewComponent_ng_template_171_Template, 82, 0, "ng-template", 51, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("title", "Job View")("title1", "Job");
  }
}, dependencies: [SharedModule, JobDashboardPageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, FlatpickrModule, FlatpickrDirective] });
var JobViewComponent = _JobViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobViewComponent, { className: "JobViewComponent" });
})();
export {
  JobViewComponent
};
//# sourceMappingURL=job-view.component-UJCJHYEO.js.map
