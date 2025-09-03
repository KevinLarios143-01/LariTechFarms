import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { Usuario } from '../../../../../shared/interfaces/usuario';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  user: Usuario | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    this.user = {
      id_usuario: 1,
      id_tenant: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'juan.perez@ejemplo.com',
      telefono: '+1234567890',
      rol: 'admin',
      activo: true,
      fecha_creacion: '2024-01-15',
      ultimo_acceso: '2024-01-20',
      img: './assets/images/users/1.jpg'
    };
  }

  onEdit() {
    console.log('Editar usuario:', this.user?.id_usuario);
  }

  onDelete() {
    if (confirm('¿Está seguro de eliminar este usuario?')) {
      console.log('Eliminar usuario:', this.user?.id_usuario);
      this.router.navigate(['/dashboard/hrmdashboards/users/user-list']);
    }
  }

  onBack() {
    this.router.navigate(['/dashboard/hrmdashboards/users/user-list']);
  }
}
