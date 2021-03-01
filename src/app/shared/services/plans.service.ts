import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { PlansResponse } from '../interfaces/plansResponse.interfaces';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  API_URL = environment.API_URL;

  getAll() {
    const { login } = this.authService.getUser();

    return this.http.get<PlansResponse[]>(
      `${this.API_URL}/lancamentos/planos-conta?login=${login}`
    );
  }
}
