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