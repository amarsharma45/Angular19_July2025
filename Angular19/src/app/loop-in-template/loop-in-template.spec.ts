import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopInTemplate } from './loop-in-template';

describe('LoopInTemplate', () => {
  let component: LoopInTemplate;
  let fixture: ComponentFixture<LoopInTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoopInTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoopInTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
