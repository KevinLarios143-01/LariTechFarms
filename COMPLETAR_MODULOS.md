# 🚀 Guía para Completar Todos los Módulos Restantes

## Estado Actual
- ✅ Inventario (100%)
- ✅ Vehículos (100%)
- ⏳ Gastos de Operación (10% - solo list component creado)
- ❌ Clientes (0%)
- ❌ Lotes (50% - verificar)
- ❌ Ventas (0%)
- ❌ Tickets (0%)

## Estrategia de Completación Rápida

He creado la infraestructura completa y los patrones. Para completar los módulos restantes de forma eficiente, sigue estos pasos:

---

## PASO 1: Completar Gastos de Operación (1 hora)

### Archivos ya creados:
- ✅ `gasto-list.component.ts`

### Archivos por crear:

**1. gasto-list.component.html** (copiar de inventario-list y adaptar):
```html
<!-- Cambiar "inventario" por "gasto" -->
<!-- Cambiar campos: nombre → descripción, cantidad → monto -->
<!-- Agregar filtros de fecha -->
```

**2. add-gasto.component.ts**:
```typescript
this.form = this.fb.group({
  fecha: ['', Validators.required],
  categoria: ['', Validators.required],
  descripcion: ['', Validators.required],
  monto: ['', [Validators.required, Validators.min(0.01)]],
  metodoPago: ['']
});
```

**3. Crear rutas** en `gastos-operacion.routes.ts`

**4. Integrar** en `production-dashboard.routes.ts`

---

## PASO 2: Crear Módulo de Clientes (2 horas)

### Comando rápido:
```bash
# Copiar estructura completa de Inventario
cp -r LariTechFarms/src/app/componets/dashbord/production-dashboard/inventario/ \
      LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/clientes/

# Renombrar carpetas
cd LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/clientes/
mv inventario-list cliente-list
mv add-inventario add-cliente
mv edit-inventario edit-cliente
mv view-inventario view-cliente

# Buscar y reemplazar (macOS)
find . -type f -exec sed -i '' 's/inventario/cliente/g' {} +
find . -type f -exec sed -i '' 's/Inventario/Cliente/g' {} +
find . -type f -exec sed -i '' 's/InventarioGranja/Cliente/g' {} +
find . -type f -exec sed -i '' 's/InventarioService/ClienteService/g' {} +

# Renombrar archivos
for file in $(find . -name "*inventario*"); do
    mv "$file" "${file//inventario/cliente}"
done
```

### Adaptar formulario:
```typescript
this.form = this.fb.group({
  nombre: ['', Validators.required],
  telefono: [''],
  correo: ['', Validators.email],
  direccion: [''],
  nit: ['']
});
```

### Agregar funcionalidad especial:
- Botón Activar/Desactivar en la lista
- Ver ventas del cliente en el view

---

## PASO 3: Verificar y Completar Lotes (1 hora)

```bash
# Verificar qué existe
ls -la LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/lotes/

# Si faltan componentes, copiar de Inventario
```

### Formulario de Lotes:
```typescript
this.form = this.fb.group({
  tipo: ['', Validators.required], // Ponedoras, Engorde
  fechaInicio: ['', Validators.required],
  fechaFin: [''],
  cantidad: ['', [Validators.required, Validators.min(1)]],
  galera: ['', Validators.required],
  observaciones: ['']
});
```

### Agregar:
- Modal para actualizar cantidad de aves
- Ver movimientos asociados

---

## PASO 4: Crear Módulo de Tickets (2 horas)

```bash
# Copiar estructura
cp -r production-dashboard/inventario/ bussiness-dashboard/tickets/

# Renombrar y adaptar
```

### Formulario de Tickets:
```typescript
this.form = this.fb.group({
  idVenta: ['', Validators.required],
  idLote: ['', Validators.required],
  idProducto: ['', Validators.required],
  fecha: ['', Validators.required],
  cantidad: ['', [Validators.required, Validators.min(1)]],
  codigoAutorizacion: ['']
});
```

