import { Routes } from '@angular/router';

export const GastosOperacionRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./gasto-list/gasto-list.component').then((m) => m.GastoListComponent)
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./add-gasto/add-gasto.component').then((m) => m.AddGastoComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./edit-gasto/edit-gasto.component').then((m) => m.EditGastoComponent)
  },
  {
    path: 'view/:id',
    loadComponent: () =>
      import('./view-gasto/view-gasto.component').then((m) => m.ViewGastoComponent)
  }
];
