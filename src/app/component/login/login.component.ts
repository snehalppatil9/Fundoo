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
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserModel } from '../../core/model/user-model';
import { UserService } from '../../core/services/user/user.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NotesService } from 'src/app/core/services/notes/notes.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: UserModel = new UserModel();
  @Input() dataId;
  service: any;
  hide = true;
  destroy$: Subject<boolean> = new Subject<boolean>();
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
  password = new FormControl('', [Validators.required]);
  /*
  * validation for password
  */
  passValidation() {
    return this.password.hasError('required') ? 'Password is required' : '';
    // this.password.hasError('minLength') ? 'Password must be at least 5 characters long' : '';
  }
  constructor(private noteService: NotesService, private UserService: UserService, private route: ActivatedRoute, private snackbar: MatSnackBar, private router: Router) {

  }
  id = localStorage.getItem("Id");
  cardId = localStorage.getItem("cardId")
  ngOnInit() {
    this.getService();
    if (this.id != null) {
      this.router.navigateByUrl('/addnote');
    }
    if (this.cardId != null) {
      this.getCartDetails(this.cardId);
    }
  }
  serviceData: '';
  getService() {
    this.noteService.getService()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.serviceData = response["data"].data;
        console.log("get service data in login ===============>", this.serviceData);
       }, (error) => {
      });
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
  submit() {
    //console.log('console@@@@@@@@@@@@@@@@@', this.login);
    try {
      this.UserService.userLogin(this.login)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          data => {
            // console.log('Response Login Data.......', this.login);
            console.log('Response data............', data);
            localStorage.setItem("token", data["id"]);
            localStorage.setItem("Id", data["userId"]);
            localStorage.setItem("Firstname", data["firstName"]);
            localStorage.setItem("Lastname", data["lastName"]);
            localStorage.setItem("Email", data["email"]);
            localStorage.setItem("userImage", data["imageUrl"]);
            //localStorage.clear();
            this.snackbar.open('Login successfully......!', 'Continue with fundoo account..!', { duration: 1000 });
            this.router.navigateByUrl('addnote');
          },
          error => {
            this.snackbar.open('Login not successfully......!', 'Stop...!', { duration: 3000 });
            console.log('Error something went wrong: ', error);
          });
    } catch (error) {
      this.snackbar.open('error occurs in catch block.................', '', { duration: 3000 });
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}