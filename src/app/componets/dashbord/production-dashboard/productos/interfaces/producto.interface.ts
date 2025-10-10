export interface Producto {
  id: number
  idTenant: number
  nombre: string
  tamanio?: string
  precio: number
  stock: number
  categoria?: string
  activo: boolean
}

export interface CreateProductoDTO {
  nombre: string
  tamanio?: string
  precio: number
  stock?: number
  categoria?: string
  activo?: boolean
}

export interface UpdateProductoDTO {
  nombre?: string
  tamanio?: string
  precio?: number
  categoria?: string
  activo?: boolean
}

export interface UpdateStockDTO {
  stock: number
}

export interface ProductosResponse {
  success: boolean
  data: {
    items: Producto[]
    pagination: {
      page: number
      limit: number
      total: number
      totalPages: number
    }
  }
}

export interface ProductosStats {
  totalProductos: number
  productosActivos: number
  productosInactivos: number
  stockBajo: Array<{
    id: number
    nombre: string
    stock: number
    categoria: string
  }>
  productosPorCategoria: Array<{
    categoria: string
    _count: { id: number }
  }>
  valorTotalInventario: number
}