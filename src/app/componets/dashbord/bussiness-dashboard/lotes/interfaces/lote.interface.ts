export interface Lote {
  id: number;
  idTenant: number;
  tipo: "Ponedoras" | "Engorde";
  fechaInicio: string;
  fechaFin?: string | null;
  cantidad: number;
  galera: string;
  estado: "Activo" | "Inactivo" | "Desalojado";
  observaciones?: string | null;
  _count?: {
    movAvesLote: number;
    tickets: number;
  };
}

export interface CreateLoteDTO {
  tipo: "Ponedoras" | "Engorde";
  fechaInicio: string;
  fechaFin?: string;
  cantidad: number;
  galera: string;
  observaciones?: string;
}

export interface UpdateLoteDTO {
  tipo?: "Ponedoras" | "Engorde";
  fechaInicio?: string;
  fechaFin?: string;
  cantidad?: number;
  galera?: string;
  estado?: "Activo" | "Inactivo" | "Desalojado";
  observaciones?: string;
}

export interface UpdateCantidadDTO {
  cantidad: number;
}

export interface LotesResponse {
  success: boolean;
  data: {
    items: Lote[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

export interface LoteResponse {
  success: boolean;
  data: Lote;
  message?: string;
}

export interface LotesStats {
  success: boolean;
  data: {
    totalLotes: number;
    lotesPorTipo: Array<{
      tipo: string;
      _count: { id: number };
      _sum: { cantidad: number };
    }>;
    lotesPorEstado: Array<{
      estado: string;
      _count: { id: number };
    }>;
    cantidadTotal: number;
    promedioCantidad: number;
  };
}