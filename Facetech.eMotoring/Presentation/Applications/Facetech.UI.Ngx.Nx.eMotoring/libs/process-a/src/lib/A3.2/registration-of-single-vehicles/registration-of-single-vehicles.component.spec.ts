import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationOfSingleVehiclesComponent } from './registration-of-single-vehicles.component';

describe('RegistrationOfSingleVehiclesComponent', () => {
  let component: RegistrationOfSingleVehiclesComponent;
  let fixture: ComponentFixture<RegistrationOfSingleVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationOfSingleVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationOfSingleVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
