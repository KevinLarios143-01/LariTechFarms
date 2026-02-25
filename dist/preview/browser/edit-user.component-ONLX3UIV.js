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
  ActivatedRoute,
  ChangeDetectorRef,
  Router,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate2
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/hrmdashboards/users/edit-user/edit-user.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function EditUserComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 9)(2, "span", 10);
    \u0275\u0275text(3, "Cargando...");
    \u0275\u0275elementEnd()()();
  }
}
function EditUserComponent_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, " El nombre es requerido (m\xEDnimo 2 caracteres) ");
    \u0275\u0275elementEnd();
  }
}
function EditUserComponent_Conditional_9_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, " El apellido es requerido (m\xEDnimo 2 caracteres) ");
    \u0275\u0275elementEnd();
  }
}
function EditUserComponent_Conditional_9_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, " Ingrese un email v\xE1lido ");
    \u0275\u0275elementEnd();
  }
}
function EditUserComponent_Conditional_9_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const empleado_r3 = ctx.$implicit;
    \u0275\u0275property("value", empleado_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", empleado_r3.nombre, " ", empleado_r3.apellido, "");
  }
}
function EditUserComponent_Conditional_9_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, " Seleccione un rol ");
    \u0275\u0275elementEnd();
  }
}
function EditUserComponent_Conditional_9_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 31);
    \u0275\u0275text(1, " Actualizando... ");
  }
}
function EditUserComponent_Conditional_9_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Actualizar Usuario ");
  }
}
function EditUserComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11);
    \u0275\u0275listener("ngSubmit", function EditUserComponent_Conditional_9_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 12)(3, "div", 13)(4, "label", 14);
    \u0275\u0275text(5, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 15);
    \u0275\u0275template(7, EditUserComponent_Conditional_9_Conditional_7_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 12)(9, "div", 13)(10, "label", 14);
    \u0275\u0275text(11, "Apellido *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 17);
    \u0275\u0275template(13, EditUserComponent_Conditional_9_Conditional_13_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 1)(15, "div", 12)(16, "div", 13)(17, "label", 14);
    \u0275\u0275text(18, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 18);
    \u0275\u0275template(20, EditUserComponent_Conditional_9_Conditional_20_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "label", 14);
    \u0275\u0275text(24, "Empleado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 19)(26, "option", 20);
    \u0275\u0275text(27, "Seleccione un empleado (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(28, EditUserComponent_Conditional_9_For_29_Template, 2, 3, "option", 21, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 1)(31, "div", 12)(32, "div", 13)(33, "label", 14);
    \u0275\u0275text(34, "Rol *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 22)(36, "option", 20);
    \u0275\u0275text(37, "Seleccione un rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 23);
    \u0275\u0275text(39, "Super Administrador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 24);
    \u0275\u0275text(41, "Administrador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 25);
    \u0275\u0275text(43, "Gerente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 26);
    \u0275\u0275text(45, "Supervisor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 27);
    \u0275\u0275text(47, "Operador");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, EditUserComponent_Conditional_9_Conditional_48_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(49, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 1)(51, "div", 28)(52, "button", 29);
    \u0275\u0275template(53, EditUserComponent_Conditional_9_Conditional_53_Template, 2, 0)(54, EditUserComponent_Conditional_9_Conditional_54_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "button", 30);
    \u0275\u0275listener("click", function EditUserComponent_Conditional_9_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(56, " Cancelar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.userForm);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(((tmp_2_0 = ctx_r1.userForm.get("nombre")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.userForm.get("nombre")) == null ? null : tmp_2_0.touched) ? 7 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_3_0 = ctx_r1.userForm.get("apellido")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.userForm.get("apellido")) == null ? null : tmp_3_0.touched) ? 13 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(((tmp_4_0 = ctx_r1.userForm.get("email")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.userForm.get("email")) == null ? null : tmp_4_0.touched) ? 20 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.empleados);
    \u0275\u0275advance(20);
    \u0275\u0275conditional(((tmp_6_0 = ctx_r1.userForm.get("rol")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.userForm.get("rol")) == null ? null : tmp_6_0.touched) ? 48 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.userForm.invalid || ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoading ? 53 : 54);
  }
}
var _EditUserComponent = class _EditUserComponent {
  constructor(fb, router, route, usuarioService, empleadoService, toastr, cdr) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.usuarioService = usuarioService;
    this.empleadoService = empleadoService;
    this.toastr = toastr;
    this.cdr = cdr;
    this.isLoading = false;
    this.empleados = [];
  }
  ngOnInit() {
    this.userId = this.route.snapshot.params["id"];
    this.initForm();
    this.loadEmpleados();
    this.loadUser();
  }
  initForm() {
    this.userForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      apellido: ["", [Validators.required, Validators.minLength(2)]],
      rol: ["", [Validators.required]],
      idEmpleado: [null]
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
  loadUser() {
    this.isLoading = true;
    this.usuarioService.obtenerUsuario(this.userId).subscribe({
      next: (response) => {
        const user = response.data;
        this.userForm.patchValue({
          email: user.email,
          nombre: user.nombre,
          apellido: user.apellido,
          rol: user.rol,
          idEmpleado: user.idEmpleado
        });
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error al cargar usuario:", error);
        this.toastr.error("Error al cargar el usuario", "Error");
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  onSubmit() {
    if (this.userForm.valid) {
      this.isLoading = true;
      this.usuarioService.actualizarUsuario(this.userId, this.userForm.value).subscribe({
        next: (response) => {
          this.toastr.success("Usuario actualizado exitosamente", "\xC9xito", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.router.navigate(["/dashboard/hrmdashboards/users/user-list"]);
        },
        error: (error) => {
          console.error("Error al actualizar usuario:", error);
          this.toastr.error("Error al actualizar usuario: " + (error.error?.message || "Error desconocido"), "Error", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.isLoading = false;
        }
      });
    }
  }
  onCancel() {
    this.router.navigate(["/dashboard/hrmdashboards/users/user-list"]);
  }
};
_EditUserComponent.\u0275fac = function EditUserComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EditUserComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UsuarioService), \u0275\u0275directiveInject(EmpleadoService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_EditUserComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditUserComponent, selectors: [["app-edit-user"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 7, consts: [[3, "title", "title2", "class1", "path"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "text-center"], [3, "formGroup"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [3, "ngSubmit", "formGroup"], [1, "col-md-6"], [1, "form-group", "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "nombre", "placeholder", "Ingrese el nombre", 1, "form-control"], [1, "invalid-feedback"], ["type", "text", "formControlName", "apellido", "placeholder", "Ingrese el apellido", 1, "form-control"], ["type", "email", "formControlName", "email", "placeholder", "usuario@ejemplo.com", 1, "form-control"], ["formControlName", "idEmpleado", 1, "form-control"], ["value", ""], [3, "value"], ["formControlName", "rol", 1, "form-control"], ["value", "superadmin"], ["value", "admin"], ["value", "gerente"], ["value", "supervisor"], ["value", "operador"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-primary", "me-2", 3, "disabled"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function EditUserComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
    \u0275\u0275text(6, "Editar Informaci\xF3n del Usuario");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275template(8, EditUserComponent_Conditional_8_Template, 4, 0, "div", 7)(9, EditUserComponent_Conditional_9_Template, 57, 7, "form", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275classMap("btn btn-secondary");
    \u0275\u0275property("title", "Editar Usuario")("title2", "Volver a Lista")("class1", "")("path", "/dashboard/hrmdashboards/users/user-list");
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx.isLoading && !ctx.userForm.value.email ? 8 : 9);
  }
}, dependencies: [SharedModule, HrDashboardPageHeaderComponent, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.form-control.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n/*# sourceMappingURL=edit-user.component.css.map */"] });
var EditUserComponent = _EditUserComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditUserComponent, { className: "EditUserComponent" });
})();
export {
  EditUserComponent
};
//# sourceMappingURL=edit-user.component-ONLX3UIV.js.map
