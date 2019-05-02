import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl
  postRequest(url,data){
    return this.http.post(this.baseUrl + url, data);
  }
  isAuthenticated() {
   return !!localStorage.getItem('id')
  }
  private loggedInStatus = false
  constructor(private http: HttpClient) { }
  setLoggedIn(value:boolean){
    this.loggedInStatus = value;
  }
  get isLoggedIn(){
    return this.loggedInStatus
  }
  /**
   * @description this method is for convert the data into encoded form
   * @param toConvert  
   */
  getEncodData(toConvert) {
    const formBody = [];
    for (const property in toConvert) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(toConvert[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  getRequest(url) {
    return this.http.get(this.baseUrl + url);
  }
  
  post(url, data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
      })
    };
    console.log('token in s',localStorage.getItem('token')
    );
    return this.http.post(this.baseUrl + url,this.getEncodData(data), httpOptions);
  }

}
