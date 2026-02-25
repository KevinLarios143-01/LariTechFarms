import {
  NgbModal,
  NgbModule,
  NgbTooltip
} from "./chunk-47LBZ5ZO.js";
import {
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/hrmdashboards/attendance/leave-settings/leave-settings.component.ts
function LeaveSettingsComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 28)(7, "a", 29);
    \u0275\u0275listener("click", function LeaveSettingsComponent_For_34_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      const content_r2 = \u0275\u0275reference(36);
      return \u0275\u0275resetView(ctx_r3.open(content_r2));
    });
    \u0275\u0275element(8, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 31);
    \u0275\u0275listener("click", function LeaveSettingsComponent_For_34_Template_a_click_9_listener() {
      const leave_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.remove(leave_r5.id));
    });
    \u0275\u0275element(10, "i", 32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const leave_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(leave_r5.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(leave_r5.number);
  }
}
function LeaveSettingsComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "h5", 34);
    \u0275\u0275text(2, "Add New Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 35);
    \u0275\u0275listener("click", function LeaveSettingsComponent_ng_template_35_Template_button_click_3_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 36)(5, "div", 37)(6, "label", 38);
    \u0275\u0275text(7, "Type Of Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 37)(10, "label", 38);
    \u0275\u0275text(11, "Number Of Days");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 41)(14, "a", 42);
    \u0275\u0275listener("click", function LeaveSettingsComponent_ng_template_35_Template_a_click_14_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.dismiss("Cross click"));
    });
    \u0275\u0275text(15, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 43);
    \u0275\u0275text(17, "Save");
    \u0275\u0275elementEnd()();
  }
}
function LeaveSettingsComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "h5", 34);
    \u0275\u0275text(2, "Add New Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 44);
    \u0275\u0275listener("click", function LeaveSettingsComponent_ng_template_39_Template_button_click_3_listener() {
      const modal_r9 = \u0275\u0275restoreView(_r8).$implicit;
      return \u0275\u0275resetView(modal_r9.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 36)(5, "div", 45)(6, "label", 38);
    \u0275\u0275text(7, "Type Of Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 37)(10, "label", 38);
    \u0275\u0275text(11, "Number Of Days");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 41)(14, "button", 46);
    \u0275\u0275listener("click", function LeaveSettingsComponent_ng_template_39_Template_button_click_14_listener() {
      const modal_r9 = \u0275\u0275restoreView(_r8).$implicit;
      return \u0275\u0275resetView(modal_r9.close("cross click"));
    });
    \u0275\u0275text(15, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 47);
    \u0275\u0275text(17, "Save");
    \u0275\u0275elementEnd()();
  }
}
var _LeaveSettingsComponent = class _LeaveSettingsComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.leaves = [
      {
        id: "1",
        type: "Casual Leaves",
        number: "14"
      },
      {
        id: "2",
        type: "Sick Leaves",
        number: "07"
      },
      {
        id: "3",
        type: "Maternity Leaves",
        number: "20"
      },
      {
        id: "4",
        type: "Paternity Leaves",
        number: "00"
      },
      {
        id: "5",
        type: "Annual Leaves",
        number: "00"
      },
      {
        id: "6",
        type: "Unpaid Leaves",
        number: "00"
      },
      {
        id: "7",
        type: "Other Leaves",
        number: "00"
      }
    ];
  }
  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content, { windowClass: "modalCusSty" });
  }
  remove(id) {
    const data = this.leaves.filter((x) => {
      return x.id != id;
    });
    this.leaves = data;
  }
};
_LeaveSettingsComponent.\u0275fac = function LeaveSettingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LeaveSettingsComponent)(\u0275\u0275directiveInject(NgbModal));
};
_LeaveSettingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaveSettingsComponent, selectors: [["app-leave-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 0, consts: [["content", ""], [1, "page-header", "d-xl-flex", "d-block"], [1, "page-leftheader"], [1, "page-title"], [1, "page-rightheader", "ms-md-auto"], [1, "d-flex", "align-items-end", "flex-wrap", "my-auto", "end-content", "breadcrumb-end"], [1, "btn-list"], ["toggle", "modal", 1, "btn", "btn-primary", "me-2", 3, "click"], ["placement", "top", "ngbTooltip", "E-mail", 1, "btn", "btn-light3", "me-2"], [1, "fe", "fe-mail"], ["placement", "top", "ngbTooltip", "Contact", 1, "btn", "btn-light3", "me-2"], [1, "fe", "fe-phone-call"], ["placement", "top", "ngbTooltip", "Info", 1, "btn", "btn-primary", "me-2"], [1, "fe", "fe-info"], [1, "row"], [1, "col-md-12"], [1, "card", "custom-card"], [1, "card-header", "border-0"], [1, "card-title"], [1, "card-body"], [1, "table-responsive"], ["id", "hr-leavestypes", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom"], [1, "border-bottom-0"], [1, "border-bottom-0", "text-center"], ["id", "addleavemodal", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "text-center", "fw-semibold"], [1, "d-flex"], ["href", "javascript:;", "toggle", "modal", 1, "action-btns1", 3, "click"], [1, "fe", "fe-eye", "primary", "text-primary"], ["href", "javascript:;", "toggle", "tooltip", "placement", "top", "ngbTooltip", "Delete", 1, "action-btns1", 3, "click"], [1, "fe", "fe-trash-2", "text-danger"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "form-group"], [1, "form-label"], ["placeholder", "Text", 1, "form-control"], ["type", "number", "placeholder", "Numbers", 1, "form-control"], [1, "modal-footer"], ["href", "javascript:;", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", "me-2", 3, "click"], ["href", "javascript:;", 1, "btn", "btn-success"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "form-group", "mb-3"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-primary"]], template: function LeaveSettingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h4", 3);
    \u0275\u0275text(3, "Leave Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "a", 7);
    \u0275\u0275listener("click", function LeaveSettingsComponent_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(36);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275text(8, "Add Leave Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 8);
    \u0275\u0275element(10, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 10);
    \u0275\u0275element(12, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 12);
    \u0275\u0275element(14, "i", 13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "div", 17)(19, "h4", 18);
    \u0275\u0275text(20, "Leaves Types");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 19)(22, "div", 20)(23, "table", 21)(24, "thead")(25, "tr")(26, "th", 22);
    \u0275\u0275text(27, "Leaves Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 23);
    \u0275\u0275text(29, "No.of Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 22);
    \u0275\u0275text(31, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "tbody");
    \u0275\u0275repeaterCreate(33, LeaveSettingsComponent_For_34_Template, 11, 2, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(35, LeaveSettingsComponent_ng_template_35_Template, 18, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(37, "div", 24)(38, "div", 25);
    \u0275\u0275template(39, LeaveSettingsComponent_ng_template_39_Template, 18, 0, "ng-template", 26, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(33);
    \u0275\u0275repeater(ctx.leaves);
  }
}, dependencies: [NgbModule, NgbTooltip, RouterModule] });
var LeaveSettingsComponent = _LeaveSettingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaveSettingsComponent, { className: "LeaveSettingsComponent" });
})();
export {
  LeaveSettingsComponent
};
//# sourceMappingURL=leave-settings.component-CURLS72Z.js.map
