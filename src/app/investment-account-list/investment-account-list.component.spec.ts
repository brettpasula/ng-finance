import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentAccountListComponent } from './investment-account-list.component';

describe('InvestmentAccountListComponent', () => {
  let component: InvestmentAccountListComponent;
  let fixture: ComponentFixture<InvestmentAccountListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentAccountListComponent]
    });
    fixture = TestBed.createComponent(InvestmentAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
