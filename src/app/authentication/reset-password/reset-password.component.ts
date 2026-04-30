import { Component, ElementRef, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';
import { PasswordStrengthComponent } from '../../shared/components/password-strength/password-strength.component';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ToastrModule, PasswordStrengthComponent],
  providers: [{ provide: ToastrService, useClass: ToastrService }],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  resetForm!: FormGroup;
  showNewPassword = false;
  showConfirmPassword = false;
  isSubmitting = false;
  resetSuccess = false;
  token: string = '';
  tokenError: string = '';

  private apiUrl = environment.apiUrl;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
    private readonly fb: FormBuilder,
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly toastr: ToastrService,
  ) {
    this.document.body.classList.add('error-1');
  }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    });

    // Get token from query params
    this.route.queryParams.subscribe(params => {
      this.token = params['token'] || '';
      if (!this.token) {
        this.tokenError = 'El enlace de restablecimiento es inválido o ha expirado.';
      }
    });
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('error-1');
  }

  get f() {
    return this.resetForm.controls;
  }

  get newPasswordValue(): string {
    return this.resetForm?.get('newPassword')?.value || '';
  }

  get passwordsDoNotMatch(): boolean {
    const newPass = this.f['newPassword']?.value;
    const confirm = this.f['confirmPassword']?.value;
    return confirm && newPass !== confirm;
  }

  toggleNewPassword(): void {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  submit(): void {
    if (this.resetForm.invalid || this.passwordsDoNotMatch || !this.token) {
      return;
    }

    this.isSubmitting = true;
    const { newPassword } = this.resetForm.value;

    this.http.post(`${this.apiUrl}/v1/auth/reset-password`, { token: this.token, newPassword }, { withCredentials: true })
      .subscribe({
        next: () => {
          this.isSubmitting = false;
          this.resetSuccess = true;
          this.toastr.success('Contraseña restablecida correctamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        },
        error: (err) => {
          this.isSubmitting = false;
          const message = err?.error?.message || 'El enlace de restablecimiento es inválido o ha expirado';
          this.tokenError = message;
          this.toastr.error(message, 'Error', {
            timeOut: 4000,
            positionClass: 'toast-top-right',
          });
        }
      });
  }
}
