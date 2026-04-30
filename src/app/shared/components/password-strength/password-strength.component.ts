import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

export type PasswordStrength = 'weak' | 'medium' | 'strong';

interface PolicyCheck {
  label: string;
  passed: boolean;
}

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="password-strength-container" *ngIf="password">
      <!-- Strength bar -->
      <div class="strength-bar-wrapper">
        <div class="strength-bar" [ngClass]="strengthClass" [style.width]="barWidth"></div>
      </div>
      <small class="strength-label" [ngClass]="strengthClass">{{ strengthLabel }}</small>

      <!-- Policy checklist -->
      <ul class="policy-list mt-1 mb-0 ps-3">
        <li *ngFor="let check of policyChecks" [ngClass]="check.passed ? 'text-success' : 'text-muted'">
          <small>
            <i class="fe" [ngClass]="check.passed ? 'fe-check' : 'fe-x'"></i>
            {{ check.label }}
          </small>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .strength-bar-wrapper {
      height: 6px;
      background-color: #e9ecef;
      border-radius: 3px;
      overflow: hidden;
      margin-top: 4px;
    }
    .strength-bar {
      height: 100%;
      border-radius: 3px;
      transition: width 0.3s ease, background-color 0.3s ease;
    }
    .strength-bar.weak { background-color: #dc3545; }
    .strength-bar.medium { background-color: #fd7e14; }
    .strength-bar.strong { background-color: #28a745; }

    .strength-label {
      font-size: 0.75rem;
      font-weight: 600;
    }
    .strength-label.weak { color: #dc3545; }
    .strength-label.medium { color: #fd7e14; }
    .strength-label.strong { color: #28a745; }

    .policy-list {
      list-style: none;
      padding-left: 0;
    }
    .policy-list li {
      line-height: 1.6;
    }
    .policy-list li i {
      margin-right: 4px;
    }
  `]
})
export class PasswordStrengthComponent implements OnChanges {
  @Input() password: string = '';

  strength: PasswordStrength = 'weak';
  strengthLabel: string = '';
  strengthClass: string = 'weak';
  barWidth: string = '0%';
  policyChecks: PolicyCheck[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['password']) {
      this.evaluate(this.password || '');
    }
  }

  private evaluate(password: string): void {
    const checks: PolicyCheck[] = [
      { label: 'Mínimo 8 caracteres', passed: password.length >= 8 },
      { label: 'Al menos una mayúscula', passed: /[A-Z]/.test(password) },
      { label: 'Al menos una minúscula', passed: /[a-z]/.test(password) },
      { label: 'Al menos un dígito', passed: /\d/.test(password) },
      { label: 'Al menos un carácter especial', passed: /[^A-Za-z0-9]/.test(password) },
    ];

    this.policyChecks = checks;
    const passedCount = checks.filter(c => c.passed).length;

    if (passedCount <= 2) {
      this.strength = 'weak';
      this.strengthLabel = 'Débil';
      this.strengthClass = 'weak';
      this.barWidth = '33%';
    } else if (passedCount <= 4) {
      this.strength = 'medium';
      this.strengthLabel = 'Media';
      this.strengthClass = 'medium';
      this.barWidth = '66%';
    } else {
      this.strength = 'strong';
      this.strengthLabel = 'Fuerte';
      this.strengthClass = 'strong';
      this.barWidth = '100%';
    }
  }
}
