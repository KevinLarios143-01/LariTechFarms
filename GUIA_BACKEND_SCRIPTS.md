# 📚 Guía de Scripts y Configuración del Backend

## 📋 Resumen Ejecutivo

Este documento consolida toda la información importante sobre los scripts de mantenimiento, migraciones de base de datos y configuración del backend de LariTechFarms.

**Fecha de última actualización:** 2025-02-25

---

## 🗂️ Estructura de Scripts del Backend

### Ubicación
```
laritechfarms_backend_node/scripts/
```

### Scripts Disponibles

#### 1. Scripts de Utilidades JavaScript

| Script | Propósito | Uso |
|--------|-----------|-----|
| `update-passwords.js` | Actualizar hashes de contraseñas | `node scripts/update-passwords.js` |
| `test-password.js` | Probar y verificar hashes | `node scripts/test-password.js` |
| `fix-swagger-docs.js` | Corregir documentación Swagger | `node scripts/fix-swagger-docs.js` |
| `fix-routes.js` | Ajustar archivos de rutas | `node scripts/fix-routes.js` |
| `fix-remaining-routes.js` | Corregir rutas pendientes | `node scripts/fix-remaining-routes.js` |
| `check-employees.js` | Verificar datos de empleados | `node scripts/check-employees.js` |
| `create-sample-employees.js` | Crear empleados de prueba | `node scripts/create-sample-employees.js` |

#### 2. Scripts SQL de Migración

| Script | Propósito | Aplicación |
|--------|-----------|------------|
| `Entidad_relacion.sql` | Schema completo de BD | Base de datos nueva |
| `Seeders_snake_case_complete.sql` | Datos iniciales | Después del schema |
| `create_puestos_table.sql` | Tabla de puestos | BD existente |
| `create_tenant_modules.sql` | Módulos por tenant | BD existente |
| `add_concentrado_fields.sql` | Campos de concentrado | BD existente |
| `add_motivo_anulacion_to_venta.sql` | Motivo de anulación | BD existente |

---

## 🔧 Instrucciones de Configuración

### 1. Regenerar Cliente de Prisma

**Cuándo ejecutar:**
- Después de modificar `prisma/schema.prisma`
- Después de aplicar migraciones SQL
- Después de agregar nuevas tablas o relaciones

**Comando:**
```bash
cd laritechfarms_backend_node
npx prisma generate
```

**Qué hace:**
1. Lee el archivo `prisma/schema.prisma`
2. Genera el cliente de TypeScript con tipos actualizados
3. Incluye todas las tablas y relaciones en el código

**Verificación:**
```bash
# El TypeScript debería reconocer:
# - prisma.puesto
# - prisma.cliente
# - prisma.venta
# - etc.
```

---

### 2. Aplicar Migraciones SQL

#### Para Base de Datos Nueva:
```bash
# 1. Crear schema completo
psql -U usuario -d database < scripts/Entidad_relacion.sql

# 2. Insertar datos iniciales
psql -U usuario -d database < scripts/Seeders_snake_case_complete.sql

# 3. Regenerar Prisma
npx prisma generate
```

#### Para Base de Datos Existente:
```bash
# Aplicar solo las migraciones necesarias
psql -U usuario -d database < scripts/add_motivo_anulacion_to_venta.sql
psql -U usuario -d database < scripts/create_puestos_table.sql

# Regenerar Prisma
npx prisma generate
```

---

## 📊 Actualizaciones Importantes del Schema

### 1. Campo `motivo_anulacion` en Ventas

**Fecha:** 2024-02-24

**Cambio:**
- Agregado campo `motivo_anulacion` (TEXT, nullable) a tabla `venta`
- Obligatorio cuando `estado = 'Cancelada'`

**Impacto:**
- Backend: `anularVenta()` requiere motivo
- Frontend: Solicita motivo mediante prompt
- Reportes: Separa ventas anuladas con sus motivos

**Migración:**
```sql
-- Aplicar
psql -U usuario -d database < scripts/add_motivo_anulacion_to_venta.sql

-- Verificar
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'venta' AND column_name = 'motivo_anulacion';
```

