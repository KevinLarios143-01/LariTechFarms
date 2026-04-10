# Tasks — Bugfix Paginadores y Spinners

## Task 1: Fix Grupo A — Componentes con BehaviorSubject service (Paginator Bug)

- [x] 1.1 Fix `employee-list`: Importar `ChangeDetectorRef`, inyectar en constructor, agregar `this.cdr.detectChanges()` en el `subscribe` de `total$` en `ngOnInit()`
  - File: `LariTechFarms/src/app/componets/dashbord/hrmdashboards/employess/employee-list/employee-list.component.ts`
- [x] 1.2 Fix `task-list`: Importar `ChangeDetectorRef`, inyectar en constructor, agregar `this.cdr.detectChanges()` en el `subscribe` de `total$` en `ngOnInit()`
  - File: `LariTechFarms/src/app/componets/dashbord/task-dashboard/task-list/task-list.component.ts`
- [x] 1.3 Fix `job-lists`: Importar `ChangeDetectorRef`, inyectar en constructor, agregar `this.cdr.detectChanges()` en el `subscribe` de `total$` en `ngOnInit()`
  - File: `LariTechFarms/src/app/componets/dashbord/job-dashboard/job-lists/job-lists.component.ts`
- [x] 1.4 Fix `project-list`: Importar `ChangeDetectorRef`, inyectar en constructor, agregar `this.cdr.detectChanges()` en el `subscribe` de `total$` en `ngOnInit()`
  - File: `LariTechFarms/src/app/componets/dashbord/project-dashboard/project-list/project-list.component.ts`

## Task 2: Fix Grupo B — Componentes con API directa (Paginator + Spinner Bug)

- [x] 2.1 Fix `client-list`: Importar `ChangeDetectorRef`, inyectar en constructor, agregar `this.cdr.detectChanges()` en `loadClientes()` después de asignar `totalPages` y `loading = false` (en `next` y `error`)
  - File: `LariTechFarms/src/app/componets/dashbord/client-dashboard/client-list/client-list.component.ts`
- [x] 2.2 Fix `puesto-list`: Importar `ChangeDetectorRef`, inyectar en constructor, agregar `this.cdr.detectChanges()` en `loadPuestos()` después de asignar `totalPages` y `isLoading = false` (en `next` y `error`)
  - File: `LariTechFarms/src/app/componets/dashbord/hrmdashboards/puestos/puesto-list/puesto-list.component.ts`

## Task 3: Verificación de preservación

- [x] 3.1 Verificar que los componentes que ya funcionan correctamente (galera-list, vehiculo-list, inventario-list, sell-list, ticket-list, producto-list, huevo-list, gasto-list, ingreso-inventario-list) NO fueron modificados
- [x] 3.2 Verificar que no hay errores de compilación en los 6 componentes modificados usando `getDiagnostics`
