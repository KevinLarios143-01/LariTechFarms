/**
 * PBT — Bug Condition Exploration: Ciclo infinito en Access Denied
 *
 * **Validates: Requirements 1.1, 1.2, 1.3, 1.4**
 *
 * Property 1: Bug Condition — Para cualquier entrada donde isBugCondition es true
 * (usuario con rol válido pero sin acceso a su ruta por defecto ni a ninguna ruta
 * de fallback), getDefaultRedirect() DEBERÁ retornar '/home' en lugar de '/access-denied'.
 *
 * AccessDeniedComponent.goHome() DEBERÁ navegar a '/home' directamente (no llamar
 * a getDefaultRedirect()), y AccessDeniedComponent DEBERÁ tener un método logout().
 *
 * NOTA: Este test se ejecuta ANTES de la corrección. Se espera que FALLE en código
 * sin corregir, confirmando que el bug existe. Después de la corrección, debe PASAR.
 */
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import * as fc from 'fast-check';
import { PermissionsService } from './permissions.service';
import {
  ModuleName,
  UserRole,
  VALID_ROLES,
  DEFAULT_REDIRECTS,
  MODULE_ROUTE_MAP,
} from './permissions.config';
import { AccessDeniedComponent } from '../../componets/custom-pages/access-denied/access-denied.component';
import { AuthService } from './auth.service';

const ALL_MODULES: ModuleName[] = [
  'RH', 'Clientes', 'Business', 'Lotes', 'Producción', 'Reportería', 'Super Admin',
];

/**
 * Determines which module a route belongs to (mirrors PermissionsService.getModuleForRoute).
 */
function getModuleForRoute(route: string): ModuleName | null {
  const entries = Object.entries(MODULE_ROUTE_MAP) as [ModuleName, string[]][];
  for (const [moduleName, prefixes] of entries) {
    for (const prefix of prefixes) {
      if (route.startsWith(prefix)) {
        return moduleName;
      }
    }
  }
  return null;
}

/**
 * Checks if a given input represents the bug condition:
 * - The user's default route is NOT accessible
 * - No fallback route is accessible either
 */
function isBugCondition(input: {
  role: UserRole;
  tenantModules: string[];
  roleModules: string[];
  userModules: string[];
}): boolean {
  const { role, tenantModules, roleModules, userModules } = input;

  // Check default route accessibility
  const defaultRoute = DEFAULT_REDIRECTS[role];
  if (defaultRoute && isRouteAccessible(defaultRoute, tenantModules, roleModules, userModules, role)) {
    return false; // Default route is accessible — not a bug condition
  }

  // Check fallback routes
  const allowedModules = userModules.length > 0
    ? roleModules.filter(m => userModules.includes(m))
    : roleModules;

  for (const mod of allowedModules) {
    if (tenantModules.includes(mod)) {
      const prefixes = MODULE_ROUTE_MAP[mod as ModuleName];
      if (prefixes && prefixes.length > 0) {
        if (isRouteAccessible(prefixes[0], tenantModules, roleModules, userModules, role)) {
          return false; // Found an accessible fallback — not a bug condition
        }
      }
    }
  }

  return true; // No accessible routes — bug condition
}

/**
 * Mirrors the 4-layer access check logic of PermissionsService.hasRouteAccess
 * without route permissions (layer 4) since we leave those empty in tests.
 */
function isRouteAccessible(
  route: string,
  tenantModules: string[],
  roleModules: string[],
  userModules: string[],
  role: UserRole
): boolean {
  // Layer 1-3: module access
  const mod = getModuleForRoute(route);
  if (!mod) return false;
  if (!tenantModules.includes(mod)) return false;
  if (!roleModules.includes(mod)) return false;
  if (userModules.length > 0 && !userModules.includes(mod)) return false;
  return true;
}


/**
 * Arbitrary: generate an input that satisfies isBugCondition.
 * Strategy: pick a valid role, then ensure tenantModules does NOT include
 * the module of the default route, and roleModules/userModules are empty
 * (guaranteeing no fallback routes are accessible).
 */
const arbBugConditionInput = fc.record({
  role: fc.constantFrom(...VALID_ROLES),
  tenantModules: fc.constant([] as string[]),
  roleModules: fc.constant([] as string[]),
  userModules: fc.constant([] as string[]),
}).filter(input => isBugCondition(input));

/**
 * A broader arbitrary that generates bug conditions with non-empty but
 * mismatched modules (e.g., tenant has modules but role doesn't, or vice versa).
 */
