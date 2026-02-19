import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { TicketService } from '../../../../../shared/services/ticket.service';
import { Ticket } from '../../../../../shared/interfaces/ticket';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  isLoading = false;
  estadoFilter = '';
  fechaInicio = '';
  fechaFin = '';

  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPages = 0;

  estados = ['Pendiente', 'Autorizado', 'Despachado', 'Cancelado'];

  stats = {
    totalTickets: 0,
    pendientes: 0,
    autorizados: 0,
    despachados: 0
  };

  constructor(
    private ticketService: TicketService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadTickets();
    this.loadStats();
  }

  loadTickets() {
    this.isLoading = true;
    const params = {
      page: this.currentPage,
      limit: this.itemsPerPage,
      estado: this.estadoFilter || undefined,
      fechaInicio: this.fechaInicio || undefined,
      fechaFin: this.fechaFin || undefined
    };

    this.ticketService.getTickets(params).subscribe({
      next: (response) => {
        if (response?.data) {
          this.tickets = response.data;
          this.totalItems = response.pagination.total;
          this.totalPages = response.pagination.totalPages;
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error('Error al cargar tickets', 'Error');
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  loadStats() {
    const params = {
      fechaInicio: this.fechaInicio || undefined,
      fechaFin: this.fechaFin || undefined
    };

    this.ticketService.getTicketsStats(params).subscribe({
      next: (response) => {
        if (response?.data) {
          this.stats.totalTickets = response.data.totalTickets;
          const porEstado = response.data.ticketsPorEstado || [];
          this.stats.pendientes = porEstado.find(e => e.estado === 'Pendiente')?._count.id || 0;
          this.stats.autorizados = porEstado.find(e => e.estado === 'Autorizado')?._count.id || 0;
          this.stats.despachados = porEstado.find(e => e.estado === 'Despachado')?._count.id || 0;
        }
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar estadísticas:', error);
      }
    });
  }

  applyFilters() {
    this.currentPage = 1;
    this.loadTickets();
    this.loadStats();
  }

  clearFilters() {
    this.estadoFilter = '';
    this.fechaInicio = '';
    this.fechaFin = '';
    this.currentPage = 1;
    this.loadTickets();
    this.loadStats();
  }

  cambiarEstado(ticket: Ticket, nuevoEstado: string) {
    if (confirm(`¿Está seguro de cambiar el estado a "${nuevoEstado}"?`)) {
      this.ticketService.updateTicketEstado(ticket.id, { estado: nuevoEstado as any }).subscribe({
        next: () => {
          this.toastr.success('Estado actualizado exitosamente', 'Éxito');
          this.loadTickets();
          this.loadStats();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || 'Error al actualizar estado';
          this.toastr.error(errorMsg, 'Error');
        }
      });
    }
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

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadTickets();
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
