export interface MeResponse {
  success: boolean;
  data: {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    rol: string;
    ultimoLogin: string;
    fechaCreacion: string;
    tenant: {
      id: number;
      nombre: string;
      correo: string;
      telefono: string;
    };
  };
}
