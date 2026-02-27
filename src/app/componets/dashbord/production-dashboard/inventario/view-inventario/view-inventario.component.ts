import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { IngresoInventarioService } from '../../../../../shared/services/ingreso-inventario.service';
// import { InventarioGranja } from '../../../../../shared/interfaces/inventario';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

interface InventarioGranja {
  id: number;
  idTenant?: number;
  nombre: string;
  cantidad: number;
  unidad: string;
  categoria?: string;
  minimoStock?: number;
  proveedor?: string;
  observaciones?: string;
  fechaCreacion?: string;
  fechaActualizacion?: string;
}

@Component({
  selector: 'app-view-inventario',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './view-inventario.component.html',
  styleUrls: ['./view-inventario.component.scss']
})
export class ViewInventarioComponent implements OnInit {
  item: InventarioGranja | null = null;
  isLoading = false;
  inventarioId: number | null = null;

  constructor(
    // private inventarioService: IngresoInventarioService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.inventarioId = parseInt(id);
      // this.loadInventario();
      this.toastr.warning('Funcionalidad pendiente de implementar', 'Aviso');
      this.router.navigate(['../list'], { relativeTo: this.route });
    } else {
      this.router.navigate(['../list'], { relativeTo: this.route });
    }
  }

  loadInventario() {
    // TODO: Implementar servicio de inventario de granja
    // if (this.inventarioId) {
    //   this.isLoading = true;
    //   this.inventarioService.getInventarioById(this.inventarioId).subscribe({
    //     next: (response: any) => {
    //       this.item = response.data;
    //       this.isLoading = false;
    //       this.cdr.detectChanges();
    //     },
    //     error: (error: any) => {
    //       this.toastr.error('Error al cargar item', 'Error');
    //       this.isLoading = false;
    //       this.router.navigate(['../list'], { relativeTo: this.route });
    //     }
    //   });
    // }
  }

  getStockStatus(): { text: string; class: string; icon: string } {
    if (!this.item) return { text: '-', class: 'secondary', icon: 'ri-question-line' };
    
    if (this.item.minimoStock && this.item.cantidad <= this.item.minimoStock) {
      return { text: 'Crítico', class: 'danger', icon: 'ri-alert-line' };
    }
    if (this.item.minimoStock && this.item.cantidad <= this.item.minimoStock * 1.5) {
      return { text: 'Bajo', class: 'warning', icon: 'ri-error-warning-line' };
    }
    return { text: 'Normal', class: 'success', icon: 'ri-checkbox-circle-line' };
  }

  getStockPercentage(): number {
    if (!this.item || !this.item.minimoStock) return 100;
    return Math.min((this.item.cantidad / (this.item.minimoStock * 2)) * 100, 100);
  }

  deleteItem() {
    this.toastr.warning('Funcionalidad pendiente de implementar', 'Aviso');
    // if (this.inventarioId && confirm('¿Está seguro de eliminar este item del inventario?')) {
    //   this.inventarioService.deleteInventario(this.inventarioId).subscribe({
    //     next: () => {
    //       this.toastr.success('Item eliminado exitosamente', 'Éxito');
    //       this.router.navigate(['../../list'], { relativeTo: this.route });
    //     },
    //     error: (error: any) => {
    //       const errorMsg = error?.error?.message || 'Error al eliminar item';
    //       this.toastr.error(errorMsg, 'Error');
    //     }
    //   });
    // }
  }
}
