import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { TicketService } from '../../../../../shared/services/ticket.service';
import { Ticket } from '../../../../../shared/interfaces/ticket';

@Component({
  selector: 'app-view-ticket',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.scss']
})
export class ViewTicketComponent implements OnInit {
  ticket: Ticket | null = null;
  isLoading = false;
  idTicket!: number;

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

  volver() {
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
