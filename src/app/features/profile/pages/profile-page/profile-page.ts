import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '../../../../shared/utils/form-utils';


@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProfilePage {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm = this.fb.group({
    nombre: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
      ],
    ],

    edad: [
      0,
      [
        Validators.required,
        Validators.min(18),
      ],
    ],

    correo: [
      '',
      [
        Validators.required,
        Validators.email,
      ],
    ],
  });

  onSubmit() {

    if (this.myForm.invalid) {

      this.myForm.markAllAsTouched();

      return;
    }

    console.log(this.myForm.value);
  }

  get nombre() {
    return this.myForm.get('nombre')!;
  }

  get edad() {
    return this.myForm.get('edad')!;
  }

  get correo() {
    return this.myForm.get('correo')!;
  }
}