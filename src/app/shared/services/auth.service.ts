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
    private http: HttpClient
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
    return this.http.post<LoginResponse>(`${this.apiUrl}/v1/auth/login`, { email, password });
  }

  /**
   * Registro usando el backend propio
   * @param email Email del usuario
   * @param password Contraseña
   * @returns Observable con la respuesta del backend
   */

  backendRegister(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/v1/auth/register`, { email, password });
  }

  /**
   * Guardar token en localStorage
   */
  saveToken(token: string) {
    localStorage.setItem('auth_token', token);
  }

  /**
   * Obtener token de localStorage
   */
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  /**
   * Eliminar token de localStorage
   */
  removeToken() {
    localStorage.removeItem('auth_token');
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
    return this.afu
      .signInWithEmailAndPassword(email, password)
      .then((user: any) => {
        this.authState = user;
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
