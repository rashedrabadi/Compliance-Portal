import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Row = {
  name: string;
  type: 'Residential' | 'Commercial';
  date: string;       
  score: number;       
  status: 'Pass' | 'Warning' | 'Fail';
};

@Component({
  selector: 'app-recent-submissions-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recent-submissions-table.component.html',
  styleUrls: ['./recent-submissions-table.component.scss'],
})
export class RecentSubmissionsTableComponent {

  searchTerm = '';
  selectedStatus: 'All' | 'Pass' | 'Warning' | 'Fail' = 'All';
  selectedDate = ''; 

  statuses: Array<'All' | 'Pass' | 'Warning' | 'Fail'> = ['All', 'Pass', 'Warning', 'Fail'];

  rows: Row[] = [
    { name: 'Villa A Plan', type: 'Residential', date: '29 Sep 2025', score: 82, status: 'Pass' },
    { name: 'Tower 22',    type: 'Commercial',  date: '25 Sep 2025', score: 65, status: 'Warning' },
    { name: 'House B',     type: 'Residential', date: '20 Sep 2025', score: 25, status: 'Fail' },
    { name: 'House B',     type: 'Residential', date: '20 Sep 2025', score: 25, status: 'Fail' },
    
  ];

  private toISO(dateStr: string): string {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const [d, m, y] = dateStr.split(' ');
    const mm = String(months.indexOf(m) + 1).padStart(2, '0');
    const dd = String(parseInt(d, 10)).padStart(2, '0');
    return `${y}-${mm}-${dd}`;
  }

  get filtered(): Row[] {
    return this.rows.filter(r => {
      const okSearch = this.searchTerm.trim()
        ? r.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        : true;

      const okStatus = this.selectedStatus === 'All' ? true : r.status === this.selectedStatus;

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
