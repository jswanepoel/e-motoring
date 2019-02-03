import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionModule } from '@facetech/common-ui';
import { RegisterAdditionalSystemUsersComponent } from './register-additional-system-users.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
    RegisterAdditionalSystemUsersComponent
  ],
  exports: [
    RegisterAdditionalSystemUsersComponent
  ]
})
export class RegisterAdditionalSystemUsersModule {
}
