import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { content } from './shared/routes/content.route';
import { AuthenticationLayoutComponent } from './shared/layouts/authentication-layout/authentication-layout.component';
import { authen } from './shared/routes/auth.route';
import { SupportSystemComponent } from './shared/layouts/support-system/support-system.component';
import { AuthGuard } from './core/auth.guard';
import { roleModuleGuard } from './core/role-module.guard';



export const App_Route: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', loadComponent: () => import('../app/authentication/login/login.component').then((m) => m.LoginComponent) },
  { path: 'access-denied', loadComponent: () => import('./componets/custom-pages/access-denied/access-denied.component').then(m => m.AccessDeniedComponent) },
  { path: '', component: MainLayoutComponent, canActivate: [AuthGuard], canActivateChild: [roleModuleGuard], children: content },
  { path: '', component: AuthenticationLayoutComponent, children: authen },
];
