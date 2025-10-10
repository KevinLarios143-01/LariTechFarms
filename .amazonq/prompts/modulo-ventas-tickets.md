# Módulo de Ventas y Tickets - LariTechFarms

## Instrucciones

Necesito realizar el módulo de ventas y tickets completo para el proyecto LariTechFarms. Debes basarte en el estándar de diseño del módulo de Lotes existente.

## Lógica de Negocio

**Flujo Ventas → Tickets:**
1. Se crea una **Venta** con múltiples productos (detalles de venta)
2. Un usuario autorizado **crea manualmente los Tickets** basándose en la venta
3. Los tickets controlan el despacho desde lotes específicos (galeras)
4. Cada ticket especifica qué productos sacar de qué lote/galera

**Ejemplo práctico:**
- Venta: 50 cartones (20 grandes, 20 medianos, 10 pequeños)
- Usuario crea tickets manualmente:
  - Ticket 1: Galera A → 10 grandes
  - Ticket 2: Galera A → 10 medianos  
  - Ticket 3: Galera B → 10 grandes
  - Ticket 4: Galera B → 10 medianos
  - Ticket 5: Galera C → 10 pequeños
- **Total: 5 tickets para 1 venta**

**Control de Roles:**
- Solo usuarios con permisos específicos pueden crear tickets
- Los tickets permiten sacar productos del inventario y despachar
- Cada ticket representa una orden de despacho específica desde un lote

## Requisitos

El módulo debe incluir:

1. **Servicio de Tickets** (`tickets.service.ts`)
   - Métodos CRUD completos (GET, POST, PUT, DELETE)
   - Manejo de errores consistente
   - Integración con la API backend

2. **Servicio de Ventas** (`ventas.service.ts`)
   - Métodos CRUD completos (GET, POST, PUT, DELETE)
   - Cálculos de totales y estadísticas
   - Integración con tickets y lotes

3. **Interfaces** (`ticket.interface.ts`, `venta.interface.ts`)
   - Interfaces principales de Ticket y Venta
   - Interfaces para requests/responses
   - Tipos auxiliares necesarios

4. **Componente de Tickets** (`ticket-list.component.ts`)
   - Lista de tickets con paginación
   - Funciones de búsqueda y filtrado
   - Estados de tickets (Pendiente, En Proceso, Completado, Cancelado)
   - Manejo de estados de carga

5. **Componente de Ventas** (`sell-list.component.ts`)
   - Lista de ventas con paginación
   - Funciones de búsqueda y filtrado
   - Cálculos de totales y comisiones
   - Reportes de ventas

6. **Templates HTML**
   - Tablas responsive con datos
   - Formularios modales para crear/editar
   - Botones de acción con confirmaciones
   - Mensajes de estado y validaciones

## Estructura de Archivos

```
src/app/components/dashboard/business-dashboard/
├── ticket-list/
│   ├── ticket-list.component.ts
│   ├── ticket-list.component.html
│   └── ticket-list.component.scss
├── new-ticket/
│   ├── new-ticket.component.ts
│   ├── new-ticket.component.html
│   └── new-ticket.component.scss
├── sell-list/
│   ├── sell-list.component.ts
│   ├── sell-list.component.html
│   └── sell-list.component.scss
└── services/
    ├── tickets.service.ts
    └── ventas.service.ts
```

## API Endpoints

### Tickets
```
Base URL: http://localhost:3001/api/v1/tickets
```

1. **GET /api/v1/tickets** - Listar tickets con paginación y filtros
   - Query params: page, limit, idVenta, estado, fechaInicio, fechaFin

2. **GET /api/v1/tickets/:id** - Obtener ticket por ID

3. **POST /api/v1/tickets** - Crear nuevo ticket
   - Campos requeridos: idVenta, idLote, idProducto, fecha, cantidad
   - Campos opcionales: codigoAutorizacion

4. **PUT /api/v1/tickets/:id** - Actualizar ticket completo

5. **PATCH /api/v1/tickets/:id/estado** - Cambiar estado del ticket

6. **DELETE /api/v1/tickets/:id** - Eliminar ticket

7. **GET /api/v1/tickets/stats** - Estadísticas de tickets

