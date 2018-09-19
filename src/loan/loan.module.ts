import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoanRoutingModule } from './loan-routing.module';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewLoanComponent } from './new-loan/new-loan.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoanRoutingModule
  ],
  declarations: [LandingComponent, LoginComponent, DashboardComponent, NewLoanComponent],
  exports: [LoginComponent, NewLoanComponent, LandingComponent]
})
export class LoanModule { }
