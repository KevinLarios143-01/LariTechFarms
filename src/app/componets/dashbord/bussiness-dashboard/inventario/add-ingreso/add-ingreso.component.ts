import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { IngresoInventarioService } from '../../../../../shared/services/ingreso-inventario.service';
import { LoteService } from '../../../../../shared/services/lote.service';
import { ProductoService } from '../../../../../shared/services/producto.service';

interface ProductoClasificado {
  idProducto: number | null;
  nombre?: string;
  cantidadCartones: number;
  cantidadHuevos: number;
}

@Component({
  selector: 'app-add-ingreso',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './add-ingreso.component.html',
  styleUrls: ['./add-ingreso.component.scss']
})
export class AddIngresoComponent implements OnInit {
  idLote: number | null = null;
  fecha: string = '';
  productos: ProductoClasificado[] = [];
  
  lotes: any[] = [];
  productosDisponibles: any[] = [];
  isLoading = false;
  isLoadingLotes = false;
  isLoadingProductos = false;

  constructor(
    private inventarioService: IngresoInventarioService,
    private loteService: LoteService,
    private productoService: ProductoService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // Fecha actual por defecto
    this.fecha = new Date().toISOString().split('T')[0];
    this.loadLotes();
    this.loadProductos();
  }

  loadLotes() {
    this.isLoadingLotes = true;
    this.loteService.getLotes({ activo: true, limit: 1000 }).subscribe({
      next: (response) => {
        this.lotes = response.data.data;
        this.isLoadingLotes = false;
      },
      error: () => {
        this.toastr.error('Error al cargar lotes', 'Error');
        this.isLoadingLotes = false;
      }
    });
  }

  loadProductos() {
    this.isLoadingProductos = true;
    this.productoService.getProductos().subscribe({
      next: (productos) => {
        this.productosDisponibles = productos;
        this.isLoadingProductos = false;
      },
      error: () => {
        this.toastr.error('Error al cargar productos', 'Error');
        this.isLoadingProductos = false;
      }
    });
  }

  agregarProducto() {
    this.productos.push({
      idProducto: null,
      cantidadCartones: 0,
      cantidadHuevos: 0
    });
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
  }

  onProductoChange(producto: ProductoClasificado) {
    const prod = this.productosDisponibles.find(p => p.id === producto.idProducto);
    if (prod) {
      producto.nombre = `${prod.nombre}${prod.tamanio ? ' (' + prod.tamanio + ')' : ''}`;
    }
  }

  onCartonesChange(producto: ProductoClasificado) {
    // Calcular huevos automáticamente (30 huevos por cartón)
    producto.cantidadHuevos = producto.cantidadCartones * 30;
  }

  validarFormulario(): boolean {
    if (!this.idLote) {
      this.toastr.warning('Debe seleccionar un lote', 'Validación');
      return false;
    }

    if (!this.fecha) {
      this.toastr.warning('Debe seleccionar una fecha', 'Validación');
      return false;
    }

    if (this.productos.length === 0) {
      this.toastr.warning('Debe agregar al menos un producto', 'Validación');
      return false;
    }

    for (let i = 0; i < this.productos.length; i++) {
      const prod = this.productos[i];
      
      if (!prod.idProducto) {
        this.toastr.warning(`Producto ${i + 1}: Debe seleccionar un producto`, 'Validación');
        return false;
      }

      if (prod.cantidadCartones <= 0) {
        this.toastr.warning(`Producto ${i + 1}: La cantidad de cartones debe ser mayor a cero`, 'Validación');
        return false;
      }

      if (prod.cantidadHuevos <= 0) {
        this.toastr.warning(`Producto ${i + 1}: La cantidad de huevos debe ser mayor a cero`, 'Validación');
        return false;
      }
    }

    // Verificar productos duplicados
    const productosIds = this.productos.map(p => p.idProducto);
    const duplicados = productosIds.filter((id, index) => productosIds.indexOf(id) !== index);
    if (duplicados.length > 0) {
      this.toastr.warning('No puede agregar el mismo producto dos veces', 'Validación');
      return false;
    }

    return true;
  }

  guardar() {
    if (!this.validarFormulario()) return;

    this.isLoading = true;

    const data = {
      idLote: this.idLote!,
      fecha: this.fecha,
      productos: this.productos.map(p => ({
        idProducto: p.idProducto!,
        cantidadCartones: p.cantidadCartones,
        cantidadHuevos: p.cantidadHuevos
      }))
    };

    this.inventarioService.registrarClasificacionMultiple(data).subscribe({
      next: (response) => {
        this.toastr.success(response.message || 'Clasificación registrada exitosamente', 'Éxito');
        this.router.navigate(['/dashboard/business-dashboard/inventario/list']);
      },
      error: (error) => {
        const errorMsg = error?.error?.error || 'Error al registrar clasificación';
        this.toastr.error(errorMsg, 'Error');
        this.isLoading = false;
      }
    });
  }

  cancelar() {
    this.router.navigate(['/dashboard/business-dashboard/inventario/list']);
  }

  getTotalCartones(): number {
    return this.productos.reduce((sum, p) => sum + (p.cantidadCartones || 0), 0);
  }

  getTotalHuevos(): number {
    return this.productos.reduce((sum, p) => sum + (p.cantidadHuevos || 0), 0);
  }
}
