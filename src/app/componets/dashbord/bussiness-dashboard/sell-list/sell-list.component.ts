import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VentaService } from '../../../../shared/services/venta.service';
import { Venta, UpdateVentaRequest } from '../../../../shared/interfaces/venta';
import { DatePipe, DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell-list',
  standalone: true,
  imports: [SharedModule, NgSelectModule, FlatpickrModule, RouterModule, ReactiveFormsModule, NgbModule, DatePipe, DecimalPipe],
  templateUrl: './sell-list.component.html',
  styleUrls: ['./sell-list.component.scss'],
  providers: [FlatpickrDefaults]
})
export class SellListComponent implements OnInit {
  ventas: Venta[] = [];
  filteredVentas: Venta[] = [];
  loading = false;
  editForm: FormGroup;
  filterForm: FormGroup;
  selectedVenta: Venta | null = null;

  constructor(
    private readonly modalService: NgbModal,
    private readonly ventaService: VentaService,
    private readonly fb: FormBuilder,
    private readonly toastr: ToastrService,
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.editForm = this.fb.group({
      idCliente: ['', [Validators.required, Validators.min(1)]],
      fecha: ['', Validators.required],
      total: ['', [Validators.required, Validators.min(0)]],
      estado: ['', Validators.required]
    });
    
    this.filterForm = this.fb.group({
      fechaDesde: [''],
      fechaHasta: [''],
      estado: ['']
    });
  }

  ngOnInit(): void {
    this.loadVentas();
  }



  edit(editContent: any, venta: Venta) {
    this.selectedVenta = venta;
    this.editForm.patchValue({
      idCliente: venta.idCliente,
      fecha: this.formatDateForInput(venta.fecha),
      total: venta.total,
      estado: venta.estado
    });
    this.modalService.open(editContent, { windowClass: 'modalCusSty modal-lg' });
  }

  onUpdateVenta(): void {
    if (this.editForm.valid && this.selectedVenta) {
      this.loading = true;
      const updateData: UpdateVentaRequest = this.editForm.value;
      
      this.ventaService.updateVenta(this.selectedVenta.id, updateData).subscribe({
        next: () => {
          this.toastr.success('Venta actualizada exitosamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
            progressBar: true,
            closeButton: true
          });
          this.loadVentas();
          this.modalService.dismissAll();
          this.loading = false;
        },
        error: (error) => {
          this.toastr.error('Error al actualizar la venta: ' + (error.error?.message || 'Error desconocido'), 'Error', {
            timeOut: 5000,
            positionClass: 'toast-top-right',
            progressBar: true,
            closeButton: true
          });
          this.loading = false;
        }
      });
    } else {
      this.toastr.warning('Por favor, complete todos los campos requeridos', 'Advertencia', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
        progressBar: true,
        closeButton: true
      });
      this.markFormGroupTouched();
    }
  }

  deleteVenta(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar esta venta?')) {
      this.ventaService.deleteVenta(id).subscribe({
        next: () => {
          this.toastr.success('Venta eliminada exitosamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
            progressBar: true,
            closeButton: true
          });
          this.loadVentas();
        },
        error: (error) => {
          this.toastr.error('Error al eliminar la venta: ' + (error.error?.message || 'Error desconocido'), 'Error', {
            timeOut: 5000,
            positionClass: 'toast-top-right',
            progressBar: true,
            closeButton: true
          });
        }
      });
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.editForm.controls).forEach(key => {
      const control = this.editForm.get(key);
      control?.markAsTouched();
    });
  }

  private loadVentas(): void {
    this.loading = true;
    this.ventaService.getVentas().subscribe({
      next: (response) => {
        console.log('API Response:', response);
        const ventasData = response?.data?.data || response?.data || response || [];
        this.ventas = Array.isArray(ventasData) ? ventasData : [];
        this.filteredVentas = [...this.ventas];
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading ventas:', error);
        this.ventas = [];
        this.filteredVentas = [];
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  formatDateForInput(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  }

  generateTicket(ventaId: number): void {
    this.router.navigate(['/dashboard/business-dashboard/new-ticket'], {
      queryParams: { ventaId: ventaId }
    });
  }

  applyFilters(): void {
    const { fechaDesde, fechaHasta, estado } = this.filterForm.value;
    
    this.filteredVentas = this.ventas.filter(venta => {
      let matches = true;
      
      if (fechaDesde) {
        const ventaFecha = new Date(venta.fecha);
        const desde = new Date(fechaDesde);
        matches = matches && ventaFecha >= desde;
      }
      
      if (fechaHasta) {
        const ventaFecha = new Date(venta.fecha);
        const hasta = new Date(fechaHasta);
        matches = matches && ventaFecha <= hasta;
      }
      
      if (estado) {
        matches = matches && venta.estado.toLowerCase() === estado.toLowerCase();
      }
      
      return matches;
    });
    
    this.cdr.detectChanges();
  }
  
  clearFilters(): void {
    this.filterForm.reset();
    this.filteredVentas = [...this.ventas];
    this.cdr.detectChanges();
  }

  getStatusClass(estado: string): string {
    switch (estado.toLowerCase()) {
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