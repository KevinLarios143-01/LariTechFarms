import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { TokenService } from '../shared/services/token.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
  ) {}

  canActivate(): boolean | UrlTree {
    const token = this.authService.getToken();
    if (token && this.isTokenValid(token)) {
      // Check if user must change password — redirect to change-password form
      const payload = this.tokenService.decodePayload();
      if (payload?.mustChangePassword) {
        // Allow access to the change-password route itself to avoid infinite redirect
        const currentUrl = this.router.getCurrentNavigation()?.extractedUrl?.toString() || '';
        if (!currentUrl.includes('change-password')) {
          return this.router.createUrlTree(['/auth/change-password']);
        }
      }
      return true;
    }
    return this.router.createUrlTree(['/auth/login']);
  }

  private isTokenValid(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const now = Math.floor(Date.now() / 1000);
      return payload.exp && payload.exp > now;
    } catch {
      return false;
    }
  }
}
