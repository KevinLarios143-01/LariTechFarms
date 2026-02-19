export interface InventarioGranja {
  id: number;
  idTenant: number;
  nombre: string;
  cantidad: number;
  unidad: string;
  categoria?: string;
  minimoStock?: number;
  proveedor?: string;
  observaciones?: string;
}

export interface CreateInventarioDTO {
  nombre: string;
  cantidad: number;
  unidad: string;
  categoria?: string;
  minimoStock?: number;
  proveedor?: string;
  observaciones?: string;
}

export interface UpdateInventarioDTO {
  nombre?: string;
  cantidad?: number;
  unidad?: string;
  categoria?: string;
  minimoStock?: number;
  proveedor?: string;
  observaciones?: string;
}

export interface UpdateStockDTO {
  operacion: 'entrada' | 'salida' | 'ajuste';
  cantidad: number;
  observaciones?: string;
}

export interface InventarioResponse {
  success: boolean;
  data: {
    items: InventarioGranja[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

export interface InventarioStats {
  totalItems: number;
  itemsStockBajo: number;
  itemsPorCategoria: Array<{
    categoria: string;
    cantidad: number;
  }>;
  valorTotalInventario: number;
}

export interface AlertaStock {
  id: number;
  nombre: string;
  cantidad: number;
  minimoStock: number;
  categoria: string;
  nivelAlerta: string;
}
