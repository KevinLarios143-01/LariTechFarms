# Documento de Requisitos — Permisos Basados en Roles (Enfoque Híbrido)

## Introducción

El sistema LariTechFarms requiere un control de acceso de dos capas para restringir la navegación de los usuarios. La primera capa verifica qué módulos tiene habilitados el tenant (empresa) mediante las tablas `modules` y `tenant_modules` ya existentes en el backend. La segunda capa verifica el rol del usuario (`rol` en el modelo `Usuario`) para determinar a qué módulos puede acceder dentro de los habilitados para su tenant. Ambas condiciones deben cumplirse simultáneamente para que un usuario pueda ver una pantalla.

## Glosario

- **Sistema_Permisos**: Conjunto de componentes (guard, servicio, directiva) que implementan el control de acceso de dos capas en el frontend Angular.
- **Capa_Tenant**: Primera capa de control que verifica los módulos habilitados para el tenant del usuario mediante el endpoint `/api/v1/modules/enabled`.
- **Capa_Rol**: Segunda capa de control que verifica si el rol del usuario tiene acceso al módulo correspondiente según la Matriz_Acceso.
- **Guard_Acceso**: Guard de Angular que evalúa ambas capas (Capa_Tenant y Capa_Rol) antes de permitir la navegación a una ruta.
- **Servicio_Permisos**: Servicio Angular que gestiona la lógica de ambas capas de acceso, consulta módulos habilitados del tenant y expone métodos de verificación.
- **Menú_Lateral**: Componente sidebar que muestra los ítems de navegación filtrados según ambas capas de acceso.
- **Token_JWT**: Token JSON Web Token almacenado en localStorage que contiene la información del usuario incluyendo su rol y id_tenant.
- **Rol**: Campo `rol` del modelo `Usuario`. Valores válidos: `superadmin`, `admin`, `gerente`, `supervisor`, `vendedor`, `veterinario`.
- **Módulo**: Agrupación funcional de pantallas del sistema. Los módulos son: RH, Clientes, Business, Lotes, Producción, Reportería, Super Admin.
- **Matriz_Acceso**: Estructura de datos que define qué roles tienen acceso a qué módulos.
- **Mapa_Módulo_Rutas**: Estructura de datos que asocia cada módulo con sus rutas/pantallas correspondientes.
- **Página_Acceso_Denegado**: Pantalla que se muestra cuando un usuario no cumple alguna de las dos capas de acceso.
- **Tenant_Modules**: Tabla existente en la base de datos que registra qué módulos tiene habilitados cada tenant.
- **API_Módulos**: Conjunto de endpoints CRUD del backend para gestionar los registros de la tabla `modules` (catálogo de módulos del sistema).
- **Pantalla_Catálogo_Módulos**: Componente Angular en la sección Super Admin que permite al superadmin gestionar el catálogo de módulos del sistema (crear, editar, activar/desactivar, eliminar).

## Requisitos

### Requisito 1: Obtención de módulos habilitados del tenant (Capa_Tenant)

**Historia de Usuario:** Como sistema, quiero consultar los módulos habilitados para el tenant del usuario autenticado, para aplicar la primera capa de control de acceso.

#### Criterios de Aceptación

1. WHEN un usuario inicia sesión exitosamente, THE Servicio_Permisos SHALL consultar el endpoint `/api/v1/modules/enabled` con el `id_tenant` del usuario para obtener la lista de módulos habilitados del tenant.
2. THE Servicio_Permisos SHALL almacenar en memoria la lista de módulos habilitados del tenant durante la sesión activa del usuario.
3. WHEN el endpoint `/api/v1/modules/enabled` retorna un error, THE Servicio_Permisos SHALL denegar el acceso a todos los módulos excepto la pantalla de acceso denegado.
4. WHEN el usuario cierra sesión, THE Servicio_Permisos SHALL eliminar la lista de módulos habilitados almacenada en memoria.

### Requisito 2: Extracción del rol del usuario (Capa_Rol)

**Historia de Usuario:** Como sistema, quiero extraer el rol del usuario desde el token JWT, para aplicar la segunda capa de control de acceso.

#### Criterios de Aceptación

1. WHEN un usuario inicia sesión exitosamente, THE Servicio_Permisos SHALL extraer el campo `rol` del payload del Token_JWT y almacenarlo en memoria.
2. WHEN el Token_JWT no contiene un campo `rol` válido, THE Servicio_Permisos SHALL asignar el rol con permisos mínimos (equivalente a ningún acceso a módulos).
3. THE Servicio_Permisos SHALL reconocer los siguientes valores de rol: `superadmin`, `admin`, `gerente`, `supervisor`, `vendedor`, `veterinario`.
4. WHEN el usuario cierra sesión, THE Servicio_Permisos SHALL eliminar el rol almacenado en memoria.

### Requisito 3: Mapeo de módulos a rutas (Mapa_Módulo_Rutas)

**Historia de Usuario:** Como sistema, quiero asociar cada módulo con sus pantallas correspondientes, para saber qué módulo gobierna cada ruta.

