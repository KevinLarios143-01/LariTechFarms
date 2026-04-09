# Documento de Requerimientos — Control de Acceso a Nivel de Ruta

## Introducción

Actualmente, el sistema LariTechFarms maneja permisos en dos capas: habilitación de módulos por tenant y acceso a módulos por rol (o por usuario). Sin embargo, dentro de un módulo, todos los usuarios con acceso al módulo pueden ver todas las pantallas/rutas de ese módulo.

Esta funcionalidad agrega una tercera capa de control de acceso más granular, permitiendo restringir o permitir el acceso a rutas/pantallas específicas dentro de un módulo, por rol o por usuario. Esto permite, por ejemplo, que un "vendedor" tenga acceso al módulo "Business" pero solo pueda ver la pantalla de "Ventas" y no la de "Tickets".

## Glosario

- **Sistema_Permisos**: El servicio de permisos (`PermissionsService`) que evalúa el acceso del usuario a módulos y rutas.
- **Guard_Ruta**: El guard de Angular (`roleModuleGuard`) que intercepta la navegación y evalúa si el usuario tiene acceso a la ruta solicitada.
- **Ruta_Protegida**: Una ruta específica del sistema (ej. `/dashboard/business-dashboard/ventas/list`) que puede tener restricciones de acceso individuales.
- **Permiso_Ruta**: Un registro en base de datos que asocia un rol o usuario con una ruta específica permitida dentro de un módulo.
- **API_Permisos**: Los endpoints del backend (Node.js/Express) que gestionan la lectura y escritura de permisos a nivel de ruta.
- **Catálogo_Rutas**: La lista maestra de todas las rutas protegidas del sistema, almacenada en base de datos, que sirve como referencia para asignar permisos.
- **Panel_Administración**: La interfaz dentro del módulo Super Admin, accesible exclusivamente para el rol superadmin, donde se configuran los permisos a nivel de ruta para todos los tenants.
- **Menú_Lateral**: El menú de navegación lateral (sidebar) que muestra las opciones disponibles al usuario.
- **Script_Seed**: El script de Node.js que extrae las rutas de MENUITEMS en navservice.ts, las mapea a módulos usando MODULE_ROUTE_MAP de permissions.config.ts, y las inserta en la tabla `route_catalog` mediante upsert.

## Requerimientos

### Requerimiento 1: Catálogo de Rutas en Base de Datos

**Historia de Usuario:** Como administrador, quiero tener un catálogo centralizado de todas las rutas protegidas del sistema, poblado automáticamente desde la configuración existente y mantenible manualmente, para poder asignar permisos granulares sobre cada pantalla.

#### Criterios de Aceptación

1. THE Catálogo_Rutas SHALL almacenar cada ruta con un identificador único, la ruta (path), un nombre descriptivo en español, y la referencia al módulo al que pertenece.
2. WHEN se agrega una nueva ruta al Catálogo_Rutas, THE API_Permisos SHALL validar que la ruta no exista previamente para el mismo módulo.
3. THE Catálogo_Rutas SHALL incluir un campo booleano `activo` que permita deshabilitar una ruta sin eliminarla.
4. WHEN se consulta el Catálogo_Rutas, THE API_Permisos SHALL retornar las rutas agrupadas por módulo.
5. THE Script_Seed SHALL leer la estructura MENUITEMS de navservice.ts y extraer todos los paths con su título (nombre descriptivo) recorriendo recursivamente los elementos y sus children.
6. THE Script_Seed SHALL mapear cada ruta extraída a su módulo correspondiente utilizando los prefijos definidos en MODULE_ROUTE_MAP de permissions.config.ts.
7. THE Script_Seed SHALL utilizar operaciones upsert (INSERT ... ON CONFLICT DO UPDATE) al insertar rutas en la tabla `route_catalog`, para evitar duplicados cuando el script se re-ejecuta.
8. WHEN se agregan nuevas pantallas al sistema en MENUITEMS, THE Script_Seed SHALL poder re-ejecutarse para incorporar las nuevas rutas al Catálogo_Rutas sin afectar las rutas existentes ni sus permisos asociados.
9. IF una ruta extraída de MENUITEMS no coincide con ningún prefijo en MODULE_ROUTE_MAP, THEN THE Script_Seed SHALL registrar una advertencia en consola indicando la ruta no mapeada y omitirla del catálogo.

### Requerimiento 2: Asignación de Permisos de Ruta por Rol

**Historia de Usuario:** Como superadministrador, quiero asignar permisos de acceso a rutas específicas por rol dentro de un tenant, para controlar qué pantallas puede ver cada rol.

#### Criterios de Aceptación

