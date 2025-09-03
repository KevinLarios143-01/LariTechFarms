export interface Usuario {
  id_usuario: number;
  id_tenant: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  rol: string;
  activo: boolean;
  fecha_creacion: string;
  ultimo_acceso: string;
  img: string;
}

export interface UsuarioResponse {
  success: boolean;
  data: {
    data: Usuario[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
  timestamp: string;
}

export interface UsuarioStats {
  totalUsuarios: number;
  usuariosActivos: number;
  usuariosInactivos: number;
  usuariosPorRol: {
    rol: string;
    _count: {
      id_usuario: number;
    };
  }[];
  usuariosNuevos: number;
}

export interface UsuarioStatsResponse {
  success: boolean;
  data: {
    data: UsuarioStats;
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
  timestamp: string;
}