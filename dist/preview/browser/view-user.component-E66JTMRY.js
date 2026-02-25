import {
  UsuarioService
} from "./chunk-EULUGLT3.js";
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
import "./chunk-47LBZ5ZO.js";
import {
  ActivatedRoute,
  ChangeDetectorRef,
  DatePipe,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/hrmdashboards/users/view-user/view-user.component.ts
function ViewUserComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
    \u0275\u0275element(5, "img", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10)(13, "button", 11);
    \u0275\u0275listener("click", function ViewUserComponent_Conditional_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275element(14, "i", 12);
    \u0275\u0275text(15, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 13);
    \u0275\u0275listener("click", function ViewUserComponent_Conditional_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onToggleStatus());
    });
    \u0275\u0275element(17, "i");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(19, "div", 14)(20, "div", 3)(21, "div", 15)(22, "h3", 16);
    \u0275\u0275text(23, "Informaci\xF3n del Usuario");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 17)(25, "div", 1)(26, "div", 18)(27, "div", 19)(28, "label", 20);
    \u0275\u0275text(29, "ID Usuario:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 21);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 18)(33, "div", 19)(34, "label", 22);
    \u0275\u0275text(35, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 21);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 1)(39, "div", 18)(40, "div", 19)(41, "label", 23);
    \u0275\u0275text(42, "Tel\xE9fono:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p", 21);
    \u0275\u0275text(44, "4234-8511");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 18)(46, "div", 19)(47, "label", 24);
    \u0275\u0275text(48, "Rol:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p", 21);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 1)(52, "div", 18)(53, "div", 19)(54, "label", 25);
    \u0275\u0275text(55, "Fecha de Creaci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p", 21);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 18)(60, "div", 19)(61, "label", 26);
    \u0275\u0275text(62, "\xDAltimo Acceso:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "p", 21);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(66, "div", 1)(67, "div", 27)(68, "button", 28);
    \u0275\u0275listener("click", function ViewUserComponent_Conditional_1_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBack());
    });
    \u0275\u0275element(69, "i", 29);
    \u0275\u0275text(70, " Volver a la Lista ");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("src", "./assets/images/users/1.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.user.nombre, " ", ctx_r1.user.apellido, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.user.rol);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.user.activo ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.user.activo ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r1.user.activo ? "btn-warning" : "btn-success");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.user.activo ? "fe fe-x" : "fe fe-check");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.user.activo ? "Desactivar" : "Activar", " ");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.user.id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.user.email);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.user.rol);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 17, ctx_r1.user.fechaCreacion, "dd/MM/yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 20, ctx_r1.user.ultimoLogin, "dd/MM/yyyy HH:mm"));
  }
}
function ViewUserComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 27)(2, "div", 3)(3, "div", 4)(4, "div", 30)(5, "span", 31);
    \u0275\u0275text(6, "Cargando...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 32);
    \u0275\u0275text(8, "Cargando informaci\xF3n del usuario...");
    \u0275\u0275elementEnd()()()()();
  }
}
var _ViewUserComponent = class _ViewUserComponent {
  constructor(route, router, usuariosService, toastr, cdr) {
    this.route = route;
    this.router = router;
    this.usuariosService = usuariosService;
    this.toastr = toastr;
    this.cdr = cdr;
    this.user = null;
    this.loading = true;
  }
  ngOnInit() {
    this.loadUser();
  }
  loadUser() {
    const userId = this.route.snapshot.paramMap.get("id");
    console.log("Loading user with ID:", userId);
    if (userId) {
      this.loading = true;
      this.usuariosService.obtenerUsuario(userId).subscribe({
        next: (response) => {
          console.log("User response received:", response);
          this.user = response.data;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error("Error al cargar usuario:", error);
          this.loading = false;
          this.cdr.detectChanges();
          this.toastr.error("Error al cargar el usuario", "Error", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
        }
      });
    } else {
      console.error("No user ID found in route");
      this.loading = false;
      this.cdr.detectChanges();
    }
  }
  onEdit() {
    if (this.user?.id) {
      this.router.navigate(["/dashboard/hrmdashboards/users/edit-user", this.user.id]);
    }
  }
  onToggleStatus() {
    if (this.user?.id) {
      const isActive = this.user.activo;
      const action = isActive ? "desactivar" : "activar";
      if (confirm(`\xBFEst\xE1 seguro de que desea ${action} este usuario?`)) {
        const serviceCall = isActive ? this.usuariosService.deactivateUsuario(this.user.id) : this.usuariosService.activateUsuario(this.user.id);
        serviceCall.subscribe({
          next: () => {
            this.toastr.success(`Usuario ${action}do exitosamente`, "\xC9xito", {
              timeOut: 3e3,
              positionClass: "toast-top-right"
            });
            this.loadUser();
          },
          error: (error) => {
            console.error("Error response:", error);
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
            this.toastr.error(`Error al ${action} el usuario: ${errorMessage}`, "Error", {
              timeOut: 3e3,
              positionClass: "toast-top-right"
            });
          }
        });
      }
    }
  }
  onBack() {
    this.router.navigate(["/dashboard/hrmdashboards/users/user-list"]);
  }
};
_ViewUserComponent.\u0275fac = function ViewUserComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewUserComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UsuarioService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_ViewUserComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewUserComponent, selectors: [["app-view-user"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 7, consts: [[3, "title", "title2", "class1", "path"], [1, "row"], [1, "col-xl-4"], [1, "card", "custom-card"], [1, "card-body", "text-center"], [1, "avatar", "avatar-xxl", "mx-auto", "mb-3"], ["alt", "Usuario", 1, "rounded-circle", 3, "src"], [1, "mb-1"], [1, "text-muted", "mb-3"], [1, "badge", "mb-3"], [1, "mt-3"], [1, "btn", "btn-primary", "btn-sm", "me-2", 3, "click"], [1, "fe", "fe-edit"], [1, "btn", "btn-sm", 3, "click"], [1, "col-xl-8"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "col-md-6"], [1, "mb-3"], ["for", "id", 1, "form-label", "fw-semibold"], [1, "text-muted"], ["for", "email", 1, "form-label", "fw-semibold"], ["for", "telefono", 1, "form-label", "fw-semibold"], ["for", "rol", 1, "form-label", "fw-semibold"], ["for", "fechaCreacion", 1, "form-label", "fw-semibold"], ["for", "ultimoLogin", 1, "form-label", "fw-semibold"], [1, "col-12"], [1, "btn", "btn-secondary", 3, "click"], [1, "fe", "fe-arrow-left"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "mt-2"]], template: function ViewUserComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 0);
    \u0275\u0275template(1, ViewUserComponent_Conditional_1_Template, 71, 23, "div", 1)(2, ViewUserComponent_Conditional_2_Template, 9, 0, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275classMap("btn btn-secondary");
    \u0275\u0275property("title", "Ver Usuario")("title2", "Volver a Lista")("class1", "")("path", "/dashboard/hrmdashboards/users/user-list");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading && ctx.user ? 1 : ctx.loading ? 2 : -1);
  }
}, dependencies: [SharedModule, HrDashboardPageHeaderComponent, DatePipe], styles: ["\n\n/*# sourceMappingURL=view-user.component.css.map */"] });
var ViewUserComponent = _ViewUserComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewUserComponent, { className: "ViewUserComponent" });
})();
export {
  ViewUserComponent
};
//# sourceMappingURL=view-user.component-E66JTMRY.js.map
