import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AgGridAngular } from 'ag-grid-angular';
import {
  CellValueChangedEvent,
  ColDef,
  IRowNode,
  SelectionChangedEvent,
} from 'ag-grid-community';
import { CashAccount } from 'src/interfaces/cash-account';
import { AccountService } from 'src/services/account-service.service';
import currencyValueFormatter from '../ag-grid/formatters/currency';
import numberValueParser from '../ag-grid/parsers/number';

@Component({
  selector: 'cash-account-list',
  templateUrl: './cash-account-list.component.html',
  styleUrls: ['./cash-account-list.component.scss'],
})
export class CashAccountListComponent implements OnInit {
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  private _accountService: AccountService;
  private _snackBar: MatSnackBar;

  public columnDefs: ColDef[] = [
    { field: 'name' },
    {
      field: 'value',
      valueParser: numberValueParser,
      valueFormatter: currencyValueFormatter,
    },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    editable: true,
  };

  public cashAccounts?: CashAccount[];
  public selectedRow?: IRowNode;

  constructor() {
    this._accountService = inject(AccountService);
    this._snackBar = inject(MatSnackBar);
  }

  ngOnInit(): void {
    this._accountService
      .getAllCashAccounts()
      .subscribe((cashAccounts: CashAccount[]) => {
        this.cashAccounts = cashAccounts;
      });
  }

  onGridReady() {
    this.agGrid.columnApi.autoSizeAllColumns();
  }

  onSelectionChanged(event: SelectionChangedEvent) {
    this.selectedRow = event.api.getSelectedNodes().pop();
  }

  rowSelected(): boolean {
    return !(this.selectedRow == null);
  }

  onClickDelete() {
    const id = this.selectedRow?.data.id;
    this._accountService.deleteCashAccount(id).subscribe({
      error: () => {},
      complete: () => {
        this.cashAccounts = this.cashAccounts?.filter((ca) => ca.id !== id);
        this.selectedRow = undefined;
        this._snackBar.open('Cash account deleted.', 'Dismiss');
      },
    });
  }

  onCellValueChanged($event: CellValueChangedEvent) {
    this._accountService.updateCashAccount($event.data).subscribe({
      error: () => {},
      complete: () => {
        this._snackBar.open(
          `Cash account \"${$event.data.name}\" successfully updated.`,
          'Dismiss'
        );
      },
    });
  }
}
