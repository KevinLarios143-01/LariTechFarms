import {
  ClienteService
} from "./chunk-DTNROUGD.js";
import "./chunk-7WSVHSJD.js";
import {
  MatPaginator,
  MatSort,
  MaterialModuleModule,
  SharedModule
} from "./chunk-UEAXMXBR.js";
import {
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import {
  MatTableDataSource
} from "./chunk-ZVXZDCDW.js";
import {
  ToastrService
} from "./chunk-KTQLQ7YR.js";
import {
  FlatpickrDefaults,
  FlatpickrDirective,
  FlatpickrModule,
  esm_default
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
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-47LBZ5ZO.js";
import {
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassMapInterpolate2,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/client-dashboard/client-list/client-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ClientListComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 48)(2, "span", 49);
    \u0275\u0275text(3, "Cargando...");
    \u0275\u0275elementEnd()()();
  }
}
function ClientListComponent_Conditional_83_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 51)(2, "div", 52);
    \u0275\u0275element(3, "i", 53);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No hay clientes disponibles");
    \u0275\u0275elementEnd()()()();
  }
}
function ClientListComponent_Conditional_83_Conditional_18_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 39)(5, "span", 54);
    \u0275\u0275element(6, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "h6", 56);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 57);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "div", 58)(21, "a", 59);
    \u0275\u0275element(22, "i", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 61);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_83_Conditional_18_For_1_Template_a_click_23_listener() {
      const cliente_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      const editContent_r4 = \u0275\u0275reference(85);
      return \u0275\u0275resetView(ctx_r2.edit(editContent_r4, cliente_r2));
    });
    \u0275\u0275element(24, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a", 63);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_83_Conditional_18_For_1_Template_a_click_25_listener() {
      const cliente_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleClienteStatus(cliente_r2));
    });
    \u0275\u0275element(26, "i");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cliente_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#CL-", cliente_r2.id.toString().padStart(3, "0"), "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(cliente_r2.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Cliente #", cliente_r2.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cliente_r2.telefono || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cliente_r2.direccion || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge bg-", cliente_r2.estado ? "success" : "danger", "-transparent");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cliente_r2.estado ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("routerLink", "/dashboard/client-dashboard/view-client/", cliente_r2.id, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngbTooltip", cliente_r2.estado ? "Desactivar" : "Activar");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate2("fe fe-", cliente_r2.estado ? "user-x" : "user-check", " text-", cliente_r2.estado ? "danger" : "success", "");
  }
}
function ClientListComponent_Conditional_83_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ClientListComponent_Conditional_83_Conditional_18_For_1_Template, 27, 16, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.clientes);
  }
}
function ClientListComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "table", 50)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "#ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, ClientListComponent_Conditional_83_Conditional_17_Template, 6, 0, "tr")(18, ClientListComponent_Conditional_83_Conditional_18_Template, 2, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275conditional(ctx_r2.clientes.length === 0 ? 17 : 18);
  }
}
function ClientListComponent_ng_template_84_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1, " El nombre es requerido ");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_ng_template_84_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1, " El tel\xE9fono es requerido ");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_ng_template_84_Conditional_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "El correo es requerido");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_ng_template_84_Conditional_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Ingrese un correo v\xE1lido");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_ng_template_84_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275template(1, ClientListComponent_ng_template_84_Conditional_24_Conditional_1_Template, 2, 0, "span")(2, ClientListComponent_ng_template_84_Conditional_24_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_4_0 = ctx_r2.editForm.get("correo")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r2.editForm.get("correo")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["email"]) ? 2 : -1);
  }
}
function ClientListComponent_ng_template_84_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1, " El NIT es requerido ");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_ng_template_84_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1, " La direcci\xF3n es requerida ");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_ng_template_84_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 79);
  }
}
function ClientListComponent_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 64);
    \u0275\u0275listener("ngSubmit", function ClientListComponent_ng_template_84_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpdateCliente());
    });
    \u0275\u0275elementStart(1, "div", 65)(2, "h5", 66);
    \u0275\u0275text(3, "Editar Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 67);
    \u0275\u0275listener("click", function ClientListComponent_ng_template_84_Template_button_click_4_listener() {
      const modal_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(modal_r6.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 68)(6, "div", 14)(7, "div", 23)(8, "div", 24)(9, "label", 25);
    \u0275\u0275text(10, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 69);
    \u0275\u0275template(12, ClientListComponent_ng_template_84_Conditional_12_Template, 2, 0, "div", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 23)(14, "div", 24)(15, "label", 25);
    \u0275\u0275text(16, "Tel\xE9fono *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 71);
    \u0275\u0275template(18, ClientListComponent_ng_template_84_Conditional_18_Template, 2, 0, "div", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 23)(20, "div", 24)(21, "label", 25);
    \u0275\u0275text(22, "Correo Electr\xF3nico *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 72);
    \u0275\u0275template(24, ClientListComponent_ng_template_84_Conditional_24_Template, 3, 2, "div", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 23)(26, "div", 24)(27, "label", 25);
    \u0275\u0275text(28, "NIT *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 73);
    \u0275\u0275template(30, ClientListComponent_ng_template_84_Conditional_30_Template, 2, 0, "div", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 74)(32, "div", 24)(33, "label", 25);
    \u0275\u0275text(34, "Direcci\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "textarea", 75);
    \u0275\u0275template(36, ClientListComponent_ng_template_84_Conditional_36_Template, 2, 0, "div", 70);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 76)(38, "button", 77);
    \u0275\u0275listener("click", function ClientListComponent_ng_template_84_Template_button_click_38_listener() {
      const modal_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(modal_r6.dismiss("cancel"));
    });
    \u0275\u0275text(39, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 78);
    \u0275\u0275template(41, ClientListComponent_ng_template_84_Conditional_41_Template, 1, 0, "span", 79);
    \u0275\u0275text(42, " Actualizar ");
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
    let tmp_12_0;
    let tmp_13_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.editForm);
    \u0275\u0275advance(11);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r2.editForm.get("nombre")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r2.editForm.get("nombre")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r2.editForm.get("nombre")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r2.editForm.get("nombre")) == null ? null : tmp_5_0.touched) ? 12 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r2.editForm.get("telefono")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r2.editForm.get("telefono")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_7_0 = ctx_r2.editForm.get("telefono")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r2.editForm.get("telefono")) == null ? null : tmp_7_0.touched) ? 18 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r2.editForm.get("correo")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r2.editForm.get("correo")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_9_0 = ctx_r2.editForm.get("correo")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r2.editForm.get("correo")) == null ? null : tmp_9_0.touched) ? 24 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r2.editForm.get("nit")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r2.editForm.get("nit")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = ctx_r2.editForm.get("nit")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r2.editForm.get("nit")) == null ? null : tmp_11_0.touched) ? 30 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx_r2.editForm.get("direccion")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r2.editForm.get("direccion")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_13_0 = ctx_r2.editForm.get("direccion")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r2.editForm.get("direccion")) == null ? null : tmp_13_0.touched) ? 36 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.loading ? 41 : -1);
  }
}
var _ClientListComponent = class _ClientListComponent {
  constructor(modalService, clienteService, fb, toastr) {
    this.modalService = modalService;
    this.clienteService = clienteService;
    this.fb = fb;
    this.toastr = toastr;
    this.displayedColumns = ["ID", "Name", "Email", "Projects", "Status", "Action"];
    this.clientes = [];
    this.filteredClientes = [];
    this.loading = false;
    this.selectedCliente = null;
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
    this.dataSource = new MatTableDataSource([]);
    this.editForm = this.fb.group({
      nombre: ["", Validators.required],
      telefono: ["", Validators.required],
      correo: ["", [Validators.required, Validators.email]],
      direccion: ["", Validators.required],
      nit: ["", Validators.required]
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  toggleClienteStatus(cliente) {
    const isActive = cliente.estado;
    const action = isActive ? "desactivar" : "activar";
    if (confirm(`\xBFEst\xE1 seguro de que desea ${action} este cliente?`)) {
      const serviceCall = isActive ? this.clienteService.deactivateCliente(cliente.id) : this.clienteService.activateCliente(cliente.id);
      serviceCall.subscribe({
        next: () => {
          this.toastr.success(`Cliente ${action}do exitosamente`, "\xC9xito", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.loadClientes();
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
          this.toastr.error(`Error al ${action} el cliente: ${errorMessage}`, "Error", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
        }
      });
    }
  }
  edit(editContent, cliente) {
    this.selectedCliente = cliente;
    this.editForm.patchValue({
      nombre: cliente.nombre,
      telefono: cliente.telefono,
      correo: cliente.correo,
      direccion: cliente.direccion,
      nit: cliente.nit
    });
    this.modalService.open(editContent, { windowClass: "modalCusSty modal-lg" });
  }
  onUpdateCliente() {
    if (this.editForm.valid && this.selectedCliente) {
      this.loading = true;
      const updateData = this.editForm.value;
      this.clienteService.updateCliente(this.selectedCliente.id, updateData).subscribe({
        next: (response) => {
          this.toastr.success("Cliente actualizado exitosamente", "\xC9xito", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.loadClientes();
          this.modalService.dismissAll();
          this.loading = false;
        },
        error: (error) => {
          this.toastr.error("Error al actualizar el cliente: " + (error.error?.message || "Error desconocido"), "Error", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
          this.loading = false;
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
    this.loadClientes();
    this.initializeFlatpickr();
  }
  loadClientes() {
    this.loading = true;
    this.clienteService.getClientes().subscribe({
      next: (response) => {
        const clientesData = response?.data?.data || response?.data || response || [];
        this.clientes = Array.isArray(clientesData) ? clientesData : [];
        this.filteredClientes = [...this.clientes];
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading clientes:", error);
        this.clientes = [];
        this.filteredClientes = [];
        this.loading = false;
      }
    });
  }
  mapClientesToDisplay(clientes) {
    if (!clientes || !Array.isArray(clientes)) {
      console.warn("Clientes is not an array:", clientes);
      return [];
    }
    return clientes.map((cliente, index) => ({
      id: cliente.id,
      No: `#CLT-${String(cliente.id).padStart(3, "0")}`,
      name: cliente.nombre || "Sin nombre",
      img: cliente.img || "./assets/images/laritechfarms/2.jpg",
      email: cliente.correo || cliente.email || "",
      project: cliente.proyectos || cliente._count?.proyectos || 0,
      statusText: cliente.estado ? "Activo" : "Inactivo",
      status: cliente.estado ? "success" : "danger"
    }));
  }
  initializeFlatpickr() {
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i"
    };
    esm_default("#inlinetime", this.flatpickrOptions);
    this.flatpickrOptions = {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      defaultDate: "2023-11-07 14:30"
    };
    esm_default("#pretime", this.flatpickrOptions);
  }
};
_ClientListComponent.\u0275fac = function ClientListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClientListComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ClienteService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ToastrService));
};
_ClientListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientListComponent, selectors: [["app-client-list"]], viewQuery: function ClientListComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
  }
}, standalone: true, features: [\u0275\u0275ProvidersFeature([
  FlatpickrDefaults
]), \u0275\u0275StandaloneFeature], decls: 86, vars: 1, consts: [["editContent", ""], [1, "page-header", "d-lg-flex", "d-block"], [1, "page-leftheader"], [1, "page-title"], [1, "page-rightheader"], [1, "btn-list", "d-flex", "gap-1"], ["routerLink", "/dashboard/client-dashboard/new-client", 1, "btn", "btn-primary"], [1, "fe", "fe-plus", "fs-12", "my-auto", "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "E-mail", 1, "btn", "btn-light3"], [1, "fe", "fe-mail"], ["data-bs-placement", "top", "data-bs-toggle", "tooltip", "title", "Contact", 1, "btn", "btn-light3"], [1, "fe", "fe-phone-call"], ["data-bs-placement", "top", "data-bs-toggle", "tooltip", "title", "Info", 1, "btn", "btn-primary"], [1, "fe", "fe-info"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "d-flex", "justify-content-between", "border-bottom-0"], [1, "card-title"], [1, "float-end"], ["type", "text", "placeholder", "buscar", 1, "form-control"], [1, "card-body"], [1, "col-md-12", "col-lg-7"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["mwlFlatpickr", "", "type", "text", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], [1, "col-md-3"], ["data-trigger", "", "placeholder", "Seleccionar Estado", 1, "form-control", "custom-select", "p-0"], ["value", ""], ["value", "1"], [1, "col-md-2"], [1, "form-group", "mt-2"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-grid"], [1, "card-body", "border-top"], [1, "col-sm-6", "mb-1"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], ["name", "quantity", "placeholder", "10", 1, "form-control", "wd-150", "p-0"], ["value", "10"], ["value", "25"], ["value", "50"], ["value", "100"], [1, "text-center", "py-4"], [1, "table-responsive"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom"], ["colspan", "6", 1, "text-center", "py-4"], [1, "text-muted"], [1, "fe", "fe-inbox", "fs-24", "mb-2"], [1, "avatar", "avatar-md", "me-2", "avatar-rounded", "bg-primary-transparent"], [1, "fe", "fe-user"], [1, "mb-1", "fs-14"], [1, "fs-12", "text-muted"], [1, "d-flex"], ["placement", "top", "ngbTooltip", "Ver Cliente", 1, "action-btns1", 3, "routerLink"], [1, "fe", "fe-eye", "text-primary"], ["placement", "top", "ngbTooltip", "Editar", 1, "action-btns1", 3, "click"], [1, "fe", "fe-edit-2", "text-success"], ["placement", "top", 1, "action-btns1", 3, "click", "ngbTooltip"], [3, "ngSubmit", "formGroup"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["formControlName", "nombre", "placeholder", "Nombre del cliente", 1, "form-control"], [1, "invalid-feedback"], ["formControlName", "telefono", "placeholder", "Tel\xE9fono", 1, "form-control"], ["formControlName", "correo", "type", "email", "placeholder", "correo@ejemplo.com", 1, "form-control"], ["formControlName", "nit", "placeholder", "NIT", 1, "form-control"], [1, "col-md-12"], ["formControlName", "direccion", "rows", "3", "placeholder", "Direcci\xF3n completa", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function ClientListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3, "Lista de Clientes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "a", 6);
    \u0275\u0275element(7, "i", 7);
    \u0275\u0275text(8, "Agregar Cliente");
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
    \u0275\u0275text(20, "Resumen de Clientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 19);
    \u0275\u0275element(22, "input", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 21)(24, "div", 14)(25, "div", 22)(26, "div", 14)(27, "div", 23)(28, "div", 24)(29, "label", 25);
    \u0275\u0275text(30, "Desde:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 24)(32, "div", 26)(33, "div", 27);
    \u0275\u0275element(34, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 29);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 23)(37, "div", 24)(38, "label", 25);
    \u0275\u0275text(39, "Hasta:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 24)(41, "div", 26)(42, "div", 27);
    \u0275\u0275element(43, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 29);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(45, "div", 30)(46, "div", 24)(47, "label", 25);
    \u0275\u0275text(48, "Seleccionar Estado:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, "per ");
    \u0275\u0275elementStart(50, "ng-select", 31)(51, "ng-option", 32);
    \u0275\u0275text(52, "Activo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ng-option", 33);
    \u0275\u0275text(54, "Inactivo");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div", 34)(56, "div", 35);
    \u0275\u0275element(57, "label", 25);
    \u0275\u0275elementStart(58, "a", 36);
    \u0275\u0275text(59, "Buscar");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(60, "div", 37)(61, "div", 14)(62, "div", 38)(63, "div", 39)(64, "span");
    \u0275\u0275text(65, "Mostrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 40)(67, "div", 24)(68, "ng-select", 41)(69, "ng-option", 42);
    \u0275\u0275text(70, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ng-option", 43);
    \u0275\u0275text(72, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "ng-option", 44);
    \u0275\u0275text(74, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "ng-option", 45);
    \u0275\u0275text(76, "100");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(77, "span");
    \u0275\u0275text(78, "entradas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 38)(80, "div", 19);
    \u0275\u0275element(81, "input", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(82, ClientListComponent_Conditional_82_Template, 4, 0, "div", 46)(83, ClientListComponent_Conditional_83_Template, 19, 1, "div", 47);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(84, ClientListComponent_ng_template_84_Template, 43, 18, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275advance(82);
    \u0275\u0275conditional(ctx.loading ? 82 : 83);
  }
}, dependencies: [SharedModule, NgSelectModule, NgSelectComponent, NgOptionComponent, MaterialModuleModule, FlatpickrModule, FlatpickrDirective, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgbModule, NgbTooltip] });
var ClientListComponent = _ClientListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientListComponent, { className: "ClientListComponent" });
})();
export {
  ClientListComponent
};
//# sourceMappingURL=client-list.component-AJQ6UHTT.js.map
