/******************************************************************************
 *  Execution       :   1. default node         cmd> forgot.component.ts 
 *
 *  Purpose         : To forgot email of your Fundoo Account  
 * 
 *  @file           : forgot.component.ts
 *  @author         : Snehal Patil
 *  @version        : 1.0
 *  @since          : 22-04-2019
 *
 ******************************************************************************/
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  model: any;
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
  constructor(private UserService: UserService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }
  submit(){
    console.log("model----",this.model);
    try{
      if( this.email.value == '') throw "email required........."
      this.model = {
      "email":this.email.value
      }
      this.UserService.postRequest('user/reset',this.model).subscribe(
      data => {
      console.log("Response",data);
     // localStorage.setItem('access-token',data.token)
      this.snackbar.open('check ur mail..', 'Send Mail Sucessfully', {duration: 1000});
      },
    error=> {
      this.snackbar.open('invalid email', 'Send mail Unsucessfully', {duration: 3000});
      console.log("error: ",error)
    });
    }catch(error){
      this.snackbar.open('error',"", {duration: 3000});
    }
  }
}
