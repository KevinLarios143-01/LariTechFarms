import { Component, DestroyRef, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
  private readonly destroyRef = inject(DestroyRef);
  clientes: Cliente[] = [];
  isLoading = false;
  searchTerm = '';
  estadoFilter = '';

  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;
  Math = Math;

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
    this.clienteService.pageSize = this.pageSize;
    this.clienteService.searchTerm = this.searchTerm;

    let params: any = {
      page: this.currentPage,
      limit: this.pageSize
    };

    if (this.searchTerm) {
      params.search = this.searchTerm;
    }

    if (this.estadoFilter) {
      params.estado = this.estadoFilter === 'activo' ? 'true' : 'false';
    }

    this.clienteService.getClientesWithParams(params).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        this.clientes = response.data.data;
        this.totalItems = response.data.pagination.total;
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
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
    this.clienteService.getClienteStats().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
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

      action.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
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

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadClientes();
    }
  }

  onPageSizeChange(newSize: number): void {
    this.pageSize = newSize;
    this.currentPage = 1;
    this.loadClientes();
  }
}
