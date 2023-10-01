import { Component, OnInit, inject } from '@angular/core';
import { CashAccount } from 'src/interfaces/cash-account';
import { CreditAccount } from 'src/interfaces/credit-account';
import { InvestmentAccount } from 'src/interfaces/investment-account';
import { AccountService } from 'src/services/account-service.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private _accountService: AccountService;
  creditAccountList: CreditAccount[] = [];
  investmentAccountList: InvestmentAccount[] = [];
  cashAccountList: CashAccount[] = [];

  constructor() {
    this._accountService = inject(AccountService);
  }

  ngOnInit(): void {
    // credit
    this._accountService
      .getAllCreditAccounts()
      .subscribe((creditAccounts: Object[]) => {
        for (let i = 0; i < creditAccounts.length; i++) {
          this.creditAccountList.push(creditAccounts[i] as CreditAccount);
        }
      });

      // investment
      this._accountService.getAllInvestmentAccounts()
      .subscribe((investmentAccounts: Object[]) => {
        for (let i = 0; i < investmentAccounts.length; i++) {
          this.investmentAccountList.push(investmentAccounts[i] as InvestmentAccount);
        }
      });
    
      // cash
      this._accountService
      .getAllCashAccounts()
      .subscribe((cashAccounts: Object[]) => {
        for (let i = 0; i < cashAccounts.length; i++) {
          this.cashAccountList.push(cashAccounts[i] as CashAccount);
        }
      });
  }
}
