# Implementation Plan: Security Hardening

## Overview

Incremental security hardening of the LariTechFarms multi-tenant system. The implementation follows a layered approach: database schema first, then backend services/middlewares, then controller refactoring, and finally frontend changes. Each step builds on the previous and ends with wiring into the existing pipeline.

## Tasks

- [x] 1. Database schema and infrastructure setup
  - [x] 1.1 Add new Prisma models and migrate database
    - Add `RefreshToken`, `PasswordResetToken`, and `SecurityAuditLog` models to `prisma/schema.prisma`
    - Add `mustChangePassword` field to `Usuario` model
    - Add relations `refreshTokens` and `passwordResetTokens` to `Usuario`
    - Run `npx prisma migrate dev` to generate and apply migration
    - _Requirements: 1.6, 13.3, 14.2, 4.5_

  - [x] 1.2 Add new environment variables and install dependencies
    - Add `JWT_ACCESS_EXPIRY`, `JWT_REFRESH_EXPIRY_DAYS`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `FRONTEND_URL`, `COOKIE_DOMAIN` to `.env` and `.env.example`
    - Install `cookie-parser`, `@types/cookie-parser`, `zod`, `xss`, `uuid` (if not present)
    - Install dev dependencies: `fast-check`, `supertest`, `@types/supertest` (if not present)
    - _Requirements: 1.1, 13.9_

- [x] 2. Backend core services
  - [x] 2.1 Implement `src/services/tokenService.ts`
    - `generateAccessToken(payload)` — signs JWT with 15min expiry
    - `generateRefreshToken()` — generates crypto-random opaque token
    - `hashRefreshToken(token)` — bcrypt hash with cost 12
    - `verifyRefreshToken(token, hash)` — bcrypt compare
    - `generateResetToken()` — crypto-random token for password reset
    - `generateTemporaryPassword()` — random password meeting policy
    - _Requirements: 1.1, 1.6, 6.3, 13.1, 14.1_

  - [ ]* 2.2 Write property test for token hashing (Property 5)
    - **Property 5: Security tokens stored as bcrypt hashes**
    - Generate random tokens, hash them, verify stored hash is valid bcrypt and ≠ raw token
    - **Validates: Requirements 1.6, 13.3**

  - [x] 2.3 Implement `src/services/passwordPolicy.ts`
    - `validatePasswordPolicy(password)` — returns `{ valid, failures[] }`
    - `calculatePasswordStrength(password)` — returns 'weak' | 'medium' | 'strong'
    - Rules: ≥8 chars, ≥1 uppercase, ≥1 lowercase, ≥1 digit, ≥1 special char
    - _Requirements: 6.1, 6.2, 14.1_

  - [ ]* 2.4 Write property test for password policy (Property 10)
    - **Property 10: Password policy validation**
    - Generate random strings, evaluate with policy, verify result matches manual criteria check
    - **Validates: Requirements 6.1, 6.2, 14.1**

  - [x] 2.5 Implement `src/services/auditLogger.ts`
    - Create dedicated Winston logger writing to `logs/audit.log`
    - Define `AuditEvent` interface with correlationId, timestamp, action, userId, targetUserId, tenantId, ip, userAgent, result, details
    - Ensure passwords are never included in audit entries
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

  - [ ]* 2.6 Write property test for audit logging (Property 8)
    - **Property 8: Audit logging captures security events with required fields**
    - Generate audit events, verify all required fields present and no password values
    - **Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.6**

  - [x] 2.7 Implement `src/services/emailService.ts`
    - Configure nodemailer with SMTP from env vars
    - `sendPasswordResetEmail(to, resetUrl, expiresInMinutes)` — sends HTML email with reset link
    - _Requirements: 13.1, 13.9_

- [x] 3. Backend middlewares
  - [x] 3.1 Implement `src/middleware/correlationId.ts`
    - Generate UUID v4 per request, attach to `req` and `res` headers (`X-Correlation-ID`)
    - _Requirements: 4.6_

  - [x] 3.2 Implement `src/middleware/sanitizer.ts`
    - Recursively traverse `req.body` and escape HTML tags and control characters from all string fields
    - Apply globally after body parser
    - _Requirements: 2.3_

  - [ ]* 3.3 Write property test for sanitizer (Property 7)
    - **Property 7: Sanitizer escapes HTML and control characters**
    - Generate strings with random HTML tags and control chars, verify output has no unescaped tags
    - **Validates: Requirements 2.3**

  - [x] 3.4 Implement `src/middleware/inputValidator.ts`
    - `validate(schema: ZodSchema)` middleware factory
    - Validates `req.body` against schema, responds HTTP 400 with field names and rejection reasons
    - _Requirements: 2.1, 2.2, 2.4, 2.5_

  - [ ]* 3.5 Write property test for input validation (Property 6)
    - **Property 6: Input validation rejects invalid data with descriptive errors**
    - Generate objects with invalid fields, verify rejection with correct field names and reasons
    - **Validates: Requirements 2.1, 2.2, 2.4, 2.5**

  - [x] 3.6 Implement `src/middleware/rateLimiter.ts`
    - `loginLimiter` — 5 req/min per IP
    - `forgotPasswordLimiter` — 3 req/min per IP
    - `registerLimiter` — 10 req/hour per tenant
    - `generalLimiter` — 100 req/15min per IP (replaces current global limiter)
    - All respond with HTTP 429 + `Retry-After` and `X-RateLimit-Reset` headers
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 11.5_

  - [x] 3.7 Implement `src/middleware/tenantScope.ts`
    - `validateTenantScope` — verifies `idTenant` from JWT matches request, auto-injects if missing
    - Superadmin bypasses check
    - Non-superadmin accessing different tenant gets HTTP 403
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

  - [ ]* 3.8 Write property test for tenant isolation (Property 12)
    - **Property 12: Tenant data isolation**
    - Generate (role, jwtTenantId, requestedTenantId) combinations, verify only superadmin crosses tenants
    - **Validates: Requirements 9.1, 9.2, 9.3**

