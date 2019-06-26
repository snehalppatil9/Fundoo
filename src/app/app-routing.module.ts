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
import { AuthGuardService } from './core/services/authGuard/auth-guard.service';
import { SearchNoteComponent } from './component/search-note/search-note.component';
import { CollaboratorComponent } from './component/collaborator/collaborator.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { ImageCropComponent } from './component/image-crop/image-crop.component';
import { SearchmatcardsComponent } from './component/searchmatcards/searchmatcards.component'
import { PinComponent } from './component/pin/pin.component'
import { LabelnoteComponent } from './component/labelnote/labelnote.component';
import { AskQuestionComponent } from './component/ask-question/ask-question.component';
import { ComponentlifecycleComponent } from './component/componentlifecycle/componentlifecycle.component'
import { AddcartComponent } from './component/addcart/addcart.component';
import { DialogcartComponent } from './component/dialogcart/dialogcart.component';
import { ProductPurchaseComponent } from './component/product-purchase/product-purchase.component';
import { PlaceOrderComponent } from './component/place-order/place-order.component';
import { CompletePaymentComponent } from './component/complete-payment/complete-payment.component'
const routes: Routes = [
  { path: '', redirectTo: "addcart", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'resetpassword/:token', component: ResetComponent },
  { path: 'addcart', component: AddcartComponent },
  { path: 'componentcycle', component: ComponentlifecycleComponent },
  { path: 'productpurchase/:data', component: ProductPurchaseComponent },
  { path: 'placeorder/:data', component : PlaceOrderComponent},
  { path: 'completePayment/:data', component : CompletePaymentComponent},
  {
    path: '',
    component: NavbarComponent, canActivate: [AuthGuardService],
    children: [
      { path: 'addnote', component: NoteComponent },
      { path: 'reminder', component: ReminderComponent },
      { path: 'label', component: LabelComponent },
      { path: 'archieve', component: ArchieveComponent },
      { path: 'trash', component: TrashComponent },
      { path: 'icon', component: IconComponent },
      { path: 'search', component: SearchNoteComponent },
      { path: 'archive', component: ArchieveComponent },
      { path: 'trash', component: TrashComponent },
      { path: 'dialog', component: DialogComponent },
      { path: 'collaborator', component: CollaboratorComponent },
      { path: 'reminder', component: ReminderComponent },
      { path: 'imagecrop', component: ImageCropComponent },
      { path: 'searchmatcards', component: SearchmatcardsComponent },
      { path: 'pin', component: PinComponent },
      { path: 'labelnote/:label', component: LabelnoteComponent },
      { path: 'askquestion/:id', component: AskQuestionComponent },
      { path: 'opendialogcart', component: DialogcartComponent },
      

    ]

  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
