import { Component } from '@angular/core';
import { CashAccount } from 'src/interfaces/cash-account';
import { CreditAccount } from 'src/interfaces/credit-account';
import { InvestmentAccount } from 'src/interfaces/investment-account';
import { AccountService } from 'src/services/account-service.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  creditAccountList: CreditAccount[] = [];
  investmentAccountList: InvestmentAccount[] = [];
  cashAccountList: CashAccount[] = [];

  constructor(accountService: AccountService) {
    this.creditAccountList = accountService.getAllCreditAccounts();
    this.investmentAccountList = accountService.getAllInvestmentAccounts();
    this.cashAccountList = accountService.getAllCashAccounts();
  }
}
