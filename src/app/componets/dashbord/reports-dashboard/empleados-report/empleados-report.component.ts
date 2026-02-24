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
  selector: 'app-empleados-report',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './empleados-report.component.html',
  styleUrls: ['./empleados-report.component.scss']
})
export class EmpleadosReportComponent implements OnInit {
  isLoading = false;
  
  // Datos
  estadisticas: any = null;
  empleados: any[] = [];

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadReport();
  }

  loadReport() {
    this.isLoading = true;
    
    Promise.all([
      this.getEstadisticas(),
      this.getEmpleados()
    ]).then(([statsResponse, empleadosResponse]) => {
      console.log('Estadísticas empleados:', statsResponse);
      console.log('Empleados:', empleadosResponse);
      
      this.estadisticas = statsResponse?.data;
      this.empleados = empleadosResponse?.data?.data || [];
      
      this.isLoading = false;
      this.cdr.detectChanges();
    }).catch(error => {
      console.error('Error al cargar reporte:', error);
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }

  getEstadisticas() {
    return this.http.get<any>(`${environment.apiUrl}/v1/empleados/estadisticas`).toPromise();
  }

  getEmpleados() {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('limit', '1000');
    return this.http.get<any>(`${environment.apiUrl}/v1/empleados`, { params: httpParams }).toPromise();
  }

  exportarPDF() {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFontSize(18);
    doc.text('Reporte de Empleados', pageWidth / 2, 15, { align: 'center' });

    let yPos = 25;

    if (this.estadisticas) {
      doc.setFontSize(12);
      doc.text('Resumen General', 14, yPos);
      yPos += 7;
      
      const statsData = [
        ['Total Empleados', this.estadisticas.totalEmpleados || 0],
        ['Empleados Activos', this.estadisticas.empleadosActivos || 0],
        ['Empleados Inactivos', this.estadisticas.empleadosInactivos || 0],
        ['Empleados Hombres', this.estadisticas.empleadosHombres || 0],
        ['Empleadas Mujeres', this.estadisticas.empleadasMujeres || 0],
        ['Empleados Nuevos (3 meses)', this.estadisticas.empleadosNuevos || 0],
        ['Salario Promedio', `Q${Number(this.estadisticas.salarioPromedio || 0).toFixed(2)}`],
        ['Nómina Total', `Q${Number(this.estadisticas.nominaTotal || 0).toFixed(2)}`]
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

    if (this.estadisticas?.empleadosPorPuesto && this.estadisticas.empleadosPorPuesto.length > 0) {
      doc.setFontSize(12);
      doc.text('Empleados por Puesto', 14, yPos);
      yPos += 7;
      
      const puestosData = this.estadisticas.empleadosPorPuesto.map((p: any) => [
        p.puesto,
        p._count.id,
        `Q${Number(p._avg.salario || 0).toFixed(2)}`
      ]);
      
      autoTable(doc, {
        startY: yPos,
        head: [['Puesto', 'Cantidad', 'Salario Promedio']],
        body: puestosData,
        theme: 'striped',
        headStyles: { fillColor: [34, 197, 94] },
        margin: { left: 14, right: 14 }
      });
      
      yPos = (doc as any).lastAutoTable.finalY + 10;
    }

    if (this.empleados.length > 0) {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }
      
      doc.setFontSize(12);
      doc.text('Listado de Empleados', 14, yPos);
      yPos += 7;
      
      const empleadosData = this.empleados.map((e: any) => [
        `${e.nombre} ${e.apellido}`,
        e.puesto,
        `Q${Number(e.salario || 0).toFixed(2)}`,
        new Date(e.fechaContratacion).toLocaleDateString(),
        e.activo ? 'Activo' : 'Inactivo'
      ]);
      
      autoTable(doc, {
        startY: yPos,
        head: [['Nombre', 'Puesto', 'Salario', 'Fecha Contratación', 'Estado']],
        body: empleadosData,
        theme: 'striped',
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 8 },
        margin: { left: 14, right: 14 }
      });
    }

    const fileName = `reporte-empleados-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
  }

  exportarExcel() {
    const workbook = XLSX.utils.book_new();
    
    if (this.estadisticas) {
      const statsData = [
        ['Métrica', 'Valor'],
        ['Total Empleados', this.estadisticas.totalEmpleados || 0],
        ['Empleados Activos', this.estadisticas.empleadosActivos || 0],
        ['Empleados Inactivos', this.estadisticas.empleadosInactivos || 0],
        ['Empleados Hombres', this.estadisticas.empleadosHombres || 0],
        ['Empleadas Mujeres', this.estadisticas.empleadasMujeres || 0],
        ['Empleados Nuevos (3 meses)', this.estadisticas.empleadosNuevos || 0],
        ['Salario Promedio', this.estadisticas.salarioPromedio || 0],
        ['Nómina Total', this.estadisticas.nominaTotal || 0]
      ];
      
      const wsStats = XLSX.utils.aoa_to_sheet(statsData);
      wsStats['!cols'] = [{ wch: 30 }, { wch: 15 }];
      XLSX.utils.book_append_sheet(workbook, wsStats, 'Resumen');
    }
    
    if (this.estadisticas?.empleadosPorPuesto && this.estadisticas.empleadosPorPuesto.length > 0) {
      const puestosData = [
        ['Puesto', 'Cantidad', 'Salario Promedio'],
        ...this.estadisticas.empleadosPorPuesto.map((p: any) => [
          p.puesto,
          p._count.id,
          p._avg.salario || 0
        ])
      ];
      
      const wsPuestos = XLSX.utils.aoa_to_sheet(puestosData);
      wsPuestos['!cols'] = [{ wch: 25 }, { wch: 12 }, { wch: 18 }];
      XLSX.utils.book_append_sheet(workbook, wsPuestos, 'Por Puesto');
    }
    
    if (this.empleados.length > 0) {
      const empleadosData = [
        ['Nombre', 'Apellido', 'Puesto', 'Salario', 'Fecha Contratación', 'Teléfono', 'Correo', 'Género', 'Estado'],
        ...this.empleados.map((e: any) => [
          e.nombre,
          e.apellido,
          e.puesto,
          e.salario,
          new Date(e.fechaContratacion).toLocaleDateString(),
          e.telefono || '-',
          e.correo || '-',
          e.genero === 'M' ? 'Masculino' : e.genero === 'F' ? 'Femenino' : '-',
          e.activo ? 'Activo' : 'Inactivo'
        ])
      ];
      
      const wsEmpleados = XLSX.utils.aoa_to_sheet(empleadosData);
      wsEmpleados['!cols'] = [
        { wch: 15 },
        { wch: 15 },
        { wch: 20 },
        { wch: 12 },
        { wch: 18 },
        { wch: 15 },
        { wch: 25 },
        { wch: 12 },
        { wch: 10 }
      ];
      XLSX.utils.book_append_sheet(workbook, wsEmpleados, 'Empleados');
    }

    const fileName = `reporte-empleados-${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  }
}
