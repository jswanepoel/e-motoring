import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import {
  ButtonModule,
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

import { NumberplateOrderComponent } from './numberplate-order.component';
import { LoginService } from '../security/login.service';
import { QuestionModule } from '../questions/question.module';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    QuestionModule,
    TableModule,
    ButtonModule,
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
  ],
  declarations: [
    NumberplateOrderComponent
  ],
  exports: [
   NumberplateOrderComponent
  ],
  providers: [LoginService]
})
export class NumberplateOrderModule {
}
