# Plan de Implementación: Permisos Basados en Roles

## Visión General

Implementación incremental del sistema de control de acceso híbrido de dos capas para LariTechFarms. Se crean primero las estructuras de datos estáticas y el servicio central, luego el guard de rutas, la integración con sidebar y login, y finalmente la página de acceso denegado. Cada paso se valida antes de avanzar al siguiente.

## Tareas

- [x] 1. Crear configuración estática de permisos y tipos base
  - [x] 1.1 Crear `src/app/shared/services/permissions.config.ts` con los tipos `UserRole`, `ModuleName`, la constante `VALID_ROLES`, y las estructuras `MODULE_ROUTE_MAP`, `ROLE_ACCESS_MATRIX`, `DEFAULT_REDIRECTS`
    - Definir el type `UserRole` con los 6 roles válidos
    - Definir el type `ModuleName` con los 7 módulos
    - Exportar `VALID_ROLES` como array de roles válidos
    - Exportar `MODULE_ROUTE_MAP` mapeando cada módulo a sus prefijos de ruta según el diseño
    - Exportar `ROLE_ACCESS_MATRIX` con la matriz de acceso rol → módulos
    - Exportar `DEFAULT_REDIRECTS` con las rutas post-login por rol
    - _Requisitos: 3.1, 4.1, 4.2, 4.3, 8.1, 8.2, 8.3, 8.4_

  - [ ]* 1.2 Test de propiedad: Validación de roles
    - **Propiedad 1: Validación de roles**
    - Generar cadenas aleatorias con fast-check y verificar que solo las 6 cadenas válidas son reconocidas como roles
    - **Valida: Requisitos 2.2, 2.3**

  - [ ]* 1.3 Test de propiedad: Resolución ruta-a-módulo
    - **Propiedad 2: Resolución ruta-a-módulo**
    - Generar rutas aleatorias (válidas del mapa y aleatorias) y verificar que se resuelven al módulo correcto o `null`
    - **Valida: Requisitos 3.1, 3.2, 5.1**

  - [ ]* 1.4 Test de propiedad: Correctitud de la matriz de acceso
    - **Propiedad 3: Correctitud de la matriz de acceso**
    - Generar pares (rol, módulo) aleatorios y verificar contra la matriz esperada. Verificar que solo `superadmin` accede a "Super Admin"
    - **Valida: Requisitos 4.1, 4.2**

- [x] 2. Implementar PermissionsService
  - [x] 2.1 Crear `src/app/shared/services/permissions.service.ts` con el servicio central
    - Implementar `BehaviorSubject` para `tenantModules$`, `userRole$`, `initialized$`
    - Implementar `init()`: extraer `rol` e `idTenant` del JWT en localStorage, llamar a `/api/v1/modules/enabled`, almacenar resultado
    - Implementar `clear()`: resetear todos los BehaviorSubjects
    - Implementar `getModuleForRoute(route)`: buscar en `MODULE_ROUTE_MAP` el módulo que coincida con el prefijo de la ruta
    - Implementar `isModuleEnabled(module)`: verificar si el módulo está en la lista del tenant
    - Implementar `roleHasModule(role, module)`: verificar contra `ROLE_ACCESS_MATRIX`
    - Implementar `hasAccess(route)`: evaluación combinada de ambas capas (tenant + rol)
    - Implementar `getDefaultRedirect()`: retornar ruta según rol, con fallback a primera ruta accesible o `/access-denied`
    - Implementar `getFilteredMenuItems(items)`: filtrado recursivo del menú según ambas capas
    - Implementar `isInitialized()` y `waitForInit()` para el guard
    - _Requisitos: 1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 2.3, 2.4, 5.1, 5.2, 5.3, 5.4, 6.1, 6.2, 8.5_

  - [ ]* 2.2 Test de propiedad: Decisión de acceso de dos capas
    - **Propiedad 4: Decisión de acceso de dos capas**
    - Generar tuplas (tenantModules, rol, ruta) y verificar que el acceso se concede si y solo si las 3 condiciones se cumplen
    - **Valida: Requisitos 5.2, 5.3, 5.4**

  - [ ]* 2.3 Test de propiedad: Completitud del filtrado de menú
    - **Propiedad 5: Completitud del filtrado de menú**
    - Generar combinaciones de menú + permisos y verificar que el resultado solo contiene ítems accesibles y que padres sin hijos visibles se excluyen
    - **Valida: Requisitos 6.1, 6.2, 6.4**

  - [ ]* 2.4 Test de propiedad: Redirección post-login por rol
    - **Propiedad 6: Redirección post-login por rol**
    - Generar roles válidos y verificar que la ruta de redirección coincide con `DEFAULT_REDIRECTS`
    - **Valida: Requisitos 8.1, 8.2, 8.3, 8.4**

  - [ ]* 2.5 Test de propiedad: Redirección fallback cuando módulo default está deshabilitado
    - **Propiedad 7: Redirección fallback**
    - Generar (rol, subconjunto de módulos sin el default) y verificar que se redirige a la primera ruta accesible o `/access-denied`
    - **Valida: Requisito 8.5**

