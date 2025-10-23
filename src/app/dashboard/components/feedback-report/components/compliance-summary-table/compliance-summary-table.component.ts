import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Row = {
  category: string;
  type: 'Residential' | 'Commercial';
  date: string;
  score: number;
  status: 'Pass' | 'Warning' | 'Fail';
};

@Component({
  selector: 'app-compliance-summary-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './compliance-summary-table.component.html',
  styleUrls: ['./compliance-summary-table.component.scss'],
})
export class ComplianceSummaryTableComponent {

  searchTerm = '';
  selectedCategories: 'All' | 'Overall Compliance' | 'Compliant Rooms' | 'Non-Compliant Rooms' | 'Total Rooms Analyzed' = 'All';
  selectedDate = '';

  categories: Array<'All' | 'Overall Compliance' | 'Compliant Rooms' | 'Non-Compliant Rooms' | 'Total Rooms Analyzed'> = ['All', 'Overall Compliance', 'Compliant Rooms', 'Non-Compliant Rooms', 'Total Rooms Analyzed'];

  @Input() rows: Row[] = [
    { category: 'Structural & Safety', type: 'Residential', date: '29 Sep 2025', score: 82, status: 'Pass' },
    { category: 'Environmental', type: 'Commercial', date: '25 Sep 2025', score: 65, status: 'Warning' },
    { category: 'Energy Efficiency', type: 'Residential', date: '20 Sep 2025', score: 25, status: 'Fail' },
    { category: 'Design & Accessibility', type: 'Residential', date: '20 Sep 2025', score: 25, status: 'Fail' },

  ];

  private toISO(dateStr: string): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const [d, m, y] = dateStr.split(' ');
    const mm = String(months.indexOf(m) + 1).padStart(2, '0');
    const dd = String(parseInt(d, 10)).padStart(2, '0');
    return `${y}-${mm}-${dd}`;
  }

  get filtered(): Row[] {
    if (!Array.isArray(this.rows)) return [];
    return this.rows.filter(r => {
      const okSearch = this.searchTerm.trim()
        ? r.category.toLowerCase().includes(this.searchTerm.toLowerCase())
        : true;

      const okStatus =
        this.selectedCategories === 'All'
          ? true
          : r.category === this.selectedCategories;

      const okDate = this.selectedDate
        ? this.toISO(r.date) === this.selectedDate
        : true;

      return okSearch && okStatus && okDate;
    });
  }


  statusBadgeClass(s: Row['status']) {
    return {
      'badge': true,
      'pass': s === 'Pass',
      'warn': s === 'Warning',
      'fail': s === 'Fail',
    };
  }
  scoreDotClass(s: Row['status']) {
    return {
      'dot': true,
      'dot-pass': s === 'Pass',
      'dot-warn': s === 'Warning',
      'dot-fail': s === 'Fail',
    };
  }
}
