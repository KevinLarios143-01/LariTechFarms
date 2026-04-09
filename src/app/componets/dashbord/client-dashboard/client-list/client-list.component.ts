import { ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgbDateStruct, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Cliente, UpdateClienteRequest } from '../../../../shared/interfaces/cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [SharedModule, NgSelectModule, FlatpickrModule, RouterModule, ReactiveFormsModule, FormsModule, NgbModule],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
  providers: [
    FlatpickrDefaults,
  ],
})
export class ClientListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  model!: NgbDateStruct;
  model1!: NgbDateStruct;
  model2!: NgbDateStruct;
  model3!: NgbDateStruct;
  clientes: Cliente[] = [];
  filteredClientes: Cliente[] = [];
  loading = false;
  editForm: FormGroup;
  selectedCliente: Cliente | null = null;

  // Pagination properties
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;
  Math = Math;

  private readonly cdr = inject(ChangeDetectorRef);

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


  toggleClienteStatus(cliente: Cliente) {
    const isActive = cliente.estado;
    const action = isActive ? 'desactivar' : 'activar';

    if (confirm(`¿Está seguro de que desea ${action} este cliente?`)) {
      const serviceCall = isActive
        ? this.clienteService.deactivateCliente(cliente.id)
        : this.clienteService.activateCliente(cliente.id);

      serviceCall.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.toastr.success(`Cliente ${action}do exitosamente`, 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.loadClientes();
        },
        error: (error: any) => {
          console.error('Error response:', error);
          let errorMessage = 'Error desconocido';

          if (error.error?.message) {
            errorMessage = error.error.message;
          } else if (error.error?.error) {
            errorMessage = error.error.error;
          } else if (error.message) {
            errorMessage = error.message;
          } else if (typeof error.error === 'string') {
            errorMessage = error.error;
          }

          this.toastr.error(`Error al ${action} el cliente: ${errorMessage}`, 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        }
      });
    }
  }
  edit(editContent: any, cliente: Cliente) {
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

      this.clienteService.updateCliente(this.selectedCliente.id, updateData).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: (response) => {
          this.toastr.success('Cliente actualizado exitosamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.loadClientes();
          this.modalService.dismissAll();
          this.loading = false;
        },
        error: (error) => {
          this.toastr.error('Error al actualizar el cliente: ' + (error.error?.message || 'Error desconocido'), 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.loading = false;
        }
      });
    } else {
      this.toastr.warning('Por favor, complete todos los campos requeridos', 'Advertencia', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
      });
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.editForm.controls).forEach(key => {
      const control = this.editForm.get(key);
      control?.markAsTouched();
    });
  }
  open(content: any) {
    this.modalService.open(content, { windowClass: 'modalCusSty', size: 'lg' })
  }

  ngOnInit(): void {
    this.loadClientes();
    this.initializeFlatpickr();
  }

  private loadClientes(): void {
    this.loading = true;
    this.clienteService.getClientes(this.currentPage, this.pageSize).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        const clientesData = response?.data?.data || response?.data || response || [];
        this.clientes = Array.isArray(clientesData) ? clientesData : [];
        this.filteredClientes = [...this.clientes];

        // Extract pagination metadata
        const pagination = response?.data?.pagination;
        if (pagination) {
          this.totalItems = pagination.total || 0;
          this.totalPages = pagination.totalPages || Math.ceil(this.totalItems / this.pageSize);
        } else {
          // Fallback: if no pagination metadata, calculate from total array length
          this.totalItems = this.clientes.length;
          this.totalPages = Math.ceil(this.totalItems / this.pageSize);
        }

        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading clientes:', error);
        this.clientes = [];
        this.filteredClientes = [];
        this.totalItems = 0;
        this.totalPages = 0;
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
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

  private initializeFlatpickr(): void {
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
    };

    flatpickr('#inlinetime', this.flatpickrOptions);

    this.flatpickrOptions = {
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      defaultDate: '2023-11-07 14:30',
    };

    flatpickr('#pretime', this.flatpickrOptions);
  }

  inlineDatePicker: boolean = false;
  weekNumbers!: true
  // selectedDate: Date | null = null;
  flatpickrOptions: any = {
    inline: true,

  };
}
