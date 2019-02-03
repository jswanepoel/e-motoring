import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule, ButtonModule } from 'primeng/primeng';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { PdfViewComponent } from './pdf-view.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProgressSpinnerModule,
    PdfViewerModule,
    ButtonModule,
    FontAwesomeModule
  ],
  declarations: [
    PdfViewComponent
  ],
  exports: [
    PdfViewComponent
  ]
})
export class PdfViewModule {
}