#### Criterios de Aceptación

1. THE Servicio_Permisos SHALL mantener un Mapa_Módulo_Rutas con las siguientes asociaciones:
   - Módulo "RH": rutas bajo `/dashboard/hrmdashboards/` (Dashboard, Empleados, Puestos, Usuarios).
   - Módulo "Clientes": rutas bajo `/dashboard/client-dashboard/` (Lista de Clientes, Nuevo Cliente).
   - Módulo "Business": rutas bajo `/dashboard/business-dashboard/` excluyendo lotes (Clientes, Ventas, Tickets, Lista de Ventas Legacy).
   - Módulo "Lotes": rutas bajo `/dashboard/business-dashboard/lotes/` (Dashboard Lotes, Lista de Lotes, Nuevo Lote).
   - Módulo "Producción": rutas bajo `/dashboard/production-dashboard/` (Huevos, Galeras, Productos, Ingreso Inventario, Inventario General, Vehículos, Gastos de Operación).
   - Módulo "Reportería": rutas bajo `/dashboard/reports/` (Reporte de Ventas, Productos, Tickets, Huevos, Empleados).
   - Módulo "Super Admin": rutas bajo `/dashboard/super-admin/` (Empresas, Planes de Suscripción, Gestión de Módulos).
2. WHEN una ruta no está mapeada a ningún módulo, THE Servicio_Permisos SHALL denegar el acceso a esa ruta.

### Requisito 4: Matriz de acceso rol-módulo (Matriz_Acceso)

**Historia de Usuario:** Como administrador, quiero que exista una configuración centralizada que defina qué roles pueden acceder a qué módulos, para gestionar los permisos de forma organizada.

#### Criterios de Aceptación

1. THE Servicio_Permisos SHALL mantener una Matriz_Acceso con las siguientes reglas:
   - Rol `superadmin`: acceso a RH, Clientes, Business, Lotes, Producción, Reportería, Super Admin.
   - Rol `admin`: acceso a RH, Clientes, Business, Lotes, Producción, Reportería.
   - Rol `gerente`: acceso a RH, Clientes, Business, Lotes, Producción, Reportería.
   - Rol `supervisor`: acceso a Business, Lotes, Producción, Reportería.
   - Rol `vendedor`: acceso a Clientes, Business, Lotes, Reportería.
   - Rol `veterinario`: acceso a Lotes, Producción, Reportería.
2. WHEN el rol del usuario es `superadmin`, THE Matriz_Acceso SHALL ser el único rol con acceso al módulo "Super Admin".
3. THE Matriz_Acceso SHALL ser definida como una estructura de datos estática en el frontend, modificable únicamente mediante cambios en el código fuente.

### Requisito 5: Evaluación combinada de ambas capas de acceso

**Historia de Usuario:** Como sistema, quiero evaluar ambas capas de acceso simultáneamente, para garantizar que un usuario solo acceda a pantallas autorizadas por su tenant y su rol.

#### Criterios de Aceptación

1. WHEN un usuario navega a una ruta protegida, THE Guard_Acceso SHALL identificar el módulo correspondiente a la ruta usando el Mapa_Módulo_Rutas.
2. WHEN el módulo correspondiente a la ruta está habilitado en Tenant_Modules Y el rol del usuario tiene acceso a ese módulo según la Matriz_Acceso, THE Guard_Acceso SHALL permitir la navegación.
3. WHEN el módulo correspondiente a la ruta no está habilitado en Tenant_Modules, THE Guard_Acceso SHALL redirigir al usuario a la Página_Acceso_Denegado.
4. WHEN el rol del usuario no tiene acceso al módulo según la Matriz_Acceso, THE Guard_Acceso SHALL redirigir al usuario a la Página_Acceso_Denegado.
5. WHEN un usuario no autenticado intenta acceder a una ruta protegida, THE Guard_Acceso SHALL redirigir al usuario a la pantalla de login.
6. THE Guard_Acceso SHALL funcionar en conjunto con el AuthGuard existente sin reemplazarlo.

### Requisito 6: Filtrado del menú de navegación lateral según ambas capas

**Historia de Usuario:** Como usuario, quiero ver en el menú lateral únicamente las opciones a las que tengo acceso según los módulos de mi empresa y mi rol, para no confundirme con opciones que no puedo utilizar.

#### Criterios de Aceptación

1. WHEN el Menú_Lateral se renderiza, THE Sistema_Permisos SHALL filtrar los ítems del menú mostrando únicamente las opciones cuyo módulo asociado esté habilitado para el tenant Y el rol del usuario tenga acceso a ese módulo.
2. WHEN un ítem padre del menú no tiene hijos visibles después del filtrado, THE Menú_Lateral SHALL ocultar el ítem padre completo.
3. WHEN el usuario cierra sesión y otro usuario con diferente rol o tenant inicia sesión, THE Menú_Lateral SHALL actualizar los ítems visibles según las nuevas condiciones de acceso.
4. THE Menú_Lateral SHALL ocultar la sección "Super Admin" para todos los roles excepto `superadmin`.

