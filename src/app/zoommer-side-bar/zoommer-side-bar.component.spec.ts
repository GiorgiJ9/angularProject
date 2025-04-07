import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoommerSideBarComponent } from './zoommer-side-bar.component';

describe('ZoommerSideBarComponent', () => {
  let component: ZoommerSideBarComponent;
  let fixture: ComponentFixture<ZoommerSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoommerSideBarComponent]
    });
    fixture = TestBed.createComponent(ZoommerSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
