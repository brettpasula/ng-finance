import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CashAccount } from 'src/interfaces/cash-account';
import { AccountService } from 'src/services/account-service.service';

@Component({
  selector: 'create-cash',
  templateUrl: './create-cash.component.html',
  styleUrls: ['./create-cash.component.scss'],
})
export class CreateCashComponent {
  private _accountService: AccountService;
  private _router: Router;
  private _snackBar: MatSnackBar;
  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    value: new FormControl<number | null>(null, Validators.required),
  });

  constructor() {
    this._accountService = inject(AccountService);
    this._router = inject(Router);
    this._snackBar = inject(MatSnackBar);
  }

  onSubmit(): void {
    const cashAccount = <CashAccount>{
      name: this.formGroup.controls.name.value,
      value: this.formGroup.controls.value.value,
    };
    this._accountService.createCashAccount(cashAccount).subscribe({
      complete: () => {
        this._router.navigate(['/']);
        this._snackBar.open('Cash account created successfully', 'Dismiss');
      },
      error: () => {
        console.log('Something went wrong...');
        console.log(cashAccount);
      },
    });
  }
}
