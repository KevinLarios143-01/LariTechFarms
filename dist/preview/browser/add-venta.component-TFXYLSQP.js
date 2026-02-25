import {
  ClienteService
} from "./chunk-SLCQH36Y.js";
import {
  VentaService
} from "./chunk-EAZAKIYV.js";
import {
  environment
} from "./chunk-7WSVHSJD.js";
import {
  SharedModule
} from "./chunk-UEAXMXBR.js";
import {
  NgOptionTemplateDirective,
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
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-47LBZ5ZO.js";
import {
  ChangeDetectorRef,
  CommonModule,
  DecimalPipe,
  HttpClient,
  Router,
  RouterLink,
  RouterModule,
  map,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/shared/services/producto.service.ts
var _ProductoService = class _ProductoService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/v1/productos`;
  }
  getProductos() {
    return this.http.get(this.apiUrl).pipe(map((response) => response.data.data || []));
  }
};
_ProductoService.\u0275fac = function ProductoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProductoService)(\u0275\u0275inject(HttpClient));
};
_ProductoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductoService, factory: _ProductoService.\u0275fac, providedIn: "root" });
var ProductoService = _ProductoService;

// src/app/componets/dashbord/bussiness-dashboard/ventas/add-venta/add-venta.component.ts
function AddVentaComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Fecha es requerida");
    \u0275\u0275elementEnd();
  }
}
function AddVentaComponent_ng_template_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.telefono);
  }
}
function AddVentaComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, AddVentaComponent_ng_template_24_Conditional_2_Template, 2, 1, "small", 39);
  }
  if (rf & 2) {
    const item_r1 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r1.telefono ? 2 : -1);
  }
}
function AddVentaComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, "Cliente es requerido");
    \u0275\u0275elementEnd();
  }
}
function AddVentaComponent_For_49_ng_template_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().item;
    \u0275\u0275textInterpolate1(" - Stock: ", item_r5.stock, " ");
  }
}
function AddVentaComponent_For_49_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "small", 39);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275template(5, AddVentaComponent_For_49_ng_template_5_Conditional_5_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r5.tamanio, " - Q", \u0275\u0275pipeBind2(4, 4, item_r5.precio, "1.2-2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r5.stock !== void 0 ? 5 : -1);
  }
}
function AddVentaComponent_For_49_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, "Producto es requerido");
    \u0275\u0275elementEnd();
  }
}
function AddVentaComponent_For_49_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_98_r3 = \u0275\u0275nextContext().$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getDetalleFieldError(\u0275$index_98_r3, "cantidad"));
  }
}
function AddVentaComponent_For_49_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_98_r3 = \u0275\u0275nextContext().$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Stock: ", ctx_r3.getStockDisponible(\u0275$index_98_r3), "");
  }
}
function AddVentaComponent_For_49_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Precio requerido");
    \u0275\u0275elementEnd();
  }
}
function AddVentaComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 40)(2, "label", 13);
    \u0275\u0275text(3, "Producto *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ng-select", 41);
    \u0275\u0275listener("change", function AddVentaComponent_For_49_Template_ng_select_change_4_listener() {
      const \u0275$index_98_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onProductoChange(\u0275$index_98_r3));
    });
    \u0275\u0275template(5, AddVentaComponent_For_49_ng_template_5_Template, 6, 7, "ng-template", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AddVentaComponent_For_49_Conditional_6_Template, 2, 0, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 42)(8, "label", 13);
    \u0275\u0275text(9, "Cantidad *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 43);
    \u0275\u0275listener("ngModelChange", function AddVentaComponent_For_49_Template_input_ngModelChange_10_listener() {
      const \u0275$index_98_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onCantidadChange(\u0275$index_98_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AddVentaComponent_For_49_Conditional_11_Template, 2, 1, "div", 15)(12, AddVentaComponent_For_49_Conditional_12_Template, 2, 1, "small", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 42)(14, "label", 13);
    \u0275\u0275text(15, "Precio Unit. *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 44);
    \u0275\u0275listener("ngModelChange", function AddVentaComponent_For_49_Template_input_ngModelChange_16_listener() {
      const \u0275$index_98_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPrecioChange(\u0275$index_98_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AddVentaComponent_For_49_Conditional_17_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 12)(19, "label", 13);
    \u0275\u0275text(20, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 45);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 46)(24, "button", 47);
    \u0275\u0275listener("click", function AddVentaComponent_For_49_Template_button_click_24_listener() {
      const \u0275$index_98_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeDetalle(\u0275$index_98_r3));
    });
    \u0275\u0275element(25, "i", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_17_0;
    let tmp_20_0;
    const detalle_r6 = ctx.$implicit;
    const \u0275$index_98_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", \u0275$index_98_r3);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r3.isDetalleFieldInvalid(\u0275$index_98_r3, "idProducto"));
    \u0275\u0275property("items", ctx_r3.productos);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isDetalleFieldInvalid(\u0275$index_98_r3, "idProducto") ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r3.isDetalleFieldInvalid(\u0275$index_98_r3, "cantidad"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isDetalleFieldInvalid(\u0275$index_98_r3, "cantidad") ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_17_0 = detalle_r6.get("idProducto")) == null ? null : tmp_17_0.value) ? 12 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r3.isDetalleFieldInvalid(\u0275$index_98_r3, "precioUnitario"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isDetalleFieldInvalid(\u0275$index_98_r3, "precioUnitario") ? 17 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", "Q" + \u0275\u0275pipeBind2(22, 14, (tmp_20_0 = detalle_r6.get("subtotal")) == null ? null : tmp_20_0.value, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.detalles.length === 1);
  }
}
function AddVentaComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, ' No hay productos agregados. Haga clic en "Agregar Producto" para comenzar. ');
    \u0275\u0275elementEnd();
  }
}
function AddVentaComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
  }
}
var _AddVentaComponent = class _AddVentaComponent {
  constructor(fb, ventaService, clienteService, productoService, router, cdr, toastr) {
    this.fb = fb;
    this.ventaService = ventaService;
    this.clienteService = clienteService;
    this.productoService = productoService;
    this.router = router;
    this.cdr = cdr;
    this.toastr = toastr;
    this.isLoading = false;
    this.clientes = [];
    this.productos = [];
    this.totalVenta = 0;
    this.metodosPago = ["Efectivo", "Transferencia", "Tarjeta", "Cheque"];
    this.ventaForm = this.fb.group({
      fecha: ["", Validators.required],
      idCliente: ["", Validators.required],
      metodoPago: [""],
      observaciones: [""],
      detalles: this.fb.array([this.createDetalleFormGroup()])
    });
  }
  ngOnInit() {
    console.log("AddVentaComponent ngOnInit ejecutado");
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.ventaForm.patchValue({ fecha: today });
    this.loadClientes();
    this.loadProductos();
  }
  createDetalleFormGroup() {
    return this.fb.group({
      idProducto: ["", Validators.required],
      cantidad: ["", [Validators.required, Validators.min(1)]],
      precioUnitario: ["", [Validators.required, Validators.min(0.01)]],
      subtotal: [{ value: 0, disabled: true }]
    });
  }
  get detalles() {
    return this.ventaForm.get("detalles");
  }
  loadClientes() {
    console.log("loadClientes() ejecutado");
    this.clienteService.getClientes().subscribe({
      next: (response) => {
        console.log("Respuesta completa de clientes:", response);
        if (response && response.data) {
          if (Array.isArray(response.data)) {
            this.clientes = response.data;
          } else if (response.data.data && Array.isArray(response.data.data)) {
            this.clientes = response.data.data;
          } else {
            this.clientes = [];
          }
          console.log("Clientes asignados:", this.clientes);
          console.log("Cantidad de clientes:", this.clientes.length);
          this.cdr.detectChanges();
        } else {
          console.error("Estructura de respuesta inesperada:", response);
          this.clientes = [];
        }
      },
      error: (error) => {
        console.error("Error al cargar clientes:", error);
        this.toastr.error("Error al cargar clientes", "Error");
      }
    });
  }
  loadProductos() {
    this.productoService.getProductos().subscribe({
      next: (productos) => {
        this.productos = productos;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error al cargar productos:", error);
      }
    });
  }
  addDetalle() {
    this.detalles.push(this.createDetalleFormGroup());
  }
  removeDetalle(index) {
    if (this.detalles.length > 1) {
      this.detalles.removeAt(index);
      this.calculateTotal();
    } else {
      this.toastr.warning("Debe haber al menos un producto", "Advertencia");
    }
  }
  onProductoChange(index) {
    const detalle = this.detalles.at(index);
    const productoId = detalle.get("idProducto")?.value;
    const producto = this.productos.find((p) => p.id === productoId);
    if (producto) {
      detalle.get("precioUnitario")?.setValue(producto.precio);
      const cantidadControl = detalle.get("cantidad");
      cantidadControl?.setValidators([
        Validators.required,
        Validators.min(1),
        Validators.max(producto.stock)
      ]);
      cantidadControl?.updateValueAndValidity();
      this.calculateSubtotal(index);
    }
  }
  onCantidadChange(index) {
    const detalle = this.detalles.at(index);
    const productoId = detalle.get("idProducto")?.value;
    const cantidad = detalle.get("cantidad")?.value;
    const producto = this.productos.find((p) => p.id === productoId);
    if (producto && cantidad > producto.stock) {
      this.toastr.warning(`Stock insuficiente para ${producto.nombre}. Disponible: ${producto.stock}`, "Advertencia");
    }
    this.calculateSubtotal(index);
  }
  onPrecioChange(index) {
    this.calculateSubtotal(index);
  }
  calculateSubtotal(index) {
    const detalle = this.detalles.at(index);
    const cantidad = parseFloat(detalle.get("cantidad")?.value) || 0;
    const precio = parseFloat(detalle.get("precioUnitario")?.value) || 0;
    const subtotal = cantidad * precio;
    detalle.get("subtotal")?.setValue(subtotal);
    this.calculateTotal();
  }
  calculateTotal() {
    let total = 0;
    this.detalles.controls.forEach((detalle) => {
      total += detalle.get("subtotal")?.value || 0;
    });
    this.totalVenta = total;
  }
  onSubmit() {
    this.markFormGroupTouched();
    let hasRequiredErrors = false;
    let hasStockErrors = false;
    this.detalles.controls.forEach((detalle, index) => {
      const idProducto = detalle.get("idProducto");
      const cantidad = detalle.get("cantidad");
      const precioUnitario = detalle.get("precioUnitario");
      if (!idProducto?.value || !cantidad?.value || !precioUnitario?.value) {
        hasRequiredErrors = true;
      }
    });
    if (!this.ventaForm.get("fecha")?.value || !this.ventaForm.get("idCliente")?.value) {
      hasRequiredErrors = true;
    }
    if (hasRequiredErrors) {
      this.toastr.warning("Por favor complete todos los campos requeridos", "Advertencia", {
        timeOut: 3e3,
        positionClass: "toast-top-right"
      });
      return;
    }
    const productoCantidades = /* @__PURE__ */ new Map();
    this.detalles.controls.forEach((detalle) => {
      const idProducto = detalle.get("idProducto")?.value;
      const cantidad = detalle.get("cantidad")?.value;
      if (idProducto && cantidad) {
        const cantidadActual = productoCantidades.get(idProducto) || 0;
        productoCantidades.set(idProducto, cantidadActual + parseInt(cantidad));
      }
    });
    productoCantidades.forEach((cantidadTotal, idProducto) => {
      const producto = this.productos.find((p) => p.id === idProducto);
      if (producto && cantidadTotal > producto.stock) {
        hasStockErrors = true;
        this.toastr.error(`Stock insuficiente para ${producto.nombre}. Disponible: ${producto.stock}, Total solicitado: ${cantidadTotal}`, "Error de Stock", {
          timeOut: 5e3,
          positionClass: "toast-top-right"
        });
      }
    });
    if (hasStockErrors) {
      return;
    }
    if (this.detalles.length === 0) {
      this.toastr.warning("Debe agregar al menos un producto", "Advertencia", {
        timeOut: 3e3,
        positionClass: "toast-top-right"
      });
      return;
    }
    this.isLoading = true;
    const formData = this.ventaForm.getRawValue();
    const createData = {
      fecha: formData.fecha,
      idCliente: parseInt(formData.idCliente),
      metodoPago: formData.metodoPago || void 0,
      observaciones: formData.observaciones || void 0,
      detalles: formData.detalles.map((d) => ({
        idProducto: parseInt(d.idProducto),
        cantidad: parseInt(d.cantidad),
        precioUnitario: parseFloat(d.precioUnitario)
      }))
    };
    this.ventaService.createVenta(createData).subscribe({
      next: () => {
        this.toastr.success("Venta creada exitosamente", "\xC9xito", {
          timeOut: 3e3,
          positionClass: "toast-top-right"
        });
        setTimeout(() => {
          this.router.navigate(["/dashboard/bussiness-dashboard/ventas/list"]);
        }, 1e3);
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
        this.toastr.error(errorMessage, "Error al crear venta", {
          timeOut: 5e3,
          positionClass: "toast-top-right"
        });
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  markFormGroupTouched() {
    Object.keys(this.ventaForm.controls).forEach((key) => {
      const control = this.ventaForm.get(key);
      control?.markAsTouched();
    });
    this.detalles.controls.forEach((detalle) => {
      Object.keys(detalle.controls).forEach((key) => {
        detalle.get(key)?.markAsTouched();
      });
    });
  }
  isFieldInvalid(fieldName) {
    const field = this.ventaForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  isDetalleFieldInvalid(index, fieldName) {
    const field = this.detalles.at(index).get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  getStockDisponible(index) {
    const detalle = this.detalles.at(index);
    const productoId = detalle.get("idProducto")?.value;
    const producto = this.productos.find((p) => p.id === productoId);
    return producto?.stock || 0;
  }
  getDetalleFieldError(index, fieldName) {
    const field = this.detalles.at(index).get(fieldName);
    if (field?.errors) {
      if (field.errors["required"])
        return `${fieldName} es requerido`;
      if (field.errors["min"])
        return `Valor m\xEDnimo: ${field.errors["min"].min}`;
      if (field.errors["max"]) {
        const productoId = this.detalles.at(index).get("idProducto")?.value;
        const producto = this.productos.find((p) => p.id === productoId);
        return `Stock disponible: ${producto?.stock || 0}`;
      }
    }
    return "";
  }
};
_AddVentaComponent.\u0275fac = function AddVentaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddVentaComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(VentaService), \u0275\u0275directiveInject(ClienteService), \u0275\u0275directiveInject(ProductoService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ToastrService));
};
_AddVentaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddVentaComponent, selectors: [["app-add-venta"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 69, vars: 22, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "card", "border", "mb-3"], [1, "card-header", "bg-light"], [1, "mb-0"], [1, "row", "g-3"], [1, "col-md-3"], [1, "form-label"], ["type", "date", "formControlName", "fecha", 1, "form-control"], [1, "invalid-feedback"], ["bindLabel", "nombre", "bindValue", "id", "formControlName", "idCliente", "placeholder", "Seleccione cliente", 3, "items"], ["ng-option-tmp", ""], [1, "invalid-feedback", "d-block"], ["formControlName", "metodoPago", "placeholder", "Seleccione m\xE9todo", 3, "items", "clearable"], ["type", "text", "readonly", "", 1, "form-control", "fw-bold", "text-success", 3, "value"], [1, "col-md-12"], ["formControlName", "observaciones", "rows", "2", 1, "form-control"], [1, "card-header", "bg-light", "d-flex", "justify-content-between", "align-items-center"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "ri-add-line"], ["formArrayName", "detalles"], [1, "row", "g-3", "mb-3", "pb-3", "border-bottom", 3, "formGroupName"], [1, "alert", "alert-info"], [1, "card", "border"], [1, "col-md-8"], [1, "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "ri-save-line"], ["type", "button", "routerLink", "../list", 1, "btn", "btn-secondary", 3, "disabled"], [1, "ri-close-line"], [1, "col-md-4", "text-end"], [1, "text-success"], [1, "text-muted"], [1, "col-md-4"], ["bindLabel", "nombre", "bindValue", "id", "formControlName", "idProducto", "placeholder", "Seleccione producto", 3, "change", "items"], [1, "col-md-2"], ["type", "number", "formControlName", "cantidad", "min", "1", 1, "form-control", 3, "ngModelChange"], ["type", "number", "formControlName", "precioUnitario", "step", "0.01", "min", "0.01", 1, "form-control", 3, "ngModelChange"], ["type", "text", "readonly", "", 1, "form-control", "fw-semibold", 3, "value"], [1, "col-md-1", "d-flex", "align-items-end"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", "w-100", 3, "click", "disabled"], [1, "ri-delete-bin-line"]], template: function AddVentaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "Nueva Venta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "form", 7);
    \u0275\u0275listener("ngSubmit", function AddVentaComponent_Template_form_ngSubmit_8_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "h6", 10);
    \u0275\u0275text(12, "Informaci\xF3n General");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 6)(14, "div", 11)(15, "div", 12)(16, "label", 13);
    \u0275\u0275text(17, "Fecha *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 14);
    \u0275\u0275template(19, AddVentaComponent_Conditional_19_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 12)(21, "label", 13);
    \u0275\u0275text(22, "Cliente *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ng-select", 16);
    \u0275\u0275template(24, AddVentaComponent_ng_template_24_Template, 3, 2, "ng-template", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, AddVentaComponent_Conditional_25_Template, 2, 0, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 12)(27, "label", 13);
    \u0275\u0275text(28, "M\xE9todo de Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "ng-select", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 12)(31, "label", 13);
    \u0275\u0275text(32, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 20);
    \u0275\u0275pipe(34, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 21)(36, "label", 13);
    \u0275\u0275text(37, "Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "textarea", 22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 8)(40, "div", 23)(41, "h6", 10);
    \u0275\u0275text(42, "Productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 24);
    \u0275\u0275listener("click", function AddVentaComponent_Template_button_click_43_listener() {
      return ctx.addDetalle();
    });
    \u0275\u0275element(44, "i", 25);
    \u0275\u0275text(45, " Agregar Producto ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 6)(47, "div", 26);
    \u0275\u0275repeaterCreate(48, AddVentaComponent_For_49_Template, 26, 17, "div", 27, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, AddVentaComponent_Conditional_50_Template, 2, 0, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 29)(52, "div", 6)(53, "div", 1)(54, "div", 30)(55, "div", 31)(56, "button", 32);
    \u0275\u0275template(57, AddVentaComponent_Conditional_57_Template, 1, 0, "span", 33);
    \u0275\u0275element(58, "i", 34);
    \u0275\u0275text(59, " Guardar Venta ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 35);
    \u0275\u0275element(61, "i", 36);
    \u0275\u0275text(62, " Cancelar ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div", 37)(64, "h4", 10);
    \u0275\u0275text(65, "Total: ");
    \u0275\u0275elementStart(66, "span", 38);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "number");
    \u0275\u0275elementEnd()()()()()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.ventaForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("fecha"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isFieldInvalid("fecha") ? 19 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("idCliente"));
    \u0275\u0275property("items", ctx.clientes);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isFieldInvalid("idCliente") ? 25 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx.metodosPago)("clearable", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", "Q" + \u0275\u0275pipeBind2(34, 16, ctx.totalVenta, "1.2-2"));
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx.detalles.controls);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.detalles.length === 0 ? 50 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 57 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Q", \u0275\u0275pipeBind2(68, 19, ctx.totalVenta, "1.2-2"), "");
  }
}, dependencies: [CommonModule, DecimalPipe, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, SharedModule], styles: ["\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.btn[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n.border-bottom[_ngcontent-%COMP%]:last-child {\n  border-bottom: none !important;\n}\n/*# sourceMappingURL=add-venta.component.css.map */"] });
var AddVentaComponent = _AddVentaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddVentaComponent, { className: "AddVentaComponent" });
})();
export {
  AddVentaComponent
};
//# sourceMappingURL=add-venta.component-TFXYLSQP.js.map