### Ventas
```
Base URL: http://localhost:3001/api/v1/ventas
```

1. **GET /api/v1/ventas** - Listar ventas con paginación y filtros
   - Query params: page, limit, estado, fechaDesde, fechaHasta

2. **GET /api/v1/ventas/:id** - Obtener venta por ID

3. **POST /api/v1/ventas** - Crear nueva venta
   - Campos requeridos: fecha, detalles (array de productos)
   - Campos opcionales: idCliente, metodoPago, observaciones

4. **PATCH /api/v1/ventas/:id/estado** - Actualizar estado de venta

5. **PATCH /api/v1/ventas/:id/anular** - Anular venta

6. **GET /api/v1/ventas/cliente/:clienteId** - Ventas por cliente

7. **GET /api/v1/ventas/estadisticas** - Estadísticas de ventas

## Interfaces TypeScript

### Tickets
```typescript
interface Ticket {
  id: number
  idVenta: number
  idLote: number
  idProducto: number
  fecha: string
  cantidad: number
  codigoAutorizacion?: string
  estado: "Pendiente" | "Autorizado" | "Despachado" | "Cancelado"
  idUsuario: number
  createdAt: string
  updatedAt: string
  venta?: {
    id: number
    total: number
    fecha: string
    cliente: {
      nombre: string
      telefono?: string
      direccion?: string
    }
  }
  lote?: {
    id: number
    galera: string
    tipo: string
  }
  producto?: {
    nombre: string
    tamanio?: string
    precio?: number
  }
  usuario?: {
    nombre: string
    apellido: string
  }
}

interface CreateTicketDTO {
  idVenta: number
  idLote: number
  idProducto: number
  fecha: string // YYYY-MM-DD
  cantidad: number
  codigoAutorizacion?: string
}

interface UpdateTicketDTO {
  idLote?: number
  idProducto?: number
  fecha?: string
  cantidad?: number
  codigoAutorizacion?: string
  estado?: "Pendiente" | "Autorizado" | "Despachado" | "Cancelado"
}

interface UpdateEstadoTicketDTO {
  estado: "Pendiente" | "Autorizado" | "Despachado" | "Cancelado"
}

interface TicketsStats {
  totalTickets: number
  ticketsPorEstado: Array<{
    estado: string
    _count: { id: number }
  }>
  ticketsPorLote: Array<{
    idLote: number
    _count: { id: number }
    _sum: { cantidad: number }
  }>
  cantidadTotal: number
  cantidadPromedio: number
}
```

### Ventas
```typescript
interface Venta {
  id: number
  idCliente?: number
  fecha: string
  total: number
  metodoPago?: string
  estado: "Completada" | "Cancelada" | "Pendiente"
  observaciones?: string
  cliente?: {
    id: number
    nombre: string
    telefono?: string
  }
  detalleVentas: DetalleVenta[]
}

interface DetalleVenta {
  id: number
  idProducto: number
  cantidad: number
  precioUnitario: number
  subtotal: number
  producto: {
    nombre: string
    tamanio?: string
    categoria?: string
  }
}

interface CreateVentaDTO {
  idCliente?: number
  fecha: string // YYYY-MM-DD
  metodoPago?: string
  observaciones?: string
  detalles: DetalleVentaDTO[]
}

interface DetalleVentaDTO {
  idProducto: number
  cantidad: number
  precioUnitario: number
}

interface UpdateEstadoDTO {
  estado: "Completada" | "Cancelada" | "Pendiente"
}

interface AnularVentaDTO {
  motivoAnulacion?: string
}

interface VentasStats {
  totalVentas: number
  ventasCompletadas: number
  ventasPendientes: number
  ventasCanceladas: number
  montoTotal: number
  promedioVenta: number
  topClientes: Array<{
    idCliente: number
    nombreCliente: string
    totalCompras: number
    numeroVentas: number
  }>
  topProductos: Array<{
    idProducto: number
    nombreProducto: string
    cantidadVendida: number
    montoTotal: number
  }>
  ventasPorMes: Array<{
    mes: string
    totalVentas: number
    montoTotal: number
  }>
}
```

## Configuración de Rutas

