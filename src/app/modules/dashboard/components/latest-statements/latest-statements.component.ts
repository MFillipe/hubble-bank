import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-statements',
  templateUrl: './latest-statements.component.html',
  styleUrls: ['./latest-statements.component.sass']
})
export class LatestStatementsComponent implements OnInit {

  statementeAccount = 'débito';
  statementsDiscription = 'GamaAcademy';
  statementsTotal = '298,55';
  statementsDate = '24 de Jan.';

  constructor() { }

  ngOnInit(): void {
  }

}
