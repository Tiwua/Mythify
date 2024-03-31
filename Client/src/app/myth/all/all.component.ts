import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger, style, animate, transition, state } from '@angular/animations';

import { ApiService } from 'src/app/api.service';
import { Myth } from 'src/app/types/myth';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ])
    ]),
    trigger('fadeState', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', animate('300ms')),
      transition('hidden => visible', animate('300ms'))
    ])
  ]
})
export class AllComponent implements OnInit, OnDestroy {
  myths: Myth[] = [];
  paginatedMyths: Myth[] = [];
  mythsPerPage = 3;
  currentPage = 1;
  visiblePages = 3;
  subscription: Subscription;

  isLoading: boolean = true;

  paginationState = 'visible';
  nextButtonState = 'visible';
  prevButtonState = 'visible';

  get totalPages(): number {
    return Math.ceil(this.myths.length / this.mythsPerPage);
  }

  constructor(private apiService: ApiService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
    this.fetchMyths();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  fetchMyths(): void {
    this.subscription = this.apiService.getMyths().subscribe((myths) => {
      this.myths = myths;
      this.paginateMyths();
    }, (error) => {   
      console.error('An error occurred:', error['statusText']);
    });
  }

  paginateMyths(): void { 
    const startIdx = (this.currentPage - 1) * this.mythsPerPage;
    const endIdx = startIdx + this.mythsPerPage;
    this.paginatedMyths = this.myths.slice(startIdx, endIdx);

    // Update pagination state to trigger fade animation
    this.updatePaginationState();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateMyths();
      this.updateNextButtonState();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateMyths();
      this.updatePrevButtonState();
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.paginateMyths();
  }

  totalPagesArray(): number[] {
    const startPage = Math.max(1, this.currentPage - Math.floor(this.visiblePages / 2));
    const endPage = Math.min(this.totalPages, startPage + this.visiblePages - 1);
    return Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i);
  }

  updatePaginationState(): void {
    this.paginationState = 'hidden';
    setTimeout(() => {
      this.paginationState = 'visible';
    });
  }

  updateNextButtonState(): void {
    this.nextButtonState = 'hidden';
    setTimeout(() => {
      this.nextButtonState = 'visible';
    });
  }

  updatePrevButtonState(): void {
    this.prevButtonState = 'hidden';
    setTimeout(() => {
      this.prevButtonState = 'visible';
    });
  }
}
