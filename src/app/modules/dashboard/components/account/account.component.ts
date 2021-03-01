import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.sass']
})
export class AccountComponent implements OnInit {

  totalBalance = '10.000,00';
  totalTransactions = '2.120,21';

  constructor() { }

  ngOnInit(): void {
  }

}
