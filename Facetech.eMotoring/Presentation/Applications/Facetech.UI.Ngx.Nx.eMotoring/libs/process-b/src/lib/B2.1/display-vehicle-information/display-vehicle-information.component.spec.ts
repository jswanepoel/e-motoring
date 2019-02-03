import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayVehicleInformationComponent } from './display-vehicle-information.component';

describe('DisplayVehicleInformationComponent', () => {
  let component: DisplayVehicleInformationComponent;
  let fixture: ComponentFixture<DisplayVehicleInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayVehicleInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayVehicleInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
