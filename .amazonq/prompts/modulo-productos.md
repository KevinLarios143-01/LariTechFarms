# Módulo de Productos - LariTechFarms

## Instrucciones

Necesito realizar el módulo de productos completo para el proyecto LariTechFarms. Debes basarte en el patrón establecido del módulo de lotes existente.

## Requisitos

El módulo debe incluir:

1. **Servicio de Productos** (`productos.service.ts`)
   - Métodos CRUD completos (GET, POST, PUT, DELETE, PATCH)
   - Manejo de errores consistente con toast notifications
   - Integración con la API backend
   - Método para estadísticas y categorías

2. **Interfaces** (`producto.interface.ts`)
   - Interface principal de Producto
   - Interfaces para requests/responses
   - Tipos auxiliares necesarios

3. **Componente Lista** (`producto-list.component.ts`)
   - Lista de productos con tabla HTML estándar
   - Funciones de búsqueda y filtrado
   - Botones de acción (crear, ver, editar, eliminar)
   - ChangeDetectorRef para optimización
   - Toast notifications con progressBar y closeButton

4. **Componente Nuevo/Editar** (`new-producto.component.ts`)
   - Formulario reactivo para crear/editar productos
   - Validaciones apropiadas
   - Integración con ng-select para categorías
   - Manejo de precios y stock

5. **Componente Ver** (`view-producto.component.ts`)
   - Vista detallada de producto
   - Información completa del producto
   - Botones para editar y eliminar

6. **Componente Estadísticas** (`estadisticas.component.ts`)
   - Gráficos de inventario y ventas
   - Métricas de productos por categoría
   - Alertas de stock bajo

7. **Componente Principal** (`productos.component.ts`)
   - Router outlet para navegación entre componentes
   - Menú de navegación interno

## Estructura de Archivos

```
src/app/componets/dashbord/production-dashboard/productos/
├── productos.component.ts
├── productos.component.html
├── productos.component.scss
├── producto-list/
│   ├── producto-list.component.ts
│   ├── producto-list.component.html
│   └── producto-list.component.scss
├── new-producto/
│   ├── new-producto.component.ts
│   ├── new-producto.component.html
│   └── new-producto.component.scss
├── view-producto/
│   ├── view-producto.component.ts
│   ├── view-producto.component.html
│   └── view-producto.component.scss
├── estadisticas/
│   ├── estadisticas.component.ts
│   ├── estadisticas.component.html
│   └── estadisticas.component.scss
├── services/
│   └── productos.service.ts
└── interfaces/
    └── producto.interface.ts
```

## Configuración de Rutas

### 1. Agregar al production-dashboard.routes.ts
```typescript
{
  path: 'productos',
  loadComponent: () => import('./productos/productos.component').then(m => m.ProductosComponent),
  children: [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    },
    {
      path: 'list',
      loadComponent: () => import('./productos/producto-list/producto-list.component').then(m => m.ProductoListComponent)
    },
    {
      path: 'new',
      loadComponent: () => import('./productos/new-producto/new-producto.component').then(m => m.NewProductoComponent)
    },
    {
      path: 'view/:id',
      loadComponent: () => import('./productos/view-producto/view-producto.component').then(m => m.ViewProductoComponent)
    },
    {
      path: 'edit/:id',
      loadComponent: () => import('./productos/new-producto/new-producto.component').then(m => m.NewProductoComponent)
    },
    {
      path: 'estadisticas',
      loadComponent: () => import('./productos/estadisticas/estadisticas.component').then(m => m.EstadisticasComponent)
    }
  ]
}
```

### 2. Navegación Interna del Módulo
```html
<!-- productos.component.html -->
<nav class="nav nav-pills nav-fill mb-4">
  <a class="nav-link" routerLink="list" routerLinkActive="active">Lista de Productos</a>
  <a class="nav-link" routerLink="new">Nuevo Producto</a>
  <a class="nav-link" routerLink="estadisticas">Dashboard</a>
</nav>
<router-outlet></router-outlet>
```

