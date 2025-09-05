/*

  "success": true,
  "data": {
    "data": [
      {
        "id": 1,
        "idTenant": 1,
        "nombre": "Juan",
        "apellido": "Perez",
        "puesto": "Supervisor",
        "salario": "3500",
        "fechaContratacion": "2025-04-04T00:00:00.000Z",
        "activo": true,
        "telefono": "5011-2233",
        "correo": "juan@elprogreso.com",
        "genero": "M",
        "_count": {
          "prestamos": 1,
          "asistencias": 1
        }
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 1,
      "totalPages": 1
    }
  },
  "timestamp": "2025-09-05T18:00:07.547Z"
}
*/

export interface Empleado {
  id: number;
  idTenant: number;
  nombre: string;
  apellido: string;
  puesto: string;
  salario: string;
  fechaContratacion: string;
  activo: boolean;
  telefono: string;
  correo: string;
  tiempoTrabajo?: string; // Nuevo campo opcional para tiempo de trabajo
  departamento?: string; // Nuevo campo opcional para departamento
  img?: string; // Nuevo campo opcional para imagen
  genero: 'M' | 'F';
  _count?: {
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