1. THE API_Permisos SHALL permitir asociar un rol con una o más rutas del Catálogo_Rutas dentro de un tenant específico.
2. WHEN se asignan permisos de ruta a un rol, THE API_Permisos SHALL validar que el rol tenga acceso al módulo padre de cada ruta asignada.
3. WHEN no existen registros de permisos de ruta para un rol en un módulo, THE Sistema_Permisos SHALL permitir el acceso a todas las rutas de ese módulo (comportamiento por defecto permisivo).
4. WHEN existen registros de permisos de ruta para un rol en un módulo, THE Sistema_Permisos SHALL restringir el acceso únicamente a las rutas explícitamente asignadas.
5. THE API_Permisos SHALL permitir eliminar permisos de ruta de un rol para restaurar el acceso completo al módulo.
6. WHEN un usuario con rol distinto a superadmin intenta modificar permisos de ruta por rol, THE API_Permisos SHALL rechazar la solicitud con un código HTTP 403.

### Requerimiento 3: Asignación de Permisos de Ruta por Usuario

**Historia de Usuario:** Como superadministrador, quiero poder asignar permisos de ruta específicos a un usuario individual, para manejar excepciones sin modificar los permisos del rol completo.

#### Criterios de Aceptación

1. THE API_Permisos SHALL permitir asociar un usuario con una o más rutas del Catálogo_Rutas.
2. WHEN un usuario tiene permisos de ruta asignados individualmente, THE Sistema_Permisos SHALL usar los permisos del usuario en lugar de los permisos del rol para ese módulo.
3. WHEN un usuario no tiene permisos de ruta individuales para un módulo, THE Sistema_Permisos SHALL usar los permisos de ruta del rol del usuario para ese módulo.
4. THE API_Permisos SHALL validar que el usuario pertenezca al tenant antes de asignar permisos de ruta.
5. WHEN un usuario con rol distinto a superadmin intenta modificar permisos de ruta por usuario, THE API_Permisos SHALL rechazar la solicitud con un código HTTP 403.

### Requerimiento 4: Evaluación de Acceso en el Guard de Angular

**Historia de Usuario:** Como usuario, quiero que el sistema me redirija a la página de acceso denegado si intento navegar a una ruta para la cual no tengo permiso, para entender claramente mis limitaciones de acceso.

#### Criterios de Aceptación

1. WHEN un usuario navega a una Ruta_Protegida, THE Guard_Ruta SHALL evaluar tres capas en orden: habilitación del módulo por tenant, acceso al módulo por rol/usuario, y acceso a la ruta específica.
2. IF el usuario no tiene permiso para la ruta específica, THEN THE Guard_Ruta SHALL redirigir al usuario a la página `/access-denied`.
3. WHEN el Sistema_Permisos se inicializa, THE Sistema_Permisos SHALL cargar los permisos de ruta del usuario desde la API_Permisos junto con los permisos de módulo existentes.
4. THE Sistema_Permisos SHALL exponer un método `hasRouteAccess(route: string): boolean` que verifique el acceso a una ruta específica considerando las tres capas de permisos.

### Requerimiento 5: Filtrado del Menú de Navegación

**Historia de Usuario:** Como usuario, quiero que el menú lateral solo muestre las pantallas a las que tengo acceso, para no ver opciones que no puedo utilizar.

#### Criterios de Aceptación

1. WHEN el Menú_Lateral se renderiza, THE Sistema_Permisos SHALL filtrar los elementos del menú usando los permisos de ruta además de los permisos de módulo.
2. WHEN un elemento del menú tiene sub-elementos y ninguno de los sub-elementos es accesible, THE Sistema_Permisos SHALL ocultar el elemento padre completo.
3. WHEN un encabezado de sección del menú no tiene elementos visibles debajo, THE Sistema_Permisos SHALL ocultar el encabezado de sección.

### Requerimiento 6: Panel de Administración de Permisos de Ruta

**Historia de Usuario:** Como superadministrador, quiero una interfaz visual para gestionar los permisos de ruta por rol y por usuario, y también administrar manualmente el catálogo de rutas, para configurar el acceso granular de forma intuitiva.

#### Criterios de Aceptación

1. THE Panel_Administración SHALL ser accesible únicamente para usuarios con rol superadmin.
2. THE Panel_Administración SHALL mostrar una matriz donde las filas son las rutas agrupadas por módulo y las columnas son los roles del tenant.
3. WHEN el superadministrador marca o desmarca una celda de la matriz, THE Panel_Administración SHALL enviar la actualización a la API_Permisos.
4. THE Panel_Administración SHALL permitir cambiar la vista entre "por rol" y "por usuario" para gestionar ambos tipos de permisos.
5. WHEN se visualiza la matriz por usuario, THE Panel_Administración SHALL mostrar un selector de usuario y las rutas asignadas a ese usuario.
6. THE Panel_Administración SHALL estar ubicado dentro del módulo Super Admin, accesible desde el Menú_Lateral.
7. THE Panel_Administración SHALL incluir un selector de tenant para que el superadministrador gestione los permisos de ruta de cualquier tenant.
8. IF un usuario con rol distinto a superadmin intenta acceder al Panel_Administración, THEN THE Guard_Ruta SHALL redirigir al usuario a la página `/access-denied`.
9. THE Panel_Administración SHALL permitir al superadministrador agregar nuevas rutas manualmente al Catálogo_Rutas proporcionando el path, nombre descriptivo y módulo asociado.
10. THE Panel_Administración SHALL permitir al superadministrador editar el nombre descriptivo y el estado activo de una ruta existente en el Catálogo_Rutas.
11. WHEN el superadministrador desactiva una ruta desde el Panel_Administración, THE Catálogo_Rutas SHALL marcar la ruta con el campo `activo` en falso sin eliminar la ruta ni sus permisos asociados.

