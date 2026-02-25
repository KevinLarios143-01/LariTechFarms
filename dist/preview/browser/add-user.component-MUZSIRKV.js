import {
  UsuarioService
} from "./chunk-EULUGLT3.js";
import {
  EmpleadoService
} from "./chunk-VQWYOHLQ.js";
import "./chunk-7WSVHSJD.js";
import {
  HrDashboardPageHeaderComponent,
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
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-47LBZ5ZO.js";
import {
  Router,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate2
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/hrmdashboards/users/add-user/add-user.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AddUserComponent_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El nombre es requerido ");
  }
}
function AddUserComponent_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El nombre debe tener al menos 2 caracteres ");
  }
}
function AddUserComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, AddUserComponent_Conditional_15_Conditional_1_Template, 1, 0)(2, AddUserComponent_Conditional_15_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.userForm.get("nombre")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.userForm.get("nombre")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]) ? 2 : -1);
  }
}
function AddUserComponent_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El apellido es requerido ");
  }
}
function AddUserComponent_Conditional_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El apellido debe tener al menos 2 caracteres ");
  }
}
function AddUserComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, AddUserComponent_Conditional_21_Conditional_1_Template, 1, 0)(2, AddUserComponent_Conditional_21_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.userForm.get("apellido")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.userForm.get("apellido")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]) ? 2 : -1);
  }
}
function AddUserComponent_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El email es requerido ");
  }
}
function AddUserComponent_Conditional_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ingrese un email v\xE1lido ");
  }
}
function AddUserComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, AddUserComponent_Conditional_28_Conditional_1_Template, 1, 0)(2, AddUserComponent_Conditional_28_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.userForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.userForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["email"]) ? 2 : -1);
  }
}
function AddUserComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const empleado_r2 = ctx.$implicit;
    \u0275\u0275property("value", empleado_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", empleado_r2.nombre, " ", empleado_r2.apellido, "");
  }
}
function AddUserComponent_Conditional_44_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " La contrase\xF1a es requerida ");
  }
}
function AddUserComponent_Conditional_44_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " La contrase\xF1a debe tener al menos 6 caracteres ");
  }
}
function AddUserComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, AddUserComponent_Conditional_44_Conditional_1_Template, 1, 0)(2, AddUserComponent_Conditional_44_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.userForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.userForm.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]) ? 2 : -1);
  }
}
function AddUserComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, " Seleccione un rol ");
    \u0275\u0275elementEnd();
  }
}
function AddUserComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
    \u0275\u0275text(1, " Guardando... ");
  }
}
function AddUserComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Guardar Usuario ");
  }
}
var _AddUserComponent = class _AddUserComponent {
  constructor(fb, router, usuarioService, empleadoService, toastr) {
    this.fb = fb;
    this.router = router;
    this.usuarioService = usuarioService;
    this.empleadoService = empleadoService;
    this.toastr = toastr;
    this.isLoading = false;
    this.empleados = [];
  }
  ngOnInit() {
    this.initForm();
    this.loadEmpleados();
  }
  initForm() {
    this.userForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      apellido: ["", [Validators.required, Validators.minLength(2)]],
      rol: ["", [Validators.required]],
      id_empleado: [null]
    });
  }
  onSubmit() {
    if (this.userForm.valid) {
      this.isLoading = true;
      this.usuarioService.crearUsuario(this.userForm.value).subscribe({
        next: (response) => {
          this.toastr.success("Usuario creado exitosamente", "\xC9xito", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.router.navigate(["/dashboard/hrmdashboards/users/user-list"]);
        },
        error: (error) => {
          console.error("Error al crear usuario:", error);
          let errorMessage = "Error desconocido";
          if (error.error?.message) {
            errorMessage = error.error.message;
          } else if (error.error?.error) {
            errorMessage = error.error.error;
          } else if (error.message) {
            errorMessage = error.message;
          } else if (typeof error.error === "string") {
            errorMessage = error.error;
          }
          this.toastr.error("Error al crear usuario: " + errorMessage, "Error", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.isLoading = false;
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
  markFormGroupTouched() {
    Object.keys(this.userForm.controls).forEach((key) => {
      const control = this.userForm.get(key);
      control?.markAsTouched();
    });
  }
  loadEmpleados() {
    this.empleadoService.getEmpleados().subscribe({
      next: (empleados) => {
        this.empleados = empleados;
      },
      error: (error) => {
        console.error("Error al cargar empleados:", error);
        this.toastr.error("Error al cargar la lista de empleados", "Error");
      }
    });
  }
  onCancel() {
    this.router.navigate(["/dashboard/hrmdashboards/users/user-list"]);
  }
};
_AddUserComponent.\u0275fac = function AddUserComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddUserComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UsuarioService), \u0275\u0275directiveInject(EmpleadoService), \u0275\u0275directiveInject(ToastrService));
};
_AddUserComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddUserComponent, selectors: [["app-add-user"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 73, vars: 24, consts: [[3, "title", "title2", "class1", "path"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "col-md-6"], [1, "form-group", "mb-3"], ["for", "nombre", 1, "form-label"], ["type", "text", "formControlName", "nombre", "placeholder", "Ingrese el nombre", 1, "form-control"], [1, "invalid-feedback", "d-block"], ["for", "apellido", 1, "form-label"], ["type", "text", "formControlName", "apellido", "placeholder", "Ingrese el apellido", 1, "form-control"], ["for", "email", 1, "form-label"], ["type", "email", "formControlName", "email", "placeholder", "usuario@ejemplo.com", 1, "form-control"], ["for", "id_empleado", 1, "form-label"], ["formControlName", "id_empleado", 1, "form-control"], ["value", ""], [3, "value"], ["for", "password", 1, "form-label"], ["type", "password", "formControlName", "password", "placeholder", "Ingrese la contrase\xF1a", 1, "form-control"], ["for", "rol", 1, "form-label"], ["formControlName", "rol", 1, "form-control"], ["value", "superadmin"], ["value", "admin"], ["value", "gerente"], ["value", "supervisor"], ["value", "operador"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-primary", "me-2", 3, "disabled"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function AddUserComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
    \u0275\u0275text(6, "Informaci\xF3n del Usuario");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "form", 7);
    \u0275\u0275listener("ngSubmit", function AddUserComponent_Template_form_ngSubmit_8_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(9, "div", 1)(10, "div", 8)(11, "div", 9)(12, "label", 10);
    \u0275\u0275text(13, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 11);
    \u0275\u0275template(15, AddUserComponent_Conditional_15_Template, 3, 2, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 8)(17, "div", 9)(18, "label", 13);
    \u0275\u0275text(19, "Apellido *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 14);
    \u0275\u0275template(21, AddUserComponent_Conditional_21_Template, 3, 2, "div", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 1)(23, "div", 8)(24, "div", 9)(25, "label", 15);
    \u0275\u0275text(26, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 16);
    \u0275\u0275template(28, AddUserComponent_Conditional_28_Template, 3, 2, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 8)(30, "div", 9)(31, "label", 17);
    \u0275\u0275text(32, "Empleado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 18)(34, "option", 19);
    \u0275\u0275text(35, "Seleccione un empleado (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(36, AddUserComponent_For_37_Template, 2, 3, "option", 20, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 1)(39, "div", 8)(40, "div", 9)(41, "label", 21);
    \u0275\u0275text(42, "Contrase\xF1a *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 22);
    \u0275\u0275template(44, AddUserComponent_Conditional_44_Template, 3, 2, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(45, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 1)(47, "div", 8)(48, "div", 9)(49, "label", 23);
    \u0275\u0275text(50, "Rol *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "select", 24)(52, "option", 19);
    \u0275\u0275text(53, "Seleccione un rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 25);
    \u0275\u0275text(55, "Super Administrador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "option", 26);
    \u0275\u0275text(57, "Administrador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "option", 27);
    \u0275\u0275text(59, "Gerente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "option", 28);
    \u0275\u0275text(61, "Supervisor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "option", 29);
    \u0275\u0275text(63, "Operador");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(64, AddUserComponent_Conditional_64_Template, 2, 0, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(65, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 1)(67, "div", 30)(68, "button", 31);
    \u0275\u0275template(69, AddUserComponent_Conditional_69_Template, 2, 0)(70, AddUserComponent_Conditional_70_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "button", 32);
    \u0275\u0275listener("click", function AddUserComponent_Template_button_click_71_listener() {
      return ctx.onCancel();
    });
    \u0275\u0275text(72, " Cancelar ");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    \u0275\u0275classMap("btn btn-secondary");
    \u0275\u0275property("title", "Agregar Usuario")("title2", "Volver a Lista")("class1", "")("path", "/dashboard/hrmdashboards/users/user-list");
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.userForm);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx.userForm.get("nombre")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.userForm.get("nombre")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_7_0 = ctx.userForm.get("nombre")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.userForm.get("nombre")) == null ? null : tmp_7_0.touched) ? 15 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx.userForm.get("apellido")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.userForm.get("apellido")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_9_0 = ctx.userForm.get("apellido")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.userForm.get("apellido")) == null ? null : tmp_9_0.touched) ? 21 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx.userForm.get("email")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.userForm.get("email")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = ctx.userForm.get("email")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.userForm.get("email")) == null ? null : tmp_11_0.touched) ? 28 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx.empleados);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ((tmp_13_0 = ctx.userForm.get("password")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.userForm.get("password")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_14_0 = ctx.userForm.get("password")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx.userForm.get("password")) == null ? null : tmp_14_0.touched) ? 44 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ((tmp_15_0 = ctx.userForm.get("rol")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx.userForm.get("rol")) == null ? null : tmp_15_0.touched));
    \u0275\u0275advance(13);
    \u0275\u0275conditional(((tmp_16_0 = ctx.userForm.get("rol")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx.userForm.get("rol")) == null ? null : tmp_16_0.touched) ? 64 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.userForm.invalid || ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 69 : 70);
  }
}, dependencies: [SharedModule, HrDashboardPageHeaderComponent, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n/*# sourceMappingURL=add-user.component.css.map */"] });
var AddUserComponent = _AddUserComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddUserComponent, { className: "AddUserComponent" });
})();
export {
  AddUserComponent
};
//# sourceMappingURL=add-user.component-MUZSIRKV.js.map
