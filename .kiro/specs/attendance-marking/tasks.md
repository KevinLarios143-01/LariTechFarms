# Plan de Implementación: Sistema de Marcaje de Asistencia

## Resumen

Implementación del sistema de marcaje de asistencia para LariTechFarms. Se extiende el backend existente (Node.js/Express + Prisma) con nuevos endpoints de marcaje y dashboard personal, y se modifica el frontend Angular 18 para renderizar condicionalmente un dashboard personal para roles no administrativos con botones de marcaje, timeline y historial.

## Tareas

- [x] 1. Implementar funciones helper de marcaje en el backend
  - [x] 1.1 Crear archivo `laritechfarms_backend_node/src/utils/asistenciaHelpers.ts` con las funciones `calcularEstadoMarcaje`, `parsearObservaciones` y `calcularHorasTrabajadas`
    - Implementar tipo `EstadoMarcaje` y la lógica de derivación de estado a partir del registro de asistencia
    - Implementar parseo del campo `observaciones` para extraer tiempos de almuerzo con formato `almuerzo_inicio:HH:MM|almuerzo_fin:HH:MM`
    - Implementar cálculo de horas trabajadas descontando tiempo de almuerzo
    - _Requisitos: 4.1, 4.2, 5.1, 7.4_

  - [ ]* 1.2 Escribir test de propiedad para cálculo de horas trabajadas
    - **Propiedad 2: Cálculo de horas trabajadas**
    - Usar fast-check para generar horas de entrada/salida/almuerzo aleatorias y verificar que el resultado es `(horaSalida - horaEntrada) - (almuerzoFin - almuerzoInicio)` y siempre no negativo
    - **Valida: Requisito 7.4**

  - [ ]* 1.3 Escribir tests unitarios para `calcularEstadoMarcaje` y `parsearObservaciones`
    - Verificar cada transición de estado con datos concretos
    - Verificar parseo correcto con strings vacíos, solo inicio, inicio y fin
    - _Requisitos: 4.1, 4.2, 6.1_

- [x] 2. Implementar endpoint de Dashboard Personal en el backend
  - [x] 2.1 Agregar función `getDashboardPersonal` en `laritechfarms_backend_node/src/controllers/dashboardController.ts`
    - Buscar el Usuario autenticado, obtener su Empleado vinculado (via `idEmpleado`), incluir Puesto y Registro_Asistencia del día actual
    - Calcular `estadoMarcaje` usando la función helper
    - Retornar 404 si `idEmpleado` es nulo
    - _Requisitos: 2.1, 2.2, 2.3, 2.4_

  - [x] 2.2 Registrar la ruta `GET /personal` en `laritechfarms_backend_node/src/routes/dashboard.ts`
    - Usar middleware `authenticateToken`
    - _Requisitos: 2.1_

- [x] 3. Implementar endpoints de marcaje en el backend
  - [x] 3.1 Agregar función `marcarEntrada` en `laritechfarms_backend_node/src/controllers/asistenciaController.ts`
    - Obtener `idEmpleado` del usuario autenticado via tabla `usuario`
    - Verificar que no exista registro para hoy (retornar 409 si existe)
    - Crear registro con `horaEntrada = now()`, `estado = 'Presente'`
    - Retornar 400 si usuario sin empleado vinculado
    - _Requisitos: 3.1, 3.5, 10.1, 10.2, 10.5_

  - [x] 3.2 Agregar función `marcarAlmuerzo` en `laritechfarms_backend_node/src/controllers/asistenciaController.ts`
    - Obtener registro del día y calcular `estadoMarcaje`
    - Si `entrada_registrada`: escribir `almuerzo_inicio:HH:MM` en observaciones
    - Si `almuerzo_inicio`: agregar `|almuerzo_fin:HH:MM` a observaciones
    - Retornar 400 si estado no permite la operación
    - _Requisitos: 4.1, 4.2, 4.5, 10.5_

  - [x] 3.3 Agregar función `marcarSalida` en `laritechfarms_backend_node/src/controllers/asistenciaController.ts`
    - Verificar que `estadoMarcaje` sea `entrada_registrada` o `almuerzo_fin`
    - Actualizar `horaSalida = now()`
    - Calcular y retornar horas trabajadas
    - Retornar 400 si estado no permite la operación
    - _Requisitos: 5.1, 5.5, 10.5_

  - [x] 3.4 Registrar las rutas `POST /marcar-entrada`, `POST /marcar-almuerzo`, `POST /marcar-salida` en `laritechfarms_backend_node/src/routes/asistencias.ts`
    - Usar middleware `authenticateToken`
    - _Requisitos: 3.1, 4.1, 5.1_

