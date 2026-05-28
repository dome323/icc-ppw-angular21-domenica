import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth-page.html',
})
export class AuthPageComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  isLogin = signal(true);
  errorMessage = signal<string | null>(null);
  isLoading = signal(false);

  authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  toggleMode() {
    this.isLogin.update(v => !v);
    this.errorMessage.set(null);
    this.authForm.reset();
  }

  onSubmit() {

    if (this.authForm.invalid) return;

    const email = this.authForm.value.email ?? '';
    const password = this.authForm.value.password ?? '';

    this.isLoading.set(true);
    this.errorMessage.set(null);

    const action$ = this.isLogin()
      ? this.authService.login(email, password)
      : this.authService.register(email, password);

    action$.subscribe({
      next: () => {
        this.isLoading.set(false);
        this.router.navigate(['/']);
      },

      error: () => {
        this.isLoading.set(false);

        this.errorMessage.set(
          this.isLogin()
            ? 'Correo o contraseña incorrectos.'
            : 'No se pudo crear la cuenta. El correo puede estar en uso.'
        );
      },
    });
  }
}