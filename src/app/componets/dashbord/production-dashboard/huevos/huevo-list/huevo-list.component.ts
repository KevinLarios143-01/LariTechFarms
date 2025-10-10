import { Component, OnInit, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  controles: ControlHuevos[] = []
  filteredControles: ControlHuevos[] = []
  lotes: Lote[] = []
  isLoading = false
  searchTerm = ''
  selectedLote = ''
  selectedCalidad = ''
  selectedFecha = ''
  calidades = ['Excelente', 'Buena', 'Regular', 'Mala']

  constructor(
    private huevosService: HuevosService,
    private lotesService: LotesService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadControles()
    this.loadLotes()
  }

  loadControles() {
    this.isLoading = true
    this.huevosService.getControles().subscribe({
      next: (response) => {
        this.controles = response.data.items
        this.filteredControles = [...this.controles]
        this.isLoading = false
        this.cdr.detectChanges()
      },
      error: (error) => {
        this.toastr.error('Error al cargar controles de huevos', 'Error', {
          progressBar: true,
          closeButton: true
        })
        this.isLoading = false
        this.cdr.detectChanges()
      }
    })
  }

  loadLotes() {
    this.lotesService.getLotes().subscribe({
      next: (response) => {
        this.lotes = response.data.data.filter((lote: any) => lote.tipo === 'Ponedoras' && lote.estado === 'Activo')
        this.cdr.detectChanges()
      },
      error: (error) => {
        console.error('Error al cargar lotes:', error)
      }
    })
  }

  applyFilters() {
    this.filteredControles = this.controles.filter(control => {
      const matchesSearch = !this.searchTerm || 
        control.lote?.galera.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        control.usuario?.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        control.usuario?.apellido.toLowerCase().includes(this.searchTerm.toLowerCase())
      
      const matchesLote = !this.selectedLote || control.idLote.toString() === this.selectedLote
      const matchesCalidad = !this.selectedCalidad || control.calidad === this.selectedCalidad
      
      const matchesFecha = !this.selectedFecha || 
        new Date(control.fecha).toDateString() === new Date(this.selectedFecha).toDateString()
      
      return matchesSearch && matchesLote && matchesCalidad && matchesFecha
    })
    this.cdr.detectChanges()
  }

  deleteControl(id: number) {
    if (confirm('¿Está seguro de eliminar este control?')) {
      this.huevosService.deleteControl(id).subscribe({
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
    this.searchTerm = ''
    this.selectedLote = ''
    this.selectedCalidad = ''
    this.selectedFecha = ''
    this.filteredControles = [...this.controles]
    this.cdr.detectChanges()
  }
}