import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleAppointmentForFinalizationComponent } from './schedule-appointment-for-finalization.component';

describe('ScheduleAppointmentForFinalizationComponent', () => {
  let component: ScheduleAppointmentForFinalizationComponent;
  let fixture: ComponentFixture<ScheduleAppointmentForFinalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleAppointmentForFinalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleAppointmentForFinalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
