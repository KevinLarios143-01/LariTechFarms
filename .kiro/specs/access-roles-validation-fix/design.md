# Access Roles Validation Fix — Bugfix Design

## Overview

The `PermissionsService` in `LariTechFarms/src/app/shared/services/permissions.service.ts` has three defects in its 4-layer access control hierarchy (Tenant → Role → User → Routes). The user layer can currently *expand* access beyond what the role layer grants, violating the principle that each successive layer can only *restrict* further. The fix applies intersection logic at both the module level (`roleHasModule`) and the route level (`hasRouteAccess`), and updates `getDefaultRedirect` to use the same effective-modules logic.

## Glossary

- **Bug_Condition (C)**: The condition where user-level permissions (modules or routes) expand access beyond what the role layer grants, instead of restricting it.
- **Property (P)**: The desired behavior — user-level permissions intersect with role-level permissions so that access is only granted when BOTH layers allow it.
- **Preservation**: Existing behaviors that must remain unchanged: tenant-layer enforcement, permissive fallback when no route permissions exist, unauthenticated denial, menu filtering, and guard behavior.
- **roleHasModule(role, module)**: Method in `PermissionsService` that determines if a role+user combination has access to a given module.
- **hasRouteAccess(route)**: Method in `PermissionsService` that performs the full 3-layer check (module enabled + role/user module + route permissions).
- **getDefaultRedirect()**: Method in `PermissionsService` that returns the post-login redirect route for the current user.
- **roleModules**: Modules assigned to the user's role (from backend or fallback matrix).
- **userModules**: User-level module overrides (from backend). When non-empty, should restrict (not replace) roleModules.
- **roleRoutePermissions**: Route-level permissions assigned to the role.
- **userRoutePermissions**: Route-level permissions assigned to the user. When present, should restrict (not replace) roleRoutePermissions.

## Bug Details

### Bug Condition

The bug manifests in three methods of `PermissionsService`:

1. `roleHasModule()` — when `userModules` is non-empty, it returns `userModules.includes(module)` without checking `roleModules`, allowing user-level config to grant access to modules the role doesn't have.
2. `hasRouteAccess()` — when `userRoutePermissions[module]` exists, it returns based solely on user routes without intersecting with role routes, allowing user-level route config to grant access to routes the role doesn't have.
3. `getDefaultRedirect()` — uses `userModules` OR `roleModules` (whichever is non-empty) instead of computing the effective intersection.

**Formal Specification:**
```
FUNCTION isBugCondition(input)
  INPUT: input of type { module: ModuleName, route: string, roleModules: string[], userModules: string[], roleRoutes: Record<string, string[]>, userRoutes: Record<string, string[]> }
  OUTPUT: boolean

  // Bug 1 & 2: userModules expands beyond roleModules
  moduleBug := input.userModules.length > 0
               AND input.userModules.includes(input.module)
               AND NOT input.roleModules.includes(input.module)

  // Bug 3: userRoutes expands beyond roleRoutes
  routeBug := input.userRoutes[input.module] exists AND input.userRoutes[input.module].length > 0
              AND input.roleRoutes[input.module] exists AND input.roleRoutes[input.module].length > 0
              AND input.route matches some prefix in input.userRoutes[input.module]
              AND NOT input.route matches any prefix in input.roleRoutes[input.module]

  RETURN moduleBug OR routeBug
END FUNCTION
```

### Examples

- **Module expansion**: Role = `vendedor` (modules: `['Clientes', 'Business', 'Lotes', 'Reportería']`), userModules = `['Clientes', 'Business', 'Lotes', 'Reportería', 'RH']`. Current: `roleHasModule('vendedor', 'RH')` returns `true`. Expected: returns `false` because `RH` is not in roleModules.
- **Module restriction working correctly**: Role = `admin` (modules: `['RH', 'Clientes', 'Business', 'Lotes', 'Producción', 'Reportería']`), userModules = `['RH', 'Clientes']`. Current: `roleHasModule('admin', 'Business')` returns `false`. Expected: returns `false` (correct — user restricts).
- **Route expansion**: roleRoutes = `{ 'Business': ['/dashboard/business-dashboard/ventas/'] }`, userRoutes = `{ 'Business': ['/dashboard/business-dashboard/ventas/', '/dashboard/business-dashboard/tickets/'] }`. Current: `hasRouteAccess('/dashboard/business-dashboard/tickets/list')` returns `true` (user routes override). Expected: returns `false` because `/dashboard/business-dashboard/tickets/` is not in roleRoutes.
- **No userModules (preservation)**: userModules = `[]`, roleModules = `['Business', 'Lotes']`. Current and expected: `roleHasModule('supervisor', 'Business')` returns `true`.

