import {
  ProductosService
} from "./chunk-UK4IXMZI.js";
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
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgbModule,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavOutlet,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-47LBZ5ZO.js";
import {
  ActivatedRoute,
  ChangeDetectorRef,
  CommonModule,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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

// src/app/componets/dashbord/production-dashboard/productos/new-producto/new-producto.component.ts
function NewProductoComponent_ng_template_46_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 37)(2, "span", 38);
    \u0275\u0275text(3, "Cargando...");
    \u0275\u0275elementEnd()()();
  }
}
function NewProductoComponent_ng_template_46_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("nombre"), " ");
  }
}
function NewProductoComponent_ng_template_46_Conditional_3_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const categoria_r4 = ctx.$implicit;
    \u0275\u0275property("value", categoria_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(categoria_r4);
  }
}
function NewProductoComponent_ng_template_46_Conditional_3_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("precio"), " ");
  }
}
function NewProductoComponent_ng_template_46_Conditional_3_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("stock"), " ");
  }
}
function NewProductoComponent_ng_template_46_Conditional_3_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 56);
    \u0275\u0275text(1, 'Use la opci\xF3n "Actualizar Stock" para modificar el inventario');
    \u0275\u0275elementEnd();
  }
}
function NewProductoComponent_ng_template_46_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 39);
    \u0275\u0275listener("ngSubmit", function NewProductoComponent_ng_template_46_Conditional_3_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275elementStart(1, "h4", 40);
    \u0275\u0275text(2, "Datos B\xE1sicos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41)(4, "div", 2)(5, "div", 42)(6, "label", 43);
    \u0275\u0275text(7, "Nombre del Producto *");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 44);
    \u0275\u0275element(9, "input", 45);
    \u0275\u0275template(10, NewProductoComponent_ng_template_46_Conditional_3_Conditional_10_Template, 2, 1, "div", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 41)(12, "div", 2)(13, "div", 42)(14, "label", 43);
    \u0275\u0275text(15, "Tama\xF1o");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 44);
    \u0275\u0275element(17, "input", 47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 41)(19, "div", 2)(20, "div", 42)(21, "label", 43);
    \u0275\u0275text(22, "Categor\xEDa");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 44)(24, "ng-select", 48);
    \u0275\u0275repeaterCreate(25, NewProductoComponent_ng_template_46_Conditional_3_For_26_Template, 2, 2, "ng-option", 49, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "h4", 50);
    \u0275\u0275text(28, "Precio e Inventario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 41)(30, "div", 2)(31, "div", 42)(32, "label", 43);
    \u0275\u0275text(33, "Precio Unitario *");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 44)(35, "div", 51)(36, "span", 52);
    \u0275\u0275text(37, "Q");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, NewProductoComponent_ng_template_46_Conditional_3_Conditional_39_Template, 2, 1, "div", 54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 41)(41, "div", 2)(42, "div", 42)(43, "label", 43);
    \u0275\u0275text(44, "Stock Inicial *");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 44);
    \u0275\u0275element(46, "input", 55);
    \u0275\u0275template(47, NewProductoComponent_ng_template_46_Conditional_3_Conditional_47_Template, 2, 1, "div", 46)(48, NewProductoComponent_ng_template_46_Conditional_3_Conditional_48_Template, 2, 0, "small", 56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 57)(50, "div", 2)(51, "div", 42)(52, "label", 58);
    \u0275\u0275text(53, "Estado del Producto:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 44)(55, "div", 59);
    \u0275\u0275element(56, "input", 60);
    \u0275\u0275elementStart(57, "label", 61);
    \u0275\u0275text(58, "Activo/Inactivo");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.productoForm);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldInvalid("nombre"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isFieldInvalid("nombre") ? 10 : -1);
    \u0275\u0275advance(14);
    \u0275\u0275property("clearable", true);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.categorias);
    \u0275\u0275advance(13);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldInvalid("precio"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isFieldInvalid("precio") ? 39 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldInvalid("stock"));
    \u0275\u0275property("readonly", ctx_r2.isEditMode);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isFieldInvalid("stock") ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isEditMode ? 48 : -1);
  }
}
function NewProductoComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275template(2, NewProductoComponent_ng_template_46_Conditional_2_Template, 4, 0, "div", 35)(3, NewProductoComponent_ng_template_46_Conditional_3_Template, 59, 13, "form", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isLoading ? 2 : 3);
  }
}
var _NewProductoComponent = class _NewProductoComponent {
  constructor(fb, productosService, route, router, cdr, toastr) {
    this.fb = fb;
    this.productosService = productosService;
    this.route = route;
    this.router = router;
    this.cdr = cdr;
    this.toastr = toastr;
    this.categorias = [];
    this.isLoading = false;
    this.isEditMode = false;
    this.productoId = null;
    this.active = 1;
    this.productoForm = this.fb.group({
      nombre: ["", Validators.required],
      tamanio: [""],
      precio: ["", [Validators.required, Validators.min(0.01)]],
      stock: ["", [Validators.required, Validators.min(0)]],
      categoria: [""],
      activo: [true]
    });
  }
  ngOnInit() {
    this.loadCategorias();
    this.checkEditMode();
  }
  checkEditMode() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.isEditMode = true;
      this.productoId = parseInt(id);
      this.loadProducto();
    }
  }
  loadCategorias() {
    this.productosService.getCategorias().subscribe({
      next: (response) => {
        this.categorias = Array.isArray(response.data) ? response.data.map((item) => item.categoria) : [];
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error al cargar categor\xEDas:", error);
        this.categorias = [];
      }
    });
  }
  loadProducto() {
    if (this.productoId) {
      this.isLoading = true;
      this.productosService.getProductoById(this.productoId).subscribe({
        next: (response) => {
          const producto = response.data;
          this.productoForm.patchValue({
            nombre: producto.nombre,
            tamanio: producto.tamanio || "",
            precio: producto.precio,
            stock: producto.stock,
            categoria: producto.categoria || "",
            activo: producto.activo
          });
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          this.toastr.error("Error al cargar producto", "Error", {
            progressBar: true,
            closeButton: true
          });
          this.isLoading = false;
          this.router.navigate(["../list"], { relativeTo: this.route });
        }
      });
    }
  }
  onSubmit() {
    if (this.productoForm.valid) {
      this.isLoading = true;
      const formData = this.productoForm.value;
      if (this.isEditMode && this.productoId) {
        const updateData = {
          nombre: formData.nombre,
          tamanio: formData.tamanio || void 0,
          precio: parseFloat(formData.precio),
          categoria: formData.categoria || void 0,
          activo: formData.activo
        };
        this.productosService.updateProducto(this.productoId, updateData).subscribe({
          next: (response) => {
            this.toastr.success("Producto actualizado exitosamente", "\xC9xito", {
              progressBar: true,
              closeButton: true
            });
            setTimeout(() => {
              this.router.navigate(["../list"], { relativeTo: this.route });
            }, 1e3);
          },
          error: (error) => {
            this.toastr.error("Error al actualizar producto", "Error", {
              progressBar: true,
              closeButton: true
            });
            this.isLoading = false;
            this.cdr.detectChanges();
          }
        });
      } else {
        const createData = {
          nombre: formData.nombre,
          tamanio: formData.tamanio || void 0,
          precio: parseFloat(formData.precio),
          stock: parseInt(formData.stock),
          categoria: formData.categoria || void 0,
          activo: formData.activo
        };
        this.productosService.createProducto(createData).subscribe({
          next: (response) => {
            this.toastr.success("Producto creado exitosamente", "\xC9xito", {
              progressBar: true,
              closeButton: true
            });
            setTimeout(() => {
              this.router.navigate(["../list"], { relativeTo: this.route });
            }, 1e3);
          },
          error: (error) => {
            this.toastr.error("Error al crear producto", "Error", {
              progressBar: true,
              closeButton: true
            });
            this.isLoading = false;
            this.cdr.detectChanges();
          }
        });
      }
    } else {
      this.markFormGroupTouched();
    }
  }
  markFormGroupTouched() {
    Object.keys(this.productoForm.controls).forEach((key) => {
      const control = this.productoForm.get(key);
      control?.markAsTouched();
    });
  }
  isFieldInvalid(fieldName) {
    const field = this.productoForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  getFieldError(fieldName) {
    const field = this.productoForm.get(fieldName);
    if (field?.errors) {
      if (field.errors["required"])
        return `${fieldName} es requerido`;
      if (field.errors["min"])
        return `${fieldName} debe ser mayor a ${field.errors["min"].min}`;
    }
    return "";
  }
};
_NewProductoComponent.\u0275fac = function NewProductoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewProductoComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ProductosService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_NewProductoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewProductoComponent, selectors: [["app-new-producto"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 13, consts: [["nav", "ngbNav"], [3, "title"], [1, "row"], [1, "col-xxl-3", "col-xl-4", "col-md-12", "col-lg-12"], [1, "card", "box-widget", "widget-user", "custom-card"], [1, "card-body", "text-center"], [1, "widget-user-image", "mx-auto", "text-center"], [1, "fas", "fa-box", "fa-5x", "text-primary"], [1, "pro-user", "mt-3"], [1, "pro-user-username", "text-dark", "mb-1", "fs-16"], [1, "pro-user-desc", "text-muted", "fs-12"], [1, "card-footer", "p-0"], [1, "col-4", "text-center", "py-3", "border-end"], [1, "fs-12", "fw-semibold", "mb-3"], [1, "mb-2"], [1, "fs-18", "text-success"], [1, "fs-12", "mb-0"], [1, "col-4", "py-3", "text-center", "border-end"], [1, "fs-18", "text-primary"], [1, "col-4", "text-center", "py-3"], [1, "fs-18"], [1, "col-xxl-9", "col-xl-8", "col-md-12", "col-lg-12"], [1, "tab-menu-heading", "hremp-tabs", "p-0", "border-0"], [1, "tabs-menu1"], ["ngbNav", "", 1, "panel-tabs", 3, "activeIdChange", "activeId"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "panel-body", "tabs-menu-body", "hremp-tabs1", "p-0"], [1, "tab-content", 3, "ngbNavOutlet"], [1, "panel-footer", "text-end"], ["type", "button", 1, "me-2", "btn", "btn-primary", 3, "click", "disabled"], ["type", "button", "routerLink", "../list", 1, "btn", "btn-danger"], ["id", "tab1"], [1, "card-body"], [1, "text-center"], [3, "formGroup"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [3, "ngSubmit", "formGroup"], [1, "mb-4", "font-weight-bold"], [1, "form-group"], [1, "col-md-3"], [1, "form-label", "mb-0", "mt-2"], [1, "col-md-9"], ["type", "text", "formControlName", "nombre", "placeholder", "Ingrese el nombre del producto", 1, "form-control"], [1, "invalid-feedback"], ["type", "text", "formControlName", "tamanio", "placeholder", "Ej: XL, Jumbo, Grande", 1, "form-control"], ["formControlName", "categoria", "placeholder", "Seleccionar categor\xEDa", 1, "form-control", "custom-select", "p-0", 3, "clearable"], [3, "value"], [1, "mb-4", "mt-7", "font-weight-bold"], [1, "input-group"], [1, "input-group-text"], ["type", "number", "formControlName", "precio", "placeholder", "0.00", "step", "0.01", "min", "0.01", 1, "form-control"], [1, "invalid-feedback", "d-block"], ["type", "number", "formControlName", "stock", "placeholder", "0", "min", "0", 1, "form-control", 3, "readonly"], [1, "text-muted"], [1, "form-group", "mt-7"], [1, "form-label"], [1, "form-check", "form-check-md", "form-switch"], ["type", "checkbox", "formControlName", "activo", "role", "switch", "id", "switch-activo", 1, "form-check-input"], ["for", "switch-activo", 1, "form-check-label", "mt-0", "custom-switch-description"]], template: function NewProductoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6);
    \u0275\u0275element(6, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8)(8, "h5", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h6", 10);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 11)(13, "div", 2)(14, "div", 12)(15, "h5", 13);
    \u0275\u0275text(16, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h5", 14)(18, "span", 15);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "h5", 16);
    \u0275\u0275text(21, "Unitario");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 17)(23, "h5", 13);
    \u0275\u0275text(24, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h5", 14)(26, "span", 18);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "h5", 16);
    \u0275\u0275text(29, "Unidades");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 19)(31, "h5", 13);
    \u0275\u0275text(32, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "h5", 14)(34, "span", 20);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "h5", 16);
    \u0275\u0275text(37, "Producto");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(38, "div", 21)(39, "div", 22)(40, "div", 23)(41, "ul", 24, 0);
    \u0275\u0275twoWayListener("activeIdChange", function NewProductoComponent_Template_ul_activeIdChange_41_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(43, "li", 25)(44, "a", 26);
    \u0275\u0275text(45, "Informaci\xF3n del Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, NewProductoComponent_ng_template_46_Template, 4, 1, "ng-template", 27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "div", 28);
    \u0275\u0275element(48, "div", 29);
    \u0275\u0275elementStart(49, "div", 30)(50, "button", 31);
    \u0275\u0275listener("click", function NewProductoComponent_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSubmit());
    });
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 32);
    \u0275\u0275text(53, " Cancelar ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const nav_r5 = \u0275\u0275reference(42);
    \u0275\u0275property("title", ctx.isEditMode ? "Editar Producto" : "Agregar Producto");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(((tmp_2_0 = ctx.productoForm.get("nombre")) == null ? null : tmp_2_0.value) || "Nuevo Producto");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_3_0 = ctx.productoForm.get("categoria")) == null ? null : tmp_3_0.value) || "Sin categor\xEDa");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Q", ((tmp_4_0 = ctx.productoForm.get("precio")) == null ? null : tmp_4_0.value) || "0.00", "");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(((tmp_5_0 = ctx.productoForm.get("stock")) == null ? null : tmp_5_0.value) || "0");
    \u0275\u0275advance(7);
    \u0275\u0275classMap(((tmp_6_0 = ctx.productoForm.get("activo")) == null ? null : tmp_6_0.value) ? "text-success" : "text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_7_0 = ctx.productoForm.get("activo")) == null ? null : tmp_7_0.value) ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("activeId", ctx.active);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", 1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngbNavOutlet", nav_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.productoForm.invalid || ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Actualizar" : "Guardar", " ");
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, NgSelectModule, NgSelectComponent, NgOptionComponent, NgbModule, NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavOutlet, SharedModule, HrDashboardPageHeaderComponent] });
var NewProductoComponent = _NewProductoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewProductoComponent, { className: "NewProductoComponent" });
})();
export {
  NewProductoComponent
};
//# sourceMappingURL=new-producto.component-Y6GGKAGG.js.map
