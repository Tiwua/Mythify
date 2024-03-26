import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Myth } from 'src/app/types/myth';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-myth',
  templateUrl: './current-myth.component.html',
  styleUrls: ['./current-myth.component.css']
})
export class CurrentMythComponent implements OnInit, OnDestroy {
  myth = {} as Myth;
  alignmentClass: string = '';
  isOwner: boolean = false;

  subscription: Subscription;
  constructor(
    private apiService: ApiService, 
    private activeRoute: ActivatedRoute,
    private userService: UserService){
      
       this.subscription = new Subscription;
    }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const mythId = data['mythId'];
      this.subscription = this.apiService.getMyth(mythId).subscribe((myth) => {

        this.myth = myth;
        this.alignmentClass = this.isLeftAligned();
        if(this.userService.user?._id === myth['ownerId']){
          this.isOwner = true;
        }
      });
    });
  }

  ngOnDestroy(): void {
      if(this.subscription){

        this.subscription.unsubscribe();
      }
  }

  isLeftAligned(): string {
    const isAlignedLeft = Math.random() < 0.5;
    return isAlignedLeft ? 'align-left' : 'align-right';
  }
}
