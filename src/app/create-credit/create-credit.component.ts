import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CreditAccount } from 'src/interfaces/credit-account';
import { AccountService } from 'src/services/account-service.service';

@Component({
  selector: 'create-credit',
  templateUrl: './create-credit.component.html',
  styleUrls: ['./create-credit.component.scss'],
})
export class CreateCreditComponent {
  private _accountService: AccountService;
  private _router: Router;
  private _snackBar: MatSnackBar;
  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    creditAvailable: new FormControl<number | null>(null, Validators.required),
    creditLimit: new FormControl<number | null>(null, Validators.required),
    annualFee: new FormControl<number | null>(null, Validators.required),
    rewardsProgramDetails: new FormControl(''),
  });

  constructor() {
    this._accountService = inject(AccountService);
    this._router = inject(Router);
    this._snackBar = inject(MatSnackBar);
  }

  onSubmit(): void {
    const creditAccount = <CreditAccount>{
      name: this.formGroup.controls.name.value,
      creditAvailable: this.formGroup.controls.creditAvailable.value,
      creditLimit: this.formGroup.controls.creditLimit.value,
      annualFee: this.formGroup.controls.annualFee.value,
      rewardsProgramDetails:
        this.formGroup.controls.rewardsProgramDetails.value,
    };
    this._accountService.createCreditAccount(creditAccount).subscribe({
      complete: () => {
        this._router.navigate(['/credit-accounts']);
        this._snackBar.open('Credit account created successfully.', 'Dismiss', {
          duration: 5000,
        });
      },
      error: () => {
        console.log('Something went wrong...');
        console.log(creditAccount);
      },
    });
  }
}
