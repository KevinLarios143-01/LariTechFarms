# Documento de Requisitos

## Introducción

Esta funcionalidad conecta los datos reales del usuario autenticado (nombre, apellido, email, rol, avatar, tenant) con los componentes de la interfaz de usuario que actualmente muestran datos estáticos/hardcodeados. Los componentes afectados son: el header (perfil del usuario y dropdown), el sidebar (sección de usuario) y cualquier otra sección de la plantilla que muestre información del usuario logueado.

Actualmente, el header muestra "John Thomson" / "App Developer" con un avatar estático, y el sidebar muestra "Kevin Larios" / "Administrador" con otra imagen estática. El backend ya dispone de un endpoint `GET /v1/auth/me` que retorna los datos del usuario autenticado, y la respuesta de login incluye los datos del usuario. Esta funcionalidad requiere crear un servicio centralizado de sesión en el frontend que almacene y distribuya los datos del usuario logueado a todos los componentes de la UI.

## Glosario

- **Servicio_De_Sesion**: Servicio Angular centralizado (`UserSessionService`) responsable de almacenar, exponer y mantener actualizados los datos del usuario autenticado durante toda la sesión activa.
- **Header_Component**: Componente de cabecera de la aplicación (`HeaderComponent`) que muestra el avatar, nombre y rol del usuario en el dropdown de perfil.
- **Sidebar_Component**: Componente de barra lateral (`SidebarComponent`) que muestra el avatar, nombre completo y rol del usuario en la sección superior.
- **Datos_De_Usuario**: Conjunto de información del usuario autenticado que incluye: nombre, apellido, email, rol y nombre del tenant. Proviene del endpoint `GET /v1/auth/me` del backend.
- **JWT_Token**: Token de autenticación almacenado en `localStorage` que contiene idUsuario, idTenant, email y rol del usuario.
- **Endpoint_Me**: Endpoint del backend `GET /v1/auth/me` que retorna los datos completos del usuario autenticado.
- **Avatar_Por_Defecto**: Imagen genérica que se muestra cuando el usuario no tiene una imagen de perfil personalizada.
- **NavService**: Servicio Angular (`NavService`) responsable de gestionar el estado de navegación, los ítems del menú y el estado de colapso del sidebar. Contiene la propiedad `collapseSidebar` y suscripciones a eventos de router y resize.
- **Custom_Header_Component**: Componente de cabecera personalizado (`CustomHeaderComponent`) que incluye el botón de toggle del sidebar y lógica de inicialización del atributo `data-toggled` en el elemento HTML raíz.
- **Breakpoint_Móvil**: Umbral de ancho de pantalla de 991px. Pantallas con ancho menor a este valor se consideran dispositivos móviles para efectos del comportamiento del sidebar.
- **Plantilla_Base**: Plantilla de administración Angular "Dayone" de Spruko que provee el sistema de estilos globales del proyecto. Incluye Bootstrap CSS, variables SCSS personalizadas (`_variables.scss`), utilidades (`util/`), estilos de componentes (`custom/`), estilos de páginas (`pages/`) y estilos de menú (`menu-styles/`). Los archivos compilados se importan globalmente desde `src/styles.scss`.
- **Estilos_Globales**: Conjunto de hojas de estilo CSS/SCSS provistas por la Plantilla_Base que están disponibles globalmente en toda la aplicación. Incluyen: `bootstrap.css`, `icons.css`, `styles.css` (compilado desde `assets/scss/styles.scss`), y las librerías de terceros importadas en `src/styles.scss`.
- **Clases_Utilitarias**: Clases CSS predefinidas por la Plantilla_Base en la carpeta `assets/scss/util/` que cubren: avatares (`_avatars.scss`), fondos (`_background.scss`), bordes (`_border.scss`), altura (`_height.scss`), opacidad (`_opacity.scss`), padding (`_padding.scss`), tipografía (`_typography.scss`) y ancho (`_width.scss`). Estas clases están diseñadas para ser reutilizadas directamente en los templates HTML.
- **Variables_De_Diseño**: Variables CSS custom properties (`:root`) y variables SCSS (`$`) definidas en `assets/scss/_variables.scss` que establecen los tokens de diseño del proyecto: colores primarios/secundarios, tipografía, bordes, sombras, radios, fondos, y soporte para modo oscuro (`[data-theme-mode="dark"]`).
- **Estilos_Personalizados_Componente**: Estilos SCSS definidos directamente en los archivos `.component.scss` de cada componente Angular, que pueden duplicar o contradecir los Estilos_Globales provistos por la Plantilla_Base.
- **Auditoría_De_Estilos**: Proceso de revisión sistemática de los archivos `.component.scss` de cada componente para identificar estilos que duplican funcionalidad ya provista por la Plantilla_Base.

