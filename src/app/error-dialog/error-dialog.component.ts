import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent {
  public error: string;

  constructor() { 
    let matDialogData = inject(MAT_DIALOG_DATA);
    this.error = matDialogData.error;
  }
}
