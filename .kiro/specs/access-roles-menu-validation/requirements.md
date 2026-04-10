# Documento de Requisitos — Validación de Accesos, Roles y Menú

## Introducción

El sistema actualmente presenta inconsistencias en las capas que controlan la visualización y el acceso a las opciones del menú y a los módulos. Este feature establece un flujo de validación estricto de 4 capas (Tenant → Rol → Usuario → Rutas) que debe aplicarse de forma consistente en la renderización del menú lateral, la protección de rutas mediante guards, y la redirección post-login. El objetivo es que las opciones del menú, los módulos visibles y el acceso a rutas se comporten de forma coherente y correcta según este flujo jerárquico.

## Glosario

- **Sistema_de_Permisos**: Conjunto de servicios, guards y componentes de Angular que controlan el acceso a módulos y rutas. Incluye `PermissionsService`, `AuthGuard`, `roleModuleGuard` y el componente `SidebarComponent`.
- **Tenant**: Organización o empresa que utiliza el sistema. Cada tenant tiene un conjunto de módulos habilitados.
- **Módulo**: Agrupación funcional del sistema (ej. RH, Clientes, Business, Lotes, Producción, Reportería, Super Admin). Cada módulo tiene uno o más prefijos de ruta asociados.
- **Rol**: Perfil de usuario que define un conjunto base de módulos accesibles según la matriz de acceso (ej. superadmin, admin, gerente, supervisor, vendedor, operador).
- **Matriz_de_Acceso**: Estructura de datos (`ROLE_ACCESS_MATRIX`) que define qué módulos puede acceder cada rol.
- **Módulos_Efectivos**: Resultado de aplicar las 3 primeras capas de validación: intersección de módulos del tenant, módulos del rol y módulos del usuario.
- **Permisos_de_Ruta**: Listas de prefijos de ruta asociados a un módulo, definidos a nivel de rol (`role_route_permissions`) y a nivel de usuario (`user_route_permissions`).
- **Menú_Lateral**: Componente de navegación (`SidebarComponent`) que muestra las opciones del sistema filtradas según los permisos del usuario.
- **Guard_de_Ruta**: Función de Angular (`roleModuleGuard`) que intercepta la navegación y valida el acceso antes de permitir la carga de un componente.
- **Capa_de_Validación**: Cada uno de los 4 niveles jerárquicos de control de acceso: Tenant, Rol, Usuario y Rutas.

## Requisitos

### Requisito 1: Validación de Acceso por Tenant (Capa 1)

**Historia de Usuario:** Como administrador de tenant, quiero que solo los módulos habilitados para mi organización sean accesibles, para que los usuarios no puedan ver ni acceder a funcionalidades no contratadas.

#### Criterios de Aceptación

1. WHEN el Sistema_de_Permisos se inicializa, THE Sistema_de_Permisos SHALL obtener la lista de módulos habilitados para el tenant desde el endpoint `/v1/modules/enabled`.
2. WHEN un usuario intenta acceder a una ruta de un Módulo que no está en la lista de módulos del Tenant, THE Guard_de_Ruta SHALL denegar el acceso y redirigir a la página de acceso denegado.
3. WHEN el Menú_Lateral se renderiza, THE Menú_Lateral SHALL excluir todas las opciones cuyas rutas pertenezcan a módulos no habilitados para el Tenant.
4. IF la consulta de módulos del Tenant falla, THEN THE Sistema_de_Permisos SHALL establecer la lista de módulos del tenant como vacía, denegando acceso a todos los módulos.

### Requisito 2: Validación de Acceso por Rol (Capa 2)

**Historia de Usuario:** Como administrador del sistema, quiero que cada rol tenga un conjunto definido de módulos accesibles según la Matriz_de_Acceso, para que los usuarios solo accedan a las funcionalidades correspondientes a su perfil.

#### Criterios de Aceptación

