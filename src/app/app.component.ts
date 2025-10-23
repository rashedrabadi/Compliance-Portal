import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent, TopbarComponent } from '.';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, TopbarComponent],
  template: `
    <div class="shell">
      <app-sidebar class="sidebar"></app-sidebar>
      <div class="main">
        <app-topbar></app-topbar>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .shell {
      display: grid;
      grid-template-columns: 260px 1fr;
      min-height: 100vh;
    }
    .main { background: var(--bg); }
    @media (max-width: 900px) {
      .shell { grid-template-columns: 1fr; }
      .sidebar { position: sticky; top: 0; z-index: 5; }
    }
  `]
})
export class AppComponent {}
