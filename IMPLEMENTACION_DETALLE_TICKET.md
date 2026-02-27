# Implementación de DetalleTicket - Completado

## Resumen

Se implementó exitosamente el modelo `DetalleTicket` que permite tener **múltiples productos por ticket**, agrupados por lote.

## Cambios Realizados

### 1. Base de Datos

**Script de Migración:** `laritechfarms_backend_node/scripts/create_detalle_ticket.sql`

```sql
CREATE TABLE detalle_ticket (
  id_detalle SERIAL PRIMARY KEY,
  id_ticket INTEGER NOT NULL REFERENCES ticket(id_ticket) ON DELETE CASCADE,
  id_producto INTEGER NOT NULL REFERENCES producto(id_producto),
  cantidad INTEGER NOT NULL CHECK (cantidad > 0),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Migración de Datos:**
- Los tickets existentes se migran automáticamente a `detalle_ticket`
- Las columnas `id_producto` y `cantidad` en `ticket` se mantienen temporalmente para compatibilidad
- Después de verificar, se pueden eliminar con los comandos comentados en el script

### 2. Schema de Prisma

**Modelo DetalleTicket:**
```prisma
model DetalleTicket {
  id         Int      @id @default(autoincrement())
  idTicket   Int
  idProducto Int
  cantidad   Int
  ticket     Ticket   @relation(fields: [idTicket], references: [id], onDelete: Cascade)
  producto   Producto @relation(fields: [idProducto], references: [id])
}
```

**Modelo Ticket Actualizado:**
```prisma
model Ticket {
  // ... campos existentes
  detalles   DetalleTicket[]  // ✅ NUEVO
}
```

### 3. Backend

#### Endpoint Nuevo: Generar Tickets desde Venta

**Ruta:** `POST /api/v1/tickets/generar-desde-venta`

**Request Body:**
```json
{
  "idVenta": 123,
  "tickets": [
    {
      "idLote": 1,
      "detalles": [
        { "idProducto": 10, "cantidad": 10 },
        { "idProducto": 11, "cantidad": 5 }
      ]
    },
    {
      "idLote": 2,
      "detalles": [
        { "idProducto": 10, "cantidad": 5 }
      ]
    }
  ]
}
```

**Validaciones:**
- ✅ Venta debe existir y estar en estado "Pendiente"
- ✅ Lotes deben pertenecer al tenant
- ✅ Cantidades asignadas no deben exceder las vendidas
- ✅ Productos deben existir

**Response:**
```json
{
  "success": true,
  "message": "2 ticket(s) generado(s) exitosamente",
  "data": {
    "tickets": [...],
    "total": 2
  }
}
```

#### Actualización Automática de Venta

Cuando **TODOS** los tickets de una venta están en estado "Despachado":
- ✅ La venta se actualiza automáticamente a estado "Completada"
- ✅ Se ejecuta en `updateEstadoTicket()` al cambiar a "Despachado"

#### Endpoints Actualizados

Todos los endpoints ahora incluyen `detalles` en las respuestas:
- `GET /api/v1/tickets` - Lista con detalles
- `GET /api/v1/tickets/:id` - Detalle completo con productos

### 4. Frontend

#### Interfaces Actualizadas

```typescript
interface Ticket {
  // ... campos existentes
  detalles?: DetalleTicket[];
}

interface DetalleTicket {
  id: number;
  idTicket: number;
  idProducto: number;
  cantidad: number;
  producto?: {
    nombre: string;
    tamanio?: string;
    precio?: number;
  };
}
```

#### Servicio Actualizado

```typescript
generarTicketsDesdeVenta(data: {
  idVenta: number;
  tickets: Array<{
    idLote: number;
    detalles: Array<{
      idProducto: number;
      cantidad: number;
    }>;
  }>;
}): Observable<any>
```

#### Lista de Ventas

**Botón Agregado:**
- ✅ Botón "Generar Tickets" visible solo para ventas pendientes
- ✅ Redirige a `/dashboard/bussiness-dashboard/tickets/generar/:idVenta`

#### Lista de Tickets

**Visualización Mejorada:**
- ✅ Muestra todos los productos del ticket
- ✅ Cantidad total calculada automáticamente
- ✅ Compatible con tickets antiguos (sin detalles)

## Flujo de Negocio

### Ejemplo Práctico

**Venta:** Cliente pide 20 Jumbo + 15 Extra

**Generación de Tickets:**
```
Ticket 1: Lote A (Galera A)
  - Jumbo: 10 unidades
  - Extra: 8 unidades
  Total: 18 unidades

