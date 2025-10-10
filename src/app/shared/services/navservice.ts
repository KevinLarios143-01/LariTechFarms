import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

import { Router } from '@angular/router';
// Menu
export interface Menu {
  headTitle?: string;
  headTitle2?: string;
  path?: string;
  dirchange?: boolean;
  title?: string;
  icon?: string;
  type?: string;
  badgeValue?: string;
  badgeClass?: string;
  active?: boolean;
  selected?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  Menusub?: boolean;
  target?: boolean;
  menutype?: string;
  badgeType?: string
}

@Injectable({
  providedIn: 'root',
})
export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  // Search Box
  public search = false;

  // Language
  public language = false;

  // Mega Menu
  public megaMenu = false;
  public levelMenu = false;
  public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  // Full screen
  public fullScreen = false;
  active: any;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
          this.megaMenu = false;
          this.levelMenu = false;
        }
        if (evt.target.innerWidth < 1199) {
          this.megaMenuColapse = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      });
    }
  }

  ngOnDestroy() {
    this.unsubscriber.next;
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    // Dashboard
    { headTitle: 'DASHBOARDS' },
    {
      title: 'Dashboards',
      icon: 'home',
      dirchange: false,
      type: 'sub',
      active: false,
      children: [
        {
          title: 'RH Dashboard',
          dirchange: false,
          type: 'sub',
          active: false,
          selected: false,
          children: [
            {
              title: 'Dashboard',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/dashboard/hrmdashboards/dashboard',
            },
            // {
            //   title: 'Departamento',
            //   dirchange: false,
            //   type: 'link',
            //   active: false,
            //   selected: false,
            //   path: '/dashboard/hrmdashboards/department',
            // },
            {
              title: 'Empleados', type: 'sub', active: false, selected: false, children: [
                { path: '/dashboard/hrmdashboards/employees/employee-list', title: 'Lista de Empleados', type: 'link', selected: false },
                //{ path: '/dashboard/hrmdashboards/employees/view-employee', title: 'Ver Empleado', type: 'link', selected: false },
                //{ path: '/dashboard/hrmdashboards/employees/add-employee', title: 'Agregar Empleado', type: 'link', selected: false },
              ]
            },
            {
              title: 'Usuarios', type: 'sub', active: false, selected: false, children: [
                { path: '/dashboard/hrmdashboards/users/user-list', title: 'Lista de Usuarios', type: 'link', selected: false },
                //{ path: '/dashboard/hrmdashboards/users/view-user', title: 'Ver Usuario', type: 'link', selected: false },
                { path: '/dashboard/hrmdashboards/users/add-user', title: 'Agregar Usuario', type: 'link', selected: false },
              ]
            },
            // {
            //   title: 'Asistencia', type: 'sub', active: false, selected: false, Menusub: false, children: [
            //     { path: '/dashboard/hrmdashboards/attendance/attendence-list', title: 'Lista de Asistencia', type: 'link', selected: false },
            //     { path: '/dashboard/hrmdashboards/attendance/attendencebyuser', title: 'Asistencia por Usuario', type: 'link', selected: false },
            //     { path: '/dashboard/hrmdashboards/attendance/attendenceview', title: 'Vista de Asistencia', type: 'link', selected: false },
            //     { path: '/dashboard/hrmdashboards/attendance/overview-calendar', title: 'Calendario General', type: 'link', selected: false },
            //     { path: '/dashboard/hrmdashboards/attendance/attendence-mark', title: 'Marcar Asistencia', type: 'link', selected: false },
            //     { path: '/dashboard/hrmdashboards/attendance/leave-settings', title: 'Configuración de Permisos', type: 'link', selected: false },
            //     { path: '/dashboard/hrmdashboards/attendance/leave-applications', title: 'Solicitudes de Permiso', type: 'link', selected: false },
            //     { path: '/dashboard/hrmdashboards/attendance/recent-leaves', title: 'Permisos Recientes', type: 'link', selected: false },
            //   ]
            // },
            // { title: 'Premios', dirchange: false, type: 'link', active: false, selected: false, path: '/dashboard/hrmdashboards/awards' },
            // { title: 'Días Festivos', dirchange: false, type: 'link', active: false, selected: false, path: '/dashboard/hrmdashboards/holidays' },
            // { title: 'Tablero de Avisos', dirchange: false, type: 'link', active: false, selected: false, path: '/dashboard/hrmdashboards/notice-board' },
            // { title: 'Gastos', dirchange: false, type: 'link', active: false, selected: false, path: '/dashboard/hrmdashboards/expenses' },
            // {
            //   title: 'Nómina', type: 'sub', active: false, selected: false, children: [
            //     { path: '/dashboard/hrmdashboards/payroll/employee-salary', title: 'Salario de Empleados', type: 'link', selected: false },
            //     { path: '/dashboard/hrmdashboards/payroll/add-payroll', title: 'Agregar Nómina', type: 'link', selected: false },
            //     { path: '/dashboard/hrmdashboards/payroll/edit-payroll', title: 'Editar Nómina', type: 'link', selected: false },
            //   ]
            // },
            // { title: 'Eventos', dirchange: false, type: 'link', active: false, selected: false, path: '/dashboard/hrmdashboards/events' },

            // { title: 'Configuración', dirchange: false, type: 'link', active: false, selected: false, path: '/dashboard/hrmdashboards/settings' },
          ]
        },
        // {
        //   title: 'Empleados Dashboard', type: 'sub', badgeType: 'success', badgeValue: '2', active: false, selected: false, children: [
        //     { path: '/dashboard/employee-dashboard/dashboard', title: 'Dashboard', type: 'link', selected: false },
        //     { path: '/dashboard/employee-dashboard/attendance', title: 'Asistencia', type: 'link', selected: false },
        //     { path: '/dashboard/employee-dashboard/apply-leaves', title: 'Solicitar Permisos', type: 'link', selected: false },
        //     { path: '/dashboard/employee-dashboard/my-leaves', title: 'Mis Permisos', type: 'link', selected: false },
        //     { path: '/dashboard/employee-dashboard/payslips', title: 'Recibos de Pago', type: 'link', selected: false },
        //     { path: '/dashboard/employee-dashboard/expenses', title: 'Gastos', type: 'link', selected: false },
        //   ]
        // },
        // {
        //   title: 'Tareas Dashboard', type: 'sub', badgeType: 'success', badgeValue: '2', selected: false, active: false, children: [
        //     { path: '/dashboard/task-dashboard/dashboard', title: 'Dashboard', type: 'link', selected: false },
        //     { path: '/dashboard/task-dashboard/task-list', title: 'Lista de Tareas', type: 'link', selected: false },
        //     { path: '/dashboard/task-dashboard/running-tasks', title: 'Tareas en Progreso', type: 'link', selected: false },
        //     { path: '/dashboard/task-dashboard/onhold-tasks', title: 'Tareas en Espera', type: 'link', selected: false },
        //     { path: '/dashboard/task-dashboard/completed-tasks', title: 'Tareas Completadas', type: 'link', selected: false },
        //     { path: '/dashboard/task-dashboard/view-tasks', title: 'Ver Tareas', type: 'link', selected: false },
        //     { path: '/dashboard/task-dashboard/overview-calendar', title: 'Calendario General', type: 'link', selected: false },
        //     { path: '/dashboard/task-dashboard/task-board', title: 'Tablero de Tareas', type: 'link', selected: false },
        //     { path: '/dashboard/task-dashboard/new-task', title: 'Nuevas Tareas', type: 'link', selected: false },
        //     { path: '/dashboard/task-dashboard/user-profile', title: 'Perfil de Usuario', type: 'link', selected: false },
        //   ]
        // },
        // {
        //   title: 'Proyectos Dashboard', type: 'sub', badgeType: 'success', badgeValue: '2', selected: false, active: false, children: [
        //     { path: '/dashboard/project-dashboard/dashboard', title: 'Dashboard', type: 'link', selected: false },
        //     { path: '/dashboard/project-dashboard/project-list', title: 'Lista de Proyectos', type: 'link', selected: false },
        //     { path: '/dashboard/project-dashboard/view-project', title: 'Ver Proyecto', type: 'link', selected: false },
        //     { path: '/dashboard/project-dashboard/overview-calendar', title: 'Calendario General', type: 'link', selected: false },
        //     { path: '/dashboard/project-dashboard/new-project', title: 'Nuevo Proyecto', type: 'link', selected: false },
        //   ]
        // },
        {
          title: 'Clientes Dashboard', type: 'sub', badgeType: 'success', badgeValue: '2', selected: false, active: false, children: [
            //{ path: '/dashboard/client-dashboard/dashboard', title: 'Dashboard', type: 'link', selected: false },
            { path: '/dashboard/client-dashboard/client-list', title: 'Lista de Clientes', type: 'link', selected: false },
            //{ path: '/dashboard/client-dashboard/view-client', title: 'Ver Cliente', type: 'link', selected: false },
            { path: '/dashboard/client-dashboard/new-client', title: 'Nuevo Cliente', type: 'link', selected: false },
            //{ path: '/dashboard/client-dashboard/user-profile', title: 'Perfil de Usuario', type: 'link', selected: false },
          ]
        },
        {
          title: 'Business Dashboard', type: 'sub', badgeType: 'info', badgeValue: '3', selected: false, active: false, children: [
            { path: '/dashboard/business-dashboard/ticket-list', title: 'Lista de Tickets', type: 'link', selected: false },
            { path: '/dashboard/business-dashboard/new-ticket', title: 'Nuevo Ticket', type: 'link', selected: false },
            { path: '/dashboard/business-dashboard/sell-list', title: 'Lista de Ventas', type: 'link', selected: false },
          ]
        },
        {
          title: 'Lotes Dashboard', type: 'sub', badgeType: 'warning', badgeValue: '3', selected: false, active: false, children: [
            { path: '/dashboard/business-dashboard/lotes', title: 'Lista de Lotes', type: 'link', selected: false },
            { path: '/dashboard/business-dashboard/lotes/new-lote', title: 'Nuevo Lote', type: 'link', selected: false },
            { path: '/dashboard/business-dashboard/lotes/estadisticas', title: 'Estadísticas', type: 'link', selected: false },
          ]
        },
        // {
        //   title: 'Trabajos Dashboard', type: 'sub', badgeType: 'success', badgeValue: '2', selected: false, active: false, children: [
        //     { path: '/dashboard/job-dashboard/dashboard', title: 'Dashboard', type: 'link', selected: false },
        //     { path: '/dashboard/job-dashboard/job-lists', title: 'Lista de Trabajos', type: 'link', selected: false },
        //     { path: '/dashboard/job-dashboard/job-view', title: 'Ver Trabajo', type: 'link', selected: false },
        //     { path: '/dashboard/job-dashboard/job-applications', title: 'Solicitudes de Trabajo', type: 'link', selected: false },
        //     { path: '/dashboard/job-dashboard/apply-job', title: 'Aplicar a Trabajo', type: 'link', selected: false },
        //     { path: '/dashboard/job-dashboard/new-job', title: 'Nuevo Trabajo', type: 'link', selected: false },
        //     { path: '/dashboard/job-dashboard/user-profile', title: 'Perfil de Usuario', type: 'link', selected: false },
        //   ]
        // },
        {
          title: 'Super Admin', type: 'sub', active: false, selected: false, children: [
            //{ path: '/dashboard/super-admin/dashboard', title: 'Dashboard', type: 'link', selected: false },
            { path: '/dashboard/super-admin/companies', title: 'Empresas', type: 'link', selected: false },
            { path: '/dashboard/super-admin/subscription-plans', title: 'Planes de Suscripción', type: 'link', selected: false },
            //{ path: '/dashboard/super-admin/invoices', title: 'Facturas', type: 'link', selected: false },
            //{ path: '/dashboard/super-admin/super-admins', title: 'Super Administradores', type: 'link', selected: false },
            //{ path: '/dashboard/super-admin/settings', title: 'Configuración', type: 'link', selected: false },
            //{ path: '/dashboard/super-admin/role-access', title: 'Acceso por Roles', type: 'link', selected: false },
          ]
        }
      ],
    },

    // {
    //   title: 'Submenús', icon: 'sliders', type: 'sub', active: false, selected: false, children: [
    //     { title: 'nivel-1', type: 'empty', selected: false },
    //     {
    //       title: 'nivel2', type: 'sub', active: false, selected: false, children: [
    //         { title: 'nivel-2.1', type: 'empty', selected: false },
    //         { title: 'nivel-2.2', type: 'empty', selected: false },
    //         {
    //           title: 'nivel2.3', type: 'sub', active: false, selected: false, children: [
    //             { title: 'nivel-2.3.1', type: 'empty', selected: false },
    //             { title: 'nivel-2.3.2', type: 'empty', selected: false },
    //           ]
    //         },
    //       ]
    //     },
    //   ]
    // },
    // {
    //   title: 'Cuenta', icon: 'lock', type: 'sub', badgeType: 'success', active: false, selected: false, children: [

    //     {
    //       title: 'páginas-de-error', type: 'sub', badgeType: 'success', badgeValue: '2', active: false, selected: false, children: [
    //         { path: '/error-page/error404', title: '404', type: 'link', selected: false },

    //       ]
    //     },
    //   ]
    // },
  ];



  // Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
