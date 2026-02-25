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
  ActivatedRoute,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/production-dashboard/gastos-operacion/edit-gasto/edit-gasto.component.ts
function EditGastoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 9)(2, "span", 10);
    \u0275\u0275text(3, "Cargando...");
    \u0275\u0275elementEnd()()();
  }
}
function EditGastoComponent_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("fecha"));
  }
}
function EditGastoComponent_Conditional_9_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("categoria"));
  }
}
function EditGastoComponent_Conditional_9_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("descripcion"));
  }
}
function EditGastoComponent_Conditional_9_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("monto"));
  }
}
function EditGastoComponent_Conditional_9_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
  }
}
function EditGastoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11);
    \u0275\u0275listener("ngSubmit", function EditGastoComponent_Conditional_9_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "div", 13)(3, "label", 14);
    \u0275\u0275text(4, "Fecha *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 15);
    \u0275\u0275template(6, EditGastoComponent_Conditional_9_Conditional_6_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13)(8, "label", 14);
    \u0275\u0275text(9, "Categor\xEDa *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "ng-select", 17);
    \u0275\u0275template(11, EditGastoComponent_Conditional_9_Conditional_11_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 19)(13, "label", 14);
    \u0275\u0275text(14, "Descripci\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "textarea", 20);
    \u0275\u0275template(16, EditGastoComponent_Conditional_9_Conditional_16_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 13)(18, "label", 14);
    \u0275\u0275text(19, "Monto (Q) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 21);
    \u0275\u0275template(21, EditGastoComponent_Conditional_9_Conditional_21_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 13)(23, "label", 14);
    \u0275\u0275text(24, "M\xE9todo de Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "ng-select", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 23)(27, "button", 24);
    \u0275\u0275template(28, EditGastoComponent_Conditional_9_Conditional_28_Template, 1, 0, "span", 25);
    \u0275\u0275element(29, "i", 26);
    \u0275\u0275text(30, " Actualizar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 27);
    \u0275\u0275element(32, "i", 28);
    \u0275\u0275text(33, " Cancelar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.gastoForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("fecha"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("fecha") ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("categoria"));
    \u0275\u0275property("items", ctx_r1.categorias);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("categoria") ? 11 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("descripcion"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("descripcion") ? 16 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("monto"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("monto") ? 21 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.metodosPago)("clearable", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoading ? 28 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
  }
}
var _EditGastoComponent = class _EditGastoComponent {
  constructor(fb, gastoService, router, route, cdr, toastr) {
    this.fb = fb;
    this.gastoService = gastoService;
    this.router = router;
    this.route = route;
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
    this.gastoId = Number(this.route.snapshot.paramMap.get("id"));
    this.loadGasto();
  }
  loadGasto() {
    this.isLoading = true;
    this.gastoService.getGastoById(this.gastoId).subscribe({
      next: (response) => {
        if (response?.data) {
          const gasto = response.data;
          this.gastoForm.patchValue({
            fecha: gasto.fecha.split("T")[0],
            categoria: gasto.categoria,
            descripcion: gasto.descripcion,
            monto: gasto.monto,
            metodoPago: gasto.metodoPago || ""
          });
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error("Error al cargar el gasto", "Error");
        this.router.navigate(["../list"], { relativeTo: this.route });
      }
    });
  }
  onSubmit() {
    if (this.gastoForm.valid) {
      this.isLoading = true;
      const formData = this.gastoForm.value;
      const updateData = {
        fecha: formData.fecha,
        categoria: formData.categoria,
        descripcion: formData.descripcion,
        monto: parseFloat(formData.monto),
        metodoPago: formData.metodoPago || void 0
      };
      this.gastoService.updateGasto(this.gastoId, updateData).subscribe({
        next: (response) => {
          this.toastr.success("Gasto actualizado exitosamente", "\xC9xito");
          setTimeout(() => {
            this.router.navigate(["/dashboard/production-dashboard/gastos-operacion/list"]);
          }, 1e3);
        },
        error: (error) => {
          const errorMsg = error?.error?.message || "Error al actualizar gasto";
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
_EditGastoComponent.\u0275fac = function EditGastoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EditGastoComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(GastoOperacionService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_EditGastoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditGastoComponent, selectors: [["app-edit-gasto"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "text-center", "py-5"], [3, "formGroup"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [3, "ngSubmit", "formGroup"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], ["type", "date", "formControlName", "fecha", 1, "form-control"], [1, "invalid-feedback"], ["formControlName", "categoria", "placeholder", "Seleccione categor\xEDa", 3, "items"], [1, "invalid-feedback", "d-block"], [1, "col-md-12"], ["formControlName", "descripcion", "rows", "3", "placeholder", "Descripci\xF3n del gasto", 1, "form-control"], ["type", "number", "formControlName", "monto", "placeholder", "0.00", "step", "0.01", "min", "0.01", 1, "form-control"], ["formControlName", "metodoPago", "placeholder", "Seleccione m\xE9todo de pago", 3, "items", "clearable"], [1, "mt-4", "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "ri-save-line"], ["type", "button", "routerLink", "../list", 1, "btn", "btn-secondary", 3, "disabled"], [1, "ri-close-line"]], template: function EditGastoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Editar Gasto de Operaci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275template(8, EditGastoComponent_Conditional_8_Template, 4, 0, "div", 7)(9, EditGastoComponent_Conditional_9_Template, 34, 19, "form", 8);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx.isLoading && !ctx.gastoForm.value.fecha ? 8 : 9);
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, NgSelectModule, NgSelectComponent, SharedModule], styles: ["\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.btn[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n/*# sourceMappingURL=edit-gasto.component.css.map */"] });
var EditGastoComponent = _EditGastoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditGastoComponent, { className: "EditGastoComponent" });
})();
export {
  EditGastoComponent
};
//# sourceMappingURL=edit-gasto.component-W5DBV3QG.js.map
