# Plan de Implementación: Estandarización de Componentes

## Resumen

Estandarizar todos los módulos de listado de LariTechFarms siguiendo el patrón del módulo `employee-list`. Se abordan 7 áreas: headers, tablas, botones de acción, paginadores funcionales, selectores de registros, corrección de navegación en blanco, y traducción al español. Los módulos se agrupan por nivel de esfuerzo: los que requieren migración completa (header + tabla + botones + paginador) y los que solo necesitan ajustes parciales.

**Módulos con migración completa necesaria:**
- `client-list` (client-dashboard): header inline, tabla legacy, botones `action-btns1`, sin paginador, texto "entradas"
- `sell-list` (bussiness-dashboard): header inline, tabla legacy, botones `action-btns1`, sin paginador, texto "entradas"
- `task-list` (task-dashboard): header diferente, `mat-table` con datos estáticos, botones `action-btns1`, paginador estático, textos en inglés
- `project-list` (project-dashboard): header diferente, `mat-table` con datos estáticos, botones `action-btns1`, paginador `mat-paginator`, textos en inglés
- `job-lists` (job-dashboard): header diferente, tabla legacy, botones `action-btns1`, paginador estático, textos en inglés
- `galera-list` (production): header card-header, tabla `table-hover`, botones `btn-group btn-sm`, paginador funcional con estilo diferente
- `gasto-list` (production): header card-header, tabla `table-hover`, botones `btn-group btn-sm`, paginador funcional con estilo diferente
- `vehiculo-list` (production): header card-header, tabla `table-hover`, botones `btn-group btn-sm`, paginador funcional con estilo diferente
- `inventario-list` (production): header card-header, tabla `table-hover`, botones `btn-group btn-sm`, paginador funcional con estilo diferente
- `cliente-list` (bussiness/clientes): header card-header, tabla `table-hover`, botones `btn-group btn-sm`, paginador funcional con estilo diferente, texto "entradas"
- `venta-list` (bussiness/ventas): header card-header, tabla `table-hover`, botones `btn-group btn-sm`, paginador funcional con estilo diferente
- `tickets/ticket-list` (bussiness/tickets): header card-header, tabla `table-hover`, botones `btn-group btn-sm`, paginador funcional con estilo diferente
- `ingreso-list` (bussiness/inventario): header card-header, tabla `table-hover`, botón suelto, paginador funcional con estilo diferente

**Módulos con ajustes parciales:**
- `huevo-list` (production): header ✅, tabla legacy, botones `action-btns1`, sin paginador, texto "entradas"
- `producto-list` (production): header ✅, tabla ✅, botones ✅, paginador estático
- `lote-list` (bussiness): header ✅, tabla ✅, botones ✅, paginador estático
- `ticket-list` (bussiness-dashboard): header ✅, tabla ✅, botones ✅, paginador estático, usa `*ngFor`/`*ngIf` legacy
- `employee-list` (referencia): paginador estático, selector sin funcionalidad
- `ingreso-inventario-list` (production): header ✅, tabla ✅, botones ✅, sin paginador ni selector

## Tareas

- [x] 1. Corrección del problema de navegación con página en blanco
  - [x] 1.1 Investigar y diagnosticar la causa raíz del bug de navegación en blanco
    - Revisar si existe un `RouteReuseStrategy` personalizado en `app.config.ts` o `app.routes.ts`
    - Verificar componentes standalone que no implementan `ngOnDestroy` con desuscripción de observables
    - Probar navegación ida y vuelta entre rutas para reproducir el problema
    - _Requisitos: 6.1, 6.2_
  - [x] 1.2 Implementar corrección de la estrategia de reutilización de rutas
    - Si existe `RouteReuseStrategy` personalizado, corregirlo o reemplazarlo con el comportamiento por defecto
    - Si no existe, verificar que los componentes ejecuten correctamente `ngOnInit`/`ngOnDestroy` al navegar
    - _Requisitos: 6.2, 6.3_
  - [x] 1.3 Agregar `takeUntilDestroyed()` o patrón de desuscripción en componentes con observables
    - Revisar todos los componentes de listado que usan suscripciones manuales a observables
    - Implementar `DestroyRef` + `takeUntilDestroyed()` de Angular 18 en componentes afectados
    - Asegurar que componentes con parámetros dinámicos (`ActivatedRoute.params`) reaccionen a cambios
    - _Requisitos: 6.3, 6.4, 6.5_
  - [ ]* 1.4 Escribir tests unitarios para la corrección de navegación
    - Verificar que los componentes ejecutan `ngOnInit` y `ngOnDestroy` correctamente al navegar
    - Verificar que no hay fugas de memoria por observables no desuscritos
    - _Requisitos: 6.1, 6.3, 6.4_

