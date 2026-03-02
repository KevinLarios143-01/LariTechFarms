import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../../../../../shared/services/cliente.service';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-edit-cliente',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, SharedModule],
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.scss']
})
export class EditClienteComponent implements OnInit {
  clienteForm: FormGroup;
  isLoading = false;
  clienteId!: number;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
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

  ngOnInit() {
    this.clienteId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCliente();
  }

  loadCliente() {
    this.isLoading = true;
    this.clienteService.getClienteById(this.clienteId).subscribe({
      next: (response) => {
        if (response?.data) {
          const cliente = response.data;
          this.clienteForm.patchValue({
            nombre: cliente.nombre,
            telefono: cliente.telefono || '',
            correo: cliente.correo || '',
            direccion: cliente.direccion || '',
            nit: cliente.nit || ''
          });
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error('Error al cargar el cliente', 'Error');
        this.router.navigate(['../list'], { relativeTo: this.route });
      }
    });
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      this.isLoading = true;
      const formData = this.clienteForm.value;

      const updateData = {
        nombre: formData.nombre,
        telefono: formData.telefono || undefined,
        correo: formData.correo || undefined,
        direccion: formData.direccion || undefined,
        nit: formData.nit || undefined
      };

      this.clienteService.actualizarCliente(this.clienteId, updateData).subscribe({
        next: (response) => {
          this.toastr.success('Cliente actualizado exitosamente', 'Éxito');
          setTimeout(() => {
            this.router.navigate(['/dashboard/business-dashboard/clientes/list']);
          }, 1000);
        },
        error: (error) => {
          const errorMsg = error?.error?.message || 'Error al actualizar cliente';
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
