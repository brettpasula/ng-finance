import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CashAccount } from 'src/interfaces/cash-account';
import { CreditAccount } from 'src/interfaces/credit-account';
import { InvestmentAccount } from 'src/interfaces/investment-account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor() {}

  private testInvestmentAccounts: InvestmentAccount[] = [
    {
      id: 1,
      name: 'Bank of Imaginary Land',
      value: 29543.25
    },
    {
      id: 2,
      name: 'SuperBank(TM) Investments',
      value: 9456.87
    },
    {
      id: 3,
      name: 'Exceptional Returns Bank',
      value: 1845.23
    },
  ];

  getAllCreditAccounts(): CreditAccount[] {
    const creditAccountData: CreditAccount[] = require('./mock-data/mock-credit-accounts.json'); 
    return creditAccountData;
  }

  getAllCashAccounts(): CashAccount[] { 
    const cashAccountData: CashAccount[] = require('./mock-data/mock-cash-accounts.json');
    return cashAccountData;
  }

  getAllInvestmentAccounts(): InvestmentAccount[] { 
    return this.testInvestmentAccounts;
  }

  createCashAccount(cashAccount: CashAccount) {
    const fileName = './mock-data/mock-cash-accounts.json';
    const cashAccountData: CashAccount[] = require(fileName);
    cashAccountData.push(cashAccount);
    const fs = require('fs');
    fs.writeFile(fileName, JSON.stringify(cashAccountData), (error: any) => { 
      console.log(error);
    })
  }
}