- [x] 2. Checkpoint - Verificar corrección de navegación
  - Asegurar que la navegación entre rutas funciona correctamente sin páginas en blanco, preguntar al usuario si hay dudas.


- [x] 3. Estandarizar el módulo de referencia `employee-list` (paginador y selector funcionales)
  - [x] 3.1 Implementar lógica de paginación funcional en `employee-list.component.ts`
    - Agregar propiedades: `currentPage`, `pageSize`, `totalItems`, `totalPages`, `Math = Math`
    - Implementar métodos `onPageChange(page)` y `onPageSizeChange(newSize)`
    - Conectar el selector `ng-select` con `[ngModel]="pageSize"` y `(ngModelChange)="onPageSizeChange($event)"` con valores numéricos reales (10, 25, 50, 100)
    - Conectar la paginación con el servicio `EmployeeService` para cargar datos paginados
    - Archivo: `hrmdashboards/employess/employee-list/employee-list.component.ts`
    - _Requisitos: 4.3, 4.4, 4.10, 5.3, 5.4_
  - [x] 3.2 Reemplazar paginador estático por paginador dinámico en `employee-list.component.html`
    - Reemplazar el bloque `<nav>` estático (Prev/1/2/3/Next) por el Paginador_Estándar con `@for`, `[class.disabled]`, `[class.active]` y `(click)="onPageChange()"`
    - Cambiar "Prev" → "Anterior" y "Next" → "Siguiente"
    - Archivo: `hrmdashboards/employess/employee-list/employee-list.component.html`
    - _Requisitos: 4.1, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 7.2_
  - [ ]* 3.3 Escribir test de propiedad para cálculo de páginas
    - **Propiedad 1: Cálculo correcto del total de páginas**
    - **Valida: Requisitos 4.3**
  - [ ]* 3.4 Escribir test de propiedad para estados de botones de navegación
    - **Propiedad 2: Estados de los botones de navegación en los límites del paginador**
    - **Valida: Requisitos 4.7, 4.8**
  - [ ]* 3.5 Escribir test de propiedad para página activa única
    - **Propiedad 3: Exactamente una página activa**
    - **Valida: Requisitos 4.9**
  - [ ]* 3.6 Escribir test de propiedad para cambio de tamaño de página
    - **Propiedad 4: Cambio de tamaño de página recalcula y reinicia**
    - **Valida: Requisitos 4.10, 5.3**
  - [ ]* 3.7 Escribir test de propiedad para datos mostrados por página
    - **Propiedad 5: Los datos mostrados corresponden a la página actual**
    - **Valida: Requisitos 4.4**

- [x] 4. Checkpoint - Verificar módulo de referencia
  - Asegurar que el paginador y selector del módulo `employee-list` funcionan correctamente con datos reales, preguntar al usuario si hay dudas.

