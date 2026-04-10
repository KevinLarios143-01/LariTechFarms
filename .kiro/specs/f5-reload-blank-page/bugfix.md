# Bugfix Requirements Document

## Introduction

When a user is on any authenticated view in the LariTechFarms Angular 18 application and reloads the page using F5, the application shows a blank page. The root cause is that `PermissionsService.init()` is only called during login (in `LoginComponent`) but is never called during the `APP_INITIALIZER` bootstrap phase. On F5 reload, the `UserSessionService.initSession()` runs (restoring user data from the `/v1/auth/me` endpoint), but `PermissionsService` remains uninitialized. When the `roleModuleGuard` fires for the target route, it finds permissions uninitialized, calls `waitForInit()`, which waits for `initialized$` to emit `true` — but since no one ever calls `PermissionsService.init()`, this Observable never completes, leaving the router in a pending state and the page blank.

## Bug Analysis

### Current Behavior (Defect)

1.1 WHEN a user is authenticated and reloads the page (F5) on any protected route THEN the system shows a blank page because `PermissionsService` is never initialized during the app bootstrap, causing `roleModuleGuard` to hang indefinitely waiting on `waitForInit()`

1.2 WHEN a user is authenticated and reloads the page (F5) and the `roleModuleGuard` calls `permissions.isInitialized()` THEN the system returns `false` because `PermissionsService.init()` was never invoked during `APP_INITIALIZER`

1.3 WHEN a user is authenticated and reloads the page (F5) and the `roleModuleGuard` falls into the `waitForInit()` path THEN the system never resolves the Observable because `initialized$` remains `false` indefinitely, blocking route activation

### Expected Behavior (Correct)

2.1 WHEN a user is authenticated and reloads the page (F5) on any protected route THEN the system SHALL initialize `PermissionsService` during the `APP_INITIALIZER` phase (alongside `UserSessionService.initSession()`) so that permissions are loaded before route guards execute

2.2 WHEN a user is authenticated and reloads the page (F5) and the `roleModuleGuard` calls `permissions.isInitialized()` THEN the system SHALL return `true` because `PermissionsService.init()` completed during bootstrap

2.3 WHEN a user is authenticated and reloads the page (F5) on a route the user has access to THEN the system SHALL render the correct view with full layout (sidebar, header, content) without showing a blank page

### Unchanged Behavior (Regression Prevention)

3.1 WHEN a user is not authenticated and navigates to a protected route THEN the system SHALL CONTINUE TO redirect to `/auth/login` via `AuthGuard`

3.2 WHEN a user logs in through the login form (backend or Firebase) THEN the system SHALL CONTINUE TO initialize permissions and navigate to the default redirect route

3.3 WHEN a user is authenticated and navigates between routes without reloading THEN the system SHALL CONTINUE TO evaluate `roleModuleGuard` using already-initialized permissions

3.4 WHEN a user is authenticated but does not have access to a specific module/route THEN the system SHALL CONTINUE TO redirect to `/access-denied`

3.5 WHEN a user's token is expired and they reload the page THEN the system SHALL CONTINUE TO redirect to `/auth/login` without attempting to load permissions
