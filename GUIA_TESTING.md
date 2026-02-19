# 🧪 Guía de Testing - LariTechFarms Frontend

## 📋 Checklist de Verificación Completa

### ✅ Paso 1: Verificar Compilación

```bash
cd LariTechFarms
npm install  # Si es necesario
ng serve
```

**Verificar que no haya errores de compilación.**

---

## 🎯 Testing por Módulo

### 1. Gastos de Operación (/dashboard/production-dashboard/gastos-operacion/list)

#### Funcionalidades a Probar:

**Lista:**
- [ ] La lista carga correctamente
- [ ] Las estadísticas muestran datos (Total Gastos, Total Registros, Promedio)
- [ ] Los filtros funcionan:
  - [ ] Filtro por categoría
  - [ ] Filtro por método de pago
  - [ ] Filtro por fecha inicio
  - [ ] Filtro por fecha fin
  - [ ] Botón "Limpiar" resetea todos los filtros
- [ ] La paginación funciona correctamente
- [ ] Los badges de categoría tienen colores correctos

**Crear:**
- [ ] Navegar a "Registrar Gasto"
- [ ] Fecha se establece automáticamente a hoy
- [ ] Validaciones funcionan:
  - [ ] Fecha es requerida
  - [ ] Categoría es requerida
  - [ ] Descripción es requerida
  - [ ] Monto es requerido y debe ser > 0
- [ ] Se puede crear un gasto exitosamente
- [ ] Muestra notificación de éxito
- [ ] Redirige a la lista

**Editar:**
- [ ] Click en botón "Editar" carga los datos
- [ ] Se pueden modificar todos los campos
- [ ] Validaciones funcionan
- [ ] Se guarda correctamente
- [ ] Muestra notificación de éxito

**Ver:**
- [ ] Click en botón "Ver" muestra detalles completos
- [ ] Muestra información de auditoría (createdAt, updatedAt)
- [ ] Botones de acción funcionan

**Eliminar:**
- [ ] Click en "Eliminar" muestra confirmación
- [ ] Se elimina correctamente
- [ ] Muestra notificación de éxito
- [ ] La lista se actualiza

---

### 2. Clientes (/dashboard/bussiness-dashboard/clientes/list)

#### Funcionalidades a Probar:

**Lista:**
- [ ] La lista carga correctamente
- [ ] Las estadísticas muestran datos (Total, Activos, Inactivos)
- [ ] Los filtros funcionan:
  - [ ] Búsqueda por nombre, teléfono, correo
  - [ ] Filtro por estado (Activo/Inactivo)
  - [ ] Botón "Limpiar" resetea filtros
- [ ] La paginación funciona
- [ ] Los badges de estado tienen colores correctos

**Crear:**
- [ ] Navegar a "Agregar Cliente"
- [ ] Validaciones funcionan:
  - [ ] Nombre es requerido
  - [ ] Correo debe ser válido (si se proporciona)
- [ ] Se puede crear un cliente exitosamente
- [ ] Muestra notificación de éxito

**Editar:**
- [ ] Click en "Editar" carga los datos
- [ ] Se pueden modificar todos los campos
- [ ] Validaciones funcionan
- [ ] Se guarda correctamente

**Ver:**
- [ ] Click en "Ver" muestra detalles completos
- [ ] Muestra información personal y adicional
- [ ] Muestra estado actual
- [ ] Botón "Activar/Desactivar" funciona

**Activar/Desactivar:**
- [ ] Click en botón de estado muestra confirmación
- [ ] Cambia el estado correctamente
- [ ] Muestra notificación de éxito
- [ ] La lista se actualiza
- [ ] Las estadísticas se actualizan

---

### 3. Ventas (/dashboard/bussiness-dashboard/ventas/list)

#### Funcionalidades a Probar:

**Lista:**
- [ ] La lista carga correctamente
- [ ] Las estadísticas muestran datos (Total, Completadas, Pendientes, Monto Total)
- [ ] Los filtros funcionan:
  - [ ] Filtro por estado
  - [ ] Filtro por fecha desde
  - [ ] Filtro por fecha hasta
- [ ] La paginación funciona
- [ ] Los badges de estado tienen colores correctos

**Crear (Complejo - FormArray):**
- [ ] Navegar a "Nueva Venta"
- [ ] Fecha se establece automáticamente a hoy
- [ ] Se puede seleccionar un cliente (opcional)
- [ ] Se puede seleccionar método de pago (opcional)
- [ ] **Detalles de Productos:**
  - [ ] Inicia con 1 producto
  - [ ] Botón "Agregar Producto" añade una nueva fila
  - [ ] Se puede seleccionar producto
  - [ ] Al seleccionar producto, el precio se llena automáticamente
  - [ ] Se puede modificar cantidad
  - [ ] Se puede modificar precio unitario
  - [ ] El subtotal se calcula automáticamente
  - [ ] El total general se calcula automáticamente
  - [ ] Botón "Eliminar" quita la fila (mínimo 1 producto)