- [x] 5. Estandarizar módulos con header inline: `client-list` y `sell-list`
  - [x] 5.1 Migrar header de `client-list` (client-dashboard) al componente estándar
    - Reemplazar el bloque `<div class="page-header d-lg-flex d-block">` por `<app-hr-dashboard-page-header [title]="'Clientes'" [title2]="'Agregar Cliente'" [class]="'btn btn-primary'" [class1]="''" [path]="'/dashboard/client-dashboard/new-client'">`
    - Agregar import de `SharedModule` si no existe
    - Archivo: `client-dashboard/client-list/client-list.component.html` y `.ts`
    - _Requisitos: 1.1, 1.2, 1.4_
  - [x] 5.2 Estandarizar tabla y botones de `client-list`
    - Cambiar clases de tabla de `table table-vcenter text-nowrap table-bordered border-bottom` a `table mb-0 text-nowrap text-md-nowrap table-bordered border`
    - Agregar `<tr class="border-bottom">` en thead y `<th scope="col">` en cada columna
    - Reemplazar botones `action-btns1` por `btn btn-icon` con variantes de color dentro de `<div class="d-flex gap-2">`
    - Cambiar "entradas" → "registros" en el selector
    - Archivo: `client-dashboard/client-list/client-list.component.html`
    - _Requisitos: 2.1, 2.2, 2.3, 2.5, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 5.5_
  - [x] 5.3 Agregar paginador funcional a `client-list`
    - Agregar propiedades de paginación en el componente TypeScript (`currentPage`, `pageSize`, `totalItems`, `totalPages`)
    - Implementar `onPageChange()` y `onPageSizeChange()` conectados al servicio de clientes
    - Agregar el bloque HTML del Paginador_Estándar con "Anterior"/"Siguiente"
    - Conectar el selector `ng-select` existente con la lógica de paginación
    - Archivos: `client-dashboard/client-list/client-list.component.html` y `.ts`
    - _Requisitos: 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10, 5.1, 5.2, 5.3, 5.4_
  - [x] 5.4 Migrar header de `sell-list` (bussiness-dashboard) al componente estándar
    - Reemplazar el bloque `<div class="page-header d-lg-flex d-block">` por `<app-hr-dashboard-page-header [title]="'Ventas'" [title2]="'Agregar Venta'" [class]="'btn btn-primary'" [class1]="''" [path]="'/dashboard/business-dashboard/new-sell'">`
    - Archivo: `bussiness-dashboard/sell-list/sell-list.component.html` y `.ts`
    - _Requisitos: 1.1, 1.2, 1.4_
  - [x] 5.5 Estandarizar tabla y botones de `sell-list`
    - Cambiar clases de tabla a las estándar
    - Reemplazar botones `action-btns1` por `btn btn-icon` con variantes de color
    - Cambiar "entradas" → "registros"
    - Archivo: `bussiness-dashboard/sell-list/sell-list.component.html`
    - _Requisitos: 2.1, 2.2, 2.3, 2.5, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 5.5_
  - [x] 5.6 Agregar paginador funcional a `sell-list`
    - Implementar lógica de paginación en TypeScript y agregar Paginador_Estándar en HTML
    - Conectar con el servicio de ventas
    - Archivos: `bussiness-dashboard/sell-list/sell-list.component.html` y `.ts`
    - _Requisitos: 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10, 5.1, 5.2, 5.3, 5.4_
  - [ ]* 5.7 Escribir tests unitarios para `client-list` y `sell-list`
    - Verificar que renderizan `<app-hr-dashboard-page-header>` con inputs correctos
    - Verificar que no existe la clase `action-btns1` en los templates
    - Verificar que el texto "entradas" fue reemplazado por "registros"
    - _Requisitos: 1.1, 3.1, 5.5_

- [x] 6. Checkpoint - Verificar módulos client-list y sell-list
  - Asegurar que ambos módulos muestran el header estándar, tabla estándar, botones estándar y paginador funcional, preguntar al usuario si hay dudas.


