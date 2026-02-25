import {
  SortableHeader
} from "./chunk-A5TGRXQK.js";
import {
  HrDashboardPageHeaderComponent,
  MatDialog,
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
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgbHighlight,
  NgbModal,
  NgbModule,
  NgbTooltip,
  ReactiveFormsModule
} from "./chunk-47LBZ5ZO.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  DecimalPipe,
  RouterModule,
  Subject,
  debounceTime,
  delay,
  of,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/hrmdashboards/expenses/expensesTableData.ts
var expenses = [
  { id: 1, img: "./assets/images/users/1.jpg", employee: "Faith Harris", title: "Bike Services", purchaseFrom: "ABC Service Center", date: "01-10-2021", amount: "$678", paidBy: "Card", ApprovalStatus: "Approved", statusBg: "badge bg-success", check: true, x: true },
  { id: 2, img: "./assets/images/users/9.jpg", employee: "Austin Bell", title: "Bike Services", purchaseFrom: "ABC Service Center", date: "01-10-2021", amount: "$678", paidBy: "Card", ApprovalStatus: "Rejected", statusBg: "badge bg-danger", check: true, x: false },
  { id: 3, img: "./assets/images/users/2.jpg", employee: "Maria Bower", title: "Pens", purchaseFrom: "Books stationery", date: "11-12-2020", amount: "$12", paidBy: "Cash", ApprovalStatus: "Approved", statusBg: "badge bg-success", check: true, x: true },
  { id: 4, img: "./assets/images/users/10.jpg", employee: "Maria Bower", title: "Mouse Pad", purchaseFrom: "Aamzon", date: "21-11-2020", amount: "$45", paidBy: "Online Payment", ApprovalStatus: "Pending", statusBg: "badge bg-warning", check: true, x: true },
  { id: 5, img: "./assets/images/users/3.jpg", employee: "Victoria Lyman", title: "Data Connection", purchaseFrom: "PhonePe", date: "16-10-2020", amount: "$599", paidBy: "Online Payment", ApprovalStatus: "Approved", statusBg: "badge bg-success", check: true, x: true },
  { id: 6, img: "./assets/images/users/11.jpg", employee: "Adam Quinn", title: "Mobile Recharge", purchaseFrom: "PhonePe", date: "15-10-2020", amount: "$100", paidBy: "Online Payment", ApprovalStatus: "Approved", statusBg: "badge bg-success", check: true, x: true },
  { id: 7, img: "./assets/images/users/4.jpg", employee: "Melanie Coleman", title: "Bike Fuel", purchaseFrom: "Petrol Bunk", date: "12-09-2020", amount: "$220", paidBy: "Card", ApprovalStatus: "Pending", statusBg: "badge bg-warning", check: true, x: true },
  { id: 8, img: "./assets/images/users/12.jpg", employee: "Max Wilson", title: "Bike Fuel", purchaseFrom: "Petrol Bunk", date: "12-09-2020", amount: "$220", paidBy: "Card", ApprovalStatus: "Rejected", statusBg: "badge bg-danger", check: true, x: false }
];

