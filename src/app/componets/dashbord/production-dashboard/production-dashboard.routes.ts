import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard/production-dashboard',
    children: [
      {
        path: '',
        redirectTo: 'huevos',
        pathMatch: 'full'
      },
      {
        path: 'huevos',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            loadComponent: () =>
              import('./huevos/huevo-list/huevo-list.component').then((m) => m.HuevoListComponent)
          },
          {
            path: 'new',
            loadComponent: () =>
              import('./huevos/new-huevo/new-huevo.component').then((m) => m.NewHuevoComponent)
          },
          {
            path: 'view/:id',
            loadComponent: () =>
              import('./huevos/view-huevo/view-huevo.component').then((m) => m.ViewHuevoComponent)
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import('./huevos/new-huevo/new-huevo.component').then((m) => m.NewHuevoComponent)
          },
          {
            path: 'estadisticas',
            loadComponent: () =>
              import('./huevos/estadisticas/estadisticas.component').then((m) => m.EstadisticasComponent)
          }
        ]
      },
      {
        path: 'lotes',
        loadComponent: () =>
          import('../bussiness-dashboard/lotes/lote-list/lote-list.component').then((m) => m.LoteListComponent)
      },
      {
        path: 'lotes/new-lote',
        loadComponent: () =>
          import('../bussiness-dashboard/lotes/new-lote/new-lote.component').then((m) => m.NewLoteComponent)
      },
      {
        path: 'lotes/estadisticas',
        loadComponent: () =>
          import('../bussiness-dashboard/lotes/estadisticas/estadisticas.component').then((m) => m.EstadisticasComponent)
      },
      {
        path: 'lotes/view-lote/:id',
        loadComponent: () =>
          import('../bussiness-dashboard/lotes/view-lote/view-lote.component').then((m) => m.ViewLoteComponent)
      },
      {
        path: 'lotes/edit-lote/:id',
        loadComponent: () =>
          import('../bussiness-dashboard/lotes/new-lote/new-lote.component').then((m) => m.NewLoteComponent)
      },
      {
        path: 'galeras',
        loadChildren: () => import('./galeras/galeras.routes').then(m => m.galerasRoutes)
      },
      {
        path: 'productos',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            loadComponent: () =>
              import('./productos/producto-list/producto-list.component').then((m) => m.ProductoListComponent)
          },
          {
            path: 'new',
            loadComponent: () =>
              import('./productos/new-producto/new-producto.component').then((m) => m.NewProductoComponent)
          },
          {
            path: 'view/:id',
            loadComponent: () =>
              import('./productos/view-producto/view-producto.component').then((m) => m.ViewProductoComponent)
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import('./productos/edit-producto/edit-producto.component').then((m) => m.EditProductoComponent)
          },
          {
            path: 'estadisticas',
            loadComponent: () =>
              import('./productos/estadisticas/estadisticas.component').then((m) => m.EstadisticasComponent)
          },

        ]
      },
      {
        path: 'inventario',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            loadComponent: () =>
              import('./inventario/inventario-list/inventario-list.component').then((m) => m.InventarioListComponent)
          },
          {
            path: 'add',
            loadComponent: () =>
              import('./inventario/add-inventario/add-inventario.component').then((m) => m.AddInventarioComponent)
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import('./inventario/edit-inventario/edit-inventario.component').then((m) => m.EditInventarioComponent)
          },
          {
            path: 'view/:id',
            loadComponent: () =>
              import('./inventario/view-inventario/view-inventario.component').then((m) => m.ViewInventarioComponent)
          }
        ]
      },
      {
        path: 'vehiculos',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            loadComponent: () =>
              import('./vehiculos/vehiculo-list/vehiculo-list.component').then((m) => m.VehiculoListComponent)
          },
          {
            path: 'add',
            loadComponent: () =>
              import('./vehiculos/add-vehiculo/add-vehiculo.component').then((m) => m.AddVehiculoComponent)
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import('./vehiculos/add-vehiculo/add-vehiculo.component').then((m) => m.AddVehiculoComponent)
          },
          {
            path: 'view/:id',
            loadComponent: () =>
              import('./vehiculos/view-vehiculo/view-vehiculo.component').then((m) => m.ViewVehiculoComponent)
          }
        ]
      },
      {
        path: 'gastos-operacion',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            loadComponent: () =>
              import('./gastos-operacion/gasto-list/gasto-list.component').then((m) => m.GastoListComponent)
          },
          {
            path: 'add',
            loadComponent: () =>
              import('./gastos-operacion/add-gasto/add-gasto.component').then((m) => m.AddGastoComponent)
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import('./gastos-operacion/edit-gasto/edit-gasto.component').then((m) => m.EditGastoComponent)
          },
          {
            path: 'view/:id',
            loadComponent: () =>
              import('./gastos-operacion/view-gasto/view-gasto.component').then((m) => m.ViewGastoComponent)
          }
        ]
      },
      {
        path: 'ingreso-inventario',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            loadComponent: () =>
              import('./ingreso-inventario/ingreso-inventario-list/ingreso-inventario-list.component').then((m) => m.IngresoInventarioListComponent)
          },
          {
            path: 'add',
            loadComponent: () =>
              import('./ingreso-inventario/add-ingreso-inventario/add-ingreso-inventario.component').then((m) => m.AddIngresoInventarioComponent)
          },
          {
            path: 'view/:id',
            loadComponent: () =>
              import('./ingreso-inventario/view-ingreso-inventario/view-ingreso-inventario.component').then((m) => m.ViewIngresoInventarioComponent)
          },
          {
            path: 'stock-lote',
            loadComponent: () =>
              import('./ingreso-inventario/stock-lote-view/stock-lote-view.component').then((m) => m.StockLoteViewComponent)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionDashboardRoutingModule {
  static routes = routes;
}