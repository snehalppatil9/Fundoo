import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importing the animation package
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importing LoginComponent,RegistrationComponent,ForgotComponent,ResetComponent,PasswordComponent components
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { ResetComponent } from './component/reset/reset.component';
import { PasswordComponent } from './component/password/password.component'; 
import { Forgot1Component } from './component/forgot1/forgot1.component';
//importing angular material 
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
/*API reference for Angular button and checkbox
API reference for Angular Material card */
import {MatButtonModule,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule,MatListModule, MatSidenavModule} from '@angular/material';
// API reference for Angular Material form-field 
import {MatFormFieldModule} from '@angular/material/form-field';
//add FlexLayoutModule into your AppModul
import { FlexLayoutModule } from '@angular/flex-layout';
//API reference for Angular Material button-toggle
import {MatButtonToggleModule} from '@angular/material/button-toggle';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotComponent,
    ResetComponent,
    PasswordComponent,
    Forgot1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatMenuModule, 
    MatIconModule,
    MatListModule, 
    MatSidenavModule,
    FlexLayoutModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
