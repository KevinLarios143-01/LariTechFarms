# 🗺️ Rutas del Sistema - LariTechFarms

**Fecha:** 2 de Marzo de 2026

---

## 🥚 Módulo de Producción de Huevos

### Control de Huevos (Producción Diaria)
```
Lista:           /dashboard/production-dashboard/huevos
Nuevo Registro:  /dashboard/production-dashboard/huevos/new
Ver Detalle:     /dashboard/production-dashboard/huevos/view/:id
Estadísticas:    /dashboard/production-dashboard/huevos/estadisticas
```

**Menú:** Producción Dashboard → Control de Huevos

---

## 📦 Módulo de Productos (Tipos de Huevos)

```
Lista:           /dashboard/production-dashboard/productos/list
Nuevo Producto:  /dashboard/production-dashboard/productos/new
Editar:          /dashboard/production-dashboard/productos/edit/:id
Ver Detalle:     /dashboard/production-dashboard/productos/view/:id
Estadísticas:    /dashboard/production-dashboard/productos/estadisticas
```

**Menú:** Producción Dashboard → Productos

**Productos a crear:**
- Jumbo (XL)
- Extra Grande (L)
- Grande (M)
- Mediano (S)
- Pequeño (XS)

---

## 🎯 Módulo de Ingreso de Inventario (Clasificación de Huevos) ✅

### Rutas Principales
```
Lista:           /dashboard/production-dashboard/ingreso-inventario/list
Registrar:       /dashboard/production-dashboard/ingreso-inventario/add
Ver Detalle:     /dashboard/production-dashboard/ingreso-inventario/view/:id
Stock por Lote:  /dashboard/production-dashboard/ingreso-inventario/stock-lote
```

**Menú:** Producción Dashboard → Ingreso de Inventario

**Funcionalidad:**
- Clasificar producción diaria por tipo de huevo
- Cálculo automático: 1 cartón = 30 huevos
- Ver stock disponible por lote
- Indicadores de estado (Alto/Medio/Bajo/Sin Stock)

---

## 🐔 Módulo de Lotes

```
Lista:           /dashboard/business-dashboard/lotes
Nuevo Lote:      /dashboard/business-dashboard/lotes/new-lote
Ver Detalle:     /dashboard/business-dashboard/lotes/view-lote/:id
Editar:          /dashboard/business-dashboard/lotes/edit-lote/:id
Estadísticas:    /dashboard/business-dashboard/lotes/estadisticas
```

**Menú:** Lotes Dashboard

---

## 👥 Módulo de Clientes

```
Lista:           /dashboard/business-dashboard/clientes/list
Nuevo Cliente:   /dashboard/business-dashboard/clientes/add
Editar:          /dashboard/business-dashboard/clientes/edit/:id
Ver Detalle:     /dashboard/business-dashboard/clientes/view/:id
```

**Menú:** Business Dashboard → Clientes

---

## 💰 Módulo de Ventas

```
Lista:           /dashboard/business-dashboard/ventas/list
Nueva Venta:     /dashboard/business-dashboard/ventas/add
Editar:          /dashboard/business-dashboard/ventas/edit/:id
Ver Detalle:     /dashboard/business-dashboard/ventas/view/:id
```

**Menú:** Business Dashboard → Ventas

---

## 🎫 Módulo de Tickets

```
Lista:           /dashboard/business-dashboard/tickets/list
Generar:         /dashboard/business-dashboard/tickets/generar/:ventaId
```

**Menú:** Business Dashboard → Tickets

---

## 👨‍💼 Módulo de Empleados

```
Lista:           /dashboard/hrmdashboards/employees/employee-list
Nuevo Empleado:  /dashboard/hrmdashboards/employees/add-employee
Ver Detalle:     /dashboard/hrmdashboards/employees/view-employee/:id
```

**Menú:** RH Dashboard → Empleados

---

## 👤 Módulo de Usuarios

```
Lista:           /dashboard/hrmdashboards/users/user-list
Nuevo Usuario:   /dashboard/hrmdashboards/users/add-user
Ver Detalle:     /dashboard/hrmdashboards/users/view-user/:id
```

**Menú:** RH Dashboard → Usuarios

---

## 💼 Módulo de Puestos

```
Lista:           /dashboard/hrmdashboards/puestos/puesto-list
Nuevo Puesto:    /dashboard/hrmdashboards/puestos/add-puesto
Editar:          /dashboard/hrmdashboards/puestos/edit-puesto/:id
Ver Detalle:     /dashboard/hrmdashboards/puestos/view-puesto/:id
```