const arbBugConditionBroader = fc.record({
  role: fc.constantFrom(...VALID_ROLES),
  tenantModules: fc.subarray([...ALL_MODULES], { minLength: 0, maxLength: ALL_MODULES.length }),
  roleModules: fc.subarray([...ALL_MODULES], { minLength: 0, maxLength: ALL_MODULES.length }),
  userModules: fc.subarray([...ALL_MODULES], { minLength: 0, maxLength: ALL_MODULES.length }),
}).filter(input => isBugCondition(input));

describe('Bug Condition Exploration — Ciclo infinito en Access Denied (Property 1)', () => {
  let service: PermissionsService;
  let routerSpy: jasmine.SpyObj<Router>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    routerSpy.navigate.and.returnValue(Promise.resolve(true));
    authServiceSpy = jasmine.createSpyObj('AuthService', ['singout', 'removeToken']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PermissionsService,
        { provide: Router, useValue: routerSpy },
        { provide: AuthService, useValue: authServiceSpy },
      ],
    });
    service = TestBed.inject(PermissionsService);
  });

  /**
   * Property 1a: getDefaultRedirect() should return '/home' (not '/access-denied')
   * when user has no accessible routes.
   *
   * On UNFIXED code: FAILS (returns '/access-denied') — confirms the bug.
   * On FIXED code: PASSES (returns '/home').
   */
  it('getDefaultRedirect() returns /home (not /access-denied) when no routes are accessible (empty modules)', () => {
    fc.assert(
      fc.property(
        arbBugConditionInput,
        (input) => {
          // Configure service state
          (service as any).userRole$.next(input.role);
          (service as any).tenantModules$.next(input.tenantModules);
          (service as any).roleModules$.next(input.roleModules);
          (service as any).userModules$.next(input.userModules);
          (service as any).roleRoutePermissions$.next({});
          (service as any).userRoutePermissions$.next({});

          const result = service.getDefaultRedirect();

          // Expected behavior: should return '/home', NOT '/access-denied'
          expect(result).toBe('/home');
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 1b: getDefaultRedirect() should return '/home' (not '/access-denied')
   * with broader mismatched module configurations.
   *
   * On UNFIXED code: FAILS — confirms the bug across varied inputs.
   * On FIXED code: PASSES.
   */
  it('getDefaultRedirect() returns /home (not /access-denied) when no routes are accessible (broader inputs)', () => {
    fc.assert(
      fc.property(
        arbBugConditionBroader,
        (input) => {
          (service as any).userRole$.next(input.role);
          (service as any).tenantModules$.next(input.tenantModules);
          (service as any).roleModules$.next(input.roleModules);
          (service as any).userModules$.next(input.userModules);
          (service as any).roleRoutePermissions$.next({});
          (service as any).userRoutePermissions$.next({});

          const result = service.getDefaultRedirect();

          expect(result).toBe('/home');
        }
      ),
      { numRuns: 200 }
    );
  });

  /**
   * Property 1c: getDefaultRedirect() should return '/home' when role is null.
   *
   * On UNFIXED code: FAILS (returns '/access-denied').
   * On FIXED code: PASSES (returns '/home').
   */
  it('getDefaultRedirect() returns /home when role is null', () => {
    (service as any).userRole$.next(null);
    (service as any).tenantModules$.next([]);
    (service as any).roleModules$.next([]);
    (service as any).userModules$.next([]);

    const result = service.getDefaultRedirect();
    expect(result).toBe('/home');
  });

  /**
   * Property 1d: AccessDeniedComponent.goHome() should navigate to '/home'
   * directly, NOT call getDefaultRedirect() which could return '/access-denied'.
   *
   * On UNFIXED code: FAILS (goHome calls getDefaultRedirect → navigates to '/access-denied').
   * On FIXED code: PASSES (goHome navigates directly to '/home').
   */
  it('AccessDeniedComponent.goHome() navigates to /home (not /access-denied cycle)', () => {
    // Set up bug condition: no accessible routes
    (service as any).userRole$.next('admin');
    (service as any).tenantModules$.next([]);
    (service as any).roleModules$.next([]);
    (service as any).userModules$.next([]);
    (service as any).roleRoutePermissions$.next({});
    (service as any).userRoutePermissions$.next({});

    const component = new AccessDeniedComponent(service, authServiceSpy, routerSpy);
    component.goHome();

    // Should navigate to '/home', not '/access-denied'
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/home']);
  });

  /**
   * Property 1e: AccessDeniedComponent should have a logout() method
   * to allow users to escape the access-denied screen.
   *
   * On UNFIXED code: FAILS (no logout method exists).
   * On FIXED code: PASSES (logout method added).
   */
  it('AccessDeniedComponent has a logout() method for escaping access-denied', () => {
    const component = new AccessDeniedComponent(service, authServiceSpy, routerSpy);
    expect(typeof (component as any).logout).toBe('function');
  });
});
