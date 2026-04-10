/**
 * PBT-fix: Property 2 — hasRouteAccess complete biconditional check
 *
 * **Validates: Requirements 2.3**
 *
 * Property: For ANY combination of roleRoutes and userRoutes (both non-empty)
 * for a module, and for ANY route derived from a known prefix of that module,
 * `hasRouteAccess(route)` returns `true` if and only if the route matches a
 * prefix in BOTH roleRoutes AND userRoutes.
 *
 * This covers the full input space for the dual-route-permissions scenario,
 * ensuring the fixed intersection logic is correct for all configurations.
 */
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as fc from 'fast-check';
import { PermissionsService } from './permissions.service';
import { ModuleName, MODULE_ROUTE_MAP } from './permissions.config';

const TARGET_MODULE: ModuleName = 'Business';
const BUSINESS_PREFIXES = MODULE_ROUTE_MAP['Business'];

describe('PermissionsService — Fix Check: hasRouteAccess biconditional (Property 2)', () => {
  let service: PermissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PermissionsService],
    });
    service = TestBed.inject(PermissionsService);
  });

  it('hasRouteAccess returns true iff route matches a prefix in BOTH roleRoutes AND userRoutes', () => {
    /**
     * Strategy:
     * 1. Generate two non-empty subsets of BUSINESS_PREFIXES (roleRoutes, userRoutes)
     * 2. For each prefix in the FULL set, build a route and check the biconditional
     */
    const arbRouteConfig = fc.record({
      rolePrefixes: fc.subarray([...BUSINESS_PREFIXES], { minLength: 1, maxLength: BUSINESS_PREFIXES.length }),
      userPrefixes: fc.subarray([...BUSINESS_PREFIXES], { minLength: 1, maxLength: BUSINESS_PREFIXES.length }),
      routeSuffix: fc.stringMatching(/^[a-z0-9\-]{1,15}$/),
    });

    fc.assert(
      fc.property(
        arbRouteConfig,
        fc.constantFrom(...BUSINESS_PREFIXES),
        ({ rolePrefixes, userPrefixes, routeSuffix }, targetPrefix) => {
          const route = targetPrefix + routeSuffix;

          // Ensure module-level access passes (all three module layers grant Business)
          (service as any).tenantModules$.next([TARGET_MODULE]);
          (service as any).roleModules$.next([TARGET_MODULE]);
          (service as any).userModules$.next([TARGET_MODULE]);
          (service as any).userRole$.next('vendedor');
          (service as any).initialized$.next(true);

          // Set up route permissions: both role and user have routes for Business
          (service as any).roleRoutePermissions$.next({ [TARGET_MODULE]: rolePrefixes });
          (service as any).userRoutePermissions$.next({ [TARGET_MODULE]: userPrefixes });

          const result = service.hasRouteAccess(route);

          // Expected: route must match a prefix in BOTH sets
          const matchesRole = rolePrefixes.some((p: string) => route.startsWith(p));
          const matchesUser = userPrefixes.some((p: string) => route.startsWith(p));
          const expected = matchesRole && matchesUser;

          expect(result).toBe(expected);
        }
      ),
      { numRuns: 500 }
    );
  });
});
