import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
// import { IngresoInventarioService } from '../../../../../shared/services/ingreso-inventario.service';
// import { UpdateInventarioDTO, UpdateStockDTO } from '../../../../../shared/interfaces/inventario';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-edit-inventario',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgSelectModule, SharedModule],
  templateUrl: './edit-inventario.component.html',
  styleUrls: ['./edit-inventario.component.scss']
})
export class EditInventarioComponent implements OnInit {
  inventarioForm: FormGroup;
  stockForm: FormGroup;
  categorias: string[] = [];
  isLoading = false;
  inventarioId: number | null = null;
  showStockModal = false;

  unidades = ['kg', 'g', 'L', 'ml', 'unidad', 'caja', 'saco', 'dosis', 'paquete'];
  operaciones = [
    { value: 'entrada', label: 'Entrada (Agregar)' },
    { value: 'salida', label: 'Salida (Restar)' },
    { value: 'ajuste', label: 'Ajuste (Establecer cantidad exacta)' }
  ];

  constructor(
    private fb: FormBuilder,
    // private inventarioService: IngresoInventarioService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {
    this.inventarioForm = this.fb.group({
      nombre: ['', Validators.required],
      cantidad: [{ value: '', disabled: true }],
      unidad: ['', Validators.required],
      categoria: [''],
      minimoStock: ['', Validators.min(0)],
      proveedor: [''],
      observaciones: ['']
    });

    this.stockForm = this.fb.group({
      operacion: ['entrada', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(0.01)]],
      observaciones: ['']
    });
  }

  ngOnInit() {
    // this.loadCategorias();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.inventarioId = parseInt(id);
      // this.loadInventario();
      this.toastr.warning('Funcionalidad pendiente de implementar', 'Aviso');
      this.router.navigate(['../list'], { relativeTo: this.route });
    } else {
      this.router.navigate(['../list'], { relativeTo: this.route });
    }
  }

  loadCategorias() {
    // TODO: Implementar servicio de inventario de granja
    // this.inventarioService.getCategorias().subscribe({
    //   next: (response: any) => {
    //     this.categorias = response.data || [];
    //     this.cdr.detectChanges();
    //   },
    //   error: (error: any) => {
    //     console.error('Error al cargar categorías:', error);
    //   }
    // });
  }

  loadInventario() {
    // TODO: Implementar servicio de inventario de granja
    // if (this.inventarioId) {
    //   this.isLoading = true;
    //   this.inventarioService.getInventarioById(this.inventarioId).subscribe({
    //     next: (response: any) => {
    //       const item = response.data;
    //       this.inventarioForm.patchValue({
    //         nombre: item.nombre,
    //         cantidad: item.cantidad,
    //         unidad: item.unidad,
    //         categoria: item.categoria || '',
    //         minimoStock: item.minimoStock || '',
    //         proveedor: item.proveedor || '',
    //         observaciones: item.observaciones || ''
    //       });
    //       this.isLoading = false;
    //       this.cdr.detectChanges();
    //     },
    //     error: (error: any) => {
    //       this.toastr.error('Error al cargar item', 'Error');
    //       this.isLoading = false;
    //       this.router.navigate(['../list'], { relativeTo: this.route });
    //     }
    //   });
    // }
  }

  onSubmit() {
    this.toastr.warning('Funcionalidad pendiente de implementar', 'Aviso');
    // if (this.inventarioForm.valid && this.inventarioId) {
    //   this.isLoading = true;
    //   const formData = this.inventarioForm.value;

    //   const updateData: UpdateInventarioDTO = {
    //     nombre: formData.nombre,
    //     unidad: formData.unidad,
    //     categoria: formData.categoria || undefined,
    //     minimoStock: formData.minimoStock ? parseFloat(formData.minimoStock) : undefined,
    //     proveedor: formData.proveedor || undefined,
    //     observaciones: formData.observaciones || undefined
    //   };

    //   this.inventarioService.updateInventario(this.inventarioId, updateData).subscribe({
    //     next: (response: any) => {
    //       this.toastr.success('Item actualizado exitosamente', 'Éxito');
    //       setTimeout(() => {
    //         this.router.navigate(['../../list'], { relativeTo: this.route });
    //       }, 1000);
    //     },
    //     error: (error: any) => {
    //       const errorMsg = error?.error?.message || 'Error al actualizar item';
    //       this.toastr.error(errorMsg, 'Error');
    //       this.isLoading = false;
    //       this.cdr.detectChanges();
    //     }
    //   });
    // } else {
    //   this.markFormGroupTouched();
    //   this.toastr.warning('Por favor complete todos los campos requeridos', 'Advertencia');
    // }
  }

  openStockModal() {
    this.showStockModal = true;
    this.stockForm.reset({ operacion: 'entrada' });
  }

  closeStockModal() {
    this.showStockModal = false;
  }

  onStockSubmit() {
    this.toastr.warning('Funcionalidad pendiente de implementar', 'Aviso');
    // if (this.stockForm.valid && this.inventarioId) {
    //   const formData = this.stockForm.value;
    //   const stockData: UpdateStockDTO = {
    //     operacion: formData.operacion,
    //     cantidad: parseFloat(formData.cantidad),
    //     observaciones: formData.observaciones || undefined
    //   };

    //   this.inventarioService.updateStock(this.inventarioId, stockData).subscribe({
    //     next: (response: any) => {
    //       this.toastr.success('Stock actualizado exitosamente', 'Éxito');
    //       this.closeStockModal();
    //       this.loadInventario();
    //     },
    //     error: (error: any) => {
    //       const errorMsg = error?.error?.message || 'Error al actualizar stock';
    //       this.toastr.error(errorMsg, 'Error');
    //     }
    //   });
    // }
  }

  markFormGroupTouched() {
    Object.keys(this.inventarioForm.controls).forEach(key => {
      const control = this.inventarioForm.get(key);
      control?.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.inventarioForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.inventarioForm.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return `${fieldName} es requerido`;
      if (field.errors['min']) return `${fieldName} debe ser mayor o igual a ${field.errors['min'].min}`;
    }
    return '';
  }
}
