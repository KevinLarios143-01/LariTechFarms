export interface Cliente {
  id: number;
  idTenant: number;
  nombre: string;
  telefono?: string;
  correo?: string;
  direccion?: string;
  nit?: string;
  estado?: boolean;
  fechaRegistro?: string;
  // Campos existentes opcionales
  apellido?: string;
  email?: string;
  empresa?: string;
  img?: string;
  proyectos?: number;
  activo?: boolean;
  _count?: {
    proyectos: number;
    pedidos: number;
  };
}

export interface ClienteResponse {
  success: boolean;
  data: {
    data: Cliente[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
  timestamp: string;
}

export interface CreateClienteRequest {
  nombre: string;
  telefono?: string;
  correo?: string;
  direccion?: string;
  nit?: string;
}

export interface UpdateClienteRequest {
  nombre?: string;
  telefono?: string;
  correo?: string;
  direccion?: string;
  nit?: string;
}

export interface ClienteStats {
  totalClientes: number;
  clientesActivos: number;
  clientesInactivos: number;
  clientesNuevos: number;
  clientesPorEmpresa: {
    empresa: string;
    _count: {
      id_cliente: number;
    };
  }[];
}

export interface ClienteVenta {
  id: number;
  fecha: string;
  total: number;
  estado: string;
}