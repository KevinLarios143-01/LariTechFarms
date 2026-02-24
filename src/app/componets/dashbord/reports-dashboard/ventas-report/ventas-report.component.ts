import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { VentaService } from '../../../../shared/services/venta.service';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-ventas-report',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './ventas-report.component.html',
  styleUrls: ['./ventas-report.component.scss']
})
export class VentasReportComponent implements OnInit {
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
  ventas: any[] = [];
  ventasDetalladas: any[] = [];
  ventasAnuladas: any[] = [];
  
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
    private ventaService: VentaService,
    private cdr: ChangeDetectorRef
  ) {
    // Generar últimos 5 años
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 5; i++) {
      this.anios.push(currentYear - i);
    }
  }

  ngOnInit() {
    // Inicializar con mes actual
    const today = new Date();
    this.mesSeleccionado = String(today.getMonth() + 1).padStart(2, '0');
    this.anioSeleccionado = String(today.getFullYear());
    this.loadReport();
  }

  onTipoFiltroChange() {
    // Limpiar filtros al cambiar tipo
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
      params.fechaDesde = this.fechaSeleccionada;
      params.fechaHasta = this.fechaSeleccionada;
    } else if (this.tipoFiltro === 'mes' && this.mesSeleccionado && this.anioSeleccionado) {
      const primerDia = `${this.anioSeleccionado}-${this.mesSeleccionado}-01`;
      const ultimoDia = new Date(parseInt(this.anioSeleccionado), parseInt(this.mesSeleccionado), 0).getDate();
      params.fechaDesde = primerDia;
      params.fechaHasta = `${this.anioSeleccionado}-${this.mesSeleccionado}-${ultimoDia}`;
    } else if (this.tipoFiltro === 'rango' && this.fechaDesde && this.fechaHasta) {
      params.fechaDesde = this.fechaDesde;
      params.fechaHasta = this.fechaHasta;
    }

    // Cargar estadísticas y ventas en paralelo
    Promise.all([
      this.ventaService.getVentasEstadisticas(params).toPromise(),
      this.ventaService.getVentas({ ...params, limit: 1000 }).toPromise()
    ]).then(([statsResponse, ventasResponse]) => {
      console.log('Estadísticas recibidas:', statsResponse?.data);
      this.estadisticas = statsResponse?.data;
      const todasLasVentas = ventasResponse?.data?.data || [];
      
      console.log('Total ventas recibidas:', todasLasVentas.length);
      
      // Separar ventas válidas de anuladas
      this.ventasDetalladas = todasLasVentas.filter((v: any) => v.estado !== 'Cancelada');
      this.ventasAnuladas = todasLasVentas.filter((v: any) => v.estado === 'Cancelada');
      
      console.log('Ventas válidas:', this.ventasDetalladas.length);
      console.log('Ventas anuladas:', this.ventasAnuladas.length);
      console.log('Ventas anuladas detalle:', this.ventasAnuladas);
      
      this.isLoading = false;
      this.cdr.detectChanges();
    }).catch(error => {
      console.error('Error al cargar reporte:', error);
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }

  exportarPDF() {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Título
    doc.setFontSize(18);
    doc.text('Reporte de Ventas', pageWidth / 2, 15, { align: 'center' });

    // Información del filtro
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

    // Estadísticas
    if (this.estadisticas) {
      doc.setFontSize(12);
      doc.text('Resumen Estadístico', 14, yPos);
      yPos += 7;

      const statsData = [
        ['Total Ventas', this.estadisticas.totalVentas || 0],
        ['Completadas', this.estadisticas.ventasCompletadas || 0],
        ['Pendientes', this.estadisticas.ventasPendientes || 0],
        ['Canceladas', this.estadisticas.ventasCanceladas || 0],
        ['Monto Total', `Q${Number(this.estadisticas.montoTotal || 0).toFixed(2)}`],
        ['Promedio Venta', `Q${Number(this.estadisticas.promedioVenta || 0).toFixed(2)}`]
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

    // Top 10 Clientes
    if (this.estadisticas?.topClientes && this.estadisticas.topClientes.length > 0) {
      doc.setFontSize(12);
      doc.text('Top 10 Clientes', 14, yPos);
      yPos += 7;

      const clientesData = this.estadisticas.topClientes.map((c: any) => [
        c.nombre,
        c.totalVentas,
        `Q${Number(c.montoTotal || 0).toFixed(2)}`
      ]);

      autoTable(doc, {
        startY: yPos,
        head: [['Cliente', 'Ventas', 'Monto Total']],
        body: clientesData,
        theme: 'striped',
        headStyles: { fillColor: [79, 70, 229] },
        margin: { left: 14, right: 14 }
      });

      yPos = (doc as any).lastAutoTable.finalY + 10;
    }

    // Top 10 Productos
    if (this.estadisticas?.topProductos && this.estadisticas.topProductos.length > 0) {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }

      doc.setFontSize(12);
      doc.text('Top 10 Productos Más Vendidos', 14, yPos);
      yPos += 7;

      const productosData = this.estadisticas.topProductos.map((p: any) => [
        p.nombre,
        p.cantidadVendida,
        `Q${Number(p.montoTotal || 0).toFixed(2)}`
      ]);

      autoTable(doc, {
        startY: yPos,
        head: [['Producto', 'Cantidad', 'Monto Total']],
        body: productosData,
        theme: 'striped',
        headStyles: { fillColor: [79, 70, 229] },
        margin: { left: 14, right: 14 }
      });

      yPos = (doc as any).lastAutoTable.finalY + 10;
    }

    // Ventas Detalladas
    if (this.ventasDetalladas.length > 0) {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }

      doc.setFontSize(12);
      doc.text('Detalle de Ventas', 14, yPos);
      yPos += 7;

      const ventasData = this.ventasDetalladas.map((v: any) => {
        const fecha = new Date(v.fecha);
        const productos = v.detalleVentas?.map((d: any) => d.producto?.nombre).join(', ') || 'N/A';
        return [
          fecha.toLocaleDateString(),
          fecha.toLocaleTimeString(),
          v.cliente?.nombre || 'Sin cliente',
          productos.substring(0, 30) + (productos.length > 30 ? '...' : ''),
          v.metodoPago || 'N/A',
          v.estado,
          `Q${Number(v.total || 0).toFixed(2)}`
        ];
      });

      autoTable(doc, {
        startY: yPos,
        head: [['Fecha', 'Hora', 'Cliente', 'Productos', 'Método', 'Estado', 'Total']],
        body: ventasData,
        theme: 'striped',
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 8 },
        margin: { left: 14, right: 14 }
      });
    }

    // Guardar PDF
    const fileName = `reporte-ventas-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
  }

  exportarExcel() {
    const workbook = XLSX.utils.book_new();
    
    // Hoja 1: Resumen Estadístico
    if (this.estadisticas) {
      const statsData = [
        ['Métrica', 'Valor'],
        ['Total Ventas', this.estadisticas.totalVentas || 0],
        ['Ventas Completadas', this.estadisticas.ventasCompletadas || 0],
        ['Ventas Pendientes', this.estadisticas.ventasPendientes || 0],
        ['Ventas Canceladas', this.estadisticas.ventasCanceladas || 0],
        ['Monto Total', this.estadisticas.montoTotal || 0],
        ['Promedio por Venta', this.estadisticas.promedioVenta || 0]
      ];
      
      const wsStats = XLSX.utils.aoa_to_sheet(statsData);
      wsStats['!cols'] = [{ wch: 25 }, { wch: 15 }];
      XLSX.utils.book_append_sheet(workbook, wsStats, 'Resumen');
    }
    
    // Hoja 2: Top Clientes
    if (this.estadisticas?.topClientes && this.estadisticas.topClientes.length > 0) {
      const clientesData = [
        ['Cliente', 'Total Ventas', 'Monto Total'],
        ...this.estadisticas.topClientes.map((c: any) => [
          c.nombre,
          c.totalVentas,
          c.montoTotal
        ])
      ];
      
      const wsClientes = XLSX.utils.aoa_to_sheet(clientesData);
      wsClientes['!cols'] = [{ wch: 30 }, { wch: 15 }, { wch: 15 }];
      XLSX.utils.book_append_sheet(workbook, wsClientes, 'Top Clientes');
    }
    
    // Hoja 3: Top Productos
    if (this.estadisticas?.topProductos && this.estadisticas.topProductos.length > 0) {
      const productosData = [
        ['Producto', 'Cantidad Vendida', 'Monto Total'],
        ...this.estadisticas.topProductos.map((p: any) => [
          p.nombre,
          p.cantidadVendida,
          p.montoTotal
        ])
      ];
      
      const wsProductos = XLSX.utils.aoa_to_sheet(productosData);
      wsProductos['!cols'] = [{ wch: 30 }, { wch: 18 }, { wch: 15 }];
      XLSX.utils.book_append_sheet(workbook, wsProductos, 'Top Productos');
    }
    
    // Hoja 4: Ventas Detalladas
    if (this.ventasDetalladas.length > 0) {
      const ventasData = [
        ['Fecha', 'Hora', 'Cliente', 'Productos', 'Método Pago', 'Estado', 'Total'],
        ...this.ventasDetalladas.map((v: any) => {
          const fecha = new Date(v.fecha);
          const productos = v.detalleVentas?.map((d: any) => d.producto?.nombre).join(', ') || 'N/A';
          return [
            fecha.toLocaleDateString(),
            fecha.toLocaleTimeString(),
            v.cliente?.nombre || 'Sin cliente',
            productos,
            v.metodoPago || 'N/A',
            v.estado,
            v.total
          ];
        })
      ];
      
      const wsVentas = XLSX.utils.aoa_to_sheet(ventasData);
      wsVentas['!cols'] = [
        { wch: 12 },
        { wch: 10 },
        { wch: 25 },
        { wch: 40 },
        { wch: 15 },
        { wch: 12 },
        { wch: 12 }
      ];
      XLSX.utils.book_append_sheet(workbook, wsVentas, 'Ventas Detalladas');
    }
    
    // Guardar archivo
    const fileName = `reporte-ventas-${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  }

  getEstadoBadge(estado: string): string {
    const badges: { [key: string]: string } = {
      'Completada': 'bg-success',
      'Pendiente': 'bg-warning',
      'Cancelada': 'bg-danger'
    };
    return badges[estado] || 'bg-secondary';
  }

  getTotalVentasValidas(): number {
    if (!this.ventasDetalladas || this.ventasDetalladas.length === 0) {
      return 0;
    }
    return this.ventasDetalladas.reduce((sum: number, venta: any) => {
      return sum + Number(venta.total || 0);
    }, 0);
  }

  getTotalVentasAnuladas(): number {
    if (!this.ventasAnuladas || this.ventasAnuladas.length === 0) {
      return 0;
    }
    return this.ventasAnuladas.reduce((sum: number, venta: any) => {
      return sum + Number(venta.total || 0);
    }, 0);
  }

  exportarVentasAnuladasPDF() {
    if (!this.ventasAnuladas || this.ventasAnuladas.length === 0) {
      return;
    }

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Título
    doc.setFontSize(18);
    doc.text('Reporte de Ventas Anuladas', pageWidth / 2, 15, { align: 'center' });

    // Información del filtro
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

    const ventasData = this.ventasAnuladas.map((v: any) => {
      const fecha = new Date(v.fecha);
      const productos = v.detalleVentas?.map((d: any) => d.producto?.nombre).join(', ') || 'N/A';
      return [
        fecha.toLocaleDateString(),
        fecha.toLocaleTimeString(),
        v.cliente?.nombre || 'Sin cliente',
        productos.substring(0, 25) + (productos.length > 25 ? '...' : ''),
        v.metodoPago || 'N/A',
        `Q${Number(v.total || 0).toFixed(2)}`,
        v.motivoAnulacion || 'Sin motivo'
      ];
    });

    autoTable(doc, {
      startY: yPos,
      head: [['Fecha', 'Hora', 'Cliente', 'Productos', 'Método', 'Total', 'Motivo']],
      body: ventasData,
      theme: 'striped',
      headStyles: { fillColor: [220, 38, 38] },
      styles: { fontSize: 7 },
      margin: { left: 10, right: 10 }
    });

    // Guardar PDF
    const fileName = `ventas-anuladas-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
  }
}
