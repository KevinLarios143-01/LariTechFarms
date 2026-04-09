import { CommonModule, DatePipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IngresoInventarioService } from '../../../../../shared/services/ingreso-inventario.service';
import { IngresoInventario, InventarioStats } from '../../../../../shared/interfaces/inventario';

@Component({
  selector: 'app-ingreso-inventario-list',
  standalone: true,
  imports: [SharedModule, RouterModule, NgSelectModule, FormsModule, CommonModule, DatePipe],
  templateUrl: './ingreso-inventario-list.component.html',
  styleUrls: ['./ingreso-inventario-list.component.scss']
})
export class IngresoInventarioListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  ingresoList: IngresoInventario[] = [];
  isLoading = false;
  stats: InventarioStats | null = null;

  // Paginación
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;
  Math = Math;

  constructor(
    public ingresoService: IngresoInventarioService,
    private readonly toastr: ToastrService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.obtenerStats();
  }

  obtenerStats() {
    this.ingresoService.getIngresoStats().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (stats: InventarioStats) => {
        this.stats = stats;
      },
      error: (err) => console.error('Error fetching stats:', err)
    });
  }

  loadData(): void {
    this.isLoading = true;
    this.ingresoService.getIngresos({ page: this.currentPage, limit: this.pageSize })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response: any) => {
          const res = response?.data ?? response;
          this.ingresoList = res?.data || res || [];
          const pagination = res?.pagination || response?.pagination;
          this.totalItems = pagination?.total || 0;
          this.totalPages = pagination?.totalPages || Math.ceil(this.totalItems / this.pageSize);
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error al cargar ingresos:', error);
          this.toastr.error('No se pudieron cargar los ingresos', 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.isLoading = false;
          this.cdr.detectChanges();
        }
      });
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadData();
    }
  }

  onPageSizeChange(newSize: number): void {
    this.pageSize = newSize;
    this.currentPage = 1;
    this.loadData();
  }

  eliminarIngreso(ingreso: IngresoInventario) {
    if (confirm(`¿Está seguro de que desea eliminar este ingreso de inventario?`)) {
      this.ingresoService.deleteIngreso(ingreso.id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.toastr.success('Ingreso eliminado exitosamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.loadData();
          this.obtenerStats();
        },
        error: (error: any) => {
          console.error('Error response:', error);
          let errorMessage = 'Error desconocido';

          if (error.error?.message) {
            errorMessage = error.error.message;
          } else if (error.error?.error) {
            errorMessage = error.error.error;
          } else if (error.message) {
            errorMessage = error.message;
          } else if (typeof error.error === 'string') {
            errorMessage = error.error;
          }

          this.toastr.error(`Error al eliminar el ingreso: ${errorMessage}`, 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        }
      });
    }
  }
}
