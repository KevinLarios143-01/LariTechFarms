import {
  LotesService
} from "./chunk-43K7FTAL.js";
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
  RouterLink,
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
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/bussiness-dashboard/lotes/lote-list/lote-list.component.ts
var _c0 = (a0) => ["/dashboard/business-dashboard/lotes/view-lote", a0];
function LoteListComponent_tr_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49)(2, "div", 50)(3, "span", 51);
    \u0275\u0275text(4, "Cargando...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 52);
    \u0275\u0275text(6, "Cargando lotes...");
    \u0275\u0275elementEnd()()();
  }
}
function LoteListComponent_tr_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" No se encontraron lotes (Total: ", ctx_r1.lotes.length, ") ");
  }
}
function LoteListComponent_tr_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
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
    \u0275\u0275elementStart(14, "td")(15, "span", 60);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "span", 61);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "small", 62);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td")(30, "span", 60);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "td")(33, "div", 63)(34, "a", 64);
    \u0275\u0275element(35, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "a", 66);
    \u0275\u0275listener("click", function LoteListComponent_tr_105_Template_a_click_36_listener() {
      const lote_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      const editContent_r5 = \u0275\u0275reference(124);
      return \u0275\u0275resetView(ctx_r1.edit(editContent_r5, lote_r4));
    });
    \u0275\u0275element(37, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "a", 68);
    \u0275\u0275listener("click", function LoteListComponent_tr_105_Template_a_click_38_listener() {
      const lote_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleLoteStatus(lote_r4));
    });
    \u0275\u0275element(39, "i");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const lote_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lote_r4.id);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(lote_r4.galera);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(lote_r4.tipo);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(lote_r4.tipo === "Ponedoras" ? "bg-info" : "bg-primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lote_r4.tipo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 20, lote_r4.cantidad));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", (lote_r4._count == null ? null : lote_r4._count.movAvesLote) || 0, " mov. | ", (lote_r4._count == null ? null : lote_r4._count.tickets) || 0, " tickets");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(25, 22, lote_r4.fechaInicio, "dd/MM/yyyy", "UTC"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(lote_r4.fechaFin ? \u0275\u0275pipeBind3(28, 26, lote_r4.fechaFin, "dd/MM/yyyy", "UTC") : "N/A");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getEstadoBadgeClass(lote_r4.estado));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lote_r4.estado);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(30, _c0, lote_r4.id));
    \u0275\u0275advance(4);
    \u0275\u0275classMap(lote_r4.estado === "Activo" ? "btn-warning" : "btn-success");
    \u0275\u0275property("title", lote_r4.estado === "Activo" ? "Desactivar" : "Activar");
    \u0275\u0275advance();
    \u0275\u0275classMap(lote_r4.estado === "Activo" ? "fe fe-pause-circle" : "fe fe-play-circle");
  }
}
function LoteListComponent_ng_template_123_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275text(1, " El tipo es requerido ");
    \u0275\u0275elementEnd();
  }
}
function LoteListComponent_ng_template_123_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275text(1, " La galera es requerida ");
    \u0275\u0275elementEnd();
  }
}
function LoteListComponent_ng_template_123_div_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "La cantidad es requerida");
    \u0275\u0275elementEnd();
  }
}
function LoteListComponent_ng_template_123_div_28_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "La cantidad debe ser mayor a 0");
    \u0275\u0275elementEnd();
  }
}
function LoteListComponent_ng_template_123_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275template(1, LoteListComponent_ng_template_123_div_28_span_1_Template, 2, 0, "span", 41)(2, LoteListComponent_ng_template_123_div_28_span_2_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.editForm.get("cantidad")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r1.editForm.get("cantidad")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["min"]);
  }
}
function LoteListComponent_ng_template_123_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275text(1, " La fecha de inicio es requerida ");
    \u0275\u0275elementEnd();
  }
}
function LoteListComponent_ng_template_123_span_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 95);
  }
}
function LoteListComponent_ng_template_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 69);
    \u0275\u0275listener("ngSubmit", function LoteListComponent_ng_template_123_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpdateLote());
    });
    \u0275\u0275elementStart(1, "div", 70)(2, "h5", 71);
    \u0275\u0275text(3, "Editar Lote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 72);
    \u0275\u0275listener("click", function LoteListComponent_ng_template_123_Template_button_click_4_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 73)(6, "div", 2)(7, "div", 74)(8, "div", 75)(9, "label", 76);
    \u0275\u0275text(10, "Tipo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ng-select", 77)(12, "ng-option", 78);
    \u0275\u0275text(13, "Ponedoras");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ng-option", 79);
    \u0275\u0275text(15, "Engorde");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, LoteListComponent_ng_template_123_div_16_Template, 2, 0, "div", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 74)(18, "div", 75)(19, "label", 76);
    \u0275\u0275text(20, "Galera *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 81);
    \u0275\u0275template(22, LoteListComponent_ng_template_123_div_22_Template, 2, 0, "div", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 74)(24, "div", 75)(25, "label", 76);
    \u0275\u0275text(26, "Cantidad *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 82);
    \u0275\u0275template(28, LoteListComponent_ng_template_123_div_28_Template, 3, 2, "div", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 74)(30, "div", 75)(31, "label", 76);
    \u0275\u0275text(32, "Estado *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ng-select", 83)(34, "ng-option", 84);
    \u0275\u0275text(35, "Activo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ng-option", 85);
    \u0275\u0275text(37, "Inactivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-option", 86);
    \u0275\u0275text(39, "Desalojado");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 74)(41, "div", 75)(42, "label", 76);
    \u0275\u0275text(43, "Fecha Inicio *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 87);
    \u0275\u0275template(45, LoteListComponent_ng_template_123_div_45_Template, 2, 0, "div", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 74)(47, "div", 75)(48, "label", 76);
    \u0275\u0275text(49, "Fecha Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "input", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 22)(52, "div", 75)(53, "label", 76);
    \u0275\u0275text(54, "Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "textarea", 89);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(56, "div", 90)(57, "button", 91);
    \u0275\u0275listener("click", function LoteListComponent_ng_template_123_Template_button_click_57_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.dismiss("cancel"));
    });
    \u0275\u0275text(58, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 92);
    \u0275\u0275template(60, LoteListComponent_ng_template_123_span_60_Template, 1, 0, "span", 93);
    \u0275\u0275text(61, " Actualizar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.editForm);
    \u0275\u0275advance(11);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r1.editForm.get("tipo")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.editForm.get("tipo")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.editForm.get("tipo")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.editForm.get("tipo")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.editForm.get("galera")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.editForm.get("galera")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.editForm.get("galera")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.editForm.get("galera")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r1.editForm.get("cantidad")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.editForm.get("cantidad")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.editForm.get("cantidad")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.editForm.get("cantidad")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(16);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r1.editForm.get("fechaInicio")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.editForm.get("fechaInicio")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r1.editForm.get("fechaInicio")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r1.editForm.get("fechaInicio")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(14);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
  }
}
var _LoteListComponent = class _LoteListComponent {
  constructor(modalService, lotesService, fb, toastr, cdr) {
    this.modalService = modalService;
    this.lotesService = lotesService;
    this.fb = fb;
    this.toastr = toastr;
    this.cdr = cdr;
    this.lotes = [];
    this.loading = false;
    this.selectedLote = null;
    this.totalLotes = 0;
    this.lotesActivos = 0;
    this.lotesPonedoras = 0;
    this.lotesEngorde = 0;
    this.editForm = this.fb.group({
      tipo: ["", Validators.required],
      galera: ["", Validators.required],
      cantidad: ["", [Validators.required, Validators.min(1)]],
      fechaInicio: ["", Validators.required],
      fechaFin: [""],
      estado: ["Activo"],
      observaciones: [""]
    });
  }
  applyFilter(event) {
    const filterValue = event.target.value.toLowerCase();
  }
  toggleLoteStatus(lote) {
    const isActive = lote.estado === "Activo";
    const newStatus = isActive ? "Inactivo" : "Activo";
    const action = isActive ? "desactivar" : "activar";
    if (confirm(`\xBFEst\xE1 seguro de que desea ${action} este lote?`)) {
      const updateData = { estado: newStatus };
      this.lotesService.updateLote(lote.id, updateData).subscribe({
        next: () => {
          this.toastr.success(`Lote ${action}do exitosamente`, "\xC9xito", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.loadLotes();
          this.cdr.detectChanges();
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
          this.toastr.error(`Error al ${action} el lote: ${errorMessage}`, "Error", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.cdr.detectChanges();
        }
      });
    }
  }
  edit(editContent, lote) {
    this.selectedLote = lote;
    this.editForm.patchValue({
      tipo: lote.tipo,
      galera: lote.galera,
      cantidad: lote.cantidad,
      fechaInicio: this.formatDateForInput(lote.fechaInicio),
      fechaFin: this.formatDateForInput(lote.fechaFin || ""),
      estado: lote.estado,
      observaciones: lote.observaciones
    });
    this.modalService.open(editContent, { windowClass: "modalCusSty modal-lg" });
  }
  onUpdateLote() {
    if (this.editForm.valid && this.selectedLote) {
      this.loading = true;
      const updateData = this.editForm.value;
      this.lotesService.updateLote(this.selectedLote.id, updateData).subscribe({
        next: (response) => {
          this.toastr.success("Lote actualizado exitosamente", "\xC9xito", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.loadLotes();
          this.modalService.dismissAll();
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          this.toastr.error("Error al actualizar el lote: " + (error.error?.message || "Error desconocido"), "Error", {
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
  markFormGroupTouched() {
    Object.keys(this.editForm.controls).forEach((key) => {
      const control = this.editForm.get(key);
      control?.markAsTouched();
    });
  }
  open(content) {
    this.modalService.open(content, { windowClass: "modalCusSty", size: "lg" });
  }
  ngOnInit() {
    this.loadLotes();
  }
  loadLotes() {
    this.loading = true;
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
        this.calculateStats();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.lotes = [];
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  calculateStats() {
    this.totalLotes = this.lotes.length;
    this.lotesActivos = this.lotes.filter((l) => l.estado === "Activo").length;
    this.lotesPonedoras = this.lotes.filter((l) => l.tipo === "Ponedoras").length;
    this.lotesEngorde = this.lotes.filter((l) => l.tipo === "Engorde").length;
  }
  getEstadoBadgeClass(estado) {
    switch (estado) {
      case "Activo":
        return "bg-success";
      case "Inactivo":
        return "bg-warning";
      case "Desalojado":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  }
  trackByLoteId(index, lote) {
    return lote.id;
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
};
_LoteListComponent.\u0275fac = function LoteListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoteListComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(LotesService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_LoteListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoteListComponent, selectors: [["app-lote-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 125, vars: 14, consts: [["editContent", ""], [3, "title", "title2", "class1", "path"], [1, "row"], [1, "col-xl-3", "col-lg-6", "col-md-6"], [1, "card", "custom-card"], [1, "card-body"], [1, "col-7"], [1, "mt-0", "text-start"], [1, "fw-medium"], [1, "mb-0", "mt-1", "text-success"], [1, "col-5"], [1, "icon1", "bg-success-transparent", "my-auto", "float-end"], [1, "las", "la-layer-group"], [1, "mb-0", "mt-1", "text-primary"], [1, "icon1", "bg-primary-transparent", "my-auto", "float-end"], [1, "las", "la-check-circle"], [1, "mb-0", "mt-1", "text-secondary"], [1, "icon1", "bg-secondary-transparent", "my-auto", "float-end"], [1, "las", "la-egg"], [1, "mb-0", "mt-1", "text-danger"], [1, "icon1", "bg-danger-transparent", "my-auto", "float-end"], [1, "las", "la-drumstick-bite"], [1, "col-md-12"], [1, "card-header"], [1, "card-title"], [1, "row", "mb-2", "gap-2", "gap-lg-0"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mb-0"], ["name", "quantity", "placeholder", "10", 1, "form-control", "wd-150", "p-0"], ["value", "10", "selected", ""], ["value", "25"], ["value", "50"], ["value", "100"], [1, "float-end"], ["type", "text", "placeholder", "Buscar", 1, "form-control", 3, "keyup"], [1, "table-responsive"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap", "table-bordered", "border"], [1, "border-bottom"], ["scope", "col"], [4, "ngIf"], ["class", "border-bottom", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mt-4"], [1, "pagination", "justify-content-end", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item", "active"], [1, "page-item"], ["colspan", "8", 1, "text-center", "py-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], ["colspan", "8", 1, "text-center", "py-4", "text-muted"], ["scope", "row"], [1, "avatar", "me-2", "avatar-rounded", "bg-primary-transparent"], [1, "fe", "fe-layers", "fs-16"], [1, "lh-1"], [1, "mb-1"], [1, "fs-12", "text-muted"], [1, "badge"], [1, "fw-semibold"], [1, "d-block", "text-muted"], [1, "d-flex", "gap-2"], ["data-bs-toggle", "tooltip", "title", "Ver Lote", 1, "btn", "btn-primary", "btn-icon", 3, "routerLink"], [1, "fe", "fe-eye"], ["data-bs-toggle", "tooltip", "title", "Editar", 1, "btn", "btn-success", "btn-icon", 3, "click"], [1, "fe", "fe-edit-2"], ["data-bs-toggle", "tooltip", 1, "btn", "btn-icon", 3, "click", "title"], [3, "ngSubmit", "formGroup"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], ["formControlName", "tipo", "placeholder", "Seleccione un tipo", 1, "form-control", "p-0"], ["value", "Ponedoras"], ["value", "Engorde"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "galera", "placeholder", "Nombre de la galera", 1, "form-control"], ["formControlName", "cantidad", "type", "number", "placeholder", "Cantidad de aves", 1, "form-control"], ["formControlName", "estado", "placeholder", "Seleccione el estado", 1, "form-control", "p-0"], ["value", "Activo"], ["value", "Inactivo"], ["value", "Desalojado"], ["formControlName", "fechaInicio", "type", "date", 1, "form-control"], ["formControlName", "fechaFin", "type", "date", 1, "form-control"], ["formControlName", "observaciones", "rows", "3", "placeholder", "Observaciones adicionales", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], [1, "invalid-feedback"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function LoteListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 2)(6, "div", 6)(7, "div", 7)(8, "span", 8);
    \u0275\u0275text(9, "Total Lotes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 10)(13, "div", 11);
    \u0275\u0275element(14, "i", 12);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(15, "div", 3)(16, "div", 4)(17, "div", 5)(18, "div", 2)(19, "div", 6)(20, "div", 7)(21, "span", 8);
    \u0275\u0275text(22, "Lotes Activos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h3", 13);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 10)(26, "div", 14);
    \u0275\u0275element(27, "i", 15);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(28, "div", 3)(29, "div", 4)(30, "div", 5)(31, "div", 2)(32, "div", 6)(33, "div", 7)(34, "span", 8);
    \u0275\u0275text(35, "Ponedoras");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "h3", 16);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 10)(39, "div", 17);
    \u0275\u0275element(40, "i", 18);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(41, "div", 3)(42, "div", 4)(43, "div", 5)(44, "div", 2)(45, "div", 6)(46, "div", 7)(47, "span", 8);
    \u0275\u0275text(48, "Engorde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "h3", 19);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 10)(52, "div", 20);
    \u0275\u0275element(53, "i", 21);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(54, "div", 2)(55, "div", 22)(56, "div", 4)(57, "div", 23)(58, "h3", 24);
    \u0275\u0275text(59, "Lista de lotes");
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
    \u0275\u0275listener("keyup", function LoteListComponent_Template_input_keyup_81_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(82, "div", 37)(83, "table", 38)(84, "thead")(85, "tr", 39)(86, "th", 40);
    \u0275\u0275text(87, "No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "th", 40);
    \u0275\u0275text(89, "Galera");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "th", 40);
    \u0275\u0275text(91, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "th", 40);
    \u0275\u0275text(93, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "th", 40);
    \u0275\u0275text(95, "Fecha Inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "th", 40);
    \u0275\u0275text(97, "Fecha Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "th", 40);
    \u0275\u0275text(99, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "th", 40);
    \u0275\u0275text(101, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(102, "tbody");
    \u0275\u0275template(103, LoteListComponent_tr_103_Template, 7, 0, "tr", 41)(104, LoteListComponent_tr_104_Template, 3, 1, "tr", 41)(105, LoteListComponent_tr_105_Template, 40, 32, "tr", 42);
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
    \u0275\u0275template(123, LoteListComponent_ng_template_123_Template, 62, 15, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275classMap("btn btn-primary");
    \u0275\u0275property("title", "Lotes")("title2", "Agregar Nuevo Lote")("class1", "")("path", "/dashboard/business-dashboard/lotes/new-lote");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx.totalLotes);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.lotesActivos);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.lotesPonedoras);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.lotesEngorde);
    \u0275\u0275advance(53);
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && ctx.lotes.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.lotes)("ngForTrackBy", ctx.trackByLoteId);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, SharedModule, HrDashboardPageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgbModule] });
var LoteListComponent = _LoteListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoteListComponent, { className: "LoteListComponent" });
})();
export {
  LoteListComponent
};
//# sourceMappingURL=lote-list.component-DWJBAKME.js.map
