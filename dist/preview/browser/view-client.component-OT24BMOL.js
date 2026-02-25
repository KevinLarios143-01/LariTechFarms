import {
  ClienteService
} from "./chunk-DTNROUGD.js";
import "./chunk-7WSVHSJD.js";
import {
  AngularEditorComponent,
  AngularEditorModule
} from "./chunk-QXVFNQQA.js";
import {
  SharedModule
} from "./chunk-UEAXMXBR.js";
import {
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import "./chunk-ZVXZDCDW.js";
import "./chunk-KTQLQ7YR.js";
import "./chunk-ZSUERINM.js";
import {
  NgbModal,
  NgbModule,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavOutlet,
  NgbTooltip
} from "./chunk-47LBZ5ZO.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  NgClass,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/client-dashboard/view-client/view-client.component.ts
function ViewClientComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275elementEnd();
  }
}
function ViewClientComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementEnd();
  }
}
function ViewClientComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 14)(2, "span", 15);
    \u0275\u0275text(3, "Cargando...");
    \u0275\u0275elementEnd()()();
  }
}
function ViewClientComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function ViewClientComponent_Conditional_11_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 29);
    \u0275\u0275text(3, "Email ID");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.cliente.correo);
  }
}
function ViewClientComponent_Conditional_11_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 29);
    \u0275\u0275text(3, "Contact No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.cliente.telefono);
  }
}
function ViewClientComponent_Conditional_11_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 29);
    \u0275\u0275text(3, "Address");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.cliente.direccion);
  }
}
function ViewClientComponent_Conditional_11_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 29);
    \u0275\u0275text(3, "NIT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.cliente.nit);
  }
}
function ViewClientComponent_Conditional_11_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "h5", 43);
    \u0275\u0275text(2, "Informaci\xF3n del Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 44)(5, "div", 45)(6, "label", 46);
    \u0275\u0275text(7, "Nombre:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 44)(11, "div", 45)(12, "label", 46);
    \u0275\u0275text(13, "ID Cliente:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 47);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 11)(17, "div", 44)(18, "div", 45)(19, "label", 46);
    \u0275\u0275text(20, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 47);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 44)(24, "div", 45)(25, "label", 46);
    \u0275\u0275text(26, "Tel\xE9fono:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 47);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 11)(30, "div", 44)(31, "div", 45)(32, "label", 46);
    \u0275\u0275text(33, "Direcci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 47);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 44)(37, "div", 45)(38, "label", 46);
    \u0275\u0275text(39, "NIT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p", 47);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 11)(43, "div", 44)(44, "div", 45)(45, "label", 46);
    \u0275\u0275text(46, "Estado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 47)(48, "span", 30);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 44)(51, "div", 45)(52, "label", 46);
    \u0275\u0275text(53, "Fecha de Registro:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p", 47);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "date");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.cliente.nombre || "No disponible");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("#", ctx_r0.cliente.id, "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.cliente.correo || "No disponible");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.cliente.telefono || "No disponible");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.cliente.direccion || "No disponible");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.cliente.nit || "No disponible");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", ctx_r0.cliente.estado ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.cliente.estado ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 9, ctx_r0.cliente.fechaRegistro, "dd/MM/yyyy"));
  }
}
function ViewClientComponent_Conditional_11_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 9)(2, "p", 49);
    \u0275\u0275text(3, "Las ventas del cliente se mostrar\xE1n aqu\xED cuando est\xE9n disponibles.");
    \u0275\u0275elementEnd()()();
  }
}
function ViewClientComponent_Conditional_11_ng_template_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 9)(2, "p", 49);
    \u0275\u0275text(3, "El historial de transacciones del cliente se mostrar\xE1 aqu\xED.");
    \u0275\u0275elementEnd()()();
  }
}
function ViewClientComponent_Conditional_11_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 50)(2, "div", 45)(3, "label", 46);
    \u0275\u0275text(4, "T\xEDtulo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 45)(7, "label", 46);
    \u0275\u0275text(8, "Nota:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "angular-editor", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "a", 53);
    \u0275\u0275text(12, "Guardar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("placeholder", "Ingrese texto aqu\xED...")("config", ctx_r0.config);
  }
}
function ViewClientComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "div", 19)(5, "div", 20)(6, "div", 21);
    \u0275\u0275element(7, "img", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 23)(9, "h5", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h6", 25);
    \u0275\u0275text(12, "Cliente");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "h5", 26);
    \u0275\u0275text(14, "Detalles B\xE1sicos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 27)(16, "table", 28)(17, "tbody")(18, "tr")(19, "td")(20, "span", 29);
    \u0275\u0275text(21, "Client ID");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, ViewClientComponent_Conditional_11_Conditional_27_Template, 9, 1, "tr")(28, ViewClientComponent_Conditional_11_Conditional_28_Template, 9, 1, "tr")(29, ViewClientComponent_Conditional_11_Conditional_29_Template, 9, 1, "tr");
    \u0275\u0275elementStart(30, "tr")(31, "td")(32, "span", 29);
    \u0275\u0275text(33, "Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "td");
    \u0275\u0275text(35, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td")(37, "span", 30);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(39, "h5", 26);
    \u0275\u0275text(40, "Informaci\xF3n Adicional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 27)(42, "table", 31)(43, "tbody")(44, "tr")(45, "td")(46, "span", 29);
    \u0275\u0275text(47, "Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "td");
    \u0275\u0275text(49, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "td")(51, "span");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(53, ViewClientComponent_Conditional_11_Conditional_53_Template, 9, 1, "tr");
    \u0275\u0275elementStart(54, "tr")(55, "td")(56, "span", 29);
    \u0275\u0275text(57, "Fecha Registro");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "td");
    \u0275\u0275text(59, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "td")(61, "span");
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "date");
    \u0275\u0275elementEnd()()()()()()()()();
    \u0275\u0275elementStart(64, "div", 32)(65, "div", 33)(66, "div", 34)(67, "ul", 35, 0);
    \u0275\u0275twoWayListener("activeIdChange", function ViewClientComponent_Conditional_11_Template_ul_activeIdChange_67_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.active, $event) || (ctx_r0.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(69, "li", 36)(70, "a", 37);
    \u0275\u0275text(71, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275template(72, ViewClientComponent_Conditional_11_ng_template_72_Template, 57, 12, "ng-template", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "li", 39)(74, "a", 37);
    \u0275\u0275text(75, "Ventas");
    \u0275\u0275elementEnd();
    \u0275\u0275template(76, ViewClientComponent_Conditional_11_ng_template_76_Template, 4, 0, "ng-template", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "li", 39)(78, "a", 37);
    \u0275\u0275text(79, "Historial");
    \u0275\u0275elementEnd();
    \u0275\u0275template(80, ViewClientComponent_Conditional_11_ng_template_80_Template, 4, 0, "ng-template", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "li", 39)(82, "a", 37);
    \u0275\u0275text(83, "Notas");
    \u0275\u0275elementEnd();
    \u0275\u0275template(84, ViewClientComponent_Conditional_11_ng_template_84_Template, 13, 2, "ng-template", 38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(85, "div", 40);
    \u0275\u0275element(86, "div", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const nav_r3 = \u0275\u0275reference(68);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.cliente.nombre);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate1("#", ctx_r0.cliente.id, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.cliente.correo ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.cliente.telefono ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.cliente.direccion ? 29 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ctx_r0.cliente.estado ? "bg-success-transparent" : "bg-danger-transparent");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.cliente.estado ? "Active" : "Inactive", " ");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r0.cliente.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.cliente.nit ? 53 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 16, ctx_r0.cliente.fechaRegistro, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("activeId", ctx_r0.active);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngbNavItem", 2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngbNavItem", 3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngbNavItem", 4);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngbNavOutlet", nav_r3);
  }
}
var _ViewClientComponent = class _ViewClientComponent {
  constructor(modalService, route, clienteService) {
    this.modalService = modalService;
    this.route = route;
    this.clienteService = clienteService;
    this.active = 1;
    this.clientId = null;
    this.cliente = null;
    this.loading = false;
    this.error = null;
    this.config = {
      editable: true,
      spellcheck: true,
      height: "15rem",
      minHeight: "5rem",
      placeholder: "Enter text here...",
      translate: "no",
      customClasses: [
        {
          name: "quote",
          class: "quote"
        },
        {
          name: "redText",
          class: "redText"
        },
        {
          name: "titleText",
          class: "titleText",
          tag: "h1"
        }
      ]
    };
  }
  ngOnInit() {
    this.clientId = this.route.snapshot.paramMap.get("id");
    if (this.clientId) {
      this.loadCliente(+this.clientId);
    }
  }
  loadCliente(id) {
    this.loading = true;
    this.error = null;
    this.clienteService.getClienteById(id).subscribe({
      next: (response) => {
        if (response.success) {
          this.cliente = response.data;
        } else {
          this.error = "Error al cargar el cliente";
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = "Error al cargar el cliente";
        this.loading = false;
        console.error("Error:", err);
      }
    });
  }
  open(content) {
    this.modalService.open(content, { windowClass: "modalCusSty", size: "lg" });
  }
};
_ViewClientComponent.\u0275fac = function ViewClientComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewClientComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ClienteService));
};
_ViewClientComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewClientComponent, selectors: [["app-view-client"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 5, consts: [["nav", "ngbNav"], [1, "page-header", "d-xl-flex", "d-block"], [1, "page-leftheader"], [1, "page-title"], [1, "page-rightheader", "ms-md-auto"], [1, "d-flex", "align-items-end", "flex-wrap", "my-auto", "end-content", "breadcrumb-end"], [1, "btn-list", "d-flex", "gap-2"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "E-mail", 1, "btn", "btn-light3"], ["placement", "top", "data-bs-toggle", "tooltip", "ngbTooltip", "Contact", 1, "btn", "btn-light3"], [1, "text-center", "p-4"], ["role", "alert", 1, "alert", "alert-danger"], [1, "row"], [1, "fe", "fe-mail"], [1, "fe", "fe-phone-call"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "col-xxl-4", "col-md-12", "col-lg-12"], [1, "card", "user-pro-list", "overflow-hidden"], [1, "card-body"], [1, "text-center"], [1, "widget-user-image", "mx-auto", "text-center"], [1, "avatar", "avatar-xxl", "me-2", "avatar-rounded"], ["src", "./assets/images/users/3.jpg", "alt", "img"], [1, "pro-user", "mt-3"], [1, "pro-user-username", "text-dark", "mb-1", "fs-16"], [1, "pro-user-desc", "text-muted", "fs-12"], [1, "mb-2", "mt-4", "fw-semibold"], [1, "table-responsive"], [1, "table", "text-nowrap", "table-borderless"], [1, "w-50"], [1, "badge", 3, "ngClass"], [1, "table", "text-nowrap", "table-borderless", "mb-0"], [1, "col-xxl-8", "col-md-12", "col-lg-12", "mb-4"], [1, "tab-menu-heading", "hremp-tabs", "p-0", "border-0"], [1, "tabs-menu1"], ["ngbNav", "", 1, "nav", "panel-tabs", 3, "activeIdChange", "activeId"], [1, "ms-md-4", "me-0", 3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "me-0", 3, "ngbNavItem"], [1, "panel-body", "tabs-menu-body", "hremp-tabs1", "p-0"], [3, "ngbNavOutlet"], [1, ""], [1, "mb-4", "fw-semibold"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], [1, "form-control-static"], [1, "p-0", "border-0"], [1, "text-muted"], [1, "note-content"], ["placeholder", "Ingrese t\xEDtulo", 1, "form-control"], [1, "editor", 3, "placeholder", "config"], ["href", "javascript:;", 1, "btn", "btn-primary"]], template: function ViewClientComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h4", 3);
    \u0275\u0275text(3, "Ver Cliente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6);
    \u0275\u0275template(7, ViewClientComponent_Conditional_7_Template, 2, 0, "button", 7)(8, ViewClientComponent_Conditional_8_Template, 2, 0, "button", 8);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(9, ViewClientComponent_Conditional_9_Template, 4, 0, "div", 9)(10, ViewClientComponent_Conditional_10_Template, 2, 1, "div", 10)(11, ViewClientComponent_Conditional_11_Template, 87, 19, "div", 11);
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275conditional((ctx.cliente == null ? null : ctx.cliente.correo) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.cliente == null ? null : ctx.cliente.telefono) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loading ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.error ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.cliente && !ctx.loading ? 11 : -1);
  }
}, dependencies: [SharedModule, NgbModule, NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavOutlet, NgbTooltip, AngularEditorModule, AngularEditorComponent, NgSelectModule, RouterModule, CommonModule, NgClass, DatePipe] });
var ViewClientComponent = _ViewClientComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewClientComponent, { className: "ViewClientComponent" });
})();
export {
  ViewClientComponent
};
//# sourceMappingURL=view-client.component-OT24BMOL.js.map
