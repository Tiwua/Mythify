import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { ApiService } from '../api.service';
import { Myth } from '../types/myth';
import { Subscription } from 'rxjs';
import { blurToNormalAnimation, fallFromSkyAnimation, buttonAppearAnimation , fadeInAnimation  } from '../common/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fallFromSkyAnimation, buttonAppearAnimation, fadeInAnimation, blurToNormalAnimation]
})
export class HomeComponent implements OnInit, OnDestroy {

  myths: Myth[] = [];
  subscription: Subscription;
  constructor(private apiService: ApiService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
     this.subscription = this.apiService.getLatestFourMyths().subscribe((myth) => {
      this.myths = myth;
    }); 

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
