import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-overall-compliance-score',
  standalone: true,
  imports: [CommonModule, NgxEchartsModule],
  templateUrl: './overall-compliance-score.component.html',
  styleUrls: ['./overall-compliance-score.component.scss'],
})
export class OverallComplianceScoreComponent implements OnInit, OnChanges {
  @Input() score: number = 82;
  option!: EChartsOption;

  ngOnInit() {
    if (this.score !== undefined) {
      this.setChartOptions();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['score'] && changes['score'].currentValue !== undefined) {
      this.setChartOptions();
    }
  }

  setChartOptions() {
    const color =
      this.score >= 81 ? '#2B3674' :
      this.score >= 59 ? '#F4A261' :
      '#E76F51';

    this.option = {
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 100,
          progress: {
            show: true,
            width: 14,
            itemStyle: { color },
          },
          axisLine: {
            lineStyle: {
              width: 14,
              color: [[1, '#9C96B7']],
            },
          },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          pointer: { show: false },
          anchor: { show: false },
          detail: {
            valueAnimation: true,
            fontSize: 26,
            fontWeight: 700,
            color: '#1B2559',
            offsetCenter: [0, '-20%'],
            formatter: '{value}%',
          },
          data: [{ value: this.score }],
        },
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 100,
          axisLine: { show: false },
          progress: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          pointer: {
            show: true,
            icon:
              'path://M512 512m-10,0a10,10 0 1,0 20,0a10,10 0 1,0 -20,0',
            width: 0,
            length: '95%',
            itemStyle: {
              color: color,
              borderWidth: 2,
              borderColor: '#FFFFFF',
            },
          },
          detail: { show: false },
          data: [{ value: this.score }],
        },
      ],
    };
  }
}
