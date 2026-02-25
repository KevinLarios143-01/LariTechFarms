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
  ChangeDetectorRef,
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
  ɵɵtextInterpolate1
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/bussiness-dashboard/lotes/new-lote/new-lote.component.ts
function NewLoteComponent_ng_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tipo_r1 = ctx.$implicit;
    \u0275\u0275property("value", tipo_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tipo_r1);
  }
}
function NewLoteComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, " El tipo es requerido ");
    \u0275\u0275elementEnd();
  }
}
function NewLoteComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, " La galera es requerida ");
    \u0275\u0275elementEnd();
  }
}
function NewLoteComponent_div_29_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "La cantidad es requerida");
    \u0275\u0275elementEnd();
  }
}
function NewLoteComponent_div_29_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "La cantidad debe ser mayor a 0");
    \u0275\u0275elementEnd();
  }
}
function NewLoteComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, NewLoteComponent_div_29_span_1_Template, 2, 0, "span", 33)(2, NewLoteComponent_div_29_span_2_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r1.loteForm.get("cantidad")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.loteForm.get("cantidad")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["min"]);
  }
}
function NewLoteComponent_ng_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const estado_r3 = ctx.$implicit;
    \u0275\u0275property("value", estado_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(estado_r3);
  }
}
function NewLoteComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, " La fecha de inicio es requerida ");
    \u0275\u0275elementEnd();
  }
}
function NewLoteComponent_span_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 34);
  }
}
var _NewLoteComponent = class _NewLoteComponent {
  constructor(fb, lotesService, router, route, toastr, cdr) {
    this.fb = fb;
    this.lotesService = lotesService;
    this.router = router;
    this.route = route;
    this.toastr = toastr;
    this.cdr = cdr;
    this.loading = false;
    this.isEditing = false;
    this.loteId = null;
    this.tiposLote = ["Ponedoras", "Engorde"];
    this.estadosLote = ["Activo", "Inactivo", "Desalojado"];
    this.loteForm = this.fb.group({
      tipo: ["", Validators.required],
      galera: ["", Validators.required],
      cantidad: ["", [Validators.required, Validators.min(1)]],
      fechaInicio: ["", Validators.required],
      fechaFin: [""],
      estado: ["Activo"],
      observaciones: [""]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditing = true;
        this.loteId = +params["id"];
        this.loadLote();
      }
    });
  }
  loadLote() {
    if (this.loteId) {
      this.loading = true;
      this.lotesService.getLoteById(this.loteId).subscribe({
        next: (response) => {
          const lote = response.data;
          this.loteForm.patchValue({
            tipo: lote.tipo,
            galera: lote.galera,
            cantidad: lote.cantidad,
            fechaInicio: this.formatDateForInput(lote.fechaInicio),
            fechaFin: this.formatDateForInput(lote.fechaFin),
            estado: lote.estado,
            observaciones: lote.observaciones
          });
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error("Error al cargar lote:", error);
          this.toastr.error("Error al cargar el lote", "Error", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    }
  }
  onSubmit() {
    if (this.loteForm.valid) {
      this.loading = true;
      const formData = this.loteForm.value;
      if (this.isEditing && this.loteId) {
        this.lotesService.updateLote(this.loteId, formData).subscribe({
          next: () => {
            this.toastr.success("Lote actualizado exitosamente", "\xC9xito", {
              timeOut: 3e3,
              positionClass: "toast-top-right"
            });
            this.router.navigate(["/dashboard/business-dashboard/lotes"]);
            this.loading = false;
            this.cdr.detectChanges();
          },
          error: (error) => {
            console.error("Error al actualizar lote:", error);
            this.toastr.error("Error al actualizar el lote", "Error", {
              timeOut: 3e3,
              positionClass: "toast-top-right"
            });
            this.loading = false;
            this.cdr.detectChanges();
          }
        });
      } else {
        this.lotesService.createLote(formData).subscribe({
          next: () => {
            this.toastr.success("Lote creado exitosamente", "\xC9xito", {
              timeOut: 3e3,
              positionClass: "toast-top-right"
            });
            this.router.navigate(["/dashboard/business-dashboard/lotes"]);
            this.loading = false;
            this.cdr.detectChanges();
          },
          error: (error) => {
            console.error("Error al crear lote:", error);
            this.toastr.error("Error al crear el lote", "Error", {
              timeOut: 3e3,
              positionClass: "toast-top-right"
            });
            this.loading = false;
            this.cdr.detectChanges();
          }
        });
      }
    } else {
      this.markFormGroupTouched();
      this.toastr.warning("Por favor, complete todos los campos requeridos", "Advertencia", {
        timeOut: 3e3,
        positionClass: "toast-top-right"
      });
    }
  }
  onCancel() {
    this.router.navigate(["/dashboard/business-dashboard/lotes"]);
  }
  markFormGroupTouched() {
    Object.keys(this.loteForm.controls).forEach((key) => {
      const control = this.loteForm.get(key);
      control?.markAsTouched();
    });
  }
  formatDateForInput(dateString) {
    if (!dateString)
      return "";
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      return dateString;
    }
    if (dateString.includes("T")) {
      return dateString.split("T")[0];
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime()))
      return "";
    return date.toISOString().split("T")[0];
  }
};
_NewLoteComponent.\u0275fac = function NewLoteComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewLoteComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(LotesService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_NewLoteComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewLoteComponent, selectors: [["app-new-lote"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 62, vars: 25, consts: [[3, "title", "title2", "class1", "path"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "col-md-6"], [1, "form-group", "mb-3"], ["for", "tipo", 1, "form-label"], ["formControlName", "tipo", "placeholder", "Seleccione el tipo", 1, "form-control", "p-0"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["for", "galera", 1, "form-label"], ["type", "text", "formControlName", "galera", "placeholder", "Ingrese el nombre de la galera", 1, "form-control"], ["for", "cantidad", 1, "form-label"], ["type", "number", "formControlName", "cantidad", "placeholder", "Cantidad de aves", "min", "1", 1, "form-control"], ["for", "estado", 1, "form-label"], ["formControlName", "estado", "placeholder", "Seleccione el estado", 1, "form-control", "p-0"], ["for", "fechaInicio", 1, "form-label"], ["type", "date", "formControlName", "fechaInicio", 1, "form-control"], ["for", "fechaFin", 1, "form-label"], ["type", "date", "formControlName", "fechaFin", 1, "form-control"], [1, "col-md-12"], ["for", "observaciones", 1, "form-label"], ["formControlName", "observaciones", "rows", "4", "placeholder", "Observaciones adicionales", 1, "form-control"], [1, "form-group", "d-flex", "gap-2", "justify-content-end"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], [3, "value"], [1, "invalid-feedback", "d-block"], [4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function NewLoteComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
    \u0275\u0275text(6, "Informaci\xF3n del Lote");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "form", 7);
    \u0275\u0275listener("ngSubmit", function NewLoteComponent_Template_form_ngSubmit_8_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(9, "div", 1)(10, "div", 8)(11, "div", 9)(12, "label", 10);
    \u0275\u0275text(13, "Tipo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ng-select", 11);
    \u0275\u0275template(15, NewLoteComponent_ng_option_15_Template, 2, 2, "ng-option", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, NewLoteComponent_div_16_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 8)(18, "div", 9)(19, "label", 14);
    \u0275\u0275text(20, "Galera *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 15);
    \u0275\u0275template(22, NewLoteComponent_div_22_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 1)(24, "div", 8)(25, "div", 9)(26, "label", 16);
    \u0275\u0275text(27, "Cantidad *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 17);
    \u0275\u0275template(29, NewLoteComponent_div_29_Template, 3, 2, "div", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 8)(31, "div", 9)(32, "label", 18);
    \u0275\u0275text(33, "Estado *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ng-select", 19);
    \u0275\u0275template(35, NewLoteComponent_ng_option_35_Template, 2, 2, "ng-option", 12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 1)(37, "div", 8)(38, "div", 9)(39, "label", 20);
    \u0275\u0275text(40, "Fecha de Inicio *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 21);
    \u0275\u0275template(42, NewLoteComponent_div_42_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 8)(44, "div", 9)(45, "label", 22);
    \u0275\u0275text(46, "Fecha de Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "input", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 1)(49, "div", 24)(50, "div", 9)(51, "label", 25);
    \u0275\u0275text(52, "Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "textarea", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 1)(55, "div", 24)(56, "div", 27)(57, "button", 28);
    \u0275\u0275listener("click", function NewLoteComponent_Template_button_click_57_listener() {
      return ctx.onCancel();
    });
    \u0275\u0275text(58, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 29);
    \u0275\u0275template(60, NewLoteComponent_span_60_Template, 1, 0, "span", 30);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_14_0;
    let tmp_15_0;
    \u0275\u0275classMap("btn btn-secondary");
    \u0275\u0275property("title", ctx.isEditing ? "Editar Lote" : "Agregar Lote")("title2", "Volver a Lista")("class1", "")("path", "/dashboard/business-dashboard/lotes");
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.loteForm);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx.loteForm.get("tipo")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.loteForm.get("tipo")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.tiposLote);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.loteForm.get("tipo")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.loteForm.get("tipo")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_9_0 = ctx.loteForm.get("galera")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.loteForm.get("galera")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_10_0 = ctx.loteForm.get("galera")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.loteForm.get("galera")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_11_0 = ctx.loteForm.get("cantidad")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.loteForm.get("cantidad")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_12_0 = ctx.loteForm.get("cantidad")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.loteForm.get("cantidad")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx.estadosLote);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_14_0 = ctx.loteForm.get("fechaInicio")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx.loteForm.get("fechaInicio")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_15_0 = ctx.loteForm.get("fechaInicio")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx.loteForm.get("fechaInicio")) == null ? null : tmp_15_0.touched));
    \u0275\u0275advance(15);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.loading || ctx.loteForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isEditing ? "Actualizar" : "Crear", " Lote ");
  }
}, dependencies: [CommonModule, NgForOf, NgIf, SharedModule, HrDashboardPageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, RouterModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName] });
var NewLoteComponent = _NewLoteComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewLoteComponent, { className: "NewLoteComponent" });
})();
export {
  NewLoteComponent
};
//# sourceMappingURL=new-lote.component-6GJCXXTD.js.map
