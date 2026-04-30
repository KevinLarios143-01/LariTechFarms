import { Component, ElementRef, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';
import { PasswordStrengthComponent } from '../../shared/components/password-strength/password-strength.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ToastrModule, PasswordStrengthComponent],
  providers: [{ provide: ToastrService, useClass: ToastrService }],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent implements OnInit, OnDestroy {
  changePasswordForm!: FormGroup;
  showCurrentPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;
  isSubmitting = false;

  private apiUrl = environment.apiUrl;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
    private readonly fb: FormBuilder,
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly toastr: ToastrService,
  ) {
    this.document.body.classList.add('error-1');
  }

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('error-1');
  }

  get f() {
    return this.changePasswordForm.controls;
  }

  get newPasswordValue(): string {
    return this.changePasswordForm?.get('newPassword')?.value || '';
  }

  get passwordsDoNotMatch(): boolean {
    const newPass = this.f['newPassword']?.value;
    const confirm = this.f['confirmPassword']?.value;
    return confirm && newPass !== confirm;
  }

  toggleCurrentPassword(): void {
    this.showCurrentPassword = !this.showCurrentPassword;
  }

  toggleNewPassword(): void {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  submit(): void {
    if (this.changePasswordForm.invalid || this.passwordsDoNotMatch) {
      return;
    }

    this.isSubmitting = true;
    const { currentPassword, newPassword } = this.changePasswordForm.value;

    this.http.put(`${this.apiUrl}/v1/auth/change-password`, { currentPassword, newPassword }, { withCredentials: true })
      .subscribe({
        next: () => {
          this.isSubmitting = false;
          this.toastr.success('Contraseña actualizada correctamente', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.isSubmitting = false;
          const message = err?.error?.message || 'Error al cambiar la contraseña';
          this.toastr.error(message, 'Error', {
            timeOut: 4000,
            positionClass: 'toast-top-right',
          });
        }
      });
  }
}
