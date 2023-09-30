import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashAccountListComponent } from './cash-account-list.component';

describe('CashAccountListComponent', () => {
  let component: CashAccountListComponent;
  let fixture: ComponentFixture<CashAccountListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashAccountListComponent]
    });
    fixture = TestBed.createComponent(CashAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
