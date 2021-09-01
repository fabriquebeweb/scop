import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMeetingsElementComponent } from '@src/app/admin-meetings/admin-meetings-element/admin-meetings-element.component';

describe('AdminMeetingsElementComponent', () => {
  let component: AdminMeetingsElementComponent;
  let fixture: ComponentFixture<AdminMeetingsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMeetingsElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMeetingsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
