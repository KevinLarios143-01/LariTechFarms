# Plan de Implementación de Mantenimientos - LariTechFarms Frontend

## Resumen Ejecutivo

Basado en la documentación del backend (carpeta `docs/`), se identificaron los siguientes módulos que necesitan implementación o verificación en el frontend.

## Estado Actual

### ✅ Módulos COMPLETOS y Funcionales
1. **Productos** - `production-dashboard/productos` ✓
2. **Control de Huevos** - `production-dashboard/huevos` ✓
3. **Empleados** - `hrmdashboards/employess` ✓
4. **Usuarios** - `hrmdashboards/users` ✓

### ⚠️ Módulos con Servicio pero SIN Componentes CRUD
5. **Clientes** - Servicio: ✓ | Componentes: ❌
6. **Lotes** - Servicio: ✓ | Componentes: ❌
7. **Ventas** - Servicio: ✓ | Componentes: ❌
8. **Tickets** - Servicio: ✓ | Componentes: ❌

### ❌ Módulos FALTANTES (Servicio + Componentes)
9. **Inventario** - Servicio: ✓ (creado) | Componentes: ❌
10. **Vehículos** - Servicio: ✓ (creado) | Componentes: ❌
11. **Gastos de Operación** - Servicio: ✓ (creado) | Componentes: ❌

## Archivos Creados

### Interfaces
- ✅ `src/app/shared/interfaces/inventario.ts`
- ✅ `src/app/shared/interfaces/vehiculo.ts`
- ✅ `src/app/shared/interfaces/gasto-operacion.ts`

### Servicios
- ✅ `src/app/shared/services/inventario.service.ts`
- ✅ `src/app/shared/services/vehiculo.service.ts`
- ✅ `src/app/shared/services/gasto-operacion.service.ts`

## Estructura de Componentes a Implementar

### Patrón Estándar CRUD
Cada módulo debe seguir esta estructura:

```
module-name/
├── module-list/
│   ├── module-list.component.ts
│   ├── module-list.component.html
│   └── module-list.component.scss
├── add-module/
│   ├── add-module.component.ts
│   ├── add-module.component.html
│   └── add-module.component.scss
├── edit-module/
│   ├── edit-module.component.ts
│   ├── edit-module.component.html
│   └── edit-module.component.scss
├── view-module/
│   ├── view-module.component.ts
│   ├── view-module.component.html
│   └── view-module.component.scss
└── module.routes.ts
```

## Ubicación de Módulos

### Production Dashboard (`production-dashboard/`)
- ✅ productos/
- ✅ huevos/
- ❌ inventario/ (crear)
- ❌ vehiculos/ (crear)
- ❌ gastos-operacion/ (crear)

### Business Dashboard (`bussiness-dashboard/`)
- ❌ clientes/ (crear)
- ❌ lotes/ (crear)
- ❌ ventas/ (crear)
- ❌ tickets/ (crear)

## Componentes por Implementar

### 1. INVENTARIO (11 archivos)
**Ubicación:** `production-dashboard/inventario/`

#### inventario-list.component.ts
- Listar items con paginación
- Filtros: búsqueda, categoría, stock bajo
- Estadísticas: total items, stock bajo, valor total
- Acciones: Ver, Editar, Eliminar, Actualizar Stock
- Alertas de stock bajo

#### add-inventario.component.ts
- Formulario reactivo con validaciones
- Campos: nombre*, cantidad*, unidad*, categoría, minimoStock, proveedor, observaciones
- Cargar categorías desde API
- Validaciones: campos requeridos, cantidad > 0

#### edit-inventario.component.ts
- Similar a add pero carga datos existentes
- Actualización parcial de campos
- Opción de actualizar stock (entrada/salida/ajuste)

#### view-inventario.component.ts
- Mostrar detalles completos
- Indicador visual de nivel de stock
- Botones: Editar, Actualizar Stock, Volver

#### inventario.routes.ts
```typescript
{
  path: 'inventario',
  children: [
    { path: 'list', component: InventarioListComponent },
    { path: 'add', component: AddInventarioComponent },
    { path: 'edit/:id', component: EditInventarioComponent },
    { path: 'view/:id', component: ViewInventarioComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
  ]
}
```

### 2. VEHÍCULOS (11 archivos)
**Ubicación:** `production-dashboard/vehiculos/`

#### vehiculo-list.component.ts
- Listar vehículos con paginación
- Filtros: búsqueda, tipo, estado
- Estadísticas: total, por estado, por tipo, capacidad total
- Acciones: Ver, Editar, Eliminar, Cambiar Estado
- Badges de estado con colores

#### add-vehiculo.component.ts
- Formulario reactivo
- Campos: tipo*, placa*, marca*, modelo*, año, estado, capacidad, fechaAdquisición
- Cargar tipos desde API
- Validación: placa única, año válido

