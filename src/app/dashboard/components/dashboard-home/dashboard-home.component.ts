import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ComplianceStatusOverviewComponent } from './components/compliance-status-overview';
import { DashboardHeaderComponent } from './components/dashboard-header';
import { MonthlyComplianceChartComponent } from './components/monthly-compliance-chart';
import { MonthlyCompliancePerformanceComponent } from './components/monthly-compliance-performance';
import { RecentSubmissionsTableComponent } from './components/recent-submissions-table';
import { RecentUpdatesComponent } from './components/recent-updates';
import { StatsCardsComponent } from './components/stats-cards';
import { UpcomingDeadlinesComponent } from './components/upcoming-deadlines';
import { DashboardPageType } from '../../../shared';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [
    CommonModule,
    MonthlyComplianceChartComponent,
    ComplianceStatusOverviewComponent,
    MonthlyCompliancePerformanceComponent,
    RecentSubmissionsTableComponent,
    StatsCardsComponent,
    RecentUpdatesComponent,
    UpcomingDeadlinesComponent,
    DashboardHeaderComponent
  ],
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
})
export class DashboardHomeComponent {
   @Output() navigate = new EventEmitter<DashboardPageType>();
  DashboardPageType = DashboardPageType;

  onNavigate(page: DashboardPageType) {
    this.navigate.emit(page);
  }
  deadlines = [
    { title: 'Submission Deadline (Project A)', requester: 'Ahmad Yousef', date: '05-Oct-2025' },
    { title: 'Site Inspection (Zone 2)', requester: 'Mustafa Yousef', date: '10-Oct-2025' },
    { title: 'Annual Compliance Audit', requester: 'Mustafa Yousef', date: '—' },
  ];
}