- [x] 7. Estandarizar módulos con `mat-table`: `task-list` y `project-list`
  - [x] 7.1 Migrar `task-list` de `mat-table` a tabla HTML estándar
    - Reemplazar `<app-task-dashboard-page-header>` por `<app-hr-dashboard-page-header [title]="'Tareas'" [title2]="'Nueva Tarea'" [class]="'btn btn-primary'" [class1]="''" [path]="'/dashboard/task-dashboard/new-tasks'">`
    - Eliminar `mat-table`, `MatTableDataSource`, `MatSort`, `MatPaginator` del componente
    - Crear tabla HTML estándar con clases `table mb-0 text-nowrap text-md-nowrap table-bordered border`
    - Reemplazar datos estáticos por datos dinámicos del servicio de tareas (crear servicio si no existe)
    - Reemplazar botones `action-btns1` por `btn btn-icon` estándar
    - Agregar Paginador_Estándar funcional y Selector_Registros
    - Traducir todos los textos en inglés al español (ver mapeo en diseño)
    - Archivos: `task-dashboard/task-list/task-list.component.html` y `.ts`
    - _Requisitos: 1.1, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 4.1, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10, 5.1, 5.2, 5.3, 5.4, 7.1, 7.2, 7.3, 7.4_
  - [x] 7.2 Traducir textos de las tarjetas de estadísticas y filtros de `task-list`
    - "All Task's" → "Todas las Tareas", "My Task" → "Mis Tareas", "Pending Tasks" → "Tareas Pendientes", "Completed Tasks" → "Tareas Completadas"
    - "Recent Task Summary" → "Resumen de Tareas Recientes", "From:" → "Desde:", "To:" → "Hasta:"
    - "Assign To:" → "Asignar A:", "Select Employee" → "Seleccionar Empleado", "Select Priority:" → "Seleccionar Prioridad:"
    - "Search" → "Buscar", "Show" → "Mostrar", "entries" → "registros"
    - "High"/"Medium"/"Low" → "Alta"/"Media"/"Baja"
    - Encabezados de tabla: "Task" → "Tarea", "Department" → "Departamento", "Priority" → "Prioridad", "StartDate" → "Fecha Inicio", "Deadline" → "Fecha Límite", "Progress" → "Progreso", "WorkStatus" → "Estado", "Action" → "Acciones"
    - Archivo: `task-dashboard/task-list/task-list.component.html`
    - _Requisitos: 7.1, 7.2, 7.3, 7.4_
  - [x] 7.3 Traducir textos del modal de edición de `task-list`
    - "Edit Task" → "Editar Tarea", "Task ID" → "ID Tarea", "Task Title" → "Título Tarea"
    - "Department:" → "Departamento:", "Task Priority:" → "Prioridad de Tarea:"
    - "Description:" → "Descripción:", "Attachment:" → "Adjunto:", "Work Status:" → "Estado de Trabajo:"
    - "Completed" → "Completada", "On Hold" → "En Espera", "On Progress" → "En Progreso"
    - "Close" → "Cerrar", "Update" → "Actualizar"
    - Archivo: `task-dashboard/task-list/task-list.component.html`
    - _Requisitos: 7.1_
  - [x] 7.4 Migrar `project-list` de `mat-table` a tabla HTML estándar
    - Reemplazar `<app-task-dashboard-page-header>` por `<app-hr-dashboard-page-header [title]="'Proyectos'" [title2]="'Nuevo Proyecto'" [class]="'btn btn-primary'" [class1]="''" [path]="'/dashboard/project-dashboard/new-project'">`
    - Eliminar `mat-table`, `MatTableDataSource`, `MatSort`, `mat-paginator` del componente
    - Crear tabla HTML estándar con datos dinámicos
    - Reemplazar botones `action-btns1` por `btn btn-icon` estándar
    - Agregar Paginador_Estándar funcional y Selector_Registros
    - Traducir todos los textos en inglés al español
    - Archivos: `project-dashboard/project-list/project-list.component.html` y `.ts`
    - _Requisitos: 1.1, 2.1, 2.4, 3.1, 4.1, 4.3, 5.1, 7.1, 7.4_
  - [x] 7.5 Traducir textos de filtros, estadísticas y modal de `project-list`
    - "Total Projects" → "Total Proyectos", "Pending Projects" → "Proyectos Pendientes", etc.
    - "Recent project Summary" → "Resumen de Proyectos Recientes"
    - "From:" → "Desde:", "To:" → "Hasta:", "Assign To:" → "Asignar A:", "Select Employee" → "Seleccionar Empleado"
    - "Select Priority:" → "Seleccionar Prioridad:", "Search" → "Buscar", "Show" → "Mostrar", "entries" → "registros"
    - Encabezados y modal: "Edit Project" → "Editar Proyecto", "Project Title" → "Título Proyecto", etc.
    - Archivo: `project-dashboard/project-list/project-list.component.html`
    - _Requisitos: 7.1, 7.3, 7.4_
  - [ ]* 7.6 Escribir tests unitarios para migración de `task-list` y `project-list`
    - Verificar que no existen dependencias de `MatTableModule` en los componentes migrados
    - Verificar que los textos están en español
    - Verificar que el paginador muestra "Anterior"/"Siguiente"
    - _Requisitos: 2.4, 7.1, 7.2_

