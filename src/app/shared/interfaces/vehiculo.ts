export interface Vehiculo {
  id: number;
  idTenant: number;
  tipo: string;
  placa: string;
  marca: string;
  modelo: string;
  anio?: number;
  estado: 'Activo' | 'Inactivo' | 'Mantenimiento' | 'Vendido';
  capacidad?: number;
  fechaAdquisicion?: string;
}

export interface CreateVehiculoDTO {
  tipo: string;
  placa: string;
  marca: string;
  modelo: string;
  anio?: number;
  estado?: 'Activo' | 'Inactivo' | 'Mantenimiento' | 'Vendido';
  capacidad?: number;
  fechaAdquisicion?: string;
}

export interface UpdateVehiculoDTO {
  tipo?: string;
  placa?: string;
  marca?: string;
  modelo?: string;
  anio?: number;
  estado?: 'Activo' | 'Inactivo' | 'Mantenimiento' | 'Vendido';
  capacidad?: number;
  fechaAdquisicion?: string;
}

export interface UpdateEstadoDTO {
  estado: 'Activo' | 'Inactivo' | 'Mantenimiento' | 'Vendido';
}

export interface VehiculoResponse {
  success: boolean;
  data: {
    items: Vehiculo[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

export interface VehiculoStats {
  totalVehiculos: number;
  vehiculosPorEstado: Array<{
    estado: string;
    cantidad: number;
  }>;
  vehiculosPorTipo: Array<{
    tipo: string;
    cantidad: number;
  }>;
  vehiculosPorAnio: Array<{
    anio: number | null;
    _count: {
      id: number;
    };
  }>;
  capacidadPromedio: number;
  capacidadTotal: number;
  promedioAntiguedad: number;
}
