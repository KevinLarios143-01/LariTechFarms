# F5 Reload Blank Page Bugfix Design

## Overview

When an authenticated user reloads the page (F5), the app renders a blank page. The `APP_INITIALIZER` in `app.config.ts` only calls `UserSessionService.initSession()` but never calls `PermissionsService.init()`. The `roleModuleGuard` then calls `waitForInit()`, which subscribes to `initialized$` waiting for `true` — but since `init()` was never called, `initialized$` stays `false` forever, blocking route activation indefinitely.

The fix adds `PermissionsService.init()` to the `APP_INITIALIZER` bootstrap chain so that permissions are fully loaded before any route guard executes.

## Glossary

- **Bug_Condition (C)**: The app is bootstrapping after an F5 reload with a valid `auth_token` in `localStorage`, and `PermissionsService.init()` is never called during `APP_INITIALIZER`
- **Property (P)**: After F5 reload with a valid token, `PermissionsService` must be initialized before route guards execute, so `roleModuleGuard` resolves immediately
- **Preservation**: Login flow, unauthenticated redirects, in-app navigation, expired-token handling, and `AuthGuard` behavior must remain unchanged
- **`PermissionsService`**: Service in `shared/services/permissions.service.ts` that loads tenant modules, role modules, user modules, and route permissions from the backend. Exposes `init()`, `isInitialized()`, `waitForInit()`, and access-check methods
- **`UserSessionService`**: Service in `shared/services/user-session.service.ts` that restores user data from `/v1/auth/me` on bootstrap. Already called in `APP_INITIALIZER`
- **`roleModuleGuard`**: Functional guard in `core/role-module.guard.ts` that checks `PermissionsService.isInitialized()` and falls back to `waitForInit()` if not ready
- **`APP_INITIALIZER`**: Angular DI token in `app.config.ts` that runs factory functions before the app renders. Currently only runs `UserSessionService.initSession()`

## Bug Details

### Bug Condition

The bug manifests when an authenticated user reloads the page (F5) on any protected route. The `APP_INITIALIZER` runs `UserSessionService.initSession()` (which restores user data) but never calls `PermissionsService.init()`. When Angular resolves the target route, `roleModuleGuard` fires, finds `isInitialized() === false`, and subscribes to `waitForInit()`. Since `init()` was never called, `initialized$` never emits `true`, and the guard Observable never completes — leaving the router stuck and the page blank.

**Formal Specification:**
```
FUNCTION isBugCondition(input)
  INPUT: input of type AppBootstrapContext
  OUTPUT: boolean

  RETURN input.trigger == 'page_reload'
         AND localStorage.getItem('auth_token') IS NOT NULL
         AND tokenIsValid(input.token)
         AND input.targetRoute.hasGuard(roleModuleGuard)
         AND NOT permissionsService.isInitialized()
END FUNCTION
```

### Examples

- User is on `/dashboard/production` and presses F5 → blank page because `PermissionsService` never initialized, `roleModuleGuard` hangs on `waitForInit()`
- User is on `/componets/empleados` and presses F5 → same blank page, same root cause
- User is on `/auth/login` and presses F5 → no bug, login route has no `roleModuleGuard`
- User has expired token and presses F5 → no bug, `UserSessionService.initSession()` detects expired token and redirects to `/auth/login` before guards run

## Expected Behavior

### Preservation Requirements

**Unchanged Behaviors:**
- `AuthGuard` must continue to redirect unauthenticated users to `/auth/login`
- Login flow (backend and Firebase) must continue to call `PermissionsService.init()` after saving the token and navigate to the default redirect
- In-app navigation (without reload) must continue to use already-initialized permissions in `roleModuleGuard`
- Users without access to a module/route must continue to be redirected to `/access-denied`
- Expired tokens on reload must continue to redirect to `/auth/login` without attempting to load permissions
- `PermissionsService.clear()` on logout must continue to reset all permission state

**Scope:**
All inputs that do NOT involve a page reload with a valid token on a guarded route should be completely unaffected by this fix. This includes:
- Fresh login flow (backend or Firebase)
- In-app route navigation
- Unauthenticated access attempts
- Expired token scenarios
- Routes without `roleModuleGuard` (e.g., `/auth/login`, `/access-denied`)

