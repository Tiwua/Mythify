import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/utils/emailValidator';
import { matchPasswords } from 'src/app/shared/utils/matchPasswords';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../common/post-form.css']
})
export class RegisterComponent {

  form = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator()]],
    passwordGroup: this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, 
    {
      validators: [matchPasswords('password', 'confirmPassword')]
    }),
  });

  get passwordGroup(){
    return this.form.get('passwordGroup');
  }

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {

  }

  register(): void{
    if(this.form.invalid) {
      return;
    }

    const { email, username, passwordGroup } = this.form.value;
    const { password, confirmPassword } = passwordGroup!

    this.userService.register(username!, email!, password!, confirmPassword!).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