## Expected Behavior

### Preservation Requirements

**Unchanged Behaviors:**
- When `userModules` is empty, `roleHasModule()` must continue to use `roleModules` only.
- When a module is NOT in `tenantModules`, access must continue to be denied regardless of role or user config.
- When neither `roleRoutePermissions` nor `userRoutePermissions` exist for a module, all routes within that module must continue to be allowed (permissive fallback).
- Unauthenticated users (no token) must continue to be denied all access.
- `getFilteredMenuItems()` must continue to filter sidebar items via `hasRouteAccess()`.
- `roleModuleGuard` must continue to use `hasRouteAccess()` for route protection.

**Scope:**
All inputs where `userModules` is empty AND no `userRoutePermissions` exist should be completely unaffected by this fix. This includes:
- Pure role-based access checks (no user-level overrides)
- Tenant-level module enablement checks
- Unauthenticated access attempts
- Menu filtering for users without user-level config

## Hypothesized Root Cause

Based on the code analysis, the root causes are confirmed (not hypothesized — the code is clear):

1. **`roleHasModule()` short-circuit logic**: Lines check `if (userMods.length > 0) return userMods.includes(module)` — this completely bypasses the `roleModules` check. The fix is to always check `roleModules` first, then additionally require `userModules` inclusion when `userModules` is non-empty.

2. **`hasRouteAccess()` early-return on userRoutes**: The method checks `userRoutes[module]` first and returns immediately if it has entries, never checking `roleRoutes[module]`. The fix is to compute the intersection when both exist.

3. **`getDefaultRedirect()` uses OR instead of intersection**: The fallback logic `const allowedModules = userMods.length > 0 ? userMods : this.roleModules$.getValue()` mirrors the same OR-instead-of-AND pattern. The fix is to compute effective modules using the same intersection logic as `roleHasModule`.

## Correctness Properties

Property 1: Bug Condition — User Modules Cannot Expand Beyond Role Modules

_For any_ input where `userModules` is non-empty and contains a module that is NOT in `roleModules`, the fixed `roleHasModule` function SHALL return `false` for that module, ensuring user-level config can only restrict access, never expand it.

**Validates: Requirements 2.1, 2.2**

Property 2: Bug Condition — User Routes Cannot Expand Beyond Role Routes

_For any_ input where both `roleRoutePermissions[module]` and `userRoutePermissions[module]` exist and are non-empty, the fixed `hasRouteAccess` function SHALL return `true` only when the route matches a prefix in BOTH `roleRoutePermissions[module]` AND `userRoutePermissions[module]`.

**Validates: Requirements 2.3**

Property 3: Preservation — Empty User Modules Falls Back to Role Modules

_For any_ input where `userModules` is empty, the fixed `roleHasModule` function SHALL produce the same result as the original function, returning `roleModules.includes(module)`.

**Validates: Requirements 2.4, 3.1**

Property 4: Preservation — Tenant Layer Always Enforced

_For any_ input where a module is NOT in `tenantModules`, the fixed `hasAccess` and `hasRouteAccess` functions SHALL return `false` regardless of role or user module configuration.

**Validates: Requirements 3.2**

Property 5: Preservation — Permissive Fallback When No Route Permissions Exist

_For any_ input where neither `roleRoutePermissions[module]` nor `userRoutePermissions[module]` exist for the relevant module, the fixed `hasRouteAccess` function SHALL return `true` (assuming module access is granted), preserving the permissive fallback behavior.

