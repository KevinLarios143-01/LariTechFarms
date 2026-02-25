import {
  HrDashboardPageHeaderComponent,
  SharedModule
} from "./chunk-UEAXMXBR.js";
import {
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import "./chunk-ZVXZDCDW.js";
import "./chunk-KTQLQ7YR.js";
import "./chunk-ZSUERINM.js";
import {
  NgbModal,
  NgbModule,
  NgbTooltip
} from "./chunk-47LBZ5ZO.js";
import {
  BehaviorSubject,
  RouterLink,
  RouterModule,
  of,
  take,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-AJH3MT3R.js";

// src/app/shared/services/leave.service.ts
var _LeavesService = class _LeavesService {
  // Example method that returns an Observable
  getLeaves() {
    return of([]);
  }
};
_LeavesService.\u0275fac = function LeavesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LeavesService)();
};
_LeavesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LeavesService, factory: _LeavesService.\u0275fac, providedIn: "root" });
var LeavesService = _LeavesService;

// src/app/componets/dashbord/hrmdashboards/attendance/leave-applications/leave-applications.component.ts
var _c0 = ["content"];
var _c1 = ["content1"];
function LeaveApplicationsComponent_For_268_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 83);
    \u0275\u0275listener("click", function LeaveApplicationsComponent_For_268_Conditional_26_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const leave_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.checked(leave_r3));
    });
    \u0275\u0275element(1, "i", 84);
    \u0275\u0275elementEnd();
  }
}
function LeaveApplicationsComponent_For_268_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 85);
    \u0275\u0275listener("click", function LeaveApplicationsComponent_For_268_Conditional_27_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const leave_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cancel(leave_r3));
    });
    \u0275\u0275element(1, "i", 86);
    \u0275\u0275elementEnd();
  }
}
function LeaveApplicationsComponent_For_268_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 53)(5, "span", 73);
    \u0275\u0275element(6, "img", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h6", 75);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 29);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "div", 76);
    \u0275\u0275template(26, LeaveApplicationsComponent_For_268_Conditional_26_Template, 2, 0, "a", 77)(27, LeaveApplicationsComponent_For_268_Conditional_27_Template, 2, 0, "a", 78);
    \u0275\u0275elementStart(28, "a", 79);
    \u0275\u0275listener("click", function LeaveApplicationsComponent_For_268_Template_a_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      const content_r6 = \u0275\u0275reference(287);
      return \u0275\u0275resetView(ctx_r3.open(content_r6));
    });
    \u0275\u0275element(29, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "a", 81);
    \u0275\u0275listener("click", function LeaveApplicationsComponent_For_268_Template_a_click_30_listener() {
      const leave_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.remove(leave_r3.id));
    });
    \u0275\u0275element(31, "i", 82);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const leave_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(leave_r3.id);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", leave_r3.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(leave_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(leave_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(leave_r3.from);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(leave_r3.to);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(leave_r3.days);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(leave_r3.reason);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(leave_r3.applied);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge bg-", leave_r3.bg, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(leave_r3.status);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(leave_r3.check ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(leave_r3.x ? 27 : -1);
  }
}
function LeaveApplicationsComponent_ng_template_286_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "h5", 88);
    \u0275\u0275text(2, "Leave Application");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 89);
    \u0275\u0275listener("click", function LeaveApplicationsComponent_ng_template_286_Template_button_click_3_listener() {
      const modal_r8 = \u0275\u0275restoreView(_r7).$implicit;
      return \u0275\u0275resetView(modal_r8.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 90)(5, "div", 55)(6, "label", 36);
    \u0275\u0275text(7, "Leave Letter:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "textarea", 91);
    \u0275\u0275text(9, "          Hi Sir/Madam.\n  \n          I am Faith Harris. I request you to grant me leave for 1day (16-01-2021) because some personal reason. I would back at work on 17-0-2021.\n  \n          Thanking you.\n  \n          Your's faithfully,\n          Faith Harris\n        ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 92)(11, "a", 93);
    \u0275\u0275listener("click", function LeaveApplicationsComponent_ng_template_286_Template_a_click_11_listener() {
      const modal_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.acceptLeave(modal_r8));
    });
    \u0275\u0275text(12, "Accept");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 94);
    \u0275\u0275listener("click", function LeaveApplicationsComponent_ng_template_286_Template_a_click_13_listener() {
      const modal_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.rejectLeave(modal_r8));
    });
    \u0275\u0275text(14, "Rejected");
    \u0275\u0275elementEnd()();
  }
}
function LeaveApplicationsComponent_ng_template_288_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "h5", 88);
    \u0275\u0275text(2, "Reply");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 89);
    \u0275\u0275listener("click", function LeaveApplicationsComponent_ng_template_288_Template_button_click_3_listener() {
      const modal_r10 = \u0275\u0275restoreView(_r9).$implicit;
      return \u0275\u0275resetView(modal_r10.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 90)(5, "div", 55)(6, "label", 36);
    \u0275\u0275text(7, "Reason:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "textarea", 95);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 96)(10, "div")(11, "a", 97);
    \u0275\u0275listener("click", function LeaveApplicationsComponent_ng_template_288_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goBack());
    });
    \u0275\u0275element(12, "i", 98);
    \u0275\u0275text(13, "Back ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 14)(15, "a", 99);
    \u0275\u0275listener("click", function LeaveApplicationsComponent_ng_template_288_Template_a_click_15_listener() {
      const modal_r10 = \u0275\u0275restoreView(_r9).$implicit;
      return \u0275\u0275resetView(modal_r10.close("cross click"));
    });
    \u0275\u0275text(16, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 100);
    \u0275\u0275listener("click", function LeaveApplicationsComponent_ng_template_288_Template_a_click_17_listener() {
      const modal_r10 = \u0275\u0275restoreView(_r9).$implicit;
      return \u0275\u0275resetView(modal_r10.close("cross click"));
    });
    \u0275\u0275text(18, "Submit");
    \u0275\u0275elementEnd()()();
  }
}
var _LeaveApplicationsComponent = class _LeaveApplicationsComponent {
  open(modal) {
    if (this.currentModal) {
      this.currentModal.close();
    }
    this.currentModal = this.modalService.open(modal, { windowClass: "modalCusSty" });
  }
  openLeaveApplication() {
    this.open(this.content);
  }
  openReplyModal() {
    this.open(this.content1);
  }
  acceptLeave(modal) {
    modal.close("accept");
  }
  rejectLeave(modal) {
    this.openReplyModal();
  }
  goBack() {
    this.openLeaveApplication();
  }
  ngOnInit() {
  }
  constructor(leavesService, modalService) {
    this.leavesService = leavesService;
    this.modalService = modalService;
    this.leaves = [
      {
        id: "#2987",
        name: "Faith Harris",
        src: "./assets/images/users/1.jpg",
        type: "Casual Leave",
        from: "16-01-2021",
        to: "16-01-2021",
        days: "1 Day",
        reason: "Personal",
        applied: "05-01-2021",
        status: "New",
        bg: "primary",
        check: true,
        x: true
      },
      {
        id: "#4987",
        name: "Austin Bell",
        src: "./assets/images/users/9.jpg",
        type: "Sick Leave",
        from: "14-01-2021",
        to: "15-01-2021",
        days: "2 Days",
        reason: "Going to Hospital",
        applied: "13-01-2021",
        status: "Approved",
        bg: "success",
        check: false,
        x: false
      },
      {
        id: "#6729",
        name: "Maria Bower",
        src: "./assets/images/users/2.jpg",
        type: "Casual Leave",
        from: "21-01-2021",
        to: "27-01-2021",
        days: "7 Days",
        reason: "Going to Family Trip",
        applied: "11-01-2021",
        status: "Pending",
        bg: "warning",
        check: true,
        x: true
      },
      {
        id: "#2098",
        name: "Peter Hill",
        src: "./assets/images/users/10.jpg",
        type: "Casual Leave",
        from: "05-01-2021",
        to: "05-01-2021",
        days: "1 Day",
        reason: "Personal",
        applied: "12-12-2020",
        status: "Approved",
        bg: "success",
        check: false,
        x: false
      },
      {
        id: "#1025",
        name: "Victoria Lyman",
        src: "./assets/images/users/3.jpg",
        type: "Medical Leave",
        from: "22-01-2021",
        to: "22-01-2021",
        days: "1 Day",
        reason: "Take Rest",
        applied: "21-01-2021",
        status: "Approved",
        bg: "success",
        check: false,
        x: false
      },
      {
        id: "#3262",
        name: "Adam Quinn",
        src: "./assets/images/users/11.jpg",
        type: "Casual Leave",
        from: "18-01-2021",
        to: "19-01-2021",
        days: "2 Days",
        reason: "Going to my Hometown",
        applied: "10-01-2021",
        status: "Pending",
        bg: "warning",
        check: true,
        x: true
      },
      {
        id: "#3489",
        name: "Melanie Coleman",
        src: "./assets/images/users/4.jpg",
        type: "Casual Leave",
        from: "11-01-2021",
        to: "11-01-2021",
        days: "1st Half Day",
        reason: "Going to Hosiptal",
        applied: "11-01-2021",
        status: "Rejected",
        bg: "danger",
        check: true,
        x: false
      },
      {
        id: "#3698",
        name: "Max Wilson",
        src: "./assets/images/users/12.jpg",
        type: "Medical Leave",
        from: "09-01-2021",
        to: "09-01-2021",
        days: "1 Day",
        reason: "Going to Hosiptal",
        applied: "08-01-2021",
        status: "Approved",
        bg: "success",
        check: false,
        x: false
      },
      {
        id: "#5612",
        name: "Amelia Russell",
        src: "./assets/images/users/5.jpg",
        type: "Casual Leave",
        from: "08-01-2021",
        to: "07-01-2021",
        days: "2 Days",
        reason: "Personal",
        applied: "25-12-2020",
        status: "Approved",
        bg: "success",
        check: false,
        x: false
      },
      {
        id: "#0245",
        name: "Justin Metcalfe",
        src: "./assets/images/users/13.jpg",
        type: "Casual Leave",
        from: "21-12-2020",
        to: "21-12-20201",
        days: "1 Day",
        reason: "Personal",
        applied: "19-12-2020",
        status: "Rejected",
        bg: "danger",
        check: true,
        x: false
      }
    ];
    this.leavesSubject = new BehaviorSubject([]);
    this.leaves$ = this.leavesSubject.asObservable();
    this.leavesService.getLeaves().subscribe((data) => this.leavesSubject.next(data));
  }
  checked(id) {
    this.leaves$.pipe(take(1)).subscribe((result) => {
      const updatedLeaves = result.map((leave) => {
        if (leave.id === id) {
          return __spreadProps(__spreadValues({}, leave), { check: false, x: false, status: "Approved", bg: "success" });
        }
        return leave;
      });
      this.leavesSubject.next(updatedLeaves);
    });
  }
  cancel(id) {
    this.leaves$.pipe(take(1)).subscribe((result) => {
      const updatedLeaves = result.map((leave) => {
        if (leave.id === id) {
          return __spreadProps(__spreadValues({}, leave), { check: false, x: false, status: "Rejected", bg: "danger" });
        }
        return leave;
      });
      this.leavesSubject.next(updatedLeaves);
    });
  }
  remove(id) {
    const data = this.leaves.filter((x) => {
      return x.id != id;
    });
    this.leaves = data;
  }
};
_LeaveApplicationsComponent.\u0275fac = function LeaveApplicationsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LeaveApplicationsComponent)(\u0275\u0275directiveInject(LeavesService), \u0275\u0275directiveInject(NgbModal));
};
_LeaveApplicationsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaveApplicationsComponent, selectors: [["app-leave-applications"]], viewQuery: function LeaveApplicationsComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7);
    \u0275\u0275viewQuery(_c1, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content1 = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 290, vars: 1, consts: [["content", ""], ["content1", ""], [3, "title"], [1, "row"], [1, "col-md-12"], [1, "card", "custom-card"], [1, "card-header", "border-bottom-0", "justify-content-between"], [1, "card-title"], [1, "card-options"], ["routerLink", "/dashboard/hrmdashboards/attendance/recent-leaves", 1, "btn", "btn-primary"], [1, "card-body"], [1, "col-xxl-3", "col-lg-6", "col-md-12"], [1, "card", "border", "p-0", "shadow-none"], [1, "card-header", "border-0"], [1, "ms-auto"], [1, "badge", "badge-md", "bg-warning-transparent"], [1, "d-flex", "p-3"], [1, "avatar", "avatar-lg"], ["src", "./assets/images/users/1.jpg", "alt", "", 1, "rounded-circle", "cover-image"], [1, "ps-3", "lh-1"], [1, "mb-0", "mt-1", "text-dark", "fs-18"], [1, "text-muted", "fs-12", "mt-1", "mb-0"], [1, "my-auto", "fs-9", "fw-normal", "ms-1", "me-1", "text-black-20"], [1, "card-body", "pt-2", "bg-light"], [1, "mt-3", "mb-3"], [1, "h5", "mb-1"], [1, "fe", "fe-calendar"], [1, "badge", "badge-md", "bg-primary-transparent"], [1, "text-muted", "fs-11"], [1, "fw-medium"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "progress-sm", "mb-2", "progress-animate"], [1, "progress-bar", "bg-success", 2, "width", "70%"], [1, "d-flex", "align-items-end", "justify-content-between", "mb-0"], [1, "fs-12", "mb-0"], [1, "fw-bold", "fs-12", "mb-0"], [1, "p-4"], [1, "form-label"], [1, "text-muted", "leave-text"], [1, "card-footer", "p-0", "border-top-0"], [1, "btn-group", "w-100", "leaves-btns"], ["href", "javascript:void(0);", 1, "btn", "btn-lg", "btn-outline-light", "w-50", "text-success", "rounded-0", "border-bottom-0", "border-end-0", "border-start-0"], ["href", "javascript:void(0);", 1, "btn", "btn-lg", "btn-outline-light", "w-55", "text-danger", "rounded-0", "border-bottom-0", "border-end-0"], ["src", "./assets/images/users/9.jpg", "alt", "", 1, "rounded-circle", "cover-image"], [1, "text-muted", "leave-to"], ["role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "progress-sm", "mb-2", "progress-animate"], [1, "progress-bar", "bg-success", 2, "width", "60%"], ["src", "./assets/images/users/2.jpg", "alt", "", 1, "rounded-circle", "cover-image"], ["role", "progressbar", "aria-valuenow", "80", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "progress-sm", "mb-2", "progress-animate"], [1, "progress-bar", "bg-success", 2, "width", "80%"], ["src", "./assets/images/users/10.jpg", "alt", "", 1, "rounded-circle", "cover-image"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "progress-sm", "mb-2", "progress-animate"], [1, "progress-bar", "bg-success", 2, "width", "75%"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group"], ["name", "quantity", "id", "select-countries17", "placeholder", "10", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], [1, "float-end"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "table-responsive"], [1, "table", "table-vcenter", "text-nowrap", "table-bordered"], [1, "border-bottom-0", "w-5"], [1, "border-bottom-0"], [1, "mt-4"], [1, "pagination", "justify-content-end", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item", "active"], [1, "page-item"], [1, "avatar", "avatar-sm", "me-2", "avatar-rounded"], ["alt", "img", 3, "src"], [1, "mb-0"], [1, "d-flex", "text-start"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Accept", 1, "action-btns1"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Rejected", 1, "action-btns1"], ["data-bs-toggle", "modal", "data-bs-target", "#leaveapplictionmodal", 1, "action-btns1", 3, "click"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "view", 1, "fe", "fe-eye", "text-primary"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Delete", 1, "action-btns1", 3, "click"], [1, "fe", "fe-trash-2", "text-danger"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Accept", 1, "action-btns1", 3, "click"], [1, "fe", "fe-check", "text-success"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Rejected", 1, "action-btns1", 3, "click"], [1, "fe", "fe-x", "text-danger"], [1, "modal-header"], [1, "modal-title"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["rows", "13", 1, "form-control"], [1, "modal-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-success", 3, "click"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#replymodal", "data-bs-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], ["rows", "5", "placeholder", "Some text here...", 1, "form-control"], [1, "modal-footer", "d-flex"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#leaveapplictionmodal", "data-bs-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], [1, "feather", "feather-arrow-left", "me-1"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"]], template: function LeaveApplicationsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 2);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "h5", 7);
    \u0275\u0275text(6, "Recent Earned Leave Applications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8)(8, "a", 9);
    \u0275\u0275text(9, "View All");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 10)(11, "div", 3)(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "h3", 7);
    \u0275\u0275text(16, "Earned Leave Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 14)(18, "span", 15);
    \u0275\u0275text(19, "3 days left");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 16)(21, "div")(22, "span", 17);
    \u0275\u0275element(23, "img", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 19)(25, "h5", 20);
    \u0275\u0275text(26, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 21);
    \u0275\u0275text(28, "Designing ");
    \u0275\u0275elementStart(29, "span", 22);
    \u0275\u0275text(30, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Web Designer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 23)(33, "div", 24)(34, "div", 25);
    \u0275\u0275element(35, "span", 26);
    \u0275\u0275text(36, " : 16-01-2021 ");
    \u0275\u0275elementStart(37, "span", 27);
    \u0275\u0275text(38, "1 day");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "small", 28);
    \u0275\u0275text(40, "Applied On: 05-01-2021 On");
    \u0275\u0275elementStart(41, "span", 29);
    \u0275\u0275text(42, " 5 weeks ago");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 30);
    \u0275\u0275element(44, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 32)(46, "h6", 33);
    \u0275\u0275text(47, "Remaining Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "h6", 34);
    \u0275\u0275text(49, "15");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 35)(51, "label", 36);
    \u0275\u0275text(52, "Reason:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p", 37);
    \u0275\u0275text(54, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 38)(56, "div", 39)(57, "a", 40);
    \u0275\u0275text(58, "Accept");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "a", 41);
    \u0275\u0275text(60, "Reject");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(61, "div", 11)(62, "div", 12)(63, "div", 13)(64, "h3", 7);
    \u0275\u0275text(65, "Earned Leave Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 14)(67, "span", 15);
    \u0275\u0275text(68, "5 days left");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 16)(70, "div")(71, "span", 17);
    \u0275\u0275element(72, "img", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 19)(74, "h5", 20);
    \u0275\u0275text(75, "Austin Bell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "p", 21);
    \u0275\u0275text(77, "Development ");
    \u0275\u0275elementStart(78, "span", 22);
    \u0275\u0275text(79, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275text(80, " Angular Developer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 23)(82, "div", 24)(83, "div", 25);
    \u0275\u0275element(84, "span", 26);
    \u0275\u0275text(85, " : 14-01-2021");
    \u0275\u0275elementStart(86, "span", 43);
    \u0275\u0275text(87, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, "15-01-2021 ");
    \u0275\u0275elementStart(89, "span", 27);
    \u0275\u0275text(90, "2 days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "small", 28);
    \u0275\u0275text(92, "Applied On: 13-01-2021 On");
    \u0275\u0275elementStart(93, "span", 29);
    \u0275\u0275text(94, " 3 weeks ago");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(95, "div", 44);
    \u0275\u0275element(96, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 32)(98, "h6", 33);
    \u0275\u0275text(99, "Remaining Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "h6", 34);
    \u0275\u0275text(101, "18");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(102, "div", 35)(103, "label", 36);
    \u0275\u0275text(104, "Reason:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "p", 37);
    \u0275\u0275text(106, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 38)(108, "div", 39)(109, "a", 40);
    \u0275\u0275text(110, "Accept");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "a", 41);
    \u0275\u0275text(112, "Reject");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(113, "div", 11)(114, "div", 12)(115, "div", 13)(116, "h3", 7);
    \u0275\u0275text(117, "Earned Leave Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "div", 14)(119, "span", 15);
    \u0275\u0275text(120, "5 days left");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(121, "div", 16)(122, "div")(123, "span", 17);
    \u0275\u0275element(124, "img", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "div", 19)(126, "h5", 20);
    \u0275\u0275text(127, "Maria Bower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "p", 21);
    \u0275\u0275text(129, "Marketing ");
    \u0275\u0275elementStart(130, "span", 22);
    \u0275\u0275text(131, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275text(132, " Marketing analyst");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(133, "div", 23)(134, "div", 24)(135, "div", 25);
    \u0275\u0275element(136, "span", 26);
    \u0275\u0275text(137, " : 21-01-2021");
    \u0275\u0275elementStart(138, "span", 43);
    \u0275\u0275text(139, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275text(140, "27-01-2021 ");
    \u0275\u0275elementStart(141, "span", 27);
    \u0275\u0275text(142, "7 days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "small", 28);
    \u0275\u0275text(144, "Applied On: 11-01-2021 On");
    \u0275\u0275elementStart(145, "span", 29);
    \u0275\u0275text(146, " 3 weeks ago");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(147, "div", 47);
    \u0275\u0275element(148, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "div", 32)(150, "h6", 33);
    \u0275\u0275text(151, "Remaining Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "h6", 34);
    \u0275\u0275text(153, "10");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(154, "div", 35)(155, "label", 36);
    \u0275\u0275text(156, "Reason:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "p", 37);
    \u0275\u0275text(158, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(159, "div", 38)(160, "div", 39)(161, "a", 40);
    \u0275\u0275text(162, "Accept");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "a", 41);
    \u0275\u0275text(164, "Reject");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(165, "div", 11)(166, "div", 12)(167, "div", 13)(168, "h3", 7);
    \u0275\u0275text(169, "Earned Leave Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "div", 14)(171, "span", 15);
    \u0275\u0275text(172, "1 day left");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(173, "div", 16)(174, "div")(175, "span", 17);
    \u0275\u0275element(176, "img", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(177, "div", 19)(178, "h5", 20);
    \u0275\u0275text(179, "Peter Hill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "p", 21);
    \u0275\u0275text(181, "IT ");
    \u0275\u0275elementStart(182, "span", 22);
    \u0275\u0275text(183, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275text(184, " Testor");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(185, "div", 23)(186, "div", 24)(187, "div", 25);
    \u0275\u0275element(188, "span", 26);
    \u0275\u0275text(189, " : 05-01-2021 ");
    \u0275\u0275elementStart(190, "span", 27);
    \u0275\u0275text(191, "1 day");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(192, "small", 28);
    \u0275\u0275text(193, "Applied On: 12-12-2020 On");
    \u0275\u0275elementStart(194, "span", 29);
    \u0275\u0275text(195, " 3 weeks ago");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(196, "div", 50);
    \u0275\u0275element(197, "div", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(198, "div", 32)(199, "h6", 33);
    \u0275\u0275text(200, "Remaining Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(201, "h6", 34);
    \u0275\u0275text(202, "12");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(203, "div", 35)(204, "label", 36);
    \u0275\u0275text(205, "Reason:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(206, "p", 37);
    \u0275\u0275text(207, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(208, "div", 38)(209, "div", 39)(210, "a", 40);
    \u0275\u0275text(211, "Accept");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(212, "a", 41);
    \u0275\u0275text(213, "Reject");
    \u0275\u0275elementEnd()()()()()()()()()();
    \u0275\u0275elementStart(214, "div", 3)(215, "div", 4)(216, "div", 5)(217, "div", 13)(218, "h5", 7);
    \u0275\u0275text(219, "Leaves Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(220, "div", 10)(221, "div", 3)(222, "div", 52)(223, "div", 53)(224, "span");
    \u0275\u0275text(225, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(226, "div", 54)(227, "div", 55)(228, "ng-select", 56)(229, "ng-option", 57);
    \u0275\u0275text(230, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(231, "ng-option", 58);
    \u0275\u0275text(232, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(233, "ng-option", 59);
    \u0275\u0275text(234, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(235, "ng-option", 60);
    \u0275\u0275text(236, "100");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(237, "span");
    \u0275\u0275text(238, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(239, "div", 52)(240, "div", 61);
    \u0275\u0275element(241, "input", 62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(242, "div", 63)(243, "table", 64)(244, "thead")(245, "tr")(246, "th", 65);
    \u0275\u0275text(247, "#Emp ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(248, "th", 65);
    \u0275\u0275text(249, "Emp Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(250, "th", 66);
    \u0275\u0275text(251, "Leave Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(252, "th", 66);
    \u0275\u0275text(253, "From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(254, "th", 66);
    \u0275\u0275text(255, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(256, "th", 66);
    \u0275\u0275text(257, "Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(258, "th", 66);
    \u0275\u0275text(259, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(260, "th", 66);
    \u0275\u0275text(261, "Applied on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(262, "th", 66);
    \u0275\u0275text(263, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(264, "th", 66);
    \u0275\u0275text(265, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(266, "tbody");
    \u0275\u0275repeaterCreate(267, LeaveApplicationsComponent_For_268_Template, 32, 15, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(269, "nav", 67)(270, "ul", 68)(271, "li", 69)(272, "a", 70);
    \u0275\u0275text(273, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(274, "li", 71)(275, "a", 70);
    \u0275\u0275text(276, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(277, "li", 72)(278, "a", 70);
    \u0275\u0275text(279, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(280, "li", 72)(281, "a", 70);
    \u0275\u0275text(282, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(283, "li", 72)(284, "a", 70);
    \u0275\u0275text(285, "Next");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(286, LeaveApplicationsComponent_ng_template_286_Template, 15, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(288, LeaveApplicationsComponent_ng_template_288_Template, 19, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("title", "Leave Applications");
    \u0275\u0275advance(267);
    \u0275\u0275repeater(ctx.leaves);
  }
}, dependencies: [NgbModule, NgbTooltip, SharedModule, HrDashboardPageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, RouterModule, RouterLink] });
var LeaveApplicationsComponent = _LeaveApplicationsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaveApplicationsComponent, { className: "LeaveApplicationsComponent" });
})();
export {
  LeaveApplicationsComponent
};
//# sourceMappingURL=leave-applications.component-JPALXHJU.js.map
