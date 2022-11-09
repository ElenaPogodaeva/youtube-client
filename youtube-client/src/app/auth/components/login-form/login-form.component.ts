import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ValidationService } from '../../../../app/core/services/validation.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  token: string = 'some-token';

  hide = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private validationService: ValidationService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.validationService.passwordValidator()]],
    });
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public submit() {
    this.authService.login(this.token);
  }
}
