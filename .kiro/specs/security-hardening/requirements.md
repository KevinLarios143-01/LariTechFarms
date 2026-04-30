# Documento de Requisitos — Security Hardening

## Introducción

Este documento define los requisitos para la verificación e implementación de buenas prácticas de seguridad en todo el sistema LariTechFarms. El sistema es una plataforma multi-tenant de gestión avícola con un backend Node.js/Express + Prisma + PostgreSQL y un frontend Angular 18, desplegado en Railway. El objetivo es auditar y reforzar la seguridad en autenticación, autorización, validación de datos, manejo de errores, logging y configuración de infraestructura.

## Glosario

- **Backend**: Servidor API REST construido con Node.js, Express, Prisma ORM y PostgreSQL ubicado en `laritechfarms_backend_node/`.
- **Frontend**: Aplicación Angular 18 ubicada en `LariTechFarms/`.
- **JWT**: JSON Web Token utilizado para autenticación de usuarios.
- **Access_Token**: Token JWT de corta duración emitido al iniciar sesión, usado para autenticar peticiones a la API.
- **Refresh_Token**: Token opaco de larga duración almacenado de forma segura, usado para obtener nuevos Access_Tokens sin requerir credenciales.
- **Rate_Limiter**: Middleware que limita la cantidad de peticiones por IP en una ventana de tiempo.
- **Auth_Middleware**: Middleware `authenticateToken` que verifica el JWT y carga datos del usuario en la petición.
- **Error_Handler**: Middleware centralizado que captura errores y devuelve respuestas estandarizadas.
- **Request_Logger**: Middleware que registra cada petición HTTP con Winston.
- **Audit_Logger**: Componente que registra operaciones sensibles (login, cambio de contraseña, cambios de roles, eliminaciones) con contexto de usuario y tenant.
- **Tenant_Scope_Validator**: Middleware `validateTenantScope` que asegura aislamiento de datos entre tenants.
- **Input_Validator**: Middleware de validación que verifica tipo, formato y rango de datos de entrada antes de llegar al controlador.
- **Password_Policy**: Conjunto de reglas que definen los requisitos mínimos de complejidad para contraseñas.
- **Sanitizer**: Componente que limpia datos de entrada para prevenir inyección de código (XSS, NoSQL injection).
- **CORS_Config**: Configuración de Cross-Origin Resource Sharing en el Backend.
- **Security_Headers**: Cabeceras HTTP de seguridad configuradas mediante Helmet.
- **Reset_Token**: Token criptográfico de un solo uso generado para restablecer la contraseña de un usuario, con expiración de 30 minutos.
- **Password_Strength_Indicator**: Componente visual del Frontend que muestra la fortaleza de una contraseña mientras el usuario la escribe.

## Requisitos

### Requisito 1: Tokens JWT con expiración corta y mecanismo de Refresh Token

**Historia de Usuario:** Como administrador del sistema, quiero que los tokens de acceso tengan una vida útil corta y que exista un mecanismo de refresh token seguro, para que las sesiones comprometidas tengan un impacto limitado en el tiempo.

#### Criterios de Aceptación

1. WHEN un usuario inicia sesión exitosamente, THE Backend SHALL emitir un Access_Token con una expiración de 15 minutos y un Refresh_Token con una expiración de 7 días.
2. WHEN un Access_Token expira y el cliente envía un Refresh_Token válido al endpoint `/api/v1/auth/refresh`, THE Backend SHALL emitir un nuevo Access_Token y un nuevo Refresh_Token, invalidando el Refresh_Token anterior.
3. WHEN un Refresh_Token es utilizado más de una vez (replay), THE Backend SHALL invalidar toda la familia de Refresh_Tokens del usuario y responder con código HTTP 401.
4. WHEN un usuario cierra sesión, THE Backend SHALL invalidar el Refresh_Token activo del usuario en la base de datos.
5. IF un Refresh_Token expirado es enviado al endpoint de renovación, THEN THE Backend SHALL responder con código HTTP 401 y el mensaje "Refresh token expirado".
6. THE Backend SHALL almacenar los Refresh_Tokens como hashes bcrypt en la base de datos, asociados al usuario y al tenant.

### Requisito 2: Validación y sanitización de datos de entrada

