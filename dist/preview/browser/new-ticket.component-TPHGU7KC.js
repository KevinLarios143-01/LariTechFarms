import {
  TicketService
} from "./chunk-YLRYQWLL.js";
import {
  LotesService
} from "./chunk-43K7FTAL.js";
import {
  VentaService
} from "./chunk-EAZAKIYV.js";
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
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgIf,
  Router,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/bussiness-dashboard/new-ticket/new-ticket.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function NewTicketComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 26)(3, "h5", 27);
    \u0275\u0275text(4, "Informaci\xF3n de la Venta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5)(6, "div", 28)(7, "table", 29)(8, "tbody")(9, "tr")(10, "td", 30);
    \u0275\u0275text(11, "ID Venta:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tr")(15, "td", 30);
    \u0275\u0275text(16, "Cliente:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tr")(20, "td", 30);
    \u0275\u0275text(21, "Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "tr")(26, "td", 30);
    \u0275\u0275text(27, "Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td", 31);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "tr")(32, "td", 30);
    \u0275\u0275text(33, "Estado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td")(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "tr")(38, "td", 30);
    \u0275\u0275text(39, "Observaciones:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "td", 30);
    \u0275\u0275text(44, "Usuario:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.selectedVenta.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.selectedVenta.cliente == null ? null : ctx_r0.selectedVenta.cliente.nombre) || "#" + ctx_r0.selectedVenta.idCliente);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 10, ctx_r0.selectedVenta.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(30, 13, ctx_r0.selectedVenta.total, "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275classMapInterpolate1("badge bg-", ctx_r0.selectedVenta.estado === "Completada" ? "success" : ctx_r0.selectedVenta.estado === "Pendiente" ? "warning" : "danger", "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.selectedVenta.estado);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedVenta.observaciones || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.selectedVenta.usuario == null ? null : ctx_r0.selectedVenta.usuario.nombre) || "N/A");
  }
}
function NewTicketComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const venta_r2 = ctx.$implicit;
    \u0275\u0275property("value", venta_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" Venta #", venta_r2.id, " - Cliente #", venta_r2.idCliente, " - Q", \u0275\u0275pipeBind2(2, 4, venta_r2.total, "1.2-2"), " ");
  }
}
function NewTicketComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "small");
    \u0275\u0275text(2, "Debe seleccionar una venta");
    \u0275\u0275elementEnd()();
  }
}
function NewTicketComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lote_r3 = ctx.$implicit;
    \u0275\u0275property("value", lote_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lote_r3.galera || "Lote #" + lote_r3.id, " ");
  }
}
function NewTicketComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "small");
    \u0275\u0275text(2, "Debe seleccionar un lote");
    \u0275\u0275elementEnd()();
  }
}
function NewTicketComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const producto_r4 = ctx.$implicit;
    \u0275\u0275property("value", producto_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", producto_r4.nombre, " ");
  }
}
function NewTicketComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "small");
    \u0275\u0275text(2, "Debe seleccionar un producto");
    \u0275\u0275elementEnd()();
  }
}
function NewTicketComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "small");
    \u0275\u0275text(2, "La cantidad es requerida");
    \u0275\u0275elementEnd()();
  }
}
function NewTicketComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "small");
    \u0275\u0275text(2, "La fecha es requerida");
    \u0275\u0275elementEnd()();
  }
}
function NewTicketComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "small");
    \u0275\u0275text(2, "El estado es requerido");
    \u0275\u0275elementEnd()();
  }
}
function NewTicketComponent_span_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
  }
}
var _NewTicketComponent = class _NewTicketComponent {
  constructor(fb, ticketService, ventaService, lotesService, router, route, toastr, cdr) {
    this.fb = fb;
    this.ticketService = ticketService;
    this.ventaService = ventaService;
    this.lotesService = lotesService;
    this.router = router;
    this.route = route;
    this.toastr = toastr;
    this.cdr = cdr;
    this.loading = false;
    this.isEditing = false;
    this.ticketId = null;
    this.ventas = [];
    this.lotes = [];
    this.productos = [];
    this.selectedVentaData = null;
    this.estadosTicket = ["Pendiente", "Autorizado", "Despachado", "Cancelado"];
    this.ticketForm = this.fb.group({
      idVenta: ["", [Validators.required, Validators.min(1)]],
      idLote: ["", [Validators.required, Validators.min(1)]],
      idProducto: ["", [Validators.required, Validators.min(1)]],
      fecha: ["", Validators.required],
      cantidad: ["", [Validators.required, Validators.min(1)]],
      estado: ["Pendiente"],
      codigoAutorizacion: [""]
    });
  }
  ngOnInit() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.ticketForm.patchValue({ fecha: today });
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditing = true;
        this.ticketId = +params["id"];
        this.loadTicket();
      }
    });
    this.route.queryParams.subscribe((params) => {
      if (params["ventaId"]) {
        this.ticketForm.patchValue({ idVenta: +params["ventaId"] });
      }
    });
    this.loadVentas();
    this.loadLotes();
    this.loadProductos();
    this.ticketForm.get("idVenta")?.valueChanges.subscribe((ventaId) => {
      if (ventaId) {
        this.onVentaSelected(ventaId);
      }
    });
  }
  loadVentas() {
    this.ventaService.getVentas().subscribe({
      next: (response) => {
        const ventasData = response?.data?.data || response?.data || response || [];
        this.ventas = Array.isArray(ventasData) ? ventasData : [];
      },
      error: (error) => {
        console.error("Error loading ventas:", error);
        this.ventas = [];
      }
    });
  }
  loadLotes() {
    this.lotesService.getLotes().subscribe({
      next: (response) => {
        if (response?.data?.data) {
          this.lotes = response.data.data;
        } else if (response?.data?.items) {
          this.lotes = response.data.items;
        } else if (response?.data && Array.isArray(response.data)) {
          this.lotes = response.data;
        } else if (Array.isArray(response)) {
          this.lotes = response;
        } else {
          this.lotes = [];
        }
      },
      error: (error) => {
        console.error("Error loading lotes:", error);
        this.lotes = [];
      }
    });
  }
  loadTicket() {
    if (this.ticketId) {
      this.loading = true;
      this.ticketService.getTicketById(this.ticketId).subscribe({
        next: (response) => {
          const ticket = response.data;
          this.ticketForm.patchValue({
            idVenta: ticket.idVenta,
            idLote: ticket.idLote,
            idProducto: ticket.idProducto,
            fecha: this.formatDateForInput(ticket.fecha),
            cantidad: ticket.cantidad,
            estado: ticket.estado,
            codigoAutorizacion: ticket.codigoAutorizacion || ""
          });
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error("Error al cargar ticket:", error);
          this.toastr.error("Error al cargar el ticket", "Error", {
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
    if (this.ticketForm.valid) {
      this.loading = true;
      const formData = this.ticketForm.value;
      if (this.isEditing && this.ticketId) {
        this.ticketService.updateTicket(this.ticketId, formData).subscribe({
          next: () => {
            this.toastr.success("Ticket actualizado exitosamente", "\xC9xito", {
              timeOut: 3e3,
              positionClass: "toast-top-right"
            });
            this.router.navigate(["/dashboard/business-dashboard/ticket-list"]);
            this.loading = false;
            this.cdr.detectChanges();
          },
          error: (error) => {
            console.error("Error al actualizar ticket:", error);
            this.toastr.error("Error al actualizar el ticket", "Error", {
              timeOut: 3e3,
              positionClass: "toast-top-right"
            });
            this.loading = false;
            this.cdr.detectChanges();
          }
        });
      } else {
        this.ticketService.createTicket(formData).subscribe({
          next: () => {
            this.toastr.success("Ticket creado exitosamente", "\xC9xito", {
              timeOut: 3e3,
              positionClass: "toast-top-right"
            });
            this.router.navigate(["/dashboard/business-dashboard/ticket-list"]);
            this.loading = false;
            this.cdr.detectChanges();
          },
          error: (error) => {
            console.error("Error al crear ticket:", error);
            this.toastr.error("Error al crear el ticket", "Error", {
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
    this.router.navigate(["/dashboard/business-dashboard/ticket-list"]);
  }
  loadProductos() {
    this.productos = [
      { id: 1, nombre: "Huevo Grande", tamanio: "L" },
      { id: 2, nombre: "Huevo Mediano", tamanio: "M" },
      { id: 3, nombre: "Huevo Peque\xF1o", tamanio: "S" }
    ];
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
  onVentaSelected(ventaId) {
    this.ventaService.getVentaById(ventaId).subscribe({
      next: (response) => {
        this.selectedVentaData = response.data;
      },
      error: (error) => {
        console.error("Error loading venta details:", error);
        this.selectedVentaData = null;
      }
    });
  }
  get selectedVenta() {
    return this.selectedVentaData;
  }
  markFormGroupTouched() {
    Object.keys(this.ticketForm.controls).forEach((key) => {
      const control = this.ticketForm.get(key);
      control?.markAsTouched();
    });
  }
};
_NewTicketComponent.\u0275fac = function NewTicketComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewTicketComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TicketService), \u0275\u0275directiveInject(VentaService), \u0275\u0275directiveInject(LotesService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_NewTicketComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewTicketComponent, selectors: [["app-new-ticket"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 72, vars: 16, consts: [[3, "title"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-xl-4", "col-md-4", "col-lg-4"], [1, "card"], [1, "card-body"], [1, "mb-5", "fw-semibold"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], ["name", "idVenta", "placeholder", "Seleccione una venta", "formControlName", "idVenta", "bindLabel", "displayText", "bindValue", "id", 1, "form-control", "p-0", "custom-select"], [3, "value"], ["class", "text-danger", 4, "ngIf"], ["name", "idLote", "placeholder", "Seleccione un lote", "formControlName", "idLote", "bindLabel", "galera", "bindValue", "id", 1, "form-control", "p-0", "custom-select"], ["name", "idProducto", "placeholder", "Seleccione un producto", "formControlName", "idProducto", "bindLabel", "nombre", "bindValue", "id", 1, "form-control", "p-0", "custom-select"], ["type", "number", "placeholder", "Ingrese la cantidad", "formControlName", "cantidad", 1, "form-control"], ["type", "date", "formControlName", "fecha", 1, "form-control"], ["name", "estado", "placeholder", "Seleccione el estado", "formControlName", "estado", 1, "form-control", "p-0", "custom-select"], ["value", "Pendiente"], ["value", "Completado"], ["value", "Cancelado"], ["type", "text", "placeholder", "Ingrese el c\xF3digo de autorizaci\xF3n (opcional)", "formControlName", "codigoAutorizacion", 1, "form-control"], [1, "card-footer", "text-end"], ["type", "button", 1, "btn", "btn-danger", "btn-lg", "me-2", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "table-responsive"], [1, "table", "table-borderless"], [1, "fw-semibold"], [1, "text-success", "fw-bold"], [1, "text-danger"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function NewTicketComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-page-header", 0);
    \u0275\u0275elementStart(1, "form", 1);
    \u0275\u0275listener("ngSubmit", function NewTicketComponent_Template_form_ngSubmit_1_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275template(3, NewTicketComponent_Conditional_3_Template, 47, 16, "div", 3);
    \u0275\u0275elementStart(4, "div")(5, "div", 4)(6, "div", 5)(7, "h4", 6);
    \u0275\u0275text(8, "Detalles del Ticket:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 2)(10, "div", 7)(11, "div", 8)(12, "label", 9);
    \u0275\u0275text(13, "Seleccionar Venta *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ng-select", 10);
    \u0275\u0275repeaterCreate(15, NewTicketComponent_For_16_Template, 3, 7, "ng-option", 11, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, NewTicketComponent_div_17_Template, 3, 0, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 7)(19, "div", 8)(20, "label", 9);
    \u0275\u0275text(21, "Lote *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ng-select", 13);
    \u0275\u0275repeaterCreate(23, NewTicketComponent_For_24_Template, 2, 2, "ng-option", 11, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, NewTicketComponent_div_25_Template, 3, 0, "div", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 2)(27, "div", 7)(28, "div", 8)(29, "label", 9);
    \u0275\u0275text(30, "Producto *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ng-select", 14);
    \u0275\u0275repeaterCreate(32, NewTicketComponent_For_33_Template, 2, 2, "ng-option", 11, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, NewTicketComponent_div_34_Template, 3, 0, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 7)(36, "div", 8)(37, "label", 9);
    \u0275\u0275text(38, "Cantidad *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 15);
    \u0275\u0275template(40, NewTicketComponent_div_40_Template, 3, 0, "div", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 2)(42, "div", 7)(43, "div", 8)(44, "label", 9);
    \u0275\u0275text(45, "Fecha *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "input", 16);
    \u0275\u0275template(47, NewTicketComponent_div_47_Template, 3, 0, "div", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 2)(49, "div", 7)(50, "div", 8)(51, "label", 9);
    \u0275\u0275text(52, "Estado *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ng-select", 17)(54, "ng-option", 18);
    \u0275\u0275text(55, "Pendiente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "ng-option", 19);
    \u0275\u0275text(57, "Completado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "ng-option", 20);
    \u0275\u0275text(59, "Cancelado");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(60, NewTicketComponent_div_60_Template, 3, 0, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 7)(62, "div", 8)(63, "label", 9);
    \u0275\u0275text(64, "C\xF3digo de Autorizaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "input", 21);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(66, "div", 22)(67, "button", 23);
    \u0275\u0275listener("click", function NewTicketComponent_Template_button_click_67_listener() {
      return ctx.onCancel();
    });
    \u0275\u0275text(68, "Cerrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "button", 24);
    \u0275\u0275template(70, NewTicketComponent_span_70_Template, 1, 0, "span", 25);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    \u0275\u0275property("title", "Nuevo Ticket");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.ticketForm);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.selectedVenta ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx.selectedVenta ? "col-xl-8 col-md-8 col-lg-8" : "col-xl-12 col-md-12 col-lg-12");
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx.ventas);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.ticketForm.get("idVenta")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.ticketForm.get("idVenta")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.lotes);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.ticketForm.get("idLote")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.ticketForm.get("idLote")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx.productos);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.ticketForm.get("idProducto")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.ticketForm.get("idProducto")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_10_0 = ctx.ticketForm.get("cantidad")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.ticketForm.get("cantidad")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx.ticketForm.get("fecha")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.ticketForm.get("fecha")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ((tmp_12_0 = ctx.ticketForm.get("estado")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.ticketForm.get("estado")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.loading ? "Guardando..." : "Guardar", " ");
  }
}, dependencies: [CommonModule, NgIf, DecimalPipe, DatePipe, SharedModule, PageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, RouterModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n/*# sourceMappingURL=new-ticket.component.css.map */"] });
var NewTicketComponent = _NewTicketComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewTicketComponent, { className: "NewTicketComponent" });
})();
export {
  NewTicketComponent
};
//# sourceMappingURL=new-ticket.component-TPHGU7KC.js.map
