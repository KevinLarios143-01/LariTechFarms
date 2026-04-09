import { Component, DestroyRef, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { GaleraService, Galera } from '../../../../../shared/services/galera.service';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-galera-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './galera-list.component.html',
  styleUrls: ['./galera-list.component.scss']
})
export class GaleraListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  galeras: Galera[] = [];
  isLoading = false;
  
  // Paginación
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;
  
  // Filtros
  searchTerm = '';
  estadoFilter = '';
  tipoFilter = '';

  // Para usar Math en el template
  Math = Math;

  constructor(
    private galeraService: GaleraService,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadGaleras();
  }

  loadGaleras() {
    this.isLoading = true;
    
    const params: any = {
      page: this.currentPage,
      limit: this.pageSize
    };
    
    if (this.searchTerm) {
      params.search = this.searchTerm;
    }
    
    if (this.estadoFilter) {
      params.estado = this.estadoFilter;
    }
    
    if (this.tipoFilter) {
      params.tipo = this.tipoFilter;
    }
    
    this.galeraService.getGaleras(params).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        this.galeras = response.data?.data || [];
        this.totalItems = response.data?.pagination?.total || 0;
        this.totalPages = response.data?.pagination?.totalPages || 0;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar galeras:', error);
        this.toastr.error('No se pudieron cargar las galeras', 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  onSearch() {
    this.currentPage = 1;
    this.loadGaleras();
  }

  onFilterChange() {
    this.currentPage = 1;
    this.loadGaleras();
  }

  clearFilters() {
    this.searchTerm = '';
    this.estadoFilter = '';
    this.tipoFilter = '';
    this.currentPage = 1;
    this.loadGaleras();
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadGaleras();
    }
  }

  onPageSizeChange(newSize: number): void {
    this.pageSize = newSize;
    this.currentPage = 1;
    this.loadGaleras();
  }

  deleteGalera(id: number, nombre: string) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Deseas eliminar la galera "${nombre}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.galeraService.deleteGalera(id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
          next: () => {
            this.toastr.success('La galera ha sido eliminada', 'Galera Eliminada', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
            this.loadGaleras();
          },
          error: (error) => {
            console.error('Error al eliminar galera:', error);
            this.toastr.error('No se pudo eliminar la galera', 'Error', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
          }
        });
      }
    });
  }

  getEstadoBadge(estado: string): string {
    const badges: { [key: string]: string } = {
      'Activa': 'bg-success',
      'Inactiva': 'bg-secondary',
      'Mantenimiento': 'bg-warning'
    };
    return badges[estado] || 'bg-secondary';
  }

  getTipoBadge(tipo: string): string {
    const badges: { [key: string]: string } = {
      'Ponedoras': 'bg-primary',
      'Pollos': 'bg-info',
      'Mixta': 'bg-purple text-white'
    };
    return badges[tipo] || 'bg-secondary';
  }
}
