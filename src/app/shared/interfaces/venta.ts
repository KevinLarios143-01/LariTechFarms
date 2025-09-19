export interface Venta {
  id: number;
  idCliente: number;
  fecha: string;
  total: number;
  estado: string;
  idTenant?: number;
  fechaCreacion?: string;
  fechaActualizacion?: string;
  metodoPago?: string;
  idUsuario?: number;
  observaciones?: string;
  cliente?: {
    id: number;
    nombre: string;
    telefono: string;
    correo: string;
    direccion: string;
    nit: string;
  };
  usuario?: {
    nombre: string;
    email: string;
  };
  detalleVentas?: {
    id: number;
    cantidad: number;
    precioUnitario: string;
    subtotal: string;
    producto: {
      id: number;
      nombre: string;
      tamanio: string;
      precio: string;
    };
  }[];
  tickets?: any[];
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
  idCliente: number;
  fecha: string;
  total: number;
  estado: string;
}

export interface UpdateVentaRequest {
  idCliente?: number;
  fecha?: string;
  total?: number;
  estado?: string;
}