1. WHEN el Sistema_de_Permisos se inicializa, THE Sistema_de_Permisos SHALL obtener los módulos asignados al rol del usuario desde el endpoint `/v1/role-modules/by-role`.
2. IF la consulta de módulos por rol falla o retorna vacío, THEN THE Sistema_de_Permisos SHALL utilizar la Matriz_de_Acceso estática (`ROLE_ACCESS_MATRIX`) como respaldo.
3. WHEN un usuario con un Rol determinado intenta acceder a un Módulo, THE Sistema_de_Permisos SHALL verificar que el Módulo esté incluido en los módulos asignados al Rol del usuario.
4. WHEN un usuario con un Rol determinado intenta acceder a un Módulo que no está en los módulos de su Rol, THE Guard_de_Ruta SHALL denegar el acceso independientemente de la configuración a nivel de usuario.
5. THE Sistema_de_Permisos SHALL calcular los módulos accesibles como la intersección de los módulos del Tenant (Capa 1) y los módulos del Rol (Capa 2).

### Requisito 3: Validación de Acceso por Usuario (Capa 3)

**Historia de Usuario:** Como administrador del sistema, quiero poder restringir el acceso de un usuario específico a un subconjunto de los módulos de su rol, para tener control granular sobre los permisos individuales.

#### Criterios de Aceptación

1. WHEN el Sistema_de_Permisos se inicializa, THE Sistema_de_Permisos SHALL obtener los módulos asignados al usuario desde el endpoint `/v1/user-modules`.
2. WHILE existen módulos configurados a nivel de usuario, THE Sistema_de_Permisos SHALL calcular los Módulos_Efectivos como la intersección de los módulos del Rol y los módulos del Usuario.
3. WHILE la lista de módulos del usuario está vacía, THE Sistema_de_Permisos SHALL utilizar los módulos del Rol como Módulos_Efectivos sin restricción adicional.
4. WHEN un usuario tiene módulos configurados a nivel de usuario que incluyen un Módulo no presente en los módulos de su Rol, THE Sistema_de_Permisos SHALL ignorar ese Módulo, ya que la capa de usuario solo puede restringir, no expandir el acceso.
5. WHEN el Menú_Lateral se renderiza, THE Menú_Lateral SHALL mostrar únicamente las opciones correspondientes a los Módulos_Efectivos del usuario.

### Requisito 4: Validación de Acceso por Rutas (Capa 4)

**Historia de Usuario:** Como administrador del sistema, quiero poder controlar el acceso a rutas individuales dentro de un módulo, para que un usuario no necesariamente tenga acceso a todas las pantallas de un módulo habilitado.

#### Criterios de Aceptación

1. WHEN el Sistema_de_Permisos se inicializa, THE Sistema_de_Permisos SHALL obtener los Permisos_de_Ruta a nivel de rol y a nivel de usuario desde el endpoint `/v1/route-permissions/me`.
2. WHILE existen Permisos_de_Ruta a nivel de rol y a nivel de usuario para un mismo Módulo, THE Sistema_de_Permisos SHALL calcular las rutas efectivas como la intersección de ambos conjuntos de permisos.
3. WHILE existen Permisos_de_Ruta solo a nivel de rol para un Módulo, THE Sistema_de_Permisos SHALL utilizar los permisos de ruta del rol como las rutas efectivas.
4. WHILE existen Permisos_de_Ruta solo a nivel de usuario para un Módulo, THE Sistema_de_Permisos SHALL utilizar los permisos de ruta del usuario como las rutas efectivas.
5. WHILE no existen Permisos_de_Ruta para un Módulo en ninguna capa, THE Sistema_de_Permisos SHALL permitir el acceso a todas las rutas del Módulo (comportamiento permisivo por defecto).
6. WHEN un usuario navega a una ruta específica, THE Guard_de_Ruta SHALL verificar que la ruta coincida con al menos un prefijo en las rutas efectivas del Módulo correspondiente.
7. WHEN el Menú_Lateral se renderiza, THE Menú_Lateral SHALL excluir las opciones cuyas rutas no estén permitidas según las rutas efectivas del Módulo.

### Requisito 5: Consistencia entre Menú y Guards

**Historia de Usuario:** Como usuario del sistema, quiero que las opciones visibles en el menú lateral correspondan exactamente a las rutas a las que tengo acceso, para no encontrar errores de acceso denegado al hacer clic en una opción del menú.

