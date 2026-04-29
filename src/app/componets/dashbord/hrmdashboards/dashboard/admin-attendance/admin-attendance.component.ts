import { Component, OnInit, ChangeDetectorRef, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {
  AsistenciaService,
  ResumenDiarioResponse,
  ReporteResponse,
  ReporteParams,
  EstadoMarcaje
} from '../../../../../shared/services/asistencia.service';

interface EmpleadoResumen {
  id: number;
  nombre: string;
  apellido: string;
  puesto: string;
  estadoMarcaje: EstadoMarcaje;
  horaEntrada: string | null;
  horaSalida: string | null;
}

interface ReporteEmpleado {
  empleado: {
    id: number;
    nombre: string;
    apellido: string;
    puesto: string;
  };
  diasTrabajados: number;
  diasAusentes: number;
  totalHoras: number;
  promedioHorasDiarias: number;
  promedioEntrada?: string;
  promedioSalida?: string;
  porcentajeAsistencia?: number;
}

type SortDirection = 'asc' | 'desc';

@Component({
  selector: 'app-admin-attendance',
  standalone: true,
  imports: [CommonModule, FormsModule, DecimalPipe],
  templateUrl: './admin-attendance.component.html',
  styleUrl: './admin-attendance.component.scss'
})
export class AdminAttendanceComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly asistenciaService = inject(AsistenciaService);
  private readonly toastr = inject(ToastrService);

  // Loading states
  isLoadingResumen = true;
  isLoadingReporte = false;

  // Summary data
  totalEmpleados = 0;
  presentes = 0;
  enAlmuerzo = 0;
  jornadaCompleta = 0;
  sinMarcar = 0;

  // Employee list grouped by category
  empleadosPresentes: EmpleadoResumen[] = [];
  empleadosEnAlmuerzo: EmpleadoResumen[] = [];
  empleadosJornadaCompleta: EmpleadoResumen[] = [];
  empleadosSinMarcar: EmpleadoResumen[] = [];

  // Active category tab
  activeCategory: 'presentes' | 'almuerzo' | 'completa' | 'sin_marcar' = 'presentes';

  // Report filters
  reporteFechaInicio = '';
  reporteFechaFin = '';
  reporteTipo: 'semanal' | 'mensual' = 'semanal';

  // Report data
  reporteData: ReporteEmpleado[] = [];
  reporteGenerated = false;
  reporteMessage = '';

  // Report sorting
  sortColumn = '';
  sortDirection: SortDirection = 'asc';

  ngOnInit(): void {
    this.loadResumenDiario();
  }

  private loadResumenDiario(): void {
    this.isLoadingResumen = true;
    this.asistenciaService.getResumenDiario()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          if (res?.success && res.data) {
            const { resumen, empleados } = res.data;

            this.totalEmpleados = resumen.totalEmpleados;
            this.presentes = resumen.presentes;
            this.enAlmuerzo = resumen.enAlmuerzo;
            this.jornadaCompleta = resumen.jornadaCompleta;
            this.sinMarcar = resumen.sinMarcar;

            this.groupEmployees(empleados);
          }
          this.isLoadingResumen = false;
          this.cdr.detectChanges();
        },
        error: () => {
          this.toastr.error('Error al cargar el resumen de asistencia', 'Error', {
            progressBar: true,
            closeButton: true
          });
          this.isLoadingResumen = false;
          this.cdr.detectChanges();
        }
      });
  }

  private groupEmployees(empleados: EmpleadoResumen[]): void {
    this.empleadosPresentes = [];
    this.empleadosEnAlmuerzo = [];
    this.empleadosJornadaCompleta = [];
    this.empleadosSinMarcar = [];

    for (const emp of empleados) {
      switch (emp.estadoMarcaje) {
        case 'entrada_registrada':
        case 'almuerzo_fin':
          this.empleadosPresentes.push(emp);
          break;
        case 'almuerzo_inicio':
          this.empleadosEnAlmuerzo.push(emp);
          break;
        case 'salida_registrada':
          this.empleadosJornadaCompleta.push(emp);
          break;
        case 'sin_marcar':
        default:
          this.empleadosSinMarcar.push(emp);
          break;
      }
    }
  }

  getActiveEmployees(): EmpleadoResumen[] {
    switch (this.activeCategory) {
      case 'presentes': return this.empleadosPresentes;
      case 'almuerzo': return this.empleadosEnAlmuerzo;
      case 'completa': return this.empleadosJornadaCompleta;
      case 'sin_marcar': return this.empleadosSinMarcar;
      default: return [];
    }
  }

  getEstadoLabel(estado: EstadoMarcaje): string {
    const labels: Record<EstadoMarcaje, string> = {
      'sin_marcar': 'Sin Marcar',
      'entrada_registrada': 'Presente',
      'almuerzo_inicio': 'En Almuerzo',
      'almuerzo_fin': 'Presente',
      'salida_registrada': 'Jornada Completa'
    };
    return labels[estado] || estado;
  }

  getEstadoBadgeClass(estado: EstadoMarcaje): string {
    const classes: Record<EstadoMarcaje, string> = {
      'sin_marcar': 'bg-secondary-transparent',
      'entrada_registrada': 'bg-success-transparent',
      'almuerzo_inicio': 'bg-warning-transparent',
      'almuerzo_fin': 'bg-success-transparent',
      'salida_registrada': 'bg-primary-transparent'
    };
    return classes[estado] || 'bg-secondary-transparent';
  }

  formatTime(timeStr: string | null): string {
    if (!timeStr) return '--:--';
    const date = new Date(timeStr);
    if (isNaN(date.getTime())) {
      const parts = timeStr.split(':');
      if (parts.length >= 2) {
        return `${parts[0].padStart(2, '0')}:${parts[1].padStart(2, '0')}`;
      }
      return timeStr;
    }
    return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: false });
  }

  setActiveCategory(category: 'presentes' | 'almuerzo' | 'completa' | 'sin_marcar'): void {
    this.activeCategory = category;
  }

  // --- Report methods ---

  generarReporte(): void {
    if (!this.reporteFechaInicio || !this.reporteFechaFin) {
      this.toastr.warning('Debe seleccionar un rango de fechas', 'Atención', {
        progressBar: true,
        closeButton: true
      });
      return;
    }

    if (this.reporteFechaInicio > this.reporteFechaFin) {
      this.toastr.warning('La fecha de inicio debe ser anterior a la fecha de fin', 'Atención', {
        progressBar: true,
        closeButton: true
      });
      return;
    }

    this.isLoadingReporte = true;
    this.reporteGenerated = false;
    this.reporteMessage = '';

    const params: ReporteParams = {
      tipo: this.reporteTipo,
      fechaInicio: this.reporteFechaInicio,
      fechaFin: this.reporteFechaFin
    };

    this.asistenciaService.getReporte(params)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          if (res?.success) {
            this.reporteData = res.data?.empleados || [];
            this.reporteMessage = res.message || '';
            this.reporteGenerated = true;
            this.sortColumn = '';
            this.sortDirection = 'asc';
          }
          this.isLoadingReporte = false;
          this.cdr.detectChanges();
        },
        error: () => {
          this.toastr.error('Error al generar el reporte de asistencia', 'Error', {
            progressBar: true,
            closeButton: true
          });
          this.isLoadingReporte = false;
          this.cdr.detectChanges();
        }
      });
  }

  sortBy(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.reporteData = [...this.reporteData].sort((a, b) => {
      let valA: any;
      let valB: any;

      switch (column) {
        case 'nombre':
          valA = `${a.empleado.nombre} ${a.empleado.apellido}`.toLowerCase();
          valB = `${b.empleado.nombre} ${b.empleado.apellido}`.toLowerCase();
          break;
        case 'puesto':
          valA = (a.empleado.puesto || '').toLowerCase();
          valB = (b.empleado.puesto || '').toLowerCase();
          break;
        case 'diasTrabajados':
          valA = a.diasTrabajados;
          valB = b.diasTrabajados;
          break;
        case 'diasAusentes':
          valA = a.diasAusentes;
          valB = b.diasAusentes;
          break;
        case 'totalHoras':
          valA = a.totalHoras;
          valB = b.totalHoras;
          break;
        case 'promedioHorasDiarias':
          valA = a.promedioHorasDiarias;
          valB = b.promedioHorasDiarias;
          break;
        case 'porcentajeAsistencia':
          valA = a.porcentajeAsistencia ?? 0;
          valB = b.porcentajeAsistencia ?? 0;
          break;
        default:
          return 0;
      }

      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  getSortIcon(column: string): string {
    if (this.sortColumn !== column) return 'fe fe-arrow-down text-muted opacity-25';
    return this.sortDirection === 'asc' ? 'fe fe-arrow-up' : 'fe fe-arrow-down';
  }

  get ausentes(): number {
    return this.sinMarcar;
  }
}
