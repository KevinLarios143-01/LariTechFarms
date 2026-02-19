import { Routes } from '@angular/router';

export const VentasRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./venta-list/venta-list.component').then((m) => m.VentaListComponent)
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./add-venta/add-venta.component').then((m) => m.AddVentaComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./add-venta/add-venta.component').then((m) => m.AddVentaComponent)
  },
  {
    path: 'view/:id',
    loadComponent: () =>
      import('./view-venta/view-venta.component').then((m) => m.ViewVentaComponent)
  }
];
