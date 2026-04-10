/**
 * PBT-preservation: Property 5 — Permissive Fallback When No Route Permissions Exist
 *
 * **Validates: Requirements 3.3**
 *
 * Property: When neither `roleRoutePermissions[module]` nor `userRoutePermissions[module]`
 * exist for the relevant module, `hasRouteAccess` returns `true` (given module access is
 * granted). The permissive fallback was correct before the fix — it must remain correct after.
 */
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as fc from 'fast-check';
import { PermissionsService } from './permissions.service';
import { ModuleName, UserRole, VALID_ROLES, MODULE_ROUTE_MAP } from './permissions.config';

const ALL_MODULES: ModuleName[] = [
  'RH', 'Clientes', 'Business', 'Lotes', 'Producción', 'Reportería', 'Super Admin',
];

/** Arbitrary: pick a valid role. */
const arbRole = fc.constantFrom(...VALID_ROLES);

/** Arbitrary: pick a target module. */
const arbModule = fc.constantFrom(...ALL_MODULES);

/**
 * Arbitrary: generate a userModules array that either is empty (no user-level
 * restriction) or includes the target module (so module access passes).
 */
function arbUserModulesForAccess(targetModule: ModuleName): fc.Arbitrary<ModuleName[]> {
  return fc.oneof(
    fc.constant([] as ModuleName[]),                          // empty — falls back to role only
    fc.subarray([...ALL_MODULES], { minLength: 1 }).filter(  // non-empty but includes target
      arr => arr.includes(targetModule)
    ),
  );
}

/**
 * Generate a route that belongs to the given module by picking one of its
 * MODULE_ROUTE_MAP prefixes and appending a random suffix.
 */
function arbRouteForModule(module: ModuleName): fc.Arbitrary<string> {
  const prefixes = MODULE_ROUTE_MAP[module];
  return fc.constantFrom(...prefixes).chain(prefix =>
    fc.constantFrom('list', 'detail', 'edit', 'create', 'view', 'dashboard', 'report')
      .map((suffix: string) => prefix + suffix)
  );
}

describe('PermissionsService — Preservation: permissive fallback when no route permissions (Property 5)', () => {
  let service: PermissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PermissionsService],
    });
    service = TestBed.inject(PermissionsService);
  });

  it('when no route permissions exist for a module, hasRouteAccess returns true given module access', () => {
    fc.assert(
      fc.property(
        arbModule,
        arbRole,
        (targetModule, role) => {
          // Ensure module-level access passes:
          // 1. tenantModules includes the target module
          (service as any).tenantModules$.next([...ALL_MODULES]);
          // 2. roleModules includes the target module
          (service as any).roleModules$.next([targetModule]);
          // 3. userModules is empty (simplest way to ensure module access passes)
          (service as any).userModules$.next([]);
          // 4. Set a valid role
          (service as any).userRole$.next(role);
          // 5. No route permissions for any module
          (service as any).roleRoutePermissions$.next({});
          (service as any).userRoutePermissions$.next({});

          // Pick the first route prefix for the module and append a suffix
          const prefixes = MODULE_ROUTE_MAP[targetModule];
          const route = prefixes[0] + 'test-path';

          const result = service.hasRouteAccess(route);
          expect(result).toBe(true);
        }
      ),
      { numRuns: 300 }
    );
  });

  it('when no route permissions exist and userModules includes the module, hasRouteAccess returns true', () => {
    fc.assert(
      fc.property(
        arbModule.chain(mod => fc.tuple(
          fc.constant(mod),
          arbRouteForModule(mod),
          arbUserModulesForAccess(mod),
        )),
        arbRole,
        ([targetModule, route, userModules], role) => {
          // Ensure module-level access passes
          (service as any).tenantModules$.next([...ALL_MODULES]);
          (service as any).roleModules$.next([targetModule]);
          (service as any).userModules$.next(userModules);
          (service as any).userRole$.next(role);
          // No route permissions at all
          (service as any).roleRoutePermissions$.next({});
          (service as any).userRoutePermissions$.next({});

          const result = service.hasRouteAccess(route);
          expect(result).toBe(true);
        }
      ),
      { numRuns: 500 }
    );
  });
});