- [ ] Validaciones funcionan:
  - [ ] Fecha es requerida
  - [ ] Cada producto es requerido
  - [ ] Cada cantidad es requerida y > 0
  - [ ] Cada precio es requerido y > 0
- [ ] Se puede crear una venta exitosamente
- [ ] Muestra notificación de éxito

**Ver:**
- [ ] Click en "Ver" muestra detalles completos
- [ ] Muestra información general
- [ ] Muestra tabla de productos con subtotales
- [ ] Muestra total de la venta
- [ ] Botones de acción según estado

**Anular:**
- [ ] Click en "Anular" muestra confirmación
- [ ] Se anula correctamente
- [ ] Muestra notificación de éxito
- [ ] El estado cambia a "Cancelada"
- [ ] No se puede editar una venta cancelada

---

### 4. Tickets (/dashboard/bussiness-dashboard/tickets/list)

#### Funcionalidades a Probar:

**Lista:**
- [ ] La lista carga correctamente
- [ ] Las estadísticas muestran datos (Total, Pendientes, Autorizados, Despachados)
- [ ] Los filtros funcionan:
  - [ ] Filtro por estado
  - [ ] Filtro por fecha inicio
  - [ ] Filtro por fecha fin
- [ ] La paginación funciona
- [ ] Los badges de estado tienen colores correctos

**Cambiar Estado:**
- [ ] Botón "Autorizar" aparece solo en tickets Pendientes
- [ ] Click en "Autorizar" muestra confirmación
- [ ] Cambia el estado a "Autorizado"
- [ ] Botón "Despachar" aparece solo en tickets Autorizados
- [ ] Click en "Despachar" muestra confirmación
- [ ] Cambia el estado a "Despachado"
- [ ] No se puede editar tickets Despachados o Cancelados

**Ver:**
- [ ] Click en "Ver" muestra detalles completos
- [ ] Muestra información de venta, lote y producto
- [ ] Muestra estado actual

---

### 5. Inventario (/dashboard/production-dashboard/inventario/list)

#### Funcionalidades a Probar:

**Lista:**
- [ ] La lista carga correctamente
- [ ] Las estadísticas muestran datos
- [ ] Los filtros funcionan
- [ ] La paginación funciona

**CRUD Completo:**
- [ ] Crear item funciona
- [ ] Editar item funciona
- [ ] Ver item funciona
- [ ] Eliminar item funciona
- [ ] Modal de actualizar stock funciona

---

### 6. Vehículos (/dashboard/production-dashboard/vehiculos/list)

#### Funcionalidades a Probar:

**Lista:**
- [ ] La lista carga correctamente
- [ ] Las estadísticas por estado funcionan
- [ ] Los filtros funcionan

**CRUD Completo:**
- [ ] Crear vehículo funciona
- [ ] Editar vehículo funciona (mismo componente que crear)
- [ ] Ver vehículo funciona
- [ ] Cálculo de antigüedad es correcto

---

## 🔍 Verificaciones Generales

### Navegación:
- [ ] El menú lateral muestra todos los módulos nuevos
- [ ] Los enlaces del menú funcionan correctamente
- [ ] El breadcrumb se actualiza correctamente

### Diseño Responsive:
- [ ] Probar en pantalla grande (>1200px)
- [ ] Probar en tablet (768px - 1199px)
- [ ] Probar en móvil (<768px)
- [ ] El menú se colapsa correctamente en móvil

### Notificaciones:
- [ ] Las notificaciones de éxito aparecen en verde
- [ ] Las notificaciones de error aparecen en rojo
- [ ] Las notificaciones de advertencia aparecen en amarillo
- [ ] Las notificaciones se cierran automáticamente

### Loading States:
- [ ] Los spinners aparecen durante las operaciones
- [ ] Los botones se deshabilitan durante las operaciones
- [ ] Los mensajes de "Cargando..." aparecen correctamente

### Validaciones:
- [ ] Los campos requeridos muestran error si están vacíos
- [ ] Los campos de email validan formato correcto
- [ ] Los campos numéricos solo aceptan números
- [ ] Los mensajes de error son claros

---

## 🐛 Errores Comunes a Verificar

### 1. Errores de Consola:
```bash
# Abrir DevTools (F12) y verificar:
- [ ] No hay errores en la consola
- [ ] No hay warnings críticos
- [ ] Las llamadas HTTP son exitosas (200, 201)
```

