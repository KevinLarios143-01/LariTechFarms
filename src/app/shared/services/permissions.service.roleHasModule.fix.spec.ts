/**
 * PBT-fix: Property 1 — roleHasModule complete biconditional check
 *
 * **Validates: Requirements 2.1, 2.2**
 *
 * Property: For ANY combination of roleModules, userModules, and target module,
 * `roleHasModule(role, module)` returns `true` if and only if:
 *   roleModules.includes(module) AND (userModules.length === 0 OR userModules.includes(module))
 *
 * This covers the full input space — not just the bug condition — ensuring the
 * fixed intersection logic is correct for all possible configurations.
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

/** Arbitrary: generate a subset of ALL_MODULES for userModules (including empty). */
const arbUserModules = fc.subarray([...ALL_MODULES], { minLength: 0, maxLength: ALL_MODULES.length });

describe('PermissionsService — Fix Check: roleHasModule biconditional (Property 1)', () => {
  let service: PermissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PermissionsService],
    });
    service = TestBed.inject(PermissionsService);
  });

  it('roleHasModule returns true iff roleModules.includes(module) AND (userModules is empty OR userModules.includes(module))', () => {
    fc.assert(
      fc.property(
        arbRole,
        arbRoleModules,
        arbUserModules,
        arbModule,
        (role, roleModules, userModules, targetModule) => {
          // Set up the service state via BehaviorSubjects
          (service as any).roleModules$.next(roleModules);
          (service as any).userModules$.next(userModules);

          const result = service.roleHasModule(role, targetModule);

          // Expected: intersection logic
          const expected =
            roleModules.includes(targetModule) &&
            (userModules.length === 0 || userModules.includes(targetModule));

          expect(result).toBe(expected);
        }
      ),
      { numRuns: 500 }
    );
  });
});
