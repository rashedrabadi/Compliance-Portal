import { Component } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'app-compliance-status-overview',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './compliance-status-overview.component.html',
  styleUrl: './compliance-status-overview.component.scss'
})
export class ComplianceStatusOverviewComponent {
  chartOption = {
    title: {
      left: 'center',
      top: 'center',
      textStyle: {
        color: '#1e2a4a',
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 28
      }
    },
    legend: {
      orient: 'vertical',
      left: '60%',
      top: 'center',
      icon: 'rect',
      itemWidth: 14,
      itemHeight: 14,
      textStyle: {
        color: '#1e2a4a',
        fontSize: 14
      },
      formatter: (name: string) => {
        const data = [
          { name: 'Fully Compliant', value: 60 },
          { name: 'Partially Compliant', value: 25 },
          { name: 'Non-Compliant', value: 15 }
        ];
        const item = data.find(d => d.name === name);
        return `${name} – ${item?.value}%`;
      }
    },
   series: [
  {
    type: 'pie',
    radius: ['50%', '65%'],
    center: ['22%', '50%'],
    avoidLabelOverlap: false,
    label: { show: false },
    labelLine: { show: false },
    startAngle: 90,
    gapAngle: 8,
    roundCap: true,
    animation: true,
    animationDuration: 1200,
    animationEasing: 'cubicOut',
    data: [
      {
        value: 60,
        name: 'Fully Compliant',
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: '#718EBF' },
            ]
          }
        }
      },
      {
        value: 25,
        name: 'Partially Compliant',
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: '#2B3674' },
            ]
          }
        }
      },
      {
        value: 15,
        name: 'Non-Compliant',
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: '#64D3FF' },
            ]
          }
        }
      }
    ]
  }
],
  };
}
