# Documento de Requisitos de Bugfix

## Introducción

Se han identificado 3 bugs en la interfaz de usuario de la aplicación LariTechFarms (Angular 18):

1. **Paginadores sin páginas visibles**: Los paginadores aplican correctamente el `limit` de registros, pero no generan ni muestran los botones de página. Esto ocurre porque `totalPages` permanece en 0 en ciertos componentes — ya sea porque el backend no devuelve `totalPages` en la respuesta, porque el componente no lo extrae correctamente del response, o porque la detección de cambios no se dispara tras asignar el valor.

2. **Spinner de carga indefinido**: Algunas vistas se quedan mostrando el spinner de carga indefinidamente hasta que el usuario hace clic en cualquier parte. Esto indica un problema con la detección de cambios de Angular — los datos se cargan correctamente pero la UI no se actualiza porque `ChangeDetectorRef.detectChanges()` no se invoca después de asignar `isLoading = false` en componentes que lo necesitan.

3. **Falta de toasts en gestión de accesos a rutas**: En la gestión de permisos de ruta (`route-permissions`), las operaciones de agregar/remover acceso a rutas por rol y por usuario ya tienen toasts implementados. Sin embargo, el componente `role-access-matrix` (matriz de acceso por rol a módulos) carece de retroalimentación visual consistente en todas las operaciones. Adicionalmente, se necesita verificar que todos los componentes de gestión de acceso en super-admin tengan toasts apropiados.

## Bug Analysis

### Current Behavior (Defect)

1.1 WHEN un componente de listado carga datos paginados del backend Y el componente usa un servicio intermedio con `BehaviorSubject` (como `EmployeeService`, `TaskService`, `ProjectService`) THEN el paginador muestra solo los botones "Anterior" y "Siguiente" sin botones de página intermedios, porque `totalPages` se calcula como 0 al no recibir o procesar correctamente el valor `total` del observable

1.2 WHEN un componente de listado carga datos paginados directamente del API (como `client-list`, `sell-list`) Y no inyecta `ChangeDetectorRef` THEN el paginador puede no actualizarse visualmente después de que `totalPages` se asigna, porque la detección de cambios no se dispara automáticamente en ciertos escenarios de suscripción asíncrona

1.3 WHEN un componente de vista/detalle (como `view-ticket`, `edit-ticket`) carga datos del backend Y no inyecta `ChangeDetectorRef` THEN el spinner de carga (`isLoading`) se queda visible indefinidamente hasta que el usuario interactúa con la página, porque `isLoading = false` se asigna pero Angular no detecta el cambio

1.4 WHEN un componente de listado usa `Promise.all()` con `.toPromise()` para cargar datos (como los reportes) Y la promesa se resuelve fuera de la zona de Angular THEN el spinner permanece visible indefinidamente porque la detección de cambios no se ejecuta automáticamente al resolver la promesa

1.5 WHEN el usuario agrega o remueve acceso a un módulo en la `role-access-matrix` THEN el sistema muestra toasts de éxito/error, pero no hay retroalimentación visual consistente en todos los flujos de la gestión de accesos (por ejemplo, al restaurar permisos al rol en `user-access-matrix` o al crear/editar rutas en `route-permissions`)

### Expected Behavior (Correct)

2.1 WHEN un componente de listado carga datos paginados del backend THEN el sistema SHALL mostrar los botones de página correctos en el paginador, calculando `totalPages = Math.ceil(totalItems / pageSize)` y asegurando que el valor se propague correctamente a la vista

2.2 WHEN un componente de listado o detalle asigna `isLoading = false` o actualiza `totalPages` después de recibir datos del API THEN el sistema SHALL invocar `ChangeDetectorRef.detectChanges()` o usar `markForCheck()` para garantizar que la UI se actualice inmediatamente sin requerir interacción del usuario

2.3 WHEN un componente de vista/detalle termina de cargar datos del backend THEN el sistema SHALL ocultar el spinner de carga inmediatamente, sin requerir que el usuario haga clic en la página

2.4 WHEN un componente usa `Promise.all()` para cargar datos THEN el sistema SHALL asegurar que la detección de cambios se ejecute después de resolver las promesas, ya sea usando `ChangeDetectorRef.detectChanges()` o ejecutando las promesas dentro de `NgZone.run()`

2.5 WHEN el usuario realiza cualquier operación de gestión de accesos (asignar, revocar, restaurar, crear ruta, editar ruta) en los componentes de super-admin THEN el sistema SHALL mostrar un toast de éxito o error según el resultado de la operación

### Unchanged Behavior (Regression Prevention)

3.1 WHEN un componente de listado ya funciona correctamente con paginador y spinner (como `galera-list`, `vehiculo-list`, `inventario-list`) THEN el sistema SHALL CONTINUE TO mostrar el paginador con las páginas correctas y ocultar el spinner al terminar la carga

3.2 WHEN el usuario navega entre vistas de la aplicación THEN el sistema SHALL CONTINUE TO funcionar sin páginas en blanco, manteniendo el patrón `takeUntilDestroyed()` para desuscripción de observables

3.3 WHEN los componentes de super-admin que ya tienen toasts implementados (`role-access-matrix.toggleAccess`, `route-permissions.toggleRoleRoute`, `route-permissions.toggleUserRoute`) THEN el sistema SHALL CONTINUE TO mostrar los mismos toasts de éxito/error sin duplicarlos

3.4 WHEN el backend devuelve una respuesta paginada con la estructura `{ success: true, data: { data: [...], pagination: { total, totalPages } } }` THEN el sistema SHALL CONTINUE TO parsear correctamente la respuesta sin romper los componentes que ya funcionan

3.5 WHEN el selector de registros por página cambia el `pageSize` THEN el sistema SHALL CONTINUE TO reiniciar `currentPage` a 1 y recargar los datos con el nuevo tamaño de página