- [x] 4. Implementar endpoints de historial y reportes en el backend
  - [x] 4.1 Agregar función `getMiHistorial` en `laritechfarms_backend_node/src/controllers/asistenciaController.ts`
    - Retornar registros del empleado vinculado al usuario autenticado
    - Paginación de 15 registros por página, ordenados por fecha descendente
    - Filtro por rango de fechas opcional
    - _Requisitos: 7.2, 7.3, 7.5_

  - [x] 4.2 Agregar función `getResumenDiario` en `laritechfarms_backend_node/src/controllers/asistenciaController.ts`
    - Retornar conteo de empleados por Estado_Marcaje y lista detallada
    - Restringir a roles `superadmin` y `admin`
    - _Requisitos: 8.1, 8.2, 8.3, 8.5_

  - [x] 4.3 Agregar función `getReporte` en `laritechfarms_backend_node/src/controllers/asistenciaController.ts`
    - Aceptar parámetros `tipo` (semanal/mensual), `fechaInicio`, `fechaFin`
    - Generar resumen por empleado según tipo de reporte
    - Retornar 200 con mensaje si no hay registros
    - _Requisitos: 9.1, 9.2, 9.3, 9.5_

  - [x] 4.4 Registrar las rutas `GET /mi-historial`, `GET /resumen-diario`, `GET /reporte` en `laritechfarms_backend_node/src/routes/asistencias.ts`
    - `mi-historial`: middleware `authenticateToken`
    - `resumen-diario` y `reporte`: middleware `authenticateToken` + validación de rol admin
    - _Requisitos: 7.2, 8.3, 9.3, 10.4_

  - [ ]* 4.5 Escribir test de propiedad para ordenamiento de historial
    - **Propiedad 3: Ordenamiento de historial por fecha descendente**
    - Generar listas aleatorias de registros y verificar que cada fecha es >= la siguiente
    - **Valida: Requisito 7.2**

  - [ ]* 4.6 Escribir test de propiedad para filtrado por rango de fechas
    - **Propiedad 4: Filtrado por rango de fechas**
    - Generar registros y rangos aleatorios, verificar inclusión/exclusión correcta
    - **Valida: Requisito 7.5**

  - [ ]* 4.7 Escribir test de propiedad para clasificación de empleados por estado
    - **Propiedad 6: Clasificación de empleados por estado de marcaje**
    - Generar empleados con estados aleatorios, verificar que cada uno aparece en exactamente una categoría
    - **Valida: Requisito 8.2**

- [x] 5. Checkpoint — Verificar backend
  - Asegurar que todos los tests pasan, preguntar al usuario si surgen dudas.

- [x] 6. Actualizar el servicio de asistencia en el frontend
  - [x] 6.1 Extender `LariTechFarms/src/app/shared/services/asistencia.service.ts` con nuevos métodos y interfaces
    - Agregar interfaces: `DashboardPersonalResponse`, `MarcarResponse`, `HistorialParams`, `HistorialResponse`, `ResumenDiarioResponse`, `ReporteParams`, `ReporteResponse`
    - Agregar métodos: `getDashboardPersonal()`, `marcarEntrada()`, `marcarAlmuerzo()`, `marcarSalida()`, `getMiHistorial(params)`, `getResumenDiario()`, `getReporte(params)`
    - _Requisitos: 2.1, 3.1, 4.1, 5.1, 7.2, 8.3, 9.3_

- [ ] 7. Implementar renderizado condicional del Dashboard
  - [x] 7.1 Modificar `DashboardComponent` para inyectar `PermissionsService` y detectar el rol del usuario
    - Si rol es `superadmin` o `admin`: renderizar vista admin existente
    - Si rol es otro: renderizar `PersonalDashboardComponent`
    - Usar `@if` en el template para alternar entre vistas
    - _Requisitos: 1.1_

