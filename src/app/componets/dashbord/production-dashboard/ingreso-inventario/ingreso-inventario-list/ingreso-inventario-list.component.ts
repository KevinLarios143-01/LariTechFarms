import { AsyncPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { IngresoInventarioService } from '../../../../../shared/services/ingreso-inventario.service';
import { IngresoInventario, InventarioStats } from '../../../../../shared/interfaces/inventario';

@Component({
  selector: 'app-ingreso-inventario-list',
  standalone: true,
  imports: [SharedModule, RouterModule, NgSelectModule, AsyncPipe, DatePipe, DecimalPipe],
  templateUrl: './ingreso-inventario-list.component.html',
  styleUrls: ['./ingreso-inventario-list.component.scss']
})
export class IngresoInventarioListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  ingresoList$!: Observable<IngresoInventario[]>;
  total$!: Observable<number>;
  loading$!: Observable<boolean>;
  stats$!: Observable<InventarioStats>;
  stats: InventarioStats | null = null;

  constructor(
    public ingresoService: IngresoInventarioService,
    private readonly toastr: ToastrService
  ) {
    this.ingresoList$ = ingresoService.ingresoData$;
    this.total$ = ingresoService.total$;
    this.loading$ = ingresoService.loading$;
    this.obtenerStats();
  }

  obtenerStats() {
    this.stats$ = this.ingresoService.getIngresoStats();
    this.stats$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (stats: InventarioStats) => {
        this.stats = stats;
      },
      error: (err) => console.error('Error fetching stats:', err)
    });
  }

  ngOnInit(): void {
    console.log('🔄 Componente de lista inicializado, refrescando datos...');
    this.ingresoService.refresh();
    this.obtenerStats();
  }

  eliminarIngreso(ingreso: IngresoInventario) {
    if (confirm(`¿Está seguro de que desea eliminar este ingreso de inventario?`)) {
      this.ingresoService.deleteIngreso(ingreso.id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.toastr.success('Ingreso eliminado exitosamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          // Recargar la lista
          (this.ingresoService as any)['_search$'].next();
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
