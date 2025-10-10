import { Component, OnInit, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ProductosService } from '../services/productos.service';
import { ProductosStats } from '../interfaces/producto.interface';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {
  stats: ProductosStats | null = null
  isLoading = false

  constructor(
    private productosService: ProductosService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadStats()
  }

  loadStats() {
    this.isLoading = true
    this.productosService.getStats().subscribe({
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

  getPercentage(value: number, total: number): number {
    if (total === 0) return 0
    return (value / total) * 100
  }
}