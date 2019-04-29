import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  //title='FundooNotes';
  hide=true;
  firstName =new FormControl('', [Validators.required,Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]);
  lastName =new FormControl('', [Validators.required,Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]);
  userName=new FormControl('',[Validators.required,Validators.minLength(4), Validators.maxLength(25),Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])
  firstValidation() {
    return this.firstName.hasError('required') ? 'Enter an FirstName' :
      this.firstName.hasError('minLength') ? 'firstName must be at least 4 characters long' : 
      this.firstName.hasError('maxLength') ? 'firstName must 20 characters long' : 
      this.firstName.hasError('pattern') ? 'firstName contain letters':'';
  }
  lastValidation(){
    return this.lastName.hasError('required') ? 'Enter an FirstName' :
    this.lastName.hasError('minLength') ? 'lastName must be at least 4 characters long' : 
    this.lastName.hasError('maxLength') ? 'lastName must 20 characters long' : 
    this.lastName.hasError('pattern') ? 'lastName contain letters':'';
  }
  usernameValidation(){
    return this.userName.hasError('required') ? 'Enter an userName' :
    this.userName.hasError('minLength') ? 'userName must be at least 4 characters long' : 
    this.userName.hasError('maxLength') ? 'userName must 20 characters long' : 
    this.userName.hasError('pattern') ? 'Its not a correct way to write userName':'';
  }
  password = new FormControl('', [Validators.required, Validators.minLength(8),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")]);
  passValidation(){
    return this.password.hasError('required') ? 'Password is required' :
      this.password.hasError('minLength') ? 'Password must be at least 5 characters long' : 
      this.password.hasError('pattern') ? 'Your password must contain at least one uppercase, one lowercase, and one number':'';
  }
  cpassword = new FormControl('', [Validators.required, Validators.minLength(8),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")]);
  cpassValidation(){
    return this.password.hasError('required') ? 'Password is required' :
      this.password.hasError('minLength') ? 'Password must be at least 5 characters long' : 
      this.password.hasError('pattern') ? 'Your password must contain at least one uppercase, one lowercase, and one number':'';
  }
  currentLesson:string;

  classes = [
{
  name: 'string',
  level: 'string',
  code: 'number',
  currentLesson: '1'
}]

constructor(){
  this.currentLesson=this.classes[0].currentLesson
}

  ngOnInit() {
  }

}
