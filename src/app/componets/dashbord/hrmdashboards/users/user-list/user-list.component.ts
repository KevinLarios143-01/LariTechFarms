import { AsyncPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../../../../../shared/services/usuario.service';
import { Usuario, UsuarioStats } from '../../../../../shared/interfaces/usuario';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SharedModule, RouterModule, NgSelectModule, AsyncPipe, DatePipe],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UsuarioService, DecimalPipe]
})
export class UserListComponent implements OnInit {
  userList$!: Observable<Usuario[]>;
  total$!: Observable<number>;
  loading$!: Observable<boolean>;
  stats$!: Observable<UsuarioStats>;
  stats: UsuarioStats | null = null;

  constructor(
    public userService: UsuarioService,
    private readonly toastr: ToastrService
  ) {
    this.userList$ = userService.userData$;
    this.total$ = userService.total$;
    this.loading$ = userService.loading$;
    this.obtenerStats();
  }

  obtenerStats() {
    this.stats$ = this.userService.getUserStats();
    this.stats$.subscribe({
      next: (stats: UsuarioStats) => {
        console.log('Stats received:', stats);
        this.stats = stats;
      },
      error: (err) => console.error('Error fetching stats:', err)
    });
  }

  ngOnInit(): void {
  }

  toggleUsuarioStatus(usuario: Usuario) {
    const isActive = usuario.activo;
    const action = isActive ? 'desactivar' : 'activar';
    
    if (confirm(`¿Está seguro de que desea ${action} este usuario?`)) {
      const serviceCall = isActive 
        ? this.userService.deactivateUsuario(usuario.id)
        : this.userService.activateUsuario(usuario.id);
        
      serviceCall.subscribe({
        next: () => {
          this.toastr.success(`Usuario ${action}do exitosamente`, 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          // Recargar la lista
          this.userService['_search$'].next();
        },
        error: (error) => {
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
