import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { LoginResponse } from './loginResponse.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router, private http: HttpClient) {}

  API_URL = environment.API_URL;

  execute(user: string, password: string) {
    return this.http.post<LoginResponse>(`${this.API_URL}/login`, {
      usuario: user,
      senha: password,
    });
  }
}
