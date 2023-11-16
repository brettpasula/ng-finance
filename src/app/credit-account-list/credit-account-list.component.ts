import { Component, ViewChild, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AgGridAngular } from 'ag-grid-angular';
import {
  CellValueChangedEvent,
  ColDef,
  IRowNode,
  SelectionChangedEvent,
  ValueFormatterParams,
  ValueParserParams,
} from 'ag-grid-community';
import { CreditAccount } from 'src/interfaces/credit-account';
import { AccountService } from 'src/services/account-service.service';

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
    { field: 'name', checkboxSelection: true },
    {
      field: 'creditLimit',
      valueParser: this.numberValueParser,
      valueFormatter: this.currencyValueFormatter,
    },
    {
      field: 'creditAvailable',
      valueParser: this.numberValueParser,
      valueFormatter: this.currencyValueFormatter,
    },
    {
      field: 'balance',
      valueGetter: (params) =>
        (params.data.creditLimit - params.data.creditAvailable).toFixed(2),
      valueFormatter: this.currencyValueFormatter,
    },
    {
      field: 'annualFee',
      valueParser: this.numberValueParser,
      valueFormatter: this.currencyValueFormatter,
    },
    { field: 'lastStatementDate' },
    {
      field: 'lastStatementBalance',
      valueParser: this.numberValueParser,
      valueFormatter: this.currencyValueFormatter,
    },
    { field: 'lastPaymentDate' },
    {
      field: 'lastPaymentAmount',
      valueParser: this.numberValueParser,
      valueFormatter: this.currencyValueFormatter,
    },
    { field: 'rewardsProgramDetails', wrapText: true, autoHeight: true },
  ];

  numberValueParser(params: ValueParserParams) {
    return Number(params.newValue);
  }

  currencyValueFormatter(params: ValueFormatterParams) {
    if (params.value == null) return '';
    const canadianCurrencyFormatter = new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
    });
    return canadianCurrencyFormatter.format(params.value);
  }

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    editable: true,
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
      });
  }

  onGridReady() {
    //this.agGrid.api.sizeColumnsToFit();
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
        this._snackBar.open('Credit account deleted.', 'Dismiss');
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
          'Dismiss'
        );
      },
    });
  }
}
