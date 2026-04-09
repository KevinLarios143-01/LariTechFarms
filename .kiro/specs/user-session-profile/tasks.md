# Plan de Implementación: User Session Profile

## Resumen

Implementación del servicio centralizado de sesión de usuario, integración con Header/Sidebar, corrección del sidebar en móvil, y auditoría/estandarización de estilos SCSS según la plantilla base Dayone.

## Tareas

- [x] 1. Crear interfaces y servicio centralizado de sesión
  - [x] 1.1 Crear las interfaces `MeResponse` y `JwtPayload`
    - Crear `src/app/shared/interfaces/me-response.interface.ts` con la interfaz `MeResponse` que modela la respuesta de `GET /v1/auth/me`
    - Crear `src/app/shared/interfaces/jwt-payload.interface.ts` con la interfaz `JwtPayload` que modela el payload decodificado del JWT
    - _Requisitos: 1.1, 1.6_

  - [x] 1.2 Crear el `UserSessionService`
    - Crear `src/app/shared/services/user-session.service.ts` con `providedIn: 'root'`
    - Implementar `BehaviorSubject<UserData | null>` y `BehaviorSubject<boolean>` para loading
    - Implementar `setUser(user: UserData)` para almacenar datos tras login
    - Implementar `clearSession()` que emite `null` y limpia el estado
    - Implementar `initSession()` que consulta `GET /v1/auth/me` con el token existente, mapea la respuesta a `UserData` usando `mapMeToUserData()`
    - Implementar `extractFromToken()` como fallback que decodifica el JWT y extrae `email` y `rol`
    - Manejar error 401 (limpiar sesión + redirigir a login), error 500 (fallback desde JWT), y ausencia de token
    - Exponer `user$`, `loading$` y getter `currentUser`
    - _Requisitos: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6_

  - [ ]* 1.3 Escribir test de propiedad: Round-trip de UserData (Property 1)
    - **Property 1: Round-trip de UserData a través del BehaviorSubject**
    - Usar fast-check para generar `UserData` arbitrarios y verificar que `setUser(userData)` emite exactamente el mismo objeto a los suscriptores
    - **Valida: Requisitos 1.1, 1.2, 4.3**

  - [ ]* 1.4 Escribir test de propiedad: clearSession emite null (Property 2)
    - **Property 2: clearSession emite null**
    - Usar fast-check para verificar que desde cualquier estado previo, `clearSession()` hace que `user$` emita `null` y `currentUser` retorne `null`
    - **Valida: Requisito 1.4**

  - [ ]* 1.5 Escribir test de propiedad: Fallback desde JWT (Property 3)
    - **Property 3: Extracción de fallback desde JWT en error de servidor**
    - Usar fast-check para generar JWTs válidos con `email` y `rol` arbitrarios, simular error 500 en `/me`, y verificar que el servicio extrae al menos `email` y `rol` del token
    - **Valida: Requisito 1.6**

  - [ ]* 1.6 Escribir test de propiedad: Token expirado dispara limpieza (Property 5)
    - **Property 5: Token expirado o inválido dispara limpieza**
    - Usar fast-check para generar tokens con `exp` menor al timestamp actual, verificar que `user$` emite `null`
    - **Valida: Requisito 4.2**

- [x] 2. Integrar flujo de login con el servicio de sesión
  - [x] 2.1 Modificar `LoginComponent` para usar `UserSessionService`
    - Inyectar `UserSessionService` en `src/app/authentication/login/login.component.ts`
    - En `loginWithBackend()`: tras `saveToken()`, llamar `userSessionService.setUser(res.data.user)` antes de navegar al dashboard
    - En `validateBackendUser()` (flujo Firebase): tras `saveToken()`, llamar `userSessionService.setUser(response.data.user)` antes de navegar al dashboard
    - _Requisitos: 5.1, 5.2_

  - [ ]* 2.2 Escribir tests unitarios para la integración del login
    - Verificar que `setUser()` se invoca tras login exitoso con backend
    - Verificar que `setUser()` se invoca tras login exitoso con Firebase
    - _Requisitos: 5.1, 5.2_

