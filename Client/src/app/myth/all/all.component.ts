import { Component, OnInit, numberAttribute } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Myth } from 'src/app/types/myth';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  myths: Myth[] = [];
  paginatedMyths: Myth[] = [];
  mythsPerPage = 3;
  currentPage = 1;

  get totalPages(): number {
    return Math.ceil(this.myths.length / this.mythsPerPage);
  }

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchMyths();
  }

  fetchMyths(): void {
    this.apiService.getMyths().subscribe((myths) => {
      this.myths = myths;
      this.paginateMyths();
    });
  }

  paginateMyths(): void { 
    const startIdx = (this.currentPage - 1) * this.mythsPerPage;
    const endIdx = startIdx + this.mythsPerPage;
    this.paginatedMyths = this.myths.slice(startIdx, endIdx);
  }

  nextPage(pageNumber: number): void {
    this.currentPage = pageNumber + 1;
    this.paginateMyths();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateMyths();
    }
  }

  goToPage(page: number){
    this.currentPage = page;
    this.paginateMyths();
  }

  totalPagesArray(): number[] {
    return Array.from({length: this.totalPages}, (_, i) => i + 1);
  }
}