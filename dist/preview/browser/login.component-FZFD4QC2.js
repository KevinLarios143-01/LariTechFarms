import {
  AngularFireAuthModule,
  AngularFireDatabaseModule,
  AngularFireModule,
  AngularFirestoreModule,
  AuthService
} from "./chunk-WOFMMO3A.js";
import "./chunk-J3UKHJ25.js";
import {
  environment
} from "./chunk-7WSVHSJD.js";
import {
  AppStateService,
  ToastrModule,
  ToastrService
} from "./chunk-KTQLQ7YR.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgbModule,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavOutlet,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-47LBZ5ZO.js";
import {
  DOCUMENT,
  DomSanitizer,
  ElementRef,
  Renderer2,
  Router,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/shared/services/firebase.service.ts
var _FirebaseService = class _FirebaseService {
  constructor() {
    AngularFireModule.initializeApp(environment.firebase);
  }
  getFirestore() {
    return AngularFirestoreModule;
  }
  getDatabase() {
    return AngularFireDatabaseModule;
  }
  getAuth() {
    return AngularFireAuthModule;
  }
};
_FirebaseService.\u0275fac = function FirebaseService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FirebaseService)();
};
_FirebaseService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FirebaseService, factory: _FirebaseService.\u0275fac, providedIn: "root" });
var FirebaseService = _FirebaseService;

