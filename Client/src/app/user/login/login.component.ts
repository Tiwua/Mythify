import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../common/post-form.css', './login.component.css' ]
})
export class LoginComponent {
  domains: string[] = ['bg', 'gmail'];
  constructor(private router: Router){}

  login(form: NgForm) {
    if(form.invalid){
      return;
    }

    this.router.navigate(['/home']);
  }
}