- [x] 3. Checkpoint - Verificar configuración y servicio
  - Asegurar que todos los tests pasan, preguntar al usuario si surgen dudas.

- [x] 4. Implementar RoleModuleGuard y página de acceso denegado
  - [x] 4.1 Crear `src/app/core/role-module.guard.ts` como guard funcional (`CanActivateFn`)
    - Inyectar `PermissionsService` y `Router`
    - Si no está inicializado, esperar con `waitForInit()` y luego evaluar
    - Identificar módulo de la ruta via `getModuleForRoute()`
    - Si no hay módulo o no tiene acceso, redirigir a `/access-denied`
    - Si tiene acceso, permitir navegación
    - _Requisitos: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

  - [x] 4.2 Crear componente `src/app/componets/custom-pages/access-denied/`
    - Crear `access-denied.component.ts` como componente standalone
    - Crear `access-denied.component.html` con mensaje "No tienes permisos para acceder a esta pantalla" y botón "Ir al inicio"
    - Crear `access-denied.component.scss` con estilos básicos
    - El botón debe redirigir a `permissionsService.getDefaultRedirect()`
    - **Estándares UI**: Debe seguir los patrones de diseño existentes de la aplicación:
      - Usar `<app-hr-dashboard-page-header>` para el título de la página
      - Usar layout de tarjeta `<div class="card custom-card">` con `card-body`
      - Usar estilo de botón consistente `btn btn-{variant}` con iconos feather (`fe fe-home` o similar para "Ir al inicio")
      - Importar `SharedModule`, `RouterModule` como componente standalone
    - _Requisitos: 7.1, 7.2_

  - [ ]* 4.3 Tests unitarios para RoleModuleGuard
    - Verificar que permite navegación cuando ambas capas se cumplen
    - Verificar redirección a `/access-denied` cuando falla alguna capa
    - Verificar que espera inicialización si el servicio no está listo
    - _Requisitos: 5.1, 5.2, 5.3, 5.4_

- [x] 5. Integrar guard y ruta de acceso denegado en las rutas de la aplicación
  - [x] 5.1 Modificar `src/app/app.routes.ts`
    - Agregar ruta `{ path: 'access-denied', loadComponent: ... }` para el componente AccessDenied
    - Agregar `canActivate: [AuthGuard]` y `canActivateChild: [roleModuleGuard]` a la ruta del `MainLayoutComponent`
    - Mantener el `AuthGuard` existente sin reemplazarlo
    - _Requisitos: 5.5, 5.6_

- [x] 6. Integrar filtrado de menú en el Sidebar
  - [x] 6.1 Modificar `src/app/shared/common/sidebar/sidebar.component.ts`
    - Inyectar `PermissionsService`
    - En `ngOnInit`, usar `combineLatest` con `navServices.items` y los observables de permisos
    - Aplicar `getFilteredMenuItems()` para filtrar `menuItems` según ambas capas
    - _Requisitos: 6.1, 6.2, 6.3, 6.4_

