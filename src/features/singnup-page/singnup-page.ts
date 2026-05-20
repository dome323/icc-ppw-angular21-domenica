import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-singnup-page',
  imports: [ReactiveFormsModule],
  templateUrl: './singnup-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingnupPage {
  // emailControl = new FormControl(
  //     '',
  //     [Validators.required, Validators.email]//Validadores Sincronos
  // );

  // get email() {
  //   return this.emailControl;
  // }

  private fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  get email() { return this.form.get('email');}
  get password() { return this.form.get('password');}
  get confirmPassword() { return this.form.get('confirmPassword');}




}
