import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { GastoOperacionService } from '../../../../../shared/services/gasto-operacion.service';
import { CreateGastoOperacionDTO } from '../../../../../shared/interfaces/gasto-operacion';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-add-gasto',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgSelectModule, SharedModule],
  templateUrl: './add-gasto.component.html',
  styleUrls: ['./add-gasto.component.scss']
})
export class AddGastoComponent implements OnInit {
  gastoForm: FormGroup;
  isLoading = false;

  categorias = ['Mantenimiento', 'Servicios', 'Insumos', 'Personal', 'Transporte', 'Limpieza', 'Combustible', 'Medicamentos'];
  metodosPago = ['Efectivo', 'Transferencia', 'Tarjeta', 'Cheque'];

  constructor(
    private fb: FormBuilder,
    private gastoService: GastoOperacionService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {
    this.gastoForm = this.fb.group({
      fecha: ['', Validators.required],
      categoria: ['', Validators.required],
      descripcion: ['', Validators.required],
      monto: ['', [Validators.required, Validators.min(0.01)]],
      metodoPago: ['']
    });
  }

  ngOnInit() {
    // Set fecha actual por defecto
    const today = new Date().toISOString().split('T')[0];
    this.gastoForm.patchValue({ fecha: today });
  }

  onSubmit() {
    if (this.gastoForm.valid) {
      this.isLoading = true;
      const formData = this.gastoForm.value;

      const createData: CreateGastoOperacionDTO = {
        fecha: formData.fecha,
        categoria: formData.categoria,
        descripcion: formData.descripcion,
        monto: parseFloat(formData.monto),
        metodoPago: formData.metodoPago || undefined
      };

      this.gastoService.createGasto(createData).subscribe({
        next: (response) => {
          this.toastr.success('Gasto registrado exitosamente', 'Éxito');
          setTimeout(() => {
            this.router.navigate(['/dashboard/production-dashboard/gastos-operacion/list']);
          }, 1000);
        },
        error: (error) => {
          const errorMsg = error?.error?.message || 'Error al registrar gasto';
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
    Object.keys(this.gastoForm.controls).forEach(key => {
      const control = this.gastoForm.get(key);
      control?.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.gastoForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.gastoForm.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return `${fieldName} es requerido`;
      if (field.errors['min']) return `${fieldName} debe ser mayor o igual a ${field.errors['min'].min}`;
    }
    return '';
  }
}
