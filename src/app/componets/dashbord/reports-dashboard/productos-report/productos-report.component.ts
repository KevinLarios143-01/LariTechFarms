import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProductoService } from '../../../../shared/services/producto.service';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-productos-report',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './productos-report.component.html',
  styleUrls: ['./productos-report.component.scss']
})
export class ProductosReportComponent implements OnInit {
  isLoading = false;
  tipoFiltro: 'dia' | 'mes' | 'rango' = 'mes';
  fechaSeleccionada = '';
  mesSeleccionado = '';
  anioSeleccionado = '';
  fechaDesde = '';
  fechaHasta = '';
  estadisticas: any = null;
  
  meses = [
    { value: '01', label: 'Enero' }, { value: '02', label: 'Febrero' },
    { value: '03', label: 'Marzo' }, { value: '04', label: 'Abril' },
    { value: '05', label: 'Mayo' }, { value: '06', label: 'Junio' },
    { value: '07', label: 'Julio' }, { value: '08', label: 'Agosto' },
    { value: '09', label: 'Septiembre' }, { value: '10', label: 'Octubre' },
    { value: '11', label: 'Noviembre' }, { value: '12', label: 'Diciembre' }
  ];
  anios: number[] = [];

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 5; i++) {
      this.anios.push(currentYear - i);
    }
  }

  ngOnInit() {
    const today = new Date();
    this.mesSeleccionado = String(today.getMonth() + 1).padStart(2, '0');
    this.anioSeleccionado = String(today.getFullYear());
    this.loadReport();
  }

  onTipoFiltroChange() {
    this.fechaSeleccionada = '';
    this.mesSeleccionado = '';
    this.anioSeleccionado = '';
    this.fechaDesde = '';
    this.fechaHasta = '';
  }

  loadReport() {
    this.isLoading = true;
    let params = new HttpParams();
    
    if (this.tipoFiltro === 'dia' && this.fechaSeleccionada) {
      params = params.set('fechaDesde', this.fechaSeleccionada);
      params = params.set('fechaHasta', this.fechaSeleccionada);
    } else if (this.tipoFiltro === 'mes' && this.mesSeleccionado && this.anioSeleccionado) {
      const primerDia = `${this.anioSeleccionado}-${this.mesSeleccionado}-01`;
      const ultimoDia = new Date(parseInt(this.anioSeleccionado), parseInt(this.mesSeleccionado), 0).getDate();
      params = params.set('fechaDesde', primerDia);
      params = params.set('fechaHasta', `${this.anioSeleccionado}-${this.mesSeleccionado}-${ultimoDia}`);
    } else if (this.tipoFiltro === 'rango' && this.fechaDesde && this.fechaHasta) {
      params = params.set('fechaDesde', this.fechaDesde);
      params = params.set('fechaHasta', this.fechaHasta);
    }

    this.http.get<any>(`${environment.apiUrl}/v1/productos/estadisticas`, { params }).subscribe({
      next: (response) => {
        this.estadisticas = response.data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar reporte:', error);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  exportarPDF() {
    console.log('Exportar a PDF');
  }

  exportarExcel() {
    console.log('Exportar a Excel');
  }
}
