import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-cards.component.html',
  styleUrls: ['./stats-cards.component.scss']
})
export class StatsCardsComponent {
  cards = [
    {
      icon: 'assets/icons/total_submissions.svg',
      label: 'Total Submissions',
      value: 5,
    },
    {
      icon: 'assets/icons/compliant_projects.svg',
      label: 'Compliant Projects',
      value: 13,
    },
    {
      icon: 'assets/icons/under_review.svg',
      label: 'Under Review',
      value: 7,
    },
    {
      icon: 'assets/icons/non_compliant.svg',
      label: 'Non-Compliant',
      value: 9,
    },
  ];
}
