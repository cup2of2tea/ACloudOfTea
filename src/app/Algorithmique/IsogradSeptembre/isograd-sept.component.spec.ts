import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsogradSeptComponent } from './isograd-sept.component';

describe('IsogradSeptComponent', () => {
  let component: IsogradSeptComponent;
  let fixture: ComponentFixture<IsogradSeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IsogradSeptComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsogradSeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
