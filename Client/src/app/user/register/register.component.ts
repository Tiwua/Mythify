import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/utils/emailValidator';
import { matchPasswords } from 'src/app/shared/utils/matchPasswords';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { fadeInAnimation } from 'src/app/common/animations';
import { FormService } from 'src/app/shared/form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../common/post-form.css'],
  animations: [fadeInAnimation]
})
export class RegisterComponent  {

  form: FormGroup;

  get passwordGroup(){
    return this.form.get('passwordGroup');
  }

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private formService: FormService) {
    this.form = this.formService.createRegisterForm();
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