**Resultado esperado:**
```
column_name      | data_type | is_nullable
-----------------+-----------+-------------
motivo_anulacion | text      | YES
```

---

### 2. Módulo de Puestos

**Fecha:** 2024-02-24

**Cambio:**
- Nueva tabla `puestos` con relación a `empleado`
- Permite gestionar puestos de trabajo con salario base

**Estructura:**
```sql
CREATE TABLE puestos (
    id_puesto SERIAL PRIMARY KEY,
    id_tenant INTEGER NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    salario_base DECIMAL(10, 2),
    activo BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_puesto_tenant FOREIGN KEY (id_tenant) 
        REFERENCES tenant(id_tenant) ON DELETE CASCADE,
    CONSTRAINT uq_puesto_nombre_tenant UNIQUE (id_tenant, nombre)
);
```

**Endpoints Disponibles:**
- `GET /api/v1/puestos` - Lista paginada
- `GET /api/v1/puestos/estadisticas` - Estadísticas
- `GET /api/v1/puestos/:id` - Detalle con empleados
- `POST /api/v1/puestos` - Crear puesto
- `PUT /api/v1/puestos/:id` - Actualizar puesto
- `DELETE /api/v1/puestos/:id` - Eliminar puesto

**Validaciones:**
- Nombre único por tenant
- No eliminar si tiene empleados asociados
- Requiere autenticación JWT
- Operaciones de escritura requieren rol admin/gerente/superadmin

**Migración:**
```bash
# 1. Aplicar SQL
psql -U usuario -d database < scripts/create_puestos_table.sql

# 2. Regenerar Prisma
npx prisma generate

# 3. Compilar backend
npm run build
```

---

### 3. Módulos por Tenant

**Cambio:**
- Tablas `modules` y `tenant_modules`
- Control de módulos habilitados por tenant

**Migración:**
```bash
psql -U usuario -d database < scripts/create_tenant_modules.sql
```

---

## 🔍 Diferencias Prisma vs SQL

### Convención de Nombres

**Prisma (TypeScript):**
- Usa `camelCase` en el código
- Ejemplo: `motivoAnulacion`, `idTenant`, `fechaRegistro`

**SQL (Base de Datos):**
- Usa `snake_case` en las tablas
- Ejemplo: `motivo_anulacion`, `id_tenant`, `fecha_registro`

**Mapeo Automático:**
```typescript
// En Prisma schema
model Venta {
  motivoAnulacion String? @map("motivo_anulacion")
  idTenant        Int     @map("id_tenant")
  fechaRegistro   DateTime @map("fecha_registro")
}
```

---

## ⚠️ Advertencias Importantes

### 1. Antes de Ejecutar Scripts

- ✅ Revisar el contenido del script
- ✅ Tener respaldo de la base de datos
- ✅ Tener respaldo del código fuente
- ✅ Probar en ambiente de desarrollo primero

### 2. Scripts de Producción

- ❌ No modificar scripts en producción sin pruebas
- ✅ Mantener la carpeta organizada y documentada
- ✅ Eliminar scripts obsoletos

### 3. Variables de Entorno

Algunos scripts requieren:
- Conexión a base de datos
- Variables de entorno configuradas
- Permisos adecuados

---

## 📝 Checklist de Migración

### Para Agregar Nueva Tabla:

- [ ] Crear script SQL en `scripts/`
- [ ] Actualizar `Entidad_relacion.sql`
- [ ] Actualizar `prisma/schema.prisma`
- [ ] Ejecutar script SQL en BD
- [ ] Ejecutar `npx prisma generate`
- [ ] Crear controlador en `src/controllers/`
- [ ] Crear rutas en `src/routes/`
- [ ] Registrar rutas en `src/routes/index.ts`
- [ ] Actualizar documentación
- [ ] Compilar backend: `npm run build`
- [ ] Probar endpoints
- [ ] Commit y push

### Para Modificar Tabla Existente:

