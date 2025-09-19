import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TicketService } from '../../../../shared/services/ticket.service';
import { CreateTicketRequest } from '../../../../shared/interfaces/ticket';
import { VentaService } from '../../../../shared/services/venta.service';
import { Venta } from '../../../../shared/interfaces/venta';
import { LoteService } from '../../../../shared/services/lote.service';
import { Lote } from '../../../../shared/interfaces/lote';
import { ProductoService } from '../../../../shared/services/producto.service';
import { Producto } from '../../../../shared/interfaces/producto';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [CommonModule, SharedModule, NgSelectModule, FlatpickrModule, RouterModule, ReactiveFormsModule, DecimalPipe],
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss'],
  providers: [FlatpickrDefaults]
})
export class NewTicketComponent implements OnInit {
  ticketForm: FormGroup;
  loading = false;
  ventas: Venta[] = [];
  lotes: Lote[] = [];
  productos: Producto[] = [];
  selectedVentaData: Venta | null = null;

  constructor(
    private readonly fb: FormBuilder,
    private readonly ticketService: TicketService,
    private readonly ventaService: VentaService,
    private readonly loteService: LoteService,
    private readonly productoService: ProductoService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly toastr: ToastrService
  ) {
    this.ticketForm = this.fb.group({
      idVenta: ['', [Validators.required, Validators.min(1)]],
      idLote: ['', [Validators.required, Validators.min(1)]],
      idProducto: ['', [Validators.required, Validators.min(1)]],
      fecha: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(1)]],
      estado: ['Pendiente', Validators.required],
      codigoAutorizacion: ['']
    });
  }

  ngOnInit(): void {
    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    this.ticketForm.patchValue({ fecha: today });
    this.loadVentas();
    this.loadLotes();
    this.loadProductos();
    
    // Listen for venta selection changes
    this.ticketForm.get('idVenta')?.valueChanges.subscribe(ventaId => {
      if (ventaId) {
        this.onVentaSelected(ventaId);
      }
    });
    
    // Check if ventaId is provided in query params
    this.route.queryParams.subscribe(params => {
      if (params['ventaId']) {
        this.ticketForm.patchValue({ idVenta: +params['ventaId'] });
      }
    });
  }

  private loadVentas(): void {
    this.ventaService.getVentas().subscribe({
      next: (ventas) => {
        this.ventas = ventas || [];
      },
      error: (error) => {
        console.error('Error loading ventas:', error);
        this.ventas = [];
      }
    });
  }

  private loadLotes(): void {
    this.loteService.getLotes().subscribe({
      next: (lotes) => {
        this.lotes = lotes || [];
      },
      error: (error) => {
        console.error('Error loading lotes:', error);
        this.lotes = [];
      }
    });
  }

  private loadProductos(): void {
    this.productoService.getProductos().subscribe({
      next: (productos) => {
        this.productos = productos || [];
      },
      error: (error) => {
        console.error('Error loading productos:', error);
        this.productos = [];
      }
    });
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      this.loading = true;
      const ticketData: CreateTicketRequest = this.ticketForm.value;
      
      this.ticketService.createTicket(ticketData).subscribe({
        next: () => {
          this.toastr.success('Ticket creado exitosamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right'
          });
          this.router.navigate(['/dashboard/business-dashboard/ticket-list']);
        },
        error: (error) => {
          this.toastr.error('Error al crear el ticket: ' + (error.error?.message || 'Error desconocido'), 'Error', {
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

  onCancel(): void {
    this.router.navigate(['/dashboard/business-dashboard/ticket-list']);
  }

  private onVentaSelected(ventaId: number): void {
    this.ventaService.getVentaById(ventaId).subscribe({
      next: (response) => {
        this.selectedVentaData = response.data;
      },
      error: (error) => {
        console.error('Error loading venta details:', error);
        this.selectedVentaData = null;
      }
    });
  }

  get selectedVenta(): Venta | null {
    return this.selectedVentaData;
  }

  private markFormGroupTouched(): void {
    Object.keys(this.ticketForm.controls).forEach(key => {
      const control = this.ticketForm.get(key);
      control?.markAsTouched();
    });
  }
}