- [x] 8. Estandarizar `job-lists` (job-dashboard)
  - [x] 8.1 Migrar header y estandarizar tabla de `job-lists`
    - Reemplazar `<app-job-dashboard-page-header>` por `<app-hr-dashboard-page-header [title]="'Trabajos'" [title2]="'Nuevo Trabajo'" [class]="'btn btn-primary'" [class1]="''" [path]="'/dashboard/job-dashboard/new-job'">`
    - Cambiar clases de tabla de `table table-vcenter text-nowrap table-bordered border-bottom` a las estándar
    - Reemplazar botones `action-btns1` por `btn btn-icon` estándar
    - Reemplazar paginador estático por Paginador_Estándar funcional
    - Agregar Selector_Registros con valores 10/25/50/100
    - Traducir textos: "Job Lists" → "Lista de Trabajos", "From:" → "Desde:", "To:" → "Hasta:", "Select Job Type" → "Seleccionar Tipo de Trabajo", "Select Status:" → "Seleccionar Estado:", "Search" → "Buscar", "Position" → "Puesto", "Type" → "Tipo", "Posted Date" → "Fecha Publicación", "Last Date to Apply" → "Fecha Límite", "Close Date" → "Fecha Cierre", "Status" → "Estado", "Actions" → "Acciones", "Full-Time" → "Tiempo Completo", "Part-Time" → "Medio Tiempo", "Freelancer" → "Freelancer", "Active" → "Activo", "InActive" → "Inactivo"
    - Archivos: `job-dashboard/job-lists/job-lists.component.html` y `.ts`
    - _Requisitos: 1.1, 2.1, 2.5, 3.1, 4.1, 4.3, 5.1, 7.1, 7.4_
  - [ ]* 8.2 Escribir tests unitarios para `job-lists`
    - Verificar header estándar, tabla estándar, botones estándar, textos en español
    - _Requisitos: 1.1, 7.1_

- [x] 9. Checkpoint - Verificar módulos con mat-table y job-lists
  - Asegurar que `task-list`, `project-list` y `job-lists` están completamente migrados con datos dinámicos, paginador funcional y textos en español, preguntar al usuario si hay dudas.


