import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignerPermanentAddressDetailsComponent } from './foreigner-permanent-address-details.component';

describe('ForeignerPermanentAddressDetailsComponent', () => {
  let component: ForeignerPermanentAddressDetailsComponent;
  let fixture: ComponentFixture<ForeignerPermanentAddressDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeignerPermanentAddressDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignerPermanentAddressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