- [ ] Crear script de migración SQL
- [ ] Actualizar `Entidad_relacion.sql`
- [ ] Actualizar `prisma/schema.prisma`
- [ ] Ejecutar script SQL en BD
- [ ] Ejecutar `npx prisma generate`
- [ ] Actualizar controladores afectados
- [ ] Actualizar interfaces TypeScript
- [ ] Probar funcionalidad
- [ ] Actualizar documentación
- [ ] Commit y push

---

## 🚀 Comandos Rápidos

### Backend:

```bash
# Iniciar servidor de desarrollo
cd laritechfarms_backend_node
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start

# Regenerar Prisma
npx prisma generate

# Ver schema de Prisma
npx prisma studio
```

### Base de Datos:

```bash
# Conectar a PostgreSQL
psql -U usuario -d database

# Ejecutar script SQL
psql -U usuario -d database < scripts/archivo.sql

# Ver tablas
\dt

# Describir tabla
\d nombre_tabla

# Salir
\q
```

---

## 📚 Documentación Relacionada

### Backend:
- `laritechfarms_backend_node/README.md` - Documentación principal
- `laritechfarms_backend_node/API_DOCUMENTACION.md` - Documentación de API
- `laritechfarms_backend_node/docs/` - Documentación de endpoints

### Frontend:
- `LariTechFarms/LISTO_PARA_EJECUTAR.md` - Estado del proyecto
- `LariTechFarms/COMPLETADO_FINAL.md` - Resumen de implementación
- `LariTechFarms/GUIA_TESTING.md` - Guía de testing
- `LariTechFarms/INSTRUCCIONES_EJECUCION.md` - Cómo ejecutar

---

## 🔗 Integración Frontend-Backend

### Configuración de API URL:

**Desarrollo:**
```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

**Producción:**
```typescript
// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://tu-api-produccion.com/api'
};
```

### Endpoints Principales:

| Módulo | Endpoint Base | Documentación |
|--------|---------------|---------------|
| Autenticación | `/v1/auth` | `docs/AUTH_API.md` |
| Empleados | `/v1/empleados` | `docs/EMPLEADOS_API.md` |
| Usuarios | `/v1/usuarios` | `docs/USUARIOS_API.md` |
| Productos | `/v1/productos` | `docs/PRODUCTOS_API.md` |
| Inventario | `/v1/inventario` | `docs/INVENTARIO_API.md` |
| Vehículos | `/v1/vehiculos` | `docs/VEHICULOS_API.md` |
| Gastos | `/v1/gastos-operacion` | `docs/GASTOS_OPERACION_API.md` |
| Clientes | `/v1/clientes` | `docs/CLIENTES_API.md` |
| Ventas | `/v1/ventas` | `docs/VENTAS_API.md` |
| Tickets | `/v1/tickets` | `docs/TICKETS_API.md` |
| Lotes | `/v1/lotes` | `docs/LOTES_API.md` |
| Puestos | `/v1/puestos` | (Nuevo módulo) |

---

## 🐛 Solución de Problemas

### Error: "prisma.modelo is not a function"

**Causa:** Cliente de Prisma no regenerado después de cambios en schema

**Solución:**
```bash
npx prisma generate
npm run build
```

### Error: "Column does not exist"

**Causa:** Script SQL no aplicado o nombre de columna incorrecto

**Solución:**
```bash
# Verificar columnas de la tabla
psql -U usuario -d database -c "\d nombre_tabla"

# Aplicar migración faltante
psql -U usuario -d database < scripts/migracion.sql
```

### Error: "Cannot find module"

**Causa:** Dependencias no instaladas

**Solución:**
```bash
cd laritechfarms_backend_node
npm install
```

---

## 📞 Soporte

Para dudas o problemas:
1. Revisar esta documentación
2. Consultar documentación específica en `docs/`
3. Revisar el código fuente de los scripts
4. Contactar al equipo de desarrollo

---

**Última actualización:** 2025-02-25  
**Versión:** 1.0.0  
**Mantenido por:** Equipo de Desarrollo LariTechFarms