- [ ] 10. Estandarizar módulos de producción: `galera-list`, `gasto-list`, `vehiculo-list`, `inventario-list`
  - [x] 10.1 Migrar header y estandarizar `galera-list`
    - Reemplazar el bloque `<div class="card custom-card"><div class="card-header justify-content-between">` por `<app-hr-dashboard-page-header [title]="'Galeras'" [title2]="'Nueva Galera'" [class]="'btn btn-primary'" [class1]="''" [path]="'/dashboard/production-dashboard/galeras/add'">`
    - Cambiar clases de tabla de `table text-nowrap table-hover` a `table mb-0 text-nowrap text-md-nowrap table-bordered border`
    - Agregar `<tr class="border-bottom">` en thead y `<th scope="col">` en cada columna
    - Reemplazar botones `btn-group btn-sm` por `btn btn-icon` estándar con `<div class="d-flex gap-2">`
    - Estandarizar paginador existente al formato `nav.mt-4 > ul.pagination.justify-content-end.mb-0`
    - Agregar Selector_Registros con `ng-select` (10/25/50/100) y texto "Mostrar N registros"
    - Archivos: `production-dashboard/galeras/galera-list/galera-list.component.html` y `.ts`
    - _Requisitos: 1.1, 2.1, 2.2, 2.3, 2.5, 2.6, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 4.1, 4.9, 5.1, 5.2_
  - [x] 10.2 Migrar header y estandarizar `gasto-list`
    - Reemplazar header card-header por `<app-hr-dashboard-page-header [title]="'Gastos de Operación'" [title2]="'Registrar Gasto'" [class]="'btn btn-primary'" [class1]="''" [path]="'/dashboard/production-dashboard/gastos-operacion/add'">`
    - Cambiar clases de tabla, reemplazar botones `btn-group btn-sm`, estandarizar paginador, agregar Selector_Registros
    - Archivos: `production-dashboard/gastos-operacion/gasto-list/gasto-list.component.html` y `.ts`
    - _Requisitos: 1.1, 2.1, 2.5, 3.1, 4.1, 5.1_
  - [ ] 10.3 Migrar header y estandarizar `vehiculo-list`
    - Reemplazar header card-header por `<app-hr-dashboard-page-header [title]="'Vehículos'" [title2]="'Agregar Vehículo'" [class]="'btn btn-primary'" [class1]="''" [path]="'/dashboard/production-dashboard/vehiculos/add'">`
    - Cambiar clases de tabla, reemplazar botones `btn-group btn-sm`, estandarizar paginador, agregar Selector_Registros
    - Archivos: `production-dashboard/vehiculos/vehiculo-list/vehiculo-list.component.html` y `.ts`
    - _Requisitos: 1.1, 2.1, 2.5, 3.1, 4.1, 5.1_
  - [ ] 10.4 Migrar header y estandarizar `inventario-list`
    - Reemplazar header card-header por `<app-hr-dashboard-page-header [title]="'Inventario'" [title2]="'Agregar Item'" [class]="'btn btn-primary'" [class1]="''" [path]="'/dashboard/production-dashboard/inventario/add'">`
    - Cambiar clases de tabla, reemplazar botones `btn-group btn-sm`, estandarizar paginador, agregar Selector_Registros
    - Archivos: `production-dashboard/inventario/inventario-list/inventario-list.component.html` y `.ts`
    - _Requisitos: 1.1, 2.1, 2.5, 3.1, 4.1, 5.1_
  - [ ]* 10.5 Escribir tests unitarios para módulos de producción
    - Verificar que los 4 módulos renderizan `<app-hr-dashboard-page-header>`
    - Verificar que las tablas usan las clases estándar
    - Verificar que no existen botones `btn-group btn-sm`
    - _Requisitos: 1.1, 2.1, 3.1_

- [ ] 11. Checkpoint - Verificar módulos de producción
  - Asegurar que `galera-list`, `gasto-list`, `vehiculo-list` e `inventario-list` están estandarizados, preguntar al usuario si hay dudas.

- [ ] 12. Estandarizar módulos de negocio: `cliente-list`, `venta-list`, `tickets/ticket-list`, `ingreso-list`
  - [ ] 12.1 Migrar header y estandarizar `cliente-list` (bussiness/clientes)
    - Reemplazar header card-header por `<app-hr-dashboard-page-header [title]="'Gestión de Clientes'" [title2]="'Agregar Cliente'" [class]="'btn btn-primary'" [class1]="''" [path]="'/dashboard/business-dashboard/clientes/add'">`
    - Cambiar clases de tabla de `table text-nowrap table-hover` a las estándar
    - Reemplazar botones `btn-group btn-sm` por `btn btn-icon` estándar
    - Estandarizar paginador al formato estándar con `nav.mt-4 > ul.pagination.justify-content-end.mb-0`
    - Cambiar selector de `<select>` nativo a `ng-select` estándar, cambiar "entradas" → "registros"
    - Archivos: `bussiness-dashboard/clientes/cliente-list/cliente-list.component.html` y `.ts`
    - _Requisitos: 1.1, 2.1, 2.5, 3.1, 4.1, 4.9, 5.1, 5.2, 5.5_
  - [ ] 12.2 Migrar header y estandarizar `venta-list` (bussiness/ventas)
    - Reemplazar header card-header por `<app-hr-dashboard-page-header [title]="'Gestión de Ventas'" [title2]="'Nueva Venta'" [class]="'btn btn-primary'" [class1]="''" [path]="'/dashboard/business-dashboard/ventas/add'">`
    - Cambiar clases de tabla, reemplazar botones `btn-group btn-sm`, estandarizar paginador, agregar Selector_Registros
    - Archivos: `bussiness-dashboard/ventas/venta-list/venta-list.component.html` y `.ts`
    - _Requisitos: 1.1, 2.1, 2.5, 3.1, 4.1, 5.1_
  - [ ] 12.3 Migrar header y estandarizar `tickets/ticket-list` (bussiness/tickets)
    - Reemplazar header card-header por `<app-hr-dashboard-page-header [title]="'Gestión de Tickets'" [title2]="'Generar Tickets'" [class]="'btn btn-primary'" [class1]="''" [path]="'/dashboard/business-dashboard/ventas/list'">`
    - Cambiar clases de tabla, reemplazar botones `btn-group btn-sm`, estandarizar paginador, agregar Selector_Registros
    - Archivos: `bussiness-dashboard/tickets/ticket-list/ticket-list.component.html` y `.ts`
    - _Requisitos: 1.1, 2.1, 2.5, 3.1, 4.1, 5.1_
  - [ ] 12.4 Migrar header y estandarizar `ingreso-list` (bussiness/inventario)
    - Reemplazar header card-header por `<app-hr-dashboard-page-header [title]="'Clasificación de Inventario'" [title2]="'Nueva Clasificación'" [class]="'btn btn-primary'" [class1]="''" [path]="'/dashboard/business-dashboard/inventario/add'">`
    - Cambiar clases de tabla, reemplazar botón suelto por `btn btn-icon` estándar, estandarizar paginador, agregar Selector_Registros
    - Archivos: `bussiness-dashboard/inventario/ingreso-list/ingreso-list.component.html` y `.ts`
    - _Requisitos: 1.1, 2.1, 2.5, 3.1, 4.1, 5.1_
  - [ ]* 12.5 Escribir tests unitarios para módulos de negocio
    - Verificar que los 4 módulos renderizan `<app-hr-dashboard-page-header>`
    - Verificar que las tablas usan las clases estándar
    - Verificar que el texto "entradas" fue reemplazado por "registros" en `cliente-list`
    - _Requisitos: 1.1, 2.1, 5.5_

