import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionOfVehiclesComponent } from './inspection-of-vehicles.component';

describe('InspectionOfVehiclesComponent', () => {
  let component: InspectionOfVehiclesComponent;
  let fixture: ComponentFixture<InspectionOfVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionOfVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionOfVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