## API Endpoints

### Base URL
```
http://localhost:3001/api/v1/productos
```

### Endpoints Disponibles

1. **GET /api/v1/productos** - Listar productos
   - Query params: page, limit, search, categoria, activo

2. **GET /api/v1/productos/:id** - Obtener producto por ID

3. **POST /api/v1/productos** - Crear nuevo producto
   - Campos requeridos: nombre, precio
   - Campos opcionales: tamanio, stock, categoria, activo

4. **PUT /api/v1/productos/:id** - Actualizar producto

5. **PATCH /api/v1/productos/:id/stock** - Actualizar stock

6. **DELETE /api/v1/productos/:id** - Eliminar producto

7. **GET /api/v1/productos/categorias** - Obtener categorías

8. **GET /api/v1/productos/estadisticas** - Estadísticas de productos

### Interfaces TypeScript

```typescript
interface Producto {
  id: number
  idTenant: number
  nombre: string
  tamanio?: string
  precio: number
  stock: number
  categoria?: string
  activo: boolean
}

interface CreateProductoDTO {
  nombre: string
  tamanio?: string
  precio: number
  stock?: number
  categoria?: string
  activo?: boolean
}

interface UpdateProductoDTO {
  nombre?: string
  tamanio?: string
  precio?: number
  categoria?: string
  activo?: boolean
}

interface UpdateStockDTO {
  stock: number
}

interface ProductosResponse {
  success: boolean
  data: {
    items: Producto[]
    pagination: {
      page: number
      limit: number
      total: number
      totalPages: number
    }
  }
}

interface ProductosStats {
  totalProductos: number
  productosActivos: number
  productosInactivos: number
  stockBajo: Array<{
    id: number
    nombre: string
    stock: number
    categoria: string
  }>
  productosPorCategoria: Array<{
    categoria: string
    _count: { id: number }
  }>
  valorTotalInventario: number
}
```

## Patrones de Implementación

### 1. Componente Lista (producto-list.component.ts)
```typescript
export class ProductoListComponent implements OnInit {
  productos: Producto[] = []
  filteredProductos: Producto[] = []
  categorias: string[] = []
  isLoading = false
  searchTerm = ''
  selectedCategoria = ''
  selectedActivo = ''
  estados = [
    { value: 'true', label: 'Activo' },
    { value: 'false', label: 'Inactivo' }
  ]

  constructor(
    private productosService: ProductosService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadProductos()
    this.loadCategorias()
  }

  loadProductos() {
    this.isLoading = true
    this.productosService.getProductos().subscribe({
      next: (response) => {
        this.productos = response.data.items
        this.filteredProductos = [...this.productos]
        this.isLoading = false
        this.cdr.detectChanges()
      },
      error: (error) => {
        this.toastr.error('Error al cargar productos', 'Error', {
          progressBar: true,
          closeButton: true
        })
        this.isLoading = false
        this.cdr.detectChanges()
      }
    })
  }

  loadCategorias() {
    this.productosService.getCategorias().subscribe({
      next: (response) => {
        this.categorias = response.data
        this.cdr.detectChanges()
      },
      error: (error) => {
        console.error('Error al cargar categorías:', error)
      }
    })
  }

  applyFilters() {
    this.filteredProductos = this.productos.filter(producto => {
      const matchesSearch = !this.searchTerm || 
        producto.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        producto.categoria?.toLowerCase().includes(this.searchTerm.toLowerCase())
      
      const matchesCategoria = !this.selectedCategoria || producto.categoria === this.selectedCategoria
      const matchesActivo = !this.selectedActivo || producto.activo.toString() === this.selectedActivo
      
      return matchesSearch && matchesCategoria && matchesActivo
    })
    this.cdr.detectChanges()
  }

  deleteProducto(id: number) {
    if (confirm('¿Está seguro de eliminar este producto?')) {
      this.productosService.deleteProducto(id).subscribe({
        next: () => {
          this.toastr.success('Producto eliminado exitosamente', 'Éxito', {
            progressBar: true,
            closeButton: true
          })
          this.loadProductos()
        },
        error: () => {
          this.toastr.error('Error al eliminar producto', 'Error', {
            progressBar: true,
            closeButton: true
          })
        }
      })
    }
  }

  getStockClass(stock: number): string {
    if (stock <= 50) return 'text-danger'
    if (stock <= 100) return 'text-warning'
    return 'text-success'
  }

  getActivoClass(activo: boolean): string {
    return activo ? 'text-success' : 'text-danger'
  }
}
```

