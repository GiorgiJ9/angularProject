import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForCarsComponent } from './for-cars.component';

describe('ForCarsComponent', () => {
  let component: ForCarsComponent;
  let fixture: ComponentFixture<ForCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForCarsComponent]
    });
    fixture = TestBed.createComponent(ForCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
