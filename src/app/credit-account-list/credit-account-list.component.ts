import { Component, Input, ViewChild } from '@angular/core';
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
  @Input()
  creditAccountList: CreditAccount[] = [];

  public columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'name' },
    { field: 'creditLimit' },
    { field: 'creditAvailable' },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
}
