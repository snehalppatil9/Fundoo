/******************************************************************************
 *  Execution       :   1. default node         cmd> auth-guard.service.ts
 *
 *  Purpose         : To block some routes
 *
 *  @file           : auth-guard.service.ts
 *  @author         : Snehal Patil
 *  @version        : 1.0
 *  @since          : 28-04-2019
 *
 ******************************************************************************/
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor() { }
  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('token');
  //   // Check whether the token is expired and return
  //   // true or false
  //   return !this.jwtHelper.isTokenExpired(token);
   
  // }
  // canActivate() {
  //   if (!this.auth.isAuthenticated()) {
  //     return true;
  //   }

  //   this.router.navigate(['/login']);
  //   return false;
  // }
  canActivate() {
    if (localStorage.getItem('token')) {
        return true;
    }
    window.location.href="/login";
    return false;
}
}