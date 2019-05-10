import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient: HttpClient) { }

  postDataForEncoded(path,body){
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.httpclient.post(environment.baseUrl+path,body,httpAuthOptions);
  }

  postRequest(path,body){
    return this.httpclient.post(environment.baseUrl+path,body,{});
  }
  getEncodData(body) {
    const formBody = [];
    for (const property in body) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(body[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  post(path, body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
      })
    };
    console.log('token...............',localStorage.getItem('token')
    );
    return this.httpclient.post(environment.baseUrl + path,this.getEncodData(body), httpOptions);
  }
}
