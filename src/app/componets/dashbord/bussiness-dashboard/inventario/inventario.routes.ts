import { Routes } from '@angular/router';

export const InventarioRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./ingreso-list/ingreso-list.component').then((m) => m.IngresoListComponent)
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./add-ingreso/add-ingreso.component').then((m) => m.AddIngresoComponent)
  },
  {
    path: 'stock',
    loadComponent: () =>
      import('./stock-lote/stock-lote.component').then((m) => m.StockLoteComponent)
  }
];
