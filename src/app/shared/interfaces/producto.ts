export interface Producto {
  id: number;
  idTenant?: number;
  nombre: string;
  descripcion?: string;
  precio: number | string;
  stock: number;
  tamanio: string;
  categoria: string;
  activo: boolean;
  estado?: string; // Mantener por compatibilidad
  unidadMedida?: string;
  stockMinimo?: number;
}

export interface ProductoResponse {
  success: boolean;
  data: {
    data: Producto[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
  timestamp: string;
}