## Requisitos

### Requisito 1: Servicio centralizado de sesión de usuario

**Historia de Usuario:** Como desarrollador del frontend, quiero un servicio centralizado que almacene y exponga los datos del usuario logueado, para que todos los componentes de la UI puedan consumir información real del usuario de forma reactiva.

#### Criterios de Aceptación

1. THE Servicio_De_Sesion SHALL almacenar los Datos_De_Usuario como un observable reactivo (`BehaviorSubject`) accesible por cualquier componente de la aplicación.
2. WHEN el usuario completa el login exitosamente, THE Servicio_De_Sesion SHALL almacenar los Datos_De_Usuario recibidos en la respuesta de login.
3. WHEN la aplicación se inicializa con un JWT_Token válido en localStorage, THE Servicio_De_Sesion SHALL obtener los Datos_De_Usuario desde el Endpoint_Me del backend.
4. WHEN el usuario cierra sesión, THE Servicio_De_Sesion SHALL limpiar todos los Datos_De_Usuario almacenados y emitir un valor nulo a los suscriptores.
5. IF el Endpoint_Me retorna un error de autenticación (401), THEN THE Servicio_De_Sesion SHALL limpiar la sesión y redirigir al usuario a la página de login.
6. IF el Endpoint_Me retorna un error de servidor (500), THEN THE Servicio_De_Sesion SHALL extraer los datos básicos (email, rol) del JWT_Token como respaldo temporal.

### Requisito 2: Mostrar datos reales del usuario en el Header

**Historia de Usuario:** Como usuario autenticado, quiero ver mi nombre real y mi rol en el dropdown de perfil del header, para confirmar que estoy logueado con la cuenta correcta.

#### Criterios de Aceptación

1. WHEN el Header_Component se inicializa, THE Header_Component SHALL suscribirse al Servicio_De_Sesion para obtener los Datos_De_Usuario.
2. WHILE el usuario está autenticado, THE Header_Component SHALL mostrar el nombre completo del usuario (nombre + apellido) en el dropdown de perfil, reemplazando el texto estático "John Thomson".
3. WHILE el usuario está autenticado, THE Header_Component SHALL mostrar el rol del usuario en el dropdown de perfil, reemplazando el texto estático "App Developer".
4. WHILE el usuario está autenticado, THE Header_Component SHALL mostrar el Avatar_Por_Defecto o la imagen de perfil del usuario en el ícono del dropdown.
5. WHILE los Datos_De_Usuario están cargando, THE Header_Component SHALL mostrar un indicador de carga o texto placeholder en lugar de datos vacíos.

### Requisito 3: Mostrar datos reales del usuario en el Sidebar

**Historia de Usuario:** Como usuario autenticado, quiero ver mi nombre y rol reales en la sección de perfil del sidebar, para tener una experiencia personalizada y coherente.

#### Criterios de Aceptación

1. WHEN el Sidebar_Component se inicializa, THE Sidebar_Component SHALL suscribirse al Servicio_De_Sesion para obtener los Datos_De_Usuario.
2. WHILE el usuario está autenticado, THE Sidebar_Component SHALL mostrar el nombre completo del usuario (nombre + apellido) en la sección de perfil del sidebar, reemplazando el texto estático "Kevin Larios".
3. WHILE el usuario está autenticado, THE Sidebar_Component SHALL mostrar el rol del usuario en la sección de perfil del sidebar, reemplazando el texto estático "Administrador".
4. WHILE el usuario está autenticado, THE Sidebar_Component SHALL mostrar el Avatar_Por_Defecto o la imagen de perfil del usuario en la sección de perfil del sidebar.

