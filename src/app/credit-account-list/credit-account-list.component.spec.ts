import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditAccountListComponent } from './credit-account-list.component';

describe('CreditAccountListComponent', () => {
  let component: CreditAccountListComponent;
  let fixture: ComponentFixture<CreditAccountListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditAccountListComponent],
    });
    fixture = TestBed.createComponent(CreditAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
