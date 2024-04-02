import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { fadeInAnimation } from 'src/app/common/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../common/post-form.css', './login.component.css' ],
  animations: [fadeInAnimation]
})
export class LoginComponent  {
  constructor(private router: Router, private userService: UserService) {}

  login(form: NgForm) {
    if(form.invalid){
      return;
    }
    
    const { email, password } = form.value;

    this.userService.login(email, password).subscribe(() => {
      
      this.router.navigate(['/home']);
    });
  }
}
