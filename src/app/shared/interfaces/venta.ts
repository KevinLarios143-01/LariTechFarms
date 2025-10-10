export interface Venta {
  id: number;
  idCliente?: number;
  fecha: string;
  total: number;
  metodoPago?: string;
  estado: "Completada" | "Cancelada" | "Pendiente";
  observaciones?: string;
  cliente?: {
    id: number;
    nombre: string;
    telefono?: string;
  };
  usuario?: {
    nombre: string;
    apellido?: string;
  };
  detalleVentas: DetalleVenta[];
}

export interface DetalleVenta {
  id: number;
  idProducto: number;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
  producto: {
    nombre: string;
    tamanio?: string;
    categoria?: string;
  };
}

export interface VentaResponse {
  success: boolean;
  data: {
    data: Venta[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
  timestamp: string;
}

export interface CreateVentaRequest {
  idCliente?: number;
  fecha: string; // YYYY-MM-DD
  metodoPago?: string;
  observaciones?: string;
  detalles: DetalleVentaDTO[];
}

export interface DetalleVentaDTO {
  idProducto: number;
  cantidad: number;
  precioUnitario: number;
}

export interface UpdateVentaRequest {
  idCliente?: number;
  fecha?: string;
  metodoPago?: string;
  observaciones?: string;
  detalles?: DetalleVentaDTO[];
}

export interface UpdateEstadoDTO {
  estado: "Completada" | "Cancelada" | "Pendiente";
}

export interface AnularVentaDTO {
  motivoAnulacion?: string;
}

export interface VentasStats {
  totalVentas: number;
  ventasCompletadas: number;
  ventasPendientes: number;
  ventasCanceladas: number;
  montoTotal: number;
  promedioVenta: number;
  topClientes: Array<{
    idCliente: number;
    nombreCliente: string;
    totalCompras: number;
    numeroVentas: number;
  }>;
  topProductos: Array<{
    idProducto: number;
    nombreProducto: string;
    cantidadVendida: number;
    montoTotal: number;
  }>;
  ventasPorMes: Array<{
    mes: string;
    totalVentas: number;
    montoTotal: number;
  }>;
}