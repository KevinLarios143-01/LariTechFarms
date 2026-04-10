import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PermissionsService } from '../shared/services/permissions.service';

/**
 * Functional route guard (CanActivateFn) that enforces 4-layer access control.
 *
 * Always waits for PermissionsService initialization before evaluating (Req 8.4).
 * Uses getModuleForRoute() to identify the module for the requested route.
 * Uses hasRouteAccess() for full 4-layer validation (Req 4.6).
 * Redirects to /access-denied if access is denied (Req 7.2).
 *
 * Validates: Requirements 1.2, 2.4, 4.6, 7.2, 8.4
 */
export const roleModuleGuard: CanActivateFn = (
  route,
  state
): Observable<boolean | UrlTree> => {
  const permissions = inject(PermissionsService);
  const router = inject(Router);

  // Always wait for initialization before evaluating access (Req 8.4)
  return permissions.waitForInit().pipe(
    map(() => evaluateAccess(permissions, state.url, router))
  );
};

function evaluateAccess(
  permissions: PermissionsService,
  url: string,
  router: Router
): boolean | UrlTree {
  // Identify which module the route belongs to (Req 1.2)
  const module = permissions.getModuleForRoute(url);
  if (!module) {
    return router.createUrlTree(['/access-denied']);
  }

  // Full 4-layer validation: Tenant → Role → User → Route (Req 2.4, 4.6)
  if (!permissions.hasRouteAccess(url)) {
    return router.createUrlTree(['/access-denied']);
  }

  return true;
}
