import { Routes } from '@angular/router';

export const VehiculosRoutes: Routes = [
  {
    path: 'dashboard/production-dashboard/vehiculos',
    children: [
      {
        path: 'list',
        loadComponent: () => import('./vehiculo-list/vehiculo-list.component').then(m => m.VehiculoListComponent),
        data: { title: 'Lista de Vehículos' }
      },
      {
        path: 'add',
        loadComponent: () => import('./add-vehiculo/add-vehiculo.component').then(m => m.AddVehiculoComponent),
        data: { title: 'Agregar Vehículo' }
      },
      {
        path: 'edit/:id',
        loadComponent: () => import('./add-vehiculo/add-vehiculo.component').then(m => m.AddVehiculoComponent),
        data: { title: 'Editar Vehículo' }
      },
      {
        path: 'view/:id',
        loadComponent: () => import('./view-vehiculo/view-vehiculo.component').then(m => m.ViewVehiculoComponent),
        data: { title: 'Ver Vehículo' }
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  }
];
