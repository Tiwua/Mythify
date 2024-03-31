import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Myth } from 'src/app/types/myth';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user/user.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-current-myth',
  templateUrl: './current-myth.component.html',
  styleUrls: ['./current-myth.component.css'],
  animations: [
    trigger('likeAnimation', [
      state('liked', style({
        transform: 'scale(1.1) rotate(360deg)',
        fontSize: '70px'
      })),
      state('disliked', style({
        transform: 'scale(1) rotate(0deg)',
        fontSize: '50px'
      })),
      transition('liked <=> disliked', animate('200ms ease-out'))
    ])
  ]
})

export class CurrentMythComponent implements OnInit, OnDestroy {
  myth = {} as Myth;
  alignmentClass: string = '';
  isOwner: boolean = false;
  hasLiked: boolean = false;
  likesCount: any;
  liked: boolean = false;

  toggleLike() {
    this.liked = !this.liked;
  }

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
        this.likesCount = this.updateLikesCount();
        this.alignmentClass = this.isLeftAligned();
        this.hasLiked = this.myth.favoriteList.some((id) => this.userService.user?._id == id);
        if(this.userService.user?._id! === myth['ownerId']){
          this.isOwner = true;
        }
        
        this.hasLiked = this.myth.favoriteList.some((id) => this.userService.user?._id == id);
        console.log(this.hasLiked);
      });
    });
  }

  like(mythId: string): void{ 
    this.apiService.likeMyth(mythId, this.userService.user?._id!).subscribe(() => {
      this.likesCount = this.updateLikesCount();
      this.hasLiked = true;
      this.toggleLike();
    });
  }

  delete(mythId: string): void{

    this.apiService.deleteMyth(mythId).subscribe(() => {
      this.router.navigate(['home'])
    });    
  }

  dislike(mythId: string): void{
    console.log(mythId);
    
    this.apiService.dislikeMyth(mythId, this.userService.user?._id!).subscribe(() => {
      this.likesCount = this.updateLikesCount();
      this.hasLiked = false;
      this.toggleLike();
    });
  }

  updateLikesCount() {
    this.apiService.getLikesCount(this.myth._id).subscribe(num => {
      this.likesCount = num.favoriteList.length;
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
