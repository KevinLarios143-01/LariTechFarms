import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'error-page',
    children: [

{
  path: 'error404',
  loadComponent: () =>
    import('./error404/error404.component').then((m) => m.Error404Component),  
},

      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule {
  static routes = routes;

 }
