import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComplexityComponent } from './components/complexity/complexity.component';
import { ComponentsComponent } from './components/components.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { DigitalCreditAccountComponent } from './components/digital-credit-account/digital-credit-account.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecoveryPassComponent } from './components/recovery-pass/recovery-pass.component';
import { SimpleLifeComponent } from './components/simple-life/simple-life.component';
import { ZeroAnnuityComponent } from './components/zero-annuity/zero-annuity.component';

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
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
