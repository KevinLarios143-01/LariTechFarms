import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard/hrmdashboards/puestos',
    children: [
      {
        path: 'puesto-list',
        loadComponent: () =>
          import('./puesto-list/puesto-list.component').then((m) => m.PuestoListComponent),
      },
      {
        path: 'add-puesto',
        loadComponent: () =>
          import('./add-puesto/add-puesto.component').then((m) => m.AddPuestoComponent),
      },
      {
        path: 'add-puesto/:id',
        loadComponent: () =>
          import('./add-puesto/add-puesto.component').then((m) => m.AddPuestoComponent),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuestosRoutingModule {
  static routes = routes;
}
