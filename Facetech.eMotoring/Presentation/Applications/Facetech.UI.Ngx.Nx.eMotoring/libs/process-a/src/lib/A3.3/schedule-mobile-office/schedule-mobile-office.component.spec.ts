import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMobileOfficeComponent } from './schedule-mobile-office.component';

describe('ScheduleMobileOfficeComponent', () => {
  let component: ScheduleMobileOfficeComponent;
  let fixture: ComponentFixture<ScheduleMobileOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleMobileOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleMobileOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
