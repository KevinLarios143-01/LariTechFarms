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
  NgbModal,
  NgbModule
} from "./chunk-47LBZ5ZO.js";
import {
  RouterLink,
  RouterModule,
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

// src/app/componets/dashbord/job-dashboard/apply-job/apply-job.component.ts
function ApplyJobComponent_ng_template_402_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "h5", 30);
    \u0275\u0275text(3, "Add New Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275listener("click", function ApplyJobComponent_ng_template_402_Template_button_click_4_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 32)(6, "div", 33)(7, "div", 2)(8, "div", 34)(9, "label", 35);
    \u0275\u0275text(10, "Position");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 36);
    \u0275\u0275element(12, "input", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 38)(14, "div", 2)(15, "div", 34)(16, "label", 35);
    \u0275\u0275text(17, "Job Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 36)(19, "ng-select", 39)(20, "ng-option", 40);
    \u0275\u0275text(21, "Full Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ng-option", 41);
    \u0275\u0275text(23, "Part Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ng-option", 42);
    \u0275\u0275text(25, "Freelancer");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(26, "div", 38)(27, "div", 2)(28, "div", 34)(29, "label", 35);
    \u0275\u0275text(30, "Description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 36);
    \u0275\u0275element(32, "textarea", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 38)(34, "div", 2)(35, "div", 34)(36, "label", 35);
    \u0275\u0275text(37, "Posted Date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 36)(39, "div", 44)(40, "div", 45);
    \u0275\u0275element(41, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 47);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 38)(44, "div", 2)(45, "div", 34)(46, "label", 35);
    \u0275\u0275text(47, "Last Date To Apply");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 36)(49, "div", 44)(50, "div", 45);
    \u0275\u0275element(51, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "input", 47);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 38)(54, "div", 2)(55, "div", 34)(56, "label", 35);
    \u0275\u0275text(57, "Close Date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 36)(59, "div", 44)(60, "div", 45);
    \u0275\u0275element(61, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "input", 48);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div", 49)(64, "div", 34)(65, "label", 50);
    \u0275\u0275text(66, "Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 36)(68, "div", 51)(69, "label", 52);
    \u0275\u0275element(70, "input", 53);
    \u0275\u0275elementStart(71, "span", 54);
    \u0275\u0275text(72, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "label", 52);
    \u0275\u0275element(74, "input", 55);
    \u0275\u0275elementStart(75, "span", 54);
    \u0275\u0275text(76, "InActive");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(77, "div", 56)(78, "button", 57);
    \u0275\u0275listener("click", function ApplyJobComponent_ng_template_402_Template_button_click_78_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.close("cross click"));
    });
    \u0275\u0275text(79, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "button", 58);
    \u0275\u0275text(81, "Submit");
    \u0275\u0275elementEnd()()();
  }
}
var _ApplyJobComponent = class _ApplyJobComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
  }
  open(content) {
    this.modalService.open(content, { size: "lg", windowClass: "modalCusSty" });
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
_ApplyJobComponent.\u0275fac = function ApplyJobComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApplyJobComponent)(\u0275\u0275directiveInject(NgbModal));
};
_ApplyJobComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplyJobComponent, selectors: [["app-apply-job"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  FlatpickrDefaults
]), \u0275\u0275StandaloneFeature], decls: 404, vars: 2, consts: [["content", ""], [3, "title", "title1"], [1, "row"], [1, "col-xxl-6", "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], ["routerLink", "/dashboard/job-dashboard/job-view", 1, "text-dark"], [1, "fw-semibold", "mt-1"], [1, "d-lg-flex", "mt-2", "mb-2", "ps-0"], ["href", "javascript:void(0);", 1, "me-4"], [1, "bx", "bx-building", "text-muted", "me-1"], [1, "bx", "bxs-map", "text-muted", "me-1"], [1, "bx", "bx-dollar", "text-muted", "me-1"], [1, "bx", "bx-time", "text-muted", "me-1"], [1, "bx", "bxs-briefcase", "text-muted", "me-1"], [1, "mb-0"], [1, "card-footer"], [1, "d-md-flex"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "text-muted", "fs-12", "mb-1"], [1, "bx", "bx-edit", "text-muted", "me-1"], [1, "d-block", "text-dark"], [1, "ms-auto", "mt-3", "mt-lg-0"], ["href", "javascript:void(0);", 1, "me-3", "mt-1", "mt-sm-0"], [1, "bx", "bxs-user", "text-muted", "me-2"], ["data-bs-target", "#apply", "data-bs-toggle", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "si", "si-check", "me-1"], ["role", "document"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "form-group"], [1, "col-md-3"], [1, "form-label", "mb-0", "mt-2"], [1, "col-md-9"], ["type", "text", "placeholder", "Name", "value", "", 1, "form-control"], [1, "form-group", "mt-3"], ["data-trigger", "", "placeholder", "Select Priority", 1, "form-control", "custom-select", "p-0"], ["value", "1"], ["value", "2"], ["value", "3"], ["id", "text-area1", "rows", "3", 1, "form-control"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["mwlFlatpickr", "", "type", "text", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], ["type", "text", "mwlFlatpickr", "", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], [1, "row", "mt-3"], [1, "form-label", "mb-0", "mt-1"], [1, "custom-controls-stacked", "d-md-flex"], [1, "custom-control", "custom-radio", "success", "me-4"], ["type", "radio", "name", "example-radios1", "value", "option1", 1, "custom-control-input"], [1, "custom-control-label"], ["type", "radio", "name", "example-radios1", "value", "option2", 1, "custom-control-input"], [1, "modal-footer"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-success", "successful-notify"]], template: function ApplyJobComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-job-dashboard-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "a", 6)(6, "h4", 7);
    \u0275\u0275text(7, "Senior PHP Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ul", 8)(9, "li")(10, "a", 9)(11, "span");
    \u0275\u0275element(12, "i", 10);
    \u0275\u0275text(13, " Abcd Pvt Ltd");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "li")(15, "a", 9)(16, "span");
    \u0275\u0275element(17, "i", 11);
    \u0275\u0275text(18, " USA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "li")(20, "a", 9)(21, "span");
    \u0275\u0275element(22, "i", 12);
    \u0275\u0275text(23, " 25,000 - 35,000");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "li")(25, "a", 9)(26, "span");
    \u0275\u0275element(27, "i", 13);
    \u0275\u0275text(28, " Full Time");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "li")(30, "a", 9)(31, "span");
    \u0275\u0275element(32, "i", 14);
    \u0275\u0275text(33, " 2+ Yer Exp");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "p", 15);
    \u0275\u0275text(35, "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 16)(37, "div", 17)(38, "div", 18)(39, "div")(40, "a", 19);
    \u0275\u0275element(41, "i", 20);
    \u0275\u0275text(42, "Posted by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "small", 21);
    \u0275\u0275text(44, "12-01-2021, 12:15 AM");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 22)(46, "a", 23);
    \u0275\u0275element(47, "i", 24);
    \u0275\u0275text(48, "HR/Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "a", 25);
    \u0275\u0275listener("click", function ApplyJobComponent_Template_a_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(403);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(50, "i", 26);
    \u0275\u0275text(51, " Apply Now");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(52, "div", 3)(53, "div", 4)(54, "div", 5)(55, "a", 6)(56, "h4", 7);
    \u0275\u0275text(57, "Fresher Web Designer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "ul", 8)(59, "li")(60, "a", 9)(61, "span");
    \u0275\u0275element(62, "i", 10);
    \u0275\u0275text(63, " croport Pvt Ltd");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "li")(65, "a", 9)(66, "span");
    \u0275\u0275element(67, "i", 11);
    \u0275\u0275text(68, " India");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "li")(70, "a", 9)(71, "span");
    \u0275\u0275element(72, "i", 12);
    \u0275\u0275text(73, " 15,000 - 10,000");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "li")(75, "a", 9)(76, "span");
    \u0275\u0275element(77, "i", 13);
    \u0275\u0275text(78, " Full Time");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "li")(80, "a", 9)(81, "span");
    \u0275\u0275element(82, "i", 14);
    \u0275\u0275text(83, " Freshers");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(84, "p", 15);
    \u0275\u0275text(85, "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 16)(87, "div", 17)(88, "div", 18)(89, "div")(90, "a", 19);
    \u0275\u0275element(91, "i", 20);
    \u0275\u0275text(92, "Posted by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "small", 21);
    \u0275\u0275text(94, "15-02-2021, 09:00 AM");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(95, "div", 22)(96, "a", 23);
    \u0275\u0275element(97, "i", 24);
    \u0275\u0275text(98, "HR/Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "a", 25);
    \u0275\u0275listener("click", function ApplyJobComponent_Template_a_click_99_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(403);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(100, "i", 26);
    \u0275\u0275text(101, " Apply Now");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(102, "div", 3)(103, "div", 4)(104, "div", 5)(105, "a", 6)(106, "h4", 7);
    \u0275\u0275text(107, "Senior Web Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "ul", 8)(109, "li")(110, "a", 9)(111, "span");
    \u0275\u0275element(112, "i", 10);
    \u0275\u0275text(113, " Cropmaster Pvt Ltd");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(114, "li")(115, "a", 9)(116, "span");
    \u0275\u0275element(117, "i", 11);
    \u0275\u0275text(118, " UK");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(119, "li")(120, "a", 9)(121, "span");
    \u0275\u0275element(122, "i", 12);
    \u0275\u0275text(123, " 22,000 - 30,000");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(124, "li")(125, "a", 9)(126, "span");
    \u0275\u0275element(127, "i", 13);
    \u0275\u0275text(128, " Full Time");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(129, "li")(130, "a", 9)(131, "span");
    \u0275\u0275element(132, "i", 14);
    \u0275\u0275text(133, " 1+ Yer Exp");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(134, "p", 15);
    \u0275\u0275text(135, "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(136, "div", 16)(137, "div", 17)(138, "div", 18)(139, "div")(140, "a", 19);
    \u0275\u0275element(141, "i", 20);
    \u0275\u0275text(142, "Posted by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "small", 21);
    \u0275\u0275text(144, "16-02-2021, 15:50 PM");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(145, "div", 22)(146, "a", 23);
    \u0275\u0275element(147, "i", 24);
    \u0275\u0275text(148, "HR/Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "a", 25);
    \u0275\u0275listener("click", function ApplyJobComponent_Template_a_click_149_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(403);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(150, "i", 26);
    \u0275\u0275text(151, " Apply Now");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(152, "div", 3)(153, "div", 4)(154, "div", 5)(155, "a", 6)(156, "h4", 7);
    \u0275\u0275text(157, "Fresher UI Designer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(158, "ul", 8)(159, "li")(160, "a", 9)(161, "span");
    \u0275\u0275element(162, "i", 10);
    \u0275\u0275text(163, " frecho Pvt Ltd");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(164, "li")(165, "a", 9)(166, "span");
    \u0275\u0275element(167, "i", 11);
    \u0275\u0275text(168, " India");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(169, "li")(170, "a", 9)(171, "span");
    \u0275\u0275element(172, "i", 12);
    \u0275\u0275text(173, " 12,000 - 18,000");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(174, "li")(175, "a", 9)(176, "span");
    \u0275\u0275element(177, "i", 13);
    \u0275\u0275text(178, " Full Time");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(179, "li")(180, "a", 9)(181, "span");
    \u0275\u0275element(182, "i", 14);
    \u0275\u0275text(183, " Fresher");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(184, "p", 15);
    \u0275\u0275text(185, "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(186, "div", 16)(187, "div", 17)(188, "div", 18)(189, "div")(190, "a", 19);
    \u0275\u0275element(191, "i", 20);
    \u0275\u0275text(192, "Posted by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "small", 21);
    \u0275\u0275text(194, "16-01-2021, 09:35 AM");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(195, "div", 22)(196, "a", 23);
    \u0275\u0275element(197, "i", 24);
    \u0275\u0275text(198, "HR/Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(199, "a", 25);
    \u0275\u0275listener("click", function ApplyJobComponent_Template_a_click_199_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(403);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(200, "i", 26);
    \u0275\u0275text(201, " Apply Now");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(202, "div", 3)(203, "div", 4)(204, "div", 5)(205, "a", 6)(206, "h4", 7);
    \u0275\u0275text(207, "SEO Specialist");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(208, "ul", 8)(209, "li")(210, "a", 9)(211, "span");
    \u0275\u0275element(212, "i", 10);
    \u0275\u0275text(213, " kolit Pvt Ltd");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(214, "li")(215, "a", 9)(216, "span");
    \u0275\u0275element(217, "i", 11);
    \u0275\u0275text(218, " UK");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(219, "li")(220, "a", 9)(221, "span");
    \u0275\u0275element(222, "i", 12);
    \u0275\u0275text(223, " 20,000 - 25,000");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(224, "li")(225, "a", 9)(226, "span");
    \u0275\u0275element(227, "i", 13);
    \u0275\u0275text(228, " Full Time");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(229, "li")(230, "a", 9)(231, "span");
    \u0275\u0275element(232, "i", 14);
    \u0275\u0275text(233, " 1+ Yer Exp");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(234, "p", 15);
    \u0275\u0275text(235, "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(236, "div", 16)(237, "div", 17)(238, "div", 18)(239, "div")(240, "a", 19);
    \u0275\u0275element(241, "i", 20);
    \u0275\u0275text(242, "Posted by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(243, "small", 21);
    \u0275\u0275text(244, "16-03-2021, 18:20 PM");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(245, "div", 22)(246, "a", 23);
    \u0275\u0275element(247, "i", 24);
    \u0275\u0275text(248, "HR/Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(249, "a", 25);
    \u0275\u0275listener("click", function ApplyJobComponent_Template_a_click_249_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(403);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(250, "i", 26);
    \u0275\u0275text(251, " Apply Now");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(252, "div", 3)(253, "div", 4)(254, "div", 5)(255, "a", 6)(256, "h4", 7);
    \u0275\u0275text(257, "Senior Worpress Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(258, "ul", 8)(259, "li")(260, "a", 9)(261, "span");
    \u0275\u0275element(262, "i", 10);
    \u0275\u0275text(263, " lokalc Pvt Ltd");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(264, "li")(265, "a", 9)(266, "span");
    \u0275\u0275element(267, "i", 11);
    \u0275\u0275text(268, " UK");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(269, "li")(270, "a", 9)(271, "span");
    \u0275\u0275element(272, "i", 12);
    \u0275\u0275text(273, " 35,000 - 40,000");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(274, "li")(275, "a", 9)(276, "span");
    \u0275\u0275element(277, "i", 13);
    \u0275\u0275text(278, " Full Time");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(279, "li")(280, "a", 9)(281, "span");
    \u0275\u0275element(282, "i", 14);
    \u0275\u0275text(283, " 3+ Yer Exp");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(284, "p", 15);
    \u0275\u0275text(285, "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(286, "div", 16)(287, "div", 17)(288, "div", 18)(289, "div")(290, "a", 19);
    \u0275\u0275element(291, "i", 20);
    \u0275\u0275text(292, "Posted by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(293, "small", 21);
    \u0275\u0275text(294, "16-01-2021, 22:45 PM");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(295, "div", 22)(296, "a", 23);
    \u0275\u0275element(297, "i", 24);
    \u0275\u0275text(298, "HR/Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(299, "a", 25);
    \u0275\u0275listener("click", function ApplyJobComponent_Template_a_click_299_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(403);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(300, "i", 26);
    \u0275\u0275text(301, " Apply Now");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(302, "div", 3)(303, "div", 4)(304, "div", 5)(305, "a", 6)(306, "h4", 7);
    \u0275\u0275text(307, "Senior Accountant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(308, "ul", 8)(309, "li")(310, "a", 9)(311, "span");
    \u0275\u0275element(312, "i", 10);
    \u0275\u0275text(313, " kloki Pvt Ltd");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(314, "li")(315, "a", 9)(316, "span");
    \u0275\u0275element(317, "i", 11);
    \u0275\u0275text(318, " USA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(319, "li")(320, "a", 9)(321, "span");
    \u0275\u0275element(322, "i", 12);
    \u0275\u0275text(323, " 15,000 - 25,000");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(324, "li")(325, "a", 9)(326, "span");
    \u0275\u0275element(327, "i", 13);
    \u0275\u0275text(328, " Full Time");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(329, "li")(330, "a", 9)(331, "span");
    \u0275\u0275element(332, "i", 14);
    \u0275\u0275text(333, " 1+ Yer Exp");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(334, "p", 15);
    \u0275\u0275text(335, "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(336, "div", 16)(337, "div", 17)(338, "div", 18)(339, "div")(340, "a", 19);
    \u0275\u0275element(341, "i", 20);
    \u0275\u0275text(342, "Posted by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(343, "small", 21);
    \u0275\u0275text(344, "18-02-2021, 12:15 AM");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(345, "div", 22)(346, "a", 23);
    \u0275\u0275element(347, "i", 24);
    \u0275\u0275text(348, "HR/Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(349, "a", 25);
    \u0275\u0275listener("click", function ApplyJobComponent_Template_a_click_349_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(403);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(350, "i", 26);
    \u0275\u0275text(351, " Apply Now");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(352, "div", 3)(353, "div", 4)(354, "div", 5)(355, "a", 6)(356, "h4", 7);
    \u0275\u0275text(357, "Fresher Angular Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(358, "ul", 8)(359, "li")(360, "a", 9)(361, "span");
    \u0275\u0275element(362, "i", 10);
    \u0275\u0275text(363, " Movck Pvt Ltd");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(364, "li")(365, "a", 9)(366, "span");
    \u0275\u0275element(367, "i", 11);
    \u0275\u0275text(368, " UK");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(369, "li")(370, "a", 9)(371, "span");
    \u0275\u0275element(372, "i", 12);
    \u0275\u0275text(373, " 15,000 - 18,000");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(374, "li")(375, "a", 9)(376, "span");
    \u0275\u0275element(377, "i", 13);
    \u0275\u0275text(378, " Full Time");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(379, "li")(380, "a", 9)(381, "span");
    \u0275\u0275element(382, "i", 14);
    \u0275\u0275text(383, " 2+ Yer Exp");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(384, "p", 15);
    \u0275\u0275text(385, "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(386, "div", 16)(387, "div", 17)(388, "div", 18)(389, "div")(390, "a", 19);
    \u0275\u0275element(391, "i", 20);
    \u0275\u0275text(392, "Posted by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(393, "small", 21);
    \u0275\u0275text(394, "21-01-2021, 10:00 AM");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(395, "div", 22)(396, "a", 23);
    \u0275\u0275element(397, "i", 24);
    \u0275\u0275text(398, "HR/Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(399, "a", 25);
    \u0275\u0275listener("click", function ApplyJobComponent_Template_a_click_399_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(403);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(400, "i", 26);
    \u0275\u0275text(401, " Apply Now");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(402, ApplyJobComponent_ng_template_402_Template, 82, 0, "ng-template", 27, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("title", "Apply Job")("title1", "Job");
  }
}, dependencies: [SharedModule, JobDashboardPageHeaderComponent, NgbModule, FlatpickrModule, FlatpickrDirective, NgSelectModule, NgSelectComponent, NgOptionComponent, RouterModule, RouterLink] });
var ApplyJobComponent = _ApplyJobComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplyJobComponent, { className: "ApplyJobComponent" });
})();
export {
  ApplyJobComponent
};
//# sourceMappingURL=apply-job.component-F45CWDQH.js.map