### Requerimiento 7: Endpoints de la API de Permisos de Ruta

**Historia de Usuario:** Como desarrollador del frontend, quiero endpoints REST claros para gestionar permisos de ruta, para integrar la funcionalidad en la interfaz de administración.

#### Criterios de Aceptación

1. THE API_Permisos SHALL exponer un endpoint GET para obtener el catálogo de rutas protegidas agrupadas por módulo, accesible para usuarios con rol superadmin.
2. THE API_Permisos SHALL exponer un endpoint GET para obtener los permisos de ruta de un rol dentro de un tenant, accesible para usuarios con rol superadmin.
3. THE API_Permisos SHALL exponer un endpoint PUT para actualizar los permisos de ruta de un rol dentro de un tenant, recibiendo la lista completa de rutas permitidas, accesible únicamente para usuarios con rol superadmin.
4. THE API_Permisos SHALL exponer un endpoint GET para obtener los permisos de ruta del usuario autenticado (sus propios permisos), accesible para cualquier usuario autenticado.
5. THE API_Permisos SHALL exponer un endpoint GET para obtener los permisos de ruta de un usuario específico por id, accesible únicamente para usuarios con rol superadmin.
6. THE API_Permisos SHALL exponer un endpoint PUT para actualizar los permisos de ruta de un usuario específico, accesible únicamente para usuarios con rol superadmin.
7. IF una solicitud a la API_Permisos contiene un rol o usuario que no existe, THEN THE API_Permisos SHALL retornar un código HTTP 404 con un mensaje descriptivo.
8. IF una solicitud a la API_Permisos contiene una ruta que no existe en el Catálogo_Rutas, THEN THE API_Permisos SHALL retornar un código HTTP 400 con un mensaje descriptivo.
9. IF un usuario con rol distinto a superadmin intenta acceder a un endpoint de mutación (PUT/POST/DELETE) o a endpoints GET de administración, THEN THE API_Permisos SHALL retornar un código HTTP 403 con un mensaje descriptivo.

### Requerimiento 8: Modelo de Datos para Permisos de Ruta

**Historia de Usuario:** Como desarrollador del backend, quiero un modelo de datos claro para almacenar los permisos de ruta, para mantener la integridad referencial y el rendimiento de las consultas.

#### Criterios de Aceptación

1. THE API_Permisos SHALL utilizar una tabla `route_catalog` con columnas: id, path, nombre, id_module (FK a modules), activo, y timestamps.
2. THE API_Permisos SHALL utilizar una tabla `role_route_permissions` con columnas: id, role, id_route (FK a route_catalog), id_tenant (FK a tenant), y timestamps.
3. THE API_Permisos SHALL utilizar una tabla `user_route_permissions` con columnas: id, id_usuario (FK a usuario), id_route (FK a route_catalog), y timestamps.
4. THE API_Permisos SHALL aplicar una restricción de unicidad en `role_route_permissions` sobre la combinación (role, id_route, id_tenant).
5. THE API_Permisos SHALL aplicar una restricción de unicidad en `user_route_permissions` sobre la combinación (id_usuario, id_route).
6. WHEN se elimina un módulo o una ruta del catálogo, THE API_Permisos SHALL eliminar en cascada los permisos de ruta asociados.

### Requerimiento 9: Carga Inicial de Permisos en el Frontend

**Historia de Usuario:** Como usuario, quiero que mis permisos de ruta se carguen al iniciar sesión, para que la navegación sea fluida sin retrasos adicionales.

#### Criterios de Aceptación

1. WHEN el usuario inicia sesión, THE Sistema_Permisos SHALL solicitar los permisos de ruta del usuario a la API_Permisos como parte del flujo de inicialización existente.
2. THE Sistema_Permisos SHALL almacenar los permisos de ruta en memoria (BehaviorSubject) junto con los permisos de módulo existentes.
3. IF la solicitud de permisos de ruta falla, THEN THE Sistema_Permisos SHALL aplicar el comportamiento por defecto permisivo (acceso a todas las rutas del módulo).
4. WHEN el usuario cierra sesión, THE Sistema_Permisos SHALL limpiar los permisos de ruta almacenados en memoria junto con los demás datos de permisos.
