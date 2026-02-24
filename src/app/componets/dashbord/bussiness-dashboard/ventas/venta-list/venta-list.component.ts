import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { VentaService } from '../../../../../shared/services/venta.service';
import { Venta } from '../../../../../shared/interfaces/venta';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-venta-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './venta-list.component.html',
  styleUrls: ['./venta-list.component.scss']
})
export class VentaListComponent implements OnInit {
  ventas: Venta[] = [];
  isLoading = false;
  estadoFilter = '';
  fechaDesde = '';
  fechaHasta = '';

  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPages = 0;

  estados = ['Completada', 'Pendiente', 'Cancelada'];

  // Expose Math to template
  Math = Math;

  stats = {
    totalVentas: 0,
    ventasCompletadas: 0,
    ventasPendientes: 0,
    montoTotal: 0
  };

  constructor(
    private ventaService: VentaService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadVentas();
    this.loadStats();
  }

  loadVentas() {
    this.isLoading = true;
    const params = {
      page: this.currentPage,
      limit: this.itemsPerPage,
      estado: this.estadoFilter || undefined,
      fechaDesde: this.fechaDesde || undefined,
      fechaHasta: this.fechaHasta || undefined
    };

    this.ventaService.getVentas(params).subscribe({
      next: (response) => {
        if (response?.data?.data) {
          this.ventas = response.data.data;
          this.totalItems = response.data.pagination.total;
          this.totalPages = response.data.pagination.totalPages;
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error('Error al cargar ventas', 'Error');
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  loadStats() {
    const params = {
      fechaDesde: this.fechaDesde || undefined,
      fechaHasta: this.fechaHasta || undefined
    };

    this.ventaService.getVentasEstadisticas(params).subscribe({
      next: (response) => {
        console.log('Respuesta de estadísticas:', response);
        if (response?.data) {
          console.log('response.data:', response.data);
          this.stats = {
            totalVentas: response.data.totalVentas || 0,
            ventasCompletadas: response.data.ventasCompletadas || 0,
            ventasPendientes: response.data.ventasPendientes || 0,
            montoTotal: response.data.montoTotal || 0
          };
          console.log('Stats asignados:', this.stats);
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
    this.loadVentas();
    this.loadStats();
  }

  clearFilters() {
    this.estadoFilter = '';
    this.fechaDesde = '';
    this.fechaHasta = '';
    this.currentPage = 1;
    this.loadVentas();
    this.loadStats();
  }

  anularVenta(venta: Venta) {
    if (venta.estado === 'Cancelada') {
      this.toastr.warning('Esta venta ya está cancelada', 'Advertencia');
      return;
    }

    const motivo = prompt('Ingrese el motivo de anulación de la venta (opcional):');
    
    if (motivo === null) {
      return; // Usuario canceló
    }

    if (confirm('¿Está seguro de anular esta venta? Esta acción restaurará el stock de los productos.')) {
      const payload = motivo && motivo.trim() ? { motivoAnulacion: motivo.trim() } : {};
      
      this.ventaService.anularVenta(venta.id, payload).subscribe({
        next: () => {
          this.toastr.success('Venta anulada exitosamente', 'Éxito');
          this.loadVentas();
          this.loadStats();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || 'Error al anular venta';
          this.toastr.error(errorMsg, 'Error');
        }
      });
    }
  }

  getEstadoBadgeClass(estado: string): string {
    const classes: { [key: string]: string } = {
      'Completada': 'bg-success',
      'Pendiente': 'bg-warning',
      'Cancelada': 'bg-danger'
    };
    return classes[estado] || 'bg-secondary';
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadVentas();
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
