# Documento de Requisitos — Sistema de Marcaje de Asistencia

## Introducción

El Sistema de Marcaje de Asistencia permite a los empleados de LariTechFarms registrar su asistencia diaria (entrada, almuerzo, salida) directamente desde su dashboard personal. Los roles no administrativos (gerente, supervisor, vendedor, operador) acceden a un dashboard personalizado con información de su perfil, puesto y acciones rápidas de marcaje. Los roles administrativos (superadmin, admin) acceden a vistas de monitoreo y reportería de asistencia de todos los empleados.

## Glosario

- **Sistema_Dashboard**: Componente Angular del dashboard principal ubicado en `/dashboard/hrmdashboards/dashboard` que renderiza contenido diferenciado según el rol del usuario autenticado.
- **Sistema_Marcaje**: Subsistema backend (endpoints REST) y frontend (botones de acción rápida) responsable de registrar y consultar marcajes de asistencia.
- **Empleado**: Registro en la tabla `empleado` del esquema Prisma, vinculado a un tenant y opcionalmente a un usuario del sistema.
- **Usuario**: Registro en la tabla `usuario` del esquema Prisma, con rol asignado (superadmin, admin, gerente, supervisor, vendedor, operador) y vinculado opcionalmente a un Empleado mediante `idEmpleado`.
- **Registro_Asistencia**: Registro en la tabla `asistencia` del esquema Prisma que almacena fecha, hora de entrada, hora de salida, estado y observaciones de un Empleado.
- **Rol_No_Administrativo**: Cualquiera de los roles: gerente, supervisor, vendedor, operador.
- **Rol_Administrativo**: Cualquiera de los roles: superadmin, admin.
- **Puesto**: Registro en la tabla `puestos` del esquema Prisma que contiene nombre, descripción y salario base de una posición laboral.
- **Marcaje_Entrada**: Acción de registrar la hora de inicio de la jornada laboral del Empleado.
- **Marcaje_Almuerzo**: Acción de registrar el inicio y fin del período de almuerzo del Empleado.
- **Marcaje_Salida**: Acción de registrar la hora de fin de la jornada laboral del Empleado.
- **Estado_Marcaje**: Estado actual del Empleado en el día: sin_marcar, entrada_registrada, almuerzo_inicio, almuerzo_fin, salida_registrada.

## Requisitos

### Requisito 1: Dashboard Personal para Roles No Administrativos

**Historia de Usuario:** Como empleado con Rol_No_Administrativo, quiero ver un dashboard personalizado con mi información de perfil y puesto al iniciar sesión, para tener acceso rápido a mis datos laborales y acciones de marcaje.

#### Criterios de Aceptación

1. WHEN un Usuario con Rol_No_Administrativo accede a `/dashboard/hrmdashboards/dashboard`, THE Sistema_Dashboard SHALL renderizar la vista de dashboard personal en lugar del dashboard administrativo.
2. THE Sistema_Dashboard SHALL mostrar una tarjeta de bienvenida que contenga el nombre completo del Usuario (nombre y apellido), el rol del Usuario y la fecha de contratación del Empleado vinculado.
3. WHEN el Empleado vinculado tiene un Puesto asignado (idPuesto no nulo), THE Sistema_Dashboard SHALL mostrar el nombre del Puesto y la descripción del Puesto renderizada como contenido HTML.
4. THE Sistema_Dashboard SHALL mostrar los datos personales del Empleado vinculado: teléfono, correo electrónico y nombre del departamento (Puesto).
5. THE Sistema_Dashboard SHALL calcular y mostrar el tiempo trabajado del Empleado como la diferencia entre la fecha actual y la fecha de contratación, expresada en años y meses.
6. IF el Usuario no tiene un Empleado vinculado (idEmpleado es nulo), THEN THE Sistema_Dashboard SHALL mostrar un mensaje indicando que el perfil de empleado no está configurado y ocultar las acciones de marcaje.

### Requisito 2: Endpoint de Dashboard Personal en Backend

