import {
  UsuarioService
} from "./chunk-EULUGLT3.js";
import "./chunk-7WSVHSJD.js";
import {
  HrDashboardPageHeaderComponent,
  SharedModule
} from "./chunk-UEAXMXBR.js";
import {
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import "./chunk-ZVXZDCDW.js";
import {
  ToastrService
} from "./chunk-KTQLQ7YR.js";
import "./chunk-ZSUERINM.js";
import "./chunk-47LBZ5ZO.js";
import {
  AsyncPipe,
  DatePipe,
  DecimalPipe,
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/hrmdashboards/users/user-list/user-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/dashboard/hrmdashboards/users/view-user", a0];
function UserListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 11)(2, "div", 3)(3, "div", 6)(4, "div", 1)(5, "div", 12)(6, "div", 13)(7, "span", 14);
    \u0275\u0275text(8, "Total Usuarios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h3", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 16)(12, "div", 17);
    \u0275\u0275element(13, "i", 18);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(14, "div", 11)(15, "div", 3)(16, "div", 6)(17, "div", 1)(18, "div", 12)(19, "div", 13)(20, "span", 14);
    \u0275\u0275text(21, "Usuarios Activos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "h3", 19);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 16)(25, "div", 20);
    \u0275\u0275element(26, "i", 21);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(27, "div", 11)(28, "div", 3)(29, "div", 6)(30, "div", 1)(31, "div", 12)(32, "div", 13)(33, "span", 14);
    \u0275\u0275text(34, "Usuarios Inactivos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "h3", 22);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 16)(38, "div", 23);
    \u0275\u0275element(39, "i", 24);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(40, "div", 11)(41, "div", 3)(42, "div", 6)(43, "div", 1)(44, "div", 12)(45, "div", 13)(46, "span", 14);
    \u0275\u0275text(47, "Nuevos Usuarios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "h3", 25);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 16)(51, "div", 26);
    \u0275\u0275element(52, "i", 27);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.stats.totalUsuarios || 0);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.stats.usuariosActivos || 0);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.stats.usuariosInactivos || 0);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.stats.usuariosNuevos || 0);
  }
}
function UserListComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 9)(1, "th", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 29)(5, "div", 30);
    \u0275\u0275element(6, "img", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "div", 32)(9, "h6", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span", 34);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "div", 35)(23, "a", 36);
    \u0275\u0275element(24, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a", 38);
    \u0275\u0275listener("click", function UserListComponent_For_29_Template_a_click_25_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleUsuarioStatus(user_r3));
    });
    \u0275\u0275element(26, "i");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.id);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", "./assets/images/laritechfarms/2.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", user_r3.nombre, " ", user_r3.apellido, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.rol);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 16, user_r3.ultimoLogin, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(user_r3.activo ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r3.activo ? "Activo" : "Inactivo");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c0, user_r3.id));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(user_r3.activo ? "btn-warning" : "btn-success");
    \u0275\u0275property("title", user_r3.activo ? "Desactivar" : "Activar");
    \u0275\u0275advance();
    \u0275\u0275classMap(user_r3.activo ? "fe fe-user-x" : "fe fe-user-check");
  }
}
var _UserListComponent = class _UserListComponent {
  constructor(userService, toastr) {
    this.userService = userService;
    this.toastr = toastr;
    this.stats = null;
    this.userList$ = userService.userData$;
    this.total$ = userService.total$;
    this.loading$ = userService.loading$;
    this.obtenerStats();
  }
  obtenerStats() {
    this.stats$ = this.userService.getUserStats();
    this.stats$.subscribe({
      next: (stats) => {
        console.log("Stats received:", stats);
        this.stats = stats;
      },
      error: (err) => console.error("Error fetching stats:", err)
    });
  }
  ngOnInit() {
  }
  toggleUsuarioStatus(usuario) {
    const isActive = usuario.activo;
    const action = isActive ? "desactivar" : "activar";
    if (confirm(`\xBFEst\xE1 seguro de que desea ${action} este usuario?`)) {
      const serviceCall = isActive ? this.userService.deactivateUsuario(usuario.id) : this.userService.activateUsuario(usuario.id);
      serviceCall.subscribe({
        next: () => {
          this.toastr.success(`Usuario ${action}do exitosamente`, "\xC9xito", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.userService["_search$"].next();
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
};
_UserListComponent.\u0275fac = function UserListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserListComponent)(\u0275\u0275directiveInject(UsuarioService), \u0275\u0275directiveInject(ToastrService));
};
_UserListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserListComponent, selectors: [["app-user-list"]], standalone: true, features: [\u0275\u0275ProvidersFeature([UsuarioService, DecimalPipe]), \u0275\u0275StandaloneFeature], decls: 31, vars: 9, consts: [[3, "title", "title2", "class1", "path"], [1, "row"], [1, "col-md-12"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "table-responsive"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap", "table-bordered", "border"], [1, "border-bottom"], ["scope", "col"], [1, "col-xl-3", "col-lg-6", "col-md-6"], [1, "col-7"], [1, "mt-0", "text-start"], [1, "fw-medium"], [1, "mb-0", "mt-1", "text-success"], [1, "col-5"], [1, "icon1", "bg-success-transparent", "my-auto", "float-end"], [1, "las", "la-users"], [1, "mb-0", "mt-1", "text-primary"], [1, "icon1", "bg-primary-transparent", "my-auto", "float-end"], [1, "las", "la-user-check"], [1, "mb-0", "mt-1", "text-secondary"], [1, "icon1", "bg-secondary-transparent", "my-auto", "float-end"], [1, "las", "la-user-times"], [1, "mb-0", "mt-1", "text-danger"], [1, "icon1", "bg-danger-transparent", "my-auto", "float-end"], [1, "las", "la-user-plus"], ["scope", "row"], [1, "d-flex", "align-items-center"], [1, "avatar", "me-2", "avatar-rounded"], ["alt", "img", 3, "src"], [1, "lh-1"], [1, "mb-1"], [1, "badge"], [1, "d-flex", "gap-2"], ["data-bs-toggle", "tooltip", "title", "Ver/Editar", 1, "btn", "btn-primary", "btn-icon", 3, "routerLink"], [1, "fe", "fe-edit"], ["data-bs-toggle", "tooltip", 1, "btn", "btn-icon", 3, "click", "title"]], template: function UserListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 0);
    \u0275\u0275template(1, UserListComponent_Conditional_1_Template, 53, 4, "div", 1);
    \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h3", 5);
    \u0275\u0275text(7, "Lista de usuarios");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "table", 8)(11, "thead")(12, "tr", 9)(13, "th", 10);
    \u0275\u0275text(14, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 10);
    \u0275\u0275text(16, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 10);
    \u0275\u0275text(18, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 10);
    \u0275\u0275text(20, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 10);
    \u0275\u0275text(22, "\xDAltimo Acceso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 10);
    \u0275\u0275text(24, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 10);
    \u0275\u0275text(26, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275repeaterCreate(28, UserListComponent_For_29_Template, 27, 21, "tr", 9, _forTrack0);
    \u0275\u0275pipe(30, "async");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275classMap("btn btn-primary");
    \u0275\u0275property("title", "Usuarios")("title2", "Agregar Nuevo Usuario")("class1", "")("path", "/dashboard/hrmdashboards/users/add-user");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.stats ? 1 : -1);
    \u0275\u0275advance(27);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(30, 7, ctx.userList$));
  }
}, dependencies: [SharedModule, HrDashboardPageHeaderComponent, RouterModule, RouterLink, NgSelectModule, AsyncPipe, DatePipe], styles: ["\n\n/*# sourceMappingURL=user-list.component.css.map */"] });
var UserListComponent = _UserListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserListComponent, { className: "UserListComponent" });
})();
export {
  UserListComponent
};
//# sourceMappingURL=user-list.component-5SK7O4ZH.js.map
