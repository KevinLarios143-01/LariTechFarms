/**
 * PBT-exploration: Bug 1 — User Modules Cannot Expand Beyond Role Modules
 *
 * **Validates: Requirements 2.1, 2.2**
 *
 * Property: For any module that is in `userModules` but NOT in `roleModules`,
 * `roleHasModule` must return `false`. The user layer can only restrict access,
 * never expand it beyond what the role grants.
 *
 * On UNFIXED code this test would FAIL (the buggy code returns `true`).
 * On FIXED code this test PASSES (intersection logic correctly denies access).
 */
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as fc from 'fast-check';
import { PermissionsService } from './permissions.service';
import { ModuleName, UserRole, VALID_ROLES } from './permissions.config';

const ALL_MODULES: ModuleName[] = [
  'RH', 'Clientes', 'Business', 'Lotes', 'Producción', 'Reportería', 'Super Admin',
];

/**
 * Arbitrary: pick a valid role.
 */
const arbRole = fc.constantFrom(...VALID_ROLES);

/**
 * Arbitrary: generate a pair (roleModules, userModules) such that
 * userModules contains at least one module NOT in roleModules.
 * This is the exact bug-condition input space.
 */
const arbBugConditionModules = fc
  .record({
    roleModules: fc.subarray([...ALL_MODULES], { minLength: 0, maxLength: ALL_MODULES.length }),
    userModules: fc.subarray([...ALL_MODULES], { minLength: 1, maxLength: ALL_MODULES.length }),
  })
  .filter(({ roleModules, userModules }) => {
    // At least one module in userModules must NOT be in roleModules
    return userModules.some((m) => !roleModules.includes(m));
  })
  .chain(({ roleModules, userModules }) => {
    // Pick a module that is in userModules but NOT in roleModules
    const expandedModules = userModules.filter((m) => !roleModules.includes(m));
    return fc.record({
      roleModules: fc.constant(roleModules),
      userModules: fc.constant(userModules),
      targetModule: fc.constantFrom(...expandedModules),
    });
  });

describe('PermissionsService — Bug 1 Exploration (roleHasModule)', () => {
  let service: PermissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PermissionsService],
    });
    service = TestBed.inject(PermissionsService);
  });

  it('should return false for any module in userModules but NOT in roleModules (Property 1)', () => {
    fc.assert(
      fc.property(arbRole, arbBugConditionModules, (role, { roleModules, userModules, targetModule }) => {
        // Set up the service state directly via the BehaviorSubjects
        (service as any).roleModules$.next(roleModules);
        (service as any).userModules$.next(userModules);

        const result = service.roleHasModule(role, targetModule);

        // The target module is in userModules but NOT in roleModules.
        // Correct behavior: return false (role doesn't grant it).
        // Buggy behavior: would return true (only checks userModules).
        expect(result).toBe(false);
      }),
      { numRuns: 200 }
    );
  });
});
