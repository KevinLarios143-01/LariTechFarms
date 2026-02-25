import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { PuestoService, Puesto } from './puesto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-puesto-list',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule, FormsModule, NgSelectModule],
  templateUrl: './puesto-list.component.html',
  styleUrls: ['./puesto-list.component.scss']
})
export class PuestoListComponent implements OnInit {
  puestos: Puesto[] = [];
  isLoading = false;
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;
  searchTerm = '';
  Math = Math;
  Number = Number;

  constructor(private puestoService: PuestoService) {}

  ngOnInit() {
    this.loadPuestos();
  }

  loadPuestos() {
    this.isLoading = true;
    const params = {
      page: this.currentPage,
      limit: this.pageSize,
      ...(this.searchTerm && { search: this.searchTerm })
    };

    this.puestoService.getPuestos(params).subscribe({
      next: (response) => {
        if (response.success) {
          this.puestos = response.data.data;
          this.totalItems = response.data.pagination.total;
          this.totalPages = response.data.pagination.totalPages;
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar puestos:', error);
        Swal.fire('Error', 'No se pudieron cargar los puestos', 'error');
        this.isLoading = false;
      }
    });
  }

  onSearch() {
    this.currentPage = 1;
    this.loadPuestos();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadPuestos();
  }

  deletePuesto(puesto: Puesto) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Deseas eliminar el puesto "${puesto.nombre}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.puestoService.deletePuesto(puesto.id).subscribe({
          next: (response) => {
            Swal.fire('Eliminado', response.message, 'success');
            this.loadPuestos();
          },
          error: (error) => {
            const message = error.error?.error || 'No se pudo eliminar el puesto';
            Swal.fire('Error', message, 'error');
          }
        });
      }
    });
  }

  toggleActivo(puesto: Puesto) {
    const newStatus = !puesto.activo;
    this.puestoService.updatePuesto(puesto.id, { activo: newStatus }).subscribe({
      next: (response) => {
        puesto.activo = newStatus;
        Swal.fire(
          'Actualizado',
          `Puesto ${newStatus ? 'activado' : 'desactivado'} exitosamente`,
          'success'
        );
      },
      error: (error) => {
        Swal.fire('Error', 'No se pudo actualizar el estado', 'error');
      }
    });
  }
}
