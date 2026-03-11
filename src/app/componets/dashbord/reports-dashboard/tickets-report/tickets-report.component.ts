import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { TicketService } from '../../../../shared/services/ticket.service';
import { LoteService } from '../../../../shared/services/lote.service';
import { ProductosService } from '../../production-dashboard/productos/services/productos.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-tickets-report',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './tickets-report.component.html',
  styleUrls: ['./tickets-report.component.scss']
})
export class TicketsReportComponent implements OnInit {
  isLoading = false;
  
  // Filtros
  tipoFiltro: 'dia' | 'mes' | 'rango' = 'mes';
  fechaSeleccionada = '';
  mesSeleccionado = '';
  anioSeleccionado = '';
  fechaDesde = '';
  fechaHasta = '';
  loteSeleccionado: number | null = null;
  categoriaSeleccionada: string = '';
  estadoSeleccionado: string = '';
  
  // Datos
  estadisticas: any = null;
  tickets: any[] = [];
  
  // Opciones
  lotes: any[] = [];
  categorias: string[] = [];
  estados = ['Pendiente', 'Autorizado', 'Despachado', 'Cancelado'];
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
    private ticketService: TicketService,
    private loteService: LoteService,
    private productosService: ProductosService,
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
    
    this.loadLotes();
    this.loadCategorias();
    this.loadReport();
  }

  loadLotes() {
    this.loteService.getLotes({ estado: 'Activo' }).subscribe({
      next: (response) => {
        this.lotes = response.data?.data || [];
      },
      error: (error) => {
        console.error('Error al cargar lotes:', error);
      }
    });
  }

  loadCategorias() {
    this.productosService.getCategorias().subscribe({
      next: (response) => {
        const categoriasData = response.data || [];
        this.categorias = categoriasData.map((c: any) => c.categoria).filter((cat: string) => cat);
      },
      error: (error) => {
        console.error('Error al cargar categorías:', error);
      }
    });
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
    
    // Filtros de fecha
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
    
    // Filtros adicionales
    if (this.loteSeleccionado) {
      params.idLote = this.loteSeleccionado;
    }
    
    if (this.categoriaSeleccionada) {
      params.categoria = this.categoriaSeleccionada;
    }
    
    if (this.estadoSeleccionado) {
      params.estado = this.estadoSeleccionado;
    }

    Promise.all([
      this.ticketService.getTicketsStats(params).toPromise(),
      this.ticketService.getTickets({ ...params, limit: 1000 }).toPromise()
    ]).then(([statsResponse, ticketsResponse]) => {
      console.log('Estadísticas tickets:', statsResponse);
      console.log('Tickets:', ticketsResponse);
      
      this.estadisticas = statsResponse?.data;
      this.tickets = ticketsResponse?.data?.data || [];
      
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

    doc.setFontSize(18);
    doc.text('Reporte de Tickets de Despacho', pageWidth / 2, 15, { align: 'center' });

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
      doc.text('Resumen Estadístico', 14, yPos);
      yPos += 7;

      const statsData = [
        ['Total Tickets', this.estadisticas.totalTickets || 0],
        ['Cantidad Total', this.estadisticas.cantidadTotal || 0],
        ['Cantidad Promedio', Number(this.estadisticas.cantidadPromedio || 0).toFixed(2)]
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

    if (this.tickets.length > 0) {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }

      doc.setFontSize(12);
      doc.text('Detalle de Tickets', 14, yPos);
      yPos += 7;

      const ticketsData = this.tickets.map((t: any) => {
        const fecha = new Date(t.fecha);
        const productos = t.detalles?.map((d: any) => `${d.producto?.nombre} (${d.cantidad})`).join(', ') || 'N/A';
        return [
          t.id,
          fecha.toLocaleDateString(),
          t.lote?.galera || 'N/A',
          t.venta?.cliente?.nombre || 'N/A',
          productos.substring(0, 30) + (productos.length > 30 ? '...' : ''),
          t.estado
        ];
      });

      autoTable(doc, {
        startY: yPos,
        head: [['ID', 'Fecha', 'Galera', 'Cliente', 'Productos', 'Estado']],
        body: ticketsData,
        theme: 'striped',
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 8 },
        margin: { left: 14, right: 14 }
      });
    }

    const fileName = `reporte-tickets-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
  }

  exportarExcel() {
    const workbook = XLSX.utils.book_new();
    
    if (this.estadisticas) {
      const statsData = [
        ['Métrica', 'Valor'],
        ['Total Tickets', this.estadisticas.totalTickets || 0],
        ['Cantidad Total', this.estadisticas.cantidadTotal || 0],
        ['Cantidad Promedio', this.estadisticas.cantidadPromedio || 0]
      ];
      
      const wsStats = XLSX.utils.aoa_to_sheet(statsData);
      wsStats['!cols'] = [{ wch: 25 }, { wch: 15 }];
      XLSX.utils.book_append_sheet(workbook, wsStats, 'Resumen');
    }
    
    if (this.tickets.length > 0) {
      const ticketsData = [
        ['ID', 'Fecha', 'Galera', 'Cliente', 'Productos', 'Estado'],
        ...this.tickets.map((t: any) => {
          const fecha = new Date(t.fecha);
          const productos = t.detalles?.map((d: any) => `${d.producto?.nombre} (${d.cantidad})`).join(', ') || 'N/A';
          return [
            t.id,
            fecha.toLocaleDateString(),
            t.lote?.galera || 'N/A',
            t.venta?.cliente?.nombre || 'N/A',
            productos,
            t.estado
          ];
        })
      ];
      
      const wsTickets = XLSX.utils.aoa_to_sheet(ticketsData);
      wsTickets['!cols'] = [
        { wch: 8 },
        { wch: 12 },
        { wch: 15 },
        { wch: 25 },
        { wch: 40 },
        { wch: 12 }
      ];
      XLSX.utils.book_append_sheet(workbook, wsTickets, 'Tickets');
    }
    
    const fileName = `reporte-tickets-${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  }

  getEstadoBadge(estado: string): string {
    const badges: { [key: string]: string } = {
      'Pendiente': 'bg-warning',
      'Autorizado': 'bg-info',
      'Despachado': 'bg-success',
      'Cancelado': 'bg-danger'
    };
    return badges[estado] || 'bg-secondary';
  }
}
