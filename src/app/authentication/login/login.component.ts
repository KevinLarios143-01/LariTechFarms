import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
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
export class LoginComponent {
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
    @Inject(DOCUMENT) private document: Document, private elementRef: ElementRef,
    private sanitizer: DomSanitizer,
    public authservice: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private firebaseService: FirebaseService,
    private toastr: ToastrService,
    private appStateService: AppStateService,
  ) {
    // AngularFireModule.initializeApp(environment.firebase);

    document.body.classList.add('error-1');
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    // htmlElement.removeAttribute('style');


  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      /*
      username: ['spruko@admin.com', [Validators.required, Validators.email]],
      password: ['sprukoadmin', Validators.required],
      */
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnDestroy(): void {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    document.body.classList.remove('error-1');




  }
  firestoreModule = this.firebaseService.getFirestore();
  databaseModule = this.firebaseService.getDatabase();
  authModule = this.firebaseService.getAuth();
  // firebase
  //email = 'spruko@admin.com';
  //password = 'sprukoadmin';
  email = '';
  password = '';
  errorMessage = ''; // validation _error handle
  _error: { name: string; message: string } = { name: '', message: '' }; // for firbase _error handle

  clearErrorMessage() {
    this.errorMessage = '';
    this._error = { name: '', message: '' };
  }

  login() {
    // this.disabled = "btn-loading"
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice
        .loginWithEmail(this.email, this.password)
        .then(() => {
          this.router.navigate(['/dashboard/hrmdashboards/dashboard']);
          console.clear();
          this.toastr.success('login successful', 'dayone', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        })
        .catch((_error: any) => {
          this._error = _error;
          this.router.navigate(['/']);
        });

    }
    else {
      this.toastr.error('Invalid details', 'dayone', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
      });
    }
  }

  validateForm(email: string, password: string) {
    if (email.length === 0) {
      this.errorMessage = 'please enter email id';
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = 'please enter password';
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = 'password should be at least 6 char';
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
        // Adaptado a la estructura real: res.data.token y res.data.user
        if (res && res.data && res.data.token) {
          this.authservice.saveToken(res.data.token);
          // Si quieres guardar el usuario en algún lado, puedes hacerlo aquí: res.data.user
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
   * Submit del formulario de login
   * Puedes alternar entre loginWithBackend() y login() (Firebase) según tu lógica o UI
   */
  Submit() {
    // Para usar backend, descomenta la siguiente línea y comenta la lógica de Firebase si lo deseas
    this.loginWithBackend();
    // Si quieres seguir usando la validación dummy o Firebase, puedes dejar la lógica anterior
    // Ejemplo:
    // if (
    //   this.loginForm.controls['username'].value === 'spruko@admin.com' &&
    //   this.loginForm.controls['password'].value === 'sprukoadmin'
    // ) {
    //   this.router.navigate(['/dashboard/hrmdashboards/dashboard']);
    //   this.toastr.success('login successful', 'dayone', {
    //     timeOut: 3000,
    //     positionClass: 'toast-top-right',
    //   });
    // } else {
    //   this.toastr.error('Invalid details', 'dayone', {
    //     timeOut: 3000,
    //     positionClass: 'toast-top-right',
    //   });
    // }
  }
}
