import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-account',
  templateUrl: './credit-account.component.html',
  styleUrls: ['./credit-account.component.sass']
})
export class CreditAccountComponent implements OnInit {

  currentBill = '120,88';
  availableLimit = '9.120,88';

  constructor() { }

  ngOnInit(): void {
  }

}
