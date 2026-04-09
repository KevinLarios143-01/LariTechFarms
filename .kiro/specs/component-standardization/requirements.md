# Documento de Requisitos

## Introducción

Esta funcionalidad estandariza el comportamiento y la estructura de los componentes reutilizables de la aplicación LariTechFarms, tomando como referencia principal el módulo de empleados (`employee-list`). Actualmente, los distintos módulos (clientes, ventas, tickets, tareas, producción, etc.) presentan inconsistencias en: la implementación de headers de página (algunos usan `app-hr-dashboard-page-header`, otros construyen el header inline con HTML directo), la estructura y clases CSS de las tablas, el estilo y comportamiento de los botones de acción, los paginadores (estáticos y sin funcionalidad real), y un problema de navegación donde al reingresar a una ruta previamente visitada la página queda en blanco.

El módulo de empleados define el estándar a seguir:
- Usa el componente compartido `app-hr-dashboard-page-header` con inputs configurables (`title`, `title2`, `class`, `path`).
- Tabla con clases `table mb-0 text-nowrap text-md-nowrap table-bordered border`.
- Botones de acción con estilo `btn btn-primary btn-icon` / `btn btn-icon` dentro de un contenedor `d-flex gap-2`.
- Paginador con estructura `nav > ul.pagination.justify-content-end.mb-0`.
- Selector "Mostrar N registros" con `ng-select`.

Los módulos que no siguen este estándar incluyen: client-list (header inline, botones con clase `action-btns1`, sin paginador), sell-list (header inline, botones `action-btns1`, sin paginador), task-list (usa `mat-table` con datos estáticos, textos en inglés, paginador estático), y otros módulos de producción y negocio.

## Glosario

- **Módulo_Empleados**: Módulo de referencia ubicado en `componets/dashbord/hrmdashboards/employess/employee-list/` que define el estándar de comportamiento y estructura visual para tablas, paginadores, botones y headers.
- **Header_Component_Estándar**: Componente compartido `app-hr-dashboard-page-header` ubicado en `shared/common/page-headers/hr-dashboard-page-header/` que recibe inputs configurables (`title`, `title2`, `class`, `path`) para renderizar el encabezado de página de forma consistente.
- **Header_Inline**: Implementación de encabezado de página construida directamente con HTML en el template del componente, sin utilizar el Header_Component_Estándar. Presente en módulos como client-list, sell-list y otros.
- **Tabla_Estándar**: Tabla HTML con las clases CSS `table mb-0 text-nowrap text-md-nowrap table-bordered border`, estructura `thead > tr > th` con `scope="col"`, y `tbody` con iteración `@for`, conforme al patrón del Módulo_Empleados.
- **Botón_Acción_Estándar**: Botón de acción en filas de tabla con clases `btn btn-icon` y variante de color (`btn-primary`, `btn-warning`, `btn-success`), contenidos en un div con clases `d-flex gap-2`, conforme al patrón del Módulo_Empleados.
- **Botón_Acción_Legacy**: Botón de acción en filas de tabla que usa la clase `action-btns1` con íconos de texto coloreado (`text-primary`, `text-success`, `text-danger`), sin estructura de botón estándar. Presente en módulos como client-list, sell-list y task-list.
- **Paginador_Estándar**: Componente de paginación con estructura `nav.mt-4 > ul.pagination.justify-content-end.mb-0 > li.page-item > a.page-link`, con funcionalidad dinámica conectada a los datos reales de la tabla.
- **Paginador_Estático**: Paginador que muestra números de página fijos (1, 2, 3) con enlaces `href="javascript:void(0);"` sin funcionalidad real de cambio de página.
- **Selector_Registros**: Control `ng-select` que permite al usuario elegir cuántos registros mostrar por página (10, 25, 50, 100), ubicado encima de la tabla con el texto "Mostrar N registros".
- **Módulos_Afectados**: Conjunto de módulos que requieren estandarización: client-list, sell-list, ticket-list, task-list, project-list, job-lists, gastos-operacion, huevos, productos, vehiculos, galeras, inventario, lotes, clientes (business), ventas (business).
- **Navegación_En_Blanco**: Problema donde al navegar a una ruta previamente visitada, el componente no se renderiza y la página queda en blanco, posiblemente causado por la estrategia de reutilización de rutas o por la destrucción/recreación incorrecta de componentes.
- **Estrategia_Reutilización_Rutas**: Mecanismo de Angular (`RouteReuseStrategy`) que determina si un componente previamente cargado se reutiliza o se destruye y recrea al navegar entre rutas.

## Requisitos

### Requisito 1: Estandarización del Header de página en todos los módulos

**Historia de Usuario:** Como desarrollador del frontend, quiero que todos los módulos utilicen el Header_Component_Estándar en lugar de headers construidos inline, para garantizar consistencia visual y facilitar el mantenimiento.

#### Criterios de Aceptación

