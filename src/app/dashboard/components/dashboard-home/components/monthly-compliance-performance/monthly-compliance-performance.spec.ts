import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyCompliancePerformance } from './monthly-compliance-performance';

describe('MonthlyCompliancePerformance', () => {
  let component: MonthlyCompliancePerformance;
  let fixture: ComponentFixture<MonthlyCompliancePerformance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyCompliancePerformance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyCompliancePerformance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
