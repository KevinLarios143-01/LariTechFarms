import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { GaleraService, CreateGaleraDTO } from '../../../../../shared/services/galera.service';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-galera',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, SharedModule],
  templateUrl: './add-galera.component.html',
  styleUrls: ['./add-galera.component.scss']
})
export class AddGaleraComponent {
  galeraForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private galeraService: GaleraService,
    private router: Router,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef
  ) {
    this.galeraForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      tipo: ['Ponedoras'],
      capacidad: [null, [Validators.min(1)]],
      ubicacion: ['', [Validators.maxLength(200)]],
      estado: ['Activa'],
      observaciones: ['']
    });
  }

  onSubmit() {
    if (this.galeraForm.invalid) {
      Object.keys(this.galeraForm.controls).forEach(key => {
        this.galeraForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    const galeraData: CreateGaleraDTO = this.galeraForm.value;

    this.galeraService.createGalera(galeraData).subscribe({
      next: (response) => {
        this.toastr.success('La galera ha sido creada exitosamente', 'Galera Creada', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.router.navigate(['/dashboard/production-dashboard/galeras']);
      },
      error: (error) => {
        console.error('Error al crear galera:', error);
        const errorMessage = error.error?.error || 'No se pudo crear la galera';
        this.toastr.error(errorMessage, 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.isSubmitting = false;
        this.cdr.detectChanges();
      }
    });
  }

  onCancel() {
    this.router.navigate(['/dashboard/production-dashboard/galeras']);
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.galeraForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.galeraForm.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return 'Este campo es requerido';
      if (field.errors['maxLength']) return `Máximo ${field.errors['maxLength'].requiredLength} caracteres`;
      if (field.errors['min']) return `El valor mínimo es ${field.errors['min'].min}`;
    }
    return '';
  }
}
