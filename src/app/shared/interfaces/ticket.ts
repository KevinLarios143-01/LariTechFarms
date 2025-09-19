export interface Ticket {
  id: number;
  idVenta: number;
  idLote: number;
  idProducto: number;
  fecha: string;
  cantidad: number;
  estado: string;
  codigoAutorizacion: string;
  idTenant?: number;
  fechaCreacion?: string;
  fechaActualizacion?: string;
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
  fecha: string;
  cantidad: number;
  estado: string;
  codigoAutorizacion: string;
}

export interface UpdateTicketRequest {
  estado?: string;
  codigoAutorizacion?: string;
  cantidad?: number;
}