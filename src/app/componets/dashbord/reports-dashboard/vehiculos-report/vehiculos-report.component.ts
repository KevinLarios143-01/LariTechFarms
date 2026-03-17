import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { VehiculoService } from '../../../../shared/services/vehiculo.service';
import { ControlTransporteService } from '../../../../shared/services/control-transporte.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-vehiculos-report',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './vehiculos-report.component.html',
  styleUrls: ['./vehiculos-report.component.scss']
})
export class VehiculosReportComponent implements OnInit {
  isLoading = false;

  // Filtros
  vehiculoSeleccionado: number | null = null;
  mesSeleccionado = '';
  anioSeleccionado = '';

  // Datos
  vehiculos: any[] = [];
  registros: any[] = [];
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
    private vehiculoService: VehiculoService,
    private transporteService: ControlTransporteService,
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
    this.loadVehiculos();
    this.loadReport();
  }

  loadVehiculos() {
    this.vehiculoService.getVehiculos({ limit: 100 }).subscribe({
      next: (response: any) => {
        this.vehiculos = response.data?.items || response.data?.data || [];
        this.cdr.detectChanges();
      },
      error: (error: any) => console.error('Error al cargar vehículos:', error)
    });
  }

  loadReport() {
    this.isLoading = true;
    const params: any = { limit: 500 };

    // Calcular rango de fechas del mes seleccionado
    if (this.mesSeleccionado && this.anioSeleccionado) {
      const year = parseInt(this.anioSeleccionado);
      const month = parseInt(this.mesSeleccionado);
      params.fechaInicio = `${year}-${this.mesSeleccionado}-01`;
      const lastDay = new Date(year, month, 0).getDate();
      params.fechaFin = `${year}-${this.mesSeleccionado}-${lastDay}`;
    }

    if (this.vehiculoSeleccionado) {
      params.idVehiculo = this.vehiculoSeleccionado;
    }

    // Cargar registros y estadísticas en paralelo
    Promise.all([
      this.transporteService.getControles(params).toPromise(),
      this.transporteService.getEstadisticas(params).toPromise()
    ]).then(([registrosRes, statsRes]) => {
      this.registros = registrosRes?.data?.data || [];
      this.estadisticas = statsRes?.data || null;
      this.isLoading = false;
      this.cdr.detectChanges();
    }).catch(error => {
      console.error('Error al cargar reporte:', error);
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }

  get totalGalones(): number {
    return this.registros.reduce((sum: number, r: any) => sum + Number(r.galonesAplicados || 0), 0);
  }

  get totalCosto(): number {
    return this.registros.reduce((sum: number, r: any) => sum + Number(r.costoTotal || 0), 0);
  }

  get registrosPorVehiculo(): any[] {
    const map = new Map<string, any>();
    this.registros.forEach((r: any) => {
      const placa = r.vehiculo?.placa || 'Sin vehículo';
      const key = placa;
      if (!map.has(key)) {
        map.set(key, {
          placa,
          marca: r.vehiculo?.marca || '-',
          modelo: r.vehiculo?.modelo || '-',
          totalGalones: 0,
          totalCosto: 0,
          registros: 0
        });
      }
      const item = map.get(key);
      item.totalGalones += Number(r.galonesAplicados || 0);
      item.totalCosto += Number(r.costoTotal || 0);
      item.registros++;
    });
    return Array.from(map.values()).sort((a, b) => b.totalCosto - a.totalCosto);
  }

  getMesLabel(): string {
    const mes = this.meses.find(m => m.value === this.mesSeleccionado);
    return mes ? `${mes.label} ${this.anioSeleccionado}` : '';
  }

  exportarPDF() {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFontSize(18);
    doc.text('Reporte de Vehículos - Combustible', pageWidth / 2, 15, { align: 'center' });
    doc.setFontSize(11);
    doc.text(`Período: ${this.getMesLabel()}`, pageWidth / 2, 22, { align: 'center' });

    let yPos = 30;

    // Resumen por vehículo
    if (this.registrosPorVehiculo.length > 0) {
      doc.setFontSize(12);
      doc.text('Resumen por Vehículo', 14, yPos);
      yPos += 7;

      autoTable(doc, {
        startY: yPos,
        head: [['Placa', 'Marca', 'Modelo', 'Galones', 'Costo Total', 'Registros']],
        body: this.registrosPorVehiculo.map(v => [
          v.placa, v.marca, v.modelo,
          v.totalGalones.toFixed(2),
          `Q${v.totalCosto.toFixed(2)}`,
          v.registros
        ]),
        theme: 'grid',
        headStyles: { fillColor: [79, 70, 229] },
        foot: [['TOTAL', '', '', this.totalGalones.toFixed(2), `Q${this.totalCosto.toFixed(2)}`, this.registros.length.toString()]],
        footStyles: { fillColor: [240, 240, 240], textColor: [0, 0, 0], fontStyle: 'bold' }
      });
      yPos = (doc as any).lastAutoTable.finalY + 10;
    }

    // Detalle de registros
    if (this.registros.length > 0) {
      if (yPos > 220) { doc.addPage(); yPos = 20; }
      doc.setFontSize(12);
      doc.text('Detalle de Registros', 14, yPos);
      yPos += 7;

      autoTable(doc, {
        startY: yPos,
        head: [['Fecha', 'Placa', 'Tipo Operación', 'Galones', 'Costo', 'Observaciones']],
        body: this.registros.map((r: any) => [
          new Date(r.fecha).toLocaleDateString('es-GT'),
          r.vehiculo?.placa || '-',
          r.tipoOperacion,
          Number(r.galonesAplicados || 0).toFixed(2),
          `Q${Number(r.costoTotal || 0).toFixed(2)}`,
          (r.observaciones || '-').substring(0, 30)
        ]),
        theme: 'striped',
        headStyles: { fillColor: [34, 197, 94] },
        styles: { fontSize: 8 }
      });
    }

    doc.save(`reporte-vehiculos-${this.anioSeleccionado}-${this.mesSeleccionado}.pdf`);
  }

  exportarExcel() {
    const workbook = XLSX.utils.book_new();

    // Hoja 1: Resumen por vehículo
    const resumenData = [
      ['Placa', 'Marca', 'Modelo', 'Total Galones', 'Costo Total', 'Registros'],
      ...this.registrosPorVehiculo.map(v => [v.placa, v.marca, v.modelo, v.totalGalones, v.totalCosto, v.registros]),
      ['TOTAL', '', '', this.totalGalones, this.totalCosto, this.registros.length]
    ];
    const wsResumen = XLSX.utils.aoa_to_sheet(resumenData);
    wsResumen['!cols'] = [{ wch: 12 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 12 }];
    XLSX.utils.book_append_sheet(workbook, wsResumen, 'Resumen');

    // Hoja 2: Detalle
    const detalleData = [
      ['Fecha', 'Placa', 'Marca', 'Tipo Operación', 'Galones', 'Costo', 'Observaciones'],
      ...this.registros.map((r: any) => [
        new Date(r.fecha).toLocaleDateString('es-GT'),
        r.vehiculo?.placa || '-',
        r.vehiculo?.marca || '-',
        r.tipoOperacion,
        Number(r.galonesAplicados || 0),
        Number(r.costoTotal || 0),
        r.observaciones || ''
      ])
    ];
    const wsDetalle = XLSX.utils.aoa_to_sheet(detalleData);
    wsDetalle['!cols'] = [{ wch: 12 }, { wch: 12 }, { wch: 15 }, { wch: 18 }, { wch: 12 }, { wch: 12 }, { wch: 30 }];
    XLSX.utils.book_append_sheet(workbook, wsDetalle, 'Detalle');

    XLSX.writeFile(workbook, `reporte-vehiculos-${this.anioSeleccionado}-${this.mesSeleccionado}.xlsx`);
  }
}
