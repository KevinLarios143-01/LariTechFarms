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
      {
        path: 'view-sell/:id',
        loadComponent: () =>
          import('./view-sell/view-sell.component').then((m) => m.ViewSellComponent),
      },
      {
        path: 'new-sell',
        loadComponent: () =>
          import('./new-sell/new-sell.component').then((m) => m.NewSellComponent),
      },
      {
        path: 'view-ticket/:id',
        loadComponent: () =>
          import('./view-ticket/view-ticket.component').then((m) => m.ViewTicketComponent),
      },
      {
        path: 'lotes',
        loadComponent: () =>
          import('./lotes/lote-list/lote-list.component').then((m) => m.LoteListComponent),
      },
      {
        path: 'lotes/new-lote',
        loadComponent: () =>
          import('./lotes/new-lote/new-lote.component').then((m) => m.NewLoteComponent),
      },
      {
        path: 'lotes/estadisticas',
        loadComponent: () =>
          import('./lotes/estadisticas/estadisticas.component').then((m) => m.EstadisticasComponent),
      },
      {
        path: 'lotes/view-lote/:id',
        loadComponent: () =>
          import('./lotes/view-lote/view-lote.component').then((m) => m.ViewLoteComponent),
      },
      {
        path: 'lotes/edit-lote/:id',
        loadComponent: () =>
          import('./lotes/new-lote/new-lote.component').then((m) => m.NewLoteComponent),
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