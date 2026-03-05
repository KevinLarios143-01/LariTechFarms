import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { GaleraService, Galera, GaleraStats } from '../../../../../shared/services/galera.service';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-galera',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './view-galera.component.html',
  styleUrls: ['./view-galera.component.scss']
})
export class ViewGaleraComponent implements OnInit {
  galera: Galera | null = null;
  stats: GaleraStats | null = null;
  isLoading = true;
  galeraId!: number;

  constructor(
    private galeraService: GaleraService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.galeraId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadGalera();
    this.loadStats();
  }

  loadGalera() {
    this.galeraService.getGaleraById(this.galeraId).subscribe({
      next: (response) => {
        this.galera = response.data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar galera:', error);
        this.toastr.error('No se pudo cargar la galera', 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.isLoading = false;
        this.cdr.detectChanges();
        this.router.navigate(['/dashboard/production-dashboard/galeras']);
      }
    });
  }

  loadStats() {
    this.galeraService.getStats(this.galeraId).subscribe({
      next: (response) => {
        this.stats = response.data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar estadísticas:', error);
      }
    });
  }

  onEdit() {
    this.router.navigate(['/dashboard/production-dashboard/galeras/edit', this.galeraId]);
  }

  onDelete() {
    if (!this.galera) return;

    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Deseas eliminar la galera "${this.galera.nombre}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.galeraService.deleteGalera(this.galeraId).subscribe({
          next: () => {
            this.toastr.success('La galera ha sido eliminada', 'Galera Eliminada', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
            this.router.navigate(['/dashboard/production-dashboard/galeras']);
          },
          error: (error) => {
            console.error('Error al eliminar galera:', error);
            this.toastr.error('No se pudo eliminar la galera', 'Error', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
          }
        });
      }
    });
  }

  onBack() {
    this.router.navigate(['/dashboard/production-dashboard/galeras']);
  }

  getEstadoBadge(estado: string): string {
    const badges: { [key: string]: string } = {
      'Activa': 'bg-success',
      'Inactiva': 'bg-secondary',
      'Mantenimiento': 'bg-warning'
    };
    return badges[estado] || 'bg-secondary';
  }

  getTipoBadge(tipo: string): string {
    const badges: { [key: string]: string } = {
      'Ponedoras': 'bg-primary',
      'Pollos': 'bg-info',
      'Mixta': 'bg-purple'
    };
    return badges[tipo] || 'bg-secondary';
  }

  getCapacidadUtilizadaPorcentaje(): number {
    if (!this.stats || !this.stats.capacidadTotal) return 0;
    return (this.stats.capacidadUtilizada / this.stats.capacidadTotal) * 100;
  }
}
