import { Component, OnInit, ViewChild } from '@angular/core';
import { BreadcrumbsService, ScheduleCalendarComponent, ScheduleCalendar } from '@facetech/common-ui';

@Component({
  selector: 'ngx-schedule-mobile-office',
  templateUrl: './schedule-mobile-office.component.html',
  styleUrls: ['./schedule-mobile-office.component.css']
})
export class ScheduleMobileOfficeComponent implements OnInit {

  public breadcrumbItems: any;
  @ViewChild('scheduleCalendar') scheduleCalendarComponent: ScheduleCalendarComponent;
  public testScheduleCalendarModel: ScheduleCalendar;
  public includeFooter: boolean = true; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()
  public bodyCenter = true;



constructor(private crumbs: BreadcrumbsService) {
  this.testScheduleCalendarModel = new ScheduleCalendar(new Date(), null, true);
    this.breadcrumbItems = [
      { label: 'Schedule Appointment', routerLink: '/schedule-calendar-testpage', icon: 'fa fa-pencil-square' },
      { label: 'Generate Payment Instruction', routerLink: '/report', icon: 'fa fa-pencil-square' },
      { label: 'Document Uplaod', routerLink: '/document-upload', icon: 'fa fa-pencil-square' },
      { label: 'Verify Transaction', routerLink: '/verify', icon: 'fa fa-pencil-square' }
    ];
    this.crumbs.setBreadCrumbs(this.breadcrumbItems);
    //this.defineQuestions();
  }
  ngOnInit() {
  }

}
