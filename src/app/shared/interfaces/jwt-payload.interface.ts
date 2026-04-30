export interface JwtPayload {
  idUsuario: number;
  idTenant: number;
  email: string;
  rol: string;
  mustChangePassword?: boolean;
  exp: number;
  iat: number;
}
