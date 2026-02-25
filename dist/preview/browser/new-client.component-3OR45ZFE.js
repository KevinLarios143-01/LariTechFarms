import {
  ClienteService
} from "./chunk-DTNROUGD.js";
import "./chunk-7WSVHSJD.js";
import {
  PageHeaderComponent,
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
import {
  FlatpickrDefaults,
  FlatpickrModule,
  esm_default
} from "./chunk-ZSUERINM.js";
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
  CommonModule,
  NgIf,
  Router,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/client-dashboard/new-client/new-client.component.ts
function NewClientComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "small");
    \u0275\u0275text(2, "El nombre es requerido");
    \u0275\u0275elementEnd()();
  }
}
function NewClientComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "small");
    \u0275\u0275text(2, "Ingrese un email v\xE1lido");
    \u0275\u0275elementEnd()();
  }
}
function NewClientComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "small");
    \u0275\u0275text(2, "El tel\xE9fono es requerido");
    \u0275\u0275elementEnd()();
  }
}
function NewClientComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "small");
    \u0275\u0275text(2, "El NIT es requerido");
    \u0275\u0275elementEnd()();
  }
}
function NewClientComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "small");
    \u0275\u0275text(2, "La direcci\xF3n es requerida");
    \u0275\u0275elementEnd()();
  }
}
function NewClientComponent_span_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 45);
  }
}
var _NewClientComponent = class _NewClientComponent {
  constructor(fb, clienteService, router, toastr) {
    this.fb = fb;
    this.clienteService = clienteService;
    this.router = router;
    this.toastr = toastr;
    this.loading = false;
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
    this.clienteForm = this.fb.group({
      nombre: ["", Validators.required],
      telefono: ["", Validators.required],
      correo: ["", [Validators.required, Validators.email]],
      direccion: ["", Validators.required],
      nit: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.initializeFlatpickr();
  }
  onSubmit() {
    if (this.clienteForm.valid) {
      this.loading = true;
      const clienteData = this.clienteForm.value;
      this.clienteService.createCliente(clienteData).subscribe({
        next: (response) => {
          this.toastr.success("Cliente creado exitosamente", "\xC9xito", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.router.navigate(["/dashboard/client-dashboard/client-list"]);
        },
        error: (error) => {
          this.toastr.error("Error al crear el cliente: " + (error.error?.message || "Error desconocido"), "Error", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.loading = false;
        }
      });
    } else {
      this.toastr.warning("Por favor, complete todos los campos requeridos", "Advertencia", {
        timeOut: 3e3,
        positionClass: "toast-top-right"
      });
      this.markFormGroupTouched();
    }
  }
  onCancel() {
    this.router.navigate(["/dashboard/client-dashboard/client-list"]);
  }
  markFormGroupTouched() {
    Object.keys(this.clienteForm.controls).forEach((key) => {
      const control = this.clienteForm.get(key);
      control?.markAsTouched();
    });
  }
  initializeFlatpickr() {
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i"
    };
    esm_default("#inlinetime", this.flatpickrOptions);
    this.flatpickrOptions = {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      defaultDate: "2023-11-07 14:30"
    };
    esm_default("#pretime", this.flatpickrOptions);
  }
};
_NewClientComponent.\u0275fac = function NewClientComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewClientComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ClienteService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastrService));
};
_NewClientComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewClientComponent, selectors: [["app-new-client"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  FlatpickrDefaults
]), \u0275\u0275StandaloneFeature], decls: 99, vars: 11, consts: [[3, "title"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-lg-12"], [1, "card"], [1, "card-body"], [1, "mb-5", "fw-semibold"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], ["type", "text", "placeholder", "Ingrese el nombre", "formControlName", "nombre", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "email", "placeholder", "Ingrese el correo electr\xF3nico", "formControlName", "correo", 1, "form-control"], ["type", "text", "placeholder", "Ingrese el tel\xE9fono", "formControlName", "telefono", 1, "form-control"], ["type", "text", "placeholder", "Ingrese el NIT", "formControlName", "nit", 1, "form-control"], ["name", "attendance", "placeholder", "Seleccione el pa\xEDs", 1, "form-control", "p-0", "custom-select"], ["value", "1"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["type", "text", "placeholder", "Ingrese la ciudad", 1, "form-control"], ["type", "text", "placeholder", "Ingrese el estado", 1, "form-control"], ["rows", "3", "placeholder", "Direcci\xF3n", "formControlName", "direccion", 1, "form-control"], [1, "custom-controls-stacked", "d-md-flex", "mt-3"], [1, "form-label", "me-5"], [1, "form-check", "mb-0", "me-4"], ["type", "radio", "name", "flexRadioDefault0", "id", "flexRadioDefault01", 1, "form-check-input"], ["for", "flexRadioDefault01", 1, "form-check-label"], [1, "form-check", "mb-0"], ["type", "radio", "name", "flexRadioDefault0", "id", "flexRadioDefault02", 1, "form-check-input"], ["for", "flexRadioDefault02", 1, "form-check-label"], [1, "card-footer", "text-end"], ["type", "button", 1, "btn", "btn-danger", "btn-lg", "me-2", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "text-danger"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function NewClientComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-page-header", 0);
    \u0275\u0275elementStart(1, "form", 1);
    \u0275\u0275listener("ngSubmit", function NewClientComponent_Template_form_ngSubmit_1_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
    \u0275\u0275text(7, "Detalles del Cliente:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 2)(9, "div", 7)(10, "div", 8)(11, "label", 9);
    \u0275\u0275text(12, "Nombre del Cliente *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 10);
    \u0275\u0275template(14, NewClientComponent_div_14_Template, 3, 0, "div", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "label", 9);
    \u0275\u0275text(18, "Correo Electr\xF3nico *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 12);
    \u0275\u0275template(20, NewClientComponent_div_20_Template, 3, 0, "div", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 2)(22, "div", 7)(23, "div", 8)(24, "label", 9);
    \u0275\u0275text(25, "Tel\xE9fono *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 13);
    \u0275\u0275template(27, NewClientComponent_div_27_Template, 3, 0, "div", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 7)(29, "div", 8)(30, "label", 9);
    \u0275\u0275text(31, "NIT *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 14);
    \u0275\u0275template(33, NewClientComponent_div_33_Template, 3, 0, "div", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 2)(35, "div", 7)(36, "div", 8)(37, "label", 9);
    \u0275\u0275text(38, "Pa\xEDs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "ng-select", 15)(40, "ng-option", 16);
    \u0275\u0275text(41, "Alemania");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ng-option", 17);
    \u0275\u0275text(43, "Canad\xE1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "ng-option", 18);
    \u0275\u0275text(45, "Estados Unidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "ng-option", 19);
    \u0275\u0275text(47, "Afganist\xE1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "ng-option", 20);
    \u0275\u0275text(49, "Albania");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "ng-option", 21);
    \u0275\u0275text(51, "China");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "ng-option", 22);
    \u0275\u0275text(53, "Dinamarca");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "ng-option", 23);
    \u0275\u0275text(55, "Finlandia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "ng-option", 24);
    \u0275\u0275text(57, "India");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "ng-option", 25);
    \u0275\u0275text(59, "Kiribati");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "ng-option", 26);
    \u0275\u0275text(61, "Kuwait");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "ng-option", 27);
    \u0275\u0275text(63, "M\xE9xico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "ng-option", 28);
    \u0275\u0275text(65, "Pakist\xE1n");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(66, "div", 2)(67, "div", 7)(68, "div", 8)(69, "label", 9);
    \u0275\u0275text(70, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "input", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 7)(73, "div", 8)(74, "label", 9);
    \u0275\u0275text(75, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(76, "input", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 8)(78, "label", 9);
    \u0275\u0275text(79, "Direcci\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(80, "textarea", 31);
    \u0275\u0275template(81, NewClientComponent_div_81_Template, 3, 0, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 32)(83, "label", 33);
    \u0275\u0275text(84, "Estado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 34);
    \u0275\u0275element(86, "input", 35);
    \u0275\u0275elementStart(87, "label", 36);
    \u0275\u0275text(88, " Activo ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 37);
    \u0275\u0275element(90, "input", 38);
    \u0275\u0275elementStart(91, "label", 39);
    \u0275\u0275text(92, " Inactivo ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(93, "div", 40)(94, "button", 41);
    \u0275\u0275listener("click", function NewClientComponent_Template_button_click_94_listener() {
      return ctx.onCancel();
    });
    \u0275\u0275text(95, "Cerrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "button", 42);
    \u0275\u0275template(97, NewClientComponent_span_97_Template, 1, 0, "span", 43);
    \u0275\u0275text(98);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    \u0275\u0275property("title", "Nuevo Cliente");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.clienteForm);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.clienteForm.get("nombre")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.clienteForm.get("nombre")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.clienteForm.get("correo")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.clienteForm.get("correo")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.clienteForm.get("telefono")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.clienteForm.get("telefono")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.clienteForm.get("nit")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.clienteForm.get("nit")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(48);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.clienteForm.get("direccion")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.clienteForm.get("direccion")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(13);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.loading ? "Guardando..." : "Guardar", " ");
  }
}, dependencies: [CommonModule, NgIf, SharedModule, PageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, FlatpickrModule, RouterModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName] });
var NewClientComponent = _NewClientComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewClientComponent, { className: "NewClientComponent" });
})();
export {
  NewClientComponent
};
//# sourceMappingURL=new-client.component-3OR45ZFE.js.map
