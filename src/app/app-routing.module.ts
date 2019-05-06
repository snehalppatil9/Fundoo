/******************************************************************************
 *  Execution       :   1. default node         cmd> app-routing.module.ts 
 *
 *  @file           : app-routing.module.ts
 *  @author         : Snehal Patil
 *  @version        : 1.0
 *  @since          : 22-04-2019
 *
 ******************************************************************************/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//importing LoginComponent,RegistrationComponent,ForgotComponent,ResetComponent,PasswordComponent components
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { ResetComponent } from './component/reset/reset.component';
import { DashboardComponent } from './component/dashboard/dashboard.component'
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'resetpassword/:token', component: ResetComponent },
  { path: 'dashboard', component: DashboardComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
