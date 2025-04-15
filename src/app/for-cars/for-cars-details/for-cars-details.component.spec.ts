import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForCarsDetailsComponent } from './for-cars-details.component';

describe('ForCarsDetailsComponent', () => {
  let component: ForCarsDetailsComponent;
  let fixture: ComponentFixture<ForCarsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForCarsDetailsComponent]
    });
    fixture = TestBed.createComponent(ForCarsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
