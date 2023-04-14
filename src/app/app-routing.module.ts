import { PublicoComponent } from './core/layouts/publico/publico.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  /*{
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule),
      }],
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/visor-pdf/:tipo',
    component: VisorPdfComponent,
  },*/
  {
    path: 'publico',
    component: PublicoComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./publico/publico.module').then(m => m.PublicoModule),
      }],
  },
  /*{
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegisterFormComponent,
  },
  {
    path: 'login-interno',
    component: LoginInternoFormComponent,
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
