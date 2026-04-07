# Documento de Requisitos — Matriz Dinámica de Acceso Rol-Módulo

## Introducción

Actualmente, el sistema LariTechFarms utiliza una constante estática `ROLE_ACCESS_MATRIX` definida en `permissions.config.ts` para determinar qué roles tienen acceso a qué módulos. Esta configuración solo puede modificarse mediante cambios en el código fuente y un nuevo despliegue. El objetivo de esta feature es convertir esa matriz estática en una tabla de base de datos (`role_modules`) gestionable dinámicamente desde una pantalla de administración, permitiendo gestionar las asignaciones de acceso rol-módulo por tenant sin necesidad de modificar código.

La matriz de acceso es **por tenant**: cada tenant puede tener su propia configuración de qué roles acceden a qué módulos. El **superadmin** puede gestionar la matriz de acceso de todos los tenants, mientras que el **admin** puede gestionar únicamente la matriz de acceso de los usuarios de su propio tenant.

## Glosario

- **Sistema_Matriz**: Conjunto de componentes (tabla de base de datos, endpoints API, pantalla de administración y servicio frontend) que implementan la gestión dinámica de la matriz de acceso rol-módulo por tenant.
- **Tabla_Role_Modules**: Tabla de base de datos PostgreSQL que almacena las asignaciones de acceso entre roles, módulos y tenants, reemplazando la constante estática `ROLE_ACCESS_MATRIX`.
- **API_Role_Modules**: Conjunto de endpoints REST del backend que permiten consultar y gestionar las asignaciones de la Tabla_Role_Modules con alcance por tenant.
- **Pantalla_Matriz_Acceso**: Componente Angular en la sección de administración que muestra una matriz visual de roles × módulos con checkboxes para asignar o revocar acceso, con alcance por tenant.
- **Servicio_Permisos**: Servicio Angular existente (`PermissionsService`) que gestiona la lógica de control de acceso de dos capas (tenant + rol).
- **Rol**: Campo `rol` del modelo `Usuario`. Valores válidos: `superadmin`, `admin`, `gerente`, `supervisor`, `vendedor`, `veterinario`.
- **Módulo**: Registro en la tabla `modules` que representa una agrupación funcional de pantallas del sistema.
- **Matriz_Acceso_Estática**: Constante `ROLE_ACCESS_MATRIX` actualmente definida en `permissions.config.ts` que será reemplazada por la Tabla_Role_Modules.
- **SuperAdminService**: Servicio Angular existente que gestiona las llamadas API de la sección Super Admin.
- **Tenant**: Empresa registrada en el sistema. Cada tenant tiene su propia configuración de módulos habilitados y su propia matriz de acceso rol-módulo.
- **Selector_Tenant**: Componente dropdown que permite al superadmin seleccionar el tenant cuya matriz de acceso desea gestionar.

## Requisitos

### Requisito 1: Tabla de base de datos para asignaciones rol-módulo por tenant

**Historia de Usuario:** Como administrador, quiero que las asignaciones de acceso rol-módulo se almacenen en una tabla de base de datos con alcance por tenant, para poder configurar permisos diferentes por empresa sin necesidad de cambiar código fuente.

#### Criterios de Aceptación

1. THE Sistema_Matriz SHALL mantener una Tabla_Role_Modules con los campos: `id_role_module` (clave primaria autoincremental), `role` (varchar, nombre del rol), `id_module` (entero, referencia a la tabla `modules`), `id_tenant` (entero, referencia a la tabla `tenants`), y `created_at` (timestamp de creación).
2. THE Tabla_Role_Modules SHALL tener una restricción de unicidad sobre la combinación de los campos `role`, `id_module` e `id_tenant` para evitar asignaciones duplicadas dentro del mismo tenant.
3. THE Tabla_Role_Modules SHALL tener una relación de clave foránea con la tabla `modules` en el campo `id_module`, con eliminación en cascada.
4. THE Tabla_Role_Modules SHALL tener una relación de clave foránea con la tabla `tenants` en el campo `id_tenant`, con eliminación en cascada.
5. WHEN se ejecuta la migración inicial, THE Sistema_Matriz SHALL poblar la Tabla_Role_Modules con los datos equivalentes a la Matriz_Acceso_Estática actual para cada tenant existente en la tabla `tenants` (las asignaciones de los 6 roles y sus módulos correspondientes por cada tenant).

### Requisito 2: Endpoint para consultar la matriz de acceso por tenant

