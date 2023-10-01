import { Component, Input, ViewChild, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { CashAccount } from 'src/interfaces/cash-account';

@Component({
  selector: 'cash-account-list',
  templateUrl: './cash-account-list.component.html',
  styleUrls: ['./cash-account-list.component.scss'],
})
export class CashAccountListComponent {
  @Input()
  cashAccountList: CashAccount[] = [];

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

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
}
