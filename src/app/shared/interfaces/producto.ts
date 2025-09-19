export interface Producto {
  id: number;
  nombre: string;
  descripcion?: string;
  precio?: number;
  estado?: string;
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