**Menú:** RH Dashboard → Puestos

---

## 🚗 Módulo de Vehículos

```
Lista:           /dashboard/production-dashboard/vehiculos/list
Nuevo Vehículo:  /dashboard/production-dashboard/vehiculos/add
Editar:          /dashboard/production-dashboard/vehiculos/edit/:id
Ver Detalle:     /dashboard/production-dashboard/vehiculos/view/:id
```

**Menú:** Producción Dashboard → Vehículos

---

## 💸 Módulo de Gastos de Operación

```
Lista:           /dashboard/production-dashboard/gastos-operacion/list
Nuevo Gasto:     /dashboard/production-dashboard/gastos-operacion/add
Editar:          /dashboard/production-dashboard/gastos-operacion/edit/:id
Ver Detalle:     /dashboard/production-dashboard/gastos-operacion/view/:id
```

**Menú:** Producción Dashboard → Gastos de Operación

---

## 🛠️ Módulo de Inventario General (Pendiente)

```
Lista:           /dashboard/production-dashboard/inventario/list
```

**Menú:** Producción Dashboard → Inventario General

**Estado:** ❌ Pendiente de implementar

---

## 📊 Módulo de Reportes

```
Ventas:          /dashboard/reports/ventas
Productos:       /dashboard/reports/productos
Tickets:         /dashboard/reports/tickets
Huevos:          /dashboard/reports/huevos
Empleados:       /dashboard/reports/empleados
```

**Menú:** Reportes

---

## 🔐 Autenticación

```
Login:           /auth/login
```

---

## 🎯 Flujo de Trabajo Completo

### 1. Configuración Inicial (Una sola vez)

```
1. Crear Lotes
   → /dashboard/business-dashboard/lotes/new-lote
   
2. Crear Productos (Tipos de Huevos)
   → /dashboard/production-dashboard/productos/new
   
3. Crear Clientes
   → /dashboard/business-dashboard/clientes/add
```

### 2. Operación Diaria

```
1. Registrar Producción de Huevos
   → /dashboard/production-dashboard/huevos/new
   
2. Clasificar Huevos por Tipo
   → /dashboard/production/ingreso-inventario/add
   
3. Ver Stock Disponible
   → /dashboard/production/ingreso-inventario/stock-lote
   
4. Registrar Ventas
   → /dashboard/business-dashboard/ventas/add
   
5. Generar Tickets
   → /dashboard/business-dashboard/tickets/generar/:ventaId
```

### 3. Consultas y Reportes

```
1. Dashboard de Producción
   → /dashboard/production-dashboard/huevos/estadisticas
   
2. Dashboard de Lotes
   → /dashboard/business-dashboard/lotes/estadisticas
   
3. Reportes
   → /dashboard/reports/huevos
   → /dashboard/reports/ventas
```

---

## 📱 Navegación Rápida

### Para Registrar Producción:
```
Menú → Producción Dashboard → Control de Huevos → Nuevo
```

### Para Clasificar Huevos:
```
Menú → Producción Dashboard → Ingreso de Inventario → Registrar Ingreso
```

### Para Ver Stock:
```
Menú → Producción Dashboard → Ingreso de Inventario → Stock por Lote
```

### Para Crear Productos:
```
Menú → Producción Dashboard → Productos → Nuevo Producto
```

### Para Registrar Ventas:
```
Menú → Business Dashboard → Ventas → Nueva Venta
```

---

## 🔍 Diferencias Importantes

### Control de Huevos vs Ingreso de Inventario

**Control de Huevos:**
- Registra producción TOTAL del día
- Ejemplo: "Hoy produjimos 5,000 huevos"
- Ruta: `/dashboard/production-dashboard/huevos`

**Ingreso de Inventario:**
- Clasifica esos huevos por TIPO
- Ejemplo: "De los 5,000 huevos: 1,200 Jumbo, 1,800 Extra, 1,500 Grande"
- Ruta: `/dashboard/production/ingreso-inventario/add`

### Inventario vs Ingreso de Inventario

**Inventario General:**
- Para herramientas, alimentos, medicamentos
- Estado: Pendiente de implementar
- Ruta: `/dashboard/production-dashboard/inventario/list`

**Ingreso de Inventario:**
- Para clasificación de huevos
- Estado: Completamente funcional
- Ruta: `/dashboard/production/ingreso-inventario/list`

---

**Última actualización:** 2 de Marzo de 2026  
**Total de Rutas Documentadas:** 50+
