import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { catchError, filter, first, map, switchMap, tap } from 'rxjs/operators';
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
  private usingFallback$ = new BehaviorSubject<boolean>(false);
  private userRole$ = new BehaviorSubject<UserRole | null>(null);
  private initialized$ = new BehaviorSubject<boolean>(false);

  private apiUrl = environment.apiUrl;

  /** Observable that emits whenever tenant modules or user role change */
  permissions$ = combineLatest([
    this.tenantModules$.asObservable(),
    this.userRole$.asObservable(),
  ]);

  constructor(private http: HttpClient) {}

  /**
   * Initialize permissions by extracting role/tenant from JWT
   * and fetching enabled modules from the backend.
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

    return this.http
      .get<{ success: boolean; data: { modules: string[] } }>(
        `${this.apiUrl}/v1/modules/enabled`,
        { params: { idTenant: String(idTenant) } }
      )
      .pipe(
        tap((res) => {
          if (res && res.success && res.data && res.data.modules) {
            this.tenantModules$.next(res.data.modules);
          } else {
            this.tenantModules$.next([]);
          }
        }),
        catchError(() => {
          this.tenantModules$.next([]);
          return of(undefined);
        }),
        switchMap(() =>
          this.http
            .get<{ success: boolean; data: { modules: string[] } }>(
              `${this.apiUrl}/v1/role-modules/by-role`,
              { params: { role: rol, idTenant: String(idTenant) } }
            )
            .pipe(
              tap((res) => {
                if (res?.success && res.data?.modules) {
                  this.roleModules$.next(res.data.modules);
                  this.usingFallback$.next(false);
                } else {
                  this.useFallback(rol);
                }
              }),
              catchError(() => {
                this.useFallback(rol);
                return of(undefined);
              })
            )
        ),
        tap(() => {
          this.initialized$.next(true);
        }),
        map(() => undefined)
      );
  }

  /** Reset all state (call on logout). */
  clear(): void {
    this.tenantModules$.next([]);
    this.roleModules$.next([]);
    this.usingFallback$.next(false);
    this.userRole$.next(null);
    this.initialized$.next(false);
  }

  /** Find which module governs a given route, or null if unmapped. */
  getModuleForRoute(route: string): ModuleName | null {
    const entries = Object.entries(MODULE_ROUTE_MAP) as [ModuleName, string[]][];
    for (const [moduleName, prefixes] of entries) {
      for (const prefix of prefixes) {
        if (route.startsWith(prefix)) {
          return moduleName;
        }
      }
    }
    return null;
  }

  /** Check if a module is in the tenant's enabled list. */
  isModuleEnabled(module: ModuleName): boolean {
    return this.tenantModules$.getValue().includes(module);
  }

  /** Check if a role has access to a module using dynamic role modules. */
  roleHasModule(role: UserRole, module: ModuleName): boolean {
    return this.roleModules$.getValue().includes(module);
  }

  /**
   * Combined two-layer access check.
   * Returns true only if the route maps to a module that is both
   * enabled for the tenant AND accessible by the user's role.
   */
  hasAccess(route: string): boolean {
    const module = this.getModuleForRoute(route);
    if (!module) {
      return false;
    }
    if (!this.isModuleEnabled(module)) {
      return false;
    }
    const role = this.userRole$.getValue();
    if (!role) {
      return false;
    }
    return this.roleHasModule(role, module);
  }

  /**
   * Return the post-login redirect route for the current role.
   * Falls back to the first accessible route, or /access-denied.
   */
  getDefaultRedirect(): string {
    const role = this.userRole$.getValue();
    if (!role) {
      return '/access-denied';
    }

    const defaultRoute = DEFAULT_REDIRECTS[role];
    if (defaultRoute && this.hasAccess(defaultRoute)) {
      return defaultRoute;
    }

    // Fallback: find first accessible route from the role's allowed modules
    const allowedModules = this.roleModules$.getValue();
    for (const mod of allowedModules) {
      if (this.isModuleEnabled(mod as ModuleName)) {
        const prefixes = MODULE_ROUTE_MAP[mod as ModuleName];
        if (prefixes && prefixes.length > 0) {
          return prefixes[0];
        }
      }
    }

    return '/access-denied';
  }

  /**
   * Recursively filter menu items based on both permission layers.
   * - Items with `path` are checked against MODULE_ROUTE_MAP + both layers.
   * - Items with `children` are filtered recursively; parents with no visible children are excluded.
   * - headTitle items are excluded if their following section is empty.
   */
  getFilteredMenuItems(items: Menu[]): Menu[] {
    const result: Menu[] = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      // headTitle items: include only if the next section has visible items
      if (item.headTitle) {
        // Collect items until the next headTitle
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
        i = j - 1; // skip processed items
        continue;
      }

      // Items with children: filter recursively
      if (item.children && item.children.length > 0) {
        const filteredChildren = this.filterMenuChildren(item.children);
        if (filteredChildren.length > 0) {
          result.push({ ...item, children: filteredChildren });
        }
        continue;
      }

      // Items with path: check access
      if (item.path) {
        if (this.hasAccess(item.path)) {
          result.push(item);
        }
        continue;
      }

      // Items without path and without children (e.g., empty type): include as-is
      result.push(item);
    }

    return result;
  }

  /** Whether init() has completed. */
  isInitialized(): boolean {
    return this.initialized$.getValue();
  }

  /** Observable that emits true once init() completes. Useful for guards. */
  waitForInit(): Observable<boolean> {
    return this.initialized$.asObservable().pipe(
      filter((init) => init === true),
      first()
    );
  }

  // ---- Private helpers ----

  private useFallback(role: string): void {
    if (VALID_ROLES.includes(role as UserRole)) {
      this.roleModules$.next(ROLE_ACCESS_MATRIX[role as UserRole] || []);
    } else {
      this.roleModules$.next([]);
    }
    this.usingFallback$.next(true);
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
        if (this.hasAccess(child.path)) {
          result.push(child);
        }
      } else {
        // Items without path and without children: include
        result.push(child);
      }
    }
    return result;
  }
}
