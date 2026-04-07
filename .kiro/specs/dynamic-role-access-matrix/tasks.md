# Plan de Implementación: Matriz Dinámica de Acceso Rol-Módulo

## Resumen

Implementar la gestión dinámica de la matriz de acceso rol-módulo por tenant, convirtiendo la constante estática `ROLE_ACCESS_MATRIX` en una tabla de base de datos `role_modules` con endpoints CRUD, pantalla de administración y actualización del `PermissionsService` con fallback a la matriz estática.

## Tareas

- [x] 1. Modelo Prisma y migración de datos
  - [x] 1.1 Agregar modelo `role_modules` al schema de Prisma
    - Agregar el modelo `role_modules` en `laritechfarms_backend_node/prisma/schema.prisma` con los campos: `id_role_module`, `role`, `id_module`, `id_tenant`, `created_at`
    - Agregar relación inversa `role_modules role_modules[]` en el modelo `modules`
    - Agregar relación inversa `role_modules role_modules[]` en el modelo `Tenant`
    - Definir constraint unique `@@unique([role, id_module, id_tenant])`, índices en `(id_tenant)` y `(role, id_tenant)`
    - Ejecutar `npx prisma db push` o crear migración para aplicar los cambios
    - _Requisitos: 1.1, 1.2, 1.3, 1.4_

  - [x] 1.2 Crear script de seed para poblar `role_modules` con datos iniciales
    - Crear archivo `laritechfarms_backend_node/prisma/seed-role-modules.ts`
    - Leer todos los tenants existentes y todos los módulos activos
    - Para cada tenant, insertar registros equivalentes a la `ROLE_ACCESS_MATRIX` estática usando `upsert` para evitar duplicados
    - Mapear nombres de módulos de la constante a IDs de la tabla `modules`
    - _Requisitos: 1.5_

  - [ ]* 1.3 Escribir test de propiedad para correctitud del seed inicial
    - **Propiedad 8: Correctitud del seed inicial**
    - **Valida: Requisito 1.5**

- [x] 2. Middleware y controlador backend
  - [x] 2.1 Crear middleware `validateTenantScope`
    - Crear archivo `laritechfarms_backend_node/src/middleware/validateTenantScope.ts`
    - Permitir a `superadmin` operar sobre cualquier tenant
    - Restringir a `admin` a operar solo sobre su propio `idTenant`
    - Forzar el `idTenant` del usuario si no se especifica en la solicitud
    - Retornar 403 si un admin intenta acceder a otro tenant
    - _Requisitos: 2.4, 2.5, 3.5, 3.6_

  - [ ]* 2.2 Escribir test de propiedad para alcance de tenant
    - **Propiedad 1: Alcance de tenant (Tenant Scoping)**
    - **Valida: Requisitos 2.4, 2.5, 3.5, 3.6**

  - [x] 2.3 Implementar controlador `roleModulesController`
    - Crear archivo `laritechfarms_backend_node/src/controllers/roleModulesController.ts`
    - Implementar `getRoleModulesByTenant`: GET consulta por tenant, agrupa por rol, incluye nombre de módulo
    - Implementar `getRoleModulesByRole`: GET consulta por rol y tenant, retorna nombres de módulos
    - Implementar `assignRoleModule`: POST crea asignación, valida rol válido, módulo existe, tenant existe, no duplicado, protección "Super Admin"
    - Implementar `revokeRoleModule`: DELETE elimina asignación por id, retorna 404 si no existe
    - Implementar `bulkUpdateRoleModules`: PUT reemplaza asignaciones en transacción (delete all + create all), protección "Super Admin"
    - Usar `createSuccessResponse`, `createErrorResponse`, `validateRequired` de `../utils/helpers`
    - _Requisitos: 2.1, 2.2, 3.1, 3.2, 3.3, 3.4, 3.8, 3.9, 3.10, 6.1_

  - [ ]* 2.4 Escribir tests de propiedad para el controlador
    - **Propiedad 2: Correctitud de consultas por tenant y rol**
    - **Valida: Requisitos 2.1, 2.2**

  - [ ]* 2.5 Escribir test de propiedad para unicidad de asignaciones
    - **Propiedad 3: Unicidad de asignaciones**
    - **Valida: Requisitos 1.2, 3.2**

  - [ ]* 2.6 Escribir test de propiedad para actualización masiva round-trip
    - **Propiedad 4: Actualización masiva como round-trip**
    - **Valida: Requisito 3.4**

  - [ ]* 2.7 Escribir test de propiedad para rechazo de roles inválidos
    - **Propiedad 5: Rechazo de roles inválidos**
    - **Valida: Requisito 3.8**

  - [ ]* 2.8 Escribir test de propiedad para protección del módulo Super Admin
    - **Propiedad 6: Protección del módulo Super Admin**
    - **Valida: Requisitos 6.1, 6.2**

- [x] 3. Rutas backend y registro
  - [x] 3.1 Crear archivo de rutas `roleModules.ts` y registrar en `index.ts`
    - Crear `laritechfarms_backend_node/src/routes/roleModules.ts`
    - Definir rutas: GET `/`, GET `/by-role`, POST `/`, DELETE `/:id`, PUT `/bulk`
    - Aplicar middlewares: `authenticateToken`, `requireRole('superadmin', 'admin')`, `validateTenantScope`
    - Registrar en `laritechfarms_backend_node/src/routes/index.ts` como `router.use('/role-modules', roleModulesRoutes)`
    - Agregar entrada en el array de endpoints del endpoint `/test`
    - _Requisitos: 2.3, 3.7_

