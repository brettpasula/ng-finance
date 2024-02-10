import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCashComponent } from './create-cash/create-cash.component';
import { CreateCreditComponent } from './create-credit/create-credit.component';
import { CreateInvestmentComponent } from './create-investment/create-investment.component';
import { HomeComponent } from './home/home.component';

// descending in specificity
const routes: Routes = [
  {
    path: 'create-credit',
    component: CreateCreditComponent,
  },
  {
    path: 'create-cash',
    component: CreateCashComponent,
  },
  {
    path: 'create-investment',
    component: CreateInvestmentComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
