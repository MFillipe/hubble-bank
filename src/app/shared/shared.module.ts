import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComplexityComponent } from './components/complexity/complexity.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { DigitalCreditAccountComponent } from './components/digital-credit-account/digital-credit-account.component';
import { SimpleLifeComponent } from './components/simple-life/simple-life.component';
import { ZeroAnnuityComponent } from './components/zero-annuity/zero-annuity.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    DigitalCreditAccountComponent,
    ZeroAnnuityComponent,
    ComplexityComponent,
    SimpleLifeComponent,
    CreateAccountComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    DigitalCreditAccountComponent,
    ZeroAnnuityComponent,
    ComplexityComponent,
    SimpleLifeComponent,
    CreateAccountComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class SharedModule {}
