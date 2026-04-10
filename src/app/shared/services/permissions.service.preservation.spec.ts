/**
 * PBT-preservation: Property 3 — Empty userModules falls back to roleModules
 *
 * **Validates: Requirements 2.4, 3.1**
 *
 * Property: When `userModules` is empty (no user-level overrides),
 * `roleHasModule(role, module)` returns exactly `roleModules.includes(module)`.
 * This behavior was correct before the fix and must remain correct after.
 */
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as fc from 'fast-check';
import { PermissionsService } from './permissions.service';
import { ModuleName, UserRole, VALID_ROLES } from './permissions.config';

const ALL_MODULES: ModuleName[] = [
  'RH', 'Clientes', 'Business', 'Lotes', 'Producción', 'Reportería', 'Super Admin',
];

/** Arbitrary: pick a valid role. */
const arbRole = fc.constantFrom(...VALID_ROLES);

/** Arbitrary: pick any module from ALL_MODULES as the target. */
const arbModule = fc.constantFrom(...ALL_MODULES);

/** Arbitrary: generate a subset of ALL_MODULES for roleModules. */
const arbRoleModules = fc.subarray([...ALL_MODULES], { minLength: 0, maxLength: ALL_MODULES.length });

describe('PermissionsService — Preservation: empty userModules falls back to roleModules (Property 3)', () => {
  let service: PermissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PermissionsService],
    });
    service = TestBed.inject(PermissionsService);
  });

  it('when userModules is empty, roleHasModule returns roleModules.includes(module)', () => {
    fc.assert(
      fc.property(
        arbRole,
        arbRoleModules,
        arbModule,
        (role, roleModules, targetModule) => {
          // Set up: roleModules as generated, userModules always empty
          (service as any).roleModules$.next(roleModules);
          (service as any).userModules$.next([]);

          const result = service.roleHasModule(role, targetModule);
          const expected = roleModules.includes(targetModule);

          expect(result).toBe(expected);
        }
      ),
      { numRuns: 500 }
    );
  });
});
