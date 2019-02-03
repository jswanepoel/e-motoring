import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

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
  TreeModule,
  FileUploadModule
} from 'primeng/primeng';

import { FooterComponent } from './footer.component';
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
    FooterComponent
  ],
  exports: [
    FooterComponent
  ],
  providers: [
    LoginService,
    ConfirmationService
  ]
})
export class FooterModule {
}
