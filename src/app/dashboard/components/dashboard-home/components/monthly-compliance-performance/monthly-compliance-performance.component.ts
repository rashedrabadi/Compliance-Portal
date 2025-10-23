import { Component } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'app-monthly-compliance-performance',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './monthly-compliance-performance.component.html',
  styleUrls: ['./monthly-compliance-performance.component.scss']
})
export class MonthlyCompliancePerformanceComponent {
  chartOption = {
    grid: { left: '8%', right: '5%', top: '5%', bottom: '10%', containLabel: true },

    tooltip: {
      trigger: 'axis',
      backgroundColor: '#1E2A4A',
      borderWidth: 0,
      borderRadius: 6,
      padding: [8, 12],
      textStyle: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 500,
      },
      formatter: (params: any) => {
        const p = params[0];
        return `<b>${p.axisValue}</b><br>${p.value}% compliance`;
      },
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: '#2B3674',
          width: 1.5,
          type: 'solid'
        }
      }
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#9CA3AF', fontSize: 12 }
    },

    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        show: true,
        lineStyle: { color: '#F3F4F6' }
      },
      axisLabel: { formatter: '{value}%', color: '#9CA3AF', fontSize: 12 }
    },

    series: [
      {
        type: 'line',
        data: [55, 60, 75, 82, 78, 80, 74],
        smooth: true,
        symbol: 'none',
        lineStyle: {
          width: 18,
          color: 'rgba(43,54,116,0.08)',
          cap: 'round'
        },
        z: 1
      },

      {
        type: 'line',
        data: [55, 60, 75, 82, 78, 80, 74],
        smooth: true,
        symbol: 'none',
        lineStyle: {
          width: 5,
          color: '#2B3674',
          cap: 'round'
        },
        emphasis: {
          focus: 'series',
          lineStyle: { color: '#1B2559' } 
        },
        z: 2
      }
    ]
  };
}
