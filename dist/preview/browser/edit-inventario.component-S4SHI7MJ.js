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

// src/app/componets/dashbord/production-dashboard/inventario/edit-inventario/edit-inventario.component.ts
function EditInventarioComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getFieldError("nombre"));
  }
}
function EditInventarioComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getFieldError("unidad"));
  }
}
function EditInventarioComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getFieldError("minimoStock"));
  }
}
function EditInventarioComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
}
function EditInventarioComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "div", 32)(4, "h5", 33);
    \u0275\u0275text(5, "Actualizar Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 34);
    \u0275\u0275listener("click", function EditInventarioComponent_Conditional_57_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeStockModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 9);
    \u0275\u0275listener("ngSubmit", function EditInventarioComponent_Conditional_57_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onStockSubmit());
    });
    \u0275\u0275elementStart(8, "div", 35)(9, "div", 10)(10, "div", 36)(11, "label", 12);
    \u0275\u0275text(12, "Tipo de Operaci\xF3n ");
    \u0275\u0275elementStart(13, "span", 13);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "ng-select", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 36)(17, "label", 12);
    \u0275\u0275text(18, "Cantidad ");
    \u0275\u0275elementStart(19, "span", 13);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 36)(23, "label", 12);
    \u0275\u0275text(24, "Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "textarea", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 40)(27, "button", 41);
    \u0275\u0275listener("click", function EditInventarioComponent_Conditional_57_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeStockModal());
    });
    \u0275\u0275text(28, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 27);
    \u0275\u0275text(30, " Actualizar Stock ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r0.stockForm);
    \u0275\u0275advance(8);
    \u0275\u0275property("items", ctx_r0.operaciones)("clearable", false);
    \u0275\u0275advance(14);
    \u0275\u0275property("disabled", !ctx_r0.stockForm.valid);
  }
}
var _EditInventarioComponent = class _EditInventarioComponent {
  constructor(fb, inventarioService, route, router, cdr, toastr) {
    this.fb = fb;
    this.inventarioService = inventarioService;
    this.route = route;
    this.router = router;
    this.cdr = cdr;
    this.toastr = toastr;
    this.categorias = [];
    this.isLoading = false;
    this.inventarioId = null;
    this.showStockModal = false;
    this.unidades = ["kg", "g", "L", "ml", "unidad", "caja", "saco", "dosis", "paquete"];
    this.operaciones = [
      { value: "entrada", label: "Entrada (Agregar)" },
      { value: "salida", label: "Salida (Restar)" },
      { value: "ajuste", label: "Ajuste (Establecer cantidad exacta)" }
    ];
    this.inventarioForm = this.fb.group({
      nombre: ["", Validators.required],
      cantidad: [{ value: "", disabled: true }],
      unidad: ["", Validators.required],
      categoria: [""],
      minimoStock: ["", Validators.min(0)],
      proveedor: [""],
      observaciones: [""]
    });
    this.stockForm = this.fb.group({
      operacion: ["entrada", Validators.required],
      cantidad: ["", [Validators.required, Validators.min(0.01)]],
      observaciones: [""]
    });
  }
  ngOnInit() {
    this.loadCategorias();
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.inventarioId = parseInt(id);
      this.loadInventario();
    } else {
      this.router.navigate(["../list"], { relativeTo: this.route });
    }
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
  loadInventario() {
    if (this.inventarioId) {
      this.isLoading = true;
      this.inventarioService.getInventarioById(this.inventarioId).subscribe({
        next: (response) => {
          const item = response.data;
          this.inventarioForm.patchValue({
            nombre: item.nombre,
            cantidad: item.cantidad,
            unidad: item.unidad,
            categoria: item.categoria || "",
            minimoStock: item.minimoStock || "",
            proveedor: item.proveedor || "",
            observaciones: item.observaciones || ""
          });
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          this.toastr.error("Error al cargar item", "Error");
          this.isLoading = false;
          this.router.navigate(["../list"], { relativeTo: this.route });
        }
      });
    }
  }
  onSubmit() {
    if (this.inventarioForm.valid && this.inventarioId) {
      this.isLoading = true;
      const formData = this.inventarioForm.value;
      const updateData = {
        nombre: formData.nombre,
        unidad: formData.unidad,
        categoria: formData.categoria || void 0,
        minimoStock: formData.minimoStock ? parseFloat(formData.minimoStock) : void 0,
        proveedor: formData.proveedor || void 0,
        observaciones: formData.observaciones || void 0
      };
      this.inventarioService.updateInventario(this.inventarioId, updateData).subscribe({
        next: (response) => {
          this.toastr.success("Item actualizado exitosamente", "\xC9xito");
          setTimeout(() => {
            this.router.navigate(["../../list"], { relativeTo: this.route });
          }, 1e3);
        },
        error: (error) => {
          const errorMsg = error?.error?.message || "Error al actualizar item";
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
  openStockModal() {
    this.showStockModal = true;
    this.stockForm.reset({ operacion: "entrada" });
  }
  closeStockModal() {
    this.showStockModal = false;
  }
  onStockSubmit() {
    if (this.stockForm.valid && this.inventarioId) {
      const formData = this.stockForm.value;
      const stockData = {
        operacion: formData.operacion,
        cantidad: parseFloat(formData.cantidad),
        observaciones: formData.observaciones || void 0
      };
      this.inventarioService.updateStock(this.inventarioId, stockData).subscribe({
        next: (response) => {
          this.toastr.success("Stock actualizado exitosamente", "\xC9xito");
          this.closeStockModal();
          this.loadInventario();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || "Error al actualizar stock";
          this.toastr.error(errorMsg, "Error");
        }
      });
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
_EditInventarioComponent.\u0275fac = function EditInventarioComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EditInventarioComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(InventarioService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_EditInventarioComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditInventarioComponent, selectors: [["app-edit-inventario"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 58, vars: 19, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "ri-refresh-line"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row", "gy-3"], [1, "col-xl-6"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "nombre", 1, "form-control"], [1, "invalid-feedback"], [1, "col-xl-3"], ["type", "text", "formControlName", "cantidad", "readonly", "", 1, "form-control"], [1, "text-muted"], ["formControlName", "unidad", "placeholder", "Seleccione unidad", 3, "items", "clearable"], [1, "invalid-feedback", "d-block"], ["formControlName", "categoria", "placeholder", "Seleccione categor\xEDa", 3, "items", "clearable", "addTag"], ["type", "number", "formControlName", "minimoStock", 1, "form-control"], ["type", "text", "formControlName", "proveedor", 1, "form-control"], ["formControlName", "observaciones", "rows", "3", 1, "form-control"], [1, "d-flex", "gap-2", "justify-content-end"], ["type", "button", "routerLink", "../../list", 1, "btn", "btn-light", 3, "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background-color", "rgba(0,0,0,0.5)"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "col-12"], ["bindLabel", "label", "bindValue", "value", "formControlName", "operacion", 3, "items", "clearable"], ["type", "number", "formControlName", "cantidad", "placeholder", "0", "step", "0.01", 1, "form-control"], ["formControlName", "observaciones", "rows", "2", "placeholder", "Motivo del movimiento", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"]], template: function EditInventarioComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Editar Item del Inventario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 6);
    \u0275\u0275listener("click", function EditInventarioComponent_Template_button_click_7_listener() {
      return ctx.openStockModal();
    });
    \u0275\u0275element(8, "i", 7);
    \u0275\u0275text(9, " Actualizar Stock ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "form", 9);
    \u0275\u0275listener("ngSubmit", function EditInventarioComponent_Template_form_ngSubmit_11_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "label", 12);
    \u0275\u0275text(15, "Nombre ");
    \u0275\u0275elementStart(16, "span", 13);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "input", 14);
    \u0275\u0275template(19, EditInventarioComponent_Conditional_19_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 16)(21, "label", 12);
    \u0275\u0275text(22, "Cantidad Actual");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 17);
    \u0275\u0275elementStart(24, "small", 18);
    \u0275\u0275text(25, 'Use "Actualizar Stock" para modificar');
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 16)(27, "label", 12);
    \u0275\u0275text(28, "Unidad ");
    \u0275\u0275elementStart(29, "span", 13);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "ng-select", 19);
    \u0275\u0275template(32, EditInventarioComponent_Conditional_32_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 11)(34, "label", 12);
    \u0275\u0275text(35, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "ng-select", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 11)(38, "label", 12);
    \u0275\u0275text(39, "Stock M\xEDnimo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 22);
    \u0275\u0275template(41, EditInventarioComponent_Conditional_41_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 2)(43, "label", 12);
    \u0275\u0275text(44, "Proveedor");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 2)(47, "label", 12);
    \u0275\u0275text(48, "Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "textarea", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 2)(51, "div", 25)(52, "button", 26);
    \u0275\u0275text(53, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 27);
    \u0275\u0275template(55, EditInventarioComponent_Conditional_55_Template, 1, 0, "span", 28);
    \u0275\u0275text(56, " Actualizar ");
    \u0275\u0275elementEnd()()()()()()()()()();
    \u0275\u0275template(57, EditInventarioComponent_Conditional_57_Template, 31, 4, "div", 29);
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx.inventarioForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("nombre"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isFieldInvalid("nombre") ? 19 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("unidad"));
    \u0275\u0275property("items", ctx.unidades)("clearable", false);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isFieldInvalid("unidad") ? 32 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx.categorias)("clearable", true)("addTag", true);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("minimoStock"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isFieldInvalid("minimoStock") ? 41 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 55 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.showStockModal ? 57 : -1);
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgSelectModule, NgSelectComponent, SharedModule], styles: ["\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.modal.show[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=edit-inventario.component.css.map */"] });
var EditInventarioComponent = _EditInventarioComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditInventarioComponent, { className: "EditInventarioComponent" });
})();
export {
  EditInventarioComponent
};
//# sourceMappingURL=edit-inventario.component-S4SHI7MJ.js.map
