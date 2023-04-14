import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule  } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ImageModule }  from 'primeng/image';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgOtpInputModule } from 'ng-otp-input';
import { FeatherModule } from 'angular-feather';
import  {allIcons } from 'angular-feather/icons';
import {ModalModule} from 'ngx-bootstrap/modal';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {LayoutsModule} from "./core/layouts/layouts.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {RippleModule} from "primeng/ripple";
import {PrimeNGConfig} from "primeng/api";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PanelMenuModule, ScrollPanelModule, AvatarModule, 
    DividerModule, DialogModule, DropdownModule, NgOtpInputModule,
    ModalModule.forRoot(), AppRoutingModule,
    FeatherModule.pick(allIcons), ImageModule, CardModule, PanelModule,
    ToastModule, ButtonModule, MenuModule, InputTextModule, LayoutsModule,
    BrowserAnimationsModule, CommonModule, RouterModule, RippleModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
