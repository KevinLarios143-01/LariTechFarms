export interface Tenant {
  id_tenant: number;
  nombre: string;
}

export interface UserData {
  id_usuario: number;
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
  tenant: Tenant;
}

export interface LoginData {
  accessToken: string;
  user: UserData;
  mustChangePassword?: boolean;
}

export interface LoginResponse {
  success: boolean;
  message?: string;
  data: LoginData;
  timestamp?: string;
}
