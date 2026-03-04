# 📚 Documentación Completa del Proyecto LariTechFarms

**Fecha:** Marzo 4, 2026  
**Versión:** 2.0 Final  
**Estado:** ✅ Producción

---

## 📋 Tabla de Contenidos

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Estado Actual del Proyecto](#estado-actual-del-proyecto)
3. [Instrucciones de Ejecución](#instrucciones-de-ejecución)
4. [Módulos Implementados](#módulos-implementados)
5. [Guías de Uso](#guías-de-uso)
6. [Rutas del Sistema](#rutas-del-sistema)
7. [Flujos de Trabajo](#flujos-de-trabajo)
8. [Troubleshooting](#troubleshooting)
9. [Pendientes y Roadmap](#pendientes-y-roadmap)

---

## Resumen Ejecutivo

### 🎯 Objetivo del Proyecto
Sistema de gestión integral para granja avícola que permite controlar producción, inventario, ventas, personal y operaciones.

### 📊 Estado General
- **Frontend:** Angular 18 - ✅ 33% completado (10/30 módulos)
- **Backend:** Node.js + Express + Prisma - ✅ 100% completado
- **Base de Datos:** PostgreSQL - ✅ Completamente configurada
- **Compilación:** ✅ Sin errores

### ✅ Logros Principales
- 10 módulos CRUD completamente funcionales
- Sistema de inventario por lote implementado
- Integración completa con backend
- Triggers automáticos para actualización de stock
- Documentación exhaustiva

---

## Estado Actual del Proyecto

### Módulos Completados (10)

#### HRM Dashboard
1. **Usuarios** - Gestión de usuarios del sistema
2. **Empleados** - Gestión de personal

#### Client Dashboard
3. **Clientes** - Gestión de clientes con activación/desactivación

#### Business Dashboard
4. **Lotes** - Gestión de lotes/galeras
5. **Ventas** - Ventas con múltiples productos (FormArray)
6. **Tickets** - Tickets de despacho con DetalleTicket

#### Production Dashboard
7. **Productos** - Tipos de huevos y productos
8. **Control de Huevos** - Producción diaria
9. **Ingreso de Inventario** - Clasificación de huevos por tipo ⭐ NUEVO
10. **Stock por Lote** - Vista consolidada de inventario ⭐ NUEVO

### Tecnologías Utilizadas

**Frontend:**
- Angular 18.2.3
- TypeScript 5.5.4
- RxJS para programación reactiva
- Bootstrap 5 + ng-bootstrap
- ngx-toastr para notificaciones
- Remix Icon para iconografía

**Backend:**
- Node.js v22.21.1
- Express.js
- Prisma ORM
- PostgreSQL
- JWT para autenticación

---

## Instrucciones de Ejecución

### Inicio Rápido

```bash
# Frontend
cd LariTechFarms
npx ng serve --open
```

El proyecto se abrirá en: **http://localhost:4200**

### Comandos Disponibles

#### Desarrollo
```bash
# Iniciar servidor de desarrollo
ng serve

# Con puerto específico
ng serve --port 4300

# Con apertura automática
ng serve --open
```

#### Compilación
```bash
# Desarrollo
ng build

# Producción
ng build --configuration production
npm run build
```

#### Testing
```bash
# Tests unitarios
ng test
npm test
```

### Configuración del Backend

**Archivo:** `src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

### Verificar Instalación

```bash
# Verificar versiones
node --version    # v18+ o v20+
npm --version     # v9+ o v10+
ng version        # Angular CLI 18.2.3

# Compilar proyecto
cd LariTechFarms
ng build
```

---

## Módulos Implementados

### 1. Sistema de Inventario por Lote ⭐ DESTACADO

**Estado:** ✅ COMPLETADO Y FUNCIONAL

#### Componentes
- **Lista de Ingresos** - `/dashboard/production/ingreso-inventario/list`
- **Registrar Ingreso** - `/dashboard/production/ingreso-inventario/add`
- **Ver Detalle** - `/dashboard/production/ingreso-inventario/view/:id`
- **Stock por Lote** - `/dashboard/production/ingreso-inventario/stock-lote`

#### Características
- ✅ Cálculo automático: 1 cartón = 30 huevos
- ✅ Selección de lote activo
- ✅ Selección de producto activo
- ✅ Estadísticas en tiempo real
- ✅ Indicadores visuales de stock:
  - 🟢 Stock Alto (>10 cartones)
  - 🟡 Stock Medio (6-10 cartones)
  - 🔴 Stock Bajo (1-5 cartones)
  - ⚫ Sin Stock (0 cartones)

#### Flujo de Trabajo
```
1. Producción Diaria
   └─> Control de Huevos: 5,000 huevos totales

2. Clasificación por Tipo
   └─> Ingreso de Inventario:
       ├─> Jumbo: 40 cartones (1,200 huevos)
       ├─> Extra: 60 cartones (1,800 huevos)
       └─> Grande: 50 cartones (1,500 huevos)

3. Actualización Automática (Trigger Backend)
   └─> Stock por Lote:
       ├─> Lote 1 → Jumbo: +40 cartones
       ├─> Lote 1 → Extra: +60 cartones
       └─> Lote 1 → Grande: +50 cartones

4. Stock Global (Trigger Backend)
   └─> Producto:
       ├─> Jumbo: stock = 40
       ├─> Extra: stock = 60
       └─> Grande: stock = 50

5. Despacho (Tickets)
   └─> Al generar ticket:
       ├─> Stock por lote se reduce
       └─> Stock global se actualiza
```

### 2. Módulo de Ventas

**Características Especiales:**
- FormArray dinámico para múltiples productos
- Cálculo automático de totales
- Anular venta (restaura stock automáticamente)
- Integración con tickets

### 3. Módulo de Tickets

**Implementación DetalleTicket:**
- Un ticket por lote
- Múltiples productos por ticket
- Estados: Pendiente → Autorizado → Despachado
- Actualización automática de venta a "Completada"

### 4. Módulo de Clientes

**Características:**
- Activar/Desactivar clientes
- Filtro por estado
- Estadísticas (Total, Activos, Inactivos)

---

## Guías de Uso

### Configuración Inicial (Una sola vez)

#### 1. Crear Lotes
```
Menú → Business Dashboard → Lotes → Nuevo Lote
```

Información requerida:
- Nombre de la galera
- Cantidad de aves
- Fecha de inicio
- Estado

#### 2. Crear Productos (Tipos de Huevos)
```
Menú → Producción Dashboard → Productos → Nuevo Producto
```

Productos recomendados:
- Carton Jumbos - Q44.00
- Carton Extras - Q41.00
- Carton Grandes - Q35.00
- Carton Mediano - Q34.00
- Carton Piwi - Q30.00

#### 3. Crear Clientes
```
Menú → Business Dashboard → Clientes → Agregar Cliente
```

### Operación Diaria

#### 1. Registrar Producción de Huevos
```
Menú → Producción Dashboard → Control de Huevos → Nuevo
```

Registrar total de huevos producidos en el día.

#### 2. Clasificar Huevos por Tipo
```
Menú → Producción Dashboard → Ingreso de Inventario → Registrar Ingreso
```

Pasos:
1. Seleccionar fecha
2. Seleccionar lote/galera
3. Seleccionar tipo de huevo
4. Ingresar cantidad de cartones
5. Los huevos se calculan automáticamente (30 por cartón)
6. Agregar observaciones (opcional)
7. Guardar

#### 3. Ver Stock Disponible
```
Menú → Producción Dashboard → Ingreso de Inventario → Stock por Lote
```

Muestra:
- Stock por lote y producto
- Indicadores de estado con colores
- Total consolidado
- Última actualización

#### 4. Registrar Ventas
```
Menú → Business Dashboard → Ventas → Nueva Venta
```

Pasos:
1. Seleccionar cliente (opcional)
2. Seleccionar método de pago
3. Agregar productos:
   - Seleccionar producto
   - Ingresar cantidad
   - El precio se llena automáticamente
   - El subtotal se calcula automáticamente
4. Agregar más productos con el botón "+"
5. Verificar total
6. Guardar

#### 5. Generar Tickets
```
Menú → Business Dashboard → Ventas → Lista
→ Click en "Generar Tickets" en la venta
```

Pasos:
1. Crear tickets (uno por lote)
2. Seleccionar lote para cada ticket
3. Asignar productos a cada ticket
4. Verificar cantidades
5. Generar tickets

---

## Rutas del Sistema

### Producción Dashboard

| Módulo | Ruta | Estado |
|--------|------|--------|
| Control de Huevos | `/dashboard/production-dashboard/huevos` | ✅ |
| Productos | `/dashboard/production-dashboard/productos/list` | ✅ |
| Ingreso de Inventario | `/dashboard/production/ingreso-inventario/list` | ✅ |
| Stock por Lote | `/dashboard/production/ingreso-inventario/stock-lote` | ✅ |

### Business Dashboard

| Módulo | Ruta | Estado |
|--------|------|--------|
| Clientes | `/dashboard/business-dashboard/clientes/list` | ✅ |
| Lotes | `/dashboard/business-dashboard/lotes` | ✅ |
| Ventas | `/dashboard/business-dashboard/ventas/list` | ✅ |
| Tickets | `/dashboard/business-dashboard/tickets/list` | ✅ |

### HRM Dashboard

| Módulo | Ruta | Estado |
|--------|------|--------|
| Empleados | `/dashboard/hrmdashboards/employees/employee-list` | ✅ |
| Usuarios | `/dashboard/hrmdashboards/users/user-list` | ✅ |

---

## Flujos de Trabajo

### Flujo Completo: De Producción a Venta

```
1. PRODUCCIÓN
   └─> Registrar huevos totales del día
       Ruta: /dashboard/production-dashboard/huevos/new

2. CLASIFICACIÓN
   └─> Clasificar huevos por tipo y tamaño
       Ruta: /dashboard/production/ingreso-inventario/add
       Resultado: Stock actualizado automáticamente

3. CONSULTA DE STOCK
   └─> Ver stock disponible por lote
       Ruta: /dashboard/production/ingreso-inventario/stock-lote

4. VENTA
   └─> Crear venta con productos
       Ruta: /dashboard/business-dashboard/ventas/add
       Estado: Pendiente

5. GENERACIÓN DE TICKETS
   └─> Generar tickets desde la venta
       Ruta: /dashboard/business-dashboard/tickets/generar/:ventaId
       Resultado: Tickets creados por lote

6. AUTORIZACIÓN
   └─> Cambiar estado a "Autorizado"
       Ruta: /dashboard/business-dashboard/tickets/list
       Acción: Click en "Autorizar"

7. DESPACHO
   └─> Cambiar estado a "Despachado"
       Acción: Click en "Despachar"
       Resultado: Stock se reduce, Venta pasa a "Completada"
```

### Flujo de Inventario por Lote

```
INGRESO → TRIGGER → STOCK_LOTE → TRIGGER → PRODUCTO.STOCK
```

**Detalle:**
1. Usuario registra ingreso de inventario
2. Trigger `trg_actualizar_stock_ingreso` se ejecuta automáticamente
3. Se actualiza o crea registro en `stock_lote`
4. Trigger `trg_actualizar_stock_global` se ejecuta automáticamente
5. Se actualiza campo `stock` en tabla `producto`

---

## Troubleshooting

### Error: "ng: command not found"

**Solución:**
```bash
npm install -g @angular/cli@18.2.3
```

### Error: Errores de compilación

**Solución:**
```bash
rm -rf node_modules package-lock.json
npm install
ng build
```

### Error: Puerto 4200 en uso

**Solución:**
```bash
# Usar otro puerto
ng serve --port 4300

# O matar el proceso (macOS/Linux)
lsof -ti:4200 | xargs kill -9

# Windows
netstat -ano | findstr :4200
taskkill /PID <PID> /F
```

### Error: CORS con el backend

**Solución:** Crear `proxy.conf.json`:

```json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false,
    "changeOrigin": true
  }
}
```

Ejecutar:
```bash
ng serve --proxy-config proxy.conf.json
```

### Error: Backend no responde

**Verificar:**
1. Backend está ejecutándose
2. URL correcta en `environment.ts`
3. CORS configurado en backend
4. Revisar logs del backend

---

## Pendientes y Roadmap

### Módulos Pendientes (20)

#### Prioridad Alta 🔴
1. **Asistencias** - Control de entrada/salida de empleados
2. **Préstamos a Empleados** - Gestión de préstamos
3. **Vehículos** - Gestión de vehículos de la granja
4. **Control de Transporte** - Operaciones de transporte
5. **Inventario General** - Herramientas, alimentos, medicamentos
6. **Gastos Operacionales** - Control de gastos

#### Prioridad Media 🟡
7. **Control de Agua** - Consumo de agua por lote
8. **Control de Gallinaza** - Producción de gallinaza
9. **Control de Muertes** - Registro de mortalidad
10. **Compra de Concentrado** - Gestión de compras
11. **Aplicación de Concentrado** - Registro de aplicación
12. **Movimiento de Aves** - Traslados entre lotes

#### Prioridad Baja 🟢
13. **Muestreo de Peso** - Control de peso de aves
14. **Muestreo de Salud** - Control sanitario
15. **Puestos de Trabajo** - Gestión de puestos
16. **Planes y Suscripciones** - Gestión de planes
17. **Tenants** - Gestión de tenants (multi-tenant)
18. **Módulos del Sistema** - Configuración de módulos
19. **Reportes** - Business Intelligence
20. **Dashboard Ejecutivo** - KPIs consolidados

### Mejoras Futuras

#### Sistema de Inventario
- Edición de ingresos registrados
- Filtros avanzados (múltiples lotes, rangos de fechas)
- Exportación a Excel/PDF
- Gráficos de tendencias
- Alertas de stock bajo
- Historial de movimientos

#### Integración
- Reportes con datos de inventario
- Widgets de stock en dashboard principal
- Validación de stock antes de generar tickets
- Notificaciones de stock bajo vía email/SMS

---

## Estadísticas del Proyecto

### Código
- **Líneas de código:** ~3,500 líneas
- **Archivos creados:** 50+ archivos
- **Componentes:** 25+ componentes
- **Servicios:** 10 servicios
- **Interfaces:** 12 interfaces

### Progreso
- **Módulos completados:** 10/30 (33%)
- **Backend:** 30/30 controladores (100%)
- **Base de datos:** 40+ tablas (100%)
- **Documentación:** Completa

### Calidad
- **Compilación:** ✅ Sin errores
- **Patrones:** Consistentes
- **Tipado:** TypeScript strict
- **Responsive:** Bootstrap 5
- **Accesibilidad:** Considerada

---

## Comandos Rápidos

### Frontend
```bash
# Iniciar
cd LariTechFarms && npx ng serve --open

# Compilar
ng build --configuration production

# Tests
ng test
```

### Backend
```bash
# Iniciar
cd laritechfarms_backend_node && npm run dev

# Regenerar Prisma
npx prisma generate

# Ver BD
npx prisma studio
```

### Base de Datos
```bash
# Conectar
psql -U usuario -d database

# Ejecutar script
psql -U usuario -d database < scripts/archivo.sql

# Backup
pg_dump -U usuario database > backup.sql
```

---

## Recursos Adicionales

### Documentación Backend
- `laritechfarms_backend_node/scripts/DOCUMENTACION_COMPLETA.md` - Scripts y migraciones
- `laritechfarms_backend_node/scripts/README.md` - Guía de scripts

### Archivos de Referencia
- `COMANDOS_RAPIDOS.sh` - Comandos útiles
- `README.md` - Documentación de Angular CLI

---

## Conclusión

El proyecto LariTechFarms está en desarrollo activo con una base sólida implementada. El sistema de inventario por lote está completamente funcional y listo para producción. Los próximos pasos incluyen la implementación de módulos de gestión de personal y operaciones.

**Estado General:** 🟢 En Desarrollo Activo  
**Calidad del Código:** ✅ Alta  
**Documentación:** ✅ Completa  
**Listo para Producción:** ✅ Módulos completados

---

**Última actualización:** Marzo 4, 2026  
**Versión:** 2.0 Final  
**Mantenido por:** Equipo de Desarrollo LariTechFarms
