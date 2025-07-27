import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopContectualVariables } from './for-loop-contectual-variables';

describe('ForLoopContectualVariables', () => {
  let component: ForLoopContectualVariables;
  let fixture: ComponentFixture<ForLoopContectualVariables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForLoopContectualVariables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForLoopContectualVariables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
