# Módulo de Control de Huevos - LariTechFarms

## Instrucciones

Necesito realizar el módulo de control de huevos completo para el proyecto LariTechFarms. Debes basarte en el patrón establecido del módulo de lotes existente.

## Requisitos

El módulo debe incluir:

1. **Servicio de Huevos** (`huevos.service.ts`)
   - Métodos CRUD completos (GET, POST, PUT, DELETE)
   - Manejo de errores consistente con toast notifications
   - Integración con la API backend
   - Método para estadísticas de producción

2. **Interfaces** (`huevo.interface.ts`)
   - Interface principal de Huevo
   - Interfaces para requests/responses
   - Tipos auxiliares necesarios

3. **Componente Lista** (`huevo-list.component.ts`)
   - Lista de registros de huevos con tabla HTML estándar
   - Funciones de búsqueda y filtrado
   - Botones de acción (crear, ver, editar, eliminar)
   - ChangeDetectorRef para optimización
   - Toast notifications con progressBar y closeButton

4. **Componente Nuevo/Editar** (`new-huevo.component.ts`)
   - Formulario reactivo para crear/editar registros
   - Validaciones apropiadas
   - Integración con ng-select para lotes
   - Manejo de fechas con formatDateForInput()

5. **Componente Ver** (`view-huevo.component.ts`)
   - Vista detallada de registro de huevos
   - Información del lote asociado
   - Botones para editar y eliminar

6. **Componente Estadísticas** (`estadisticas.component.ts`)
   - Gráficos de producción diaria/semanal/mensual
   - Métricas de rendimiento por lote
   - Comparativas de producción

7. **Componente Principal** (`huevos.component.ts`)
   - Router outlet para navegación entre componentes
   - Menú de navegación interno

## Estructura de Archivos

```
src/app/componets/dashbord/bussiness-dashboard/huevos/
├── huevos.component.ts
├── huevos.component.html
├── huevos.component.scss
├── huevo-list/
│   ├── huevo-list.component.ts
│   ├── huevo-list.component.html
│   └── huevo-list.component.scss
├── new-huevo/
│   ├── new-huevo.component.ts
│   ├── new-huevo.component.html
│   └── new-huevo.component.scss
├── view-huevo/
│   ├── view-huevo.component.ts
│   ├── view-huevo.component.html
│   └── view-huevo.component.scss
├── estadisticas/
│   ├── estadisticas.component.ts
│   ├── estadisticas.component.html
│   └── estadisticas.component.scss
├── services/
│   └── huevos.service.ts
└── interfaces/
    └── huevo.interface.ts
```

## Configuración de Rutas

### 1. Agregar al business-dashboard.routes.ts
```typescript
{
  path: 'huevos',
  loadComponent: () => import('./huevos/huevos.component').then(m => m.HuevosComponent),
  children: [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    },
    {
      path: 'list',
      loadComponent: () => import('./huevos/huevo-list/huevo-list.component').then(m => m.HuevoListComponent)
    },
    {
      path: 'new',
      loadComponent: () => import('./huevos/new-huevo/new-huevo.component').then(m => m.NewHuevoComponent)
    },
    {
      path: 'view/:id',
      loadComponent: () => import('./huevos/view-huevo/view-huevo.component').then(m => m.ViewHuevoComponent)
    },
    {
      path: 'edit/:id',
      loadComponent: () => import('./huevos/new-huevo/new-huevo.component').then(m => m.NewHuevoComponent)
    },
    {
      path: 'estadisticas',
      loadComponent: () => import('./huevos/estadisticas/estadisticas.component').then(m => m.EstadisticasComponent)
    }
  ]
}
```

### 2. Navegación Interna del Módulo
```html
<!-- huevos.component.html -->
<nav class="nav nav-pills nav-fill mb-4">
  <a class="nav-link" routerLink="list" routerLinkActive="active">Lista de Registros</a>
  <a class="nav-link" routerLink="new">Nuevo Registro</a>
  <a class="nav-link" routerLink="estadisticas">Dashboard</a>
</nav>
<router-outlet></router-outlet>
```

## API Endpoints

### Base URL
```
http://localhost:3001/api/v1/control-huevos
```

### Endpoints Disponibles

