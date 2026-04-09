# Plan de Implementación: Control de Acceso a Nivel de Ruta

## Resumen

Implementar una tercera capa de control de acceso que permite restringir el acceso a rutas específicas dentro de un módulo, por rol o por usuario. Incluye: 3 nuevos modelos Prisma (`route_catalog`, `role_route_permissions`, `user_route_permissions`), script seed para poblar el catálogo desde MENUITEMS, endpoints REST para gestión de permisos de ruta, actualización del `PermissionsService` y `roleModuleGuard` para evaluar 3 capas, y un componente de administración `RoutePermissionsComponent`.

## Tareas

- [x] 1. Modelos Prisma y relaciones inversas
  - [x] 1.1 Agregar modelos `route_catalog`, `role_route_permissions` y `user_route_permissions` al schema de Prisma
    - Agregar el modelo `route_catalog` en `laritechfarms_backend_node/prisma/schema.prisma` con campos: `id_route`, `path`, `nombre`, `id_module` (FK a modules), `activo`, `created_at`, `updated_at`
    - Agregar constraint unique `@@unique([path, id_module])` e índice en `id_module`
    - Agregar el modelo `role_route_permissions` con campos: `id_role_route_permission`, `role`, `id_route` (FK a route_catalog), `id_tenant` (FK a tenant), `created_at`
    - Agregar constraint unique `@@unique([role, id_route, id_tenant])`, índices en `(role, id_tenant)` y `(id_tenant)`
    - Agregar el modelo `user_route_permissions` con campos: `id_user_route_permission`, `id_usuario` (FK a usuario), `id_route` (FK a route_catalog), `created_at`
    - Agregar constraint unique `@@unique([id_usuario, id_route])`, índice en `(id_usuario)`
    - Agregar relación inversa `route_catalog route_catalog[]` en el modelo `modules`
    - Agregar relación inversa `role_route_permissions role_route_permissions[]` en el modelo `Tenant`
    - Agregar relación inversa `user_route_permissions user_route_permissions[]` en el modelo `Usuario`
    - Ejecutar `npx prisma db push` o crear migración para aplicar los cambios
    - _Requisitos: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6_

  - [ ]* 1.2 Escribir test de propiedad para unicidad del catálogo de rutas
    - **Propiedad 1: Unicidad del catálogo de rutas**
    - **Valida: Requisito 1.2**

- [x] 2. Script seed para poblar catálogo de rutas
  - [x] 2.1 Crear script `seed-routes.ts`
    - Crear archivo `laritechfarms_backend_node/prisma/seed-routes.ts`
    - Copiar la estructura MENUITEMS de `navservice.ts` como constante JSON (no importable directamente desde Angular)
    - Copiar los prefijos de `MODULE_ROUTE_MAP` de `permissions.config.ts` como constante equivalente
    - Implementar función recursiva que extraiga todos los items hoja con `path` y `title`
    - Para cada `{ path, title }`, buscar el módulo correspondiente usando `path.startsWith(prefix)` contra MODULE_ROUTE_MAP
    - Si no se encuentra módulo, imprimir `console.warn()` con la ruta y omitirla
    - Buscar el `id_module` en la tabla `modules` por nombre
    - Ejecutar upsert: `INSERT INTO route_catalog (path, nombre, id_module) ... ON CONFLICT (path, id_module) DO UPDATE SET nombre = ..., updated_at = NOW()`
    - _Requisitos: 1.5, 1.6, 1.7, 1.8, 1.9_

  - [ ]* 2.2 Escribir test de propiedad para extracción recursiva y mapeo de rutas
    - **Propiedad 3: Extracción recursiva y mapeo de rutas del seed**
    - **Valida: Requisitos 1.5, 1.6**

  - [ ]* 2.3 Escribir test de propiedad para idempotencia del seed
    - **Propiedad 4: Idempotencia del seed y preservación de datos existentes**
    - **Valida: Requisitos 1.7, 1.8**

