import { Routes } from '@angular/router';

export const ReportsRoutes: Routes = [
    {
        path: '',
        redirectTo: 'ventas',
        pathMatch: 'full'
    },
    {
        path: 'ventas',
        loadComponent: () =>
            import('./ventas-report/ventas-report.component').then((m) => m.VentasReportComponent)
    },
    {
        path: 'productos',
        loadComponent: () =>
            import('./productos-report/productos-report.component').then((m) => m.ProductosReportComponent)
    },
    {
        path: 'tickets',
        loadComponent: () =>
            import('./tickets-report/tickets-report.component').then((m) => m.TicketsReportComponent)
    },
    {
        path: 'huevos',
        loadComponent: () =>
            import('./huevos-report/huevos-report.component').then((m) => m.HuevosReportComponent)
    },
    {
        path: 'empleados',
        loadComponent: () =>
            import('./empleados-report/empleados-report.component').then((m) => m.EmpleadosReportComponent)
    },
    {
        path: 'vehiculos',
        loadComponent: () =>
            import('./vehiculos-report/vehiculos-report.component').then((m) => m.VehiculosReportComponent)
    }
];
