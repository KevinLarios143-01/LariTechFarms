import {
  VentaService
} from "./chunk-EAZAKIYV.js";
import {
  ClienteService
} from "./chunk-DTNROUGD.js";
import "./chunk-7WSVHSJD.js";
import {
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
  Router,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/bussiness-dashboard/new-sell/new-sell.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function NewSellComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 19)(2, "span", 20);
    \u0275\u0275text(3, "Cargando...");
    \u0275\u0275elementEnd()()();
  }
}
function NewSellComponent_Conditional_18_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cliente_r1 = ctx.$implicit;
    \u0275\u0275property("value", cliente_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cliente_r1.nombre, " ");
  }
}
function NewSellComponent_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "small");
    \u0275\u0275text(2, "Debe seleccionar un cliente");
    \u0275\u0275elementEnd()();
  }
}
function NewSellComponent_Conditional_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "small");
    \u0275\u0275text(2, "La fecha es requerida");
    \u0275\u0275elementEnd()();
  }
}
function NewSellComponent_Conditional_18_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "small");
    \u0275\u0275text(2, "El total es requerido");
    \u0275\u0275elementEnd()();
  }
}
function NewSellComponent_Conditional_18_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "small");
    \u0275\u0275text(2, "El estado es requerido");
    \u0275\u0275elementEnd()();
  }
}
function NewSellComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 21)(2, "div", 22)(3, "label", 23);
    \u0275\u0275text(4, "Cliente *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ng-select", 24);
    \u0275\u0275repeaterCreate(6, NewSellComponent_Conditional_18_For_7_Template, 2, 2, "ng-option", 25, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, NewSellComponent_Conditional_18_Conditional_8_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 21)(10, "div", 22)(11, "label", 23);
    \u0275\u0275text(12, "Fecha *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 27);
    \u0275\u0275template(14, NewSellComponent_Conditional_18_Conditional_14_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 21)(16, "div", 22)(17, "label", 23);
    \u0275\u0275text(18, "Total *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 28);
    \u0275\u0275template(20, NewSellComponent_Conditional_18_Conditional_20_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 21)(22, "div", 22)(23, "label", 23);
    \u0275\u0275text(24, "M\xE9todo de Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ng-select", 29)(26, "ng-option", 30);
    \u0275\u0275text(27, "Efectivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ng-option", 31);
    \u0275\u0275text(29, "Tarjeta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ng-option", 32);
    \u0275\u0275text(31, "Transferencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ng-option", 33);
    \u0275\u0275text(33, "Cheque");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 21)(35, "div", 22)(36, "label", 23);
    \u0275\u0275text(37, "Estado *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-select", 34)(39, "ng-option", 35);
    \u0275\u0275text(40, "Pendiente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ng-option", 36);
    \u0275\u0275text(42, "Completada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "ng-option", 37);
    \u0275\u0275text(44, "Cancelada");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(45, NewSellComponent_Conditional_18_Conditional_45_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 38)(47, "div", 22)(48, "label", 23);
    \u0275\u0275text(49, "Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "textarea", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.clientes);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_2_0 = ctx_r1.ventaForm.get("idCliente")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.ventaForm.get("idCliente")) == null ? null : tmp_2_0.touched) ? 8 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_3_0 = ctx_r1.ventaForm.get("fecha")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.ventaForm.get("fecha")) == null ? null : tmp_3_0.touched) ? 14 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_4_0 = ctx_r1.ventaForm.get("total")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.ventaForm.get("total")) == null ? null : tmp_4_0.touched) ? 20 : -1);
    \u0275\u0275advance(25);
    \u0275\u0275conditional(((tmp_5_0 = ctx_r1.ventaForm.get("estado")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.ventaForm.get("estado")) == null ? null : tmp_5_0.touched) ? 45 : -1);
  }
}
function NewSellComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 18);
  }
}
var _NewSellComponent = class _NewSellComponent {
  constructor(fb, ventaService, clienteService, router, route, toastr, cdr) {
    this.fb = fb;
    this.ventaService = ventaService;
    this.clienteService = clienteService;
    this.router = router;
    this.route = route;
    this.toastr = toastr;
    this.cdr = cdr;
    this.loading = false;
    this.isEditing = false;
    this.ventaId = null;
    this.clientes = [];
    this.ventaForm = this.fb.group({
      idCliente: ["", [Validators.required, Validators.min(1)]],
      fecha: ["", Validators.required],
      total: ["", [Validators.required, Validators.min(0)]],
      metodoPago: [""],
      estado: ["Pendiente", Validators.required],
      observaciones: [""]
    });
  }
  ngOnInit() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.ventaForm.patchValue({ fecha: today });
    this.route.queryParams.subscribe((params) => {
      if (params["id"] && params["mode"] === "edit") {
        this.isEditing = true;
        this.ventaId = +params["id"];
        this.loadVenta();
      }
    });
    this.loadClientes();
  }
  loadVenta() {
    if (this.ventaId) {
      this.loading = true;
      this.ventaService.getVentaById(this.ventaId).subscribe({
        next: (response) => {
          const venta = response.data;
          this.ventaForm.patchValue({
            idCliente: venta.idCliente,
            fecha: this.formatDateForInput(venta.fecha),
            total: venta.total,
            metodoPago: venta.metodoPago,
            estado: venta.estado,
            observaciones: venta.observaciones
          });
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error("Error loading venta:", error);
          this.toastr.error("Error al cargar la venta", "Error", {
            timeOut: 3e3,
            positionClass: "toast-top-right",
            progressBar: true,
            closeButton: true
          });
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    }
  }
  onSubmit() {
    if (this.ventaForm.valid) {
      this.loading = true;
      const formData = this.ventaForm.value;
      if (this.isEditing && this.ventaId) {
        this.ventaService.updateVenta(this.ventaId, formData).subscribe({
          next: () => {
            this.toastr.success("Venta actualizada exitosamente", "\xC9xito", {
              timeOut: 3e3,
              positionClass: "toast-top-right",
              progressBar: true,
              closeButton: true
            });
            this.router.navigate(["/dashboard/business-dashboard/sell-list"]);
            this.loading = false;
          },
          error: (error) => {
            this.toastr.error("Error al actualizar la venta: " + (error.error?.message || "Error desconocido"), "Error", {
              timeOut: 5e3,
              positionClass: "toast-top-right",
              progressBar: true,
              closeButton: true
            });
            this.loading = false;
          }
        });
      } else {
        this.ventaService.createVenta(formData).subscribe({
          next: () => {
            this.toastr.success("Venta creada exitosamente", "\xC9xito", {
              timeOut: 3e3,
              positionClass: "toast-top-right",
              progressBar: true,
              closeButton: true
            });
            this.router.navigate(["/dashboard/business-dashboard/sell-list"]);
            this.loading = false;
          },
          error: (error) => {
            this.toastr.error("Error al crear la venta: " + (error.error?.message || "Error desconocido"), "Error", {
              timeOut: 5e3,
              positionClass: "toast-top-right",
              progressBar: true,
              closeButton: true
            });
            this.loading = false;
          }
        });
      }
    } else {
      this.markFormGroupTouched();
      this.toastr.warning("Por favor, complete todos los campos requeridos", "Advertencia", {
        timeOut: 3e3,
        positionClass: "toast-top-right",
        progressBar: true,
        closeButton: true
      });
    }
  }
  onCancel() {
    this.router.navigate(["/dashboard/business-dashboard/sell-list"]);
  }
  formatDateForInput(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  }
  loadClientes() {
    this.clienteService.getClientes().subscribe({
      next: (response) => {
        const clientesData = response?.data?.data || response?.data || response || [];
        this.clientes = Array.isArray(clientesData) ? clientesData : [];
      },
      error: (error) => {
        console.error("Error loading clientes:", error);
        this.clientes = [];
      }
    });
  }
  markFormGroupTouched() {
    Object.keys(this.ventaForm.controls).forEach((key) => {
      const control = this.ventaForm.get(key);
      control?.markAsTouched();
    });
  }
};
_NewSellComponent.\u0275fac = function NewSellComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewSellComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(VentaService), \u0275\u0275directiveInject(ClienteService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_NewSellComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewSellComponent, selectors: [["app-new-sell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 7, consts: [[1, "page-header", "d-lg-flex", "d-block"], [1, "page-leftheader"], [1, "page-title"], [1, "page-rightheader"], [1, "btn-list", "d-flex", "gap-1"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "fe", "fe-arrow-left", "fs-12", "my-auto", "me-2"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "text-center", "py-4"], [1, "card-footer", "text-end"], ["type", "button", 1, "btn", "btn-outline-secondary", "me-2", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], ["formControlName", "idCliente", "bindLabel", "nombre", "bindValue", "id", "placeholder", "Seleccionar cliente"], [3, "value"], [1, "text-danger"], ["formControlName", "fecha", "type", "date", 1, "form-control"], ["formControlName", "total", "type", "number", "step", "0.01", "placeholder", "Total de la venta", 1, "form-control"], ["formControlName", "metodoPago", "placeholder", "Seleccionar m\xE9todo de pago"], ["value", "Efectivo"], ["value", "Tarjeta"], ["value", "Transferencia"], ["value", "Cheque"], ["formControlName", "estado", "placeholder", "Seleccionar estado"], ["value", "Pendiente"], ["value", "Completada"], ["value", "Cancelada"], [1, "col-md-12"], ["formControlName", "observaciones", "rows", "3", "placeholder", "Observaciones adicionales (opcional)", 1, "form-control"]], template: function NewSellComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "button", 5);
    \u0275\u0275listener("click", function NewSellComponent_Template_button_click_6_listener() {
      return ctx.onCancel();
    });
    \u0275\u0275element(7, "i", 6);
    \u0275\u0275text(8, "Volver ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "form", 7);
    \u0275\u0275listener("ngSubmit", function NewSellComponent_Template_form_ngSubmit_9_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "h4", 12);
    \u0275\u0275text(15, "Informaci\xF3n de la Venta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 13);
    \u0275\u0275template(17, NewSellComponent_Conditional_17_Template, 4, 0, "div", 14)(18, NewSellComponent_Conditional_18_Template, 51, 4, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 15)(20, "button", 16);
    \u0275\u0275listener("click", function NewSellComponent_Template_button_click_20_listener() {
      return ctx.onCancel();
    });
    \u0275\u0275text(21, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 17);
    \u0275\u0275template(23, NewSellComponent_Conditional_23_Template, 1, 0, "span", 18);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.isEditing ? "Editar Venta" : "Nueva Venta");
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx.ventaForm);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx.loading ? 17 : 18);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loading ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isEditing ? "Actualizar" : "Crear", " Venta ");
  }
}, dependencies: [SharedModule, NgSelectModule, NgSelectComponent, NgOptionComponent, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName] });
var NewSellComponent = _NewSellComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewSellComponent, { className: "NewSellComponent" });
})();
export {
  NewSellComponent
};
//# sourceMappingURL=new-sell.component-EUWIYDAB.js.map
