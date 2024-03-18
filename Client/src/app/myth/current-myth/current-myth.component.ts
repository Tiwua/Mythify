import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-current-myth',
  templateUrl: './current-myth.component.html',
  styleUrls: ['./current-myth.component.css']
})
export class CurrentMythComponent implements OnInit {

  constructor(
    private apiService: ApiService, 
    private activeRoute: ActivatedRoute){}

    ngOnInit(): void {
      this.activeRoute.params.subscribe((data) => {
        console.log(data);
      })
    }
}
