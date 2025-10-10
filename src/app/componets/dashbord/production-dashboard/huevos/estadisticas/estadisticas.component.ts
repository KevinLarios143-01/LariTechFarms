import { Component, OnInit, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HuevosService } from '../services/huevos.service';
import { ControlHuevosStats } from '../interfaces/huevo.interface';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {
  stats: ControlHuevosStats | null = null
  isLoading = false
  fechaInicio = ''
  fechaFin = ''

  constructor(
    private huevosService: HuevosService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {
    // Set default dates (last 30 days)
    const today = new Date()
    const thirtyDaysAgo = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000))
    
    this.fechaFin = today.toISOString().split('T')[0]
    this.fechaInicio = thirtyDaysAgo.toISOString().split('T')[0]
  }

  ngOnInit() {
    this.loadStats()
  }

  loadStats() {
    this.isLoading = true
    const params = {
      fechaInicio: this.fechaInicio,
      fechaFin: this.fechaFin
    }

    this.huevosService.getStats(params).subscribe({
      next: (response) => {
        this.stats = response.data
        this.isLoading = false
        this.cdr.detectChanges()
      },
      error: (error) => {
        this.toastr.error('Error al cargar estadísticas', 'Error', {
          progressBar: true,
          closeButton: true
        })
        this.isLoading = false
        this.cdr.detectChanges()
      }
    })
  }

  onDateChange() {
    if (this.fechaInicio && this.fechaFin) {
      this.loadStats()
    }
  }

  getCalidadBadgeClass(calidad: string): string {
    switch(calidad) {
      case 'Excelente': return 'badge bg-success'
      case 'Buena': return 'badge bg-info'
      case 'Regular': return 'badge bg-warning'
      case 'Mala': return 'badge bg-danger'
      default: return 'badge bg-secondary'
    }
  }

  getCalidadPercentage(totalHuevos: number): number {
    if (!this.stats || this.stats.totalHuevos === 0) return 0
    return (totalHuevos / this.stats.totalHuevos) * 100
  }
}