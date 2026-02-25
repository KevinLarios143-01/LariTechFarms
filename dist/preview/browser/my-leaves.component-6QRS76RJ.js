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
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import {
  FlatpickrDefaults,
  FlatpickrDirective,
  FlatpickrModule,
  esm_default
} from "./chunk-ZSUERINM.js";
import {
  NgbModal,
  NgbModule,
  NgbTooltip
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

// src/app/componets/dashbord/employee-dashboard/my-leaves/my-leaves.component.ts
function MyLeavesComponent_ng_template_539_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "h5", 65);
    \u0275\u0275text(2, "My Leave Application");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 66);
    \u0275\u0275listener("click", function MyLeavesComponent_ng_template_539_Template_button_click_3_listener() {
      const modal_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(modal_r6.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 67)(5, "div", 33)(6, "table", 68)(7, "tbody")(8, "tr")(9, "td", 38);
    \u0275\u0275text(10, "Leave Type ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14, "Casual Leave");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tr")(16, "td", 38);
    \u0275\u0275text(17, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21, "16-01-2021");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "tr")(23, "td", 38);
    \u0275\u0275text(24, "Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28, "1 day");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "tr")(30, "td", 38);
    \u0275\u0275text(31, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td");
    \u0275\u0275text(33, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td");
    \u0275\u0275text(35, "Personal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "tr")(37, "td", 38);
    \u0275\u0275text(38, "Applied On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td");
    \u0275\u0275text(40, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "td");
    \u0275\u0275text(42, "05-01-2021");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(43, "div", 69)(44, "a", 70);
    \u0275\u0275listener("click", function MyLeavesComponent_ng_template_539_Template_a_click_44_listener() {
      const modal_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(modal_r6.close("cross click"));
    });
    \u0275\u0275text(45, "Close");
    \u0275\u0275elementEnd()();
  }
}
function MyLeavesComponent_ng_template_541_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "h5", 65);
    \u0275\u0275text(2, "Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 66);
    \u0275\u0275listener("click", function MyLeavesComponent_ng_template_541_Template_button_click_3_listener() {
      const modal_r8 = \u0275\u0275restoreView(_r7).$implicit;
      return \u0275\u0275resetView(modal_r8.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 67)(5, "div", 72)(6, "label", 73);
    \u0275\u0275text(7, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 72)(10, "label", 73);
    \u0275\u0275text(11, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 75);
    \u0275\u0275text(13, "Some text here...");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 69)(15, "a", 76);
    \u0275\u0275listener("click", function MyLeavesComponent_ng_template_541_Template_a_click_15_listener() {
      const modal_r8 = \u0275\u0275restoreView(_r7).$implicit;
      return \u0275\u0275resetView(modal_r8.close("cross click"));
    });
    \u0275\u0275text(16, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 77);
    \u0275\u0275text(18, "Submit");
    \u0275\u0275elementEnd()();
  }
}
function MyLeavesComponent_ng_template_543_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "h5", 65);
    \u0275\u0275text(2, "Apply Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 66);
    \u0275\u0275listener("click", function MyLeavesComponent_ng_template_543_Template_button_click_3_listener() {
      const modal_r10 = \u0275\u0275restoreView(_r9).$implicit;
      return \u0275\u0275resetView(modal_r10.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 67)(5, "div", 78)(6, "div", 72)(7, "label", 73);
    \u0275\u0275text(8, "Leaves Dates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ng-select", 79)(10, "ng-option", 80);
    \u0275\u0275text(11, "Single Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ng-option", 28);
    \u0275\u0275text(13, "Multiple Leaves");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 81)(15, "div", 72)(16, "label", 73);
    \u0275\u0275text(17, "Date Range:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 82)(19, "div", 83);
    \u0275\u0275element(20, "i", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 85);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 86)(23, "label", 73);
    \u0275\u0275text(24, "Leaves Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ng-select", 79)(26, "ng-option", 87);
    \u0275\u0275text(27, "Half Day Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ng-option", 88);
    \u0275\u0275text(29, "Casual Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ng-option", 89);
    \u0275\u0275text(31, "Sick Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ng-option", 90);
    \u0275\u0275text(33, "Maternity Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ng-option", 91);
    \u0275\u0275text(35, "Paternity Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ng-option", 92);
    \u0275\u0275text(37, "Annual Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-option", 93);
    \u0275\u0275text(39, "Unpaid Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ng-option", 94);
    \u0275\u0275text(41, "Other Leaves");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 86)(43, "label", 73);
    \u0275\u0275text(44, "Reason:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "textarea", 95);
    \u0275\u0275text(46, "Some text here...");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 69)(48, "div", 96)(49, "label", 97);
    \u0275\u0275text(50, "Selected Days:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 98);
    \u0275\u0275text(52, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 99)(54, "a", 76);
    \u0275\u0275listener("click", function MyLeavesComponent_ng_template_543_Template_a_click_54_listener() {
      const modal_r10 = \u0275\u0275restoreView(_r9).$implicit;
      return \u0275\u0275resetView(modal_r10.close("cross click"));
    });
    \u0275\u0275text(55, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "a", 77);
    \u0275\u0275text(57, "Submit");
    \u0275\u0275elementEnd()()();
  }
}
var _MyLeavesComponent = class _MyLeavesComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.donutData = DonutChartData;
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
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
};
_MyLeavesComponent.\u0275fac = function MyLeavesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MyLeavesComponent)(\u0275\u0275directiveInject(NgbModal));
};
_MyLeavesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyLeavesComponent, selectors: [["app-my-leaves"]], standalone: true, features: [\u0275\u0275ProvidersFeature([FlatpickrDefaults]), \u0275\u0275StandaloneFeature], decls: 545, vars: 9, consts: [["content2", ""], ["content1", ""], ["content", ""], [1, "page-header", "d-lg-flex", "d-block"], [1, "page-leftheader"], [1, "page-title"], [1, "page-rightheader"], [1, "btn-list"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#applyleaves", 1, "btn", "btn-primary", "m-1", 3, "click"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "E-mail", 1, "btn", "btn-light3", "m-1"], [1, "fe", "fe-mail"], ["placement", "top", "ngbTooltip", "Contact", 1, "btn", "btn-light3", "m-1"], [1, "fe", "fe-phone-call"], ["placement", "top", "ngbTooltip", "Info", 1, "btn", "btn-primary", "m-1"], [1, "fe", "fe-info"], [1, "row"], [1, "col-xxl-9", "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "border-0"], [1, "card-title"], [1, "card-body"], [1, "row", "mb-3"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mt-2"], ["name", "quantity", "id", "select-countries17", "placeholder", "1", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], [1, "float-end"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "table-responsive"], ["id", "emp-attendance", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom"], [1, "border-bottom-0", "text-center"], [1, "border-bottom-0"], [1, "text-center"], [1, "fw-semibold"], [1, "badge", "bg-primary"], [1, "text-start"], [1, "action-btns1", 3, "click"], ["placement", "top", "ngbTooltip", "view", 1, "fe", "fe-eye", "text-primary"], ["href", "javascript:;", "placement", "top", "ngbTooltip", "Delete", 1, "action-btns1"], [1, "fe", "fe-trash-2", "text-danger"], ["placement", "top", "ngbTooltip", "Report", 1, "fe", "fe-info", "text-secondary"], [1, "badge", "bg-success"], [1, "badge", "bg-warning"], [1, "badge", "bg-danger"], [1, "col-xl-3", "col-md-12", "col-lg-12"], [1, "card-body", "px-0"], ["id", "leavesoverview", 1, "mx-auto", "pt-2", 3, "series", "dataLabels", "stroke", "labels", "colors", "chart", "responsive", "plotOptions", "legend"], [1, "row", "pt-3", "mx-auto", "text-center", "px-2"], [1, "col-lg-7", "col-md-12", "mx-auto", "d-block"], [1, "col-md-12"], [1, "d-flex", "fw-semibold"], [1, "dot-label", "bg-primary", "me-2", "my-auto"], [1, "col-md-12", "mt-3"], [1, "dot-label", "bg-danger", "me-2", "my-auto"], [1, "dot-label", "bg-secondary", "me-2", "my-auto"], [1, "dot-label", "bg-success", "me-2", "my-auto"], ["id", "leaveapplictionmodal", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "table", "mb-0", "table-borderless"], [1, "modal-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["id", "reportmodal", 1, "modal", "fade"], [1, "form-group"], [1, "form-label"], ["type", "text", "placeholder", "hr@gmail.com", "value", "", 1, "form-control"], ["rows", "3", 1, "form-control"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], [1, "leave-types"], ["data-trigger", "", "placeholder", "Select Employee", 1, "form-control", "custom-select", "p-0"], ["value", "1"], [1, "leave-content", "mt-3"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["mwlFlatpickr", "", "type", "text", "id", "daterange", "placeholder", "Date range picker", 1, "form-control"], [1, "form-group", "mt-3"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], ["value", "17"], ["value", "18"], ["rows", "5", 1, "form-control"], [1, ""], [1, "mb-0", "fw-semibold"], [1, "badge", "badge-danger", "badge-pill", "ms-2"], [1, "ms-auto"]], template: function MyLeavesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
    \u0275\u0275text(3, "My Leaves");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 6)(5, "div", 7)(6, "a", 8);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(544);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275text(7, "Apply Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 9);
    \u0275\u0275element(9, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 11);
    \u0275\u0275element(11, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 13);
    \u0275\u0275element(13, "i", 14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 15)(15, "div", 16)(16, "div", 17)(17, "div", 18)(18, "h4", 19);
    \u0275\u0275text(19, "Leaves Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 20)(21, "div", 21)(22, "div", 22)(23, "div", 23)(24, "span");
    \u0275\u0275text(25, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 24)(27, "div", 25)(28, "ng-select", 26)(29, "ng-option", 27);
    \u0275\u0275text(30, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ng-option", 28);
    \u0275\u0275text(32, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ng-option", 29);
    \u0275\u0275text(34, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "ng-option", 30);
    \u0275\u0275text(36, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 22)(40, "div", 31);
    \u0275\u0275element(41, "input", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 33)(43, "table", 34)(44, "thead")(45, "tr")(46, "th", 35);
    \u0275\u0275text(47, "#ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 36);
    \u0275\u0275text(49, "Leave Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th", 36);
    \u0275\u0275text(51, "From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th", 36);
    \u0275\u0275text(53, "TO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th", 36);
    \u0275\u0275text(55, "Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th", 36);
    \u0275\u0275text(57, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th", 36);
    \u0275\u0275text(59, "Applied On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th", 36);
    \u0275\u0275text(61, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "th", 36);
    \u0275\u0275text(63, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "tbody")(65, "tr")(66, "td", 37);
    \u0275\u0275text(67, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "td");
    \u0275\u0275text(69, "Casual Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "td");
    \u0275\u0275text(71, "16-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "td");
    \u0275\u0275text(73, "16-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "td", 38);
    \u0275\u0275text(75, "1 Day");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "td");
    \u0275\u0275text(77, "Personal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "td");
    \u0275\u0275text(79, "05-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "td")(81, "span", 39);
    \u0275\u0275text(82, "New");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "td", 40)(84, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_84_listener() {
      \u0275\u0275restoreView(_r1);
      const content2_r3 = \u0275\u0275reference(540);
      return \u0275\u0275resetView(ctx.open(content2_r3));
    });
    \u0275\u0275element(85, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "a", 43);
    \u0275\u0275element(87, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_88_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r4 = \u0275\u0275reference(542);
      return \u0275\u0275resetView(ctx.open(content1_r4));
    });
    \u0275\u0275element(89, "i", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(90, "tr")(91, "td", 37);
    \u0275\u0275text(92, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "td");
    \u0275\u0275text(94, "Sick Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "td");
    \u0275\u0275text(96, "14-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "td");
    \u0275\u0275text(98, "15-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "td", 38);
    \u0275\u0275text(100, "2 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "td");
    \u0275\u0275text(102, "Going to Hospital");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "td");
    \u0275\u0275text(104, "13-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "td")(106, "span", 46);
    \u0275\u0275text(107, "Approved");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "td", 40)(109, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_109_listener() {
      \u0275\u0275restoreView(_r1);
      const content2_r3 = \u0275\u0275reference(540);
      return \u0275\u0275resetView(ctx.open(content2_r3));
    });
    \u0275\u0275element(110, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "a", 43);
    \u0275\u0275element(112, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_113_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r4 = \u0275\u0275reference(542);
      return \u0275\u0275resetView(ctx.open(content1_r4));
    });
    \u0275\u0275element(114, "i", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(115, "tr")(116, "td", 37);
    \u0275\u0275text(117, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "td");
    \u0275\u0275text(119, "Casual Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "td");
    \u0275\u0275text(121, "21-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "td");
    \u0275\u0275text(123, "27-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "td", 38);
    \u0275\u0275text(125, "7 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "td");
    \u0275\u0275text(127, "Going to Family Trip");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "td");
    \u0275\u0275text(129, "11-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "td")(131, "span", 47);
    \u0275\u0275text(132, "Pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "td", 40)(134, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_134_listener() {
      \u0275\u0275restoreView(_r1);
      const content2_r3 = \u0275\u0275reference(540);
      return \u0275\u0275resetView(ctx.open(content2_r3));
    });
    \u0275\u0275element(135, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "a", 43);
    \u0275\u0275element(137, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_138_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r4 = \u0275\u0275reference(542);
      return \u0275\u0275resetView(ctx.open(content1_r4));
    });
    \u0275\u0275element(139, "i", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(140, "tr")(141, "td", 37);
    \u0275\u0275text(142, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "td");
    \u0275\u0275text(144, "Casual Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "td");
    \u0275\u0275text(146, "05-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "td");
    \u0275\u0275text(148, "05-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "td", 38);
    \u0275\u0275text(150, "1 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "td");
    \u0275\u0275text(152, "Personal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "td");
    \u0275\u0275text(154, "12-12-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "td")(156, "span", 46);
    \u0275\u0275text(157, "Approved");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(158, "td", 40)(159, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_159_listener() {
      \u0275\u0275restoreView(_r1);
      const content2_r3 = \u0275\u0275reference(540);
      return \u0275\u0275resetView(ctx.open(content2_r3));
    });
    \u0275\u0275element(160, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "a", 43);
    \u0275\u0275element(162, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_163_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r4 = \u0275\u0275reference(542);
      return \u0275\u0275resetView(ctx.open(content1_r4));
    });
    \u0275\u0275element(164, "i", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(165, "tr")(166, "td", 37);
    \u0275\u0275text(167, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "td");
    \u0275\u0275text(169, "Medical Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "td");
    \u0275\u0275text(171, "22-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "td");
    \u0275\u0275text(173, "22-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "td", 38);
    \u0275\u0275text(175, "1 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "td");
    \u0275\u0275text(177, "Take Rest");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "td");
    \u0275\u0275text(179, "21-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "td")(181, "span", 46);
    \u0275\u0275text(182, "Approved");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(183, "td", 40)(184, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_184_listener() {
      \u0275\u0275restoreView(_r1);
      const content2_r3 = \u0275\u0275reference(540);
      return \u0275\u0275resetView(ctx.open(content2_r3));
    });
    \u0275\u0275element(185, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "a", 43);
    \u0275\u0275element(187, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(188, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_188_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r4 = \u0275\u0275reference(542);
      return \u0275\u0275resetView(ctx.open(content1_r4));
    });
    \u0275\u0275element(189, "i", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(190, "tr")(191, "td", 37);
    \u0275\u0275text(192, "6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "td");
    \u0275\u0275text(194, "Casual Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "td");
    \u0275\u0275text(196, "18-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(197, "td");
    \u0275\u0275text(198, "19-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(199, "td", 38);
    \u0275\u0275text(200, "2 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(201, "td");
    \u0275\u0275text(202, "Going to my Hometown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(203, "td");
    \u0275\u0275text(204, "10-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(205, "td")(206, "span", 47);
    \u0275\u0275text(207, "Pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(208, "td", 40)(209, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_209_listener() {
      \u0275\u0275restoreView(_r1);
      const content2_r3 = \u0275\u0275reference(540);
      return \u0275\u0275resetView(ctx.open(content2_r3));
    });
    \u0275\u0275element(210, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(211, "a", 43);
    \u0275\u0275element(212, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_213_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r4 = \u0275\u0275reference(542);
      return \u0275\u0275resetView(ctx.open(content1_r4));
    });
    \u0275\u0275element(214, "i", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(215, "tr")(216, "td", 37);
    \u0275\u0275text(217, "7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(218, "td");
    \u0275\u0275text(219, "Casual Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(220, "td");
    \u0275\u0275text(221, "11-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(222, "td");
    \u0275\u0275text(223, "11-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "td", 38);
    \u0275\u0275text(225, "1st Half Day");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(226, "td");
    \u0275\u0275text(227, "Going to Hosiptal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(228, "td");
    \u0275\u0275text(229, "11-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(230, "td")(231, "span", 48);
    \u0275\u0275text(232, "Rejected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(233, "td", 40)(234, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_234_listener() {
      \u0275\u0275restoreView(_r1);
      const content2_r3 = \u0275\u0275reference(540);
      return \u0275\u0275resetView(ctx.open(content2_r3));
    });
    \u0275\u0275element(235, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(236, "a", 43);
    \u0275\u0275element(237, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(238, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_238_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r4 = \u0275\u0275reference(542);
      return \u0275\u0275resetView(ctx.open(content1_r4));
    });
    \u0275\u0275element(239, "i", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(240, "tr")(241, "td", 37);
    \u0275\u0275text(242, "8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(243, "td");
    \u0275\u0275text(244, "Medical Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(245, "td");
    \u0275\u0275text(246, "09-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(247, "td");
    \u0275\u0275text(248, "09-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(249, "td", 38);
    \u0275\u0275text(250, "1 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(251, "td");
    \u0275\u0275text(252, "Going to Hosiptal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(253, "td");
    \u0275\u0275text(254, "08-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(255, "td")(256, "span", 46);
    \u0275\u0275text(257, "Approved");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(258, "td", 40)(259, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_259_listener() {
      \u0275\u0275restoreView(_r1);
      const content2_r3 = \u0275\u0275reference(540);
      return \u0275\u0275resetView(ctx.open(content2_r3));
    });
    \u0275\u0275element(260, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(261, "a", 43);
    \u0275\u0275element(262, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(263, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_263_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r4 = \u0275\u0275reference(542);
      return \u0275\u0275resetView(ctx.open(content1_r4));
    });
    \u0275\u0275element(264, "i", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(265, "tr")(266, "td", 37);
    \u0275\u0275text(267, "9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(268, "td");
    \u0275\u0275text(269, "Casual Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(270, "td");
    \u0275\u0275text(271, "08-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(272, "td");
    \u0275\u0275text(273, "07-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(274, "td", 38);
    \u0275\u0275text(275, "2 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(276, "td");
    \u0275\u0275text(277, "Personal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(278, "td");
    \u0275\u0275text(279, "25-12-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(280, "td")(281, "span", 46);
    \u0275\u0275text(282, "Approved");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(283, "td", 40)(284, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_284_listener() {
      \u0275\u0275restoreView(_r1);
      const content2_r3 = \u0275\u0275reference(540);
      return \u0275\u0275resetView(ctx.open(content2_r3));
    });
    \u0275\u0275element(285, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(286, "a", 43);
    \u0275\u0275element(287, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(288, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_288_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r4 = \u0275\u0275reference(542);
      return \u0275\u0275resetView(ctx.open(content1_r4));
    });
    \u0275\u0275element(289, "i", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(290, "tr")(291, "td", 37);
    \u0275\u0275text(292, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(293, "td");
    \u0275\u0275text(294, "Casual Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(295, "td");
    \u0275\u0275text(296, "21-12-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(297, "td");
    \u0275\u0275text(298, "21-12-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(299, "td", 38);
    \u0275\u0275text(300, "1 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(301, "td");
    \u0275\u0275text(302, "Personal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(303, "td");
    \u0275\u0275text(304, "19-12-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(305, "td")(306, "span", 48);
    \u0275\u0275text(307, "Rejected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(308, "td", 40)(309, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_309_listener() {
      \u0275\u0275restoreView(_r1);
      const content2_r3 = \u0275\u0275reference(540);
      return \u0275\u0275resetView(ctx.open(content2_r3));
    });
    \u0275\u0275element(310, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(311, "a", 43);
    \u0275\u0275element(312, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(313, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_313_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r4 = \u0275\u0275reference(542);
      return \u0275\u0275resetView(ctx.open(content1_r4));
    });
    \u0275\u0275element(314, "i", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(315, "tr")(316, "td", 37);
    \u0275\u0275text(317, "11");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(318, "td");
    \u0275\u0275text(319, "Casual Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(320, "td");
    \u0275\u0275text(321, "18-11-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(322, "td");
    \u0275\u0275text(323, "19-11-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(324, "td", 38);
    \u0275\u0275text(325, "2 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(326, "td");
    \u0275\u0275text(327, "Going to HomeTown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(328, "td");
    \u0275\u0275text(329, "11-12-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(330, "td")(331, "span", 46);
    \u0275\u0275text(332, "Approved");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(333, "td", 40)(334, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_334_listener() {
      \u0275\u0275restoreView(_r1);
      const content2_r3 = \u0275\u0275reference(540);
      return \u0275\u0275resetView(ctx.open(content2_r3));
    });
    \u0275\u0275element(335, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(336, "a", 43);
    \u0275\u0275element(337, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(338, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_338_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r4 = \u0275\u0275reference(542);
      return \u0275\u0275resetView(ctx.open(content1_r4));
    });
    \u0275\u0275element(339, "i", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(340, "tr")(341, "td", 37);
    \u0275\u0275text(342, "12");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(343, "td");
    \u0275\u0275text(344, "Medical Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(345, "td");
    \u0275\u0275text(346, "11-10-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(347, "td");
    \u0275\u0275text(348, "11-10-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(349, "td", 38);
    \u0275\u0275text(350, "1 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(351, "td");
    \u0275\u0275text(352, "Personal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(353, "td");
    \u0275\u0275text(354, "11-10-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(355, "td")(356, "span", 46);
    \u0275\u0275text(357, "Approved");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(358, "td", 40)(359, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_359_listener() {
      \u0275\u0275restoreView(_r1);
      const content2_r3 = \u0275\u0275reference(540);
      return \u0275\u0275resetView(ctx.open(content2_r3));
    });
    \u0275\u0275element(360, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(361, "a", 43);
    \u0275\u0275element(362, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(363, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_363_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r4 = \u0275\u0275reference(542);
      return \u0275\u0275resetView(ctx.open(content1_r4));
    });
    \u0275\u0275element(364, "i", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(365, "tr")(366, "td", 37);
    \u0275\u0275text(367, "13");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(368, "td");
    \u0275\u0275text(369, "Casual Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(370, "td");
    \u0275\u0275text(371, "13-08-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(372, "td");
    \u0275\u0275text(373, "14-08-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(374, "td", 38);
    \u0275\u0275text(375, "2 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(376, "td");
    \u0275\u0275text(377, "Going to Family Trip");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(378, "td");
    \u0275\u0275text(379, "09-08-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(380, "td")(381, "span", 46);
    \u0275\u0275text(382, "Approved");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(383, "td", 40)(384, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_384_listener() {
      \u0275\u0275restoreView(_r1);
      const content2_r3 = \u0275\u0275reference(540);
      return \u0275\u0275resetView(ctx.open(content2_r3));
    });
    \u0275\u0275element(385, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(386, "a", 43);
    \u0275\u0275element(387, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(388, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_388_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r4 = \u0275\u0275reference(542);
      return \u0275\u0275resetView(ctx.open(content1_r4));
    });
    \u0275\u0275element(389, "i", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(390, "tr")(391, "td", 37);
    \u0275\u0275text(392, "14");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(393, "td");
    \u0275\u0275text(394, "Casual Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(395, "td");
    \u0275\u0275text(396, "21-05-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(397, "td");
    \u0275\u0275text(398, "21-05-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(399, "td", 38);
    \u0275\u0275text(400, "1 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(401, "td");
    \u0275\u0275text(402, "Personal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(403, "td");
    \u0275\u0275text(404, "21-05-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(405, "td")(406, "span", 46);
    \u0275\u0275text(407, "Approved");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(408, "td", 40)(409, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_409_listener() {
      \u0275\u0275restoreView(_r1);
      const content2_r3 = \u0275\u0275reference(540);
      return \u0275\u0275resetView(ctx.open(content2_r3));
    });
    \u0275\u0275element(410, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(411, "a", 43);
    \u0275\u0275element(412, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(413, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_413_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r4 = \u0275\u0275reference(542);
      return \u0275\u0275resetView(ctx.open(content1_r4));
    });
    \u0275\u0275element(414, "i", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(415, "tr")(416, "td", 37);
    \u0275\u0275text(417, "15");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(418, "td");
    \u0275\u0275text(419, "Casual Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(420, "td");
    \u0275\u0275text(421, "21-01-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(422, "td");
    \u0275\u0275text(423, "22-01-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(424, "td", 38);
    \u0275\u0275text(425, "2 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(426, "td");
    \u0275\u0275text(427, "Going to Hosiptal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(428, "td");
    \u0275\u0275text(429, "16-01-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(430, "td")(431, "span", 46);
    \u0275\u0275text(432, "Approved");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(433, "td", 40)(434, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_434_listener() {
      \u0275\u0275restoreView(_r1);
      const content2_r3 = \u0275\u0275reference(540);
      return \u0275\u0275resetView(ctx.open(content2_r3));
    });
    \u0275\u0275element(435, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(436, "a", 43);
    \u0275\u0275element(437, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(438, "a", 41);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_438_listener() {
      \u0275\u0275restoreView(_r1);
      const content1_r4 = \u0275\u0275reference(542);
      return \u0275\u0275resetView(ctx.open(content1_r4));
    });
    \u0275\u0275element(439, "i", 45);
    \u0275\u0275elementEnd()()()()()()()()();
    \u0275\u0275elementStart(440, "div", 49)(441, "div", 17)(442, "div", 18)(443, "h4", 19);
    \u0275\u0275text(444, "Leaves Overview");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(445, "div", 50);
    \u0275\u0275element(446, "apx-chart", 51);
    \u0275\u0275elementStart(447, "div", 52)(448, "div", 53)(449, "div", 15)(450, "div", 54)(451, "div", 55);
    \u0275\u0275element(452, "span", 56);
    \u0275\u0275text(453, "Casual Leaves ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(454, "div", 57)(455, "div", 55);
    \u0275\u0275element(456, "span", 58);
    \u0275\u0275text(457, "Sick Leaves ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(458, "div", 57)(459, "div", 55);
    \u0275\u0275element(460, "span", 59);
    \u0275\u0275text(461, "Gifted Leaves ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(462, "div", 57)(463, "div", 55);
    \u0275\u0275element(464, "span", 60);
    \u0275\u0275text(465, "Remaining Leaves ");
    \u0275\u0275elementEnd()()()()()()()()();
    \u0275\u0275elementStart(466, "div", 61)(467, "div", 62)(468, "div", 63)(469, "div", 64)(470, "h5", 65);
    \u0275\u0275text(471, "My Leave Application");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(472, "button", 66);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_button_click_472_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.modal.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(473, "div", 67)(474, "div", 33)(475, "table", 68)(476, "tbody")(477, "tr")(478, "td", 38);
    \u0275\u0275text(479, "Leave Type ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(480, "td");
    \u0275\u0275text(481, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(482, "td");
    \u0275\u0275text(483, "Casual Leave");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(484, "tr")(485, "td", 38);
    \u0275\u0275text(486, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(487, "td");
    \u0275\u0275text(488, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(489, "td");
    \u0275\u0275text(490, "16-01-2021");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(491, "tr")(492, "td", 38);
    \u0275\u0275text(493, "Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(494, "td");
    \u0275\u0275text(495, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(496, "td");
    \u0275\u0275text(497, "1 day");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(498, "tr")(499, "td", 38);
    \u0275\u0275text(500, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(501, "td");
    \u0275\u0275text(502, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(503, "td");
    \u0275\u0275text(504, "Personal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(505, "tr")(506, "td", 38);
    \u0275\u0275text(507, "Applied On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(508, "td");
    \u0275\u0275text(509, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(510, "td");
    \u0275\u0275text(511, "05-01-2021");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(512, "div", 69)(513, "a", 70);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_513_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.modal.close("cross click"));
    });
    \u0275\u0275text(514, "Close");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(515, "div", 71)(516, "div", 62)(517, "div", 63)(518, "div", 64)(519, "h5", 65);
    \u0275\u0275text(520, "Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(521, "button", 66);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_button_click_521_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.modal.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(522, "div", 67)(523, "div", 72)(524, "label", 73);
    \u0275\u0275text(525, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(526, "input", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(527, "div", 72)(528, "label", 73);
    \u0275\u0275text(529, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(530, "textarea", 75);
    \u0275\u0275text(531, "Some text here...");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(532, "div", 69)(533, "a", 76);
    \u0275\u0275listener("click", function MyLeavesComponent_Template_a_click_533_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.modal.close("cross click"));
    });
    \u0275\u0275text(534, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(535, "a", 77);
    \u0275\u0275text(536, "Submit");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(537, "div", 61)(538, "div", 62);
    \u0275\u0275template(539, MyLeavesComponent_ng_template_539_Template, 46, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(541, MyLeavesComponent_ng_template_541_Template, 19, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(543, MyLeavesComponent_ng_template_543_Template, 58, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275advance(446);
    \u0275\u0275property("series", ctx.donutData.series)("dataLabels", ctx.donutData.dataLabels)("stroke", ctx.donutData.stroke)("labels", ctx.donutData.labels)("colors", ctx.donutData.colors)("chart", ctx.donutData.chart)("responsive", ctx.donutData.responsive)("plotOptions", ctx.donutData.plotOptions)("legend", ctx.donutData.legend);
  }
}, dependencies: [NgbModule, NgbTooltip, NgSelectModule, NgSelectComponent, NgOptionComponent, NgApexchartsModule, ChartComponent, RouterModule, FlatpickrModule, FlatpickrDirective] });
var MyLeavesComponent = _MyLeavesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyLeavesComponent, { className: "MyLeavesComponent" });
})();
export {
  MyLeavesComponent
};
//# sourceMappingURL=my-leaves.component-6QRS76RJ.js.map
