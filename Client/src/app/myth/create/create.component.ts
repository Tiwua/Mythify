import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private userService: UserService) {}

  createMyth(){
    const userId = this.userService.getUserId();
    console.log(userId);
    
  }
}
