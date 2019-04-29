import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  //title='FundooNotes';
  hide=true;
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
  constructor() { }

  ngOnInit() {
  }

}