- [x] 3. Controlador y rutas del catálogo de rutas (backend)
  - [x] 3.1 Implementar `routeCatalogController`
    - Crear archivo `laritechfarms_backend_node/src/controllers/routeCatalogController.ts`
    - Implementar `getRouteCatalog`: GET retorna rutas agrupadas por módulo (solo activas), con estructura `{ [moduleName]: { id_module, routes: [...] } }`
    - Implementar `createRoute`: POST crea ruta manual, valida que no exista duplicado (path+module), retorna 409 si duplicada
    - Implementar `updateRoute`: PUT actualiza nombre y/o activo de una ruta por id
    - Usar `createSuccessResponse`, `createErrorResponse` de `../utils/helpers`
    - _Requisitos: 1.1, 1.2, 1.3, 1.4, 7.1_

  - [x] 3.2 Crear archivo de rutas `routeCatalog.ts` y registrar en `index.ts`
    - Crear `laritechfarms_backend_node/src/routes/routeCatalog.ts`
    - Definir rutas: GET `/`, POST `/`, PUT `/:id`
    - Aplicar middlewares: `authenticateToken`, `requireRole('superadmin')`
    - Registrar en `laritechfarms_backend_node/src/routes/index.ts` como `router.use('/route-catalog', routeCatalogRoutes)`
    - Agregar entrada en el array de endpoints del endpoint `/test`
    - _Requisitos: 7.1_

  - [ ]* 3.3 Escribir test de propiedad para agrupación correcta del catálogo por módulo
    - **Propiedad 2: Agrupación correcta del catálogo por módulo**
    - **Valida: Requisito 1.4**

- [x] 4. Checkpoint — Verificar catálogo de rutas
  - Asegurar que los modelos Prisma se sincronizan correctamente, el seed se ejecuta sin errores, y el endpoint GET del catálogo retorna las rutas agrupadas por módulo. Preguntar al usuario si surgen dudas.

- [x] 5. Controlador y rutas de permisos de ruta (backend)
  - [x] 5.1 Implementar `routePermissionsController`
    - Crear archivo `laritechfarms_backend_node/src/controllers/routePermissionsController.ts`
    - Implementar `getRoleRoutePermissions`: GET por rol y tenant, retorna lista de rutas permitidas agrupadas por módulo
    - Implementar `updateRoleRoutePermissions`: PUT recibe `{ role, id_tenant, route_ids }`, valida rol válido, tenant existe, cada ruta existe y está activa, rol tiene acceso al módulo padre de cada ruta; en transacción: eliminar todos los permisos del rol+tenant e insertar los nuevos
    - Implementar `getMyRoutePermissions`: GET retorna permisos de ruta del usuario autenticado (extrae idUsuario y rol del JWT), estructura: `{ role_routes: { [module]: paths[] }, user_routes: { [module]: paths[] } }`
    - Implementar `getUserRoutePermissions`: GET por idUsuario, retorna permisos de ruta del usuario
    - Implementar `updateUserRoutePermissions`: PUT recibe `{ id_usuario, route_ids }`, valida usuario existe, cada ruta existe; en transacción: eliminar todos los permisos del usuario e insertar los nuevos
    - _Requisitos: 2.1, 2.2, 2.4, 2.5, 2.6, 3.1, 3.4, 3.5, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9_

  - [x] 5.2 Crear archivo de rutas `routePermissions.ts` y registrar en `index.ts`
    - Crear `laritechfarms_backend_node/src/routes/routePermissions.ts`
    - Definir rutas: GET `/me` (cualquier autenticado), GET `/by-role` (superadmin), PUT `/by-role` (superadmin), GET `/by-user` (superadmin), PUT `/by-user` (superadmin)
    - Aplicar middlewares: `authenticateToken` global, `requireRole('superadmin')` en endpoints de administración
    - Registrar en `laritechfarms_backend_node/src/routes/index.ts` como `router.use('/route-permissions', routePermissionsRoutes)`
    - Agregar entrada en el array de endpoints del endpoint `/test`
    - _Requisitos: 7.2, 7.3, 7.4, 7.5, 7.6, 7.9_

  - [ ]* 5.3 Escribir test de propiedad para validación de acceso al módulo padre
    - **Propiedad 5: Validación de acceso al módulo padre en asignación de permisos**
    - **Valida: Requisito 2.2**

  - [ ]* 5.4 Escribir test de propiedad para desactivación de ruta preserva datos
    - **Propiedad 10: Desactivación de ruta preserva datos**
    - **Valida: Requisito 6.11**

