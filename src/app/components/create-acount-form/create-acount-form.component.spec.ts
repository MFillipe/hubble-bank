import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcountFormComponent } from './create-acount-form.component';

describe('CreateAcountFormComponent', () => {
  let component: CreateAcountFormComponent;
  let fixture: ComponentFixture<CreateAcountFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAcountFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAcountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
