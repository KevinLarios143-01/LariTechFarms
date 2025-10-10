import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProductosService } from '../services/productos.service';
import { Producto, CreateProductoDTO, UpdateProductoDTO } from '../interfaces/producto.interface';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-new-producto',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgSelectModule, NgbModule, SharedModule],
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.scss']
})
export class NewProductoComponent implements OnInit {
  productoForm: FormGroup
  categorias: string[] = []
  isLoading = false
  isEditMode = false
  productoId: number | null = null
  active = 1

  constructor(
    private fb: FormBuilder,
    private productosService: ProductosService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      tamanio: [''],
      precio: ['', [Validators.required, Validators.min(0.01)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      categoria: [''],
      activo: [true]
    })
  }

  ngOnInit() {
    this.loadCategorias()
    this.checkEditMode()
  }

  checkEditMode() {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.isEditMode = true
      this.productoId = parseInt(id)
      this.loadProducto()
    }
  }

  loadCategorias() {
    this.productosService.getCategorias().subscribe({
      next: (response) => {
        this.categorias = response.data
        this.cdr.detectChanges()
      },
      error: (error) => {
        console.error('Error al cargar categorías:', error)
      }
    })
  }

  loadProducto() {
    if (this.productoId) {
      this.isLoading = true
      this.productosService.getProductoById(this.productoId).subscribe({
        next: (response) => {
          const producto = response.data
          this.productoForm.patchValue({
            nombre: producto.nombre,
            tamanio: producto.tamanio || '',
            precio: producto.precio,
            stock: producto.stock,
            categoria: producto.categoria || '',
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
          this.router.navigate(['../list'], { relativeTo: this.route })
        }
      })
    }
  }

  onSubmit() {
    if (this.productoForm.valid) {
      this.isLoading = true
      const formData = this.productoForm.value

      if (this.isEditMode && this.productoId) {
        const updateData: UpdateProductoDTO = {
          nombre: formData.nombre,
          tamanio: formData.tamanio || undefined,
          precio: parseFloat(formData.precio),
          categoria: formData.categoria || undefined,
          activo: formData.activo
        }

        this.productosService.updateProducto(this.productoId, updateData).subscribe({
          next: (response) => {
            this.toastr.success('Producto actualizado exitosamente', 'Éxito', {
              progressBar: true,
              closeButton: true
            })
            this.router.navigate(['../list'], { relativeTo: this.route })
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
        const createData: CreateProductoDTO = {
          nombre: formData.nombre,
          tamanio: formData.tamanio || undefined,
          precio: parseFloat(formData.precio),
          stock: parseInt(formData.stock),
          categoria: formData.categoria || undefined,
          activo: formData.activo
        }

        this.productosService.createProducto(createData).subscribe({
          next: (response) => {
            this.toastr.success('Producto creado exitosamente', 'Éxito', {
              progressBar: true,
              closeButton: true
            })
            this.router.navigate(['../list'], { relativeTo: this.route })
          },
          error: (error) => {
            this.toastr.error('Error al crear producto', 'Error', {
              progressBar: true,
              closeButton: true
            })
            this.isLoading = false
            this.cdr.detectChanges()
          }
        })
      }
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
}