#### Criterios de Aceptación

1. THE Menú_Lateral SHALL utilizar la misma función de validación (`hasRouteAccess`) que el Guard_de_Ruta para determinar la visibilidad de cada opción.
2. WHEN una opción del Menú_Lateral es visible, THE Guard_de_Ruta SHALL permitir el acceso a la ruta de esa opción.
3. WHEN el Guard_de_Ruta deniega el acceso a una ruta, THE Menú_Lateral SHALL no mostrar la opción correspondiente a esa ruta.
4. WHEN un elemento del menú tiene sub-elementos y ninguno de los sub-elementos es accesible, THE Menú_Lateral SHALL ocultar el elemento padre.
5. WHEN una sección del menú (headTitle) no tiene opciones visibles, THE Menú_Lateral SHALL ocultar el encabezado de la sección.

### Requisito 6: Redirección Post-Login Consistente

**Historia de Usuario:** Como usuario del sistema, quiero ser redirigido automáticamente a una página a la que tengo acceso después de iniciar sesión, para no encontrar una página de acceso denegado como primera pantalla.

#### Criterios de Aceptación

1. WHEN un usuario inicia sesión, THE Sistema_de_Permisos SHALL intentar redirigir al usuario a la ruta por defecto configurada para su Rol.
2. IF la ruta por defecto del Rol no es accesible según las 4 capas de validación, THEN THE Sistema_de_Permisos SHALL buscar la primera ruta accesible entre los Módulos_Efectivos del usuario.
3. IF no existe ninguna ruta accesible para el usuario, THEN THE Sistema_de_Permisos SHALL redirigir a la página de acceso denegado.
4. THE Sistema_de_Permisos SHALL calcular los Módulos_Efectivos para la redirección utilizando la intersección de módulos del Rol y módulos del Usuario (cuando existan módulos a nivel de usuario).

### Requisito 7: Orden Estricto de Validación

**Historia de Usuario:** Como arquitecto del sistema, quiero que las 4 capas de validación se apliquen siempre en el orden Tenant → Rol → Usuario → Rutas, para garantizar que cada capa solo pueda restringir el acceso y nunca expandirlo.

#### Criterios de Aceptación

1. THE Sistema_de_Permisos SHALL evaluar las capas de validación en el orden: Tenant (Capa 1), Rol (Capa 2), Usuario (Capa 3), Rutas (Capa 4).
2. WHEN una capa superior deniega el acceso, THE Sistema_de_Permisos SHALL denegar el acceso sin evaluar las capas inferiores.
3. FOR ALL combinaciones de configuración de permisos, THE Sistema_de_Permisos SHALL garantizar que los Módulos_Efectivos sean un subconjunto de los módulos del Rol, y los módulos del Rol sean un subconjunto de los módulos del Tenant.
4. FOR ALL combinaciones de Permisos_de_Ruta, THE Sistema_de_Permisos SHALL garantizar que las rutas efectivas sean un subconjunto de las rutas permitidas por el Rol.

### Requisito 8: Manejo de Errores y Estados Inválidos

**Historia de Usuario:** Como usuario del sistema, quiero que el sistema maneje correctamente los errores de carga de permisos, para que no quede en un estado inconsistente que permita accesos indebidos.

#### Criterios de Aceptación

1. IF el token JWT no existe o es inválido, THEN THE Sistema_de_Permisos SHALL denegar todo acceso y redirigir a la página de login.
2. IF la carga de permisos de ruta falla, THEN THE Sistema_de_Permisos SHALL aplicar el comportamiento permisivo por defecto (sin restricciones de ruta), manteniendo activas las capas de Tenant, Rol y Usuario.
3. IF el rol del usuario no es un rol válido del sistema, THEN THE Sistema_de_Permisos SHALL denegar todo acceso a módulos.
4. WHILE el Sistema_de_Permisos no ha completado la inicialización, THE Guard_de_Ruta SHALL esperar a que la inicialización termine antes de evaluar el acceso.
