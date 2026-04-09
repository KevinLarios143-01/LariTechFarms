import { Component, DestroyRef, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { VehiculoService } from '../../../../../shared/services/vehiculo.service';
import { Vehiculo } from '../../../../../shared/interfaces/vehiculo';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-vehiculo-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.scss']
})
export class VehiculoListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  vehiculos: Vehiculo[] = [];
  tipos: string[] = [];
  isLoading = false;
  searchTerm = '';
  selectedTipo = '';
  selectedEstado = '';

  estados = [
    { value: 'Activo', label: 'Activo' },
    { value: 'Inactivo', label: 'Inactivo' },
    { value: 'Mantenimiento', label: 'Mantenimiento' },
    { value: 'Vendido', label: 'Vendido' }
  ];

  // Paginación
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;

  // Para usar Math en el template
  Math = Math;

  // Estadísticas
  stats = {
    totalVehiculos: 0,
    vehiculosPorEstado: [] as any[],
    vehiculosPorTipo: [] as any[],
    capacidadTotal: 0,
    capacidadPromedio: 0,
    promedioAntiguedad: 0
  };

  constructor(
    private vehiculoService: VehiculoService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadVehiculos();
    this.loadTipos();
    this.loadStats();
  }

  loadVehiculos() {
    this.isLoading = true;
    const params = {
      page: this.currentPage,
      limit: this.pageSize,
      search: this.searchTerm || undefined,
      tipo: this.selectedTipo || undefined,
      estado: this.selectedEstado || undefined
    };

    this.vehiculoService.getVehiculos(params).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        if (response?.data?.items) {
          this.vehiculos = response.data.items;
          this.totalItems = response.data.pagination.total;
          this.totalPages = response.data.pagination.totalPages;
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error('Error al cargar vehículos', 'Error');
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  loadTipos() {
    this.vehiculoService.getTipos().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        this.tipos = response.data || [];
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar tipos:', error);
      }
    });
  }

  loadStats() {
    this.vehiculoService.getStats().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        if (response?.data) {
          this.stats = {
            totalVehiculos: response.data.totalVehiculos,
            vehiculosPorEstado: response.data.vehiculosPorEstado || [],
            vehiculosPorTipo: response.data.vehiculosPorTipo || [],
            capacidadTotal: response.data.capacidadTotal,
            capacidadPromedio: response.data.capacidadPromedio,
            promedioAntiguedad: response.data.promedioAntiguedad
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
    this.loadVehiculos();
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedTipo = '';
    this.selectedEstado = '';
    this.currentPage = 1;
    this.loadVehiculos();
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadVehiculos();
    }
  }

  onPageSizeChange(newSize: number): void {
    this.pageSize = newSize;
    this.currentPage = 1;
    this.loadVehiculos();
  }

  deleteVehiculo(id: number) {
    if (confirm('¿Está seguro de eliminar este vehículo?')) {
      this.vehiculoService.deleteVehiculo(id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.toastr.success('Vehículo eliminado exitosamente', 'Éxito');
          this.loadVehiculos();
          this.loadStats();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || 'Error al eliminar vehículo';
          this.toastr.error(errorMsg, 'Error');
        }
      });
    }
  }

  getEstadoBadgeClass(estado: string): string {
    const classes: { [key: string]: string } = {
      'Activo': 'bg-success',
      'Inactivo': 'bg-secondary',
      'Mantenimiento': 'bg-warning',
      'Vendido': 'bg-danger'
    };
    return classes[estado] || 'bg-secondary';
  }

  getEstadoIcon(estado: string): string {
    const icons: { [key: string]: string } = {
      'Activo': 'ri-checkbox-circle-line',
      'Inactivo': 'ri-close-circle-line',
      'Mantenimiento': 'ri-tools-line',
      'Vendido': 'ri-shopping-cart-line'
    };
    return icons[estado] || 'ri-question-line';
  }

  getVehiculosPorEstado(estado: string): number {
    const item = this.stats.vehiculosPorEstado.find(v => v.estado === estado);
    return item?.cantidad || 0;
  }
}
