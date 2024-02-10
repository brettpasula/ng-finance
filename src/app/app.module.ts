import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashAccountListComponent } from './cash-account-list/cash-account-list.component';
import { CreateCashComponent } from './create-cash/create-cash.component';
import { CreateCreditComponent } from './create-credit/create-credit.component';
import { CreateInvestmentComponent } from './create-investment/create-investment.component';
import { CreditAccountListComponent } from './credit-account-list/credit-account-list.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { DialogErrorHandler } from './error-handler';
import { HomeComponent } from './home/home.component';
import { InvestmentAccountListComponent } from './investment-account-list/investment-account-list.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopToolbarComponent,
    CreditAccountListComponent,
    CashAccountListComponent,
    InvestmentAccountListComponent,
    CreateCashComponent,
    ListHeaderComponent,
    CreateCreditComponent,
    CreateInvestmentComponent,
    ErrorDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    AgChartsAngularModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTabsModule,
  ],
  providers: [{ provide: ErrorHandler, useClass: DialogErrorHandler }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
