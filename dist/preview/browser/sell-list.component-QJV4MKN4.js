import {
  VentaService
} from "./chunk-EAZAKIYV.js";
import "./chunk-7WSVHSJD.js";
import {
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
  FlatpickrDirective,
  FlatpickrModule
} from "./chunk-ZSUERINM.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgbModal,
  NgbModule,
  NgbTooltip,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-47LBZ5ZO.js";
import {
  ChangeDetectorRef,
  DatePipe,
  DecimalPipe,
  Router,
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
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

// src/app/componets/dashbord/bussiness-dashboard/sell-list/sell-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SellListComponent_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 54)(2, "span", 55);
    \u0275\u0275text(3, "Cargando...");
    \u0275\u0275elementEnd()()();
  }
}
function SellListComponent_Conditional_90_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57)(2, "div", 58);
    \u0275\u0275element(3, "i", 59);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No hay ventas disponibles");
    \u0275\u0275elementEnd()()()();
  }
}
function SellListComponent_Conditional_90_Conditional_18_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 45)(5, "span", 60);
    \u0275\u0275element(6, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "h6", 62);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 63);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "div", 64)(23, "a", 65);
    \u0275\u0275element(24, "i", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a", 67);
    \u0275\u0275listener("click", function SellListComponent_Conditional_90_Conditional_18_For_1_Template_a_click_25_listener() {
      const venta_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.generateTicket(venta_r3.id));
    });
    \u0275\u0275element(26, "i", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 69);
    \u0275\u0275listener("click", function SellListComponent_Conditional_90_Conditional_18_For_1_Template_a_click_27_listener() {
      const venta_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      const editContent_r5 = \u0275\u0275reference(92);
      return \u0275\u0275resetView(ctx_r3.edit(editContent_r5, venta_r3));
    });
    \u0275\u0275element(28, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "a", 71);
    \u0275\u0275listener("click", function SellListComponent_Conditional_90_Conditional_18_For_1_Template_a_click_29_listener() {
      const venta_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.deleteVenta(venta_r3.id));
    });
    \u0275\u0275element(30, "i", 72);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const venta_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#VT-", venta_r3.id.toString().padStart(3, "0"), "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Cliente #", venta_r3.idCliente, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Venta #", venta_r3.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(14, 11, venta_r3.fecha, "dd/MM/yyyy", "UTC"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(17, 15, venta_r3.total, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("badge bg-", ctx_r3.getStatusClass(venta_r3.estado), "-transparent");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(venta_r3.estado);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("routerLink", "/dashboard/business-dashboard/view-sell/", venta_r3.id, "");
  }
}
function SellListComponent_Conditional_90_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SellListComponent_Conditional_90_Conditional_18_For_1_Template, 31, 18, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r3.filteredVentas);
  }
}
function SellListComponent_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "table", 56)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "#ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, SellListComponent_Conditional_90_Conditional_17_Template, 6, 0, "tr")(18, SellListComponent_Conditional_90_Conditional_18_Template, 2, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275conditional(ctx_r3.filteredVentas.length === 0 ? 17 : 18);
  }
}
function SellListComponent_ng_template_91_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "small");
    \u0275\u0275text(2, "El ID del cliente es requerido");
    \u0275\u0275elementEnd()();
  }
}
function SellListComponent_ng_template_91_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "small");
    \u0275\u0275text(2, "La fecha es requerida");
    \u0275\u0275elementEnd()();
  }
}
function SellListComponent_ng_template_91_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "small");
    \u0275\u0275text(2, "El total es requerido");
    \u0275\u0275elementEnd()();
  }
}
function SellListComponent_ng_template_91_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "small");
    \u0275\u0275text(2, "El estado es requerido");
    \u0275\u0275elementEnd()();
  }
}
function SellListComponent_ng_template_91_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 89);
  }
}
function SellListComponent_ng_template_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 73);
    \u0275\u0275listener("ngSubmit", function SellListComponent_ng_template_91_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onUpdateVenta());
    });
    \u0275\u0275elementStart(1, "div", 74)(2, "h5", 75);
    \u0275\u0275text(3, "Editar Venta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 76);
    \u0275\u0275listener("click", function SellListComponent_ng_template_91_Template_button_click_4_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 77)(6, "div", 14)(7, "div", 24)(8, "div", 25)(9, "label", 26);
    \u0275\u0275text(10, "ID Cliente *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 78);
    \u0275\u0275template(12, SellListComponent_ng_template_91_Conditional_12_Template, 3, 0, "div", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 24)(14, "div", 25)(15, "label", 26);
    \u0275\u0275text(16, "Fecha *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 80);
    \u0275\u0275template(18, SellListComponent_ng_template_91_Conditional_18_Template, 3, 0, "div", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 24)(20, "div", 25)(21, "label", 26);
    \u0275\u0275text(22, "Total *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 81);
    \u0275\u0275template(24, SellListComponent_ng_template_91_Conditional_24_Template, 3, 0, "div", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 24)(26, "div", 25)(27, "label", 26);
    \u0275\u0275text(28, "Estado *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ng-select", 82)(30, "ng-option", 83);
    \u0275\u0275text(31, "Pendiente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ng-option", 84);
    \u0275\u0275text(33, "Completada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ng-option", 85);
    \u0275\u0275text(35, "Cancelada");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(36, SellListComponent_ng_template_91_Conditional_36_Template, 3, 0, "div", 79);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 86)(38, "button", 87);
    \u0275\u0275listener("click", function SellListComponent_ng_template_91_Template_button_click_38_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.dismiss("cancel"));
    });
    \u0275\u0275text(39, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 88);
    \u0275\u0275template(41, SellListComponent_ng_template_91_Conditional_41_Template, 1, 0, "span", 89);
    \u0275\u0275text(42, " Actualizar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r3.editForm);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(((tmp_4_0 = ctx_r3.editForm.get("idCliente")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r3.editForm.get("idCliente")) == null ? null : tmp_4_0.touched) ? 12 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_5_0 = ctx_r3.editForm.get("fecha")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r3.editForm.get("fecha")) == null ? null : tmp_5_0.touched) ? 18 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_6_0 = ctx_r3.editForm.get("total")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r3.editForm.get("total")) == null ? null : tmp_6_0.touched) ? 24 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(((tmp_7_0 = ctx_r3.editForm.get("estado")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r3.editForm.get("estado")) == null ? null : tmp_7_0.touched) ? 36 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.loading ? 41 : -1);
  }
}
var _SellListComponent = class _SellListComponent {
  constructor(modalService, ventaService, fb, toastr, router, cdr) {
    this.modalService = modalService;
    this.ventaService = ventaService;
    this.fb = fb;
    this.toastr = toastr;
    this.router = router;
    this.cdr = cdr;
    this.ventas = [];
    this.filteredVentas = [];
    this.loading = false;
    this.selectedVenta = null;
    this.editForm = this.fb.group({
      idCliente: ["", [Validators.required, Validators.min(1)]],
      fecha: ["", Validators.required],
      total: ["", [Validators.required, Validators.min(0)]],
      estado: ["", Validators.required]
    });
    this.filterForm = this.fb.group({
      fechaDesde: [""],
      fechaHasta: [""],
      estado: [""]
    });
  }
  ngOnInit() {
    this.loadVentas();
  }
  edit(editContent, venta) {
    this.selectedVenta = venta;
    this.editForm.patchValue({
      idCliente: venta.idCliente,
      fecha: this.formatDateForInput(venta.fecha),
      total: venta.total,
      estado: venta.estado
    });
    this.modalService.open(editContent, { windowClass: "modalCusSty modal-lg" });
  }
  onUpdateVenta() {
    if (this.editForm.valid && this.selectedVenta) {
      this.loading = true;
      const updateData = this.editForm.value;
      this.ventaService.updateVenta(this.selectedVenta.id, updateData).subscribe({
        next: () => {
          this.toastr.success("Venta actualizada exitosamente", "\xC9xito", {
            timeOut: 3e3,
            positionClass: "toast-top-right",
            progressBar: true,
            closeButton: true
          });
          this.loadVentas();
          this.modalService.dismissAll();
          this.loading = false;
        },
        error: (error) => {
          this.toastr.error("Error al actualizar la venta: " + (error.error?.message || "Error desconocido"), "Error", {
            timeOut: 5e3,
            positionClass: "toast-top-right",
            progressBar: true,
            closeButton: true
          });
          this.loading = false;
        }
      });
    } else {
      this.toastr.warning("Por favor, complete todos los campos requeridos", "Advertencia", {
        timeOut: 3e3,
        positionClass: "toast-top-right",
        progressBar: true,
        closeButton: true
      });
      this.markFormGroupTouched();
    }
  }
  deleteVenta(id) {
    if (confirm("\xBFEst\xE1 seguro de que desea eliminar esta venta?")) {
      this.ventaService.deleteVenta(id).subscribe({
        next: () => {
          this.toastr.success("Venta eliminada exitosamente", "\xC9xito", {
            timeOut: 3e3,
            positionClass: "toast-top-right",
            progressBar: true,
            closeButton: true
          });
          this.loadVentas();
        },
        error: (error) => {
          this.toastr.error("Error al eliminar la venta: " + (error.error?.message || "Error desconocido"), "Error", {
            timeOut: 5e3,
            positionClass: "toast-top-right",
            progressBar: true,
            closeButton: true
          });
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
  loadVentas() {
    this.loading = true;
    this.ventaService.getVentas().subscribe({
      next: (response) => {
        console.log("API Response:", response);
        const ventasData = response?.data?.data || response?.data || response || [];
        this.ventas = Array.isArray(ventasData) ? ventasData : [];
        this.filteredVentas = [...this.ventas];
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading ventas:", error);
        this.ventas = [];
        this.filteredVentas = [];
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  formatDateForInput(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  }
  generateTicket(ventaId) {
    this.router.navigate(["/dashboard/business-dashboard/new-ticket"], {
      queryParams: { ventaId }
    });
  }
  applyFilters() {
    const { fechaDesde, fechaHasta, estado } = this.filterForm.value;
    this.filteredVentas = this.ventas.filter((venta) => {
      let matches = true;
      if (fechaDesde) {
        const ventaFecha = new Date(venta.fecha);
        const desde = new Date(fechaDesde);
        matches = matches && ventaFecha >= desde;
      }
      if (fechaHasta) {
        const ventaFecha = new Date(venta.fecha);
        const hasta = new Date(fechaHasta);
        matches = matches && ventaFecha <= hasta;
      }
      if (estado) {
        matches = matches && venta.estado.toLowerCase() === estado.toLowerCase();
      }
      return matches;
    });
    this.cdr.detectChanges();
  }
  clearFilters() {
    this.filterForm.reset();
    this.filteredVentas = [...this.ventas];
    this.cdr.detectChanges();
  }
  getStatusClass(estado) {
    switch (estado.toLowerCase()) {
      case "completada":
        return "success";
      case "pendiente":
        return "warning";
      case "cancelada":
        return "danger";
      default:
        return "secondary";
    }
  }
};
_SellListComponent.\u0275fac = function SellListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SellListComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(VentaService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_SellListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellListComponent, selectors: [["app-sell-list"]], standalone: true, features: [\u0275\u0275ProvidersFeature([FlatpickrDefaults]), \u0275\u0275StandaloneFeature], decls: 93, vars: 2, consts: [["editContent", ""], [1, "page-header", "d-lg-flex", "d-block"], [1, "page-leftheader"], [1, "page-title"], [1, "page-rightheader"], [1, "btn-list", "d-flex", "gap-1"], ["routerLink", "/dashboard/business-dashboard/new-sell", 1, "btn", "btn-primary"], [1, "fe", "fe-plus", "fs-12", "my-auto", "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "E-mail", 1, "btn", "btn-light3"], [1, "fe", "fe-mail"], ["data-bs-placement", "top", "data-bs-toggle", "tooltip", "title", "Contact", 1, "btn", "btn-light3"], [1, "fe", "fe-phone-call"], ["data-bs-placement", "top", "data-bs-toggle", "tooltip", "title", "Info", 1, "btn", "btn-primary"], [1, "fe", "fe-info"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "d-flex", "justify-content-between", "border-bottom-0"], [1, "card-title"], [1, "float-end"], ["type", "text", "placeholder", "buscar", 1, "form-control"], [1, "card-body"], [3, "formGroup"], [1, "col-md-12", "col-lg-7"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["mwlFlatpickr", "", "type", "text", "placeholder", "DD-MM-YYYY", "formControlName", "fechaDesde", 1, "form-control", "choose-date"], ["mwlFlatpickr", "", "type", "text", "placeholder", "DD-MM-YYYY", "formControlName", "fechaHasta", 1, "form-control", "choose-date"], [1, "col-md-3"], ["formControlName", "estado", "placeholder", "Seleccionar Estado", 1, "form-control", "custom-select", "p-0"], ["value", ""], ["value", "pendiente"], ["value", "completada"], ["value", "cancelada"], [1, "col-md-2"], [1, "form-group", "mt-2"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "card-body", "border-top"], [1, "col-sm-6", "mb-1"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], ["name", "quantity", "placeholder", "10", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "10", "selected", ""], ["value", "25"], ["value", "50"], ["value", "100"], [1, "text-center", "py-4"], [1, "table-responsive"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom"], ["colspan", "6", 1, "text-center", "py-4"], [1, "text-muted"], [1, "fe", "fe-inbox", "fs-24", "mb-2"], [1, "avatar", "avatar-md", "me-2", "avatar-rounded", "bg-success-transparent"], [1, "fe", "fe-user"], [1, "mb-1", "fs-14"], [1, "fs-12", "text-muted"], [1, "d-flex"], ["placement", "top", "ngbTooltip", "Ver Venta", 1, "action-btns1", 3, "routerLink"], [1, "fe", "fe-eye", "text-primary"], ["placement", "top", "ngbTooltip", "Generar Ticket", 1, "action-btns1", 3, "click"], [1, "fe", "fe-file-plus", "text-info"], ["placement", "top", "ngbTooltip", "Editar", 1, "action-btns1", 3, "click"], [1, "fe", "fe-edit-2", "text-success"], ["placement", "top", "ngbTooltip", "Eliminar", 1, "action-btns1", 3, "click"], [1, "fe", "fe-trash-2", "text-danger"], [3, "ngSubmit", "formGroup"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["formControlName", "idCliente", "type", "number", "placeholder", "ID del cliente", 1, "form-control"], [1, "text-danger"], ["formControlName", "fecha", "type", "date", 1, "form-control"], ["formControlName", "total", "type", "number", "step", "0.01", "placeholder", "Total de la venta", 1, "form-control"], ["formControlName", "estado", "placeholder", "Seleccionar estado", 1, "form-control"], ["value", "Pendiente"], ["value", "Completada"], ["value", "Cancelada"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function SellListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3, "Lista de Ventas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "a", 6);
    \u0275\u0275element(7, "i", 7);
    \u0275\u0275text(8, "Agregar Venta ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 8);
    \u0275\u0275element(10, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 10);
    \u0275\u0275element(12, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 12);
    \u0275\u0275element(14, "i", 13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "div", 17)(19, "h4", 18);
    \u0275\u0275text(20, "Resumen de Ventas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 19);
    \u0275\u0275element(22, "input", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 21)(24, "form", 22)(25, "div", 14)(26, "div", 23)(27, "div", 14)(28, "div", 24)(29, "div", 25)(30, "label", 26);
    \u0275\u0275text(31, "Desde:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 25)(33, "div", 27)(34, "div", 28);
    \u0275\u0275element(35, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 24)(38, "div", 25)(39, "label", 26);
    \u0275\u0275text(40, "Hasta:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 25)(42, "div", 27)(43, "div", 28);
    \u0275\u0275element(44, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 31);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(46, "div", 32)(47, "div", 25)(48, "label", 26);
    \u0275\u0275text(49, "Seleccionar Estado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "ng-select", 33)(51, "ng-option", 34);
    \u0275\u0275text(52, "Todos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ng-option", 35);
    \u0275\u0275text(54, "Pendiente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ng-option", 36);
    \u0275\u0275text(56, "Completada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ng-option", 37);
    \u0275\u0275text(58, "Cancelada");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(59, "div", 38)(60, "div", 39);
    \u0275\u0275element(61, "label", 26);
    \u0275\u0275elementStart(62, "div", 40)(63, "button", 41);
    \u0275\u0275listener("click", function SellListComponent_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilters());
    });
    \u0275\u0275text(64, "Buscar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "button", 42);
    \u0275\u0275listener("click", function SellListComponent_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.clearFilters());
    });
    \u0275\u0275text(66, "Limpiar");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(67, "div", 43)(68, "div", 14)(69, "div", 44)(70, "div", 45)(71, "span");
    \u0275\u0275text(72, "Mostrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 46)(74, "div", 25)(75, "ng-select", 47)(76, "ng-option", 48);
    \u0275\u0275text(77, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "ng-option", 49);
    \u0275\u0275text(79, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "ng-option", 50);
    \u0275\u0275text(81, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "ng-option", 51);
    \u0275\u0275text(83, "100");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(84, "span");
    \u0275\u0275text(85, "entradas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 44)(87, "div", 19);
    \u0275\u0275element(88, "input", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(89, SellListComponent_Conditional_89_Template, 4, 0, "div", 52)(90, SellListComponent_Conditional_90_Template, 19, 1, "div", 53);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(91, SellListComponent_ng_template_91_Template, 43, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275advance(24);
    \u0275\u0275property("formGroup", ctx.filterForm);
    \u0275\u0275advance(65);
    \u0275\u0275conditional(ctx.loading ? 89 : 90);
  }
}, dependencies: [SharedModule, NgSelectModule, NgSelectComponent, NgOptionComponent, FlatpickrModule, FlatpickrDirective, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgbModule, NgbTooltip, DatePipe, DecimalPipe], styles: ["\n\n/*# sourceMappingURL=sell-list.component.css.map */"] });
var SellListComponent = _SellListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellListComponent, { className: "SellListComponent" });
})();
export {
  SellListComponent
};
//# sourceMappingURL=sell-list.component-QJV4MKN4.js.map
