import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard/business-dashboard',
    children: [
      {
        path: 'ticket-list',
        loadComponent: () =>
          import('./ticket-list/ticket-list.component').then((m) => m.TicketListComponent),
      },
      {
        path: 'new-ticket',
        loadComponent: () =>
          import('./new-ticket/new-ticket.component').then((m) => m.NewTicketComponent),
      },
      {
        path: 'sell-list',
        loadComponent: () =>
          import('./sell-list/sell-list.component').then((m) => m.SellListComponent),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessDashboardRoutingModule {
  static routes = routes;
}