#### edit-vehiculo.component.ts
- Actualización de datos del vehículo
- No permitir editar placa si tiene registros

#### view-vehiculo.component.ts
- Detalles completos del vehículo
- Historial de mantenimientos (si existe)
- Botones: Editar, Cambiar Estado, Volver

#### vehiculos.routes.ts
```typescript
{
  path: 'vehiculos',
  children: [
    { path: 'list', component: VehiculoListComponent },
    { path: 'add', component: AddVehiculoComponent },
    { path: 'edit/:id', component: EditVehiculoComponent },
    { path: 'view/:id', component: ViewVehiculoComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
  ]
}
```

### 3. GASTOS DE OPERACIÓN (11 archivos)
**Ubicación:** `production-dashboard/gastos-operacion/`

#### gasto-list.component.ts
- Listar gastos con paginación
- Filtros: categoría, método de pago, rango de fechas
- Estadísticas: total gastos, promedio, por categoría, tendencia mensual
- Gráficos: gastos por categoría (pie chart)
- Acciones: Ver, Editar, Eliminar

#### add-gasto.component.ts
- Formulario reactivo
- Campos: fecha*, categoría*, descripción*, monto*, metodoPago
- Categorías predefinidas: Mantenimiento, Servicios, Insumos, Personal, Transporte, Limpieza, Combustible, Medicamentos
- Métodos de pago: Efectivo, Transferencia, Tarjeta, Cheque
- Validaciones: monto > 0, fecha válida

#### edit-gasto.component.ts
- Actualización de gasto existente
- Todos los campos editables

#### view-gasto.component.ts
- Detalles del gasto
- Información del usuario que registró
- Botones: Editar, Eliminar, Volver

#### gastos-operacion.routes.ts
```typescript
{
  path: 'gastos-operacion',
  children: [
    { path: 'list', component: GastoListComponent },
    { path: 'add', component: AddGastoComponent },
    { path: 'edit/:id', component: EditGastoComponent },
    { path: 'view/:id', component: ViewGastoComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
  ]
}
```

### 4. CLIENTES (11 archivos)
**Ubicación:** `bussiness-dashboard/clientes/`

#### cliente-list.component.ts
- Listar clientes con paginación
- Filtros: búsqueda (nombre, teléfono, correo), estado
- Estadísticas: total clientes, activos, inactivos
- Acciones: Ver, Editar, Activar/Desactivar, Eliminar
- Ver ventas del cliente

#### add-cliente.component.ts
- Formulario reactivo
- Campos: nombre*, teléfono, correo, dirección, nit
- Validaciones: nombre requerido, email válido

#### edit-cliente.component.ts
- Actualización de datos del cliente
- Todos los campos editables

#### view-cliente.component.ts
- Detalles del cliente
- Lista de ventas asociadas
- Estadísticas de compras
- Botones: Editar, Activar/Desactivar, Ver Ventas, Volver

### 5. LOTES (11 archivos)
**Ubicación:** `bussiness-dashboard/lotes/`

#### lote-list.component.ts
- Listar lotes con paginación
- Filtros: estado (Activo, Inactivo, Desalojado), tipo (Ponedoras, Engorde), búsqueda
- Estadísticas: total lotes, por tipo, por estado, cantidad total de aves
- Acciones: Ver, Editar, Actualizar Cantidad, Eliminar

#### add-lote.component.ts
- Formulario reactivo
- Campos: tipo*, fechaInicio*, cantidad*, galera*, fechaFin, observaciones
- Tipos: Ponedoras, Engorde
- Validaciones: cantidad > 0, fechas válidas

#### edit-lote.component.ts
- Actualización de lote
- Opción de actualizar cantidad de aves
- Cambiar estado

#### view-lote.component.ts
- Detalles del lote
- Movimientos de aves asociados
- Tickets generados
- Producción de huevos (si es ponedoras)
- Botones: Editar, Actualizar Cantidad, Volver

### 6. VENTAS (11 archivos)
**Ubicación:** `bussiness-dashboard/ventas/`

#### venta-list.component.ts
- Listar ventas con paginación
- Filtros: estado, rango de fechas, cliente
- Estadísticas: total ventas, monto total, promedio, por estado
- Acciones: Ver, Cambiar Estado, Anular

#### add-venta.component.ts
- Formulario reactivo con detalles dinámicos
- Campos: fecha*, cliente, metodoPago, observaciones
- Detalles: Array de productos (idProducto*, cantidad*, precioUnitario*)
- Cálculo automático de subtotales y total
- Validación de stock disponible
- Botones: Agregar/Quitar productos

#### view-venta.component.ts
- Detalles completos de la venta
- Información del cliente
- Detalles de productos vendidos
- Total y subtotales
- Botones: Cambiar Estado, Anular, Imprimir, Volver

### 7. TICKETS (11 archivos)
**Ubicación:** `bussiness-dashboard/tickets/`

