export interface Producto {
  id: number;
  nombre: string;
  descripcion?: string;
  precio: number;
  stock: number;
  tamanio: string;
  categoria: string;
  estado: string;
  unidadMedida: string;
  stockMinimo: number;
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