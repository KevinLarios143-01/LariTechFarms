import { Component, ElementRef, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ToastrModule],
  providers: [{ provide: ToastrService, useClass: ToastrService }],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  forgotForm!: FormGroup;
  isSubmitting = false;
  submitted = false;

  private apiUrl = environment.apiUrl;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
    private readonly fb: FormBuilder,
    private readonly http: HttpClient,
    private readonly toastr: ToastrService,
  ) {
    this.document.body.classList.add('error-1');
  }

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('error-1');
  }

  get f() {
    return this.forgotForm.controls;
  }

  submit(): void {
    if (this.forgotForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    const { email } = this.forgotForm.value;

    this.http.post(`${this.apiUrl}/v1/auth/forgot-password`, { email }, { withCredentials: true })
      .subscribe({
        next: () => {
          this.isSubmitting = false;
          this.submitted = true;
        },
        error: () => {
          // Show same message regardless of error to prevent email enumeration
          this.isSubmitting = false;
          this.submitted = true;
        }
      });
  }
}
