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
import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { UserModel } from '../../core/model/user-model';
import { UserService } from '../../core/services/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Service } from '../../core/model/user-model'
import { NotesService } from 'src/app/core/services/notes/notes.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  register: UserModel = new UserModel();
  Service: Service[] = [];
  service: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  hide = true;
  firstName = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]);
  lastName = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]);
  email = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])
  /*
  *  @Description  : validation for first Name
  */
  firstValidation() {
    return this.firstName.hasError('required') ? 'Enter an FirstName' :
      this.firstName.hasError('minLength') ? 'firstName must be at least 4 characters long' :
        this.firstName.hasError('maxLength') ? 'firstName must 20 characters long' :
          this.firstName.hasError('pattern') ? 'firstName contain letters' : '';
  }
  /*
  *  @Description  : validation for Last Name
  */
  lastValidation() {
    return this.lastName.hasError('required') ? 'Enter an FirstName' :
      this.lastName.hasError('minLength') ? 'lastName must be at least 4 characters long' :
        this.lastName.hasError('maxLength') ? 'lastName must 20 characters long' :
          this.lastName.hasError('pattern') ? 'lastName contain letters' : '';
  }
  /*
  *  @Description  : validation for UserName
  */
  emailValidation() {
    return this.email.hasError('required') ? 'Enter an userName' :
      this.email.hasError('minLength') ? 'userName must be at least 4 characters long' :
        this.email.hasError('maxLength') ? 'userName must 20 characters long' :
          this.email.hasError('pattern') ? 'Its not a correct way to write userName' : '';
  }
  /*
  *  @Description  : validation for password
  */
  password = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")]);
  passValidation() {
    return this.password.hasError('required') ? 'Password is required' :
      this.password.hasError('minLength') ? 'Password must be at least 5 characters long' :
        this.password.hasError('pattern') ? 'Your password must contain at least one uppercase, one lowercase, and one number' : '';
  }
  /*
  *  @Description  : validation for confirm password
  */
  cpassword = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")]);
  cpassValidation() {
    return this.cpassword.hasError('required') ? 'Password is required' :
      this.cpassword.hasError('minLength') ? 'Password must be at least 5 characters long' :
        this.cpassword.hasError('pattern') ? 'Your password must contain at least one uppercase, one lowercase, and one number' : '';
  }
  constructor(private UserService: UserService, private route: ActivatedRoute, private noteService: NotesService, private snackbar: MatSnackBar, private router: Router) {

  }
  cardId = localStorage.getItem("cardId") 
  ngOnInit() {
    this.getService();
    this.getCartDetails(this.cardId);
  }
  /*
  * @Description  :  Sending data to database
  */
  submit(cartId) {
    console.log("cardId in registration submit button=========>",cartId);
    var body = {
      "firstName": this.firstName.value,
      "lastName": this.lastName.value,
      "service": this.service["product"].name,
      "password": this.password.value,
      "email": this.email.value,
      "cardId": cartId
    }
    console.log('console body registration=========>', body);
    try {
      //if(this.firstName.value == '' || this.lastName.value == '' || this.email.value == '' || this.service.value=='' || this.password.value == '' || this.cpassword.value == '') throw "Fields are missing"
      if (this.password.value === this.cpassword.value) {
        console.log("password and confirmpassword match");
        this.UserService.userRegister(body)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            data => {
              console.log("Response================>", this.register);
              console.log("Response================>", data);
              this.snackbar.open('Register successfully......!', 'Continue with Login..!', { duration: 1000 });
              this.router.navigateByUrl('login')
            },
            error => {
              this.snackbar.open(error.error.error.message, 'Stop...!', { duration: 3000 });
              console.log("Error something wrong: ", error)
            });
      }
      else {
        this.snackbar.open('Register not successfully......!', 'Stop...!', { duration: 3000 });
        console.log("Error something wrong: ")
      }
    } catch (error) {
      this.snackbar.open(error, "", { duration: 3000 });
    }
  }
  productData = '';
  getCartDetails(cardId) {
    this.noteService.getCartDetails(cardId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.service = response["data"];
        console.log("get registration note data for sevice ===============>", this.service);
        this.productData = this.service["product"];
        console.log("get registration product data for sevice ===============>", this.productData);
      }, (error) => {
      });
  }
  serviceData: '';
  getService() {
    this.noteService.getService()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.serviceData = response["data"].data;
        console.log("get product Purchase note ===============>", this.serviceData);

      }, (error) => {
      });
  }
  signIn(dataId){
    this.router.navigateByUrl('login/'+dataId);
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
