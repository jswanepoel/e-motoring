import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule, DialogModule, CheckboxModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { NgPipesModule } from 'ngx-pipes';

import { QuestionModule } from '../questions/question.module';
import { LoginService } from '../security/login.service';
import { BiometricFingerPrintComponent } from './biometric-finger-print.component';
import { ImageMapAreaModule } from '../image-map-area/image-map-area.module';

@NgModule({
  imports: [
    NgbModule,
    NgPipesModule,
    CommonModule,
    FormsModule,
    QuestionModule,
    TableModule,
    ButtonModule,
    DialogModule,
    CheckboxModule,
    ImageMapAreaModule
  ],
  declarations: [
   BiometricFingerPrintComponent
  ],
  exports: [
   BiometricFingerPrintComponent
  ],
  providers: [
    LoginService
  ]
})
export class BiometricFingerPrintModule {
}
