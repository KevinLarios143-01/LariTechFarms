import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, combineLatest, forkJoin, of } from 'rxjs';
import { catchError, filter, first, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {
  UserRole,
  ModuleName,
  VALID_ROLES,
  MODULE_ROUTE_MAP,
  ROLE_ACCESS_MATRIX,
  DEFAULT_REDIRECTS,
} from './permissions.config';
import { Menu } from './navservice';

@Injectable({ providedIn: 'root' })
export class PermissionsService {
  private tenantModules$ = new BehaviorSubject<string[]>([]);
  private roleModules$ = new BehaviorSubject<string[]>([]);
  private userRole$ = new BehaviorSubject<UserRole | null>(null);
  private initialized$ = new BehaviorSubject<boolean>(false);
  private roleRoutePermissions$ = new BehaviorSubject<Record<string, string[]>>({});
  private userRoutePermissions$ = new BehaviorSubject<Record<string, string[]>>({});

  private apiUrl = environment.apiUrl;

  /** Observable that emits whenever tenant modules or user role change */
  permissions$ = combineLatest([
    this.tenantModules$.asObservable(),
    this.userRole$.asObservable(),
  ]);

  constructor(private http: HttpClient) {}

  /**
   * Initialize permissions: extract role/tenant from JWT,
   * fetch tenant modules, role modules, and route permissions.
   */
  init(): Observable<void> {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      this.tenantModules$.next([]);
      this.userRole$.next(null);
      this.initialized$.next(true);
      return of(undefined);
    }

    let payload: any;
    try {
      payload = JSON.parse(atob(token.split('.')[1]));
    } catch {
      this.tenantModules$.next([]);
      this.userRole$.next(null);
      this.initialized$.next(true);
      return of(undefined);
    }

    const rol = payload.rol as string;
    const idTenant = payload.idTenant;

    if (rol && VALID_ROLES.includes(rol as UserRole)) {
      this.userRole$.next(rol as UserRole);
    } else {
      this.userRole$.next(null);
    }

    // Layer 1: Tenant modules
    const tenantModules$ = this.http
      .get<{ success: boolean; data: { modules: string[] } }>(
        `${this.apiUrl}/v1/modules/enabled`,
        { params: { idTenant: String(idTenant) } }
      )
      .pipe(
        tap((res) => {
          this.tenantModules$.next(res?.success && res.data?.modules ? res.data.modules : []);
        }),
        catchError(() => { this.tenantModules$.next([]); return of(undefined); })
      );

    // Layer 2: Role modules (with fallback to ROLE_ACCESS_MATRIX)
    const roleModules$ = this.http
      .get<{ success: boolean; data: { modules: string[] } }>(
        `${this.apiUrl}/v1/role-modules/by-role`,
        { params: { role: rol, idTenant: String(idTenant) } }
      )
      .pipe(
        tap((res) => {
          if (res?.success && res.data?.modules && res.data.modules.length > 0) {
            this.roleModules$.next(res.data.modules);
          } else {
            this.roleModules$.next(ROLE_ACCESS_MATRIX[rol as UserRole] || []);
          }
        }),
        catchError(() => {
          this.roleModules$.next(ROLE_ACCESS_MATRIX[rol as UserRole] || []);
          return of(undefined);
        })
      );

    // Route permissions (role + user)
    const routePermissions$ = this.http
      .get<{ success: boolean; data: { role_routes: Record<string, string[]>; user_routes: Record<string, string[]> } }>(
        `${this.apiUrl}/v1/route-permissions/me`
      )
      .pipe(
        tap((res) => {
          if (res?.success && res.data) {
            this.roleRoutePermissions$.next(res.data.role_routes || {});
            this.userRoutePermissions$.next(res.data.user_routes || {});
          }
        }),
        catchError(() => {
          this.roleRoutePermissions$.next({});
          this.userRoutePermissions$.next({});
          return of(undefined);
        })
      );

    return forkJoin([tenantModules$, roleModules$, routePermissions$]).pipe(
      tap(() => this.initialized$.next(true)),
      map(() => undefined)
    );
  }

  /** Reset all state (call on logout). */
  clear(): void {
    this.tenantModules$.next([]);
    this.roleModules$.next([]);
    this.userRole$.next(null);
    this.initialized$.next(false);
    this.roleRoutePermissions$.next({});
    this.userRoutePermissions$.next({});
  }

  /** Find which module governs a given route, or null if unmapped. */
  getModuleForRoute(route: string): ModuleName | null {
    const entries = Object.entries(MODULE_ROUTE_MAP) as [ModuleName, string[]][];
    for (const [moduleName, prefixes] of entries) {
      for (const prefix of prefixes) {
        if (route.startsWith(prefix)) return moduleName;
      }
    }
    return null;
  }

  /** Check if a module is in the tenant's enabled list. */
  isModuleEnabled(module: ModuleName): boolean {
    return this.tenantModules$.getValue().includes(module);
  }

  /** Whether the user has individual route permissions configured. */
  private hasUserRoutes(): boolean {
    const userRoutes = this.userRoutePermissions$.getValue();
    return Object.values(userRoutes).some(routes => routes.length > 0);
  }

  /**
   * Access check with two modes:
   *
   * Mode A — User has user_route_permissions:
   *   Only check Tenant modules + user's assigned routes.
   *   The role/module layers are bypassed — the user sees exactly what was configured.
   *
   * Mode B — User has NO user_route_permissions:
   *   Check Tenant modules + Role modules + Role route permissions (if any).
   *   Permissive fallback if no role routes are configured.
   */
  hasRouteAccess(route: string): boolean {
    const module = this.getModuleForRoute(route);
    if (!module) return false;

    // Layer 1: Tenant must have the module enabled
    if (!this.isModuleEnabled(module)) return false;

    // Superadmin always has full access — skip route permission checks
    const role = this.userRole$.getValue();
    if (role === 'superadmin') return true;

    const userRoutes = this.userRoutePermissions$.getValue();
    const roleRoutes = this.roleRoutePermissions$.getValue();

    // Mode A: User has individual route permissions — they define access
    if (this.hasUserRoutes()) {
      const userModuleRoutes = userRoutes[module];
      if (userModuleRoutes && userModuleRoutes.length > 0) {
        return userModuleRoutes.some(p => route.startsWith(p));
      }
      // User has routes configured but none for this module → no access
      return false;
    }

    // Mode B: No user routes — use role-based access
    if (!role || !VALID_ROLES.includes(role)) return false;

    // Check role has the module
    const roleMods = this.roleModules$.getValue();
    if (!roleMods.includes(module)) return false;

    // Check role route permissions (if configured)
    const roleModuleRoutes = roleRoutes[module];
    if (roleModuleRoutes && roleModuleRoutes.length > 0) {
      return roleModuleRoutes.some(p => route.startsWith(p));
    }

    // No role route restrictions → permissive
    return true;
  }

  /**
   * Return the post-login redirect route for the current role.
   */
  getDefaultRedirect(): string {
    const role = this.userRole$.getValue();
    if (!role) return '/home';

    const defaultRoute = DEFAULT_REDIRECTS[role];
    if (defaultRoute && this.hasRouteAccess(defaultRoute)) return defaultRoute;

    // Fallback: find first accessible route
    const modules = this.hasUserRoutes()
      ? Object.keys(this.userRoutePermissions$.getValue())
      : this.roleModules$.getValue();

    for (const mod of modules) {
      if (this.isModuleEnabled(mod as ModuleName)) {
        const prefixes = MODULE_ROUTE_MAP[mod as ModuleName];
        if (prefixes?.length && this.hasRouteAccess(prefixes[0])) {
          return prefixes[0];
        }
      }
    }

    return '/home';
  }

  /**
   * Filter menu items based on permissions.
   */
  getFilteredMenuItems(items: Menu[]): Menu[] {
    const result: Menu[] = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.headTitle) {
        const sectionItems: Menu[] = [];
        let j = i + 1;
        while (j < items.length && !items[j].headTitle) {
          sectionItems.push(items[j]);
          j++;
        }
        const filteredSection = this.filterMenuChildren(sectionItems);
        if (filteredSection.length > 0) {
          result.push(item);
          result.push(...filteredSection);
        }
        i = j - 1;
        continue;
      }

      if (item.children && item.children.length > 0) {
        const filteredChildren = this.filterMenuChildren(item.children);
        if (filteredChildren.length > 0) {
          result.push({ ...item, children: filteredChildren });
        }
        continue;
      }

      if (item.path) {
        if (this.hasRouteAccess(item.path)) result.push(item);
        continue;
      }

      result.push(item);
    }

    return result;
  }

  /** Return the current user role (synchronous snapshot). */
  getUserRole(): UserRole | null {
    return this.userRole$.getValue();
  }

  isInitialized(): boolean {
    return this.initialized$.getValue();
  }

  waitForInit(): Observable<boolean> {
    return this.initialized$.asObservable().pipe(
      filter((init) => init === true),
      first()
    );
  }

  private filterMenuChildren(children: Menu[]): Menu[] {
    const result: Menu[] = [];
    for (const child of children) {
      if (child.children && child.children.length > 0) {
        const filteredChildren = this.filterMenuChildren(child.children);
        if (filteredChildren.length > 0) {
          result.push({ ...child, children: filteredChildren });
        }
      } else if (child.path) {
        if (this.hasRouteAccess(child.path)) result.push(child);
      } else {
        result.push(child);
      }
    }
    return result;
  }
}
