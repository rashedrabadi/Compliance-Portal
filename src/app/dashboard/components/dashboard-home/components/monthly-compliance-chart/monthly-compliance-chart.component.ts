import { Component } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';
import * as echarts from 'echarts'; 
@Component({
  selector: 'app-monthly-compliance-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './monthly-compliance-chart.component.html',
  styleUrls: ['./monthly-compliance-chart.component.scss']
})
export class MonthlyComplianceChartComponent {
  chartOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#1e293b',
      borderRadius: 6,
      padding: 10,
      textStyle: { color: '#fff' },
      formatter: (params: any) => {
        const [r, c] = params;
        return `
          <div style="font-weight:600;">${r.name}</div>
          <div style="margin-top:4px;">
            <span style="color:#3b82f6">●</span> Residential Buildings: <b>${r.value}</b><br>
            <span style="color:#06b6d4">●</span> Commercial Buildings: <b>${c.value}</b>
          </div>
        `;
      },
    },
    legend: {
     show: false
    },
    grid: { left: '3%', right: '4%', bottom: '8%', containLabel: true },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine: { lineStyle: { color: '#e2e8f0' } },
      axisLabel: { color: '#94a3b8', fontSize: 12 },
      data: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB']
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      splitLine: { lineStyle: { color: '#f1f5f9' } },
      axisLabel: { color: '#94a3b8' }
    },
    series: [
      {
        name: 'Residential Buildings',
        type: 'line',
        smooth: true,
        data: [65, 80, 77, 60, 82, 87],
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
          width: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: '#1B2559' },
          ]),
          shadowColor: 'rgba(59,130,246,0.4)',
          shadowBlur: 12,
          shadowOffsetY: 8,
        },
        itemStyle: {
          color: '#1B2559',
          borderColor: '#fff',
          borderWidth: 2
        },
      },
      {
        name: 'Commercial Buildings',
        type: 'line',
        smooth: true,
        data: [55, 65, 60, 48, 68, 73],
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
          width: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: '#6AD2FF' },
          ]),
          shadowColor: 'rgba(6,182,212,0.3)',
          shadowBlur: 12,
          shadowOffsetY: 8,
        },
        itemStyle: {
          color: '#6AD2FF',
          borderColor: '#fff',
          borderWidth: 2
        },
      }
    ]
  };
}
