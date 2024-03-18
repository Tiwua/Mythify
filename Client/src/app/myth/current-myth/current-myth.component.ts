import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Myth } from 'src/app/types/myth';

@Component({
  selector: 'app-current-myth',
  templateUrl: './current-myth.component.html',
  styleUrls: ['./current-myth.component.css']
})
export class CurrentMythComponent implements OnInit {
  myth = {} as Myth;
  alignmentClass: string = '';

  constructor(
    private apiService: ApiService, 
    private activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const mythId = data['mythId'];
      this.apiService.getMyth(mythId).subscribe((myth) => {
        this.myth = myth;
        this.alignmentClass = this.isLeftAligned();
      });
    });
  }

  isLeftAligned(): string {
    const isAlignedLeft = Math.random() < 0.5;
    return isAlignedLeft ? 'align-left' : 'align-right';
  }
}
