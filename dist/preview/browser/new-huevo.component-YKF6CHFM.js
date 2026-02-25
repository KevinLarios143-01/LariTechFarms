import {
  HuevosService
} from "./chunk-C3QQGMXI.js";
import {
  LotesService
} from "./chunk-43K7FTAL.js";
import "./chunk-7WSVHSJD.js";
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
  CommonModule,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/production-dashboard/huevos/new-huevo/new-huevo.component.ts
function NewHuevoComponent_ng_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lote_r1 = ctx.$implicit;
    \u0275\u0275property("value", lote_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", lote_r1.galera, " - ", lote_r1.tipo, "");
  }
}
function NewHuevoComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, " El lote es requerido ");
    \u0275\u0275elementEnd();
  }
}
function NewHuevoComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, " La fecha es requerida ");
    \u0275\u0275elementEnd();
  }
}
function NewHuevoComponent_div_29_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "La cantidad es requerida");
    \u0275\u0275elementEnd();
  }
}
function NewHuevoComponent_div_29_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "La cantidad debe ser mayor a 0");
    \u0275\u0275elementEnd();
  }
}
function NewHuevoComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, NewHuevoComponent_div_29_span_1_Template, 2, 0, "span", 27)(2, NewHuevoComponent_div_29_span_2_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r1.controlForm.get("cantidadHuevos")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.controlForm.get("cantidadHuevos")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["min"]);
  }
}
function NewHuevoComponent_ng_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const calidad_r3 = ctx.$implicit;
    \u0275\u0275property("value", calidad_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(calidad_r3);
  }
}
function NewHuevoComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
}
var _NewHuevoComponent = class _NewHuevoComponent {
  constructor(fb, huevosService, lotesService, router, route, toastr) {
    this.fb = fb;
    this.huevosService = huevosService;
    this.lotesService = lotesService;
    this.router = router;
    this.route = route;
    this.toastr = toastr;
    this.loading = false;
    this.isEditing = false;
    this.controlId = null;
    this.lotes = [];
    this.calidades = ["Excelente", "Buena", "Regular", "Mala"];
    this.controlForm = this.fb.group({
      idLote: ["", Validators.required],
      fecha: ["", Validators.required],
      cantidadHuevos: ["", [Validators.required, Validators.min(1)]],
      calidad: [""]
    });
  }
  ngOnInit() {
    this.loadLotes();
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditing = true;
        this.controlId = +params["id"];
        this.loadControl();
      }
    });
  }
  loadLotes() {
    this.lotesService.getLotes().subscribe({
      next: (response) => {
        let allLotes = [];
        if (response?.data?.data && Array.isArray(response.data.data)) {
          allLotes = response.data.data;
        } else if (response?.data?.items && Array.isArray(response.data.items)) {
          allLotes = response.data.items;
        } else if (response?.data && Array.isArray(response.data)) {
          allLotes = response.data;
        } else if (Array.isArray(response)) {
          allLotes = response;
        }
        this.lotes = allLotes.filter((lote) => lote.tipo === "Ponedoras" && lote.estado === "Activo");
      },
      error: (error) => {
        console.error("Error al cargar lotes:", error);
      }
    });
  }
  loadControl() {
    if (this.controlId) {
      this.loading = true;
      this.huevosService.getControlById(this.controlId).subscribe({
        next: (response) => {
          const control = response.data;
          this.controlForm.patchValue({
            idLote: control.idLote,
            fecha: control.fecha.split("T")[0],
            cantidadHuevos: control.cantidadHuevos,
            calidad: control.calidad
          });
          this.loading = false;
        },
        error: (error) => {
          console.error("Error al cargar control:", error);
          this.toastr.error("Error al cargar el control", "Error");
          this.loading = false;
        }
      });
    }
  }
  onSubmit() {
    if (this.controlForm.valid) {
      this.loading = true;
      const formData = this.controlForm.value;
      if (this.isEditing && this.controlId) {
        const updateData = {
          cantidadHuevos: formData.cantidadHuevos,
          calidad: formData.calidad
        };
        this.huevosService.updateControl(this.controlId, updateData).subscribe({
          next: () => {
            this.toastr.success("Control actualizado exitosamente", "\xC9xito");
            this.router.navigate(["/dashboard/production-dashboard/huevos"]);
            this.loading = false;
          },
          error: (error) => {
            console.error("Error al actualizar control:", error);
            this.toastr.error("Error al actualizar el control", "Error");
            this.loading = false;
          }
        });
      } else {
        const createData = formData;
        this.huevosService.createControl(createData).subscribe({
          next: () => {
            this.toastr.success("Control creado exitosamente", "\xC9xito");
            this.router.navigate(["/dashboard/production-dashboard/huevos"]);
            this.loading = false;
          },
          error: (error) => {
            console.error("Error al crear control:", error);
            this.toastr.error("Error al crear el control", "Error");
            this.loading = false;
          }
        });
      }
    } else {
      this.markFormGroupTouched();
      this.toastr.warning("Por favor, complete todos los campos requeridos", "Advertencia");
    }
  }
  onCancel() {
    this.router.navigate(["/dashboard/production-dashboard/huevos"]);
  }
  markFormGroupTouched() {
    Object.keys(this.controlForm.controls).forEach((key) => {
      const control = this.controlForm.get(key);
      control?.markAsTouched();
    });
  }
};
_NewHuevoComponent.\u0275fac = function NewHuevoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewHuevoComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HuevosService), \u0275\u0275directiveInject(LotesService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ToastrService));
};
_NewHuevoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewHuevoComponent, selectors: [["app-new-huevo"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 44, vars: 22, consts: [[3, "title", "title2", "class1", "path"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "col-md-6"], [1, "form-group", "mb-3"], ["for", "idLote", 1, "form-label"], ["formControlName", "idLote", "placeholder", "Seleccione el lote", 1, "form-control", "p-0"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["for", "fecha", 1, "form-label"], ["type", "date", "formControlName", "fecha", 1, "form-control"], ["for", "cantidadHuevos", 1, "form-label"], ["type", "number", "formControlName", "cantidadHuevos", "placeholder", "Cantidad de huevos", "min", "1", 1, "form-control"], ["for", "calidad", 1, "form-label"], ["formControlName", "calidad", "placeholder", "Seleccione la calidad", 1, "form-control", "p-0"], [1, "col-md-12"], [1, "form-group", "d-flex", "gap-2", "justify-content-end"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], [3, "value"], [1, "invalid-feedback", "d-block"], [4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function NewHuevoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
    \u0275\u0275text(6, "Informaci\xF3n del Control");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "form", 7);
    \u0275\u0275listener("ngSubmit", function NewHuevoComponent_Template_form_ngSubmit_8_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(9, "div", 1)(10, "div", 8)(11, "div", 9)(12, "label", 10);
    \u0275\u0275text(13, "Lote *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ng-select", 11);
    \u0275\u0275template(15, NewHuevoComponent_ng_option_15_Template, 2, 3, "ng-option", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, NewHuevoComponent_div_16_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 8)(18, "div", 9)(19, "label", 14);
    \u0275\u0275text(20, "Fecha *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 15);
    \u0275\u0275template(22, NewHuevoComponent_div_22_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 1)(24, "div", 8)(25, "div", 9)(26, "label", 16);
    \u0275\u0275text(27, "Cantidad de Huevos *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 17);
    \u0275\u0275template(29, NewHuevoComponent_div_29_Template, 3, 2, "div", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 8)(31, "div", 9)(32, "label", 18);
    \u0275\u0275text(33, "Calidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ng-select", 19);
    \u0275\u0275template(35, NewHuevoComponent_ng_option_35_Template, 2, 2, "ng-option", 12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 1)(37, "div", 20)(38, "div", 21)(39, "button", 22);
    \u0275\u0275listener("click", function NewHuevoComponent_Template_button_click_39_listener() {
      return ctx.onCancel();
    });
    \u0275\u0275text(40, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 23);
    \u0275\u0275template(42, NewHuevoComponent_span_42_Template, 1, 0, "span", 24);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    \u0275\u0275classMap("btn btn-secondary");
    \u0275\u0275property("title", ctx.isEditing ? "Editar Control" : "Nuevo Control")("title2", "Volver a Lista")("class1", "")("path", "/dashboard/production-dashboard/huevos");
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.controlForm);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx.controlForm.get("idLote")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.controlForm.get("idLote")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.lotes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.controlForm.get("idLote")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.controlForm.get("idLote")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_9_0 = ctx.controlForm.get("fecha")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.controlForm.get("fecha")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_10_0 = ctx.controlForm.get("fecha")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.controlForm.get("fecha")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_11_0 = ctx.controlForm.get("cantidadHuevos")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.controlForm.get("cantidadHuevos")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_12_0 = ctx.controlForm.get("cantidadHuevos")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.controlForm.get("cantidadHuevos")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx.calidades);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.loading || ctx.controlForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isEditing ? "Actualizar" : "Crear", " Control ");
  }
}, dependencies: [CommonModule, NgForOf, NgIf, SharedModule, HrDashboardPageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, RouterModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ["\n\n/*# sourceMappingURL=new-huevo.component.css.map */"] });
var NewHuevoComponent = _NewHuevoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewHuevoComponent, { className: "NewHuevoComponent" });
})();
export {
  NewHuevoComponent
};
//# sourceMappingURL=new-huevo.component-YKF6CHFM.js.map
