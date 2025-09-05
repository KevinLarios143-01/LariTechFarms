import { Component, OnInit } from '@angular/core';
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
    private readonly toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.usuariosService.obtenerUsuario(userId).subscribe({
        next: (user: UsuarioByIdResponse) => {
          this.user = user.data;
          this.loading = false;

        },
        error: (error: any) => {
          console.error('Error al cargar usuario:', error);
          this.loading = false;
        }
      });
    }
  }

  onEdit() {
    if (this.user?.id) {
      this.router.navigate(['/dashboard/hrmdashboards/users/edit-user', this.user.id]);
    }
  }

  onDelete() {
    if (this.user?.id && confirm('¿Está seguro de eliminar este usuario?')) {
      this.usuariosService.eliminarUsuario(this.user.id.toString()).subscribe({
        next: () => {
          console.log('Usuario eliminado exitosamente');
          this.toastr.success('Usuario eliminado exitosamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.router.navigate(['/dashboard/hrmdashboards/users/user-list']);
        },
        error: (error: any) => {
          console.error('Error al eliminar usuario:', error);
          this.toastr.error('Error al eliminar usuario: ' + (error.error?.message || 'Error desconocido'), 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        }
      });
    }
  }

  onBack() {
    this.router.navigate(['/dashboard/hrmdashboards/users/user-list']);
  }
}
