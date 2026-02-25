import {
  ClienteService
} from "./chunk-SLCQH36Y.js";
import "./chunk-7WSVHSJD.js";
import {
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
  CommonModule,
  DatePipe,
  Router,
  RouterLink,
  RouterModule,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/bussiness-dashboard/clientes/view-cliente/view-cliente.component.ts
var _c0 = (a0) => ["../../edit", a0];
function ViewClienteComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 16)(2, "span", 17);
    \u0275\u0275text(3, "Cargando...");
    \u0275\u0275elementEnd()()();
  }
}
function ViewClienteComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 18)(2, "div", 19)(3, "div", 20)(4, "h6", 21);
    \u0275\u0275text(5, "Informaci\xF3n Personal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12)(7, "div", 22)(8, "div", 23);
    \u0275\u0275text(9, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 24);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 22)(13, "div", 23);
    \u0275\u0275text(14, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 24);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 22)(18, "div", 23);
    \u0275\u0275text(19, "Correo Electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 24);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "div", 23);
    \u0275\u0275text(24, "NIT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 24);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "div", 18)(28, "div", 19)(29, "div", 20)(30, "h6", 21);
    \u0275\u0275text(31, "Informaci\xF3n Adicional");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 12)(33, "div", 22)(34, "div", 23);
    \u0275\u0275text(35, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 24);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 21)(39, "div", 23);
    \u0275\u0275text(40, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div")(42, "span");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(44, "div", 25)(45, "div", 19)(46, "div", 20)(47, "h6", 21);
    \u0275\u0275text(48, "Informaci\xF3n de Auditor\xEDa");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 12)(50, "div", 1)(51, "div", 18)(52, "div", 23);
    \u0275\u0275text(53, "Fecha de Creaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 24);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 18)(58, "div", 23);
    \u0275\u0275text(59, "\xDAltima Actualizaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 24);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "date");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.cliente.nombre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.cliente.telefono || "No especificado");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.cliente.correo || "No especificado");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.cliente.nit || "No especificado");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.cliente.direccion || "No especificada");
    \u0275\u0275advance(5);
    \u0275\u0275classMap("badge " + (ctx_r0.cliente.activo ? "bg-success" : "bg-danger"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.cliente.activo ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 10, ctx_r0.cliente.createdAt, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 13, ctx_r0.cliente.updatedAt, "dd/MM/yyyy HH:mm"));
  }
}
function ViewClienteComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, " No se encontr\xF3 el cliente solicitado. ");
    \u0275\u0275elementEnd();
  }
}
var _ViewClienteComponent = class _ViewClienteComponent {
  constructor(clienteService, router, route, cdr, toastr) {
    this.clienteService = clienteService;
    this.router = router;
    this.route = route;
    this.cdr = cdr;
    this.toastr = toastr;
    this.cliente = null;
    this.isLoading = false;
  }
  ngOnInit() {
    this.clienteId = Number(this.route.snapshot.paramMap.get("id"));
    this.loadCliente();
  }
  loadCliente() {
    this.isLoading = true;
    this.clienteService.getClienteById(this.clienteId).subscribe({
      next: (response) => {
        if (response?.data) {
          this.cliente = response.data;
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error("Error al cargar el cliente", "Error");
        this.router.navigate(["../list"], { relativeTo: this.route });
      }
    });
  }
  toggleEstado() {
    if (!this.cliente)
      return;
    const nuevoEstado = !this.cliente.activo;
    const mensaje = nuevoEstado ? "activar" : "desactivar";
    if (confirm(`\xBFEst\xE1 seguro de ${mensaje} este cliente?`)) {
      const action = nuevoEstado ? this.clienteService.activateCliente(this.clienteId) : this.clienteService.deactivateCliente(this.clienteId);
      action.subscribe({
        next: () => {
          this.toastr.success(`Cliente ${nuevoEstado ? "activado" : "desactivado"} exitosamente`, "\xC9xito");
          this.loadCliente();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || `Error al ${mensaje} cliente`;
          this.toastr.error(errorMsg, "Error");
        }
      });
    }
  }
};
_ViewClienteComponent.\u0275fac = function ViewClienteComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewClienteComponent)(\u0275\u0275directiveInject(ClienteService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_ViewClienteComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewClienteComponent, selectors: [["app-view-cliente"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 11, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title"], [1, "d-flex", "gap-2"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "ri-edit-line"], [1, "btn", "btn-sm", 3, "click"], ["routerLink", "../../list", 1, "btn", "btn-secondary", "btn-sm"], [1, "ri-arrow-left-line"], [1, "card-body"], [1, "text-center", "py-5"], [1, "row", "g-4"], [1, "alert", "alert-warning"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "col-md-6"], [1, "card", "border"], [1, "card-header", "bg-light"], [1, "mb-0"], [1, "mb-3"], [1, "info-label"], [1, "info-value"], [1, "col-md-12"]], template: function ViewClienteComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Detalle del Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 9);
    \u0275\u0275listener("click", function ViewClienteComponent_Template_button_click_11_listener() {
      return ctx.toggleEstado();
    });
    \u0275\u0275element(12, "i");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 10);
    \u0275\u0275element(15, "i", 11);
    \u0275\u0275text(16, " Volver ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 12);
    \u0275\u0275template(18, ViewClienteComponent_Conditional_18_Template, 4, 0, "div", 13)(19, ViewClienteComponent_Conditional_19_Template, 63, 16, "div", 14)(20, ViewClienteComponent_Conditional_20_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, ctx.clienteId));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("btn-success", ctx.cliente && !ctx.cliente.activo)("btn-warning", ctx.cliente && ctx.cliente.activo);
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx.cliente == null ? null : ctx.cliente.activo) ? "ri-close-circle-line" : "ri-check-line");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx.cliente == null ? null : ctx.cliente.activo) ? "Desactivar" : "Activar", " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.isLoading ? 18 : ctx.cliente ? 19 : 20);
  }
}, dependencies: [CommonModule, DatePipe, RouterModule, RouterLink, SharedModule], styles: ["\n\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #6c757d;\n  margin-bottom: 0.25rem;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #212529;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  padding: 0.5em 0.75em;\n}\n/*# sourceMappingURL=view-cliente.component.css.map */"] });
var ViewClienteComponent = _ViewClienteComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewClienteComponent, { className: "ViewClienteComponent" });
})();
export {
  ViewClienteComponent
};
//# sourceMappingURL=view-cliente.component-XEPJVV4O.js.map
