import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroAnnuityComponent } from './zero-annuity.component';

describe('ZeroAnnuityComponent', () => {
  let component: ZeroAnnuityComponent;
  let fixture: ComponentFixture<ZeroAnnuityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeroAnnuityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroAnnuityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
