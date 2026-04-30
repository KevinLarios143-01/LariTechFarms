import { Injectable, NgZone } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../interfaces/login-response.interface';
import firebase from 'firebase/compat/app';
import { PermissionsService } from './permissions.service';
import { TokenService } from './token.service';
import { UserSessionService } from './user-session.service';
export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authState: any;
  afAuth: any;
  afs: any;
  public showLoader: boolean = false;

  // URL base del backend
  private apiUrl = environment.apiUrl;

  constructor(
    private afu: AngularFireAuth,
    private router: Router,
    public ngZone: NgZone,
    private cookieService: CookieService,
    private http: HttpClient,
    private permissionsService: PermissionsService,
    private tokenService: TokenService,
    private userSessionService: UserSessionService,
  ) {
    this.afu.authState.subscribe((auth: any) => {
      this.authState = auth;
    });
  }

  // --- Métodos para autenticación con el backend propio ---

  /**
   * Login usando el backend propio
   * @param email Email del usuario
   * @param password Contraseña
   * @returns Observable con la respuesta del backend
   */

  backendLogin(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/v1/auth/login`, { email, password }, { withCredentials: true });
  }

  /**
   * Registro usando el backend propio
   * @param email Email del usuario
   * @param password Contraseña
   * @returns Observable con la respuesta del backend
   */

  backendRegister(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/v1/auth/register`, { email, password }, { withCredentials: true });
  }

  /**
   * Intercambiar Firebase token por backend token
   */
  exchangeFirebaseToken(firebaseToken: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/v1/auth/firebase-login`, { 
      firebaseToken 
    }, { withCredentials: true });
  }

  /**
   * Guardar token en memoria via TokenService (ya no usa localStorage)
   */
  saveToken(token: string) {
    this.tokenService.setAccessToken(token);
  }

  /**
   * Obtener token de memoria via TokenService
   */
  getToken(): string | null {
    return this.tokenService.getAccessToken();
  }

  /**
   * Eliminar token de memoria via TokenService
   */
  removeToken() {
    this.tokenService.clearAccessToken();
  }

  /**
   * Verificar si el usuario está autenticado (Firebase o Backend)
   */
  isAuthenticated(): boolean {
    // Verificar si hay token del backend válido (no expirado)
    const backendToken = this.tokenService.getAccessToken();
    const tokenValid = !!backendToken && !this.tokenService.isTokenExpired();
    // Verificar si hay usuario de Firebase
    const firebaseUser = this.isUserEmailLoggedIn;
    
    return tokenValid || firebaseUser;
  }

  /**
   * Logout universal — invalida refresh token en backend, limpia sesión local
   */
  universalLogout() {
    // Fire-and-forget: call backend logout to invalidate refresh token cookie
    this.http.post(`${this.apiUrl}/v1/auth/logout`, {}, { withCredentials: true }).subscribe({
      error: () => {
        // Silently ignore — the local cleanup below still runs
      }
    });

    // Limpiar permisos
    this.permissionsService.clear();
    // Limpiar sesión de usuario
    this.userSessionService.clearSession();
    // Limpiar access token de memoria
    this.tokenService.clearAccessToken();
    // Cerrar sesión de Firebase y navegar a login
    this.singout();
  }

  // all firebase getdata functions

  get isUserAnonymousLoggedIn(): boolean {
    return this.authState !== null ? this.authState.isAnonymous : false;
  }

  get currentUserId(): string {
    return this.authState !== null ? this.authState.uid : '';
  }

  get currentUserName(): string {
    return this.authState['email'];
  }

  get currentUser(): any {
    return this.authState !== null ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if (this.authState !== null && !this.isUserAnonymousLoggedIn) {
      return true;
    } else {
      return false;
    }
  }

  registerWithEmail(email: string, password: string) {
    return this.afu
      .createUserWithEmailAndPassword(email, password)
      .then((user: any) => {
        this.authState = user;
      })
      .catch((_error: any) => {
        console.log(_error);
        throw _error;
      });
  }

  loginWithEmail(email: string, password: string) {
    console.log('Firebase Auth instance:', this.afu);
    
    if (!this.afu) {
      throw new Error('Firebase Auth no inicializado');
    }
    
    return this.afu
      .signInWithEmailAndPassword(email, password)
      .then((user: any) => {
        this.authState = user;
        return user;
      })
      .catch((_error: any) => {
        console.error('Firebase login error:', _error);
        throw _error;
      });
  }

  /**
   * Login con Google
   */
  loginWithGoogle() {
    return this.afu
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((user: any) => {
        this.authState = user;
        return user;
      })
      .catch((_error: any) => {
        console.log(_error);
        throw _error;
      });
  }

  singout(): void {
    this.afu.signOut();
    this.router.navigate(['/login']);
  }


  get isLoggedIn(): boolean {
    const user = JSON.parse(this.cookieService.get('user') || '{}');
    return (user != null && user.emailVerified != false) ? true : false;
  }

  // Sign up with email/password
  SignUp(email: any, password: any) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result: any) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error: any) => {
        window.alert(error.message)
      })
  }


  // main verification function
  SendVerificationMail() {
    return this.afAuth.currentUser.then((u: any) => u.sendEmailVerification()).then(() => {
      this.router.navigate(['/dashboard/hrmdashboards/dashboard']);
    })
  }
  // Set user
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      email: user.email,
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL || 'src/favicon.ico',
      emailVerified: user.emailVerified
    };
    userRef.delete().then(function () { })
      .catch(function (error: any) { });
    return userRef.set(userData, {
      merge: true
    });
  }
  // sign in function
  SignIn(email: any, password: any) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        if (result.user.emailVerified !== true) {
          this.SetUserData(result.user);
          this.SendVerificationMail();
          this.showLoader = true;
        } else {
          this.showLoader = false;
          this.ngZone.run(() => {
            this.router.navigate(['/auth/login']);
          });
        }
      }).catch((error: any) => {
        throw error;
      })
  }
  ForgotPassword(passwordResetEmail: any) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error: any) => {
        window.alert(error);
      });
  }
}