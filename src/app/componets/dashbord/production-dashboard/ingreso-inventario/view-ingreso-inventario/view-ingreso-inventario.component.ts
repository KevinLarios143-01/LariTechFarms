import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { IngresoInventario } from '../../../../../shared/interfaces/inventario';
import { IngresoInventarioService } from '../../../../../shared/services/ingreso-inventario.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-view-ingreso-inventario',
  standalone: true,
  imports: [SharedModule, DatePipe, DecimalPipe],
  templateUrl: './view-ingreso-inventario.component.html',
  styleUrls: ['./view-ingreso-inventario.component.scss']
})
export class ViewIngresoInventarioComponent implements OnInit {
  ingreso: IngresoInventario | null = null;
  loading = true;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly ingresoService: IngresoInventarioService,
    private readonly toastr: ToastrService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadIngreso();
  }

  loadIngreso() {
    const ingresoId = this.route.snapshot.paramMap.get('id');
    
    if (ingresoId) {
      this.loading = true;
      this.ingresoService.getIngresoById(+ingresoId).subscribe({
        next: (response) => {
          this.ingreso = response.data;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error al cargar ingreso:', error);
          this.loading = false;
          this.cdr.detectChanges();
          this.toastr.error('Error al cargar el ingreso de inventario', 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        }
      });
    } else {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }

  onBack() {
    this.router.navigate(['/dashboard/production-dashboard/ingreso-inventario/list']);
  }

  onDelete() {
    if (this.ingreso?.id && confirm('¿Está seguro de que desea eliminar este ingreso?')) {
      this.ingresoService.deleteIngreso(this.ingreso.id).subscribe({
        next: () => {
          this.toastr.success('Ingreso eliminado exitosamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.router.navigate(['/dashboard/production-dashboard/ingreso-inventario/list']);
        },
        error: (error: any) => {
          console.error('Error al eliminar ingreso:', error);
          this.toastr.error('Error al eliminar el ingreso', 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        }
      });
    }
  }
}
