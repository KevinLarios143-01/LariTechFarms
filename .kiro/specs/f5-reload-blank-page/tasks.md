# Tasks

- [x] 1. Update APP_INITIALIZER to chain PermissionsService.init()
  - [x] 1.1 Modify `initializeUserSession` factory in `LariTechFarms/src/app/app.config.ts` to also inject `PermissionsService` and chain `permissions.init()` after `userSession.initSession()` using `switchMap`
  - [x] 1.2 Update the `deps` array in the `APP_INITIALIZER` provider to include `PermissionsService`
  - [x] 1.3 Rename the factory function from `initializeUserSession` to `initializeApp` to reflect its broader responsibility
- [x] 2. Verify no regressions in login flow
  - [x] 2.1 Confirm that `LoginComponent.loginWithBackend()` and `validateBackendUser()` still work correctly — `PermissionsService.init()` is idempotent so calling it during login and again on next reload is safe
  - [x] 2.2 Verify that `PermissionsService.init()` handles the no-token case gracefully (sets `initialized$` to `true` with empty permissions) so the initializer doesn't break for unauthenticated bootstraps
- [ ] 3. Manual smoke test
  - [ ] 3.1 Login with valid credentials, navigate to a protected route, press F5 — verify the page renders correctly instead of showing blank
  - [ ] 3.2 Open the app with no token (fresh browser) — verify redirect to `/auth/login`
  - [ ] 3.3 Login, navigate between routes without reloading — verify normal navigation still works
