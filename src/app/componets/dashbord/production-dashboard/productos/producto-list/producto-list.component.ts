import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../interfaces/producto.interface';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent implements OnInit {
  productos: Producto[] = []
  filteredProductos: Producto[] = []
  categorias: string[] = []
  isLoading = false
  searchTerm = ''
  selectedCategoria = ''
  selectedActivo = ''
  estados = [
    { value: 'true', label: 'Activo' },
    { value: 'false', label: 'Inactivo' }
  ]

  constructor(
    private productosService: ProductosService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadProductos()
    this.loadCategorias()
  }

  loadProductos() {
    this.isLoading = true
    this.productosService.getProductos().subscribe({
      next: (response) => {
        // Manejo robusto de diferentes estructuras de respuesta
        if (response?.data?.data && Array.isArray(response.data.data)) {
          this.productos = response.data.data
        } else if (response?.data?.items && Array.isArray(response.data.items)) {
          this.productos = response.data.items
        } else if (response?.data && Array.isArray(response.data)) {
          this.productos = response.data
        } else if (Array.isArray(response)) {
          this.productos = response
        } else {
          this.productos = []
        }
        this.filteredProductos = [...this.productos]
        this.isLoading = false
        this.cdr.detectChanges()
      },
      error: (error) => {
        this.productos = []
        this.filteredProductos = []
        this.toastr.error('Error al cargar productos', 'Error', {
          progressBar: true,
          closeButton: true
        })
        this.isLoading = false
        this.cdr.detectChanges()
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
        this.categorias = []
        console.error('Error al cargar categorías:', error)
      }
    })
  }

  applyFilters() {
    this.filteredProductos = this.productos.filter(producto => {
      const matchesSearch = !this.searchTerm || 
        producto.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        producto.categoria?.toLowerCase().includes(this.searchTerm.toLowerCase())
      
      const matchesCategoria = !this.selectedCategoria || producto.categoria === this.selectedCategoria
      const matchesActivo = !this.selectedActivo || producto.activo.toString() === this.selectedActivo
      
      return matchesSearch && matchesCategoria && matchesActivo
    })
    this.cdr.detectChanges()
  }

  deleteProducto(id: number) {
    if (confirm('¿Está seguro de eliminar este producto?')) {
      this.productosService.deleteProducto(id).subscribe({
        next: () => {
          this.toastr.success('Producto eliminado exitosamente', 'Éxito', {
            progressBar: true,
            closeButton: true
          })
          setTimeout(() => {
            this.loadProductos()
          }, 1000)
        },
        error: () => {
          this.toastr.error('Error al eliminar producto', 'Error', {
            progressBar: true,
            closeButton: true
          })
        }
      })
    }
  }

  getStockClass(stock: number): string {
    if (stock <= 50) return 'text-danger'
    if (stock <= 100) return 'text-warning'
    return 'text-success'
  }

  getActivoClass(activo: boolean): string {
    return activo ? 'text-success' : 'text-danger'
  }

  clearFilters() {
    this.searchTerm = ''
    this.selectedCategoria = ''
    this.selectedActivo = ''
    this.filteredProductos = [...this.productos]
    this.cdr.detectChanges()
  }

  getProductosActivos(): number {
    return this.productos.filter(p => p.activo).length
  }

  getStockBajo(): number {
    return this.productos.filter(p => p.stock <= 50).length
  }

  getValorTotal(): string {
    const total = this.productos.reduce((sum, p) => sum + ((+p.precio) * p.stock), 0)
    return total.toFixed(2)
  }

  getStockBadgeClass(stock: number): string {
    if (stock <= 50) return 'bg-danger'
    if (stock <= 100) return 'bg-warning'
    return 'bg-success'
  }

  getStockBadgeColor(stock: number): string {
    if (stock <= 50) return 'danger'
    if (stock <= 100) return 'warning'
    return 'success'
  }
}