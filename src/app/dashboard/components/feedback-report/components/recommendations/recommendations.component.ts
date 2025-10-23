import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent implements OnInit {
  @Input() recommendations: any[] = [];
  page = 0;
  itemsPerPage = 2;
  totalPages = 0;
  currentSlice: any[] = [];

  ngOnInit() {
    this.updateSlice();
  }

  updateSlice() {
    this.totalPages = Math.ceil(this.recommendations.length / this.itemsPerPage);
    const start = this.page * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.currentSlice = this.recommendations.slice(start, end);
  }

  next() {
    if (this.page < this.totalPages - 1) {
      this.page++;
      this.updateSlice();
    }
  }

  prev() {
    if (this.page > 0) {
      this.page--;
      this.updateSlice();
    }
  }

  go(index: number) {
    this.page = index;
    this.updateSlice();
  }
}
