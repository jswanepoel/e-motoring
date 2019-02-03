import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalVehicleInformationComponent } from './additional-vehicle-information.component';

describe('AdditionalVehicleInformationComponent', () => {
  let component: AdditionalVehicleInformationComponent;
  let fixture: ComponentFixture<AdditionalVehicleInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalVehicleInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalVehicleInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
