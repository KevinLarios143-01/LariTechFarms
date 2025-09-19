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
import { TicketService } from '../../../../shared/services/ticket.service';
import { Ticket, UpdateTicketRequest } from '../../../../shared/interfaces/ticket';
import { DatePipe } from '@angular/common';

interface TicketDisplay {
  id: number;
  No: string;
  codigo: string;
  fecha: string;
  cantidad: number;
  estado: string;
  statusText: string;
  status: string;
}

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [SharedModule, NgSelectModule, MaterialModuleModule, FlatpickrModule, RouterModule, ReactiveFormsModule, NgbModule, DatePipe],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
  providers: [FlatpickrDefaults]
})
export class TicketListComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Codigo', 'Fecha', 'Cantidad', 'Estado', 'Action'];
  dataSource: MatTableDataSource<TicketDisplay>;
  tickets: Ticket[] = [];
  loading = false;
  editForm: FormGroup;
  selectedTicket: Ticket | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private readonly modalService: NgbModal,
    private readonly ticketService: TicketService,
    private readonly fb: FormBuilder,
    private readonly toastr: ToastrService
  ) {
    this.dataSource = new MatTableDataSource<TicketDisplay>([]);
    this.editForm = this.fb.group({
      estado: ['', Validators.required],
      codigoAutorizacion: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.loadTickets();
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

  edit(editContent: any, ticket: TicketDisplay) {
    this.selectedTicket = this.tickets.find(t => t.id === ticket.id) || null;
    if (this.selectedTicket) {
      this.editForm.patchValue({
        estado: this.selectedTicket.estado,
        codigoAutorizacion: this.selectedTicket.codigoAutorizacion,
        cantidad: this.selectedTicket.cantidad
      });
    }
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
            positionClass: 'toast-top-right'
          });
          this.loadTickets();
          this.modalService.dismissAll();
          this.loading = false;
        },
        error: (error) => {
          this.toastr.error('Error al actualizar el ticket: ' + (error.error?.message || 'Error desconocido'), 'Error', {
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

  deleteTicket(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar este ticket?')) {
      this.ticketService.deleteTicket(id).subscribe({
        next: () => {
          this.toastr.success('Ticket eliminado exitosamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right'
          });
          this.loadTickets();
        },
        error: (error) => {
          this.toastr.error('Error al eliminar el ticket: ' + (error.error?.message || 'Error desconocido'), 'Error', {
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

  private loadTickets(): void {
    this.loading = true;
    this.ticketService.getTickets().subscribe({
      next: (tickets) => {
        console.log('Tickets loaded:', tickets);
        this.tickets = tickets || [];
        this.dataSource.data = this.mapTicketsToDisplay(this.tickets);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading tickets:', error);
        this.toastr.error('Error al cargar los tickets', 'Error');
        this.tickets = [];
        this.dataSource.data = [];
        this.loading = false;
      }
    });
  }

  private mapTicketsToDisplay(tickets: Ticket[]): TicketDisplay[] {
    if (!tickets || !Array.isArray(tickets)) {
      return [];
    }
    return tickets.map(ticket => ({
      id: ticket.id,
      No: `#TK-${String(ticket.id).padStart(3, '0')}`,
      codigo: ticket.codigoAutorizacion,
      fecha: ticket.fecha,
      cantidad: ticket.cantidad,
      estado: ticket.estado,
      statusText: ticket.estado,
      status: this.getStatusClass(ticket.estado)
    }));
  }

  private getStatusClass(estado: string): string {
    switch (estado.toLowerCase()) {
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