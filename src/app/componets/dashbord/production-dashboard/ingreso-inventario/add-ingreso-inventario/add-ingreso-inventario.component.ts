import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { ToastrService } from 'ngx-toastr';
import { IngresoInventarioService } from '../../../../../shared/services/ingreso-inventario.service';
import { LoteService } from '../../../../../shared/services/lote.service';
import { ProductoService } from '../../../../../shared/services/producto.service';
import { Lote } from '../../../../../shared/interfaces/lote';
import { Producto } from '../../../../../shared/interfaces/producto';

@Component({
  selector: 'app-add-ingreso-inventario',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './add-ingreso-inventario.component.html',
  styleUrls: ['./add-ingreso-inventario.component.scss']
})
export class AddIngresoInventarioComponent implements OnInit {
  ingresoForm!: FormGroup;
  isLoading = false;
  lotes: Lote[] = [];
  productos: Producto[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly ingresoService: IngresoInventarioService,
    private readonly loteService: LoteService,
    private readonly productoService: ProductoService,
    private readonly toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadLotes();
    this.loadProductos();
  }

  initForm() {
    this.ingresoForm = this.fb.group({
      idLote: ['', [Validators.required]],
      idProducto: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      cantidadCartones: ['', [Validators.required, Validators.min(1)]],
      cantidadHuevos: ['', [Validators.required, Validators.min(1)]],
      observaciones: ['']
    });

    // Calcular huevos automáticamente (30 huevos por cartón)
    this.ingresoForm.get('cantidadCartones')?.valueChanges.subscribe(cartones => {
      if (cartones && cartones > 0) {
        this.ingresoForm.patchValue({
          cantidadHuevos: cartones * 30
        }, { emitEvent: false });
      }
    });
  }

  loadLotes() {
    console.log('🔍 Cargando lotes...');
    this.loteService.getLotes().subscribe({
      next: (response) => {
        console.log('✅ Respuesta de lotes:', response);
        this.lotes = response.data.data.filter((lote: Lote) => lote.estado === 'Activo');
        console.log('✅ Lotes activos filtrados:', this.lotes);

        if (this.lotes.length === 0) {
          this.toastr.warning('No hay lotes activos. Por favor, cree lotes primero.', 'Advertencia', {
            timeOut: 5000,
            positionClass: 'toast-top-right',
          });
        }
      },
      error: (error) => {
        console.error('❌ Error al cargar lotes:', error);
        this.toastr.error('Error al cargar la lista de lotes', 'Error');
      }
    });
  }

  loadProductos() {
    console.log('🔍 Cargando productos...');
    this.productoService.getProductos().subscribe({
      next: (response: any) => {
        console.log('✅ Respuesta de productos:', response);
        const productos = response.data?.data || response.data || response;
        console.log('📦 Productos extraídos:', productos);

        // Filtrar por activo (boolean) en lugar de estado
        this.productos = Array.isArray(productos) ? productos.filter((producto: Producto) => producto.activo === true) : [];
        console.log('✅ Productos activos filtrados:', this.productos);

        if (this.productos.length === 0) {
          this.toastr.warning('No hay productos activos. Por favor, cree productos primero.', 'Advertencia', {
            timeOut: 5000,
            positionClass: 'toast-top-right',
          });
        }
      },
      error: (error: any) => {
        console.error('❌ Error al cargar productos:', error);
        this.toastr.error('Error al cargar la lista de productos', 'Error');
      }
    });
  }

  onSubmit() {
    if (this.ingresoForm.valid) {
      this.isLoading = true;

      const formData = {
        ...this.ingresoForm.value,
        idLote: parseInt(this.ingresoForm.value.idLote),
        idProducto: parseInt(this.ingresoForm.value.idProducto),
        cantidadCartones: parseInt(this.ingresoForm.value.cantidadCartones),
        cantidadHuevos: parseInt(this.ingresoForm.value.cantidadHuevos)
      };

      this.ingresoService.createIngreso(formData).subscribe({
        next: (response: any) => {
          this.toastr.success('Ingreso de inventario registrado exitosamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.router.navigate(['/dashboard/production-dashboard/ingreso-inventario/list']);
        },
        error: (error: any) => {
          console.error('Error al registrar ingreso:', error);
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

          this.toastr.error('Error al registrar ingreso: ' + errorMessage, 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.isLoading = false;
        }
      });
    } else {
      this.toastr.warning('Por favor, complete todos los campos requeridos', 'Advertencia', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
      });
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.ingresoForm.controls).forEach(key => {
      const control = this.ingresoForm.get(key);
      control?.markAsTouched();
    });
  }

  onCancel() {
    this.router.navigate(['/dashboard/production-dashboard/ingreso-inventario/list']);
  }
}
