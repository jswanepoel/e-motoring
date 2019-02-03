import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule, InputMaskModule, InputTextModule, ListboxModule, MessageModule, PanelModule, ScrollPanelModule, CalendarModule, RadioButtonModule, ProgressSpinnerModule } from 'primeng/primeng';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicQuestionComponent } from './dynamic-question/dynamic-question.component';
import { QuestionControlService } from './question-control.service';
import { QuestionService } from './question.service';

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MessageModule,
    ScrollPanelModule,
    PanelModule,
    InputMaskModule,
    DropdownModule,
    ListboxModule,
    BrowserAnimationsModule,
    InputTextModule,
    CalendarModule,
    RadioButtonModule,
    ProgressSpinnerModule
  ],
  declarations: [
    DynamicFormComponent,
    DynamicQuestionComponent
  ],
  providers: [
    QuestionControlService,
    QuestionService
  ]
  ,
  exports: [
    DynamicFormComponent
  ]
})
export class QuestionModule {

}
