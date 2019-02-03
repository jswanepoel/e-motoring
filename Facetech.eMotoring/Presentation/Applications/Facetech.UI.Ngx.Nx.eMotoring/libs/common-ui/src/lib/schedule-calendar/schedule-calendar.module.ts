import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import {
  DialogModule,
  PanelModule,
  BlockUIModule,
  PanelMenuModule,
  ProgressSpinnerModule,
  DataGridModule,
  InputTextModule,
  TabViewModule,
  SliderModule,
  DropdownModule,
  TooltipModule,
  SharedModule,
  BreadcrumbModule,
  MultiSelectModule,
  MessagesModule,
  MessageModule,
  InputMaskModule,
  GrowlModule,
  CalendarModule,
  CheckboxModule,
  ScrollPanelModule,
  PickListModule,
  SelectButtonModule,
  OverlayPanelModule,
  SpinnerModule,
  ToggleButtonModule,
  AccordionModule,
  ContextMenuModule,
  ChartModule,
  CardModule,
  RadioButtonModule,
  InputTextareaModule,
  FieldsetModule,
  TreeTableModule,
  ConfirmDialogModule,
  TreeModule,
  FileUploadModule
} from 'primeng/primeng';

import { ScheduleCalendarTestpageComponent } from './schedule-calendar-testpage/schedule-calendar-testpage.component';
import { ScheduleCalendarComponent } from './schedule-calendar.component';
import { QuestionModule } from '../questions/question.module';
import { TrainingManagmentModule } from '../training-managment';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    QuestionModule,
    TableModule,
    DialogModule,
    PanelModule,
    BlockUIModule,
    PanelMenuModule,
    ProgressSpinnerModule,
    DataGridModule,
    InputTextModule,
    TabViewModule,
    SliderModule,
    DropdownModule,
    TooltipModule,
    SharedModule,
    BreadcrumbModule,
    MultiSelectModule,
    MessagesModule,
    MessageModule,
    InputMaskModule,
    GrowlModule,
    CalendarModule,
    CheckboxModule,
    ScrollPanelModule,
    PickListModule,
    SelectButtonModule,
    OverlayPanelModule,
    SpinnerModule,
    ToggleButtonModule,
    AccordionModule,
    ContextMenuModule,
    ChartModule,
    CardModule,
    RadioButtonModule,
    InputTextareaModule,
    FieldsetModule,
    TreeTableModule,
    ConfirmDialogModule,
    TreeModule,
    FileUploadModule,
    TrainingManagmentModule
  ],
  declarations: [
    ScheduleCalendarTestpageComponent,
    ScheduleCalendarComponent
  ],
  exports: [
    ScheduleCalendarTestpageComponent,
    ScheduleCalendarComponent
  ]
})
export class ScheduleCalendarModule {
}
