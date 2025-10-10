import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { RouterModule } from '@angular/router';
import { LotesService } from '../services/lotes.service';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {
  loading = false;
  stats: any = null;

  constructor(
    private lotesService: LotesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.loading = true;
    this.lotesService.getStats().subscribe({
      next: (response) => {
        this.stats = response.data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar estadísticas:', error);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  getTipoStats(tipo: string) {
    return this.stats?.lotesPorTipo?.find((item: any) => item.tipo === tipo) || { _count: { id: 0 }, _sum: { cantidad: 0 } };
  }

  getEstadoStats(estado: string) {
    return this.stats?.lotesPorEstado?.find((item: any) => item.estado === estado) || { _count: { id: 0 } };
  }
}