- [x] 7. Integrar permisos en el flujo de login
  - [x] 7.1 Modificar `src/app/authentication/login/login.component.ts`
    - Inyectar `PermissionsService`
    - En `loginWithBackend()`: después de `saveToken()`, llamar a `permissionsService.init()` y redirigir a `getDefaultRedirect()` en vez de ruta hardcodeada
    - En `validateBackendUser()` (login Firebase/Google): mismo cambio, llamar a `init()` y redirigir a `getDefaultRedirect()`
    - _Requisitos: 1.1, 2.1, 8.1, 8.2, 8.3, 8.4, 8.5_

  - [x] 7.2 Integrar `permissionsService.clear()` en el flujo de logout
    - En el método `logout()` del `LoginComponent`, llamar a `permissionsService.clear()` antes de limpiar el token
    - Verificar que `AuthService.singout()` o cualquier otro punto de logout también invoque `clear()`
    - _Requisitos: 1.4, 2.4_

- [x] 8. Checkpoint - Verificar integración completa
  - Asegurar que todos los tests pasan, preguntar al usuario si surgen dudas.

- [x] 9. Implementar CRUD backend del catálogo de módulos
  - [x] 9.1 Crear `laritechfarms_backend_node/src/controllers/moduloCatalogController.ts`
    - Implementar `getAllModules`: consultar `prisma.modules.findMany()` ordenado por `id_module`
    - Implementar `createModule`: validar `name` obligatorio, crear registro con `is_active: true` por defecto
    - Implementar `updateModule`: validar `name` obligatorio, actualizar `name` y `description` por `id_module`
    - Implementar `toggleModuleStatus`: actualizar `is_active` por `id_module`
    - Implementar `deleteModule`: verificar que no existan registros en `tenant_modules` para el módulo; si existen, retornar 409; si no, eliminar
    - _Requisitos: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6_

  - [x] 9.2 Crear `laritechfarms_backend_node/src/routes/moduloCatalog.ts`
    - Definir rutas: GET `/`, POST `/`, PUT `/:id`, PATCH `/:id/status`, DELETE `/:id`
    - Aplicar `authenticateToken` y `requireRole('superadmin')` a todas las rutas
    - _Requisitos: 9.7_

  - [x] 9.3 Registrar las nuevas rutas en el archivo principal de rutas del backend
    - Importar y montar el router de `moduloCatalog` en `/api/v1/module-catalog`
    - _Requisitos: 9.1, 9.7_

