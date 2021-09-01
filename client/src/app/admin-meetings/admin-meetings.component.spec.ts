import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMeetingsComponent } from '@src/app/admin-meetings/admin-meetings.component';

describe('AdminMeetingsComponent', () => {
  let component: AdminMeetingsComponent;
  let fixture: ComponentFixture<AdminMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMeetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
