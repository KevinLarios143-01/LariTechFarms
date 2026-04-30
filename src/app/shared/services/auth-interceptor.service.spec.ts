import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { AuthInterceptor } from './auth-interceptor.service';
import { TokenService } from './token.service';
import { UserSessionService } from './user-session.service';
import { PermissionsService } from './permissions.service';
import { environment } from '../../../environments/environment';

/**
 * Helper: builds a JWT string with the given payload.
 */
function buildJwt(payload: Record<string, unknown>): string {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const body = btoa(JSON.stringify(payload));
  return `${header}.${body}.fake-signature`;
}

describe('AuthInterceptor', () => {
  let httpClient: HttpClient;
  let httpTesting: HttpTestingController;
  let tokenService: TokenService;
  let router: Router;
  let userSessionService: jasmine.SpyObj<UserSessionService>;
  let permissionsService: jasmine.SpyObj<PermissionsService>;

  const apiUrl = environment.apiUrl;
  const testToken = buildJwt({ idUsuario: 1, idTenant: 1, email: 'test@test.com', rol: 'admin', exp: 9999999999, iat: 1700000000 });

  beforeEach(() => {
    const userSessionSpy = jasmine.createSpyObj('UserSessionService', ['clearSession']);
    const permissionsSpy = jasmine.createSpyObj('PermissionsService', ['clear']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([AuthInterceptor])),
        provideHttpClientTesting(),
        TokenService,
        { provide: UserSessionService, useValue: userSessionSpy },
        { provide: PermissionsService, useValue: permissionsSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTesting = TestBed.inject(HttpTestingController);
    tokenService = TestBed.inject(TokenService);
    router = TestBed.inject(Router);
    userSessionService = TestBed.inject(UserSessionService) as jasmine.SpyObj<UserSessionService>;
    permissionsService = TestBed.inject(PermissionsService) as jasmine.SpyObj<PermissionsService>;

    // Reset module-level state between tests
    tokenService.clearAccessToken();
  });

  afterEach(() => {
    httpTesting.verify();
  });

  // --- Token attachment ---

  it('should attach Authorization header when token is available', () => {
    tokenService.setAccessToken(testToken);

    httpClient.get(`${apiUrl}/v1/some-endpoint`).subscribe();

    const req = httpTesting.expectOne(`${apiUrl}/v1/some-endpoint`);
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${testToken}`);
    req.flush({});
  });

  it('should NOT attach Authorization header when no token is set', () => {
    httpClient.get(`${apiUrl}/v1/some-endpoint`).subscribe();

    const req = httpTesting.expectOne(`${apiUrl}/v1/some-endpoint`);
    expect(req.request.headers.has('Authorization')).toBeFalse();
    req.flush({});
  });

  it('should set withCredentials on all API requests', () => {
    tokenService.setAccessToken(testToken);

    httpClient.get(`${apiUrl}/v1/some-endpoint`).subscribe();

    const req = httpTesting.expectOne(`${apiUrl}/v1/some-endpoint`);
    expect(req.request.withCredentials).toBeTrue();
    req.flush({});
  });

  // --- Auth endpoint skipping ---

  it('should NOT attach Authorization header for login endpoint', () => {
    tokenService.setAccessToken(testToken);

    httpClient.post(`${apiUrl}/v1/auth/login`, {}).subscribe();

    const req = httpTesting.expectOne(`${apiUrl}/v1/auth/login`);
    expect(req.request.headers.has('Authorization')).toBeFalse();
    expect(req.request.withCredentials).toBeTrue();
    req.flush({});
  });

  it('should NOT attach Authorization header for refresh endpoint', () => {
    tokenService.setAccessToken(testToken);

    httpClient.post(`${apiUrl}/v1/auth/refresh`, {}).subscribe();

    const req = httpTesting.expectOne(`${apiUrl}/v1/auth/refresh`);
    expect(req.request.headers.has('Authorization')).toBeFalse();
    expect(req.request.withCredentials).toBeTrue();
    req.flush({});
  });

  it('should NOT attach Authorization header for logout endpoint', () => {
    tokenService.setAccessToken(testToken);

    httpClient.post(`${apiUrl}/v1/auth/logout`, {}).subscribe();

    const req = httpTesting.expectOne(`${apiUrl}/v1/auth/logout`);
    expect(req.request.headers.has('Authorization')).toBeFalse();
    expect(req.request.withCredentials).toBeTrue();
    req.flush({});
  });

  it('should NOT attach Authorization header for firebase-login endpoint', () => {
    tokenService.setAccessToken(testToken);

    httpClient.post(`${apiUrl}/v1/auth/firebase-login`, {}).subscribe();

    const req = httpTesting.expectOne(`${apiUrl}/v1/auth/firebase-login`);
    expect(req.request.headers.has('Authorization')).toBeFalse();
    req.flush({});
  });

  // --- 401 handling with refresh ---

  it('should attempt token refresh on 401 response', () => {
    tokenService.setAccessToken(testToken);
    const newToken = buildJwt({ idUsuario: 1, exp: 9999999999 });

    httpClient.get(`${apiUrl}/v1/some-endpoint`).subscribe();

    // Original request returns 401
    const originalReq = httpTesting.expectOne(`${apiUrl}/v1/some-endpoint`);
    originalReq.flush({}, { status: 401, statusText: 'Unauthorized' });

    // Interceptor should call refresh endpoint
    const refreshReq = httpTesting.expectOne(`${apiUrl}/v1/auth/refresh`);
    expect(refreshReq.request.method).toBe('POST');
    expect(refreshReq.request.withCredentials).toBeTrue();
    refreshReq.flush({ data: { accessToken: newToken } });

    // After refresh, the original request should be replayed
    const replayedReq = httpTesting.expectOne(`${apiUrl}/v1/some-endpoint`);
    expect(replayedReq.request.headers.get('Authorization')).toBe(`Bearer ${newToken}`);
    replayedReq.flush({ success: true });
  });

  it('should store new access token after successful refresh', () => {
    tokenService.setAccessToken(testToken);
    const newToken = buildJwt({ idUsuario: 1, exp: 9999999999 });

    httpClient.get(`${apiUrl}/v1/some-endpoint`).subscribe();

    const originalReq = httpTesting.expectOne(`${apiUrl}/v1/some-endpoint`);
    originalReq.flush({}, { status: 401, statusText: 'Unauthorized' });

    const refreshReq = httpTesting.expectOne(`${apiUrl}/v1/auth/refresh`);
    refreshReq.flush({ data: { accessToken: newToken } });

    const replayedReq = httpTesting.expectOne(`${apiUrl}/v1/some-endpoint`);
    replayedReq.flush({});

    expect(tokenService.getAccessToken()).toBe(newToken);
  });

  // --- Refresh failure ---

  it('should clear session and redirect to login on refresh failure', () => {
    tokenService.setAccessToken(testToken);

    httpClient.get(`${apiUrl}/v1/some-endpoint`).subscribe({
      error: (err) => {
        expect(err.status).toBe(401);
      },
    });

    const originalReq = httpTesting.expectOne(`${apiUrl}/v1/some-endpoint`);
    originalReq.flush({}, { status: 401, statusText: 'Unauthorized' });

    const refreshReq = httpTesting.expectOne(`${apiUrl}/v1/auth/refresh`);
    refreshReq.flush({}, { status: 401, statusText: 'Unauthorized' });

    expect(tokenService.getAccessToken()).toBeNull();
    expect(userSessionService.clearSession).toHaveBeenCalled();
    expect(permissionsService.clear).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
  });

  // --- Non-401 errors pass through ---

  it('should pass through non-401 errors without attempting refresh', () => {
    tokenService.setAccessToken(testToken);

    httpClient.get(`${apiUrl}/v1/some-endpoint`).subscribe({
      error: (err) => {
        expect(err.status).toBe(500);
      },
    });

    const req = httpTesting.expectOne(`${apiUrl}/v1/some-endpoint`);
    req.flush({}, { status: 500, statusText: 'Internal Server Error' });

    // No refresh request should be made
    httpTesting.expectNone(`${apiUrl}/v1/auth/refresh`);
  });

  it('should pass through 403 errors without attempting refresh', () => {
    tokenService.setAccessToken(testToken);

    httpClient.get(`${apiUrl}/v1/some-endpoint`).subscribe({
      error: (err) => {
        expect(err.status).toBe(403);
      },
    });

    const req = httpTesting.expectOne(`${apiUrl}/v1/some-endpoint`);
    req.flush({}, { status: 403, statusText: 'Forbidden' });

    httpTesting.expectNone(`${apiUrl}/v1/auth/refresh`);
  });
});
