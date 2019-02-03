import { Component, ViewChild } from '@angular/core';


import { ScheduleCalendarComponent } from '../schedule-calendar.component';
import { ScheduleCalendar } from '../../../models/schedule-calendar';

@Component({
  selector: 'ngx-schedule-calendar-testpage',
  templateUrl: './schedule-calendar-testpage.component.html',
  styleUrls: ['./schedule-calendar-testpage.component.css']
})
export class ScheduleCalendarTestpageComponent {
  @ViewChild('scheduleCalendar') scheduleCalendarComponent: ScheduleCalendarComponent;
  public testScheduleCalendarModel: ScheduleCalendar;
  public includeFooter: boolean = true; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()
  public bodyCenter = true;
  public constructor() {
    this.testScheduleCalendarModel = new ScheduleCalendar(new Date(), null, true);
  }
}
