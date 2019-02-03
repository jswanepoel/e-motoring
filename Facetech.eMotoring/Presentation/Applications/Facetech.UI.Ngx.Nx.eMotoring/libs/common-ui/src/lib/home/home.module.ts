import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/primeng';

import { LoginService } from '../security/login.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    HomeRoutingModule,
    ChartModule,

    //NgbModule,
    //CommonModule,
    //FormsModule,
    //QuestionModule,
    //TableModule,
    //ButtonModule,
    //DialogModule,
    //PanelModule,
    //BlockUIModule,
    //PanelMenuModule,
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

    //CardModule,
    //RadioButtonModule,
    //InputTextareaModule,
    //FieldsetModule,
    //TreeTableModule,
    //ConfirmDialogModule,
    //TreeModule,
    //FileUploadModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
   HomeComponent
  ],
  providers: [
    LoginService
  ]
})
export class HomeModule {
}
