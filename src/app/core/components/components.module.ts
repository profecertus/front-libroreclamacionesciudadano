import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginFormComponent} from './login-form/login-form.component';
import {LoginModalComponent} from './login-modal/login-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {NgOtpInputModule} from 'ng-otp-input';
import { DropdownTreeviewSelectComponent } from './dropdown-treeview-select/dropdown-treeview-select.component';
import {TreeviewModule} from 'ngx-treeview';
import { PedidoRemisionComponent } from './pedido-remision/pedido-remision.component';
import { TableModule } from 'primeng/table';
import {DropdownModule} from "primeng/dropdown";
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";
import { RegisterFormComponent } from './register-form/register-form.component';
import {RouterModule} from "@angular/router";
import {CheckboxModule} from "primeng/checkbox";
import { RegisterpjFormComponent } from './registerpj-form/registerpj-form.component';
import {FieldsetModule} from "primeng/fieldset";
import { LoginInternoFormComponent } from './login-interno-form/login-interno-form.component';



@NgModule({
  declarations: [
    LoginFormComponent,
    LoginModalComponent,
    DropdownTreeviewSelectComponent,
    PedidoRemisionComponent,
    RegisterFormComponent,
    RegisterpjFormComponent,
    LoginInternoFormComponent
  ],
  exports: [
    LoginFormComponent,
    DropdownTreeviewSelectComponent,
    PedidoRemisionComponent,
    LoginInternoFormComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DialogModule,
        NgOtpInputModule,
        FormsModule,
        TreeviewModule,
        TableModule,
        DropdownModule,
        PasswordModule,
        DividerModule,
        RouterModule,
        CheckboxModule,
        FieldsetModule
    ]
})
export class ComponentsModule { }
