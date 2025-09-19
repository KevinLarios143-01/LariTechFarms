import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { Usuario, UsuarioByIdResponse } from '../../../../../shared/interfaces/usuario';
import { UsuarioService } from '../../../../../shared/services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [SharedModule, DatePipe],
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  user: Usuario | null = null;
  loading = true;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly usuariosService: UsuarioService,
    private readonly toastr: ToastrService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    const userId = this.route.snapshot.paramMap.get('id');
    console.log('Loading user with ID:', userId);
    
    if (userId) {
      this.loading = true;
      this.usuariosService.obtenerUsuario(userId).subscribe({
        next: (response: UsuarioByIdResponse) => {
          console.log('User response received:', response);
          this.user = response.data;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error: any) => {
          console.error('Error al cargar usuario:', error);
          this.loading = false;
          this.cdr.detectChanges();
          this.toastr.error('Error al cargar el usuario', 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        }
      });
    } else {
      console.error('No user ID found in route');
      this.loading = false;
      this.cdr.detectChanges();
    }
  }

  onEdit() {
    if (this.user?.id) {
      this.router.navigate(['/dashboard/hrmdashboards/users/edit-user', this.user.id]);
    }
  }

  onToggleStatus() {
    if (this.user?.id) {
      const isActive = this.user.activo;
      const action = isActive ? 'desactivar' : 'activar';
      
      if (confirm(`¿Está seguro de que desea ${action} este usuario?`)) {
        const serviceCall = isActive 
          ? this.usuariosService.deactivateUsuario(this.user.id)
          : this.usuariosService.activateUsuario(this.user.id);
          
        serviceCall.subscribe({
          next: () => {
            this.toastr.success(`Usuario ${action}do exitosamente`, 'Éxito', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
            this.loadUser();
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
            
            this.toastr.error(`Error al ${action} el usuario: ${errorMessage}`, 'Error', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
          }
        });
      }
    }
  }

  onBack() {
    this.router.navigate(['/dashboard/hrmdashboards/users/user-list']);
  }
}
