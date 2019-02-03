import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionOfAssembledVehicleComponent } from './inspection-of-assembled-vehicle.component';

describe('InspectionOfAssembledVehicleComponent', () => {
  let component: InspectionOfAssembledVehicleComponent;
  let fixture: ComponentFixture<InspectionOfAssembledVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionOfAssembledVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionOfAssembledVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
