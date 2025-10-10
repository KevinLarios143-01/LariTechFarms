import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TicketService } from '../../../../shared/services/ticket.service';
import { Ticket, UpdateTicketRequest } from '../../../../shared/interfaces/ticket';



@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, SharedModule, NgSelectModule, RouterModule, ReactiveFormsModule, NgbModule],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  loading = false;
  editForm: FormGroup;
  filterForm: FormGroup;
  selectedTicket: Ticket | null = null;
  
  // Estadísticas
  totalTickets = 0;
  ticketsPendientes = 0;
  ticketsAutorizados = 0;
  ticketsDespachados = 0;

  constructor(
    private readonly modalService: NgbModal,
    private readonly ticketService: TicketService,
    private readonly fb: FormBuilder,
    private readonly toastr: ToastrService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.editForm = this.fb.group({
      estado: ['', Validators.required],
      codigoAutorizacion: [''],
      cantidad: ['', [Validators.required, Validators.min(1)]]
    });
    
    this.filterForm = this.fb.group({
      fechaDesde: [''],
      fechaHasta: [''],
      estado: ['']
    });
  }

  ngOnInit(): void {
    this.loadTickets();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    // Implementar filtro local simple
    // En una implementación real, esto se haría en el servidor
  }

  edit(editContent: any, ticket: Ticket) {
    this.selectedTicket = ticket;
    this.editForm.patchValue({
      estado: ticket.estado,
      codigoAutorizacion: ticket.codigoAutorizacion || '',
      cantidad: ticket.cantidad
    });
    this.modalService.open(editContent, { windowClass: 'modalCusSty modal-lg' });
  }

  onUpdateTicket(): void {
    if (this.editForm.valid && this.selectedTicket) {
      this.loading = true;
      const updateData: UpdateTicketRequest = this.editForm.value;
      
      this.ticketService.updateTicket(this.selectedTicket.id, updateData).subscribe({
        next: () => {
          this.toastr.success('Ticket actualizado exitosamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.loadTickets();
          this.modalService.dismissAll();
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          this.toastr.error('Error al actualizar el ticket: ' + (error.error?.message || 'Error desconocido'), 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    } else {
      this.toastr.warning('Por favor, complete todos los campos requeridos', 'Advertencia', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
      });
      this.markFormGroupTouched();
    }
  }

  toggleTicketStatus(ticket: Ticket) {
    const isActive = ticket.estado === 'Pendiente';
    const newStatus = isActive ? 'Cancelado' : 'Pendiente';
    const action = isActive ? 'cancelar' : 'activar';
    
    if (confirm(`¿Está seguro de que desea ${action} este ticket?`)) {
      const updateData: UpdateTicketRequest = { estado: newStatus };
        
      this.ticketService.updateTicket(ticket.id, updateData).subscribe({
        next: () => {
          this.toastr.success(`Ticket ${action}do exitosamente`, 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.loadTickets();
          this.cdr.detectChanges();
        },
        error: (error) => {
          this.toastr.error(`Error al ${action} el ticket: ${error.error?.message || 'Error desconocido'}`, 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.cdr.detectChanges();
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

  private loadTickets(): void {
    this.loading = true;
    
    this.ticketService.getTickets().subscribe({
      next: (response) => {
        // Manejar diferentes estructuras de respuesta
        if (response?.data?.data) {
          this.tickets = response.data.data;
        } else if (response?.data?.items) {
          this.tickets = response.data.items;
        } else if (response?.data && Array.isArray(response.data)) {
          this.tickets = response.data;
        } else if (Array.isArray(response)) {
          this.tickets = response;
        } else {
          this.tickets = [];
        }
        
        this.calculateStats();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.tickets = [];
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  private calculateStats(): void {
    this.totalTickets = this.tickets.length;
    this.ticketsPendientes = this.tickets.filter(t => t.estado === 'Pendiente').length;
    this.ticketsAutorizados = this.tickets.filter(t => t.estado === 'Autorizado').length;
    this.ticketsDespachados = this.tickets.filter(t => t.estado === 'Despachado').length;
  }

  open(content: any) {
    this.modalService.open(content, { windowClass: 'modalCusSty', size: 'lg' });
  }

  applyFilters(): void {
    // Implementar filtros si es necesario
    console.log('Aplicando filtros:', this.filterForm.value);
  }
  
  clearFilters(): void {
    this.filterForm.reset();
  }

  deleteTicket(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar este ticket?')) {
      this.ticketService.deleteTicket(id).subscribe({
        next: () => {
          this.toastr.success('Ticket eliminado exitosamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.loadTickets();
          this.cdr.detectChanges();
        },
        error: (error) => {
          this.toastr.error('Error al eliminar el ticket: ' + (error.error?.message || 'Error desconocido'), 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.cdr.detectChanges();
        }
      });
    }
  }

  getEstadoBadgeClass(estado: string): string {
    switch (estado) {
      case 'Autorizado': return 'bg-success';
      case 'Pendiente': return 'bg-warning';
      case 'Despachado': return 'bg-primary';
      case 'Cancelado': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }

  trackByTicketId(index: number, ticket: Ticket): number {
    return ticket.id;
  }
}