### Business Dashboard Routes
```typescript
// business-dashboard.routes.ts
{
  path: 'ticket-list',
  loadComponent: () =>
    import('./ticket-list/ticket-list.component').then((m) => m.TicketListComponent),
},
{
  path: 'new-ticket',
  loadComponent: () =>
    import('./new-ticket/new-ticket.component').then((m) => m.NewTicketComponent),
},
{
  path: 'sell-list',
  loadComponent: () =>
    import('./sell-list/sell-list.component').then((m) => m.SellListComponent),
}
```

### Navegación
```typescript
// navservice.ts - Business Dashboard
{
  title: 'Business Dashboard', type: 'sub', badgeType: 'info', badgeValue: '3', selected: false, active: false, children: [
    { path: '/dashboard/business-dashboard/ticket-list', title: 'Lista de Tickets', type: 'link', selected: false },
    { path: '/dashboard/business-dashboard/new-ticket', title: 'Nuevo Ticket', type: 'link', selected: false },
    { path: '/dashboard/business-dashboard/sell-list', title: 'Lista de Ventas', type: 'link', selected: false },
  ]
}
```

## Funcionalidades Específicas

### Tickets
- **Propósito**: Órdenes de despacho específicas por lote-producto
- **Generación**: Manual por usuarios autorizados (no automática)
- **Control de inventario**: Permiten sacar productos de lotes específicos
- **Estados**: Pendiente, Autorizado, Despachado, Cancelado
- **Control de despacho**: Una venta puede tener múltiples tickets
- **Distribución por lotes**: Cada ticket especifica galera/lote de origen
- **Códigos de autorización**: Sistema opcional para control adicional
- **Trazabilidad**: Registro completo de usuario, fechas y cambios
- **Validaciones**: cantidad > 0, fechas válidas, disponibilidad en lote
- **Filtros**: por estado, venta, lote, fecha
- **Acciones**: crear, editar, cambiar estado, eliminar
- **Relaciones**: con ventas, lotes, productos y usuarios
- **Estadísticas**: Análisis por estado, lote y cantidades
- **Permisos específicos**: Solo roles autorizados pueden crear/gestionar tickets

### Ventas
- **Propósito**: Registro comercial de productos vendidos al cliente
- **Estados**: Completada, Cancelada, Pendiente
- **Cálculo automático**: total = suma de subtotales de detalles
- **Subtotal**: cantidad × precioUnitario por cada producto
- **Proceso de despacho**: Requiere creación manual de tickets
- **Validación de stock**: verificar disponibilidad antes de crear venta
- **Gestión de stock**: se reduce cuando se despachan los tickets
- **Reportes**: estadísticas completas con top clientes y productos
- **Filtros**: por estado, fecha, cliente
- **Dashboard**: métricas de ventas en tiempo real
- **Detalles de venta**: múltiples productos por venta
- **Métodos de pago**: efectivo, tarjeta, transferencia, etc.
- **Relación 1:N con tickets**: Una venta puede tener múltiples tickets creados manualmente

## Consideraciones Técnicas

- Seguir el patrón de diseño del módulo de Lotes
- Usar FormBuilder para formularios reactivos
- Implementar validaciones apropiadas
- Incluir manejo de errores y loading states
- Usar Bootstrap classes para el diseño
- Implementar confirmaciones para acciones destructivas
- Todas las rutas requieren autenticación JWT
- Implementar ChangeDetectorRef para optimizar rendimiento
- Usar ToastrService con configuración completa
- Formatear fechas con timezone UTC
- Responsive design para dispositivos móviles
- Manejo de permisos según rol de usuario
- Integración con módulos de Ventas, Lotes y Productos
- Lógica de negocio: Ventas → Tickets manuales por rol autorizado
- Control manual de distribución por lotes
- Control de despacho y autorizaciones
- Validación de disponibilidad en lotes
- Trazabilidad completa de tickets
- Historial de cambios de estado
- Códigos de autorización opcionales
- Flujo de estados lógico
- Reportes y estadísticas detalladas
- Permisos específicos para creación de tickets
- Filtros avanzados por múltiples criterios
- Gestión de múltiples tickets por venta
- Seguimiento de despachos por galera/lote
- Control de inventario mediante tickets autorizados