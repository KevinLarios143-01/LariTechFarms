/**
 * PBT — Preservation Tests: Comportamiento base que debe mantenerse tras la corrección
 *
 * **Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5**
 *
 * Property 3: Preservation — Para cualquier entrada donde la condición del bug NO se cumple
 * (usuario SÍ tiene acceso a su ruta por defecto), getDefaultRedirect() DEBERÁ producir
 * el mismo resultado que la función original: DEFAULT_REDIRECTS[role].
 *
 * Property 4: Preservation — Para cualquier intento de acceso a una ruta protegida sin
 * permisos, roleModuleGuard DEBERÁ seguir redirigiendo a /access-denied.
 *
 * NOTA: Estos tests se ejecutan ANTES de la corrección. DEBEN PASAR en código sin corregir,
 * confirmando el comportamiento base a preservar.
 */
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router, UrlTree } from '@angular/router';
import * as fc from 'fast-check';
import { PermissionsService } from './permissions.service';
import {
  ModuleName,
  UserRole,
  VALID_ROLES,
  DEFAULT_REDIRECTS,
  MODULE_ROUTE_MAP,
  ROLE_ACCESS_MATRIX,
} from './permissions.config';

/**
 * Roles whose default route is in the RH module.
 */
const RH_ROLES: UserRole[] = ['superadmin', 'admin', 'gerente'];

/**
 * Roles whose default route is in the Producción module.
 */
const PRODUCTION_ROLES: UserRole[] = ['supervisor', 'operador'];

/**
 * Roles whose default route is in the Business module.
 */
const BUSINESS_ROLES: UserRole[] = ['vendedor'];

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
 * Helper: configure PermissionsService internal state for testing.
 */
function configureService(
  service: PermissionsService,
  config: {
    role: UserRole | null;
    tenantModules: string[];
    roleModules: string[];
    userModules: string[];
    roleRoutePermissions?: Record<string, string[]>;
    userRoutePermissions?: Record<string, string[]>;
  }
): void {
  (service as any).userRole$.next(config.role);
  (service as any).tenantModules$.next(config.tenantModules);
  (service as any).roleModules$.next(config.roleModules);
  (service as any).userModules$.next(config.userModules);
  (service as any).roleRoutePermissions$.next(config.roleRoutePermissions || {});
  (service as any).userRoutePermissions$.next(config.userRoutePermissions || {});
}

/**
 * Gets the module name that contains the default route for a given role.
 */
function getDefaultRouteModule(role: UserRole): ModuleName | null {
  const defaultRoute = DEFAULT_REDIRECTS[role];
  return defaultRoute ? getModuleForRoute(defaultRoute) : null;
}

// ============================================================================
// Property 3: Preservation — getDefaultRedirect() for users WITH access
// ============================================================================

