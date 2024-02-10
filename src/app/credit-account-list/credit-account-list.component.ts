import { Component, ViewChild, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AgGridAngular } from 'ag-grid-angular';
import {
  CellValueChangedEvent,
  ColDef,
  IRowNode,
  SelectionChangedEvent,
} from 'ag-grid-community';
import { CreditAccount } from 'src/interfaces/credit-account';
import { AccountService } from 'src/services/account-service.service';
import currencyValueFormatter from '../ag-grid/formatters/currency';
import numberValueParser from '../ag-grid/parsers/number';
import dateValueFormatter from '../ag-grid/formatters/date';
import dateValueParser from '../ag-grid/parsers/date';

@Component({
  selector: 'credit-account-list',
  templateUrl: './credit-account-list.component.html',
  styleUrls: ['./credit-account-list.component.scss'],
})
export class CreditAccountListComponent {
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  private _accountService: AccountService;
  private _snackBar: MatSnackBar;

  public columnDefs: ColDef[] = [
    {
      field: 'name',
      headerName: 'Name'
    },
    {
      field: 'creditLimit',
      headerName: 'Credit limit',
      valueParser: numberValueParser,
      valueFormatter: currencyValueFormatter,
    },
    {
      field: 'creditAvailable',
      headerName: 'Credit available',
      valueParser: numberValueParser,
      valueFormatter: currencyValueFormatter,
    },
    {
      field: 'balance',
      headerName: 'Balance',
      valueParser: numberValueParser,
      valueFormatter: currencyValueFormatter,
    },
    {
      field: 'annualFee',
      headerName: 'Annual fee',
      valueParser: numberValueParser,
      valueFormatter: currencyValueFormatter,
    },
    {
      field: 'statementDueDate',
      headerName: 'Statement due date',
      valueParser: dateValueParser,
      valueFormatter: dateValueFormatter,
    },
    {
      field: 'statementBalance',
      headerName: 'Statement balance',
      valueParser: numberValueParser,
      valueFormatter: currencyValueFormatter,
    },
    {
      field: 'lastPaymentDate',
      headerName: 'Last payment date',
      valueParser: dateValueParser,
      valueFormatter: dateValueFormatter,
    },
    {
      field: 'lastPaymentAmount',
      headerName: 'Last payment amount',
      valueParser: numberValueParser,
      valueFormatter: currencyValueFormatter,
    },
    {
      field: 'rewardsProgramDetails',
      headerName: 'Rewards program details',
      wrapText: true,
      autoHeight: true
    },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    editable: true,
    wrapHeaderText: true,
  };

  public creditAccounts?: CreditAccount[];
  public selectedRow?: IRowNode;

  constructor() {
    this._accountService = inject(AccountService);
    this._snackBar = inject(MatSnackBar);
  }

  ngOnInit(): void {
    this._accountService
      .getAllCreditAccounts()
      .subscribe((creditAccounts: CreditAccount[]) => {
        this.creditAccounts = creditAccounts;
        console.log(this.creditAccounts);
      });
  }

  onGridReady() {
    //this.agGrid.columnApi.autoSizeAllColumns();
  }

  onSelectionChanged(event: SelectionChangedEvent) {
    this.selectedRow = event.api.getSelectedNodes().pop();
  }

  rowSelected(): boolean {
    return !(this.selectedRow == null);
  }

  onClickDelete() {
    const id = this.selectedRow?.data.id;
    this._accountService.deleteCreditAccount(id).subscribe({
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        this.creditAccounts = this.creditAccounts?.filter((ca) => ca.id !== id);
        this.selectedRow = undefined;
        this._snackBar.open('Credit account deleted.', 'Dismiss', {
          duration: 5000,
        });
      },
    });
  }

  onValueChanged($event: CellValueChangedEvent) {
    this._accountService.updateCreditAccount($event.data).subscribe({
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        this._snackBar.open(
          `Credit account \"${$event.data.name}\" updated successfully.`,
          'Dismiss',
          { duration: 5000 }
        );
      },
    });
  }
}
