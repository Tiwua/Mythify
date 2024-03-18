import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Myth } from 'src/app/types/myth';

@Component({
  selector: 'app-current-myth',
  templateUrl: './current-myth.component.html',
  styleUrls: ['./current-myth.component.css']
})
export class CurrentMythComponent implements OnInit {

  myth: any = [];
  constructor(
    private apiService: ApiService, 
    private activeRoute: ActivatedRoute){}

    ngOnInit(): void {
      this.activeRoute.params.subscribe((data) => {
        const mythId = data['mythId'];
        console.log(data);
        console.log(mythId);
        this.apiService.getMyth(mythId);
      });
    }
}
