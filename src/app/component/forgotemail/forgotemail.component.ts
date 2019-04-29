import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-forgotemail',
  templateUrl: './forgotemail.component.html',
  styleUrls: ['./forgotemail.component.scss']
})
export class ForgotemailComponent implements OnInit {
  firstName =new FormControl('', [Validators.required,Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]);
  lastName =new FormControl('', [Validators.required,Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]);
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
  constructor() { }

  ngOnInit() {
  }

}
