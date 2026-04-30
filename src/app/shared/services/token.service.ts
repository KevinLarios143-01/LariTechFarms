import { Injectable } from '@angular/core';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

/**
 * Servicio singleton para gestión segura del access token en memoria.
 * El token se almacena en una variable de clase (no en localStorage)
 * para reducir la superficie de ataque XSS.
 *
 * Al recargar la página el token se pierde, pero el refresh token
 * (httpOnly cookie) permite obtener uno nuevo de forma transparente.
 */
@Injectable({ providedIn: 'root' })
export class TokenService {
  private accessToken: string | null = null;

  /**
   * Almacena el access token en memoria.
   */
  setAccessToken(token: string): void {
    this.accessToken = token;
  }

  /**
   * Devuelve el access token almacenado en memoria, o null si no existe.
   */
  getAccessToken(): string | null {
    return this.accessToken;
  }

  /**
   * Elimina el access token de memoria.
   */
  clearAccessToken(): void {
    this.accessToken = null;
  }

  /**
   * Verifica si el access token actual está expirado.
   * Retorna true si no hay token, si no se puede decodificar,
   * o si el claim `exp` ya pasó.
   */
  isTokenExpired(): boolean {
    const payload = this.decodePayload();
    if (!payload || !payload.exp) {
      return true;
    }
    const nowInSeconds = Math.floor(Date.now() / 1000);
    return payload.exp < nowInSeconds;
  }

  /**
   * Decodifica el payload del JWT almacenado en memoria.
   * Retorna null si no hay token o si la decodificación falla.
   */
  decodePayload(): JwtPayload | null {
    if (!this.accessToken) {
      return null;
    }

    try {
      const parts = this.accessToken.split('.');
      if (parts.length !== 3) {
        return null;
      }
      const payload = JSON.parse(atob(parts[1]));
      return payload as JwtPayload;
    } catch {
      return null;
    }
  }
}
