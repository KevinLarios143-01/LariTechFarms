import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { VentaService } from '../../../../../shared/services/venta.service';
import { TicketService } from '../../../../../shared/services/ticket.service';
import { LoteService } from '../../../../../shared/services/lote.service';
import { IngresoInventarioService } from '../../../../../shared/services/ingreso-inventario.service';

interface ProductoVenta {
  idProducto: number;
  nombre: string;
  tamanio?: string;
  cantidadVendida: number;
  cantidadAsignada: number;
  cantidadPendiente: number;
  stockEnLote?: number; // Stock disponible en el lote seleccionado
}

interface DetalleTicket {
  idProducto: number;
  cantidad: number;
}

interface TicketForm {
  idLote: number | null;
  nombreLote?: string;
  detalles: DetalleTicket[];
  productosDisponibles?: ProductoVenta[]; // Productos específicos de este ticket
}

@Component({
  selector: 'app-generar-tickets',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, SharedModule],
  templateUrl: './generar-tickets.component.html',
  styleUrls: ['./generar-tickets.component.scss']
})
export class GenerarTicketsComponent implements OnInit {
  idVenta!: number;
  venta: any = null;
  productos: ProductoVenta[] = [];
  productosDisponibles: ProductoVenta[] = [];
  lotes: any[] = [];
  tickets: TicketForm[] = [];
  isLoading = false;
  isLoadingLotes = false;
  
