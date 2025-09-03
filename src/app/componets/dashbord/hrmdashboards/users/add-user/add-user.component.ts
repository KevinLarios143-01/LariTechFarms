import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      activo: [true]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Usuario a crear:', this.userForm.value);
      // TODO: Implementar creación de usuario via API
      this.router.navigate(['/dashboard/hrmdashboards/users/user-list']);
    }
  }

  onCancel() {
    this.router.navigate(['/dashboard/hrmdashboards/users/user-list']);
  }
}
