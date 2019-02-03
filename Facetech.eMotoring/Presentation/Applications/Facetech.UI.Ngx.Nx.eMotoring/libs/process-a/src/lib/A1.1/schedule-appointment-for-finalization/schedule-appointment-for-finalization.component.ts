import { Component, OnInit, ViewChild } from '@angular/core';
import { ScheduleCalendarComponent, ScheduleCalendar } from '@facetech/common-ui';

@Component({
  selector: 'ngx-schedule-appointment-for-finalization',
  templateUrl: './schedule-appointment-for-finalization.component.html',
  styleUrls: ['./schedule-appointment-for-finalization.component.css']
})
export class ScheduleAppointmentForFinalizationComponent implements OnInit {

  public includeFooter: boolean = true; // Shell
  public bodyCenter = true; // Shell

  @ViewChild('scheduleCalendar') scheduleCalendarComponent: ScheduleCalendarComponent;
  public testScheduleCalendarModel: ScheduleCalendar;

  public constructor() {
    this.testScheduleCalendarModel = new ScheduleCalendar(new Date(), null, true);
  }

  ngOnInit() {
  }

}
