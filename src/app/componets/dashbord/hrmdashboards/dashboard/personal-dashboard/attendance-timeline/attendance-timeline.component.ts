import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoMarcaje, DashboardPersonalResponse } from '../../../../../../shared/services/asistencia.service';

interface TimelineStage {
  label: string;
  icon: string;
  time: string | null;
  status: 'completed' | 'in-progress' | 'pending';
}

@Component({
  selector: 'app-attendance-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attendance-timeline.component.html',
  styleUrl: './attendance-timeline.component.scss'
})
export class AttendanceTimelineComponent {
  @Input() estadoMarcaje: EstadoMarcaje = 'sin_marcar';
  @Input() asistenciaHoy: DashboardPersonalResponse['data']['asistenciaHoy'] = null;

  get stages(): TimelineStage[] {
    return [
      this.getEntradaStage(),
      this.getAlmuerzoStage(),
      this.getSalidaStage()
    ];
  }

  private getEntradaStage(): TimelineStage {
    const isCompleted = this.estadoMarcaje !== 'sin_marcar';
    return {
      label: 'Entrada',
      icon: 'fe-log-in',
      time: isCompleted ? this.formatTimeFromISO(this.asistenciaHoy?.horaEntrada ?? null) : null,
      status: isCompleted ? 'completed' : 'pending'
    };
  }

  private getAlmuerzoStage(): TimelineStage {
    let status: TimelineStage['status'] = 'pending';
    let time: string | null = null;

    if (this.estadoMarcaje === 'almuerzo_inicio') {
      status = 'in-progress';
      time = this.extractAlmuerzoTime('almuerzo_inicio');
    } else if (
      this.estadoMarcaje === 'almuerzo_fin' ||
      this.estadoMarcaje === 'salida_registrada'
    ) {
      status = 'completed';
      const inicio = this.extractAlmuerzoTime('almuerzo_inicio');
      const fin = this.extractAlmuerzoTime('almuerzo_fin');
      time = inicio && fin ? `${inicio} - ${fin}` : inicio;
    }

    return {
      label: 'Almuerzo',
      icon: 'fe-coffee',
      time,
      status
    };
  }

  private getSalidaStage(): TimelineStage {
    const isCompleted = this.estadoMarcaje === 'salida_registrada';
    return {
      label: 'Salida',
      icon: 'fe-log-out',
      time: isCompleted ? this.formatTimeFromISO(this.asistenciaHoy?.horaSalida ?? null) : null,
      status: isCompleted ? 'completed' : 'pending'
    };
  }

  private formatTimeFromISO(timeStr: string | null): string | null {
    if (!timeStr) return null;
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

  private extractAlmuerzoTime(key: string): string | null {
    const observaciones = this.asistenciaHoy?.observaciones;
    if (!observaciones) return null;
    const parts = observaciones.split('|');
    for (const part of parts) {
      const colonIdx = part.indexOf(':');
      if (colonIdx === -1) continue;
      const clave = part.substring(0, colonIdx);
      const valor = part.substring(colonIdx + 1);
      if (clave === key) return valor;
    }
    return null;
  }
}
