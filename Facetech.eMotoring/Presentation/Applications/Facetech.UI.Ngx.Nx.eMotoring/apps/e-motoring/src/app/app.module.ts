import { NgModule } from '@angular/core';
import { HttpModule, XHRBackend } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AuthenticateXHRBackend,
  AuthGuard,
  ConfigService,
  SessionDataService
} from '@facetech/common-ui';
import { AppBaseModule } from '@facetech/domain';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserAnimationsModule,
    AppBaseModule
  ],
  providers: [
    ConfigService,
    AuthGuard,
    {
      provide: XHRBackend,
      useClass: AuthenticateXHRBackend
    },
    SessionDataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
