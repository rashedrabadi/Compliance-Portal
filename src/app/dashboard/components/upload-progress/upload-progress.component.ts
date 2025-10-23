import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageType } from '../../../shared';
import { ComplianceApiService } from '../../services/compliance-api.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-progress.component.html',
  styleUrls: ['./upload-progress.component.scss']
})
export class UploadProgressComponent implements OnInit {
  @Output() navigate = new EventEmitter<DashboardPageType>();
  @Output() finalReport = new EventEmitter<any>();

  @Input() uploadedData: File | null = null;
  dashboardPageType = DashboardPageType;

  progress = 0;
  statusText = 'Uploading...';
  hintText = 'Your project file is being analyzed. Please wait a few seconds.';
  mainPayload = {};
  status:string="in Progress";
  constructor(private api: ComplianceApiService) { }

  ngOnInit() {
    if (this.uploadedData) {
      this.uploadAndAnalyze(this.uploadedData);
    } else {
      this.statusText = 'No file received.';
      console.warn('⚠️ No file to upload.');
    }
  }

  uploadAndAnalyze(file: File) {
    this.api.analyzeFile(file).subscribe({
      next: (event: any) => {
        if (event.type === HttpEventType.UploadProgress && event.total) {
          const uploadPercent = Math.round((100 * event.loaded) / event.total);
          this.progress = Math.min(uploadPercent / 2, 50);
          this.statusText = 'Uploading...';
        }
        else if (event.type === HttpEventType.Response && event.body) {
          this.statusText = 'Analyzing...';
          const interval = setInterval(() => {
            if (this.progress < 99) {
              this.progress += Math.floor(Math.random() * 3) + 1;
              this.progress = Math.min(this.progress, 99);
            } else {
              clearInterval(interval);
              this.progress = 100;
              this.statusText = 'Analysis Completed';
              this.hintText = 'You can now view the compliance report below.';
              this.mainPayload = event.body;
              this.status="is Completed"
            }
          }, 300);
        }

      },
      error: (err) => {
        console.error('❌ Upload failed:', err);
        this.statusText = 'Upload Failed';
        this.hintText = 'Please try again or check your connection.';
      }
    });
  }


  onViewAnalysis() {
    this.finalReport.emit(this.mainPayload);
    this.navigate.emit(this.dashboardPageType.FeedbackReport);
  }
}
