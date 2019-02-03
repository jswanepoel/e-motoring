import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/primeng';

import { QuestionModule, DynamicVerifyModule } from '@facetech/common-ui';

import { ProcessBService } from '../../services/process-b.service';
import { EntitiesOfInterestComponent } from './entities-of-interest.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule,
    DynamicVerifyModule,
    ButtonModule
  ],
  declarations: [
    EntitiesOfInterestComponent
  ],
  exports: [
    EntitiesOfInterestComponent
  ],
  providers: [
    ProcessBService
  ]
})
export class EntitiesOfInterestModule {
}
