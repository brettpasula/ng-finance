import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CashAccount } from 'src/interfaces/cash-account';
import { CreditAccount } from 'src/interfaces/credit-account';
import { InvestmentAccount } from 'src/interfaces/investment-account';
import * as mockCreditAccounts from './mock-data/mock-credit-accounts.json';
import * as mockCashAccounts from './mock-data/mock-cash-accounts.json';
import * as mockInvestmentAccounts from './mock-data/mock-investment-accounts.json';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  getAllCreditAccounts(): Observable<CreditAccount[]> {
    return of(mockCreditAccounts);
  }

  getAllCashAccounts(): Observable<CashAccount[]> { 
    return of(mockCashAccounts);
  }

  getAllInvestmentAccounts(): Observable<InvestmentAccount[]> { 
    return of(mockInvestmentAccounts);
  }
}
