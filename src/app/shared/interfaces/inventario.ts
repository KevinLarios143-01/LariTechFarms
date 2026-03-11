export interface IngresoInventario {
  id: number;
  idLote: number;
  idProducto: number;
  fecha: string;
  cantidadCartones: number;
  cantidadHuevos: number;
  observaciones?: string;
  idUsuario?: number;
  createdAt: string;
  lote?: {
    id: number;
    galera: string;
    tipo: string;
  };
  producto?: {
    id: number;
    nombre: string;
    tamanio?: string;
  };
  usuario?: {
    nombre: string;
    apellido: string;
  };
}

export interface StockLote {
  id: number;
  idLote: number;
  idProducto: number;
  cantidad: number;
  updatedAt: string;
  lote?: {
    id: number;
    galera: string;
    tipo: string;
    estado: string;
  };
  producto?: {
    id: number;
    nombre: string;
    tamanio?: string;
    precio: number;
  };
}

export interface IngresoInventarioResponse {
  data: IngresoInventario[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface CreateIngresoRequest {
  idLote: number;
  idProducto: number;
  fecha: string; // YYYY-MM-DD
  cantidadCartones: number;
  cantidadHuevos: number;
  observaciones?: string;
}

export interface ClasificacionMultipleRequest {
  idLote: number;
  fecha: string; // YYYY-MM-DD
  productos: Array<{
    idProducto: number;
    cantidadCartones: number;
    cantidadHuevos: number;
    observaciones?: string;
  }>;
}

export interface InventarioStats {
  totalIngresos: number;
  ingresosPorLote: Array<{
    idLote: number;
    galera: string;
    _count: { id: number };
    _sum: {
      cantidadCartones: number;
      cantidadHuevos: number;
    };
  }>;
  ingresosPorProducto: Array<{
    idProducto: number;
    nombre: string;
    tamanio?: string;
    _count: { id: number };
    _sum: {
      cantidadCartones: number;
      cantidadHuevos: number;
    };
  }>;
  totalCartones: number;
  totalHuevos: number;
  promedioCartones: number;
}

// Interfaces para Inventario de Granja
export interface InventarioGranja {
  id: number;
  idTenant: number;
  nombre: string;
  cantidad: number;
  unidad: string;
  categoria: string | null;
  minimoStock: number | null;
  proveedor: string | null;
  observaciones: string | null;
  estadoStock?: string;
}

export interface InventarioGranjaResponse {
  data: {
    data: InventarioGranja[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

export interface CreateInventarioGranjaDTO {
  nombre: string;
  cantidad: number;
  unidad: string;
  categoria?: string;
  minimoStock?: number;
  proveedor?: string;
  observaciones?: string;
}

export interface UpdateInventarioGranjaDTO {
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

export interface InventarioGranjaStats {
  totalItems: number;
  itemsPorCategoria: Array<{
    categoria: string;
    _count: { id: number };
  }>;
  itemsConStockBajo: number;
  itemsCriticos: number;
}
