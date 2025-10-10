import { Component, OnInit, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../interfaces/producto.interface';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-edit-producto',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgSelectModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './edit-producto.component.html'
})
export class EditProductoComponent implements OnInit {
  productoForm: FormGroup
  isLoading = false
  productoId: number
  categorias: string[] = []

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
      precio: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      categoria: [''],
      tamanio: [''],
      descripcion: [''],
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
          categoria: producto.categoria,
          tamanio: producto.tamanio,
          descripcion: producto.descripcion,
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

  onSubmit() {
    if (this.productoForm.valid) {
      this.isLoading = true
      const productoData = this.productoForm.value
      
      this.productosService.updateProducto(this.productoId, productoData).subscribe({
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
    }
  }

  onCancel() {
    this.router.navigate(['../list'], { relativeTo: this.route })
  }
}