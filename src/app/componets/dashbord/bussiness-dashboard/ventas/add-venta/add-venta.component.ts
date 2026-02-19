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
      idCliente: [''],
      metodoPago: [''],
      observaciones: [''],
      detalles: this.fb.array([this.createDetalleFormGroup()])
    });
  }

  ngOnInit() {
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
    this.clienteService.clienteData$.subscribe({
      next: (clientes) => {
        this.clientes = clientes.filter(c => c.activo);
        this.cdr.detectChanges();
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
      this.calculateSubtotal(index);
    }
  }

  onCantidadChange(index: number) {
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
    if (this.ventaForm.valid) {
      this.isLoading = true;
      const formData = this.ventaForm.getRawValue();

      const createData: CreateVentaRequest = {
        fecha: formData.fecha,
        idCliente: formData.idCliente || undefined,
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
          this.toastr.success('Venta creada exitosamente', 'Éxito');
          setTimeout(() => {
            this.router.navigate(['/dashboard/bussiness-dashboard/ventas/list']);
          }, 1000);
        },
        error: (error) => {
          const errorMsg = error?.error?.message || 'Error al crear venta';
          this.toastr.error(errorMsg, 'Error');
          this.isLoading = false;
          this.cdr.detectChanges();
        }
      });
    } else {
      this.markFormGroupTouched();
      this.toastr.warning('Por favor complete todos los campos requeridos', 'Advertencia');
    }
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
}
