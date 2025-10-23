import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideEchartsCore } from 'ngx-echarts';
import { provideHttpClient } from '@angular/common/http'; 

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })
    ),
    provideEchartsCore({
      echarts: () => import('echarts'),
    }),

    provideHttpClient(), 
  ],
}).catch((err) => console.error(err));
