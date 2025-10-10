export interface ControlHuevos {
  id: number
  idLote: number
  fecha: string
  cantidadHuevos: number
  calidad?: "Excelente" | "Buena" | "Regular" | "Mala"
  idUsuario?: number
  lote?: {
    id: number
    galera: string
    tipo: string
    cantidad: number
    fechaInicio: string
  }
  usuario?: {
    nombre: string
    apellido: string
  }
}

export interface CreateControlHuevosDTO {
  idLote: number
  fecha: string
  cantidadHuevos: number
  calidad?: "Excelente" | "Buena" | "Regular" | "Mala"
}

export interface UpdateControlHuevosDTO {
  cantidadHuevos?: number
  calidad?: "Excelente" | "Buena" | "Regular" | "Mala"
}

export interface ControlHuevosResponse {
  success: boolean
  data: {
    items: ControlHuevos[]
    pagination: {
      page: number
      limit: number
      total: number
      totalPages: number
    }
  }
}

export interface ControlHuevosStats {
  totalHuevos: number
  totalRegistros: number
  promedioHuevosPorDia: number
  produccionPorLote: Array<{
    idLote: number
    galera: string
    totalHuevos: number
    promedioHuevos: number
    registros: number
  }>
  produccionPorCalidad: Array<{
    calidad: string
    totalHuevos: number
    registros: number
  }>
  tendenciaSemanal: Array<{
    semana: string
    totalHuevos: number
    promedioCalidad: string
  }>
}