- [x] 4. Checkpoint - Ensure all services and middlewares compile and pass tests
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 5. Validation schemas
  - [x] 5.1 Create `src/validation/schemas/auth.schema.ts`
    - Zod schemas for: login, register, changePassword, forgotPassword, resetPassword, adminResetPassword
    - Enforce max lengths (email: 255, nombre: 100, password: 128)
    - _Requirements: 2.1, 2.5, 6.1_

  - [x] 5.2 Create Zod schemas for remaining domains
    - `usuarios.schema.ts`, `ventas.schema.ts`, `lotes.schema.ts`, `empleados.schema.ts`, etc.
    - Define field types, formats, ranges, and max lengths per domain
    - _Requirements: 2.1, 2.5_

- [ ] 6. Auth controller refactoring
  - [x] 6.1 Refactor `login` to emit short-lived access token + refresh token
    - Generate access token (15min) and refresh token (7d)
    - Store refresh token hash in DB with familyId, IP, userAgent
    - Send refresh token as `httpOnly; Secure; SameSite=Strict` cookie
    - Log audit event (success/failure) via auditLogger
    - Apply `loginLimiter` and `validate(loginSchema)` to route
    - _Requirements: 1.1, 1.6, 3.1, 4.1_

  - [x] 6.2 Refactor `refreshToken` endpoint for token rotation with replay detection
    - Read refresh token from cookie instead of requiring auth header
    - Validate token against DB hash, check expiry and revoked status
    - If token already revoked (replay): revoke entire family, respond 401
    - If valid: issue new access + refresh tokens, revoke old token, link via `replacedById`
    - _Requirements: 1.2, 1.3, 1.5_

  - [ ]* 6.3 Write property test for refresh token rotation (Property 2)
    - **Property 2: Refresh token rotation round-trip**
    - **Validates: Requirements 1.2**

  - [ ]* 6.4 Write property test for replay detection (Property 3)
    - **Property 3: Replay detection invalidates token family**
    - **Validates: Requirements 1.3**

  - [x] 6.5 Refactor `logout` to revoke refresh token and clear cookie
    - Mark refresh token as revoked in DB
    - Clear httpOnly cookie
    - Log audit event
    - _Requirements: 1.4_

  - [ ]* 6.6 Write property test for logout (Property 4)
    - **Property 4: Logout revokes refresh token**
    - **Validates: Requirements 1.4**

  - [x] 6.7 Protect `register` endpoint with auth + role check
    - Add `authenticateToken` and `requireRole('admin', 'superadmin')` to route
    - Apply `registerLimiter` and `validate(registerSchema)`
    - Validate email format and uniqueness within tenant
    - Validate password against policy
    - Log audit event
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_

  - [ ]* 6.8 Write property test for register protection (Property 13)
    - **Property 13: Register endpoint requires admin authorization**
    - **Validates: Requirements 11.1, 11.2, 11.3**

  - [x] 6.9 Refactor `changePassword` with password policy and session invalidation
    - Validate new password against `passwordPolicy`
    - Verify new ≠ current password
    - Revoke all refresh tokens except current session
    - Log audit event
    - _Requirements: 6.1, 6.4, 12.1, 12.2, 12.3, 12.4, 12.5_

  - [ ]* 6.10 Write property test for password change session invalidation (Property 16)
    - **Property 16: Password change invalidates other sessions**
    - **Validates: Requirements 12.5**

  - [x] 6.11 Implement `forgotPassword` with real token generation and email
    - Generate reset token, store hash in DB with 30min expiry
    - Send email with reset link via emailService
    - Always respond HTTP 200 with same message regardless of email existence
    - Apply `forgotPasswordLimiter`
    - _Requirements: 13.1, 13.2, 13.3, 13.8, 13.9_

  - [ ]* 6.12 Write property test for forgot-password uniformity (Property 14)
    - **Property 14: Forgot-password response uniformity**
    - **Validates: Requirements 13.2**

  - [x] 6.13 Implement new `resetPassword` endpoint
    - Validate reset token (valid, not expired, not used)
    - Validate new password against policy
    - Update password hash, mark token as used
    - Revoke all refresh tokens for user
    - Respond 400 with specific message for invalid/expired/used tokens
    - _Requirements: 13.4, 13.5, 13.6, 13.7_

  - [ ]* 6.14 Write property test for reset token round-trip (Property 15)
    - **Property 15: Reset token validation and password update round-trip**
    - **Validates: Requirements 13.5, 13.6**

  - [x] 6.15 Implement new `adminResetPassword` endpoint
    - Require `admin` or `superadmin` role
    - Generate temporary password meeting policy
    - Set `mustChangePassword = true` on target user
    - Revoke all refresh tokens for target user
    - Return temporary password in response
    - Log audit event
    - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5_

  - [ ]* 6.16 Write property test for admin reset (Property 17)
    - **Property 17: Admin reset sets forced password change flag**
    - **Validates: Requirements 14.1, 14.2**