**Historia de Usuario:** Como sistema frontend, quiero consultar la matriz de acceso rol-módulo desde el backend con alcance por tenant, para aplicar los permisos dinámicos correspondientes al tenant del usuario.

#### Criterios de Aceptación

1. WHEN un usuario autenticado solicita la matriz de acceso para un tenant específico, THE API_Role_Modules SHALL retornar todas las asignaciones de la Tabla_Role_Modules filtradas por el `id_tenant` indicado, agrupadas por rol, incluyendo el nombre del módulo asociado.
2. WHEN un usuario autenticado solicita la matriz de acceso para un rol específico dentro de un tenant, THE API_Role_Modules SHALL retornar únicamente los nombres de los módulos asignados a ese rol en el tenant indicado.
3. IF un usuario no autenticado solicita la matriz de acceso, THEN THE API_Role_Modules SHALL rechazar la solicitud con un código de estado 401.
4. WHILE el usuario autenticado tiene el rol `admin`, THE API_Role_Modules SHALL permitir consultas únicamente para el `id_tenant` del propio usuario, rechazando consultas a otros tenants con un código de estado 403.
5. WHILE el usuario autenticado tiene el rol `superadmin`, THE API_Role_Modules SHALL permitir consultas para cualquier `id_tenant`.

### Requisito 3: Endpoints CRUD para gestionar asignaciones rol-módulo por tenant

**Historia de Usuario:** Como administrador, quiero poder asignar y revocar acceso de módulos por rol dentro de mi tenant mediante la API, para gestionar los permisos dinámicamente.

#### Criterios de Aceptación

1. WHEN un usuario con rol `superadmin` o `admin` envía una solicitud de asignación con `role`, `id_module` e `id_tenant`, THE API_Role_Modules SHALL crear un nuevo registro en la Tabla_Role_Modules y retornar la asignación creada.
2. IF un usuario con rol `superadmin` o `admin` envía una solicitud de asignación para una combinación de `role`, `id_module` e `id_tenant` que ya existe, THEN THE API_Role_Modules SHALL rechazar la solicitud con un código de estado 409 indicando que la asignación ya existe.
3. WHEN un usuario con rol `superadmin` o `admin` envía una solicitud de revocación para una asignación existente, THE API_Role_Modules SHALL eliminar el registro correspondiente de la Tabla_Role_Modules.
4. WHEN un usuario con rol `superadmin` o `admin` envía una solicitud de actualización masiva con un `role`, un `id_tenant` y una lista de `id_module`, THE API_Role_Modules SHALL reemplazar todas las asignaciones del rol especificado dentro del tenant indicado con la nueva lista de módulos en una sola transacción.
5. WHILE el usuario autenticado tiene el rol `admin`, THE API_Role_Modules SHALL permitir operaciones de asignación, revocación y actualización masiva únicamente para el `id_tenant` del propio usuario, rechazando operaciones sobre otros tenants con un código de estado 403.
6. WHILE el usuario autenticado tiene el rol `superadmin`, THE API_Role_Modules SHALL permitir operaciones de asignación, revocación y actualización masiva para cualquier `id_tenant`.
7. WHILE el usuario autenticado no tiene el rol `superadmin` ni el rol `admin`, THE API_Role_Modules SHALL rechazar las solicitudes de asignación, revocación y actualización masiva con un código de estado 403.
8. IF un usuario envía una solicitud de asignación con un valor de `role` que no es uno de los 6 roles válidos del sistema, THEN THE API_Role_Modules SHALL rechazar la solicitud con un código de estado 400 indicando que el rol no es válido.
9. IF un usuario envía una solicitud de asignación con un `id_module` que no existe en la tabla `modules`, THEN THE API_Role_Modules SHALL rechazar la solicitud con un código de estado 400 indicando que el módulo no existe.
10. IF un usuario envía una solicitud de asignación con un `id_tenant` que no existe en la tabla `tenants`, THEN THE API_Role_Modules SHALL rechazar la solicitud con un código de estado 400 indicando que el tenant no existe.

### Requisito 4: Pantalla de administración de la matriz de acceso por tenant

**Historia de Usuario:** Como administrador, quiero una pantalla visual donde pueda ver y modificar la matriz de acceso rol-módulo de mi tenant mediante checkboxes, para gestionar los permisos de forma intuitiva.

#### Criterios de Aceptación

