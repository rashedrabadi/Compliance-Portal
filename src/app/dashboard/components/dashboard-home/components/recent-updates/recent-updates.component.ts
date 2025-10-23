import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-updates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-updates.component.html',
  styleUrls: ['./recent-updates.component.scss']
})
export class RecentUpdatesComponent {
  updates = [
    {
      text: `Project "Green Park" moved to Compliant`,
      linkText: 'Compliant',
      link: '#',
      days: '2 days ago',
    },
    {
      text: `Ahmed Ali updated Zone B Report`,
      linkText: 'Ahmed Ali',
      link: '#',
      days: '3 days ago',
    },
    {
      text: `Ahmed Ali updated Zone B Report`,
      linkText: 'Ahmed Ali',
      link: '#',
      days: '3 days ago',
    },
  ];
}
