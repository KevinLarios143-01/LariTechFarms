import {
  EmpleadoService
} from "./chunk-VQWYOHLQ.js";
import {
  PuestoService
} from "./chunk-I67CRWUW.js";
import "./chunk-7WSVHSJD.js";
import {
  HrDashboardPageHeaderComponent,
  SharedModule
} from "./chunk-UEAXMXBR.js";
import {
  NgOptionTemplateDirective,
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
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/hrmdashboards/employess/add-empleado/add-empleado.component.ts
function AddEmpleadoComponent_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El nombre es requerido ");
  }
}
function AddEmpleadoComponent_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El nombre debe tener al menos 2 caracteres ");
  }
}
function AddEmpleadoComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, AddEmpleadoComponent_Conditional_15_Conditional_1_Template, 1, 0)(2, AddEmpleadoComponent_Conditional_15_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.employeeForm.get("nombre")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.employeeForm.get("nombre")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]) ? 2 : -1);
  }
}
function AddEmpleadoComponent_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El apellido es requerido ");
  }
}
function AddEmpleadoComponent_Conditional_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El apellido debe tener al menos 2 caracteres ");
  }
}
function AddEmpleadoComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, AddEmpleadoComponent_Conditional_21_Conditional_1_Template, 1, 0)(2, AddEmpleadoComponent_Conditional_21_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.employeeForm.get("apellido")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.employeeForm.get("apellido")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]) ? 2 : -1);
  }
}
function AddEmpleadoComponent_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El email es requerido ");
  }
}
function AddEmpleadoComponent_Conditional_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ingrese un email v\xE1lido ");
  }
}
function AddEmpleadoComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, AddEmpleadoComponent_Conditional_28_Conditional_1_Template, 1, 0)(2, AddEmpleadoComponent_Conditional_28_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.employeeForm.get("correo")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.employeeForm.get("correo")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["email"]) ? 2 : -1);
  }
}
function AddEmpleadoComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, " El tel\xE9fono es requerido ");
    \u0275\u0275elementEnd();
  }
}
function AddEmpleadoComponent_ng_template_41_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Salario base: Q", item_r2.salarioBase, "");
  }
}
function AddEmpleadoComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AddEmpleadoComponent_ng_template_41_Conditional_3_Template, 2, 1, "small", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.salarioBase ? 3 : -1);
  }
}
function AddEmpleadoComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, " El puesto es requerido ");
    \u0275\u0275elementEnd();
  }
}
function AddEmpleadoComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, " La fecha de contrataci\xF3n es requerida ");
    \u0275\u0275elementEnd();
  }
}
function AddEmpleadoComponent_Conditional_60_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El salario es requerido ");
  }
}
function AddEmpleadoComponent_Conditional_60_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El salario debe ser mayor a 0 ");
  }
}
function AddEmpleadoComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, AddEmpleadoComponent_Conditional_60_Conditional_1_Template, 1, 0)(2, AddEmpleadoComponent_Conditional_60_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.employeeForm.get("salario")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.employeeForm.get("salario")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["min"]) ? 2 : -1);
  }
}
function AddEmpleadoComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, " Seleccione un g\xE9nero ");
    \u0275\u0275elementEnd();
  }
}
function AddEmpleadoComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, " Seleccione un tipo de contrato ");
    \u0275\u0275elementEnd();
  }
}
function AddEmpleadoComponent_Conditional_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 52);
    \u0275\u0275text(1, " Guardando... ");
  }
}
function AddEmpleadoComponent_Conditional_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Guardar Empleado ");
  }
}
var _AddEmpleadoComponent = class _AddEmpleadoComponent {
  constructor(fb, router, empleadoService, puestoService, toastr) {
    this.fb = fb;
    this.router = router;
    this.empleadoService = empleadoService;
    this.puestoService = puestoService;
    this.toastr = toastr;
    this.isLoading = false;
    this.puestos = [];
    this.loadingPuestos = false;
  }
  ngOnInit() {
    this.initForm();
    this.loadPuestos();
  }
  initForm() {
    this.employeeForm = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      apellido: ["", [Validators.required, Validators.minLength(2)]],
      correo: ["", [Validators.required, Validators.email]],
      telefono: ["", [Validators.required]],
      idPuesto: ["", [Validators.required]],
      departamento: [""],
      fechaContratacion: ["", [Validators.required]],
      salario: ["", [Validators.required, Validators.min(0)]],
      genero: ["", [Validators.required]],
      estadoCivil: [""],
      direccion: [""],
      tipoContrato: ["", [Validators.required]]
    });
  }
  loadPuestos() {
    this.loadingPuestos = true;
    this.puestoService.getPuestos({ activo: true, limit: 1e3 }).subscribe({
      next: (response) => {
        if (response.success) {
          this.puestos = response.data.data;
        }
        this.loadingPuestos = false;
      },
      error: (error) => {
        console.error("Error al cargar puestos:", error);
        this.toastr.error("No se pudieron cargar los puestos", "Error");
        this.loadingPuestos = false;
      }
    });
  }
  onSubmit() {
    if (this.employeeForm.valid) {
      this.isLoading = true;
      this.empleadoService.createEmpleado(this.employeeForm.value).subscribe({
        next: (response) => {
          this.toastr.success("Empleado creado exitosamente", "\xC9xito", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.router.navigate(["/dashboard/hrmdashboards/employees/employee-list"]);
        },
        error: (error) => {
          console.error("Error al crear empleado:", error);
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
          this.toastr.error("Error al crear empleado: " + errorMessage, "Error", {
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
  onCancel() {
    this.router.navigate(["/dashboard/hrmdashboards/employees/employee-list"]);
  }
  markFormGroupTouched() {
    Object.keys(this.employeeForm.controls).forEach((key) => {
      const control = this.employeeForm.get(key);
      control?.markAsTouched();
    });
  }
};
_AddEmpleadoComponent.\u0275fac = function AddEmpleadoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddEmpleadoComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EmpleadoService), \u0275\u0275directiveInject(PuestoService), \u0275\u0275directiveInject(ToastrService));
};
_AddEmpleadoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddEmpleadoComponent, selectors: [["app-add-empleado"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 120, vars: 38, consts: [[3, "title", "title2", "class1", "path"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "col-md-6"], [1, "form-group", "mb-3"], ["for", "nombre", 1, "form-label"], ["type", "text", "formControlName", "nombre", "placeholder", "Ingrese el nombre", 1, "form-control"], [1, "invalid-feedback", "d-block"], ["for", "apellido", 1, "form-label"], ["type", "text", "formControlName", "apellido", "placeholder", "Ingrese el apellido", 1, "form-control"], ["for", "correo", 1, "form-label"], ["type", "email", "formControlName", "correo", "placeholder", "empleado@ejemplo.com", 1, "form-control"], ["for", "telefono", 1, "form-label"], ["type", "text", "formControlName", "telefono", "placeholder", "Ingrese el tel\xE9fono", 1, "form-control"], ["for", "idPuesto", 1, "form-label"], ["bindLabel", "nombre", "bindValue", "id", "formControlName", "idPuesto", "placeholder", "Seleccione un puesto", 3, "items", "loading"], ["ng-option-tmp", ""], ["for", "departamento", 1, "form-label"], ["type", "text", "formControlName", "departamento", "placeholder", "Ingrese el departamento", 1, "form-control"], ["for", "fechaContratacion", 1, "form-label"], ["type", "date", "formControlName", "fechaContratacion", 1, "form-control"], ["for", "salario", 1, "form-label"], ["type", "number", "formControlName", "salario", "placeholder", "0.00", "min", "0", "step", "0.01", 1, "form-control"], ["for", "genero", 1, "form-label"], ["formControlName", "genero", 1, "form-control"], ["value", ""], ["value", "M"], ["value", "F"], ["value", "Otro"], ["for", "tipoContrato", 1, "form-label"], ["formControlName", "tipoContrato", 1, "form-control"], ["value", "Tiempo Completo"], ["value", "Medio Tiempo"], ["value", "Temporal"], ["value", "Contrato"], ["for", "estadoCivil", 1, "form-label"], ["formControlName", "estadoCivil", 1, "form-control"], ["value", "Soltero"], ["value", "Casado"], ["value", "Divorciado"], ["value", "Viudo"], ["for", "direccion", 1, "form-label"], ["formControlName", "direccion", "rows", "3", "placeholder", "Ingrese la direcci\xF3n", 1, "form-control"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-primary", "me-2", 3, "disabled"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "text-muted", "d-block"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function AddEmpleadoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
    \u0275\u0275text(6, "Informaci\xF3n del Empleado");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "form", 7);
    \u0275\u0275listener("ngSubmit", function AddEmpleadoComponent_Template_form_ngSubmit_8_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(9, "div", 1)(10, "div", 8)(11, "div", 9)(12, "label", 10);
    \u0275\u0275text(13, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 11);
    \u0275\u0275template(15, AddEmpleadoComponent_Conditional_15_Template, 3, 2, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 8)(17, "div", 9)(18, "label", 13);
    \u0275\u0275text(19, "Apellido *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 14);
    \u0275\u0275template(21, AddEmpleadoComponent_Conditional_21_Template, 3, 2, "div", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 1)(23, "div", 8)(24, "div", 9)(25, "label", 15);
    \u0275\u0275text(26, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 16);
    \u0275\u0275template(28, AddEmpleadoComponent_Conditional_28_Template, 3, 2, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 8)(30, "div", 9)(31, "label", 17);
    \u0275\u0275text(32, "Tel\xE9fono *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 18);
    \u0275\u0275template(34, AddEmpleadoComponent_Conditional_34_Template, 2, 0, "div", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 1)(36, "div", 8)(37, "div", 9)(38, "label", 19);
    \u0275\u0275text(39, "Puesto *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ng-select", 20);
    \u0275\u0275template(41, AddEmpleadoComponent_ng_template_41_Template, 4, 2, "ng-template", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, AddEmpleadoComponent_Conditional_42_Template, 2, 0, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 8)(44, "div", 9)(45, "label", 22);
    \u0275\u0275text(46, "Departamento");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "input", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 1)(49, "div", 8)(50, "div", 9)(51, "label", 24);
    \u0275\u0275text(52, "Fecha de Contrataci\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 25);
    \u0275\u0275template(54, AddEmpleadoComponent_Conditional_54_Template, 2, 0, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 8)(56, "div", 9)(57, "label", 26);
    \u0275\u0275text(58, "Salario *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "input", 27);
    \u0275\u0275template(60, AddEmpleadoComponent_Conditional_60_Template, 3, 2, "div", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 1)(62, "div", 8)(63, "div", 9)(64, "label", 28);
    \u0275\u0275text(65, "G\xE9nero *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "select", 29)(67, "option", 30);
    \u0275\u0275text(68, "Seleccione un g\xE9nero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "option", 31);
    \u0275\u0275text(70, "Masculino");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "option", 32);
    \u0275\u0275text(72, "Femenino");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "option", 33);
    \u0275\u0275text(74, "Otro");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(75, AddEmpleadoComponent_Conditional_75_Template, 2, 0, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 8)(77, "div", 9)(78, "label", 34);
    \u0275\u0275text(79, "Tipo de Contrato *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "select", 35)(81, "option", 30);
    \u0275\u0275text(82, "Seleccione un tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "option", 36);
    \u0275\u0275text(84, "Tiempo Completo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "option", 37);
    \u0275\u0275text(86, "Medio Tiempo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "option", 38);
    \u0275\u0275text(88, "Temporal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "option", 39);
    \u0275\u0275text(90, "Por Contrato");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(91, AddEmpleadoComponent_Conditional_91_Template, 2, 0, "div", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(92, "div", 1)(93, "div", 8)(94, "div", 9)(95, "label", 40);
    \u0275\u0275text(96, "Estado Civil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "select", 41)(98, "option", 30);
    \u0275\u0275text(99, "Seleccione un estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "option", 42);
    \u0275\u0275text(101, "Soltero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "option", 43);
    \u0275\u0275text(103, "Casado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "option", 44);
    \u0275\u0275text(105, "Divorciado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "option", 45);
    \u0275\u0275text(107, "Viudo");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(108, "div", 8)(109, "div", 9)(110, "label", 46);
    \u0275\u0275text(111, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(112, "textarea", 47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(113, "div", 1)(114, "div", 48)(115, "button", 49);
    \u0275\u0275template(116, AddEmpleadoComponent_Conditional_116_Template, 2, 0)(117, AddEmpleadoComponent_Conditional_117_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "button", 50);
    \u0275\u0275listener("click", function AddEmpleadoComponent_Template_button_click_118_listener() {
      return ctx.onCancel();
    });
    \u0275\u0275text(119, " Cancelar ");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_22_0;
    let tmp_23_0;
    let tmp_24_0;
    let tmp_25_0;
    \u0275\u0275classMap("btn btn-secondary");
    \u0275\u0275property("title", "Agregar Empleado")("title2", "Volver a Lista")("class1", "")("path", "/dashboard/hrmdashboards/employees/employee-list");
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.employeeForm);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx.employeeForm.get("nombre")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.employeeForm.get("nombre")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_7_0 = ctx.employeeForm.get("nombre")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.employeeForm.get("nombre")) == null ? null : tmp_7_0.touched) ? 15 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx.employeeForm.get("apellido")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.employeeForm.get("apellido")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_9_0 = ctx.employeeForm.get("apellido")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.employeeForm.get("apellido")) == null ? null : tmp_9_0.touched) ? 21 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx.employeeForm.get("correo")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.employeeForm.get("correo")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = ctx.employeeForm.get("correo")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.employeeForm.get("correo")) == null ? null : tmp_11_0.touched) ? 28 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx.employeeForm.get("telefono")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.employeeForm.get("telefono")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_13_0 = ctx.employeeForm.get("telefono")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.employeeForm.get("telefono")) == null ? null : tmp_13_0.touched) ? 34 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_14_0 = ctx.employeeForm.get("idPuesto")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx.employeeForm.get("idPuesto")) == null ? null : tmp_14_0.touched));
    \u0275\u0275property("items", ctx.puestos)("loading", ctx.loadingPuestos);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_17_0 = ctx.employeeForm.get("idPuesto")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx.employeeForm.get("idPuesto")) == null ? null : tmp_17_0.touched) ? 42 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275classProp("is-invalid", ((tmp_18_0 = ctx.employeeForm.get("fechaContratacion")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx.employeeForm.get("fechaContratacion")) == null ? null : tmp_18_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_19_0 = ctx.employeeForm.get("fechaContratacion")) == null ? null : tmp_19_0.invalid) && ((tmp_19_0 = ctx.employeeForm.get("fechaContratacion")) == null ? null : tmp_19_0.touched) ? 54 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_20_0 = ctx.employeeForm.get("salario")) == null ? null : tmp_20_0.invalid) && ((tmp_20_0 = ctx.employeeForm.get("salario")) == null ? null : tmp_20_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_21_0 = ctx.employeeForm.get("salario")) == null ? null : tmp_21_0.invalid) && ((tmp_21_0 = ctx.employeeForm.get("salario")) == null ? null : tmp_21_0.touched) ? 60 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_22_0 = ctx.employeeForm.get("genero")) == null ? null : tmp_22_0.invalid) && ((tmp_22_0 = ctx.employeeForm.get("genero")) == null ? null : tmp_22_0.touched));
    \u0275\u0275advance(9);
    \u0275\u0275conditional(((tmp_23_0 = ctx.employeeForm.get("genero")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = ctx.employeeForm.get("genero")) == null ? null : tmp_23_0.touched) ? 75 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_24_0 = ctx.employeeForm.get("tipoContrato")) == null ? null : tmp_24_0.invalid) && ((tmp_24_0 = ctx.employeeForm.get("tipoContrato")) == null ? null : tmp_24_0.touched));
    \u0275\u0275advance(11);
    \u0275\u0275conditional(((tmp_25_0 = ctx.employeeForm.get("tipoContrato")) == null ? null : tmp_25_0.invalid) && ((tmp_25_0 = ctx.employeeForm.get("tipoContrato")) == null ? null : tmp_25_0.touched) ? 91 : -1);
    \u0275\u0275advance(24);
    \u0275\u0275property("disabled", ctx.employeeForm.invalid || ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 116 : 117);
  }
}, dependencies: [SharedModule, HrDashboardPageHeaderComponent, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, FormsModule, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective] });
var AddEmpleadoComponent = _AddEmpleadoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddEmpleadoComponent, { className: "AddEmpleadoComponent" });
})();
export {
  AddEmpleadoComponent
};
//# sourceMappingURL=add-empleado.component-DI5TV2LC.js.map
