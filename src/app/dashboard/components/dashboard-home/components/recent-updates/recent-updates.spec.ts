import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentUpdates } from './recent-updates';

describe('RecentUpdates', () => {
  let component: RecentUpdates;
  let fixture: ComponentFixture<RecentUpdates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentUpdates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentUpdates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
