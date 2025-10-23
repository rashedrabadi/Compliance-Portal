import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallComplianceScore } from './overall-compliance-score.component';

describe('OverallComplianceScore', () => {
  let component: OverallComplianceScore;
  let fixture: ComponentFixture<OverallComplianceScore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverallComplianceScore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallComplianceScore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
