import { AsyncPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { IngresoInventarioService } from '../../../../../shared/services/ingreso-inventario.service';
import { StockLote } from '../../../../../shared/interfaces/inventario';

@Component({
  selector: 'app-stock-lote-view',
  standalone: true,
  imports: [SharedModule, RouterModule, NgSelectModule, AsyncPipe, DatePipe, DecimalPipe],
  templateUrl: './stock-lote-view.component.html',
  styleUrls: ['./stock-lote-view.component.scss']
})
export class StockLoteViewComponent implements OnInit {
  stockList$!: Observable<StockLote[]>;
  loading = false;

  constructor(
    private readonly ingresoService: IngresoInventarioService
  ) {}

  ngOnInit(): void {
    this.loadStock();
  }

  loadStock() {
    this.loading = true;
    this.stockList$ = this.ingresoService.getStockPorLote().pipe(
      map(response => response.data || [])
    );
    this.loading = false;
  }

  getTotalStock(): number {
    let total = 0;
    this.stockList$.subscribe(stocks => {
      total = stocks.reduce((sum, stock) => sum + stock.cantidad, 0);
    });
    return total;
  }
}
