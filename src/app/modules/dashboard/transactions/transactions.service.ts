import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

  API_URL = environment.API_URL;

  create({
    account,
    destinyAccount,
    date,
    description,
    login,
    accountPlan,
    value,
  }) {
    return this.http.post(`${this.API_URL}/lancamentos`, {
      conta: account,
      contaDestino: destinyAccount,
      data: date,
      descricao: description,
      login,
      planoConta: accountPlan,
      valor: value,
    });
  }
}
