import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {  CreateCashComponent } from './create-cash/create-cash.component';
import { CashAccountListComponent } from './cash-account-list/cash-account-list.component';
import { CreditAccountListComponent } from './credit-account-list/credit-account-list.component';
import { InvestmentAccountListComponent } from './investment-account-list/investment-account-list.component';
import { CreateCreditComponent } from './create-credit/create-credit.component';

// descending in specificity
const routes: Routes = [
  {
    path: 'credit-accounts',
    component: CreditAccountListComponent
  },
  {
    path: 'investment-accounts',
    component: InvestmentAccountListComponent
  },
  {
    path: 'cash-accounts',
    component: CashAccountListComponent
  },
  {
    path: 'create-cash',
    component: CreateCashComponent
  },
  {
    path: 'create-credit',
    component: CreateCreditComponent
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
