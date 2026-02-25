import {
  SuperAdminService
} from "./chunk-RUA4VPWV.js";
import "./chunk-7WSVHSJD.js";
import {
  HrDashboardPageHeaderComponent,
  SharedModule
} from "./chunk-UEAXMXBR.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import "./chunk-ZVXZDCDW.js";
import {
  ToastrService
} from "./chunk-KTQLQ7YR.js";
import "./chunk-ZSUERINM.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-47LBZ5ZO.js";
import {
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/super-admin/modules/modules.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ModulesComponent_Conditional_14_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 13)(1, "th", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "button", 17);
    \u0275\u0275listener("click", function ModulesComponent_Conditional_14_For_21_Template_button_click_9_listener() {
      const module_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleModule(module_r2.id, module_r2.isEnabled));
    });
    \u0275\u0275element(10, "i");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const module_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(module_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(module_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(module_r2.isEnabled ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", module_r2.isEnabled ? "Habilitado" : "Deshabilitado", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(module_r2.isEnabled ? "btn-warning" : "btn-success");
    \u0275\u0275advance();
    \u0275\u0275classMap(module_r2.isEnabled ? "fe fe-x" : "fe fe-check");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", module_r2.isEnabled ? "Deshabilitar" : "Habilitar", " ");
  }
}
function ModulesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h3", 5);
    \u0275\u0275text(5, "M\xF3dulos Disponibles");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6)(7, "div", 11)(8, "table", 12)(9, "thead")(10, "tr", 13)(11, "th", 14);
    \u0275\u0275text(12, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 14);
    \u0275\u0275text(14, "Nombre del M\xF3dulo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 14);
    \u0275\u0275text(16, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 14);
    \u0275\u0275text(18, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, ModulesComponent_Conditional_14_For_21_Template, 12, 10, "tr", 13, _forTrack0);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r2.modules);
  }
}
function ModulesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 18)(2, "div", 19)(3, "span", 20);
    \u0275\u0275text(4, "Cargando...");
    \u0275\u0275elementEnd()()()();
  }
}
var _ModulesComponent = class _ModulesComponent {
  constructor(superAdminService, toastr) {
    this.superAdminService = superAdminService;
    this.toastr = toastr;
    this.tenants = [];
    this.selectedTenantId = null;
    this.modules = [];
    this.loading = false;
  }
  ngOnInit() {
    this.loadTenants();
  }
  loadTenants() {
    this.superAdminService.getCompanies().subscribe({
      next: (companies) => {
        this.tenants = companies;
      },
      error: (error) => {
        this.toastr.error("Error al cargar las empresas", "Error");
        console.error(error);
      }
    });
  }
  onTenantChange(tenantId) {
    this.selectedTenantId = tenantId;
    this.loadModules(tenantId);
  }
  loadModules(tenantId) {
    this.loading = true;
    this.superAdminService.getEnabledModules(tenantId).subscribe({
      next: (response) => {
        this.modules = response.data?.modules || [];
        this.loading = false;
      },
      error: (error) => {
        this.toastr.error("Error al cargar los m\xF3dulos", "Error");
        console.error(error);
        this.loading = false;
      }
    });
  }
  toggleModule(moduleId, currentStatus) {
    if (!this.selectedTenantId)
      return;
    const newStatus = !currentStatus;
    const module = this.modules.find((m) => m.id === moduleId);
    if (module) {
      module.isEnabled = newStatus;
    }
    this.superAdminService.updateModuleStatus(this.selectedTenantId, moduleId, newStatus).subscribe({
      next: (response) => {
        this.toastr.success("M\xF3dulo actualizado correctamente", "\xC9xito");
      },
      error: (error) => {
        if (module) {
          module.isEnabled = currentStatus;
        }
        this.toastr.error("Error al actualizar el m\xF3dulo", "Error");
        console.error(error);
      }
    });
  }
};
_ModulesComponent.\u0275fac = function ModulesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModulesComponent)(\u0275\u0275directiveInject(SuperAdminService), \u0275\u0275directiveInject(ToastrService));
};
_ModulesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModulesComponent, selectors: [["app-modules"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 10, consts: [[3, "title", "title2", "class1", "path"], [1, "row"], [1, "col-md-12"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], ["placeholder", "Seleccione una empresa", "bindValue", "id", "bindLabel", "name", 1, "form-control", "custom-select", "p-0", 3, "ngModelChange", "ngModel", "items"], [1, "table-responsive"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap", "table-bordered", "border"], [1, "border-bottom"], ["scope", "col"], ["scope", "row"], [1, "badge"], [1, "btn", "btn-sm", 3, "click"], [1, "col-md-12", "text-center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"]], template: function ModulesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
    \u0275\u0275text(6, "Seleccionar Empresa");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "div", 1)(9, "div", 7)(10, "div", 8)(11, "label", 9);
    \u0275\u0275text(12, "Empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ng-select", 10);
    \u0275\u0275twoWayListener("ngModelChange", function ModulesComponent_Template_ng_select_ngModelChange_13_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedTenantId, $event) || (ctx.selectedTenantId = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function ModulesComponent_Template_ng_select_ngModelChange_13_listener($event) {
      return ctx.onTenantChange($event);
    });
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(14, ModulesComponent_Conditional_14_Template, 22, 0, "div", 1)(15, ModulesComponent_Conditional_15_Template, 5, 0, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275classMap("d-none");
    \u0275\u0275property("title", "Gesti\xF3n de M\xF3dulos")("title2", "")("class1", "")("path", "");
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedTenantId);
    \u0275\u0275property("items", ctx.tenants);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.selectedTenantId && !ctx.loading ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loading ? 15 : -1);
  }
}, dependencies: [SharedModule, HrDashboardPageHeaderComponent, RouterModule, NgSelectModule, NgSelectComponent, FormsModule, NgControlStatus, NgModel], styles: ["\n\n.icon1[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=modules.component.css.map */"] });
var ModulesComponent = _ModulesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModulesComponent, { className: "ModulesComponent" });
})();
export {
  ModulesComponent
};
//# sourceMappingURL=modules.component-6EU6TIAH.js.map
