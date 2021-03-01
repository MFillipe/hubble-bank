import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { Plan } from 'src/app/shared/interfaces/plan.interfaces';
import { PlansService } from 'src/app/shared/services/plans.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private plansService: PlansService
  ) {}

  isLoading: boolean;
  isError: boolean;

  plans: Plan[];

  getPlans() {
    this.isLoading = true;
    this.isError = false;

    this.plansService
      .getAll()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (response) => {
          this.plans = response.map((plan) => {
            return {
              id: plan.id,
              description: plan.descricao,
              login: plan.login,
              moveType: plan.tipoMovimento,
              pattern: plan.padrao,
            };
          });
        },
        (error) => {
          this.toastr.error('Error', error);
          this.isError = true;
        }
      );
  }
  ngOnInit() {
    this.getPlans();
  }
}