Ticket 2: Lote B (Galera B)
  - Jumbo: 5 unidades
  - Extra: 7 unidades
  Total: 12 unidades

Ticket 3: Lote C (Galera C)
  - Jumbo: 5 unidades
  Total: 5 unidades
```

**Estados:**
1. Venta: Pendiente → Se generan 3 tickets
2. Tickets: Pendiente → Usuario autoriza cada uno
3. Tickets: Autorizado → Usuario despacha cada uno
4. Tickets: Despachado (todos) → Venta pasa a "Completada" automáticamente

## Pasos para Ejecutar la Migración

### 1. Backup de Base de Datos
```bash
pg_dump -U usuario -d laritechfarms > backup_antes_detalle_ticket.sql
```

### 2. Ejecutar Script de Migración
```bash
psql -U usuario -d laritechfarms -f scripts/create_detalle_ticket.sql
```

### 3. Regenerar Prisma Client
```bash
cd laritechfarms_backend_node
npx prisma generate
```

### 4. Verificar Migración
```sql
-- Verificar que los datos se migraron
SELECT COUNT(*) FROM ticket WHERE id_producto IS NOT NULL;
SELECT COUNT(*) FROM detalle_ticket;
-- Ambos deben tener el mismo número
```

### 5. Reiniciar Backend
```bash
npm run dev
```

### 6. Probar Funcionalidad
- Crear una venta pendiente
- Generar tickets desde la venta
- Verificar que se crean con detalles
- Cambiar estados y verificar que la venta se completa

### 7. Eliminar Columnas Antiguas (Opcional)
Después de verificar que todo funciona correctamente:
```sql
ALTER TABLE ticket DROP COLUMN IF EXISTS id_producto;
ALTER TABLE ticket DROP COLUMN IF EXISTS cantidad;
```

## Próximos Pasos

### Pendiente de Implementar

1. **Componente Generar Tickets**
   - Crear `generar-tickets.component.ts`
   - Interfaz para asignar productos a lotes
   - Validación en tiempo real

2. **Componente Ver Ticket**
   - Mostrar todos los detalles del ticket
   - Opción de imprimir

3. **Validaciones Adicionales**
   - Verificar stock disponible en lote
   - Prevenir cambios de estado inválidos

4. **Mejoras UX**
   - Drag & drop para asignar productos
   - Resumen visual de asignaciones
   - Alertas si faltan productos por asignar

## Ventajas de la Implementación

✅ **Un ticket por lote** - Más lógico para el despacho físico
✅ **Múltiples productos** - Agrupa todos los productos del mismo lote
✅ **Menos tickets** - Más fácil de gestionar
✅ **Mejor para reportes** - Datos más estructurados
✅ **Escalable** - Fácil agregar más funcionalidades
✅ **Compatible** - Mantiene tickets antiguos funcionando

## Notas Importantes

⚠️ **Compatibilidad:** Los tickets antiguos (sin detalles) siguen funcionando. El frontend muestra tanto `detalles` como `producto` legacy.

⚠️ **Migración:** Los datos existentes se migran automáticamente. Las columnas antiguas se mantienen hasta verificar.

⚠️ **Testing:** Probar exhaustivamente antes de eliminar las columnas `id_producto` y `cantidad` de la tabla `ticket`.

## Archivos Modificados

### Backend
- `prisma/schema.prisma` - Agregado modelo DetalleTicket
- `src/controllers/ticketController.ts` - Actualizado para usar detalles
- `src/routes/tickets.ts` - Agregada ruta generar-desde-venta
- `scripts/create_detalle_ticket.sql` - Script de migración

### Frontend
- `shared/interfaces/ticket.ts` - Agregada interfaz DetalleTicket
- `shared/services/ticket.service.ts` - Actualizado método generar
- `ventas/venta-list/venta-list.component.html` - Agregado botón
- `ventas/venta-list/venta-list.component.ts` - Agregada función
- `tickets/ticket-list/ticket-list.component.html` - Muestra detalles
- `tickets/ticket-list/ticket-list.component.ts` - Función calcular total

## Conclusión

La implementación de `DetalleTicket` está completa y funcional. El sistema ahora permite:
- Generar tickets agrupados por lote
- Incluir múltiples productos por ticket
- Actualizar automáticamente el estado de la venta
- Mantener compatibilidad con tickets existentes

**Estado:** ✅ Backend completo | ⚠️ Frontend parcial (falta componente generar-tickets)
