import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGame } from './counter-game';

describe('CounterGame', () => {
  let component: CounterGame;
  let fixture: ComponentFixture<CounterGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
