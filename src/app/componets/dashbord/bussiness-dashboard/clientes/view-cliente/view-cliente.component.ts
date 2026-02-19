import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../../../../../shared/services/cliente.service';
import { Cliente } from '../../../../../shared/interfaces/cliente';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-view-cliente',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './view-cliente.component.html',
  styleUrls: ['./view-cliente.component.scss']
})
export class ViewClienteComponent implements OnInit {
  cliente: Cliente | null = null;
  isLoading = false;
  clienteId!: number;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.clienteId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCliente();
  }

  loadCliente() {
    this.isLoading = true;
    this.clienteService.getClienteById(this.clienteId).subscribe({
      next: (response) => {
        if (response?.data) {
          this.cliente = response.data;
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error('Error al cargar el cliente', 'Error');
        this.router.navigate(['../list'], { relativeTo: this.route });
      }
    });
  }

  toggleEstado() {
    if (!this.cliente) return;
    
    const nuevoEstado = !this.cliente.activo;
    const mensaje = nuevoEstado ? 'activar' : 'desactivar';
    
    if (confirm(`¿Está seguro de ${mensaje} este cliente?`)) {
      const action = nuevoEstado ? 
        this.clienteService.activateCliente(this.clienteId) : 
        this.clienteService.deactivateCliente(this.clienteId);
      
      action.subscribe({
        next: () => {
          this.toastr.success(`Cliente ${nuevoEstado ? 'activado' : 'desactivado'} exitosamente`, 'Éxito');
          this.loadCliente();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || `Error al ${mensaje} cliente`;
          this.toastr.error(errorMsg, 'Error');
        }
      });
    }
  }
}