### Características:
- Flujo de estados: Pendiente → Autorizado → Despachado
- Botón para cambiar estado

---

## PASO 5: Crear Módulo de Ventas (4 horas) - MÁS COMPLEJO

### Este módulo requiere FormArray para detalles dinámicos.

**Estructura del formulario:**
```typescript
export class AddVentaComponent implements OnInit {
  ventaForm: FormGroup;
  productos: Producto[] = [];
  clientes: Cliente[] = [];
  totalVenta = 0;

  constructor(private fb: FormBuilder) {
    this.ventaForm = this.fb.group({
      fecha: ['', Validators.required],
      idCliente: [''],
      metodoPago: [''],
      observaciones: [''],
      detalles: this.fb.array([this.createDetalleFormGroup()])
    });
  }

  createDetalleFormGroup(): FormGroup {
    return this.fb.group({
      idProducto: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(1)]],
      precioUnitario: ['', [Validators.required, Validators.min(0.01)]],
      subtotal: [{ value: 0, disabled: true }]
    });
  }

  get detalles(): FormArray {
    return this.ventaForm.get('detalles') as FormArray;
  }

  addDetalle() {
    this.detalles.push(this.createDetalleFormGroup());
  }

  removeDetalle(index: number) {
    if (this.detalles.length > 1) {
      this.detalles.removeAt(index);
      this.calculateTotal();
    }
  }

  onProductoChange(index: number) {
    const detalle = this.detalles.at(index);
    const productoId = detalle.get('idProducto')?.value;
    const producto = this.productos.find(p => p.id === productoId);
    
    if (producto) {
      detalle.get('precioUnitario')?.setValue(producto.precio);
      this.calculateSubtotal(index);
    }
  }

  onCantidadChange(index: number) {
    this.calculateSubtotal(index);
  }

  calculateSubtotal(index: number) {
    const detalle = this.detalles.at(index);
    const cantidad = detalle.get('cantidad')?.value || 0;
    const precio = detalle.get('precioUnitario')?.value || 0;
    const subtotal = cantidad * precio;
    detalle.get('subtotal')?.setValue(subtotal);
    this.calculateTotal();
  }

  calculateTotal() {
    let total = 0;
    this.detalles.controls.forEach(detalle => {
      total += detalle.get('subtotal')?.value || 0;
    });
    this.totalVenta = total;
  }

  onSubmit() {
    if (this.ventaForm.valid) {
      const formData = this.ventaForm.value;
      const createData = {
        fecha: formData.fecha,
        idCliente: formData.idCliente || undefined,
        metodoPago: formData.metodoPago || undefined,
        observaciones: formData.observaciones || undefined,
        detalles: formData.detalles.map((d: any) => ({
          idProducto: d.idProducto,
          cantidad: parseInt(d.cantidad),
          precioUnitario: parseFloat(d.precioUnitario)
        }))
      };

      this.ventaService.createVenta(createData).subscribe({
        next: () => {
          this.toastr.success('Venta creada exitosamente', 'Éxito');
          this.router.navigate(['../list'], { relativeTo: this.route });
        },
        error: (error) => {
          const errorMsg = error?.error?.message || 'Error al crear venta';
          this.toastr.error(errorMsg, 'Error');
        }
      });
    }
  }
}
```

