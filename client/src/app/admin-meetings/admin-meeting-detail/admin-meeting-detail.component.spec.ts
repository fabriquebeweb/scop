import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMeetingDetailComponent } from '@src/app/admin-meetings/admin-meeting-detail/admin-meeting-detail.component';

describe('AdminMeetingDetailComponent', () => {
  let component: AdminMeetingDetailComponent;
  let fixture: ComponentFixture<AdminMeetingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMeetingDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMeetingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