**Validates: Requirements 3.3**

## Fix Implementation

### Changes Required

**File**: `LariTechFarms/src/app/shared/services/permissions.service.ts`

**Method 1**: `roleHasModule(role, module)`

**Current code:**
```typescript
roleHasModule(role: UserRole, module: ModuleName): boolean {
  const userMods = this.userModules$.getValue();
  if (userMods.length > 0) {
    return userMods.includes(module);
  }
  return this.roleModules$.getValue().includes(module);
}
```

**Fixed code:**
```typescript
roleHasModule(role: UserRole, module: ModuleName): boolean {
  const roleMods = this.roleModules$.getValue();
  const userMods = this.userModules$.getValue();
  // Role must always grant the module
  if (!roleMods.includes(module)) return false;
  // If user-level config exists, it can only further restrict
  if (userMods.length > 0) {
    return userMods.includes(module);
  }
  return true;
}
```

**Method 2**: `hasRouteAccess(route)`

**Current code (route permission section):**
```typescript
// Check user route permissions (override)
const userRoutes = this.userRoutePermissions$.getValue();
if (userRoutes[module] && userRoutes[module].length > 0) {
  return userRoutes[module].some(p => route.startsWith(p));
}

// Check role route permissions
const roleRoutes = this.roleRoutePermissions$.getValue();
if (roleRoutes[module] && roleRoutes[module].length > 0) {
  return roleRoutes[module].some(p => route.startsWith(p));
}

// No route restrictions → permissive access
return true;
```

**Fixed code:**
```typescript
const roleRoutes = this.roleRoutePermissions$.getValue();
const userRoutes = this.userRoutePermissions$.getValue();
const hasRoleRoutes = roleRoutes[module] && roleRoutes[module].length > 0;
const hasUserRoutes = userRoutes[module] && userRoutes[module].length > 0;

if (hasRoleRoutes && hasUserRoutes) {
  // Intersection: route must be allowed by BOTH layers
  return roleRoutes[module].some(p => route.startsWith(p))
      && userRoutes[module].some(p => route.startsWith(p));
}
if (hasRoleRoutes) {
  return roleRoutes[module].some(p => route.startsWith(p));
}
if (hasUserRoutes) {
  // User routes alone still apply as restriction
  return userRoutes[module].some(p => route.startsWith(p));
}

// No route restrictions → permissive access
return true;
```

**Method 3**: `getDefaultRedirect()`

**Current code (fallback section):**
```typescript
const userMods = this.userModules$.getValue();
const allowedModules = userMods.length > 0 ? userMods : this.roleModules$.getValue();
```

**Fixed code:**
```typescript
const roleMods = this.roleModules$.getValue();
const userMods = this.userModules$.getValue();
const allowedModules = userMods.length > 0
  ? roleMods.filter(m => userMods.includes(m))
  : roleMods;
```


## Testing Strategy

### Validation Approach

The testing strategy follows a two-phase approach: first, surface counterexamples that demonstrate the bugs on unfixed code, then verify the fix works correctly and preserves existing behavior.

### Exploratory Bug Condition Checking

**Goal**: Surface counterexamples that demonstrate the three bugs BEFORE implementing the fix. Confirm the root cause analysis.

**Test Plan**: Write unit tests that set up `PermissionsService` with specific `roleModules`, `userModules`, `roleRoutePermissions`, and `userRoutePermissions` configurations, then call the buggy methods and assert the expected (correct) behavior. Run these tests on the UNFIXED code to observe failures.