### Requisito 7: Página de acceso denegado

**Historia de Usuario:** Como usuario, quiero ver un mensaje claro cuando intento acceder a una pantalla no autorizada, para entender que no tengo permisos suficientes.

#### Criterios de Aceptación

1. WHEN un usuario es redirigido por el Guard_Acceso, THE Página_Acceso_Denegado SHALL mostrar un mensaje indicando que el usuario no tiene permisos para acceder a la pantalla solicitada.
2. THE Página_Acceso_Denegado SHALL incluir un botón para regresar al dashboard principal correspondiente al rol del usuario.

### Requisito 8: Redirección post-login según rol

**Historia de Usuario:** Como usuario, quiero ser redirigido a la pantalla principal correspondiente a mi rol después de iniciar sesión, para acceder directamente a mi área de trabajo.

#### Criterios de Aceptación

1. WHEN un usuario con rol `superadmin`, `admin` o `gerente` inicia sesión exitosamente, THE Sistema_Permisos SHALL redirigir al usuario a la ruta `/dashboard/hrmdashboards/dashboard`.
2. WHEN un usuario con rol `supervisor` inicia sesión exitosamente, THE Sistema_Permisos SHALL redirigir al usuario a la ruta `/dashboard/production-dashboard/huevos`.
3. WHEN un usuario con rol `vendedor` inicia sesión exitosamente, THE Sistema_Permisos SHALL redirigir al usuario a la ruta `/dashboard/business-dashboard/ventas/list`.
4. WHEN un usuario con rol `veterinario` inicia sesión exitosamente, THE Sistema_Permisos SHALL redirigir al usuario a la ruta `/dashboard/production-dashboard/huevos`.
5. IF la ruta de redirección post-login corresponde a un módulo no habilitado para el tenant del usuario, THEN THE Sistema_Permisos SHALL redirigir al usuario a la primera ruta accesible según su rol y los módulos habilitados del tenant.

### Requisito 9: CRUD del catálogo de módulos

**Historia de Usuario:** Como superadmin, quiero gestionar el catálogo de módulos del sistema (crear, consultar, editar, activar/desactivar y eliminar módulos), para mantener actualizada la lista de módulos disponibles para asignar a los tenants.

#### Criterios de Aceptación

1. WHEN el superadmin solicita la lista de módulos, THE API_Módulos SHALL retornar todos los registros de la tabla `modules` con los campos `id_module`, `name`, `description` e `is_active`.
2. WHEN el superadmin envía una solicitud de creación con `name` y `description`, THE API_Módulos SHALL crear un nuevo registro en la tabla `modules` con `is_active` en `true` por defecto y retornar el módulo creado.
3. WHEN el superadmin envía una solicitud de actualización con `name` y `description` para un módulo existente, THE API_Módulos SHALL actualizar los campos correspondientes en la tabla `modules` y retornar el módulo actualizado.
4. WHEN el superadmin envía una solicitud de cambio de estado para un módulo existente, THE API_Módulos SHALL actualizar el campo `is_active` del módulo en la tabla `modules`.
5. WHEN el superadmin envía una solicitud de eliminación para un módulo que no tiene registros asociados en la tabla `tenant_modules`, THE API_Módulos SHALL eliminar el registro de la tabla `modules`.
6. IF el superadmin envía una solicitud de eliminación para un módulo que tiene registros asociados en la tabla `tenant_modules`, THEN THE API_Módulos SHALL rechazar la eliminación y retornar un mensaje indicando que el módulo está en uso por uno o más tenants.
7. WHILE el usuario autenticado no tiene el rol `superadmin`, THE API_Módulos SHALL rechazar las solicitudes de creación, actualización, cambio de estado y eliminación de módulos con un código de estado 403.
8. WHEN el superadmin navega a la pantalla de catálogo de módulos, THE Pantalla_Catálogo_Módulos SHALL mostrar una tabla con todos los módulos del sistema, incluyendo nombre, descripción y estado (activo/inactivo).
9. THE Pantalla_Catálogo_Módulos SHALL permitir al superadmin crear un nuevo módulo mediante un formulario con los campos `name` (obligatorio) y `description` (opcional).
10. THE Pantalla_Catálogo_Módulos SHALL permitir al superadmin editar el nombre y la descripción de un módulo existente mediante un formulario de edición.
11. THE Pantalla_Catálogo_Módulos SHALL permitir al superadmin activar o desactivar un módulo mediante un botón de cambio de estado en cada fila de la tabla.
12. THE Pantalla_Catálogo_Módulos SHALL permitir al superadmin eliminar un módulo mediante un botón de eliminación con confirmación previa.
13. IF la eliminación de un módulo es rechazada por la API_Módulos porque el módulo está en uso, THEN THE Pantalla_Catálogo_Módulos SHALL mostrar un mensaje de error indicando que el módulo no puede eliminarse porque está asignado a tenants.
