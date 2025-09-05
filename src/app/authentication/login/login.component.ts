import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared/services/auth.service';
import { FirebaseService } from '../../shared/services/firebase.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppStateService } from '../../shared/services/app-state.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, NgbModule, FormsModule, ReactiveFormsModule, AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule, ToastrModule
  ],

  providers: [FirebaseService, { provide: ToastrService, useClass: ToastrService }],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  public showPassword: boolean = false;

  toggleClass = 'eye-off';
  active = "Angular";

  public togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === 'eye') {
      this.toggleClass = 'eye-off';
    } else {
      this.toggleClass = 'eye';
    }
  }
  disabled = '';
  public localdata: any = this.appStateService;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document, private readonly elementRef: ElementRef,
    private readonly sanitizer: DomSanitizer,
    public readonly authservice: AuthService,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly renderer: Renderer2,
    private readonly firebaseService: FirebaseService,
    private readonly toastr: ToastrService,
    private readonly appStateService: AppStateService,
  ) {
    document.body.classList.add('error-1');
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
  }

  ngOnInit(): void {
    // Formulario para backend
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    // Formulario para Firebase
    this.firebaseForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    // Debug Firebase
    console.log('Auth State:', this.authservice.authState);
  }

  ngOnDestroy(): void {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    document.body.classList.remove('error-1');
  }

  // Firebase form
  public firebaseForm!: FormGroup;
  errorMessage = '';
  _error: { name: string; message: string } = { name: '', message: '' };

  clearErrorMessage() {
    this.errorMessage = '';
    this._error = { name: '', message: '' };
  }

  /**
   * Login con Firebase
   */
  loginWithFirebase() {
    this.clearErrorMessage();
    const email = this.firebaseForm.controls['email'].value;
    const password = this.firebaseForm.controls['password'].value;
    console.log('Email:', email);
    console.log('Password length:', password.length);

    if (this.validateForm(email, password)) {
      this.authservice
        .loginWithEmail(email, password)
        .then((userCredential: any) => {
          // Validar con backend antes de mostrar éxito
          console.log('Usuario Firebase:', userCredential.user);
          this.validateBackendUser(userCredential.user);
        })
        .catch((_error: any) => {
          this._error = _error;
          let errorMsg = 'Error de autenticación';

          if (_error.code === 'auth/user-not-found') {
            errorMsg = 'Usuario no encontrado. Verifica el email.';
          } else if (_error.code === 'auth/wrong-password' || _error.code === 'auth/invalid-credential') {
            errorMsg = 'Email o contraseña incorrectos.';
          } else if (_error.code === 'auth/invalid-email') {
            errorMsg = 'Email inválido.';
          } else if (_error.message === 'INVALID_LOGIN_CREDENTIALS') {
            errorMsg = 'Credenciales inválidas. Verifica email y contraseña.';
          }

          this.toastr.error(errorMsg, 'Firebase', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        });
    } else {
      this.toastr.error('Detalles inválidos', 'Firebase', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
      });
    }
  }

  /**
   * Login con Google
   */
  loginWithGoogle() {
    this.authservice
      .loginWithGoogle()
      .then((userCredential: any) => {
        // Validar con backend antes de mostrar éxito
        this.validateBackendUser(userCredential.user);
      })
      .catch((_error: any) => {
        this.toastr.error(_error.message || 'Error de autenticación con Google', 'Google', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      });
  }

  validateForm(email: string, password: string) {
    if (email.length === 0) {
      this.errorMessage = 'Por favor ingresa el email';
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = 'Por favor ingresa la contraseña';
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = 'La contraseña debe tener al menos 6 caracteres';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

  //angular
  public loginForm!: FormGroup;
  public error: any = '';

  get form() {
    return this.loginForm.controls;
  }

  /**
   * Login usando el backend propio
   */
  loginWithBackend() {
    const email = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;
    this.authservice.backendLogin(email, password).subscribe({
      next: (res) => {
        if (res && res.data && res.data.token) {
          this.authservice.saveToken(res.data.token);
          this.router.navigate(['/dashboard/hrmdashboards/dashboard']);
          this.toastr.success(res.message || 'Login exitoso', 'Backend', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        } else {
          this.toastr.error('Respuesta inválida del servidor', 'Backend', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        }
      },
      error: (err) => {
        this.toastr.error('Credenciales incorrectas o error de servidor', 'Backend', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      }
    });
  }

  /**
   * Submit del formulario de login para backend
   */
  submitBackend() {
    this.loginWithBackend();
  }

  /**
   * Validar usuario con backend
   */
  private validateBackendUser(user: any) {
    user.getIdToken().then((firebaseToken: string) => {
      this.authservice.exchangeFirebaseToken(firebaseToken).subscribe({
        next: (response: any) => {
          if (response && response.data && response.data.token) {
            this.authservice.saveToken(response.data.token);
            this.router.navigate(['/dashboard/hrmdashboards/dashboard']);
            this.toastr.success('Login exitoso', 'Acceso Autorizado', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
          }
        },
        error: (err) => {
          this.authservice.singout();
          this.toastr.error('Usuario no autorizado en el sistema', 'Acceso Denegado', {
            timeOut: 5000,
            positionClass: 'toast-top-right',
          });
        }
      });
    });
  }

  /**
   * Logout universal (Firebase y Backend)
   */
  logout() {
    this.authservice.singout();
    this.authservice.removeToken();
    this.router.navigate(['/']);
    this.toastr.info('Sesión cerrada', 'Logout', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  }
}
