import { ErrorHandler, inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ErrorDialogComponent } from "./error-dialog/error-dialog.component";
import { HttpErrorResponse } from "@angular/common/http";

export class DialogErrorHandler implements ErrorHandler {
    dialog: MatDialog;

    constructor() {
        this.dialog = inject(MatDialog);
    }
    handleError(error: HttpErrorResponse) {
        this.dialog.open(ErrorDialogComponent, { 
            data: { error: error.message }
        });
    }
}