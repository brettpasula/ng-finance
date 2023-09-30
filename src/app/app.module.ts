import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { CreditAccountListComponent } from './credit-account-list/credit-account-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { CashAccountListComponent } from './cash-account-list/cash-account-list.component';
import { InvestmentAccountListComponent } from './investment-account-list/investment-account-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopToolbarComponent,
    CreditAccountListComponent,
    CashAccountListComponent,
    InvestmentAccountListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
