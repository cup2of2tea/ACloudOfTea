import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1_3Component } from './day1_3.component';

describe('Day1_3Component', () => {
  let component: Day1_3Component;
  let fixture: ComponentFixture<Day1_3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Day1_3Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1_3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
