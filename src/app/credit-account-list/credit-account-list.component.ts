import { Component, ViewChild, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { CreditAccount } from 'src/interfaces/credit-account';
import { AccountService } from 'src/services/account-service.service';

@Component({
  selector: 'credit-account-list',
  templateUrl: './credit-account-list.component.html',
  styleUrls: ['./credit-account-list.component.scss'],
})
export class CreditAccountListComponent {
  private _accountService: AccountService;

  public columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'name' },
    { field: 'creditLimit' },
    { field: 'creditAvailable' },
    { field: 'annualFee' },
    { field: 'rewardsProgramDetails' },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  public creditAccounts?: CreditAccount[];

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor() {
    this._accountService = inject(AccountService);
  }

  ngOnInit(): void {
    this._accountService
      .getAllCreditAccounts()
      .subscribe((creditAccounts: CreditAccount[]) => {
        this.creditAccounts = creditAccounts;
      });
  }

  onGridReady() {
    this.agGrid.api.sizeColumnsToFit();
  }
}
