import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import User from '../../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    let httpOptions = {
      headers: headers,
    };

    return this.http.post<User>(`${this.API_URL}/usuarios`, user, httpOptions);
  }

  
}
