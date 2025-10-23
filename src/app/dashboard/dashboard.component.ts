import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DashboardPageType } from '../shared';
import { DashboardHomeComponent, FeedbackReportComponent, UploadProgressComponent, UploadProjectComponent } from './components';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    DashboardHomeComponent,
    UploadProjectComponent,
    UploadProgressComponent,
    FeedbackReportComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  dashboardPageType = DashboardPageType;
  activePage: DashboardPageType = DashboardPageType.Home;
  uploadedPayload: any = {};
  responseData: any = {};
  fileType: any;
  setPage(page: DashboardPageType) {
    this.activePage = page;
  }
  onUploadFile(payload: any) {
    this.uploadedPayload = payload;
  }
  onReportSubmit(payload: any) {
    this.responseData = payload;
  }
  onFileType(payload: any) {
    this.fileType = payload;
  }
}