**Historia de Usuario:** Como sistema frontend, quiero un endpoint API que retorne los datos del perfil del empleado y su estado de asistencia del día, para renderizar el dashboard personal.

#### Criterios de Aceptación

1. WHEN el Sistema_Dashboard solicita datos del dashboard personal, THE Sistema_Marcaje SHALL exponer un endpoint GET `/api/v1/dashboard/personal` que retorne los datos del Empleado vinculado al Usuario autenticado.
2. THE Sistema_Marcaje SHALL incluir en la respuesta del endpoint: datos del Empleado (nombre, apellido, teléfono, correo, fechaContratacion, genero), datos del Puesto (nombre, descripcion, salarioBase) y el Registro_Asistencia del día actual.
3. THE Sistema_Marcaje SHALL validar que el Usuario autenticado pertenece al tenant correcto antes de retornar datos.
4. IF el Usuario autenticado no tiene un Empleado vinculado, THEN THE Sistema_Marcaje SHALL retornar un código HTTP 404 con el mensaje "Perfil de empleado no configurado".

### Requisito 3: Marcaje de Entrada

**Historia de Usuario:** Como empleado con Rol_No_Administrativo, quiero registrar mi hora de entrada al trabajo presionando un botón, para que quede constancia del inicio de mi jornada laboral.

#### Criterios de Aceptación

1. WHEN el Empleado presiona el botón "Marcar Entrada" y no existe un Registro_Asistencia para el Empleado en la fecha actual, THE Sistema_Marcaje SHALL crear un nuevo Registro_Asistencia con la fecha actual, la hora actual como horaEntrada, el estado "Presente" y el idUsuarioRegistro del Usuario autenticado.
2. WHILE el Estado_Marcaje del Empleado es "entrada_registrada" o posterior, THE Sistema_Dashboard SHALL deshabilitar el botón "Marcar Entrada".
3. WHEN el Registro_Asistencia se crea exitosamente, THE Sistema_Dashboard SHALL mostrar una notificación toast de éxito con el mensaje "Entrada registrada a las HH:MM".
4. IF ocurre un error al crear el Registro_Asistencia, THEN THE Sistema_Marcaje SHALL retornar un código de error descriptivo y THE Sistema_Dashboard SHALL mostrar una notificación toast de error.
5. WHEN ya existe un Registro_Asistencia para el Empleado en la fecha actual, THE Sistema_Marcaje SHALL retornar un código HTTP 409 con el mensaje "Ya existe un registro de entrada para hoy".

### Requisito 4: Marcaje de Almuerzo

**Historia de Usuario:** Como empleado con Rol_No_Administrativo, quiero registrar el inicio y fin de mi hora de almuerzo, para que se contabilice correctamente mi tiempo de trabajo efectivo.

#### Criterios de Aceptación

1. WHEN el Empleado presiona el botón "Marcar Almuerzo" y el Estado_Marcaje es "entrada_registrada", THE Sistema_Marcaje SHALL actualizar el Registro_Asistencia del día registrando la hora actual como inicio de almuerzo en el campo observaciones con formato "almuerzo_inicio:HH:MM".
2. WHEN el Empleado presiona el botón "Fin Almuerzo" y el Estado_Marcaje es "almuerzo_inicio", THE Sistema_Marcaje SHALL actualizar el Registro_Asistencia del día registrando la hora actual como fin de almuerzo en el campo observaciones con formato "almuerzo_inicio:HH:MM|almuerzo_fin:HH:MM".
3. WHILE el Estado_Marcaje es "sin_marcar" o "salida_registrada", THE Sistema_Dashboard SHALL deshabilitar el botón "Marcar Almuerzo".
4. WHILE el Estado_Marcaje es "almuerzo_inicio", THE Sistema_Dashboard SHALL cambiar el texto del botón de "Marcar Almuerzo" a "Fin Almuerzo" y aplicar un estilo visual diferenciado (color de advertencia).
5. IF el Empleado intenta marcar almuerzo sin haber registrado entrada, THEN THE Sistema_Marcaje SHALL retornar un código HTTP 400 con el mensaje "Debe registrar entrada antes de marcar almuerzo".

