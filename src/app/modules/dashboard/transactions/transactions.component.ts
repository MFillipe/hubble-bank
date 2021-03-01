import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Plan } from 'src/app/shared/interfaces/plan.interfaces';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PlansService } from 'src/app/shared/services/plans.service';

import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private plansService: PlansService,
    private transactionsService: TransactionsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  transactionForm: FormGroup;

  isLoading: boolean;

  isError: boolean;

  plans: Plan[];

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      destinyAccount: ['', [Validators.required, Validators.minLength(3)]],
      date: ['', [Validators.required]],
      description: ['', [Validators.required]],
      value: ['', [Validators.required]],
      // Its a select of plans ids
      accountPlan: ['', [Validators.required]],
    });

    this.getPlans();
  }

  onSubmit() {
    if (this.transactionForm.invalid) {
      this.validateAllFormFields();

      return;
    }

    this.createTransaction();
  }

  validateAllFormFields() {
    Object.keys(this.transactionForm.controls).forEach((field) =>
      this.transactionForm.get(field).markAllAsTouched()
    );
  }

  showError(elementName: string) {
    if (!this.transactionForm.get(elementName)) return false;
    return (
      this.transactionForm.get(elementName)?.invalid &&
      this.transactionForm.get(elementName).touched
    );
  }

  getPlans() {
    this.plansService.getAll().subscribe((response) => {
      this.plans = response.map((plan) => {
        return {
          id: plan.id,
          description: plan.descricao,
          login: plan.login,
          moveType: plan.tipoMovimento,
          pattern: plan.padrao,
        };
      });
    });
  }

  createTransaction() {
    const {
      destinyAccount,
      date,
      description,
      value,
      accountPlan,
    } = this.transactionForm.value;

    const { login, creditAccountId } = this.authService.getUser();

    this.transactionsService
      .create({
        account: creditAccountId,
        accountPlan,
        date,
        description,
        destinyAccount,
        login,
        value,
      })
      .subscribe(
        (response) => {
          this.router.navigate(['dashboard']);
          this.toastr.success('Success', 'Successfully logged in!');
        },
        (error) => this.toastr.error('Error', error)
      );
  }
}