- [x] 6. Checkpoint — Verificar API de permisos de ruta
  - Asegurar que todos los endpoints de permisos de ruta responden correctamente: asignación por rol, asignación por usuario, consulta de permisos propios, validaciones de autorización (403 para non-superadmin). Preguntar al usuario si surgen dudas.

- [x] 7. Métodos en SuperAdminService (frontend)
  - [x] 7.1 Agregar métodos de API al `SuperAdminService`
    - Agregar en `LariTechFarms/src/app/shared/services/super-admin.service.ts`:
    - `getRouteCatalog()`: GET `/route-catalog`
    - `createRouteCatalogEntry(data)`: POST `/route-catalog`
    - `updateRouteCatalogEntry(id, data)`: PUT `/route-catalog/:id`
    - `getRoleRoutePermissions(role, tenantId)`: GET `/route-permissions/by-role`
    - `updateRoleRoutePermissions(data)`: PUT `/route-permissions/by-role`
    - `getUserRoutePermissions(idUsuario)`: GET `/route-permissions/by-user`
    - `updateUserRoutePermissions(data)`: PUT `/route-permissions/by-user`
    - `getMyRoutePermissions()`: GET `/route-permissions/me`
    - _Requisitos: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

- [x] 8. Actualizar PermissionsService para permisos de ruta
  - [x] 8.1 Modificar `PermissionsService` para cargar y evaluar permisos de ruta
    - Modificar `LariTechFarms/src/app/shared/services/permissions.service.ts`
    - Agregar `roleRoutePermissions$` BehaviorSubject (`Record<string, string[]>`) y `userRoutePermissions$` BehaviorSubject (`Record<string, string[]>`)
    - En `init()`, después de cargar `userModules`, agregar paso adicional: fetch a `/route-permissions/me` y almacenar `role_routes` y `user_routes` en los nuevos subjects
    - Si la API falla, aplicar fallback permisivo: subjects vacíos (sin restricciones de ruta)
    - Implementar método `hasRouteAccess(route: string): boolean` que evalúe las 3 capas: módulo habilitado, rol/usuario tiene módulo, permisos de ruta (usuario override > rol > permisivo)
    - Actualizar `clear()` para limpiar `roleRoutePermissions$` y `userRoutePermissions$`
    - Actualizar `getFilteredMenuItems()` y `filterMenuChildren()` para usar `hasRouteAccess()` en lugar de `hasAccess()`
    - _Requisitos: 2.3, 2.4, 3.2, 3.3, 4.4, 5.1, 5.2, 5.3, 9.1, 9.2, 9.3, 9.4_

  - [ ]* 8.2 Escribir test de propiedad para comportamiento permisivo vs restrictivo
    - **Propiedad 6: Comportamiento permisivo por defecto vs restrictivo con permisos explícitos**
    - **Valida: Requisitos 2.3, 2.4**

  - [ ]* 8.3 Escribir test de propiedad para round-trip de eliminación
    - **Propiedad 7: Eliminación de permisos restaura comportamiento permisivo**
    - **Valida: Requisito 2.5**

  - [ ]* 8.4 Escribir test de propiedad para prioridad de permisos de usuario sobre rol
    - **Propiedad 8: Prioridad de permisos de usuario sobre permisos de rol**
    - **Valida: Requisitos 3.2, 3.3**

  - [ ]* 8.5 Escribir test de propiedad para filtrado del menú
    - **Propiedad 9: Filtrado del menú respeta permisos de ruta**
    - **Valida: Requisitos 5.1, 5.2, 5.3**

- [x] 9. Actualizar roleModuleGuard
  - [x] 9.1 Modificar `roleModuleGuard` para usar `hasRouteAccess`
    - Modificar `LariTechFarms/src/app/core/role-module.guard.ts`
    - Cambiar `evaluateAccess` para llamar a `permissions.hasRouteAccess(url)` en lugar de `permissions.hasAccess(url)`
    - Mantener la redirección a `/access-denied` cuando el acceso es denegado
    - _Requisitos: 4.1, 4.2, 4.3, 4.4_

