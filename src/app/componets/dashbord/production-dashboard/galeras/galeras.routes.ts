import { Routes } from '@angular/router';

export const galerasRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./galera-list/galera-list.component').then(m => m.GaleraListComponent)
  },
  {
    path: 'add',
    loadComponent: () => import('./add-galera/add-galera.component').then(m => m.AddGaleraComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./edit-galera/edit-galera.component').then(m => m.EditGaleraComponent)
  },
  {
    path: 'view/:id',
    loadComponent: () => import('./view-galera/view-galera.component').then(m => m.ViewGaleraComponent)
  }
];
