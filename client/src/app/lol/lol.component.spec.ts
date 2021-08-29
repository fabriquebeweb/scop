import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LolComponent } from '@src/app/lol/lol.component';

describe('LolComponent', () => {
  let component: LolComponent;
  let fixture: ComponentFixture<LolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
