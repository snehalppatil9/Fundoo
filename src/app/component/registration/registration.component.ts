/******************************************************************************
 *  Execution       :   1. default node         cmd> registration.component.ts 
 *
 *  Purpose         : To register for Fundoo Account  
 * 
 *  @file           : registration.component.ts
 *  @author         : Snehal Patil
 *  @version        : 1.0
 *  @since          : 22-04-2019
 *
 ******************************************************************************/
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { UserModel } from '../../core/model/user-model';
import { UserService } from '../../core/services/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  register: UserModel = new UserModel();
  service: any;
  //title='FundooNotes';
  hide = true;
  firstName = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]);
  lastName = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]);
  email = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])
  /*
  * validation for first Name
  */
  firstValidation() {
    return this.firstName.hasError('required') ? 'Enter an FirstName' :
      this.firstName.hasError('minLength') ? 'firstName must be at least 4 characters long' :
        this.firstName.hasError('maxLength') ? 'firstName must 20 characters long' :
          this.firstName.hasError('pattern') ? 'firstName contain letters' : '';
  }
  /*
  * validation for Last Name
  */
  lastValidation() {
    return this.lastName.hasError('required') ? 'Enter an FirstName' :
      this.lastName.hasError('minLength') ? 'lastName must be at least 4 characters long' :
        this.lastName.hasError('maxLength') ? 'lastName must 20 characters long' :
          this.lastName.hasError('pattern') ? 'lastName contain letters' : '';
  }
  /*
  * validation for UserName
  */
 emailValidation() {
    return this.email.hasError('required') ? 'Enter an userName' :
      this.email.hasError('minLength') ? 'userName must be at least 4 characters long' :
        this.email.hasError('maxLength') ? 'userName must 20 characters long' :
          this.email.hasError('pattern') ? 'Its not a correct way to write userName' : '';
  }
  /*
  * validation for password
  */
  password = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")]);
  passValidation() {
    return this.password.hasError('required') ? 'Password is required' :
      this.password.hasError('minLength') ? 'Password must be at least 5 characters long' :
        this.password.hasError('pattern') ? 'Your password must contain at least one uppercase, one lowercase, and one number' : '';
  }
  /*
  * validation for confirm password
  */
  cpassword = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")]);
  cpassValidation() {
    return this.cpassword.hasError('required') ? 'Password is required' :
      this.cpassword.hasError('minLength') ? 'Password must be at least 5 characters long' :
        this.cpassword.hasError('pattern') ? 'Your password must contain at least one uppercase, one lowercase, and one number' : '';
  }
  advanced = new FormControl('', [Validators.required]);
  advancedValidation() {
    return this.advanced.hasError('required') ? 'choose advance or basic button' :'';
  }
  basic = new FormControl('', [Validators.required]);
  basicValidation() {
    return this.basic.hasError('required') ? 'choose advance or basic button' :'';
  }
  /*
  * validation for advanced and basic toggle button
  */
  currentLesson: string;
  classes = [
    {
      name: 'string',
      level: 'string',
      code: 'number',
      currentLesson: '1'
    }]

  constructor(private UserService: UserService, private snackbar: MatSnackBar, private router: Router) {
    this.currentLesson = this.classes[0].currentLesson
  }

  ngOnInit() {
  }
  submit() {
    console.log('console@@@@@@@@@@@@@@@@@', this.register);
    try {
     //if(this.firstName.value == '' || this.lastName.value == '' || this.email.value == '' || this.service.value=='' || this.password.value == '' || this.cpassword.value == '') throw "Fields are missing"
      if (this.password.value == this.cpassword.value){
      console.log("password and confirmpassword does not match");
      this.UserService.userRegister(this.register).subscribe(
        data => {
          console.log("Response================>", this.register);
          console.log("Response================>", data);
          this.snackbar.open('Register successfully......!', 'Continue with Login..!', { duration: 1000 });
          this.router.navigateByUrl('login');
        },
        error => {
          this.snackbar.open('Register not successfully......!', 'Stop...!', { duration: 3000 });
          console.log("Error something wrong: ", error)
        });
      }
      else{
        console.log("")
      }
    } catch (error) {
      this.snackbar.open('error8888888888888888888888888888888', "", { duration: 3000 });
    }
  }
}
