import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApiData } from './get-api-data';

describe('GetApiData', () => {
  let component: GetApiData;
  let fixture: ComponentFixture<GetApiData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetApiData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetApiData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