**Historia de Usuario:** Como desarrollador, quiero que todas las entradas del usuario sean validadas y sanitizadas antes de ser procesadas, para que el sistema sea resistente a inyecciones y datos malformados.

#### Criterios de Aceptación

1. THE Input_Validator SHALL validar tipo de dato, formato y rango de todos los campos de entrada en cada endpoint protegido del Backend, utilizando esquemas de validación declarativos (por ejemplo, Zod o Joi).
2. WHEN un campo de entrada no cumple con su esquema de validación, THE Input_Validator SHALL responder con código HTTP 400 y un mensaje que indique los campos inválidos y la razón del rechazo.
3. THE Sanitizer SHALL eliminar o escapar etiquetas HTML y caracteres de control de todos los campos de tipo string antes de almacenarlos en la base de datos.
4. WHEN un campo numérico recibe un valor no numérico, THE Input_Validator SHALL rechazar la petición con código HTTP 400 antes de que el valor llegue al controlador.
5. THE Input_Validator SHALL limitar la longitud máxima de campos de texto a valores definidos por cada esquema (por ejemplo, nombre: 100 caracteres, email: 255 caracteres, descripción: 2000 caracteres).

### Requisito 3: Rate limiting granular

**Historia de Usuario:** Como administrador del sistema, quiero que existan límites de tasa diferenciados por tipo de operación, para que los endpoints sensibles estén protegidos contra ataques de fuerza bruta sin afectar el uso normal de la API.

#### Criterios de Aceptación

1. THE Rate_Limiter SHALL aplicar un límite de 5 intentos por minuto por IP en el endpoint `/api/v1/auth/login`.
2. THE Rate_Limiter SHALL aplicar un límite de 3 intentos por minuto por IP en el endpoint `/api/v1/auth/forgot-password`.
3. THE Rate_Limiter SHALL aplicar un límite general de 100 peticiones por cada 15 minutos por IP para los demás endpoints de la API.
4. WHEN un cliente excede el límite de tasa, THE Rate_Limiter SHALL responder con código HTTP 429 y las cabeceras `Retry-After` y `X-RateLimit-Reset` indicando cuándo puede reintentar.
5. THE Rate_Limiter SHALL utilizar un almacén compartido (por ejemplo, memoria en proceso o Redis) para que los contadores sean consistentes entre reinicios del servidor durante la misma ventana de tiempo.

### Requisito 4: Registro de auditoría para operaciones sensibles

**Historia de Usuario:** Como administrador del sistema, quiero que todas las operaciones sensibles queden registradas con contexto completo, para que pueda investigar incidentes de seguridad y cumplir con requisitos de trazabilidad.

#### Criterios de Aceptación

1. WHEN un usuario inicia sesión exitosamente o falla un intento de login, THE Audit_Logger SHALL registrar el evento con: timestamp, email del usuario, IP de origen, user-agent, resultado (éxito/fallo) e ID del tenant.
2. WHEN un usuario cambia su contraseña o la contraseña de otro usuario, THE Audit_Logger SHALL registrar el evento con: timestamp, ID del usuario que ejecuta la acción, ID del usuario afectado, IP de origen e ID del tenant.
3. WHEN se crea, modifica o elimina un usuario, THE Audit_Logger SHALL registrar el evento con: timestamp, tipo de operación, ID del usuario que ejecuta la acción, datos del usuario afectado (sin incluir contraseñas) e ID del tenant.
4. WHEN se modifican permisos de rol, módulos de tenant o permisos de ruta, THE Audit_Logger SHALL registrar el evento con: timestamp, tipo de cambio, valores anteriores, valores nuevos, ID del usuario que ejecuta la acción e ID del tenant.
5. THE Audit_Logger SHALL escribir los registros de auditoría en un archivo dedicado `logs/audit.log` separado de los logs generales de la aplicación.
6. THE Audit_Logger SHALL incluir un campo `correlationId` único por petición para permitir la trazabilidad de operaciones relacionadas.

### Requisito 5: Prevención de fuga de información en errores

**Historia de Usuario:** Como desarrollador, quiero que las respuestas de error no expongan detalles internos del sistema en producción, para que un atacante no pueda obtener información sobre la arquitectura o el estado interno del servidor.