#### ticket-list.component.ts
- Listar tickets con paginación
- Filtros: estado, venta, rango de fechas
- Estadísticas: total tickets, por estado, por lote
- Acciones: Ver, Editar, Cambiar Estado, Eliminar

#### add-ticket.component.ts
- Formulario reactivo
- Campos: idVenta*, idLote*, idProducto*, fecha*, cantidad*, codigoAutorizacion
- Cargar ventas, lotes y productos desde API
- Validaciones: cantidad > 0, fecha válida

#### edit-ticket.component.ts
- Actualización de ticket
- Cambiar estado: Pendiente → Autorizado → Despachado

#### view-ticket.component.ts
- Detalles del ticket
- Información de venta, lote y producto
- Código de autorización
- Botones: Editar, Cambiar Estado, Imprimir, Volver

## Características Comunes de Todos los Componentes

### Imports Estándar
```typescript
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../../../shared/common/sharedmodule';
```

### Patrón de Lista
- Paginación
- Búsqueda en tiempo real
- Filtros múltiples
- Estadísticas en tarjetas
- Tabla responsive
- Acciones por fila
- Loading state

### Patrón de Formulario
- Reactive Forms
- Validaciones
- Mensajes de error
- Loading state
- Toastr notifications
- Navegación después de guardar
- Modo edición/creación

### Patrón de Vista
- Carga de datos por ID
- Información completa
- Botones de acción
- Loading state
- Manejo de errores

## Integración en Rutas Principales

### production-dashboard.routes.ts
Agregar:
```typescript
import { InventarioRoutes } from './inventario/inventario.routes';
import { VehiculosRoutes } from './vehiculos/vehiculos.routes';
import { GastosOperacionRoutes } from './gastos-operacion/gastos-operacion.routes';

export const ProductionDashboardRoutes: Routes = [
  ...InventarioRoutes,
  ...VehiculosRoutes,
  ...GastosOperacionRoutes,
  // ... otras rutas existentes
];
```

### bussiness-dashboard.routes.ts (crear si no existe)
```typescript
import { ClientesRoutes } from './clientes/clientes.routes';
import { LotesRoutes } from './lotes/lotes.routes';
import { VentasRoutes } from './ventas/ventas.routes';
import { TicketsRoutes } from './tickets/tickets.routes';

export const BussinessDashboardRoutes: Routes = [
  ...ClientesRoutes,
  ...LotesRoutes,
  ...VentasRoutes,
  ...TicketsRoutes,
];
```

## Menú de Navegación

Actualizar el sidebar para incluir los nuevos módulos:

### Production Dashboard
- Control de Huevos ✓
- Productos ✓
- **Inventario** (nuevo)
- **Vehículos** (nuevo)
- **Gastos de Operación** (nuevo)

### Business Dashboard
- **Clientes** (nuevo)
- **Lotes** (nuevo)
- **Ventas** (nuevo)
- **Tickets** (nuevo)

## Prioridades de Implementación

### Fase 1 - Crítico (Operaciones Diarias)
1. **Clientes** - Base para ventas
2. **Lotes** - Control de producción
3. **Ventas** - Ingresos
4. **Tickets** - Despachos

### Fase 2 - Importante (Gestión)
5. **Inventario** - Control de insumos
6. **Gastos de Operación** - Control financiero

### Fase 3 - Complementario
7. **Vehículos** - Gestión de flota

## Verificación de Módulos Existentes

### Productos ✓
- [x] Servicio funcional
- [x] Lista con filtros
- [x] Crear/Editar
- [x] Ver detalles
- [x] Actualizar stock
- [x] Estadísticas

### Huevos ✓
- [x] Servicio funcional
- [x] Lista con filtros
- [x] Registrar producción
- [x] Ver detalles
- [x] Estadísticas

## Próximos Pasos

1. ✅ Crear interfaces para módulos faltantes
2. ✅ Crear servicios para módulos faltantes
3. ⏳ Crear componentes CRUD para cada módulo
4. ⏳ Integrar rutas en dashboards
5. ⏳ Actualizar menú de navegación
6. ⏳ Probar cada módulo
7. ⏳ Ajustar estilos según diseño existente

## Notas Técnicas

- Usar Angular 17+ standalone components
- Seguir patrón de servicios compartidos en `shared/services/`
- Interfaces en `shared/interfaces/`
- Componentes en estructura de dashboard correspondiente
- Usar Toastr para notificaciones
- Implementar loading states
- Manejo robusto de errores
- Validaciones en formularios
- Responsive design con Bootstrap 5

## Comandos Útiles

```bash
# Generar componente
ng g c componets/dashbord/production-dashboard/inventario/inventario-list --standalone

# Generar servicio
ng g s shared/services/inventario

# Generar interface
ng g interface shared/interfaces/inventario
```
