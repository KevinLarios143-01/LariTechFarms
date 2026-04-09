import { Component, DestroyRef, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { GastoOperacionService } from '../../../../../shared/services/gasto-operacion.service';
import { GastoOperacion } from '../../../../../shared/interfaces/gasto-operacion';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gasto-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './gasto-list.component.html',
  styleUrls: ['./gasto-list.component.scss']
})
export class GastoListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  gastos: GastoOperacion[] = [];
  isLoading = false;
  searchTerm = '';
  selectedCategoria = '';
  selectedMetodoPago = '';
  fechaInicio = '';
  fechaFin = '';

  categorias = ['Mantenimiento', 'Servicios', 'Insumos', 'Personal', 'Transporte', 'Limpieza', 'Combustible', 'Medicamentos'];
  metodosPago = ['Efectivo', 'Transferencia', 'Tarjeta', 'Cheque'];

  // Paginación
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;

  // Para usar Math en el template
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
    const params: any = {
      page: this.currentPage,
      limit: this.pageSize,
    };

    if (this.selectedCategoria) {
      params.categoria = this.selectedCategoria;
    }
    if (this.selectedMetodoPago) {
      params.metodoPago = this.selectedMetodoPago;
    }
    if (this.fechaInicio) {
      params.fechaInicio = this.fechaInicio;
    }
    if (this.fechaFin) {
      params.fechaFin = this.fechaFin;
    }

    this.gastoService.getGastos(params).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
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
    const params: any = {};
    if (this.fechaInicio) {
      params.fechaInicio = this.fechaInicio;
    }
    if (this.fechaFin) {
      params.fechaFin = this.fechaFin;
    }

    this.gastoService.getStats(params).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
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

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadGastos();
    }
  }

  onPageSizeChange(newSize: number): void {
    this.pageSize = newSize;
    this.currentPage = 1;
    this.loadGastos();
  }

  deleteGasto(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar este gasto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.gastoService.deleteGasto(id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
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
    });
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
      'Medicamentos': 'bg-purple text-white'
    };
    return classes[categoria] || 'bg-secondary';
  }
}
