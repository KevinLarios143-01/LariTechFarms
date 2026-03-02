# 🔧 Troubleshooting - Selects Vacíos

**Fecha:** 2 de Marzo de 2026

---

## 🎯 Problema: Select de Productos Vacío

Si el select de "Tipo de Huevo" está vacío, sigue estos pasos:

---

## ✅ Paso 1: Verificar en la Consola del Navegador

1. Abre la consola del navegador (F12)
2. Ve a la pestaña "Console"
3. Busca estos mensajes:

```
🔍 Cargando productos...
✅ Respuesta de productos: {...}
📦 Productos extraídos: [...]
✅ Productos activos filtrados: [...]
```

### Posibles Escenarios:

#### A) Si ves: "No hay productos activos"
**Problema:** No has creado productos todavía

**Solución:**
1. Ve a: `Producción Dashboard → Productos → Nuevo Producto`
2. Crea al menos un producto:
   - Nombre: Jumbo
   - Tamaño: XL
   - Precio: 0.50
   - Estado: Activo

#### B) Si ves un error 404 o 500
**Problema:** El backend no está respondiendo

**Solución:**
1. Verifica que el backend esté corriendo
2. Verifica la URL del API en `environment.ts`
3. Revisa los logs del backend

#### C) Si ves: "Productos activos filtrados: []"
**Problema:** Hay productos pero todos están inactivos

**Solución:**
1. Ve a: `Producción Dashboard → Productos → Lista`
2. Activa al menos un producto

---

## ✅ Paso 2: Verificar que el Backend Esté Corriendo

### En el backend (laritechfarms_backend_node):

```bash
cd laritechfarms_backend_node
npm run dev
```

Deberías ver:
```
Server running on port 3000
Database connected
```

---

## ✅ Paso 3: Verificar la Base de Datos

### Verificar que existan productos:

```sql
SELECT * FROM producto WHERE estado = 'Activo';
```

Si no hay productos, créalos desde el frontend o inserta manualmente:

```sql
INSERT INTO producto (nombre, tamanio, precio, estado, "idTenant")
VALUES 
  ('Jumbo', 'XL', 0.50, 'Activo', 1),
  ('Extra Grande', 'L', 0.45, 'Activo', 1),
  ('Grande', 'M', 0.40, 'Activo', 1),
  ('Mediano', 'S', 0.35, 'Activo', 1),
  ('Pequeño', 'XS', 0.30, 'Activo', 1);
```

---

## ✅ Paso 4: Verificar el Servicio de Productos

### Archivo: `src/app/shared/services/producto.service.ts`

Verifica que el método `getProductos()` esté correcto:

```typescript
getProductos(params?: any): Observable<any> {
  let httpParams = new HttpParams();
  if (params) {
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== null) {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
  }
  return this.http.get<any>(`${this.apiUrl}/producto`, { params: httpParams });
}
```

---

## ✅ Paso 5: Verificar la URL del API

### Archivo: `src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api' // ← Verifica esta URL
};
```

---

## 🔍 Debugging Adicional

### Ver la respuesta completa del API:

Abre la consola del navegador (F12) y ve a la pestaña "Network":

1. Recarga la página
2. Busca la petición a `/api/producto`
3. Haz clic en ella
4. Ve a la pestaña "Response"
5. Verás la respuesta completa del servidor

### Estructura esperada de la respuesta:

```json
{
  "data": {
    "data": [
      {
        "id": 1,
        "nombre": "Jumbo",
        "tamanio": "XL",
        "precio": 0.50,
        "estado": "Activo"
      }
    ],
    "pagination": {
      "total": 1,
      "page": 1,
      "limit": 10
    }
  }
}
```

---

## 🎯 Checklist Rápido

- [ ] Backend está corriendo
- [ ] Base de datos tiene productos activos
- [ ] URL del API es correcta
- [ ] No hay errores en la consola del navegador
- [ ] La petición HTTP retorna 200 OK
- [ ] La respuesta tiene la estructura correcta

---

## 🚨 Errores Comunes

### Error 1: "Cannot read properties of undefined"
**Causa:** La respuesta del backend tiene una estructura diferente

**Solución:** Revisa la estructura de la respuesta en Network tab

### Error 2: "CORS error"
**Causa:** El backend no permite peticiones desde el frontend

**Solución:** Verifica la configuración de CORS en el backend

### Error 3: "404 Not Found"
**Causa:** La ruta del API es incorrecta

**Solución:** Verifica que la ruta sea `/api/producto` y no `/api/productos`

### Error 4: Select vacío pero no hay errores
**Causa:** Todos los productos están inactivos

**Solución:** Activa al menos un producto desde la lista

---

## 📞 Pasos para Reportar el Problema

Si después de seguir todos los pasos el problema persiste, proporciona:

1. **Captura de pantalla** de la consola del navegador (F12 → Console)
2. **Captura de pantalla** de Network tab mostrando la petición a `/api/producto`
3. **Respuesta completa** del API (copia el JSON de la pestaña Response)
4. **Versión del navegador** que estás usando
5. **¿El backend está corriendo?** (Sí/No)
6. **¿Hay productos en la base de datos?** (Sí/No)

---

## ✅ Solución Rápida

Si quieres probar rápidamente, ejecuta esto en la consola del navegador:

```javascript
// Ver si hay productos cargados
console.log('Productos:', document.querySelector('select[formControlName="idProducto"]'));

// Ver las opciones del select
const select = document.querySelector('select[formControlName="idProducto"]');
console.log('Opciones:', select?.options.length);
```

Si `options.length` es 1, significa que solo está la opción "Seleccione un tipo" y no hay productos.

---

**Última actualización:** 2 de Marzo de 2026
