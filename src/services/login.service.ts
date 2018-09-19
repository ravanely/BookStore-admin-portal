import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  sendCredential(username: string, password: string) {
    let url = 'http://localhost:8181/token';
    let encodedCredentials = btoa(username + ":" + password);
    let basicHeader = 'Basic ' + encodedCredentials;
    let headers = new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : basicHeader
    });

    return this.http.get(url, {headers: headers});

  }
}
