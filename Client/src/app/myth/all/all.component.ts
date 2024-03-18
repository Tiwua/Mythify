import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Myth } from 'src/app/types/myth';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit, OnDestroy {
  myths: Myth[] = [];
  paginatedMyths: Myth[] = [];
  mythsPerPage = 3;
  currentPage = 1;
  visiblePages: number = 3;
  subscription: Subscription;

  get totalPages(): number {
    return Math.ceil(this.myths.length / this.mythsPerPage);
  }

  constructor(private apiService: ApiService) {
    this.subscription = new Subscription;
  }

  ngOnInit(): void {
    this.fetchMyths();
  }

  ngOnDestroy(): void {
    
    if(this.subscription){

      this.subscription.unsubscribe();
    }
  }

  fetchMyths(): void {
    this.subscription = this.apiService.getMyths().subscribe((myths) => {
      this.myths = myths;
      this.paginateMyths();
    });
  }

  paginateMyths(): void { 
    const startIdx = (this.currentPage - 1) * this.mythsPerPage;
    const endIdx = startIdx + this.mythsPerPage;
    this.paginatedMyths = this.myths.slice(startIdx, endIdx);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateMyths();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateMyths();
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
}
