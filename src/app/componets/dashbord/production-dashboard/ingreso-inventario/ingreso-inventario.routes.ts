import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard/production/ingreso-inventario',
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./ingreso-inventario-list/ingreso-inventario-list.component').then((m) => m.IngresoInventarioListComponent),
      },
      {
        path: 'add',
        loadComponent: () =>
          import('./add-ingreso-inventario/add-ingreso-inventario.component').then((m) => m.AddIngresoInventarioComponent),
      },
      {
        path: 'view/:id',
        loadComponent: () =>
          import('./view-ingreso-inventario/view-ingreso-inventario.component').then((m) => m.ViewIngresoInventarioComponent),
      },
      {
        path: 'stock-lote',
        loadComponent: () =>
          import('./stock-lote-view/stock-lote-view.component').then((m) => m.StockLoteViewComponent),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresoInventarioRoutingModule {
  static routes = routes;
}
