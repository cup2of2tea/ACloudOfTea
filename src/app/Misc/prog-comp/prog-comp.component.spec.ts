import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgCompComponent } from './prog-comp.component';

describe('ProgCompComponent', () => {
  let component: ProgCompComponent;
  let fixture: ComponentFixture<ProgCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
