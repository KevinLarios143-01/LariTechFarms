# Generador de Componentes CRUD

Este documento contiene templates para generar rápidamente los componentes CRUD para los módulos faltantes.

## Módulos Pendientes

### 1. Vehículos (production-dashboard)
### 2. Gastos de Operación (production-dashboard)
### 3. Clientes (bussiness-dashboard - crear carpeta)
### 4. Lotes (bussiness-dashboard)
### 5. Ventas (bussiness-dashboard)
### 6. Tickets (bussiness-dashboard)

---

## Template: List Component TypeScript

```typescript
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { [SERVICE_NAME] } from '../../../../../shared/services/[service-file]';
import { [INTERFACE_NAME] } from '../../../../../shared/interfaces/[interface-file]';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-[module]-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './[module]-list.component.html',
  styleUrls: ['./[module]-list.component.scss']
})
export class [MODULE]ListComponent implements OnInit {
  items: [INTERFACE_NAME][] = [];
  filteredItems: [INTERFACE_NAME][] = [];
  isLoading = false;
  searchTerm = '';

  // Paginación
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPages = 0;

  // Estadísticas
  stats = {
    total: 0
  };

  constructor(
    private service: [SERVICE_NAME],
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadItems();
    this.loadStats();
  }

  loadItems() {
    this.isLoading = true;
    const params = {
      page: this.currentPage,
      limit: this.itemsPerPage,
      search: this.searchTerm || undefined
    };

    this.service.get[ITEMS](params).subscribe({
      next: (response) => {
        if (response?.data?.items) {
          this.items = response.data.items;
          this.filteredItems = [...this.items];
          this.totalItems = response.data.pagination.total;
          this.totalPages = response.data.pagination.totalPages;
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.toastr.error('Error al cargar datos', 'Error');
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  loadStats() {
    this.service.getStats().subscribe({
      next: (response) => {
        if (response?.data) {
          this.stats = response.data;
        }
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar estadísticas:', error);
      }
    });
  }

  applyFilters() {
    this.currentPage = 1;
    this.loadItems();
  }

  clearFilters() {
    this.searchTerm = '';
    this.currentPage = 1;
    this.loadItems();
  }

  deleteItem(id: number) {
    if (confirm('¿Está seguro de eliminar este registro?')) {
      this.service.delete[ITEM](id).subscribe({
        next: () => {
          this.toastr.success('Registro eliminado exitosamente', 'Éxito');
          this.loadItems();
          this.loadStats();
        },
        error: (error) => {
          const errorMsg = error?.error?.message || 'Error al eliminar';
          this.toastr.error(errorMsg, 'Error');
        }
      });
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadItems();
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
```

---

## Template: Add Component TypeScript

```typescript
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { [SERVICE_NAME] } from '../../../../../shared/services/[service-file]';
import { Create[DTO_NAME] } from '../../../../../shared/interfaces/[interface-file]';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-add-[module]',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgSelectModule, SharedModule],
  templateUrl: './add-[module].component.html',
  styleUrls: ['./add-[module].component.scss']
})
export class Add[MODULE]Component implements OnInit {
  form: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private service: [SERVICE_NAME],
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      // Definir campos del formulario aquí
    });
  }

  ngOnInit() {
    // Cargar datos necesarios (categorías, listas, etc.)
  }

  onSubmit() {
    if (this.form.valid) {
      this.isLoading = true;
      const formData = this.form.value;

      const createData: Create[DTO_NAME] = {
        // Mapear datos del formulario
      };

      this.service.create[ITEM](createData).subscribe({
        next: (response) => {
          this.toastr.success('Registro creado exitosamente', 'Éxito');
          setTimeout(() => {
            this.router.navigate(['/dashboard/[dashboard-path]/[module]/list']);
          }, 1000);
        },
        error: (error) => {
          const errorMsg = error?.error?.message || 'Error al crear registro';
          this.toastr.error(errorMsg, 'Error');
          this.isLoading = false;
          this.cdr.detectChanges();
        }
      });
    } else {
      this.markFormGroupTouched();
      this.toastr.warning('Por favor complete todos los campos requeridos', 'Advertencia');
    }
  }

  markFormGroupTouched() {
    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);
      control?.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.form.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return `${fieldName} es requerido`;
      if (field.errors['min']) return `${fieldName} debe ser mayor o igual a ${field.errors['min'].min}`;
      if (field.errors['email']) return 'Email inválido';
    }
    return '';
  }
}
```

---

## Configuraciones Específicas por Módulo

### VEHÍCULOS

**Campos del formulario:**
```typescript
this.form = this.fb.group({
  tipo: ['', Validators.required],
  placa: ['', Validators.required],
  marca: ['', Validators.required],
  modelo: ['', Validators.required],
  anio: ['', Validators.min(1900)],
  estado: ['Activo'],
  capacidad: ['', Validators.min(0)],
  fechaAdquisicion: ['']
});
```

