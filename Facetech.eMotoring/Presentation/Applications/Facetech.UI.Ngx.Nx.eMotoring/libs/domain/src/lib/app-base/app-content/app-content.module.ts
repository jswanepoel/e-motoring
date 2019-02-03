import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { HeaderModule, BreadcrumbsModule, FooterModule, SidePanelMenuModule } from '@facetech/widgets';

import { CommonUiModule, CommonUIServicesModule, ConfigService, HomeModule, PageNotFoundModule } from '@facetech/common-ui';
import { ProcessAModule } from '@facetech/process-a';
import { ProcessBModule } from '@facetech/process-b';
import { ProcessCModule } from '@facetech/process-c';
import { ProcessDModule } from '@facetech/process-d';
import { ProcessEModule } from '@facetech/process-e';
import { AppContentRoutingModule } from './app-content-routing.module';
import { AppContentComponent } from './app-content.component';

import { BreadcrumbModule } from 'primeng/primeng';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { AppFooterComponent } from '../app-footer/app-footer.component';
import { AppSideNavigationComponent } from '../app-side-navigation/app-side-navigation.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    FooterModule,
    BreadcrumbModule,
    BreadcrumbsModule,
    SidePanelMenuModule,
    HomeModule,

    HttpModule,
    BrowserAnimationsModule,
    AppContentRoutingModule,
    PageNotFoundModule,
    CommonUiModule,
    ProcessAModule,
    ProcessBModule,
    ProcessCModule,
    ProcessDModule,
    ProcessEModule,
    CommonUIServicesModule
  ],
  exports: [
    AppContentComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppSideNavigationComponent
  ],
  declarations: [
    AppContentComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppSideNavigationComponent
  ]
})
export class AppContentModule {
}
