import { ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../../../../shared/services/cliente.service';
import { Cliente, UpdateClienteRequest } from '../../../../shared/interfaces/cliente';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [SharedModule, NgSelectModule, RouterModule, ReactiveFormsModule, FormsModule, NgbModule],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly cdr = inject(ChangeDetectorRef);

  clientes: Cliente[] = [];
  loading = false;
  editForm: FormGroup;
  selectedCliente: Cliente | null = null;
  searchTerm = '';
  estadoFilter = '';

  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;
  Math = Math;

  // Stats
  stats = { totalClientes: 0, clientesActivos: 0, clientesInactivos: 0 };

  constructor(
    private readonly modalService: NgbModal,
    private readonly clienteService: ClienteService,
    private readonly fb: FormBuilder,
    private readonly toastr: ToastrService
  ) {
    this.editForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      nit: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadClientes();
    this.loadStats();
  }

  private loadClientes(): void {
    this.loading = true;
    const params: any = { page: this.currentPage, limit: this.pageSize };
    if (this.searchTerm) params.search = this.searchTerm;
    if (this.estadoFilter) params.estado = this.estadoFilter === 'activo' ? 'true' : 'false';

    this.clienteService.getClientesWithParams(params).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response: any) => {
        console.log('loadClientes response:', response);
        // Handle both formats: { success, data: { data, pagination } } and { data, pagination }
        const nested = response?.data?.data;
        const direct = response?.data;
        this.clientes = Array.isArray(nested) ? nested : (Array.isArray(direct) ? direct : []);
        console.log('clientes parsed:', this.clientes.length);

        const pagination = response?.data?.pagination || response?.pagination;
        this.totalItems = pagination?.total || 0;
        this.totalPages = pagination?.totalPages || Math.ceil(this.totalItems / this.pageSize);
        console.log('pagination:', this.totalItems, 'pages:', this.totalPages);
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('loadClientes error:', err);
        this.clientes = [];
        this.totalItems = 0;
        this.totalPages = 0;
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  private loadStats(): void {
    this.clienteService.getClienteStats().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (stats) => {
        this.stats = {
          totalClientes: stats.totalClientes || 0,
          clientesActivos: stats.clientesActivos || 0,
          clientesInactivos: stats.clientesInactivos || 0
        };
        this.cdr.detectChanges();
      },
      error: () => {}
    });
  }

  applyFilters(): void {
    this.currentPage = 1;
    this.loadClientes();
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.estadoFilter = '';
    this.currentPage = 1;
    this.loadClientes();
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

  toggleClienteStatus(cliente: Cliente): void {
    const isActive = cliente.estado;
    const action = isActive ? 'desactivar' : 'activar';

    if (confirm(`¿Está seguro de que desea ${action} este cliente?`)) {
      const serviceCall = isActive
        ? this.clienteService.deactivateCliente(cliente.id)
        : this.clienteService.activateCliente(cliente.id);

      serviceCall.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.toastr.success(`Cliente ${action}do exitosamente`, 'Éxito');
          this.loadClientes();
          this.loadStats();
        },
        error: (error: any) => {
          const errorMessage = error.error?.message || error.error?.error || 'Error desconocido';
          this.toastr.error(`Error al ${action} el cliente: ${errorMessage}`, 'Error');
        }
      });
    }
  }

  edit(editContent: any, cliente: Cliente): void {
    this.selectedCliente = cliente;
    this.editForm.patchValue({
      nombre: cliente.nombre,
      telefono: cliente.telefono,
      correo: cliente.correo,
      direccion: cliente.direccion,
      nit: cliente.nit
    });
    this.modalService.open(editContent, { windowClass: 'modalCusSty modal-lg' });
  }

  onUpdateCliente(): void {
    if (this.editForm.valid && this.selectedCliente) {
      this.loading = true;
      const updateData: UpdateClienteRequest = this.editForm.value;

      this.clienteService.actualizarCliente(this.selectedCliente.id, updateData).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.toastr.success('Cliente actualizado exitosamente', 'Éxito');
          this.loadClientes();
          this.modalService.dismissAll();
          this.loading = false;
        },
        error: (error) => {
          this.toastr.error('Error al actualizar: ' + (error.error?.message || 'Error desconocido'), 'Error');
          this.loading = false;
        }
      });
    } else {
      this.toastr.warning('Complete todos los campos requeridos', 'Advertencia');
      Object.keys(this.editForm.controls).forEach(key => this.editForm.get(key)?.markAsTouched());
    }
  }
}
