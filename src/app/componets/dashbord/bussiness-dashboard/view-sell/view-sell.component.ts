import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { VentaService } from '../../../../shared/services/venta.service';
import { Venta } from '../../../../shared/interfaces/venta';
import { DatePipe, DecimalPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-sell',
  standalone: true,
  imports: [SharedModule, DatePipe, DecimalPipe],
  templateUrl: './view-sell.component.html',
  styleUrls: ['./view-sell.component.scss']
})
export class ViewSellComponent implements OnInit {
  venta: Venta | null = null;
  loading = false;
  ventaId: number = 0;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly ventaService: VentaService,
    private readonly toastr: ToastrService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ventaId = +params['id'];
      if (this.ventaId) {
        this.loadVenta();
      }
    });
  }

  private loadVenta(): void {
    this.loading = true;
    this.ventaService.getVentaById(this.ventaId).subscribe({
      next: (response) => {
        this.venta = response?.data || null;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading venta:', error);
        this.toastr.error('Error al cargar la venta', 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
          progressBar: true,
          closeButton: true
        });
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/dashboard/business-dashboard/sell-list']);
  }

  editVenta(): void {
    this.router.navigate(['/dashboard/business-dashboard/new-sell'], {
      queryParams: { id: this.ventaId, mode: 'edit' }
    });
  }

  generateTicket(): void {
    this.router.navigate(['/dashboard/business-dashboard/new-ticket'], {
      queryParams: { ventaId: this.ventaId }
    });
  }

  getStatusClass(estado: string): string {
    switch (estado?.toLowerCase()) {
      case 'completada':
        return 'success';
      case 'pendiente':
        return 'warning';
      case 'cancelada':
        return 'danger';
      default:
        return 'secondary';
    }
  }
}