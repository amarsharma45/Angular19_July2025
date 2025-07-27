import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsTests } from './events-tests';

describe('EventsTests', () => {
  let component: EventsTests;
  let fixture: ComponentFixture<EventsTests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsTests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsTests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
