
export interface Company {
  id: number;
  img: string;
  name: string;
  email: string;
  package: string;
  packageBadge: string;
  registeredBy: string;
  statusText: string;
  status: string;
  telefono?: string;
  direccion?: string;
  nit?: string;
  activo?: boolean;
}

export interface TenantResponse {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
  fechaRegistro: string;
  direccion: string;
  nit: string;
  activo: boolean;
}

export interface ApiResponse {
  success: boolean;
  data: {
    data: TenantResponse[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
  timestamp: string;
}

export interface SubscriptionPlan {
  id: number;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  minUsers: number;
  maxUsers: number;
  storage: string;
  status: boolean;
  description?: string;
}

export interface PlanResponse {
  id_plan: number;
  nombre: string;
  precio_mensual: number;
  precio_anual: number;
  usuarios_min: number;
  usuarios_max: number;
  almacenamiento: string;
  activo: boolean;
  descripcion?: string;
}

