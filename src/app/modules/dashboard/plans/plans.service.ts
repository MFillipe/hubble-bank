import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

import { PlansResponse } from './plansResponse.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  API_URL = environment.API_URL;

  getAll() {
    const user = this.authService.getUser();
    return this.http.get<PlansResponse[]>(
      `${this.API_URL}/lancamentos/planos-conta?login=${user.login}`
    );
  }
}
