# Módulo de Lotes - LariTechFarms

## Instrucciones

Necesito realizar el módulo de lotes completo para el proyecto LariTechFarms. Debes basarte en el estándar de diseño del módulo de Clientes existente.

## Requisitos

El módulo debe incluir:

1. **Servicio de Lotes** (`lotes.service.ts`)
   - Métodos CRUD completos (GET, POST, PUT, DELETE)
   - Manejo de errores consistente
   - Integración con la API backend

2. **Interfaces** (`lote.interface.ts`)
   - Interface principal de Lote
   - Interfaces para requests/responses
   - Tipos auxiliares necesarios

3. **Componente Principal** (`lotes.component.ts`)
   - Lista de lotes con paginación
   - Funciones de búsqueda y filtrado
   - Botones de acción (crear, editar, eliminar)
   - Manejo de estados de carga

4. **Template HTML** (`lotes.component.html`)
   - Tabla responsive con datos de lotes
   - Formularios modales para crear/editar
   - Botones de acción con confirmaciones
   - Mensajes de estado y validaciones

5. **Estilos SCSS** (`lotes.component.scss`)
   - Estilos consistentes con el diseño del proyecto
   - Responsive design
   - Estados hover y active

## Estructura de Archivos

```
src/app/components/dashboard/business-dashboard/lotes/
├── lotes.component.ts
├── lotes.component.html
├── lotes.component.scss
├── lotes.module.ts
├── lotes-routing.module.ts
├── services/
│   └── lotes.service.ts
└── interfaces/
    └── lote.interface.ts
```

## Configuración de Rutas

### 1. Agregar al Navbar
Agregar la opción "Lotes" al menú de navegación principal:

```typescript
// En el componente del navbar
{
  title: 'Lotes',
  icon: 'fas fa-layer-group',
  route: '/dashboard/lotes',
  permissions: ['superadmin', 'admin', 'gerente', 'supervisor']
}
```

### 2. Configurar Rutas del Módulo
Crear las rutas específicas para el módulo de lotes:

```typescript
// lotes-routing.module.ts
const routes: Routes = [
  {
    path: '',
    component: LotesComponent,
    data: { 
      title: 'Gestión de Lotes',
      breadcrumb: 'Lotes'
    }
  }
];
```

### 3. Integración con Dashboard Principal
Agregar la ruta al routing principal del dashboard:

```typescript
// business-dashboard-routing.module.ts
{
  path: 'lotes',
  loadChildren: () => import('./lotes/lotes.module').then(m => m.LotesModule),
  canActivate: [AuthGuard],
  data: { 
    roles: ['superadmin', 'admin', 'gerente', 'supervisor']
  }
}
```

## Módulo Angular

Crear un módulo independiente para los lotes:

```typescript
// lotes.module.ts
@NgModule({
  declarations: [
    LotesComponent
  ],
  imports: [
    CommonModule,
    LotesRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    SharedModule
  ],
  providers: [
    LotesService
  ]
})
export class LotesModule { }
```

## API Endpoints

### Base URL
```
http://localhost:3001/api/v1/lotes
```

### Endpoints Disponibles

1. **GET /api/v1/lotes** - Listar lotes con paginación y filtros
   - Query params: page, limit, estado, tipo, search

2. **GET /api/v1/lotes/:id** - Obtener lote por ID

3. **POST /api/v1/lotes** - Crear nuevo lote
   - Campos requeridos: tipo, fechaInicio, cantidad, galera
   - Campos opcionales: fechaFin, observaciones

4. **PUT /api/v1/lotes/:id** - Actualizar lote completo

5. **PATCH /api/v1/lotes/:id/cantidad** - Actualizar solo cantidad

6. **DELETE /api/v1/lotes/:id** - Eliminar lote

7. **GET /api/v1/lotes/stats** - Estadísticas de lotes

### Interfaces TypeScript

```typescript
interface Lote {
  id: number
  idTenant: number
  tipo: "Ponedoras" | "Engorde"
  fechaInicio: string
  fechaFin?: string | null
  cantidad: number
  galera: string
  estado: "Activo" | "Inactivo" | "Desalojado"
  observaciones?: string | null
  _count?: {
    movAvesLote: number
    tickets: number
  }
}

interface CreateLoteDTO {
  tipo: "Ponedoras" | "Engorde"
  fechaInicio: string
  fechaFin?: string
  cantidad: number
  galera: string
  observaciones?: string
}

interface UpdateLoteDTO {
  tipo?: "Ponedoras" | "Engorde"
  fechaInicio?: string
  fechaFin?: string
  cantidad?: number
  galera?: string
  estado?: "Activo" | "Inactivo" | "Desalojado"
  observaciones?: string
}

interface LotesResponse {
  success: boolean
  data: {
    items: Lote[]
    pagination: {
      page: number
      limit: number
      total: number
      totalPages: number
    }
  }
}
```

## Consideraciones Técnicas

- Seguir el patrón de diseño del módulo de Clientes
- Usar FormBuilder para formularios reactivos
- Implementar validaciones apropiadas
- Incluir manejo de errores y loading states
- Usar Bootstrap classes para el diseño
- Implementar confirmaciones para acciones destructivas
- Todas las rutas requieren autenticación JWT
- Implementar filtros por estado, tipo y búsqueda
- Mostrar contadores de movimientos y tickets asociados
- Validar fechas y cantidades en formularios
- Lazy loading del módulo para optimizar rendimiento
- Breadcrumbs para navegación clara
- Icono representativo en el navbar (fas fa-layer-group)
- Responsive design para dispositivos móviles
- Manejo de permisos según rol de usuario