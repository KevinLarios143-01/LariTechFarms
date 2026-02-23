import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../../../../../shared/services/cliente.service';
import { Cliente } from '../../../../../shared/interfaces/cliente';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-cliente-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[] = [];
  isLoading = false;
  searchTerm = '';
  estadoFilter = '';

  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPages = 0;

  stats = {
    totalClientes: 0,
    clientesActivos: 0,
    clientesInactivos: 0
  };

  // Expose Math to template
  Math = Math;

  constructor(
    private clienteService: ClienteService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadClientes();
    this.loadStats();
  }

  loadClientes() {
    this.isLoading = true;
    this.clienteService.page = this.currentPage;
    this.clienteService.pageSize = this.itemsPerPage;
    this.clienteService.searchTerm = this.searchTerm;

    this.clienteService.clienteData$.subscribe({
      next: (clientes) => {
        this.clientes = clientes;
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });

    this.clienteService.total$.subscribe({
      next: (total) => {
        this.totalItems = total;
        this.totalPages = Math.ceil(total / this.itemsPerPage);
        this.cdr.detectChanges();
      }
    });
  }

  loadStats() {
    this.clienteService.getClienteStats().subscribe({
      next: (stats) => {
        this.stats = {
          totalClientes: stats.totalClientes,
          clientesActivos: stats.clientesActivos,
          clientesInactivos: stats.clientesInactivos
        };
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar estadísticas:', error);
      }
    });
  }

  applyFilters() {
    this.currentPage = 1;
    this.loadClientes();
  }

  clearFilters() {
    this.searchTerm = '';
    this.estadoFilter = '';
    this.currentPage = 1;
    this.loadClientes();
  }

  toggleEstado(cliente: Cliente) {
    const nuevoEstado = !cliente.estado;
    const mensaje = nuevoEstado ? 'activar' : 'desactivar';
    
    if (confirm(`¿Está seguro de ${mensaje} este cliente?`)) {
      const action = nuevoEstado ? 
        this.clienteService.activateCliente(cliente.id) : 
        this.clienteService.deactivateCliente(cliente.id);
      
      action.subscribe({
        next: () => {
          this.toastr.success(`Cliente ${nuevoEstado ? 'activado' : 'desactivado'} exitosamente`, 'Éxito');
          this.loadClientes();
          this.loadStats();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || `Error al ${mensaje} cliente`;
          this.toastr.error(errorMsg, 'Error');
        }
      });
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadClientes();
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
