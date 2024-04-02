import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';
import { formAnimation } from '../common/animations';
import { FormService } from 'src/app/shared/form.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  animations: [formAnimation]
})
export class CreateComponent {

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService, 
    private apiService: ApiService, 
    private router: Router,
    private formService: FormService) {
      this.form = formService.createMythForm()
    }

    createMyth(): void {
      
      if(this.form.invalid){
        return;
      }
      
      const userId = this.userService.getUserId();

      const { title, origin, timeline, description, image } = this.form.value;
      this.apiService.createMyth(title!, origin!, timeline!, description!, image!, userId!).subscribe(() => {
          this.router.navigate(['home'])
      });
  }
}
