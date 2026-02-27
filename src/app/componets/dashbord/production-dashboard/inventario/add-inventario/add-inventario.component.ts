import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
// import { IngresoInventarioService } from '../../../../../shared/services/ingreso-inventario.service';
// import { CreateInventarioDTO } from '../../../../../shared/interfaces/inventario';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-add-inventario',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgSelectModule, SharedModule],
  templateUrl: './add-inventario.component.html',
  styleUrls: ['./add-inventario.component.scss']
})
export class AddInventarioComponent implements OnInit {
  inventarioForm: FormGroup;
  categorias: string[] = [];
  isLoading = false;

  unidades = ['kg', 'g', 'L', 'ml', 'unidad', 'caja', 'saco', 'dosis', 'paquete'];

  constructor(
    private fb: FormBuilder,
    // private inventarioService: IngresoInventarioService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {
    this.inventarioForm = this.fb.group({
      nombre: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(0)]],
      unidad: ['', Validators.required],
      categoria: [''],
      minimoStock: ['', Validators.min(0)],
      proveedor: [''],
      observaciones: ['']
    });
  }

  ngOnInit() {
    this.loadCategorias();
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

  onSubmit() {
    if (this.inventarioForm.valid) {
      this.isLoading = true;
      // TODO: Implementar servicio de inventario de granja
      this.toastr.warning('Funcionalidad pendiente de implementar', 'Aviso');
      this.isLoading = false;
      
      // const formData = this.inventarioForm.value;
      // const createData: CreateInventarioDTO = {
      //   nombre: formData.nombre,
      //   cantidad: parseFloat(formData.cantidad),
      //   unidad: formData.unidad,
      //   categoria: formData.categoria || undefined,
      //   minimoStock: formData.minimoStock ? parseFloat(formData.minimoStock) : undefined,
      //   proveedor: formData.proveedor || undefined,
      //   observaciones: formData.observaciones || undefined
      // };
      // this.inventarioService.createInventario(createData).subscribe({
      //   next: (response: any) => {
      //     this.toastr.success('Item agregado al inventario exitosamente', 'Éxito');
      //     setTimeout(() => {
      //       this.router.navigate(['/dashboard/production-dashboard/inventario/list']);
      //     }, 1000);
      //   },
      //   error: (error: any) => {
      //     const errorMsg = error?.error?.message || 'Error al agregar item';
      //     this.toastr.error(errorMsg, 'Error');
      //     this.isLoading = false;
      //   }
      // });
    }
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
