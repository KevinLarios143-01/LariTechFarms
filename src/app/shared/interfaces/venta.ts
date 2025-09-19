export interface Venta {
  id: number;
  idCliente: number;
  fecha: string;
  total: number;
  estado: string;
  idTenant?: number;
  fechaCreacion?: string;
  fechaActualizacion?: string;
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