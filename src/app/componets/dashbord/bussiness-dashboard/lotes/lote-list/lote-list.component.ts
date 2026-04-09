import { Component, DestroyRef, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LotesService } from '../services/lotes.service';
import { Lote, UpdateLoteDTO } from '../interfaces/lote.interface';

@Component({
  selector: 'app-lote-list',
  standalone: true,
  imports: [CommonModule,SharedModule,NgSelectModule,RouterModule,ReactiveFormsModule,FormsModule,NgbModule],
  templateUrl: './lote-list.component.html',
  styleUrls: ['./lote-list.component.scss']
})
export class LoteListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  lotes: Lote[] = [];
  filteredLotes: Lote[] = [];
  paginatedLotes: Lote[] = [];
  loading = false;
  editForm: FormGroup;
  selectedLote: Lote | null = null;
  
  // Estadísticas
  totalLotes = 0;
  lotesActivos = 0;
  lotesPonedoras = 0;
  lotesEngorde = 0;

  // Paginación
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;
  Math = Math;

  constructor(
    private readonly modalService: NgbModal,
    private readonly lotesService: LotesService,
    private readonly fb: FormBuilder,
    private readonly toastr: ToastrService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.editForm = this.fb.group({
      tipo: ['', Validators.required],
      galera: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(1)]],
      fechaInicio: ['', Validators.required],
      fechaFin: [''],
      estado: ['Activo'],
      observaciones: ['']
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    if (!filterValue) {
      this.filteredLotes = [...this.lotes];
    } else {
      this.filteredLotes = this.lotes.filter(lote =>
        (lote.galeraRelacion?.nombre || lote.galera || '').toLowerCase().includes(filterValue) ||
        lote.tipo?.toLowerCase().includes(filterValue) ||
        lote.estado?.toLowerCase().includes(filterValue)
      );
    }
    this.currentPage = 1;
    this.updatePagination();
  }

  toggleLoteStatus(lote: Lote) {
    const isActive = lote.estado === 'Activo';
    const newStatus = isActive ? 'Inactivo' : 'Activo';
    const action = isActive ? 'desactivar' : 'activar';
    
    if (confirm(`¿Está seguro de que desea ${action} este lote?`)) {
      const updateData: UpdateLoteDTO = { estado: newStatus as any };
        
      this.lotesService.updateLote(lote.id, updateData).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.toastr.success(`Lote ${action}do exitosamente`, 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.loadLotes();
          this.cdr.detectChanges();
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
          
          this.toastr.error(`Error al ${action} el lote: ${errorMessage}`, 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.cdr.detectChanges();
        }
      });
    }
  }

  edit(editContent: any, lote: Lote) {
    this.selectedLote = lote;
    this.editForm.patchValue({
      tipo: lote.tipo,
      galera: lote.galera,
      cantidad: lote.cantidad,
      fechaInicio: this.formatDateForInput(lote.fechaInicio),
      fechaFin: this.formatDateForInput(lote.fechaFin || ''),
      estado: lote.estado,
      observaciones: lote.observaciones
    });
    this.modalService.open(editContent, {windowClass : 'modalCusSty modal-lg' });
  }

  onUpdateLote(): void {
    if (this.editForm.valid && this.selectedLote) {
      this.loading = true;
      const updateData: UpdateLoteDTO = this.editForm.value;
      
      this.lotesService.updateLote(this.selectedLote.id, updateData).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: (response) => {
          this.toastr.success('Lote actualizado exitosamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.loadLotes();
          this.modalService.dismissAll();
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          this.toastr.error('Error al actualizar el lote: ' + (error.error?.message || 'Error desconocido'), 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    } else {
      this.toastr.warning('Por favor, complete todos los campos requeridos', 'Advertencia', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
      });
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.editForm.controls).forEach(key => {
      const control = this.editForm.get(key);
      control?.markAsTouched();
    });
  }

  open(content:any) {
    this.modalService.open(content, {windowClass : 'modalCusSty',size:'lg' })
  }

  ngOnInit(): void {
    this.loadLotes();
  }

  private loadLotes(): void {
    this.loading = true;
    
    this.lotesService.getLotes().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        // Manejar diferentes estructuras de respuesta como en ClienteService
        if (response?.data?.data) {
          this.lotes = response.data.data;
        } else if (response?.data?.items) {
          this.lotes = response.data.items;
        } else if (response?.data && Array.isArray(response.data)) {
          this.lotes = response.data;
        } else if (Array.isArray(response)) {
          this.lotes = response;
        } else {
          this.lotes = [];
        }
        
        this.filteredLotes = [...this.lotes];
        this.calculateStats();
        this.updatePagination();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.lotes = [];
        this.filteredLotes = [];
        this.paginatedLotes = [];
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  private calculateStats(): void {
    this.totalLotes = this.lotes.length;
    this.lotesActivos = this.lotes.filter(l => l.estado === 'Activo').length;
    this.lotesPonedoras = this.lotes.filter(l => l.tipo === 'Ponedoras').length;
    this.lotesEngorde = this.lotes.filter(l => l.tipo === 'Engorde').length;
  }

  getEstadoBadgeClass(estado: string): string {
    switch (estado) {
      case 'Activo': return 'bg-success';
      case 'Inactivo': return 'bg-warning';
      case 'Desalojado': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }

  trackByLoteId(index: number, lote: Lote): number {
    return lote.id;
  }

  private formatDateForInput(dateString: string | null | undefined): string {
    if (!dateString) return '';
    
    // Si ya viene en formato YYYY-MM-DD, devolverlo tal como está
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      return dateString;
    }
    
    // Para fechas ISO, extraer solo la parte de la fecha
    if (dateString.includes('T')) {
      return dateString.split('T')[0];
    }
    
    // Fallback: intentar parsear como fecha
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    
    return date.toISOString().split('T')[0];
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  onPageSizeChange(newSize: number): void {
    this.pageSize = newSize;
    this.currentPage = 1;
    this.updatePagination();
  }

  private updatePagination(): void {
    this.totalItems = this.filteredLotes.length;
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    }
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedLotes = this.filteredLotes.slice(startIndex, endIndex);
    this.cdr.detectChanges();
  }
}