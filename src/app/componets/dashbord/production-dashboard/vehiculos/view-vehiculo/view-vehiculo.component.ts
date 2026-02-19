import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VehiculoService } from '../../../../../shared/services/vehiculo.service';
import { Vehiculo } from '../../../../../shared/interfaces/vehiculo';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-view-vehiculo',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './view-vehiculo.component.html',
  styleUrls: ['./view-vehiculo.component.scss']
})
export class ViewVehiculoComponent implements OnInit {
  vehiculo: Vehiculo | null = null;
  isLoading = false;
  vehiculoId: number | null = null;

  constructor(
    private vehiculoService: VehiculoService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.vehiculoId = parseInt(id);
      this.loadVehiculo();
    } else {
      this.router.navigate(['../list'], { relativeTo: this.route });
    }
  }

  loadVehiculo() {
    if (this.vehiculoId) {
      this.isLoading = true;
      this.vehiculoService.getVehiculoById(this.vehiculoId).subscribe({
        next: (response) => {
          this.vehiculo = response.data;
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          this.toastr.error('Error al cargar vehículo', 'Error');
          this.isLoading = false;
          this.router.navigate(['../list'], { relativeTo: this.route });
        }
      });
    }
  }

  getEstadoBadgeClass(estado: string): string {
    const classes: { [key: string]: string } = {
      'Activo': 'success',
      'Inactivo': 'secondary',
      'Mantenimiento': 'warning',
      'Vendido': 'danger'
    };
    return classes[estado] || 'secondary';
  }

  getEstadoIcon(estado: string): string {
    const icons: { [key: string]: string } = {
      'Activo': 'ri-checkbox-circle-line',
      'Inactivo': 'ri-close-circle-line',
      'Mantenimiento': 'ri-tools-line',
      'Vendido': 'ri-shopping-cart-line'
    };
    return icons[estado] || 'ri-question-line';
  }

  deleteVehiculo() {
    if (this.vehiculoId && confirm('¿Está seguro de eliminar este vehículo?')) {
      this.vehiculoService.deleteVehiculo(this.vehiculoId).subscribe({
        next: () => {
          this.toastr.success('Vehículo eliminado exitosamente', 'Éxito');
          this.router.navigate(['../../list'], { relativeTo: this.route });
        },
        error: (error) => {
          const errorMsg = error?.error?.message || 'Error al eliminar vehículo';
          this.toastr.error(errorMsg, 'Error');
        }
      });
    }
  }

  calcularAntiguedad(): number {
    if (!this.vehiculo?.anio) return 0;
    return new Date().getFullYear() - this.vehiculo.anio;
  }
}
