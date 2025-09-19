import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { CommonModule } from '@angular/common';
import { EmpleadoService } from '../../../../../shared/services/empleado.service';
import { Empleado } from '../../../../../shared/interfaces/empleado';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ver-empleado',
  standalone: true,
  imports: [NgbModule, NgCircleProgressModule, SharedModule, CommonModule],
  templateUrl: './ver-empleado.component.html',
  styleUrls: ['./ver-empleado.component.scss']
})
export class VerEmpleadoComponent implements OnInit {
  empleado: Empleado | null = null;
  loading = true;
  active = 1;
  currentRate = 4;

  constructor(
    private route: ActivatedRoute,
    private empleadoService: EmpleadoService,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef,
    config: NgbRatingConfig
  ) {
    config.max = 5;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadEmpleado(+id);
    }
  }

  loadEmpleado(id: number): void {
    this.empleadoService.getEmpleadoById(id).subscribe({
      next: (response) => {
        this.empleado = response.data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading empleado:', error);
        this.toastr.error('Error al cargar la información del empleado');
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  toggleEmpleadoStatus(): void {
    if (!this.empleado) return;

    const isActive = this.empleado.activo;
    const action = isActive ? 'deactivateEmpleado' : 'activateEmpleado';
    const actionText = isActive ? 'desactivar' : 'activar';
    
    if (confirm(`¿Está seguro de que desea ${actionText} este empleado?`)) {
      this.empleadoService[action](this.empleado.id).subscribe({
        next: (response) => {
          this.empleado = response.data;
          const message = this.empleado.activo ? 'Empleado activado exitosamente' : 'Empleado desactivado exitosamente';
          this.toastr.success(message, 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right'
          });
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error toggling empleado status:', error);
          let errorMessage = 'Error desconocido';
          
          if (error.error?.message) {
            errorMessage = error.error.message;
          } else if (error.error?.error) {
            errorMessage = error.error.error;
          } else if (error.message) {
            errorMessage = error.message;
          }
          
          this.toastr.error(`Error al ${actionText} el empleado: ${errorMessage}`, 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right'
          });
        }
      });
    }
  }

  getYearsWorked(): number {
    if (!this.empleado?.fechaContratacion) return 0;
    const startDate = new Date(this.empleado.fechaContratacion);
    const currentDate = new Date();
    return Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365));
  }

  getFormattedSalary(): string {
    if (!this.empleado?.salario) return '0';
    return new Intl.NumberFormat('es-GT', {
      style: 'currency',
      currency: 'GTQ'
    }).format(parseFloat(this.empleado.salario));
  }
}