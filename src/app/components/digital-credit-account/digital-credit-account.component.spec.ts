import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalCreditAccountComponent } from './digital-credit-account.component';

describe('DigitalCreditAccountComponent', () => {
  let component: DigitalCreditAccountComponent;
  let fixture: ComponentFixture<DigitalCreditAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalCreditAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalCreditAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
