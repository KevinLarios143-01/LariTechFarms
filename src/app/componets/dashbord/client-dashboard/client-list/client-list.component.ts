import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbDateStruct, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../../../../shared/services/cliente.service';
import { Cliente, UpdateClienteRequest } from '../../../../shared/interfaces/cliente';

interface ClienteDisplay {
  id: number;
  No: string;
  name: string;
  img: string;
  email: string;
  project: number;
  statusText: string;
  status: string;
}

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [SharedModule,NgSelectModule,MaterialModuleModule,FlatpickrModule,RouterModule,ReactiveFormsModule,NgbModule],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
  providers: [
    FlatpickrDefaults,
  ],
})
export class ClientListComponent implements OnInit {
  model!: NgbDateStruct;
  model1!: NgbDateStruct;
  model2!: NgbDateStruct;
  model3!: NgbDateStruct;
  displayedColumns: string[] = ['ID', 'Name', 'Email', 'Projects', 'Status', 'Action'];
  dataSource: MatTableDataSource<ClienteDisplay>;
  clientes: Cliente[] = [];
  filteredClientes: Cliente[] = [];
  loading = false;
  editForm: FormGroup;
  selectedCliente: Cliente | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private readonly modalService: NgbModal,
    private readonly clienteService: ClienteService,
    private readonly fb: FormBuilder,
    private readonly toastr: ToastrService
  ) {
    this.dataSource = new MatTableDataSource<ClienteDisplay>([]);
    this.editForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      nit: ['', Validators.required]
    });
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
  toggleClienteStatus(cliente: Cliente) {
    const isActive = cliente.activo;
    const action = isActive ? 'desactivar' : 'activar';
    
    if (confirm(`¿Está seguro de que desea ${action} este cliente?`)) {
      const serviceCall = isActive 
        ? this.clienteService.deactivateCliente(cliente.id)
        : this.clienteService.activateCliente(cliente.id);
        
      serviceCall.subscribe({
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
    this.modalService.open(editContent, {windowClass : 'modalCusSty modal-lg' });
  }

  onUpdateCliente(): void {
    if (this.editForm.valid && this.selectedCliente) {
      this.loading = true;
      const updateData: UpdateClienteRequest = this.editForm.value;
      
      this.clienteService.updateCliente(this.selectedCliente.id, updateData).subscribe({
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
  open(content:any) {
    this.modalService.open(content, {windowClass : 'modalCusSty',size:'lg' })
  }

  ngOnInit(): void {
    this.loadClientes();
    this.initializeFlatpickr();
  }

  private loadClientes(): void {
    this.loading = true;
    this.clienteService.getClientes().subscribe({
      next: (response) => {
        const clientesData = response?.data?.data || response?.data || response || [];
        this.clientes = Array.isArray(clientesData) ? clientesData : [];
        this.filteredClientes = [...this.clientes];
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading clientes:', error);
        this.clientes = [];
        this.filteredClientes = [];
        this.loading = false;
      }
    });
  }

  private mapClientesToDisplay(clientes: Cliente[]): ClienteDisplay[] {
    if (!clientes || !Array.isArray(clientes)) {
      console.warn('Clientes is not an array:', clientes);
      return [];
    }
    return clientes.map((cliente, index) => ({
      id: cliente.id,
      No: `#CLT-${String(cliente.id).padStart(3, '0')}`,
      name: cliente.nombre || 'Sin nombre',
      img: cliente.img || './assets/images/laritechfarms/2.jpg',
      email: cliente.correo || cliente.email || '',
      project: cliente.proyectos || cliente._count?.proyectos || 0,
      statusText: cliente.estado || cliente.activo ? 'Active' : 'InActive',
      status: cliente.estado || cliente.activo ? 'success' : 'danger'
    }));
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
