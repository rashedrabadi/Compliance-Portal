import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallComplianceBar } from './overall-compliance-bar.component';

describe('OverallComplianceBar', () => {
  let component: OverallComplianceBar;
  let fixture: ComponentFixture<OverallComplianceBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverallComplianceBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallComplianceBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
