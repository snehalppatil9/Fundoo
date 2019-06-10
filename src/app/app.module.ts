/******************************************************************************
 *  Execution       :   1. default node         cmd> app.module.ts
 *
 *  Purpose         : To import all the required files
 *
 *  @file           : reset.component.ts
 *  @author         : Snehal Patil
 *  @version        : 1.0
 *  @since          : 22-04-2019
 *
 ******************************************************************************/
import { NgModule } from '@angular/core';
// importing the animation package
import { AppComponent } from './app.component';
// importing LoginComponent,RegistrationComponent,ForgotComponent,ResetComponent,PasswordComponent components
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { ResetComponent } from './component/reset/reset.component';
// importing angular material 
import { NavbarComponent } from './component/navbar/navbar.component';
import { NoteComponent } from './component/note/note.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { LabelComponent } from './component/label/label.component';
import { ArchieveComponent } from './component/archieve/archieve.component';
import { TrashComponent } from './component/trash/trash.component';
import { IconComponent } from './component/icon/icon.component';
import { AllnoteComponent } from './component/allnote/allnote.component';
import { PipePipe } from './pipe/pipe.pipe';
import { SearchNoteComponent } from './component/search-note/search-note.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { CollaboratorComponent } from './component/collaborator/collaborator.component';
import { ImageCropComponent } from './component/image-crop/image-crop.component';
import { SearchmatcardsComponent } from './component/searchmatcards/searchmatcards.component';
import { ShowLabelnotesComponent } from './component/show-labelnotes/show-labelnotes.component';
import { PinComponent }  from './component/pin/pin.component';
import { LabelnoteComponent } from './component/labelnote/labelnote.component';
import { AngularMaterial } from './angularmaterial';
import { FilterPipe } from './filterpipe/filter.pipe';
import { AskQuestionComponent } from './component/ask-question/ask-question.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotComponent,
    ResetComponent,
    NavbarComponent,
    NoteComponent,
    ReminderComponent,
    LabelComponent,
    ArchieveComponent,
    TrashComponent,
    IconComponent,
    AllnoteComponent,
    PipePipe,
    FilterPipe,
    SearchNoteComponent,
    DialogComponent,
    CollaboratorComponent,
    ImageCropComponent,
    SearchmatcardsComponent,
    ShowLabelnotesComponent,
    PinComponent,
    LabelnoteComponent,
    AskQuestionComponent,
   
  ],
  imports: [
     AngularMaterial,
     
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
