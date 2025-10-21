import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateClienteRequest } from '../../../../shared/interfaces/cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-new-client',
  standalone: true,
  imports: [CommonModule, SharedModule, NgSelectModule, FlatpickrModule, RouterModule, ReactiveFormsModule],
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss'],
  providers: [
    FlatpickrDefaults,
  ],
})
export class NewClientComponent implements OnInit {
  clienteForm: FormGroup;
  loading = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly clienteService: ClienteService,
    private readonly router: Router,
    private readonly toastr: ToastrService
  ) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      nit: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.initializeFlatpickr();
  }

  onSubmit(): void {
    if (this.clienteForm.valid) {
      this.loading = true;
      const clienteData: CreateClienteRequest = this.clienteForm.value;

      this.clienteService.createCliente(clienteData).subscribe({
        next: (response) => {
          this.toastr.success('Cliente creado exitosamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.router.navigate(['/dashboard/client-dashboard/client-list']);
        },
        error: (error) => {
          this.toastr.error('Error al crear el cliente: ' + (error.error?.message || 'Error desconocido'), 'Error', {
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

  onCancel(): void {
    this.router.navigate(['/dashboard/client-dashboard/client-list']);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.clienteForm.controls).forEach(key => {
      const control = this.clienteForm.get(key);
      control?.markAsTouched();
    });
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
