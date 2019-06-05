import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient: HttpClient) { }
  postDataForEncoded(path, body) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.httpclient.post(environment.baseUrl + path, body, httpAuthOptions);
  }
  postRequest(path, body) {
    return this.httpclient.post(environment.baseUrl + path, body, {});
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
  postReset(path, body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
      })
    };
    console.log('token...............', localStorage.getItem('token'));
    return this.httpclient.post(environment.baseUrl + path, this.getEncodData(body), httpOptions);
  }
  postAddNote(path, body) {
    //console.log(body);
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
      })
    };
    console.log('token ==================>', localStorage.getItem('token'));
    return this.httpclient.post(environment.baseUrl + path, body, httpOptions);
  }
  getData(path) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.httpclient.get(environment.baseUrl + path, httpOptions);
  }
  postData(path, body) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.httpclient.post(environment.baseUrl + path, body, httpAuthOptions);
  }
  postDataForShowLabel(path) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.httpclient.get(environment.baseUrl + path, httpAuthOptions);
  }
  /**
  * @Descrption : Delete Label
  **/
  postDataForDeleteLabel(path) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.httpclient.delete(environment.baseUrl + path, httpAuthOptions);
  }
  /**
   * @Descrption : UpdateNote
   **/
  postDataForUpdateNote(path, body) {
    console.log(body);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
      })
    };
    console.log('token ==================>', localStorage.getItem('token'));
    return this.httpclient.post(environment.baseUrl + path, this.getEncodData(body), httpOptions);
  }
  /**
   * @Descrption : Collabarator
   **/
  postDataForSearchUser(path, body) {
    console.log(body);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.httpclient.post(environment.baseUrl + path, body, httpOptions);
  }
updateProfile(path,body){
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': localStorage.getItem('token')
    })
  };
  return this.httpclient.post(environment.baseUrl + path, body,httpOptions);
}
postDataforPin(path, body) {
  let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': localStorage.getItem('token')
    })
  };
  return this.httpclient.post(environment.baseUrl + path, body, httpOptions);
}

deleteData(path){
  let httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    })
  }
  return this.httpclient.delete(environment.baseUrl+path,httpOptions);
}

}



