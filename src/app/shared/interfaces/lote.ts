export interface Lote {
  id: number;
  idTenant: number;
  tipo: string;
  fechaInicio: string;
  fechaFin: string;
  cantidad: number;
  galera: string;
  estado: string;
  observaciones?: string;
  _count?: {
    movAvesLote: number;
    tickets: number;
  };
}

export interface LoteResponse {
  success: boolean;
  data: {
    data: Lote[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
  timestamp: string;
}