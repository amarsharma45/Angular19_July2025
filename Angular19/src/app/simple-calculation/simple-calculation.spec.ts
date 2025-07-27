import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCalculation } from './simple-calculation';

describe('SimpleClaculation', () => {
  let component: SimpleCalculation;
  let fixture: ComponentFixture<SimpleCalculation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleCalculation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleCalculation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
