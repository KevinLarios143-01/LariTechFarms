import {
  DataAttendanceByUserService
} from "./chunk-YFWE3JHA.js";
import {
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import {
  FormsModule,
  NgbModal,
  NgbModule,
  NgbTooltip,
  ReactiveFormsModule
} from "./chunk-47LBZ5ZO.js";
import {
  CommonModule,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/hrmdashboards/payroll/add-payroll/add-payroll.component.ts
function AddPayrollComponent_ng_template_269_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "h5", 65);
    \u0275\u0275text(2, "Select Month & Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 66);
    \u0275\u0275listener("click", function AddPayrollComponent_ng_template_269_Template_button_click_3_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 67)(5, "div", 46)(6, "label", 20);
    \u0275\u0275text(7, "Month:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ng-select", 68)(9, "ng-option", 69);
    \u0275\u0275text(10, "Select Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ng-option", 40);
    \u0275\u0275text(12, "January");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ng-option", 24);
    \u0275\u0275text(14, "February");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ng-option", 25);
    \u0275\u0275text(16, "March");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ng-option", 26);
    \u0275\u0275text(18, "April");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ng-option", 27);
    \u0275\u0275text(20, "May");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ng-option", 28);
    \u0275\u0275text(22, "June");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ng-option", 29);
    \u0275\u0275text(24, "July");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ng-option", 30);
    \u0275\u0275text(26, "August");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ng-option", 31);
    \u0275\u0275text(28, "September");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ng-option", 32);
    \u0275\u0275text(30, "October");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ng-option", 33);
    \u0275\u0275text(32, "November");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ng-option", 34);
    \u0275\u0275text(34, "December");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 19)(36, "label", 20);
    \u0275\u0275text(37, "Year:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-select", 70)(39, "ng-option", 69);
    \u0275\u0275text(40, "Select Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ng-option", 40);
    \u0275\u0275text(42, "2024");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "ng-option", 24);
    \u0275\u0275text(44, "2023");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "ng-option", 25);
    \u0275\u0275text(46, "2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "ng-option", 26);
    \u0275\u0275text(48, "2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ng-option", 27);
    \u0275\u0275text(50, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ng-option", 28);
    \u0275\u0275text(52, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ng-option", 29);
    \u0275\u0275text(54, "2018");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ng-option", 30);
    \u0275\u0275text(56, "2017");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ng-option", 31);
    \u0275\u0275text(58, "2016");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "ng-option", 32);
    \u0275\u0275text(60, "2015");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "ng-option", 33);
    \u0275\u0275text(62, "2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ng-option", 34);
    \u0275\u0275text(64, "2013");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "ng-option", 35);
    \u0275\u0275text(66, "2012");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "ng-option", 36);
    \u0275\u0275text(68, "2011");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ng-option", 37);
    \u0275\u0275text(70, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ng-option", 42);
    \u0275\u0275text(72, "2010");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(73, "div", 71)(74, "a", 72);
    \u0275\u0275listener("click", function AddPayrollComponent_ng_template_269_Template_a_click_74_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.close("cross click"));
    });
    \u0275\u0275text(75, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "a", 62);
    \u0275\u0275text(77, "Download");
    \u0275\u0275elementEnd()();
  }
}
var _AddPayrollComponent = class _AddPayrollComponent {
  constructor(modalService, dataService) {
    this.modalService = modalService;
    this.dataService = dataService;
    this.selectedMonthId = "January";
    this.selectedYearId = "2021";
    this.selectedEmpName = "10";
  }
  ngOnInit() {
    this.month$ = this.dataService.getMonth();
    this.year$ = this.dataService.getYear();
    this.empName$ = this.dataService.getEmpName();
  }
  open(content) {
    this.modalService.open(content, { windowClass: "modalCusSty" });
  }
};
_AddPayrollComponent.\u0275fac = function AddPayrollComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddPayrollComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(DataAttendanceByUserService));
};
_AddPayrollComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddPayrollComponent, selectors: [["app-add-payroll"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 271, vars: 0, consts: [["content", ""], [1, "page-header", "d-lg-flex", "d-block"], [1, "page-leftheader"], [1, "page-title"], [1, "page-rightheader"], [1, "btn-list", "d-flex", "gap-2"], ["data-bs-toggle", "modal", 1, "btn", "btn-secondary", 3, "click"], [1, "las", "la-file-excel"], ["placement", "top", "ngbTooltip", "E-mail", 1, "btn", "btn-light3"], [1, "fe", "fe-mail"], ["placement", "top", "ngbTooltip", "Contact", 1, "btn", "btn-light3"], [1, "fe", "fe-phone-call"], ["placement", "top", "ngbTooltip", "Info", 1, "btn", "btn-primary"], [1, "fe", "fe-info"], [1, "row"], [1, "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "col-md-12", "col-lg-3"], [1, "form-group"], [1, "form-label"], ["name", "attendance", "data-trigger", "", "placeholder", "Select Employee", 1, "custom-select"], ["value", ""], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["name", "attendance", "data-trigger", "", "placeholder", "Select Month", 1, "custom-select"], ["name", "attendance", "data-trigger", "", "placeholder", "Select Year", 1, "custom-select"], ["value", "1"], ["value", "4", "selected", ""], ["value", "16"], [1, "form-group", "mt-2"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-grid"], [1, "card-title"], [1, "form-group", "mb-3"], [1, "col-md-12", "col-lg-2"], [1, "form-label", "mb-0", "mt-2"], [1, "col-md-12", "col-lg-8"], ["type", "text", "placeholder", "0", 1, "form-control"], [1, "form-label", "me-5"], [1, "d-flex"], [1, "form-check", "me-3"], ["type", "radio", "name", "flexRadioDefault", "id", "paid", 1, "form-check-input"], ["for", "paid", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "flexRadioDefault", "id", "unpaid", 1, "form-check-input"], ["for", "unpaid", 1, "form-check-label"], [1, "card-body", "border-top"], [1, "btn", "btn-primary", "btn-success", "text-fixed-white", "mt-4", "mt-lg-0"], [1, "ri-add-fill", "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], ["href", "javascript:void(0);", 1, "btn", "btn-danger"], [1, "modal-header"], [1, "modal-title"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["name", "attendance", "placeholder", "Select Month", "data-trigger", "", 1, "form-control", "custom-select", "p-0"], ["value", "0"], ["name", "attendance", "placeholder", "Select Year", "data-trigger", "", 1, "form-control", "custom-select", "p-0"], [1, "modal-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"]], template: function AddPayrollComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3, "Add Payroll");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "a", 6);
    \u0275\u0275listener("click", function AddPayrollComponent_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(270);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(7, "i", 7);
    \u0275\u0275text(8, " Download Monthly Excel Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 8);
    \u0275\u0275element(10, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 10);
    \u0275\u0275element(12, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 12);
    \u0275\u0275element(14, "i", 13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "div", 17)(19, "div", 14)(20, "div", 18)(21, "div", 19)(22, "label", 20);
    \u0275\u0275text(23, "Employee Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ng-select", 21)(25, "ng-option", 22);
    \u0275\u0275text(26, "Select Employee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ng-option", 23);
    \u0275\u0275text(28, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ng-option", 24);
    \u0275\u0275text(30, "Austin Bell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ng-option", 25);
    \u0275\u0275text(32, "Maria Bower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ng-option", 26);
    \u0275\u0275text(34, "Peter Hill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "ng-option", 27);
    \u0275\u0275text(36, "Victoria Lyman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ng-option", 28);
    \u0275\u0275text(38, "Adam Quinn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "ng-option", 29);
    \u0275\u0275text(40, "Melanie Coleman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ng-option", 30);
    \u0275\u0275text(42, "Max Wilson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "ng-option", 31);
    \u0275\u0275text(44, "Amelia Russell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "ng-option", 32);
    \u0275\u0275text(46, "Justin Metcalfe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "ng-option", 33);
    \u0275\u0275text(48, "Ryan Young");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ng-option", 34);
    \u0275\u0275text(50, "Jennifer Hardacre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ng-option", 35);
    \u0275\u0275text(52, "Justin Parr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ng-option", 36);
    \u0275\u0275text(54, "Julia Hodges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ng-option", 37);
    \u0275\u0275text(56, "Michael Sutherland");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "div", 18)(58, "div", 19)(59, "label", 20);
    \u0275\u0275text(60, "Month:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "ng-select", 38)(62, "ng-option", 22);
    \u0275\u0275text(63, "Select Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "ng-option", 23);
    \u0275\u0275text(65, "January");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "ng-option", 24);
    \u0275\u0275text(67, "February");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "ng-option", 25);
    \u0275\u0275text(69, "March");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "ng-option", 26);
    \u0275\u0275text(71, "April");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "ng-option", 27);
    \u0275\u0275text(73, "May");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "ng-option", 28);
    \u0275\u0275text(75, "June");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "ng-option", 29);
    \u0275\u0275text(77, "July");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "ng-option", 30);
    \u0275\u0275text(79, "August");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "ng-option", 31);
    \u0275\u0275text(81, "September");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "ng-option", 32);
    \u0275\u0275text(83, "October");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "ng-option", 33);
    \u0275\u0275text(85, "November");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "ng-option", 34);
    \u0275\u0275text(87, "December");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(88, "div", 18)(89, "div", 19)(90, "label", 20);
    \u0275\u0275text(91, "Year:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "ng-select", 39)(93, "ng-option", 22);
    \u0275\u0275text(94, "Select Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "ng-option", 40);
    \u0275\u0275text(96, "2024");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "ng-option", 24);
    \u0275\u0275text(98, "2023");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "ng-option", 25);
    \u0275\u0275text(100, "2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "ng-option", 41);
    \u0275\u0275text(102, "2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "ng-option", 27);
    \u0275\u0275text(104, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "ng-option", 28);
    \u0275\u0275text(106, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "ng-option", 29);
    \u0275\u0275text(108, "2018");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "ng-option", 30);
    \u0275\u0275text(110, "2017");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "ng-option", 31);
    \u0275\u0275text(112, "2016");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "ng-option", 32);
    \u0275\u0275text(114, "2015");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "ng-option", 33);
    \u0275\u0275text(116, "2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "ng-option", 34);
    \u0275\u0275text(118, "2013");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "ng-option", 35);
    \u0275\u0275text(120, "2012");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "ng-option", 36);
    \u0275\u0275text(122, "2011");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "ng-option", 37);
    \u0275\u0275text(124, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "ng-option", 42);
    \u0275\u0275text(126, "2010");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(127, "div", 18)(128, "div", 43);
    \u0275\u0275element(129, "label", 20);
    \u0275\u0275elementStart(130, "a", 44);
    \u0275\u0275text(131, "Search");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(132, "div", 14)(133, "div", 15)(134, "div", 16)(135, "div", 17)(136, "h4", 45);
    \u0275\u0275text(137, "Salary Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "div", 46)(139, "div", 14)(140, "div", 47)(141, "label", 48);
    \u0275\u0275text(142, "Basic Salary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "div", 49);
    \u0275\u0275element(144, "input", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(145, "div", 46)(146, "div", 14)(147, "div", 47)(148, "label", 48);
    \u0275\u0275text(149, "Expense Claim");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(150, "div", 49);
    \u0275\u0275element(151, "input", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(152, "div", 46)(153, "div", 14)(154, "div", 47)(155, "label", 51);
    \u0275\u0275text(156, "Status :");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(157, "div", 49)(158, "div", 52)(159, "div", 53);
    \u0275\u0275element(160, "input", 54);
    \u0275\u0275elementStart(161, "label", 55);
    \u0275\u0275text(162, " Paid ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(163, "div", 56);
    \u0275\u0275element(164, "input", 57);
    \u0275\u0275elementStart(165, "label", 58);
    \u0275\u0275text(166, " Unpaid ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(167, "div", 59)(168, "h4", 45);
    \u0275\u0275text(169, "Allowances");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "div", 46)(171, "div", 14)(172, "div", 47)(173, "label", 48);
    \u0275\u0275text(174, "HRA Allowance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(175, "div", 49);
    \u0275\u0275element(176, "input", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(177, "div", 46)(178, "div", 14)(179, "div", 47)(180, "label", 48);
    \u0275\u0275text(181, "Conveyance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(182, "div", 49);
    \u0275\u0275element(183, "input", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(184, "div", 46)(185, "div", 14)(186, "div", 47)(187, "label", 48);
    \u0275\u0275text(188, "Medical Allowance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(189, "div", 49);
    \u0275\u0275element(190, "input", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(191, "div", 46)(192, "div", 14)(193, "div", 47)(194, "label", 48);
    \u0275\u0275text(195, "Bonus Allowance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(196, "div", 49);
    \u0275\u0275element(197, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(198, "div", 47)(199, "a", 60);
    \u0275\u0275element(200, "i", 61);
    \u0275\u0275text(201, "Add");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(202, "div", 59)(203, "h4", 45);
    \u0275\u0275text(204, "Deduction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(205, "div", 46)(206, "div", 14)(207, "div", 47)(208, "label", 48);
    \u0275\u0275text(209, "PF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(210, "div", 49);
    \u0275\u0275element(211, "input", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(212, "div", 46)(213, "div", 14)(214, "div", 47)(215, "label", 48);
    \u0275\u0275text(216, "Professional Tax");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(217, "div", 49);
    \u0275\u0275element(218, "input", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(219, "div", 46)(220, "div", 14)(221, "div", 47)(222, "label", 48);
    \u0275\u0275text(223, "TDS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(224, "div", 49);
    \u0275\u0275element(225, "input", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(226, "div", 46)(227, "div", 14)(228, "div", 47)(229, "label", 48);
    \u0275\u0275text(230, "Loans & Others");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(231, "div", 49);
    \u0275\u0275element(232, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(233, "div", 47)(234, "a", 60);
    \u0275\u0275element(235, "i", 61);
    \u0275\u0275text(236, "Add");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(237, "div", 59)(238, "h4", 45);
    \u0275\u0275text(239, "Gross Salary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(240, "div", 46)(241, "div", 14)(242, "div", 47)(243, "label", 48);
    \u0275\u0275text(244, "Total Allowances");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(245, "div", 49);
    \u0275\u0275element(246, "input", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(247, "div", 46)(248, "div", 14)(249, "div", 47)(250, "label", 48);
    \u0275\u0275text(251, "Total Deduction");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(252, "div", 49);
    \u0275\u0275element(253, "input", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(254, "div", 46)(255, "div", 14)(256, "div", 47)(257, "label", 48);
    \u0275\u0275text(258, "Net Salary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(259, "div", 49);
    \u0275\u0275element(260, "input", 50);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(261, "div", 59)(262, "div", 14);
    \u0275\u0275element(263, "div", 47);
    \u0275\u0275elementStart(264, "div", 49)(265, "a", 62);
    \u0275\u0275text(266, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(267, "a", 63);
    \u0275\u0275text(268, "Cancel");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(269, AddPayrollComponent_ng_template_269_Template, 78, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
}, dependencies: [NgSelectModule, NgSelectComponent, NgOptionComponent, FormsModule, ReactiveFormsModule, CommonModule, RouterModule, NgbModule, NgbTooltip] });
var AddPayrollComponent = _AddPayrollComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddPayrollComponent, { className: "AddPayrollComponent" });
})();
export {
  AddPayrollComponent
};
//# sourceMappingURL=add-payroll.component-KMTZLSBU.js.map
