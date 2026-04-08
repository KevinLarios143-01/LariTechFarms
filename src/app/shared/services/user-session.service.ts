import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { UserData } from '../interfaces/login-response.interface';
import { MeResponse } from '../interfaces/me-response.interface';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable({ providedIn: 'root' })
export class UserSessionService {
  private userSubject = new BehaviorSubject<UserData | null>(null);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  user$ = this.userSubject.asObservable();
  loading$ = this.loadingSubject.asObservable();

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  get currentUser(): UserData | null {
    return this.userSubject.getValue();
  }

  setUser(user: UserData): void {
    this.userSubject.next(user);
  }

  clearSession(): void {
    this.userSubject.next(null);
  }

  initSession(): Observable<void> {
    const token = localStorage.getItem('auth_token');
    if (!token || token.trim() === '') {
      return of(undefined);
    }

    // Check if token is expired before making the request
    try {
      const payload = this.decodeToken(token);
      if (!payload || (payload.exp && payload.exp < Math.floor(Date.now() / 1000))) {
        this.clearSession();
        this.router.navigate(['/auth/login']);
        return of(undefined);
      }
    } catch {
      this.clearSession();
      this.router.navigate(['/auth/login']);
      return of(undefined);
    }

    this.loadingSubject.next(true);

    return this.http.get<MeResponse>(`${this.apiUrl}/v1/auth/me`).pipe(
      map(response => this.mapMeToUserData(response.data)),
      tap(userData => {
        this.userSubject.next(userData);
        this.loadingSubject.next(false);
      }),
      catchError((error: HttpErrorResponse) => {
        this.loadingSubject.next(false);

        if (error.status === 401 || error.status === 404) {
          this.clearSession();
          this.router.navigate(['/auth/login']);
          return of(undefined);
        }

        if (error.status === 500 || error.status === 0) {
          // Fallback: extract basic data from JWT
          const fallbackData = this.extractFromToken();
          if (fallbackData) {
            this.userSubject.next(fallbackData as UserData);
          }
          return of(undefined);
        }

        // Any other error: try JWT fallback
        const fallbackData = this.extractFromToken();
        if (fallbackData) {
          this.userSubject.next(fallbackData as UserData);
        }
        return of(undefined);
      }),
      map(() => undefined)
    );
  }

  extractFromToken(): Partial<UserData> | null {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      return null;
    }

    try {
      const payload = this.decodeToken(token);
      if (!payload) {
        return null;
      }

      return {
        id_usuario: payload.idUsuario,
        email: payload.email,
        rol: payload.rol,
        nombre: '',
        apellido: '',
        tenant: {
          id_tenant: payload.idTenant,
          nombre: ''
        }
      };
    } catch {
      return null;
    }
  }

  private mapMeToUserData(me: MeResponse['data']): UserData {
    return {
      id_usuario: me.id,
      nombre: me.nombre,
      apellido: me.apellido,
      email: me.email,
      rol: me.rol,
      tenant: {
        id_tenant: me.tenant.id,
        nombre: me.tenant.nombre
      }
    };
  }

  private decodeToken(token: string): JwtPayload | null {
    try {
      const parts = token.split('.');
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
