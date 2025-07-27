import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlflowElseIf } from './controlflow-else-if';

describe('ControlflowElseIf', () => {
  let component: ControlflowElseIf;
  let fixture: ComponentFixture<ControlflowElseIf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlflowElseIf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlflowElseIf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
