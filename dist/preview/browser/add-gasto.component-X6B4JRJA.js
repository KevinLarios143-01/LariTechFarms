import {
  GastoOperacionService
} from "./chunk-PUFVTQBG.js";
import "./chunk-7WSVHSJD.js";
import {
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
  ChangeDetectorRef,
  CommonModule,
  Router,
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵtextInterpolate
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/production-dashboard/gastos-operacion/add-gasto/add-gasto.component.ts
function AddGastoComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getFieldError("fecha"));
  }
}
function AddGastoComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getFieldError("categoria"));
  }
}
function AddGastoComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getFieldError("descripcion"));
  }
}
function AddGastoComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getFieldError("monto"));
  }
}
function AddGastoComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
}
var _AddGastoComponent = class _AddGastoComponent {
  constructor(fb, gastoService, router, cdr, toastr) {
    this.fb = fb;
    this.gastoService = gastoService;
    this.router = router;
    this.cdr = cdr;
    this.toastr = toastr;
    this.isLoading = false;
    this.categorias = ["Mantenimiento", "Servicios", "Insumos", "Personal", "Transporte", "Limpieza", "Combustible", "Medicamentos"];
    this.metodosPago = ["Efectivo", "Transferencia", "Tarjeta", "Cheque"];
    this.gastoForm = this.fb.group({
      fecha: ["", Validators.required],
      categoria: ["", Validators.required],
      descripcion: ["", Validators.required],
      monto: ["", [Validators.required, Validators.min(0.01)]],
      metodoPago: [""]
    });
  }
  ngOnInit() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.gastoForm.patchValue({ fecha: today });
  }
  onSubmit() {
    if (this.gastoForm.valid) {
      this.isLoading = true;
      const formData = this.gastoForm.value;
      const createData = {
        fecha: formData.fecha,
        categoria: formData.categoria,
        descripcion: formData.descripcion,
        monto: parseFloat(formData.monto),
        metodoPago: formData.metodoPago || void 0
      };
      this.gastoService.createGasto(createData).subscribe({
        next: (response) => {
          this.toastr.success("Gasto registrado exitosamente", "\xC9xito");
          setTimeout(() => {
            this.router.navigate(["/dashboard/production-dashboard/gastos-operacion/list"]);
          }, 1e3);
        },
        error: (error) => {
          const errorMsg = error?.error?.message || "Error al registrar gasto";
          this.toastr.error(errorMsg, "Error");
          this.isLoading = false;
          this.cdr.detectChanges();
        }
      });
    } else {
      this.markFormGroupTouched();
      this.toastr.warning("Por favor complete todos los campos requeridos", "Advertencia");
    }
  }
  markFormGroupTouched() {
    Object.keys(this.gastoForm.controls).forEach((key) => {
      const control = this.gastoForm.get(key);
      control?.markAsTouched();
    });
  }
  isFieldInvalid(fieldName) {
    const field = this.gastoForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  getFieldError(fieldName) {
    const field = this.gastoForm.get(fieldName);
    if (field?.errors) {
      if (field.errors["required"])
        return `${fieldName} es requerido`;
      if (field.errors["min"])
        return `${fieldName} debe ser mayor o igual a ${field.errors["min"].min}`;
    }
    return "";
  }
};
_AddGastoComponent.\u0275fac = function AddGastoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddGastoComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(GastoOperacionService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_AddGastoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddGastoComponent, selectors: [["app-add-gasto"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 19, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], ["type", "date", "formControlName", "fecha", 1, "form-control"], [1, "invalid-feedback"], ["formControlName", "categoria", "placeholder", "Seleccione categor\xEDa", 3, "items"], [1, "invalid-feedback", "d-block"], [1, "col-md-12"], ["formControlName", "descripcion", "rows", "3", "placeholder", "Descripci\xF3n del gasto", 1, "form-control"], ["type", "number", "formControlName", "monto", "placeholder", "0.00", "step", "0.01", "min", "0.01", 1, "form-control"], ["formControlName", "metodoPago", "placeholder", "Seleccione m\xE9todo de pago", 3, "items", "clearable"], [1, "mt-4", "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "ri-save-line"], ["type", "button", "routerLink", "../list", 1, "btn", "btn-secondary", 3, "disabled"], [1, "ri-close-line"]], template: function AddGastoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Registrar Gasto de Operaci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "form", 7);
    \u0275\u0275listener("ngSubmit", function AddGastoComponent_Template_form_ngSubmit_8_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "label", 10);
    \u0275\u0275text(12, "Fecha *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 11);
    \u0275\u0275template(14, AddGastoComponent_Conditional_14_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 9)(16, "label", 10);
    \u0275\u0275text(17, "Categor\xEDa *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "ng-select", 13);
    \u0275\u0275template(19, AddGastoComponent_Conditional_19_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 15)(21, "label", 10);
    \u0275\u0275text(22, "Descripci\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "textarea", 16);
    \u0275\u0275template(24, AddGastoComponent_Conditional_24_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 9)(26, "label", 10);
    \u0275\u0275text(27, "Monto (Q) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 17);
    \u0275\u0275template(29, AddGastoComponent_Conditional_29_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 9)(31, "label", 10);
    \u0275\u0275text(32, "M\xE9todo de Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "ng-select", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 19)(35, "button", 20);
    \u0275\u0275template(36, AddGastoComponent_Conditional_36_Template, 1, 0, "span", 21);
    \u0275\u0275element(37, "i", 22);
    \u0275\u0275text(38, " Guardar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 23);
    \u0275\u0275element(40, "i", 24);
    \u0275\u0275text(41, " Cancelar ");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.gastoForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("fecha"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isFieldInvalid("fecha") ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("categoria"));
    \u0275\u0275property("items", ctx.categorias);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isFieldInvalid("categoria") ? 19 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("descripcion"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isFieldInvalid("descripcion") ? 24 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("monto"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isFieldInvalid("monto") ? 29 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx.metodosPago)("clearable", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 36 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.isLoading);
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, NgSelectModule, NgSelectComponent, SharedModule], styles: ["\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.btn[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n/*# sourceMappingURL=add-gasto.component.css.map */"] });
var AddGastoComponent = _AddGastoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddGastoComponent, { className: "AddGastoComponent" });
})();
export {
  AddGastoComponent
};
//# sourceMappingURL=add-gasto.component-X6B4JRJA.js.map
