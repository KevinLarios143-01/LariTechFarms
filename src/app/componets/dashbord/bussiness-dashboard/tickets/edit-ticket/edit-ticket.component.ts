import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { TicketService } from '../../../../../shared/services/ticket.service';
import { Ticket } from '../../../../../shared/interfaces/ticket';

@Component({
  selector: 'app-edit-ticket',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.scss']
})
export class EditTicketComponent implements OnInit {
  ticket: Ticket | null = null;
  isLoading = false;
  isSaving = false;
  idTicket!: number;

  estadoActual = '';
  observaciones = '';
  
  estados = ['Pendiente', 'Autorizado', 'Despachado', 'Cancelado'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketService: TicketService,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.idTicket = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    if (this.idTicket) {
      this.loadTicket();
    }
  }

  loadTicket() {
    this.isLoading = true;
    this.ticketService.getTicketById(this.idTicket).subscribe({
      next: (response: any) => {
        this.ticket = response?.data?.data || response?.data || response;
        this.estadoActual = this.ticket!.estado;
        this.observaciones = this.ticket!.observaciones || '';
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error('Error al cargar el ticket', 'Error');
        this.isLoading = false;
        this.cdr.detectChanges();
        this.router.navigate(['/dashboard/business-dashboard/tickets/list']);
      }
    });
  }

  guardar() {
    if (!this.estadoActual) {
      this.toastr.warning('Seleccione un estado', 'Validación');
      return;
    }

    this.isSaving = true;
    
    const data = {
      estado: this.estadoActual as any,
      observaciones: this.observaciones || undefined
    };

    this.ticketService.updateTicket(this.idTicket, data).subscribe({
      next: () => {
        this.toastr.success('Ticket actualizado exitosamente', 'Éxito');
        this.router.navigate(['/dashboard/business-dashboard/tickets/list']);
      },
      error: (error) => {
        const errorMsg = error?.error?.message || 'Error al actualizar ticket';
        this.toastr.error(errorMsg, 'Error');
        this.isSaving = false;
      }
    });
  }

  cancelar() {
    this.router.navigate(['/dashboard/business-dashboard/tickets/list']);
  }

  getEstadoBadgeClass(estado: string): string {
    const classes: { [key: string]: string } = {
      'Pendiente': 'bg-warning',
      'Autorizado': 'bg-info',
      'Despachado': 'bg-success',
      'Cancelado': 'bg-danger'
    };
    return classes[estado] || 'bg-secondary';
  }

  getTotalCantidad(): number {
    if (!this.ticket?.detalles) return 0;
    return this.ticket.detalles.reduce((sum, d) => sum + d.cantidad, 0);
  }
}
