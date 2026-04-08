import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { map } from 'rxjs/operators';
import { PermissionsService } from '../shared/services/permissions.service';

export const roleModuleGuard: CanActivateFn = (route, state) => {
  const permissions = inject(PermissionsService);
  const router = inject(Router);

  if (!permissions.isInitialized()) {
    return permissions.waitForInit().pipe(
      map(() => evaluateAccess(permissions, state.url, router))
    );
  }
  return evaluateAccess(permissions, state.url, router);
};

function evaluateAccess(
  permissions: PermissionsService,
  url: string,
  router: Router
): boolean | UrlTree {
  const module = permissions.getModuleForRoute(url);
  if (!module) return router.createUrlTree(['/access-denied']);
  if (!permissions.hasRouteAccess(url)) return router.createUrlTree(['/access-denied']);
  return true;
}
