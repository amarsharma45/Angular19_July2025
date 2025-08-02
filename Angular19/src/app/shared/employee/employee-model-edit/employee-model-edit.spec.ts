import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeModelEdit } from './employee-model-edit';

describe('EmployeeModelEdit', () => {
  let component: EmployeeModelEdit;
  let fixture: ComponentFixture<EmployeeModelEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeModelEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeModelEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