### Requisito 5: Marcaje de Salida

**Historia de Usuario:** Como empleado con Rol_No_Administrativo, quiero registrar mi hora de salida del trabajo, para completar el registro de mi jornada laboral.

#### Criterios de Aceptación

1. WHEN el Empleado presiona el botón "Marcar Salida" y el Estado_Marcaje es "entrada_registrada" o "almuerzo_fin", THE Sistema_Marcaje SHALL actualizar el Registro_Asistencia del día estableciendo la hora actual como horaSalida.
2. WHILE el Estado_Marcaje es "sin_marcar" o "salida_registrada", THE Sistema_Dashboard SHALL deshabilitar el botón "Marcar Salida".
3. WHILE el Estado_Marcaje es "almuerzo_inicio", THE Sistema_Dashboard SHALL deshabilitar el botón "Marcar Salida" y mostrar un tooltip con el texto "Debe finalizar el almuerzo antes de marcar salida".
4. WHEN el Registro_Asistencia se actualiza exitosamente con horaSalida, THE Sistema_Dashboard SHALL mostrar una notificación toast de éxito con el mensaje "Salida registrada a las HH:MM. Horas trabajadas: X horas Y minutos".
5. IF el Empleado intenta marcar salida sin haber registrado entrada, THEN THE Sistema_Marcaje SHALL retornar un código HTTP 400 con el mensaje "Debe registrar entrada antes de marcar salida".

### Requisito 6: Indicador Visual de Estado de Asistencia

**Historia de Usuario:** Como empleado con Rol_No_Administrativo, quiero ver un indicador visual del estado de mi asistencia del día actual, para saber de un vistazo en qué punto de mi jornada me encuentro.

#### Criterios de Aceptación

1. THE Sistema_Dashboard SHALL mostrar un indicador visual (timeline o stepper) que represente las etapas del día: Entrada → Almuerzo → Salida.
2. WHEN el Estado_Marcaje cambia, THE Sistema_Dashboard SHALL actualizar el indicador visual resaltando la etapa completada con un ícono de verificación y color de éxito.
3. WHILE el Estado_Marcaje es "sin_marcar", THE Sistema_Dashboard SHALL mostrar todas las etapas del indicador en estado pendiente (color gris).
4. THE Sistema_Dashboard SHALL mostrar junto a cada etapa completada la hora exacta en que se realizó el marcaje, en formato HH:MM (24 horas).

### Requisito 7: Historial de Asistencia del Empleado

**Historia de Usuario:** Como empleado con Rol_No_Administrativo, quiero consultar mi historial de asistencia, para revisar mis registros de entrada, almuerzo y salida de días anteriores.

#### Criterios de Aceptación

1. THE Sistema_Dashboard SHALL proporcionar una vista de historial de asistencia accesible desde el dashboard personal del Empleado.
2. WHEN el Empleado accede a la vista de historial, THE Sistema_Marcaje SHALL retornar los Registros_Asistencia del Empleado autenticado ordenados por fecha descendente, con paginación de 15 registros por página.
3. THE Sistema_Dashboard SHALL mostrar para cada Registro_Asistencia: fecha, hora de entrada, hora de inicio de almuerzo, hora de fin de almuerzo, hora de salida y total de horas trabajadas.
4. THE Sistema_Marcaje SHALL calcular el total de horas trabajadas como la diferencia entre horaSalida y horaEntrada, restando el tiempo de almuerzo (diferencia entre almuerzo_fin y almuerzo_inicio).
5. WHEN el Empleado selecciona un rango de fechas, THE Sistema_Marcaje SHALL filtrar los Registros_Asistencia dentro del rango especificado.
6. THE Sistema_Dashboard SHALL mostrar un resumen mensual que incluya: total de días trabajados, promedio de horas diarias trabajadas y total de horas del mes.

