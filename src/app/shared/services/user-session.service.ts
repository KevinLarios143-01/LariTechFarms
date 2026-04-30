import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { UserData } from '../interfaces/login-response.interface';
import { MeResponse } from '../interfaces/me-response.interface';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class UserSessionService {
  private userSubject = new BehaviorSubject<UserData | null>(null);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  user$ = this.userSubject.asObservable();
  loading$ = this.loadingSubject.asObservable();

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
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
    const token = this.tokenService.getAccessToken();

    // If token exists and not expired → proceed with /auth/me call
    if (token && token.trim() !== '' && !this.tokenService.isTokenExpired()) {
      return this.fetchMe();
    }

    // No token in memory (page reload) or token expired → attempt silent refresh
    return this.http
      .post<{ data: { accessToken: string } }>(
        `${this.apiUrl}/v1/auth/refresh`,
        {},
        { withCredentials: true }
      )
      .pipe(
        switchMap((response) => {
          const newAccessToken = response?.data?.accessToken;
          if (!newAccessToken) {
            // Unexpected response shape — treat as failure
            this.clearSession();
            return of(undefined);
          }
          // Store the new access token and proceed with /auth/me
          this.tokenService.setAccessToken(newAccessToken);
          return this.fetchMe();
        }),
        catchError(() => {
          // Refresh failed — clear session, don't redirect (interceptor handles it)
          this.clearSession();
          return of(undefined);
        })
      );
  }

  /**
   * Fetches the current user profile from /auth/me and updates session state.
   */
  private fetchMe(): Observable<void> {
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
    const payload = this.tokenService.decodePayload();
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
}
