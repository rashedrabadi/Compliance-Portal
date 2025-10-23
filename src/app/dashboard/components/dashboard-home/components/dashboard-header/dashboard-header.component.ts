import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageType } from '../../../../../shared';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {
   @Output() navigate = new EventEmitter<DashboardPageType>();
  dashboardPageType = DashboardPageType;

  onClick(dashboardPageType:DashboardPageType) {
    this.navigate.emit(dashboardPageType);
  }
  
}
