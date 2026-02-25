import {
  SuperAdminService
} from "./chunk-RUA4VPWV.js";
import "./chunk-7WSVHSJD.js";
import {
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
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/super-admin/subscription-plans/subscription-plans.component.ts
var _forTrack0 = ($index, $item) => $item.id_plan;
function SubscriptionPlansComponent_For_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 45);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 45);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 45);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 46);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 45)(19, "div", 47)(20, "a", 48);
    \u0275\u0275element(21, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 50);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_For_73_Template_a_click_22_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      const content_r2 = \u0275\u0275reference(92);
      return \u0275\u0275resetView(ctx_r3.open(content_r2));
    });
    \u0275\u0275element(23, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 52);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_For_73_Template_a_click_24_listener() {
      const plan_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deletePlan(plan_r5.id_plan));
    });
    \u0275\u0275element(25, "i", 53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const plan_r5 = ctx.$implicit;
    const \u0275$index_125_r6 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", (\u0275$index_125_r6 + 1).toString().padStart(2, "0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r5.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", plan_r5.precio_mensual, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", plan_r5.precio_mensual, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r5.limite_usuarios);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r5.limite_aves);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r5.limite_aves > 1e3 ? "Unlimited" : "Limited");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("bg-" + (plan_r5.nivel_prioridad > 0 ? "success" : "danger"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(plan_r5.nivel_prioridad > 0 ? "Enable" : "Disable");
  }
}
function SubscriptionPlansComponent_ng_template_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "h5", 55);
    \u0275\u0275text(2, "Add Package");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 56);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_ng_template_91_Template_button_click_3_listener() {
      const modal_r8 = \u0275\u0275restoreView(_r7).$implicit;
      return \u0275\u0275resetView(modal_r8.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(4, "span", 57);
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 58)(7, "div", 59)(8, "label", 60);
    \u0275\u0275text(9, "Package Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ng-select", 61)(11, "ng-option", 62);
    \u0275\u0275text(12, "Free");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ng-option", 28);
    \u0275\u0275text(14, "Basic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ng-option", 29);
    \u0275\u0275text(16, "Premium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ng-option", 30);
    \u0275\u0275text(18, "Advanced");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ng-option", 63);
    \u0275\u0275text(20, "Enterprise");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 59)(22, "label", 60);
    \u0275\u0275text(23, "Package Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ng-select", 61)(25, "ng-option", 62);
    \u0275\u0275text(26, "Monthly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ng-option", 28);
    \u0275\u0275text(28, "Yearly");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 15)(30, "div", 64)(31, "div", 59)(32, "label", 60);
    \u0275\u0275text(33, "Min Users");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 64)(36, "div", 59)(37, "label", 60);
    \u0275\u0275text(38, "Max Users");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 59)(41, "label", 60);
    \u0275\u0275text(42, "Storage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "ng-select", 67)(44, "ng-option", 62);
    \u0275\u0275text(45, "Limited");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "ng-option", 28);
    \u0275\u0275text(47, "Unlimited");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 59)(49, "label", 60);
    \u0275\u0275text(50, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "textarea", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 69)(53, "label", 70);
    \u0275\u0275text(54, "Status :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "label", 71);
    \u0275\u0275element(56, "input", 72);
    \u0275\u0275elementStart(57, "span", 73);
    \u0275\u0275text(58, "Enable");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "label", 71);
    \u0275\u0275element(60, "input", 74);
    \u0275\u0275elementStart(61, "span", 73);
    \u0275\u0275text(62, "Disable");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div", 75)(64, "a", 76);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_ng_template_91_Template_a_click_64_listener() {
      const modal_r8 = \u0275\u0275restoreView(_r7).$implicit;
      return \u0275\u0275resetView(modal_r8.dismiss("Cross click"));
    });
    \u0275\u0275text(65, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "a", 77);
    \u0275\u0275text(67, "Updated");
    \u0275\u0275elementEnd()();
  }
}
var _SubscriptionPlansComponent = class _SubscriptionPlansComponent {
  constructor(modalService, superAdminService) {
    this.modalService = modalService;
    this.superAdminService = superAdminService;
    this.plans = [];
  }
  ngOnInit() {
    this.loadPlans();
  }
  loadPlans() {
    this.superAdminService.getPlans().subscribe((plans) => {
      this.plans = plans;
    });
  }
  deletePlan(id) {
    this.superAdminService.deletePlan(id).subscribe(() => {
      this.loadPlans();
    });
  }
  open(content) {
    this.modalService.open(content, { windowClass: "modalCusSty" });
  }
};
_SubscriptionPlansComponent.\u0275fac = function SubscriptionPlansComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SubscriptionPlansComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(SuperAdminService));
};
_SubscriptionPlansComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionPlansComponent, selectors: [["app-subscription-plans"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 93, vars: 0, consts: [["content", ""], [1, "page-header", "d-xl-flex", "d-block"], [1, "page-leftheader"], [1, "page-title"], [1, "page-rightheader", "ms-md-auto"], [1, "d-flex", "align-items-end", "flex-wrap", "my-auto", "end-content", "breadcrumb-end"], [1, "btn-list", "d-flex", "gap-2"], ["toggle", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "fe", "fe-plus", "fs-15", "my-auto", "me-2"], ["placement", "top", "ngbTooltip", "E-mail", 1, "btn", "btn-light"], [1, "fe", "fe-mail"], ["placement", "top", "ngbTooltip", "Contact", 1, "btn", "btn-light"], [1, "fe", "fe-phone-call"], ["placement", "top", "ngbTooltip", "Info", 1, "btn", "btn-primary", "me-0"], [1, "fe", "fe-info"], [1, "row"], [1, "col-md-12"], [1, "card", "custom-card"], [1, "card-header", "d-flex", "justify-content-between", "border-bottom-0"], [1, "card-title"], [1, "card-body", "pt-0"], [1, "row", "my-3", "px-3"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mt-2"], ["name", "quantity", "id", "select-countries17", "placeholder", "1", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], [1, "float-end"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "table-responsive", "subscription-table"], ["id", "company-list", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom"], ["rowspan", "2", 1, "border-bottom-0", "w-5"], ["rowspan", "2", 1, "border-bottom-0"], ["colspan", "2", 1, "text-center"], [1, "border-bottom-0", "text-center"], [1, "mt-4"], [1, "pagination", "justify-content-end", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item", "active"], [1, "page-item"], [1, "text-center"], [1, "badge"], [1, "d-flex"], ["placement", "top", "ngbTooltip", "View", 1, "action-btns1"], [1, "fe", "fe-eye", "text-primary"], ["toggle", "modal", "target", "#editmodal", 1, "action-btns1", 3, "click"], ["placement", "top", "ngbTooltip", "Edit", 1, "fe", "fe-edit-2", "text-success"], ["placement", "top", "ngbTooltip", "Delete", 1, "action-btns1", 3, "click"], [1, "fe", "fe-trash-2", "text-danger"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "nav-link"], [1, "modal-body"], [1, "form-group"], [1, "form-label"], ["placeholder", "Select Package", 1, "form-control", "custom-select", "p-0"], ["value", "1"], ["value", "5"], [1, "col-md-6"], ["placeholder", "min", "value", "", 1, "form-control"], ["placeholder", "max", "value", "", 1, "form-control"], ["placeholder", "Select Storage", 1, ""], ["rows", "2", "placeholder", "something text here...", 1, "form-control"], [1, "custom-controls-stacked", "d-md-flex"], [1, "form-label", "mt-1", "me-5"], [1, "form-check", "custom-control", "custom-radio", "success", "me-4"], ["type", "radio", "name", "example-radios1", "value", "option1", 1, "form-check-input"], [1, "custom-control-label"], ["type", "radio", "name", "example-radios1", "value", "option2", 1, "form-check-input"], [1, "modal-footer"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", "me-2", 3, "click"], [1, "btn", "btn-success"]], template: function SubscriptionPlansComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h4", 3);
    \u0275\u0275text(3, "Subscriptions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "a", 7);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(92);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(8, "i", 8);
    \u0275\u0275text(9, "Add New Package");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 9);
    \u0275\u0275element(11, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 11);
    \u0275\u0275element(13, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 13);
    \u0275\u0275element(15, "i", 14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(16, "div", 15)(17, "div", 16)(18, "div", 17)(19, "div", 18)(20, "h4", 19);
    \u0275\u0275text(21, "Subscriptions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 20)(23, "div", 21)(24, "div", 22)(25, "div", 23)(26, "span");
    \u0275\u0275text(27, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 24)(29, "div", 25)(30, "ng-select", 26)(31, "ng-option", 27);
    \u0275\u0275text(32, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ng-option", 28);
    \u0275\u0275text(34, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "ng-option", 29);
    \u0275\u0275text(36, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ng-option", 30);
    \u0275\u0275text(38, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 22)(42, "div", 31);
    \u0275\u0275element(43, "input", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 33)(45, "table", 34)(46, "thead")(47, "tr")(48, "th", 35);
    \u0275\u0275text(49, "#NO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th", 36);
    \u0275\u0275text(51, "Package");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th", 37);
    \u0275\u0275text(53, "Package Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th", 37);
    \u0275\u0275text(55, "User Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th", 36);
    \u0275\u0275text(57, "Storage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th", 36);
    \u0275\u0275text(59, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th", 36);
    \u0275\u0275text(61, "Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "tr")(63, "th", 38);
    \u0275\u0275text(64, "Monthly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "th", 38);
    \u0275\u0275text(66, "Yearly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "th", 38);
    \u0275\u0275text(68, "Min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "th", 38);
    \u0275\u0275text(70, "Max");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "tbody");
    \u0275\u0275repeaterCreate(72, SubscriptionPlansComponent_For_73_Template, 26, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "nav", 39)(75, "ul", 40)(76, "li", 41)(77, "a", 42);
    \u0275\u0275text(78, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "li", 43)(80, "a", 42);
    \u0275\u0275text(81, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "li", 44)(83, "a", 42);
    \u0275\u0275text(84, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "li", 44)(86, "a", 42);
    \u0275\u0275text(87, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "li", 44)(89, "a", 42);
    \u0275\u0275text(90, "Next");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(91, SubscriptionPlansComponent_ng_template_91_Template, 68, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275advance(72);
    \u0275\u0275repeater(ctx.plans);
  }
}, dependencies: [SharedModule, NgSelectModule, NgSelectComponent, NgOptionComponent, NgbModule, NgbTooltip, RouterModule] });
var SubscriptionPlansComponent = _SubscriptionPlansComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionPlansComponent, { className: "SubscriptionPlansComponent" });
})();
export {
  SubscriptionPlansComponent
};
//# sourceMappingURL=subscription-plans.component-3UXANXBW.js.map
