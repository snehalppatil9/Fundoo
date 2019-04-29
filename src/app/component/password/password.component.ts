import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  //title ='FundooNotes';
  hide = true;
  password = new FormControl('', [Validators.required, Validators.minLength(8),Validators.pattern("")]);
  passValidation(){
    return this.password.hasError('required') ? 'Password is required' :
      this.password.hasError('minLength') ? 'Password must be at least 5 characters long' : 
      this.password.hasError('pattern') ? 'Your password must contain at least one uppercase, one lowercase, and one number':'';
  }
  constructor() { }

  ngOnInit() {
  }

}
