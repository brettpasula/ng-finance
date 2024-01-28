import { ErrorHandler, inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ErrorDialogComponent } from "./error-dialog/error-dialog.component";

export class DialogErrorHandler implements ErrorHandler {
    dialog: MatDialog;

    constructor() {
        this.dialog = inject(MatDialog);
    }
    handleError(error: any) {
        this.dialog.open(ErrorDialogComponent);
    }
}