- [x] 4. Checkpoint — Verificar backend
  - Asegurar que el modelo Prisma se sincroniza correctamente, el seed se ejecuta sin errores, y los endpoints responden según lo esperado. Preguntar al usuario si surgen dudas.

- [x] 5. Métodos en SuperAdminService (frontend)
  - [x] 5.1 Agregar métodos de API al `SuperAdminService`
    - Agregar en `LariTechFarms/src/app/shared/services/super-admin.service.ts`:
    - `getRoleModules(tenantId)`: GET `/role-modules?idTenant=X`
    - `getRoleModulesByRole(role, tenantId)`: GET `/role-modules/by-role?role=R&idTenant=X`
    - `assignRoleModule(data)`: POST `/role-modules`
    - `revokeRoleModule(id)`: DELETE `/role-modules/:id`
    - `bulkUpdateRoleModules(data)`: PUT `/role-modules/bulk`
    - _Requisitos: 4.5, 4.6_

- [x] 6. Actualizar PermissionsService para datos dinámicos
  - [x] 6.1 Modificar `PermissionsService` para consultar API de role-modules
    - Modificar `LariTechFarms/src/app/shared/services/permissions.service.ts`
    - Agregar `roleModules$` BehaviorSubject y `usingFallback$` BehaviorSubject
    - En `init()`, después de obtener tenant modules, hacer fetch a `/role-modules/by-role` con el rol e idTenant del JWT
    - Si la API responde exitosamente, almacenar módulos en `roleModules$`
    - Si la API falla, usar `ROLE_ACCESS_MATRIX` estática como fallback y marcar `usingFallback$` como true
    - Actualizar `roleHasModule()` para consultar `roleModules$` en lugar de `ROLE_ACCESS_MATRIX`
    - Actualizar `clear()` para limpiar `roleModules$` y `usingFallback$`
    - Mantener `ROLE_ACCESS_MATRIX` en `permissions.config.ts` sin eliminarla
    - _Requisitos: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

  - [ ]* 6.2 Escribir test de propiedad para roleHasModule con datos dinámicos y fallback
    - **Propiedad 7: Correctitud de roleHasModule con datos dinámicos y fallback**
    - **Valida: Requisitos 5.3, 5.4**

- [x] 7. Componente RoleAccessMatrixComponent (frontend)
  - [x] 7.1 Crear componente `RoleAccessMatrixComponent`
    - Crear directorio y archivos en `LariTechFarms/src/app/componets/dashbord/super-admin/role-access-matrix/`
    - Componente standalone con imports: SharedModule, RouterModule, FormsModule, NgSelectModule
    - Cargar lista de tenants (para superadmin) y módulos activos del catálogo
    - Superadmin ve Selector_Tenant (ng-select); admin ve automáticamente su tenant
    - Mostrar tabla con módulos como filas y los 6 roles como columnas
    - Cada celda tiene un checkbox indicando si el rol tiene acceso al módulo en el tenant seleccionado
    - Al activar checkbox: POST `/role-modules` (asignar) + toast de éxito
    - Al desactivar checkbox: DELETE `/role-modules/:id` (revocar) + toast de éxito
    - Si la API falla: revertir checkbox + toast de error
    - Deshabilitar checkboxes de "Super Admin" para roles != superadmin
    - Mostrar spinner durante carga inicial
    - Seguir patrones UI existentes: `card custom-card`, `table-bordered`, `app-hr-dashboard-page-header`, `ToastrService`
    - Al cambiar tenant en el selector, recargar la matriz
    - _Requisitos: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10, 4.11, 6.2_

  - [ ]* 7.2 Escribir tests unitarios para `RoleAccessMatrixComponent`
    - Verificar que superadmin ve selector de tenant y admin no
    - Verificar que checkboxes reflejan estado de la matriz
    - Verificar que toggle llama a API correcta (POST/DELETE)
    - Verificar que error en API revierte checkbox
    - Verificar que checkboxes de "Super Admin" están deshabilitados para roles != superadmin
    - _Requisitos: 4.1, 4.2, 4.4, 4.7, 6.2_

- [x] 8. Ruta y navegación del componente
  - [x] 8.1 Agregar ruta en `super-admin.routes.ts` y menú en `navservice.ts`
    - Agregar ruta `role-access-matrix` en `LariTechFarms/src/app/componets/dashbord/super-admin/super-admin.routes.ts` con lazy loading del `RoleAccessMatrixComponent`
    - Agregar ítem de menú en `MENUITEMS` de `LariTechFarms/src/app/shared/services/navservice.ts` dentro de la sección "Super Admin": `{ path: '/dashboard/super-admin/role-access-matrix', title: 'Matriz de Acceso', type: 'link', selected: false }`
    - _Requisitos: 4.1, 4.2_

- [x] 9. Checkpoint final — Verificar integración completa
  - Asegurar que todos los tests pasan, que la pantalla de administración carga correctamente, que los checkboxes funcionan, que el `PermissionsService` usa datos dinámicos con fallback, y que la navegación muestra el nuevo ítem de menú. Preguntar al usuario si surgen dudas.

## Notas

- Las tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido.
- Cada tarea referencia requisitos específicos para trazabilidad.
- Los checkpoints permiten validación incremental.
- Los tests de propiedades validan propiedades universales de correctitud definidas en el diseño.
- La `ROLE_ACCESS_MATRIX` estática se mantiene como fallback, no se elimina.
