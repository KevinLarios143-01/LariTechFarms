import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../interfaces/producto.interface';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-view-producto',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbModule, SharedModule],
  templateUrl: './view-producto.component.html',
  styleUrls: ['./view-producto.component.scss']
})
export class ViewProductoComponent implements OnInit {
  producto: Producto | null = null
  isLoading = false
  productoId: number
  active = 1

  constructor(
    private productosService: ProductosService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {
    this.productoId = parseInt(this.route.snapshot.paramMap.get('id') || '0')
  }

  ngOnInit() {
    this.loadProducto()
  }

  loadProducto() {
    this.isLoading = true
    this.productosService.getProductoById(this.productoId).subscribe({
      next: (response) => {
        this.producto = response.data
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

  deleteProducto() {
    if (confirm('¿Está seguro de eliminar este producto?')) {
      this.productosService.deleteProducto(this.productoId).subscribe({
        next: () => {
          this.toastr.success('Producto eliminado exitosamente', 'Éxito', {
            progressBar: true,
            closeButton: true
          })
          this.router.navigate(['../list'], { relativeTo: this.route })
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

  getStockBadgeClass(stock: number): string {
    if (stock <= 50) return 'badge bg-danger'
    if (stock <= 100) return 'badge bg-warning'
    return 'badge bg-success'
  }

  getActivoBadgeClass(activo: boolean): string {
    return activo ? 'badge bg-success' : 'badge bg-danger'
  }

  getStockPercentage(stock: number): number {
    return Math.min(stock / 200 * 100, 100)
  }
}