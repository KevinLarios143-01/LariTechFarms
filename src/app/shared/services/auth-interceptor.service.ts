import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { UserSessionService } from './user-session.service';
import { PermissionsService } from './permissions.service';
import { environment } from '../../../environments/environment';

/** Endpoints that must NOT be intercepted (avoids infinite loops). */
const AUTH_SKIP_URLS = [
  '/v1/auth/refresh',
  '/v1/auth/login',
  '/v1/auth/firebase-login',
  '/v1/auth/logout',
];

/** Module-level state shared across all invocations of the functional interceptor. */
let isRefreshing = false;
const refreshTokenSubject = new BehaviorSubject<string | null>(null);

/**
 * Checks whether the request URL targets one of the auth endpoints
 * that should bypass token attachment and 401 handling.
 */
function isAuthEndpoint(url: string): boolean {
  return AUTH_SKIP_URLS.some((path) => url.includes(path));
}

/**
 * Clones the request with the Authorization header and withCredentials flag.
 */
function addTokenToRequest(req: HttpRequest<unknown>, token: string): HttpRequest<unknown> {
  return req.clone({
    setHeaders: { Authorization: `Bearer ${token}` },
    withCredentials: true,
  });
}

export const AuthInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const tokenService = inject(TokenService);
  const http = inject(HttpClient);
  const router = inject(Router);
  const userSessionService = inject(UserSessionService);
  const permissionsService = inject(PermissionsService);

  // --- Skip auth endpoints to avoid infinite loops ---
  if (isAuthEndpoint(req.url)) {
    // Still send withCredentials so the browser attaches the httpOnly cookie
    const cloned = req.clone({ withCredentials: true });
    return next(cloned);
  }

  // --- Attach access token if available ---
  const token = tokenService.getAccessToken();
  const authedReq = token ? addTokenToRequest(req, token) : req.clone({ withCredentials: true });

  return next(authedReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        return handle401(req, next, tokenService, http, router, userSessionService, permissionsService);
      }
      return throwError(() => error);
    }),
  );
};

/**
 * Handles 401 responses by attempting a silent token refresh.
 *
 * If a refresh is already in progress, the request is queued and replayed
 * once the new token arrives. This prevents concurrent refresh calls.
 */
function handle401(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
  tokenService: TokenService,
  http: HttpClient,
  router: Router,
  userSessionService: UserSessionService,
  permissionsService: PermissionsService,
): Observable<any> {
  if (isRefreshing) {
    // A refresh is already in flight — queue this request
    return refreshTokenSubject.pipe(
      filter((token) => token !== null),
      take(1),
      switchMap((newToken) => next(addTokenToRequest(req, newToken!))),
    );
  }

  // Start a new refresh cycle
  isRefreshing = true;
  refreshTokenSubject.next(null);

  const refreshUrl = `${environment.apiUrl}/v1/auth/refresh`;

  return http.post<{ data: { accessToken: string } }>(refreshUrl, {}, { withCredentials: true }).pipe(
    switchMap((response) => {
      const newAccessToken = response?.data?.accessToken;
      if (!newAccessToken) {
        // Unexpected response shape — treat as failure
        return handleRefreshFailure(tokenService, userSessionService, permissionsService, router);
      }

      isRefreshing = false;
      tokenService.setAccessToken(newAccessToken);
      refreshTokenSubject.next(newAccessToken);

      // Replay the original request with the fresh token
      return next(addTokenToRequest(req, newAccessToken));
    }),
    catchError(() => {
      return handleRefreshFailure(tokenService, userSessionService, permissionsService, router);
    }),
  );
}

/**
 * Clears all session state and redirects to the login page.
 * Called when the refresh attempt fails (expired refresh token, revoked, etc.).
 */
function handleRefreshFailure(
  tokenService: TokenService,
  userSessionService: UserSessionService,
  permissionsService: PermissionsService,
  router: Router,
): Observable<never> {
  isRefreshing = false;
  refreshTokenSubject.next(null);

  tokenService.clearAccessToken();
  userSessionService.clearSession();
  permissionsService.clear();
  router.navigate(['/auth/login']);

  return throwError(() => new HttpErrorResponse({ status: 401, statusText: 'Session expired' }));
}
