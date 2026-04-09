import { Component, DestroyRef, inject, OnInit, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { HuevosService } from '../services/huevos.service';
import { LotesService } from '../../../bussiness-dashboard/lotes/services/lotes.service';
import { ControlHuevos } from '../interfaces/huevo.interface';
import { Lote } from '../../../bussiness-dashboard/lotes/interfaces/lote.interface';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-huevo-list',
  standalone: true,
  imports: [SharedModule, CommonModule, RouterModule, FormsModule, NgSelectModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './huevo-list.component.html',
  styleUrls: ['./huevo-list.component.scss']
})
export class HuevoListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  controles: ControlHuevos[] = [];
  filteredControles: ControlHuevos[] = [];
  lotes: Lote[] = [];
  isLoading = false;
  searchTerm = '';
  selectedLote = '';
  selectedCalidad = '';
  selectedFecha = '';
  calidades = ['Excelente', 'Buena', 'Regular', 'Mala'];

  // Paginación
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;
  Math = Math;

  constructor(
    private huevosService: HuevosService,
    private lotesService: LotesService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadControles();
    this.loadLotes();
  }

  loadControles() {
    this.isLoading = true;

    const params: any = {
      page: this.currentPage,
      limit: this.pageSize
    };

    if (this.searchTerm) {
      params.search = this.searchTerm;
    }

    if (this.selectedLote) {
      params.idLote = this.selectedLote;
    }

    if (this.selectedCalidad) {
      params.calidad = this.selectedCalidad;
    }

    if (this.selectedFecha) {
      params.fecha = this.selectedFecha;
    }

    this.huevosService.getControles(params).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        // Manejo robusto de diferentes estructuras de respuesta
        if (response?.data?.data && Array.isArray(response.data.data)) {
          this.controles = response.data.data;
        } else if (response?.data?.items && Array.isArray(response.data.items)) {
          this.controles = response.data.items;
        } else if (response?.data && Array.isArray(response.data)) {
          this.controles = response.data;
        } else if (Array.isArray(response)) {
          this.controles = response;
        } else {
          this.controles = [];
        }

        this.totalItems = response?.data?.pagination?.total || this.controles.length;
        this.totalPages = response?.data?.pagination?.totalPages || Math.ceil(this.totalItems / this.pageSize);
        this.filteredControles = [...this.controles];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.controles = [];
        this.filteredControles = [];
        this.totalItems = 0;
        this.totalPages = 0;
        this.toastr.error('Error al cargar controles de huevos', 'Error', {
          progressBar: true,
          closeButton: true
        });
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  loadLotes() {
    this.lotesService.getLotes().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        let allLotes: Lote[] = []
        
        // Manejo robusto de diferentes estructuras de respuesta
        if (response?.data?.data && Array.isArray(response.data.data)) {
          allLotes = response.data.data
        } else if (response?.data?.items && Array.isArray(response.data.items)) {
          allLotes = response.data.items
        } else if (response?.data && Array.isArray(response.data)) {
          allLotes = response.data
        } else if (Array.isArray(response)) {
          allLotes = response
        }
        
        this.lotes = allLotes.filter((lote: Lote) => lote.tipo === 'Ponedoras' && lote.estado === 'Activo')
        this.cdr.detectChanges()
      },
      error: (error) => {
        this.lotes = []
        console.error('Error al cargar lotes:', error)
      }
    })
  }

  applyFilters() {
    this.currentPage = 1;
    this.loadControles();
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadControles();
    }
  }

  onPageSizeChange(newSize: number): void {
    this.pageSize = newSize;
    this.currentPage = 1;
    this.loadControles();
  }

  deleteControl(id: number) {
    if (confirm('¿Está seguro de eliminar este control?')) {
      this.huevosService.deleteControl(id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.toastr.success('Control eliminado exitosamente', 'Éxito', {
            progressBar: true,
            closeButton: true
          })
          this.loadControles()
        },
        error: () => {
          this.toastr.error('Error al eliminar control', 'Error', {
            progressBar: true,
            closeButton: true
          })
        }
      })
    }
  }

  formatDateForInput(dateString: string): string {
    if (!dateString) return ''
    const date = new Date(dateString + 'T00:00:00.000Z')
    return date.toISOString().split('T')[0]
  }

  getCalidadClass(calidad?: string): string {
    switch(calidad) {
      case 'Excelente': return 'text-success'
      case 'Buena': return 'text-info'
      case 'Regular': return 'text-warning'
      case 'Mala': return 'text-danger'
      default: return 'text-muted'
    }
  }

  getCalidadBadgeColor(calidad?: string): string {
    switch(calidad) {
      case 'Excelente': return 'success'
      case 'Buena': return 'info'
      case 'Regular': return 'warning'
      case 'Mala': return 'danger'
      default: return 'secondary'
    }
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedLote = '';
    this.selectedCalidad = '';
    this.selectedFecha = '';
    this.currentPage = 1;
    this.loadControles();
  }

  trackByControlId(index: number, control: ControlHuevos): number {
    return control.id
  }

  trackByLoteId(index: number, lote: Lote): number {
    return lote.id
  }
}