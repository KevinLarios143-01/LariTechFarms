import { AsyncPipe, DatePipe, DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../../../../../shared/services/usuario.service';
import { Usuario, UsuarioStats } from '../../../../../shared/interfaces/usuario';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SharedModule, RouterModule, NgSelectModule, FormsModule, AsyncPipe, DatePipe],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UsuarioService, DecimalPipe]
})
export class UserListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly cdr = inject(ChangeDetectorRef);

  userList$!: Observable<Usuario[]>;
  total$!: Observable<number>;
  loading$!: Observable<boolean>;
  stats$!: Observable<UsuarioStats>;
  stats: UsuarioStats | null = null;

  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;
  Math = Math;

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
    this.stats$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (stats: UsuarioStats) => {
        this.stats = stats;
      },
      error: (err) => console.error('Error fetching stats:', err)
    });
  }

  ngOnInit(): void {
    this.total$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(total => {
      this.totalItems = total;
      this.totalPages = Math.ceil(total / this.pageSize);
      this.cdr.detectChanges();
    });
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.userService.page = this.currentPage;
      this.userService.pageSize = this.pageSize;
    }
  }

  onPageSizeChange(newSize: number): void {
    this.pageSize = newSize;
    this.currentPage = 1;
    this.userService.page = 1;
    this.userService.pageSize = this.pageSize;
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
