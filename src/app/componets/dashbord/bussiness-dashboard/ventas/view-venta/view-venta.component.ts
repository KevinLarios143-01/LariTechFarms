import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VentaService } from '../../../../../shared/services/venta.service';
import { Venta } from '../../../../../shared/interfaces/venta';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-view-venta',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './view-venta.component.html',
  styleUrls: ['./view-venta.component.scss']
})
export class ViewVentaComponent implements OnInit {
  venta: Venta | null = null;
  isLoading = false;
  ventaId!: number;

  constructor(
    private ventaService: VentaService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.ventaId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadVenta();
  }

  loadVenta() {
    this.isLoading = true;
    this.ventaService.getVentaById(this.ventaId).subscribe({
      next: (response) => {
        if (response?.data) {
          this.venta = response.data;
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error('Error al cargar la venta', 'Error');
        this.router.navigate(['../list'], { relativeTo: this.route });
      }
    });
  }

  anularVenta() {
    if (!this.venta || this.venta.estado === 'Cancelada') return;
    
    const motivo = prompt('Ingrese el motivo de anulación de la venta (opcional):');
    
    if (motivo === null) {
      return; // Usuario canceló
    }
    
    if (confirm('¿Está seguro de anular esta venta? Esta acción restaurará el stock de los productos.')) {
      const payload = motivo && motivo.trim() ? { motivoAnulacion: motivo.trim() } : {};
      
      this.ventaService.anularVenta(this.ventaId, payload).subscribe({
        next: () => {
          this.toastr.success('Venta anulada exitosamente', 'Éxito');
          this.loadVenta();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || 'Error al anular venta';
          this.toastr.error(errorMsg, 'Error');
        }
      });
    }
  }

  getEstadoBadgeClass(estado: string): string {
    const classes: { [key: string]: string } = {
      'Completada': 'bg-success',
      'Pendiente': 'bg-warning',
      'Cancelada': 'bg-danger'
    };
    return classes[estado] || 'bg-secondary';
  }
}
