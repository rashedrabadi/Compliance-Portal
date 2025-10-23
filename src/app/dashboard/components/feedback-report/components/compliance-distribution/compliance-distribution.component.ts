import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'app-compliance-distribution',
  standalone: true,
  imports: [NgxEchartsDirective, CommonModule],
  templateUrl: './compliance-distribution.component.html',
  styleUrl: './compliance-distribution.component.scss'
})
export class ComplianceDistributionComponent {
  @Input() distribution: any = [];
  chartOption: any = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['distribution'] && this.distribution?.length >= 2) {
      const dist = this.distribution; // 🟢 حفظنا نسخة محلية

      this.chartOption = {
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
            const total = (dist[0]?.value || 0) + (dist[1]?.value || 0);
            const compliant = total ? ((dist[0]?.value / total) * 100).toFixed(0) : 0;
            const nonCompliant = total ? ((dist[1]?.value / total) * 100).toFixed(0) : 0;

            const data = [
              { name: 'Compliant', value: compliant },
              { name: 'Non-Compliant', value: nonCompliant }
            ];
            const item = data.find(d => d.name === name);
            return `${name} – ${item?.value}%`;
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '65%'],
            center: ['25%', '50%'],
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
                value: dist[0]?.value || 0,
                name: 'Compliant',
                itemStyle: {
                  color: {
                    type: 'linear',
                    x: 0, y: 0, x2: 0, y2: 1,
                    colorStops: [{ offset: 0, color: '#2b3674' }]
                  }
                }
              },
              {
                value: dist[1]?.value || 0,
                name: 'Non-Compliant',
                itemStyle: {
                  color: {
                    type: 'linear',
                    x: 0, y: 0, x2: 0, y2: 1,
                    colorStops: [{ offset: 0, color: '#64D3FF' }]
                  }
                }
              }
            ]
          }
        ]
      };
    }
  }
}
