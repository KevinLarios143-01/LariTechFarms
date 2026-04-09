import { AsyncPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, QueryList, ViewChildren } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from './employee.service';
import { EmpleadoService } from '../../../../../shared/services/empleado.service';
import { Empleado, EmpleadoResponse2 } from '../../../../../shared/interfaces/empleado';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [SharedModule, RouterModule, NgSelectModule, FormsModule, AsyncPipe, DatePipe],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  providers: [EmployeeService, DecimalPipe]
})
export class EmployeeListComponent implements OnInit {
  // @ViewChildren(SortableHeader) headers!: QueryList<SortableHeader>;
  private readonly destroyRef = inject(DestroyRef);

  employeeList$!: Observable<Empleado[]>;
  total$!: Observable<number>;
  loading$!: Observable<boolean>;
  stats$!: Observable<EmpleadoResponse2>;

  // Pagination properties
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;
  Math = Math;

  constructor(
    public empleadoService: EmployeeService,
    private readonly empleadoApiService: EmpleadoService,
    private readonly toastr: ToastrService
  ) {
    this.employeeList$ = empleadoService.employeeData$;
    this.total$ = empleadoService.total$;
    this.loading$ = empleadoService.loading$;
    this.stats$ = empleadoService.getEmployeeStats();
  }

  ngOnInit(): void {
    this.total$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(total => {
      this.totalItems = total;
      this.totalPages = Math.ceil(total / this.pageSize);
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

  private loadData(): void {
    this.empleadoService.page = this.currentPage;
    this.empleadoService.pageSize = this.pageSize;
  }


  toggleEmpleadoStatus(empleado: Empleado) {
    const isActive = empleado.activo;
    const action = isActive ? 'desactivar' : 'activar';
    
    if (confirm(`¿Está seguro de que desea ${action} este empleado?`)) {
      const serviceCall = isActive 
        ? this.empleadoApiService.deactivateEmpleado(empleado.id)
        : this.empleadoApiService.activateEmpleado(empleado.id);
        
      serviceCall.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.toastr.success(`Empleado ${action}do exitosamente`, 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          // Recargar la lista
          this.empleadoService['_search$'].next();
        },
        error: (error) => {
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
          
          this.toastr.error(`Error al ${action} el empleado: ${errorMessage}`, 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        }
      });
    }
  }

  get lists() {
    // Mantener compatibilidad con el template
    return [];
  }

    public calculateWorkTime(joinDate: string): string {
    const start = new Date(joinDate);
    const now = new Date();
    const diff = now.getTime() - start.getTime();
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    return `${years} yrs ${months} mons ${days} days`;
  }
}
