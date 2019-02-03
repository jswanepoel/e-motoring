import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentUploadComponent } from '../document-upload/document-upload.component';
import { DataTableModule } from '../../data-table/data-table.module';
import { LoginService } from '../../security/login.service';
import { TableModule } from 'primeng/table';
import { FileHelpersModule } from 'ngx-file-helpers';
import { PdfViewModule } from '../../pdf-viewer';
import { ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FileHelpersModule,
    TableModule,
    ButtonModule,
    PdfViewModule,
    DataTableModule
  ],
  declarations: [
    DocumentUploadComponent
  ],
  exports: [
    DocumentUploadComponent
  ],
  providers: [
    LoginService
  ]
})
export class DocumentUploadModule {
}