describe('Preservation — getDefaultRedirect() returns correct default route (Property 3)', () => {
  let service: PermissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PermissionsService],
    });
    service = TestBed.inject(PermissionsService);
  });

  /**
   * Property 3a: For any RH role (superadmin/admin/gerente) with access to RH module,
   * getDefaultRedirect() returns '/dashboard/hrmdashboards/dashboard'.
   *
   * **Validates: Requirements 3.1**
   */
  it('RH roles with RH access → /dashboard/hrmdashboards/dashboard', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...RH_ROLES),
        (role) => {
          const defaultModule = getDefaultRouteModule(role)!;
          // Ensure the role has access to its default module at all layers
          configureService(service, {
            role,
            tenantModules: [defaultModule],
            roleModules: [defaultModule],
            userModules: [],
          });

          const result = service.getDefaultRedirect();
          expect(result).toBe(DEFAULT_REDIRECTS[role]);
        }
      ),
      { numRuns: 50 }
    );
  });

  /**
   * Property 3b: For any production role (supervisor/operador) with access to Producción,
   * getDefaultRedirect() returns '/dashboard/production-dashboard/huevos'.
   *
   * **Validates: Requirements 3.2**
   */
  it('Production roles with Producción access → /dashboard/production-dashboard/huevos', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...PRODUCTION_ROLES),
        (role) => {
          const defaultModule = getDefaultRouteModule(role)!;
          configureService(service, {
            role,
            tenantModules: [defaultModule],
            roleModules: [defaultModule],
            userModules: [],
          });

          const result = service.getDefaultRedirect();
          expect(result).toBe(DEFAULT_REDIRECTS[role]);
        }
      ),
      { numRuns: 50 }
    );
  });

  /**
   * Property 3c: For vendedor with access to Business module,
   * getDefaultRedirect() returns '/dashboard/business-dashboard/ventas/list'.
   *
   * **Validates: Requirements 3.3**
   */
  it('vendedor with Business access → /dashboard/business-dashboard/ventas/list', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...BUSINESS_ROLES),
        (role) => {
          const defaultModule = getDefaultRouteModule(role)!;
          configureService(service, {
            role,
            tenantModules: [defaultModule],
            roleModules: [defaultModule],
            userModules: [],
          });

          const result = service.getDefaultRedirect();
          expect(result).toBe(DEFAULT_REDIRECTS[role]);
        }
      ),
      { numRuns: 50 }
    );
  });

  /**
   * Property 3d (PBT): For ANY valid role with access to its default route module,
   * getDefaultRedirect() returns exactly DEFAULT_REDIRECTS[role].
   *
   * This is the universal property: for all roles where the default route IS accessible,
   * the function returns the configured default.
   *
   * **Validates: Requirements 3.1, 3.2, 3.3**
   */
  it('any role with access to default route module → returns DEFAULT_REDIRECTS[role]', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...VALID_ROLES),
        (role) => {
          const defaultModule = getDefaultRouteModule(role)!;
          // Grant full access to the default module
          configureService(service, {
            role,
            tenantModules: [defaultModule],
            roleModules: [defaultModule],
            userModules: [],
          });

          const result = service.getDefaultRedirect();
          expect(result).toBe(DEFAULT_REDIRECTS[role]);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 3e (PBT): For any role with access to its default route module AND
   * additional modules enabled, getDefaultRedirect() still returns DEFAULT_REDIRECTS[role]
   * (extra modules don't change the default).
   *
   * **Validates: Requirements 3.1, 3.2, 3.3**
   */
  it('any role with default module + extra modules → still returns DEFAULT_REDIRECTS[role]', () => {
    const ALL_MODULES: ModuleName[] = [
      'RH', 'Clientes', 'Business', 'Lotes', 'Producción', 'Reportería', 'Super Admin',
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...VALID_ROLES),
        fc.subarray([...ALL_MODULES], { minLength: 0, maxLength: ALL_MODULES.length }),
        (role, extraModules) => {
          const defaultModule = getDefaultRouteModule(role)!;
          // Always include the default module, plus any random extras
          const tenantModules = Array.from(new Set([defaultModule, ...extraModules]));
          const roleModules = Array.from(new Set([defaultModule, ...extraModules]));

          configureService(service, {
            role,
            tenantModules,
            roleModules,
            userModules: [],
          });

          const result = service.getDefaultRedirect();
          expect(result).toBe(DEFAULT_REDIRECTS[role]);
        }
      ),
      { numRuns: 200 }
    );
  });

  /**
   * Property 3f (PBT): For any role with userModules that INCLUDE the default module,
   * getDefaultRedirect() still returns DEFAULT_REDIRECTS[role].
   * (User-level restrictions that still allow the default module don't change the result.)
   *
   * **Validates: Requirements 3.1, 3.2, 3.3**
   */
  it('any role with userModules including default module → still returns DEFAULT_REDIRECTS[role]', () => {
    const ALL_MODULES: ModuleName[] = [
      'RH', 'Clientes', 'Business', 'Lotes', 'Producción', 'Reportería', 'Super Admin',
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...VALID_ROLES),
        fc.subarray([...ALL_MODULES], { minLength: 0, maxLength: ALL_MODULES.length }),
        (role, extraUserModules) => {
          const defaultModule = getDefaultRouteModule(role)!;
          // userModules always includes the default module
          const userModules = Array.from(new Set([defaultModule, ...extraUserModules]));

          configureService(service, {
            role,
            tenantModules: [defaultModule],
            roleModules: [defaultModule],
            userModules,
          });

          const result = service.getDefaultRedirect();
          expect(result).toBe(DEFAULT_REDIRECTS[role]);
        }
      ),
      { numRuns: 100 }
    );
  });
});


// ============================================================================
// Property 4: Preservation — roleModuleGuard redirects to /access-denied
// ============================================================================

