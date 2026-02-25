import {
  MatInput,
  MatPaginator,
  MatSort,
  MatSortHeader,
  MaterialModuleModule,
  PageHeaderComponent,
  SharedModule
} from "./chunk-UEAXMXBR.js";
import {
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from "./chunk-ZVXZDCDW.js";
import "./chunk-KTQLQ7YR.js";
import "./chunk-ZSUERINM.js";
import {
  NgbModule,
  NgbTooltip
} from "./chunk-47LBZ5ZO.js";
import {
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/super-admin/invoices/invoices.component.ts
var _c0 = () => [5, 10, 25, 100];
function InvoicesComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, " #ID ");
    \u0275\u0275elementEnd();
  }
}
function InvoicesComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.id, " ");
  }
}
function InvoicesComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, " CompanyName ");
    \u0275\u0275elementEnd();
  }
}
function InvoicesComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.companyName);
  }
}
function InvoicesComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, " Email ");
    \u0275\u0275elementEnd();
  }
}
function InvoicesComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.email, " ");
  }
}
function InvoicesComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, " Package ");
    \u0275\u0275elementEnd();
  }
}
function InvoicesComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.package, " ");
  }
}
function InvoicesComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, " Invoice Id ");
    \u0275\u0275elementEnd();
  }
}
function InvoicesComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.invoiceId, " ");
  }
}
function InvoicesComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, " Amount ");
    \u0275\u0275elementEnd();
  }
}
function InvoicesComponent_td_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r7.amount, " ");
  }
}
function InvoicesComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, " Invoice Date ");
    \u0275\u0275elementEnd();
  }
}
function InvoicesComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r8.invoiceDate, " ");
  }
}
function InvoicesComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, " Pay Date ");
    \u0275\u0275elementEnd();
  }
}
function InvoicesComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r9.payDate, " ");
  }
}
function InvoicesComponent_th_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, " NextPay Date ");
    \u0275\u0275elementEnd();
  }
}
function InvoicesComponent_td_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r10.nextPayDate, " ");
  }
}
function InvoicesComponent_th_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, " Status ");
    \u0275\u0275elementEnd();
  }
}
function InvoicesComponent_td_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 40)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge bg-", row_r11.status, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r11.statusText, "");
  }
}
function InvoicesComponent_th_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, " Action ");
    \u0275\u0275elementEnd();
  }
}
function InvoicesComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 40)(1, "div", 42)(2, "a", 43);
    \u0275\u0275element(3, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 45);
    \u0275\u0275element(5, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 47);
    \u0275\u0275listener("click", function InvoicesComponent_td_62_Template_a_click_6_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r13 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r13.removeData(row_r13.id));
    });
    \u0275\u0275element(7, "i", 48);
    \u0275\u0275elementEnd()()();
  }
}
function InvoicesComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 49);
  }
}
function InvoicesComponent_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 50);
  }
}
function InvoicesComponent_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 51)(1, "td", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const input_r15 = \u0275\u0275reference(26);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('No data matching the filter "', input_r15.value, '"');
  }
}
var ELEMENT_DATA = [
  { id: 1, companyName: "Abcd Pvt Ltd", package: "Basic", invoiceId: "#INV-0478", amount: "$19.00", invoiceDate: "12-01-2021", payDate: "14-02-2021", nextPayDate: "14-03-2021", statusText: "Paid", status: "success" },
  { id: 2, companyName: "Croport Pvt Ltd", package: "Premium", invoiceId: "#INV-1245", amount: "$39.00", invoiceDate: "21-01-2021", payDate: "15-02-2021", nextPayDate: "15-03-2021", statusText: "UnPaid", status: "danger" },
  { id: 3, companyName: "frecho Pvt Ltd", package: "Advanced", invoiceId: "#INV-5280", amount: "$69.00", invoiceDate: "21-02-2021", payDate: "28-02-2021", nextPayDate: "28-03-2021", statusText: "Paid", status: "success" },
  { id: 4, companyName: "kolit Pvt Ltd", package: "Enterprise", invoiceId: "#INV-2876", amount: "$19.00", invoiceDate: "05-02-2021", payDate: "10-02-2021", nextPayDate: "10-03-2021", statusText: "Paid", status: "success" },
  { id: 5, companyName: "Movck Pvt Ltd", package: "Basic", invoiceId: "#INV-1986", amount: "$139.00", invoiceDate: "05-12-2020", payDate: "10-12-2020", nextPayDate: "10-01-2021", statusText: "UnPaid", status: "danger" },
  { id: 6, companyName: "Loki Pvt Ltd", package: "Premium", invoiceId: "#INV-2689", amount: "$39.00", invoiceDate: "11-11-2020", payDate: "20-11-2020", nextPayDate: "20-12-2020", statusText: "Paid", status: "success" },
  { id: 7, companyName: "Kloki Pvt Ltd", package: "Advanced", invoiceId: "#INV-0298", amount: "$69.00", invoiceDate: "12-10-2020", payDate: "18-10-2020", nextPayDate: "18-11-2020", statusText: "Paid", status: "success" },
  { id: 8, companyName: "Gomalik Pvt Ltd", package: "Enterprise", invoiceId: "#INV-7618", amount: "$139.00", invoiceDate: "12-07-2020", payDate: "22-07-2020", nextPayDate: "22-08-2020", statusText: "Paid", status: "success" },
  { id: 9, companyName: "Mooke Pvt Ltd", package: "Basic", invoiceId: "#INV-4920", amount: "$39.00", invoiceDate: "22-06-2020", payDate: "25-06-2020", nextPayDate: "25-07-2020", statusText: "UnPaid", status: "danger" },
  { id: 10, companyName: "Kloki Pvt Ltd", package: "Premium", invoiceId: "#INV-2109", amount: "$69.00", invoiceDate: "15-04-2020", payDate: "28-04-2020", nextPayDate: "28-05-2020", statusText: "Paid", status: "success" }
];
var _InvoicesComponent = class _InvoicesComponent {
  constructor() {
    this.displayedColumns = ["ID", "CompanyName", "Package", "InvoiceId", "Amount", "InvoiceDate", "PayDate", "NextPayDate", "Status", "Action"];
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  removeData(item) {
    this.dataSource.data.map((el, ind) => {
      if (el.id == item) {
        this.dataSource.data.splice(ind, 1);
        this.dataSource._updateChangeSubscription();
      }
    });
  }
};
_InvoicesComponent.\u0275fac = function InvoicesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InvoicesComponent)();
};
_InvoicesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoicesComponent, selectors: [["app-invoices"]], viewQuery: function InvoicesComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 67, vars: 6, consts: [["input", ""], [3, "title"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "row", "my-3", "px-3"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mt-2"], ["name", "quantity", "id", "select-countries17", "placeholder", "1", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], [1, "float-end"], ["type", "text", "placeholder", "search", "matInput", "", 1, "form-control", 3, "keyup"], [1, "table-responsive", "superinvoice-table"], [1, ""], ["mat-table", "", "matSort", "", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom", 3, "dataSource"], ["matColumnDef", "ID"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "CompanyName"], ["matColumnDef", "Email"], ["matColumnDef", "Package"], ["matColumnDef", "InvoiceId"], ["matColumnDef", "Amount"], ["matColumnDef", "InvoiceDate"], ["matColumnDef", "PayDate"], ["matColumnDef", "NextPayDate"], ["matColumnDef", "Status"], ["matColumnDef", "Action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [1, "d-flex"], ["href", "javascript:;", "placement", "top", "ngbTooltip", "View", 1, "action-btns1"], [1, "fe", "fe-file-text", "text-primary"], ["href", "javascript:;", "placement", "top", "ngbTooltip", "Download", 1, "action-btns1"], [1, "fe", "fe-download", "text-success"], ["href", "javascript:;", "placement", "top", "ngbTooltip", "Delete", 1, "action-btns1", 3, "click"], [1, "fe", "fe-trash-2", "text-danger"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function InvoicesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "span");
    \u0275\u0275text(9, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "ng-select", 11)(13, "ng-option", 12);
    \u0275\u0275text(14, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ng-option", 13);
    \u0275\u0275text(16, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ng-option", 14);
    \u0275\u0275text(18, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ng-option", 15);
    \u0275\u0275text(20, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 7)(24, "div", 16)(25, "input", 17, 0);
    \u0275\u0275listener("keyup", function InvoicesComponent_Template_input_keyup_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 18)(28, "div", 19)(29, "table", 20);
    \u0275\u0275elementContainerStart(30, 21);
    \u0275\u0275template(31, InvoicesComponent_th_31_Template, 2, 0, "th", 22)(32, InvoicesComponent_td_32_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(33, 24);
    \u0275\u0275template(34, InvoicesComponent_th_34_Template, 2, 0, "th", 22)(35, InvoicesComponent_td_35_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(36, 25);
    \u0275\u0275template(37, InvoicesComponent_th_37_Template, 2, 0, "th", 22)(38, InvoicesComponent_td_38_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(39, 26);
    \u0275\u0275template(40, InvoicesComponent_th_40_Template, 2, 0, "th", 22)(41, InvoicesComponent_td_41_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(42, 27);
    \u0275\u0275template(43, InvoicesComponent_th_43_Template, 2, 0, "th", 22)(44, InvoicesComponent_td_44_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(45, 28);
    \u0275\u0275template(46, InvoicesComponent_th_46_Template, 2, 0, "th", 22)(47, InvoicesComponent_td_47_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(48, 29);
    \u0275\u0275template(49, InvoicesComponent_th_49_Template, 2, 0, "th", 22)(50, InvoicesComponent_td_50_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(51, 30);
    \u0275\u0275template(52, InvoicesComponent_th_52_Template, 2, 0, "th", 22)(53, InvoicesComponent_td_53_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(54, 31);
    \u0275\u0275template(55, InvoicesComponent_th_55_Template, 2, 0, "th", 22)(56, InvoicesComponent_td_56_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(57, 32);
    \u0275\u0275template(58, InvoicesComponent_th_58_Template, 2, 0, "th", 22)(59, InvoicesComponent_td_59_Template, 3, 4, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(60, 33);
    \u0275\u0275template(61, InvoicesComponent_th_61_Template, 2, 0, "th", 34)(62, InvoicesComponent_td_62_Template, 8, 0, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(63, InvoicesComponent_tr_63_Template, 1, 0, "tr", 35)(64, InvoicesComponent_tr_64_Template, 1, 0, "tr", 36)(65, InvoicesComponent_tr_65_Template, 3, 1, "tr", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "mat-paginator", 38);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", "Invoices");
    \u0275\u0275advance(29);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(34);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance(2);
    \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(5, _c0));
  }
}, dependencies: [SharedModule, PageHeaderComponent, MaterialModuleModule, MatInput, MatPaginator, MatSort, MatSortHeader, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, NgSelectModule, NgSelectComponent, NgOptionComponent, RouterModule, NgbModule, NgbTooltip] });
var InvoicesComponent = _InvoicesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoicesComponent, { className: "InvoicesComponent" });
})();
export {
  InvoicesComponent
};
//# sourceMappingURL=invoices.component-HTYPLB6V.js.map
