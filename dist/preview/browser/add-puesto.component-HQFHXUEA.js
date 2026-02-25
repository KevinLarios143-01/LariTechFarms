import {
  PuestoService
} from "./chunk-I67CRWUW.js";
import "./chunk-7WSVHSJD.js";
import {
  HrDashboardPageHeaderComponent,
  SharedModule
} from "./chunk-UEAXMXBR.js";
import "./chunk-26H6NGLN.js";
import "./chunk-ZVXZDCDW.js";
import {
  ToastrService
} from "./chunk-KTQLQ7YR.js";
import "./chunk-ZSUERINM.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-47LBZ5ZO.js";
import {
  ActivatedRoute,
  Router,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/hrmdashboards/puestos/add-puesto/add-puesto.component.ts
function AddPuestoComponent_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "El nombre es requerido");
    \u0275\u0275elementEnd();
  }
}
function AddPuestoComponent_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "El nombre debe tener al menos 2 caracteres");
    \u0275\u0275elementEnd();
  }
}
function AddPuestoComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, AddPuestoComponent_Conditional_16_Conditional_1_Template, 2, 0, "small")(2, AddPuestoComponent_Conditional_16_Conditional_2_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.puestoForm.get("nombre")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.puestoForm.get("nombre")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]) ? 2 : -1);
  }
}
function AddPuestoComponent_Conditional_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "El salario debe ser mayor o igual a 0");
    \u0275\u0275elementEnd();
  }
}
function AddPuestoComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, AddPuestoComponent_Conditional_24_Conditional_1_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.puestoForm.get("salarioBase")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["min"]) ? 1 : -1);
  }
}
function AddPuestoComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
}
var _AddPuestoComponent = class _AddPuestoComponent {
  constructor(fb, router, route, puestoService, toastr) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.puestoService = puestoService;
    this.toastr = toastr;
    this.isLoading = false;
    this.isEditMode = false;
  }
  ngOnInit() {
    this.initForm();
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.isEditMode = true;
      this.puestoId = parseInt(id);
      this.loadPuesto();
    }
  }
  initForm() {
    this.puestoForm = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      descripcion: [""],
      salarioBase: ["", [Validators.min(0)]]
    });
  }
  loadPuesto() {
    if (!this.puestoId)
      return;
    this.isLoading = true;
    this.puestoService.getPuestoById(this.puestoId).subscribe({
      next: (response) => {
        if (response.success) {
          this.puestoForm.patchValue({
            nombre: response.data.nombre,
            descripcion: response.data.descripcion || "",
            salarioBase: response.data.salarioBase || ""
          });
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error al cargar puesto:", error);
        this.toastr.error("No se pudo cargar el puesto", "Error");
        this.isLoading = false;
        this.router.navigate(["/dashboard/hrmdashboards/puestos/puesto-list"]);
      }
    });
  }
  onSubmit() {
    if (this.puestoForm.valid) {
      this.isLoading = true;
      const formData = this.puestoForm.value;
      const observable = this.isEditMode && this.puestoId ? this.puestoService.updatePuesto(this.puestoId, formData) : this.puestoService.createPuesto(formData);
      observable.subscribe({
        next: (response) => {
          this.toastr.success(response.message || `Puesto ${this.isEditMode ? "actualizado" : "creado"} exitosamente`, "\xC9xito");
          this.router.navigate(["/dashboard/hrmdashboards/puestos/puesto-list"]);
        },
        error: (error) => {
          console.error("Error al guardar puesto:", error);
          const errorMessage = error.error?.error || "Error desconocido";
          this.toastr.error(`Error al guardar puesto: ${errorMessage}`, "Error");
          this.isLoading = false;
        }
      });
    } else {
      this.toastr.warning("Por favor, complete todos los campos requeridos", "Advertencia");
      this.markFormGroupTouched();
    }
  }
  onCancel() {
    this.router.navigate(["/dashboard/hrmdashboards/puestos/puesto-list"]);
  }
  markFormGroupTouched() {
    Object.keys(this.puestoForm.controls).forEach((key) => {
      const control = this.puestoForm.get(key);
      control?.markAsTouched();
    });
  }
};
_AddPuestoComponent.\u0275fac = function AddPuestoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddPuestoComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(PuestoService), \u0275\u0275directiveInject(ToastrService));
};
_AddPuestoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddPuestoComponent, selectors: [["app-add-puesto"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 14, consts: [[3, "title", "title2", "class1", "path"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row", "gy-4"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "nombre", "placeholder", "Ej: Gerente de Ventas", 1, "form-control"], [1, "text-danger", "mt-1"], [1, "input-group"], [1, "input-group-text"], ["type", "number", "formControlName", "salarioBase", "placeholder", "0.00", "step", "0.01", "min", "0", 1, "form-control"], ["formControlName", "descripcion", "rows", "4", "placeholder", "Descripci\xF3n del puesto, responsabilidades, etc.", 1, "form-control"], [1, "mt-4"], ["type", "submit", 1, "btn", "btn-primary", "me-2", 3, "disabled"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"]], template: function AddPuestoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "form", 7);
    \u0275\u0275listener("ngSubmit", function AddPuestoComponent_Template_form_ngSubmit_8_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "label", 10);
    \u0275\u0275text(12, "Nombre del Puesto ");
    \u0275\u0275elementStart(13, "span", 11);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 12);
    \u0275\u0275template(16, AddPuestoComponent_Conditional_16_Template, 3, 2, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 9)(18, "label", 10);
    \u0275\u0275text(19, "Salario Base");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 14)(21, "span", 15);
    \u0275\u0275text(22, "Q");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, AddPuestoComponent_Conditional_24_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 2)(26, "label", 10);
    \u0275\u0275text(27, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "textarea", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 18)(30, "button", 19);
    \u0275\u0275template(31, AddPuestoComponent_Conditional_31_Template, 1, 0, "span", 20);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 21);
    \u0275\u0275listener("click", function AddPuestoComponent_Template_button_click_33_listener() {
      return ctx.onCancel();
    });
    \u0275\u0275text(34, " Cancelar ");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    \u0275\u0275classMap("btn btn-secondary");
    \u0275\u0275property("title", ctx.isEditMode ? "Editar Puesto" : "Agregar Puesto")("title2", "Volver")("class1", "")("path", "/dashboard/hrmdashboards/puestos/puesto-list");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx.isEditMode ? "Editar" : "Nuevo", " Puesto");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.puestoForm);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(((tmp_7_0 = ctx.puestoForm.get("nombre")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.puestoForm.get("nombre")) == null ? null : tmp_7_0.touched) ? 16 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(((tmp_8_0 = ctx.puestoForm.get("salarioBase")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.puestoForm.get("salarioBase")) == null ? null : tmp_8_0.touched) ? 24 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Actualizar" : "Guardar", " Puesto ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isLoading);
  }
}, dependencies: [SharedModule, HrDashboardPageHeaderComponent, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ["\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.text-danger[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=add-puesto.component.css.map */"] });
var AddPuestoComponent = _AddPuestoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddPuestoComponent, { className: "AddPuestoComponent" });
})();
export {
  AddPuestoComponent
};
//# sourceMappingURL=add-puesto.component-HQFHXUEA.js.map
