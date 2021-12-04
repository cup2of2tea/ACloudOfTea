import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1_2Component } from './day1.component';

describe('Day1_2Component', () => {
  let component: Day1_2Component;
  let fixture: ComponentFixture<Day1_2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Day1_2Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1_2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