**Estados:** Activo, Inactivo, Mantenimiento, Vendido

**Tipos:** Camión, Pickup, Camioneta, Motocicleta, Automóvil

---

### GASTOS DE OPERACIÓN

**Campos del formulario:**
```typescript
this.form = this.fb.group({
  fecha: ['', Validators.required],
  categoria: ['', Validators.required],
  descripcion: ['', Validators.required],
  monto: ['', [Validators.required, Validators.min(0.01)]],
  metodoPago: ['']
});
```

**Categorías:** Mantenimiento, Servicios, Insumos, Personal, Transporte, Limpieza, Combustible, Medicamentos

**Métodos de Pago:** Efectivo, Transferencia, Tarjeta, Cheque

---

### CLIENTES

**Campos del formulario:**
```typescript
this.form = this.fb.group({
  nombre: ['', Validators.required],
  telefono: [''],
  correo: ['', Validators.email],
  direccion: [''],
  nit: ['']
});
```

**Acciones adicionales:** Activar/Desactivar, Ver Ventas

---

### LOTES

**Campos del formulario:**
```typescript
this.form = this.fb.group({
  tipo: ['', Validators.required],
  fechaInicio: ['', Validators.required],
  fechaFin: [''],
  cantidad: ['', [Validators.required, Validators.min(1)]],
  galera: ['', Validators.required],
  observaciones: ['']
});
```

**Tipos:** Ponedoras, Engorde

**Estados:** Activo, Inactivo, Desalojado

---

### VENTAS

**Campos del formulario:**
```typescript
this.form = this.fb.group({
  fecha: ['', Validators.required],
  idCliente: [''],
  metodoPago: [''],
  observaciones: [''],
  detalles: this.fb.array([])
});
```

**Detalle de venta:**
```typescript
createDetalleFormGroup(): FormGroup {
  return this.fb.group({
    idProducto: ['', Validators.required],
    cantidad: ['', [Validators.required, Validators.min(1)]],
    precioUnitario: ['', [Validators.required, Validators.min(0.01)]]
  });
}
```

**Estados:** Completada, Cancelada, Pendiente

---

### TICKETS

**Campos del formulario:**
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

**Estados:** Pendiente, Autorizado, Despachado, Cancelado

---

## Comandos para Crear Estructura

```bash
# Vehículos
mkdir -p LariTechFarms/src/app/componets/dashbord/production-dashboard/vehiculos/{vehiculo-list,add-vehiculo,edit-vehiculo,view-vehiculo}

# Gastos de Operación
mkdir -p LariTechFarms/src/app/componets/dashbord/production-dashboard/gastos-operacion/{gasto-list,add-gasto,edit-gasto,view-gasto}

# Clientes
mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/clientes/{cliente-list,add-cliente,edit-cliente,view-cliente}

# Lotes
mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/lotes/{lote-list,add-lote,edit-lote,view-lote}

# Ventas
mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/ventas/{venta-list,add-venta,view-venta}

# Tickets
mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/tickets/{ticket-list,add-ticket,edit-ticket,view-ticket}
```

---

## Checklist de Implementación

Para cada módulo:

- [ ] Crear carpetas de componentes
- [ ] Crear list.component.ts/html/scss
- [ ] Crear add.component.ts/html/scss
- [ ] Crear edit.component.ts/html/scss
- [ ] Crear view.component.ts/html/scss
- [ ] Crear module.routes.ts
- [ ] Integrar rutas en dashboard principal
- [ ] Actualizar menú de navegación
- [ ] Probar CRUD completo
- [ ] Verificar validaciones
- [ ] Probar filtros y búsqueda
- [ ] Verificar estadísticas

---

## Notas Importantes

1. **Rutas de navegación:** Ajustar según el dashboard (production-dashboard o bussiness-dashboard)
2. **Imports:** Verificar rutas relativas según la profundidad de carpetas
3. **Servicios:** Ya están creados en `shared/services/`
4. **Interfaces:** Ya están creadas en `shared/interfaces/`
5. **Validaciones:** Ajustar según los requisitos de cada módulo
6. **Permisos:** Considerar roles de usuario si es necesario

---

## Próximos Pasos Recomendados

1. **Fase 1:** Completar Vehículos y Gastos de Operación (production-dashboard)
2. **Fase 2:** Crear carpeta bussiness-dashboard si no existe
3. **Fase 3:** Implementar Clientes y Lotes
4. **Fase 4:** Implementar Ventas (más complejo por detalles dinámicos)
5. **Fase 5:** Implementar Tickets
6. **Fase 6:** Integrar todo en el menú de navegación
7. **Fase 7:** Testing completo de todos los módulos
