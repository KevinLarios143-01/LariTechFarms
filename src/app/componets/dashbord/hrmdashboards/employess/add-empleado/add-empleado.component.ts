import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from '../../../../../shared/services/empleado.service';

@Component({
  selector: 'app-add-empleado',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.scss']
})
export class AddEmpleadoComponent implements OnInit {
  employeeForm!: FormGroup;
  isLoading = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly empleadoService: EmpleadoService,
    private readonly toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.employeeForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      puesto: ['', [Validators.required]],
      departamento: [''],
      fechaContratacion: ['', [Validators.required]],
      salario: ['', [Validators.required, Validators.min(0)]],
      genero: ['', [Validators.required]],
      estadoCivil: [''],
      direccion: [''],
      tipoContrato: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.isLoading = true;
      this.empleadoService.createEmpleado(this.employeeForm.value).subscribe({
        next: (response) => {
          this.toastr.success('Empleado creado exitosamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.router.navigate(['/dashboard/hrmdashboards/employees/employee-list']);
        },
        error: (error) => {
          console.error('Error al crear empleado:', error);
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
          
          this.toastr.error('Error al crear empleado: ' + errorMessage, 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.isLoading = false;
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

  onCancel() {
    this.router.navigate(['/dashboard/hrmdashboards/employees/employee-list']);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.employeeForm.controls).forEach(key => {
      const control = this.employeeForm.get(key);
      control?.markAsTouched();
    });
  }
}