1. **GET /api/v1/control-huevos** - Listar controles de huevos
   - Query params: page, limit, idLote, fechaInicio, fechaFin, calidad

2. **GET /api/v1/control-huevos/:id** - Obtener control por ID

3. **POST /api/v1/control-huevos** - Crear nuevo control
   - Campos requeridos: idLote, fecha, cantidadHuevos
   - Campos opcionales: calidad

4. **PUT /api/v1/control-huevos/:id** - Actualizar control

5. **DELETE /api/v1/control-huevos/:id** - Eliminar control

6. **GET /api/v1/control-huevos/stats** - Estadísticas de producción
   - Query params: fechaInicio, fechaFin

### Interfaces TypeScript

```typescript
interface ControlHuevos {
  id: number
  idLote: number
  fecha: string
  cantidadHuevos: number
  calidad?: "Excelente" | "Buena" | "Regular" | "Mala"
  idUsuario?: number
  lote?: {
    id: number
    galera: string
    tipo: string
    cantidad: number
    fechaInicio: string
  }
  usuario?: {
    nombre: string
    apellido: string
  }
}

interface CreateControlHuevosDTO {
  idLote: number
  fecha: string
  cantidadHuevos: number
  calidad?: "Excelente" | "Buena" | "Regular" | "Mala"
}

interface UpdateControlHuevosDTO {
  cantidadHuevos?: number
  calidad?: "Excelente" | "Buena" | "Regular" | "Mala"
}

interface ControlHuevosResponse {
  success: boolean
  data: {
    items: ControlHuevos[]
    pagination: {
      page: number
      limit: number
      total: number
      totalPages: number
    }
  }
}

interface ControlHuevosStats {
  totalHuevos: number
  totalRegistros: number
  promedioHuevosPorDia: number
  produccionPorLote: Array<{
    idLote: number
    galera: string
    totalHuevos: number
    promedioHuevos: number
    registros: number
  }>
  produccionPorCalidad: Array<{
    calidad: string
    totalHuevos: number
    registros: number
  }>
  tendenciaSemanal: Array<{
    semana: string
    totalHuevos: number
    promedioCalidad: string
  }>
}
```

## Patrones de Implementación

### 1. Componente Lista (huevo-list.component.ts)
```typescript
export class HuevoListComponent implements OnInit {
  controles: ControlHuevos[] = []
  filteredControles: ControlHuevos[] = []
  lotes: Lote[] = []
  isLoading = false
  searchTerm = ''
  selectedLote = ''
  selectedCalidad = ''
  selectedFecha = ''
  calidades = ['Excelente', 'Buena', 'Regular', 'Mala']

  constructor(
    private controlHuevosService: ControlHuevosService,
    private lotesService: LotesService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadControles()
    this.loadLotes()
  }

  loadControles() {
    this.isLoading = true
    this.controlHuevosService.getControles().subscribe({
      next: (response) => {
        this.controles = response.data.items
        this.filteredControles = [...this.controles]
        this.isLoading = false
        this.cdr.detectChanges()
      },
      error: (error) => {
        this.toastr.error('Error al cargar controles de huevos', 'Error', {
          progressBar: true,
          closeButton: true
        })
        this.isLoading = false
        this.cdr.detectChanges()
      }
    })
  }

  applyFilters() {
    this.filteredControles = this.controles.filter(control => {
      const matchesSearch = !this.searchTerm || 
        control.lote?.galera.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        control.usuario?.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
      
      const matchesLote = !this.selectedLote || control.idLote.toString() === this.selectedLote
      const matchesCalidad = !this.selectedCalidad || control.calidad === this.selectedCalidad
      
      const matchesFecha = !this.selectedFecha || 
        new Date(control.fecha).toDateString() === new Date(this.selectedFecha).toDateString()
      
      return matchesSearch && matchesLote && matchesCalidad && matchesFecha
    })
    this.cdr.detectChanges()
  }

  deleteControl(id: number) {
    if (confirm('¿Está seguro de eliminar este control?')) {
      this.controlHuevosService.deleteControl(id).subscribe({
        next: () => {
          this.toastr.success('Control eliminado exitosamente', 'Éxito', {
            progressBar: true,
            closeButton: true
          })
          this.loadControles()
        },
        error: () => {
          this.toastr.error('Error al eliminar control', 'Error', {
            progressBar: true,
            closeButton: true
          })
        }
      })
    }
  }

  formatDateForInput(dateString: string): string {
    if (!dateString) return ''
    const date = new Date(dateString + 'T00:00:00.000Z')
    return date.toISOString().split('T')[0]
  }

  getCalidadClass(calidad?: string): string {
    switch(calidad) {
      case 'Excelente': return 'text-success'
      case 'Buena': return 'text-info'
      case 'Regular': return 'text-warning'
      case 'Mala': return 'text-danger'
      default: return 'text-muted'
    }
  }
}
```

