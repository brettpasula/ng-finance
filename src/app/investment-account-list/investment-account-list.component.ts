import { Component, Input, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { InvestmentAccount } from 'src/interfaces/investment-account';

@Component({
  selector: 'investment-account-list',
  templateUrl: './investment-account-list.component.html',
  styleUrls: ['./investment-account-list.component.scss']
})
export class InvestmentAccountListComponent {
  @Input()
  investmentAccountList: InvestmentAccount[] = [];

  public columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'name' },
    { field: 'value' }
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
}