- [ ] 7. Server configuration hardening
  - [x] 7.1 Harden `src/server.ts` — security headers, CORS, and middleware wiring
    - Configure Helmet with: HSTS (max-age=31536000; includeSubDomains), X-Content-Type-Options: nosniff, X-Frame-Options: DENY, CSP (default-src 'self' + needed sources), Referrer-Policy: strict-origin-when-cross-origin, hidePoweredBy
    - Harden CORS: reject requests without `Origin` in production (except server tools)
    - Add `cookie-parser` middleware
    - Wire `correlationId`, `sanitizeInput` middlewares globally
    - Replace global rate limiter with `generalLimiter`
    - Apply granular limiters to auth routes
    - Apply `validateTenantScope` to protected routes
    - Apply `validate(schema)` to all endpoints
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 9.4_

  - [ ]* 7.2 Write property test for CORS origin validation (Property 11)
    - **Property 11: CORS origin validation**
    - Generate random origin URLs, verify only allowlisted or railway.app subdomains pass
    - **Validates: Requirements 7.1, 7.2**

  - [x] 7.3 Harden `src/middleware/errorHandler.ts` for production
    - In production: omit stack traces, Prisma codes, internal paths from responses
    - Map unknown Prisma errors to "Error de base de datos" without code
    - Always log full error internally with Winston
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [ ]* 7.4 Write property test for error handler (Property 9)
    - **Property 9: Error handler hides internals in production, logs fully internally**
    - Generate random errors, verify response in production mode has no stack/paths/codes
    - **Validates: Requirements 5.1, 5.2, 5.3, 5.4**

- [x] 8. Checkpoint - Backend complete, ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 9. Frontend — Token management and session handling
  - [x] 9.1 Create `src/app/shared/services/token.service.ts`
    - Store access token in memory (class variable), not localStorage
    - Methods: `setAccessToken`, `getAccessToken`, `clearAccessToken`, `isTokenExpired`, `decodePayload`
    - _Requirements: 10.3, 10.5_

  - [x] 9.2 Refactor `auth-interceptor.service.ts` for automatic token refresh
    - Read token from `TokenService` instead of localStorage
    - On 401 response: attempt refresh via `POST /auth/refresh` (cookie-based)
    - Queue pending requests during refresh to avoid concurrent refreshes
    - On refresh failure: clear session, redirect to login
    - _Requirements: 10.1, 10.2_

  - [x] 9.3 Refactor `auth.service.ts` to use `TokenService`
    - Replace all `localStorage.getItem('auth_token')` / `setItem` with `TokenService` methods
    - `universalLogout` calls backend logout endpoint to invalidate refresh token
    - _Requirements: 10.3, 10.4_

  - [x] 9.4 Refactor `user-session.service.ts` and `permissions.service.ts`
    - Replace `localStorage.getItem('auth_token')` with `TokenService.getAccessToken()`
    - On init: if no access token in memory, attempt silent refresh
    - _Requirements: 10.3_

- [x] 10. Frontend — Password and auth screens
  - [x] 10.1 Create password strength indicator component
    - `src/app/shared/components/password-strength/password-strength.component.ts`
    - Visual indicator (weak/medium/strong) matching backend policy rules
    - _Requirements: 12.8_

  - [x] 10.2 Create/update change password form
    - Fields: current password, new password, confirm new password
    - Validate new === confirm before submit
    - Integrate password strength indicator
    - Accessible from user menu/profile
    - _Requirements: 12.6, 12.7, 12.8_

  - [x] 10.3 Create forgot password screen
    - Accessible from login screen
    - Single email field, submit to `POST /auth/forgot-password`
    - Show confirmation message regardless of result
    - _Requirements: 13.10_

  - [x] 10.4 Create reset password screen
    - Receives token from URL params
    - Form: new password + confirm + strength indicator
    - Submit to `POST /auth/reset-password` with token
    - Handle error messages for invalid/expired tokens
    - _Requirements: 13.4_

  - [x] 10.5 Implement forced password change redirect
    - On login response, check `mustChangePassword` flag
    - If true, redirect to change password form before allowing system access
    - _Requirements: 14.3_

- [x] 11. Final checkpoint - Full integration verification
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- The backend uses TypeScript with Express + Prisma; the frontend uses Angular 18 with TypeScript
