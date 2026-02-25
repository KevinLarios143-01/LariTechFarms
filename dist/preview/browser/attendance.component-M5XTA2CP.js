import {
  SortableHeader
} from "./chunk-A5TGRXQK.js";
import {
  MatDialog,
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
  NgbPagination,
  NgbProgressbar,
  NgbTooltip,
  ReactiveFormsModule
} from "./chunk-47LBZ5ZO.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectorRef,
  CommonModule,
  DOCUMENT,
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
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/employee-dashboard/attendance/employeeAttendanceTableData.ts
var employeeAttendance = [
  { date: "20-01-2021", status: "success", statusText: "Present", clockIn: "09:35 AM", clockOut: "06:55 PM", progressStatus: "success", progress: 100, hours: "09h :10 mins" },
  { date: "19-01-2021", status: "success", statusText: "Present", clockIn: "09:30 AM", clockOut: "06:30 PM", progressStatus: "success", progress: 100, hours: "09h :00 mins" },
  { date: "18-01-2021", status: "danger", statusText: "Absent", clockIn: "00:00 AM", clockOut: "00:00 PM", progressStatus: "danger", progress: 0, hours: "09h :10 mins" },
  { date: "17-01-2021", status: "success", statusText: "Present", clockIn: "09:35 AM", clockOut: "06:55 PM", progressStatus: "success", progress: 100, hours: "09h :10 mins" },
  { date: "16-01-2021", status: "warning", statusText: "Late", clockIn: "10:35 AM", clockOut: "6:30 PM", progressStatus: "warning", progress: 85, hours: "09h :10 mins" },
  { date: "15-01-2021", status: "success", statusText: "Present", clockIn: "09:35 AM", clockOut: "6:30 PM", progressStatus: "success", progress: 100, hours: "09h :10 mins" },
  { date: "14-01-2021", status: "warning", statusText: "Late", clockIn: "11:30 AM", clockOut: "6:35 PM", progressStatus: "warning", progress: 70, hours: "09h :10 mins" },
  { date: "13-01-2021", status: "success", statusText: "Present", clockIn: "09:35 AM", clockOut: "6:30 PM", progressStatus: "success", progress: 100, hours: "09h :10 mins" },
  { date: "12-01-2021", status: "success", statusText: "Present", clockIn: "00:00  AM", clockOut: "00:00  PM", progressStatus: "success", progress: 100, hours: "00h :00 mins" },
  { date: "11-01-2021", status: "danger", statusText: "Absent", clockIn: "09:35 AM", clockOut: "06:55 PM", progressStatus: "danger", progress: 0, hours: "09h :10 mins" },
  { date: "10-01-2021", status: "danger", statusText: "Absent", clockIn: "00:00 AM", clockOut: "00:00 PM", progressStatus: "danger", progress: 0, hours: "09h :10 mins" },
  { date: "09-01-2021", status: "success", statusText: "Present", clockIn: "9:30 AM", clockOut: "6:30 PM", progressStatus: "success", progress: 100, hours: "09h :0 mins" },
  { date: "08-01-2021", status: "success", statusText: "Present", clockIn: "9:32 AM", clockOut: "6:30 PM", progressStatus: "success", progress: 100, hours: "09h :0 mins" },
  { date: "07-01-2021", status: "success", statusText: "Present", clockIn: "9:30 AM", clockOut: "6:30 PM", progressStatus: "success", progress: 100, hours: "09h :0 mins" },
  { date: "06-01-2021", status: "success", statusText: "Present", clockIn: "9:30 AM", clockOut: "6:30 PM", progressStatus: "success", progress: 100, hours: "09h :0 mins" }
];

