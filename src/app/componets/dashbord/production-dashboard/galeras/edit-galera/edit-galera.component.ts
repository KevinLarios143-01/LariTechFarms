import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { GaleraService, UpdateGaleraDTO } from '../../../../../shared/services/galera.service';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-galera',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, SharedModule],
  templateUrl: './edit-galera.component.html',
  styleUrls: ['./edit-galera.component.scss']
})
export class EditGaleraComponent implements OnInit {
  galeraForm: FormGroup;
  isSubmitting = false;
  isLoading = true;
  galeraId!: number;

  constructor(
    private fb: FormBuilder,
    private galeraService: GaleraService,
    private router: Router,
    private route: ActivatedRoute,
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

  ngOnInit() {
    this.galeraId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadGalera();
  }

  loadGalera() {
    this.galeraService.getGaleraById(this.galeraId).subscribe({
      next: (response) => {
        const galera = response.data;
        this.galeraForm.patchValue({
          nombre: galera.nombre,
          tipo: galera.tipo || 'Ponedoras',
          capacidad: galera.capacidad,
          ubicacion: galera.ubicacion,
          estado: galera.estado || 'Activa',
          observaciones: galera.observaciones
        });
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar galera:', error);
        this.toastr.error('No se pudo cargar la galera', 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.isLoading = false;
        this.cdr.detectChanges();
        this.router.navigate(['/dashboard/production-dashboard/galeras']);
      }
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
    const galeraData: UpdateGaleraDTO = this.galeraForm.value;

    this.galeraService.updateGalera(this.galeraId, galeraData).subscribe({
      next: (response) => {
        this.toastr.success('La galera ha sido actualizada exitosamente', 'Galera Actualizada', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.router.navigate(['/dashboard/production-dashboard/galeras']);
      },
      error: (error) => {
        console.error('Error al actualizar galera:', error);
        const errorMessage = error.error?.error || 'No se pudo actualizar la galera';
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
