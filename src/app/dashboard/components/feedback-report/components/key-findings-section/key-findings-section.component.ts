import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-key-findings-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './key-findings-section.component.html',
  styleUrls: ['./key-findings-section.component.scss']
})
export class KeyFindingsSectionComponent {
  @Input() findings: string[] = [];
}