// src/app/componets/dashbord/employee-dashboard/attendance/employeeAttendance.service.ts
var compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(employeeAttendanceData, column, direction) {
  if (direction === "" || column === "") {
    return employeeAttendanceData;
  } else {
    return [...employeeAttendanceData].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === "asc" ? res : -res;
    });
  }
}
function matches(employeeAttendance2, term, pipe) {
  return employeeAttendance2.date.toLowerCase().includes(term.toLowerCase()) || employeeAttendance2.status.toLowerCase().includes(term.toLowerCase()) || employeeAttendance2.clockIn.toLowerCase().includes(term.toLowerCase()) || employeeAttendance2.clockOut.toLowerCase().includes(term.toLowerCase()) || employeeAttendance2.hours.toLowerCase().includes(term.toLowerCase());
}
var _employeeAttendanceService = class _employeeAttendanceService {
  constructor(pipe) {
    this.pipe = pipe;
    this._loading$ = new BehaviorSubject(true);
    this._search$ = new Subject();
    this._employeeAttendanceData$ = new BehaviorSubject([]);
    this._total$ = new BehaviorSubject(0);
    this._state = {
      page: 1,
      pageSize: 10,
      searchTerm: "",
      sortColumn: "",
      sortDirection: ""
    };
    this._search$.pipe(tap(() => this._loading$.next(true)), debounceTime(200), switchMap(() => this._search()), delay(200), tap(() => this._loading$.next(false))).subscribe((result) => {
      this._employeeAttendanceData$.next(result.employeeAttendanceData);
      this._total$.next(result.total);
    });
    this._search$.next();
  }
  get employeeAttendanceData$() {
    return this._employeeAttendanceData$.asObservable();
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
    let employeeAttendanceData = sort(employeeAttendance, sortColumn, sortDirection);
    employeeAttendanceData = employeeAttendanceData.filter((employeeAttendance2) => matches(employeeAttendance2, searchTerm, this.pipe));
    const total = employeeAttendanceData.length;
    employeeAttendanceData = employeeAttendanceData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ employeeAttendanceData, total });
  }
};
_employeeAttendanceService.\u0275fac = function employeeAttendanceService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _employeeAttendanceService)(\u0275\u0275inject(DecimalPipe));
};
_employeeAttendanceService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _employeeAttendanceService, factory: _employeeAttendanceService.\u0275fac, providedIn: "root" });
var employeeAttendanceService = _employeeAttendanceService;

