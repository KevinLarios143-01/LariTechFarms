import { Routes } from '@angular/router';

export const InventarioRoutes: Routes = [
  {
    path: 'dashboard/production-dashboard/inventario',
    children: [
      {
        path: 'list',
        loadComponent: () => import('./inventario-list/inventario-list.component').then(m => m.InventarioListComponent),
        data: { title: 'Lista de Inventario' }
      },
      {
        path: 'add',
        loadComponent: () => import('./add-inventario/add-inventario.component').then(m => m.AddInventarioComponent),
        data: { title: 'Agregar Item' }
      },
      {
        path: 'edit/:id',
        loadComponent: () => import('./edit-inventario/edit-inventario.component').then(m => m.EditInventarioComponent),
        data: { title: 'Editar Item' }
      },
      {
        path: 'view/:id',
        loadComponent: () => import('./view-inventario/view-inventario.component').then(m => m.ViewInventarioComponent),
        data: { title: 'Ver Item' }
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  }
];
