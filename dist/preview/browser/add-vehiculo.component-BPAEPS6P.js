import {
  VehiculoService
} from "./chunk-PUYTWGLT.js";
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
  MaxValidator,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/production-dashboard/vehiculos/add-vehiculo/add-vehiculo.component.ts
function AddVehiculoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 9)(2, "span", 10);
    \u0275\u0275text(3, "Cargando...");
    \u0275\u0275elementEnd()()();
  }
}
function AddVehiculoComponent_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("tipo"));
  }
}
function AddVehiculoComponent_Conditional_9_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("placa"));
  }
}
function AddVehiculoComponent_Conditional_9_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("marca"));
  }
}
function AddVehiculoComponent_Conditional_9_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("modelo"));
  }
}
function AddVehiculoComponent_Conditional_9_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("anio"));
  }
}
function AddVehiculoComponent_Conditional_9_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("capacidad"));
  }
}
function AddVehiculoComponent_Conditional_9_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
}
function AddVehiculoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11);
    \u0275\u0275listener("ngSubmit", function AddVehiculoComponent_Conditional_9_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "div", 13)(3, "label", 14);
    \u0275\u0275text(4, "Tipo *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "ng-select", 15);
    \u0275\u0275template(6, AddVehiculoComponent_Conditional_9_Conditional_6_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13)(8, "label", 14);
    \u0275\u0275text(9, "Placa *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 17);
    \u0275\u0275template(11, AddVehiculoComponent_Conditional_9_Conditional_11_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 13)(13, "label", 14);
    \u0275\u0275text(14, "Marca *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 19);
    \u0275\u0275template(16, AddVehiculoComponent_Conditional_9_Conditional_16_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 13)(18, "label", 14);
    \u0275\u0275text(19, "Modelo *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 20);
    \u0275\u0275template(21, AddVehiculoComponent_Conditional_9_Conditional_21_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 21)(23, "label", 14);
    \u0275\u0275text(24, "A\xF1o");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 22);
    \u0275\u0275template(26, AddVehiculoComponent_Conditional_9_Conditional_26_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 21)(28, "label", 14);
    \u0275\u0275text(29, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "ng-select", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 21)(32, "label", 14);
    \u0275\u0275text(33, "Capacidad (kg)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 24);
    \u0275\u0275template(35, AddVehiculoComponent_Conditional_9_Conditional_35_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 13)(37, "label", 14);
    \u0275\u0275text(38, "Fecha de Adquisici\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 26)(41, "button", 27);
    \u0275\u0275template(42, AddVehiculoComponent_Conditional_9_Conditional_42_Template, 1, 0, "span", 28);
    \u0275\u0275element(43, "i", 29);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 30);
    \u0275\u0275element(46, "i", 31);
    \u0275\u0275text(47, " Cancelar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.vehiculoForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("tipo"));
    \u0275\u0275property("items", ctx_r1.tipos);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("tipo") ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("placa"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("placa") ? 11 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("marca"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("marca") ? 16 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("modelo"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("modelo") ? 21 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("anio"));
    \u0275\u0275property("max", ctx_r1.currentYear);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("anio") ? 26 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.estados);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("capacidad"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("capacidad") ? 35 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoading ? 42 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Actualizar" : "Guardar", " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.isEditMode ? "../../list" : "../list")("disabled", ctx_r1.isLoading);
  }
}
var _AddVehiculoComponent = class _AddVehiculoComponent {
  constructor(fb, vehiculoService, route, router, cdr, toastr) {
    this.fb = fb;
    this.vehiculoService = vehiculoService;
    this.route = route;
    this.router = router;
    this.cdr = cdr;
    this.toastr = toastr;
    this.tipos = [];
    this.isLoading = false;
    this.isEditMode = false;
    this.vehiculoId = null;
    this.estados = ["Activo", "Inactivo", "Mantenimiento", "Vendido"];
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.vehiculoForm = this.fb.group({
      tipo: ["", Validators.required],
      placa: ["", Validators.required],
      marca: ["", Validators.required],
      modelo: ["", Validators.required],
      anio: ["", Validators.min(1900)],
      estado: ["Activo"],
      capacidad: ["", Validators.min(0)],
      fechaAdquisicion: [""]
    });
  }
  ngOnInit() {
    this.loadTipos();
    this.checkEditMode();
  }
  checkEditMode() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.isEditMode = true;
      this.vehiculoId = parseInt(id);
      this.loadVehiculo();
    }
  }
  loadTipos() {
    this.vehiculoService.getTipos().subscribe({
      next: (response) => {
        this.tipos = response.data || [];
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error al cargar tipos:", error);
      }
    });
  }
  loadVehiculo() {
    if (this.vehiculoId) {
      this.isLoading = true;
      this.vehiculoService.getVehiculoById(this.vehiculoId).subscribe({
        next: (response) => {
          const vehiculo = response.data;
          this.vehiculoForm.patchValue({
            tipo: vehiculo.tipo,
            placa: vehiculo.placa,
            marca: vehiculo.marca,
            modelo: vehiculo.modelo,
            anio: vehiculo.anio || "",
            estado: vehiculo.estado,
            capacidad: vehiculo.capacidad || "",
            fechaAdquisicion: vehiculo.fechaAdquisicion || ""
          });
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          this.toastr.error("Error al cargar veh\xEDculo", "Error");
          this.isLoading = false;
          this.router.navigate(["../list"], { relativeTo: this.route });
        }
      });
    }
  }
  onSubmit() {
    if (this.vehiculoForm.valid) {
      this.isLoading = true;
      const formData = this.vehiculoForm.value;
      if (this.isEditMode && this.vehiculoId) {
        const updateData = {
          tipo: formData.tipo,
          placa: formData.placa,
          marca: formData.marca,
          modelo: formData.modelo,
          anio: formData.anio ? parseInt(formData.anio) : void 0,
          estado: formData.estado,
          capacidad: formData.capacidad ? parseFloat(formData.capacidad) : void 0,
          fechaAdquisicion: formData.fechaAdquisicion || void 0
        };
        this.vehiculoService.updateVehiculo(this.vehiculoId, updateData).subscribe({
          next: () => {
            this.toastr.success("Veh\xEDculo actualizado exitosamente", "\xC9xito");
            setTimeout(() => {
              this.router.navigate(["../../list"], { relativeTo: this.route });
            }, 1e3);
          },
          error: (error) => {
            const errorMsg = error?.error?.message || "Error al actualizar veh\xEDculo";
            this.toastr.error(errorMsg, "Error");
            this.isLoading = false;
            this.cdr.detectChanges();
          }
        });
      } else {
        const createData = {
          tipo: formData.tipo,
          placa: formData.placa,
          marca: formData.marca,
          modelo: formData.modelo,
          anio: formData.anio ? parseInt(formData.anio) : void 0,
          estado: formData.estado,
          capacidad: formData.capacidad ? parseFloat(formData.capacidad) : void 0,
          fechaAdquisicion: formData.fechaAdquisicion || void 0
        };
        this.vehiculoService.createVehiculo(createData).subscribe({
          next: () => {
            this.toastr.success("Veh\xEDculo creado exitosamente", "\xC9xito");
            setTimeout(() => {
              this.router.navigate(["../list"], { relativeTo: this.route });
            }, 1e3);
          },
          error: (error) => {
            const errorMsg = error?.error?.message || "Error al crear veh\xEDculo";
            this.toastr.error(errorMsg, "Error");
            this.isLoading = false;
            this.cdr.detectChanges();
          }
        });
      }
    } else {
      this.markFormGroupTouched();
      this.toastr.warning("Por favor complete todos los campos requeridos", "Advertencia");
    }
  }
  markFormGroupTouched() {
    Object.keys(this.vehiculoForm.controls).forEach((key) => {
      const control = this.vehiculoForm.get(key);
      control?.markAsTouched();
    });
  }
  isFieldInvalid(fieldName) {
    const field = this.vehiculoForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  getFieldError(fieldName) {
    const field = this.vehiculoForm.get(fieldName);
    if (field?.errors) {
      if (field.errors["required"])
        return `${fieldName} es requerido`;
      if (field.errors["min"])
        return `${fieldName} debe ser mayor o igual a ${field.errors["min"].min}`;
    }
    return "";
  }
};
_AddVehiculoComponent.\u0275fac = function AddVehiculoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddVehiculoComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(VehiculoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_AddVehiculoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddVehiculoComponent, selectors: [["app-add-vehiculo"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 2, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "text-center", "py-5"], [3, "formGroup"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [3, "ngSubmit", "formGroup"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], ["formControlName", "tipo", "placeholder", "Seleccione tipo", 3, "items"], [1, "invalid-feedback", "d-block"], ["type", "text", "formControlName", "placa", "placeholder", "Ej: P-123ABC", 1, "form-control"], [1, "invalid-feedback"], ["type", "text", "formControlName", "marca", "placeholder", "Ej: Toyota", 1, "form-control"], ["type", "text", "formControlName", "modelo", "placeholder", "Ej: Hilux", 1, "form-control"], [1, "col-md-4"], ["type", "number", "formControlName", "anio", "placeholder", "Ej: 2020", "min", "1900", 1, "form-control", 3, "max"], ["formControlName", "estado", "placeholder", "Seleccione estado", 3, "items"], ["type", "number", "formControlName", "capacidad", "placeholder", "Ej: 1000", "min", "0", "step", "0.01", 1, "form-control"], ["type", "date", "formControlName", "fechaAdquisicion", 1, "form-control"], [1, "mt-4", "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "ri-save-line"], ["type", "button", 1, "btn", "btn-secondary", 3, "routerLink", "disabled"], [1, "ri-close-line"]], template: function AddVehiculoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275template(8, AddVehiculoComponent_Conditional_8_Template, 4, 0, "div", 7)(9, AddVehiculoComponent_Conditional_9_Template, 48, 27, "form", 8);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx.isEditMode ? "Editar" : "Agregar", " Veh\xEDculo");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isLoading && ctx.isEditMode && !ctx.vehiculoForm.value.placa ? 8 : 9);
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, NgSelectModule, NgSelectComponent, SharedModule], styles: ["\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.btn[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, \ninput[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  opacity: 1;\n}\n/*# sourceMappingURL=add-vehiculo.component.css.map */"] });
var AddVehiculoComponent = _AddVehiculoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddVehiculoComponent, { className: "AddVehiculoComponent" });
})();
export {
  AddVehiculoComponent
};
//# sourceMappingURL=add-vehiculo.component-BPAEPS6P.js.map
