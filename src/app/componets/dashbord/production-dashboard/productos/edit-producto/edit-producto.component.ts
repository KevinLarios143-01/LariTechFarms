import { Component, OnInit, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../interfaces/producto.interface';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-edit-producto',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgSelectModule, NgbModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './edit-producto.component.html'
})
export class EditProductoComponent implements OnInit {
  productoForm: FormGroup
  isLoading = false
  productoId: number
  categorias: string[] = []
  active = 1

  constructor(
    private fb: FormBuilder,
    private productosService: ProductosService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {
    this.productoId = parseInt(this.route.snapshot.paramMap.get('id') || '0')
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.min(0.01)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      categoria: [''],
      tamanio: [''],
      activo: [true]
    })
  }

  ngOnInit() {
    this.loadProducto()
    this.loadCategorias()
  }

  loadProducto() {
    this.isLoading = true
    this.productosService.getProductoById(this.productoId).subscribe({
      next: (response) => {
        const producto = response.data
        this.productoForm.patchValue({
          nombre: producto.nombre,
          precio: producto.precio,
          stock: producto.stock,
          categoria: producto.categoria || '',
          tamanio: producto.tamanio || '',
          activo: producto.activo
        })
        this.isLoading = false
        this.cdr.detectChanges()
      },
      error: (error) => {
        this.toastr.error('Error al cargar producto', 'Error', {
          progressBar: true,
          closeButton: true
        })
        this.isLoading = false
        this.cdr.detectChanges()
        this.router.navigate(['../list'], { relativeTo: this.route })
      }
    })
  }

  loadCategorias() {
    this.productosService.getCategorias().subscribe({
      next: (response) => {
        this.categorias = Array.isArray(response.data) ? response.data.map((item: any) => item.categoria) : []
        this.cdr.detectChanges()
      },
      error: (error) => {
        console.error('Error al cargar categorías:', error)
        this.categorias = []
      }
    })
  }

  onSubmit() {
    if (this.productoForm.valid) {
      this.isLoading = true
      const formData = this.productoForm.value
      
      const updateData = {
        nombre: formData.nombre,
        precio: parseFloat(formData.precio),
        categoria: formData.categoria || undefined,
        tamanio: formData.tamanio || undefined,
        activo: formData.activo
      }
      
      this.productosService.updateProducto(this.productoId, updateData).subscribe({
        next: (response) => {
          this.isLoading = false
          this.cdr.detectChanges()
          this.toastr.success('Producto actualizado exitosamente', 'Éxito', {
            progressBar: true,
            closeButton: true
          })
          setTimeout(() => {
            this.router.navigate(['../list'], { relativeTo: this.route })
          }, 1000)
        },
        error: (error) => {
          this.toastr.error('Error al actualizar producto', 'Error', {
            progressBar: true,
            closeButton: true
          })
          this.isLoading = false
          this.cdr.detectChanges()
        }
      })
    } else {
      this.markFormGroupTouched()
    }
  }

  markFormGroupTouched() {
    Object.keys(this.productoForm.controls).forEach(key => {
      const control = this.productoForm.get(key)
      control?.markAsTouched()
    })
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.productoForm.get(fieldName)
    return !!(field && field.invalid && (field.dirty || field.touched))
  }

  getFieldError(fieldName: string): string {
    const field = this.productoForm.get(fieldName)
    if (field?.errors) {
      if (field.errors['required']) return `${fieldName} es requerido`
      if (field.errors['min']) return `${fieldName} debe ser mayor a ${field.errors['min'].min}`
    }
    return ''
  }

  onCancel() {
    this.router.navigate(['/dashboard/production-dashboard/productos/list'])
  }
}