- [x] 8. Crear PersonalDashboardComponent
  - [x] 8.1 Crear componente standalone en `src/app/componets/dashbord/hrmdashboards/dashboard/personal-dashboard/personal-dashboard.component.ts`
    - Llamar a `getDashboardPersonal()` al inicializar
    - Mostrar tarjeta de bienvenida con nombre, rol, fecha de contratación
    - Mostrar datos del puesto (nombre, descripción HTML)
    - Mostrar datos personales (teléfono, correo, departamento)
    - Calcular y mostrar antigüedad laboral (años y meses)
    - Mostrar mensaje si no hay empleado vinculado
    - _Requisitos: 1.2, 1.3, 1.4, 1.5, 1.6_

  - [x] 8.2 Implementar sección de botones de marcaje en PersonalDashboardComponent
    - Botón "Marcar Entrada": habilitado solo si `estadoMarcaje === 'sin_marcar'`
    - Botón "Marcar Almuerzo" / "Fin Almuerzo": habilitado según estado, texto dinámico
    - Botón "Marcar Salida": habilitado si `entrada_registrada` o `almuerzo_fin`, deshabilitado con tooltip si `almuerzo_inicio`
    - Deshabilitar botones durante petición HTTP (evitar doble clic)
    - Mostrar notificaciones toast de éxito/error
    - _Requisitos: 3.2, 3.3, 3.4, 4.3, 4.4, 5.2, 5.3, 5.4_

  - [ ]* 8.3 Escribir test de propiedad para cálculo de antigüedad laboral
    - **Propiedad 1: Cálculo de antigüedad laboral**
    - Generar fechas de contratación aleatorias y verificar que `fechaContratacion + años + meses ≤ fechaActual < fechaContratacion + años + (meses + 1)`
    - **Valida: Requisito 1.5**

- [x] 9. Crear AttendanceTimelineComponent
  - [x] 9.1 Crear componente standalone en `src/app/componets/dashbord/hrmdashboards/dashboard/personal-dashboard/attendance-timeline/attendance-timeline.component.ts`
    - Input: `estadoMarcaje`, `asistenciaHoy`
    - Renderizar stepper visual Entrada → Almuerzo → Salida
    - Resaltar etapas completadas con ícono de verificación y color de éxito
    - Mostrar todas las etapas en gris si `sin_marcar`
    - Mostrar hora exacta junto a cada etapa completada en formato HH:MM
    - _Requisitos: 6.1, 6.2, 6.3, 6.4_

- [ ] 10. Implementar historial de asistencia en PersonalDashboardComponent
  - [x] 10.1 Agregar sección de historial con tabla paginada y filtro de fechas
    - Mostrar fecha, hora entrada, almuerzo inicio, almuerzo fin, hora salida, horas trabajadas
    - Paginación de 15 registros
    - Filtro por rango de fechas
    - Mostrar resumen mensual: días trabajados, promedio horas diarias, total horas mes
    - _Requisitos: 7.1, 7.2, 7.3, 7.5, 7.6_

  - [ ]* 10.2 Escribir test de propiedad para consistencia del resumen mensual
    - **Propiedad 5: Consistencia del resumen mensual**
    - Generar registros mensuales aleatorios, verificar que total horas = suma individual, promedio = total / días, días trabajados = conteo registros con entrada
    - **Valida: Requisito 7.6**

- [x] 11. Crear AdminAttendanceComponent
  - [x] 11.1 Crear componente standalone en `src/app/componets/dashbord/hrmdashboards/dashboard/admin-attendance/admin-attendance.component.ts`
    - Mostrar tarjetas de resumen: total empleados activos, presentes hoy, ausentes, en almuerzo
    - Tabla de empleados con Estado_Marcaje del día, agrupados por categoría
    - Filtro por rango de fechas para reportes
    - Tabla de reportes con ordenamiento por columna
    - _Requisitos: 8.1, 8.2, 8.4, 8.5, 9.1, 9.2, 9.4_

- [x] 12. Integración y cableado final
  - [x] 12.1 Integrar AdminAttendanceComponent en la vista admin del DashboardComponent
    - Agregar sección de asistencia en el dashboard admin existente o como tab/sección adicional
    - _Requisitos: 8.1_

  - [x] 12.2 Verificar flujo completo de marcaje end-to-end
    - Asegurar que el flujo entrada → almuerzo inicio → almuerzo fin → salida funciona correctamente
    - Verificar que los estados de botones se actualizan en tiempo real
    - Verificar que las notificaciones toast se muestran correctamente
    - _Requisitos: 3.1, 4.1, 4.2, 5.1, 6.2_

  - [ ]* 12.3 Escribir tests de integración para el flujo completo de marcaje
    - Test flujo completo: entrada → almuerzo inicio → almuerzo fin → salida
    - Test endpoint dashboard personal con usuario autenticado
    - Test rechazo de acceso a endpoints admin con roles no administrativos
    - _Requisitos: 3.1, 4.1, 5.1, 10.4_

- [x] 13. Checkpoint final — Verificar que todos los tests pasan
  - Asegurar que todos los tests pasan, preguntar al usuario si surgen dudas.

## Notas

- Las tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido
- Cada tarea referencia requisitos específicos para trazabilidad
- Los checkpoints aseguran validación incremental
- Los tests de propiedad validan propiedades universales de correctitud definidas en el diseño
- No se requiere migración de esquema — se reutiliza el campo `observaciones` existente
