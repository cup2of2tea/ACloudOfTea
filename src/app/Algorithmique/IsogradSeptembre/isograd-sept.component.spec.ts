import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsogradSeptembreComponent } from './isograd-sept.component';

describe('IsogradSeptembreComponent', () => {
  let component: IsogradSeptembreComponent;
  let fixture: ComponentFixture<IsogradSeptembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IsogradSeptembreComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsogradSeptembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
