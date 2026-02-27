import { Routes } from '@angular/router';

export const TicketsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./ticket-list/ticket-list.component').then((m) => m.TicketListComponent)
  },
  {
    path: 'generar/:id',
    loadComponent: () =>
      import('./generar-tickets/generar-tickets.component').then((m) => m.GenerarTicketsComponent)
  }
];
