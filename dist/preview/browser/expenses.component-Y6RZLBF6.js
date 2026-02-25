import {
  MatPaginator,
  MatSort,
  MaterialModuleModule,
  SharedModule
} from "./chunk-UEAXMXBR.js";
import {
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import {
  MatTableDataSource
} from "./chunk-ZVXZDCDW.js";
import "./chunk-KTQLQ7YR.js";
import {
  FlatpickrDirective,
  FlatpickrModule
} from "./chunk-ZSUERINM.js";
import {
  FormsModule,
  NgbModal,
  NgbModule,
  NgbTooltip,
  ReactiveFormsModule
} from "./chunk-47LBZ5ZO.js";
import {
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
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
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/employee-dashboard/expenses/expenses.component.ts
function ExpensesComponent_For_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "div", 35)(15, "div")(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 36);
    \u0275\u0275element(19, "span", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "td")(21, "div", 38)(22, "a", 39);
    \u0275\u0275element(23, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 41);
    \u0275\u0275listener("click", function ExpensesComponent_For_64_Template_a_click_24_listener() {
      const expense_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.remove(expense_r4.id));
    });
    \u0275\u0275element(25, "i", 42);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const expense_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(expense_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(expense_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(expense_r4.purchase);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(expense_r4.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(expense_r4.price);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(expense_r4.mode);
    \u0275\u0275advance(4);
    \u0275\u0275classMapInterpolate1("badge bg-", expense_r4.bg, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", expense_r4.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(expense_r4.icon);
  }
}
function ExpensesComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "h5", 44);
    \u0275\u0275text(2, "Add New Expense");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 45);
    \u0275\u0275listener("click", function ExpensesComponent_ng_template_65_Template_button_click_3_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 46)(5, "div", 47)(6, "div", 48)(7, "label", 49);
    \u0275\u0275text(8, "Title:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 13)(11, "div", 14)(12, "div", 48)(13, "label", 49);
    \u0275\u0275text(14, "Purchase Place:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 14)(17, "div", 48)(18, "label", 49);
    \u0275\u0275text(19, "Price ($):");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 14)(22, "div", 48)(23, "label", 49);
    \u0275\u0275text(24, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 52)(26, "div", 53)(27, "div", 54);
    \u0275\u0275element(28, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 56);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(30, "div", 48)(31, "div", 49);
    \u0275\u0275text(32, "Upload Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 52);
    \u0275\u0275element(34, "input", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 48)(36, "label", 49);
    \u0275\u0275text(37, "Note:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "textarea", 58);
    \u0275\u0275text(39, "Some text here...");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 59)(41, "div", 60)(42, "a", 61);
    \u0275\u0275listener("click", function ExpensesComponent_ng_template_65_Template_a_click_42_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.close("cross click"));
    });
    \u0275\u0275text(43, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "a", 62);
    \u0275\u0275text(45, "Save");
    \u0275\u0275elementEnd()()();
  }
}
var ELEMENT_DATA = [
  { id: 1, Title: "Bike Services", PurchaseFrom: "ABC Service Center", date: "01-10-2021", Amount: "$678", paidBy: "Card", approval: "Approved", approvalStatus: "success" },
  { id: 2, Title: "Bike Services", PurchaseFrom: "ABC Service Center", date: "01-10-2021", Amount: "$678", paidBy: "Card", approval: "Rejected", approvalStatus: "danger" },
  { id: 3, Title: "Pens", PurchaseFrom: "Books stationery", date: "11-12-2020", Amount: "$12", paidBy: "Cash", approval: "Approved", approvalStatus: "success" },
  { id: 4, Title: "Mouse Pad", PurchaseFrom: "Amazon", date: "21-11-2020", Amount: "$45", paidBy: "Online Payment", approval: "Pending", approvalStatus: "warning" },
  { id: 5, Title: "Data Connection", PurchaseFrom: "PhonePe", date: "16-10-2020", Amount: "$599", paidBy: "Online Payment", approval: "Approved", approvalStatus: "success" },
  { id: 6, Title: "Mobile Recharge", PurchaseFrom: "PhonePe", date: "15-10-2020", Amount: "$100", paidBy: "Online Payment", approval: "Approved", approvalStatus: "success" },
  { id: 7, Title: "Bike Fuel", PurchaseFrom: "Petrol Bunk", date: "12-09-2020", Amount: "$220", paidBy: "Card", approval: "Pending", approvalStatus: "warning" },
  { id: 8, Title: "Bike Fuel", PurchaseFrom: "Petrol Bunk", date: "12-09-2020", Amount: "$220", paidBy: "Card", approval: "Rejected", approvalStatus: "danger" }
];
var _ExpensesComponent = class _ExpensesComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.displayedColumns = ["id", "Title", "PurchaseFrom", "date", "Amount", "paidBy", "approval", "Action"];
    this.expenses = [
      {
        id: "#01",
        title: "Bike Services",
        purchase: "ABC Service Center",
        date: "01-10-2021",
        price: "$678",
        mode: "Card",
        status: "Approved",
        bg: "success",
        icon: ""
      },
      {
        id: "#02",
        title: "Bike Services",
        purchase: "ABC Service Center",
        date: "01-10-2021",
        price: "$678",
        mode: "Card",
        status: "Rejected",
        bg: "danger",
        icon: "fe fe-info"
      },
      {
        id: "#03",
        title: "Pens",
        purchase: "Books stationery",
        date: "11-12-2020",
        price: "$12",
        mode: "Cash",
        status: "Approved",
        bg: "success",
        icon: ""
      },
      {
        id: "#04",
        title: "Mouse Pad",
        purchase: "Aamzon",
        date: "21-11-2020",
        price: "$45",
        mode: "Online Payment",
        status: "Pending",
        bg: "warning",
        icon: ""
      },
      {
        id: "#05",
        title: "Data Connection",
        purchase: "PhonePe",
        date: "16-10-2020",
        price: "$599",
        mode: "Online Payment",
        status: "Pending",
        bg: "warning",
        icon: ""
      },
      {
        id: "#06",
        title: "Mobile Recharge",
        purchase: "PhonePe",
        date: "15-10-2020",
        price: "$100",
        mode: "Online Payment",
        status: "Approved",
        bg: "success",
        icon: ""
      },
      {
        id: "#07",
        title: "Bike Fuel",
        purchase: "Petrol Bunk",
        date: "12-09-2020",
        price: "$220",
        mode: "Card",
        status: "Pending",
        bg: "warning",
        icon: ""
      },
      {
        id: "#08",
        title: "Bike Fuel",
        purchase: "Petrol Bunk",
        date: "12-09-2020",
        price: "$220",
        mode: "Card",
        status: "Rejected",
        bg: "danger",
        icon: "fe fe-info"
      }
    ];
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }
  ngOnInit() {
  }
  openModal(content) {
    this.modalService.open(content, { windowClass: "modalCusSty" });
  }
  remove(id) {
    const data = this.expenses.filter((x) => x.id !== id);
    this.expenses = data;
  }
};
_ExpensesComponent.\u0275fac = function ExpensesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExpensesComponent)(\u0275\u0275directiveInject(NgbModal));
};
_ExpensesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpensesComponent, selectors: [["app-expenses"]], viewQuery: function ExpensesComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 67, vars: 0, consts: [["content", ""], [1, "page-header", "d-lg-flex", "d-block"], [1, "page-leftheader"], [1, "page-title"], [1, "page-rightheader"], [1, "btn-list", "d-flex", "gap-2"], ["data-bs-toggle", "modal", "data-bs-target", "#expensemodal", 1, "btn", "btn-primary", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "E-mail", 1, "btn", "btn-light3"], [1, "fe", "fe-mail"], ["data-bs-placement", "top", "data-bs-toggle", "tooltip", "title", "Contact", 1, "btn", "btn-light3"], [1, "fe", "fe-phone-call"], ["data-bs-placement", "top", "data-bs-toggle", "tooltip", "title", "Info", 1, "btn", "btn-primary"], [1, "fe", "fe-info"], [1, "row"], [1, "col-md-12"], [1, "card", "custom-card"], [1, "card-header", "border-0"], [1, "card-title"], [1, "card-body"], [1, "row", "mb-3", "gap-1", "gap-lg-0"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mb-0"], ["name", "quantity", "id", "select-countries17", "placeholder", "1", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], [1, "float-end"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "table-responsive"], ["id", "emp-attendance", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom"], [1, "border-bottom-0"], [1, "fw-semibold"], [1, "d-flex"], [1, "mt-1", "ms-1"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Duplicated Invoice"], [1, "d-flex", "text-start"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "View", 1, "action-btns1"], [1, "fe", "fe-eye", "text-primary"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Delete", 1, "action-btns1", 3, "click"], [1, "fe", "fe-trash-2", "text-danger"], [1, "modal-header"], [1, "modal-title"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "leave-types"], [1, "form-group", "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "text", 1, "form-control"], ["type", "text", "placeholder", "Number", 1, "form-control"], [1, "form-group"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["type", "text", "mwlFlatpickr", "", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], ["type", "file", 1, "form-control"], ["rows", "3", 1, "form-control"], [1, "modal-footer"], [1, "ms-auto"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"]], template: function ExpensesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3, "Expenses");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "a", 6);
    \u0275\u0275listener("click", function ExpensesComponent_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(66);
      return \u0275\u0275resetView(ctx.openModal(content_r2));
    });
    \u0275\u0275text(7, "Add Expenses");
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
    \u0275\u0275elementStart(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "h5", 17);
    \u0275\u0275text(19, "My Expenses Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 18)(21, "div", 19)(22, "div", 20)(23, "div", 21)(24, "span");
    \u0275\u0275text(25, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 22)(27, "div", 23)(28, "ng-select", 24)(29, "ng-option", 25);
    \u0275\u0275text(30, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ng-option", 26);
    \u0275\u0275text(32, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ng-option", 27);
    \u0275\u0275text(34, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "ng-option", 28);
    \u0275\u0275text(36, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 20)(40, "div", 29);
    \u0275\u0275element(41, "input", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 31)(43, "table", 32)(44, "thead")(45, "tr")(46, "th", 33);
    \u0275\u0275text(47, "#ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 33);
    \u0275\u0275text(49, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th", 33);
    \u0275\u0275text(51, "Purchase From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th", 33);
    \u0275\u0275text(53, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th", 33);
    \u0275\u0275text(55, "Amount ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th", 33);
    \u0275\u0275text(57, "Paid By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th", 33);
    \u0275\u0275text(59, "Aprroval Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th", 33);
    \u0275\u0275text(61, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "tbody");
    \u0275\u0275repeaterCreate(63, ExpensesComponent_For_64_Template, 26, 13, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(65, ExpensesComponent_ng_template_65_Template, 46, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275advance(63);
    \u0275\u0275repeater(ctx.expenses);
  }
}, dependencies: [SharedModule, NgbModule, NgbTooltip, NgSelectModule, NgSelectComponent, NgOptionComponent, MaterialModuleModule, FormsModule, ReactiveFormsModule, RouterModule, FlatpickrModule, FlatpickrDirective] });
var ExpensesComponent = _ExpensesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpensesComponent, { className: "ExpensesComponent" });
})();
export {
  ExpensesComponent
};
//# sourceMappingURL=expenses.component-Y6RZLBF6.js.map