#### Criterios de Aceptación

1. WHILE el Backend opera en modo producción (`NODE_ENV=production`), THE Error_Handler SHALL omitir stack traces, detalles de Prisma y rutas internas de archivos en las respuestas de error.
2. WHILE el Backend opera en modo producción, THE Error_Handler SHALL devolver mensajes de error genéricos para errores con código HTTP 500 (por ejemplo, "Error interno del servidor") sin incluir el mensaje original de la excepción.
3. THE Error_Handler SHALL registrar el error completo (incluyendo stack trace y contexto) en los logs internos del servidor independientemente del entorno.
4. WHEN un error de Prisma de tipo `PrismaClientKnownRequestError` ocurre con un código no mapeado, THE Error_Handler SHALL responder con "Error de base de datos" sin incluir el código de error de Prisma en la respuesta al cliente en producción.
5. THE Backend SHALL configurar Helmet con `hidePoweredBy` habilitado para no revelar la tecnología del servidor en las cabeceras de respuesta.

### Requisito 6: Política de contraseñas robusta

**Historia de Usuario:** Como administrador del sistema, quiero que las contraseñas de los usuarios cumplan con requisitos mínimos de complejidad, para que las cuentas sean resistentes a ataques de diccionario y fuerza bruta.

#### Criterios de Aceptación

1. WHEN un usuario establece o cambia su contraseña, THE Password_Policy SHALL requerir un mínimo de 8 caracteres, al menos una letra mayúscula, al menos una letra minúscula, al menos un dígito y al menos un carácter especial.
2. WHEN una contraseña no cumple con la política, THE Backend SHALL responder con código HTTP 400 y un mensaje que indique los criterios no cumplidos.
3. THE Backend SHALL utilizar bcrypt con un factor de costo de 12 para el hashing de contraseñas.
4. WHEN un usuario intenta cambiar su contraseña, THE Backend SHALL verificar que la nueva contraseña sea diferente a la contraseña actual.

### Requisito 7: Endurecimiento de CORS

**Historia de Usuario:** Como desarrollador, quiero que la configuración de CORS sea estricta y explícita, para que solo los orígenes autorizados puedan interactuar con la API.

#### Criterios de Aceptación

1. THE CORS_Config SHALL aceptar peticiones únicamente de los orígenes listados en la variable de entorno `ALLOWED_ORIGINS` y de subdominios de `railway.app`.
2. THE CORS_Config SHALL rechazar peticiones de orígenes no autorizados con un error de CORS (sin cabecera `Access-Control-Allow-Origin`).
3. THE CORS_Config SHALL limitar los métodos HTTP permitidos a GET, POST, PUT, PATCH, DELETE y OPTIONS.
4. THE CORS_Config SHALL limitar las cabeceras permitidas a `Content-Type`, `Authorization` y `X-Tenant-ID`.
5. WHILE el Backend opera en modo producción, THE CORS_Config SHALL rechazar peticiones sin cabecera `Origin` que no provengan de herramientas de servidor (curl, mobile, same-origin), eliminando el bypass actual que permite todas las peticiones sin origen.

### Requisito 8: Cabeceras de seguridad HTTP

**Historia de Usuario:** Como desarrollador, quiero que el servidor envíe cabeceras de seguridad HTTP estándar, para que el navegador aplique protecciones adicionales contra ataques comunes.

#### Criterios de Aceptación

1. THE Security_Headers SHALL incluir `Strict-Transport-Security` con un valor de `max-age=31536000; includeSubDomains` en todas las respuestas.
2. THE Security_Headers SHALL incluir `X-Content-Type-Options: nosniff` en todas las respuestas.
3. THE Security_Headers SHALL incluir `X-Frame-Options: DENY` en todas las respuestas.
4. THE Security_Headers SHALL incluir `Content-Security-Policy` con una política que restrinja `default-src` a `'self'` y permita las fuentes necesarias para el funcionamiento de la aplicación.
5. THE Security_Headers SHALL incluir `Referrer-Policy: strict-origin-when-cross-origin` en todas las respuestas.
6. THE Security_Headers SHALL ocultar la cabecera `X-Powered-By` en todas las respuestas.

### Requisito 9: Aislamiento de datos entre tenants

