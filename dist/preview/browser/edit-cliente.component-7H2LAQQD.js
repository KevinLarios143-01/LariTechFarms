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

// src/app/componets/dashbord/bussiness-dashboard/clientes/edit-cliente/edit-cliente.component.ts
function EditClienteComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 9)(2, "span", 10);
    \u0275\u0275text(3, "Cargando...");
    \u0275\u0275elementEnd()()();
  }
}
function EditClienteComponent_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("nombre"));
  }
}
function EditClienteComponent_Conditional_9_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("correo"));
  }
}
function EditClienteComponent_Conditional_9_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
}
function EditClienteComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11);
    \u0275\u0275listener("ngSubmit", function EditClienteComponent_Conditional_9_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "div", 13)(3, "label", 14);
    \u0275\u0275text(4, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 15);
    \u0275\u0275template(6, EditClienteComponent_Conditional_9_Conditional_6_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13)(8, "label", 14);
    \u0275\u0275text(9, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 13)(12, "label", 14);
    \u0275\u0275text(13, "Correo Electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 18);
    \u0275\u0275template(15, EditClienteComponent_Conditional_9_Conditional_15_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 13)(17, "label", 14);
    \u0275\u0275text(18, "NIT");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 20)(21, "label", 14);
    \u0275\u0275text(22, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "textarea", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 22)(25, "button", 23);
    \u0275\u0275template(26, EditClienteComponent_Conditional_9_Conditional_26_Template, 1, 0, "span", 24);
    \u0275\u0275element(27, "i", 25);
    \u0275\u0275text(28, " Actualizar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 26);
    \u0275\u0275element(30, "i", 27);
    \u0275\u0275text(31, " Cancelar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.clienteForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("nombre"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("nombre") ? 6 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("correo"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("correo") ? 15 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoading ? 26 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
  }
}
var _EditClienteComponent = class _EditClienteComponent {
  constructor(fb, clienteService, router, route, cdr, toastr) {
    this.fb = fb;
    this.clienteService = clienteService;
    this.router = router;
    this.route = route;
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
    this.clienteId = Number(this.route.snapshot.paramMap.get("id"));
    this.loadCliente();
  }
  loadCliente() {
    this.isLoading = true;
    this.clienteService.getClienteById(this.clienteId).subscribe({
      next: (response) => {
        if (response?.data) {
          const cliente = response.data;
          this.clienteForm.patchValue({
            nombre: cliente.nombre,
            telefono: cliente.telefono || "",
            correo: cliente.correo || "",
            direccion: cliente.direccion || "",
            nit: cliente.nit || ""
          });
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error("Error al cargar el cliente", "Error");
        this.router.navigate(["../list"], { relativeTo: this.route });
      }
    });
  }
  onSubmit() {
    if (this.clienteForm.valid) {
      this.isLoading = true;
      const formData = this.clienteForm.value;
      const updateData = {
        nombre: formData.nombre,
        telefono: formData.telefono || void 0,
        correo: formData.correo || void 0,
        direccion: formData.direccion || void 0,
        nit: formData.nit || void 0
      };
      this.clienteService.actualizarCliente(this.clienteId, updateData).subscribe({
        next: (response) => {
          this.toastr.success("Cliente actualizado exitosamente", "\xC9xito");
          setTimeout(() => {
            this.router.navigate(["/dashboard/bussiness-dashboard/clientes/list"]);
          }, 1e3);
        },
        error: (error) => {
          const errorMsg = error?.error?.message || "Error al actualizar cliente";
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
_EditClienteComponent.\u0275fac = function EditClienteComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EditClienteComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ClienteService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_EditClienteComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditClienteComponent, selectors: [["app-edit-cliente"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "text-center", "py-5"], [3, "formGroup"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [3, "ngSubmit", "formGroup"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], ["type", "text", "formControlName", "nombre", 1, "form-control"], [1, "invalid-feedback"], ["type", "text", "formControlName", "telefono", 1, "form-control"], ["type", "email", "formControlName", "correo", 1, "form-control"], ["type", "text", "formControlName", "nit", 1, "form-control"], [1, "col-md-12"], ["formControlName", "direccion", "rows", "3", 1, "form-control"], [1, "mt-4", "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "ri-save-line"], ["type", "button", "routerLink", "../list", 1, "btn", "btn-secondary", 3, "disabled"], [1, "ri-close-line"]], template: function EditClienteComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Editar Cliente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275template(8, EditClienteComponent_Conditional_8_Template, 4, 0, "div", 7)(9, EditClienteComponent_Conditional_9_Template, 32, 10, "form", 8);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx.isLoading && !ctx.clienteForm.value.nombre ? 8 : 9);
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, SharedModule], styles: ["\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.btn[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n/*# sourceMappingURL=edit-cliente.component.css.map */"] });
var EditClienteComponent = _EditClienteComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditClienteComponent, { className: "EditClienteComponent" });
})();
export {
  EditClienteComponent
};
//# sourceMappingURL=edit-cliente.component-7H2LAQQD.js.map
