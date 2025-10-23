import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyComplianceChart } from './monthly-compliance-chart';

describe('MonthlyComplianceChart', () => {
  let component: MonthlyComplianceChart;
  let fixture: ComponentFixture<MonthlyComplianceChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyComplianceChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyComplianceChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
