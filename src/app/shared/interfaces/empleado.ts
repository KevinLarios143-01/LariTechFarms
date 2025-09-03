export interface Empleado {
  id_empleado: number;
  id_tenant: number;
  img: string;
  nombre: string;
  apellido: string;
  puesto: string;
  salario: string;
  fecha_contratacion: string;
  activo: boolean;
  telefono: string;
  correo: string;
  departamento: string;
  tiempo_de_trabajo: string;
  _count: {
    prestamos: number;
    asistencias: number;
  };
}

export interface EmpleadoResponse {
  success: boolean;
  data: {
    data: Empleado[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
  timestamp: string;
}

export interface EmpleadoResponse2 {
  success: boolean;
  data: EmpleadoStats;
  timestamp: string;
}

export interface EmpleadoStats {
  totalEmpleados: number;
  empleadosActivos: number;
  empleadosInactivos: number;
  empleadosHombres: number;
  empleadasMujeres: number;
  empleadosNuevos: number;
  empleadosPorPuesto: {
    puesto: string;
    _count: {
      id_empleado: number;
    };
    _avg: {
      salario: string;
    };
  }[];
  salarioPromedio: string;
  nominaTotal: string;
}

