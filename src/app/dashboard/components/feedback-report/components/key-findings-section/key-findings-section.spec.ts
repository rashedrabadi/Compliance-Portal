import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFindingsSection } from './key-findings-section.component';

describe('KeyFindingsSection', () => {
  let component: KeyFindingsSection;
  let fixture: ComponentFixture<KeyFindingsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyFindingsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyFindingsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
