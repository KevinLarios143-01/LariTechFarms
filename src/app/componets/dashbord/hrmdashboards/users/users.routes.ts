import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard/hrmdashboards/users',
    children: [
      {
        path: 'user-list',
        loadComponent: () =>
          import('./user-list/user-list.component').then((m) => m.UserListComponent),

      },
      {
        path: 'view-user/:id',
        loadComponent: () =>
          import('./view-user/view-user.component').then((m) => m.ViewUserComponent),

      },
      {
        path: 'add-user',
        loadComponent: () =>
          import('./add-user/add-user.component').then((m) => m.AddUserComponent),

      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
  static routes = routes;
 }
