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
    return this._httpClient.get<CreditAccount[]>(this._baseUrl + 'credit');
  }

  getAllCashAccounts(): Observable<CashAccount[]> {
    return this._httpClient.get<CashAccount[]>(this._baseUrl + 'cash');
  }

  getAllInvestmentAccounts(): Observable<InvestmentAccount[]> {
    return this._httpClient.get<InvestmentAccount[]>(
      this._baseUrl + 'investment'
    );
  }

  createCashAccount(cashAccount: CashAccount): Observable<CashAccount> {
    return this._httpClient.post<CashAccount>(
      this._baseUrl + 'cash',
      cashAccount
    );
  }

  deleteCashAccount(cashAccountId: number): Observable<any> {
    return this._httpClient.delete(this._baseUrl + 'cash/' + cashAccountId);
  }

  updateCashAccount(cashAccount: CashAccount): Observable<any> {
    return this._httpClient.put<CashAccount>(
      this._baseUrl + 'cash/' + cashAccount.id,
      cashAccount
    );
  }

  createCreditAccount(creditAccount: CreditAccount): Observable<CreditAccount> {
    return this._httpClient.post<CreditAccount>(
      this._baseUrl + 'credit',
      creditAccount
    );
  }

  deleteCreditAccount(creditAccountId: number): Observable<any> {
    return this._httpClient.delete(this._baseUrl + 'credit/' + creditAccountId);
  }

  updateCreditAccount(creditAccount: CreditAccount): Observable<any> {
    return this._httpClient.put<CreditAccount>(
      this._baseUrl + 'credit/' + creditAccount.id,
      creditAccount
    );
  }
}
