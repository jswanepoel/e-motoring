import { Component, ViewChild, ElementRef, Input } from '@angular/core';

import { ScheduleCalendar } from '../../models/schedule-calendar';

@Component({
  selector: 'ngx-schedule-calendar',
  templateUrl: './schedule-calendar.component.html',
  styleUrls: ['./schedule-calendar.component.css']
})
export class ScheduleCalendarComponent {
  //cars: Car[];
  //@ViewChild('contentSize') contentSize: ElementRef; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()
  @Input() includeFooter: boolean = false; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()

  public currentMonthYear: string = '';
  public scheduleCalendarModel: ScheduleCalendar;
  public availableSlotsForModel: any[][];
  public canGoToPreviousMonth: boolean;
  public canGoToNextMonth: boolean;

  @Input('scheduleCalendarModel') set setScheduleCalendarModel(scheduleCalendarModel: ScheduleCalendar) {
    if (!scheduleCalendarModel.availableSlots) {
      scheduleCalendarModel.date = new Date(scheduleCalendarModel.date.getFullYear(), scheduleCalendarModel.date.getMonth(), 1);
      this.setAvailableSlots(scheduleCalendarModel.date);
    }
    else {
      this.availableSlotsForModel = scheduleCalendarModel.availableSlots;
    }

    this.scheduleCalendarModel = new ScheduleCalendar(scheduleCalendarModel.date, this.availableSlotsForModel, scheduleCalendarModel.canCycle);
    this.currentMonthYear = this.scheduleCalendarModel.date.toLocaleDateString("en", { month: "long", year: "numeric" }); // https://www.andiamo.co.uk/resources/iso-language-codes

    this.canGoToPreviousMonth = false;
    this.canGoToNextMonth = true;
  }

  public constructor() {
  }

  public ngOnInit() {
    //this.cars = [
    //  {
    //    "brand": "abc",
    //    "color": "yellow"
    //  }
    //];
  }

  public setAvailableSlots(workingDate: Date): void {
    let monthStartDayOfWeek = new Date(workingDate.getFullYear(), workingDate.getMonth(), 1).getDay();
    let daysInMonth = new Date(workingDate.getFullYear(), workingDate.getMonth() + 1, 0).getDate();

    this.availableSlotsForModel = new Array();

    var i: number;
    for (i = 0; i <= 41; i++) {
      if (i < monthStartDayOfWeek) {
        this.availableSlotsForModel.push([null, null, false]);
      }
      else {
        if (i <= (daysInMonth + monthStartDayOfWeek - 1)) {
          this.availableSlotsForModel.push([new Date(workingDate.getFullYear(), workingDate.getMonth(), i - monthStartDayOfWeek + 1), 0, false]);
        }
        else {
          this.availableSlotsForModel.push([null, null, false]);
        }
      }
    }

    return;
  }

  public previousMonth(): void {
    this.scheduleCalendarModel.date = new Date(this.scheduleCalendarModel.date.getFullYear(), this.scheduleCalendarModel.date.getMonth() - 1, 1);

    this.setAvailableSlots(this.scheduleCalendarModel.date);
    this.scheduleCalendarModel = new ScheduleCalendar(this.scheduleCalendarModel.date, this.availableSlotsForModel, this.scheduleCalendarModel.canCycle);
    this.currentMonthYear = this.scheduleCalendarModel.date.toLocaleDateString("en", { month: "long", year: "numeric" }); // https://www.andiamo.co.uk/resources/iso-language-codes

    if ((this.scheduleCalendarModel.date.getFullYear() == new Date().getFullYear()) && (this.scheduleCalendarModel.date.getMonth() == new Date().getMonth())) {
      this.canGoToPreviousMonth = false;
    }
  }

  public nextMonth(): void {
    this.canGoToPreviousMonth = true;
    this.scheduleCalendarModel.date = new Date(this.scheduleCalendarModel.date.getFullYear(), this.scheduleCalendarModel.date.getMonth() + 1, 1);
    this.setAvailableSlots(this.scheduleCalendarModel.date);
    this.scheduleCalendarModel = new ScheduleCalendar(this.scheduleCalendarModel.date, this.availableSlotsForModel, this.scheduleCalendarModel.canCycle);
    this.currentMonthYear = this.scheduleCalendarModel.date.toLocaleDateString("en", { month: "long", year: "numeric" }); // https://www.andiamo.co.uk/resources/iso-language-codes
  }

  // Base Template method : Do not alter
  //public calculateCardBodyHeight(): number {
  //  let offset = 0;

  //  if (this.contentSize.nativeElement.offsetHeight > 665) {
  //    offset = this.includeFooter ? 127 : 144;
  //  }
  //  else {
  //    offset = this.includeFooter ? 127 : 72;
  //  }

  //  let calculatedheight = window.innerHeight - 72 - offset;

  //  //let calculatedheight = 0;
  //  //if (this.contentSize.nativeElement.offsetHeight > 665) {
  //  //  calculatedheight = window.innerHeight - 72 - offset; //176 -
  //  //}
  //  //else {
  //  //  calculatedheight = window.innerHeight - offset; //176 -
  //  //}

  //  return calculatedheight < 200 ? 200 : calculatedheight;
  //}

}

//export interface Car {
//  brand;
//  color;
//}
