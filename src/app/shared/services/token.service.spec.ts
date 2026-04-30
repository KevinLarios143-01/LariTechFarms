import { TestBed } from '@angular/core/testing';
import { TokenService } from './token.service';

/**
 * Helper: builds a JWT string with the given payload.
 * Uses a dummy header and signature — only the payload matters for decoding.
 */
function buildJwt(payload: Record<string, unknown>): string {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const body = btoa(JSON.stringify(payload));
  const signature = 'fake-signature';
  return `${header}.${body}.${signature}`;
}

describe('TokenService', () => {
  let service: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenService);
  });

  it('should be created as a singleton', () => {
    expect(service).toBeTruthy();
  });

  // --- setAccessToken / getAccessToken ---

  it('should return null when no token has been set', () => {
    expect(service.getAccessToken()).toBeNull();
  });

  it('should store and return the access token', () => {
    const token = buildJwt({ idUsuario: 1, exp: 9999999999 });
    service.setAccessToken(token);
    expect(service.getAccessToken()).toBe(token);
  });

  it('should overwrite a previously stored token', () => {
    const first = buildJwt({ idUsuario: 1, exp: 9999999999 });
    const second = buildJwt({ idUsuario: 2, exp: 9999999999 });
    service.setAccessToken(first);
    service.setAccessToken(second);
    expect(service.getAccessToken()).toBe(second);
  });

  // --- clearAccessToken ---

  it('should clear the stored token', () => {
    service.setAccessToken(buildJwt({ idUsuario: 1, exp: 9999999999 }));
    service.clearAccessToken();
    expect(service.getAccessToken()).toBeNull();
  });

  it('should not throw when clearing with no token set', () => {
    expect(() => service.clearAccessToken()).not.toThrow();
    expect(service.getAccessToken()).toBeNull();
  });

  // --- isTokenExpired ---

  it('should report expired when no token is set', () => {
    expect(service.isTokenExpired()).toBeTrue();
  });

  it('should report not expired for a token with future exp', () => {
    const futureExp = Math.floor(Date.now() / 1000) + 900; // +15 min
    service.setAccessToken(buildJwt({ idUsuario: 1, exp: futureExp }));
    expect(service.isTokenExpired()).toBeFalse();
  });

  it('should report expired for a token with past exp', () => {
    const pastExp = Math.floor(Date.now() / 1000) - 60; // 1 min ago
    service.setAccessToken(buildJwt({ idUsuario: 1, exp: pastExp }));
    expect(service.isTokenExpired()).toBeTrue();
  });

  it('should report expired when token has no exp claim', () => {
    service.setAccessToken(buildJwt({ idUsuario: 1 }));
    expect(service.isTokenExpired()).toBeTrue();
  });

  it('should report expired for a malformed token', () => {
    service.setAccessToken('not-a-jwt');
    expect(service.isTokenExpired()).toBeTrue();
  });

  // --- decodePayload ---

  it('should return null when no token is set', () => {
    expect(service.decodePayload()).toBeNull();
  });

  it('should decode a valid JWT payload', () => {
    const payload = {
      idUsuario: 42,
      idTenant: 7,
      email: 'test@example.com',
      rol: 'admin',
      exp: 9999999999,
      iat: 1700000000,
    };
    service.setAccessToken(buildJwt(payload));

    const decoded = service.decodePayload();
    expect(decoded).toBeTruthy();
    expect(decoded!.idUsuario).toBe(42);
    expect(decoded!.idTenant).toBe(7);
    expect(decoded!.email).toBe('test@example.com');
    expect(decoded!.rol).toBe('admin');
    expect(decoded!.exp).toBe(9999999999);
    expect(decoded!.iat).toBe(1700000000);
  });

  it('should return null for a token with fewer than 3 parts', () => {
    service.setAccessToken('only.two');
    expect(service.decodePayload()).toBeNull();
  });

  it('should return null for a token with invalid base64 payload', () => {
    service.setAccessToken('header.!!!invalid-base64!!!.signature');
    expect(service.decodePayload()).toBeNull();
  });

  it('should return null for a token with non-JSON payload', () => {
    const nonJson = btoa('this is not json');
    service.setAccessToken(`header.${nonJson}.signature`);
    expect(service.decodePayload()).toBeNull();
  });

  // --- Memory-only storage (Requirement 10.3) ---

  it('should NOT use localStorage for token storage', () => {
    const spy = spyOn(localStorage, 'setItem');
    service.setAccessToken(buildJwt({ idUsuario: 1, exp: 9999999999 }));
    expect(spy).not.toHaveBeenCalled();
  });

  it('should NOT read from localStorage', () => {
    const spy = spyOn(localStorage, 'getItem');
    service.getAccessToken();
    expect(spy).not.toHaveBeenCalled();
  });
});
