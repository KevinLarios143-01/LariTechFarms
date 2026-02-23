import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { InventarioService } from '../../../../../shared/services/inventario.service';
import { InventarioGranja } from '../../../../../shared/interfaces/inventario';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-inventario-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './inventario-list.component.html',
  styleUrls: ['./inventario-list.component.scss']
})
export class InventarioListComponent implements OnInit {
  inventario: InventarioGranja[] = [];
  filteredInventario: InventarioGranja[] = [];
  categorias: string[] = [];
  isLoading = false;
  searchTerm = '';
  selectedCategoria = '';
  stockBajo = false;

  // Paginación
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPages = 0;

  // Expose Math to template
  Math = Math;

  // Estadísticas
  stats = {
    totalItems: 0,
    itemsStockBajo: 0,
    valorTotal: 0
  };

  constructor(
    private inventarioService: InventarioService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadInventario();
    this.loadCategorias();
    this.loadStats();
  }

  loadInventario() {
    this.isLoading = true;
    const params = {
      page: this.currentPage,
      limit: this.itemsPerPage,
      search: this.searchTerm || undefined,
      categoria: this.selectedCategoria || undefined,
      stockBajo: this.stockBajo || undefined
    };

    this.inventarioService.getInventario(params).subscribe({
      next: (response) => {
        if (response?.data?.items) {
          this.inventario = response.data.items;
          this.filteredInventario = [...this.inventario];
          this.totalItems = response.data.pagination.total;
          this.totalPages = response.data.pagination.totalPages;
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error('Error al cargar inventario', 'Error');
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  loadCategorias() {
    this.inventarioService.getCategorias().subscribe({
      next: (response) => {
        this.categorias = response.data || [];
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar categorías:', error);
      }
    });
  }

  loadStats() {
    this.inventarioService.getStats().subscribe({
      next: (response) => {
        if (response?.data) {
          this.stats = {
            totalItems: response.data.totalItems,
            itemsStockBajo: response.data.itemsStockBajo,
            valorTotal: response.data.valorTotalInventario
          };
        }
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar estadísticas:', error);
      }
    });
  }

  applyFilters() {
    this.currentPage = 1;
    this.loadInventario();
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedCategoria = '';
    this.stockBajo = false;
    this.currentPage = 1;
    this.loadInventario();
  }

  deleteItem(id: number) {
    if (confirm('¿Está seguro de eliminar este item del inventario?')) {
      this.inventarioService.deleteInventario(id).subscribe({
        next: () => {
          this.toastr.success('Item eliminado exitosamente', 'Éxito');
          this.loadInventario();
          this.loadStats();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || 'Error al eliminar item';
          this.toastr.error(errorMsg, 'Error');
        }
      });
    }
  }

  getStockClass(item: InventarioGranja): string {
    if (item.minimoStock && item.cantidad <= item.minimoStock) {
      return 'text-danger';
    }
    if (item.minimoStock && item.cantidad <= item.minimoStock * 1.5) {
      return 'text-warning';
    }
    return 'text-success';
  }

  getStockBadgeClass(item: InventarioGranja): string {
    if (item.minimoStock && item.cantidad <= item.minimoStock) {
      return 'bg-danger';
    }
    if (item.minimoStock && item.cantidad <= item.minimoStock * 1.5) {
      return 'bg-warning';
    }
    return 'bg-success';
  }

  getStockStatus(item: InventarioGranja): string {
    if (item.minimoStock && item.cantidad <= item.minimoStock) {
      return 'Crítico';
    }
    if (item.minimoStock && item.cantidad <= item.minimoStock * 1.5) {
      return 'Bajo';
    }
    return 'Normal';
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadInventario();
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