1. WHEN un módulo de los Módulos_Afectados utiliza un Header_Inline, THE módulo SHALL reemplazar el Header_Inline por el Header_Component_Estándar (`app-hr-dashboard-page-header`) con los inputs `title`, `title2`, `class` y `path` configurados según el contexto del módulo.
2. THE Header_Component_Estándar SHALL mostrar el título de la sección, un botón de acción principal (con texto y ruta configurables) y los botones utilitarios de email, contacto e info, conforme al patrón del Módulo_Empleados.
3. WHEN el Header_Component_Estándar no requiere un botón de acción principal (por ejemplo, en vistas de solo lectura), THE Header_Component_Estándar SHALL ocultar el botón de acción principal sin afectar el resto del layout.
4. WHEN se reemplaza un Header_Inline por el Header_Component_Estándar, THE módulo SHALL mantener la misma funcionalidad de navegación y acciones que tenía el Header_Inline original.

### Requisito 2: Estandarización de tablas en todos los módulos

**Historia de Usuario:** Como usuario de la aplicación, quiero que todas las tablas de listado tengan la misma apariencia y estructura, para tener una experiencia visual coherente al navegar entre módulos.

#### Criterios de Aceptación

1. THE Tabla_Estándar SHALL utilizar las clases CSS `table mb-0 text-nowrap text-md-nowrap table-bordered border` en el elemento `<table>`, conforme al patrón del Módulo_Empleados.
2. THE Tabla_Estándar SHALL utilizar un `<thead>` con `<tr class="border-bottom">` y elementos `<th scope="col">` para cada columna de encabezado.
3. THE Tabla_Estándar SHALL utilizar un `<tbody>` con iteración `@for` sobre los datos del observable o arreglo del componente, con `track` por el identificador único del registro.
4. WHEN un módulo de los Módulos_Afectados utiliza `mat-table` (Material Table) con datos estáticos, THE módulo SHALL migrar a la Tabla_Estándar con datos dinámicos provenientes del servicio correspondiente.
5. WHEN un módulo de los Módulos_Afectados utiliza clases de tabla diferentes a las de la Tabla_Estándar (por ejemplo, `table table-vcenter text-nowrap table-bordered border-bottom`), THE módulo SHALL actualizar las clases para coincidir con la Tabla_Estándar.
6. THE Tabla_Estándar SHALL estar envuelta en un contenedor `<div class="table-responsive">` para garantizar el scroll horizontal en pantallas pequeñas.
7. WHEN la tabla no tiene datos para mostrar, THE Tabla_Estándar SHALL mostrar un mensaje centrado indicando que no hay registros disponibles, con un ícono descriptivo.

### Requisito 3: Estandarización de botones de acción en filas de tabla

**Historia de Usuario:** Como usuario de la aplicación, quiero que los botones de acción en las filas de las tablas tengan la misma apariencia y comportamiento en todos los módulos, para identificar rápidamente las acciones disponibles.

#### Criterios de Aceptación

1. WHEN un módulo de los Módulos_Afectados utiliza Botón_Acción_Legacy (clase `action-btns1`), THE módulo SHALL reemplazar los botones por Botón_Acción_Estándar (clases `btn btn-icon` con variante de color).
2. THE Botón_Acción_Estándar SHALL estar contenido en un elemento `<div class="d-flex gap-2">` dentro de la celda de acciones de la tabla.
3. THE Botón_Acción_Estándar para la acción "Ver" SHALL utilizar las clases `btn btn-primary btn-icon` con el ícono `fe fe-eye`.
4. THE Botón_Acción_Estándar para la acción "Editar" SHALL utilizar las clases `btn btn-success btn-icon` con el ícono `fe fe-edit-2`.
5. THE Botón_Acción_Estándar para la acción "Eliminar" o "Desactivar" SHALL utilizar las clases `btn btn-danger btn-icon` o `btn btn-warning btn-icon` con el ícono correspondiente (`fe fe-trash-2` o `fe fe-user-x`).
6. THE Botón_Acción_Estándar SHALL incluir un atributo `data-bs-toggle="tooltip"` y `title` con la descripción de la acción para accesibilidad.

### Requisito 4: Estandarización y funcionalidad de paginadores

**Historia de Usuario:** Como usuario de la aplicación, quiero que los paginadores funcionen correctamente en todos los módulos, para poder navegar entre páginas de datos de forma consistente.

#### Criterios de Aceptación

