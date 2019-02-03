import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ButtonModule } from 'primeng/primeng';

import { DocumentCaptureComponent } from './document-capture.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    FontAwesomeModule,
    NgxImageZoomModule
  ],
  declarations: [
    DocumentCaptureComponent
  ],
  exports: [
    DocumentCaptureComponent
  ]
})
export class DocumentCaptureModule {
}
