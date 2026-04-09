import { Component, DestroyRef, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
  private readonly destroyRef = inject(DestroyRef);
  tickets: Ticket[] = [];
  isLoading = false;
  activeTab: 'activos' | 'despachados' | 'anulados' = 'activos';
  fechaInicio = '';
  fechaFin = '';

  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;

  // Expose Math to template
  Math = Math;

  stats = {
    totalTickets: 0,
    pendientes: 0,
    autorizados: 0,
    despachados: 0,
    cancelados: 0
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
    
    // Determinar estados según el tab activo
    let estadoFilter: string | undefined;
    if (this.activeTab === 'activos') {
      // No usar estadoFilter, filtraremos en el frontend
      estadoFilter = undefined;
    } else if (this.activeTab === 'despachados') {
      estadoFilter = 'Despachado';
    } else if (this.activeTab === 'anulados') {
      estadoFilter = 'Cancelado';
    }

    const params = {
      page: this.currentPage,
      limit: this.pageSize,
      estado: estadoFilter,
      fechaInicio: this.fechaInicio || undefined,
      fechaFin: this.fechaFin || undefined
    };

    this.ticketService.getTickets(params).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        if (response?.data) {
          let ticketsData = response.data;
          
          // Filtrar tickets activos (Pendiente + Autorizado) en el frontend
          if (this.activeTab === 'activos') {
            ticketsData = ticketsData.filter((t: Ticket) => 
              t.estado === 'Pendiente' || t.estado === 'Autorizado'
            );
          }
          
          this.tickets = ticketsData;
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

    this.ticketService.getTicketsStats(params).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        if (response?.data) {
          this.stats.totalTickets = response.data.totalTickets;
          const porEstado = response.data.ticketsPorEstado || [];
          this.stats.pendientes = porEstado.find(e => e.estado === 'Pendiente')?._count.id || 0;
          this.stats.autorizados = porEstado.find(e => e.estado === 'Autorizado')?._count.id || 0;
          this.stats.despachados = porEstado.find(e => e.estado === 'Despachado')?._count.id || 0;
          this.stats.cancelados = porEstado.find(e => e.estado === 'Cancelado')?._count.id || 0;
        }
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar estadísticas:', error);
      }
    });
  }

  changeTab(tab: 'activos' | 'despachados' | 'anulados') {
    this.activeTab = tab;
    this.currentPage = 1;
    this.loadTickets();
  }

  applyFilters() {
    this.currentPage = 1;
    this.loadTickets();
    this.loadStats();
  }

  clearFilters() {
    this.fechaInicio = '';
    this.fechaFin = '';
    this.currentPage = 1;
    this.loadTickets();
    this.loadStats();
  }

  cambiarEstado(ticket: Ticket, nuevoEstado: string) {
    if (confirm(`¿Está seguro de cambiar el estado a "${nuevoEstado}"?`)) {
      this.ticketService.updateTicketEstado(ticket.id, { estado: nuevoEstado as any }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
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

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadTickets();
    }
  }

  onPageSizeChange(newSize: number): void {
    this.pageSize = newSize;
    this.currentPage = 1;
    this.loadTickets();
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  getTotalCantidad(detalles: any[]): number {
    return detalles.reduce((sum, d) => sum + d.cantidad, 0);
  }

  eliminarTicket(ticket: Ticket) {
    const mensaje = ticket.estado === 'Pendiente' 
      ? '¿Está seguro de eliminar este ticket? Esta acción no se puede deshacer y restaurará el inventario.'
      : `Este ticket está en estado "${ticket.estado}". ¿Está seguro de eliminarlo? El inventario será restaurado.`;
    
    if (confirm(mensaje)) {
      this.ticketService.deleteTicket(ticket.id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.toastr.success('Ticket eliminado exitosamente. Inventario restaurado.', 'Éxito');
          this.loadTickets();
          this.loadStats();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || 'Error al eliminar ticket';
          this.toastr.error(errorMsg, 'Error');
        }
      });
    }
  }
}