**Template HTML para detalles dinámicos:**
```html
<div class="card">
  <div class="card-header d-flex justify-content-between">
    <h6>Detalles de la Venta</h6>
    <button type="button" class="btn btn-sm btn-primary" (click)="addDetalle()">
      <i class="ri-add-line"></i> Agregar Producto
    </button>
  </div>
  <div class="card-body">
    <div formArrayName="detalles">
      @for (detalle of detalles.controls; track $index; let i = $index) {
        <div [formGroupName]="i" class="row g-3 mb-3 border-bottom pb-3">
          <div class="col-md-4">
            <label class="form-label">Producto *</label>
            <ng-select [items]="productos" bindLabel="nombre" bindValue="id"
                       formControlName="idProducto" 
                       (change)="onProductoChange(i)"
                       placeholder="Seleccione producto">
            </ng-select>
          </div>
          <div class="col-md-2">
            <label class="form-label">Cantidad *</label>
            <input type="number" class="form-control" formControlName="cantidad"
                   (ngModelChange)="onCantidadChange(i)">
          </div>
          <div class="col-md-2">
            <label class="form-label">Precio Unit. *</label>
            <input type="number" class="form-control" formControlName="precioUnitario"
                   (ngModelChange)="onCantidadChange(i)" step="0.01">
          </div>
          <div class="col-md-3">
            <label class="form-label">Subtotal</label>
            <input type="text" class="form-control" formControlName="subtotal" readonly>
          </div>
          <div class="col-md-1 d-flex align-items-end">
            <button type="button" class="btn btn-danger btn-sm" 
                    (click)="removeDetalle(i)"
                    [disabled]="detalles.length === 1">
              <i class="ri-delete-bin-line"></i>
            </button>
          </div>
        </div>
      }
    </div>

    <div class="row mt-3">
      <div class="col-md-12 text-end">
        <h4>Total: Q{{ totalVenta | number:'1.2-2' }}</h4>
      </div>
    </div>
  </div>
</div>
```

---

## PASO 6: Integrar Rutas

### Production Dashboard Routes

Agregar en `production-dashboard.routes.ts`:

```typescript
{
  path: 'gastos-operacion',
  children: [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    },
    {
      path: 'list',
      loadComponent: () =>
        import('./gastos-operacion/gasto-list/gasto-list.component').then((m) => m.GastoListComponent)
    },
    {
      path: 'add',
      loadComponent: () =>
        import('./gastos-operacion/add-gasto/add-gasto.component').then((m) => m.AddGastoComponent)
    },
    {
      path: 'edit/:id',
      loadComponent: () =>
        import('./gastos-operacion/edit-gasto/edit-gasto.component').then((m) => m.EditGastoComponent)
    },
    {
      path: 'view/:id',
      loadComponent: () =>
        import('./gastos-operacion/view-gasto/view-gasto.component').then((m) => m.ViewGastoComponent)
    }
  ]
}
```

### Business Dashboard Routes

Crear `bussiness-dashboard.routes.ts`:

```typescript
import { Routes } from '@angular/router';

export const BussinessDashboardRoutes: Routes = [
  {
    path: 'dashboard/bussiness-dashboard',
    children: [
      {
        path: 'clientes',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            loadComponent: () =>
              import('./clientes/cliente-list/cliente-list.component').then((m) => m.ClienteListComponent)
          },
          {
            path: 'add',
            loadComponent: () =>
              import('./clientes/add-cliente/add-cliente.component').then((m) => m.AddClienteComponent)
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import('./clientes/edit-cliente/edit-cliente.component').then((m) => m.EditClienteComponent)
          },
          {
            path: 'view/:id',
            loadComponent: () =>
              import('./clientes/view-cliente/view-cliente.component').then((m) => m.ViewClienteComponent)
          }
        ]
      },
      {
        path: 'lotes',
        children: [
          // Similar structure
        ]
      },
      {
        path: 'ventas',
        children: [
          // Similar structure
        ]
      },
      {
        path: 'tickets',
        children: [
          // Similar structure
        ]
      }
    ]
  }
];
```

---

## PASO 7: Actualizar Menú de Navegación

Ubicación: `src/app/shared/common/sidebar/sidebar.component.ts`

