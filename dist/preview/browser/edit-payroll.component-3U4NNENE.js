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
  ReactiveFormsModule
} from "./chunk-47LBZ5ZO.js";
import {
  CommonModule,
  RouterLink,
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

// src/app/componets/dashbord/hrmdashboards/payroll/edit-payroll/edit-payroll.component.ts
function EditPayrollComponent_ng_template_265_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "h5", 64);
    \u0275\u0275text(2, "Select Month & Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 65);
    \u0275\u0275listener("click", function EditPayrollComponent_ng_template_265_Template_button_click_3_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(4, "span", 66);
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 67)(7, "div", 20)(8, "label", 21);
    \u0275\u0275text(9, "Month:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ng-select", 68)(11, "ng-option", 23);
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
    \u0275\u0275elementStart(35, "div", 20)(36, "label", 21);
    \u0275\u0275text(37, "Year:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-select", 69)(39, "ng-option", 23);
    \u0275\u0275text(40, "2024");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ng-option", 24);
    \u0275\u0275text(42, "2023");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "ng-option", 25);
    \u0275\u0275text(44, "2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "ng-option", 26);
    \u0275\u0275text(46, "2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "ng-option", 27);
    \u0275\u0275text(48, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ng-option", 28);
    \u0275\u0275text(50, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ng-option", 29);
    \u0275\u0275text(52, "2018");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ng-option", 30);
    \u0275\u0275text(54, "2017");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ng-option", 31);
    \u0275\u0275text(56, "2016");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ng-option", 32);
    \u0275\u0275text(58, "2015");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "ng-option", 33);
    \u0275\u0275text(60, "2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "ng-option", 34);
    \u0275\u0275text(62, "2013");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ng-option", 35);
    \u0275\u0275text(64, "2012");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "ng-option", 36);
    \u0275\u0275text(66, "2011");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "ng-option", 37);
    \u0275\u0275text(68, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ng-option", 40);
    \u0275\u0275text(70, "2010");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(71, "div", 70)(72, "a", 71);
    \u0275\u0275listener("click", function EditPayrollComponent_ng_template_265_Template_a_click_72_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.dismiss("Cross click"));
    });
    \u0275\u0275text(73, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "a", 72);
    \u0275\u0275listener("click", function EditPayrollComponent_ng_template_265_Template_a_click_74_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.dismiss("Cross click"));
    });
    \u0275\u0275text(75, "Download");
    \u0275\u0275elementEnd()();
  }
}
var _EditPayrollComponent = class _EditPayrollComponent {
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
    this.modalService.open(content, { backdrop: "static", windowClass: "modalCusSty" });
  }
};
_EditPayrollComponent.\u0275fac = function EditPayrollComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EditPayrollComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(DataAttendanceByUserService));
};
_EditPayrollComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditPayrollComponent, selectors: [["app-edit-payroll"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 267, vars: 0, consts: [["content", ""], [1, "page-header", "d-xl-flex", "d-block"], [1, "page-leftheader"], [1, "page-title"], [1, "page-rightheader"], [1, "btn-list"], ["routerLink", "/dashboard/hrmdashboards/payroll/add-payroll", 1, "btn", "btn-primary"], ["data-bs-toggle", "modal", "data-bs-target", "#excelmodal", 1, "btn", "btn-secondary", "m-1", 3, "click"], [1, "las", "la-file-excel"], ["placement", "top", "ngbTooltip", "E-mail", 1, "btn", "btn-light3", "m-1"], [1, "fe", "fe-mail"], ["placement", "top", "ngbTooltip", "Contact", 1, "btn", "btn-light3", "m-1"], [1, "fe", "fe-phone-call"], ["placement", "top", "ngbTooltip", "Info", 1, "btn", "btn-primary", "m-1"], [1, "fe", "fe-info"], [1, "row"], [1, "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "col-md-12", "col-lg-3"], [1, "form-group"], [1, "form-label"], ["name", "attendance", "data-trigger", "", "placeholder", "Select Employee", 1, "custom-select"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["name", "attendance", "data-trigger", "", "placeholder", "January", 1, "custom-select"], ["name", "attendance", "data-trigger", "", "placeholder", "2021", 1, "custom-select"], ["value", "16"], [1, "form-group", "mt-2"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-grid"], [1, "card-title"], [1, "form-group", "mb-3"], [1, "col-md-12", "col-lg-2"], [1, "form-label", "mb-0", "mt-2"], [1, "col-md-12", "col-lg-8"], ["type", "text", "placeholder", "0", "value", "$32,000", 1, "form-control"], ["type", "text", "placeholder", "0", "value", "0.00", 1, "form-control"], [1, "form-label", "me-5"], [1, "d-flex"], [1, "form-check", "me-3"], ["type", "radio", "name", "flexRadioDefault", "id", "paid", 1, "form-check-input"], ["for", "paid", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "flexRadioDefault", "id", "unpaid", 1, "form-check-input"], ["for", "unpaid", 1, "form-check-label"], [1, "card-body", "border-top"], [1, "btn", "btn-primary", "btn-success", "text-fixed-white", "mt-4", "mt-lg-0"], [1, "ri-add-fill", "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], ["href", "javascript:void(0);", 1, "btn", "btn-danger"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "nav-link"], [1, "modal-body"], ["name", "attendance", "placeholder", "Select Month", 1, "form-control", "custom-select", "p-0"], ["name", "attendance", "placeholder", "Select Year", 1, "form-control", "custom-select", "p-0"], [1, "modal-footer"], ["href", "javascript:;", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", "me-2", 3, "click"], ["href", "javascript:;", 1, "btn", "btn-success", 3, "click"]], template: function EditPayrollComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h4", 3);
    \u0275\u0275text(3, "Edit Payroll");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "a", 6);
    \u0275\u0275text(7, "Add New Payroll");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 7);
    \u0275\u0275listener("click", function EditPayrollComponent_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(266);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, " Download Monthly Excel Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 9);
    \u0275\u0275element(12, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 11);
    \u0275\u0275element(14, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 13);
    \u0275\u0275element(16, "i", 14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 15)(18, "div", 16)(19, "div", 17)(20, "div", 18)(21, "div", 15)(22, "div", 19)(23, "div", 20)(24, "label", 21);
    \u0275\u0275text(25, "Employee Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ng-select", 22)(27, "ng-option", 23);
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
    \u0275\u0275elementStart(57, "div", 19)(58, "div", 20)(59, "label", 21);
    \u0275\u0275text(60, "Month:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "ng-select", 38)(62, "ng-option", 23);
    \u0275\u0275text(63, "January");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "ng-option", 24);
    \u0275\u0275text(65, "February");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "ng-option", 25);
    \u0275\u0275text(67, "March");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "ng-option", 26);
    \u0275\u0275text(69, "April");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "ng-option", 27);
    \u0275\u0275text(71, "May");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "ng-option", 28);
    \u0275\u0275text(73, "June");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "ng-option", 29);
    \u0275\u0275text(75, "July");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "ng-option", 30);
    \u0275\u0275text(77, "August");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "ng-option", 31);
    \u0275\u0275text(79, "September");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "ng-option", 32);
    \u0275\u0275text(81, "October");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "ng-option", 33);
    \u0275\u0275text(83, "November");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "ng-option", 34);
    \u0275\u0275text(85, "December");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(86, "div", 19)(87, "div", 20)(88, "label", 21);
    \u0275\u0275text(89, "Year:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "ng-select", 39)(91, "ng-option", 23);
    \u0275\u0275text(92, "2024");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "ng-option", 24);
    \u0275\u0275text(94, "2023");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "ng-option", 25);
    \u0275\u0275text(96, "2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "ng-option", 26);
    \u0275\u0275text(98, "2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "ng-option", 27);
    \u0275\u0275text(100, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "ng-option", 28);
    \u0275\u0275text(102, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "ng-option", 29);
    \u0275\u0275text(104, "2018");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "ng-option", 30);
    \u0275\u0275text(106, "2017");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "ng-option", 31);
    \u0275\u0275text(108, "2016");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "ng-option", 32);
    \u0275\u0275text(110, "2015");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "ng-option", 33);
    \u0275\u0275text(112, "2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "ng-option", 34);
    \u0275\u0275text(114, "2013");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "ng-option", 35);
    \u0275\u0275text(116, "2012");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "ng-option", 36);
    \u0275\u0275text(118, "2011");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "ng-option", 37);
    \u0275\u0275text(120, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "ng-option", 40);
    \u0275\u0275text(122, "2010");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(123, "div", 19)(124, "div", 41);
    \u0275\u0275element(125, "label", 21);
    \u0275\u0275elementStart(126, "a", 42);
    \u0275\u0275text(127, "Search");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(128, "div", 15)(129, "div", 16)(130, "div", 17)(131, "div", 18)(132, "h4", 43);
    \u0275\u0275text(133, "Salary Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "div", 44)(135, "div", 15)(136, "div", 45)(137, "label", 46);
    \u0275\u0275text(138, "Basic Salary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(139, "div", 47);
    \u0275\u0275element(140, "input", 48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(141, "div", 44)(142, "div", 15)(143, "div", 45)(144, "label", 46);
    \u0275\u0275text(145, "Expense Claim");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(146, "div", 47);
    \u0275\u0275element(147, "input", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(148, "div", 44)(149, "div", 15)(150, "div", 45)(151, "label", 50);
    \u0275\u0275text(152, "Status :");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(153, "div", 47)(154, "div", 51)(155, "div", 52);
    \u0275\u0275element(156, "input", 53);
    \u0275\u0275elementStart(157, "label", 54);
    \u0275\u0275text(158, " Paid ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(159, "div", 55);
    \u0275\u0275element(160, "input", 56);
    \u0275\u0275elementStart(161, "label", 57);
    \u0275\u0275text(162, " Unpaid ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(163, "div", 58)(164, "h4", 43);
    \u0275\u0275text(165, "Allowances");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "div", 44)(167, "div", 15)(168, "div", 45)(169, "label", 46);
    \u0275\u0275text(170, "HRA Allowance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(171, "div", 47);
    \u0275\u0275element(172, "input", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(173, "div", 44)(174, "div", 15)(175, "div", 45)(176, "label", 46);
    \u0275\u0275text(177, "Conveyance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(178, "div", 47);
    \u0275\u0275element(179, "input", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(180, "div", 44)(181, "div", 15)(182, "div", 45)(183, "label", 46);
    \u0275\u0275text(184, "Medical Allowance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(185, "div", 47);
    \u0275\u0275element(186, "input", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(187, "div", 44)(188, "div", 15)(189, "div", 45)(190, "label", 46);
    \u0275\u0275text(191, "Bonus Allowance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(192, "div", 47);
    \u0275\u0275element(193, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(194, "div", 45)(195, "a", 59);
    \u0275\u0275element(196, "i", 60);
    \u0275\u0275text(197, "Add");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(198, "div", 58)(199, "h4", 43);
    \u0275\u0275text(200, "Deduction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(201, "div", 44)(202, "div", 15)(203, "div", 45)(204, "label", 46);
    \u0275\u0275text(205, "PF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(206, "div", 47);
    \u0275\u0275element(207, "input", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(208, "div", 44)(209, "div", 15)(210, "div", 45)(211, "label", 46);
    \u0275\u0275text(212, "Professional Tax");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(213, "div", 47);
    \u0275\u0275element(214, "input", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(215, "div", 44)(216, "div", 15)(217, "div", 45)(218, "label", 46);
    \u0275\u0275text(219, "TDS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(220, "div", 47);
    \u0275\u0275element(221, "input", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(222, "div", 44)(223, "div", 15)(224, "div", 45)(225, "label", 46);
    \u0275\u0275text(226, "Loans & Others");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(227, "div", 47);
    \u0275\u0275element(228, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(229, "div", 45)(230, "a", 59);
    \u0275\u0275element(231, "i", 60);
    \u0275\u0275text(232, "Add");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(233, "div", 58)(234, "h4", 43);
    \u0275\u0275text(235, "Gross Salary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(236, "div", 44)(237, "div", 15)(238, "div", 45)(239, "label", 46);
    \u0275\u0275text(240, "Total Allowances");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(241, "div", 47);
    \u0275\u0275element(242, "input", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(243, "div", 44)(244, "div", 15)(245, "div", 45)(246, "label", 46);
    \u0275\u0275text(247, "Total Deduction");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(248, "div", 47);
    \u0275\u0275element(249, "input", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(250, "div", 44)(251, "div", 15)(252, "div", 45)(253, "label", 46);
    \u0275\u0275text(254, "Net Salary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(255, "div", 47);
    \u0275\u0275element(256, "input", 48);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(257, "div", 58)(258, "div", 15);
    \u0275\u0275element(259, "div", 45);
    \u0275\u0275elementStart(260, "div", 47)(261, "a", 61);
    \u0275\u0275text(262, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(263, "a", 62);
    \u0275\u0275text(264, "Cancel");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(265, EditPayrollComponent_ng_template_265_Template, 76, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
}, dependencies: [NgSelectModule, NgSelectComponent, NgOptionComponent, FormsModule, ReactiveFormsModule, CommonModule, RouterModule, RouterLink] });
var EditPayrollComponent = _EditPayrollComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditPayrollComponent, { className: "EditPayrollComponent" });
})();
export {
  EditPayrollComponent
};
//# sourceMappingURL=edit-payroll.component-3U4NNENE.js.map
