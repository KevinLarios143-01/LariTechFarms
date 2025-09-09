export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
  activo: boolean;
  ultimoLogin: string;
  fechaCreacion: string;
  idEmpleado: any;
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

export interface UsuarioCreate {
  email: string;
  password: string;
  nombre: string;
  apellido: string;
  rol: string;
  id_empleado: number | null;
}
export interface UsuarioByIdResponse {
  success: boolean;
  data: Usuario;
  timestamp: string;
}