- [x] 3. Mostrar datos reales del usuario en Header y Sidebar
  - [x] 3.1 Modificar `HeaderComponent` para consumir `UserSessionService`
    - Inyectar `UserSessionService` en `src/app/shared/common/header/header.component.ts`
    - Suscribirse a `user$` en `ngOnInit()` y almacenar los datos en una propiedad del componente
    - En `logout()`: invocar `userSessionService.clearSession()` además de la lógica existente de limpieza
    - En el template HTML: reemplazar "John Thomson" por `{{ user?.nombre }} {{ user?.apellido }}`, "App Developer" por `{{ user?.rol }}`, y la imagen estática por avatar dinámico con fallback al Avatar_Por_Defecto
    - Mostrar indicador de carga o placeholder mientras `loading$` es `true`
    - _Requisitos: 2.1, 2.2, 2.3, 2.4, 2.5, 5.3_

  - [x] 3.2 Modificar `SidebarComponent` para consumir `UserSessionService`
    - Inyectar `UserSessionService` en `src/app/shared/common/sidebar/sidebar.component.ts`
    - Suscribirse a `user$` en `ngOnInit()` y almacenar los datos en una propiedad del componente
    - En el template HTML: reemplazar "Kevin Larios" por `{{ user?.nombre }} {{ user?.apellido }}`, "Administrador" por `{{ user?.rol }}`, y la imagen estática por avatar dinámico con fallback al Avatar_Por_Defecto
    - _Requisitos: 3.1, 3.2, 3.3, 3.4_

  - [ ]* 3.3 Escribir test de propiedad: Formato de nombre completo (Property 4)
    - **Property 4: Formato de nombre completo**
    - Usar fast-check para generar pares arbitrarios de `nombre` y `apellido`, verificar que la concatenación es exactamente `"${nombre} ${apellido}"`
    - **Valida: Requisitos 2.2, 3.2**

  - [ ]* 3.4 Escribir tests unitarios para Header y Sidebar
    - HeaderComponent: verificar suscripción a `user$`, renderizado de nombre/rol/avatar, estado de carga, y que `logout()` invoca `clearSession()`
    - SidebarComponent: verificar suscripción a `user$`, renderizado de nombre/rol/avatar, avatar por defecto
    - _Requisitos: 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 3.4_

- [x] 4. Persistencia y restauración de sesión en recarga
  - [x] 4.1 Integrar `initSession()` en el ciclo de vida de la aplicación
    - Invocar `UserSessionService.initSession()` durante la inicialización de la app (en `APP_INITIALIZER` o en el componente raíz) para restaurar datos del usuario cuando existe un JWT válido en localStorage
    - Verificar que si el token es inválido o expirado, se limpia la sesión y se redirige a login
    - _Requisitos: 4.1, 4.2, 4.3_

  - [ ]* 4.2 Escribir tests unitarios para persistencia de sesión
    - Verificar que `initSession()` consulta `/me` cuando hay token válido
    - Verificar que se limpia la sesión y redirige a login cuando el token es inválido/expirado
    - _Requisitos: 4.1, 4.2_

- [x] 5. Checkpoint - Verificar servicio de sesión completo
  - Asegurar que todos los tests pasan, preguntar al usuario si surgen dudas.
  - Verificar que el login almacena datos, el header y sidebar muestran datos reales, y la recarga restaura la sesión.

- [x] 6. Corregir comportamiento del sidebar en dispositivos móviles
  - [x] 6.1 Corregir `NavService` para filtrar solo `NavigationEnd`
    - En `src/app/shared/services/navservice.ts`, modificar la suscripción a eventos del router para usar `filter(event => event instanceof NavigationEnd)` en lugar de suscribirse a todos los eventos
    - Esto evita que el sidebar se cierre y reabra múltiples veces durante una navegación
    - _Requisitos: 6.3_

  - [x] 6.2 Corregir `CustomHeaderComponent.ngOnDestroy`
    - En `src/app/shared/common/custom-header/custom-header.component.ts`, modificar `ngOnDestroy()` para que NO establezca `data-toggled = 'open'` cuando `window.innerWidth <= 991`
    - En pantallas móviles, establecer `data-toggled = 'close'` en lugar de `'open'`
    - _Requisitos: 6.6_

  - [ ]* 6.3 Escribir tests unitarios para correcciones del sidebar móvil
    - NavService: verificar que solo se suscribe a `NavigationEnd`
    - CustomHeaderComponent: verificar que `ngOnDestroy` no establece `data-toggled='open'` en pantallas ≤991px
    - Verificar estado inicial colapsado en <991px, persistencia tras cierre, toggle correcto
    - _Requisitos: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

