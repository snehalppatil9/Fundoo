/******************************************************************************
 *  Execution       :   1. default node         cmd> reset.component.ts 
 *
 *  Purpose         : To reset password of your Fundoo Account  
 * 
 *  @file           : reset.component.ts
 *  @author         : Snehal Patil
 *  @version        : 1.0
 *  @since          : 22-04-2019
 *
 ******************************************************************************/
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  
  //title='FundooNotes';
  hide=true;
  /*
  * validation for password
  */
  password = new FormControl('', [Validators.required, Validators.minLength(8),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")]);
  passValidation(){
    return this.password.hasError('required') ? 'Password is required' :
      this.password.hasError('minLength') ? 'Password must be at least 5 characters long' : 
      this.password.hasError('pattern') ? 'Your password must contain at least one uppercase, one lowercase, and one number':'';
  }
  /*
  * validation for confirm password
  */
  cpassword = new FormControl('', [Validators.required, Validators.minLength(8),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")]);
  cpassValidation(){
    return this.password.hasError('required') ? 'Password is required' :
      this.password.hasError('minLength') ? 'Password must be at least 5 characters long' : 
      this.password.hasError('pattern') ? 'Your password must contain at least one uppercase, one lowercase, and one number':'';
  }
  model:any;
  constructor(private UserService: UserService, private router: Router,private snackbar : MatSnackBar,private activeRoute:ActivatedRoute) { }
  accessToken=this.activeRoute.snapshot.paramMap.get('token');
  ngOnInit() {
    //console.log(this.accessToken);
    localStorage.setItem('token',this.accessToken)
  }
  
  reset(){
   // this.token=this.router.snapshot.paramMap.get('access-token')
    console.log("model----",this.model);
    try{
      if(this.password.value == '') throw "Password Required........."
      this.model = {
      "newPassword":this.password.value,
      }
      var data=new FormData();
      data.append('newPassword',this.password.value);
      this.UserService.post('user/reset-password',this.model).subscribe(
      data => {
      console.log("Response",data);
      this.snackbar.open('password reset Successfully', 'End now', {duration: 1000});
      this.router.navigateByUrl('login');
    },
    error=> {
      this.snackbar.open('Not Reset password', 'End now', {duration: 3000});
      console.log("error: ",error)
    });
    }catch(error){
      this.snackbar.open('error',"", {duration: 3000});
    }
  }

}
