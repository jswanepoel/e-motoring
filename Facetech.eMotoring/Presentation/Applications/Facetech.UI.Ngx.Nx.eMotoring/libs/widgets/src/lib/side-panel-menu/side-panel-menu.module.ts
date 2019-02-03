import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { TableModule } from 'primeng/table';
import {
  //ButtonModule,
  //DialogModule,
  //PanelModule,
  //BlockUIModule,
  //ProgressSpinnerModule,
  //DataGridModule,
  //InputTextModule,
  //TabViewModule,
  //SliderModule,
  //DropdownModule,
  //TooltipModule,
  //SharedModule,
  //BreadcrumbModule,
  //MultiSelectModule,
  //MessagesModule,
  //MessageModule,
  //InputMaskModule,
  //GrowlModule,
  //CalendarModule,
  //CheckboxModule,
  //ScrollPanelModule,
  //PickListModule,
  //SelectButtonModule,
  //OverlayPanelModule,
  //SpinnerModule,
  //ToggleButtonModule,
  //AccordionModule,
  //ContextMenuModule,
  //ChartModule,
  //CardModule,
  //RadioButtonModule,
  //InputTextareaModule,
  //FieldsetModule,
  //TreeTableModule,
  //ConfirmDialogModule,
  //TreeModule,
  //FileUploadModule,
  PanelMenuModule
} from 'primeng/primeng';

import { SidePanelMenuComponent } from './side-panel-menu.component';
//import { LoginService } from '../security/login.service';
//import { QuestionModule } from '../questions/question.module';

@NgModule({
  imports: [
    CommonModule,
    PanelMenuModule
    //NgbModule,
    //,
    //FormsModule,
    //QuestionModule,
    //TableModule,
    //ButtonModule,
    //DialogModule,
    //PanelModule,
    //BlockUIModule,
    //,
    //ProgressSpinnerModule,
    //DataGridModule,
    //InputTextModule,
    //TabViewModule,
    //SliderModule,
    //DropdownModule,
    //TooltipModule,
    //SharedModule,
    //BreadcrumbModule,
    //MultiSelectModule,
    //MessagesModule,
    //MessageModule,
    //InputMaskModule,
    //GrowlModule,
    //CalendarModule,
    //CheckboxModule,
    //ScrollPanelModule,
    //PickListModule,
    //SelectButtonModule,
    //OverlayPanelModule,
    //SpinnerModule,
    //ToggleButtonModule,
    //AccordionModule,
    //ContextMenuModule,
    //ChartModule,
    //CardModule,
    //RadioButtonModule,
    //InputTextareaModule,
    //FieldsetModule,
    //TreeTableModule,
    //ConfirmDialogModule,
    //TreeModule,
    //FileUploadModule
  ],
  declarations: [
    SidePanelMenuComponent
  ],
  exports: [
    SidePanelMenuComponent
  ]
})
export class SidePanelMenuModule {
}
