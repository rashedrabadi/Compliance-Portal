import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSubmissionsTable } from './recent-submissions-table';

describe('RecentSubmissionsTable', () => {
  let component: RecentSubmissionsTable;
  let fixture: ComponentFixture<RecentSubmissionsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentSubmissionsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentSubmissionsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
