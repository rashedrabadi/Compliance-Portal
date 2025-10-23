import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplianceApiService } from '../../services/compliance-api.service';
import {
  ComplianceDistributionComponent,
  ComplianceSummaryTableComponent,
  KeyFindingsSectionComponent,
  OverallComplianceBarComponent,
  OverallComplianceScoreComponent,
  RecommendationsComponent,
  RoomInsight,
  RoomInsightsComponent
} from './components';

@Component({
  selector: 'app-feedback-report',
  standalone: true,
  imports: [
    CommonModule,
    RoomInsightsComponent,
    RecommendationsComponent,
    ComplianceSummaryTableComponent,
    ComplianceDistributionComponent,
    OverallComplianceScoreComponent,
    OverallComplianceBarComponent,
    KeyFindingsSectionComponent
  ],
  templateUrl: './feedback-report.component.html',
  styleUrls: ['./feedback-report.component.scss'],
})
export class FeedbackReportComponent implements OnInit {

  @Input() responseData: any = {};
  @Input() fileType: string = '';

  requirements: any = {};
  barData: { name: string; value: number }[] = [];
  project: any = {};
  roomInsights: RoomInsight[] = [];
  recommendations: any[] = [];
  findings: string[] = [];
  complianceSummary: any = {};
  complianceDistribution: any[] = [];

  constructor(private api: ComplianceApiService) { }

  ngOnInit(): void {
    console.log("fileType", this.fileType);
    this.api.getRequirements().subscribe({
      next: (res) => {
        if (res) {
          this.requirements = res;

          if (this.responseData && this.responseData.success) {
            this.mapApiResponse(this.responseData);
          }
        }
      },
      error: (err) => console.error('❌ Failed to load requirements', err)
    });
  }

  mapApiResponse(data: any) {
    this.project = {
      name: data.filename || 'Uploaded Project',
      date: new Date().toDateString(),
      status: data.compliance_summary?.compliance_rate > 59 ? 'Compliant' : 'Non-Compliant',
      overallScore: Math.round(data.compliance_summary?.compliance_rate || 0),
    };
    this.roomInsights = (data.full_results?.rooms || []).map((room: any) => {
      const type = (room.matched_type || '').toLowerCase().trim();
      const req = this.requirements[type];

      let compliant = room.meets_min_requirements;
      if (req) {
        compliant =
          room.area >= req.min_area &&
          room.width >= req.min_width;
      }

      const issues = [];
      if (req) {
        if (room.area < req.min_area) issues.push(`Area too small: ${room.area}m² < ${req.min_area}m²`);
        if (room.width < req.min_width) issues.push(`Width too small: ${room.width}m < ${req.min_width}m`);
      }

      return {
        name: room.name,
        score: compliant ? 100 : Math.max(40, Math.round((room.area / req?.min_area) * 100 || 50)),
        issues: issues.length,
        checksPassed: compliant ? 1 : 0,
        checksTotal: 1,
        summary: compliant
          ? 'Room meets Sharjah standards.'
          : `Non-compliant ${issues.join(' | ')}`,
      };
    });
    this.barData = this.roomInsights.map(r => ({
      name: r.name,
      value: r.score
    }));

    this.recommendations = (data.non_compliant_rooms || []).map((r: any) => ({
      title: `Improve ${r.name}`,
      description:
        r.issues.length
          ? r.issues.join('. ')
          : `Minor compliance issues found in ${r.type}.`,
      suggestion: `Review the layout and adjust dimensions or ventilation as per Sharjah standards.`,
    }));

    this.findings = (data.full_results?.texts || [])
      .map((t: any) => t.text)
      .filter((t: string) => !!t);

    this.complianceSummary = this.generateSummaryRows(data);

    this.complianceDistribution = [
      { name: 'Compliant', value: data.compliance_summary?.compliant_rooms },
      { name: 'Non-Compliant', value: data.compliance_summary?.non_compliant_rooms },
    ];

  }
  generateSummaryRows(data: any): any[] {
    if (!data?.compliance_summary) return [];

    const rows: any[] = [];

    rows.push({
      category: 'Overall Compliance',
      type: 'Residential',
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      score: Math.round(data.compliance_summary?.compliance_rate || 0),
      status: (data.compliance_summary?.compliance_rate || 0) >= 70 ? 'Pass' : 'Warning'
    });

    rows.push({
      category: 'Compliant Rooms',
      type: 'Residential',
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      score: data.compliance_summary?.compliant_rooms || 0,
      status: 'Pass'
    });

    rows.push({
      category: 'Non-Compliant Rooms',
      type: 'Residential',
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      score: data.compliance_summary?.non_compliant_rooms || 0,
      status: 'Fail'
    });

    rows.push({
      category: 'Total Rooms Analyzed',
      type: 'Residential',
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      score: data.compliance_summary?.total_rooms || 0,
      status: 'Pass'
    });

    return rows;
  }


}
