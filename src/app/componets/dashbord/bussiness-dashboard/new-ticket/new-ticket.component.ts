import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TicketService } from '../../../../shared/services/ticket.service';
import { CreateTicketRequest } from '../../../../shared/interfaces/ticket';
import { VentaService } from '../../../../shared/services/venta.service';
import { Venta } from '../../../../shared/interfaces/venta';
import { LotesService } from '../lotes/services/lotes.service';
import { Lote } from '../lotes/interfaces/lote.interface';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [CommonModule, SharedModule, NgSelectModule, RouterModule, ReactiveFormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss']
})
export class NewTicketComponent implements OnInit {
  ticketForm: FormGroup;
  loading = false;
  isEditing = false;
  ticketId: number | null = null;
  ventas: Venta[] = [];
  lotes: Lote[] = [];
  productos: any[] = [];
  selectedVentaData: Venta | null = null;

  estadosTicket = ['Pendiente', 'Autorizado', 'Despachado', 'Cancelado'];

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private ventaService: VentaService,
    private lotesService: LotesService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef
  ) {
    this.ticketForm = this.fb.group({
      idVenta: ['', [Validators.required, Validators.min(1)]],
      idLote: ['', [Validators.required, Validators.min(1)]],
      idProducto: ['', [Validators.required, Validators.min(1)]],
      fecha: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(1)]],
      estado: ['Pendiente'],
      codigoAutorizacion: ['']
    });
  }

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0];
    this.ticketForm.patchValue({ fecha: today });
    
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditing = true;
        this.ticketId = +params['id'];
        this.loadTicket();
      }
    });
    
    this.route.queryParams.subscribe(params => {
      if (params['ventaId']) {
        this.ticketForm.patchValue({ idVenta: +params['ventaId'] });
      }
    });
    
    this.loadVentas();
    this.loadLotes();
    this.loadProductos();
    
    this.ticketForm.get('idVenta')?.valueChanges.subscribe(ventaId => {
      if (ventaId) {
        this.onVentaSelected(ventaId);
      }
    });
  }

  private loadVentas(): void {
    this.ventaService.getVentas().subscribe({
      next: (response) => {
        const ventasData = response?.data?.data || response?.data || response || [];
        this.ventas = Array.isArray(ventasData) ? ventasData : [];
      },
      error: (error) => {
        console.error('Error loading ventas:', error);
        this.ventas = [];
      }
    });
  }

  private loadLotes(): void {
    this.lotesService.getLotes().subscribe({
      next: (response) => {
        if (response?.data?.data) {
          this.lotes = response.data.data;
        } else if (response?.data?.items) {
          this.lotes = response.data.items;
        } else if (response?.data && Array.isArray(response.data)) {
          this.lotes = response.data;
        } else if (Array.isArray(response)) {
          this.lotes = response;
        } else {
          this.lotes = [];
        }
      },
      error: (error) => {
        console.error('Error loading lotes:', error);
        this.lotes = [];
      }
    });
  }

  loadTicket(): void {
    if (this.ticketId) {
      this.loading = true;
      this.ticketService.getTicketById(this.ticketId).subscribe({
        next: (response) => {
          const ticket = response.data;
          this.ticketForm.patchValue({
            idVenta: ticket.idVenta,
            idLote: ticket.idLote,
            idProducto: ticket.idProducto,
            fecha: this.formatDateForInput(ticket.fecha),
            cantidad: ticket.cantidad,
            estado: ticket.estado,
            codigoAutorizacion: ticket.codigoAutorizacion || ''
          });
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error al cargar ticket:', error);
          this.toastr.error('Error al cargar el ticket', 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    }
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      this.loading = true;
      const formData = this.ticketForm.value;

      if (this.isEditing && this.ticketId) {
        this.ticketService.updateTicket(this.ticketId, formData).subscribe({
          next: () => {
            this.toastr.success('Ticket actualizado exitosamente', 'Éxito', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
            this.router.navigate(['/dashboard/business-dashboard/ticket-list']);
            this.loading = false;
            this.cdr.detectChanges();
          },
          error: (error) => {
            console.error('Error al actualizar ticket:', error);
            this.toastr.error('Error al actualizar el ticket', 'Error', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
            this.loading = false;
            this.cdr.detectChanges();
          }
        });
      } else {
        this.ticketService.createTicket(formData as CreateTicketRequest).subscribe({
          next: () => {
            this.toastr.success('Ticket creado exitosamente', 'Éxito', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
            this.router.navigate(['/dashboard/business-dashboard/ticket-list']);
            this.loading = false;
            this.cdr.detectChanges();
          },
          error: (error) => {
            console.error('Error al crear ticket:', error);
            this.toastr.error('Error al crear el ticket', 'Error', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
            this.loading = false;
            this.cdr.detectChanges();
          }
        });
      }
    } else {
      this.markFormGroupTouched();
      this.toastr.warning('Por favor, complete todos los campos requeridos', 'Advertencia', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/dashboard/business-dashboard/ticket-list']);
  }

  private loadProductos(): void {
    this.productos = [
      { id: 1, nombre: 'Huevo Grande', tamanio: 'L' },
      { id: 2, nombre: 'Huevo Mediano', tamanio: 'M' },
      { id: 3, nombre: 'Huevo Pequeño', tamanio: 'S' }
    ];
  }

  private formatDateForInput(dateString: string | null | undefined): string {
    if (!dateString) return '';
    
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      return dateString;
    }
    
    if (dateString.includes('T')) {
      return dateString.split('T')[0];
    }
    
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    
    return date.toISOString().split('T')[0];
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