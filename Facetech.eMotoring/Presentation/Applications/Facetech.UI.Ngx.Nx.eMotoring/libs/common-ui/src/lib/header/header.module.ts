import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
  FileUploadModule,
} from 'primeng/primeng';
import { ColorPickerModule } from 'primeng/colorpicker';
import { HeaderComponent } from './header.component';
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
    FileUploadModule,
    ColorPickerModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
   HeaderComponent
  ],
  providers: [
    LoginService
  ]
})
export class HeaderModule {
}