### 2. Template HTML Estándar
```html
<!-- producto-list.component.html -->
<div class="container-fluid">
  <div class="row mb-3">
    <div class="col-md-3">
      <input type="text" class="form-control" placeholder="Buscar..." 
             [(ngModel)]="searchTerm" (input)="applyFilters()">
    </div>
    <div class="col-md-2">
      <ng-select [(ngModel)]="selectedCategoria" placeholder="Filtrar por categoría" 
                 (change)="applyFilters()" [clearable]="true">
        @for (categoria of categorias; track categoria) {
          <ng-option [value]="categoria">{{categoria}}</ng-option>
        }
      </ng-select>
    </div>
    <div class="col-md-2">
      <ng-select [(ngModel)]="selectedActivo" placeholder="Filtrar por estado" 
                 (change)="applyFilters()" [clearable]="true">
        @for (estado of estados; track estado.value) {
          <ng-option [value]="estado.value">{{estado.label}}</ng-option>
        }
      </ng-select>
    </div>
    <div class="col-md-5">
      <button class="btn btn-primary me-2" routerLink="../new">
        <i class="fas fa-plus"></i> Nuevo Producto
      </button>
      <button class="btn btn-outline-secondary" (click)="clearFilters()">
        <i class="fas fa-times"></i> Limpiar
      </button>
    </div>
  </div>

  @if (isLoading) {
    <div class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
  } @else {
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Tamaño</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          @for (producto of filteredProductos; track producto.id) {
            <tr>
              <td class="fw-bold">{{ producto.nombre }}</td>
              <td>{{ producto.tamanio || 'N/A' }}</td>
              <td class="fw-bold text-primary">${{ producto.precio.toFixed(2) }}</td>
              <td>
                <span [class]="getStockClass(producto.stock)" class="fw-bold">
                  {{ producto.stock }}
                </span>
              </td>
              <td>{{ producto.categoria || 'Sin categoría' }}</td>
              <td>
                <span [class]="getActivoClass(producto.activo)" class="fw-bold">
                  {{ producto.activo ? 'Activo' : 'Inactivo' }}
                </span>
              </td>
              <td>
                <button class="btn btn-sm btn-outline-primary me-1" 
                        [routerLink]="['../view', producto.id]">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn-sm btn-outline-warning me-1" 
                        [routerLink]="['../edit', producto.id]">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" 
                        (click)="deleteProducto(producto.id)">
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          } @empty {
            <tr>
              <td colspan="7" class="text-center text-muted">No se encontraron productos</td>
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
- Implementar filtros por categoría, estado y búsqueda de texto
- Validar precios como números decimales positivos
- Validar stock como números enteros no negativos
- Mostrar alertas visuales para stock bajo (≤50 unidades)
- Usar ng-select para selección de categorías y estados
- Implementar confirmaciones para eliminación
- Responsive design con Bootstrap
- Lazy loading de componentes
- Manejo de estados de carga
- Integración con el sistema de permisos existente
- Mostrar precios con formato de moneda
- Usar colores distintivos para estados y niveles de stock
- Permitir actualización rápida de stock desde la lista
- Calcular valor total del inventario en estadísticas