**Historia de Usuario:** Como administrador del sistema, quiero que cada tenant solo pueda acceder a sus propios datos, para que la información de un tenant nunca sea visible o modificable por otro tenant.

#### Criterios de Aceptación

1. THE Tenant_Scope_Validator SHALL verificar que el `idTenant` en la petición coincida con el `idTenant` del token JWT del usuario autenticado, excepto para usuarios con rol `superadmin`.
2. WHEN un usuario con rol diferente a `superadmin` intenta acceder a datos de un tenant diferente al suyo, THE Tenant_Scope_Validator SHALL responder con código HTTP 403.
3. THE Tenant_Scope_Validator SHALL inyectar automáticamente el `idTenant` del usuario en las consultas cuando el cliente no lo especifique, para prevenir acceso accidental a datos de otros tenants.
4. THE Tenant_Scope_Validator SHALL aplicarse a todos los endpoints protegidos que manejan datos específicos de un tenant (empleados, ventas, lotes, inventario, reportes, etc.).

### Requisito 10: Manejo seguro de sesiones en el Frontend

**Historia de Usuario:** Como desarrollador, quiero que el frontend maneje las sesiones de forma segura, para que los tokens no queden expuestos innecesariamente y las sesiones expiradas se manejen de forma transparente.

#### Criterios de Aceptación

1. WHEN el Frontend recibe una respuesta HTTP 401 de la API, THE Frontend SHALL intentar renovar el Access_Token usando el Refresh_Token antes de redirigir al usuario a la pantalla de login.
2. WHEN la renovación del Access_Token falla, THE Frontend SHALL limpiar todos los tokens almacenados, limpiar el estado de permisos y redirigir al usuario a la pantalla de login.
3. THE Frontend SHALL almacenar el Access_Token en memoria (variable de servicio) en lugar de `localStorage` para reducir la superficie de ataque XSS.
4. WHEN el usuario cierra sesión, THE Frontend SHALL eliminar todos los tokens almacenados, limpiar el estado de permisos y llamar al endpoint de logout del Backend.
5. THE Frontend SHALL decodificar el JWT localmente solo para obtener datos de presentación (nombre, rol), sin confiar en estos datos para decisiones de autorización.

### Requisito 11: Protección del endpoint de registro

**Historia de Usuario:** Como administrador del sistema, quiero que el registro de usuarios esté protegido, para que solo usuarios autorizados puedan crear nuevas cuentas.

#### Criterios de Aceptación

1. THE Backend SHALL requerir autenticación y un rol de `admin` o `superadmin` para acceder al endpoint `/api/v1/auth/register`.
2. WHEN un usuario no autenticado intenta acceder al endpoint de registro, THE Backend SHALL responder con código HTTP 401.
3. WHEN un usuario con rol insuficiente intenta registrar un nuevo usuario, THE Backend SHALL responder con código HTTP 403.
4. THE Backend SHALL validar que el email del nuevo usuario tenga un formato válido y que no exista otro usuario activo con el mismo email en el mismo tenant.
5. THE Rate_Limiter SHALL aplicar un límite de 10 registros por hora por tenant para prevenir creación masiva de cuentas.

### Requisito 12: Cambio de contraseña seguro

**Historia de Usuario:** Como usuario autenticado, quiero poder cambiar mi contraseña de forma segura desde mi perfil, para mantener la seguridad de mi cuenta.

#### Criterios de Aceptación

1. WHEN un usuario autenticado envía su contraseña actual y una nueva contraseña al endpoint `PUT /api/v1/auth/change-password`, THE Backend SHALL verificar que la contraseña actual sea correcta antes de aceptar el cambio.
2. THE Backend SHALL validar que la nueva contraseña cumpla con la Password_Policy (mínimo 8 caracteres, al menos una mayúscula, una minúscula, un dígito y un carácter especial).
3. WHEN la nueva contraseña no cumple con la Password_Policy, THE Backend SHALL responder con código HTTP 400 y un mensaje que indique los criterios no cumplidos.
4. WHEN la nueva contraseña es idéntica a la contraseña actual, THE Backend SHALL responder con código HTTP 400 y el mensaje "La nueva contraseña debe ser diferente a la actual".
5. WHEN la contraseña se cambia exitosamente, THE Backend SHALL invalidar todas las sesiones activas del usuario excepto la sesión actual, forzando re-login en otros dispositivos.
6. THE Frontend SHALL proporcionar un formulario de cambio de contraseña accesible desde el menú de usuario o perfil personal, con campos para contraseña actual, nueva contraseña y confirmación de nueva contraseña.
7. THE Frontend SHALL validar que los campos "nueva contraseña" y "confirmar contraseña" coincidan antes de enviar la petición al Backend.
8. THE Frontend SHALL mostrar indicadores visuales de fortaleza de la contraseña (débil, media, fuerte) mientras el usuario escribe la nueva contraseña.

