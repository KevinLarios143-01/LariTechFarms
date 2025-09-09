import { AsyncPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
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

  constructor(public userService: UsuarioService) {
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

  deleteData(id: number) {
    console.log('Eliminar usuario:', id);
  }
}
