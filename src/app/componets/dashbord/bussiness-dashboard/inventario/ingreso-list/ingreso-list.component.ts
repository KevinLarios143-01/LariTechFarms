import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { IngresoInventarioService } from '../../../../../shared/services/ingreso-inventario.service';
import { LoteService } from '../../../../../shared/services/lote.service';
import { ProductoService } from '../../../../../shared/services/producto.service';
import { IngresoInventario } from '../../../../../shared/interfaces/inventario';

@Component({
  selector: 'app-ingreso-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './ingreso-list.component.html',
  styleUrls: ['./ingreso-list.component.scss']
})
export class IngresoListComponent implements OnInit {
  ingresos: IngresoInventario[] = [];
  isLoading = false;
  
  // Filtros
  loteFilter: number | null = null;
  productoFilter: number | null = null;
  fechaInicio = '';
  fechaFin = '';

  // Paginación
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPages = 0;

  // Datos para filtros
  lotes: any[] = [];
  productos: any[] = [];

  // Expose Math to template
  Math = Math;

  stats = {
    totalIngresos: 0,
    totalCartones: 0,
    totalHuevos: 0
  };

  constructor(
    private inventarioService: IngresoInventarioService,
    private loteService: LoteService,
    private productoService: ProductoService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadLotes();
    this.loadProductos();
    this.loadIngresos();
    this.loadStats();
  }

  loadLotes() {
    this.loteService.getLotes({ activo: true, limit: 1000 }).subscribe({
      next: (response) => {
        this.lotes = response.data.data;
      },
      error: () => {
        this.toastr.error('Error al cargar lotes', 'Error');
      }
    });
  }

  loadProductos() {
    this.productoService.getProductos().subscribe({
      next: (productos) => {
        this.productos = productos;
      },
      error: () => {
        this.toastr.error('Error al cargar productos', 'Error');
      }
    });
  }

  loadIngresos() {
    this.isLoading = true;
    const params: any = {
      page: this.currentPage,
      limit: this.itemsPerPage
    };

    if (this.loteFilter) params.idLote = this.loteFilter;
    if (this.productoFilter) params.idProducto = this.productoFilter;
    if (this.fechaInicio) params.fechaInicio = this.fechaInicio;
    if (this.fechaFin) params.fechaFin = this.fechaFin;

    this.inventarioService.getIngresos(params).subscribe({
      next: (response) => {
        this.ingresos = response.data;
        this.totalItems = response.pagination.total;
        this.totalPages = response.pagination.totalPages;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.toastr.error('Error al cargar ingresos', 'Error');
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  loadStats() {
    const params: any = {};
    if (this.fechaInicio) params.fechaInicio = this.fechaInicio;
    if (this.fechaFin) params.fechaFin = this.fechaFin;

    this.inventarioService.getEstadisticas(params).subscribe({
      next: (response) => {
        if (response?.data) {
          this.stats = {
            totalIngresos: response.data.totalIngresos,
            totalCartones: response.data.totalCartones,
            totalHuevos: response.data.totalHuevos
          };
        }
        this.cdr.detectChanges();
      },
      error: () => {
        console.error('Error al cargar estadísticas');
      }
    });
  }

  applyFilters() {
    this.currentPage = 1;
    this.loadIngresos();
    this.loadStats();
  }

  clearFilters() {
    this.loteFilter = null;
    this.productoFilter = null;
    this.fechaInicio = '';
    this.fechaFin = '';
    this.currentPage = 1;
    this.loadIngresos();
    this.loadStats();
  }

  deleteIngreso(ingreso: IngresoInventario) {
    if (confirm(`¿Está seguro de eliminar este ingreso? Se ajustará el stock automáticamente.`)) {
      this.inventarioService.deleteIngreso(ingreso.id).subscribe({
        next: () => {
          this.toastr.success('Ingreso eliminado exitosamente', 'Éxito');
          this.loadIngresos();
          this.loadStats();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || 'Error al eliminar ingreso';
          this.toastr.error(errorMsg, 'Error');
        }
      });
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadIngresos();
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
