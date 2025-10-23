import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upcoming-deadlines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upcoming-deadlines.component.html',
  styleUrls: ['./upcoming-deadlines.component.scss']
})
export class UpcomingDeadlinesComponent {
  deadlines = [
    {
      title: 'Submission Deadline (Project A)',
      requester: 'Ahmad yousef',
      date: '5-Oct-2025',
      type: 'danger'
    },
    {
      title: 'Site Inspection (Zone 2)',
      requester: 'Mustafa Yousef',
      date: '10-Oct-2025',
      type: 'warning'
    },
    {
      title: 'Annual Compliance Audit',
      requester: 'Mustafa Yousef',
      date: '—',
      type: 'neutral'
    },
    {
      title: 'Project Review Meeting',
      requester: 'Rana Khalid',
      date: '22-Oct-2025',
      type: 'neutral'
    },
    {
      title: 'Final Submission (Zone 3)',
      requester: 'Mohammad Ali',
      date: '28-Oct-2025',
      type: 'danger'
    }
  ];
}
