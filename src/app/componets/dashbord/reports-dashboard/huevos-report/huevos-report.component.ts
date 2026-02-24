import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-huevos-report',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './huevos-report.component.html',
  styleUrls: ['./huevos-report.component.scss']
})
export class HuevosReportComponent implements OnInit {
  isLoading = false;
  
  // Filtros
  tipoFiltro: 'dia' | 'mes' | 'rango' = 'mes';
  fechaSeleccionada = '';
  mesSeleccionado = '';
  anioSeleccionado = '';
  fechaDesde = '';
  fechaHasta = '';
  
  // Datos
  estadisticas: any = null;
  registros: any[] = [];
  
  // Opciones
  meses = [
    { value: '01', label: 'Enero' },
    { value: '02', label: 'Febrero' },
    { value: '03', label: 'Marzo' },
    { value: '04', label: 'Abril' },
    { value: '05', label: 'Mayo' },
    { value: '06', label: 'Junio' },
    { value: '07', label: 'Julio' },
    { value: '08', label: 'Agosto' },
    { value: '09', label: 'Septiembre' },
    { value: '10', label: 'Octubre' },
    { value: '11', label: 'Noviembre' },
    { value: '12', label: 'Diciembre' }
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
    
    let params: any = {};
    
    if (this.tipoFiltro === 'dia' && this.fechaSeleccionada) {
      params.fechaInicio = this.fechaSeleccionada;
      params.fechaFin = this.fechaSeleccionada;
    } else if (this.tipoFiltro === 'mes' && this.mesSeleccionado && this.anioSeleccionado) {
      const primerDia = `${this.anioSeleccionado}-${this.mesSeleccionado}-01`;
      const ultimoDia = new Date(parseInt(this.anioSeleccionado), parseInt(this.mesSeleccionado), 0).getDate();
      params.fechaInicio = primerDia;
      params.fechaFin = `${this.anioSeleccionado}-${this.mesSeleccionado}-${ultimoDia}`;
    } else if (this.tipoFiltro === 'rango' && this.fechaDesde && this.fechaHasta) {
      params.fechaInicio = this.fechaDesde;
      params.fechaFin = this.fechaHasta;
    }

    Promise.all([
      this.getEstadisticas(params),
      this.getRegistros(params)
    ]).then(([statsResponse, registrosResponse]) => {
      console.log('Estadísticas huevos:', statsResponse);
      console.log('Registros huevos:', registrosResponse);
      
      this.estadisticas = statsResponse?.data;
      this.registros = registrosResponse?.data?.data || [];
      
      this.isLoading = false;
      this.cdr.detectChanges();
    }).catch(error => {
      console.error('Error al cargar reporte:', error);
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }

  getEstadisticas(params: any) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key]) {
        httpParams = httpParams.set(key, params[key]);
      }
    });
    return this.http.get<any>(`${environment.apiUrl}/v1/control-huevos/estadisticas`, { params: httpParams }).toPromise();
  }

  getRegistros(params: any) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key]) {
        httpParams = httpParams.set(key, params[key]);
      }
    });
    httpParams = httpParams.set('limit', '1000');
    return this.http.get<any>(`${environment.apiUrl}/v1/control-huevos`, { params: httpParams }).toPromise();
  }

  exportarPDF() {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFontSize(18);
    doc.text('Reporte de Producción de Huevos', pageWidth / 2, 15, { align: 'center' });

    doc.setFontSize(10);
    let filtroTexto = '';
    if (this.tipoFiltro === 'dia' && this.fechaSeleccionada) {
      filtroTexto = `Fecha: ${this.fechaSeleccionada}`;
    } else if (this.tipoFiltro === 'mes' && this.mesSeleccionado && this.anioSeleccionado) {
      const mes = this.meses.find(m => m.value === this.mesSeleccionado);
      filtroTexto = `Período: ${mes?.label} ${this.anioSeleccionado}`;
    } else if (this.tipoFiltro === 'rango' && this.fechaDesde && this.fechaHasta) {
      filtroTexto = `Rango: ${this.fechaDesde} a ${this.fechaHasta}`;
    }
    doc.text(filtroTexto, pageWidth / 2, 22, { align: 'center' });

    let yPos = 30;

    if (this.estadisticas) {
      doc.setFontSize(12);
      doc.text('Resumen General', 14, yPos);
      yPos += 7;
      
      const statsData = [
        ['Total Huevos Producidos', this.estadisticas.totalHuevos || 0],
        ['Total Registros', this.estadisticas.totalRegistros || 0],
        ['Promedio Diario', Number(this.estadisticas.promedioHuevos || 0).toFixed(2)]
      ];
      
      autoTable(doc, {
        startY: yPos,
        head: [['Métrica', 'Valor']],
        body: statsData,
        theme: 'grid',
        headStyles: { fillColor: [79, 70, 229] },
        margin: { left: 14, right: 14 }
      });
      
      yPos = (doc as any).lastAutoTable.finalY + 10;
    }

    if (this.estadisticas?.huevosPorCalidad && this.estadisticas.huevosPorCalidad.length > 0) {
      doc.setFontSize(12);
      doc.text('Producción por Calidad', 14, yPos);
      yPos += 7;
      
      const calidadData = this.estadisticas.huevosPorCalidad.map((c: any) => [
        c.calidad || 'Sin especificar',
        c._sum.cantidadHuevos
      ]);
      
      autoTable(doc, {
        startY: yPos,
        head: [['Calidad', 'Cantidad']],
        body: calidadData,
        theme: 'striped',
        headStyles: { fillColor: [34, 197, 94] },
        margin: { left: 14, right: 14 }
      });
      
      yPos = (doc as any).lastAutoTable.finalY + 10;
    }

    if (this.registros.length > 0) {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }
      
      doc.setFontSize(12);
      doc.text('Registros Detallados', 14, yPos);
      yPos += 7;
      
      const registrosData = this.registros.map((r: any) => [
        new Date(r.fecha).toLocaleDateString(),
        r.lote?.galera || '-',
        r.cantidadHuevos,
        r.calidad || '-'
      ]);
      
      autoTable(doc, {
        startY: yPos,
        head: [['Fecha', 'Galera', 'Cantidad', 'Calidad']],
        body: registrosData,
        theme: 'striped',
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 8 },
        margin: { left: 14, right: 14 }
      });
    }

    const fileName = `reporte-huevos-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
  }

  exportarExcel() {
    const workbook = XLSX.utils.book_new();
    
    if (this.estadisticas) {
      const statsData = [
        ['Métrica', 'Valor'],
        ['Total Huevos Producidos', this.estadisticas.totalHuevos || 0],
        ['Total Registros', this.estadisticas.totalRegistros || 0],
        ['Promedio Diario', Number(this.estadisticas.promedioHuevos || 0).toFixed(2)]
      ];
      
      const wsStats = XLSX.utils.aoa_to_sheet(statsData);
      wsStats['!cols'] = [{ wch: 30 }, { wch: 15 }];
      XLSX.utils.book_append_sheet(workbook, wsStats, 'Resumen');
    }
    
    if (this.estadisticas?.huevosPorCalidad && this.estadisticas.huevosPorCalidad.length > 0) {
      const calidadData = [
        ['Calidad', 'Cantidad'],
        ...this.estadisticas.huevosPorCalidad.map((c: any) => [
          c.calidad || 'Sin especificar',
          c._sum.cantidadHuevos
        ])
      ];
      
      const wsCalidad = XLSX.utils.aoa_to_sheet(calidadData);
      wsCalidad['!cols'] = [{ wch: 20 }, { wch: 15 }];
      XLSX.utils.book_append_sheet(workbook, wsCalidad, 'Por Calidad');
    }
    
    if (this.registros.length > 0) {
      const registrosData = [
        ['Fecha', 'Galera', 'Tipo Lote', 'Cantidad', 'Calidad', 'Registrado Por'],
        ...this.registros.map((r: any) => [
          new Date(r.fecha).toLocaleDateString(),
          r.lote?.galera || '-',
          r.lote?.tipo || '-',
          r.cantidadHuevos,
          r.calidad || '-',
          r.usuario ? `${r.usuario.nombre} ${r.usuario.apellido || ''}` : '-'
        ])
      ];
      
      const wsRegistros = XLSX.utils.aoa_to_sheet(registrosData);
      wsRegistros['!cols'] = [
        { wch: 12 },
        { wch: 15 },
        { wch: 15 },
        { wch: 10 },
        { wch: 15 },
        { wch: 25 }
      ];
      XLSX.utils.book_append_sheet(workbook, wsRegistros, 'Registros');
    }

    const fileName = `reporte-huevos-${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  }
}
