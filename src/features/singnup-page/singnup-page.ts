import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-singnup-page',
  imports: [ReactiveFormsModule],
  templateUrl: './singnup-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingnupPage {
  emailControl = new FormControl(
      '',
      [Validators.required, Validators.email]//Validadores Sincronos
  );

  get email() {
    return this.emailControl;
  }
}
