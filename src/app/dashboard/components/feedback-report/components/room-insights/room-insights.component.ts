import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface RoomInsight {
  name: string;
  score: number;
  issues: number;
  summary: string;
  checksPassed: number;
  checksTotal: number;
}

@Component({
  selector: 'app-room-insights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-insights.component.html',
  styleUrls: ['./room-insights.component.scss']
})
export class RoomInsightsComponent {
  @Input() title = 'Room Insights';
  @Input() rooms: RoomInsight[] = [];

  @Input() perSlide = 2;

  @Output() viewDetails = new EventEmitter<RoomInsight>();

  page = 0;

  get totalPages(): number {
    if (!this.rooms?.length) return 0;
    return Math.ceil(this.rooms.length / this.perSlide);
  }

  get currentSlice(): RoomInsight[] {
    const start = this.page * this.perSlide;
    return this.rooms.slice(start, start + this.perSlide);
  }

  next() {
    if (this.page < this.totalPages - 1) this.page++;
  }

  prev() {
    if (this.page > 0) this.page--;
  }

  go(i: number) { this.page = i; }

  onView(r: RoomInsight) {
    this.viewDetails.emit(r);
  }
}