- [x] 10. Checkpoint — Verificar evaluación de acceso con 3 capas
  - Asegurar que el guard evalúa correctamente las 3 capas, que el menú se filtra según permisos de ruta, y que el fallback permisivo funciona cuando no hay permisos de ruta configurados. Preguntar al usuario si surgen dudas.

- [x] 11. Componente RoutePermissionsComponent (frontend)
  - [x] 11.1 Crear componente `RoutePermissionsComponent`
    - Crear directorio y archivos en `LariTechFarms/src/app/componets/dashbord/super-admin/route-permissions/`
    - Componente standalone con imports: SharedModule, RouterModule, FormsModule, NgSelectModule
    - Implementar selector de tenant (ng-select) para que el superadmin gestione cualquier tenant
    - Implementar toggle de vista: "Por Rol" / "Por Usuario"
    - **Vista por Rol:** Cargar catálogo de rutas (`getRouteCatalog`) y permisos por rol (`getRoleRoutePermissions`). Mostrar tabla con filas = rutas agrupadas por módulo (encabezados de sección) y columnas = 6 roles. Cada celda es un checkbox. Al marcar/desmarcar, enviar `updateRoleRoutePermissions` con lista completa de `route_ids`. Si el rol no tiene acceso al módulo padre, deshabilitar checkboxes de ese módulo.
    - **Vista por Usuario:** Selector de usuario del tenant seleccionado. Mostrar rutas con checkboxes para el usuario. Al cambiar, enviar `updateUserRoutePermissions`.
    - **Gestión del Catálogo:** Botón "Agregar Ruta" con formulario inline/modal para crear ruta manual. Cada fila de ruta tiene botón de edición para nombre y estado activo.
    - Seguir patrones UI existentes: `card custom-card`, `table-bordered`, `app-hr-dashboard-page-header`, `ToastrService`
    - Al cambiar tenant en el selector, recargar toda la data
    - _Requisitos: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 6.10, 6.11_

  - [ ]* 11.2 Escribir tests unitarios para `RoutePermissionsComponent`
    - Verificar que superadmin ve selector de tenant
    - Verificar que toggle cambia entre vista por rol y por usuario
    - Verificar que checkboxes reflejan estado de permisos
    - Verificar que toggle de checkbox llama a API correcta
    - Verificar que error en API revierte checkbox y muestra toast de error
    - Verificar que checkboxes se deshabilitan cuando el rol no tiene acceso al módulo padre
    - _Requisitos: 6.2, 6.3, 6.4, 6.5_

- [x] 12. Ruta y navegación del componente
  - [x] 12.1 Agregar ruta en `super-admin.routes.ts` y menú en `navservice.ts`
    - Agregar ruta `route-permissions` en `LariTechFarms/src/app/componets/dashbord/super-admin/super-admin.routes.ts` con lazy loading del `RoutePermissionsComponent`
    - Agregar ítem de menú en `MENUITEMS` de `LariTechFarms/src/app/shared/services/navservice.ts` dentro de la sección "Super Admin": `{ path: '/dashboard/super-admin/route-permissions', title: 'Permisos de Ruta', type: 'link', selected: false }`
    - _Requisitos: 6.1, 6.6_

- [x] 13. Checkpoint final — Verificar integración completa
  - Asegurar que todos los tests pasan, que el seed puebla el catálogo correctamente, que los endpoints de permisos de ruta funcionan, que el `PermissionsService` evalúa las 3 capas, que el guard redirige correctamente, que el menú se filtra según permisos de ruta, y que el componente de administración permite gestionar permisos por rol y por usuario. Preguntar al usuario si surgen dudas.

## Notas

- Las tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido.
- Cada tarea referencia requisitos específicos para trazabilidad.
- Los checkpoints permiten validación incremental.
- Los tests de propiedades validan propiedades universales de correctitud definidas en el diseño.
- El principio de diseño es **permisivo por defecto**: sin registros de permisos de ruta, el acceso a todas las rutas del módulo se mantiene (retrocompatibilidad total).
