import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  form = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    origin: ['', [Validators.required, Validators.minLength(5)]],
    timeline: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    image: ['', [Validators.required, Validators.minLength(10)]]
  });

  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService, 
    private apiService: ApiService, 
    private router: Router) {}

    createMyth(): void {
      
      this.form.statusChanges.subscribe(status => {
        if (status === 'VALID') {
          console.error('Form is valid.');
        } else {
          console.error('Form is invalid.');
        }
      });
      
      const userId = this.userService.getUserId();

      const { title, origin, timeline, description, image } = this.form.value;
      this.apiService.createMyth(title!, origin!, timeline!, description!, image!, userId!).subscribe(() => {
          this.router.navigate(['home'])
      });
  }
}
