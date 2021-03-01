import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from 'src/app/shared/interfaces/user.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  createUser(user: User) {
    let startUser = new HttpHeaders();
    let httpOptions = {
      headers: startUser,
    };

    return this.http.post<User>(`${this.API_URL}/usuarios`, user, httpOptions);
  }
}
