/**
 * PBT-preservation: Property 4 — Tenant Layer Always Enforced
 *
 * **Validates: Requirements 3.2**
 *
 * Property: When a module is NOT in `tenantModules`, `hasAccess` returns `false`
 * regardless of role or user module configuration. The tenant layer is the first
 * gate and was correct before the fix — it must remain correct after.
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

/** Arbitrary: generate a subset of ALL_MODULES for roleModules. */
const arbModuleSubset = fc.subarray([...ALL_MODULES], { minLength: 0, maxLength: ALL_MODULES.length });

/**
 * Arbitrary: generate tenantModules and a target module such that
 * the target is NOT in tenantModules. We pick a random subset for
 * tenantModules, then pick a module from the complement.
 */
const arbTenantExcludedModule = arbModuleSubset
  .filter(subset => subset.length < ALL_MODULES.length) // ensure at least one module is excluded
  .chain(tenantModules => {
    const excluded = ALL_MODULES.filter(m => !tenantModules.includes(m));
    return fc.record({
      tenantModules: fc.constant(tenantModules),
      targetModule: fc.constantFrom(...excluded),
    });
  });

/**
 * Get the first route prefix for a given module from MODULE_ROUTE_MAP.
 * This lets us call hasAccess with a real route that maps to the module.
 */
function routeForModule(module: ModuleName): string {
  const prefixes = MODULE_ROUTE_MAP[module];
  return prefixes[0] + 'test-path';
}

describe('PermissionsService — Preservation: tenant layer always enforced (Property 4)', () => {
  let service: PermissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PermissionsService],
    });
    service = TestBed.inject(PermissionsService);
  });

  it('when module is NOT in tenantModules, hasAccess returns false regardless of role/user config', () => {
    fc.assert(
      fc.property(
        arbTenantExcludedModule,
        arbRole,
        arbModuleSubset,
        arbModuleSubset,
        ({ tenantModules, targetModule }, role, roleModules, userModules) => {
          // Set up tenant modules (target is guaranteed NOT in this list)
          (service as any).tenantModules$.next(tenantModules);
          // Set up role and user modules (arbitrary — shouldn't matter)
          (service as any).roleModules$.next(roleModules);
          (service as any).userModules$.next(userModules);
          (service as any).userRole$.next(role);

          const route = routeForModule(targetModule);
          const result = service.hasAccess(route);

          expect(result).toBe(false);
        }
      ),
      { numRuns: 500 }
    );
  });

  it('when module is NOT in tenantModules, hasRouteAccess returns false regardless of role/user/route config', () => {
    fc.assert(
      fc.property(
        arbTenantExcludedModule,
        arbRole,
        arbModuleSubset,
        arbModuleSubset,
        ({ tenantModules, targetModule }, role, roleModules, userModules) => {
          // Set up tenant modules (target is guaranteed NOT in this list)
          (service as any).tenantModules$.next(tenantModules);
          // Set up role and user modules (arbitrary — shouldn't matter)
          (service as any).roleModules$.next(roleModules);
          (service as any).userModules$.next(userModules);
          (service as any).userRole$.next(role);
          // Set up permissive route permissions (shouldn't matter since tenant blocks)
          (service as any).roleRoutePermissions$.next({});
          (service as any).userRoutePermissions$.next({});

          const route = routeForModule(targetModule);
          const result = service.hasRouteAccess(route);

          expect(result).toBe(false);
        }
      ),
      { numRuns: 500 }
    );
  });
});
