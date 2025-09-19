import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { UsuarioService } from '../../../../../shared/services/usuario.service';
import { EmpleadoService } from '../../../../../shared/services/empleado.service';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from '../../../../../shared/interfaces/empleado';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  isLoading = false;
  empleados: Empleado[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly usuarioService: UsuarioService,
    private readonly empleadoService: EmpleadoService,
    private readonly toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadEmpleados();
  }

  initForm() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      rol: ['', [Validators.required]],
      id_empleado: [null]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.isLoading = true;
      this.usuarioService.crearUsuario(this.userForm.value).subscribe({
        next: (response) => {
          this.toastr.success('Usuario creado exitosamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.router.navigate(['/dashboard/hrmdashboards/users/user-list']);
        },
        error: (error) => {
          console.error('Error al crear usuario:', error);
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
          
          this.toastr.error('Error al crear usuario: ' + errorMessage, 'Error', {
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

  private markFormGroupTouched(): void {
    Object.keys(this.userForm.controls).forEach(key => {
      const control = this.userForm.get(key);
      control?.markAsTouched();
    });
  }

  loadEmpleados() {
    this.empleadoService.getEmpleados().subscribe({
      next: (empleados) => {
        this.empleados = empleados;
      },
      error: (error) => {
        console.error('Error al cargar empleados:', error);
        this.toastr.error('Error al cargar la lista de empleados', 'Error');
      }
    });
  }

  onCancel() {
    this.router.navigate(['/dashboard/hrmdashboards/users/user-list']);
  }
}