### Requisito 8: Vista de Asistencia para Administradores

**Historia de Usuario:** Como usuario con Rol_Administrativo, quiero ver el estado de asistencia de todos los empleados del día actual, para monitorear la puntualidad y presencia del personal.

#### Criterios de Aceptación

1. WHEN un Usuario con Rol_Administrativo accede a la sección de asistencia, THE Sistema_Dashboard SHALL mostrar una tabla con todos los Empleados activos del tenant y su Estado_Marcaje del día actual.
2. THE Sistema_Dashboard SHALL agrupar visualmente a los Empleados en categorías: "Presentes" (con entrada registrada), "En almuerzo" (con almuerzo_inicio sin almuerzo_fin), "Jornada completa" (con salida registrada) y "Sin marcar" (sin Registro_Asistencia del día).
3. THE Sistema_Marcaje SHALL exponer un endpoint GET `/api/v1/asistencia/resumen-diario` que retorne el conteo de empleados por Estado_Marcaje y la lista detallada de empleados con su estado.
4. WHEN el Usuario con Rol_Administrativo selecciona un rango de fechas, THE Sistema_Marcaje SHALL generar un reporte con los Registros_Asistencia de todos los Empleados del tenant dentro del rango.
5. THE Sistema_Dashboard SHALL mostrar tarjetas de resumen con los conteos: total de empleados activos, presentes hoy, ausentes hoy y en almuerzo.

### Requisito 9: Reportes de Asistencia

**Historia de Usuario:** Como usuario con Rol_Administrativo, quiero generar reportes semanales y mensuales de asistencia, para analizar patrones de puntualidad y ausencias del personal.

#### Criterios de Aceptación

1. WHEN el Usuario con Rol_Administrativo solicita un reporte semanal, THE Sistema_Marcaje SHALL generar un resumen que incluya por cada Empleado: días trabajados, días ausentes, promedio de hora de entrada, promedio de hora de salida y total de horas trabajadas en la semana.
2. WHEN el Usuario con Rol_Administrativo solicita un reporte mensual, THE Sistema_Marcaje SHALL generar un resumen que incluya por cada Empleado: días trabajados, días ausentes, total de horas trabajadas, promedio de horas diarias y porcentaje de asistencia.
3. THE Sistema_Marcaje SHALL exponer un endpoint GET `/api/v1/asistencia/reporte` que acepte parámetros de tipo (semanal, mensual), fecha de inicio y fecha de fin.
4. THE Sistema_Dashboard SHALL presentar los reportes en formato de tabla con opción de ordenamiento por columna.
5. IF no existen Registros_Asistencia en el rango de fechas solicitado, THEN THE Sistema_Marcaje SHALL retornar una respuesta vacía con código HTTP 200 y el mensaje "No se encontraron registros en el período seleccionado".

### Requisito 10: Seguridad y Validación de Marcaje

**Historia de Usuario:** Como administrador del sistema, quiero que el sistema de marcaje sea seguro y que cada empleado solo pueda registrar su propia asistencia, para garantizar la integridad de los datos.

#### Criterios de Aceptación

1. THE Sistema_Marcaje SHALL validar que el Usuario autenticado tiene un Empleado vinculado antes de permitir cualquier operación de marcaje.
2. THE Sistema_Marcaje SHALL registrar el idUsuarioRegistro en cada Registro_Asistencia para mantener trazabilidad de quién realizó el marcaje.
3. THE Sistema_Marcaje SHALL validar que todas las operaciones de marcaje pertenecen al mismo tenant del Usuario autenticado.
4. WHEN un Usuario con Rol_No_Administrativo intenta acceder a los endpoints de reportes administrativos, THE Sistema_Marcaje SHALL retornar un código HTTP 403 con el mensaje "No tiene permisos para acceder a este recurso".
5. THE Sistema_Marcaje SHALL registrar cada operación de marcaje con la marca de tiempo del servidor, ignorando cualquier hora enviada desde el cliente.
