import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../common/post-form.css']
})
export class RegisterComponent {
  form = this.formBuilder.group({
    username: ['gosho'],
    email: ['gosho@abv.bg'],
    passwordGroup: this.formBuilder.group({password: ['asdasd'], confirmPassword: ['asdasd']}),
  });


  constructor(private formBuilder: FormBuilder) {

  }

  register(): void{
    if(this.form.invalid) {
      return;
    }

    console.log(this.form.value);
  }
}
