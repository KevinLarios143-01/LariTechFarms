# Bugfix Requirements Document

## Introduction

The `PermissionsService` does not correctly enforce the 4-layer access control hierarchy: Tenant → Role → User → Routes. There are three main defects:

1. **`roleHasModule()` bypasses the role layer when user modules exist**: When `userModules` has entries, it completely replaces the role check instead of intersecting with it. A user could gain access to modules their role doesn't have, as long as those modules appear in `user_modules`.

2. **`roleHasModule()` does not intersect user modules with role modules**: The user layer should only be able to *restrict* access further (fewer permissions than the role), never *expand* it. Currently, if `userModules` is non-empty, the role modules are ignored entirely.

3. **`hasRouteAccess()` treats user route permissions as an override instead of a restriction**: When user route permissions exist for a module, they completely replace role route permissions. The correct behavior is that user route permissions should further restrict (intersect with) role route permissions, not override them.

## Bug Analysis

### Current Behavior (Defect)

1.1 WHEN a user has `user_modules` entries that include a module NOT in their `role_modules` THEN the system grants access to that module because `roleHasModule()` returns `true` based solely on `userModules` without checking `roleModules`.

1.2 WHEN a user has `user_modules` entries THEN the system ignores the `role_modules` layer entirely, because `roleHasModule()` short-circuits to only check `userModules` when `userModules.length > 0`.

1.3 WHEN a user has `user_route_permissions` for a module THEN the system ignores `role_route_permissions` for that module entirely, because `hasRouteAccess()` returns based on user routes alone without intersecting with role routes.

1.4 WHEN a user has NO `user_modules` entries (empty array from backend) THEN the system falls back to `roleModules` only, which is correct but means there is no way to restrict a user to zero modules at the user level (the empty state is indistinguishable from "no user-level config").

### Expected Behavior (Correct)

2.1 WHEN a user has `user_modules` entries that include a module NOT in their `role_modules` THEN the system SHALL deny access to that module because user-level access must be the intersection of role modules and user modules (user can only restrict, never expand).

2.2 WHEN a user has `user_modules` entries THEN the system SHALL compute the effective modules as the intersection of `roleModules` AND `userModules`, ensuring the user can only access modules that both their role and their user-level config allow.

2.3 WHEN a user has `user_route_permissions` for a module THEN the system SHALL compute the effective routes as the intersection of `role_route_permissions` AND `user_route_permissions` for that module, ensuring user-level route permissions only restrict, never expand.

2.4 WHEN a user has NO `user_modules` entries THEN the system SHALL use `roleModules` as the effective module list (current behavior is correct for this case — no user-level restriction means role-level applies fully).

### Unchanged Behavior (Regression Prevention)

3.1 WHEN a user has NO `user_modules` entries AND their role has modules configured in `role_modules` THEN the system SHALL CONTINUE TO grant access based on `roleModules` intersected with `tenantModules`.

3.2 WHEN a module is NOT in the tenant's `tenant_modules` THEN the system SHALL CONTINUE TO deny access regardless of role or user module configuration.

3.3 WHEN NO `role_route_permissions` AND NO `user_route_permissions` exist for a module THEN the system SHALL CONTINUE TO allow all routes within that module (permissive fallback).

3.4 WHEN the user is not authenticated (no token) THEN the system SHALL CONTINUE TO deny all access and redirect to login.

3.5 WHEN the sidebar menu is rendered THEN the system SHALL CONTINUE TO filter menu items using `getFilteredMenuItems()` which calls `hasRouteAccess()`, so the menu will automatically reflect the corrected 4-layer logic.

3.6 WHEN the `roleModuleGuard` evaluates a route THEN the system SHALL CONTINUE TO use `hasRouteAccess()` for the access decision, so route protection will automatically reflect the corrected logic.
