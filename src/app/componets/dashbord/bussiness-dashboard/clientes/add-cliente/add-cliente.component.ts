import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../../../../../shared/services/cliente.service';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-add-cliente',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, SharedModule],
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.scss']
})
export class AddClienteComponent implements OnInit {
  clienteForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: [''],
      correo: ['', Validators.email],
      direccion: [''],
      nit: ['']
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.clienteForm.valid) {
      this.isLoading = true;
      const formData = this.clienteForm.value;

      const createData = {
        nombre: formData.nombre,
        telefono: formData.telefono || undefined,
        correo: formData.correo || undefined,
        direccion: formData.direccion || undefined,
        nit: formData.nit || undefined
      };

      this.clienteService.crearCliente(createData).subscribe({
        next: (response) => {
          this.toastr.success('Cliente creado exitosamente', 'Éxito');
          setTimeout(() => {
            this.router.navigate(['/dashboard/bussiness-dashboard/clientes/list']);
          }, 1000);
        },
        error: (error) => {
          const errorMsg = error?.error?.message || 'Error al crear cliente';
          this.toastr.error(errorMsg, 'Error');
          this.isLoading = false;
          this.cdr.detectChanges();
        }
      });
    } else {
      this.markFormGroupTouched();
      this.toastr.warning('Por favor complete todos los campos requeridos', 'Advertencia');
    }
  }

  markFormGroupTouched() {
    Object.keys(this.clienteForm.controls).forEach(key => {
      const control = this.clienteForm.get(key);
      control?.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.clienteForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.clienteForm.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return `${fieldName} es requerido`;
      if (field.errors['email']) return 'Correo electrónico inválido';
    }
    return '';
  }
}
