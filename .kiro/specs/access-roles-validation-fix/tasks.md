# Tasks — Access Roles Validation Fix

- [x] 1. Fix `roleHasModule()` to use intersection logic
  - [x] 1.1 Change `roleHasModule` to always check `roleModules.includes(module)` first, then additionally require `userModules.includes(module)` when `userModules` is non-empty
- [x] 2. Fix `hasRouteAccess()` to use intersection logic for route permissions
  - [x] 2.1 Replace the early-return on `userRoutePermissions` with intersection logic: when both `roleRoutes` and `userRoutes` exist for a module, require the route to match prefixes in BOTH
  - [x] 2.2 Keep permissive fallback when neither `roleRoutes` nor `userRoutes` exist
- [x] 3. Fix `getDefaultRedirect()` to use effective (intersected) modules
  - [x] 3.1 Replace `userMods.length > 0 ? userMods : roleModules` with `userMods.length > 0 ? roleMods.filter(m => userMods.includes(m)) : roleMods`
- [x] 4. Write exploratory tests to confirm bugs on unfixed code
  - [x] 4.1 [PBT-exploration] Write property test: for any module in `userModules` but NOT in `roleModules`, `roleHasModule` returns `true` (demonstrating bug 1)
  - [x] 4.2 [PBT-exploration] Write property test: for any route matching `userRoutes` but NOT `roleRoutes`, `hasRouteAccess` returns `true` (demonstrating bug 3)
- [x] 5. Write fix-checking tests to verify corrected behavior
  - [x] 5.1 [PBT-fix] Write property test: for any module, `roleHasModule` returns `true` iff `roleModules.includes(module) AND (userModules.length === 0 OR userModules.includes(module))` — validates Property 1
  - [x] 5.2 [PBT-fix] Write property test: for any route where both `roleRoutes` and `userRoutes` exist, `hasRouteAccess` returns `true` only when route matches BOTH — validates Property 2
- [x] 6. Write preservation tests to verify unchanged behavior
  - [x] 6.1 [PBT-preservation] Write property test: when `userModules` is empty, `roleHasModule` returns `roleModules.includes(module)` — validates Property 3
  - [x] 6.2 [PBT-preservation] Write property test: when module is NOT in `tenantModules`, `hasAccess` returns `false` regardless of role/user config — validates Property 4
  - [x] 6.3 [PBT-preservation] Write property test: when no route permissions exist for a module, `hasRouteAccess` returns `true` (given module access) — validates Property 5
