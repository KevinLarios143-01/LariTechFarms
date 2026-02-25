import {
  TicketService
} from "./chunk-YLRYQWLL.js";
import "./chunk-7WSVHSJD.js";
import {
  HrDashboardPageHeaderComponent,
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
  NgbModal,
  NgbModule,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-47LBZ5ZO.js";
import {
  ChangeDetectorRef,
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/bussiness-dashboard/ticket-list/ticket-list.component.ts
function TicketListComponent_tr_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49)(2, "div", 50)(3, "span", 51);
    \u0275\u0275text(4, "Cargando...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 52);
    \u0275\u0275text(6, "Cargando tickets...");
    \u0275\u0275elementEnd()()();
  }
}
function TicketListComponent_tr_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 53);
    \u0275\u0275text(2, " No se encontraron tickets ");
    \u0275\u0275elementEnd()();
  }
}
function TicketListComponent_tr_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 39)(1, "th", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 27)(5, "div", 55);
    \u0275\u0275element(6, "i", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "div", 57)(9, "h6", 58);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 57)(12, "span", 59);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(14, "td")(15, "div", 27)(16, "div", 60);
    \u0275\u0275element(17, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "div", 57)(20, "h6", 58);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 57)(23, "span", 59);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(25, "td")(26, "span", 62);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "small", 63);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td")(34, "span", 62);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "small", 63);
    \u0275\u0275text(38, "unidades");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "td")(40, "span", 64);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "td")(43, "div", 65)(44, "a", 66);
    \u0275\u0275listener("click", function TicketListComponent_tr_105_Template_a_click_44_listener() {
      const ticket_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      const editContent_r5 = \u0275\u0275reference(124);
      return \u0275\u0275resetView(ctx_r3.edit(editContent_r5, ticket_r3));
    });
    \u0275\u0275element(45, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "a", 68);
    \u0275\u0275listener("click", function TicketListComponent_tr_105_Template_a_click_46_listener() {
      const ticket_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleTicketStatus(ticket_r3));
    });
    \u0275\u0275element(47, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "a", 69);
    \u0275\u0275listener("click", function TicketListComponent_tr_105_Template_a_click_48_listener() {
      const ticket_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteTicket(ticket_r3.id));
    });
    \u0275\u0275element(49, "i", 70);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ticket_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ticket_r3.id);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Venta #", ticket_r3.idVenta, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ticket_r3.venta == null ? null : ticket_r3.venta.cliente == null ? null : ticket_r3.venta.cliente.nombre) || "Cliente N/A");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ticket_r3.lote == null ? null : ticket_r3.lote.galera) || "Lote #" + ticket_r3.idLote);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ticket_r3.lote == null ? null : ticket_r3.lote.tipo) || "N/A");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ticket_r3.producto == null ? null : ticket_r3.producto.nombre) || "Producto #" + ticket_r3.idProducto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ticket_r3.producto == null ? null : ticket_r3.producto.tamanio) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(32, 17, ticket_r3.fecha, "dd/MM/yyyy", "UTC"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 21, ticket_r3.cantidad));
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r3.getEstadoBadgeClass(ticket_r3.estado));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ticket_r3.estado);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ticket_r3.estado === "Pendiente" ? "btn-warning" : "btn-success");
    \u0275\u0275property("title", ticket_r3.estado === "Pendiente" ? "Cancelar" : "Activar");
    \u0275\u0275advance();
    \u0275\u0275classMap(ticket_r3.estado === "Pendiente" ? "fe fe-x-circle" : "fe fe-check-circle");
  }
}
function TicketListComponent_ng_template_123_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1, " El estado es requerido ");
    \u0275\u0275elementEnd();
  }
}
function TicketListComponent_ng_template_123_div_26_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "La cantidad es requerida");
    \u0275\u0275elementEnd();
  }
}
function TicketListComponent_ng_template_123_div_26_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "La cantidad debe ser mayor a 0");
    \u0275\u0275elementEnd();
  }
}
function TicketListComponent_ng_template_123_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275template(1, TicketListComponent_ng_template_123_div_26_span_1_Template, 2, 0, "span", 41)(2, TicketListComponent_ng_template_123_div_26_span_2_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r3.editForm.get("cantidad")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r3.editForm.get("cantidad")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["min"]);
  }
}
function TicketListComponent_ng_template_123_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 92);
  }
}
function TicketListComponent_ng_template_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 71);
    \u0275\u0275listener("ngSubmit", function TicketListComponent_ng_template_123_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onUpdateTicket());
    });
    \u0275\u0275elementStart(1, "div", 72)(2, "h5", 73);
    \u0275\u0275text(3, "Editar Ticket");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 74);
    \u0275\u0275listener("click", function TicketListComponent_ng_template_123_Template_button_click_4_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 75)(6, "div", 2)(7, "div", 76)(8, "div", 77)(9, "label", 78);
    \u0275\u0275text(10, "Estado *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ng-select", 79)(12, "ng-option", 80);
    \u0275\u0275text(13, "Pendiente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ng-option", 81);
    \u0275\u0275text(15, "Autorizado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ng-option", 82);
    \u0275\u0275text(17, "Despachado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ng-option", 83);
    \u0275\u0275text(19, "Cancelado");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, TicketListComponent_ng_template_123_div_20_Template, 2, 0, "div", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 76)(22, "div", 77)(23, "label", 78);
    \u0275\u0275text(24, "Cantidad *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 85);
    \u0275\u0275template(26, TicketListComponent_ng_template_123_div_26_Template, 3, 2, "div", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 22)(28, "div", 77)(29, "label", 78);
    \u0275\u0275text(30, "C\xF3digo de Autorizaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 86);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 87)(33, "button", 88);
    \u0275\u0275listener("click", function TicketListComponent_ng_template_123_Template_button_click_33_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.dismiss("cancel"));
    });
    \u0275\u0275text(34, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 89);
    \u0275\u0275template(36, TicketListComponent_ng_template_123_span_36_Template, 1, 0, "span", 90);
    \u0275\u0275text(37, " Actualizar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r3.editForm);
    \u0275\u0275advance(11);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r3.editForm.get("estado")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r3.editForm.get("estado")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r3.editForm.get("estado")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r3.editForm.get("estado")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r3.editForm.get("cantidad")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r3.editForm.get("cantidad")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r3.editForm.get("cantidad")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r3.editForm.get("cantidad")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.loading);
  }
}
var _TicketListComponent = class _TicketListComponent {
  constructor(modalService, ticketService, fb, toastr, cdr) {
    this.modalService = modalService;
    this.ticketService = ticketService;
    this.fb = fb;
    this.toastr = toastr;
    this.cdr = cdr;
    this.tickets = [];
    this.loading = false;
    this.selectedTicket = null;
    this.totalTickets = 0;
    this.ticketsPendientes = 0;
    this.ticketsAutorizados = 0;
    this.ticketsDespachados = 0;
    this.editForm = this.fb.group({
      estado: ["", Validators.required],
      codigoAutorizacion: [""],
      cantidad: ["", [Validators.required, Validators.min(1)]]
    });
    this.filterForm = this.fb.group({
      fechaDesde: [""],
      fechaHasta: [""],
      estado: [""]
    });
  }
  ngOnInit() {
    this.loadTickets();
  }
  applyFilter(event) {
    const filterValue = event.target.value.toLowerCase();
  }
  edit(editContent, ticket) {
    this.selectedTicket = ticket;
    this.editForm.patchValue({
      estado: ticket.estado,
      codigoAutorizacion: ticket.codigoAutorizacion || "",
      cantidad: ticket.cantidad
    });
    this.modalService.open(editContent, { windowClass: "modalCusSty modal-lg" });
  }
  onUpdateTicket() {
    if (this.editForm.valid && this.selectedTicket) {
      this.loading = true;
      const updateData = this.editForm.value;
      this.ticketService.updateTicket(this.selectedTicket.id, updateData).subscribe({
        next: () => {
          this.toastr.success("Ticket actualizado exitosamente", "\xC9xito", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.loadTickets();
          this.modalService.dismissAll();
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          this.toastr.error("Error al actualizar el ticket: " + (error.error?.message || "Error desconocido"), "Error", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.loading = false;
          this.cdr.detectChanges();
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
  toggleTicketStatus(ticket) {
    const isActive = ticket.estado === "Pendiente";
    const newStatus = isActive ? "Cancelado" : "Pendiente";
    const action = isActive ? "cancelar" : "activar";
    if (confirm(`\xBFEst\xE1 seguro de que desea ${action} este ticket?`)) {
      const updateData = { estado: newStatus };
      this.ticketService.updateTicket(ticket.id, updateData).subscribe({
        next: () => {
          this.toastr.success(`Ticket ${action}do exitosamente`, "\xC9xito", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.loadTickets();
          this.cdr.detectChanges();
        },
        error: (error) => {
          this.toastr.error(`Error al ${action} el ticket: ${error.error?.message || "Error desconocido"}`, "Error", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.cdr.detectChanges();
        }
      });
    }
  }
  markFormGroupTouched() {
    Object.keys(this.editForm.controls).forEach((key) => {
      const control = this.editForm.get(key);
      control?.markAsTouched();
    });
  }
  loadTickets() {
    this.loading = true;
    this.ticketService.getTickets().subscribe({
      next: (response) => {
        if (response?.data?.data) {
          this.tickets = response.data.data;
        } else if (response?.data?.items) {
          this.tickets = response.data.items;
        } else if (response?.data && Array.isArray(response.data)) {
          this.tickets = response.data;
        } else if (Array.isArray(response)) {
          this.tickets = response;
        } else {
          this.tickets = [];
        }
        this.calculateStats();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.tickets = [];
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  calculateStats() {
    this.totalTickets = this.tickets.length;
    this.ticketsPendientes = this.tickets.filter((t) => t.estado === "Pendiente").length;
    this.ticketsAutorizados = this.tickets.filter((t) => t.estado === "Autorizado").length;
    this.ticketsDespachados = this.tickets.filter((t) => t.estado === "Despachado").length;
  }
  open(content) {
    this.modalService.open(content, { windowClass: "modalCusSty", size: "lg" });
  }
  applyFilters() {
    console.log("Aplicando filtros:", this.filterForm.value);
  }
  clearFilters() {
    this.filterForm.reset();
  }
  deleteTicket(id) {
    if (confirm("\xBFEst\xE1 seguro de que desea eliminar este ticket?")) {
      this.ticketService.deleteTicket(id).subscribe({
        next: () => {
          this.toastr.success("Ticket eliminado exitosamente", "\xC9xito", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.loadTickets();
          this.cdr.detectChanges();
        },
        error: (error) => {
          this.toastr.error("Error al eliminar el ticket: " + (error.error?.message || "Error desconocido"), "Error", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.cdr.detectChanges();
        }
      });
    }
  }
  getEstadoBadgeClass(estado) {
    switch (estado) {
      case "Autorizado":
        return "bg-success";
      case "Pendiente":
        return "bg-warning";
      case "Despachado":
        return "bg-primary";
      case "Cancelado":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  }
  trackByTicketId(index, ticket) {
    return ticket.id;
  }
};
_TicketListComponent.\u0275fac = function TicketListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TicketListComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(TicketService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_TicketListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketListComponent, selectors: [["app-ticket-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 125, vars: 14, consts: [["editContent", ""], [3, "title", "title2", "class1", "path"], [1, "row"], [1, "col-xl-3", "col-lg-6", "col-md-6"], [1, "card", "custom-card"], [1, "card-body"], [1, "col-7"], [1, "mt-0", "text-start"], [1, "fw-medium"], [1, "mb-0", "mt-1", "text-success"], [1, "col-5"], [1, "icon1", "bg-success-transparent", "my-auto", "float-end"], [1, "las", "la-ticket-alt"], [1, "mb-0", "mt-1", "text-warning"], [1, "icon1", "bg-warning-transparent", "my-auto", "float-end"], [1, "las", "la-clock"], [1, "mb-0", "mt-1", "text-primary"], [1, "icon1", "bg-primary-transparent", "my-auto", "float-end"], [1, "las", "la-check-circle"], [1, "mb-0", "mt-1", "text-info"], [1, "icon1", "bg-info-transparent", "my-auto", "float-end"], [1, "las", "la-shipping-fast"], [1, "col-md-12"], [1, "card-header"], [1, "card-title"], [1, "row", "mb-2", "gap-2", "gap-lg-0"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mb-0"], ["name", "quantity", "placeholder", "10", 1, "form-control", "wd-150", "p-0"], ["value", "10", "selected", ""], ["value", "25"], ["value", "50"], ["value", "100"], [1, "float-end"], ["type", "text", "placeholder", "Buscar", 1, "form-control", 3, "keyup"], [1, "table-responsive"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap", "table-bordered", "border"], [1, "border-bottom"], ["scope", "col"], [4, "ngIf"], ["class", "border-bottom", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mt-4"], [1, "pagination", "justify-content-end", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item", "active"], [1, "page-item"], ["colspan", "8", 1, "text-center", "py-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], ["colspan", "8", 1, "text-center", "py-4", "text-muted"], ["scope", "row"], [1, "avatar", "me-2", "avatar-rounded", "bg-primary-transparent"], [1, "fe", "fe-shopping-cart", "fs-16"], [1, "lh-1"], [1, "mb-1"], [1, "fs-12", "text-muted"], [1, "avatar", "me-2", "avatar-rounded", "bg-secondary-transparent"], [1, "fe", "fe-layers", "fs-16"], [1, "fw-semibold"], [1, "d-block", "text-muted"], [1, "badge"], [1, "d-flex", "gap-2"], ["data-bs-toggle", "tooltip", "title", "Editar", 1, "btn", "btn-success", "btn-icon", 3, "click"], [1, "fe", "fe-edit-2"], ["data-bs-toggle", "tooltip", 1, "btn", "btn-icon", 3, "click", "title"], ["data-bs-toggle", "tooltip", "title", "Eliminar", 1, "btn", "btn-danger", "btn-icon", 3, "click"], [1, "fe", "fe-trash-2"], [3, "ngSubmit", "formGroup"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], ["formControlName", "estado", "placeholder", "Seleccione un estado", 1, "form-control", "p-0"], ["value", "Pendiente"], ["value", "Autorizado"], ["value", "Despachado"], ["value", "Cancelado"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "cantidad", "type", "number", "placeholder", "Cantidad", 1, "form-control"], ["formControlName", "codigoAutorizacion", "placeholder", "C\xF3digo de autorizaci\xF3n (opcional)", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], [1, "invalid-feedback"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function TicketListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 2)(6, "div", 6)(7, "div", 7)(8, "span", 8);
    \u0275\u0275text(9, "Total Tickets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 10)(13, "div", 11);
    \u0275\u0275element(14, "i", 12);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(15, "div", 3)(16, "div", 4)(17, "div", 5)(18, "div", 2)(19, "div", 6)(20, "div", 7)(21, "span", 8);
    \u0275\u0275text(22, "Pendientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h3", 13);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 10)(26, "div", 14);
    \u0275\u0275element(27, "i", 15);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(28, "div", 3)(29, "div", 4)(30, "div", 5)(31, "div", 2)(32, "div", 6)(33, "div", 7)(34, "span", 8);
    \u0275\u0275text(35, "Autorizados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "h3", 16);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 10)(39, "div", 17);
    \u0275\u0275element(40, "i", 18);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(41, "div", 3)(42, "div", 4)(43, "div", 5)(44, "div", 2)(45, "div", 6)(46, "div", 7)(47, "span", 8);
    \u0275\u0275text(48, "Despachados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "h3", 19);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 10)(52, "div", 20);
    \u0275\u0275element(53, "i", 21);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(54, "div", 2)(55, "div", 22)(56, "div", 4)(57, "div", 23)(58, "h3", 24);
    \u0275\u0275text(59, "Lista de tickets");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 5)(61, "div", 25)(62, "div", 26)(63, "div", 27)(64, "span");
    \u0275\u0275text(65, "Mostrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 28)(67, "div", 29)(68, "ng-select", 30)(69, "ng-option", 31);
    \u0275\u0275text(70, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ng-option", 32);
    \u0275\u0275text(72, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "ng-option", 33);
    \u0275\u0275text(74, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "ng-option", 34);
    \u0275\u0275text(76, "100");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(77, "span");
    \u0275\u0275text(78, "registros");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 26)(80, "div", 35)(81, "input", 36);
    \u0275\u0275listener("keyup", function TicketListComponent_Template_input_keyup_81_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(82, "div", 37)(83, "table", 38)(84, "thead")(85, "tr", 39)(86, "th", 40);
    \u0275\u0275text(87, "No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "th", 40);
    \u0275\u0275text(89, "Venta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "th", 40);
    \u0275\u0275text(91, "Lote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "th", 40);
    \u0275\u0275text(93, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "th", 40);
    \u0275\u0275text(95, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "th", 40);
    \u0275\u0275text(97, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "th", 40);
    \u0275\u0275text(99, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "th", 40);
    \u0275\u0275text(101, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(102, "tbody");
    \u0275\u0275template(103, TicketListComponent_tr_103_Template, 7, 0, "tr", 41)(104, TicketListComponent_tr_104_Template, 3, 0, "tr", 41)(105, TicketListComponent_tr_105_Template, 50, 23, "tr", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(106, "nav", 43)(107, "ul", 44)(108, "li", 45)(109, "a", 46);
    \u0275\u0275text(110, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "li", 47)(112, "a", 46);
    \u0275\u0275text(113, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "li", 48)(115, "a", 46);
    \u0275\u0275text(116, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "li", 48)(118, "a", 46);
    \u0275\u0275text(119, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "li", 48)(121, "a", 46);
    \u0275\u0275text(122, "Next");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(123, TicketListComponent_ng_template_123_Template, 38, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275classMap("btn btn-primary");
    \u0275\u0275property("title", "Tickets")("title2", "Agregar Nuevo Ticket")("class1", "")("path", "/dashboard/business-dashboard/new-ticket");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx.totalTickets);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.ticketsPendientes);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.ticketsAutorizados);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.ticketsDespachados);
    \u0275\u0275advance(53);
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && ctx.tickets.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.tickets)("ngForTrackBy", ctx.trackByTicketId);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, SharedModule, HrDashboardPageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, RouterModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgbModule] });
var TicketListComponent = _TicketListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketListComponent, { className: "TicketListComponent" });
})();
export {
  TicketListComponent
};
//# sourceMappingURL=ticket-list.component-CEYHVTV4.js.map