### Requisito 13: Recuperación de contraseña por email

**Historia de Usuario:** Como usuario que olvidó su contraseña, quiero poder recuperar el acceso a mi cuenta mediante un enlace seguro enviado a mi correo electrónico, para no depender de un administrador para restablecer mi contraseña.

#### Criterios de Aceptación

1. WHEN un usuario envía su email al endpoint `POST /api/v1/auth/forgot-password`, THE Backend SHALL generar un token de restablecimiento único con una expiración de 30 minutos y enviarlo al correo electrónico del usuario.
2. THE Backend SHALL responder siempre con código HTTP 200 y el mensaje "Si el email existe, recibirás instrucciones para recuperar tu contraseña", independientemente de si el email existe o no, para no revelar qué emails están registrados.
3. THE Backend SHALL almacenar el token de restablecimiento como hash bcrypt en la base de datos, asociado al usuario, con un campo de expiración y un campo de uso (usado/no usado).
4. WHEN un usuario accede al enlace de restablecimiento con un token válido y no expirado, THE Frontend SHALL mostrar un formulario para establecer una nueva contraseña.
5. WHEN el usuario envía la nueva contraseña al endpoint `POST /api/v1/auth/reset-password` con el token de restablecimiento, THE Backend SHALL validar que el token sea válido, no haya expirado y no haya sido usado previamente.
6. WHEN el token de restablecimiento es válido, THE Backend SHALL actualizar la contraseña del usuario (cumpliendo la Password_Policy), marcar el token como usado e invalidar todas las sesiones activas del usuario.
7. WHEN el token de restablecimiento es inválido, expirado o ya fue usado, THE Backend SHALL responder con código HTTP 400 y el mensaje "El enlace de restablecimiento es inválido o ha expirado".
8. THE Rate_Limiter SHALL aplicar un límite de 3 solicitudes de recuperación por hora por email para prevenir abuso del servicio de correo.
9. THE Backend SHALL enviar el email de recuperación utilizando un servicio de correo configurado (por ejemplo, nodemailer con SMTP o un servicio como SendGrid/Resend), con un template HTML que incluya el enlace de restablecimiento y una nota de que el enlace expira en 30 minutos.
10. THE Frontend SHALL proporcionar una pantalla de "Olvidé mi contraseña" accesible desde la pantalla de login, con un campo para ingresar el email.

### Requisito 14: Restablecimiento de contraseña por administrador

**Historia de Usuario:** Como administrador del sistema, quiero poder restablecer la contraseña de un usuario que no puede recuperarla por email, para dar soporte sin comprometer la seguridad.

#### Criterios de Aceptación

1. WHEN un usuario con rol `admin` o `superadmin` envía una solicitud al endpoint `POST /api/v1/auth/admin-reset-password` con el ID del usuario objetivo, THE Backend SHALL generar una contraseña temporal aleatoria que cumpla con la Password_Policy.
2. THE Backend SHALL marcar la cuenta del usuario objetivo con un flag `mustChangePassword = true` para forzar el cambio de contraseña en el próximo inicio de sesión.
3. WHEN un usuario con `mustChangePassword = true` inicia sesión, THE Frontend SHALL redirigir al formulario de cambio de contraseña obligatorio antes de permitir el acceso al sistema.
4. THE Backend SHALL retornar la contraseña temporal al administrador en la respuesta (solo en esta petición, no se almacena en texto plano) para que pueda comunicarla al usuario de forma segura.
5. THE Audit_Logger SHALL registrar cada restablecimiento administrativo con: timestamp, ID del administrador que ejecuta la acción, ID del usuario afectado e ID del tenant.
