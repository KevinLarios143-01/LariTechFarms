/*
{
  "success": true,
  "data": {
    "data": [
      {
        "id_empleado": 1,
        "id_tenant": 1,
        "nombre": "Juan",
        "apellido": "Perez",
        "puesto": "Supervisor",
        "salario": "3500",
        "fecha_contratacion": "2025-03-27T00:00:00.000Z",
        "activo": true,
        "telefono": "5011-2233",
        "correo": "juan@elprogreso.com",
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
  "timestamp": "2025-09-02T05:28:51.835Z"
}
*/

export interface Empleado {
  id_empleado: number;
  id_tenant: number;
  nombre: string;
  apellido: string;
  puesto: string;
  salario: string;
  fecha_contratacion: string;
  activo: boolean;
  telefono: string;
  correo: string;
  _count: {
    prestamos: number;
    asistencias: number;
  };
  // Campos adicionales opcionales
  telefono_emergencia1?: string;
  telefono_emergencia2?: string;
  fecha_nacimiento?: string;
  genero?: string;
  estado_civil?: string;
  tipo_sangre?: string;
  direccion_actual?: string;
  direccion_adicional?: string;
  departamento?: string;
  fecha_renuncia?: string;
  fecha_salida?: string;
  deuda_pendiente?: number;
  tipo_jornada?: string;
  // Información bancaria
  nombre_cuenta?: string;
  numero_cuenta?: string;
  nombre_banco?: string;
  ubicacion_banco?: string;
  codigo_banco?: string;
  tax_payer_id?: string;
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
