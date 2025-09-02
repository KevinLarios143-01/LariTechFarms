export interface Plan {
  id_plan: number;
  nombre: string;
  descripcion: string;
  precio_mensual: string;
  limite_aves: number;
  limite_usuarios: number;
  funciones_disponibles: {
    modulos: string[];
  };
  nivel_prioridad: number;
}

export interface PlanResponse {
  success: boolean;
  data: {
    data: Plan[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
  timestamp: string;
}
