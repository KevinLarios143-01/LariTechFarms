import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard/business-dashboard',
    children: [
      {
        path: 'clientes',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            loadComponent: () =>
              import('./clientes/cliente-list/cliente-list.component').then((m) => m.ClienteListComponent)
          },
          {
            path: 'add',
            loadComponent: () =>
              import('./clientes/add-cliente/add-cliente.component').then((m) => m.AddClienteComponent)
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import('./clientes/edit-cliente/edit-cliente.component').then((m) => m.EditClienteComponent)
          },
          {
            path: 'view/:id',
            loadComponent: () =>
              import('./clientes/view-cliente/view-cliente.component').then((m) => m.ViewClienteComponent)
          }
        ]
      },
      {
        path: 'ventas',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            loadComponent: () =>
              import('./ventas/venta-list/venta-list.component').then((m) => m.VentaListComponent)
          },
          {
            path: 'add',
            loadComponent: () =>
              import('./ventas/add-venta/add-venta.component').then((m) => m.AddVentaComponent)
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import('./ventas/add-venta/add-venta.component').then((m) => m.AddVentaComponent)
          },
          {
            path: 'view/:id',
            loadComponent: () =>
              import('./ventas/view-venta/view-venta.component').then((m) => m.ViewVentaComponent)
          }
        ]
      },
      {
        path: 'tickets',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            loadComponent: () =>
              import('./tickets/ticket-list/ticket-list.component').then((m) => m.TicketListComponent)
          },
          {
            path: 'generar/:id',
            loadComponent: () =>
              import('./tickets/generar-tickets/generar-tickets.component').then((m) => m.GenerarTicketsComponent)
          },
          {
            path: 'view/:id',
            loadComponent: () =>
              import('./tickets/view-ticket/view-ticket.component').then((m) => m.ViewTicketComponent)
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import('./tickets/edit-ticket/edit-ticket.component').then((m) => m.EditTicketComponent)
          }
        ]
      },
      {
        path: 'inventario',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            loadComponent: () =>
              import('./inventario/ingreso-list/ingreso-list.component').then((m) => m.IngresoListComponent)
          },
          {
            path: 'add',
            loadComponent: () =>
              import('./inventario/add-ingreso/add-ingreso.component').then((m) => m.AddIngresoComponent)
          },
          {
            path: 'stock',
            loadComponent: () =>
              import('./inventario/stock-lote/stock-lote.component').then((m) => m.StockLoteComponent)
          }
        ]
      },
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