## Hypothesized Root Cause

Based on the bug description and code analysis, the root cause is clear:

1. **Missing `PermissionsService.init()` in `APP_INITIALIZER`**: The `initializeUserSession` factory in `app.config.ts` only calls `UserSessionService.initSession()`. It does not call `PermissionsService.init()`. During login, `LoginComponent` explicitly calls `this.permissionsService.init().subscribe(...)` after saving the token — but on F5 reload, no component calls `init()`.

2. **`roleModuleGuard` deadlock on `waitForInit()`**: When `isInitialized()` returns `false`, the guard subscribes to `waitForInit()`, which filters `initialized$` for `true` and takes the `first()` emission. Since `init()` is never called, `initialized$` stays `false`, and the Observable never emits — the guard hangs forever.

3. **No timeout or fallback in `waitForInit()`**: The `waitForInit()` method has no timeout. If `init()` is never called, the guard will wait indefinitely with no error or fallback.

The primary fix is (1): add `PermissionsService.init()` to the `APP_INITIALIZER` chain, sequenced after `UserSessionService.initSession()` completes (so the token and user data are available). This directly resolves (2) because `initialized$` will be `true` before guards run. Issue (3) is a secondary hardening concern.

## Correctness Properties

Property 1: Bug Condition - Permissions Initialized on F5 Reload

_For any_ app bootstrap triggered by a page reload where a valid `auth_token` exists in `localStorage`, the fixed `APP_INITIALIZER` SHALL call `PermissionsService.init()` and wait for it to complete, so that `permissionsService.isInitialized()` returns `true` before any route guard executes.

**Validates: Requirements 2.1, 2.2**

Property 2: Bug Condition - Route Renders After F5 Reload

_For any_ authenticated user who reloads the page on a route they have access to, the fixed app SHALL render the correct view (with sidebar, header, and content) without showing a blank page.

**Validates: Requirements 2.3**

Property 3: Preservation - Login Flow Unchanged

_For any_ login attempt (backend or Firebase) where the bug condition does NOT hold, the fixed code SHALL produce the same behavior as the original code: save token, set user, call `PermissionsService.init()`, and navigate to the default redirect.

**Validates: Requirements 3.2**

Property 4: Preservation - Unauthenticated Redirect Unchanged

_For any_ unauthenticated navigation to a protected route, the fixed code SHALL continue to redirect to `/auth/login` via `AuthGuard`, preserving existing behavior.

**Validates: Requirements 3.1, 3.5**

Property 5: Preservation - In-App Navigation Unchanged

_For any_ in-app navigation (without page reload) where permissions are already initialized, the fixed code SHALL evaluate `roleModuleGuard` using the already-loaded permissions without re-initializing.

**Validates: Requirements 3.3, 3.4**

## Fix Implementation

### Changes Required

Assuming our root cause analysis is correct:

**File**: `LariTechFarms/src/app/app.config.ts`

**Function**: `initializeUserSession`

**Specific Changes**:
1. **Inject `PermissionsService`** into the `APP_INITIALIZER` factory alongside `UserSessionService`
2. **Chain `PermissionsService.init()`** after `UserSessionService.initSession()` completes, so that:
   - If there's no token or the token is expired, `initSession()` redirects to login and `PermissionsService.init()` gracefully handles the no-token case (it already does — sets `initialized$` to `true` with empty permissions)
   - If there's a valid token, `initSession()` restores user data, then `PermissionsService.init()` fetches modules and route permissions
3. **Rename the factory** to `initializeApp` (or similar) to reflect that it now initializes both session and permissions
4. **Update `deps` array** to include `PermissionsService`

**Pseudocode:**
```
function initializeApp(userSession, permissions):
  return () =>
    firstValueFrom(
      userSession.initSession().pipe(
        switchMap(() => permissions.init())
      )
    )
```

**File**: `LariTechFarms/src/app/authentication/login/login.component.ts`

**Function**: `loginWithBackend()` and `validateBackendUser()`

**Specific Changes**:
5. **No changes required to login flow**: The login component already calls `permissionsService.init()` explicitly after saving the token. On subsequent F5 reloads, the `APP_INITIALIZER` will handle re-initialization. The `init()` method is idempotent in effect (it re-fetches and overwrites BehaviorSubjects), so calling it twice (once during login, once on next reload) is safe.

