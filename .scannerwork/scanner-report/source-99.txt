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
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }
  canActivate() {
    if (localStorage.getItem('token')) {
        return true;
    }
    this.router.navigate(['/login']);
    return false;
}
}