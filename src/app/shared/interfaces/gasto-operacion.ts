export interface GastoOperacion {
  id: number;
  idTenant: number;
  fecha: string;
  categoria: string;
  descripcion: string;
  monto: number;
  metodoPago?: string;
  idUsuario?: number;
  usuario?: {
    nombre: string;
    apellido: string;
  };
}

export interface CreateGastoOperacionDTO {
  fecha: string;
  categoria: string;
  descripcion: string;
  monto: number;
  metodoPago?: string;
}

export interface UpdateGastoOperacionDTO {
  fecha?: string;
  categoria?: string;
  descripcion?: string;
  monto?: number;
  metodoPago?: string;
}

export interface GastoOperacionResponse {
  success: boolean;
  data: {
    items: GastoOperacion[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

export interface GastoOperacionStats {
  totalGastos: number;
  totalRegistros: number;
  promedioGasto: number;
  gastosPorCategoria: Array<{
    categoria: string;
    totalMonto: number;
    registros: number;
    porcentaje: number;
  }>;
  gastosPorMetodoPago: Array<{
    metodoPago: string;
    totalMonto: number;
    registros: number;
    porcentaje: number;
  }>;
  tendenciaMensual: Array<{
    mes: string;
    totalGastos: number;
    registros: number;
  }>;
  topCategorias: Array<{
    categoria: string;
    totalMonto: number;
  }>;
}
