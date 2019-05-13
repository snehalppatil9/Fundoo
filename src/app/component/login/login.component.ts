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
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserModel } from '../../core/model/user-model';
import { UserService } from '../../core/services/user/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: UserModel = new UserModel();
  service: any;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]);
  //  title = 'FundooNotes';
  /*
  * validation for email
  */
  emailValidation() {
    return this.email.hasError('required') ? 'Enter an Emailid' :
      this.email.hasError('email') ? 'Password must be at least 8 characters long' :
        this.email.hasError('pattern') ? 'Its not a correct way to write email' : '';
  }
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  /*
  * validation for password
  */
  passValidation() {
    return this.password.hasError('required') ? 'Password is required' :
      this.password.hasError('minLength') ? 'Password must be at least 5 characters long' : '';
  }
  constructor(private UserService: UserService, private snackbar: MatSnackBar, private router: Router) {

  }

  ngOnInit() {
  }
  submit() {
    //console.log('console@@@@@@@@@@@@@@@@@', this.login);
    try {
      this.UserService.userLogin(this.login).subscribe(
        data => {
          // console.log('Response Login Data.......', this.login);
          // console.log('Response data............', data);
          localStorage.setItem('token',data['id']);
          //localStorage.clear();
          this.snackbar.open('Login successfully......!', 'Continue with fundoo account..!', { duration: 1000 });
          this.router.navigateByUrl('navbar');
        },
        error => {
          this.snackbar.open('Login not successfully......!', 'Stop...!', { duration: 3000 });
          console.log('Error something went wrong: ', error);
        });
    } catch (error) {
      this.snackbar.open('error occurs in catch block.................', '', { duration: 3000 });
    }
  }
}