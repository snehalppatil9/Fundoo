import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-forgot1',
  templateUrl: './forgot1.component.html',
  styleUrls: ['./forgot1.component.scss']
})
export class Forgot1Component implements OnInit {
  hide=true;
  password = new FormControl('', Validators.compose([
    Validators.minLength(5),
    Validators.required,
    //this is for the letters (both uppercase and lowercase) and numbers validation
    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') 
 ]));
 passValidation(){
  return this.password.hasError('required') ? 'Enter a Password' :
  this.password.hasError('password') ? 'Password must be at least 8 characters long' : 
  this.password.hasError('pattern') ? 'Your password must contain at least one uppercase, one lowercase, and one number':'';
 }
  constructor() { }

  ngOnInit() {
  }

}
