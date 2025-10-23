import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackReport } from './feedback-report';

describe('FeedbackReport', () => {
  let component: FeedbackReport;
  let fixture: ComponentFixture<FeedbackReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
