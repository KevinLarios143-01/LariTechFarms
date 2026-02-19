import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GastoOperacionService } from '../../../../../shared/services/gasto-operacion.service';
import { GastoOperacion } from '../../../../../shared/interfaces/gasto-operacion';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-view-gasto',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './view-gasto.component.html',
  styleUrls: ['./view-gasto.component.scss']
})
export class ViewGastoComponent implements OnInit {
  gasto: GastoOperacion | null = null;
  isLoading = false;
  gastoId!: number;

  constructor(
    private gastoService: GastoOperacionService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.gastoId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadGasto();
  }

  loadGasto() {
    this.isLoading = true;
    this.gastoService.getGastoById(this.gastoId).subscribe({
      next: (response) => {
        if (response?.data) {
          this.gasto = response.data;
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error('Error al cargar el gasto', 'Error');
        this.router.navigate(['../list'], { relativeTo: this.route });
      }
    });
  }

  deleteGasto() {
    if (confirm('¿Está seguro de eliminar este gasto?')) {
      this.gastoService.deleteGasto(this.gastoId).subscribe({
        next: () => {
          this.toastr.success('Gasto eliminado exitosamente', 'Éxito');
          this.router.navigate(['../list'], { relativeTo: this.route });
        },
        error: (error) => {
          const errorMsg = error?.error?.message || 'Error al eliminar gasto';
          this.toastr.error(errorMsg, 'Error');
        }
      });
    }
  }

  getCategoriaBadgeClass(categoria: string): string {
    const classes: { [key: string]: string } = {
      'Mantenimiento': 'bg-warning',
      'Servicios': 'bg-info',
      'Insumos': 'bg-primary',
      'Personal': 'bg-success',
      'Transporte': 'bg-secondary',
      'Limpieza': 'bg-light text-dark',
      'Combustible': 'bg-danger',
      'Medicamentos': 'bg-purple'
    };
    return classes[categoria] || 'bg-secondary';
  }
}
