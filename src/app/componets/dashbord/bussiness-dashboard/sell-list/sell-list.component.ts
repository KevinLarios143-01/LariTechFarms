import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VentaService } from '../../../../shared/services/venta.service';
import { Venta, UpdateVentaRequest } from '../../../../shared/interfaces/venta';
import { DatePipe, DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';

interface VentaDisplay {
  id: number;
  No: string;
  cliente: string;
  fecha: string;
  total: number;
  estado: string;
  statusText: string;
  status: string;
}

@Component({
  selector: 'app-sell-list',
  standalone: true,
  imports: [SharedModule, NgSelectModule, MaterialModuleModule, FlatpickrModule, RouterModule, ReactiveFormsModule, NgbModule, DatePipe, DecimalPipe],
  templateUrl: './sell-list.component.html',
  styleUrls: ['./sell-list.component.scss'],
  providers: [FlatpickrDefaults]
})
export class SellListComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Cliente', 'Fecha', 'Total', 'Estado', 'Action'];
  dataSource: MatTableDataSource<VentaDisplay>;
  ventas: Venta[] = [];
  filteredVentas: Venta[] = [];
  loading = false;
  editForm: FormGroup;
  filterForm: FormGroup;
  selectedVenta: Venta | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private readonly modalService: NgbModal,
    private readonly ventaService: VentaService,
    private readonly fb: FormBuilder,
    private readonly toastr: ToastrService,
    private readonly router: Router
  ) {
    this.dataSource = new MatTableDataSource<VentaDisplay>([]);
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(editContent: any, venta: VentaDisplay) {
    this.selectedVenta = this.ventas.find(v => v.id === venta.id) || null;
    if (this.selectedVenta) {
      this.editForm.patchValue({
        idCliente: this.selectedVenta.idCliente,
        fecha: this.selectedVenta.fecha.split('T')[0],
        total: this.selectedVenta.total,
        estado: this.selectedVenta.estado
      });
    }
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
            positionClass: 'toast-top-right'
          });
          this.loadVentas();
          this.modalService.dismissAll();
          this.loading = false;
        },
        error: (error) => {
          this.toastr.error('Error al actualizar la venta: ' + (error.error?.message || 'Error desconocido'), 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right'
          });
          this.loading = false;
        }
      });
    } else {
      this.toastr.warning('Por favor, complete todos los campos requeridos', 'Advertencia', {
        timeOut: 3000,
        positionClass: 'toast-top-right'
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
            positionClass: 'toast-top-right'
          });
          this.loadVentas();
        },
        error: (error) => {
          this.toastr.error('Error al eliminar la venta: ' + (error.error?.message || 'Error desconocido'), 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right'
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
      next: (ventas) => {
        this.ventas = ventas || [];
        this.filteredVentas = [...this.ventas];
        this.dataSource.data = this.mapVentasToDisplay(this.filteredVentas);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading ventas:', error);
        this.ventas = [];
        this.dataSource.data = [];
        this.loading = false;
      }
    });
  }

  private mapVentasToDisplay(ventas: Venta[]): VentaDisplay[] {
    if (!ventas || !Array.isArray(ventas)) {
      return [];
    }
    return ventas.map(venta => ({
      id: venta.id,
      No: `#VT-${String(venta.id).padStart(3, '0')}`,
      cliente: `Cliente #${venta.idCliente}`,
      fecha: venta.fecha,
      total: venta.total,
      estado: venta.estado,
      statusText: venta.estado,
      status: this.getStatusClass(venta.estado)
    }));
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
    
    this.dataSource.data = this.mapVentasToDisplay(this.filteredVentas);
  }
  
  clearFilters(): void {
    this.filterForm.reset();
    this.filteredVentas = [...this.ventas];
    this.dataSource.data = this.mapVentasToDisplay(this.filteredVentas);
  }

  private getStatusClass(estado: string): string {
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