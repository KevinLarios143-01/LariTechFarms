import {
  JobDashboardPageHeaderComponent,
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
  FlatpickrDefaults,
  FlatpickrDirective,
  FlatpickrModule,
  esm_default
} from "./chunk-ZSUERINM.js";
import {
  NgbModal
} from "./chunk-47LBZ5ZO.js";
import {
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵproperty,
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
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/job-dashboard/job-lists/job-lists.component.ts
function JobListsComponent_For_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "a", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "div", 38)(19, "a", 39);
    \u0275\u0275element(20, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 41);
    \u0275\u0275listener("click", function JobListsComponent_For_83_Template_a_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      const content_r3 = \u0275\u0275reference(102);
      return \u0275\u0275resetView(ctx_r1.open(content_r3));
    });
    \u0275\u0275element(22, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 43);
    \u0275\u0275element(24, "i", 44);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r4.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.postedDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.lastDateToApply);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.closedDate);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge bg-", data_r4.status, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r4.statusText);
  }
}
function JobListsComponent_ng_template_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "h5", 46);
    \u0275\u0275text(2, "Add New Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 47);
    \u0275\u0275listener("click", function JobListsComponent_ng_template_101_Template_button_click_3_listener() {
      const modal_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(modal_r6.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 48)(5, "div", 12)(6, "div", 2)(7, "div", 49)(8, "label", 50);
    \u0275\u0275text(9, "Position");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 51);
    \u0275\u0275element(11, "input", 52);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 53)(13, "div", 2)(14, "div", 49)(15, "label", 50);
    \u0275\u0275text(16, "Job Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 51)(18, "ng-select", 54)(19, "ng-option", 21);
    \u0275\u0275text(20, "Full Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ng-option", 22);
    \u0275\u0275text(22, "Part Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ng-option", 23);
    \u0275\u0275text(24, "Freelancer");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(25, "div", 53)(26, "div", 2)(27, "div", 49)(28, "label", 50);
    \u0275\u0275text(29, "Description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 51)(31, "textarea", 55);
    \u0275\u0275text(32, "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 53)(34, "div", 2)(35, "div", 49)(36, "label", 50);
    \u0275\u0275text(37, "Posted Date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 51)(39, "div", 14)(40, "div", 15);
    \u0275\u0275element(41, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 53)(44, "div", 2)(45, "div", 49)(46, "label", 50);
    \u0275\u0275text(47, "Last Date To Apply");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 51)(49, "div", 14)(50, "div", 15);
    \u0275\u0275element(51, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "input", 17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 53)(54, "div", 2)(55, "div", 49)(56, "label", 50);
    \u0275\u0275text(57, "Close Date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 51)(59, "div", 14)(60, "div", 15);
    \u0275\u0275element(61, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "input", 17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div", 56)(64, "div", 49)(65, "label", 57);
    \u0275\u0275text(66, "Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 51)(68, "div", 58)(69, "div", 59);
    \u0275\u0275element(70, "input", 60);
    \u0275\u0275elementStart(71, "label", 61);
    \u0275\u0275text(72, " Active ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 62);
    \u0275\u0275element(74, "input", 63);
    \u0275\u0275elementStart(75, "label", 64);
    \u0275\u0275text(76, " InActive ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(77, "div", 65)(78, "button", 66);
    \u0275\u0275listener("click", function JobListsComponent_ng_template_101_Template_button_click_78_listener() {
      const modal_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(modal_r6.close("cross click"));
    });
    \u0275\u0275text(79, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "button", 67);
    \u0275\u0275text(81, "Submit");
    \u0275\u0275elementEnd()();
  }
}
var ELEMENT_DATA = [
  { id: 1, position: "Senior PHP Developer", type: "	Full-Time", postedDate: "12-01-2021", lastDateToApply: "24-01-2021", closedDate: "	25-01-2021", statusText: "Active", status: "success" },
  { id: 2, position: "Fresher Web Designer", type: "	Full-Time", postedDate: "15-02-2021", lastDateToApply: "21-02-2021", closedDate: "23-02-2021", statusText: "Active", status: "success" },
  { id: 3, position: "Senior Web Developer", type: "	Full-Time", postedDate: "16-02-2021", lastDateToApply: "03-03-2021", closedDate: "05-03-2021", statusText: "Active", status: "success" },
  { id: 4, position: "Fresher UI Designer", type: "Part-Time", postedDate: "16-01-2021", lastDateToApply: "03-02-2021", closedDate: "05-02-2021", statusText: "InActive", status: "danger" },
  { id: 5, position: "SEO Specialist", type: "	Full-Time", postedDate: "16-03-2021", lastDateToApply: "23-03-2021", closedDate: "30-03-2021", statusText: "Active", status: "success" },
  { id: 6, position: "Senior Worpress Developer", type: "	Full-Time", postedDate: "16-01-2021", lastDateToApply: "23-01-2021", closedDate: "30-01-2021", statusText: "InActive", status: "danger" },
  { id: 7, position: "Senior Accountant", type: "	Full-Time", postedDate: "18-02-2021", lastDateToApply: "25-02-2021", closedDate: "30-02-2021", statusText: "Active", status: "success" },
  { id: 8, position: "Senior Software Engineer", type: "	Full-Time", postedDate: "	21-03-2021", lastDateToApply: "15-03-2021", closedDate: "20-03-2021", statusText: "Active", status: "success" },
  { id: 9, position: "Fresher Angular Developer", type: "	Full-Time", postedDate: "	21-01-2021", lastDateToApply: "15-02-2021", closedDate: "20-02-2021", statusText: "InActive", status: "danger" },
  { id: 10, position: "Senior Angular Developer", type: "Freelancer", postedDate: "	25-03-2021", lastDateToApply: "	15-04-2021", closedDate: "20-04-2021", statusText: "Active", status: "success" }
];
var _JobListsComponent = class _JobListsComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.displayedColumns = ["ID", "Position", "Type", "PostedDate", "LastDateToApply", "closeDate", "Status", "Action"];
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
    this.TableData = [
      { id: 1, position: "Senior PHP Developer", type: "	Full-Time", postedDate: "12-01-2021", lastDateToApply: "24-01-2021", closedDate: "	25-01-2021", statusText: "Active", status: "success" },
      { id: 2, position: "Fresher Web Designer", type: "	Full-Time", postedDate: "15-02-2021", lastDateToApply: "21-02-2021", closedDate: "23-02-2021", statusText: "Active", status: "success" },
      { id: 3, position: "Senior Web Developer", type: "	Full-Time", postedDate: "16-02-2021", lastDateToApply: "03-03-2021", closedDate: "05-03-2021", statusText: "Active", status: "success" },
      { id: 4, position: "Fresher UI Designer", type: "Part-Time", postedDate: "16-01-2021", lastDateToApply: "03-02-2021", closedDate: "05-02-2021", statusText: "InActive", status: "danger" },
      { id: 5, position: "SEO Specialist", type: "	Full-Time", postedDate: "16-03-2021", lastDateToApply: "23-03-2021", closedDate: "30-03-2021", statusText: "Active", status: "success" },
      { id: 6, position: "Senior Worpress Developer", type: "	Full-Time", postedDate: "16-01-2021", lastDateToApply: "23-01-2021", closedDate: "30-01-2021", statusText: "InActive", status: "danger" },
      { id: 7, position: "Senior Accountant", type: "	Full-Time", postedDate: "18-02-2021", lastDateToApply: "25-02-2021", closedDate: "30-02-2021", statusText: "Active", status: "success" },
      { id: 8, position: "Senior Software Engineer", type: "	Full-Time", postedDate: "	21-03-2021", lastDateToApply: "15-03-2021", closedDate: "20-03-2021", statusText: "Active", status: "success" },
      { id: 9, position: "Fresher Angular Developer", type: "	Full-Time", postedDate: "	21-01-2021", lastDateToApply: "15-02-2021", closedDate: "20-02-2021", statusText: "InActive", status: "danger" },
      { id: 10, position: "Senior Angular Developer", type: "Freelancer", postedDate: "	25-03-2021", lastDateToApply: "	15-04-2021", closedDate: "20-04-2021", statusText: "Active", status: "success" }
    ];
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
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
    });
  }
  edit(editContent) {
    this.modalService.open(editContent, { windowClass: "modalCusSty" });
  }
  open(content) {
    this.modalService.open(content, { windowClass: "modalCusSty", size: "lg" });
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
_JobListsComponent.\u0275fac = function JobListsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JobListsComponent)(\u0275\u0275directiveInject(NgbModal));
};
_JobListsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobListsComponent, selectors: [["app-job-lists"]], viewQuery: function JobListsComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
  }
}, standalone: true, features: [\u0275\u0275ProvidersFeature([
  FlatpickrDefaults
]), \u0275\u0275StandaloneFeature], decls: 103, vars: 2, consts: [["content", ""], [3, "title", "title1"], [1, "row"], [1, "col-md-12"], [1, "card", "custom-card"], [1, "card-header", "d-flex", "justify-content-between", "border-bottom-0"], [1, "card-title"], [1, "float-end"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "card-body"], [1, "col-md-12", "col-lg-12", "col-xxl-5"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["type", "text", "mwlFlatpickr", "", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], [1, "col-xl-3", "col-lg-6"], ["data-trigger", "", "placeholder", "Select Job Type", 1, "form-control", "custom-select", "p-0"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["data-trigger", "", "placeholder", "Select Status", 1, "form-control", "custom-select", "p-0"], [1, "col-xxl-1", "col-xl-3", "ps-xxl-0"], [1, "form-group", "mt-2"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-grid"], [1, "table-responsive"], ["id", "job-list", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom"], [1, "border-bottom-0"], [1, "mt-4"], [1, "pagination", "justify-content-end", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item", "active"], [1, "page-item"], ["href", "javascript:void(0);"], [1, "d-flex"], ["routerLink", "/dashboard/job-dashboard/job-view", "data-bs-toggle", "tooltip", "placement", "top", "title", "", "ngbTooltip", "View", 1, "action-btns1"], [1, "fe", "fe-eye", "text-primary"], ["data-bs-toggle", "modal", "data-bs-target", ".editjobtmodal", 1, "action-btns1", 3, "click"], ["data-bs-toggle", "tooltip", "placement", "top", "title", "", "ngbTooltip", "Edit", 1, "fe", "fe-edit-2", "text-success"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "title", "", "ngbTooltip", "Delete", 1, "action-btns1"], [1, "fe", "fe-trash-2", "text-danger"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "col-md-3"], [1, "form-label", "mb-0", "mt-2"], [1, "col-md-9"], ["type", "text", "placeholder", "Name", "value", "Senior PHP Developer", 1, "form-control"], [1, "form-group", "mt-3"], ["data-trigger", "", "placeholder", "Select Priority", 1, "form-control", "custom-select", "p-0"], ["id", "text-area", "rows", "3", 1, "form-control"], [1, "row", "mt-3"], [1, "form-label", "mb-0", "mt-1"], [1, "custom-controls-stacked", "d-md-flex"], [1, "form-check", "mb-0", "me-4"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], [1, "form-check", "mb-0"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault3", 1, "form-check-input"], ["for", "flexRadioDefault3", 1, "form-check-label"], [1, "modal-footer"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-success", "successful-notify"]], template: function JobListsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-job-dashboard-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h4", 6);
    \u0275\u0275text(6, "Job Lists");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7);
    \u0275\u0275element(8, "input", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 9)(10, "div", 2)(11, "div", 10)(12, "div", 2)(13, "div", 11)(14, "div", 12)(15, "label", 13);
    \u0275\u0275text(16, "From:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 12)(18, "div", 14)(19, "div", 15);
    \u0275\u0275element(20, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 11)(23, "div", 12)(24, "label", 13);
    \u0275\u0275text(25, "To:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 12)(27, "div", 14)(28, "div", 15);
    \u0275\u0275element(29, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 17);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(31, "div", 18)(32, "div", 12)(33, "label", 13);
    \u0275\u0275text(34, "Select Job Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "ng-select", 19)(36, "ng-option", 20);
    \u0275\u0275text(37, "Select Job Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-option", 21);
    \u0275\u0275text(39, "Full-Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ng-option", 22);
    \u0275\u0275text(41, "Part-Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ng-option", 23);
    \u0275\u0275text(43, "Freelancer");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 18)(45, "div", 12)(46, "label", 13);
    \u0275\u0275text(47, "Select Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "ng-select", 24)(49, "ng-option", 20);
    \u0275\u0275text(50, "Select Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ng-option", 21);
    \u0275\u0275text(52, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ng-option", 22);
    \u0275\u0275text(54, "InActive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div", 25)(56, "div", 26);
    \u0275\u0275element(57, "label", 13);
    \u0275\u0275elementStart(58, "a", 27);
    \u0275\u0275text(59, "Search");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(60, "div", 9)(61, "div", 28)(62, "table", 29)(63, "thead")(64, "tr")(65, "th", 30);
    \u0275\u0275text(66, "No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "th", 30);
    \u0275\u0275text(68, "Position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "th", 30);
    \u0275\u0275text(70, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "th", 30);
    \u0275\u0275text(72, "Posted Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "th", 30);
    \u0275\u0275text(74, "Last Date to Apply");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "th", 30);
    \u0275\u0275text(76, "Close Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "th", 30);
    \u0275\u0275text(78, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "th", 30);
    \u0275\u0275text(80, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "tbody");
    \u0275\u0275repeaterCreate(82, JobListsComponent_For_83_Template, 25, 10, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(84, "nav", 31)(85, "ul", 32)(86, "li", 33)(87, "a", 34);
    \u0275\u0275text(88, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "li", 35)(90, "a", 34);
    \u0275\u0275text(91, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "li", 36)(93, "a", 34);
    \u0275\u0275text(94, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "li", 36)(96, "a", 34);
    \u0275\u0275text(97, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "li", 36)(99, "a", 34);
    \u0275\u0275text(100, "Next");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(101, JobListsComponent_ng_template_101_Template, 82, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("title", "Job Lists")("title1", "Job");
    \u0275\u0275advance(82);
    \u0275\u0275repeater(ctx.TableData);
  }
}, dependencies: [SharedModule, JobDashboardPageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, MaterialModuleModule, FlatpickrModule, FlatpickrDirective, RouterModule, RouterLink] });
var JobListsComponent = _JobListsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobListsComponent, { className: "JobListsComponent" });
})();
export {
  JobListsComponent
};
//# sourceMappingURL=job-lists.component-XHH3Z56F.js.map
