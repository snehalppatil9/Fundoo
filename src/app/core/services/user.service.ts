import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl
  postRequest(url,data){
    return this.http.post(this.baseUrl + url, data);
  }
  constructor(private http: HttpClient) { }
  /*
   * @description this method is for convert the data into encoded form
  */
  getEncodData(data) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  post(url, data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
      })
    };
    console.log('token...............',localStorage.getItem('token')
    );
    return this.http.post(this.baseUrl + url,this.getEncodData(data), httpOptions);
  }

}
