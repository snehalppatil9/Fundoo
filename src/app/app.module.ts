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
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importing the animation package
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// importing LoginComponent,RegistrationComponent,ForgotComponent,ResetComponent,PasswordComponent components
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { ResetComponent } from './component/reset/reset.component';
// importing angular material 
import { MatAutocompleteModule } from '@angular/material/autocomplete';
/*API reference for Angular button and checkbox
API reference for Angular Material card */
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';

//import { AllnoteComponent } from '../app/component/allnote/allnote.component';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule
} from '@angular/material';
//  API reference for Angular Material form-field 
import { MatFormFieldModule } from '@angular/material/form-field';
// add FlexLayoutModule into your AppModule
import { FlexLayoutModule } from '@angular/flex-layout';
// API reference for Angular Material button-toggle
import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import {FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NoteComponent } from './component/note/note.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { LabelComponent } from './component/label/label.component';
import { ArchieveComponent } from './component/archieve/archieve.component';
import { TrashComponent } from './component/trash/trash.component';
import { IconComponent } from './component/icon/icon.component';
import { AllnoteComponent } from './component/allnote/allnote.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PipePipe } from './pipe/pipe.pipe';
import { FilterpipePipe } from './filterpipe/filterpipe.pipe';
import { SearchNoteComponent } from './component/search-note/search-note.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { MatSelectModule } from '@angular/material';
// import { MatDatepickerModule } from 'saturn-datepicker';
import {MatChipsModule} from '@angular/material/chips';
import { DialogComponent } from './component/dialog/dialog.component';
import { CollaboratorComponent } from './component/collaborator/collaborator.component';
import { ImageCropComponent } from './component/image-crop/image-crop.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SearchmatcardsComponent } from './component/searchmatcards/searchmatcards.component';
import { ShowLabelnotesComponent } from './component/show-labelnotes/show-labelnotes.component';
import { PinComponent }  from './component/pin/pin.component'
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
    FilterpipePipe,
    SearchNoteComponent,
    DialogComponent,
    CollaboratorComponent,
    ImageCropComponent,
    SearchmatcardsComponent,
    ShowLabelnotesComponent,
    PinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    CommonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatChipsModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
