export interface Ticket {
  id: number;
  idVenta: number;
  idLote: number;
  idProducto: number;
  fecha: string;
  cantidad: number;
  codigoAutorizacion?: string;
  estado: "Pendiente" | "Autorizado" | "Despachado" | "Cancelado";
  idUsuario: number;
  createdAt: string;
  updatedAt: string;
  venta?: {
    id: number;
    total: number;
    fecha: string;
    cliente: {
      nombre: string;
      telefono?: string;
      direccion?: string;
    };
  };
  lote?: {
    id: number;
    galera: string;
    tipo: string;
  };
  producto?: {
    nombre: string;
    tamanio?: string;
    precio?: number;
  };
  usuario?: {
    nombre: string;
    apellido: string;
  };
}

export interface TicketResponse {
  data: Ticket[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface CreateTicketRequest {
  idVenta: number;
  idLote: number;
  idProducto: number;
  fecha: string; // YYYY-MM-DD
  cantidad: number;
  codigoAutorizacion?: string;
}

export interface UpdateTicketRequest {
  idLote?: number;
  idProducto?: number;
  fecha?: string;
  cantidad?: number;
  codigoAutorizacion?: string;
  estado?: "Pendiente" | "Autorizado" | "Despachado" | "Cancelado";
}

export interface UpdateEstadoTicketDTO {
  estado: "Pendiente" | "Autorizado" | "Despachado" | "Cancelado";
}

export interface TicketsStats {
  totalTickets: number;
  ticketsPorEstado: Array<{
    estado: string;
    _count: { id: number };
  }>;
  ticketsPorLote: Array<{
    idLote: number;
    _count: { id: number };
    _sum: { cantidad: number };
  }>;
  cantidadTotal: number;
  cantidadPromedio: number;
}