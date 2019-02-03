import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureImportedVehicleComponent } from './capture-imported-vehicle.component';

describe('CaptureImportedVehicleComponent', () => {
  let component: CaptureImportedVehicleComponent;
  let fixture: ComponentFixture<CaptureImportedVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureImportedVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureImportedVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
