import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { ProductosService } from '../../production-dashboard/productos/services/productos.service';
import { VentaService } from '../../../../shared/services/venta.service';
import { LoteService } from '../../../../shared/services/lote.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-productos-report',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './productos-report.component.html',
  styleUrls: ['./productos-report.component.scss']
})
export class ProductosReportComponent implements OnInit {
  isLoading = false;
  
  // Datos
  estadisticas: any = null;
  productos: any[] = [];
  productosStockBajo: any[] = [];
  productosMasVendidos: any[] = [];
  
  // Filtros
  categoriaSeleccionada: string = '';
  loteSeleccionado: number | null = null;
  
  // Opciones
  categorias: string[] = [];
  lotes: any[] = [];

  constructor(
    private productosService: ProductosService,
    private ventaService: VentaService,
    private loteService: LoteService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadLotes();
    this.loadReport();
  }

  loadLotes() {
    this.loteService.getLotes({ estado: 'Activo', limit: 100 }).subscribe({
      next: (response) => {
        this.lotes = response.data?.data || [];
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar lotes:', error);
      }
    });
  }

  loadReport() {
    this.isLoading = true;
    
    let params: any = {};
    
    if (this.loteSeleccionado) {
      params.idLote = this.loteSeleccionado;
    }
    
    if (this.categoriaSeleccionada) {
      params.categoria = this.categoriaSeleccionada;
    }
    
    Promise.all([
      this.productosService.getStatsWithFilters(params).toPromise(),
      this.productosService.getProductos(params).toPromise(),
      this.ventaService.getVentasEstadisticas(params).toPromise()
    ]).then(([statsResponse, productosResponse, ventasStatsResponse]) => {
      console.log('Estadísticas productos:', statsResponse);
      console.log('Productos:', productosResponse);
      console.log('Estadísticas ventas:', ventasStatsResponse);
      
      this.estadisticas = statsResponse?.data;
      this.productos = productosResponse?.data?.data || productosResponse?.data || [];
      this.productosStockBajo = this.estadisticas?.productosStockBajo || [];
      this.productosMasVendidos = ventasStatsResponse?.data?.topProductos || [];
      
      // Extraer categorías únicas
      this.categorias = [...new Set(this.productos.map((p: any) => p.categoria).filter(Boolean))];
      
      this.isLoading = false;
      this.cdr.detectChanges();
    }).catch(error => {
      console.error('Error al cargar reporte:', error);
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }

  get productosFiltrados() {
    if (!this.categoriaSeleccionada) {
      return this.productos;
    }
    return this.productos.filter(p => p.categoria === this.categoriaSeleccionada);
  }

  exportarPDF() {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Título
    doc.setFontSize(18);
    doc.text('Reporte de Productos', pageWidth / 2, 15, { align: 'center' });
    
    let yPos = 25;
    
    // Estadísticas
    if (this.estadisticas) {
      doc.setFontSize(12);
      doc.text('Resumen General', 14, yPos);
      yPos += 7;
      
      const statsData = [
        ['Total Productos', this.estadisticas.totalProductos || 0],
        ['Productos Activos', this.estadisticas.productosActivos || 0],
        ['Productos Inactivos', this.estadisticas.productosInactivos || 0],
        ['Total Unidades en Stock', this.estadisticas.totalUnidadesStock || 0],
        ['Productos con Stock Bajo', this.productosStockBajo.length]
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
    
    // Productos con Stock Bajo
    if (this.productosStockBajo.length > 0) {
      doc.setFontSize(12);
      doc.text('Productos con Stock Bajo', 14, yPos);
      yPos += 7;
      
      const stockBajoData = this.productosStockBajo.map((p: any) => [
        p.nombre,
        p.categoria || 'Sin categoría',
        p.stock
      ]);
      
      autoTable(doc, {
        startY: yPos,
        head: [['Producto', 'Categoría', 'Stock']],
        body: stockBajoData,
        theme: 'striped',
        headStyles: { fillColor: [220, 38, 38] },
        margin: { left: 14, right: 14 }
      });
      
      yPos = (doc as any).lastAutoTable.finalY + 10;
    }
    
    // Productos Más Vendidos
    if (this.productosMasVendidos.length > 0) {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }
      
      doc.setFontSize(12);
      doc.text('Top 10 Productos Más Vendidos', 14, yPos);
      yPos += 7;
      
      const masVendidosData = this.productosMasVendidos.slice(0, 10).map((p: any) => [
        p.nombreProducto || p.nombre,
        p.cantidadVendida,
        `Q${Number(p.montoTotal || 0).toFixed(2)}`
      ]);
      
      autoTable(doc, {
        startY: yPos,
        head: [['Producto', 'Cantidad Vendida', 'Monto Total']],
        body: masVendidosData,
        theme: 'striped',
        headStyles: { fillColor: [34, 197, 94] },
        margin: { left: 14, right: 14 }
      });
      
      yPos = (doc as any).lastAutoTable.finalY + 10;
    }
    
    // Inventario Completo
    if (this.productosFiltrados.length > 0) {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }
      
      doc.setFontSize(12);
      doc.text('Inventario de Productos', 14, yPos);
      yPos += 7;
      
      const inventarioData = this.productosFiltrados.map((p: any) => [
        p.nombre,
        p.categoria || 'Sin categoría',
        p.tamanio || '-',
        p.stock,
        `Q${Number(p.precio || 0).toFixed(2)}`,
        p.activo ? 'Activo' : 'Inactivo'
      ]);
      
      autoTable(doc, {
        startY: yPos,
        head: [['Producto', 'Categoría', 'Tamaño', 'Stock', 'Precio', 'Estado']],
        body: inventarioData,
        theme: 'striped',
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 8 },
        margin: { left: 14, right: 14 }
      });
    }
    
    // Guardar PDF
    const fileName = `reporte-productos-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
  }

  exportarExcel() {
    const workbook = XLSX.utils.book_new();
    
    // Hoja 1: Resumen
    if (this.estadisticas) {
      const statsData = [
        ['Métrica', 'Valor'],
        ['Total Productos', this.estadisticas.totalProductos || 0],
        ['Productos Activos', this.estadisticas.productosActivos || 0],
        ['Productos Inactivos', this.estadisticas.productosInactivos || 0],
        ['Total Unidades en Stock', this.estadisticas.totalUnidadesStock || 0],
        ['Productos con Stock Bajo', this.productosStockBajo.length]
      ];
      
      const wsStats = XLSX.utils.aoa_to_sheet(statsData);
      wsStats['!cols'] = [{ wch: 30 }, { wch: 15 }];
      XLSX.utils.book_append_sheet(workbook, wsStats, 'Resumen');
    }
    
    // Hoja 2: Stock Bajo
    if (this.productosStockBajo.length > 0) {
      const stockBajoData = [
        ['Producto', 'Categoría', 'Stock Actual'],
        ...this.productosStockBajo.map((p: any) => [
          p.nombre,
          p.categoria || 'Sin categoría',
          p.stock
        ])
      ];
      
      const wsStockBajo = XLSX.utils.aoa_to_sheet(stockBajoData);
      wsStockBajo['!cols'] = [{ wch: 30 }, { wch: 20 }, { wch: 15 }];
      XLSX.utils.book_append_sheet(workbook, wsStockBajo, 'Stock Bajo');
    }
    
    // Hoja 3: Productos Más Vendidos
    if (this.productosMasVendidos.length > 0) {
      const masVendidosData = [
        ['Producto', 'Cantidad Vendida', 'Monto Total'],
        ...this.productosMasVendidos.map((p: any) => [
          p.nombreProducto || p.nombre,
          p.cantidadVendida,
          p.montoTotal
        ])
      ];
      
      const wsMasVendidos = XLSX.utils.aoa_to_sheet(masVendidosData);
      wsMasVendidos['!cols'] = [{ wch: 30 }, { wch: 18 }, { wch: 15 }];
      XLSX.utils.book_append_sheet(workbook, wsMasVendidos, 'Más Vendidos');
    }
    
    // Hoja 4: Inventario Completo
    if (this.productosFiltrados.length > 0) {
      const inventarioData = [
        ['Producto', 'Categoría', 'Tamaño', 'Stock', 'Precio', 'Estado'],
        ...this.productosFiltrados.map((p: any) => [
          p.nombre,
          p.categoria || 'Sin categoría',
          p.tamanio || '-',
          p.stock,
          p.precio,
          p.activo ? 'Activo' : 'Inactivo'
        ])
      ];
      
      const wsInventario = XLSX.utils.aoa_to_sheet(inventarioData);
      wsInventario['!cols'] = [
        { wch: 30 },
        { wch: 20 },
        { wch: 15 },
        { wch: 10 },
        { wch: 12 },
        { wch: 12 }
      ];
      XLSX.utils.book_append_sheet(workbook, wsInventario, 'Inventario');
    }
    
    // Guardar archivo
    const fileName = `reporte-productos-${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  }

  getTotalValorInventario(): number {
    return this.productosFiltrados.reduce((sum: number, p: any) => {
      return sum + (Number(p.precio || 0) * Number(p.stock || 0));
    }, 0);
  }
}
