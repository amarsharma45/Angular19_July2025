import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglalsPractice } from './singlals-practice';

describe('SinglalsPractice', () => {
  let component: SinglalsPractice;
  let fixture: ComponentFixture<SinglalsPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglalsPractice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglalsPractice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
