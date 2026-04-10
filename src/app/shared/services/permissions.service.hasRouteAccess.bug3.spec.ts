/**
 * PBT-exploration: Bug 3 — User Routes Cannot Expand Beyond Role Routes
 *
 * **Validates: Requirements 2.3**
 *
 * Property: For any route that matches a prefix in `userRoutePermissions[module]`
 * but does NOT match any prefix in `roleRoutePermissions[module]`, `hasRouteAccess`
 * must return `false`. User-level route permissions can only restrict access,
 * never expand it beyond what the role grants.
 *
 * On UNFIXED code this test would FAIL (the buggy code returns `true` based solely
 * on userRoutes without checking roleRoutes).
 * On FIXED code this test PASSES (intersection logic correctly denies access).
 */
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as fc from 'fast-check';
import { PermissionsService } from './permissions.service';
import { ModuleName, UserRole, VALID_ROLES, MODULE_ROUTE_MAP } from './permissions.config';

const ALL_MODULES: ModuleName[] = [
  'RH', 'Clientes', 'Business', 'Lotes', 'Producción', 'Reportería', 'Super Admin',
];

/**
 * We use 'Business' as the target module because it has multiple route prefixes,
 * making it easy to construct scenarios where userRoutes include prefixes that
 * roleRoutes do not.
 */
const TARGET_MODULE: ModuleName = 'Business';
const BUSINESS_PREFIXES = MODULE_ROUTE_MAP['Business'];
// e.g. ['/dashboard/business-dashboard/clientes/', '/dashboard/business-dashboard/ventas/',
//        '/dashboard/business-dashboard/tickets/', '/dashboard/business-dashboard/sell-list']

/**
 * Arbitrary: pick a valid role.
 */
const arbRole = fc.constantFrom(...VALID_ROLES);

/**
 * Arbitrary: generate route permission configs where both roleRoutes and userRoutes
 * exist for the target module, and userRoutes contains at least one prefix NOT in
 * roleRoutes. Then pick a route that matches a user-only prefix.
 *
 * Strategy:
 * 1. Pick a non-empty subset of BUSINESS_PREFIXES as roleRoutes
 * 2. Pick a non-empty subset of BUSINESS_PREFIXES as userRoutes
 * 3. Filter to ensure userRoutes has at least one prefix not in roleRoutes
 * 4. Pick one of those "expanded" prefixes and generate a route from it
 */
const arbBugConditionRoutes = fc
  .record({
    rolePrefixes: fc.subarray([...BUSINESS_PREFIXES], { minLength: 1, maxLength: BUSINESS_PREFIXES.length }),
    userPrefixes: fc.subarray([...BUSINESS_PREFIXES], { minLength: 1, maxLength: BUSINESS_PREFIXES.length }),
  })
  .filter(({ rolePrefixes, userPrefixes }) => {
    // userRoutes must contain at least one prefix NOT in roleRoutes
    return userPrefixes.some((p) => !rolePrefixes.includes(p));
  })
  .chain(({ rolePrefixes, userPrefixes }) => {
    // Pick a prefix that is in userRoutes but NOT in roleRoutes
    const expandedPrefixes = userPrefixes.filter((p) => !rolePrefixes.includes(p));
    return fc.record({
      rolePrefixes: fc.constant(rolePrefixes),
      userPrefixes: fc.constant(userPrefixes),
      expandedPrefix: fc.constantFrom(...expandedPrefixes),
      // Append a random suffix to make a concrete route
      routeSuffix: fc.stringMatching(/^[a-z0-9\-\/]{1,20}$/),
    });
  });

describe('PermissionsService — Bug 3 Exploration (hasRouteAccess)', () => {
  let service: PermissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PermissionsService],
    });
    service = TestBed.inject(PermissionsService);
  });

  it('should return false for routes matching userRoutes but NOT roleRoutes (Property 2)', () => {
    fc.assert(
      fc.property(
        arbRole,
        arbBugConditionRoutes,
        (role, { rolePrefixes, userPrefixes, expandedPrefix, routeSuffix }) => {
          const route = expandedPrefix + routeSuffix;

          // Ensure module-level checks pass: tenant has the module, role has the module,
          // user also has the module (so hasAccess returns true)
          (service as any).tenantModules$.next([TARGET_MODULE]);
          (service as any).roleModules$.next([TARGET_MODULE]);
          (service as any).userModules$.next([TARGET_MODULE]);
          (service as any).userRole$.next(role);
          (service as any).initialized$.next(true);

          // Set up route permissions: both role and user have routes for this module
          (service as any).roleRoutePermissions$.next({ [TARGET_MODULE]: rolePrefixes });
          (service as any).userRoutePermissions$.next({ [TARGET_MODULE]: userPrefixes });

          const result = service.hasRouteAccess(route);

          // The route matches a userRoutes prefix but NOT any roleRoutes prefix.
          // Correct behavior (fixed): return false (role doesn't grant this route).
          // Buggy behavior (unfixed): would return true (only checks userRoutes).
          expect(result).toBe(false);
        }
      ),
      { numRuns: 200 }
    );
  });
});
