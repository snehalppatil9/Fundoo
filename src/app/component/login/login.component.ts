/******************************************************************************
 *  Execution       :   1. default node         cmd> login.component.ts 
 *
 *  Purpose         : To login to Fundoo Account  
 * 
 *  @file           : login.component.ts
 *  @author         : Snehal Patil
 *  @version        : 1.0
 *  @since          : 22-04-2019
 *
 ******************************************************************************/
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { UserModel } from '../../core/model/user-model';
import { UserService } from '../../core/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: UserModel = new UserModel();
  service: any;
  email = new FormControl('', [Validators.required, Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]);
  //title = 'FundooNotes';
  /*
  * validation for email
  */
  emailValidation() {
    return this.email.hasError('required') ? 'Enter an Email or Phone' :
      this.email.hasError('email') ? 'Password must be at least 8 characters long' : 
      this.email.hasError('pattern') ? 'Its not a correct way to write email':'';
  }
  hide = true;
  password = new FormControl('', [Validators.required, Validators.minLength(8),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")]);
  /*
  * validation for password
  */
  passValidation(){
    return this.password.hasError('required') ? 'Password is required' :
      this.password.hasError('minLength') ? 'Password must be at least 5 characters long' : 
      this.password.hasError('pattern') ? 'Your password must contain at least one uppercase, one lowercase, and one number':'';
  }
  constructor(private UserService: UserService, private snackbar: MatSnackBar, private router: Router) {

  }

  ngOnInit() {
  }
  submit() {
    console.log('console@@@@@@@@@@@@@@@@@', this.login);
    try {
        this.UserService.postRequest('user/login', this.login).subscribe(
        data => {
          console.log("Response================>", this.login);
          console.log("Response================>", data);
          this.snackbar.open('Login successfully......!', 'Continue with fundoo account..!', { duration: 1000 });
          this.router.navigateByUrl('register');
        },
        error => {
          this.snackbar.open('Login not successfully......!', 'Stop...!', { duration: 3000 });
          console.log("Error something wrong: ", error)
        });
      } catch (error) {
      this.snackbar.open('error occurs in catch block.................', "", { duration: 3000 });
    }
  }

}