## Testing Strategy

### Validation Approach

The testing strategy follows a two-phase approach: first, surface counterexamples that demonstrate the bug on unfixed code, then verify the fix works correctly and preserves existing behavior.

### Exploratory Bug Condition Checking

**Goal**: Surface counterexamples that demonstrate the bug BEFORE implementing the fix. Confirm or refute the root cause analysis. If we refute, we will need to re-hypothesize.

**Test Plan**: Write unit tests that mock `UserSessionService` and `PermissionsService`, invoke the `APP_INITIALIZER` factory, and assert that `PermissionsService.init()` is called. Run these tests on the UNFIXED code to observe failures.

**Test Cases**:
1. **APP_INITIALIZER does not call PermissionsService.init()**: Mock both services, run the factory, assert `permissions.init()` was called (will fail on unfixed code)
2. **roleModuleGuard hangs when permissions not initialized**: Create a test where `isInitialized()` returns `false` and `waitForInit()` never emits — assert the guard resolves within a timeout (will fail/timeout on unfixed code)
3. **Full bootstrap with valid token**: Simulate a reload scenario with a valid token in localStorage, assert `isInitialized()` is `true` after bootstrap (will fail on unfixed code)

**Expected Counterexamples**:
- `PermissionsService.init()` is never called during `APP_INITIALIZER`
- `roleModuleGuard` Observable never completes, causing route activation to hang

### Fix Checking

**Goal**: Verify that for all inputs where the bug condition holds, the fixed function produces the expected behavior.

**Pseudocode:**
```
FOR ALL input WHERE isBugCondition(input) DO
  result := runAppInitializer_fixed(input)
  ASSERT permissionsService.isInitialized() == true
  ASSERT roleModuleGuard resolves (does not hang)
  ASSERT target route renders correctly
END FOR
```

### Preservation Checking

**Goal**: Verify that for all inputs where the bug condition does NOT hold, the fixed function produces the same result as the original function.

**Pseudocode:**
```
FOR ALL input WHERE NOT isBugCondition(input) DO
  ASSERT initializeApp_original(input) behavior == initializeApp_fixed(input) behavior
END FOR
```

**Testing Approach**: Property-based testing is recommended for preservation checking because:
- It generates many test cases automatically across the input domain
- It catches edge cases that manual unit tests might miss
- It provides strong guarantees that behavior is unchanged for all non-buggy inputs

**Test Plan**: Observe behavior on UNFIXED code first for non-reload scenarios (login, unauthenticated access, expired tokens), then write tests capturing that behavior.

**Test Cases**:
1. **No Token Preservation**: Verify that when no `auth_token` exists, the initializer completes without errors and permissions are set to empty (same as before)
2. **Expired Token Preservation**: Verify that when token is expired, `initSession()` redirects to login and `PermissionsService.init()` handles the no-token/expired case gracefully
3. **Login Flow Preservation**: Verify that the login component still calls `PermissionsService.init()` after saving the token and navigates correctly
4. **AuthGuard Preservation**: Verify that `AuthGuard` still redirects unauthenticated users to `/auth/login`

### Unit Tests

- Test that the `APP_INITIALIZER` factory calls both `UserSessionService.initSession()` and `PermissionsService.init()` in sequence
- Test that `PermissionsService.init()` is called AFTER `initSession()` completes (ordering matters)
- Test that when no token exists, both services handle gracefully without errors
- Test that `roleModuleGuard` resolves immediately when `isInitialized()` is `true`

### Property-Based Tests

- Generate random token states (valid, expired, missing, malformed) and verify the initializer always completes without hanging
- Generate random route configurations and verify `roleModuleGuard` always resolves (never hangs) after the fixed initializer runs
- Generate random permission configurations and verify `evaluateAccess` produces correct results

### Integration Tests

- Test full app bootstrap with valid token: verify dashboard renders after F5 reload
- Test full app bootstrap with expired token: verify redirect to login
- Test full app bootstrap with no token: verify redirect to login
- Test login → navigate → F5 reload → verify same view renders correctly
