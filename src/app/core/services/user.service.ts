import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }

  postRequest(url,data){
    return this.http.post(this.baseUrl + url, data);
  }
}
