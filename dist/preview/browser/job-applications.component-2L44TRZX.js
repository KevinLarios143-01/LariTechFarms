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
import "./chunk-ZSUERINM.js";
import {
  NgbModal,
  NgbModule,
  NgbTooltip
} from "./chunk-47LBZ5ZO.js";
import {
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
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/job-dashboard/job-applications/job-applications.component.ts
function JobApplicationsComponent_ng_template_483_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "h5", 45);
    \u0275\u0275text(2, "Job Application");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 46);
    \u0275\u0275listener("click", function JobApplicationsComponent_ng_template_483_Template_button_click_3_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 47)(5, "div", 20)(6, "table", 48)(7, "tbody")(8, "tr")(9, "td", 49);
    \u0275\u0275text(10, "Position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14, "Senior PHP Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tr")(16, "td", 49);
    \u0275\u0275text(17, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21, "Faith Harris/td> ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "tr")(23, "td", 49);
    \u0275\u0275text(24, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28, "faith@gmail.com");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "tr")(30, "td", 49);
    \u0275\u0275text(31, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td");
    \u0275\u0275text(33, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td");
    \u0275\u0275text(35, "+9685321475");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "tr")(37, "td", 49);
    \u0275\u0275text(38, "Applied On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td");
    \u0275\u0275text(40, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "td");
    \u0275\u0275text(42, "25-01-2021");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "tr")(44, "td", 49);
    \u0275\u0275text(45, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "td")(49, "span", 24);
    \u0275\u0275text(50, "Pending");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "tr")(52, "td", 49);
    \u0275\u0275text(53, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "td")(57, "p", 50);
    \u0275\u0275text(58, "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "tr")(60, "td", 51)(61, "a", 52);
    \u0275\u0275text(62, "View Resume");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(63, "div", 53)(64, "button", 54);
    \u0275\u0275listener("click", function JobApplicationsComponent_ng_template_483_Template_button_click_64_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.close("cross click"));
    });
    \u0275\u0275text(65, "Close");
    \u0275\u0275elementEnd()();
  }
}
var ELEMENT_DATA = [
  { id: 1, position: "	Senior PHP Developer", name: "Faith Harris", email: "faith@gmail.com", phoneNumber: 9685 * 21475, AppliedOn: "25-01-2021", submittedBy: "Austin Bell", statusText: "Pending", status: "warning" },
  { id: 2, position: "	Fresher Web Designer", name: "Austin Bell", email: "austin@gmail.com", phoneNumber: 865321 * 950, AppliedOn: "20-02-2021", submittedBy: "Austin Bell", statusText: "Selected", status: "primary" },
  { id: 3, position: "	Senior Web Developer", name: "Maria Bower", email: "maria@gmail.com", phoneNumber: 95632 * 8417, AppliedOn: "28-02-2021", submittedBy: "Maria Bower", statusText: "Rejected", status: "danger" },
  { id: 4, position: "	Fresher UI Designer", name: "Peter Hill", email: "peter@gmail.com", phoneNumber: 85 * 3249751, AppliedOn: "19-01-2021", submittedBy: "Peter Hill", statusText: "Selected", status: "primary" },
  { id: 5, position: "SEO Specialist", name: "Victoria Lyman", email: "victoria@gmail.com", phoneNumber: 96358 * 6432, AppliedOn: "19-03-2021", submittedBy: "Victoria Lyman", statusText: "Pending", status: "warning" },
  { id: 6, position: "Senior Worpress Developer", name: "	Adam Quinn", email: "adam@gmail.com", phoneNumber: 96 ** 231572, AppliedOn: "17-01-2021", submittedBy: "Adam Quinn", statusText: "Selected", status: "primary" },
  { id: 7, position: "	Senior Accountant", name: "	Melanie Coleman", email: "melanie@gmail.com", phoneNumber: 863529 * 470, AppliedOn: "21-02-2021  ", submittedBy: "Melanie Coleman", statusText: "Selected", status: "primary" },
  { id: 8, position: "Fresher Angular Developer", name: "Max Wilson", email: "max@gmail.com", phoneNumber: 998635 * 240, AppliedOn: "30-03-2021", submittedBy: "Max Wilson", statusText: "Selected", status: "primary" },
  { id: 9, position: "	Senior Angular Developer", name: "Amelia Russell", email: "amelia@gmail.com", phoneNumber: 935698 ** 72, AppliedOn: "04-04-2021", submittedBy: "Amelia Russell", statusText: "Pending", status: "warning" },
  { id: 10, position: "Fresher Web Designer", name: "Justin Metcalfe", email: "justin@gmail.com", phoneNumber: 968 ** 21475, AppliedOn: "17-02-2021", submittedBy: "Justin Metcalfe", statusText: "Rejected", status: "danger" },
  { id: 11, position: "Senior Web Developer", name: "Sophie Anderson", email: "sophie@gmail.com", phoneNumber: 86742 * 1566, AppliedOn: "	22-02-2021", submittedBy: "Sophie Anderson", statusText: "Selected", status: "primary" },
  { id: 12, position: "Senior Worpress Developer", name: "Ryan Young", email: "ryan@gmail.com", phoneNumber: 968532 * 475, AppliedOn: "18-03-2021", submittedBy: "Ryan Young", statusText: "Pending", status: "warning" },
  { id: 13, position: "Fresher Angular Developer", name: "Jennifer Hardacre", email: "jennifer@gmail.com", phoneNumber: 96358 ** 432, AppliedOn: "19-03-2021", submittedBy: "Jennifer Hardacre", statusText: "Rejected", status: "danger" },
  { id: 14, position: "Senior PHP Developer", name: "Justin Parr", email: "justin@gmail.com", phoneNumber: 9 * 85321475, AppliedOn: "20-03-2021", submittedBy: "Justin Parr", statusText: "Selected", status: "primary" }
];
var _JobApplicationsComponent = class _JobApplicationsComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.displayedColumns = ["ID", "Position", "Name", "Email", "PhoneNumber", "AppliedOn", "SubmittedBy", "Status", "Action"];
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
    });
  }
  edit(editContent) {
    this.modalService.open(editContent, { backdrop: "static", windowClass: "modalCusSty" });
  }
  open(content) {
    this.modalService.open(content, { windowClass: "modalCusSty" });
  }
};
_JobApplicationsComponent.\u0275fac = function JobApplicationsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JobApplicationsComponent)(\u0275\u0275directiveInject(NgbModal));
};
_JobApplicationsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobApplicationsComponent, selectors: [["app-job-applications"]], viewQuery: function JobApplicationsComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 485, vars: 2, consts: [["content", ""], [3, "title", "title1"], [1, "row"], [1, "col-md-12"], [1, "card", "custom-card"], [1, "card-header", "d-flex", "justify-content-between", "border-bottom-0"], [1, "card-title"], [1, "card-body", "pt-0"], [1, "row", "my-3", "px-3"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mt-2"], ["name", "quantity", "id", "select-countries17", "placeholder", "1", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], [1, "float-end"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "table-responsive"], ["id", "job-applictaion", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom"], [1, "border-bottom-0"], ["href", "javascript:void(0);"], [1, "badge", "bg-warning"], [1, "d-flex"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Accept", 1, "action-btns1"], [1, "fe", "fe-check", "text-success"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Rejected", 1, "action-btns1"], [1, "fe", "fe-x", "text-danger"], ["data-bs-toggle", "modal", "data-bs-target", ".jobapplictionmodal", 1, "action-btns1", 3, "click"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "view", 1, "fe", "fe-eye", "text-primary"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Delete", 1, "action-btns1"], [1, "fe", "fe-trash-2", "text-danger"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Download Resume", 1, "action-btns"], [1, "fe", "fe-download", "text-secondary"], [1, "badge", "bg-primary"], [1, "badge", "bg-danger"], [1, "mt-4"], [1, "pagination", "justify-content-end", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item", "active"], [1, "page-item"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "table", "mb-0", "table-borderless"], [1, "form-label", "mb-0"], [1, "mb-0"], ["colspan", "3"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], [1, "modal-footer"], ["data-bs-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"]], template: function JobApplicationsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-job-dashboard-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h4", 6);
    \u0275\u0275text(6, "Job Applications");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "span");
    \u0275\u0275text(12, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "ng-select", 13)(16, "ng-option", 14);
    \u0275\u0275text(17, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ng-option", 15);
    \u0275\u0275text(19, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ng-option", 16);
    \u0275\u0275text(21, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ng-option", 17);
    \u0275\u0275text(23, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 9)(27, "div", 18);
    \u0275\u0275element(28, "input", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 20)(30, "table", 21)(31, "thead")(32, "tr")(33, "th", 22);
    \u0275\u0275text(34, "No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 22);
    \u0275\u0275text(36, "Position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 22);
    \u0275\u0275text(38, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 22);
    \u0275\u0275text(40, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 22);
    \u0275\u0275text(42, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th", 22);
    \u0275\u0275text(44, "Applied On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 22);
    \u0275\u0275text(46, "Submitted By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th", 22);
    \u0275\u0275text(48, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th", 22);
    \u0275\u0275text(50, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "tbody")(52, "tr")(53, "td");
    \u0275\u0275text(54, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "td")(56, "a", 23);
    \u0275\u0275text(57, "Senior PHP Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "td");
    \u0275\u0275text(59, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "td");
    \u0275\u0275text(61, "faith@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "td");
    \u0275\u0275text(63, "+9685321475");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "td");
    \u0275\u0275text(65, "25-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "td");
    \u0275\u0275text(67, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "td")(69, "span", 24);
    \u0275\u0275text(70, "Pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "td")(72, "div", 25)(73, "a", 26);
    \u0275\u0275element(74, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "a", 28);
    \u0275\u0275element(76, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "a", 30);
    \u0275\u0275listener("click", function JobApplicationsComponent_Template_a_click_77_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(484);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(78, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "a", 32);
    \u0275\u0275element(80, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "a", 34);
    \u0275\u0275element(82, "i", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(83, "tr")(84, "td");
    \u0275\u0275text(85, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "td")(87, "a", 23);
    \u0275\u0275text(88, "Fresher Web Designer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "td");
    \u0275\u0275text(90, "Austin Bell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "td");
    \u0275\u0275text(92, "austin@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "td");
    \u0275\u0275text(94, "+8653217950");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "td");
    \u0275\u0275text(96, "20-02-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "td");
    \u0275\u0275text(98, "Austin Bell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "td")(100, "span", 36);
    \u0275\u0275text(101, "Selected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "td")(103, "div", 25)(104, "a", 28);
    \u0275\u0275element(105, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "a", 30);
    \u0275\u0275listener("click", function JobApplicationsComponent_Template_a_click_106_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(484);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(107, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "a", 32);
    \u0275\u0275element(109, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "a", 34);
    \u0275\u0275element(111, "i", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(112, "tr")(113, "td");
    \u0275\u0275text(114, "03");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "td")(116, "a", 23);
    \u0275\u0275text(117, "Senior Web Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "td");
    \u0275\u0275text(119, "Maria Bower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "td");
    \u0275\u0275text(121, "maria@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "td");
    \u0275\u0275text(123, "+9563258417");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "td");
    \u0275\u0275text(125, "28-02-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "td");
    \u0275\u0275text(127, "Maria Bower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "td")(129, "span", 37);
    \u0275\u0275text(130, "Rejected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "td")(132, "div", 25)(133, "a", 26);
    \u0275\u0275element(134, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "a", 30);
    \u0275\u0275listener("click", function JobApplicationsComponent_Template_a_click_135_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(484);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(136, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "a", 32);
    \u0275\u0275element(138, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "a", 34);
    \u0275\u0275element(140, "i", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(141, "tr")(142, "td");
    \u0275\u0275text(143, "04");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "td")(145, "a", 23);
    \u0275\u0275text(146, "Fresher UI Designer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "td");
    \u0275\u0275text(148, "Peter Hill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "td");
    \u0275\u0275text(150, "peter@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "td");
    \u0275\u0275text(152, "+8563249751");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "td");
    \u0275\u0275text(154, "19-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "td");
    \u0275\u0275text(156, "Peter Hill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "td")(158, "span", 36);
    \u0275\u0275text(159, "Selected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(160, "td")(161, "div", 25)(162, "a", 28);
    \u0275\u0275element(163, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "a", 30);
    \u0275\u0275listener("click", function JobApplicationsComponent_Template_a_click_164_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(484);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(165, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "a", 32);
    \u0275\u0275element(167, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "a", 34);
    \u0275\u0275element(169, "i", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(170, "tr")(171, "td");
    \u0275\u0275text(172, "05");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(173, "td")(174, "a", 23);
    \u0275\u0275text(175, "SEO Specialist");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(176, "td");
    \u0275\u0275text(177, "Victoria Lyman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "td");
    \u0275\u0275text(179, "victoria@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "td");
    \u0275\u0275text(181, "+9635826432");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "td");
    \u0275\u0275text(183, "19-03-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "td");
    \u0275\u0275text(185, "Victoria Lyman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "td")(187, "span", 24);
    \u0275\u0275text(188, "Pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(189, "td")(190, "div", 25)(191, "a", 26);
    \u0275\u0275element(192, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "a", 28);
    \u0275\u0275element(194, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "a", 30);
    \u0275\u0275listener("click", function JobApplicationsComponent_Template_a_click_195_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(484);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(196, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(197, "a", 32);
    \u0275\u0275element(198, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(199, "a", 34);
    \u0275\u0275element(200, "i", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(201, "tr")(202, "td");
    \u0275\u0275text(203, "06");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(204, "td")(205, "a", 23);
    \u0275\u0275text(206, "Senior Worpress Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(207, "td");
    \u0275\u0275text(208, "Adam Quinn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "td");
    \u0275\u0275text(210, "adam@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(211, "td");
    \u0275\u0275text(212, "+9685231572");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "td");
    \u0275\u0275text(214, "17-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(215, "td");
    \u0275\u0275text(216, "Adam Quinn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(217, "td")(218, "span", 36);
    \u0275\u0275text(219, "Selected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(220, "td")(221, "div", 25)(222, "a", 28);
    \u0275\u0275element(223, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "a", 30);
    \u0275\u0275listener("click", function JobApplicationsComponent_Template_a_click_224_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(484);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(225, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(226, "a", 32);
    \u0275\u0275element(227, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(228, "a", 34);
    \u0275\u0275element(229, "i", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(230, "tr")(231, "td");
    \u0275\u0275text(232, "07");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(233, "td")(234, "a", 23);
    \u0275\u0275text(235, "Senior Accountant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(236, "td");
    \u0275\u0275text(237, "Melanie Coleman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(238, "td");
    \u0275\u0275text(239, "melanie@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(240, "td");
    \u0275\u0275text(241, "+8635291470");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(242, "td");
    \u0275\u0275text(243, "21-02-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(244, "td");
    \u0275\u0275text(245, "Melanie Coleman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(246, "td")(247, "span", 36);
    \u0275\u0275text(248, "Selected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(249, "td")(250, "div", 25)(251, "a", 28);
    \u0275\u0275element(252, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(253, "a", 30);
    \u0275\u0275listener("click", function JobApplicationsComponent_Template_a_click_253_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(484);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(254, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(255, "a", 32);
    \u0275\u0275element(256, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(257, "a", 34);
    \u0275\u0275element(258, "i", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(259, "tr")(260, "td");
    \u0275\u0275text(261, "08");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(262, "td")(263, "a", 23);
    \u0275\u0275text(264, "Fresher Angular Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(265, "td");
    \u0275\u0275text(266, "Max Wilson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(267, "td");
    \u0275\u0275text(268, "max@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(269, "td");
    \u0275\u0275text(270, "+9986357240");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(271, "td");
    \u0275\u0275text(272, "30-03-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(273, "td");
    \u0275\u0275text(274, "Max Wilson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(275, "td")(276, "span", 36);
    \u0275\u0275text(277, "Selected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(278, "td")(279, "div", 25)(280, "a", 28);
    \u0275\u0275element(281, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(282, "a", 30);
    \u0275\u0275listener("click", function JobApplicationsComponent_Template_a_click_282_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(484);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(283, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(284, "a", 32);
    \u0275\u0275element(285, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(286, "a", 34);
    \u0275\u0275element(287, "i", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(288, "tr")(289, "td");
    \u0275\u0275text(290, "09");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(291, "td")(292, "a", 23);
    \u0275\u0275text(293, "Senior Angular Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(294, "td");
    \u0275\u0275text(295, "Amelia Russell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(296, "td");
    \u0275\u0275text(297, "amelia@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(298, "td");
    \u0275\u0275text(299, "+9356982472");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(300, "td");
    \u0275\u0275text(301, "04-04-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(302, "td");
    \u0275\u0275text(303, "Amelia Russell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(304, "td")(305, "span", 24);
    \u0275\u0275text(306, "Pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(307, "td")(308, "div", 25)(309, "a", 26);
    \u0275\u0275element(310, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(311, "a", 28);
    \u0275\u0275element(312, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(313, "a", 30);
    \u0275\u0275listener("click", function JobApplicationsComponent_Template_a_click_313_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(484);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(314, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(315, "a", 32);
    \u0275\u0275element(316, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(317, "a", 34);
    \u0275\u0275element(318, "i", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(319, "tr")(320, "td");
    \u0275\u0275text(321, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(322, "td")(323, "a", 23);
    \u0275\u0275text(324, "Fresher Web Designer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(325, "td");
    \u0275\u0275text(326, "Justin Metcalfe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(327, "td");
    \u0275\u0275text(328, "justin@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(329, "td");
    \u0275\u0275text(330, "+9685321475");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(331, "td");
    \u0275\u0275text(332, "17-02-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(333, "td");
    \u0275\u0275text(334, "Justin Metcalfe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(335, "td")(336, "span", 37);
    \u0275\u0275text(337, "Rejected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(338, "td")(339, "div", 25)(340, "a", 26);
    \u0275\u0275element(341, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(342, "a", 30);
    \u0275\u0275listener("click", function JobApplicationsComponent_Template_a_click_342_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(484);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(343, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(344, "a", 32);
    \u0275\u0275element(345, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(346, "a", 34);
    \u0275\u0275element(347, "i", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(348, "tr")(349, "td");
    \u0275\u0275text(350, "11");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(351, "td")(352, "a", 23);
    \u0275\u0275text(353, "Senior Web Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(354, "td");
    \u0275\u0275text(355, "Sophie Anderson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(356, "td");
    \u0275\u0275text(357, "sophie@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(358, "td");
    \u0275\u0275text(359, "+8674231566");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(360, "td");
    \u0275\u0275text(361, "22-02-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(362, "td");
    \u0275\u0275text(363, "Sophie Anderson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(364, "td")(365, "span", 36);
    \u0275\u0275text(366, "Selected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(367, "td")(368, "div", 25)(369, "a", 28);
    \u0275\u0275element(370, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(371, "a", 30);
    \u0275\u0275listener("click", function JobApplicationsComponent_Template_a_click_371_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(484);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(372, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(373, "a", 32);
    \u0275\u0275element(374, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(375, "a", 34);
    \u0275\u0275element(376, "i", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(377, "tr")(378, "td");
    \u0275\u0275text(379, "12");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(380, "td")(381, "a", 23);
    \u0275\u0275text(382, "Senior Worpress Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(383, "td");
    \u0275\u0275text(384, "Ryan Young");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(385, "td");
    \u0275\u0275text(386, "ryan@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(387, "td");
    \u0275\u0275text(388, "+9685321475");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(389, "td");
    \u0275\u0275text(390, "18-03-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(391, "td");
    \u0275\u0275text(392, "Ryan Young");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(393, "td")(394, "span", 24);
    \u0275\u0275text(395, "Pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(396, "td")(397, "div", 25)(398, "a", 26);
    \u0275\u0275element(399, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(400, "a", 28);
    \u0275\u0275element(401, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(402, "a", 30);
    \u0275\u0275listener("click", function JobApplicationsComponent_Template_a_click_402_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(484);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(403, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(404, "a", 32);
    \u0275\u0275element(405, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(406, "a", 34);
    \u0275\u0275element(407, "i", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(408, "tr")(409, "td");
    \u0275\u0275text(410, "13");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(411, "td")(412, "a", 23);
    \u0275\u0275text(413, "Fresher Angular Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(414, "td");
    \u0275\u0275text(415, "Jennifer Hardacre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(416, "td");
    \u0275\u0275text(417, "jennifer@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(418, "td");
    \u0275\u0275text(419, "+9635826432");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(420, "td");
    \u0275\u0275text(421, "19-03-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(422, "td");
    \u0275\u0275text(423, "Jennifer Hardacre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(424, "td")(425, "span", 37);
    \u0275\u0275text(426, "Rejected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(427, "td")(428, "div", 25)(429, "a", 26);
    \u0275\u0275element(430, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(431, "a", 30);
    \u0275\u0275listener("click", function JobApplicationsComponent_Template_a_click_431_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(484);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(432, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(433, "a", 32);
    \u0275\u0275element(434, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(435, "a", 34);
    \u0275\u0275element(436, "i", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(437, "tr")(438, "td");
    \u0275\u0275text(439, "14");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(440, "td")(441, "a", 23);
    \u0275\u0275text(442, "Senior PHP Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(443, "td");
    \u0275\u0275text(444, "Justin Parr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(445, "td");
    \u0275\u0275text(446, "justin@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(447, "td");
    \u0275\u0275text(448, "+9685321475");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(449, "td");
    \u0275\u0275text(450, "20-03-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(451, "td");
    \u0275\u0275text(452, "Justin Parr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(453, "td")(454, "span", 36);
    \u0275\u0275text(455, "Selected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(456, "td")(457, "div", 25)(458, "a", 28);
    \u0275\u0275element(459, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(460, "a", 30);
    \u0275\u0275listener("click", function JobApplicationsComponent_Template_a_click_460_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(484);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(461, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(462, "a", 32);
    \u0275\u0275element(463, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(464, "a", 34);
    \u0275\u0275element(465, "i", 35);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(466, "nav", 38)(467, "ul", 39)(468, "li", 40)(469, "a", 41);
    \u0275\u0275text(470, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(471, "li", 42)(472, "a", 41);
    \u0275\u0275text(473, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(474, "li", 43)(475, "a", 41);
    \u0275\u0275text(476, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(477, "li", 43)(478, "a", 41);
    \u0275\u0275text(479, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(480, "li", 43)(481, "a", 41);
    \u0275\u0275text(482, "Next");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(483, JobApplicationsComponent_ng_template_483_Template, 66, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("title", "Job Applications")("title1", "Job");
  }
}, dependencies: [SharedModule, JobDashboardPageHeaderComponent, MaterialModuleModule, RouterModule, NgSelectModule, NgSelectComponent, NgOptionComponent, NgbModule, NgbTooltip] });
var JobApplicationsComponent = _JobApplicationsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobApplicationsComponent, { className: "JobApplicationsComponent" });
})();
export {
  JobApplicationsComponent
};
//# sourceMappingURL=job-applications.component-2L44TRZX.js.map
