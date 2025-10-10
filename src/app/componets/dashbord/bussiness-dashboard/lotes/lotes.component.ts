import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { LotesService } from './services/lotes.service';
import { Lote, CreateLoteDTO, UpdateLoteDTO } from './interfaces/lote.interface';

declare var bootstrap: any;

@Component({
  selector: 'app-lotes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgSelectModule],
  templateUrl: './lotes.component.html',
  styleUrls: ['./lotes.component.scss']
})
export class LotesComponent implements OnInit {
  lotes: Lote[] = [];
  filteredLotes: Lote[] = [];
  loteForm: FormGroup;
  cantidadForm: FormGroup;
  loading = false;
  isEditing = false;
  selectedLote: Lote | null = null;
  
  // Paginación
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPages = 0;
  
  // Filtros
  filtroEstado = '';
  filtroTipo = '';
  searchTerm = '';
  
  // Opciones
  tiposLote = ['Ponedoras', 'Engorde'];
  estadosLote = ['Activo', 'Inactivo', 'Desalojado'];

  constructor(
    private fb: FormBuilder,
    private lotesService: LotesService
  ) {
    this.loteForm = this.fb.group({
      tipo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: [''],
      cantidad: ['', [Validators.required, Validators.min(1)]],
      galera: ['', Validators.required],
      estado: ['Activo'],
      observaciones: ['']
    });

    this.cantidadForm = this.fb.group({
      cantidad: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.loadLotes();
  }

  loadLotes(): void {
    this.loading = true;
    const params = {
      page: this.currentPage,
      limit: this.itemsPerPage,
      ...(this.filtroEstado && { estado: this.filtroEstado }),
      ...(this.filtroTipo && { tipo: this.filtroTipo }),
      ...(this.searchTerm && { search: this.searchTerm })
    };

    this.lotesService.getLotes(params).subscribe({
      next: (response) => {
        this.lotes = response.data.items;
        this.filteredLotes = [...this.lotes];
        this.totalItems = response.data.pagination.total;
        this.totalPages = response.data.pagination.totalPages;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar lotes:', error);
        this.loading = false;
      }
    });
  }

  onSearch(): void {
    this.currentPage = 1;
    this.loadLotes();
  }

  onFilterChange(): void {
    this.currentPage = 1;
    this.loadLotes();
  }

  clearFilters(): void {
    this.filtroEstado = '';
    this.filtroTipo = '';
    this.searchTerm = '';
    this.currentPage = 1;
    this.loadLotes();
  }

  openCreateModal(): void {
    this.isEditing = false;
    this.selectedLote = null;
    this.loteForm.reset();
    this.loteForm.patchValue({ estado: 'Activo' });
    const modal = new bootstrap.Modal(document.getElementById('loteModal'));
    modal.show();
  }

  openEditModal(lote: Lote): void {
    this.isEditing = true;
    this.selectedLote = lote;
    this.loteForm.patchValue({
      tipo: lote.tipo,
      fechaInicio: lote.fechaInicio,
      fechaFin: lote.fechaFin,
      cantidad: lote.cantidad,
      galera: lote.galera,
      estado: lote.estado,
      observaciones: lote.observaciones
    });
    const modal = new bootstrap.Modal(document.getElementById('loteModal'));
    modal.show();
  }

  openCantidadModal(lote: Lote): void {
    this.selectedLote = lote;
    this.cantidadForm.patchValue({ cantidad: lote.cantidad });
    const modal = new bootstrap.Modal(document.getElementById('cantidadModal'));
    modal.show();
  }

  onSubmit(): void {
    if (this.loteForm.valid) {
      this.loading = true;
      const formData = this.loteForm.value;

      if (this.isEditing && this.selectedLote) {
        this.lotesService.updateLote(this.selectedLote.id, formData).subscribe({
          next: () => {
            this.loadLotes();
            this.closeModal('loteModal');
            this.loading = false;
          },
          error: (error) => {
            console.error('Error al actualizar lote:', error);
            this.loading = false;
          }
        });
      } else {
        this.lotesService.createLote(formData).subscribe({
          next: () => {
            this.loadLotes();
            this.closeModal('loteModal');
            this.loading = false;
          },
          error: (error) => {
            console.error('Error al crear lote:', error);
            this.loading = false;
          }
        });
      }
    }
  }

  onUpdateCantidad(): void {
    if (this.cantidadForm.valid && this.selectedLote) {
      this.loading = true;
      const cantidad = this.cantidadForm.value.cantidad;

      this.lotesService.updateCantidad(this.selectedLote.id, { cantidad }).subscribe({
        next: () => {
          this.loadLotes();
          this.closeModal('cantidadModal');
          this.loading = false;
        },
        error: (error) => {
          console.error('Error al actualizar cantidad:', error);
          this.loading = false;
        }
      });
    }
  }

  deleteLote(lote: Lote): void {
    if (confirm(`¿Está seguro de eliminar el lote ${lote.galera}?`)) {
      this.loading = true;
      this.lotesService.deleteLote(lote.id).subscribe({
        next: () => {
          this.loadLotes();
          this.loading = false;
        },
        error: (error) => {
          console.error('Error al eliminar lote:', error);
          this.loading = false;
        }
      });
    }
  }

  closeModal(modalId: string): void {
    const modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
    if (modal) {
      modal.hide();
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadLotes();
  }

  getEstadoBadgeClass(estado: string): string {
    switch (estado) {
      case 'Activo': return 'bg-success';
      case 'Inactivo': return 'bg-warning';
      case 'Desalojado': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }

  getTipoBadgeClass(tipo: string): string {
    return tipo === 'Ponedoras' ? 'bg-info' : 'bg-primary';
  }

  getEndItem(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }
}