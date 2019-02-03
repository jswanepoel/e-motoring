import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastModule } from 'primeng/toast';
import { NgPipesModule } from 'ngx-pipes';
import { DataViewModule } from 'primeng/dataview';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ImageCropperModule } from 'ng2-img-cropper';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FileHelpersModule } from 'ngx-file-helpers';

import { QuestionModule } from '../questions';
import { ImageMapAreaModule } from '../image-map-area';
import { SignatureCaptureComponent } from './signature-capture.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    NgbCollapseModule,
    BrowserAnimationsModule,
    PanelModule,
    BlockUIModule,
    ButtonModule,
    PanelMenuModule,
    ProgressSpinnerModule,
    DataGridModule,
    TableModule,
    InputTextModule,
    TabViewModule,
    FormsModule,
    SliderModule,
    DropdownModule,
    MultiSelectModule,
    DialogModule,
    TooltipModule,
    SharedModule,
    BreadcrumbModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BlockUIModule,
    ProgressSpinnerModule,
    FontAwesomeModule,
    ButtonModule,
    ToastModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    InputMaskModule,
    GrowlModule,
    CalendarModule,
    ScrollPanelModule,
    CheckboxModule,
    RadioButtonModule,
    FileUploadModule,
    TreeModule,
    ConfirmDialogModule,
    TreeTableModule,
    FieldsetModule,
    InputTextareaModule,
    RadioButtonModule,
    CardModule,
    ChartModule,
    FileHelpersModule,
    PdfViewerModule,
    ContextMenuModule,
    ImageCropperModule,
    NgxImageZoomModule,
    HttpModule,
    DataViewModule,
    AccordionModule,
    ToggleButtonModule,
    SpinnerModule,
    OverlayPanelModule,
    NgPipesModule,
    SelectButtonModule,
    PickListModule,
    ProgressSpinnerModule,
    QuestionModule,
    ImageMapAreaModule
  ],
  declarations: [
    SignatureCaptureComponent
  ],
  exports: [
    SignatureCaptureComponent
  ]
})
export class SignatureCaptureModule {
}