// src/app/authentication/login/login.component.ts
function LoginComponent_ng_template_11_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.errorMessage, "");
  }
}
function LoginComponent_ng_template_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2._error.message, " ");
  }
}
function LoginComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "h2", 16);
    \u0275\u0275text(2, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4, "Inicia sesi\xF3n en tu cuenta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 18);
    \u0275\u0275listener("ngSubmit", function LoginComponent_ng_template_11_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loginWithFirebase());
    });
    \u0275\u0275template(6, LoginComponent_ng_template_11_Conditional_6_Template, 2, 1, "p", 19)(7, LoginComponent_ng_template_11_Conditional_7_Template, 2, 1, "p", 19);
    \u0275\u0275elementStart(8, "div", 20)(9, "label", 21);
    \u0275\u0275text(10, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 22)(12, "div", 23)(13, "a", 24);
    \u0275\u0275element(14, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 20)(17, "label", 21);
    \u0275\u0275text(18, "Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 22)(20, "div", 23)(21, "span", 27);
    \u0275\u0275listener("click", function LoginComponent_ng_template_11_Template_span_click_21_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePassword());
    });
    \u0275\u0275element(22, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 29);
    \u0275\u0275element(25, "input", 30);
    \u0275\u0275elementStart(26, "label", 31);
    \u0275\u0275text(27, " Remember me");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 32)(29, "button", 33);
    \u0275\u0275text(30, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 34)(32, "p", 35);
    \u0275\u0275text(33, "O inicia sesi\xF3n con:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 36);
    \u0275\u0275listener("click", function LoginComponent_ng_template_11_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loginWithGoogle());
    });
    \u0275\u0275element(35, "i", 37);
    \u0275\u0275text(36, " Google ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(37, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 38)(39, "div", 39)(40, "span", 40);
    \u0275\u0275element(41, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 40);
    \u0275\u0275element(43, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 43);
    \u0275\u0275element(45, "i", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r2.firebaseForm);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.errorMessage.length > 0 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2._error.message.length > 0 ? 7 : -1);
    \u0275\u0275advance(15);
    \u0275\u0275classMapInterpolate1("fe fe-", ctx_r2.toggleClass, " align-middle");
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r2.showPassword ? "text" : "password");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("loader--text", ctx_r2.authservice.showLoader);
    \u0275\u0275property("disabled", !ctx_r2.firebaseForm.valid || ctx_r2.authservice.showLoader);
  }
}
function LoginComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "h2", 16);
    \u0275\u0275text(2, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4, "Inicia sesi\xF3n en tu cuenta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 45);
    \u0275\u0275listener("ngSubmit", function LoginComponent_ng_template_15_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitBackend());
    });
    \u0275\u0275elementStart(6, "div", 20)(7, "label", 21);
    \u0275\u0275text(8, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 22)(10, "div", 23)(11, "a", 24);
    \u0275\u0275element(12, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 20)(15, "label", 21);
    \u0275\u0275text(16, "Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 22)(18, "div", 23)(19, "span", 27);
    \u0275\u0275listener("click", function LoginComponent_ng_template_15_Template_span_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePassword());
    });
    \u0275\u0275element(20, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 29);
    \u0275\u0275element(23, "input", 47);
    \u0275\u0275elementStart(24, "label", 48);
    \u0275\u0275text(25, " Remember me");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 49)(27, "button", 33);
    \u0275\u0275text(28, " Login ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 38)(31, "div", 39)(32, "span", 40);
    \u0275\u0275element(33, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 40);
    \u0275\u0275element(35, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 43);
    \u0275\u0275element(37, "i", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r2.loginForm);
    \u0275\u0275advance(15);
    \u0275\u0275classMapInterpolate1("fe fe-", ctx_r2.toggleClass, " align-middle");
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r2.showPassword ? "text" : "password");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("loader--text", ctx_r2.authservice.showLoader);
    \u0275\u0275property("disabled", !ctx_r2.loginForm.valid || ctx_r2.authservice.showLoader);
  }
}
var _LoginComponent = class _LoginComponent {
  togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === "eye") {
      this.toggleClass = "eye-off";
    } else {
      this.toggleClass = "eye";
    }
  }
  constructor(document2, elementRef, sanitizer, authservice, router, formBuilder, renderer, firebaseService, toastr, appStateService) {
    this.document = document2;
    this.elementRef = elementRef;
    this.sanitizer = sanitizer;
    this.authservice = authservice;
    this.router = router;
    this.formBuilder = formBuilder;
    this.renderer = renderer;
    this.firebaseService = firebaseService;
    this.toastr = toastr;
    this.appStateService = appStateService;
    this.showPassword = false;
    this.toggleClass = "eye-off";
    this.active = "Angular";
    this.disabled = "";
    this.localdata = this.appStateService;
    this.errorMessage = "";
    this._error = { name: "", message: "" };
    this.error = "";
    document2.body.classList.add("error-1");
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
    this.firebaseForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
    console.log("Auth State:", this.authservice.authState);
  }
  ngOnDestroy() {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    document.body.classList.remove("error-1");
  }
  clearErrorMessage() {
    this.errorMessage = "";
    this._error = { name: "", message: "" };
  }
  /**
   * Login con Firebase
   */
  loginWithFirebase() {
    this.clearErrorMessage();
    const email = this.firebaseForm.controls["email"].value;
    const password = this.firebaseForm.controls["password"].value;
    console.log("Email:", email);
    console.log("Password length:", password.length);
    if (this.validateForm(email, password)) {
      this.authservice.loginWithEmail(email, password).then((userCredential) => {
        console.log("Usuario Firebase:", userCredential.user);
        this.validateBackendUser(userCredential.user);
      }).catch((_error) => {
        this._error = _error;
        let errorMsg = "Error de autenticaci\xF3n";
        if (_error.code === "auth/user-not-found") {
          errorMsg = "Usuario no encontrado. Verifica el email.";
        } else if (_error.code === "auth/wrong-password" || _error.code === "auth/invalid-credential") {
          errorMsg = "Email o contrase\xF1a incorrectos.";
        } else if (_error.code === "auth/invalid-email") {
          errorMsg = "Email inv\xE1lido.";
        } else if (_error.message === "INVALID_LOGIN_CREDENTIALS") {
          errorMsg = "Credenciales inv\xE1lidas. Verifica email y contrase\xF1a.";
        }
        this.toastr.error(errorMsg, "Firebase", {
          timeOut: 3e3,
          positionClass: "toast-top-right"
        });
      });
    } else {
      this.toastr.error("Detalles inv\xE1lidos", "Firebase", {
        timeOut: 3e3,
        positionClass: "toast-top-right"
      });
    }
  }
  /**
   * Login con Google
   */
  loginWithGoogle() {
    this.authservice.loginWithGoogle().then((userCredential) => {
      this.validateBackendUser(userCredential.user);
    }).catch((_error) => {
      this.toastr.error(_error.message || "Error de autenticaci\xF3n con Google", "Google", {
        timeOut: 3e3,
        positionClass: "toast-top-right"
      });
    });
  }
  validateForm(email, password) {
    if (email.length === 0) {
      this.errorMessage = "Por favor ingresa el email";
      return false;
    }
    if (password.length === 0) {
      this.errorMessage = "Por favor ingresa la contrase\xF1a";
      return false;
    }
    if (password.length < 6) {
      this.errorMessage = "La contrase\xF1a debe tener al menos 6 caracteres";
      return false;
    }
    this.errorMessage = "";
    return true;
  }
  get form() {
    return this.loginForm.controls;
  }
  /**
   * Login usando el backend propio
   */
  loginWithBackend() {
    const email = this.loginForm.controls["username"].value;
    const password = this.loginForm.controls["password"].value;
    this.authservice.backendLogin(email, password).subscribe({
      next: (res) => {
        if (res && res.data && res.data.token) {
          this.authservice.saveToken(res.data.token);
          this.router.navigate(["/dashboard/hrmdashboards/dashboard"]);
          this.toastr.success(res.message || "Login exitoso", "Backend", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
        } else {
          this.toastr.error("Respuesta inv\xE1lida del servidor", "Backend", {
            timeOut: 3e3,
            positionClass: "toast-top-right"
          });
        }
      },
      error: (err) => {
        this.toastr.error("Credenciales incorrectas o error de servidor", "Backend", {
          timeOut: 3e3,
          positionClass: "toast-top-right"
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
  validateBackendUser(user) {
    user.getIdToken().then((firebaseToken) => {
      this.authservice.exchangeFirebaseToken(firebaseToken).subscribe({
        next: (response) => {
          if (response && response.data && response.data.token) {
            this.authservice.saveToken(response.data.token);
            this.router.navigate(["/dashboard/hrmdashboards/dashboard"]);
            this.toastr.success("Login exitoso", "Acceso Autorizado", {
              timeOut: 3e3,
              positionClass: "toast-top-right"
            });
          }
        },
        error: (err) => {
          this.authservice.singout();
          this.toastr.error("Usuario no autorizado en el sistema", "Acceso Denegado", {
            timeOut: 5e3,
            positionClass: "toast-top-right"
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
    this.router.navigate(["/"]);
    this.toastr.info("Sesi\xF3n cerrada", "Logout", {
      timeOut: 3e3,
      positionClass: "toast-top-right"
    });
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AppStateService));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275ProvidersFeature([FirebaseService, { provide: ToastrService, useClass: ToastrService }]), \u0275\u0275StandaloneFeature], decls: 17, vars: 2, consts: [["nav", "ngbNav"], [1, "page", "responsive-log", "login-bg"], [1, "page-single"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-9", "col-lg-7", "col-xl-4", "col-xxl-4"], [1, "card", "custom-card", "my-4"], ["ngbNav", "", 1, "nav-tabs", "justify-content-center", "border-bottom-0", "mb-2", "mt-4", 3, "activeIdChange", "activeId"], ["ngbNavItem", "Firebase"], ["ngbNavLink", "", 1, "firebase-img"], ["src", "./assets/images/firebase.svg", "alt", "", 1, "firebase"], ["ngbNavContent", "", 1, "border-0"], ["ngbNavItem", "Angular"], ["src", "./assets/images/favicon.svg", "alt", "", 1, "firebase"], [3, "ngbNavOutlet"], [1, "p-4", "pt-0", "text-center"], [1, "mb-2"], [1, "text-muted", "mb-0"], ["id", "firebaseLogin", "name", "firebaseLogin", 1, "card-body", "pb-3", 3, "ngSubmit", "formGroup"], [1, "text-danger"], [1, "form-group"], [1, "form-label"], [1, "input-group", "mb-3"], [1, "input-group"], ["href", "", 1, "input-group-text"], ["aria-hidden", "true", 1, "fe", "fe-mail"], ["autocomplete", "", "formControlName", "email", "required", "", "placeholder", "Email", 1, "form-control"], [1, "input-group-text", 3, "click"], ["required", "", "formControlName", "password", "autocomplete", "", "placeholder", "Password", 1, "form-control", 3, "type"], [1, "form-check", "mb-3"], ["type", "checkbox", "value", "", "id", "firebaseCheck", 1, "form-check-input"], ["for", "firebaseCheck", 1, "form-check-label"], [1, "submit", "d-grid", "gap-2"], ["autofocus", "", 1, "btn", "btn-primary", "me-0", 3, "disabled"], [1, "text-center", "mt-3"], [1, "text-muted", "mb-2"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [1, "ri-google-line", "me-1"], [1, "card-body", "border-top-0", "pt-1"], [1, "text-center", "mb-1"], [1, "avatar", "avatar-rounded", "me-2", "bg-primary-transparent", "text-primary"], [1, "ri-facebook-line", "fs-17"], [1, "ri-instagram-line", "fs-17"], [1, "avatar", "avatar-rounded", "bg-primary-transparent", "text-primary"], [1, "ri-twitter-x-line", "fs-17"], ["id", "backendLogin", "name", "backendLogin", 1, "card-body", "pb-3", 3, "ngSubmit", "formGroup"], ["autocomplete", "", "formControlName", "username", "required", "", "placeholder", "Email", 1, "form-control"], ["type", "checkbox", "value", "", "id", "backendCheck", 1, "form-check-input"], ["for", "backendCheck", 1, "form-check-label"], [1, "submit", "d-grid"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "ul", 7, 0);
    \u0275\u0275twoWayListener("activeIdChange", function LoginComponent_Template_ul_activeIdChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(8, "li", 8)(9, "a", 9);
    \u0275\u0275element(10, "img", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, LoginComponent_ng_template_11_Template, 46, 10, "ng-template", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li", 12)(13, "a", 9);
    \u0275\u0275element(14, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, LoginComponent_ng_template_15_Template, 38, 8, "ng-template", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "div", 14);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const nav_r5 = \u0275\u0275reference(7);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("activeId", ctx.active);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngbNavOutlet", nav_r5);
  }
}, dependencies: [
  RouterModule,
  NgbModule,
  NgbNavContent,
  NgbNav,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavOutlet,
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  AngularFireModule,
  AngularFireDatabaseModule,
  AngularFirestoreModule,
  ToastrModule
], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background-image: url("./media/11.jpg");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n  .firebase {\n  width: 30px;\n  height: 30px;\n}\n  .nav-tabs {\n  border-color: none !important;\n}\n/*# sourceMappingURL=login.component.css.map */'] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent" });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-FZFD4QC2.js.map
