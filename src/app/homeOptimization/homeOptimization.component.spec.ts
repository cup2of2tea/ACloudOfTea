import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOptimizationComponent } from './homeOptimization.component';

describe('HomeOptimization', () => {
  let component: HomeOptimizationComponent;
  let fixture: ComponentFixture<HomeOptimizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeOptimizationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
