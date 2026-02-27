import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { IngresoInventarioService } from '../../../../../shared/services/ingreso-inventario.service';
import { LoteService } from '../../../../../shared/services/lote.service';
import { StockLote } from '../../../../../shared/interfaces/inventario';

@Component({
  selector: 'app-stock-lote',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './stock-lote.component.html',
  styleUrls: ['./stock-lote.component.scss']
})
export class StockLoteComponent implements OnInit {
  stock: StockLote[] = [];
  isLoading = false;
  loteFilter: number | null = null;
  lotes: any[] = [];

  constructor(
    private inventarioService: IngresoInventarioService,
    private loteService: LoteService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadLotes();
    this.loadStock();
  }

  loadLotes() {
    this.loteService.getLotes({ activo: true, limit: 1000 }).subscribe({
      next: (response) => {
        this.lotes = response.data.data;
      },
      error: () => {
        this.toastr.error('Error al cargar lotes', 'Error');
      }
    });
  }

  loadStock() {
    this.isLoading = true;
    this.inventarioService.getStockPorLote(this.loteFilter || undefined).subscribe({
      next: (response) => {
        this.stock = response.data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.toastr.error('Error al cargar stock', 'Error');
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  applyFilter() {
    this.loadStock();
  }

  clearFilter() {
    this.loteFilter = null;
    this.loadStock();
  }

  getStockPorLote(): any[] {
    const grouped: any = {};
    
    this.stock.forEach(item => {
      const loteId = item.lote?.id || 0;
      const galera = item.lote?.galera || 'Sin lote';
      
      if (!grouped[loteId]) {
        grouped[loteId] = {
          loteId,
          galera,
          productos: [],
          totalCartones: 0,
          valorTotal: 0
        };
      }
      
      grouped[loteId].productos.push(item);
      grouped[loteId].totalCartones += item.cantidad;
      grouped[loteId].valorTotal += item.cantidad * (item.producto?.precio || 0);
    });
    
    return Object.values(grouped);
  }

  getTotalStock(): number {
    return this.stock.reduce((sum, item) => sum + item.cantidad, 0);
  }
}