### Requisito 4: Persistencia y sincronización de datos de sesión

**Historia de Usuario:** Como usuario autenticado, quiero que mis datos de perfil se mantengan visibles al recargar la página o navegar entre secciones, para no perder el contexto de mi sesión.

#### Criterios de Aceptación

1. WHEN el usuario recarga la página del navegador, THE Servicio_De_Sesion SHALL restaurar los Datos_De_Usuario consultando el Endpoint_Me con el JWT_Token existente.
2. WHEN el JWT_Token expira o es inválido, THE Servicio_De_Sesion SHALL limpiar los Datos_De_Usuario y redirigir al usuario a la página de login.
3. THE Servicio_De_Sesion SHALL mantener los Datos_De_Usuario consistentes en todos los componentes suscritos (Header_Component, Sidebar_Component) durante toda la sesión activa.

### Requisito 5: Integración del flujo de login con el servicio de sesión

**Historia de Usuario:** Como usuario, quiero que al iniciar sesión mis datos aparezcan inmediatamente en el header y sidebar, sin necesidad de recargar la página.

#### Criterios de Aceptación

1. WHEN el login con backend es exitoso, THE LoginComponent SHALL pasar los Datos_De_Usuario de la respuesta de login al Servicio_De_Sesion antes de navegar al dashboard.
2. WHEN el login con Firebase es exitoso y el token es intercambiado con el backend, THE LoginComponent SHALL pasar los Datos_De_Usuario de la respuesta al Servicio_De_Sesion antes de navegar al dashboard.
3. WHEN el logout se ejecuta desde el Header_Component, THE Header_Component SHALL invocar el método de limpieza del Servicio_De_Sesion además de limpiar tokens y permisos.

### Requisito 6: Corrección del comportamiento del sidebar en dispositivos móviles

**Historia de Usuario:** Como usuario que accede a la aplicación desde un dispositivo móvil, quiero que el menú lateral permanezca cerrado después de ocultarlo, para poder utilizar la aplicación sin que el sidebar se reabra automáticamente.

#### Criterios de Aceptación

1. WHEN la aplicación se carga en una pantalla con ancho menor a 991px, THE Sidebar_Component SHALL iniciar en estado colapsado (atributo `data-toggled` con valor `close`).
2. WHEN el usuario cierra el sidebar en una pantalla con ancho menor a 991px, THE Sidebar_Component SHALL permanecer en estado colapsado hasta que el usuario lo abra manualmente.
3. WHEN ocurre un evento de navegación (cambio de ruta) en una pantalla con ancho menor a 991px, THE NavService SHALL cerrar el sidebar sin reabrirlo posteriormente, suscribiéndose únicamente a eventos de tipo `NavigationEnd`.
4. WHEN el usuario presiona el botón de toggle del sidebar en una pantalla con ancho menor a 991px, THE Header_Component SHALL alternar el estado del sidebar entre abierto (`data-toggled = 'open'`) y cerrado (`data-toggled = 'close'`) de forma consistente.
5. IF el evento de resize del navegador reduce el ancho de pantalla a menos de 991px, THEN THE Sidebar_Component SHALL colapsar el sidebar y establecer el estado a cerrado.
6. WHILE la pantalla tiene un ancho menor a 991px, THE Custom_Header_Component SHALL evitar establecer el atributo `data-toggled` a `'open'` durante la inicialización o eventos de resize del navegador.

### Requisito 7: Auditoría del estándar de estilos de la plantilla base

**Historia de Usuario:** Como desarrollador del frontend, quiero tener documentado el estándar de estilos que provee la Plantilla_Base, para saber qué clases, utilidades y patrones de diseño están disponibles antes de crear estilos personalizados.

