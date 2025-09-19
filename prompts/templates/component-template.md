# Template: Crear Componente Angular

## Prompt Base:
```
Crea un componente Angular siguiendo el estándar de diseño del proyecto LariTechFarms:

**Nombre:** ticket-list
**Ubicación:** src/app/componets/dashbord/bussiness-dashboard/
**Funcionalidad:** Debe mostrar los tickets que hay ingresados en el sistema.

**Requisitos de Diseño:**
- Revisar Client-list para ver como lo tengo diseñado



**Archivos a generar:**
- component.ts (standalone)
- component.html
- component.scss
```

**Para los microservicios y las interfaces:**
### Variables de entorno
@baseUrl = http://localhost:3001/api/v1

### Peticiones para tickets

# Obtener todos los tickets
GET {{baseUrl}}/tickets
Authorization: Bearer {{token}}

# Obtener ticket por ID
GET {{baseUrl}}/tickets/1
Authorization: Bearer {{token}}

# Crear ticket
POST {{baseUrl}}/tickets
Authorization: Bearer {{token}}
Content-Type: application/json

{
  "idVenta": 1,
  "idLote": 1,
  "idProducto": 1,
  "fecha": "2025-09-04",
  "cantidad": 100,
  "estado": "Pendiente",
  "codigoAutorizacion": "TK-2025-001"
}

###

# Actualizar ticket
PUT {{baseUrl}}/tickets/1
Authorization: Bearer {{token}}
Content-Type: application/json

{
  "estado": "Completado",
  "codigoAutorizacion": "TK-2025-001-COMP"
}

###

# Eliminar ticket
DELETE {{baseUrl}}/tickets/1
Authorization: Bearer {{token}}


