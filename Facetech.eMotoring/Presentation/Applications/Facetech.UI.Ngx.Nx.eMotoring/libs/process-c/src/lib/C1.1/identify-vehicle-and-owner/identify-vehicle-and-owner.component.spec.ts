import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyVehicleAndOwnerComponent } from './identify-vehicle-and-owner.component';

describe('IdentifyVehicleAndOwnerComponent', () => {
  let component: IdentifyVehicleAndOwnerComponent;
  let fixture: ComponentFixture<IdentifyVehicleAndOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyVehicleAndOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyVehicleAndOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
