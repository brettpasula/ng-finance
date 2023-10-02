import { Component, Input, OnInit, ViewChild, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { InvestmentAccount } from 'src/interfaces/investment-account';
import { AccountService } from 'src/services/account-service.service';

@Component({
  selector: 'investment-account-list',
  templateUrl: './investment-account-list.component.html',
  styleUrls: ['./investment-account-list.component.scss'],
})
export class InvestmentAccountListComponent implements OnInit {
  private _accountService: AccountService;

  public columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'name' },
    { field: 'value' },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  public investmentAccounts?: InvestmentAccount[];

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor() {
    this._accountService = inject(AccountService);
  }

  ngOnInit(): void {
    // investment
    this._accountService
      .getAllInvestmentAccounts()
      .subscribe((investmentAccounts: InvestmentAccount[]) => {
        this.investmentAccounts = investmentAccounts;
      });
  }
}
