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
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
