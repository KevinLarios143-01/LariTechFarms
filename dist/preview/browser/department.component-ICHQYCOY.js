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
  NgbModule
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
  ɵɵproperty,
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

// src/app/componets/dashbord/hrmdashboards/department/department.component.ts
function DepartmentComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 22)(1, "th", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "a", 30);
    \u0275\u0275listener("click", function DepartmentComponent_For_41_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      const content1_r3 = \u0275\u0275reference(60);
      return \u0275\u0275resetView(ctx_r1.open(content1_r3));
    });
    \u0275\u0275element(7, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 32);
    \u0275\u0275listener("click", function DepartmentComponent_For_41_Template_a_click_8_listener() {
      const department_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.click(department_r4.id));
    });
    \u0275\u0275element(9, "i", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const department_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(department_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(department_r4.name);
  }
}
function DepartmentComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "h5", 35);
    \u0275\u0275text(2, "Editar Departmento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 36);
    \u0275\u0275listener("click", function DepartmentComponent_ng_template_59_Template_button_click_3_listener() {
      const modal_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(modal_r6.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 37)(5, "label", 38);
    \u0275\u0275text(6, " Editar Departmento ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 40)(9, "button", 41);
    \u0275\u0275listener("click", function DepartmentComponent_ng_template_59_Template_button_click_9_listener() {
      const modal_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(modal_r6.close("cross click"));
    });
    \u0275\u0275text(10, " Cerrar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 42);
    \u0275\u0275text(12, " Guardar ");
    \u0275\u0275elementEnd()();
  }
}
var _DepartmentComponent = class _DepartmentComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.departments = [
      { id: "#01", name: "Designing Department" },
      { id: "#02", name: "Development Department" },
      { id: "#03", name: "Marketing Department" },
      { id: "#04", name: "Human Resource Department" },
      { id: "#05", name: "Managers Department" },
      { id: "#06", name: "Application Department" },
      { id: "#07", name: "Support Department" },
      { id: "#08", name: "IT Department" },
      { id: "#09", name: "Technical Department" },
      { id: "#10", name: "Accounts Department" }
    ];
  }
  ngOnInit() {
  }
  open(content1) {
    this.modalService.open(content1, { windowClass: "modalCusSty" });
  }
  edit(editData, departmant) {
    this.modalService.open(editData, { backdrop: "static", windowClass: "modalCusSty" });
    this.departmantname = departmant.name;
    this.departmantid = departmant.id;
  }
  click(id) {
    const data = this.departments.filter((x) => {
      return x.id != id;
    });
    this.departments = data;
  }
};
_DepartmentComponent.\u0275fac = function DepartmentComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DepartmentComponent)(\u0275\u0275directiveInject(NgbModal));
};
_DepartmentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentComponent, selectors: [["app-department"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 61, vars: 6, consts: [["content1", ""], [3, "title", "title3", "class1", "path"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "row", "mb-2", "gap-1", "gap-lg-0"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mb-0"], ["name", "quantity", "id", "select-countries17", "data-trigger", "", "placeholder", "10", 1, "form-control", "wd-150", "p-0", "remove-ngbutton"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], [1, "float-end"], ["type", "text", "placeholder", "Buscar", 1, "form-control"], [1, "table-responsive"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap", "table-bordered", "border"], [1, "border-bottom"], [1, "mt-4"], [1, "pagination", "justify-content-end", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item", "active"], [1, "page-item"], ["scope", "row"], ["data-bs-toggle", "modal", "data-bs-target", "#editdepartmentmodal", 1, "btn", "btn-primary", "btn-icon", "me-1", 3, "click"], ["data-bs-toggle", "tooltip", "data-original-title", "Edit", 1, "fe", "fe-edit"], ["data-bs-toggle", "tooltip", "data-original-title", "Delete", 1, "btn", "btn-danger", "btn-icon", 3, "click"], [1, "fe", "fe-trash-2"], [1, "modal-header"], ["id", "exampleModalLabel1", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["for", "input-text11", 1, "form-label"], ["type", "text", "id", "input-text11", "placeholder", "Departments", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "button", 1, "btn", "btn-primary"]], template: function DepartmentComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h3", 6);
    \u0275\u0275text(6, "Resumen Departamentos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "span");
    \u0275\u0275text(12, "Mostrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "ng-select", 13)(16, "ng-option", 14);
    \u0275\u0275text(17, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ng-option", 15);
    \u0275\u0275text(19, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ng-option", 16);
    \u0275\u0275text(21, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ng-option", 17);
    \u0275\u0275text(23, "100");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "registros");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 9)(27, "div", 18);
    \u0275\u0275element(28, "input", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 20)(30, "table", 21)(31, "thead")(32, "tr", 22)(33, "th");
    \u0275\u0275text(34, "#ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36, "Nombre Departmento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "tbody");
    \u0275\u0275repeaterCreate(40, DepartmentComponent_For_41_Template, 10, 2, "tr", 22, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "nav", 23)(43, "ul", 24)(44, "li", 25)(45, "a", 26);
    \u0275\u0275text(46, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "li", 27)(48, "a", 26);
    \u0275\u0275text(49, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "li", 28)(51, "a", 26);
    \u0275\u0275text(52, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "li", 28)(54, "a", 26);
    \u0275\u0275text(55, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "li", 28)(57, "a", 26);
    \u0275\u0275text(58, "Next");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(59, DepartmentComponent_ng_template_59_Template, 13, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275classMap("");
    \u0275\u0275property("title", "Departamentos")("title3", "Agregar Departamentos")("class1", "btn btn-primary")("path", "");
    \u0275\u0275advance(40);
    \u0275\u0275repeater(ctx.departments);
  }
}, dependencies: [NgbModule, NgSelectModule, NgSelectComponent, NgOptionComponent, SharedModule, HrDashboardPageHeaderComponent, RouterModule] });
var DepartmentComponent = _DepartmentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentComponent, { className: "DepartmentComponent" });
})();
export {
  DepartmentComponent
};
//# sourceMappingURL=department.component-ICHQYCOY.js.map
