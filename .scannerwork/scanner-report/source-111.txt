import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import { HttpService } from '../../services/http/http.service'

@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl
  constructor(private httpService : HttpService) { }
  /*
   * @description this method is for convert the data into encoded form
  */
  userRegister(body) {
    return this.httpService.postRequest("user/userSignUp", body);
  }
  userLogin(body){
    return this.httpService.postRequest("user/login", body);
  }
  userForgot(body){
    return this.httpService.postRequest("user/reset", body);
  }
  userReset(body){
    return this.httpService.postReset("user/reset-password",body);
  }
}