#### Criterios de Aceptación

1. THE Auditoría_De_Estilos SHALL identificar todas las Clases_Utilitarias disponibles en la carpeta `assets/scss/util/`, incluyendo clases de avatares, fondos, bordes, tipografía, ancho, altura, padding y opacidad.
2. THE Auditoría_De_Estilos SHALL documentar las Variables_De_Diseño definidas en `assets/scss/_variables.scss`, incluyendo colores primarios, secundarios, tipografía, bordes, sombras y soporte para modo oscuro.
3. THE Auditoría_De_Estilos SHALL catalogar los estilos de componentes provistos por la Plantilla_Base en las carpetas `assets/scss/custom/`, `assets/scss/pages/` y `assets/scss/bootstrap/`, identificando las clases CSS reutilizables para header, dashboard, autenticación, cards, formularios, tablas y widgets.
4. THE Auditoría_De_Estilos SHALL verificar las clases de Bootstrap incluidas globalmente a través de `assets/css/bootstrap.css` y las librerías de íconos disponibles en `assets/icon-fonts/` (Bootstrap Icons, Feather, Font Awesome, Remix Icons, Tabler Icons, entre otras).
5. WHEN la Auditoría_De_Estilos se complete, THE Auditoría_De_Estilos SHALL generar un inventario de referencia con las categorías de clases disponibles, sus nombres y su propósito, para que los desarrolladores consulten antes de escribir estilos personalizados.

### Requisito 8: Estandarización de estilos de componentes según la plantilla base

**Historia de Usuario:** Como desarrollador del frontend, quiero que todos los componentes utilicen las clases y utilidades provistas por la Plantilla_Base en lugar de estilos SCSS personalizados redundantes, para asegurar consistencia visual y facilitar el mantenimiento del proyecto.

#### Criterios de Aceptación

1. THE Auditoría_De_Estilos SHALL revisar cada archivo `.component.scss` del proyecto para identificar Estilos_Personalizados_Componente que dupliquen funcionalidad ya provista por las Clases_Utilitarias o los Estilos_Globales de la Plantilla_Base.
2. WHEN un Estilos_Personalizados_Componente define colores, fondos, tipografía, espaciado, bordes o sombras que coinciden con Variables_De_Diseño existentes, THE Auditoría_De_Estilos SHALL marcar el estilo como reemplazable por la variable o clase correspondiente de la Plantilla_Base.
3. WHEN un Estilos_Personalizados_Componente utiliza valores hardcodeados (colores hexadecimales, tamaños en píxeles fijos) en lugar de las Variables_De_Diseño o Clases_Utilitarias equivalentes, THE Auditoría_De_Estilos SHALL identificar el valor hardcodeado y proponer la variable CSS custom property o clase utilitaria de la Plantilla_Base que lo reemplaza.
4. WHEN un Estilos_Personalizados_Componente utiliza `::ng-deep` para sobrescribir estilos globales de la Plantilla_Base, THE Auditoría_De_Estilos SHALL evaluar si la sobrescritura es necesaria o si el componente puede utilizar las clases estándar de la Plantilla_Base directamente.
5. THE Auditoría_De_Estilos SHALL reemplazar los Estilos_Personalizados_Componente redundantes por las clases equivalentes de la Plantilla_Base en los templates HTML de cada componente, reduciendo el contenido de los archivos `.component.scss`.
6. WHILE se realiza la estandarización de estilos, THE Auditoría_De_Estilos SHALL preservar los Estilos_Personalizados_Componente que implementen funcionalidad visual específica del negocio que la Plantilla_Base no provee.
7. WHEN la estandarización de un componente se complete, THE Auditoría_De_Estilos SHALL verificar que la apariencia visual del componente se mantenga consistente con el diseño original, sin regresiones visuales.
8. IF un componente requiere estilos personalizados que la Plantilla_Base no provee, THEN THE Auditoría_De_Estilos SHALL documentar la justificación del estilo personalizado como comentario en el archivo `.component.scss` correspondiente.
