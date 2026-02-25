import {
  MatInput,
  MatPaginator,
  MatSort,
  MatSortHeader,
  MaterialModuleModule,
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
  NgbModal
} from "./chunk-47LBZ5ZO.js";
import {
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/super-admin/super-admins/super-admins.component.ts
var _c0 = () => [8, 10, 25, 100];
function SuperAdminsComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 51);
    \u0275\u0275text(1, " #ID ");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminsComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" #0", row_r3.id, " ");
  }
}
function SuperAdminsComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 51);
    \u0275\u0275text(1, " CompanyName ");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminsComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 53)(1, "a", 54)(2, "span", 55);
    \u0275\u0275element(3, "img", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 57)(5, "h6", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", row_r4.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.name);
  }
}
function SuperAdminsComponent_th_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 51);
    \u0275\u0275text(1, " Email ");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminsComponent_td_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.email, " ");
  }
}
function SuperAdminsComponent_th_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 51);
    \u0275\u0275text(1, " RegisterDate ");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminsComponent_td_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.registeredBy, " ");
  }
}
function SuperAdminsComponent_th_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 51);
    \u0275\u0275text(1, " Status ");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminsComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 53)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge bg-", row_r7.status, "-transparent");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r7.statusText, "");
  }
}
function SuperAdminsComponent_th_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 59);
    \u0275\u0275text(1, " Action ");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminsComponent_td_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 53)(1, "div", 60)(2, "a", 61);
    \u0275\u0275element(3, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 63);
    \u0275\u0275listener("click", function SuperAdminsComponent_td_65_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r8 = \u0275\u0275nextContext();
      const editContent_r2 = \u0275\u0275reference(73);
      return \u0275\u0275resetView(ctx_r8.edit(editContent_r2));
    });
    \u0275\u0275element(5, "i", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 65);
    \u0275\u0275listener("click", function SuperAdminsComponent_td_65_Template_a_click_6_listener() {
      const row_r10 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.removeData(row_r10.id));
    });
    \u0275\u0275element(7, "i", 66);
    \u0275\u0275elementEnd()()();
  }
}
function SuperAdminsComponent_tr_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 67);
  }
}
function SuperAdminsComponent_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 68);
  }
}
function SuperAdminsComponent_tr_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 69)(1, "td", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const input_r11 = \u0275\u0275reference(44);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('No data matching the filter "', input_r11.value, '"');
  }
}
function SuperAdminsComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "h5", 72);
    \u0275\u0275text(2, "Add New Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 73);
    \u0275\u0275listener("click", function SuperAdminsComponent_ng_template_70_Template_button_click_3_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(modal_r13.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(4, "span", 74);
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 75)(7, "div", 76)(8, "label", 77);
    \u0275\u0275text(9, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 76)(12, "label", 77);
    \u0275\u0275text(13, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 76)(16, "label", 77);
    \u0275\u0275text(17, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 76)(20, "label", 77);
    \u0275\u0275text(21, "Confirm New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 76)(24, "label", 77);
    \u0275\u0275text(25, "Upload Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 76);
    \u0275\u0275element(27, "label", 81)(28, "input", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 83)(30, "label", 84);
    \u0275\u0275text(31, "Status :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label", 85);
    \u0275\u0275element(33, "input", 86);
    \u0275\u0275elementStart(34, "span", 87);
    \u0275\u0275text(35, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "label", 85);
    \u0275\u0275element(37, "input", 88);
    \u0275\u0275elementStart(38, "span", 87);
    \u0275\u0275text(39, "InActive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 89)(41, "a", 90);
    \u0275\u0275listener("click", function SuperAdminsComponent_ng_template_70_Template_a_click_41_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(modal_r13.dismiss("Cross click"));
    });
    \u0275\u0275text(42, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "a", 91);
    \u0275\u0275listener("click", function SuperAdminsComponent_ng_template_70_Template_a_click_43_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(modal_r13.dismiss("Cross click"));
    });
    \u0275\u0275text(44, "Submit");
    \u0275\u0275elementEnd()();
  }
}
function SuperAdminsComponent_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "h5", 72);
    \u0275\u0275text(2, "Add New Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 92);
    \u0275\u0275listener("click", function SuperAdminsComponent_ng_template_72_Template_button_click_3_listener() {
      const modal_r15 = \u0275\u0275restoreView(_r14).$implicit;
      return \u0275\u0275resetView(modal_r15.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 75)(5, "div", 76)(6, "label", 77);
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 93)(10, "label", 77);
    \u0275\u0275text(11, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 93)(14, "label", 77);
    \u0275\u0275text(15, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 93)(18, "label", 77);
    \u0275\u0275text(19, "Confirm New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 93)(22, "label", 77);
    \u0275\u0275text(23, "Upload Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 76);
    \u0275\u0275element(25, "label", 77)(26, "input", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 94)(28, "label", 95);
    \u0275\u0275text(29, "Status :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 96);
    \u0275\u0275element(31, "input", 97);
    \u0275\u0275elementStart(32, "label", 98);
    \u0275\u0275text(33, " Active ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 99);
    \u0275\u0275element(35, "input", 100);
    \u0275\u0275elementStart(36, "label", 101);
    \u0275\u0275text(37, " InActive ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 89)(39, "a", 102);
    \u0275\u0275listener("click", function SuperAdminsComponent_ng_template_72_Template_a_click_39_listener() {
      const modal_r15 = \u0275\u0275restoreView(_r14).$implicit;
      return \u0275\u0275resetView(modal_r15.close("cross click"));
    });
    \u0275\u0275text(40, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 103);
    \u0275\u0275text(42, "Submit");
    \u0275\u0275elementEnd()();
  }
}
var ELEMENT_DATA = [
  { id: 1, img: "./assets/images/users/3.jpg", name: "Super Admin", email: "superadmin@gmail.com", registeredBy: "12-01-2021", statusText: "Active", status: "success" },
  { id: 2, img: "./assets/images/users/10.jpg", name: "Admin", email: "admin@gmail.com", registeredBy: "15-06-2021", statusText: "Active", status: "success" },
  { id: 3, img: "./assets/images/users/4.jpg", name: "Admin2", email: "admin123@gmail.com", registeredBy: "25-08-2020", statusText: "InActive", status: "danger" },
  { id: 4, img: "./assets/images/users/11.jpg", name: "Admin3", email: "admin456@gmail.com", registeredBy: "16-10-2020", statusText: "Active", status: "success" },
  { id: 5, img: "./assets/images/users/5.jpg", name: "Admin4", email: "admin156@gmail.com", registeredBy: "21-12-2020", statusText: "Active", status: "success" },
  { id: 6, img: "./assets/images/users/12.jpg", name: "Admin5", email: "admin957@gmail.com", registeredBy: "11-01-2020", statusText: "Active", status: "success" },
  { id: 7, img: "./assets/images/users/13.jpg", name: "Admin6", email: "admin209@gmail.com", registeredBy: "18-02-2020", statusText: "Active", status: "success" }
];
var _SuperAdminsComponent = class _SuperAdminsComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.displayedColumns = ["ID", "CompanyName", "Email", "RegisterDate", "Status", "Action"];
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
  open(content) {
    this.modalService.open(content, { windowClass: "modalCusSty" });
  }
  edit(editcontent) {
    this.modalService.open(editcontent, { windowClass: "modalCusSty" });
  }
};
_SuperAdminsComponent.\u0275fac = function SuperAdminsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SuperAdminsComponent)(\u0275\u0275directiveInject(NgbModal));
};
_SuperAdminsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperAdminsComponent, selectors: [["app-super-admins"]], viewQuery: function SuperAdminsComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 74, vars: 5, consts: [["input", ""], ["content", ""], ["editContent", ""], [1, "page-header", "d-xl-flex", "d-block"], [1, "page-leftheader"], [1, "page-title"], [1, "page-rightheader", "ms-md-auto"], [1, "d-flex", "align-items-end", "flex-wrap", "my-auto", "end-content", "breadcrumb-end"], [1, "btn-list", "d-flex", "gap-2"], ["toggle", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "fe", "fe-plus", "fs-15", "my-auto", "me-2"], ["placement", "top", "ngbTooltip", "E-mail", 1, "btn", "btn-light"], [1, "fe", "fe-mail"], ["placement", "top", "ngbTooltip", "Contact", 1, "btn", "btn-light"], [1, "fe", "fe-phone-call"], ["placement", "top", "ngbTooltip", "Info", 1, "btn", "btn-primary", "me-0"], [1, "fe", "fe-info"], [1, "row"], [1, "col-md-12"], [1, "card", "custom-card"], [1, "card-header", "d-flex", "justify-content-between", "border-bottom-0"], [1, "card-title"], [1, "card-body"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mt-2"], ["name", "quantity", "id", "select-countries17", "placeholder", "1", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], [1, "float-end"], ["type", "text", "placeholder", "search", "matInput", "", 1, "form-control", 3, "keyup"], [1, "table-responsive", "superadmins-table"], [1, ""], ["mat-table", "", "matSort", "", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom", 3, "dataSource"], ["matColumnDef", "ID"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "text-center", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "CompanyName"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Email"], ["matColumnDef", "RegisterDate"], ["matColumnDef", "Status"], ["matColumnDef", "Action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "text-center"], ["mat-cell", ""], ["href", "javascript:void(0);", 1, "d-flex"], [1, "avatar", "avatar-md", "avatar-rounded", "me-2"], ["alt", "img", 3, "src"], [1, "me-3", "mt-0", "mt-sm-2", "d-block"], [1, "mb-1", "fs-14"], ["mat-header-cell", ""], [1, "d-flex"], ["href", "javascript:void(0);", "placement", "top", "ngbTooltip", "View Task", 1, "action-btns1"], [1, "fe", "fe-eye", "text-primary"], ["placement", "top", "ngbTooltip", "View", 1, "action-btns1", 3, "click"], [1, "fe", "fe-edit-2", "text-success"], ["href", "javascript:;", "placement", "top", "ngbTooltip", "Delete", 1, "action-btns1", 3, "click"], [1, "fe", "fe-trash-2", "text-danger"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "nav-link"], [1, "modal-body"], [1, "form-group"], [1, "form-label"], ["type", "text", "placeholder", "Name", "value", "", 1, "form-control"], ["type", "text", "placeholder", "email", "value", "", 1, "form-control"], ["type", "password", "placeholder", "password", "value", "", 1, "form-control"], ["for", "form-label", 1, "form-label"], ["type", "file", 1, "form-control"], [1, "custom-controls-stacked", "d-md-flex"], [1, "form-label", "mt-1", "me-5"], [1, "custom-control", "custom-radio", "success", "me-4"], ["type", "radio", "name", "example-radios1", "value", "option1", 1, "custom-control-input"], [1, "custom-control-label"], ["type", "radio", "name", "example-radios1", "value", "option2", 1, "custom-control-input"], [1, "modal-footer"], ["href", "javascript:;", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", "me-2", 3, "click"], ["href", "javascript:;", 1, "btn", "btn-success", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "form-group", "mt-3"], [1, "custom-controls-stacked", "d-md-flex", "mt-3"], [1, "form-label", "me-5"], [1, "form-check", "mb-0", "me-4"], ["type", "radio", "name", "flexRadioDefault0", "id", "flexRadioDefault01", 1, "form-check-input"], ["for", "flexRadioDefault01", 1, "form-check-label"], [1, "form-check", "mb-0"], ["type", "radio", "name", "flexRadioDefault0", "id", "flexRadioDefault02", 1, "form-check-input"], ["for", "flexRadioDefault02", 1, "form-check-label"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], [1, "btn", "btn-success", "successful-notify"]], template: function SuperAdminsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h4", 5);
    \u0275\u0275text(3, "Super Admins");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "a", 9);
    \u0275\u0275listener("click", function SuperAdminsComponent_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const editContent_r2 = \u0275\u0275reference(73);
      return \u0275\u0275resetView(ctx.open(editContent_r2));
    });
    \u0275\u0275element(8, "i", 10);
    \u0275\u0275text(9, "Add New Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 11);
    \u0275\u0275element(11, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 13);
    \u0275\u0275element(13, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 15);
    \u0275\u0275element(15, "i", 16);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(16, "div", 17)(17, "div", 18)(18, "div", 19)(19, "div", 20)(20, "h4", 21);
    \u0275\u0275text(21, "Invoices");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 22)(23, "div", 17)(24, "div", 23)(25, "div", 24)(26, "span");
    \u0275\u0275text(27, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 25)(29, "div", 26)(30, "ng-select", 27)(31, "ng-option", 28);
    \u0275\u0275text(32, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ng-option", 29);
    \u0275\u0275text(34, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "ng-option", 30);
    \u0275\u0275text(36, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ng-option", 31);
    \u0275\u0275text(38, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 23)(42, "div", 32)(43, "input", 33, 0);
    \u0275\u0275listener("keyup", function SuperAdminsComponent_Template_input_keyup_43_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 34)(46, "div", 35)(47, "table", 36);
    \u0275\u0275elementContainerStart(48, 37);
    \u0275\u0275template(49, SuperAdminsComponent_th_49_Template, 2, 0, "th", 38)(50, SuperAdminsComponent_td_50_Template, 2, 1, "td", 39);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(51, 40);
    \u0275\u0275template(52, SuperAdminsComponent_th_52_Template, 2, 0, "th", 38)(53, SuperAdminsComponent_td_53_Template, 7, 2, "td", 41);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(54, 42);
    \u0275\u0275template(55, SuperAdminsComponent_th_55_Template, 2, 0, "th", 38)(56, SuperAdminsComponent_td_56_Template, 2, 1, "td", 41);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(57, 43);
    \u0275\u0275template(58, SuperAdminsComponent_th_58_Template, 2, 0, "th", 38)(59, SuperAdminsComponent_td_59_Template, 2, 1, "td", 41);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(60, 44);
    \u0275\u0275template(61, SuperAdminsComponent_th_61_Template, 2, 0, "th", 38)(62, SuperAdminsComponent_td_62_Template, 3, 4, "td", 41);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(63, 45);
    \u0275\u0275template(64, SuperAdminsComponent_th_64_Template, 2, 0, "th", 46)(65, SuperAdminsComponent_td_65_Template, 8, 0, "td", 41);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(66, SuperAdminsComponent_tr_66_Template, 1, 0, "tr", 47)(67, SuperAdminsComponent_tr_67_Template, 1, 0, "tr", 48)(68, SuperAdminsComponent_tr_68_Template, 3, 1, "tr", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "mat-paginator", 50);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(70, SuperAdminsComponent_ng_template_70_Template, 45, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(72, SuperAdminsComponent_ng_template_72_Template, 43, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275advance(47);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance(2);
    \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(4, _c0));
  }
}, dependencies: [SharedModule, MaterialModuleModule, MatInput, MatPaginator, MatSort, MatSortHeader, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, NgSelectModule, NgSelectComponent, NgOptionComponent, RouterModule] });
var SuperAdminsComponent = _SuperAdminsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperAdminsComponent, { className: "SuperAdminsComponent" });
})();
export {
  SuperAdminsComponent
};
//# sourceMappingURL=super-admins.component-FJCIPQ5C.js.map
