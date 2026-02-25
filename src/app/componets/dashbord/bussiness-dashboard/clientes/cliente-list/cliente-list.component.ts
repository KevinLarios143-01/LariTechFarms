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
  itemsPerPage = 100;
  totalItems = 0;
  totalPages = 0;

  // Exponer Math para usar en el template
  protected readonly Math = Math;

  stats = {
    totalClientes: 0,
    clientesActivos: 0,
    clientesInactivos: 0
  };

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

    // Construir parámetros adicionales para el filtro de estado
    let params: any = {
      page: this.currentPage,
      limit: this.itemsPerPage
    };

    if (this.searchTerm) {
      params.search = this.searchTerm;
    }

    if (this.estadoFilter) {
      params.estado = this.estadoFilter === 'activo' ? 'true' : 'false';
    }

    // Hacer la petición directamente con los parámetros
    this.clienteService.getClientesWithParams(params).subscribe({
      next: (response) => {
        this.clientes = response.data.data;
        this.totalItems = response.data.pagination.total;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar clientes:', error);
        this.clientes = [];
        this.totalItems = 0;
        this.totalPages = 0;
        this.isLoading = false;
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

  onPageSizeChange() {
    this.currentPage = 1; // Resetear a la primera página
    this.loadClientes();
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