1. WHEN el superadmin navega a la Pantalla_Matriz_Acceso, THE Pantalla_Matriz_Acceso SHALL mostrar un Selector_Tenant (dropdown) con la lista de todos los tenants del sistema, permitiendo seleccionar el tenant cuya matriz desea gestionar.
2. WHEN el admin navega a la Pantalla_Matriz_Acceso, THE Pantalla_Matriz_Acceso SHALL seleccionar automáticamente el tenant del admin y ocultar el Selector_Tenant, mostrando directamente la matriz de acceso de su propio tenant.
3. WHEN un tenant está seleccionado, THE Pantalla_Matriz_Acceso SHALL mostrar una tabla con los módulos activos como filas y los 6 roles del sistema como columnas.
4. THE Pantalla_Matriz_Acceso SHALL mostrar un checkbox en cada celda de la matriz indicando si el rol tiene acceso al módulo correspondiente dentro del tenant seleccionado.
5. WHEN el usuario activa un checkbox, THE Pantalla_Matriz_Acceso SHALL enviar una solicitud de asignación a la API_Role_Modules con el `id_tenant` del tenant seleccionado y mostrar una notificación de éxito.
6. WHEN el usuario desactiva un checkbox, THE Pantalla_Matriz_Acceso SHALL enviar una solicitud de revocación a la API_Role_Modules y mostrar una notificación de éxito.
7. IF una solicitud de asignación o revocación falla, THEN THE Pantalla_Matriz_Acceso SHALL revertir el estado visual del checkbox al valor anterior y mostrar una notificación de error.
8. WHILE la Pantalla_Matriz_Acceso está cargando los datos iniciales, THE Pantalla_Matriz_Acceso SHALL mostrar un indicador de carga (spinner).
9. THE Pantalla_Matriz_Acceso SHALL mostrar el nombre de cada módulo y una descripción cuando esté disponible.
10. THE Pantalla_Matriz_Acceso SHALL seguir los patrones de diseño UI existentes de la sección Super Admin: layout de tarjeta (`card custom-card`), encabezado de página, tabla con clase `table-bordered`, badges, iconos feather, y notificaciones con `ToastrService`.
11. WHEN el superadmin cambia el tenant seleccionado en el Selector_Tenant, THE Pantalla_Matriz_Acceso SHALL recargar la matriz de acceso correspondiente al nuevo tenant seleccionado.

### Requisito 5: Actualización del PermissionsService para usar la matriz dinámica por tenant

**Historia de Usuario:** Como sistema, quiero que el PermissionsService obtenga la matriz de acceso desde el backend para el tenant del usuario autenticado, para que los cambios realizados por el administrador se reflejen en tiempo real.

#### Criterios de Aceptación

1. WHEN un usuario inicia sesión exitosamente, THE Servicio_Permisos SHALL consultar la API_Role_Modules para obtener los módulos asignados al rol del usuario dentro del `id_tenant` del usuario, en lugar de consultar la Matriz_Acceso_Estática.
2. THE Servicio_Permisos SHALL almacenar en memoria los módulos del rol obtenidos de la API_Role_Modules durante la sesión activa del usuario.
3. WHEN la API_Role_Modules retorna un error al consultar los módulos del rol, THE Servicio_Permisos SHALL utilizar la Matriz_Acceso_Estática como respaldo (fallback) para garantizar que el sistema siga funcionando.
4. THE Servicio_Permisos SHALL mantener la compatibilidad con el método `roleHasModule(role, module)` existente, consultando los módulos almacenados en memoria obtenidos de la API_Role_Modules para el tenant del usuario.
5. WHEN el usuario cierra sesión, THE Servicio_Permisos SHALL eliminar los módulos del rol almacenados en memoria.
6. THE Servicio_Permisos SHALL mantener la Matriz_Acceso_Estática (`ROLE_ACCESS_MATRIX`) en `permissions.config.ts` como configuración de respaldo, sin eliminarla del código fuente.

### Requisito 6: Protección del acceso al módulo Super Admin

**Historia de Usuario:** Como sistema, quiero garantizar que el módulo "Super Admin" solo pueda ser asignado al rol `superadmin`, para prevenir escalación de privilegios accidental.

#### Criterios de Aceptación

1. WHEN un usuario intenta asignar el módulo "Super Admin" a un rol distinto de `superadmin` mediante la API_Role_Modules, THE API_Role_Modules SHALL rechazar la solicitud con un código de estado 403 indicando que el módulo "Super Admin" solo puede asignarse al rol `superadmin`.
2. THE Pantalla_Matriz_Acceso SHALL deshabilitar visualmente los checkboxes del módulo "Super Admin" para todos los roles excepto `superadmin`, impidiendo la interacción.