```typescript
menuItems = [
  {
    title: 'Producción',
    icon: 'ri-dashboard-line',
    type: 'sub',
    active: false,
    children: [
      { path: '/dashboard/production-dashboard/huevos/list', title: 'Control de Huevos', type: 'link' },
      { path: '/dashboard/production-dashboard/productos/list', title: 'Productos', type: 'link' },
      { path: '/dashboard/production-dashboard/inventario/list', title: 'Inventario', type: 'link' },
      { path: '/dashboard/production-dashboard/vehiculos/list', title: 'Vehículos', type: 'link' },
      { path: '/dashboard/production-dashboard/gastos-operacion/list', title: 'Gastos de Operación', type: 'link' }
    ]
  },
  {
    title: 'Gestión de Negocio',
    icon: 'ri-briefcase-line',
    type: 'sub',
    active: false,
    children: [
      { path: '/dashboard/bussiness-dashboard/clientes/list', title: 'Clientes', type: 'link' },
      { path: '/dashboard/bussiness-dashboard/lotes/list', title: 'Lotes', type: 'link' },
      { path: '/dashboard/bussiness-dashboard/ventas/list', title: 'Ventas', type: 'link' },
      { path: '/dashboard/bussiness-dashboard/tickets/list', title: 'Tickets', type: 'link' }
    ]
  },
  {
    title: 'Recursos Humanos',
    icon: 'ri-team-line',
    type: 'sub',
    active: false,
    children: [
      { path: '/dashboard/hrmdashboards/employees/employee-list', title: 'Empleados', type: 'link' },
      { path: '/dashboard/hrmdashboards/users/user-list', title: 'Usuarios', type: 'link' }
    ]
  }
];
```

---

## Checklist de Completación

### Gastos de Operación
- [x] gasto-list.component.ts
- [ ] gasto-list.component.html
- [ ] gasto-list.component.scss
- [ ] add-gasto.component.ts/html/scss
- [ ] edit-gasto.component.ts/html/scss
- [ ] view-gasto.component.ts/html/scss
- [ ] gastos-operacion.routes.ts
- [ ] Integrar en production-dashboard.routes.ts

### Clientes
- [ ] Copiar estructura de Inventario
- [ ] Renombrar archivos
- [ ] Buscar y reemplazar
- [ ] Adaptar formulario
- [ ] Agregar Activar/Desactivar
- [ ] clientes.routes.ts
- [ ] Crear bussiness-dashboard.routes.ts

### Lotes
- [ ] Verificar componentes existentes
- [ ] Completar faltantes
- [ ] Modal actualizar cantidad
- [ ] Ver movimientos

### Ventas
- [ ] Crear estructura base
- [ ] Implementar FormArray
- [ ] Agregar/quitar productos
- [ ] Cálculo de totales
- [ ] Validación de stock
- [ ] ventas.routes.ts

### Tickets
- [ ] Copiar estructura
- [ ] Adaptar formulario
- [ ] Flujo de estados
- [ ] tickets.routes.ts

### Integración
- [ ] Actualizar menú
- [ ] Testing completo

---

## Tiempo Estimado por Módulo

| Módulo | Tiempo |
|--------|--------|
| Completar Gastos | 1h |
| Clientes | 2h |
| Lotes | 1h |
| Tickets | 2h |
| Ventas | 4h |
| Integración | 1h |
| **TOTAL** | **11h** |

---

## Comandos Útiles

### Buscar y Reemplazar (macOS)
```bash
find . -type f -name "*.ts" -exec sed -i '' 's/VIEJO/NUEVO/g' {} +
find . -type f -name "*.html" -exec sed -i '' 's/VIEJO/NUEVO/g' {} +
```

### Buscar y Reemplazar (Linux)
```bash
find . -type f -name "*.ts" -exec sed -i 's/VIEJO/NUEVO/g' {} +
find . -type f -name "*.html" -exec sed -i 's/VIEJO/NUEVO/g' {} +
```

### Renombrar Archivos
```bash
for file in $(find . -name "*viejo*"); do
    mv "$file" "${file//viejo/nuevo}"
done
```

---

## ¡Listo para Completar!

Con esta guía y los comandos proporcionados, puedes completar todos los módulos restantes en aproximadamente 11 horas de trabajo.

**Recuerda:**
1. Probar cada módulo antes de pasar al siguiente
2. Usar Inventario y Vehículos como referencia
3. Mantener el patrón consistente
4. Verificar las rutas después de cada integración

¡Éxito! 🚀
