import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-overall-compliance-bar',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './overall-compliance-bar.component.html',
  styleUrls: ['./overall-compliance-bar.component.scss'],
})
export class OverallComplianceBarComponent implements OnInit {
  @Input() data: { name: string; value: number }[] = [];

  option!: EChartsOption;

   ngOnInit() {
    if (this.data?.length) {
      this.setupChart();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && changes['data'].currentValue?.length) {
      this.setupChart();
    }
  }

  setupChart() {
    const categories = this.data.map(d => d.name);
    const values = this.data.map(d => d.value);

    this.option = {
      grid: { left: '4%', right: '4%', bottom: '8%', top: '8%', containLabel: true },
      xAxis: {
        type: 'category',
        data: categories,
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          color: '#3B5998',
          fontSize: 12,
          fontWeight: 500,
        },
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        splitLine: {
          lineStyle: { color: '#EEF2F6' },
        },
        axisLabel: {
          formatter: '{value}%',
          color: '#6B7280',
          fontSize: 11,
        },
      },
      series: [
        {
          type: 'bar',
          data: values,
          barWidth: '25%',
          itemStyle: {
            color: '#2B3674',
            borderRadius: [16, 16, 0, 0],
          },
          label: { show: false },
        },
      ],
      animationDuration: 1200,
    };
  }
}