describe('Preservation — roleModuleGuard redirects to /access-denied without permissions (Property 4)', () => {
  let service: PermissionsService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PermissionsService],
    });
    service = TestBed.inject(PermissionsService);
    router = TestBed.inject(Router);
  });

  /**
   * Property 4a (PBT): For any protected route where the user does NOT have the
   * required module enabled at tenant level, hasRouteAccess() returns false.
   * This mirrors what roleModuleGuard checks before redirecting to /access-denied.
   *
   * **Validates: Requirements 3.4**
   */
  it('hasRouteAccess() returns false for routes without tenant module access', () => {
    // Collect all known protected routes from MODULE_ROUTE_MAP
    const allRoutes: { route: string; module: ModuleName }[] = [];
    for (const [mod, prefixes] of Object.entries(MODULE_ROUTE_MAP) as [ModuleName, string[]][]) {
      for (const prefix of prefixes) {
        allRoutes.push({ route: prefix, module: mod });
      }
    }

    fc.assert(
      fc.property(
        fc.constantFrom(...VALID_ROLES),
        fc.constantFrom(...allRoutes),
        (role, routeInfo) => {
          // Configure: tenant does NOT have the module for this route
          const otherModules = Object.keys(MODULE_ROUTE_MAP).filter(
            m => m !== routeInfo.module
          );
          configureService(service, {
            role,
            tenantModules: otherModules,  // all modules EXCEPT the one needed
            roleModules: [routeInfo.module],  // role has it, but tenant doesn't
            userModules: [],
          });

          const result = service.hasRouteAccess(routeInfo.route);
          expect(result).toBe(false);
        }
      ),
      { numRuns: 200 }
    );
  });

  /**
   * Property 4b (PBT): For any protected route where the user's role does NOT
   * include the required module, hasRouteAccess() returns false.
   *
   * **Validates: Requirements 3.4**
   */
  it('hasRouteAccess() returns false for routes without role module access', () => {
    const allRoutes: { route: string; module: ModuleName }[] = [];
    for (const [mod, prefixes] of Object.entries(MODULE_ROUTE_MAP) as [ModuleName, string[]][]) {
      for (const prefix of prefixes) {
        allRoutes.push({ route: prefix, module: mod });
      }
    }

    fc.assert(
      fc.property(
        fc.constantFrom(...VALID_ROLES),
        fc.constantFrom(...allRoutes),
        (role, routeInfo) => {
          // Configure: role does NOT have the module for this route
          const otherModules = Object.keys(MODULE_ROUTE_MAP).filter(
            m => m !== routeInfo.module
          );
          configureService(service, {
            role,
            tenantModules: [routeInfo.module],  // tenant has it
            roleModules: otherModules,           // role does NOT have it
            userModules: [],
          });

          const result = service.hasRouteAccess(routeInfo.route);
          expect(result).toBe(false);
        }
      ),
      { numRuns: 200 }
    );
  });

  /**
   * Property 4c (PBT): For any protected route where userModules explicitly
   * exclude the required module, hasRouteAccess() returns false.
   *
   * **Validates: Requirements 3.4**
   */
  it('hasRouteAccess() returns false when userModules exclude the required module', () => {
    const allRoutes: { route: string; module: ModuleName }[] = [];
    for (const [mod, prefixes] of Object.entries(MODULE_ROUTE_MAP) as [ModuleName, string[]][]) {
      for (const prefix of prefixes) {
        allRoutes.push({ route: prefix, module: mod });
      }
    }

    fc.assert(
      fc.property(
        fc.constantFrom(...VALID_ROLES),
        fc.constantFrom(...allRoutes),
        (role, routeInfo) => {
          // Configure: tenant and role have the module, but userModules exclude it
          const otherModules = Object.keys(MODULE_ROUTE_MAP).filter(
            m => m !== routeInfo.module
          );
          // userModules must be non-empty (to activate restriction) and NOT include the needed module
          const userModules = otherModules.length > 0 ? [otherModules[0]] : [];
          if (userModules.length === 0) return; // skip if no other modules exist

          configureService(service, {
            role,
            tenantModules: [routeInfo.module],
            roleModules: [routeInfo.module],
            userModules,
          });

          const result = service.hasRouteAccess(routeInfo.route);
          expect(result).toBe(false);
        }
      ),
      { numRuns: 200 }
    );
  });

  /**
   * Property 4d: roleModuleGuard evaluateAccess logic — when hasRouteAccess returns false,
   * the guard creates a UrlTree to /access-denied. We test this by verifying the
   * underlying hasRouteAccess + getModuleForRoute behavior that the guard relies on.
   *
   * **Validates: Requirements 3.4, 3.5**
   */
  it('getModuleForRoute returns null for unmapped routes → guard would redirect to /access-denied', () => {
    const unmappedRoutes = [
      '/some-random-route',
      '/dashboard/unknown-module/page',
      '/admin/settings',
      '/not-a-real-path',
    ];

    for (const route of unmappedRoutes) {
      const module = service.getModuleForRoute(route);
      expect(module).toBeNull();
      // hasRouteAccess also returns false for unmapped routes
      const access = service.hasRouteAccess(route);
      expect(access).toBe(false);
    }
  });
});
