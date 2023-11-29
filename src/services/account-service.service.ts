import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CashAccount } from 'src/interfaces/cash-account';
import { CreditAccount } from 'src/interfaces/credit-account';
import { InvestmentAccount } from 'src/interfaces/investment-account';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private _httpClient: HttpClient;
  private _baseUrl: string = environment.apiUrl;

  constructor() {
    this._httpClient = inject(HttpClient);
  }

  getAllCreditAccounts(): Observable<CreditAccount[]> {
    return this._httpClient.get<CreditAccount[]>(
      this._baseUrl + 'credit_accounts'
    );
  }

  getAllCashAccounts(): Observable<CashAccount[]> {
    return this._httpClient.get<CashAccount[]>(this._baseUrl + 'cash_accounts');
  }

  getAllInvestmentAccounts(): Observable<InvestmentAccount[]> {
    return this._httpClient.get<InvestmentAccount[]>(
      this._baseUrl + 'investment_accounts'
    );
  }

  createCashAccount(cashAccount: CashAccount): Observable<CashAccount> {
    return this._httpClient.post<CashAccount>(
      this._baseUrl + 'cash_accounts',
      cashAccount
    );
  }

  deleteCashAccount(cashAccountId: number): Observable<any> {
    return this._httpClient.delete(
      this._baseUrl + 'cash_accounts/' + cashAccountId
    );
  }

  updateCashAccount(cashAccount: CashAccount): Observable<any> {
    return this._httpClient.put<CashAccount>(
      this._baseUrl + 'cash_accounts/' + cashAccount.id,
      cashAccount
    );
  }

  createCreditAccount(creditAccount: CreditAccount): Observable<CreditAccount> {
    return this._httpClient.post<CreditAccount>(
      this._baseUrl + 'credit_accounts',
      creditAccount
    );
  }

  deleteCreditAccount(creditAccountId: number): Observable<any> {
    return this._httpClient.delete(
      this._baseUrl + 'credit_accounts/' + creditAccountId
    );
  }

  updateCreditAccount(creditAccount: CreditAccount): Observable<any> { 
    return this._httpClient.put<CreditAccount>(
      this._baseUrl + 'credit_accounts/' + creditAccount.id,
      creditAccount
    )
  }
}
