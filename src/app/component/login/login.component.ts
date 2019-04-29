import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]);
  //title = 'FundooNotes';

  emailValidation() {
    return this.email.hasError('required') ? 'Enter an Email or Phone' :
      this.email.hasError('email') ? 'Not a valid email' : 
      this.email.hasError('pattern') ? 'Its not a correct way to write email':'';
  }
  constructor() {

  }

  ngOnInit() {
  }

}