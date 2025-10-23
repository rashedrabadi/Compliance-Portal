import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomInsights } from './room-insights';

describe('RoomInsights', () => {
  let component: RoomInsights;
  let fixture: ComponentFixture<RoomInsights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomInsights]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomInsights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
