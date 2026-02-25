import {
  ClienteService
} from "./chunk-SLCQH36Y.js";
import "./chunk-7WSVHSJD.js";
import {
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
  NgControlStatus,
  NgControlStatusGroup,
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

// src/app/componets/dashbord/bussiness-dashboard/clientes/add-cliente/add-cliente.component.ts
function AddClienteComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getFieldError("nombre"));
  }
}
function AddClienteComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getFieldError("correo"));
  }
}
function AddClienteComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
}
var _AddClienteComponent = class _AddClienteComponent {
  constructor(fb, clienteService, router, cdr, toastr) {
    this.fb = fb;
    this.clienteService = clienteService;
    this.router = router;
    this.cdr = cdr;
    this.toastr = toastr;
    this.isLoading = false;
    this.clienteForm = this.fb.group({
      nombre: ["", Validators.required],
      telefono: [""],
      correo: ["", Validators.email],
      direccion: [""],
      nit: [""]
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    if (this.clienteForm.valid) {
      this.isLoading = true;
      const formData = this.clienteForm.value;
      const createData = {
        nombre: formData.nombre,
        telefono: formData.telefono || void 0,
        correo: formData.correo || void 0,
        direccion: formData.direccion || void 0,
        nit: formData.nit || void 0
      };
      this.clienteService.crearCliente(createData).subscribe({
        next: (response) => {
          this.toastr.success("Cliente creado exitosamente", "\xC9xito");
          setTimeout(() => {
            this.router.navigate(["/dashboard/bussiness-dashboard/clientes/list"]);
          }, 1e3);
        },
        error: (error) => {
          const errorMsg = error?.error?.message || "Error al crear cliente";
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
    Object.keys(this.clienteForm.controls).forEach((key) => {
      const control = this.clienteForm.get(key);
      control?.markAsTouched();
    });
  }
  isFieldInvalid(fieldName) {
    const field = this.clienteForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  getFieldError(fieldName) {
    const field = this.clienteForm.get(fieldName);
    if (field?.errors) {
      if (field.errors["required"])
        return `${fieldName} es requerido`;
      if (field.errors["email"])
        return "Correo electr\xF3nico inv\xE1lido";
    }
    return "";
  }
};
_AddClienteComponent.\u0275fac = function AddClienteComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddClienteComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ClienteService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_AddClienteComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddClienteComponent, selectors: [["app-add-cliente"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 10, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], ["type", "text", "formControlName", "nombre", 1, "form-control"], [1, "invalid-feedback"], ["type", "text", "formControlName", "telefono", 1, "form-control"], ["type", "email", "formControlName", "correo", 1, "form-control"], ["type", "text", "formControlName", "nit", 1, "form-control"], [1, "col-md-12"], ["formControlName", "direccion", "rows", "3", 1, "form-control"], [1, "mt-4", "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "ri-save-line"], ["type", "button", "routerLink", "../list", 1, "btn", "btn-secondary", 3, "disabled"], [1, "ri-close-line"]], template: function AddClienteComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Agregar Cliente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "form", 7);
    \u0275\u0275listener("ngSubmit", function AddClienteComponent_Template_form_ngSubmit_8_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "label", 10);
    \u0275\u0275text(12, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 11);
    \u0275\u0275template(14, AddClienteComponent_Conditional_14_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 9)(16, "label", 10);
    \u0275\u0275text(17, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 9)(20, "label", 10);
    \u0275\u0275text(21, "Correo Electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 14);
    \u0275\u0275template(23, AddClienteComponent_Conditional_23_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 9)(25, "label", 10);
    \u0275\u0275text(26, "NIT");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 16)(29, "label", 10);
    \u0275\u0275text(30, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "textarea", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 18)(33, "button", 19);
    \u0275\u0275template(34, AddClienteComponent_Conditional_34_Template, 1, 0, "span", 20);
    \u0275\u0275element(35, "i", 21);
    \u0275\u0275text(36, " Guardar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 22);
    \u0275\u0275element(38, "i", 23);
    \u0275\u0275text(39, " Cancelar ");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.clienteForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("nombre"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isFieldInvalid("nombre") ? 14 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("correo"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isFieldInvalid("correo") ? 23 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 34 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.isLoading);
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, SharedModule], styles: ["\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.btn[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n/*# sourceMappingURL=add-cliente.component.css.map */"] });
var AddClienteComponent = _AddClienteComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddClienteComponent, { className: "AddClienteComponent" });
})();
export {
  AddClienteComponent
};
//# sourceMappingURL=add-cliente.component-AL5VY2MW.js.map
