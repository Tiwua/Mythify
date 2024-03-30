import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  userId: string | undefined;

  subscription: Subscription;
  constructor(
    private apiService: ApiService, 
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router){
      
       this.subscription = new Subscription;
    }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const mythId = data['mythId'];
      this.subscription = this.apiService.getMyth(mythId).subscribe((myth) => {

        this.myth = myth;
        this.alignmentClass = this.isLeftAligned();
        this.userId = this.userService.user?._id;
        console.log(this.userId);
        if(this.userId! === myth['ownerId']){
          this.isOwner = true;
        }
      });
    });
  }

  like(mythId: string): void{
    console.log(this.userId);

    console.log(mythId);
    this.apiService.likeMyth(mythId, this.userId!).subscribe(() => {

    })
  }
  delete(mythId: string): void{

    this.apiService.deleteMyth(mythId).subscribe(() => {
      this.router.navigate(['home']);
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
