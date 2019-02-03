import { IScheduleCalendar } from "./interfaces/schedule-calendar.interface";

export class ScheduleCalendar implements IScheduleCalendar {
  public date: Date;
  public availableSlots: any[][];
  public canCycle: boolean;

  public constructor(date: Date, availableSlots: any[][], canCycle: boolean) {
    this.date = date;
    this.availableSlots = availableSlots;
    this.canCycle = canCycle;
  }
}
