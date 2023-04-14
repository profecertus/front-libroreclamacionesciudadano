import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule  } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgOtpInputModule } from 'ng-otp-input';
import { FeatherModule } from 'angular-feather';
import  {allIcons } from 'angular-feather/icons';
import {ModalModule} from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PanelMenuModule, ScrollPanelModule, AvatarModule, 
    DividerModule, DialogModule, DropdownModule, NgOtpInputModule,
    ModalModule.forRoot(), AppRoutingModule,
    FeatherModule.pick(allIcons),
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