### 2. Errores de Compilación:
```bash
# Verificar en la terminal:
- [ ] No hay errores de TypeScript
- [ ] No hay errores de templates
- [ ] No hay errores de imports
```

### 3. Errores de Rutas:
```bash
# Verificar:
- [ ] Todas las rutas están definidas
- [ ] No hay rutas duplicadas
- [ ] Los lazy loading funcionan
```

---

## 📊 Testing de Integración con Backend

### Verificar Endpoints:

**Gastos de Operación:**
- [ ] GET /v1/gastos-operacion (lista)
- [ ] GET /v1/gastos-operacion/:id (detalle)
- [ ] POST /v1/gastos-operacion (crear)
- [ ] PUT /v1/gastos-operacion/:id (actualizar)
- [ ] DELETE /v1/gastos-operacion/:id (eliminar)
- [ ] GET /v1/gastos-operacion/stats (estadísticas)

**Clientes:**
- [ ] GET /v1/clientes (lista)
- [ ] GET /v1/clientes/:id (detalle)
- [ ] POST /v1/clientes (crear)
- [ ] PUT /v1/clientes/:id (actualizar)
- [ ] PATCH /v1/clientes/:id/activate (activar)
- [ ] PATCH /v1/clientes/:id/deactivate (desactivar)
- [ ] GET /v1/clientes/stats (estadísticas)

**Ventas:**
- [ ] GET /v1/ventas (lista)
- [ ] GET /v1/ventas/:id (detalle)
- [ ] POST /v1/ventas (crear)
- [ ] PUT /v1/ventas/:id (actualizar)
- [ ] PATCH /v1/ventas/:id/anular (anular)
- [ ] GET /v1/ventas/estadisticas (estadísticas)

**Tickets:**
- [ ] GET /v1/tickets (lista)
- [ ] GET /v1/tickets/:id (detalle)
- [ ] POST /v1/tickets (crear)
- [ ] PUT /v1/tickets/:id (actualizar)
- [ ] PATCH /v1/tickets/:id/estado (cambiar estado)
- [ ] GET /v1/tickets/stats (estadísticas)

---

## 🎯 Casos de Prueba Específicos

### Caso 1: Crear Venta con Múltiples Productos
1. Ir a Nueva Venta
2. Agregar 3 productos diferentes
3. Modificar cantidades y precios
4. Verificar que el total se calcula correctamente
5. Guardar y verificar que se creó correctamente

### Caso 2: Flujo Completo de Ticket
1. Crear una venta
2. Crear un ticket asociado a esa venta
3. Cambiar estado a "Autorizado"
4. Cambiar estado a "Despachado"
5. Verificar que no se puede editar

### Caso 3: Activar/Desactivar Cliente
1. Crear un cliente
2. Desactivar el cliente
3. Verificar que aparece en "Inactivos"
4. Activar el cliente
5. Verificar que aparece en "Activos"

### Caso 4: Filtros y Paginación
1. Crear 15 gastos de operación
2. Verificar que la paginación muestra 10 por página
3. Aplicar filtro por categoría
4. Verificar que solo muestra gastos de esa categoría
5. Limpiar filtros y verificar que muestra todos

---

## ✅ Checklist Final

### Antes de Desplegar:
- [ ] Todos los módulos funcionan correctamente
- [ ] No hay errores en consola
- [ ] No hay errores de compilación
- [ ] El menú de navegación está actualizado
- [ ] Todas las rutas funcionan
- [ ] Las validaciones funcionan
- [ ] Las notificaciones funcionan
- [ ] El diseño es responsive
- [ ] Los permisos por rol están configurados
- [ ] La documentación está actualizada

### Optimizaciones Opcionales:
- [ ] Agregar tests unitarios
- [ ] Agregar tests e2e
- [ ] Optimizar imágenes
- [ ] Implementar lazy loading de imágenes
- [ ] Agregar service workers (PWA)
- [ ] Implementar caché de datos

---

## 📝 Reporte de Bugs

Si encuentras algún bug, documéntalo con:

1. **Módulo afectado:** (ej: Ventas)
2. **Acción realizada:** (ej: Intenté crear una venta)
3. **Resultado esperado:** (ej: Debería crear la venta)
4. **Resultado actual:** (ej: Muestra error 500)
5. **Pasos para reproducir:**
   - Paso 1
   - Paso 2
   - Paso 3
6. **Captura de pantalla:** (si aplica)
7. **Error en consola:** (si aplica)

---

## 🚀 Comandos Útiles

```bash
# Compilar para producción
ng build --configuration production

# Analizar bundle size
ng build --stats-json
npx webpack-bundle-analyzer dist/stats.json

# Ejecutar linter
ng lint

# Ejecutar tests
ng test

# Ejecutar tests e2e
ng e2e
```

---

**¡Éxito con el testing!** 🎉