- [x] 7. Checkpoint - Verificar correcciones de sidebar móvil
  - Asegurar que todos los tests pasan, preguntar al usuario si surgen dudas.
  - Verificar que el sidebar permanece cerrado en móvil tras navegación y que el toggle funciona correctamente.

- [x] 8. Auditoría del estándar de estilos de la plantilla base
  - [x] 8.1 Generar inventario de referencia de estilos disponibles
    - Revisar `assets/scss/_variables.scss` y documentar las Variables_De_Diseño (colores, tipografía, bordes, sombras, modo oscuro)
    - Revisar `assets/scss/util/` y catalogar todas las Clases_Utilitarias (avatares, fondos, bordes, tipografía, ancho, altura, opacidad)
    - Revisar `assets/scss/custom/`, `assets/scss/pages/`, `assets/scss/bootstrap/` y catalogar estilos de componentes reutilizables
    - Verificar clases de Bootstrap disponibles globalmente y librerías de íconos en `assets/icon-fonts/`
    - Crear un archivo de referencia con el inventario categorizado para consulta del equipo
    - _Requisitos: 7.1, 7.2, 7.3, 7.4, 7.5_

- [x] 9. Estandarización de estilos - Prioridad Alta
  - [x] 9.1 Estandarizar `view-inventario.component.scss` y template
    - Reemplazar 6 colores hex hardcodeados por variables SCSS de la plantilla
    - Eliminar redefiniciones de `.avatar`, `.alert-light`, `.card.border`, `.card-header.bg-light`, `.progress`
    - Aplicar clases utilitarias equivalentes en el template HTML
    - Preservar estilos de negocio específicos con comentario justificativo
    - _Requisitos: 8.1, 8.2, 8.3, 8.5, 8.6, 8.7_

  - [x] 9.2 Estandarizar `view-gasto.component.scss` y template
    - Reemplazar 4 colores hex por variables SCSS
    - Eliminar redefinición de `.bg-purple` y `.card.border`
    - Aplicar clases utilitarias en el template HTML
    - _Requisitos: 8.1, 8.2, 8.3, 8.5, 8.7_

  - [x] 9.3 Estandarizar `vehiculo-list.component.scss` y template
    - Reemplazar colores hex en `.table th` por variables SCSS
    - Eliminar font-size hardcodeados y redefinición de `.badge`
    - _Requisitos: 8.1, 8.2, 8.3, 8.5, 8.7_

  - [x] 9.4 Estandarizar `inventario-list.component.scss` y template
    - Reemplazar colores hex en `.table th` por variables SCSS
    - Eliminar font-size hardcodeados
    - _Requisitos: 8.1, 8.2, 8.3, 8.5, 8.7_

  - [x] 9.5 Estandarizar `view-tasks.component.scss`
    - Evaluar el bloque `::ng-deep` extenso (~15 colores hex para dark mode del angular-editor)
    - Reemplazar colores hardcodeados por variables de dark mode de la plantilla (`--custom-white`, `--default-border`, `--default-text-color`)
    - Considerar mover estilos de terceros a `styles.scss` global con comentario justificativo
    - _Requisitos: 8.3, 8.4, 8.8_

  - [x] 9.6 Estandarizar `view-vehiculo.component.scss` y template
    - Reemplazar 3 colores hex por variables SCSS
    - Eliminar redefinición de `.card.border` y `.card-header.bg-light`
    - _Requisitos: 8.1, 8.2, 8.3, 8.5, 8.7_

  - [x] 9.7 Estandarizar `hr-dashboard-page-header.component.scss`
    - Evaluar `::ng-deep` con colores hex para Angular Material
    - Mantener sobrescrituras necesarias para Angular Material con comentario justificativo, eliminar las innecesarias
    - _Requisitos: 8.4, 8.8_

- [x] 10. Checkpoint - Verificar estandarización de prioridad alta
  - Asegurar que no hay regresiones visuales en los componentes modificados.
  - Preguntar al usuario si surgen dudas.