### 2. Template HTML Estándar
```html
<!-- huevo-list.component.html -->
<div class="container-fluid">
  <div class="row mb-3">
    <div class="col-md-3">
      <input type="text" class="form-control" placeholder="Buscar..." 
             [(ngModel)]="searchTerm" (input)="applyFilters()">
    </div>
    <div class="col-md-2">
      <ng-select [(ngModel)]="selectedLote" placeholder="Filtrar por lote" 
                 (change)="applyFilters()" [clearable]="true">
        @for (lote of lotes; track lote.id) {
          <ng-option [value]="lote.id.toString()">{{lote.galera}}</ng-option>
        }
      </ng-select>
    </div>
    <div class="col-md-2">
      <ng-select [(ngModel)]="selectedCalidad" placeholder="Filtrar por calidad" 
                 (change)="applyFilters()" [clearable]="true">
        @for (calidad of calidades; track calidad) {
          <ng-option [value]="calidad">{{calidad}}</ng-option>
        }
      </ng-select>
    </div>
    <div class="col-md-2">
      <input type="date" class="form-control" [(ngModel)]="selectedFecha" 
             (change)="applyFilters()" placeholder="Filtrar por fecha">
    </div>
    <div class="col-md-3">
      <button class="btn btn-primary" routerLink="../new">
        <i class="fas fa-plus"></i> Nuevo Control
      </button>
    </div>
  </div>

  @if (isLoading) {
    <div class="text-center">
      <div class="spinner-border" role="status"></div>
    </div>
  } @else {
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>Fecha</th>
            <th>Lote/Galera</th>
            <th>Cantidad Huevos</th>
            <th>Calidad</th>
            <th>Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          @for (control of filteredControles; track control.id) {
            <tr>
              <td>{{ control.fecha | date: 'dd/MM/yyyy':'UTC' }}</td>
              <td>{{ control.lote?.galera }} - {{ control.lote?.tipo }}</td>
              <td class="fw-bold">{{ control.cantidadHuevos }}</td>
              <td>
                <span [class]="getCalidadClass(control.calidad)" class="fw-bold">
                  {{ control.calidad || 'Sin especificar' }}
                </span>
              </td>
              <td>{{ control.usuario?.nombre }} {{ control.usuario?.apellido }}</td>
              <td>
                <button class="btn btn-sm btn-outline-primary me-1" 
                        [routerLink]="['../view', control.id]">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn-sm btn-outline-warning me-1" 
                        [routerLink]="['../edit', control.id]">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" 
                        (click)="deleteControl(control.id)">
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }
</div>
```

## Consideraciones Técnicas

- Seguir exactamente el patrón del módulo de lotes
- Usar ChangeDetectorRef para optimización de rendimiento
- Implementar toast notifications con progressBar y closeButton
- Usar formatDateForInput() para manejo de fechas
- Implementar filtros por lote, calidad, fecha y búsqueda de texto
- Solo permitir registros para lotes de tipo "Ponedoras"
- Validar que cantidadHuevos sea un número entero positivo
- Mostrar estadísticas de producción con gráficos y tendencias
- Usar ng-select para selección de lotes y calidad
- Implementar confirmaciones para eliminación
- Responsive design con Bootstrap
- Lazy loading de componentes
- Manejo de estados de carga
- Integración con el sistema de permisos existente
- Mostrar información del usuario que registró el control
- Permitir múltiples registros por día (mañana/tarde)
- Calcular promedios y tendencias automáticamente
- Usar colores distintivos para cada nivel de calidad