  // Variables temporales para agregar productos
  tempProductoId: { [key: number]: number | null } = {};
  tempCantidad: { [key: number]: number } = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ventaService: VentaService,
    private ticketService: TicketService,
    private loteService: LoteService,
    private ingresoInventarioService: IngresoInventarioService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.idVenta = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    if (this.idVenta) {
      this.loadVenta();
      this.loadLotes();
    }
  }

  loadVenta() {
    this.isLoading = true;
    this.ventaService.getVentaById(this.idVenta).subscribe({
      next: (response) => {
        this.venta = response.data;
        this.initProductos();
        this.isLoading = false;
      },
      error: (error) => {
        this.toastr.error('Error al cargar la venta', 'Error');
        this.isLoading = false;
        this.router.navigate(['/dashboard/business-dashboard/ventas/list']);
      }
    });
  }

  loadLotes() {
    this.isLoadingLotes = true;
    this.loteService.getLotes({ activo: true, limit: 1000 }).subscribe({
      next: (response) => {
        this.lotes = response.data.data;
        this.isLoadingLotes = false;
      },
      error: (error) => {
        this.toastr.error('Error al cargar lotes', 'Error');
        this.isLoadingLotes = false;
      }
    });
  }

  initProductos() {
    if (!this.venta?.detalleVentas) return;

    this.productos = this.venta.detalleVentas.map((detalle: any) => ({
      idProducto: detalle.idProducto,
      nombre: detalle.producto.nombre,
      tamanio: detalle.producto.tamanio,
      cantidadVendida: detalle.cantidad,
      cantidadAsignada: 0,
      cantidadPendiente: detalle.cantidad
    }));
    
    console.log('📦 Productos inicializados:', this.productos);
    this.actualizarProductosDisponibles();
  }

  actualizarProductosDisponibles() {
    // Filtrar productos que tengan cantidad pendiente Y stock en el lote (si hay lote seleccionado)
    this.productosDisponibles = this.productos.filter(p => {
      const tienePendiente = p.cantidadPendiente > 0;
      
      // Si hay un lote seleccionado en algún ticket, verificar stock en lote
      const hayLoteSeleccionado = this.tickets.some(t => t.idLote !== null);
      
      if (hayLoteSeleccionado && p.stockEnLote !== undefined) {
        return tienePendiente && p.stockEnLote > 0;
      }
      
      return tienePendiente;
    });
    
    console.log('🔍 Productos disponibles actualizados:', this.productosDisponibles);
  }

  agregarTicket() {
    const index = this.tickets.length;
    this.tickets.push({
      idLote: null,
      detalles: [],
      productosDisponibles: [] // Inicializar vacío hasta que seleccione galera
    });
    // Inicializar variables temporales para este ticket
    this.tempProductoId[index] = null;
    this.tempCantidad[index] = 1;
    
    console.log('🎫 Ticket agregado. Index:', index);
  }

  eliminarTicket(index: number) {
    // Devolver las cantidades asignadas
    const ticket = this.tickets[index];
    ticket.detalles.forEach(detalle => {
      const producto = this.productos.find(p => p.idProducto === detalle.idProducto);
      if (producto) {
        producto.cantidadAsignada -= detalle.cantidad;
        producto.cantidadPendiente += detalle.cantidad;
        
        // Restaurar stock en lote si existe
        if (producto.stockEnLote !== undefined) {
          producto.stockEnLote += detalle.cantidad;
        }
      }
    });

    this.tickets.splice(index, 1);
    this.actualizarProductosDisponibles();
    
    this.toastr.info('Ticket eliminado', 'Información');
  }

  onLoteChange(ticket: TicketForm) {
    const lote = this.lotes.find(l => l.id === ticket.idLote);
    if (lote) {
      ticket.nombreLote = lote.galera;
      // Cargar stock disponible del lote seleccionado SOLO para este ticket
      this.cargarStockPorLoteParaTicket(ticket);
    }
  }

  cargarStockPorLoteParaTicket(ticket: TicketForm) {
    if (!ticket.idLote) return;
    
    this.isLoading = true;
    this.ingresoInventarioService.getStockPorLote(ticket.idLote).subscribe({
      next: (response) => {
        console.log('📦 Stock del lote para ticket:', response.data);
        console.log('📋 Productos base:', this.productos);
        
        // Crear una copia de productos con el stock específico de este lote
        ticket.productosDisponibles = this.productos
          .map(producto => {
            const stockLote = response.data.find(s => s.idProducto === producto.idProducto);
            const stockEnLote = stockLote?.cantidad || 0;
            
            console.log(`Producto ${producto.nombre}: pendiente=${producto.cantidadPendiente}, stockEnLote=${stockEnLote}`);
            
            return {
              ...producto,
              stockEnLote: stockEnLote
            };
          })
          .filter(p => {
            const incluir = p.cantidadPendiente > 0 && (p.stockEnLote || 0) > 0;
            console.log(`${p.nombre}: incluir=${incluir} (pendiente=${p.cantidadPendiente}, stock=${p.stockEnLote})`);
            return incluir;
          });
        
        console.log('✅ Productos disponibles para este ticket:', ticket.productosDisponibles);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar stock del lote:', error);
        this.toastr.error('Error al cargar stock del lote', 'Error');
        this.isLoading = false;
      }
    });
  }

  cargarStockPorLote(idLote: number) {
    // Método legacy - ya no se usa, mantenido por compatibilidad
    this.isLoading = true;
    this.ingresoInventarioService.getStockPorLote(idLote).subscribe({
      next: (response) => {
        console.log('📦 Stock del lote:', response.data);
        
        // Actualizar el stock en lote para cada producto
        this.productos.forEach(producto => {
          const stockLote = response.data.find(s => s.idProducto === producto.idProducto);
          producto.stockEnLote = stockLote?.cantidad || 0;
        });
        
        // Actualizar productos disponibles (solo los que tienen stock en el lote)
        this.actualizarProductosDisponibles();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar stock del lote:', error);
        this.toastr.error('Error al cargar stock del lote', 'Error');
        this.isLoading = false;
      }
    });
  }

  agregarProductoATicket(ticketIndex: number) {
    const ticket = this.tickets[ticketIndex];
    const idProducto = this.tempProductoId[ticketIndex];
    const cantidad = this.tempCantidad[ticketIndex];
    
    console.log('➕ Intentando agregar producto:', {
      ticketIndex,
      idProducto,
      cantidad,
      tempProductoId: this.tempProductoId,
      tempCantidad: this.tempCantidad
    });
    
    if (!idProducto || cantidad <= 0) {
      this.toastr.warning('Seleccione un producto y cantidad válida', 'Advertencia');
      return;
    }

    const producto = this.productos.find(p => p.idProducto === idProducto);
    if (!producto) {
      console.error('❌ Producto no encontrado:', idProducto);
      return;
    }

    // Verificar que no exceda la cantidad pendiente
    if (cantidad > producto.cantidadPendiente) {
      this.toastr.warning(
        `Solo quedan ${producto.cantidadPendiente} unidades de ${producto.nombre} por asignar`,
        'Advertencia'
      );
      return;
    }

    // Verificar si el producto ya está en el ticket
    const detalleExistente = ticket.detalles.find(d => d.idProducto === idProducto);
    if (detalleExistente) {
      this.toastr.warning('Este producto ya está en el ticket', 'Advertencia');
      return;
    }

    // Agregar detalle al ticket
    ticket.detalles.push({
      idProducto,
      cantidad
    });

    // Actualizar cantidades
    producto.cantidadAsignada += cantidad;
    producto.cantidadPendiente -= cantidad;
    
    console.log('✅ Producto agregado exitosamente');
    
    // Limpiar campos temporales
    this.tempProductoId[ticketIndex] = null;
    this.tempCantidad[ticketIndex] = 1;
    
    // Actualizar productos disponibles
    this.actualizarProductosDisponibles();
  }

  eliminarDetalleTicket(ticket: TicketForm, index: number) {
    const detalle = ticket.detalles[index];
    const producto = this.productos.find(p => p.idProducto === detalle.idProducto);
    
    if (producto) {
      // Devolver cantidades
      producto.cantidadAsignada -= detalle.cantidad;
      producto.cantidadPendiente += detalle.cantidad;
      
      // Restaurar stock en lote si existe
      if (producto.stockEnLote !== undefined) {
        producto.stockEnLote += detalle.cantidad;
      }
    }

    ticket.detalles.splice(index, 1);
    this.actualizarProductosDisponibles();
    
    this.toastr.success('Producto eliminado del ticket', 'Éxito');
  }

  getProductoNombre(idProducto: number): string {
    const producto = this.productos.find(p => p.idProducto === idProducto);
    return producto ? `${producto.nombre}${producto.tamanio ? ' (' + producto.tamanio + ')' : ''}` : '';
  }

  getCantidadDisponible(ticketIndex: number): number {
    const idProducto = this.tempProductoId[ticketIndex];
    if (!idProducto) return 0;
    
    const ticket = this.tickets[ticketIndex];
    
    // Buscar el producto en los productos disponibles específicos del ticket
    if (ticket?.productosDisponibles) {
      const productoEnTicket = ticket.productosDisponibles.find(p => p.idProducto === idProducto);
      if (productoEnTicket) {
        return Math.min(productoEnTicket.cantidadPendiente, productoEnTicket.stockEnLote || 0);
      }
    }
    
    // Fallback: buscar en productos generales
    const producto = this.productos.find(p => p.idProducto === idProducto);
    if (!producto) return 0;
    
    if (producto.stockEnLote !== undefined) {
      return Math.min(producto.cantidadPendiente, producto.stockEnLote);
    }
    
    return producto.cantidadPendiente;
  }

  getResumenTickets() {
    return {
      totalTickets: this.tickets.length,
      totalProductosAsignados: this.productos.reduce((sum, p) => sum + p.cantidadAsignada, 0),
      totalProductosVendidos: this.productos.reduce((sum, p) => sum + p.cantidadVendida, 0),
      productosPendientes: this.productos.filter(p => p.cantidadPendiente > 0).length,
      productosCompletos: this.productos.filter(p => p.cantidadPendiente === 0).length
    };
  }

  getProductoSeleccionado(ticketIndex: number): ProductoVenta | null {
    const idProducto = this.tempProductoId[ticketIndex];
    if (!idProducto) return null;
    
    const ticket = this.tickets[ticketIndex];
    
    // Buscar primero en los productos disponibles del ticket (tienen el stock correcto)
    if (ticket?.productosDisponibles) {
      const productoEnTicket = ticket.productosDisponibles.find(p => p.idProducto === idProducto);
      if (productoEnTicket) {
        return productoEnTicket;
      }
    }
    
    // Fallback: buscar en productos generales
    return this.productos.find(p => p.idProducto === idProducto) || null;
  }

  getProductosDisponiblesParaTicket(ticketIndex: number): ProductoVenta[] {
    const ticket = this.tickets[ticketIndex];
    
    // Si el ticket tiene productos disponibles específicos (galera seleccionada), usarlos
    if (ticket?.productosDisponibles && ticket.productosDisponibles.length > 0) {
      return ticket.productosDisponibles;
    }
    
    // Si no hay galera seleccionada, retornar array vacío
    return [];
  }

  validarTickets(): boolean {
    // Verificar que haya al menos un ticket
    if (this.tickets.length === 0) {
      this.toastr.warning('Debe crear al menos un ticket', 'Validación');
      return false;
    }

    // Verificar que todos los tickets tengan lote
    for (let i = 0; i < this.tickets.length; i++) {
      if (!this.tickets[i].idLote) {
        this.toastr.warning(`El ticket ${i + 1} debe tener un lote asignado`, 'Validación');
        return false;
      }

      if (this.tickets[i].detalles.length === 0) {
        this.toastr.warning(`El ticket ${i + 1} debe tener al menos un producto`, 'Validación');
        return false;
      }
    }

    // Verificar que todos los productos estén asignados
    const productosPendientes = this.productos.filter(p => p.cantidadPendiente > 0);
    if (productosPendientes.length > 0) {
      const nombres = productosPendientes.map(p => p.nombre).join(', ');
      this.toastr.warning(
        `Aún hay productos sin asignar: ${nombres}`,
        'Validación'
      );
      return false;
    }

    // NUEVA VALIDACIÓN: Verificar stock en galera para cada ticket
    for (let i = 0; i < this.tickets.length; i++) {
      const ticket = this.tickets[i];
      
      for (const detalle of ticket.detalles) {
        const producto = this.productos.find(p => p.idProducto === detalle.idProducto);
        
        if (producto && producto.stockEnLote !== undefined) {
          if (detalle.cantidad > producto.stockEnLote) {
            this.toastr.error(
              `Ticket ${i + 1}: ${producto.nombre} - Stock insuficiente en galera. ` +
              `Solicitado: ${detalle.cantidad}, Disponible: ${producto.stockEnLote}`,
              'Error de Stock'
            );
            return false;
          }
        }
      }
    }

    return true;
  }

  generarTickets() {
    if (!this.validarTickets()) return;

    // Revalidar stock en galeras antes de generar
    this.isLoading = true;
    this.revalidarStockGaleras().then(stockValido => {
      if (!stockValido) {
        this.isLoading = false;
        return;
      }

      const data = {
        idVenta: this.idVenta,
        tickets: this.tickets.map(t => ({
          idLote: t.idLote!,
          detalles: t.detalles
        }))
      };

      this.ticketService.generarTicketsDesdeVenta(data).subscribe({
        next: (response) => {
          this.toastr.success(response.message || 'Tickets generados exitosamente', 'Éxito');
          this.router.navigate(['/dashboard/business-dashboard/tickets/list']);
        },
        error: (error) => {
          const errorMsg = error?.error?.error || 'Error al generar tickets';
          this.toastr.error(errorMsg, 'Error');
          this.isLoading = false;
        }
      });
    });
  }

  async revalidarStockGaleras(): Promise<boolean> {
    console.log('🔄 Revalidando stock en galeras...');
    
    // Obtener todos los lotes únicos de los tickets
    const lotesUnicos = [...new Set(this.tickets.map(t => t.idLote).filter(id => id !== null))];
    
    try {
      // Recargar stock para cada lote
      for (const idLote of lotesUnicos) {
        const response = await this.ingresoInventarioService.getStockPorLote(idLote!).toPromise();
        
        if (response?.data) {
          // Actualizar stock en lote para cada producto
          this.productos.forEach(producto => {
            const stockLote = response.data.find(s => s.idProducto === producto.idProducto);
            if (stockLote) {
              producto.stockEnLote = stockLote.cantidad;
            }
          });
        }
      }
      
      // Validar nuevamente con el stock actualizado
      for (let i = 0; i < this.tickets.length; i++) {
        const ticket = this.tickets[i];
        
        for (const detalle of ticket.detalles) {
          const producto = this.productos.find(p => p.idProducto === detalle.idProducto);
          
          if (producto && producto.stockEnLote !== undefined) {
            if (detalle.cantidad > producto.stockEnLote) {
              this.toastr.error(
                `Ticket ${i + 1}: ${producto.nombre} - Stock insuficiente en galera. ` +
                `Solicitado: ${detalle.cantidad}, Disponible: ${producto.stockEnLote}. ` +
                `El stock ha cambiado desde que agregó los productos.`,
                'Error de Stock',
                { timeOut: 8000 }
              );
              return false;
            }
          }
        }
      }
      
      console.log('✅ Stock validado correctamente');
      return true;
      
    } catch (error) {
      console.error('❌ Error al revalidar stock:', error);
      this.toastr.error('Error al validar stock en galeras', 'Error');
      return false;
    }
  }

  cancelar() {
    this.router.navigate(['/dashboard/business-dashboard/ventas/list']);
  }
}
