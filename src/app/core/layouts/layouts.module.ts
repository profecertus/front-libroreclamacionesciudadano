import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {PublicoComponent} from './publico/publico.component';
import {ComponentsModule} from '../components/components.module';
import {RouterModule} from '@angular/router';
import {FeatherModule} from 'angular-feather';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import { VisorPdfComponent } from './visor-pdf/visor-pdf.component';


import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {SharedDirectivesModule} from '../directives/shared-directives.module';
import {ToastModule} from 'primeng/toast';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputTextModule} from 'primeng/inputtext';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';



@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    PublicoComponent,
    VisorPdfComponent],
    imports: [
        CommonModule,
        RouterModule,
        ComponentsModule,
        FeatherModule,
        DropdownModule,
        FormsModule,
        ProgressSpinnerModule,
        SharedDirectivesModule,
        ToastModule,
        AutoCompleteModule,
        KeyFilterModule,
        InputTextModule,
        NgxExtendedPdfViewerModule
    ]
})
export class LayoutsModule { }