// src/app/componets/dashbord/hrmdashboards/expenses/expenses.service.ts
var compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(expensesData, column, direction) {
  if (direction === "" || column === "") {
    return expensesData;
  } else {
    return [...expensesData].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === "asc" ? res : -res;
    });
  }
}
function matches(expenses2, term, pipe) {
  return expenses2.title.toLowerCase().includes(term.toLowerCase()) || expenses2.employee.toLowerCase().includes(term.toLowerCase()) || expenses2.purchaseFrom.toLowerCase().includes(term.toLowerCase()) || expenses2.date.toLowerCase().includes(term.toLowerCase()) || expenses2.amount.toLowerCase().includes(term.toLowerCase()) || expenses2.paidBy.toLowerCase().includes(term.toLowerCase()) || expenses2.ApprovalStatus.toLowerCase().includes(term.toLowerCase());
}
var _expensesService = class _expensesService {
  constructor(pipe) {
    this.pipe = pipe;
    this._loading$ = new BehaviorSubject(true);
    this._search$ = new Subject();
    this._expensesData$ = new BehaviorSubject([]);
    this._total$ = new BehaviorSubject(0);
    this._state = {
      page: 1,
      pageSize: 10,
      searchTerm: "",
      sortColumn: "",
      sortDirection: ""
    };
    this._search$.pipe(tap(() => this._loading$.next(true)), debounceTime(200), switchMap(() => this._search()), delay(200), tap(() => this._loading$.next(false))).subscribe((result) => {
      this._expensesData$.next(result.expensesData);
      this._total$.next(result.total);
    });
    this._search$.next();
  }
  get expensesData$() {
    return this._expensesData$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }
  set page(page) {
    this._set({ page });
  }
  set pageSize(pageSize) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm) {
    this._set({ searchTerm });
  }
  set sortColumn(sortColumn) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection) {
    this._set({ sortDirection });
  }
  _set(patch) {
    Object.assign(this._state, patch);
    this._search$.next();
  }
  _search() {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
    let expensesData = sort(expenses, sortColumn, sortDirection);
    expensesData = expensesData.filter((expenses2) => matches(expenses2, searchTerm, this.pipe));
    const total = expensesData.length;
    expensesData = expensesData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ expensesData, total });
  }
};
_expensesService.\u0275fac = function expensesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _expensesService)(\u0275\u0275inject(DecimalPipe));
};
_expensesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _expensesService, factory: _expensesService.\u0275fac, providedIn: "root" });
var expensesService = _expensesService;

