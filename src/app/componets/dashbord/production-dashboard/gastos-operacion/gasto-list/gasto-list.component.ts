import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { GastoOperacionService } from '../../../../../shared/services/gasto-operacion.service';
import { GastoOperacion } from '../../../../../shared/interfaces/gasto-operacion';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-gasto-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './gasto-list.component.html',
  styleUrls: ['./gasto-list.component.scss']
})
export class GastoListComponent implements OnInit {
  gastos: GastoOperacion[] = [];
  isLoading = false;
  searchTerm = '';
  selectedCategoria = '';
  selectedMetodoPago = '';
  fechaInicio = '';
  fechaFin = '';

  categorias = ['Mantenimiento', 'Servicios', 'Insumos', 'Personal', 'Transporte', 'Limpieza', 'Combustible', 'Medicamentos'];
  metodosPago = ['Efectivo', 'Transferencia', 'Tarjeta', 'Cheque'];

  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPages = 0;

  // Expose Math to template
  Math = Math;

  stats = {
    totalGastos: 0,
    totalRegistros: 0,
    promedioGasto: 0
  };

  constructor(
    private gastoService: GastoOperacionService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadGastos();
    this.loadStats();
  }

  loadGastos() {
    this.isLoading = true;
    const params = {
      page: this.currentPage,
      limit: this.itemsPerPage,
      categoria: this.selectedCategoria || undefined,
      metodoPago: this.selectedMetodoPago || undefined,
      fechaInicio: this.fechaInicio || undefined,
      fechaFin: this.fechaFin || undefined
    };

    this.gastoService.getGastos(params).subscribe({
      next: (response) => {
        if (response?.data?.items) {
          this.gastos = response.data.items;
          this.totalItems = response.data.pagination.total;
          this.totalPages = response.data.pagination.totalPages;
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error('Error al cargar gastos', 'Error');
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  loadStats() {
    const params = {
      fechaInicio: this.fechaInicio || undefined,
      fechaFin: this.fechaFin || undefined
    };

    this.gastoService.getStats(params).subscribe({
      next: (response) => {
        if (response?.data) {
          this.stats = {
            totalGastos: response.data.totalGastos,
            totalRegistros: response.data.totalRegistros,
            promedioGasto: response.data.promedioGasto
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
    this.loadGastos();
    this.loadStats();
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedCategoria = '';
    this.selectedMetodoPago = '';
    this.fechaInicio = '';
    this.fechaFin = '';
    this.currentPage = 1;
    this.loadGastos();
    this.loadStats();
  }

  deleteGasto(id: number) {
    if (confirm('¿Está seguro de eliminar este gasto?')) {
      this.gastoService.deleteGasto(id).subscribe({
        next: () => {
          this.toastr.success('Gasto eliminado exitosamente', 'Éxito');
          this.loadGastos();
          this.loadStats();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || 'Error al eliminar gasto';
          this.toastr.error(errorMsg, 'Error');
        }
      });
    }
  }

  getCategoriaBadgeClass(categoria: string): string {
    const classes: { [key: string]: string } = {
      'Mantenimiento': 'bg-warning',
      'Servicios': 'bg-info',
      'Insumos': 'bg-primary',
      'Personal': 'bg-success',
      'Transporte': 'bg-secondary',
      'Limpieza': 'bg-light text-dark',
      'Combustible': 'bg-danger',
      'Medicamentos': 'bg-purple'
    };
    return classes[categoria] || 'bg-secondary';
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadGastos();
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