- [ ] 13. Checkpoint - Verificar módulos de negocio
  - Asegurar que `cliente-list`, `venta-list`, `tickets/ticket-list` e `ingreso-list` están estandarizados, preguntar al usuario si hay dudas.


- [ ] 14. Estandarizar módulos con ajustes parciales
  - [ ] 14.1 Estandarizar `huevo-list` (production/huevos)
    - Header ya usa `app-hr-dashboard-page-header` ✅
    - Cambiar clases de tabla de `table table-vcenter text-nowrap table-bordered border-bottom` a las estándar
    - Agregar `<tr class="border-bottom">` en thead y `<th scope="col">` en cada columna
    - Reemplazar botones `action-btns1` por `btn btn-icon` estándar con `<div class="d-flex gap-2">`
    - Migrar de `*ngFor`/`*ngIf` a `@for`/`@if` (sintaxis moderna Angular 18)
    - Agregar Paginador_Estándar funcional (actualmente no tiene paginador)
    - Cambiar "entradas" → "registros" en el selector
    - Archivos: `production-dashboard/huevos/huevo-list/huevo-list.component.html` y `.ts`
    - _Requisitos: 2.1, 2.2, 2.3, 2.5, 3.1, 3.2, 4.2, 4.3, 5.1, 5.5_
  - [ ] 14.2 Activar paginador funcional en `producto-list` (production/productos)
    - Header ✅, tabla ✅, botones ✅
    - Reemplazar paginador estático (Prev/1/2/3/Next) por Paginador_Estándar funcional
    - Agregar lógica de paginación en TypeScript (`currentPage`, `pageSize`, `totalItems`, `totalPages`, `onPageChange`, `onPageSizeChange`)
    - Conectar selector `ng-select` existente con valores numéricos reales y `(ngModelChange)`
    - Cambiar "Prev" → "Anterior" y "Next" → "Siguiente"
    - Archivos: `production-dashboard/productos/producto-list/producto-list.component.html` y `.ts`
    - _Requisitos: 4.1, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10, 5.3, 7.2_
  - [ ] 14.3 Activar paginador funcional en `lote-list` (bussiness/lotes)
    - Header ✅, tabla ✅, botones ✅
    - Reemplazar paginador estático por Paginador_Estándar funcional
    - Agregar lógica de paginación en TypeScript
    - Migrar de `*ngFor`/`*ngIf` a `@for`/`@if`
    - Cambiar "Prev" → "Anterior" y "Next" → "Siguiente"
    - Archivos: `bussiness-dashboard/lotes/lote-list/lote-list.component.html` y `.ts`
    - _Requisitos: 4.1, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10, 5.3, 7.2_
  - [ ] 14.4 Activar paginador funcional en `ticket-list` (bussiness-dashboard)
    - Header ✅, tabla ✅, botones ✅
    - Reemplazar paginador estático por Paginador_Estándar funcional
    - Agregar lógica de paginación en TypeScript
    - Migrar de `*ngFor`/`*ngIf` a `@for`/`@if`
    - Cambiar "Prev" → "Anterior" y "Next" → "Siguiente"
    - Archivos: `bussiness-dashboard/ticket-list/ticket-list.component.html` y `.ts`
    - _Requisitos: 4.1, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10, 5.3, 7.2_
  - [ ] 14.5 Agregar paginador y selector a `ingreso-inventario-list` (production)
    - Header ✅, tabla ✅, botones ✅
    - Agregar Selector_Registros con `ng-select` (10/25/50/100) y texto "Mostrar N registros"
    - Agregar Paginador_Estándar funcional
    - Agregar lógica de paginación en TypeScript
    - Archivos: `production-dashboard/ingreso-inventario/ingreso-inventario-list/ingreso-inventario-list.component.html` y `.ts`
    - _Requisitos: 4.2, 4.3, 5.1, 5.2_
  - [ ]* 14.6 Escribir tests unitarios para módulos con ajustes parciales
    - Verificar que `huevo-list` no tiene botones `action-btns1`
    - Verificar que `producto-list`, `lote-list`, `ticket-list` tienen paginador funcional
    - Verificar que todos los paginadores muestran "Anterior"/"Siguiente"
    - _Requisitos: 3.1, 4.1, 7.2_