// src/app/componets/dashbord/employee-dashboard/attendance/attendance.component.ts
function AttendanceComponent_Conditional_197_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function AttendanceComponent_For_217_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "ngb-highlight", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span");
    \u0275\u0275text(5, "Present");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "ngb-highlight", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "ngb-highlight", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "ngb-progressbar", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275element(13, "ngb-highlight", 92);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const employeeAttendance_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("result", employeeAttendance_r3.date)("term", ctx_r3.service.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge bg-", employeeAttendance_r3.status, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("result", employeeAttendance_r3.clockIn)("term", ctx_r3.service.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("result", employeeAttendance_r3.clockOut)("term", ctx_r3.service.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("type", employeeAttendance_r3.progressStatus);
    \u0275\u0275property("value", employeeAttendance_r3.progress);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(employeeAttendance_r3.statusBg);
    \u0275\u0275property("result", employeeAttendance_r3.hours)("term", ctx_r3.service.searchTerm);
  }
}
function AttendanceComponent_ng_template_222_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "h6", 95);
    \u0275\u0275element(2, "span", 96);
    \u0275\u0275text(3, "Clock In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 97);
    \u0275\u0275listener("click", function AttendanceComponent_ng_template_222_Template_button_click_4_listener() {
      const modal_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(modal_r6.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 98)(6, "div", 99);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 47)(9, "label", 26);
    \u0275\u0275text(10, "Note:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 100);
    \u0275\u0275text(12, "Some text here...");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 101)(14, "button", 102);
    \u0275\u0275listener("click", function AttendanceComponent_ng_template_222_Template_button_click_14_listener() {
      const modal_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(modal_r6.close("cross click"));
    });
    \u0275\u0275text(15, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 103);
    \u0275\u0275text(17, "Clock In");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate3("", ctx_r3.hours, ":", ctx_r3.minutes, ":", ctx_r3.seconds, "");
  }
}
var _AttendanceComponent = class _AttendanceComponent {
  constructor(service, dialog, document, modalService, cdr) {
    this.service = service;
    this.dialog = dialog;
    this.document = document;
    this.modalService = modalService;
    this.cdr = cdr;
    this.futureDate = /* @__PURE__ */ new Date();
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
    this.employeeAttendance$ = service.employeeAttendanceData$;
    this.total$ = service.total$;
    this.futureDate.setDate(this.futureDate.getDate() + 2);
    this.startDate = (/* @__PURE__ */ new Date("Dec 1, 2023 00:00:00")).getTime();
  }
  open(content) {
    this.modalService.open(content, { windowClass: "modalCusSty" });
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
  ngOnInit() {
    const time = setInterval(() => {
      const now = (/* @__PURE__ */ new Date()).getTime();
      const distance = now - this.startDate;
      this.days = Math.floor(distance / (1e3 * 60 * 60 * 24));
      this.hours = Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
      this.minutes = Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60));
      this.seconds = Math.floor(distance % (1e3 * 60) / 1e3);
      this.cdr.detectChanges();
    }, 1e3);
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
_AttendanceComponent.\u0275fac = function AttendanceComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AttendanceComponent)(\u0275\u0275directiveInject(employeeAttendanceService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_AttendanceComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceComponent, selectors: [["app-attendance"]], viewQuery: function AttendanceComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(SortableHeader, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headers = _t);
  }
}, standalone: true, features: [\u0275\u0275ProvidersFeature([employeeAttendanceService, DecimalPipe, FlatpickrDefaults]), \u0275\u0275StandaloneFeature], decls: 224, vars: 19, consts: [["content", ""], [1, "page-header", "d-lg-flex", "d-block"], [1, "page-leftheader"], [1, "page-title"], [1, "page-rightheader"], [1, "d-flex", "align-items-center", "flex-wrap", "my-auto", "end-content", "breadcrumb-end", "gap-2"], [1, "header-datepicker", "me-1"], [1, "form-group", "mb-0"], [1, "input-group"], [1, "input-group-text"], [1, "fe", "fe-calendar"], ["type", "text", "mwlFlatpickr", "", "placeholder", "19 Feb 2020", 1, "form-control", "choose-date"], [1, "d-flex", "gap-2"], ["data-bs-toggle", "modal", "data-bs-target", "#clockinmodal", 1, "btn", "btn-primary", 3, "click"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "E-mail", 1, "btn", "btn-light3"], [1, "fe", "fe-mail"], ["placement", "top", "data-bs-toggle", "tooltip", "ngbTooltip", "Contact", 1, "btn", "btn-light3"], [1, "fe", "fe-phone-call"], ["placement", "top", "data-bs-toggle", "tooltip", "ngbTooltip", "Info", 1, "btn", "btn-primary"], [1, "fe", "fe-info"], [1, "row"], [1, "col-xl-3", "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "countdowntimer", "mt-0", "text-center"], [1, "d-flex", "justify-content-center", "fs-30", "digital-clock", "mb-1"], [1, "form-label"], [1, "btn-list", "text-center", "mt-3"], ["href", "javascript:;", 1, "btn", "ripple", "btn-primary", "disabled", "me-2"], ["href", "javascript:;", 1, "btn", "ripple", "btn-primary"], [1, "col-xl-9", "col-md-12", "col-lg-12"], [1, "card-header", "border-0"], [1, "card-title"], [1, "card-body", "pt-0", "pb-3"], [1, "row", "mb-0", "pb-0"], [1, "col-md-6", "col-xl-2", "text-center", "py-3"], [1, "avatar", "avatar-md", "bradius", "fs-20", "bg-primary-transparent"], [1, "mb-0", "mt-3"], [1, "avatar", "avatar-md", "bradius", "fs-20", "bg-success-transparent"], [1, "avatar", "avatar-md", "bradius", "fs-20", "bg-danger-transparent"], [1, "avatar", "avatar-md", "bradius", "fs-20", "bg-warning-transparent"], [1, "avatar", "avatar-md", "bradius", "fs-20", "bg-orange-transparent"], [1, "avatar", "avatar-md", "bradius", "fs-20", "bg-pink-transparent"], [1, "col-xl-12", "col-md-12", "col-lg-12"], [1, "col-md-12", "col-lg-12", "col-xl-5"], [1, "col-md-6"], [1, "form-group", "mb-3"], [1, "form-group"], ["type", "text", "mwlFlatpickr", "", "placeholder", "20 Apr 2021", 1, "form-control", "choose-date"], [1, "col-md-12", "col-lg-12", "col-xl-3"], ["name", "attendance", "data-trigger", "", "placeholder", "Select Month", 1, "form-control", "custom-select", "p-0"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["name", "attendance", "data-trigger", "", "placeholder", "Select Year", 1, "form-control", "custom-select", "p-0"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], [1, "form-group", "mt-2"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-grid"], [1, "card-body", "border-top"], [1, "row", "mb-2", "gap-1", "gap-lg-0"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], ["name", "quantity", "id", "select-countries17", "data-trigger", "", 1, "form-control", "wd-150", "p-0", 3, "ngModelChange", "ngModel"], ["selected", "", 3, "value"], [3, "value"], [1, "float-end"], ["type", "text", "placeholder", "search", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "table-responsive"], [1, "table", "text-nowrap", "table-bordered"], ["scope", "col", "sortable", "date", 1, "border-bottom-0", 3, "sort"], ["scope", "col", "sortable", "status", 1, "border-bottom-0", 3, "sort"], ["scope", "col", "sortable", "clockIn", 1, "border-bottom-0", 3, "sort"], ["scope", "col", "sortable", "clockOut", 1, "border-bottom-0", 3, "sort"], ["scope", "col", "sortable", "progress", 1, "border-bottom-0", 3, "sort"], ["scope", "col", "sortable", "hours", 1, "border-bottom-0", 3, "sort"], [1, "float-end", "mt-4"], [3, "pageChange", "collectionSize", "page", "pageSize"], [3, "result", "term"], ["height", "0.5rem", 3, "type", "value"], [1, "modal-header"], ["id", "exampleModalLabel1", 1, "modal-title"], [1, "fe", "fe-clock", "me-1"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mt-3", "d-flex", "justify-content-center", "fs-30", "digital-clock"], ["rows", "3", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "button", 1, "btn", "btn-primary"]], template: function AttendanceComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3, "Attendance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
    \u0275\u0275element(10, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "a", 13);
    \u0275\u0275listener("click", function AttendanceComponent_Template_a_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(223);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275text(14, "Clock In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 14);
    \u0275\u0275element(16, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 16);
    \u0275\u0275element(18, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 18);
    \u0275\u0275element(20, "i", 19);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(21, "div", 20)(22, "div", 21)(23, "div", 22)(24, "div", 23)(25, "div", 24)(26, "span", 25);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "label", 26);
    \u0275\u0275text(29, "Current Time");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 27)(31, "a", 28);
    \u0275\u0275text(32, "Clock in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "a", 29);
    \u0275\u0275text(34, "Clock Out");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(35, "div", 30)(36, "div", 22)(37, "div", 31)(38, "h4", 32);
    \u0275\u0275text(39, "Days Overview This Month");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 33)(41, "div", 34)(42, "div", 35)(43, "span", 36);
    \u0275\u0275text(44, "31");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "h5", 37);
    \u0275\u0275text(46, "Total Working Days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 35)(48, "span", 38);
    \u0275\u0275text(49, "24");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "h5", 37);
    \u0275\u0275text(51, "Present Days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 35)(53, "span", 39);
    \u0275\u0275text(54, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "h5", 37);
    \u0275\u0275text(56, "Absent Days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 35)(58, "span", 40);
    \u0275\u0275text(59, "0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "h5", 37);
    \u0275\u0275text(61, "Half Days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 35)(63, "span", 41);
    \u0275\u0275text(64, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "h5", 37);
    \u0275\u0275text(66, "Late Days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 35)(68, "span", 42);
    \u0275\u0275text(69, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "h5", 37);
    \u0275\u0275text(71, "Holidays");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(72, "div", 20)(73, "div", 43)(74, "div", 22)(75, "div", 31)(76, "h4", 32);
    \u0275\u0275text(77, "Attendance Overview");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 23)(79, "div", 20)(80, "div", 44)(81, "div", 20)(82, "div", 45)(83, "div", 46)(84, "label", 26);
    \u0275\u0275text(85, "From:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 47)(87, "div", 8)(88, "div", 9);
    \u0275\u0275element(89, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "input", 11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(91, "div", 45)(92, "div", 46)(93, "label", 26);
    \u0275\u0275text(94, "To:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 47)(96, "div", 8)(97, "div", 9);
    \u0275\u0275element(98, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(99, "input", 48);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(100, "div", 49)(101, "div", 46)(102, "label", 26);
    \u0275\u0275text(103, "Month:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "ng-select", 50)(105, "ng-option", 51);
    \u0275\u0275text(106, "Select Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "ng-option", 52);
    \u0275\u0275text(108, "January");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "ng-option", 53);
    \u0275\u0275text(110, "February");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "ng-option", 54);
    \u0275\u0275text(112, "March");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "ng-option", 55);
    \u0275\u0275text(114, "April");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "ng-option", 56);
    \u0275\u0275text(116, "May");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "ng-option", 57);
    \u0275\u0275text(118, "June");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "ng-option", 58);
    \u0275\u0275text(120, "July");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "ng-option", 59);
    \u0275\u0275text(122, "August");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "ng-option", 60);
    \u0275\u0275text(124, "September");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "ng-option", 61);
    \u0275\u0275text(126, "October");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "ng-option", 62);
    \u0275\u0275text(128, "November");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "ng-option", 63);
    \u0275\u0275text(130, "December");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(131, "div", 64)(132, "div", 47)(133, "label", 26);
    \u0275\u0275text(134, "Year:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "ng-select", 65)(136, "ng-option", 51);
    \u0275\u0275text(137, "Select Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "ng-option", 52);
    \u0275\u0275text(139, "2024");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "ng-option", 53);
    \u0275\u0275text(141, "2023");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "ng-option", 54);
    \u0275\u0275text(143, "2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "ng-option", 55);
    \u0275\u0275text(145, "2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "ng-option", 56);
    \u0275\u0275text(147, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "ng-option", 57);
    \u0275\u0275text(149, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "ng-option", 58);
    \u0275\u0275text(151, "2018");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "ng-option", 59);
    \u0275\u0275text(153, "2017");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "ng-option", 60);
    \u0275\u0275text(155, "2016");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "ng-option", 61);
    \u0275\u0275text(157, "2015");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "ng-option", 62);
    \u0275\u0275text(159, "2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "ng-option", 63);
    \u0275\u0275text(161, "2013");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "ng-option", 66);
    \u0275\u0275text(163, "2012");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "ng-option", 67);
    \u0275\u0275text(165, "2011");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "ng-option", 68);
    \u0275\u0275text(167, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "ng-option", 69);
    \u0275\u0275text(169, "2010");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(170, "div", 64)(171, "div", 70);
    \u0275\u0275element(172, "label", 26);
    \u0275\u0275elementStart(173, "a", 71);
    \u0275\u0275text(174, "Search");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(175, "div", 72)(176, "div", 73)(177, "div", 74)(178, "div", 75)(179, "span");
    \u0275\u0275text(180, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "div", 76)(182, "div", 7)(183, "ng-select", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceComponent_Template_ng_select_ngModelChange_183_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.service.pageSize, $event) || (ctx.service.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(184, "ng-option", 78);
    \u0275\u0275text(185, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "ng-option", 79);
    \u0275\u0275text(187, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(188, "ng-option", 79);
    \u0275\u0275text(189, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(190, "ng-option", 79);
    \u0275\u0275text(191, "100");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(192, "span");
    \u0275\u0275text(193, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(194, "div", 74)(195, "div", 80)(196, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceComponent_Template_input_ngModelChange_196_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.service.searchTerm, $event) || (ctx.service.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(197, AttendanceComponent_Conditional_197_Template, 2, 0, "span");
    \u0275\u0275pipe(198, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(199, "div", 82)(200, "table", 83)(201, "thead")(202, "tr")(203, "th", 84);
    \u0275\u0275listener("sort", function AttendanceComponent_Template_th_sort_203_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSort($event));
    });
    \u0275\u0275text(204, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(205, "th", 85);
    \u0275\u0275listener("sort", function AttendanceComponent_Template_th_sort_205_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSort($event));
    });
    \u0275\u0275text(206, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "th", 86);
    \u0275\u0275listener("sort", function AttendanceComponent_Template_th_sort_207_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSort($event));
    });
    \u0275\u0275text(208, "Clock-In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "th", 87);
    \u0275\u0275listener("sort", function AttendanceComponent_Template_th_sort_209_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSort($event));
    });
    \u0275\u0275text(210, "Clock-Out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(211, "th", 88);
    \u0275\u0275listener("sort", function AttendanceComponent_Template_th_sort_211_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSort($event));
    });
    \u0275\u0275text(212, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "th", 89);
    \u0275\u0275listener("sort", function AttendanceComponent_Template_th_sort_213_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSort($event));
    });
    \u0275\u0275text(214, "Hours");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(215, "tbody");
    \u0275\u0275repeaterCreate(216, AttendanceComponent_For_217_Template, 14, 16, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275pipe(218, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(219, "div", 90)(220, "ngb-pagination", 91);
    \u0275\u0275pipe(221, "async");
    \u0275\u0275twoWayListener("pageChange", function AttendanceComponent_Template_ngb_pagination_pageChange_220_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.service.page, $event) || (ctx.service.page = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(222, AttendanceComponent_ng_template_222_Template, 18, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275advance(27);
    \u0275\u0275textInterpolate3("", ctx.hours, ":", ctx.minutes, ":", ctx.seconds, "");
    \u0275\u0275advance(156);
    \u0275\u0275twoWayProperty("ngModel", ctx.service.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("value", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 25);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 50);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 100);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.service.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(198, 13, ctx.service.loading$) ? 197 : -1);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(218, 15, ctx.employeeAttendance$));
    \u0275\u0275advance(4);
    \u0275\u0275property("collectionSize", \u0275\u0275pipeBind1(221, 17, ctx.total$));
    \u0275\u0275twoWayProperty("page", ctx.service.page);
    \u0275\u0275property("pageSize", ctx.service.pageSize);
  }
}, dependencies: [NgbModule, NgbPagination, NgbProgressbar, NgbTooltip, NgbHighlight, CommonModule, AsyncPipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ReactiveFormsModule, NgSelectModule, NgSelectComponent, NgOptionComponent, SharedModule, FlatpickrModule, FlatpickrDirective, RouterModule], styles: ['\n\nth[sortable].desc[_ngcontent-%COMP%]:before, \nth[sortable].asc[_ngcontent-%COMP%]:before {\n  content: "";\n  display: inline-block;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAmxJREFUeAHtmksrRVEUx72fH8CIGQNJkpGUUmakDEiZSJRIZsRQmCkTJRmZmJgQE0kpX0D5DJKJgff7v+ru2u3O3vvc67TOvsdatdrnnP1Y///v7HvvubdbUiIhBISAEBACQkAICAEhIAQ4CXSh2DnyDfmCPEG2Iv9F9MPlM/LHyAecdyMzHYNwR3fdNK/OH9HXl1UCozD24TCvILxizEDWIEzA0FcM8woCgRrJCoS5PIwrANQSMAJX1LEI9bqpQo4JYNFFKRSvIgsxHDVnqZgIkPnNBM0rIGtYk9YOOsqgbgepRCfdbmFtqhFkVEDVPjJp0+Z6e6hRHhqBKgg6ZDCvYBygVmUoEGoh5JTRvIJwhJo1aUOoh4CLPMyvxxi7EWOMgnCGsXXI1GIXlZUYX7ucU+kbR8NW8lh3O7cue0Pk32MKndfUxQFAwxdirk3fHappAnc0oqDPzDfGTBrCfHP04dM4oTV8cxr0SVzH9FF07xD3ib6xCDE+M+aUcVygtWzzbtGX2rPBrEUYfecfQkaFzYi6HjVnGBdtL7epqAlc1+jRdAap74RrnPc4BCijttY2tRcdN0g17w7HqZrXhdJTYAuS3hd8z+vKgK3V1zWPae0mZDMykadBn1hTQBLnZNwVrJpSe/NwEeDsEwCctEOsJTsgxLvCqUl2ACftEGvJDgjxrnBqkh3ASTvEWrIDQrwrnJpkB3DSDrGW7IAQ7wqnJtkBnLRztejXXVu4+mxz/nQ9jR1w5VB86ejLTFcnnDwhzV+F6T+CHZlx6THSjn76eyyBIOPHyDakhBAQAkJACAgBISAEhIAQYCLwC8JxpAmsEGt6AAAAAElFTkSuQmCC) no-repeat;\n  background-size: 22px;\n  width: 22px;\n  height: 22px;\n}\nth[sortable].desc[_ngcontent-%COMP%]:before {\n  transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n}\n/*# sourceMappingURL=attendance.component.css.map */'] });
var AttendanceComponent = _AttendanceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceComponent, { className: "AttendanceComponent" });
})();
export {
  AttendanceComponent
};
//# sourceMappingURL=attendance.component-M5XTA2CP.js.map
