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

interface ProductoVenta {
  idProducto: number;
  nombre: string;
  tamanio?: string;
  cantidadVendida: number;
  cantidadAsignada: number;
  cantidadPendiente: number;
}

interface DetalleTicket {
  idProducto: number;
  cantidad: number;
}

interface TicketForm {
  idLote: number | null;
  nombreLote?: string;
  detalles: DetalleTicket[];
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
  lotes: any[] = [];
  tickets: TicketForm[] = [];
  isLoading = false;
  isLoadingLotes = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ventaService: VentaService,
    private ticketService: TicketService,
    private loteService: LoteService,
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
        this.router.navigate(['/dashboard/bussiness-dashboard/ventas/list']);
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
  }

  agregarTicket() {
    this.tickets.push({
      idLote: null,
      detalles: []
    });
  }

  eliminarTicket(index: number) {
    // Devolver las cantidades asignadas
    const ticket = this.tickets[index];
    ticket.detalles.forEach(detalle => {
      const producto = this.productos.find(p => p.idProducto === detalle.idProducto);
      if (producto) {
        producto.cantidadAsignada -= detalle.cantidad;
        producto.cantidadPendiente += detalle.cantidad;
      }
    });

    this.tickets.splice(index, 1);
  }

  onLoteChange(ticket: TicketForm) {
    const lote = this.lotes.find(l => l.id === ticket.idLote);
    if (lote) {
      ticket.nombreLote = lote.galera;
    }
  }

  agregarProductoATicket(ticket: TicketForm, idProducto: number, cantidad: number) {
    if (!idProducto || cantidad <= 0) return;

    const producto = this.productos.find(p => p.idProducto === idProducto);
    if (!producto) return;

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
  }

  eliminarDetalleTicket(ticket: TicketForm, index: number) {
    const detalle = ticket.detalles[index];
    const producto = this.productos.find(p => p.idProducto === detalle.idProducto);
    
    if (producto) {
      producto.cantidadAsignada -= detalle.cantidad;
      producto.cantidadPendiente += detalle.cantidad;
    }

    ticket.detalles.splice(index, 1);
  }

  getProductoNombre(idProducto: number): string {
    const producto = this.productos.find(p => p.idProducto === idProducto);
    return producto ? `${producto.nombre}${producto.tamanio ? ' (' + producto.tamanio + ')' : ''}` : '';
  }

  getProductosDisponibles(): ProductoVenta[] {
    return this.productos.filter(p => p.cantidadPendiente > 0);
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

    return true;
  }

  generarTickets() {
    if (!this.validarTickets()) return;

    this.isLoading = true;

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
        this.router.navigate(['/dashboard/bussiness-dashboard/tickets/list']);
      },
      error: (error) => {
        const errorMsg = error?.error?.error || 'Error al generar tickets';
        this.toastr.error(errorMsg, 'Error');
        this.isLoading = false;
      }
    });
  }

  cancelar() {
    this.router.navigate(['/dashboard/bussiness-dashboard/ventas/list']);
  }
}
