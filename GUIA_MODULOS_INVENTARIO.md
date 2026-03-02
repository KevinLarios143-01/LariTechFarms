# 📦 Guía de Módulos de Inventario

**Fecha:** 2 de Marzo de 2026

---

## 🔍 Hay DOS Módulos de Inventario Diferentes

### 1. 🥚 Inventario de Huevos por Lote (IMPLEMENTADO) ✅

**Ubicación en el Menú:**
```
Producción Dashboard
  └─ Ingreso de Inventario ⬅️ ESTE ES EL QUE FUNCIONA
      ├─ Lista de Ingresos
      ├─ Registrar Ingreso
      ├─ Ver Detalle
      └─ Stock por Lote
```

**Rutas:**
- Lista: `/dashboard/production/ingreso-inventario/list`
- Registrar: `/dashboard/production/ingreso-inventario/add`
- Stock: `/dashboard/production/ingreso-inventario/stock-lote`

**Propósito:**
- Clasificar la producción diaria de huevos por tipo (Jumbo, Extra, Grande, etc.)
- Ver stock disponible por lote y producto
- Control automático de inventario de huevos

**Estado:** ✅ COMPLETAMENTE FUNCIONAL

---

### 2. 🛠️ Inventario General de Granja (PENDIENTE) ❌

**Ubicación en el Menú:**
```
Producción Dashboard
  └─ Inventario ⬅️ ESTE ESTÁ PENDIENTE
      └─ (Muestra mensaje: "Módulo pendiente de implementar")
```

**Ruta:**
- Lista: `/dashboard/production-dashboard/inventario/list`

**Propósito:**
- Gestionar inventario general de la granja
- Categorías: Alimento, Medicamentos, Herramientas, Suministros
- Control de stock mínimo
- Proveedores

**Estado:** ❌ PENDIENTE DE IMPLEMENTAR

---

## 🎯 ¿Cuál Debo Usar?

### Para Huevos (Producción Diaria):
✅ Usa: **Ingreso de Inventario**

**Flujo de Trabajo:**
```
1. Crear Productos (tipos de huevos)
   └─ Producción Dashboard → Productos → Nuevo Producto
   
2. Registrar Producción Diaria
   └─ Producción Dashboard → Control de Huevos
   
3. Clasificar Huevos por Tipo
   └─ Producción Dashboard → Ingreso de Inventario → Registrar Ingreso
   
4. Ver Stock Disponible
   └─ Producción Dashboard → Ingreso de Inventario → Stock por Lote
```

### Para Herramientas, Alimentos, Medicamentos:
❌ Pendiente: **Inventario General de Granja**

Este módulo aún no está implementado. Cuando lo esté, podrás:
- Registrar herramientas (palas, rastrillos, etc.)
- Controlar alimento para aves
- Gestionar medicamentos
- Controlar suministros generales

---

## 📋 Menú de Navegación Actualizado

### Producción Dashboard

```
Producción Dashboard
├─ Dashboard (Estadísticas)
├─ Control de Huevos (Producción diaria)
├─ Productos (Tipos de huevos)
│   ├─ Lista de Productos ⬅️ CREAR PRODUCTOS AQUÍ
│   ├─ Nuevo Producto
│   └─ Estadísticas
├─ Ingreso de Inventario (Clasificación de huevos) ⬅️ USA ESTE
│   ├─ Lista de Ingresos
│   ├─ Registrar Ingreso
│   ├─ Ver Detalle
│   └─ Stock por Lote
├─ Inventario (General de granja) ⬅️ PENDIENTE
├─ Vehículos
└─ Gastos de Operación
```

---

## 🚀 Pasos para Empezar

### Paso 1: Crear Productos (Una sola vez)
1. Ve a: **Producción Dashboard → Productos → Nuevo Producto**
2. Crea los tipos de huevos:
   - Jumbo (XL) - $0.50
   - Extra Grande (L) - $0.45
   - Grande (M) - $0.40
   - Mediano (S) - $0.35
   - Pequeño (XS) - $0.30

### Paso 2: Registrar Producción Diaria
1. Ve a: **Producción Dashboard → Control de Huevos**
2. Registra la producción total del día (ej: 5,000 huevos)

### Paso 3: Clasificar Huevos
1. Ve a: **Producción Dashboard → Ingreso de Inventario → Registrar Ingreso**
2. Selecciona el lote
3. Selecciona el producto (tipo de huevo)
4. Ingresa cartones (se calculan huevos automáticamente)
5. Guarda

### Paso 4: Ver Stock
1. Ve a: **Producción Dashboard → Ingreso de Inventario → Stock por Lote**
2. Verás el stock disponible con indicadores de color:
   - 🟢 Verde: Stock alto (>10 cartones)
   - 🟡 Amarillo: Stock medio (6-10 cartones)
   - 🔴 Rojo: Stock bajo (1-5 cartones)
   - ⚫ Gris: Sin stock (0 cartones)

---

## ⚠️ Nota Importante

Si ves el mensaje **"Módulo de inventario de granja pendiente de implementar"**, significa que estás en el módulo incorrecto.

**Solución:**
- Sal de "Inventario"
- Ve a "Ingreso de Inventario" (el módulo que acabamos de crear)

---

## 📊 Diferencias Clave

| Característica | Ingreso de Inventario (Huevos) | Inventario General |
|----------------|--------------------------------|-------------------|
| Estado | ✅ Funcional | ❌ Pendiente |
| Propósito | Clasificación de huevos | Herramientas/Suministros |
| Productos | Tipos de huevos | Alimentos, medicamentos, etc. |
| Stock por | Lote y Producto | Item general |
| Integración | Control de Huevos + Tickets | Compras + Proveedores |

---

## 🔧 Para Desarrolladores

### Archivos del Módulo de Huevos (Funcional)
```
src/app/componets/dashbord/production-dashboard/ingreso-inventario/
├── ingreso-inventario-list/
├── add-ingreso-inventario/
├── view-ingreso-inventario/
├── stock-lote-view/
└── ingreso-inventario.routes.ts
```

### Archivos del Módulo General (Pendiente)
```
src/app/componets/dashbord/production-dashboard/inventario/
├── inventario-list/ (comentado)
├── add-inventario/ (pendiente)
├── edit-inventario/ (pendiente)
└── view-inventario/ (pendiente)
```

---

**Última actualización:** 2 de Marzo de 2026  
**Estado:** Documentación completa de ambos módulos
