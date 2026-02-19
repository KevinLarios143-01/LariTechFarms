import { Routes } from '@angular/router';

export const ClientesRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./cliente-list/cliente-list.component').then((m) => m.ClienteListComponent)
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./add-cliente/add-cliente.component').then((m) => m.AddClienteComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./edit-cliente/edit-cliente.component').then((m) => m.EditClienteComponent)
  },
  {
    path: 'view/:id',
    loadComponent: () =>
      import('./view-cliente/view-cliente.component').then((m) => m.ViewClienteComponent)
  }
];
