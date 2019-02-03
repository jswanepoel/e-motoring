import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAttributesComponent } from './vehicle-attributes.component';

describe('VehicleAttributesComponent', () => {
  let component: VehicleAttributesComponent;
  let fixture: ComponentFixture<VehicleAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