- [x] 10. Implementar pantalla frontend del catálogo de módulos
  - [x] 10.1 Agregar métodos CRUD al `SuperAdminService` existente
    - Agregar `getModuleCatalog()`: GET `/module-catalog`
    - Agregar `createModuleCatalog(data)`: POST `/module-catalog`
    - Agregar `updateModuleCatalog(id, data)`: PUT `/module-catalog/:id`
    - Agregar `toggleModuleCatalogStatus(id, is_active)`: PATCH `/module-catalog/:id/status`
    - Agregar `deleteModuleCatalog(id)`: DELETE `/module-catalog/:id`
    - _Requisitos: 9.1, 9.2, 9.3, 9.4, 9.5_

  - [x] 10.2 Crear componente `src/app/componets/dashbord/super-admin/module-catalog/`
    - Crear `module-catalog.component.ts` como componente standalone
    - Crear `module-catalog.component.html` con tabla de módulos, formulario de creación/edición, botones de estado y eliminación
    - Crear `module-catalog.component.scss` con estilos consistentes con el resto de Super Admin
    - Implementar carga de módulos al inicializar
    - Implementar formulario con campos `name` (obligatorio) y `description` (opcional)
    - Implementar toggle de `is_active` por fila
    - Implementar eliminación con confirmación previa y manejo de error 409
    - **Estándares UI**: Debe seguir todos los patrones de diseño existentes de la aplicación (ver `modules.component.html` como referencia):
      - Usar `<app-hr-dashboard-page-header [title]="'Catálogo de Módulos'">` para el encabezado de página
      - Usar layout `<div class="card custom-card">` con `<div class="card-header"><h3 class="card-title">` y `<div class="card-body">`
      - Usar tabla `<table class="table mb-0 text-nowrap text-md-nowrap table-bordered border">` con `<thead>` y `<tbody>`, filas con `class="border-bottom"`
      - Usar badges `<span class="badge bg-success">` para activo y `<span class="badge bg-danger">` para inactivo
      - Usar botones de acción `<button class="btn btn-sm btn-{variant}">` con iconos feather: `fe-edit-2` (editar), `fe-trash-2` (eliminar), `fe-check` (activar), `fe-x` (desactivar), `fe-plus` (crear)
      - Usar modales con `<ng-template #templateRef let-modal>` y `NgbModal` service para formularios de crear/editar, con `modal-header`, `modal-body`, `modal-footer` (botón Cerrar `btn-outline-danger`, botón Guardar `btn-success`)
      - Usar `<div class="form-group">` con `<label class="form-label">` y `<input class="form-control">` para campos de formulario
      - Usar `<div class="spinner-border text-primary" role="status">` para estado de carga
      - Usar `ToastrService` para notificaciones de éxito (`toastr.success`) y error (`toastr.error`)
      - Mostrar diálogo de confirmación antes de eliminar un módulo
      - Importar `SharedModule`, `RouterModule`, `FormsModule` como componente standalone
    - _Requisitos: 9.8, 9.9, 9.10, 9.11, 9.12, 9.13_

  - [x] 10.3 Agregar ruta `module-catalog` en `super-admin.routes.ts`
    - Agregar entrada con `loadComponent` apuntando al nuevo `ModuleCatalogComponent`
    - _Requisitos: 9.8_

  - [x] 10.4 Agregar enlace de navegación al menú lateral de Super Admin
    - Agregar ítem "Catálogo de Módulos" en la sección Super Admin del sidebar apuntando a `/dashboard/super-admin/module-catalog`
    - _Requisitos: 9.8_

- [x] 11. Checkpoint - Verificar CRUD de catálogo de módulos
  - Verificar que los endpoints CRUD funcionan correctamente
  - Verificar que la pantalla frontend muestra, crea, edita, activa/desactiva y elimina módulos
  - Verificar que solo el rol `superadmin` tiene acceso
  - Asegurar que la eliminación de módulos en uso es rechazada correctamente

- [ ] 12. Tests de integración finales
  - [ ]* 12.1 Tests de integración del flujo completo
    - Test: login → init → navegación a ruta permitida → acceso concedido
    - Test: login → init → navegación a ruta denegada → redirección a access-denied
    - Test: logout → re-login con diferente rol → menú actualizado
    - Test: coexistencia de AuthGuard + RoleModuleGuard
    - _Requisitos: 5.2, 5.3, 5.4, 5.6, 6.3_

  - [ ]* 12.2 Tests de integración del CRUD de catálogo de módulos
    - Test: superadmin crea módulo → módulo aparece en la lista
    - Test: superadmin edita módulo → cambios reflejados
    - Test: superadmin cambia estado → is_active actualizado
    - Test: superadmin elimina módulo sin tenants → módulo eliminado
    - Test: superadmin elimina módulo con tenants → error 409
    - Test: usuario no superadmin intenta CRUD → error 403
    - _Requisitos: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7_

- [x] 13. Checkpoint final - Validación completa
  - Asegurar que todos los tests pasan, preguntar al usuario si surgen dudas.

## Notas

- Las tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido
- Cada tarea referencia requisitos específicos para trazabilidad
- Los checkpoints aseguran validación incremental
- Los tests de propiedades usan `fast-check` y validan las propiedades de correctitud definidas en el diseño
- Los tests unitarios y de integración usan Jasmine/Karma (framework existente del proyecto Angular)
- No se requieren cambios en el backend existente para los requisitos 1-8 — los endpoints existentes son suficientes
- El Requisito 9 agrega nuevos endpoints CRUD en el backend para el catálogo de módulos (tabla `modules`), separados de los endpoints existentes de `tenant_modules`
