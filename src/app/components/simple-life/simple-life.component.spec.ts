import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLifeComponent } from './simple-life.component';

describe('SimpleLifeComponent', () => {
  let component: SimpleLifeComponent;
  let fixture: ComponentFixture<SimpleLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