**Test Cases**:
1. **Module Expansion Test**: Set roleModules = `['Business']`, userModules = `['Business', 'RH']`. Call `roleHasModule(role, 'RH')`. Expect `false`, but unfixed code returns `true`. (will fail on unfixed code)
2. **Module Intersection Test**: Set roleModules = `['Business', 'Lotes']`, userModules = `['Business']`. Call `roleHasModule(role, 'Lotes')`. Expect `false`. Unfixed code returns `false` (correct for this case). Call `roleHasModule(role, 'Business')`. Expect `true`. (will pass on unfixed code)
3. **Route Expansion Test**: Set roleRoutes = `{ 'Business': ['/dashboard/business-dashboard/ventas/'] }`, userRoutes = `{ 'Business': ['/dashboard/business-dashboard/ventas/', '/dashboard/business-dashboard/tickets/'] }`. Call `hasRouteAccess('/dashboard/business-dashboard/tickets/list')`. Expect `false`, but unfixed code returns `true`. (will fail on unfixed code)
4. **Redirect Uses Expanded Modules Test**: Set roleModules = `['Business']`, userModules = `['Business', 'RH']`. Call `getDefaultRedirect()`. Expect redirect to a Business route, not an RH route. (may fail on unfixed code)

**Expected Counterexamples**:
- `roleHasModule` returns `true` for modules in `userModules` but not in `roleModules`
- `hasRouteAccess` returns `true` for routes in `userRoutes` but not in `roleRoutes`
- `getDefaultRedirect` may redirect to a module the role doesn't have

### Fix Checking

**Goal**: Verify that for all inputs where the bug condition holds, the fixed functions produce the expected behavior.

**Pseudocode:**
```
FOR ALL input WHERE isBugCondition(input) DO
  result_module := roleHasModule_fixed(input.role, input.module)
  ASSERT result_module = (input.roleModules.includes(input.module) AND (input.userModules.length === 0 OR input.userModules.includes(input.module)))

  result_route := hasRouteAccess_fixed(input.route)
  ASSERT result_route = (matchesRoleRoutes(input.route) AND matchesUserRoutes(input.route))
END FOR
```

### Preservation Checking

**Goal**: Verify that for all inputs where the bug condition does NOT hold, the fixed functions produce the same result as the original functions.

**Pseudocode:**
```
FOR ALL input WHERE NOT isBugCondition(input) DO
  ASSERT roleHasModule_original(input.role, input.module) = roleHasModule_fixed(input.role, input.module)
  ASSERT hasRouteAccess_original(input.route) = hasRouteAccess_fixed(input.route)
  ASSERT getDefaultRedirect_original() = getDefaultRedirect_fixed()
END FOR
```

**Testing Approach**: Property-based testing is recommended for preservation checking because:
- It generates many combinations of roleModules, userModules, roleRoutes, and userRoutes automatically
- It catches edge cases like empty arrays, single-element arrays, and overlapping module sets
- It provides strong guarantees that behavior is unchanged for all non-buggy inputs

**Test Plan**: Observe behavior on UNFIXED code first for non-buggy inputs (empty userModules, matching module sets), then write property-based tests capturing that behavior.

**Test Cases**:
1. **Empty UserModules Preservation**: Observe that when userModules is empty, roleHasModule returns roleModules.includes(module) on unfixed code, then verify this continues after fix.
2. **Tenant Denial Preservation**: Observe that when a module is not in tenantModules, hasAccess returns false on unfixed code, then verify this continues after fix.
3. **Permissive Route Fallback Preservation**: Observe that when no route permissions exist, hasRouteAccess returns true (given module access) on unfixed code, then verify this continues after fix.
4. **Unauthenticated Denial Preservation**: Observe that when no token exists, all access is denied on unfixed code, then verify this continues after fix.

### Unit Tests

- Test `roleHasModule` with various combinations of roleModules and userModules
- Test `hasRouteAccess` with various combinations of roleRoutes and userRoutes
- Test `getDefaultRedirect` with intersection logic
- Test edge cases: empty arrays, single module, all modules overlapping

### Property-Based Tests

- Generate random subsets of `ModuleName` for roleModules and userModules, verify `roleHasModule` returns the intersection
- Generate random route permission maps, verify `hasRouteAccess` returns the intersection when both exist
- Generate random configurations where userModules is empty, verify preservation of original behavior

### Integration Tests

- Test full guard flow: `roleModuleGuard` with intersection-based permissions
- Test menu filtering: `getFilteredMenuItems` reflects corrected access logic
- Test login redirect: `getDefaultRedirect` uses effective (intersected) modules
