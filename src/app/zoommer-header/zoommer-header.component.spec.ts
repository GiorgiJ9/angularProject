import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoommerHeaderComponent } from './zoommer-header.component';

describe('ZoommerHeaderComponent', () => {
  let component: ZoommerHeaderComponent;
  let fixture: ComponentFixture<ZoommerHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoommerHeaderComponent]
    });
    fixture = TestBed.createComponent(ZoommerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
