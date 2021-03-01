import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecoveryPassComponent } from './components/recovery-pass/recovery-pass.component';
import { DigitalCreditAccountComponent } from './components/digital-credit-account/digital-credit-account.component';
import { ZeroAnnuityComponent } from './components/zero-annuity/zero-annuity.component';
import { ComplexityComponent } from './components/complexity/complexity.component';
import { SimpleLifeComponent } from './components/simple-life/simple-life.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateAcountFormComponent } from './components/create-acount-form/create-acount-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    PageNotFoundComponent,
    RecoveryPassComponent,
    DigitalCreditAccountComponent,
    ZeroAnnuityComponent,
    ComplexityComponent,
    SimpleLifeComponent,
    CreateAccountComponent,
    CreateAcountFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
