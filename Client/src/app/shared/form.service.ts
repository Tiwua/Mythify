import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { emailValidator } from './utils/emailValidator'
import { matchPasswords } from './utils/matchPasswords'

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private formBuilder: FormBuilder) { }

  createRegisterForm(): FormGroup {
    return this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, emailValidator()]],
      passwordGroup: this.formBuilder.group({
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      }, {
        validators: [matchPasswords('password', 'confirmPassword')]
      }),
    });
  }

  createMythForm(): FormGroup {
    return  this.formBuilder.group({
        title: ['', [Validators.required, Validators.minLength(3)]],
        origin: ['', [Validators.required, Validators.minLength(5)]],
        timeline: ['', [Validators.required, Validators.minLength(5)]],
        description: ['', [Validators.required, Validators.minLength(10)]],
        image: ['', [Validators.required, Validators.minLength(10)]]
  });

  }
}