- [x] 11. Estandarización de estilos - Prioridad Media
  - [x] 11.1 Estandarizar `view-cliente.component.scss` y `view-venta.component.scss`
    - Reemplazar colores hex en `.info-label`/`.info-value` por `$text-muted` y `$default-text-color`
    - Reemplazar font-size hardcodeados por `$default-font-size` o clases utilitarias
    - _Requisitos: 8.2, 8.3, 8.5, 8.7_

  - [x] 11.2 Estandarizar `galera-list.component.scss` y `view-galera.component.scss`
    - Eliminar redefinición de `.bg-purple` con hex hardcodeado (ya existe en `_background.scss`)
    - _Requisitos: 8.1, 8.2, 8.5, 8.7_

  - [x] 11.3 Estandarizar `gasto-list.component.scss`
    - Eliminar redefinición de `.bg-purple` y `.badge` con font-size
    - _Requisitos: 8.1, 8.2, 8.5, 8.7_

  - [x] 11.4 Estandarizar `edit-user.component.scss`
    - Reemplazar color hex en `.form-control.ng-invalid` por variable SCSS
    - _Requisitos: 8.3, 8.5, 8.7_

  - [x] 11.5 Estandarizar `add-inventario.component.scss` y `edit-inventario.component.scss`
    - Eliminar redefinición de `.text-danger` con hex (ya definido globalmente con `$danger`)
    - _Requisitos: 8.1, 8.2, 8.5, 8.7_

- [x] 12. Estandarización de estilos - Prioridad Baja
  - [x] 12.1 Estandarizar `view-huevo.component.scss`
    - Eliminar redefinición de `.avatar-xl`, `.fs-24`, `.fs-48` (ya existen como clases utilitarias)
    - Usar clases utilitarias directamente en el template HTML
    - _Requisitos: 8.1, 8.5, 8.7_

  - [x] 12.2 Estandarizar `ticket-list`, `venta-list` y `cliente-list` component.scss
    - Eliminar redefinición de `.badge` (ya definido por Bootstrap)
    - _Requisitos: 8.1, 8.5, 8.7_

  - [x] 12.3 Estandarizar `view-ticket.component.scss` y `edit-ticket.component.scss`
    - Evaluar box-shadow custom en `.card` y reemplazar por `$box-shadow` o `.shadow-sm` si aplica
    - _Requisitos: 8.2, 8.5, 8.7_

  - [x] 12.4 Estandarizar `modules.component.scss`
    - Reemplazar valores hardcodeados en `.icon1` por variables SCSS de la plantilla
    - Mantener estilo de negocio específico con comentario justificativo
    - _Requisitos: 8.6, 8.8_

  - [x] 12.5 Estandarizar `add-venta.component.scss` y `add-puesto.component.scss`
    - Eliminar redefinición de `.form-label`, `.btn`, `.text-danger`
    - _Requisitos: 8.1, 8.5, 8.7_

  - [x] 12.6 Estandarizar componentes restantes de prioridad baja
    - `login.component.scss`: mantener `:host` con background-image y `::ng-deep` para Firebase con comentario justificativo
    - `access-denied.component.scss`: evaluar padding custom en `.card-body`
    - `support-switcher.component.scss`: reemplazar color hex en border por variable
    - `hr-dashboard-page-header-modal.component.scss`: evaluar `::ng-deep` para CDK overlay, reemplazar font-size hardcodeado
    - `on-hold-tasks.component.scss`: mantener `::ng-deep` para mat-paginator con comentario justificativo
    - `attendence-list.component.scss`: mantener `::ng-deep` para timepicker overlay con comentario justificativo
    - `support-header.component.scss`: mantener `::ng-deep` para megamenu horizontal con comentario justificativo
    - _Requisitos: 8.4, 8.6, 8.7, 8.8_

- [x] 13. Checkpoint final - Verificar estandarización completa
  - Asegurar que no hay regresiones visuales en ningún componente modificado.
  - Verificar que todos los archivos `.component.scss` con estilos justificados tienen comentarios explicativos.
  - Asegurar que todos los tests pasan, preguntar al usuario si surgen dudas.

## Notas

- Las tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido.
- Cada tarea referencia requisitos específicos para trazabilidad.
- Los checkpoints aseguran validación incremental.
- Los tests de propiedad validan propiedades universales de correctitud del `UserSessionService`.
- Los tests unitarios validan ejemplos específicos y casos borde de los componentes.
- La auditoría de estilos (tareas 8-12) está organizada por prioridad según la cantidad de anti-patrones detectados en el diseño.
