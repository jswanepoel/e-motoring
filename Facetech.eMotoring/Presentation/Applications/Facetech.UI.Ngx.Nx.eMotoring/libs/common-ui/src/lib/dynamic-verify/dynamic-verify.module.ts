import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/primeng';

import { DynamicVerifyComponent } from './dynamic-verify.component';
import { VerifyTestComponent } from './verify-test/verify-test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule
  ],
  declarations: [
    DynamicVerifyComponent,
    VerifyTestComponent
  ],
  exports: [
    DynamicVerifyComponent,
    VerifyTestComponent
  ]
})
export class DynamicVerifyModule {
}
