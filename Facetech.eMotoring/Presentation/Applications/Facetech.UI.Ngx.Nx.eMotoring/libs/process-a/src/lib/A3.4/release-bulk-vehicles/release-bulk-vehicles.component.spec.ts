import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseBulkVehiclesComponent } from './release-bulk-vehicles.component';

describe('ReleaseBulkVehiclesComponent', () => {
  let component: ReleaseBulkVehiclesComponent;
  let fixture: ComponentFixture<ReleaseBulkVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseBulkVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseBulkVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
