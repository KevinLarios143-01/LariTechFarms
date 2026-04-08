export interface JwtPayload {
  idUsuario: number;
  idTenant: number;
  email: string;
  rol: string;
  exp: number;
  iat: number;
}
