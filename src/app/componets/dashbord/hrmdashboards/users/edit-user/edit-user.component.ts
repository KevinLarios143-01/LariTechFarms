import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { UsuarioService } from '../../../../../shared/services/usuario.service';
import { EmpleadoService } from '../../../../../shared/services/empleado.service';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from '../../../../../shared/interfaces/empleado';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userForm!: FormGroup;
  isLoading = false;
  empleados: Empleado[] = [];
  userId!: string;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly usuarioService: UsuarioService,
    private readonly empleadoService: EmpleadoService,
    private readonly toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.initForm();
    this.loadEmpleados();
    this.loadUser();
  }

  initForm() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      rol: ['', [Validators.required]],
      idEmpleado: [null]
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

  loadUser() {
    this.isLoading = true;
    this.usuarioService.obtenerUsuario(this.userId).subscribe({
      next: (response) => {
        const user = response.data;
        this.userForm.patchValue({
          email: user.email,
          nombre: user.nombre,
          apellido: user.apellido,
          rol: user.rol,
          idEmpleado: user.idEmpleado
        });
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar usuario:', error);
        this.toastr.error('Error al cargar el usuario', 'Error');
        this.isLoading = false;
      }
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.isLoading = true;
      
      this.usuarioService.actualizarUsuario(this.userId, this.userForm.value).subscribe({
        next: (response) => {
          this.toastr.success('Usuario actualizado exitosamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.router.navigate(['/dashboard/hrmdashboards/users/user-list']);
        },
        error: (error) => {
          console.error('Error al actualizar usuario:', error);
          this.toastr.error('Error al actualizar usuario: ' + (error.error?.message || 'Error desconocido'), 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.isLoading = false;
        }
      });
    }
  }

  onCancel() {
    this.router.navigate(['/dashboard/hrmdashboards/users/user-list']);
  }
}