import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { TicketService } from '../../../../shared/services/ticket.service';
import { Ticket } from '../../../../shared/interfaces/ticket';
import { DatePipe, DecimalPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-ticket',
  standalone: true,
  imports: [SharedModule, DatePipe, DecimalPipe],
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.scss']
})
export class ViewTicketComponent implements OnInit {
  ticket: Ticket | null = null;
  loading = false;
  ticketId: number = 0;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly ticketService: TicketService,
    private readonly toastr: ToastrService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ticketId = +params['id'];
      if (this.ticketId) {
        this.loadTicket();
      }
    });
  }

  private loadTicket(): void {
    this.loading = true;
    this.ticketService.getTicketById(this.ticketId).subscribe({
      next: (response) => {
        this.ticket = response?.data || null;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading ticket:', error);
        this.toastr.error('Error al cargar el ticket', 'Error', {
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
    this.router.navigate(['/dashboard/business-dashboard/ticket-list']);
  }

  editTicket(): void {
    this.router.navigate(['/dashboard/business-dashboard/new-ticket'], {
      queryParams: { id: this.ticketId, mode: 'edit' }
    });
  }

  getStatusClass(estado: string): string {
    switch (estado?.toLowerCase()) {
      case 'completado':
        return 'success';
      case 'pendiente':
        return 'warning';
      case 'cancelado':
        return 'danger';
      default:
        return 'secondary';
    }
  }
}