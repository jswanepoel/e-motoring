import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateRegistrationOfVehiclesComponent } from './initiate-registration-of-vehicles.component';

describe('InitiateRegistrationOfVehiclesComponent', () => {
  let component: InitiateRegistrationOfVehiclesComponent;
  let fixture: ComponentFixture<InitiateRegistrationOfVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiateRegistrationOfVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiateRegistrationOfVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
