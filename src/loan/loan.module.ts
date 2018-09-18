import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewLoanComponent } from './new-loan/new-loan.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, DashboardComponent, NewLoanComponent],
  exports: [LoginComponent, NewLoanComponent]
})
export class LoanModule { }
