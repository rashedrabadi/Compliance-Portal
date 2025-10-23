import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceStatusOverview } from './compliance-status-overview';

describe('ComplianceStatusOverview', () => {
  let component: ComplianceStatusOverview;
  let fixture: ComponentFixture<ComplianceStatusOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplianceStatusOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplianceStatusOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