- [ ] 15. Checkpoint - Verificar módulos con ajustes parciales
  - Asegurar que todos los módulos con ajustes parciales están estandarizados, preguntar al usuario si hay dudas.

- [ ] 16. Verificación final y limpieza
  - [ ] 16.1 Auditoría global de consistencia
    - Buscar en todo el proyecto la clase `action-btns1` y verificar que no existe en ningún módulo migrado
    - Buscar la clase `table-vcenter` y verificar que fue reemplazada en todos los módulos
    - Buscar textos "Prev", "Next", "Show", "entries", "entradas" y verificar que fueron traducidos/reemplazados
    - Buscar `mat-table` y `MatTableDataSource` y verificar que fueron eliminados de los módulos migrados
    - Verificar que todos los módulos importan `SharedModule` para usar `app-hr-dashboard-page-header`
    - _Requisitos: 1.1, 2.1, 2.5, 3.1, 7.1, 7.2, 7.3_
  - [ ] 16.2 Verificar que todos los paginadores son funcionales
    - Confirmar que ningún módulo tiene paginadores estáticos (Prev/1/2/3/Next sin funcionalidad)
    - Verificar que todos los selectores de registros están conectados con `(ngModelChange)` y valores numéricos
    - _Requisitos: 4.1, 4.2, 4.10, 5.1, 5.3_
  - [ ]* 16.3 Escribir tests de integración para navegación entre módulos
    - Verificar que navegar entre módulos estandarizados no produce página en blanco
    - Verificar que los componentes ejecutan `ngOnInit` y `ngOnDestroy` correctamente
    - _Requisitos: 6.1, 6.3_

- [ ] 17. Checkpoint final - Asegurar que todos los tests pasan
  - Asegurar que todos los tests pasan y que la aplicación funciona correctamente con todos los módulos estandarizados, preguntar al usuario si hay dudas.

## Notas

- Las tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido
- Cada tarea referencia requisitos específicos para trazabilidad
- Los checkpoints aseguran validación incremental
- Los tests de propiedad validan propiedades universales de correctitud de la paginación
- Los tests unitarios validan ejemplos específicos y casos borde
- El módulo `employee-list` es la referencia estándar y se estandariza primero (paginador funcional)
- Los módulos se agrupan por tipo de migración para maximizar la reutilización de patrones
