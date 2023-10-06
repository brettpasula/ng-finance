import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { AgChart, AgChartOptions } from 'ag-charts-community';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { CashAccount } from 'src/interfaces/cash-account';
import { AccountService } from 'src/services/account-service.service';

@Component({
  selector: 'cash-account-list',
  templateUrl: './cash-account-list.component.html',
  styleUrls: ['./cash-account-list.component.scss'],
})
export class CashAccountListComponent implements OnInit {
  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
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
    resizable: true,
  };

  public cashAccounts?: CashAccount[];

  constructor() {
    this._accountService = inject(AccountService);
  }

  ngOnInit(): void {
    this._accountService
      .getAllCashAccounts()
      .subscribe((cashAccounts: CashAccount[]) => {
        this.cashAccounts = cashAccounts;
      });
  }

  onGridReady() {
    this.agGrid.api.sizeColumnsToFit();
  }
}