1. WHEN un módulo de los Módulos_Afectados tiene un Paginador_Estático, THE módulo SHALL reemplazar el Paginador_Estático por un Paginador_Estándar con funcionalidad dinámica.
2. WHEN un módulo de los Módulos_Afectados no tiene ningún paginador, THE módulo SHALL agregar un Paginador_Estándar con funcionalidad dinámica, conforme al patrón del Módulo_Empleados.
3. THE Paginador_Estándar SHALL calcular el número total de páginas basándose en la cantidad total de registros y el número de registros por página seleccionado en el Selector_Registros.
4. WHEN el usuario hace clic en un número de página del Paginador_Estándar, THE Paginador_Estándar SHALL actualizar la tabla para mostrar los registros correspondientes a la página seleccionada.
5. WHEN el usuario hace clic en "Prev" del Paginador_Estándar, THE Paginador_Estándar SHALL navegar a la página anterior, siempre que la página actual sea mayor a 1.
6. WHEN el usuario hace clic en "Next" del Paginador_Estándar, THE Paginador_Estándar SHALL navegar a la página siguiente, siempre que existan más páginas disponibles.
7. WHILE el usuario está en la primera página, THE Paginador_Estándar SHALL deshabilitar el botón "Prev" agregando la clase `disabled` al elemento `li.page-item`.
8. WHILE el usuario está en la última página, THE Paginador_Estándar SHALL deshabilitar el botón "Next" agregando la clase `disabled` al elemento `li.page-item`.
9. THE Paginador_Estándar SHALL resaltar la página activa agregando la clase `active` al elemento `li.page-item` correspondiente.
10. THE Selector_Registros SHALL permitir al usuario elegir entre 10, 25, 50 y 100 registros por página, y al cambiar la selección, THE Paginador_Estándar SHALL recalcular las páginas y mostrar la primera página.

### Requisito 5: Estandarización del Selector de registros por página

**Historia de Usuario:** Como usuario de la aplicación, quiero poder elegir cuántos registros ver por página en todas las tablas, para controlar la cantidad de información visible según mis necesidades.

#### Criterios de Aceptación

1. WHEN un módulo de los Módulos_Afectados no tiene un Selector_Registros, THE módulo SHALL agregar un Selector_Registros encima de la tabla, conforme al patrón del Módulo_Empleados.
2. THE Selector_Registros SHALL mostrar el texto "Mostrar [N] registros" con un control `ng-select` que ofrezca las opciones 10, 25, 50 y 100.
3. WHEN el usuario cambia el valor del Selector_Registros, THE tabla SHALL actualizar la cantidad de filas visibles y THE Paginador_Estándar SHALL recalcular el número total de páginas.
4. THE Selector_Registros SHALL tener un valor predeterminado de 10 registros por página.
5. WHEN un módulo de los Módulos_Afectados utiliza el texto "entradas" en lugar de "registros" en el Selector_Registros, THE módulo SHALL unificar el texto a "registros" conforme al estándar del Módulo_Empleados.

### Requisito 6: Corrección del problema de navegación con página en blanco

**Historia de Usuario:** Como usuario de la aplicación, quiero que al navegar a cualquier ruta previamente visitada la página se renderice correctamente, para no encontrar pantallas en blanco que interrumpan mi flujo de trabajo.

#### Criterios de Aceptación

1. WHEN el usuario navega a una ruta previamente visitada, THE aplicación SHALL renderizar el componente correspondiente de forma completa, sin mostrar una página en blanco.
2. IF la aplicación utiliza una Estrategia_Reutilización_Rutas personalizada que causa la Navegación_En_Blanco, THEN THE aplicación SHALL corregir o reemplazar la estrategia para garantizar la correcta recreación de componentes.
3. WHEN el usuario navega entre rutas utilizando `routerLink` o `router.navigate()`, THE aplicación SHALL destruir correctamente el componente anterior y crear el componente nuevo, ejecutando los hooks de ciclo de vida (`ngOnInit`, `ngOnDestroy`) de forma apropiada.
4. IF un componente utiliza observables que no se desuscriben al destruirse, THEN THE componente SHALL implementar la desuscripción en `ngOnDestroy` para evitar fugas de memoria y comportamientos inesperados en la navegación.
5. WHEN el usuario navega a una ruta con parámetros dinámicos (por ejemplo, `/ver-empleado/:id`), THE componente SHALL reaccionar a los cambios de parámetros y recargar los datos correspondientes.

### Requisito 7: Traducción de textos estáticos al español

**Historia de Usuario:** Como usuario hispanohablante de la aplicación, quiero que todos los textos de la interfaz estén en español, para tener una experiencia de usuario coherente en mi idioma.

#### Criterios de Aceptación

1. WHEN un módulo de los Módulos_Afectados contiene textos en inglés en la interfaz (encabezados de tabla, etiquetas de filtros, botones, placeholders, mensajes), THE módulo SHALL traducir los textos al español.
2. THE Paginador_Estándar SHALL utilizar los textos "Anterior" y "Siguiente" en lugar de "Prev" y "Next".
3. THE Selector_Registros SHALL utilizar el texto "Mostrar [N] registros" en todos los módulos, reemplazando variantes como "Show [N] entries".
4. WHEN un módulo utiliza etiquetas de filtros en inglés (por ejemplo, "From:", "To:", "Select Employee", "Search"), THE módulo SHALL traducir las etiquetas al español ("Desde:", "Hasta:", "Seleccionar Empleado", "Buscar").