// src/app/componets/dashbord/hrmdashboards/expenses/expenses.component.ts
function ExpensesComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function ExpensesComponent_For_55_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 47);
    \u0275\u0275listener("click", function ExpensesComponent_For_55_Conditional_22_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const expenses_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.checked(expenses_r4));
    });
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const expenses_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMapInterpolate1("action-btns1  ", expenses_r4.check, "");
  }
}
function ExpensesComponent_For_55_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 49);
    \u0275\u0275listener("click", function ExpensesComponent_For_55_Conditional_23_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const expenses_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.cancel(expenses_r4));
    });
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275elementEnd();
  }
}
function ExpensesComponent_For_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 10)(5, "span", 37);
    \u0275\u0275element(6, "img", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "ngb-highlight", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "ngb-highlight", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "ngb-highlight", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275element(13, "ngb-highlight", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275element(15, "ngb-highlight", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275element(17, "ngb-highlight", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275element(19, "ngb-highlight", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "div", 40);
    \u0275\u0275template(22, ExpensesComponent_For_55_Conditional_22_Template, 2, 3, "a", 41)(23, ExpensesComponent_For_55_Conditional_23_Template, 2, 0, "a", 42);
    \u0275\u0275elementStart(24, "a", 43);
    \u0275\u0275listener("click", function ExpensesComponent_For_55_Template_a_click_24_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r4 = \u0275\u0275nextContext();
      const content_r7 = \u0275\u0275reference(75);
      return \u0275\u0275resetView(ctx_r4.openDialog(content_r7));
    });
    \u0275\u0275element(25, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 45);
    \u0275\u0275listener("click", function ExpensesComponent_For_55_Template_a_click_26_listener() {
      const expenses_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.deleteData(expenses_r4));
    });
    \u0275\u0275element(27, "i", 46);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const expenses_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(expenses_r4.id);
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("src", expenses_r4.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("result", expenses_r4.employee)("term", ctx_r4.service.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("result", expenses_r4.title)("term", ctx_r4.service.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("result", expenses_r4.purchaseFrom)("term", ctx_r4.service.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("result", expenses_r4.date)("term", ctx_r4.service.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("result", expenses_r4.amount)("term", ctx_r4.service.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("result", expenses_r4.paidBy)("term", ctx_r4.service.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(expenses_r4.statusBg);
    \u0275\u0275property("result", expenses_r4.ApprovalStatus)("term", ctx_r4.service.searchTerm);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(expenses_r4.check ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(expenses_r4.x ? 23 : -1);
  }
}
function ExpensesComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "h5", 53);
    \u0275\u0275text(3, "Edit Expense");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 54);
    \u0275\u0275listener("click", function ExpensesComponent_ng_template_74_Template_button_click_4_listener() {
      const modal_r9 = \u0275\u0275restoreView(_r8).$implicit;
      return \u0275\u0275resetView(modal_r9.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 55)(6, "div", 56)(7, "div", 57)(8, "label", 58);
    \u0275\u0275text(9, "Title:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 2)(12, "div", 60)(13, "div", 57)(14, "label", 58);
    \u0275\u0275text(15, "Purchase Place:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 60)(18, "div", 57)(19, "label", 58);
    \u0275\u0275text(20, "Price ($):");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 60)(23, "div", 57)(24, "label", 58);
    \u0275\u0275text(25, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 63)(27, "div", 64)(28, "div", 65);
    \u0275\u0275element(29, "i", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 67);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 60)(32, "div", 57)(33, "label", 58);
    \u0275\u0275text(34, "Employee Name :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "ng-select", 68)(36, "ng-option", 69);
    \u0275\u0275text(37, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-option", 70);
    \u0275\u0275text(39, "Austin Bell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ng-option", 71);
    \u0275\u0275text(41, "Maria Bower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ng-option", 72);
    \u0275\u0275text(43, "Peter Hill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "ng-option", 73);
    \u0275\u0275text(45, "Victoria Lyman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "ng-option", 74);
    \u0275\u0275text(47, "Adam Quinn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "ng-option", 75);
    \u0275\u0275text(49, "Melanie Coleman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "ng-option", 76);
    \u0275\u0275text(51, "Max Wilson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "ng-option", 77);
    \u0275\u0275text(53, "Amelia Russell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "ng-option", 78);
    \u0275\u0275text(55, "Justin Metcalfe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "ng-option", 79);
    \u0275\u0275text(57, "Ryan Young");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "ng-option", 80);
    \u0275\u0275text(59, "Jennifer Hardacre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "ng-option", 81);
    \u0275\u0275text(61, "Justin Parr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "ng-option", 82);
    \u0275\u0275text(63, "Julia Hodges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "ng-option", 83);
    \u0275\u0275text(65, "Michael Sutherland");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(66, "div", 57)(67, "div", 58);
    \u0275\u0275text(68, "Upload Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 63);
    \u0275\u0275element(70, "input", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 57)(72, "label", 58);
    \u0275\u0275text(73, "Note:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "textarea", 85);
    \u0275\u0275text(75, "Some text here...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 86)(77, "label", 87);
    \u0275\u0275text(78, "Status :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 88);
    \u0275\u0275element(80, "input", 89);
    \u0275\u0275elementStart(81, "label", 90);
    \u0275\u0275text(82, " Approved ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 88);
    \u0275\u0275element(84, "input", 91);
    \u0275\u0275elementStart(85, "label", 92);
    \u0275\u0275text(86, " Pending ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 93);
    \u0275\u0275element(88, "input", 94);
    \u0275\u0275elementStart(89, "label", 95);
    \u0275\u0275text(90, " Rejected ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(91, "div", 96)(92, "div", 97)(93, "a", 98);
    \u0275\u0275listener("click", function ExpensesComponent_ng_template_74_Template_a_click_93_listener() {
      const modal_r9 = \u0275\u0275restoreView(_r8).$implicit;
      return \u0275\u0275resetView(modal_r9.close("cross click"));
    });
    \u0275\u0275text(94, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "a", 99);
    \u0275\u0275text(96, "Update");
    \u0275\u0275elementEnd()()()();
  }
}
var _ExpensesComponent = class _ExpensesComponent {
  constructor(modalService, service, dialog) {
    this.modalService = modalService;
    this.service = service;
    this.dialog = dialog;
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
    this.expenses$ = service.expensesData$;
    this.total$ = service.total$;
  }
  onSort({ column, direction }) {
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
  deleteData(d) {
    this.expenses$.subscribe((result) => {
      const index = result.indexOf(d);
      result.splice(index, 1);
    });
  }
  checked(d) {
    this.expenses$.subscribe((result) => {
      const index = result.indexOf(d);
      result[index].check = false;
      result[index].x = false;
      result[index].ApprovalStatus = "Approved";
      result[index].statusBg = "badge bg-success";
    });
  }
  cancel(d) {
    this.expenses$.subscribe((result) => {
      const index = result.indexOf(d);
      result[index].check = false;
      result[index].x = false;
      result[index].ApprovalStatus = "Rejected";
      result[index].statusBg = "badge bg-danger";
    });
  }
  openDialog(content) {
    this.modalService.open(content, { windowClass: "modalCusSty", size: "lg" });
  }
  // flatpickrOptions: FlatpickrOptions;
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
_ExpensesComponent.\u0275fac = function ExpensesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExpensesComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(expensesService), \u0275\u0275directiveInject(MatDialog));
};
_ExpensesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpensesComponent, selectors: [["app-expenses"]], viewQuery: function ExpensesComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(SortableHeader, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headers = _t);
  }
}, standalone: true, features: [\u0275\u0275ProvidersFeature([expensesService, DecimalPipe, FlatpickrDefaults]), \u0275\u0275StandaloneFeature], decls: 76, vars: 17, consts: [["content", ""], [3, "title", "title3", "class1", "path"], [1, "row"], [1, "col-md-12"], [1, "card", "custom-card"], [1, "card-header", "border-bottom-0"], [1, "card-title"], [1, "card-body"], [1, "row", "mb-3", "gap-1", "gap-lg-0"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mb-0"], ["name", "quantity", "id", "select-countries17", "data-trigger", "", 1, "form-control", "wd-150", "p-0", 3, "ngModelChange", "ngModel"], ["selected", "", 3, "value"], [3, "value"], [1, "float-end"], ["type", "text", "placeholder", "search", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "ml-3"], [1, "table-responsive"], [1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom"], [1, "border-bottom-0"], ["sortable", "employee", 1, "border-bottom-0", 3, "sort"], ["sortable", "title", 1, "border-bottom-0", 3, "sort"], ["sortable", "purchaseFrom", 1, "border-bottom-0", 3, "sort"], ["sortable", "date", 1, "border-bottom-0", 3, "sort"], ["sortable", "amount", 1, "border-bottom-0", 3, "sort"], ["sortable", "paidBy", 1, "border-bottom-0", 3, "sort"], ["sortable", "approvalStatus", 1, "border-bottom-0", 3, "sort"], [1, "border-bottom-0", 3, "sort"], [1, "mt-4"], [1, "pagination", "justify-content-end", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item", "active"], [1, "page-item"], ["id", "editexpensemodal"], [1, "avatar", "avatar-sm", "me-2", "avatar-rounded"], ["alt", "img", 3, "src"], [3, "result", "term"], [1, "d-flex", "text-start"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Accept", 3, "class"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Rejected", 1, "action-btns1"], ["data-bs-toggle", "modal", "data-bs-target", "#editexpensemodal", 1, "action-btns1", 3, "click"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "view", 1, "fe", "fe-eye", "text-primary"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Delete", 1, "action-btns1", 3, "click"], [1, "fe", "fe-trash-2", "text-danger"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Accept", 3, "click"], [1, "fe", "fe-check", "text-success"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Rejected", 1, "action-btns1", 3, "click"], [1, "fe", "fe-x", "text-danger"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "leave-types"], [1, "form-group", "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "text", "value", "Bike Services", 1, "form-control"], [1, "col-md-6"], ["type", "text", "placeholder", "text", "value", "ABC Service Center", 1, "form-control"], ["type", "text", "placeholder", "Number", "value", "$678", 1, "form-control"], [1, "form-group"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["type", "text", "mwlFlatpickr", "", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], ["name", "attendance", "data-trigger", "", "placeholder", "Select Employee", 1, "form-control", "custom-select", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["type", "file", 1, "form-control"], ["rows", "3", 1, "form-control"], [1, "custom-controls-stacked", "d-md-flex"], [1, "form-label", "me-5"], [1, "form-check", "me-3"], ["type", "radio", "name", "flexRadioDefault", "id", "approved1", 1, "form-check-input"], ["for", "approved1", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "rejected1", 1, "form-check-input"], ["for", "rejected1", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "flexRadioDefault", "id", "rejected2", 1, "form-check-input"], ["for", "rejected2", 1, "form-check-label"], [1, "modal-footer"], [1, "ms-auto"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"]], template: function ExpensesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h4", 6);
    \u0275\u0275text(6, "Expense Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "span");
    \u0275\u0275text(12, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "ng-select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesComponent_Template_ng_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.service.pageSize, $event) || (ctx.service.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "ng-option", 14);
    \u0275\u0275text(17, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ng-option", 15);
    \u0275\u0275text(19, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ng-option", 15);
    \u0275\u0275text(21, "15");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ng-option", 15);
    \u0275\u0275text(23, "20");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 9)(27, "div", 16)(28, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesComponent_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.service.searchTerm, $event) || (ctx.service.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, ExpensesComponent_Conditional_29_Template, 2, 0, "span", 18);
    \u0275\u0275pipe(30, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 19)(32, "table", 20)(33, "thead")(34, "tr")(35, "th", 21);
    \u0275\u0275text(36, "#ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 22);
    \u0275\u0275listener("sort", function ExpensesComponent_Template_th_sort_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSort($event));
    });
    \u0275\u0275text(38, "Employee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 23);
    \u0275\u0275listener("sort", function ExpensesComponent_Template_th_sort_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSort($event));
    });
    \u0275\u0275text(40, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 24);
    \u0275\u0275listener("sort", function ExpensesComponent_Template_th_sort_41_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSort($event));
    });
    \u0275\u0275text(42, "Purchase From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th", 25);
    \u0275\u0275listener("sort", function ExpensesComponent_Template_th_sort_43_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSort($event));
    });
    \u0275\u0275text(44, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 26);
    \u0275\u0275listener("sort", function ExpensesComponent_Template_th_sort_45_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSort($event));
    });
    \u0275\u0275text(46, "Amount ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th", 27);
    \u0275\u0275listener("sort", function ExpensesComponent_Template_th_sort_47_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSort($event));
    });
    \u0275\u0275text(48, "Paid By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th", 28);
    \u0275\u0275listener("sort", function ExpensesComponent_Template_th_sort_49_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSort($event));
    });
    \u0275\u0275text(50, "Aprroval Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th", 29);
    \u0275\u0275listener("sort", function ExpensesComponent_Template_th_sort_51_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSort($event));
    });
    \u0275\u0275text(52, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "tbody");
    \u0275\u0275repeaterCreate(54, ExpensesComponent_For_55_Template, 28, 21, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275pipe(56, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "nav", 30)(58, "ul", 31)(59, "li", 32)(60, "a", 33);
    \u0275\u0275text(61, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "li", 34)(63, "a", 33);
    \u0275\u0275text(64, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "li", 35)(66, "a", 33);
    \u0275\u0275text(67, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "li", 35)(69, "a", 33);
    \u0275\u0275text(70, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "li", 35)(72, "a", 33);
    \u0275\u0275text(73, "Next");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(74, ExpensesComponent_ng_template_74_Template, 97, 0, "ng-template", 36, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275classMap("");
    \u0275\u0275property("title", "Expenses")("title3", "Add New Expenses")("class1", "btn btn-primary")("path", "");
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx.service.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("value", 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 15);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 20);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.service.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(30, 13, ctx.service.loading$) ? 29 : -1);
    \u0275\u0275advance(25);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(56, 15, ctx.expenses$));
  }
}, dependencies: [CommonModule, AsyncPipe, MaterialModuleModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ReactiveFormsModule, NgbModule, NgbTooltip, NgbHighlight, NgSelectModule, NgSelectComponent, NgOptionComponent, FlatpickrModule, FlatpickrDirective, SharedModule, HrDashboardPageHeaderComponent, RouterModule] });
var ExpensesComponent = _ExpensesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpensesComponent, { className: "ExpensesComponent" });
})();
export {
  ExpensesComponent
};
//# sourceMappingURL=expenses.component-LI23FQZX.js.map
