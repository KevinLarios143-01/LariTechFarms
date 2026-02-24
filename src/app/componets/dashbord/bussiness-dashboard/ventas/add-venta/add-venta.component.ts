import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { VentaService } from '../../../../../shared/services/venta.service';
import { ClienteService } from '../../../../../shared/services/cliente.service';
import { ProductoService } from '../../../../../shared/services/producto.service';
import { CreateVentaRequest } from '../../../../../shared/interfaces/venta';
import { Cliente } from '../../../../../shared/interfaces/cliente';
import { Producto } from '../../../../../shared/interfaces/producto';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-add-venta',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgSelectModule, SharedModule],
  templateUrl: './add-venta.component.html',
  styleUrls: ['./add-venta.component.scss']
})
export class AddVentaComponent implements OnInit {
  ventaForm: FormGroup;
  isLoading = false;
  clientes: Cliente[] = [];
  productos: Producto[] = [];
  totalVenta = 0;

  metodosPago = ['Efectivo', 'Transferencia', 'Tarjeta', 'Cheque'];

  constructor(
    private fb: FormBuilder,
    private ventaService: VentaService,
    private clienteService: ClienteService,
    private productoService: ProductoService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {
    this.ventaForm = this.fb.group({
      fecha: ['', Validators.required],
      idCliente: ['', Validators.required],
      metodoPago: [''],
      observaciones: [''],
      detalles: this.fb.array([this.createDetalleFormGroup()])
    });
  }

  ngOnInit() {
    console.log('AddVentaComponent ngOnInit ejecutado');
    const today = new Date().toISOString().split('T')[0];
    this.ventaForm.patchValue({ fecha: today });
    this.loadClientes();
    this.loadProductos();
  }

  createDetalleFormGroup(): FormGroup {
    return this.fb.group({
      idProducto: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(1)]],
      precioUnitario: ['', [Validators.required, Validators.min(0.01)]],
      subtotal: [{ value: 0, disabled: true }]
    });
  }

  get detalles(): FormArray {
    return this.ventaForm.get('detalles') as FormArray;
  }

  loadClientes() {
    console.log('loadClientes() ejecutado');
    // Llamar directamente al endpoint de clientes
    this.clienteService.getClientes().subscribe({
      next: (response) => {
        console.log('Respuesta completa de clientes:', response);
        // La estructura correcta es response.data (array directo)
        if (response && response.data) {
          // Verificar si response.data es un array o un objeto con data
          if (Array.isArray(response.data)) {
            this.clientes = response.data;
          } else if (response.data.data && Array.isArray(response.data.data)) {
            this.clientes = response.data.data;
          } else {
            this.clientes = [];
          }
          console.log('Clientes asignados:', this.clientes);
          console.log('Cantidad de clientes:', this.clientes.length);
          this.cdr.detectChanges();
        } else {
          console.error('Estructura de respuesta inesperada:', response);
          this.clientes = [];
        }
      },
      error: (error) => {
        console.error('Error al cargar clientes:', error);
        this.toastr.error('Error al cargar clientes', 'Error');
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
        console.error('Error al cargar productos:', error);
      }
    });
  }

  addDetalle() {
    this.detalles.push(this.createDetalleFormGroup());
  }

  removeDetalle(index: number) {
    if (this.detalles.length > 1) {
      this.detalles.removeAt(index);
      this.calculateTotal();
    } else {
      this.toastr.warning('Debe haber al menos un producto', 'Advertencia');
    }
  }

  onProductoChange(index: number) {
    const detalle = this.detalles.at(index);
    const productoId = detalle.get('idProducto')?.value;
    const producto = this.productos.find(p => p.id === productoId);
    
    if (producto) {
      detalle.get('precioUnitario')?.setValue(producto.precio);
      
      // Agregar validador de stock máximo
      const cantidadControl = detalle.get('cantidad');
      cantidadControl?.setValidators([
        Validators.required,
        Validators.min(1),
        Validators.max(producto.stock)
      ]);
      cantidadControl?.updateValueAndValidity();
      
      this.calculateSubtotal(index);
    }
  }

  onCantidadChange(index: number) {
    const detalle = this.detalles.at(index);
    const productoId = detalle.get('idProducto')?.value;
    const cantidad = detalle.get('cantidad')?.value;
    const producto = this.productos.find(p => p.id === productoId);
    
    // Validar stock disponible
    if (producto && cantidad > producto.stock) {
      this.toastr.warning(
        `Stock insuficiente para ${producto.nombre}. Disponible: ${producto.stock}`,
        'Advertencia'
      );
    }
    
    this.calculateSubtotal(index);
  }

  onPrecioChange(index: number) {
    this.calculateSubtotal(index);
  }

  calculateSubtotal(index: number) {
    const detalle = this.detalles.at(index);
    const cantidad = parseFloat(detalle.get('cantidad')?.value) || 0;
    const precio = parseFloat(detalle.get('precioUnitario')?.value) || 0;
    const subtotal = cantidad * precio;
    detalle.get('subtotal')?.setValue(subtotal);
    this.calculateTotal();
  }

  calculateTotal() {
    let total = 0;
    this.detalles.controls.forEach(detalle => {
      total += detalle.get('subtotal')?.value || 0;
    });
    this.totalVenta = total;
  }

  onSubmit() {
    // Primero marcar todos los campos como touched para mostrar errores
    this.markFormGroupTouched();

    // Verificar si hay campos requeridos sin completar (excluyendo errores de stock)
    let hasRequiredErrors = false;
    let hasStockErrors = false;

    this.detalles.controls.forEach((detalle, index) => {
      const idProducto = detalle.get('idProducto');
      const cantidad = detalle.get('cantidad');
      const precioUnitario = detalle.get('precioUnitario');

      // Verificar campos requeridos
      if (!idProducto?.value || !cantidad?.value || !precioUnitario?.value) {
        hasRequiredErrors = true;
      }
    });

    // Verificar fecha y cliente
    if (!this.ventaForm.get('fecha')?.value || !this.ventaForm.get('idCliente')?.value) {
      hasRequiredErrors = true;
    }

    if (hasRequiredErrors) {
      this.toastr.warning('Por favor complete todos los campos requeridos', 'Advertencia', {
        timeOut: 3000,
        positionClass: 'toast-top-right'
      });
      return;
    }

    // Validar stock acumulado por producto
    const productoCantidades = new Map<number, number>();
    
    this.detalles.controls.forEach((detalle) => {
      const idProducto = detalle.get('idProducto')?.value;
      const cantidad = detalle.get('cantidad')?.value;
      
      if (idProducto && cantidad) {
        const cantidadActual = productoCantidades.get(idProducto) || 0;
        productoCantidades.set(idProducto, cantidadActual + parseInt(cantidad));
      }
    });

    // Verificar stock disponible para cada producto
    productoCantidades.forEach((cantidadTotal, idProducto) => {
      const producto = this.productos.find(p => p.id === idProducto);
      if (producto && cantidadTotal > producto.stock) {
        hasStockErrors = true;
        this.toastr.error(
          `Stock insuficiente para ${producto.nombre}. Disponible: ${producto.stock}, Total solicitado: ${cantidadTotal}`,
          'Error de Stock',
          {
            timeOut: 5000,
            positionClass: 'toast-top-right'
          }
        );
      }
    });

    if (hasStockErrors) {
      return;
    }

    if (this.detalles.length === 0) {
      this.toastr.warning('Debe agregar al menos un producto', 'Advertencia', {
        timeOut: 3000,
        positionClass: 'toast-top-right'
      });
      return;
    }

    this.isLoading = true;
    const formData = this.ventaForm.getRawValue();

    const createData: CreateVentaRequest = {
      fecha: formData.fecha,
      idCliente: parseInt(formData.idCliente),
      metodoPago: formData.metodoPago || undefined,
      observaciones: formData.observaciones || undefined,
      detalles: formData.detalles.map((d: any) => ({
        idProducto: parseInt(d.idProducto),
        cantidad: parseInt(d.cantidad),
        precioUnitario: parseFloat(d.precioUnitario)
      }))
    };

    this.ventaService.createVenta(createData).subscribe({
      next: () => {
        this.toastr.success('Venta creada exitosamente', 'Éxito', {
          timeOut: 3000,
          positionClass: 'toast-top-right'
        });
        setTimeout(() => {
          this.router.navigate(['/dashboard/bussiness-dashboard/ventas/list']);
        }, 1000);
      },
      error: (error) => {
        console.error('Error response:', error);
        let errorMessage = 'Error desconocido';
        
        if (error.error?.message) {
          errorMessage = error.error.message;
        } else if (error.error?.error) {
          errorMessage = error.error.error;
        } else if (error.message) {
          errorMessage = error.message;
        } else if (typeof error.error === 'string') {
          errorMessage = error.error;
        }
        
        this.toastr.error(errorMessage, 'Error al crear venta', {
          timeOut: 5000,
          positionClass: 'toast-top-right'
        });
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  markFormGroupTouched() {
    Object.keys(this.ventaForm.controls).forEach(key => {
      const control = this.ventaForm.get(key);
      control?.markAsTouched();
    });
    this.detalles.controls.forEach(detalle => {
      Object.keys((detalle as FormGroup).controls).forEach(key => {
        detalle.get(key)?.markAsTouched();
      });
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.ventaForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  isDetalleFieldInvalid(index: number, fieldName: string): boolean {
    const field = this.detalles.at(index).get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getStockDisponible(index: number): number {
    const detalle = this.detalles.at(index);
    const productoId = detalle.get('idProducto')?.value;
    const producto = this.productos.find(p => p.id === productoId);
    return producto?.stock || 0;
  }

  getDetalleFieldError(index: number, fieldName: string): string {
    const field = this.detalles.at(index).get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return `${fieldName} es requerido`;
      if (field.errors['min']) return `Valor mínimo: ${field.errors['min'].min}`;
      if (field.errors['max']) {
        const productoId = this.detalles.at(index).get('idProducto')?.value;
        const producto = this.productos.find(p => p.id === productoId);
        return `Stock disponible: ${producto?.stock || 0}`;
      }
    }
    return '';
  }
}
