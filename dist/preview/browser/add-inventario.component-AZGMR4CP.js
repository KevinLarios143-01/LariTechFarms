import {
  InventarioService
} from "./chunk-ZVS7OPM7.js";
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

// src/app/componets/dashbord/production-dashboard/inventario/add-inventario/add-inventario.component.ts
function AddInventarioComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getFieldError("nombre"));
  }
}
function AddInventarioComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getFieldError("cantidad"));
  }
}
function AddInventarioComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getFieldError("unidad"));
  }
}
function AddInventarioComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getFieldError("minimoStock"));
  }
}
function AddInventarioComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 26);
  }
}
var _AddInventarioComponent = class _AddInventarioComponent {
  constructor(fb, inventarioService, router, cdr, toastr) {
    this.fb = fb;
    this.inventarioService = inventarioService;
    this.router = router;
    this.cdr = cdr;
    this.toastr = toastr;
    this.categorias = [];
    this.isLoading = false;
    this.unidades = ["kg", "g", "L", "ml", "unidad", "caja", "saco", "dosis", "paquete"];
    this.inventarioForm = this.fb.group({
      nombre: ["", Validators.required],
      cantidad: ["", [Validators.required, Validators.min(0)]],
      unidad: ["", Validators.required],
      categoria: [""],
      minimoStock: ["", Validators.min(0)],
      proveedor: [""],
      observaciones: [""]
    });
  }
  ngOnInit() {
    this.loadCategorias();
  }
  loadCategorias() {
    this.inventarioService.getCategorias().subscribe({
      next: (response) => {
        this.categorias = response.data || [];
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error al cargar categor\xEDas:", error);
      }
    });
  }
  onSubmit() {
    if (this.inventarioForm.valid) {
      this.isLoading = true;
      const formData = this.inventarioForm.value;
      const createData = {
        nombre: formData.nombre,
        cantidad: parseFloat(formData.cantidad),
        unidad: formData.unidad,
        categoria: formData.categoria || void 0,
        minimoStock: formData.minimoStock ? parseFloat(formData.minimoStock) : void 0,
        proveedor: formData.proveedor || void 0,
        observaciones: formData.observaciones || void 0
      };
      this.inventarioService.createInventario(createData).subscribe({
        next: (response) => {
          this.toastr.success("Item agregado al inventario exitosamente", "\xC9xito");
          setTimeout(() => {
            this.router.navigate(["/dashboard/production-dashboard/inventario/list"]);
          }, 1e3);
        },
        error: (error) => {
          const errorMsg = error?.error?.message || "Error al agregar item";
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
    Object.keys(this.inventarioForm.controls).forEach((key) => {
      const control = this.inventarioForm.get(key);
      control?.markAsTouched();
    });
  }
  isFieldInvalid(fieldName) {
    const field = this.inventarioForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  getFieldError(fieldName) {
    const field = this.inventarioForm.get(fieldName);
    if (field?.errors) {
      if (field.errors["required"])
        return `${fieldName} es requerido`;
      if (field.errors["min"])
        return `${fieldName} debe ser mayor o igual a ${field.errors["min"].min}`;
    }
    return "";
  }
};
_AddInventarioComponent.\u0275fac = function AddInventarioComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddInventarioComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(InventarioService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_AddInventarioComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddInventarioComponent, selectors: [["app-add-inventario"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 57, vars: 21, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row", "gy-3"], [1, "col-xl-6"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "nombre", "placeholder", "Ej: Concentrado para ponedoras", 1, "form-control"], [1, "invalid-feedback"], [1, "col-xl-3"], ["type", "number", "formControlName", "cantidad", "placeholder", "0", 1, "form-control"], ["formControlName", "unidad", "placeholder", "Seleccione unidad", 3, "items", "clearable"], [1, "invalid-feedback", "d-block"], ["formControlName", "categoria", "placeholder", "Seleccione categor\xEDa", 3, "items", "clearable", "addTag"], ["type", "number", "formControlName", "minimoStock", "placeholder", "0", 1, "form-control"], [1, "text-muted"], ["type", "text", "formControlName", "proveedor", "placeholder", "Nombre del proveedor", 1, "form-control"], ["formControlName", "observaciones", "rows", "3", "placeholder", "Observaciones adicionales", 1, "form-control"], [1, "d-flex", "gap-2", "justify-content-end"], ["type", "button", "routerLink", "../list", 1, "btn", "btn-light", 3, "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function AddInventarioComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Agregar Item al Inventario");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "form", 7);
    \u0275\u0275listener("ngSubmit", function AddInventarioComponent_Template_form_ngSubmit_8_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "label", 10);
    \u0275\u0275text(12, "Nombre ");
    \u0275\u0275elementStart(13, "span", 11);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 12);
    \u0275\u0275template(16, AddInventarioComponent_Conditional_16_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 14)(18, "label", 10);
    \u0275\u0275text(19, "Cantidad ");
    \u0275\u0275elementStart(20, "span", 11);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "input", 15);
    \u0275\u0275template(23, AddInventarioComponent_Conditional_23_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 14)(25, "label", 10);
    \u0275\u0275text(26, "Unidad ");
    \u0275\u0275elementStart(27, "span", 11);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "ng-select", 16);
    \u0275\u0275template(30, AddInventarioComponent_Conditional_30_Template, 2, 1, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 9)(32, "label", 10);
    \u0275\u0275text(33, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "ng-select", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 9)(36, "label", 10);
    \u0275\u0275text(37, "Stock M\xEDnimo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 19);
    \u0275\u0275template(39, AddInventarioComponent_Conditional_39_Template, 2, 1, "div", 13);
    \u0275\u0275elementStart(40, "small", 20);
    \u0275\u0275text(41, "Cantidad m\xEDnima para alertas de stock bajo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 2)(43, "label", 10);
    \u0275\u0275text(44, "Proveedor");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 2)(47, "label", 10);
    \u0275\u0275text(48, "Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "textarea", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 2)(51, "div", 23)(52, "button", 24);
    \u0275\u0275text(53, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 25);
    \u0275\u0275template(55, AddInventarioComponent_Conditional_55_Template, 1, 0, "span", 26);
    \u0275\u0275text(56, " Guardar ");
    \u0275\u0275elementEnd()()()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.inventarioForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("nombre"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isFieldInvalid("nombre") ? 16 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("cantidad"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isFieldInvalid("cantidad") ? 23 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("unidad"));
    \u0275\u0275property("items", ctx.unidades)("clearable", false);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isFieldInvalid("unidad") ? 30 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx.categorias)("clearable", true)("addTag", true);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("minimoStock"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isFieldInvalid("minimoStock") ? 39 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 55 : -1);
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgSelectModule, NgSelectComponent, SharedModule], styles: ["\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n/*# sourceMappingURL=add-inventario.component.css.map */"] });
var AddInventarioComponent = _AddInventarioComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddInventarioComponent, { className: "AddInventarioComponent" });
})();
export {
  AddInventarioComponent
};
//# sourceMappingURL=add-inventario.component-AZGMR4CP.js.map
