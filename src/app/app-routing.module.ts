/******************************************************************************
 *  Execution       :   1. default node         cmd> app-routing.module.ts 
 *
 * @description     : Used for the routing
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
import { NavbarComponent } from './component/navbar/navbar.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { LabelComponent } from './component/label/label.component';
import { ArchieveComponent } from './component/archieve/archieve.component';
import { TrashComponent } from './component/trash/trash.component';
import { IconComponent } from './component/icon/icon.component';
import { NoteComponent } from './component/note/note.component';
import { AuthGuardService } from './core/services/authGuard/auth-guard.service'
import { from } from 'rxjs';
const routes: Routes = [
  { path: '', redirectTo:"login", pathMatch: "full"},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'resetpassword/:token', component: ResetComponent },
  {
    path: '',
    component: NavbarComponent, canActivate: [AuthGuardService],
    children: [
      { path: 'addnote', component: NoteComponent },
      { path: 'reminder', component: ReminderComponent },
      { path: 'label', component: LabelComponent },
      { path: 'archieve', component: ArchieveComponent },
      { path: 'trash', component: TrashComponent },
      { path: 'icon', component: IconComponent }
    ]

  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
