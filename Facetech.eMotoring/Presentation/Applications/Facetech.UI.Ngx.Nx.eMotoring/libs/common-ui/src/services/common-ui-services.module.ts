import { NgModule } from '@angular/core';

import { ParentService } from './parent.service';
import { ConfigService } from './config/config.service';
import { HubService } from 'ngx-signalr-hubservice';
import { BiometricService } from './biometric/biometric.service';

@NgModule({
  providers: [
    BiometricService,
    ParentService,
    ConfigService,
    HubService
  ]
})
export class CommonUIServicesModule {
}
