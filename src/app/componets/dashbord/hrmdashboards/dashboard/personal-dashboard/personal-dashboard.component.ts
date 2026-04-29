import { Component, OnInit, ChangeDetectorRef, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AsistenciaService, DashboardPersonalResponse, EstadoMarcaje, HistorialRecord } from '../../../../../shared/services/asistencia.service';
import { AttendanceTimelineComponent } from './attendance-timeline/attendance-timeline.component';

@Component({
  selector: 'app-personal-dashboard',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule, AttendanceTimelineComponent],
  templateUrl: './personal-dashboard.component.html',
  styleUrl: './personal-dashboard.component.scss'
})
export class PersonalDashboardComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly asistenciaService = inject(AsistenciaService);
  private readonly toastr = inject(ToastrService);

  isLoading = true;
  hasEmployee = true;
  errorMessage = '';

  // Employee data
  empleadoNombre = '';
  empleadoApellido = '';
  empleadoTelefono = '';
  empleadoCorreo = '';
  empleadoGenero = '';
  empleadoFechaContratacion = '';
  empleadoPuesto = '';

  // Position detail
  puestoNombre = '';
  puestoDescripcion: string | null = null;

  // User data
  usuarioRol = '';
  usuarioNombre = '';
  usuarioApellido = '';

  // Seniority
  seniorityYears = 0;
  seniorityMonths = 0;

  // Attendance state
  estadoMarcaje: EstadoMarcaje = 'sin_marcar';
  asistenciaHoy: DashboardPersonalResponse['data']['asistenciaHoy'] = null;

  // Marking state
  isMarking = false;

  // Current date/time
  currentDate = '';
  currentTime = '';

  // History data
  historialRecords: HistorialRecord[] = [];
  historialPage = 1;
  historialTotalPages = 1;
  historialTotal = 0;
  historialLoading = false;
  readonly historialLimit = 15;

  // Date filter
  filtroFechaInicio = '';
  filtroFechaFin = '';

  // Monthly summary
  resumenDiasTrabajados = 0;
  resumenPromedioHoras = '';
  resumenTotalHoras = '';

  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000);
    this.loadDashboardPersonal();
  }

  private updateDateTime(): void {
    const now = new Date();
    this.currentDate = now.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
    this.currentTime = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: true });
  }

  private loadDashboardPersonal(): void {
    this.isLoading = true;
    this.asistenciaService.getDashboardPersonal()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          if (res?.success && res.data) {
            this.hasEmployee = true;
            const { empleado, asistenciaHoy, usuario } = res.data;

            // Employee data
            this.empleadoNombre = empleado.nombre;
            this.empleadoApellido = empleado.apellido;
            this.empleadoTelefono = empleado.telefono || 'No registrado';
            this.empleadoCorreo = empleado.correo || 'No registrado';
            this.empleadoGenero = empleado.genero || '';
            this.empleadoFechaContratacion = empleado.fechaContratacion;
            this.empleadoPuesto = empleado.puesto || 'Sin asignar';

            // Position detail
            if (empleado.puestoDetalle) {
              this.puestoNombre = empleado.puestoDetalle.nombre;
              this.puestoDescripcion = empleado.puestoDetalle.descripcion;
            }

            // User data
            this.usuarioRol = usuario.rol;
            this.usuarioNombre = usuario.nombre;
            this.usuarioApellido = usuario.apellido;

            // Attendance
            this.asistenciaHoy = asistenciaHoy;
            this.estadoMarcaje = asistenciaHoy?.estadoMarcaje || 'sin_marcar';

            // Calculate seniority
            this.calculateSeniority(empleado.fechaContratacion);

            // Load attendance history
            this.loadHistorial();
          }
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          if (err.status === 404) {
            this.hasEmployee = false;
            this.errorMessage = 'Tu perfil de empleado no está configurado. Contacta al administrador.';
          } else {
            this.toastr.error('Error al cargar el dashboard personal', 'Error', {
              progressBar: true,
              closeButton: true
            });
          }
          this.isLoading = false;
          this.cdr.detectChanges();
        }
      });
  }

  calculateSeniority(fechaContratacion: string): void {
    const hireDate = new Date(fechaContratacion);
    const now = new Date();

    let years = now.getFullYear() - hireDate.getFullYear();
    let months = now.getMonth() - hireDate.getMonth();

    if (now.getDate() < hireDate.getDate()) {
      months--;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    this.seniorityYears = years;
    this.seniorityMonths = months;
  }

  getFullName(): string {
    return `${this.empleadoNombre} ${this.empleadoApellido}`;
  }

  getRolLabel(): string {
    const roles: Record<string, string> = {
      'superadmin': 'Super Administrador',
      'admin': 'Administrador',
      'gerente': 'Gerente',
      'supervisor': 'Supervisor',
      'vendedor': 'Vendedor',
      'operador': 'Operador'
    };
    return roles[this.usuarioRol] || this.usuarioRol;
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' });
  }

  // --- Marking methods ---

  marcarEntrada(): void {
    if (this.isMarking || this.estadoMarcaje !== 'sin_marcar') return;
    this.isMarking = true;
    this.asistenciaService.marcarEntrada()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          if (res?.success && res.data) {
            this.updateAttendanceState(res.data);
            const hora = this.formatTimeFromISO(res.data.horaEntrada);
            this.toastr.success(`Entrada registrada a las ${hora}`, 'Éxito', {
              progressBar: true,
              closeButton: true
            });
          }
          this.isMarking = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          const errorMsg = err?.error?.message || 'Error al registrar entrada';
          this.toastr.error(errorMsg, 'Error', {
            progressBar: true,
            closeButton: true
          });
          this.isMarking = false;
          this.cdr.detectChanges();
        }
      });
  }

  marcarAlmuerzo(): void {
    if (this.isMarking) return;
    if (this.estadoMarcaje !== 'entrada_registrada' && this.estadoMarcaje !== 'almuerzo_inicio') return;
    this.isMarking = true;
    this.asistenciaService.marcarAlmuerzo()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          if (res?.success && res.data) {
            const prevEstado = this.estadoMarcaje;
            this.updateAttendanceState(res.data);
            if (prevEstado === 'entrada_registrada') {
              const hora = this.extractAlmuerzoTime(res.data.observaciones, 'almuerzo_inicio');
              this.toastr.success(`Inicio de almuerzo registrado a las ${hora}`, 'Éxito', {
                progressBar: true,
                closeButton: true
              });
            } else {
              const hora = this.extractAlmuerzoTime(res.data.observaciones, 'almuerzo_fin');
              this.toastr.success(`Fin de almuerzo registrado a las ${hora}`, 'Éxito', {
                progressBar: true,
                closeButton: true
              });
            }
          }
          this.isMarking = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          const errorMsg = err?.error?.message || 'Error al registrar almuerzo';
          this.toastr.error(errorMsg, 'Error', {
            progressBar: true,
            closeButton: true
          });
          this.isMarking = false;
          this.cdr.detectChanges();
        }
      });
  }

  marcarSalida(): void {
    if (this.isMarking) return;
    if (this.estadoMarcaje !== 'entrada_registrada' && this.estadoMarcaje !== 'almuerzo_fin') return;
    this.isMarking = true;
    this.asistenciaService.marcarSalida()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          if (res?.success && res.data) {
            this.updateAttendanceState(res.data);
            const hora = this.formatTimeFromISO(res.data.horaSalida);
            let mensaje = `Salida registrada a las ${hora}`;
            if (res.data.horasTrabajadas) {
              mensaje += `. Horas trabajadas: ${res.data.horasTrabajadas.horas} horas ${res.data.horasTrabajadas.minutos} minutos`;
            }
            this.toastr.success(mensaje, 'Éxito', {
              progressBar: true,
              closeButton: true
            });
          }
          this.isMarking = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          const errorMsg = err?.error?.message || 'Error al registrar salida';
          this.toastr.error(errorMsg, 'Error', {
            progressBar: true,
            closeButton: true
          });
          this.isMarking = false;
          this.cdr.detectChanges();
        }
      });
  }

  // --- Helper methods ---

  private updateAttendanceState(data: {
    id: number;
    horaEntrada: string;
    horaSalida: string | null;
    estado: string;
    observaciones: string | null;
    estadoMarcaje: EstadoMarcaje;
    horasTrabajadas?: { horas: number; minutos: number };
  }): void {
    this.estadoMarcaje = data.estadoMarcaje;
    this.asistenciaHoy = {
      id: data.id,
      horaEntrada: data.horaEntrada,
      horaSalida: data.horaSalida,
      estado: data.estado,
      observaciones: data.observaciones,
      estadoMarcaje: data.estadoMarcaje
    };
  }

  formatTimeFromISO(timeStr: string | null): string {
    if (!timeStr) return '--:--';
    const date = new Date(timeStr);
    if (isNaN(date.getTime())) {
      // Try parsing as HH:MM:SS time-only string
      const parts = timeStr.split(':');
      if (parts.length >= 2) {
        return `${parts[0].padStart(2, '0')}:${parts[1].padStart(2, '0')}`;
      }
      return timeStr;
    }
    return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: false });
  }

  private extractAlmuerzoTime(observaciones: string | null, key: string): string {
    if (!observaciones) return '--:--';
    const parts = observaciones.split('|');
    for (const part of parts) {
      const colonIdx = part.indexOf(':');
      if (colonIdx === -1) continue;
      const clave = part.substring(0, colonIdx);
      const valor = part.substring(colonIdx + 1);
      if (clave === key) return valor;
    }
    return '--:--';
  }

  extractAlmuerzoTimePublic(observaciones: string | null, key: string): string {
    return this.extractAlmuerzoTime(observaciones, key);
  }

  getAlmuerzoButtonText(): string {
    return this.estadoMarcaje === 'almuerzo_inicio' ? 'Fin Almuerzo' : 'Marcar Almuerzo';
  }

  isAlmuerzoEnabled(): boolean {
    return this.estadoMarcaje === 'entrada_registrada' || this.estadoMarcaje === 'almuerzo_inicio';
  }

  isSalidaEnabled(): boolean {
    return this.estadoMarcaje === 'entrada_registrada' || this.estadoMarcaje === 'almuerzo_fin';
  }

  getSalidaTooltip(): string {
    if (this.estadoMarcaje === 'almuerzo_inicio') {
      return 'Debe finalizar el almuerzo antes de marcar salida';
    }
    return '';
  }

  // --- History methods ---

  loadHistorial(): void {
    this.historialLoading = true;
    const params: any = {
      page: this.historialPage,
      limit: this.historialLimit
    };
    if (this.filtroFechaInicio) {
      params.fechaInicio = this.filtroFechaInicio;
    }
    if (this.filtroFechaFin) {
      params.fechaFin = this.filtroFechaFin;
    }

    this.asistenciaService.getMiHistorial(params)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          if (res?.success && res.data) {
            this.historialRecords = res.data.data;
            this.historialTotal = res.data.pagination.total;
            this.historialTotalPages = res.data.pagination.totalPages;
            this.historialPage = res.data.pagination.page;
            this.calculateMonthlySummary();
          }
          this.historialLoading = false;
          this.cdr.detectChanges();
        },
        error: () => {
          this.toastr.error('Error al cargar el historial de asistencia', 'Error', {
            progressBar: true,
            closeButton: true
          });
          this.historialLoading = false;
          this.cdr.detectChanges();
        }
      });
  }

  calculateMonthlySummary(): void {
    const records = this.historialRecords;
    const diasTrabajados = records.filter(r => r.horaEntrada).length;
    let totalMinutos = 0;

    for (const record of records) {
      if (record.horasTrabajadas) {
        totalMinutos += record.horasTrabajadas.horas * 60 + record.horasTrabajadas.minutos;
      }
    }

    this.resumenDiasTrabajados = diasTrabajados;

    const totalHoras = Math.floor(totalMinutos / 60);
    const totalMins = totalMinutos % 60;
    this.resumenTotalHoras = `${totalHoras}h ${totalMins}m`;

    if (diasTrabajados > 0) {
      const promedioMinutos = totalMinutos / diasTrabajados;
      const promHoras = Math.floor(promedioMinutos / 60);
      const promMins = Math.round(promedioMinutos % 60);
      this.resumenPromedioHoras = `${promHoras}h ${promMins}m`;
    } else {
      this.resumenPromedioHoras = '0h 0m';
    }
  }

  aplicarFiltroFechas(): void {
    this.historialPage = 1;
    this.loadHistorial();
  }

  limpiarFiltroFechas(): void {
    this.filtroFechaInicio = '';
    this.filtroFechaFin = '';
    this.historialPage = 1;
    this.loadHistorial();
  }

  historialPageChange(page: number): void {
    if (page < 1 || page > this.historialTotalPages) return;
    this.historialPage = page;
    this.loadHistorial();
  }

  formatDateShort(dateStr: string): string {
    if (!dateStr) return '--';
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  formatHorasTrabajadas(ht: { horas: number; minutos: number } | null): string {
    if (!ht) return '--';
    return `${ht.horas}h ${ht.minutos}m`;
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(1, this.historialPage - Math.floor(maxVisible / 2));
    let end = Math.min(this.historialTotalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
}
